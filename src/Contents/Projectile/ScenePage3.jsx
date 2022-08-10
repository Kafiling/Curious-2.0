import React, { useEffect, useState, useRef } from 'react';
import Matter from 'matter-js';
import { color } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';

const STATIC_DENSITY = 15;
const PARTICLE_SIZE = 20;
const PARTICLE_BOUNCYNESS = 0.9;

export const Scene = () => {
  
  var Engine = Matter.Engine;
  var Render = Matter.Render;
  var World = Matter.World;
  var Bodies = Matter.Bodies;
  var engine = Engine.create({});


  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  const [constraints, setContraints] = useState();
  const [scene, setScene] = useState();

  const [someStateValue, setSomeStateValue] = useState(false);

  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect());
  };

  const handleClick = () => {
    setSomeStateValue(!someStateValue);
  };

  

  useEffect(() => {
    var render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        wireframes: true,
        showVelocity: true,
        showVelocityX: true,
        showVelocityY: true,
        showStats: false
      }
    });

    const floor = Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
      isStatic: true,
      render: {
       
      }
    });

    World.add(engine.world, [floor]);

    Matter.Runner.run(engine)
    Render.run(render);

    setContraints(boxRef.current.getBoundingClientRect());
    setScene(render);
    window.addEventListener('resize', handleResize);

  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (constraints) {
      let { width, height } = constraints;

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;

      // Dynamically update floor
      const floor = scene.engine.world.bodies[0];

      Matter.Body.setPosition(floor, {
        x: width / 2,
        y: height + STATIC_DENSITY -150 / 2
      });

      Matter.Body.setVertices(floor, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY }
      ]);
    }
  }, [scene, constraints]);

  useEffect(() => {
    // Add a new "ball" everytime `someStateValue` changes
    if (scene) {
      //let { width } = constraints;
      //let randomX = Math.floor(Math.random() * -width) + width;

      let { width, height } = constraints;

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;
      const circle =  Matter.Bodies.circle(PARTICLE_SIZE, ((height + STATIC_DENSITY -150 / 2)-PARTICLE_SIZE), PARTICLE_SIZE, {
        restitution: PARTICLE_BOUNCYNESS,
        frictionAir: 0,
        render: {
          options:{showVelocity: true}
        }
      })
      Matter.World.add(
        scene.engine.world,circle
      );
      
     //set velocity base on viewport size
      Matter.Body.setVelocity(circle, {x: width/400, y: -height/200 })
      
      }
  }, [someStateValue]);
 
  
  Matter.Events.on( engine, 'afterUpdate', function(event) {
    engine.timing.timeScale = 0.2;
    })

  return (
    <div
      style={{
        position: 'relative',
        border: '1px solid white',
        padding: '8px'
      }}
    >
       <div
        ref={boxRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex:'-1'
        }}
      >
        <canvas ref={canvasRef} />
      </div>
      <div style={{ textAlign: 'center' , color: 'white'}}>Projectile</div>
      <p style={{color: 'cornflowerblue'}}>&#9632; ความเร็วลัพธ์</p>
      <p style={{color: 'orange'}}>&#9632; ความเร็วแกน X,Y</p>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <button
        style={{
          cursor: 'pointer',
          display: 'block',
          textAlign: 'center',
          marginBottom: '0px',
          width: '100%',
        }}
        onClick={() => handleClick()}
      >
       ยิงกระสุน
      </button>
    </div>
  );
};