import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from '@react-three/drei';

// Компонент для загрузки и отображения 3D модели
function Model() {
  // Загружаем 3D модель в формате .obj
  const obj = useLoader(OBJLoader, '/model.obj'); // Убедись, что файл лежит в папке public

  return <primitive object={obj.scene} scale={0.5} />;
}

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
