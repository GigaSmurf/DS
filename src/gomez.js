// import React, { Component } from 'react';
// import { BrowserView, MobileView } from "react-device-detect";
// import { Icon } from './Icon';
// import { Window } from './window';


// import Taskbar from './TaskBar';
// import Sticky from "./sticky";

// export class gomez extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             x: 0,
//             y: 0,
//             isDragging: false,
//             isGrabbing: false,
//             dragID: '',
//             dragAnchor: [0,0],
//             objects: {
//                 '1': {point: [50,100], type: 'icon', icon:'resume', text:'Resume', action: (()=>{
//                     const { objects, maxID, windowNum } = this.state;

//                     var x = window.innerWidth/2 - 675/2, y = window.innerHeight/2 - 500/2;
//                     objects[String(maxID+1)] = {point: [x,y], 
//                                                 type: 'window', 
//                                                 windowType: 'resume',
//                                                 title: 'Resume'}
//                     this.reorderWindows(maxID+1);
//                     this.setState({objects: objects, maxID: maxID+1, windowNum: windowNum+1});
//                 })},
//                 '2': {point: [50,250], type: 'icon', icon:'console', text:'Console', action: (()=>{
//                     const { objects, maxID, windowNum } = this.state;

//                     var x = window.innerWidth/2 - 675/2, y = window.innerHeight/2 - 500/2;
//                     objects[String(maxID+1)] = {point: [x,y], 
//                                                 type: 'window', 
//                                                 windowType: 'console',
//                                                 title: 'Console'}
//                     this.reorderWindows(maxID+1);
//                     this.setState({objects: objects, maxID: maxID+1, windowNum: windowNum+1});
//                 })},
//                 '3': {point: [50,400], type: 'icon', icon:'snake', text:'Snake', action: (()=>{
//                     const { objects, maxID, windowNum } = this.state;

//                     var x = window.innerWidth/2 - 675/2, y = window.innerHeight/2 - 500/2;
//                     objects[String(maxID+1)] = {point: [x,y], 
//                                                 type: 'window', 
//                                                 windowType: 'snake',
//                                                 title: 'Snake',
//                                                 width: '600px',
//                                                 height: '480px'}
//                     this.reorderWindows(maxID+1);
//                     this.setState({objects: objects, maxID: maxID+1, windowNum: windowNum+1});
//                 })},
//                 '4': {point: [50,550], type: 'icon', icon:'mine', text:'Minesweeper', action: (()=>{
//                     const { objects, maxID, windowNum } = this.state;

//                     var x = window.innerWidth/2 - 675/2, y = window.innerHeight/2 - 500/2;
//                     objects[String(maxID+1)] = {point: [x,y], 
//                                                 type: 'window', 
//                                                 windowType: 'mine',
//                                                 title: 'Minesweeper',
//                                                 width: '600px',
//                                                 height: '480px'}
//                     this.reorderWindows(maxID+1);
//                     this.setState({objects: objects, maxID: maxID+1, windowNum: windowNum+1});
//                 })},
//                 '5': {point: [300,125], 
//                     type: 'window', 
//                     order: 0,
//                     windowType: 'intro',
//                     title: 'Hello :D'},
//             },
//             maxID: 5,
//             windowNum: 0,
//         };

//         this.onMouseMove = this.onMouseMove.bind(this);
//         this.onMouseUp = this.onMouseUp.bind(this);
//         this.onMouseDown = this.onMouseDown.bind(this);
//         this.onClose = this.onClose.bind(this);
//     }

//     reorderWindows(id) {
//         const { objects, windoNum } = this.state;
//         var thresh;
//         if(id) {
//             thresh = objects[id].order ? objects[id].order : 0
//             objects[id].order = 0;
//         } else {
//             thresh = windoNum;
//         }
//         for(var i in objects) {
//             if(objects[i].type === 'window' && i !== id && objects[i].order <= thresh) {
//                 objects[i].order++;
//             }
//         }
//         this.setState({objects:objects});
//     }

//     onMouseMove(e) {
//         if(this.state.isGrabbing) {
//             var { dragID, objects, dragAnchor } = this.state;
//             if (dragID in objects) {
//                 objects[dragID].point = [e.nativeEvent.clientX-dragAnchor[0], e.nativeEvent.clientY-dragAnchor[1]];
//             }

//             this.setState({
//                 objects: objects,
//                 isDragging: true,
//             });
//         }
//     }

//     onMouseDown(e) {
//         const dragID = e.currentTarget.id;
//         const { objects } = this.state;
//         var anchorPoint = [e.nativeEvent.clientX,e.nativeEvent.clientY];
//         if (dragID in objects) {
//             anchorPoint[0] -= objects[dragID].point[0]
//             anchorPoint[1] -= objects[dragID].point[1]
//             this.reorderWindows(dragID);
//         }

//         this.setState({isGrabbing: true, dragID: dragID, dragAnchor: anchorPoint});
//     }

//     onMouseUp(e) {
//         const { isDragging, objects } = this.state;

//         if(!isDragging) {
//             if(e.currentTarget.id in objects) {
//                 if('action' in objects[e.currentTarget.id])
//                     objects[e.currentTarget.id].action();
//             }
//         }

//         this.setState({isGrabbing: false, isDragging: false, dragID: ''});
//     }

//     onClose(id) {
//         const { objects, windowNum } = this.state;
//         if (id in objects) {
//             delete objects[id]
//             this.reorderWindows()
//         }
        
//         this.setState({objects: objects, windowNum: windowNum-1});
//     }

//     render() {
//         const { objects, windowNum } = this.state;

//         const objs = [];
//         for(var i in objects) {
//             var coord = objects[i].point;
//             switch(objects[i].type) {
//                 case 'icon':
//                     var text = objects[i].text ? objects[i].text : 'Test';
//                     var icon = objects[i].icon ? objects[i].icon : 'ie';
//                     objs.push(<Icon key={i} id={i} icon={icon} text={text} left={coord[0]} top={coord[1]} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}/>);
//                     break;
//                 case 'window':
//                     var title = objects[i].title ? objects[i].title : 'New Window';
//                     var windowType = objects[i].windowType ? objects[i].windowType : 'default';
//                     var url = objects[i].url ? objects[i].url : '';
//                     var width = objects[i].width ? objects[i].width : null;
//                     var height = objects[i].height ? objects[i].height : null; 
//                     objs.push(<Window key={i} 
//                                     id={i} 
//                                     title={title}
//                                     windowType={windowType}
//                                     left={coord[0]} 
//                                     top={coord[1]} 
//                                     url={url} 
//                                     zIndex={windowNum - objects[i].order}
//                                     width={width}
//                                     height={height}
//                                     onMouseDown={this.onMouseDown} 
//                                     onMouseUp={this.onMouseUp} 
//                                     onClose={this.onClose}/>);
//                     break;
//                 default:
//                     console.log('Unknown type!');
//             }
//         }
//         return (
//             <>
//             <BrowserView key={1}>
//                 <div className="mainContent" id="mainContainer" onMouseMove={this.onMouseMove}>
    
//                     {objs}
    
//                 </div>
//                 <Sticky/>
//                 <Taskbar/>
//             </BrowserView>
//             <MobileView key={2}>
//             <div className="mainContent" id="mainContainer">
//                 <h1>computer required :(</h1>
//             </div>
//             </MobileView>
//             </>
//             )
    
// }
// }
// export default gomez;