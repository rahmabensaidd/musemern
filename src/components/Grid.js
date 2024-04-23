import React, { useState, useEffect } from "react";
import Rating from "./Rating";
import { BsTrashFill } from "react-icons/bs";
import axios from "axios";
import './btnd.css';
import Heart from "./Heart.js";

const Grid = ({ photos, setUpdateUI }) => {
  const [photosList, setPhotosList] = useState(photos);

  useEffect(() => {
    setPhotosList(photos);
  }, [photos]);

  const deletePhoto = (_id) => {
    axios
      .delete(`http://localhost:5000/api/delete/${_id}`)
      .then((res) => {
        console.log("Photo deleted successfully");
        axios
          .get("http://localhost:5000/api/get")
          .then((res) => {
            console.log(res.data);
            setPhotosList(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Notre galerie</h1>
      <div className="grid">
        {photosList.map(({ photo, _id }) => (
          <div key={_id} className="grid__item">
            {photo ? (
              <>
                <img
                  src={`http://localhost:5000/uploads/${photo}`}
                  alt="grid_image"
                />
                <Rating />
                {/* Inclure le composant Heart ici */}
                <Heart />
                <button onClick={() => deletePhoto(_id)} className="buttonn">
                  <BsTrashFill style={{ color: "gray" }} />
                </button>
              </>
            ) : (
              <p>No image available</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Grid;
