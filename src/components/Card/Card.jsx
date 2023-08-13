import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const SquareCard = ({ videoUrl, imageUrl ,gameId,gameName,orientation}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    console.log("gameId",gameId);
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
  };
  const onClicked = () => {
 
      const queryParams = new URLSearchParams();
  queryParams.set('gameName', gameName);
  queryParams.set('orientation', orientation);
 const queryString = queryParams.toString();


    navigate(`/game-loader?${queryString}`);
  }

  return (
    <div
      className={`card `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClicked}
    >
      {isPlaying ? (
        <video className={`square-card-video card-${orientation}`} src={videoUrl} autoPlay loop muted />
      ) : (
        <img className={`square-card-image card-${orientation}`} src={imageUrl} alt="Card" />
      )}
    </div>
  );
};

export default SquareCard;
