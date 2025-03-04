import { createContext, useContext, useState, useRef, useEffect } from 'react'

// Import song photos
import waveToEarthPhoto from '../SongPhotos/Wave to earth Love.jpg'
import chaseShakurPhoto from '../SongPhotos/chase shakur too far.jpg'
import honne3amPhoto from '../SongPhotos/honne 3am.jpg'
import honneDay1Photo from '../SongPhotos/honne day1.jpg'
import honneWarmPhoto from '../SongPhotos/honne warm in the cold night.jpg'

// Import songs
import waveToEarthSong from '../MusicSongs/wave to earth - love. (Official Lyric Video).mp3'
import chaseShakurSong from '../MusicSongs/Chase Shakur - Too Far Close.mp3'
import honne3amSong from '../MusicSongs/HONNE - 3am.mp3'
import honneDay1Song from '../MusicSongs/HONNE - Day 1.mp3'
import honneWarmSong from '../MusicSongs/HONNE - Warm On A Cold Night (LYRICS).mp3'

const MusicContext = createContext()

export const songs = [
  {
    title: 'love.',
    artist: 'Wave to Earth',
    photo: waveToEarthPhoto,
    audio: waveToEarthSong
  },
  {
    title: 'Too Far Close',
    artist: 'Chase Shakur',
    photo: chaseShakurPhoto,
    audio: chaseShakurSong
  },
  {
    title: '3am',
    artist: 'HONNE',
    photo: honne3amPhoto,
    audio: honne3amSong
  },
  {
    title: 'Day 1',
    artist: 'HONNE',
    photo: honneDay1Photo,
    audio: honneDay1Song
  },
  {
    title: 'Warm On A Cold Night',
    artist: 'HONNE',
    photo: honneWarmPhoto,
    audio: honneWarmSong
  }
]

export function MusicProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isShuffled, setIsShuffled] = useState(false)
  const [shuffledIndices, setShuffledIndices] = useState([])
  const audioRef = useRef(null)

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, currentSong])

  useEffect(() => {
    const audio = audioRef.current
    const updateProgress = () => {
      const duration = audio.duration
      const currentTime = audio.currentTime
      setProgress((currentTime / duration) * 100)
    }

    audio.addEventListener('timeupdate', updateProgress)
    return () => audio.removeEventListener('timeupdate', updateProgress)
  }, [])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleRewind = () => {
    const audio = audioRef.current
    audio.currentTime = Math.max(0, audio.currentTime - 10)
  }

  const handleShuffle = () => {
    if (!isShuffled) {
      const indices = Array.from({ length: songs.length }, (_, i) => i)
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[indices[i], indices[j]] = [indices[j], indices[i]]
      }
      setShuffledIndices(indices)
    } else {
      setShuffledIndices([])
    }
    setIsShuffled(!isShuffled)
  }

  const getNextSongIndex = () => {
    if (isShuffled) {
      const currentIndex = shuffledIndices.indexOf(currentSong)
      return shuffledIndices[(currentIndex + 1) % songs.length]
    }
    return (currentSong + 1) % songs.length
  }

  const getPreviousSongIndex = () => {
    if (isShuffled) {
      const currentIndex = shuffledIndices.indexOf(currentSong)
      return shuffledIndices[currentIndex === 0 ? songs.length - 1 : currentIndex - 1]
    }
    return currentSong === 0 ? songs.length - 1 : currentSong - 1
  }

  const handlePrevious = () => {
    setCurrentSong(getPreviousSongIndex())
    setIsPlaying(true)
  }

  const handleNext = () => {
    setCurrentSong(getNextSongIndex())
    setIsPlaying(true)
  }

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget
    const clickPosition = e.nativeEvent.offsetX
    const progressBarWidth = progressBar.offsetWidth
    const newProgress = (clickPosition / progressBarWidth) * 100
    const newTime = (audioRef.current.duration * newProgress) / 100
    audioRef.current.currentTime = newTime
    setProgress(newProgress)
  }

  return (
    <MusicContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        progress,
        isShuffled,
        audioRef,
        handlePlayPause,
        handleRewind,
        handleShuffle,
        handlePrevious,
        handleNext,
        handleProgressClick
      }}
    >
      {children}
      <audio
        ref={audioRef}
        src={songs[currentSong].audio}
        onEnded={handleNext}
      />
    </MusicContext.Provider>
  )
}

export function useMusic() {
  return useContext(MusicContext)
}