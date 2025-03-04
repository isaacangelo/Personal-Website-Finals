import { useState } from 'react'
import './Gallery.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      src: "/src/PhotoGalleryImages/Photogallery1.webp",
      title: "Photo 1",
      category: "Gallery"
    },
    {
      id: 2,
      src: "/src/PhotoGalleryImages/photogallery2.webp",
      title: "Photo 2",
      category: "Gallery"
    },
    {
      id: 3,
      src: "/src/PhotoGalleryImages/photogallery3.webp",
      title: "Photo 3",
      category: "Gallery"
    },
    {
      id: 4,
      src: "/src/PhotoGalleryImages/photogallery4.webp",
      title: "Photo 4",
      category: "Gallery"
    }
  ]

  return (
    <div className="gallery-container">
      <h1 className="section-title">Photo Gallery</h1>

      <div className="gallery-grid">
        {images.map(image => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.title} />
            <div className="image-overlay">
              <h3>{image.title}</h3>
              <span>{image.category}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <span>{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
