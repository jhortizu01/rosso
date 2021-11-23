import React, { useState } from 'react'
import '../styles/MusicContainer.scss'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'
import fireSounds from '../mp3/SharKhuls_Aug2019.mp3'
import leafSounds from '../mp3/Rains and Bird_RMNP_BT.mp3'
import waterSounds from '../mp3/Drift Ice at Shiretoko 2.mp3'
import moonSounds from '../mp3/Kasungu_Night.mp3'
import arrow from '../assets/Arrow_down.png'

const playlist = [fireSounds, leafSounds, waterSounds, moonSounds ]

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