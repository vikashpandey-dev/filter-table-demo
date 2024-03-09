import React from "react";
import CheckButton from "./CheckButton";
import "./main.css";

const Filter = ({ data }) => {
  const filterHeaders = Object.keys(data[0]);

  return (
    <div className="">
      <div>
        {filterHeaders.map((header, headerIndex) => (
          <div key={headerIndex}>
            <h1>{header}</h1>
            {data.map((row, rowIndex) => (
              <div key={rowIndex}>
                {header !== "Actions" && (
                 <>
                 {console.log(header,"Ddfsdfdsf")}
                 {row[header]?( <CheckButton key={headerIndex} value={{row,header}} />):(null)}
                 
                 </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
