import React, { useState, useEffect } from "react";
import data from "../../result.json";

const Capsules = ({ spaceData }) => {
  const [result, setResult] = useState([]);
  console.log(spaceData);
  let modifiedData = spaceData.map((details) => details);

  console.log(data);

  let obj={};
  let arr=[];

  useEffect(() => {
    function searchItem(item) {
      for (let key in item) {
        if (typeof item[key] === "object") {
          searchItem(item[key]);
        } else {
          setResult((result)=>[...result,{[key]:item[key]}])
        }
      }
    }
    searchItem(modifiedData);
  }, []);

  console.log(arr);

  let header = [
    "capsule_serial",
    "capsule_id",
    "status",
    "original_launch",
    "original_launch_unix",
    "name",
    "flight",
    "landings",
    "type",
    "details",
    "reuse_count",
  ];

  return (
    <table>
      <thead>
        <tr>
          {header.map((ele) => {
            return <th key={ele}>{ele}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((msg) => {
          const {
            capsule_serial,
            capsule_id,
            status,
            original_launch,
            original_launch_unix,
            name,
            flight,
            landings,
            type,
            details,
            reuse_count,
          } = msg;
          return (
            <tr>
              <td>{capsule_serial}</td>
              <td>{capsule_id}</td>
              <td>{status}</td>
              <td>{original_launch}</td>
              <td>{original_launch_unix}</td>
              <td>{name}</td>
              <td>{flight}</td>
              <td>{landings}</td>
              <td>{type}</td>
              <td>{details}</td>
              <td>{reuse_count}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Capsules;
