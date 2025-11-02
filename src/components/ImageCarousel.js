import React, {useState} from 'react';

import midImg1 from '../Assets/midsuzuki.avif';
import midImg2 from '../Assets/midsedan.avif';
import midImg3 from '../Assets/midutiltruck.avif';
import midImg4 from '../Assets/midluxsuv.avif';
import midImg5 from '../Assets/midsedan.avif';

const ImageCarousel=()=>{
  const [midImgSlider,setmimgSlider]=useState(0);

  const changemImgtoRight=()=>{
      setmimgSlider((prev)=>{
        prev++;
        if(prev===5){
          return 0;
        }
        return prev;
      });
    }
    const changemImgtoLeft=()=>{
      setmimgSlider((prev)=>{
        prev--;
        if(prev===-1){
          return 4;
        }
        return prev;
      });
    }

  return (
      <div className="cc">
        <div className="cw" style={{ transform: `translateX(-${midImgSlider*100}vw)`}}>
          {midImgSlider===0 && <div className="cslide">
              <img src={midImg1} alt="img" className="cimg" />
          </div>}
          {midImgSlider===1 &&<div className="cslide">
              <img src={midImg2} alt="img" className="cimg" />
          </div>}
          {midImgSlider===2 && <div className="cslide">
              <img src={midImg3} alt="img" className="cimg" />
          </div>}
          {midImgSlider===3 && <div className="cslide">
              <img src={midImg4} alt="img" className="cimg" />
          </div>}
          {midImgSlider===4 && <div className="cslide">
              <img src={midImg5} alt="img" className="cimg" />
          </div>}     
        </div>
        <button onClick={changemImgtoLeft} className="cb cbl">&#10094;</button>
        <button onClick={changemImgtoRight} className="cb cbr">&#10095;</button>
      </div>
  );
};

export default ImageCarousel;