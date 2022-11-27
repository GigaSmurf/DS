import resume from './resume.pdf'
import React, { Component } from 'react';
export class Window extends Component {
    constructor(props) {
        super(props);

        this.changeTitle = this.changeTitle.bind(this);

        this.state = {
            title: "",
        }
    }

    componentDidMount() {
        this.setState({ title: this.props.title })
    }

    changeTitle(title) {
        this.setState({ title });
    }

    render() {
        var content;
        var openBtn;

        switch(this.props.windowType) {
            case 'resume': 
                content = (<object data={resume} type="application/pdf">Resume</object>); 
                openBtn = (<div className='openBtn' title="Open in New Tab" onClick={() => {window.open(resume)}}>O</div>)
                break;
            default: content = null; console.log(`Error: Unknown type: ${this.props.windowType}`);
        }

        return (
            <div className='window' 
                 style={{ top: this.props.top, left: this.props.left, zIndex: this.props.zIndex, width: this.props.width, height: this.props.height }}>
                <div className='border'
                     onMouseDown={this.props.onMouseDown}
                     onMouseUp={this.props.onMouseUp}
                     id={this.props.id}
                >
                    <span unselectable='on'>{this.state.title}</span>
                    {openBtn}
                    <div className='closeBtn' title="Close" onClick={() => {this.props.onClose(this.props.id)}}>X</div>
                </div>
                <div className='content' style={{backgroundColor:"black"}}>
                    {content}
                </div>
            </div>
        );
    }
}