import React from 'react';
import teslaLogo from '../Assets/tesla.png';
import region from '../Assets/region.png';
import user from '../Assets/user.png';

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo"><a herf="#"><img src={teslaLogo} alt="LOGO" height="56px" width="150px" /></a></div>
        <div className="opt">
          <span className="veh">Vehicles</span>
          <span className="veh">Energy</span>
          <span className="veh">Charging</span>
          <span className="veh">Discover</span>
          <span className="veh">Shop</span>
        </div>
        <div className="user">
            <div className="reg">
              <img src={region} height="22px" width="22px" />
              <img src={user} height="22px" width="22px"   />
            </div>
        </div>
      </div>
    </>
  )
}
