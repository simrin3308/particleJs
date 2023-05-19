import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticleBg from "./components/particleBg/ParticleBg";
export const color = () => {
  return (
    <div className="App">
      <h1>Hello Coders!</h1>
    </div>
  );
};
export default function App() {
  return (
    <div className="App">
      <h1>Hello Coders!</h1>
      <div className="big">
        <div className="s1">{/* <ParticleBg></ParticleBg> */}</div>
        <div className="s2">
         <h1>hello</h1> 
          <ParticleBg></ParticleBg>
        </div>
      </div>
    </div>
  );
}
