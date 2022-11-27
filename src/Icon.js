import { Component } from "react";
import icon from './icons/ie.png';
import resume from './icons/txt-file.png';

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
        switch(this.props.icon) {
            case 'resume':
                img = <img src={resume} alt="Icon img" className='style' />;
                break;
            default:
                img = <img src={icon} alt="Icon img"/>;
        }
        return(
        <div className="icon"
                id={this.props.id}
                // onMouseDown={this.props.onMouseDown}
                // onMouseUp={this.props.onMouseUp}
                style={{top:this.props.top, left:this.props.left}}>
            {img}
            {this.props.text}
        </div>
        );
    }
}