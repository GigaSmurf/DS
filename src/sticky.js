// import { useState } from 'react';
import './css/sticky.css'
import Draggable from 'react-draggable';
// $( function() {
//     $( ".draggable" ).draggable();
//     // $(".add_new").click(function() {
//     //    $sticky = $("<div class='note draggable'><div class='text'><textarea class='cnt' placeholder='Enter note description here'></textarea></div></div>");
//     //   $("#board").append($sticky);
//     //    $( ".draggable" ).draggable();
//     // });
// //   } );


// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id)) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id).onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
// const dragger = () =>{
// dragElement(document.getElementById("sticky"));
// console.log('drag')}
const Sticky = () => {
    //texthere
    const texthere = "TODO list:\n\n☑code\n\n☐eat\n\n☐gym"

    return (
        <Draggable>
            <div id="board">
                <div class="note draggable" id='sticky' >
                    <div class="text">
                        <textarea class="cnt" placeholder={texthere} rows='14'></textarea>
                    </div>
                </div>
            </div>
        </Draggable>

    );

}

export default Sticky;