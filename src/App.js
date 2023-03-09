import {Component} from 'react'

import {AiOutlineDelete} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'

import './App.css'

const initialTracksList = [
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
  },
  {
    id: '40f97965-ff45-469e-a635-b2ef9f1642ed',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shape-of-you-img.png',
    name: 'Shape of You',
    genre: 'Divide',
    duration: '4:24',
  },
  {
    id: '782f916b-4056-44ec-a95f-5115c3f84904',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-visiting-hours.png',
    name: 'Visiting Hours',
    genre: 'Folk-Pop',
    duration: '3:49',
  },
  {
    id: 'fcf0dc77-3427-457c-9ee0-91b1dc39fece',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shivers-img.png',
    name: 'Shivers',
    genre: 'Dance-Pop',
    duration: '3:58',
  },
  {
    id: '9c1bb890-d4d5-4edf-9d95-6959d716b442',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-bad-habits-img.png',
    name: 'Bad Habits',
    genre: 'Dance-Pop',
    duration: '4:01',
  },
  {
    id: '2216db9c-647f-4814-b880-179740e4d748',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-castle-on-the-hill-img.png',
    name: 'Castle on the Hill',
    genre: 'Pop&Rock',
    duration: '4:48',
  },
  {
    id: 'a5e30966-b760-4660-bf08-073135f7d010',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-happier-img.png',
    name: 'Happier',
    genre: 'Pop',
    duration: '3:36',
  },
  {
    id: '2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-photograph-img.png',
    name: 'Photograph',
    genre: 'Folk music',
    duration: '4:26',
  },
  {
    id: 'efd3d621-2c05-4941-acdc-0a1a0786bc53',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-galway-girl-img.png',
    name: 'Galway Girl',
    genre: 'Pop',
    duration: '3:20',
  },
  {
    id: 'e4b8e3b8-7776-4c09-8abc-ba328a8babe9',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-i-dont-care-img.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:38',
  },
]

// Replace your code here
const PlayList = props => {
  const {listItem, deleteItem} = props
  const {imageUrl, name, genre, duration, id} = listItem

  const clickDeleteIcon = () => {
    deleteItem(id)
  }

  return (
    <li className="list-container">
      <div className="left-container">
        <img src={imageUrl} className="img" alt="track" />
        <div className="name-container">
          <p className="name">{name}</p>
          <p className="genre-text">{genre}</p>
        </div>
      </div>
      <div className="right-container">
        <p className="duration">{duration}</p>
        <button
          className="button"
          onClick={clickDeleteIcon}
          data-testid="delete"
        >
          <AiOutlineDelete className="icon-of-delete" />
        </button>
      </div>
    </li>
  )
}

class App extends Component {
  state = {TrackList: initialTracksList, searchValue: ''}

  changeValue = event => {
    this.setState({searchValue: event.target.value})
  }

  deleteItem = id => {
    this.setState(privwesValue => ({
      TrackList: privwesValue.TrackList.filter(echValue => echValue.id !== id),
    }))
  }

  render() {
    const {TrackList, searchValue} = this.state
    const updateList = TrackList.filter(echValue =>
      echValue.name.includes(searchValue),
    )
    return (
      <div className="bg-color">
        <div className="bg-img">
          <h1 className="singer-name">Ed Sheeran</h1>
          <p className="singer-text">Singer</p>
        </div>
        <div className="bottom-container">
          <div className="container-of-playList">
            <h1 className="play-list-text">Songs Playlist</h1>
            <div className="search-container">
              <input
                type="search"
                className="input"
                placeholder="Search"
                onChange={this.changeValue}
                value={searchValue}
              />
              <div className="search-icon-container">
                <FiSearch className="search-icon" />
              </div>
            </div>
          </div>
          {updateList.length !== 0 ? (
            <ul className="un-order-list">
              {updateList.map(echValue => (
                <PlayList
                  listItem={echValue}
                  key={echValue.id}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          ) : (
            <div className="no-img-container">
              <p className="no-img-text">No Songs Found</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
