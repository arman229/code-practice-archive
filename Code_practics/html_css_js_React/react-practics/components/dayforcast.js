import React from 'react';

export function OurWeather(props) {
    const styles = {
        // marginTop: "70px" // Add the 'px' unit to specify the margin-top value in pixels
    };

    return (
        <div className="d-flex justify-content-between   bg-success" style={styles}>
            <h5>{props.tendayweather}</h5>
            <p>{props.weatherapp}</p>
        </div>
    );
}
