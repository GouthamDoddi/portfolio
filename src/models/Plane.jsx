import React, { useEffect, useRef } from 'react'
import planScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Plane = ({ radius=5, isRotating, speed, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        // if (isRotating) {
        actions['Take 001'].play(); 
        // } else {
        //     actions['Take 001'].stop();
        // }
    }, [actions, isRotating])

    // useFrame((state, delta) => {
    //   const angle = (state.clock.elapsedTime * speed) % (2 * Math.PI);
    //   ref.current.position.x = Math.cos(angle) * radius;
    //   ref.current.position.z = Math.sin(angle) * radius;
    //   ref.current.rotation.y = angle;
    // });
  return (
    <mesh { ...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane
