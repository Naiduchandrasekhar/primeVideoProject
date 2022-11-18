// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  return (
    <div className="mainBg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="primeVideoImage"
      />
      <div className="itemsDiv">
        <h1>Action Movies</h1>
        <MoviesSlider itemsList={actionMovieList} />
        <h1>Comedy Movies</h1>
        <MoviesSlider itemsList={comedyMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo
