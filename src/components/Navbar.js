import React,{useState} from 'react';
import teslaLogo from '../Assets/tesla.png';
import region from '../Assets/region.png';
import user from '../Assets/user.png';

import modelS from '../Assets/modelS.avif';
import model3 from '../Assets/model3.avif';
import modelY from '../Assets/modelY.avif';
import modelX from '../Assets/modelX.avif';
import Cyber from '../Assets/CyberTruck.avif';

export default function Navbar() {
  const [Hele,setHele]=useState(false);

  const handleMouseOut=()=>{
    setHele(false);
  }
  const handleNavbarExpansion=()=>{
      setHele(true);
  }


  const Nav=()=>{
    if(Hele){
      return (
      <>
        <div className="navbar" >
          <div className="logo"><a herf="#"><img src={teslaLogo} alt="LOGO" height="56px" width="150px" /></a></div>
          <div className="opt"  >
            <span className="veh">Vehicles</span>
            <span className="veh">Energy</span>
            <span className="veh">Charging</span>
            <span className="veh">Discover</span>
            <span className="veh">Shop</span>
          </div>
          <div className="user">
              <div className="reg">
                <img src={region} height="22px" width="22px" alt="region" />
                <img src={user} height="22px" width="22px" alt="user"   />
              </div>
          </div>
        </div><br/>
        
        <div className="models" onMouseLeave={handleMouseOut}>
          <div className="cars">
            <img src={modelS} height="130px" width="160px" alt="modelS"/>
            <img src={model3} height="130px" width="160px" alt="modelS"/>
            <img src={modelY} height="130px" width="160px" alt="modelY"/>
            <img src={modelX} height="130px" width="160px" alt="modelX"/>
            <img src={Cyber} height="130px" width="160px" alt="Cyber"/>
          </div>
          <div className="hopt">
            <div className="c">Current Offers</div>
            <div className="c">Demo Drive</div>
            <div className="c">Trade-in</div>
            <div className="c">Pre-owned</div>
            <div className="c">Features</div>
            <div className="c">Help me choose</div>
            <div className="c">Compare</div>
            <div className="c">Workshops</div>
            <div className="c">Help me change</div>
            <div className="c">Fleet</div>
          </div>
        </div>
      </>
      );
    }else{
      return (
        <div className="navbar">
        <div className="logo"><a herf="#"><img src={teslaLogo} alt="LOGO" height="56px" width="150px" /></a></div>
        <div className="opt"  >
          <span className="veh" onMouseOver={handleNavbarExpansion} >Vehicles</span>
          <span className="veh">Energy</span>
          <span className="veh">Charging</span>
          <span className="veh">Discover</span>
          <span className="veh">Shop</span>
        </div>
        <div className="user">
            <div className="reg">
              <img src={region} height="22px" width="22px" alt="region" />
              <img src={user} height="22px" width="22px" alt="user"   />
            </div>
        </div>
      </div>
      );
    }

  };

  return (
    <>
      <Nav/>
    </>
  )
}



{/* <div className="navbar">
        <div className="logo"><a herf="#"><img src={teslaLogo} alt="LOGO" height="56px" width="150px" /></a></div>
        <div className="opt"  >
          <span className="veh" onMouseOver={handleNavbarExpansion} >Vehicles</span>
          <span className="veh">Energy</span>
          <span className="veh">Charging</span>
          <span className="veh">Discover</span>
          <span className="veh">Shop</span>
        </div>
        <div className="user">
            <div className="reg">
              <img src={region} height="22px" width="22px" alt="region" />
              <img src={user} height="22px" width="22px" alt="user"   />
            </div>
        </div>
      </div> */}


{/* <div className="navbar">
        <div className="logo"><a herf="#"><img src={teslaLogo} alt="LOGO" height="56px" width="150px" /></a></div>
        <div className="opt"  >
          <span className="veh" onMouseOver={handleNavbarExpansion} >Vehicles</span>
          <span className="veh">Energy</span>
          <span className="veh">Charging</span>
          <span className="veh">Discover</span>
          <span className="veh">Shop</span>
        </div>
        <div className="user">
            <div className="reg">
              <img src={region} height="22px" width="22px" alt="region" />
              <img src={user} height="22px" width="22px" alt="user"   />
            </div>
        </div>
      </div> */}