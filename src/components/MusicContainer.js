import React, { useState } from 'react'
import '../styles/MusicContainer.scss'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'
import song1 from '../mp3/song1.mp3'
import song2 from '../mp3/song2.mp3'
import song3 from '../mp3/song3.mp3'
import 'animate.css';

const playlist = [song1, song2, song3]

const MusicContainer = () => {
  const [currentSong, setCurrentSong] = useState(playlist[0])
  const [hideMusic, setHideMusic] = useState(true)

  const handleClickPrevious = () => {
    if(currentSong === playlist[0]) {
      setCurrentSong(playlist[2])
    } else if (currentSong === playlist[1]) {
      setCurrentSong(playlist[0])
    } else {
      setCurrentSong(playlist[1])
    }
  }

  const handleClickNext = () => {
    if(currentSong === playlist[0]) {
      setCurrentSong(playlist[1])
    } else if (currentSong === playlist[1]) {
      setCurrentSong(playlist[2]) 
    } else {
      setCurrentSong(playlist[0])
    }
  }  

  const toggleMusic = () => {
    if(hideMusic === true) {
      setHideMusic(false)
    } else {
      setHideMusic(true)
    }
  }

  const showHide = hideMusic ?
  <div>
    <AudioPlayer
      style={{display: "none"}}
      autoPlay
      src={currentSong}
      onPlay={e => console.log("onPlay")}
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      showSkipControls={true}
    />
  </div> :   
  <div>  
  <AudioPlayer
    autoPlay
    src={currentSong}
    onPlay={e => console.log("onPlay")}
    onClickPrevious={handleClickPrevious}
    onClickNext={handleClickNext}
    showSkipControls={true}
  />
</div> 

  return (
    <div className="audio" style={{transition: ".4s"}}>
      {showHide}
      <button style={{transition: ".4s"}} className="toggle-music" onClick={toggleMusic}>Beats</button>
    </div>
  )
}

export default MusicContainer