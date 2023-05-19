import "./App.css";

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
      <ParticleBg></ParticleBg>
    </div>
  );
}
