import { Component } from "react";
import logo from './icons/Windows_Vista.png';
import folder from './icons/folder.png';
import './css/taskbar.css';

export class Taskbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()})
    }
    clicker() 
    {
            window.open("https://gigasmurf.github.io/dylansyahputra", "_self")
    }

    render() {
        var { date } = this.state;
        var dateArr = date.toString().split(' ');
        // console.log(dateArr)
        var time = dateArr.slice(4,5).join(), day = dateArr.slice(0,3).join(' '); 
        return (
            <div className='taskbar'>
                <img src={logo} alt=""className='first' onClick={this.clicker}></img>
                <div>
                </div>
                <img src={folder} alt="" className='second'></img>
                <div className='container'>
                </div>
                <span className='time'>
                    {time}<br/>
                    {day}
                    
                </span>
            </div>
    )}
}
export default Taskbar;