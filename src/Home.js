import { useState, useEffect, useRef, Suspense, forwardRef, useMemo } from 'react';
import './css/intro.css'
import './css/taskbar.css'
import Sticky from "./sticky";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import Taskbar from './TaskBar';
import { Icon } from './Icon';
import Popup from 'reactjs-popup';
import resume from './icons/rs.pdf'
import TicTacToe from './TicTacToe.jsx'
import Draggable from 'react-draggable';
import lolLogo from './icons/League_of_Legends.png';
import soundFile from './assets/startup.mp3';
import MineSweeper from './minesweeper.jsx';
import Music from './Music.jsx';


//Mobile View
import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Stars, useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Physics, useBox } from "@react-three/cannon";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import './css/mobileview.css';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
// const tmpPos = new THREE.Vector3();
import { MeshBasicMaterial } from 'three';

import { Line } from '@react-three/drei';

import matrixCodeFontUrl from './assets/Matrix-Code.ttf';
import PlaneCanvas from './PlaneCanvas';
import CanvasAnimation from './CanvasAnimation';


const tempVector = new THREE.Vector3();
const textOptions = [
  '0', '1', '*', 'λ', '∑', 'エ',
  '*', '+', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', '<', '>', 'z', '|', '¦', '©', '╌', '▪', 'ア', 'ウ', 'エ', 'オ',
  'モ', 'エ', 'ヤ', 'キ', 'オ', 'カ', '7', 'ケ', 'サ', 'ス', 'z', '1', '5', '2', 'ヨ', 'タ', 'ワ', '4', 'ネ', 'ヌ', 'ナ', '9', '8', 'ヒ', '0', 'ホ', 'ア', '3', 'ウ', 'セ', '¦', ':', '꞊', 'ミ', 'ラ', 'リ', '╌', 'ツ', 'テ', 'ニ', 'ハ', 'ソ', '▪', '—', '<', '>', '0', '|', '+', '*', 'コ', 'シ', 'マ', 'ム', 'メ'
];

const FallingText = ({ text, position, velocityY }) => {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position,
    velocity: [0, velocityY, 0]
  }));
  const [currentText, setCurrentText] = useState(text);
  const [opacity, setOpacity] = useState(1);
  const [color, setColor] = useState('green');

  let computedColor = color;

  useFrame(() => {
    if (ref.current) {
      ref.current.getWorldPosition(tempVector);
      // setCurrentText(textOptions[Math.floor(Math.random() * textOptions.length)]);
      // Change text at random intervals
      if (Math.random() < 0.05) {
        const newText = textOptions[Math.floor(Math.random() * textOptions.length)];
        ref.current.children[0].text = newText;
      }
      if (tempVector.y < -20) {
        api.position.set(position[0], 25, position[2]);
        api.velocity.set(0, velocityY, 0);
        setOpacity(1);
      }
      // computedColor = ref.current.position.y < 0 ? 'white' : color;
      // Set the text to white and fully opaque at the bottom
      if (tempVector.y <= 0) {
        setColor('#39FF14');
        setOpacity(1.0);
      } else {
        setColor('green');
        // Reduce opacity as the text moves up, creating a fading tail
        const fadeStart = 5;
        const fadeEnd = 25;
        if (tempVector.y > fadeStart && tempVector.y < fadeEnd) {
          const fadeAmount = (tempVector.y - fadeStart) / (fadeEnd - fadeStart);
          setOpacity(1.0 - fadeAmount);
        }
      }
    }
  });

  return (
    <mesh ref={ref}>
      <Text
        font={matrixCodeFontUrl}
        fontSize={1}
        color={color}
        anchorX="center"
        anchorY="middle"
        material={new MeshBasicMaterial({
          color: color,
          // emissive: color,
          transparent: true,
          opacity: opacity
        })}
      >
        {text}
      </Text>
    </mesh>
  );
};

