import '../styles/mainpage.css'
import {Timeline} from './Timeline'
import {Header} from "./Header";
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";
import ImagePick from "./ImagePick";
import {Footer} from "./Footer";
import {Link} from "react-router-dom";

export const MainPage = () => {
    function onImageselected(e) {
        console.debug("onImageselected:" + e)
    }

    return (
        <>

            <Header showProfileLogo={true}/>
            <div className="container" style={{maxWidth: 1140}}>
                <Timeline currentIndex={0}/>
                <form>

                    <label htmlFor="property-headline" className="mb-2"><h4>Headline</h4></label>
                    <input type="text" className="form-control" id="property-headline"
                           placeholder="e.g . Newly furnished 2 bedroom apartment"/>


                    <label htmlFor="property-description" className='mb-2 mt-3'><h4>Description</h4></label>
                    <div className="position-relative">
                            <textarea className="form-control description-area" rows={15} id="property-description"
                                      placeholder="Tell us more about your apartment..."></textarea>
                        <button type="button" className="mainButton position-absolute end-0 top-0 m-2">ChatGPT</button>
                    </div>


                    <label htmlFor="property_images" className='mt-3'><h4>Drag & Drop to Upload and Re-order Images</h4>
                    </label>
                    <div className="row" id="property_images">
                        <div className="col-md-6 col-12 my-4">
                            <ImagePick onImageSelected={onImageselected} heightFromParent={424}/>

                        </div>
                        <div className="col-md-6 col-12 ">
                            <div className='row mt-4'>
                                <div className="col-6">
                                    <ImagePick onImageSelected={onImageselected} heightFromParent={200}/>
                                </div>

                                <div className="col-6">
                                    <ImagePick onImageSelected={onImageselected} heightFromParent={200}/>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className="col-6">
                                    <ImagePick onImageSelected={onImageselected} heightFromParent={200}/>
                                </div>

                                <div className="col-6">
                                    <ImagePick onImageSelected={onImageselected} heightFromParent={200}/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <h4 className="mt-3 mb-3">Contact Information</h4>

                    <div className="row gy-3 row-cols-sm-1 row-cols-md-2">
                        <div>

                            <label htmlFor="personal_email" className="mb-2"><h6>Email<span
                                className="text-danger">*</span></h6></label>
                            <div className="position-relative">
                                <input type="email" className="form-control ps-5" id="personal_email"
                                       placeholder="Type your email address"/>
                                <i className="p-3 bi bi-envelope opacity-50 p-1 position-absolute top-50 translate-middle-y start-0"></i>

                            </div>
                        </div>

                        <div>
                            <label htmlFor="personal_phone" className="mb-2"><h6>Phone number<span
                                className="text-danger">*</span></h6></label>

                            <div className="position-relative">
                                <input type="tel" className="form-control ps-5" id="personal_phone"
                                       placeholder="Type your phone number"/>
                                <i className="p-3 bi bi-telephone opacity-50 p-1 position-absolute top-50 translate-middle-y start-0"></i>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="personal_whatsApp" className="mb-2"><h6>WhatsApp<span
                                className="text-danger">*</span></h6></label>
                            <div className="position-relative">
                                <input type="tel" className="form-control ps-5" id="personal_whatsApp"
                                       placeholder="Type your phone number"/>
                                <i className="p-3 bi bi-whatsapp opacity-50 p-1 position-absolute top-50 translate-middle-y start-0"></i>
                            </div>

                        </div>

                    </div>

                    <div className="d-flex py-5 justify-content-end">
                        <Link to="/detail">
                            <button type="button" className="mainButton">Save & Continue</button>
                        </Link>
                    </div>

                </form>
            </div>
            <Footer/>
        </>
    )
}
