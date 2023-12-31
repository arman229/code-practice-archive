import React from "react";
import {Header} from "./Header";
import mainimage from "../images/banner.jpg";
import chartimage from "../images/icon_chat.svg";
import msgimage from "../images/icon_mail.svg";
import mobileimage from "../images/icon_phone.svg";
import whatsup from "../images/icon_whatsup.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import {Footer} from "./Footer";


export const PropertyDetail = () => {
    const contextUsIconStyle = {
        padding: 8,
        borderRadius: 12,
        backgroundColor: "#f6f5f7"
    }
    return (
        <>
            <Header showProfileLogo={false}/>
            <div className="container" style={{maxWidth: 1140}}>
                <h2 className="mt-5 mb-4 ">3 Bedroom Apt 5 Min From 770 Till After Tishrei</h2>
                <div id="carouselMain" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators position-absolute" style={{bottom: "-50px"}}>
                        <button type="button" data-bs-target="#carouselMain" data-bs-slide-to="0" aria-current="true"
                                className="active " style={{backgroundColor: "gray"}}></button>
                        <button type="button" style={{backgroundColor: "gray"}} data-bs-target="#carouselMain"
                                data-bs-slide-to="1"></button>
                        <button type="button" style={{backgroundColor: "gray"}} data-bs-target="#carouselMain"
                                data-bs-slide-to="2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={mainimage} className="w-100 rounded-3"/>
                        </div>
                        <div className="carousel-item">
                            <img src={mainimage} className="w-100 rounded-3"/>
                        </div>
                        <div className="carousel-item">
                            <img src={mainimage} className="w-100 rounded-3"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselMain"
                            data-bs-slide="prev">
                        <div className="rounded-circle text-center"
                             style={{width: 48, height: 48, backgroundColor: "white"}}>
                            <i className="bi bi-chevron-left text-dark" style={{fontSize: "2rem"}}></i>
                        </div>

                    </button>
                    <button className="carousel-control-next " type="button" data-bs-target="#carouselMain"
                            data-bs-slide="next">
                        <div className="rounded-circle text-center"
                             style={{width: 48, height: 48, backgroundColor: "white"}}>
                            <i className="bi bi-chevron-right text-dark" style={{fontSize: "2rem"}}></i>
                        </div>

                    </button>


                </div>


                <div className="ps-3 ps-lg-0">
                    <h3 className='mt-5 mb-4 text-dark'>More information</h3>
                    <p> Kingston & Eastern Pkwy</p>
                    <p> Large luxury 4 bedroom</p>
                    <p> Short term rental</p>
                    <p className='mb-5 mt-4 '> Located Across 770</p>
                    <p>-Large living room and dining room</p>
                    <p>-4 bedroom, (4 full +2 twin + bunk bed + pull out bed)</p>
                    <p> -air mattresses provided upon request </p>
                    <p> -2 full bathrooms</p>
                    <p> -Playpen</p>
                    <p>-Full kitchen</p>
                    <p> -Washer & Dryer</p>
                    <p> -Wifi</p>
                    <p className="mb-4">-Full Kitchen</p>
                    <p>*דירה לטווח קצר*</p>
                    <p>*מול 770 *</p>
                    <p className='mt-4'>4 חדרים </p>
                    <p>(6 מיטות רגילים, ו2 מיטות קומותיים, ומזרונים לפי בקשה)</p>
                    <p>2 חדרי שירותים לול לתינוק </p>
                    <p>טבח שלם </p>
                    <p> מכונת כביסה ומייבש </p>
                    <p> אינטרנט wifi</p>
                    <p className='mt-4'>לפרטים, ליצור קשר עם ישראל 347-450-2447 </p>
                    <p>מדבר אנגלית, עברית וצרפתית</p>
                </div>
                <h4 className="text-center mt-5">Contact information</h4>
                <div className='text-center d-flex gap-5 mt-3 mb-5 px-5 justify-content-center'>
                    <img src={chartimage} alt="Logo" style={contextUsIconStyle} className="btn btn-light"/>
                    <img src={msgimage} alt="Logo" style={contextUsIconStyle} className="btn btn-light"/>
                    <img src={mobileimage} alt="Logo" style={contextUsIconStyle} className="btn btn-light"/>
                    <img src={whatsup} alt="Logo" style={contextUsIconStyle} className="btn btn-light"/>
                </div>
            </div>
            <Footer/>

        </>
    )
}