const Scene = () => {
  const numColumns = 20; // Number of columns of falling text
  const numRows = 15; // Number of rows in each column
  const spacingX = 1.5; // Horizontal spacing between columns
  const spacingY = 1.5; // Vertical spacing between texts in a column

  // Create positions for each text in a grid
  const texts = useMemo(() => {
    const temp = [];
    for (let i = 0; i < numColumns; i++) {
      for (let j = 0; j < numRows; j++) {
        temp.push({
          text: textOptions[Math.floor(Math.random() * textOptions.length)],
          position: [
            i * spacingX - (numColumns * spacingX) / 2, // Align in columns
            20 + j * spacingY, // Stagger the starting positions vertically
            0
          ],
          velocityY: -2 - Math.random() * 1, // Slightly randomize falling speed
        });
      }
    }
    return temp;
  }, [numColumns, numRows, spacingX, spacingY]);

  return (
    <>
      {texts.map((props, i) => (
        <FallingText key={i} {...props} />
      ))}
    </>
  );
};

const MatrixRain = () => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 15], fov: 111 }}>
      {/* <OrbitControls/> */}
      <ambientLight />
      {/* <Stars/> */}
      <pointLight position={[10, 10, 10]} />
      <Physics gravity={[0, -1, 0]}>
        <Scene />
      </Physics>
    </Canvas>
  );
};


// function Plane() {
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//   }));
//   return (
//     <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
//       <planeBufferGeometry attach="geometry" args={[1000, 200]} />
//       <meshLambertMaterial attach="material" color="lightblue" />
//     </mesh>
//   );
// }

function Box() {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // Flash the cube
    let g = materialRef.current.color.g;
    g -= 0.05;
    if (g <= 0) g = 1.0;
    materialRef.current.color.g = g;
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={[0, 0.5, 0]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial ref={materialRef} color={0x00ff00} wireframe />
    </mesh>
  );
}
// A component to render interconnected nodes
const Nodes = ({ count = 50 }) => {
  const nodes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 400 - 200;
      const y = Math.random() * 400 - 200;
      const z = Math.random() * 400 - 200;
      temp.push(new THREE.Vector3(x, y, z));
    }
    return temp;
  }, [count]);

  return (
    <>
      {nodes.map((node, index) => (
        <Line key={index} points={[node, new THREE.Vector3(0, 0, 0)]} color="lime" linewidth={2} />
      ))}
    </>
  );
};



// const SuspenseTrigger = () => {
//   throw new Promise(() => { });
// };

// function CarCamera({ carRef }) {
//   const { camera } = useThree();

//   useFrame(() => {
//     if (carRef.current) {
//       const carPosition = carRef.current.position;
//       console.log("Car position:", carPosition); // Log the car's position

//       // Update camera position
//       camera.position.set(carPosition.x - 50, carPosition.y + 70, carPosition.z + 50);
//       camera.lookAt(carPosition.x, carPosition.y, carPosition.z);
//     }
//   });

//   return null;
// }

// Model component to load and display the 3D model
// function Model(props, ref) {
//   const { scene } = useGLTF("/nissan_skyline_r34_gt-r.glb");
//   return <primitive object={scene} ref={ref} {...props} />;
// }

// function Planet({ position, color, size }) {
//   return (
//     <mesh position={position}>
//       <sphereBufferGeometry attach="geometry" args={[size, 32, 32]} />
//       <meshStandardMaterial attach="material" color={color} />
//     </mesh>
//   );
// }


// Function to create wheels
// function createWheels() {
//   const geometry = new THREE.BoxBufferGeometry(12, 12, 33);
//   const material = new THREE.MeshLambertMaterial({ color: 0x333333 });
//   return <mesh geometry={geometry} material={material} />;
// }
// function Building({ position, onClick }) {
//   // Define the building component
//   return (
//     <mesh position={position} onClick={onClick}>
//       <boxBufferGeometry attach="geometry" args={[10, 30, 10]} />
//       <meshStandardMaterial attach="material" color="grey" />
//     </mesh>
//   );
// }
// function Car(props, ref) {
//   const [carRef, api] = useBox(() => ({
//     mass: 1,
//     position: [0, 0.5, 0]
//   }), ref);

//   // const [isLoading, setIsLoading] = useState(true);
//   // const gltf = useLoader(GLTFLoader, "/nissan_skyline_r34_gt-r.glb", () => {
//   //   setIsLoading(false);
//   // });

//   let angle = 0;
//   const radius = 30;
//   const speed = 0.05; // Adjust the speed as needed

//   useFrame(() => {
//     angle += speed;
//     const x = radius * Math.cos(angle);
//     const z = radius * Math.sin(angle);

