import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
constructor(props){
super(props)
this.state = {
    time: new Date()
}
this.timerId = null
}

componentDidMount(){
    this.timerId = setInterval(()=>{
        this.setState({
            time: new Date()
        })
    },1000)
}
componentWillUnmount(){
    clearInterval(this.timerId)
}

getTime(){
const currentTime = this.state.time
const [hours,minutes,seconds] = [currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds()]
const ampm = `${hours >=12 ? "PM" : "AM"}`  

const hour = hours> 12? hours-12 : hours
const getHours = this.padNumber(hour) 
const getMinutes = this.padNumber(minutes) 
const getseconds = this.padNumber(seconds)

const timeString = `${getHours}: ${getMinutes}: ${getseconds} ${ampm}` 
return timeString;
}
padNumber(num){
    return `${num < 10 ? "0" : ""}${num}`
}
    render() {

        return(
            <>
            <div className="Clock">
            <h3 id="time">{this.getTime()}</h3>
            </div>
               
            </>
        )
    }
}


export default App;
