import React from "react";
import umbrella from '../images/umbrella.png'
import outDoors from '../images/tempsnip.png'
import clothing from '../images/tshirt.png'
import windChilly from '../images/hiking.png'

function Footer() {
    return (
        <div className="row m-0">
            <div className="col-xxl-9 col-lg-9   bg-success">
                <div className="p-3 border-bottom border-success">
                    <a href="#"
                       className="p-3 border-bottom text-decoration-none text-danger border-primary border-0">Summary</a>
                    <a href="#"
                       className="p-3 mx-2 border-bottom text-decoration-none text-danger border-primary border-0">Hourly</a>
                    <a href="#"
                       className="p-3 border-bottom text-decoration-none text-danger border-primary border-0">Hourly</a>
                </div>
            </div>
            <div className="col-xxl-3 col-lg-3 border " style={{background:'#504c41'}}>
                <p className="border-bottom p-3 border-success">Suggestions for your day</p>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column  ">
                        <Umberella  title={"Umbrella"} subTitle={"No need"}  images={umbrella}/>
                        <Umberella  title={"Outdoors"} subTitle={"Poor"} images={windChilly}/>
                    </div>
                    <div className="d-flex  flex-column  ">
                        <Umberella  title={"Clothing"} subTitle={"Shorts"} images={clothing}/>
                        <Umberella  title={"Windchilly"} subTitle={"Safe"} images={outDoors}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Umberella(props) {
    let { title, subTitle, images } = props;
    return (
        <div className=" d-flex p-3 border   rounded" style={{background:'#504c41'}}>
            <img
                style={{
                    width: '50px',
                    height: '45px',
                    padding:'10px',
                    borderRadius: '  30%',
                    background:'red'

                }}
                src={images}
                alt={title}
            />
            <span>
        <p>
          {title}
            <br /> {subTitle}
        </p>
      </span>
        </div>
    );
}

export default Footer;
