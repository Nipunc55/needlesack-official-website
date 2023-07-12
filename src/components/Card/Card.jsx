import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const SquareCard = ({ videoUrl, imageUrl ,gameId}) => {
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
    navigate(`/game-loader/${gameId}`);
  }

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClicked}
    >
      {isPlaying ? (
        <video className="square-card-video" src={videoUrl} autoPlay loop muted />
      ) : (
        <img className="square-card-image" src={imageUrl} alt="Card" />
      )}
    </div>
  );
};

export default SquareCard;
