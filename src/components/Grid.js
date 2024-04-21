import React, { useState, useEffect } from "react";
import Rating from "./Rating";
import { BsTrashFill } from "react-icons/bs";
import axios from "axios";
import './btnd.css';

const Grid = ({ photos, setUpdateUI }) => {
  const [photosList, setPhotosList] = useState(photos);

  useEffect(() => {
    setPhotosList(photos); // Mettre à jour la liste des photos lorsque les photos changent
  }, [photos]);

  const deletePhoto = (_id) => {
    axios
      .delete(`http://localhost:5000/api/delete/${_id}`)
      .then((res) => {
        console.log("Photo deleted successfully");
        // Mettre à jour la liste des photos après la suppression
        axios
          .get("http://localhost:5000/api/get")
          .then((res) => {
            console.log(res.data);
            setPhotosList(res.data); // Mettre à jour la liste des photos après la suppression
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
                {/* Passer l'ID de la photo au lieu de la photo entière */}
                <Rating />
                <button onClick={() => deletePhoto(_id)} className="buttonn">
                  {/* Supprimez la photo lors du clic sur le bouton */}
                  <BsTrashFill style={{ color: "red" }} />
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
