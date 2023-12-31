import React from "react";
import appLogo from "../images/app_logo.png";
import profileIcon from "../images/icon_profile.svg";

export const Header = ({showProfileLogo}) => {

    return (
        <>
            <div className="d-flex py-5 px-5">
                <div className="flex-grow-1 text-center">
                    <img src={appLogo} alt="Col live logo" className="img-fluid"/>
                </div>

                {showProfileLogo ? (
                    <div>
                        <img src={profileIcon} alt="Profile logo" className="img-fluid px-2 btn" />
                    </div>
                ) : null}

            </div>
            <Divider/>
        </>)
}


const Divider = () => {
        const dividerStyle = {
            height: '1px',
            width: '100%',
            backgroundColor: '#E5E3E8'
        };


        return <div style={dividerStyle}></div>;
    }
;
