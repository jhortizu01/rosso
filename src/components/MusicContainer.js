import React, { useState, useEffect } from 'react'
import '../styles/MusicContainer.scss'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'
import fireSounds from '../mp3/SharKhuls_Aug2019.mp3'
import leafSounds from '../mp3/AshiuForest_River_Nov2018.mp3'
import waterSounds from '../mp3/Drift Ice at Shiretoko 2.mp3'
import moonSounds from '../mp3/Kasungu_Night.mp3'
import arrow from '../assets/Arrow_down.png'
import { useCanvas } from '../context/CanvasContext'


const playlist = [fireSounds, leafSounds, waterSounds, moonSounds ]
const playlistTitles = [
  "Wind In The Reeds (Great Gobi Nat'l Park, Mongolia)",
  "Gentle Stream and Autumn (Ashiu Forest, Kyoto, Japan)",
  "Drift Ice (Shiretoko Nat'l Park, Hokkaido, Japan)",
  "Gentle Night (Kasungu Nat'l Park, Malawi)"
]

const MusicContainer = () => {
  const [currentSong, setCurrentSong] = useState(playlist[0])
  const [musicVisibility, setMusicVisibility] = useState("audio hide")
  const [arrowDirection, setArrowDirection] = useState("arrow-direction down")
  const [currentTitle, setCurrentTitle] = useState("Wind In The Reeds (Great Gobi Nat'l Park, Mongolia)");
  const { activePalette } = useCanvas()

  useEffect(() => {
    playSongWithCorrespondingPalette();
  }, [activePalette])
  
  const playSongWithCorrespondingPalette = () => {
    if (activePalette.isFireActive === true) {
      setCurrentSong(playlist[0])
       setCurrentTitle(playlistTitles[0])
    } else if (activePalette.isLeafActive === true) {
      setCurrentSong(playlist[1])
       setCurrentTitle(playlistTitles[1])
    } else if (activePalette.isWaveActive === true) {
      setCurrentSong(playlist[2])
       setCurrentTitle(playlistTitles[2])
    } else if (activePalette.isMoonActive === true) {
      setCurrentSong(playlist[3])
       setCurrentTitle(playlistTitles[3])
    }
  }

  const handleClickPrevious = () => {
    if(currentSong === playlist[0]) {
      setCurrentSong(playlist[3])
      setCurrentTitle(playlistTitles[3])
    } else if (currentSong === playlist[1]) {
      setCurrentSong(playlist[0])
      setCurrentTitle(playlistTitles[0])
    } else if (currentSong === playlist[2]) {
      setCurrentSong(playlist[1])
      setCurrentTitle(playlistTitles[1])
    } else if (currentSong === playlist[3]) {
      setCurrentSong(playlist[2])
      setCurrentTitle(playlistTitles[2])
  }}

  const handleClickNext = () => {
    if(currentSong === playlist[0]) {
      setCurrentSong(playlist[1])
      setCurrentTitle(playlistTitles[1])
    } else if (currentSong === playlist[1]) {
      setCurrentSong(playlist[2]) 
      setCurrentTitle(playlistTitles[2])
    } else if (currentSong === playlist[2]){
      setCurrentSong(playlist[3])
      setCurrentTitle(playlistTitles[3])
    } else if (currentSong === playlist[3]){
      setCurrentSong(playlist[0])
      setCurrentTitle(playlistTitles[0])
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
      onClickPrevious={handleClickPrevious}
      onClickNext={handleClickNext}
      showSkipControls={true}
      showJumpControls={false}
      autoPlay={true}
      />
    <button className="toggle-music"  onClick={toggleMusic}>
      <p className="songTitle">{currentTitle}</p>
      <img src={arrow} alt="arrow" className={arrowDirection} />
    </button>
    </div>
  )
}

export default MusicContainer