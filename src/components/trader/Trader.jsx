import React from "react";
import "./Trader.css";

const Trader = ({
  name,
  flag,
  index,
  monthlyProfit,
  handleOnClick,
  activeTrader,
}) => {

  return (
    <div
      className={`trader-wrap ${activeTrader === index ? "active" : ""}`}
      onClick={() => handleOnClick(index)}
    >
      <div className="trader">
        <div className="img-div">
          <img src={flag} alt="flag" />
        </div>
        <div className="trader-info">
          <div className="trader-name">
            {index + 1}. {name}
          </div>
          <div className="trader-profit">+ {monthlyProfit} %</div>
        </div>
      </div>
    </div>
  );
};

export default Trader;
