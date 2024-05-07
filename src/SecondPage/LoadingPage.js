import React from "react"
import './LoadingPage.css'
import ReactCurvedText from "react-curved-text";

const LoadingPage=()=>{
  
    const currentJsx = (
        <ReactCurvedText
          width={100}
          height={100}
          cx={50}
          cy={50}
          rx={37}
          ry={37}
          text={"Lastest update on May 2024 *  "}
          textPathProps={{fill:"#ffd297"}}
          svgProps={{ className: 'rotating-curved-text' }}
        />
      );
return(
    <div className="full-loading-page">
      <div className="loading-left">
        {/* <img src="" alt="logo"></img> */}
       <div className="loading-info">YOUR CHOICE TO LOOK AT MY INFORMATION MEANS A LOT TO ME</div></div>
      <div className="loading-right"><div className="exampleWrapperDiv">{currentJsx}</div></div>
    </div>
)
}
export default LoadingPage