import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './css/planecanvas.css';
import * as THREE from 'three';
// import { useGLTF, Stars } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = React.forwardRef((props, ref) => {
    const gltf = useLoader(GLTFLoader, '/isometric_room/scene.gltf');
    return <primitive object={gltf.scene} ref={ref} {...props} />;
});

const Planet = React.forwardRef((props, ref) => {
    const gltf = useLoader(GLTFLoader, '/of_planes_and_satellites/scene.gltf');
    const rotationY = Math.PI; // 180 degrees in radians

    useEffect(() => {
        if (ref.current) {
            // This will rotate the model 180 degrees around the Y axis
            ref.current.rotation.y = rotationY;
        }
    }, [ref, rotationY]);

    return <primitive object={gltf.scene} ref={ref} {...props} position={[1000, 500, 500]} />;
});


const CameraController = ({ setCanInteract, target, setTarget }) => {
    const { camera, gl } = useThree();
    const orbitRef = useRef();
    const modelRef = useRef();
    const planetRef = useRef();
    // Define offset positions for each model
    const modelOffset = new THREE.Vector3(0, 1, 0);
    const planetOffset = new THREE.Vector3(-0.15, -0.006, 0.01);
    // useEffect(() => {
    //     const controls = new OrbitControls(camera, gl.domElement);
    //     controls.enableZoom = true;
    //     controls.enablePan = true;
    //     controls.maxPolarAngle = Math.PI / 1.5;
    //     controls.minPolarAngle = Math.PI/ 3;
    //     // controls.target.copy(modelOffset);
    //     controls.enabled = false;
    //     orbitRef.current = controls;
    // }, [camera, gl.domElement]);


    useFrame(() => {
        const targetRef = target === 'model' ? modelRef : planetRef;
        const offset = target === 'model' ? modelOffset : planetOffset;
        const targetPosition = targetRef.current.position.clone().add(offset);

        if (targetRef.current) {
            camera.position.lerpVectors(camera.position, targetPosition, 0.05);
            camera.lookAt(targetPosition);

            if (camera.position.distanceTo(targetPosition) < 5) {
                setCanInteract(true);
                orbitRef.current.enabled = true;
                orbitRef.current.target.copy(targetPosition);
            } else {
                setCanInteract(false);
                orbitRef.current.enabled = false;
            }
        }

        orbitRef.current?.update();
    });

    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.enableZoom = true;
        controls.enablePan = false;
        controls.maxPolarAngle = Math.PI / 1.5;
        controls.minPolarAngle = Math.PI / 3;
        controls.target.copy(modelOffset);
        // controls.enabled = false; // Disable controls until the transition is complete
        orbitRef.current = controls;
        return () => controls.dispose();
    }, [camera, gl.domElement]);

    return (
        <>
            <Model ref={modelRef} />
            <Planet ref={planetRef} />
        </>
    );
};

const PlaneCanvas = () => {
    const [canInteract, setCanInteract] = useState(false);
    const [target, setTarget] = useState('model');
    const [links, setShowLinks] = useState(false);

    const handleButtonClick = () => {
        setTarget(target === 'model' ? 'planet' : 'model');
        setShowLinks(true);
    };

    const handleLinkedIn = () => {
        // https://www.linkedin.com/in/dylansyahputra
        window.open('https://www.linkedin.com/in/dylansyahputra', '_blank');
    }

    const handleGithub = () => {
        //https://github.com/GigaSmurf
        window.open('https://github.com/GigaSmurf', '_blank');
    }

    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <>
            <Canvas camera={{ position: [0, 20, 50], fov: 75 }}>
                <CameraController setCanInteract={setCanInteract} target={target} setTarget={setTarget} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
            </Canvas>
            {canInteract && (<button onClick={toggleMenu} className="menu-toggle-button">
                {showMenu ? '▼' : '?'}
            </button>)}
            {canInteract && showMenu && (
                <div className="instructions">
                    <p>You can now look around. <br />Get on your computer... and open this website.</p>
                    <button onClick={handleButtonClick}>
                        No, this is not real
                    </button>
                    {links &&
                        <>
                            <div style={{ marginTop: '10px' }}>
                                <button id="linkedin-button" onClick={handleLinkedIn}>
                                    <img src={require("./assets/linkedin.png")} alt="LinkedIn" />
                                </button>
                                <button id="github-button" onClick={handleGithub}>
                                    <img src={require("./assets/github.png")} alt="GitHub" />
                                </button>
                            </div>

                        </>}
                </div>
            )}
        </>
    );
};

export default PlaneCanvas;
