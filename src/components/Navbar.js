import React,{useState} from 'react';
import teslaLogo from '../Assets/tesla.png';
import region from '../Assets/region.png';
import user from '../Assets/user.png';

import modelS from '../Assets/modelS.avif';
import model3 from '../Assets/model3.avif';
import modelY from '../Assets/modelY.avif';
import modelX from '../Assets/modelX.avif';
import Cyber from '../Assets/CyberTruck.avif';

import solarpan from '../Assets/solarpan.avif';
import solarroof from '../Assets/solarroof.avif';
import powerwall from '../Assets/power wall.avif';
import megapack from '../Assets/megapack.avif';

import charging from '../Assets/charging.avif';
import homecharging from '../Assets/home charding.avif';
import supercharging from '../Assets/super charging.avif';
import wallconnect from '../Assets/wallconnect.avif';
import superbus from '../Assets/superbus.avif';

export default function Navbar() {
  const [VehHele,setVehHele]=useState(false);
  const [EneHele,setEneHele]=useState(false);
  const [charHele,setcharHele]=useState(false);

  const handleMouseOut=()=>{
    setVehHele(false);
    setEneHele(false);
    setcharHele(false);
  }
  const handleVehNavbarExpansion=()=>{
    setVehHele(true);
  }
  const handleEneNavbarExpansion=()=>{
    setEneHele(true);
  }
  const handlecharNavbarExpansion=()=>{
    setcharHele(true);
  }


  const Nav=()=>{
    if(VehHele){
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
            <div className="names1">
              <div id="n1">Model S</div>
              <div id="n2">Model 3</div>
              <div id="n3">Model Y</div>
              <div id="n4">Model X</div>
              <div id="n5">CyberTurck</div>
            </div>
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
    }else if(EneHele){
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
            <img src={solarpan} height="170px" width="200px" alt="modelS"/>
            <img src={solarroof} height="170px" width="200px" alt="modelS"/>
            <img src={powerwall} height="170px" width="200px" alt="modelY"/>
            <img src={megapack} height="170px" width="200px" alt="modelX"/>
            <div className="names">
              <div id="n1">solar pannel</div>
              <div id="n2">solar roof</div>
              <div id="n3">power wall</div>
              <div id="n4">megapack</div>
            </div>
          </div>
          <div className="hopt">
            <div className="c">Scheduler a Consultation</div>
            <div className="c">why solar</div>
            <div className="c">Incentives</div>
            <div className="c">Support</div>
            <div className="c">Partner with Tesla</div>
            <div className="c">Commercial</div>
            <div className="c">Utilities</div>
          </div>
        </div>
      </>
      );
    }else if(charHele){
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
            <img src={charging} height="130px" width="160px" alt="modelS"/>
            <img src={homecharging} height="130px" width="160px" alt="modelS"/>
            <img src={supercharging} height="130px" width="160px" alt="modelY"/>
            <img src={wallconnect} height="130px" width="160px" alt="modelX"/>
            <img src={superbus} height="130px" width="160px" alt="Cyber"/>
            <div className="names2">
              <div id="n1">Charging</div>
              <div id="n2">Home Charging</div>
              <div id="n3">Super Charging</div>
              <div id="n4">Wall Connector for business</div>
              <div id="n5">Supercharger for business</div>
            </div>
          </div>
          <div className="hopt">
            <div className="c">Help me charge</div>
            <div className="c">Charging Calculator</div>
            <div className="c">Charging with NACS</div>
            <div className="c">Super charger Voting</div>
            <div className="c">Host a supercharger</div>
          </div>  
         </div>
        </>

      );
    }else{
      return (
      <div className="navbar">
        <div className="logo"><a herf="#"><img src={teslaLogo} alt="LOGO" height="56px" width="150px" /></a></div>
        <div className="opt"  >
          <span className="veh" onMouseOver={handleVehNavbarExpansion} >Vehicles</span>
          <span className="veh" onMouseOver={handleEneNavbarExpansion}>Energy</span>
          <span className="veh" onMouseOver={handlecharNavbarExpansion}>Charging</span>
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
