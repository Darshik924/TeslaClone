import React,{useState} from 'react';
import Img2 from '../Assets/banimg2.avif';
import Img1 from '../Assets/banimg1.avif';
import Img3 from '../Assets/banimg3.avif';

export default function Content(){
  const [ImgSlider,setimgSlider]=useState(1);
  
  const changeImgtoRight=()=>{
    setimgSlider((prev)=>{
      prev++;
      if(prev===3){
        return 0;
      }
      return prev;
    });
  }
  const changeImgtoLeft=()=>{
    setimgSlider((prev)=>{
      prev--;
      if(prev===-1){
        return 2;
      }
      return prev;
    });
  }

  

  const heroStyle0={
    backgroundImage:`url(${Img1})`,
    backgroundSize: 'cover',
    backgroundPosition : 'center',
    backgroundRepeat: 'no-repeat',
  };
  const heroStyle1={
    backgroundImage:`url(${Img2})`,
    backgroundSize:'cover',
    backgroundPosition : 'center',
    backgroundRepeat: 'no-repeat',

  };
  const heroStyle2={
    backgroundImage:`url(${Img3})`,
    backgroundSize: 'cover',
    backgroundPosition : 'center',
    backgroundRepeat: 'no-repeat',
  };
  
  return (
    <>
    <div className="Herobanner">
      {ImgSlider===0 && (
      <>
        <div className="imgslider" style={heroStyle0}>
          <div className="banHeading">
            <h3>Lease from 699$/mo</h3>
          </div>
          <div className="btnImg1">
            <button className="order" >Order Now</button>
            <button className="lmore">Learn More</button>
          </div>
          <div className="buttons"><button className="sliderR" onClick={changeImgtoLeft} >&lt;= </button>
          <button className="sliderL" onClick={changeImgtoRight} >=&gt;</button></div>
        </div>
      </>
      )}

      {ImgSlider===1 && (
        <>
          <div className="imgslider" style={heroStyle1}>
            <div className="banHeading">
              <h1>Model 3</h1>
            </div>
            <div className="btnImg1">
              <button className="order" >Order Now</button>
              <button className="lmore">Learn More</button>
            </div>
            <div className="buttons"><button className="sliderR" onClick={changeImgtoLeft} >&lt;= </button>
            <button className="sliderL" onClick={changeImgtoRight} >=&gt;</button></div>
          </div>
        </>
      )}

      {ImgSlider===2 && (
        <>
          <div className="imgslider" style={heroStyle2}>
            <div className="banHeading">
              <h1>Model Y</h1>
            </div>
            <div className="btnImg1">
              <button className="order" >Order Now</button>
              <button className="lmore">Learn More</button>
            </div>
            <div className="buttons"><button className="sliderR" onClick={changeImgtoLeft} >&lt;= </button>
            <button className="sliderL" onClick={changeImgtoRight} >=&gt;</button></div>
          </div>
        </>
      )}
    </div>
    <br/><br/>
    
    {/* <div className="midImages">
      <div className="btnsliderL">
        {midImgSlider>0 && <button className="midsliderL" onClick={changemImgtoLeft}>&lt;=</button>}
      </div>
      <div className="midimg1" style={midimgstyle1}>
        <div className="midimg1head">
          <h1>Model Y</h1>
        </div>
        <div className="btnImg2">
          <button className="order" >Order Now</button>
          <button className="lmore">Learn More</button>
        </div>
      </div>
      <div className="btnsliderR">
        {midImgSlider<5 && <button className="midsliderR" onClick={changemImgtoRight}>=&gt;</button>}
      </div>
    </div> */}

    </>
  )
}
