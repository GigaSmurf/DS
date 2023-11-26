import { Component } from "react";
import recycle from './icons/recycle_bin_full-2.png';
import resume from './icons/txt-file.png';
import folder from './icons/folder.png';
import explorer from './icons/explorer.png';
import linkedin from './icons/linkedin.png';
import email from './icons/email.png';
import tictactoe from './icons/tictactoe.png';
import minesweeper from './icons/minesweeper.png';
import music from './icons/cdaudio.png';
import mobile from './icons/mobile.png';

import Draggable from 'react-draggable';
export class Icon extends Component {

    render() {
        // var style = 'filler'

        // const changeStyle = () => {
        //     console.log('click')
        //     if(style === 'filler'){
        //         style = 'setter'
        //     }              
        //     else{
        //         style = 'filler'
        //     }
        // }
        // const { isSelected } = this.state;
        var img;
        // Add a 'selected' class if the icon is selected
        // const iconClasses = `icon ${isSelected ? 'selected' : ''}`;
        const { id, onSelect, isSelected, text, top, left } = this.props;

        // Use the 'isSelected' prop to add a 'selected' class to the icon
        const iconClasses = `icon ${isSelected ? 'selected checkered-background' : ''}`;

        switch (this.props.icon) {
            case 'recycle':
                img = <img src={recycle} alt="Recycle Bin" />;
                break;
            case 'resume':
                img = <img src={resume} alt="Text File" className='style' />;
                break;
            case 'folder':
                img = <img src={folder} alt="Folder" className='style' />;
                break;
            case 'explorer':
                img = <img src={explorer} alt="Internet Explorer" className='style' />;
                break;
            case 'linkedin':
                img = <img src={linkedin} alt="Neighborhood Network" className='style' />;
                break;
            case 'email':
                img = <img src={email} alt="Outlook Express" className='style' />;
                break;
            case 'tictactoe':
                img = <img src={tictactoe} alt="Tic Tac Toe" className='style' />;
                break;
            case 'minesweeper':
                img = <img src={minesweeper} alt="Minesweeper" className='style' />;
                break;
            case 'music':
                img = <img src={music} alt="Music" className='style' />;
                break;
            case 'mobile':
                img = <img src={mobile} alt="Mobile" className='style' />;
                break;
            default:
                img = <img src={folder} alt="Icon img" />;
        }
        return (
            <Draggable>
                <div className={iconClasses}
                    id={id}
                    // onMouseDown={this.props.onMouseDown}
                    // onMouseUp={this.props.onMouseUp}
                    style={{ top, left }}
                    onClick={() => onSelect(id)}
                >
                    {img}
                    <div className="icon-text">{text}</div>
                </div>
            </Draggable>
        );
    }
}