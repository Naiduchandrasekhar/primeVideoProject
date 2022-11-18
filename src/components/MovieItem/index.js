// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <div className="thumbnail">
            <img src={thumbnailUrl} alt="thumbnail" />
          </div>
        }
      >
        {close => (
          <div className="videoContainer">
            <div className="video">
              <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
            </div>
            <button
              type="button"
              onClick={() => close()}
              className="closeIconButton"
            >
              <IoMdClose />
            </button>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
