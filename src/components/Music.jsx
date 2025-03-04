import './Music.css'
import { useMusic } from '../context/MusicContext'
import { songs } from '../context/MusicContext'

function Music() {
  const {
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
  } = useMusic()

  const handleVolumeChange = (e) => {
    if (audioRef && audioRef.current) {
      audioRef.current.volume = e.target.value / 100
    }
  }

  return (
    <div className="music-container">
      <h1 className="section-title">Music Player</h1>
      <div className="music-player">
        <div className="album-cover">
          <img
            src={songs[currentSong].photo}
            alt={songs[currentSong].title}
            className={isPlaying ? 'spinning' : ''}
          />
        </div>
        <div className="song-info">
          <h2>{songs[currentSong].title}</h2>
          <p>{songs[currentSong].artist}</p>
        </div>
        <div className="progress-bar" onClick={handleProgressClick}>
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="controls">
          <button onClick={handlePrevious}>
            <i className="fas fa-backward"></i>
          </button>
          <button onClick={handleRewind}>
            <i className="fas fa-undo"></i>
          </button>
          <button onClick={handlePlayPause}>
            <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
          </button>
          <button onClick={handleShuffle} className={isShuffled ? 'active' : ''}>
            <i className="fas fa-random"></i>
          </button>
          <button onClick={handleNext}>
            <i className="fas fa-forward"></i>
          </button>
        </div>

        <div className="volume-control">
          <i className="fas fa-volume-down"></i>
          <input 
            type="range" 
            min="0" 
            max="100" 
            defaultValue="80" 
            className="volume-slider"
            onChange={handleVolumeChange}
          />
          <i className="fas fa-volume-up"></i>
        </div>
      </div>
      <div className="playlist">
        <h2>Playlist</h2>
        <div className="song-list">
          {songs.map((song, index) => (
            <div
              key={index}
              className={`song-item ${currentSong === index ? 'active' : ''}`}
              onClick={() => {
                setCurrentSong(index)
                setIsPlaying(true)
              }}
            >
              <img src={song.photo} alt={song.title} />
              <div className="song-details">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Music