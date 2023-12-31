import NavBar from "./navBar";
import {OurWeather} from "./dayforcast";
import {CurrentWeather} from "./CurrentWeather";
import MapComponent from "./Map";
import {SunMoonCondition} from "../SunMoonCondition";
import {Tendayforecost} from "./tendayforecost";
import Footer from "./footer";
import React from "react";

export const WeatherComponent=()=>{
    return(
        <>
            <NavBar />

            <div className="container-xxl p-0 ">
                <div className="row p-0 m-0">
                    <div className="col-12 p-0">
                        <OurWeather weatherapp={"weather app"} tendayweather={"Islamabad,pakistan" } />
                    </div>
                    <div className="col-lg-6 p-0">
                        <CurrentWeather />
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 p-0">
                        <MapComponent />
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 p-0 bg-success">
                        <SunMoonCondition />
                    </div>
                </div>
                <div className=" m-0">
                    <OurWeather weatherapp={" "} tendayweather={"10 Day forecaste" } />
                </div>
                <Tendayforecost  className=" m-0"/>
                <Footer className=" m-0"/>
            </div></>
    )
}

