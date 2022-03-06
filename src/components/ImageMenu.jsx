import React from "react";


export const ImageMenu = ({ activeOption, setActiveOption }) => {
  console.log(activeOption);
  return (
    <div className="row">
        <div className="line-1">
        <div className="row">
            <div className="line-1">
                <div 
                   className={`line-img1 line-img-cotainer  ${activeOption === 'line_img_1' ? "--is-active" : ""}`}
                   data-option='line_img_1'
                   onClick={() => setActiveOption('line_img_1')}
                   key='line_img_1'
                   >
                    <img src="./images/Packet/L1_1.svg" alt=""/>
                </div>
                <div 
                   className={`line-img1 line-img-cotainer  ${activeOption === 'line_img_2' ? "--is-active" : ""}`}
                   data-option='line_img_2'
                   onClick={() => setActiveOption('line_img_2')}
                   key='line_img_2'
                   >
                     <img src="./images/Packet/L1_2.svg" alt=""/>
                </div>
                <div 
                   className={`line-img1 line-img-cotainer  ${activeOption === 'line_img_3' ? "--is-active" : ""}`}
                   data-option='line_img_3'
                   onClick={() => setActiveOption('line_img_3')}
                   key='line_img_3'
                   >
                    <img src="./images/Packet/l1_3.svg" alt=""/>
                </div>
            </div>
            <div className="line-2">
                <div
                 className={`line-img4  ${activeOption === 'line_img_4' ? "--is-active" : ""}`}
                 data-option='line_img_4'
                 onClick={() => setActiveOption('line_img_4')}
                 key='line_img_4'
                 >
                    <img src="./images/Packet/L2_1.svg" alt=""/>
                </div>
                <div
                 className={`line-img5  ${activeOption === 'line_img_5' ? "--is-active" : ""}`}
                 data-option='line_img_5'
                 onClick={() => setActiveOption('line_img_5')}
                 key='line_img_5'
                 >
                    <img src="./images/Packet/L2_2.svg" alt=""/>
                </div>
                <div
                 className={`line-img6  ${activeOption === 'line_img_6' ? "--is-active" : ""}`}
                 data-option='line_img_6'
                 onClick={() => setActiveOption('line_img_6')}
                 key='line_img_6'
                 >
                    <img src="./images/Packet/L2_3.svg" alt=""/>
                </div>
                <div
                 className={`line-img7  ${activeOption === 'line_img_7' ? "--is-active" : ""}`}
                 data-option='line_img_7'
                 onClick={() => setActiveOption('line_img_7')}
                 key='line_img_7'
                 >
                    <img src="./images/Packet/L2_4.svg" alt=""/>
                </div>
                <div
                 className={`line-img8  ${activeOption === 'line_img_8' ? "--is-active" : ""}`}
                 data-option='line_img_8'
                 onClick={() => setActiveOption('line_img_8')}
                 key='line_img_8'
                 >
                    <img src="./images/Packet/L2_5.svg" alt=""/>
                </div>
                <div
                 className={`line-img8_1  ${activeOption === 'line_img_9' ? "--is-active" : ""}`}
                 data-option='line_img_9'
                 onClick={() => setActiveOption('line_img_9')}
                 key='line_img_9'
                 >
                    <img src="./images/Packet/L2_6.svg" alt=""/>
                </div>
                <div
                 className={`line-img4_1  ${activeOption === 'line_img_10' ? "--is-active" : ""}`}
                 data-option='line_img_10'
                 onClick={() => setActiveOption('line_img_10')}
                 key='line_img_10'
                 >
                    <img src="./images/Packet/L2_1.svg" alt=""/>
                </div>
            </div>
            <div className="line-3">
            <div
                 className={`line-img9  ${activeOption === 'line_img_11' ? "--is-active" : ""}`}
                 data-option='line_img_11'
                 onClick={() => setActiveOption('line_img_11')}
                 key='line_img_11'
                 >
                    <img src="./images/Packet/L3_1.svg" alt=""/>
                </div>
                <div
                  className={`line-img10  ${activeOption === 'line_img_12' ? "--is-active" : ""}`}
                  data-option='line_img_12'
                  onClick={() => setActiveOption('line_img_12')}
                  key='line_img_12'
                 > 
                    <img src="./images/Packet/L3_2.svg" alt=""/>
                </div>
                <div
                    className={`line-img11  ${activeOption === 'line_img_13' ? "--is-active" : ""}`}
                    data-option='line_img_13'
                    onClick={() => setActiveOption('line_img_13')}
                    key='line_img_13'
                 >
                    <img src="./images/Packet/L3_3.svg" alt=""/>
                </div>

            </div>

            <div className="line-4">
            <div
                 className={`line-img12  ${activeOption === 'line_img_14' ? "--is-active" : ""}`}
                 data-option='line_img_14'
                 onClick={() => setActiveOption('line_img_14')}
                 key='line_img_14'
                 >
                    <img src="./images/Packet/L4_1.svg" alt=""/>
                </div>
                <div
                 className={`line-img13  ${activeOption === 'line_img_15' ? "--is-active" : ""}`}
                 data-option='line_img_15'
                 onClick={() => setActiveOption('line_img_15')}
                 key='line_img_15'
                 >
                    <img src="./images/Packet/L4_2.svg" alt=""/>
                </div>
                <div
                 className={`line-img14  ${activeOption === 'line_img_16' ? "--is-active" : ""}`}
                 data-option='line_img_16'
                 onClick={() => setActiveOption('line_img_16')}
                 key='line_img_16'
                 >
                    <img src="./images/Packet/L4_3.svg" alt=""/>
                </div>

            </div>
            <div className="line-5">
            <div
                 className={`line-img15  ${activeOption === 'line_img_17' ? "--is-active" : ""}`}
                 data-option='line_img_17'
                 onClick={() => setActiveOption('line_img_17')}
                 key='line_img_17'
                 >
                    <img src="./images/Packet/L5_1.svg" alt=""/>
                </div>
                <div
                 className={`line-img16  ${activeOption === 'line_img_18' ? "--is-active" : ""}`}
                 data-option='line_img_18'
                 onClick={() => setActiveOption('line_img_18')}
                 key='line_img_18'
                 >
                    <img src="./images/Packet/L5_2.svg" alt=""/>
                </div>
                <div
                 className={`line-img17  ${activeOption === 'line_img_19' ? "--is-active" : ""}`}
                 data-option='line_img_19'
                 onClick={() => setActiveOption('line_img_19')}
                 key='line_img_19'
                 >
                    <img src="./images/Packet/L5_3.svg" alt=""/>
                </div>

            </div>
        </div> 
        </div>
    </div>
  );
};
