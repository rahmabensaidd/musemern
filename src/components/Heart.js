import React, { useState } from 'react';
import { faHeart as HeartSolid, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Heart.css';


const Heart = () => {
    const [isLiked, setIsLiked] = useState(false); // État pour suivre si le cœur est aimé ou non
    const [bounceState, setBounceState] = useState(false); // État pour suivre l'état de l'animation de rebond

    const toggleLike = () => {
        setIsLiked(!isLiked); // Inverse l'état du cœur (aimé/non aimé)
        setBounceState(true); // Active l'animation de rebond
        setTimeout(() => {
            setBounceState(false); // Désactive l'animation de rebond après un court délai
        }, 600);

        // Appel de l'API "like photo" avec Axios
    
    };

    return (
        <div className="heart-container">
            {/* Utilisation conditionnelle de l'icône en fonction de l'état de like */}
            <FontAwesomeIcon
                icon={isLiked ? HeartSolid : faHeart}
                className={`heart ${bounceState ? 'bounce' : ''} ${isLiked ? 'liked' : ''}`}
                onClick={toggleLike}
            />
        </div>
    );
};

export default Heart;
