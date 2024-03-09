import React, { useEffect } from "react";
import "./main.css"
const CheckButton = ({value}) => {
  const {row,header}=value
  console.log(row,header,"headerheader")
//   useEffect(()=>{
// console.log(values,"datadata")
//   },[values])
  // console.log(data,"data")
  const handleOnChange = (event) => {
    console.log(value)
    // onChange(event);
  };
  return (
    <div className="form-check form-switch maincss">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onChange={(e) => handleOnChange(e)}
      />
      <label className="form-check-label" for="flexSwitchCheckDefault">
        {/* {label} */}
      </label>
    </div>
  );
};

export default CheckButton;
