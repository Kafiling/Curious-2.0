//MatterStepTwo.js
import React, { useEffect, useState, useRef } from 'react';
import Matter from 'matter-js';

const STATIC_DENSITY = 15;

export const App = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  const [constraints, setContraints] = useState();
  const [scene, setScene] = useState();

  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    let Mouse = Matter.Mouse;
    let MouseConstraint = Matter.MouseConstraint;
    let Constraint = Matter.Constraint;
    let Composite = Matter.Composite;

    let engine = Engine.create({});
  
   const constraintLength = 150
   const constraintDistance = 50
   const restitution = 1
   const frictionAir = 0

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
       
        wireframes: false
      }
    });

    const floor = Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
      isStatic: true,
      render: {
        fillStyle: 'blue'
      }
    });

    const ball1 = Bodies.circle(200+(-1*constraintDistance), 100, 25, {
      restitution: restitution,
      frictionAir: frictionAir,
      friction: 0,
      render: {
        fillStyle: 'cornflowerblue'
      }
    });
    
    const constraint1 = Constraint.create({
      pointA: { x: 200+(0*constraintDistance), y: 100 },
      bodyB: ball1,
      length: constraintLength,
      
      
    });

    const ball2 = Bodies.circle(200+(0*constraintDistance), 100, 25, {
      restitution: restitution,
      frictionAir: frictionAir,
      friction: 0,
      render: {
        fillStyle: 'cornflowerblue'
      }
    });
    
    const constraint2 = Constraint.create({
      pointA: { x: 200+(1*constraintDistance), y: 100 },
      bodyB: ball2,
      length: constraintLength,
      
      
    });

    const ball3 = Bodies.circle(200+(2*constraintDistance), 175, 25, {
      restitution: restitution,
      frictionAir: frictionAir,
      friction: 0,
      render: {
        fillStyle: 'cornflowerblue'
      }
    });
    
    const constraint3 = Constraint.create({
      pointA: { x: 200+(2*constraintDistance), y: 100 },
      bodyB: ball3,
      length: constraintLength,
      
      
    });

    const ball4 = Bodies.circle(200+(3*constraintDistance), 175, 25, {
      restitution: restitution,
      frictionAir: frictionAir,
      friction: 0,
      render: {
        fillStyle: 'cornflowerblue'
      }
    });
    
    const constraint4 = Constraint.create({
      pointA: { x: 200+(3*constraintDistance), y: 100 },
      bodyB: ball4,
      length: constraintLength,
      
      
    });

    const ball5 = Bodies.circle(200+(4*constraintDistance), 175, 25, {
      restitution: restitution,
      frictionAir: frictionAir,
      friction: 0,
      render: {
        fillStyle: 'cornflowerblue'
      }
    });
    
    const constraint5 = Constraint.create({
      pointA: { x: 200+(4*constraintDistance), y: 100 },
      bodyB: ball5,
      length: constraintLength,
      
      
    });
    World.add(engine.world, [floor, ball1,constraint1,ball2,constraint2,ball3,constraint3
      ,ball4,constraint4,ball5,constraint5]);

    Matter.Runner.run(engine)
    Render.run(render);

    setContraints(boxRef.current.getBoundingClientRect());
    setScene(render);

    window.addEventListener('resize', handleResize);

     // add mouse control
  var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
          stiffness: 0.2,
          render: {
              visible: false
          }
      }
  });

Composite.add(engine.world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
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
        y: height + STATIC_DENSITY / 2
      });

     

      Matter.Body.setVertices(floor, [
        { x: 0, y: height },
        { x: width, y: height },
        { x: width, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY }
      ]);
    }
  }, [scene, constraints]);


 

  return (
    <div style={{ position: 'relative', border: '1px solid blue', padding: '8px' }}>
      
      <div
        style={{
          position: 'relative',
        
        padding: '8px'
        }}
      >
        
        <br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>

      

      <div
        ref={boxRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          
        }}
      >
        <canvas ref={canvasRef} />

      </div>
    </div>
  );
};