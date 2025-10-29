import React from 'react';
import offimg from '../Assets/offimg.avif';
import meetimg from '../Assets/meetimg.avif';

export default function Features() {
  return (
    <>
        <div className="offandmeet">
            <div className="offer">
                <div className="currOff">
                    <h2 className="curroffHead">Current Offers</h2>
                    <p className="curroffCon">Limited inventory. Take delivery Today </p>
                    <button className="lmore">Learn More</button>
                </div>
                <div className="offimg">
                    <img className="offimg" src={offimg} height="250px" width="200px"/>
                </div>
            </div>
            <div className="offer">
                <div className="sharemeet">
                    <h2 className="curroffHead">Annual Shareholder Meeting</h2>
                    <p className="curroffCon">The future of Tesla is in your hands. Learn why<br/> your vote matters. </p>
                    <button className="lmore">Learn More</button>
                </div>
                <div className="offimg">
                    <img className="offimg" height="250px" width="200px"/>
                </div>
            </div>
        </div>
    </>
  )
}
