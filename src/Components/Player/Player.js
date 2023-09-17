import React, { useState, useEffect } from "react";
import "./Player.css";
import { AiOutlineHeart } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const imgcard = "../../img/5887794b0637567447e71fa127a79508-1.jpg";

function Player({ data }) {
  const [allSoura, setAllSoura] = useState(data);
  const location = useLocation();
  const [currentTrack, setCurrentTrack] = useState([]);
  const [name, setName] = useState("");
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (location.state) {
      setCurrentTrack(location.state.number["recitation"].full);
      setName(location.state.number["asma"].ar.long);
      setCurrent(location.state.number.number);
    }
  }, [location.state]);

  const goToNextSoura = () => {
    if (allSoura.length === 0) {
      return;
    }

    const nextIndex = (current + 1) % allSoura.length;
    const nextSoura = allSoura[nextIndex];

    if (nextIndex >= 0 && nextIndex < allSoura.length) {
      setCurrentTrack(nextSoura.recitation.full);
      setName(nextSoura.asma.ar.long);
      setCurrent(nextIndex);
    }
  };

  const goToPrevSoura = () => {
    const lastIndex = (current - 1) % allSoura.length;
    const lastSoura = allSoura[lastIndex];

    if (lastIndex >= 0 && lastIndex < allSoura.length) {
      setCurrentTrack(lastSoura.recitation.full);
      setName(lastSoura.asma.ar.long);
      setCurrent(lastIndex);
    }
  };
  return (
    <div className="spe flex">
      <div className="right-part">
        <div className="coontrol">
          <div className="card">
            <img src={imgcard} alt="" />

            <div className="text-card">
              <div className="text-icon flex">
                <h4>{name}</h4>
                <span>
                  <AiOutlineHeart />
                </span>
              </div>
            </div>
            <div className="controls-wrapper flex">
              <audio
                autoPlay
                preload="auto"
                src={currentTrack}
                className="voice"
                controls={true}
              />
            </div>
            <div className="btn">
              <button className="" onClick={goToPrevSoura}>
                السابق
              </button>
              <button onClick={goToNextSoura}>التالى</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Player;