//     // Update position
//     carRef.current.position.set(x, 0.5, z);
//     if (api.position) {
//       api.position.set(x, 0.5, z);
//     }

//     // Update rotation to face the direction of movement
//     const tangentAngle = angle + Math.PI / 2;
//     carRef.current.rotation.y = tangentAngle;
//   });

//   return (
//     // <Model
//     //   ref={carRef}
//     //   scale={[0.5, 0.5, 0.5]} // Adjust the scale as needed
//     //   position={[0, 0.5, 0]}
//     // />
//     // <mesh ref={carRef}>
//     //   <boxBufferGeometry attach="geometry" args={[1, 0.5, 2]} />
//     //   <meshStandardMaterial attach="material" color="red" />
//     // </mesh>
//     <group ref={carRef}>
//       {/* Back wheel */}
//       <group position={[-18, 6, 0]}>
//         {createWheels()}
//       </group>

//       {/* Front wheel */}
//       <group position={[18, 6, 0]}>
//         {createWheels()}
//       </group>

//       {/* Main body */}
//       <mesh position={[0, 12, 0]} geometry={new THREE.BoxBufferGeometry(60, 15, 30)} material={new THREE.MeshLambertMaterial({ color: 0x78b14b })} />

//       {/* Cabin */}
//       <mesh position={[-6, 25.5, 0]} geometry={new THREE.BoxBufferGeometry(33, 12, 24)} material={new THREE.MeshLambertMaterial({ color: 0xffffff })} />
//     </group>
//   );
// }

// const CarWithRef = forwardRef(Car);

