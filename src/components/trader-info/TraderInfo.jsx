import React from 'react';
import './TraderInfo.css'

const TraderInfo = ({ activeTrader }) => {
  return (
    <div className='trader-info-div'>
      <div className='info-container'>
        <div className='trader-field-name'>Monthly profit</div>
        <div className='trader-value'>{activeTrader.monthly_profit}%</div>
      </div>
      <div className='info-container'>
        <div className='trader-field-name'>Total Profit</div>
        <div className='trader-value'>{activeTrader.total_profit}%</div>
      </div>
      <div className='info-container'>
        <div className='trader-field-name'>In management</div>
        <div className='trader-value'>{Math.floor(activeTrader.capital)} USD</div>
      </div>
      <div className='info-container'>
        <button className='button' onClick={() => console.log(activeTrader)}>
          Copy Now
        </button>
      </div>
    </div>
  );
};

export default TraderInfo;