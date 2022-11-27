// import Taskbar from "./TaskBar";
import { useState, useEffect } from 'react';
import './css/intro.css'
import './css/taskbar.css'
import Sticky from "./sticky";
import { BrowserView, MobileView } from "react-device-detect";
// import gomez from './gomez'
import Taskbar from './TaskBar';
import { Icon } from './Icon';
import Popup from 'reactjs-popup';
import resume from './resume.pdf'
// import Draggable from './draggables';

const Home = () => {
    // const colors = ["#DC143C","#8FBC8F",'#FFD700','lightblue']
    // const index = 0
    const [isPending, setIsPending] = useState(true);
    const [isreveal, setIsReveal] = useState(false);
  useEffect(() => {

    setTimeout(() => {
        setIsPending(false);
        setIsReveal(true);

    }, 5000);
  }, [])
        
  const clicker = () =>{
      console.log('clicked')
  }

//   const colorChanger

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

                    {/* <div id='background'>
                    </div> */}
                    <Popup trigger={
                        <div id='button'onClick={clicker}>
                        <Icon key={0} id={0} icon='resume' text="Resume" left={25} top={50} />
                        </div>
                    }>
                        {close => (
      <div className="modal">
        <div className="header">
        <button className="close" onClick={close}>
          &times;
        </button>
        </div>
        <div className="content">
          <object title='myframe'type="application/pdf"data={resume} width="96%" height="550px">
        </object>
        </div>
      </div>
    )}
                    </Popup>
                <Sticky/>
                <Taskbar/>
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

