import cloudIcon from '../images/cloude_icon.png'
import React from 'react';
export function Tendayforecost(){
    return(
<div className="d-flex overflow-auto">
    <Tendaydata/>
    <Tendaydata/>
    <Tendaydata/>
    <Tendaydata/>
    <Tendaydata/>
    <Tendaydata/>
    <Tendaydata/>
    <Tendaydata/></div>


    );
}
function Tendaydata(){
    return(
<div className=" d-inline border border-danger">
    <h5> Thu 25 </h5>
    <div className="d-flex justify-content-between border border-danger " style={{width:'310px'}}>
        <div className="d-flex">
            <div>
                <img src={cloudIcon}/>
            </div>
            <div>
                <h5>
                    32
                </h5>
                <h5>
                    22
                </h5>
            </div>
        </div>
        <div>
            <h5>Mostly sunny
            </h5>
            <h5><i className="fa fa-home"></i>25 %</h5>
        </div>
    </div>
</div>
    );
}