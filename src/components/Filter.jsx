import React from "react";

const Filter = ({ data }) => {
  const filterHeaders = Object.keys(data[0]);

  console.log(filterHeaders, "filterHeaders");
  return (
    <div>
      {filterHeaders?.map((headers) => (
        <h1>{headers}</h1>
      ))}
    </div>
  );
};

export default Filter;
