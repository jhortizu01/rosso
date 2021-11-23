import React, { useState } from 'react'
import '../styles/MusicContainer.scss'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'
import song1 from '../mp3/song1.mp3'
import song2 from '../mp3/song2.mp3'
import song3 from '../mp3/song3.mp3'
import song4 from '../mp3/song4.mp3'
import song5 from '../mp3/song5.mp3'
import arrow from '../assets/Arrow_down.png'

const playlist = [song1, song2, song3, song4, song5]

const MusicContainer = () => {
  const [currentSong, setCurrentSong] = useState(playlist[0])
  const [musicVisibility, setMusicVisibility] = useState("audio hide")
  const [arrowDirection, setArrowDirection] = useState("arrow-direction down")

  const handleClickPrevious = () => {
    if(currentSong === playlist[0]) {
      setCurrentSong(playlist[5])
    } else if (currentSong === playlist[1]) {
      setCurrentSong(playlist[0])
    } else if (currentSong === playlist[2]) {
      setCurrentSong(playlist[1])
    } else if (currentSong === playlist[3]) {
      setCurrentSong(playlist[2])
    } else if (currentSong === playlist[4]) {
      setCurrentSong(playlist[3])
    } else if (currentSong === playlist[5]) {
      setCurrentSong(playlist[4])
    }
  }

  const handleClickNext = () => {
    if(currentSong === playlist[0]) {
      setCurrentSong(playlist[1])
    } else if (currentSong === playlist[1]) {
      setCurrentSong(playlist[2]) 
    } else if (currentSong === playlist[2]){
      setCurrentSong(playlist[3])
    } else if (currentSong === playlist[3]){
      setCurrentSong(playlist[4])
    } else if (currentSong === playlist[4]){
      setCurrentSong(playlist[5]) 
    } else if (currentSong === playlist[5]){
      setCurrentSong(playlist[0])
    }
  }

  const toggleMusic = () => {
    if(musicVisibility === "audio hide") {
      setMusicVisibility("audio show")
      setArrowDirection("arrow-direction up")
    } else {
      setMusicVisibility("audio hide")
      setArrowDirection("arrow-direction down")
    }
  }

  return (
    <div className={musicVisibility}>
      <AudioPlayer
      src={currentSong}
      onPlay={e => console.log("onPlay")}
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      showSkipControls={true}
      showJumpControls={false}
      />
    <button className="toggle-music"  onClick={toggleMusic}>
      <p className="beats">Beats</p> 
      <img src={arrow} alt="arrow" className={arrowDirection} />
    </button>
    </div>
  )
}

export default MusicContainer