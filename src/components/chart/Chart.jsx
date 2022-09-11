import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import { useState } from "react";
import { data } from "../../data";
import Trader from "../trader/Trader";
import Header from "../header/Header";
import "./Chart.css";
import TraderInfo from "../trader-info/TraderInfo";

const Chart = () => {
  const chartRef = useRef();

  const [activeTraderId, setActiveTraderId] = useState(0);
  const [shuffledList] = useState(data.sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 4));
  const [activeTrader, setActiveTrader] = useState(shuffledList[activeTraderId]);

  const handleOnclick = (id) => {
    setActiveTraderId(id);
  };

  useEffect(() => {
    setActiveTrader(shuffledList[activeTraderId])
  }, [activeTraderId]);

  useEffect(() => {
    const chart = createChart(chartRef.current, { width: 856, height: 400 });
    const lineSeries = chart.addLineSeries({
      color: "#8A24F3",
      crosshairMarkerRadius: 10,
    });

    chart.applyOptions({
      timeScale: { barSpacing: 1 },
    })

    lineSeries.setData(
      activeTrader.chart.map((value) => {
        return { time: `2022-04-20`, value: value }
      })
    );
    chart.timeScale().fitContent();

    return () => {
      chart.remove();
    };
  }, [activeTrader]);

  return (
    <>
      <Header />
      <div>
      <div className="container">
        <div>
          {shuffledList.map((obj, index) => (
            <Trader
              handleOnClick={handleOnclick}
              key={index}
              flag={obj.flag}
              index={index}
              name={obj.name}
              monthlyProfit={obj.monthly_profit}
              activeTrader={activeTraderId}
            />
          ))}
        </div>
        <div className='wrap'>
            {activeTrader && (<TraderInfo activeTrader={activeTrader} />)}
            <div ref={chartRef} />
        </div>
      </div>
      </div>
    </>
  );
};
export default Chart;
