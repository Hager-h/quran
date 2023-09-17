import React from "react";
import "./Library.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { Usehook } from "../Hook2";

export default function Library() {
  const navigate = useNavigate();

  const playPlaylist = (number) => {
    navigate("/player", { state: { number: number } });
  };

  const [data, err, loading] = Usehook(
    "https://quran-endpoint.vercel.app/quran"
  );

  return (
    <div className="spe ">
      <div className="spe-cla ">
        <h1>ســـور القــرآن الكــريم</h1>

        {loading && (
          <div className="Err one">
            <p className="spinner"></p>
            <p className="">أستغفرك ربى وأتوب إليك</p>
          </div>
        )}
        {data.map((item) => (
          <div
            className="text-sour"
            onClick={() => playPlaylist(item)}
            key={item.number}
          >
            <div className="title">
              {" "}
              <p className="playlist-title">{item[`asma`].ar.long}</p>
            </div>
            <p className="subtitle"> {item.ayahCount} : عدد الآيات</p>
            <p className="subtitle">
              {`نزلت فى : ${
                item.type.ar === "مكة" ? item.type.ar : `ال${item.type.ar}`
              }`}
            </p>
            <div className="icon-player" key={item.id}>
              <AiFillPlayCircle size="50px" color="#ffcbca" />
            </div>
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
