
import './App.css';
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { Suspense } from "react";
import logoGif from "./mimesis.gif";
import logo from "./logo_blanc.png";
import bg from "./bg.png";
import tech from "./tech.png";
import p8 from "./8.svg.png";

const Scene = () => {
  const fbx = useLoader(FBXLoader, "sphere.fbx");

  return <primitive object={fbx} scale={0.005} />;
};

function App() {
  return (
    <div className="App">

    <div className="logo-container">
      <div className="logo-gif-container">  
        <img className="logo-gif" src={logoGif}/>
      </div>

      <p className="team">Alice TINOCO, Chiara CIACCIO, Hugo MICHALSKI, Paul (Pivi) LARTISANT, Lucas THOMAS</p>
    </div>

    <main className="main">

    <div className="intro">
      <p>  "La présence de l’art sur les réseaux sociaux peut entraîner une perte de sens"</p>

      <p>Comment valoriser les oeuvres d’art dans un environnement numérique ? Que peut y apporter la blockchain ?</p>
    </div>


    <div className="concept">
    
      <img className="bg-concept" src={bg}/>
   

      <p>Mimésis est un espace numérique de diffusion et de valorisation de l’art numérique qui a pour but d’offrir aux jeunes artistes un espace de création et de connexion. Libéré des algorithmes, cet espace permet la connexion et le partage des centres d’intérêt artistiques de ses utilisateurs.</p>

      <p>Tout repose sur un réseau de nœuds composé de “Bulles”. Ces bulles sont ouvertes au public et représentent un espace numérique d'interconnexion et de partage des productions artistiques</p>

    </div>

    <div className="tech">

      <img className="tech-img" src={tech} />

    </div>

    
    </main>

      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
        </Suspense>
      </Canvas>

      <div className="credit">

      <img className="paris8" src={p8} />

    </div>
  
    </div>
  );
}

export default App;
