import { useGLTF, useTexture } from "@react-three/drei";

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF("/models/hacker-room.glb");

  // const monitorTexture = useTexture("textures/desk/monitor.png")
  // const screenTexture = useTexture("textures/desk/screen.png")
  
  return (
    <group {...props} dispose={null}>
      {/* Dynamically render all mesh nodes */}
      {Object.keys(nodes).map((key) => {
        const node = nodes[key];
        
        // Only render if it's a Mesh with geometry
        if (node.isMesh && node.geometry) {
          return (
            <mesh
              key={node.uuid}
              castShadow
              receiveShadow
              geometry={node.geometry}
              material={node.material}
            />
          );
        }
        return null;
      })}
    </group>
  );
};

useGLTF.preload("/models/hacker-room.glb");

export default HackerRoom;