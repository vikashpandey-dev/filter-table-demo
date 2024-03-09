import React from "react";

const DataTable = ({ data, onAction, loading = false }) => {
  const tableHeaders = Object.keys(data[0]);

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            {tableHeaders?.map(
              (header, index) =>
                header !== "Actions" && (
                  <th key={index}>{header.toLocaleUpperCase()}</th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableHeaders?.map(
                (header, colIndex) =>
                  header !== "Actions" && (
                    <td key={colIndex}>{row[header].toString()}</td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
