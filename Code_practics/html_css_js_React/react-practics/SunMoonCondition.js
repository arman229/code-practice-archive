import React, {useEffect, useRef, useState} from "react";
import './App.css'
import cloudIcon from './images/cloude_icon.png'
import {Button} from "@mui/material";

export const SunMoonCondition = (props) => {
    const [data, setData] = useState(null);

    const getWeather = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log('Error:', error);
        }
    }

    useEffect(() => {
        getWeather();
    }, []);
    const imageStyls = {
        height: 30,
        width: 30
    }
    const cardStyle = {
        padding: 0,
        margin: 0,
        height: "100%"
    }
    return (
        <>
            {data &&<p>{data[1].email}</p>}
            <div className="card">
                <div className="card-body">
                    <h6>Sun/Moon</h6>
                    <div className="d-flex justify-content-between">
                        <ImageWithText title={"Sunrise"} time={"5:04 AM"}/>
                        <SunArc dayPassed={40} dayLength={"14h 30min"}/>
                        <ImageWithText title={"Sunset"} time={"7:04 PM"}/>

                    </div>
                    <div className="d-flex justify-content-between">
                        <ImageWithText title={"Moonrise"} time={"5:13 AM"}/>

                        <ImageWithText title={"Moonset"} time={"8:04 PM"}/>
                    </div>
                    <div className="d-flex justify-content-between"><h6>Daytime Duration: 12:00 </h6><img
                        src={cloudIcon} style={imageStyls}/></div>
                    <div className="d-flex justify-content-between"><h6>Daytime Duration: 12:00 </h6><img
                        src={cloudIcon} style={imageStyls}/></div>
                </div>
            </div>
        </>


    )
}


const SunArc = (props) => {
    const {dayPassed, dayLength} = props
    const canvasRef = useRef()
    const [percentage, setPercentage] = useState(80)
    const canvasStyle = {
        border: '1px solid green',
        /* width: 100,
         height: 80*/
    }
    const increment = () => {
        setPercentage(percentage + 5)
    }
    const decrement = () => {
        setPercentage(percentage - 5)
    }

    function getPositionInCircle(cx, cy, angle, radius) {
        const x = cx - radius * Math.cos(angle);
        const y = cy - radius * Math.sin(angle);
        return {x, y};
    }

    const drawArch = () => {

        let canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const cAngle = (Math.PI * percentage) / 100
        const {x, y} = getPositionInCircle(50, 40, cAngle, 40)
        console.log(`cx:${x} cy ${y}`)
        let endAngle = Math.PI + (Math.PI * percentage) / 100
        context.beginPath();
        // context.arc(180, 180, 100, 0, Math.PI,true );
        context.arc(50, 40, 40, Math.PI, Math.PI * 2, false);
        context.lineWidth = 1;
        context.setLineDash([5, 5]);
        context.strokeStyle = 'gray';
        context.stroke();

        context.beginPath();
        // context.arc(180, 180, 100, 0, Math.PI,true );
        context.arc(50, 40, 40, Math.PI, endAngle, false);
        context.setLineDash([]);
        context.lineWidth = 4;
        context.strokeStyle = 'red';
        context.stroke();


        context.beginPath();
        context.arc(x, y, 4, 0, 2 * Math.PI);
        context.fillStyle = 'purple';
        context.fill();
        context.closePath();

    }
    useEffect(drawArch, [percentage])


    return (
        <>
            <canvas ref={canvasRef} height={80} width={100} style={canvasStyle}>

            </canvas>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </>

    )
}
const ImageWithText = (props) => {
    const {title, time} = props
    const imageStyls = {
        height: 30,
        width: 30
    }
    return (
        <div className="d-flex flex-column align-items-center">
            <img src={cloudIcon} style={imageStyls}/>
            <h6 class="mb-0">{title}</h6>
            <p>{time}</p>

        </div>
    );
}
