import React from "react";
import cloudIcon from '../images/cloude_icon.png'

export function CurrentWeather() {
    return (
        <div className="bg-info">
            <div className="d-flex justify-content-between">
                <p>Current Weather <br/><span> 06:06 AM</span> </p>
                <p><i className="fa fa-home"></i> Seeing different weather?</p></div>
            <div className="d-flex align-items-center">
                <img src={cloudIcon} alt="Weather Icon" />
                <div className="p-3">

                    <h1 style={{fontSize:'50px'}}>  75</h1>
                </div>
                <div className="p-3">
                    <p>Mostly cloudy</p>
                    <p>Feels like 75</p>
                </div>
            </div>
            <p>There will be mostly sunny skies. The High will be 87</p>
            <div className="d-flex   flex-wrap " >
                <Airquality Data={"Air quality"} value={86} />
                <Airquality Data={"Wind"} value={4} />
                <Airquality Data={"Humidity"} value={46} />
                <Airquality Data={"Feels like"} value={74} />
                <Airquality Data={"Visibility"} value={2.5} />
                <Airquality Data={"UV index"} value={1} />
                <Airquality Data={"Pressure"} value={29.82} />
            </div>
        </div>
    );
}

function Airquality({ Data, value }) {


    return (
        <div className="d-flex justify-content-center align-items-center text-center"  styale={{  border: "1px solid black", backgroundColor: "red",
             }}>
          <div className="px-3">  <h6>{Data}   <i className="	fas fa-ban"></i></h6>
              <h6>{value}</h6></div>
        </div>
    );
}
