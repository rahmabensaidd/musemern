import React from 'react'
import { Container } from 'react-bootstrap';
import "./Presentation.css"
const Presentation = () => {
  return (
    <div className='iframe-container'>
    <iframe
        loading="lazy"
        style={{ width: "100%", height: "100%", top: 0, left: 0, border: "none", padding: 0, margin: 0}}
        src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGDRE3k-_A&#x2F;JeFPrKCmFPOg1C2jfoubMw&#x2F;view?embed"
        allowFullScreen
        allow="fullscreen">
      </iframe>
    </div>
  )
}

export default Presentation
