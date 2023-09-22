import React from "react";
import "../Library/Library.css";
import "./asmaa.css"
import { useState, useEffect } from "react";

import axios from "axios";
export default function Asmaa() {

  const [data, setdata] = useState([]);
  const [err, seterr] = useState(null);
  const [loading, setloading] = useState(null);

  useEffect(() => {
    setloading(true);
    axios
      .get("js/asmaa.json")
      .then((res) => {
        console.log(res)
        setloading(false);
        setdata(res.data);
        seterr(false);
      })
      .catch((err) => {
        setloading(false);
        seterr("أستغفرك ربى وأتوب إليك");
      });
  }, []);
  
  return (
    <div className="spe ">
      <div className="spe-cla ">
        <h1>أسمــاء الله الحـسنى          
          </h1>

        {loading && (
          <div className="Err one">
            <p className="spinner"></p>
            <p className="">أستغفرك ربى وأتوب إليك</p>
          </div>
        )}
        {console.log(data)}
        {data.map((item) => (
          <div
            className="text-sour  text-sour-asmaa    "
            key={item.id}
          >
            <div className="title title-asmaa">
              {" "}
              <p className="playlist-title">{item.name}</p>
            </div>
            { <p className="subtitle asmaa-text"> {item.text} </p> }
          
          </div>
        ))}
        {err && (
          <div className="Err">
            <p className="">{err}</p>
          </div>
        )}
      </div>
    </div>
  );
}
