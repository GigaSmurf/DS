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
        var img;
        switch (this.props.icon) {
            case 'recycle':
                img = <img src={recycle} alt="Recycle Bin" className='style' />;
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
            default:
                img = <img src={folder} alt="Icon img" />;
        }
        return (
            <div className="icon"
                id={this.props.id}
                // onMouseDown={this.props.onMouseDown}
                // onMouseUp={this.props.onMouseUp}
                style={{ top: this.props.top, left: this.props.left }}>
                {img}
                {this.props.text}
            </div>
        );
    }
}