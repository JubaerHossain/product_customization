import React, { useState } from "react";
import * as THREE from "three";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import {useLoader} from "react-three-fiber";
import {useRef, useEffect} from "react";

const INITIAL_MTL = new THREE.MeshPhongMaterial({
    color: new THREE.Color(0xf1f1f1),
    shininess: 10
});

const INITIAL_MAP = [

    // back
    {childID: "line_img_12", mtl: INITIAL_MTL},
    // back

    //base
    {childID: "line_img_7", mtl: INITIAL_MTL},
    //base


    //cushions
    {childID: "line_img_2", mtl: INITIAL_MTL},
    //cushions
    // start for leg
    {childID: "line_img_1", mtl: INITIAL_MTL},
    // {childID: "line_img_3", mtl: INITIAL_MTL},
    // start for leg
    {childID: "supports", mtl: INITIAL_MTL}
    ];
const initColor = (parent, type, mtl) => {
    parent.traverse(o => {
        if (o.isMesh && o.name.includes(type)) {
            o.castShadow = true;
            o.receiveShadow = true;
            o.material = mtl;
            o.nameID = type;
        }
    });
}





const ChairMesh = ({newMaterialOpt, objectRotation, activeOption, setActiveOption}) => {
    const {scene: theModel} = useLoader(GLTFLoader, "chair.gltf");
    const chair = useRef(theModel)
    const [clicked, click] = useState()
    useEffect(() =>
            void setMaterial(newMaterialOpt.activeOption, newMaterialOpt.newMTL)
        , [newMaterialOpt.newMTL])

    useEffect(() => {
        if (theModel) {
            for (let object of INITIAL_MAP) {
                initColor(theModel, object.childID, object.mtl);
            }
        }
    }, [theModel])


    const setMaterial = (type, mtl) => {
        theModel.traverse(o => {
            if (o.isMesh && o.nameID != null) {
                if (o.nameID === type) {
                    o.material = mtl;
                }
            }
        });
    }
    useEffect(() => {
        if(clicked){
            setActiveOption(clicked)
        }
    }, [clicked])

    return <primitive
        ref={chair}
        object={theModel}
        scale={[2, 2, 2]}
        onClick={(theModel) => click(theModel.object.name)}
        rotation={objectRotation}
        position={[0, -1, 0]}
        receiveShadow
        castShadow
    >
    </primitive>

}

export default ChairMesh;
