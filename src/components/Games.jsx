
import SquareCard from './Card/Card'


const gameList = [{videoUrl:"https://play-games.googleusercontent.com/vp/mp4/1280x720/148Byz38_jM.mp4",
imageUrl:"https://play-lh.googleusercontent.com/KcAuhUl46N3zr6L0UGIi-m0n7RlGLCRo6-G6HG2dNHb-zL76Y5T8XEex3moZx0o8_Q=w240-h480-rw",
gameId:1,
gameName:"wheelgame",
orientation:"landscape"
}
,{videoUrl:"https://play-games.googleusercontent.com/vp/mp4/1280x720/xANWQb5cgvg.mp4",
imageUrl:"https://play-lh.googleusercontent.com/OU2hCZUnoTuzXECIsyEncU0eiW8E0_6QDQxggppwp5iRxOZs_T2jyricqLanGIgaqt0=w240-h480-rw",
gameId:2,
gameName:"airforce",
orientation:"portrait"
},{videoUrl:"https://play-games.googleusercontent.com/vp/mp4/1280x720/MxzBju5mgHQ.mp4",
imageUrl:"https://play-lh.googleusercontent.com/NT-OSgIaYHcXakVJ83koTtly-TgbQDJSbt1JhHLIbakzkfb3Ynbc7qCpWLeCIRAwig=w240-h480-rw",
gameId:3,
gameName:"Build",
orientation:"landscape"
}]
export default function Games() {

  return (
    <div className='d-flex flex-wrap flex-derection-coloumn'>
        {gameList.map((game) => (
          <SquareCard key={game.gameId} videoUrl={game.videoUrl} imageUrl={game.imageUrl} gameId={game.gameId} gameName={game.gameName} orientation={game.orientation}/>
        ))}
    </div>
  )
}
