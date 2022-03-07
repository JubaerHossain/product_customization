import React, { useState } from "react";
import "./App.css";
import "./Style.css";
import { Scene } from "./canvas/Scene";
import ColorsSlider from "./components/ColorsSlider";
import { OptionsMenu } from "./components/OptionsMenu";
import { ImageMenu } from "./components/ImageMenu";
import { COLORS } from "./constants/colors";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";

const App = () => {
  const [activeOption, setActiveOption] = useState("line_img_1");
  const [newMaterialOpt, setNewMaterialOpt] = useState({
    activeOption,
    newMTL: null
  });


  const selectSwatch = (e) => {
    let color = COLORS[parseInt(e.target.dataset.key)];
    let newMTL;

    if (color.texture) {
      let txt = new THREE.TextureLoader().load(color.texture);

      txt.repeat.set(color.size[0], color.size[1], color.size[2]);
      txt.wrapS = THREE.RepeatWrapping;
      txt.wrapT = THREE.RepeatWrapping;

      newMTL = new THREE.MeshPhongMaterial({
        map: txt,
        shininess: color.shininess ? color.shininess : 10
      });
    } else {
      newMTL = new THREE.MeshPhongMaterial({
        color: parseInt("0x" + color.color),
        shininess: color.shininess ? color.shininess : 10
      });
    }

    return setNewMaterialOpt({
      activeOption,
      newMTL
    });
  };
  return (
    <React.Fragment>
      <div className="container">
      <div className="box-container">
            <div className="box-left">
                <div className="sidebar">
                    <ul>
                      <ColorsSlider selectSwatch={selectSwatch} />                        
                    </ul>
                </div>
    
            </div>
            <div className="box-right">
                <div className="image-container">
                    <div className="active-box">
                        <p>Outside Design</p>
                        <img src="./images/bullet_green.png" alt=""/>
                    </div>
                    <span>
                    <ImageMenu 
                        activeOption={activeOption} 
                        setActiveOption={setActiveOption} 
                    />
                    </span>
    
    
                </div>    
    
            </div>
    
        </div>
        <div className="box-container-right">
          <Canvas id="rtfCanvas">
            <Scene newMaterialOpt={newMaterialOpt} />
          </Canvas>
        </div>
        {/* <span>
        <OptionsMenu
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />
        </span>
        <Canvas id="rtfCanvas">
          <Scene newMaterialOpt={newMaterialOpt} />
        </Canvas>
        <div className="controls">
          <ColorsSlider selectSwatch={selectSwatch} />
        </div>
        <div className="frame">
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default App;
