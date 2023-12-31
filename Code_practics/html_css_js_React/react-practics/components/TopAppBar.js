import React from "react";

export default function TopAppBar() {
    return (<div className="bg-primary p-2 sticky-top d-flex text-white align-items-center ">
        <RoundBackgroundText  />
        <h3>&nbsp;&nbsp;&nbsp;To Do application</h3>
    </div>)


}


const RoundBackgroundText = (props) => {
    let titleStyles = {borderRadius: '50%', border: '2px solid red',width:'60px',height:'60px'}
    return (<>
            <img style={titleStyles} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm3w55OLsIRhRDSSOCJt3o1jfYPL4eHOmBGw&usqp=CAU" alt=""/>
            </>

    )
}