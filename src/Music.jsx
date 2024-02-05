import React, { useState, useEffect, useRef } from 'react';
import './css/music.css'; 
import lacrimosa from './assets/LacrimosaMozart.mp3';
import gym from './assets/Erik Satie-GymnopédieNo.1.mp3';
import play1 from './assets/play.svg';
import pause1 from './assets/pause.svg';
import stop1 from './assets/stop.svg';
import forward from './assets/forward.svg';
import lamp from './assets/The Lamp Is Low.mp3';
import summer from './assets/Anri - Remember Summer Days.mp3';
import baycity from './assets/黄昏のBAY CITY.mp3';
import cantinaband from './assets/Cantina Band.mp3';
import whisper from './assets/George Michael - Careless Whisper.mp3';
import chanson from './assets/La chanson dHélène.mp3';
import lamore from './assets/Lamore dice ciao.mp3';
import jo from './assets/조덕배(Jo duck bai) - 그대 내맘에 들어오면은.mp3';
// import { useSpring, animated } from 'react-spring';
import AnimatedTitle from './AnimatedTitle';

const songs = [
    { title: 'Lacrimosa', artist: 'Wolfgang Amadeus Mozart', src: lacrimosa },
    { title: 'The Lamp Is Low', artist: 'Laurindo Almeida', src: lamp },
    { title: 'Gymnopédie No.1', artist: 'Erik Satie', src: gym },
    { title: 'Remember Summer Days', artist: 'Anri', src: summer },
    { title: '黄昏のBAY CITY', artist: 'Junko Yagami', src: baycity },
    { title: 'Cantina Band', artist: 'John Williams', src: cantinaband },
    { title: 'Careless Whisper', artist: 'George Michael', src: whisper },
    { title: 'La chanson d\'Hélène', artist: 'Michel Piccoli', src: chanson  },
    { title: 'L\'amore dice ciao', artist: 'Armando Trovajoli', src:lamore },
    { title: '그대 내맘에 들어오면은', artist: 'Jo Duck Bai', src: jo },
    // { title: '', artist: '', src:  }
  ];

  function Music({ onUnmount }){
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    // Initialize audio outside of the effect to prevent multiple re-creations
    const audioRef = useRef(null);

    if (!audioRef.current) {
        audioRef.current = new Audio(songs[currentSongIndex].src);
    }

    //   // React spring animation for the title bar text
    // const spring = useSpring({
    //     from: { transform: 'translateX(-115%)' }, // start from the left
    //     to: { transform: 'translateX(110%)' }, // go to the right
    //     reset: true,
    //     loop: true,
    //     config: { duration: 10000 },
    //   });
  
    useEffect(() => {
        // Only update the source if it's different from the current one.
        // This prevents unnecessary reloads.
        if (audioRef.current.src !== songs[currentSongIndex].src) {
            audioRef.current.src = songs[currentSongIndex].src;
            audioRef.current.load(); // This might be optional depending on your needs.
        }
    }, [currentSongIndex]); // Depend only on currentSongIndex.
    

useEffect(() => {
    if (isPlaying) {
        audioRef.current.play().catch(error => console.error("Playback error:", error));
    } else {
        audioRef.current.pause();
    }
}, [isPlaying]); // This effect toggles play/pause based on isPlaying state.


useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

      // Function to handle end of song
  const handleSongEnd = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.onloadeddata = () => {
          audioRef.current.play();
          setIsPlaying(true);
        };
    }
  };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleSongEnd);

    // This function is called when the component unmounts
    return () => {
        audio.removeEventListener('loadeddata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
        audio.removeEventListener('ended', handleSongEnd);
        audio.pause();
        if (onUnmount) {
            onUnmount();
        }
    };
}, [onUnmount]);

  
    const play = () => {
      setIsPlaying(true);
    //   audioRef.current.play();
    };
  
    const pause = () => {
    // console.log('Pausing at:', audioRef.current.currentTime);
      setIsPlaying(false);
    //   let temp = audioRef.current.currentTime;
    //   audioRef.current.pause();
    //   console.log('Paused at:', audioRef.current.currentTime);
    //   audioRef.current.currentTime= temp;
    };
  
    const stop = () => {
      setIsPlaying(false);
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  
    const nextSong = () => {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.onloadeddata = () => {
            audioRef.current.play();
            setIsPlaying(true);
          };
      }
    };
  
    const prevSong = () => {
      setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.onloadeddata = () => {
            audioRef.current.play();
            setIsPlaying(true);
          };
      }
    };
  
    const handleProgressChange = (e) => {
      const newTime = (audioRef.current.duration / 100) * e.target.value;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    };
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  
    return (
      <div className="miniplayer">
        <div className="title-bar">
            {/* <animated.div style={spring} className="title-text">
            {songs[currentSongIndex].artist} - {songs[currentSongIndex].title}
            </animated.div> */}
            <AnimatedTitle text={`${songs[currentSongIndex].artist} - ${songs[currentSongIndex].title}`} />

        </div>
        <div className="progress-bar">
          <input
            type="range"
            value={duration ? (currentTime / duration) * 100 : 0}
            step="1"
            min="0"
            max="100"
            onChange={handleProgressChange}
          />
          <div className="time-display">
            <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
          </div>
        </div>
        <div className="controls">
          <button onClick={prevSong}>
            <img src={forward} alt="Previous" style={{ transform: 'scaleX(-1)'}} />
          </button>
          {isPlaying ? (
            <button onClick={pause}>
              <img src={pause1} alt="Pause" />
            </button>
          ) : (
            <button onClick={play}>
              <img src={play1} alt="Play" />
            </button>
          )}
          <button onClick={stop}>
            <img src={stop1} alt="Stop" />
          </button>
          <button onClick={nextSong}>
            <img src={forward} alt="Next" />
          </button>
        </div>
        {/* <div className="progress-bar">
          <input
            type="range"
            value={duration ? (currentTime / duration) * 100 : 0}
            step="1"
            min="0"
            max="100"
            onChange={handleProgressChange}
          />
          <div className="time-display">
            <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
          </div>
        </div> */}
      </div>
    );
  }
  
  export default Music;
