import React from 'react';

const MapComponent = () => {
    return (


        <div style={{height: '100%'}} className="map-container bg-danger">
            <iframe style={{height: '100%'}}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.762609971656!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDE2JzM2LjkiTiAwwrAwMyc0Ni4zIlc!5e0!3m2!1sen!2sus!4v1623637478000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen={false}

            ></iframe>
        </div>

    );
};

export default MapComponent;
