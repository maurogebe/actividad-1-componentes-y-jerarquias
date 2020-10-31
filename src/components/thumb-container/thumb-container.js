import React from "react";

/* Importar los componentes */
import VideoThumbnail from './video-thumbnail'


/* Importar los imagenes de los videos */
import video1 from '../../images/video1.jpg'
import video2 from '../../images/video2.jpg'
import video3 from '../../images/video3.jpg'
import video4 from '../../images/video4.jpg'
import video5 from '../../images/video5.jpg'
import video6 from '../../images/video6.jpg'
import video7 from '../../images/video7.jpg'
import video8 from '../../images/video8.jpg'




const imagesVideo = [
  {
    image: video1
  },
  {
    image: video2
  },
  {
    image: video3
  },
  {
    image: video4
  },
  {
    image: video5
  },
  {
    image: video6
  },
  {
    image: video7
  },
  {
    image: video8
  },
]

export function ThumbContainer() {
  return (
  <div className="thumb-container">
    {
      imagesVideo.map((imageVideo) => <VideoThumbnail image={imageVideo.image}/>)
    }
  </div>
  )
}
