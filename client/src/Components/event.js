import left from "../Assets/left.svg";
import right from "../Assets/right.svg";
import { useEffect, useState } from "react";

const Event = ({ event }) => {
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState(45);

  useEffect(() => {
    if (window.innerWidth <= 1000) setWidth(85);
    else setWidth(45);
  }, []);

  const handleClick = (sign) => {
    if (current === event.img.length - 1 && sign === 1) {
      setCurrent(0);
      return;
    }
    if (current === 0 && sign === -1) {
      setCurrent(event.img.length - 1);
      return;
    }
    setCurrent((current) => current + sign);
  };

  return (
    <div className="event-wrapper">
      <div className="event-header">
        <div className="event-name">{event.name}</div>
        <div className="event-info">{event.info}</div>
      </div>

      {window.innerWidth > 1000 && (
        <div className="event-btn-wrapper">
          <div
            style={{ marginRight: "15px" }}
            onClick={() => {
              handleClick(-1);
            }}
          >
            <img src={left} alt="" />
          </div>
          <div
            style={{ marginLeft: "15px" }}
            onClick={() => {
              handleClick(1);
            }}
          >
            <img src={right} alt="" />
          </div>
        </div>
      )}

      <div className="event-slider-outer">
        <div
          className="event-slider"
          style={{
            transform: `translateX(-${
              current * width + (current * 1600) / window.innerWidth
            }vw)`,
          }}
        >
          {event.img.map((img, index) => {
            return (
              <div key={index} className="event-img">
                <img
                  src={img}
                  alt=""
                  style={{
                    opacity: current === index ? "1" : "0.5",
                    width: `${width}vw`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {window.innerWidth <= 1000 && (
        <div className="event-btn-wrapper">
          <div
            style={{ marginRight: "6px" }}
            onClick={() => {
              handleClick(-1);
            }}
          >
            <img src={left} alt="" />
          </div>
          <div
            style={{ marginLeft: "6px" }}
            onClick={() => {
              handleClick(1);
            }}
          >
            <img src={right} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
