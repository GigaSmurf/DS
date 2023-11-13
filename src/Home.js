import { useState, useEffect, useRef } from 'react';
import './css/intro.css'
import './css/taskbar.css'
import Sticky from "./sticky";
import { BrowserView, MobileView } from "react-device-detect";
import Taskbar from './TaskBar';
import { Icon } from './Icon';
import Popup from 'reactjs-popup';
import resume from './icons/rs.pdf'
import TicTacToe from './TicTacToe.jsx'
import Draggable from 'react-draggable';
import lolLogo from './icons/League_of_Legends.png';



const Home = () => {
  // const index = 0
  const [isPending, setIsPending] = useState(true);
  const [isreveal, setIsReveal] = useState(false);
  useEffect(() => {

    setTimeout(() => {
      setIsPending(false);
      setIsReveal(true);

    }, 5000);

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
    // Add additional popups here as needed
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
                <Icon key={0} id={0} icon='recycle' text="Recycle Bin" left={-10} top={10} />
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
                            <div className="filer" onClick={() => window.open('https://www.op.gg/summoners/na/Gosu%20Uzi%20GALA', '_blank')}>
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
                <Icon key={1} id={1} icon='resume' text="Resume" left={90} top={10} />
              </div>
              <Popup
                open={popupsOpen.resume}
                onClose={() => closePopup('resume')}
                modal
              >

                {close => (
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
                )}

              </Popup>

              {/* Folder application */}
              <div onDoubleClick={() => handleDoubleClick('folder')} id='button'>
                <Icon key={2} id={2} icon='folder' text="My Documents" left={-10} top={110} />
              </div>
              <Popup
                open={popupsOpen.folder}
                onClose={() => closePopup('folder')}
                modal
              >

                {close => (
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
                )}

              </Popup>

              {/* Internet Explorer application */}
              <div onDoubleClick={() => handleDoubleClick('explorer')} id='button'>
                <Icon key={2} id={2} icon='explorer' text="Internet Explorer" left={-10} top={210} />
              </div>
              <Popup
                open={popupsOpen.explorer}
                onClose={() => closePopup('explorer')}
                modal
              >

                {close => (
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
                )}

              </Popup>
              {/* Tic Tac Toe application */}
              <div onDoubleClick={() => handleDoubleClick('tictactoe')} id='button'>
                <Icon key={3} id={3} icon='tictactoe' text="Tic Tac Toe" left={90} top={210} />
              </div>
              <Popup
                open={popupsOpen.tictactoe}
                onClose={() => closePopup('tictactoe')}
                modal
              >

                {close => (
                  <div className="modal">
                    <div className="header">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                    </div>
                    <div className="content">
                      <TicTacToe></TicTacToe>
                    </div>
                  </div>
                )}

              </Popup>

              {/* Minesweeper application */}
              <div onDoubleClick={() => handleDoubleClick('minesweeper')} id='button'>
                <Icon key={4} id={4} icon='minesweeper' text="Minesweeper" left={90} top={310} />
              </div>
              <Popup
                open={popupsOpen.minesweeper}
                onClose={() => closePopup('minesweeper')}
                modal
              >

                {close => (
                  <div className="modal">
                    <div className="header">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                    </div>
                    <div className="content">
                      Coming soon!
                    </div>
                  </div>
                )}

              </Popup>

              {/* Music application */}
              <div onDoubleClick={() => handleDoubleClick('music')} id='button'>
                <Icon key={5} id={5} icon='music' text="Music" left={-10} top={410} />
              </div>
              <Popup
                open={popupsOpen.music}
                onClose={() => closePopup('music')}
                modal
              >

                {close => (
                  <div className="modal">
                    <div className="header">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                    </div>
                    <div className="content">
                      Coming soon!
                    </div>
                  </div>
                )}

              </Popup>

              {/* Neighborhood Network application */}
              <div onDoubleClick={() => handleDoubleClick('linkedin')} id='button'>
                <Icon key={7} id={7} icon='linkedin' text="Network Neighborhood" left={90} top={110} />
              </div>
              <Popup
                open={popupsOpen.linkedin}
                onClose={() => closePopup('linkedin')}
                modal
              >

                {close => (
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
                )}

              </Popup>

              {/* Outlook Express application */}
              <div onDoubleClick={() => handleDoubleClick('email')} id='button'>
                <Icon key={8} id={8} icon='email' text="Outlook Express" left={-10} top={310} />
              </div>
              <Popup
                open={popupsOpen.email}
                onClose={() => closePopup('email')}
                modal
              >

                {close => (
                  <div className="modal">
                    <div className="header">
                      <button className="close" onClick={close}>
                        &times;
                      </button>
                    </div>
                    <div className="content">
                      <h2>Contact Me</h2>
                      <p>Thank you for reaching out! If you decide to send me an email, please know that I value your message and will make it a priority to get back to you as soon as possible. I appreciate your patience and look forward to connecting with you.</p>
                    </div>
                  </div>
                )}

              </Popup>

              {/* sticky note */}
              <Sticky />

              {/* bottom taskbar */}
              <Taskbar />
            </BrowserView>


            <MobileView key={2}>
              <div className="mainContent" id="mainContainer">
                <h1>computer required :(</h1>
              </div>
            </MobileView>

          </>
        </div>
      }
    </div>

  );

}

export default Home;

