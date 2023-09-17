
import "./Azkar.css";
import { Azkar } from "./azkardata.js";
export default function Ahadith() {
  return (
    <div className="spe ">
      <div className="spe-claa ">
        <h1>أذكــار الصبـاح والمســاء</h1>
        {Azkar.map((item) => (
          <div className="video-text" key={item.ID}>
            <div className="vid-tex">
              <div className="nass-span">
                <p className="nass">{item.ARABIC_TEXT}</p>

                <span className="soura-span azkar">
                  {" "}
                  <audio controls>
                    <source src={item.AUDIO} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  
}