const Home = () => {
  // const index = 0
  const [isPending, setIsPending] = useState(true);
  const [isreveal, setIsReveal] = useState(false);



  useEffect(() => {

    const sound = new Audio(soundFile);

    // setTimeout(() => {
    //   setIsPending(false);
    //   setIsReveal(true);

    //   if (!isMobile) {
    //     sound.play();
    //   }
    //   console.log('sound played');
    // }, 5000);

    setIsPending(false);
    setIsReveal(true);

    if (!isMobile) {
      sound.play();
    }

    const script = document.createElement('script');
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log("LinkedIn script loaded");
    };

    script.onerror = () => {
      console.error("Error loading LinkedIn script");
    };
    document.body.appendChild(script);

    //cleanup to clear the timeout if the component is unmounted before the timeout is reached
    return () => clearTimeout();

  }, [])

  const clicker = () => {
    console.log('clicked')
  }

  // State object to control the visibility of all popups
  const [popupsOpen, setPopupsOpen] = useState({
    recycleBin: false,
    resume: false,
    folder: false,
    explorer: false,
    tictactoe: false,
    minesweeper: false,
    music: false,
    linkedin: false,
    email: false,
    mobile: false,
  });

  // Generalized function to handle double click event for all popups
  const handleDoubleClick = (popupName) => {
    setPopupsOpen({ ...popupsOpen, [popupName]: true });
  };

  // Generalized function to close any popup
  const closePopup = (popupName) => {
    setPopupsOpen({ ...popupsOpen, [popupName]: false });
  };

  const nodeRef = useRef(null);

  const [selectedIconId, setSelectedIconId] = useState(null);

  // Function to handle icon selection
  const selectIcon = (iconId) => {
    if (selectedIconId !== iconId) {
      setSelectedIconId(iconId);
    } else {
      setSelectedIconId(null); // Deselect if the same icon is clicked again
    }
  };


  //---------------
  // const carRef = useRef();
  // const spaceshipRef = useRef();


  // const gltf = useLoader(GLTFLoader, './nissan_skyline_r34_gt-r.glb');

  // New state variables for controlling the car
  // const [moveForward, setMoveForward] = useState(false);
  // const [turnDirection, setTurnDirection] = useState(0); // -1 for left, 1 for right, 0 for straight
  // // Handlers for button presses
  // const handleMoveForward = () => setMoveForward(!moveForward);
  // const handleTurnLeft = () => setTurnDirection(-1);
  // const handleTurnRight = () => setTurnDirection(1);
  // const handleStopTurning = () => setTurnDirection(0);
  const [currentCanvas, setCurrentCanvas] = useState('MatrixRain');
  const [showButton, setShowButton] = useState(false); // State to show/hide transition button
  const [showMessageContainer, setShowMessageContainer] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 13000);

    console.log("Timer finished")
    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, []);

  const handleCanvasChange = () => {
    setCurrentCanvas('CanvasAnimation');
    setShowMessageContainer(false);
    setTimeout(() => {
      setCurrentCanvas('PlaneCanvas');
    }, 3500); // Duration for CanvasAnimation
  };

  const renderCanvas = () => {
    switch (currentCanvas) {
      case 'MatrixRain':
        return <MatrixRain />;
      case 'PlaneCanvas':
        return <PlaneCanvas />;
      case 'CanvasAnimation':
        return <CanvasAnimation width={window.innerWidth} height={window.innerHeight} />;
      default:
        return null;
    }
  };

  return (
    <div className="home">
      {isPending &&
        <div class="wrapper">
          <div class="typing">
            Welcome Guest...
          </div>
        </div>
      }
      {isreveal &&
        <div>
          <>
            <BrowserView key={1}>
              {/* Recycling bin application */}
              <div onDoubleClick={() => handleDoubleClick('recycleBin')} id='button'>
                <Icon key={0} id={0} icon='recycle' text="Recycle Bin" left={-10} top={10} isSelected={selectedIconId === 0} onSelect={selectIcon} />
              </div>
              <Popup
                open={popupsOpen.recycleBin}
                onClose={() => closePopup('recycleBin')}
                modal
              >
                {close => (
                  <Draggable>
                    <div className="modal">
                      <div className="header">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="content">
                        <div className="file-explorer">
                          <div className="side-panel">
                            <div className="folder">Recycle Bin</div>
                            <div className="folder">My Computer</div>
                          </div>
                          <div className="main-panel">
                            {/* Other files... */}

                            {/* League of Legends file with logo and redirect on click */}
                            {/* https://www.op.gg/summoners/na/Gosu%20Uzi%20GALA */}
                            <div className="filer" onClick={() => window.open('https://www.op.gg/summoners/na/dylan-carry', '_blank')}>
                              <img src={lolLogo} alt="LoL Logo" width="20px" style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                              League of Legends.exe
                            </div>

                            {/* Other files... */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Draggable>
                )}

              </Popup>

              {/* Resume application */}
              <div onDoubleClick={() => handleDoubleClick('resume')} id='button'>
                <Icon key={1} id={1} icon='resume' text="Resume" left={90} top={10} isSelected={selectedIconId === 1} onSelect={selectIcon} />
              </div>
              <Popup
                open={popupsOpen.resume}
                onClose={() => closePopup('resume')}
                modal
              >

                {close => (
                  <Draggable>
                    <div className="modal">
                      <div className="header">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="content">
                        <object title='myframe' type="application/pdf" data={resume} width="100%" height="550px">
                        </object>
                      </div>
                    </div>

                  </Draggable>
                )}

              </Popup>

              {/* Folder application */}
              <div onDoubleClick={() => handleDoubleClick('folder')} id='button'>
                <Icon key={2} id={2} icon='folder' text="My Documents" left={-10} top={110} isSelected={selectedIconId === 2} onSelect={selectIcon} />
              </div>
              <Popup
                open={popupsOpen.folder}
                onClose={() => closePopup('folder')}
                modal
              >

                {close => (
                  <Draggable>
                    <div className="modal">
                      <div className="header">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="content">
                        <div className="file-explorer">
                          <div className="side-panel">
                            <div className="folder">My Computer</div>
                            <div className="folder">C:</div>
                            <div className="folder">D:</div>
                            <div className="folder">Control Panel</div>
                            <div className="folder">Network Neighborhood</div>
                          </div>
                          <div className="main-panel">
                            {/* <Popup className="file" trigger={
                            <button className="file" onClick={() => window.open('https://www.linkedin.com/in/dylansyahputra', '_blank')}>chess.exe</button>
                          }>

                          </Popup> */}
                            <button className="file" onClick={() => window.open('https://chess-ai-68a9ea2be35e.herokuapp.com/', '_blank')}>chess.exe</button>
                            <button className="file" onClick={() => window.open('https://gigasmurf.github.io/GigaSmurf-Web/', '_blank')}>gigasmurf.exe</button>
                            <button className="file" onClick={() => window.open('https://devpost.com/nalydputra', '_blank')}>devpost.html</button>
                            <button className="file" onClick={() => window.open('https://github.com/GigaSmurf', '_blank')}>github.html</button>
                            <button className="file">comingsoon.txt</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </Draggable>
                )}

              </Popup>

              {/* Internet Explorer application */}
              <div onDoubleClick={() => handleDoubleClick('explorer')} id='button'>
                <Icon key={6} id={6} icon='explorer' text="Internet Explorer" left={-10} top={210} isSelected={selectedIconId === 6} onSelect={selectIcon} />
              </div>
              <Popup
                open={popupsOpen.explorer}
                onClose={() => closePopup('explorer')}
                modal
              >

                {close => (
                  <Draggable>
                    <div className="modal">
                      <div className="header">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="content">
                        <iframe src="https://web.archive.org/web/1998/https://www.google.com/" width="100%" height="550px"></iframe>
                      </div>
                    </div>

                  </Draggable>
                )}

              </Popup>

              {/* Tic Tac Toe application */}
              <div onDoubleClick={() => handleDoubleClick('tictactoe')} id='button'>
                <Icon key={3} id={3} icon='tictactoe' text="Tic Tac Toe" left={90} top={210} isSelected={selectedIconId === 3} onSelect={selectIcon} />
              </div>
              <Popup
                open={popupsOpen.tictactoe}
                onClose={() => closePopup('tictactoe')}
                modal
              >

                {close => (
                  <Draggable>
                    <div className="modal" style={{width: '100%'}}>
                      <div className="header">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="content">
                        <TicTacToe></TicTacToe>
                      </div>
                    </div>

                  </Draggable>
                )}

              </Popup>

              {/* Minesweeper application */}
              <div onDoubleClick={() => handleDoubleClick('minesweeper')} id='button'>
                <Icon key={4} id={4} icon='minesweeper' text="Minesweeper" left={90} top={310} isSelected={selectedIconId === 4} onSelect={selectIcon} />
              </div>
              <Popup
                open={popupsOpen.minesweeper}
                onClose={() => closePopup('minesweeper')}
                modal
              >

                {close => (
                  <Draggable>
                  <div className="modal" style={{width: '100%'}}>
                    <div className="header">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                    </div>
                    <div className="content" >
                      <MineSweeper/>
                    </div>
                  </div>
                </Draggable>
                )}

              </Popup>

              {/* Music application */}
              <div onDoubleClick={() => handleDoubleClick('music')} id='button'>
                <Icon key={5} id={5} icon='music' text="Music" left={-10} top={410} isSelected={selectedIconId === 5} onSelect={selectIcon} />
              </div>
              <Popup
                open={popupsOpen.music}
                onClose={() => {
                  closePopup('music');
                  // if (audioRef.current) {
                  //   audioRef.current.pause(); // Or audioRef.current.stop() if you implement a stop function
                  // }
                }}
                modal
              >
                {close => (
                  <Draggable>
                    <div className="modal" style={{width: '100%'}}>
                      <div className="header">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="content" style={{marginRight: 0, paddingRight: 0}}>
                      <Music onUnmount={() => {
                        // This function will be called when Music component unmounts
                        // Handle stopping or pausing the audio here if necessary
                        // No need to reference audioRef here since it's handled within the Music component
                      }}/>
                      </div>
                    </div>
                  </Draggable>
                )}
              </Popup>

              {/* Mobile application */}
              <div onDoubleClick={() => handleDoubleClick('mobile')} id='button'>
                <Icon key={10} id={10} icon='mobile' text="Mobile Version" left={90} top={410} isSelected={selectedIconId === 10} onSelect={selectIcon} />
              </div>
              <Popup
                open={popupsOpen.mobile}
                onClose={() => closePopup('mobile')}
                modal
              >

                {close => (
                  // <Draggable>
                  <div className="modal">
                    <div className="header">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                    </div>
                    <div className="content">
                      <Suspense>
                        <div className="canvas-container">

                          <Suspense fallback={<div>Loading the scene...</div>}>
                            {/* <MatrixRain /> */}
                            {renderCanvas()}
                          </Suspense>
                          {/* <div className="control-buttons">
                  <button onClick={handleMoveForward}>Accelerate</button>
                  <button onTouchStart={handleTurnLeft} onTouchEnd={handleStopTurning}>Left</button>
                  <button onTouchStart={handleTurnRight} onTouchEnd={handleStopTurning}>Right</button>
                </div> */}

                          {showMessageContainer && (
                            <div className="message-container matrix-text-effect">
                              {/* Your messages */}
                              <p className="typing-first">Wake up...</p>
                              <p className="typing-second">The Matrix has you...</p>
                              <p className="typing-third">Follow Dylan...</p>
                              <p className="typing-fourth">...the Software Dev.</p>

                              {showButton && (
                                <button onClick={handleCanvasChange} className='matrix-button'>Escape</button>
                              )}
                            </div>
                          )}

                        </div>
                      </Suspense>
                    </div>
                  </div>
                  // </Draggable>
                )}

              </Popup>

              {/* Neighborhood Network application */}
              <div onDoubleClick={() => handleDoubleClick('linkedin')} id='button'>
                <Icon key={7} id={7} icon='linkedin' text="Network Neighborhood" left={90} top={110} isSelected={selectedIconId === 7} onSelect={selectIcon} />
              </div>
              <Popup
                open={popupsOpen.linkedin}
                onClose={() => closePopup('linkedin')}
                modal
              >

                {close => (
                  <Draggable>
                    <div className="modal">
                      <div className="header">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="content">
                        {/* <script src="https://platform.linkedin.com/badges/js/profile.js" async defer></script> */}
                        {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="dylansyahputra" data-version="v1">
                        <a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/dylansyahputra?trk=profile-badge">Dylan Syahputra</a>
                      </div> */}
                        {/* <iframe src="http://bit.ly/3Membk2" width="95%" height="550px"></iframe> */}
                        <button class="win98-button" onClick={() => window.open('https://www.linkedin.com/in/dylansyahputra', '_blank')}>
                          Connect
                        </button>

                      </div>
                    </div>

                  </Draggable>
                )}

              </Popup>

              {/* Outlook Express application */}
              <div onDoubleClick={() => handleDoubleClick('email')} id='button'>
                <Icon key={8} id={8} icon='email' text="Outlook Express" left={-10} top={310} isSelected={selectedIconId === 8} onSelect={selectIcon} />
              </div>
              <Popup
                open={popupsOpen.email}
                onClose={() => closePopup('email')}
                modal
              >

                {close => (
                  <Draggable>
                    <div className="modal">
                      <div className="header">
                        <button className="close" onClick={close}>
                          &times;
                        </button>
                      </div>
                      <div className="content">
                        <h2>Contact Me</h2>
                        <p>Thank you for reaching out! If you decide to send me an email, please know that I value your message and will make it a priority to get back to you as soon as possible. I appreciate your patience and look forward to connecting with you.</p>
                        <a href="mailto:nalyd.putra@gmail.com?subject=Hello&body=Thanks%20for%20visiting!" target="_blank" rel="noopener noreferrer">Send Email</a>
                      </div>
                    </div>

                  </Draggable>
                )}

              </Popup>

              {/* sticky note */}
              <Sticky />

              {/* bottom taskbar */}
              <Taskbar />
            </BrowserView>


            <MobileView key={2}>
              <Suspense>
                <div className="canvas-container">

                  <Suspense fallback={<div>Loading the scene...</div>}>
                    {/* <MatrixRain /> */}
                    {renderCanvas()}
                  </Suspense>
                  {/* <div className="control-buttons">
                  <button onClick={handleMoveForward}>Accelerate</button>
                  <button onTouchStart={handleTurnLeft} onTouchEnd={handleStopTurning}>Left</button>
                  <button onTouchStart={handleTurnRight} onTouchEnd={handleStopTurning}>Right</button>
                </div> */}

                  {showMessageContainer && (
                    <div className="message-container matrix-text-effect">
                      {/* Your messages */}
                      <p className="typing-first">Wake up...</p>
                      <p className="typing-second">The Matrix has you...</p>
                      <p className="typing-third">Follow Dylan...</p>
                      <p className="typing-fourth">...the Software Dev.</p>

                      {showButton && (
                        <button onClick={handleCanvasChange} className='matrix-button'>Escape</button>
                      )}
                    </div>
                  )}

                </div>
              </Suspense>
            </MobileView>

          </>
        </div>
      }
    </div>

  );

}

export default Home;

