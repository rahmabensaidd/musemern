import { useEffect, useState } from "react";
import Button from "../components/Button";
import Motivation from "../components/Motivation"
import Grid from "../components/Grid";

import axios from "axios";

function Ajoutez() {
  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, [updateUI]);


  return (
    <div className="App">
      
   
      <div >
     

     <br></br>
     <hr></hr>
     <br></br>
  <Motivation/>
  <br></br>
 
  <hr></hr>
     <div style={{ backgroundImage: `url(${require('../assets/images/t12.jpg')})` }}>
       <br></br>
      
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
 <h1>AJOUTEZ A LA GALERIE DE MUSEE</h1> 
  <br></br>
  
  <br></br>
  
   <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <hr></hr>
   </div>
   <br></br>
   
     <Grid photos={photos} />
  
      <Button setUpdateUI={setUpdateUI} />
  <br></br>
  <br>
</br>

<br></br>
  <div style={{ 
       backgroundImage: `url(${require('../assets/images/f2.jpg')})`, // Ajoutez une virgule ici
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       height: '500px',
        width:'100%',

       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       textAlign: 'center',
       color: 'white',
       fontSize: '18px',
       // Applique un flou de 5 pixels à l'image de fond
     }}>
     
   </div>
   <br></br>
   <hr>
   </hr>
   <br></br>
   </div>
    </div>

  );
}

export default Ajoutez;