import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React from "react";

const ShiningSpotsBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
    };

    return (
        <>
            {init && (
                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "#000000",
                            },
                        
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "bubble",  // Use 'bubble' mode for hover effect
                                    parallax: {
                                        enable: false,
                                    }
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 100,
                                    size: 6,  // Increase the size on hover
                                    duration: 2,
                                    opacity: 1,
                                },
                                push: {
                                    quantity: 4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            move: {
                                enable: false,  // Disable movement
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                                anim: {
                                    enable: true,  // Enable opacity animation for shining effect
                                    speed: 0.5,
                                    opacity_min: 0.3,
                                    sync: false,
                                },
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: 2,
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </>
    );
};

export default ShiningSpotsBackground;
