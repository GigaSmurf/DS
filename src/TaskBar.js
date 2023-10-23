import { Component } from "react";
import logo from './icons/windows98logo.png';
import folder from './icons/folder.png';
import './css/taskbar.css';

export class Taskbar extends Component {
    constructor(props) {
        super(props);
        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const amPm = hours >= 12 ? 'PM' : 'AM';

        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }

        const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${amPm}`;

        this.state = {
            date: formattedTime,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const amPm = hours >= 12 ? 'PM' : 'AM';

        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }

        const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes} ${amPm}`;

        this.setState({ date: formattedTime });
    }

    clicker() {
        window.open("https://dylansyahputra.tech", "_self")
    }

    render() {
        var { date } = this.state;
        // var dateArr = date.toString().split(' ');
        // // console.log(dateArr)
        // var time = dateArr.slice(4, 5).join(), day = dateArr.slice(0, 3).join(' ');
        return (
            <div className='taskbar'>
                <div className="start-button-wrapper">
                    <img src={logo} alt="Start" className="start-button" onClick={this.clicker}></img>
                </div>
                <div>

                </div>

                {/* <img src={folder} alt="" className='second'></img> */}

                <div className='container'>
                </div>
                <div className="time-wrapper">
                    <span className='time'>
                        {/* {time}<br />
                    {day} */}
                        {date}
                    </span>
                </div>
            </div>
        )
    }
}
export default Taskbar;