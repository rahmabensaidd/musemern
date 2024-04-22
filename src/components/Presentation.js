import React from 'react'
import { Container } from 'react-bootstrap';
import "./Presentation.css"
const Presentation = () => {
  return (
    <div className='iframe-container'>
    <iframe
        loading="lazy"
        style={{ width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0}}
        src="https://www.canva.com/design/DAGCnsHvVZs/0JeMFrApH8IVT-Zm6xob-g/view?embed"
        allowFullScreen
        allow="fullscreen">
      </iframe>
    </div>
  )
}

export default Presentation
