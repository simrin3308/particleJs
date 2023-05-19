import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particleConfig } from "../particleConfig/particleConfig";

const ParticleBg = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      loaded={particlesLoaded}
      id="tsparticles"
      init={particlesInit}
      options={particleConfig}
    />
  );
};

export default ParticleBg;
