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
    let  Render = Matter.Render;
    let  Runner = Matter.Runner;
    let  Events = Matter.Events;
    let  Constraint = Matter.Constraint;
    let  MouseConstraint = Matter.MouseConstraint;
    let  Mouse = Matter.Mouse;
    let  World = Matter.World;
    let Bodies = Matter.Bodies;
    let Composite = Matter.Composite;
    let Composites = Matter.Composites;
    let engine = Engine.create({});
  
   const constraintLength = 0
   const BallsX = 150
   const BallsY = 300
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

    var balls = Bodies.circle(BallsX, BallsY, 25, {
      restitution: restitution,
      frictionAir: frictionAir,
      friction: 0,
      render: {
        fillStyle: 'yellow'
      }
    });
    
    var constraint = Constraint.create({
      pointA: { x: BallsX, y: BallsY },
      bodyB: balls,
      length: constraintLength,
      stiffness: 0.05
      
      
    });
    
    const floor2 = Bodies.rectangle(275, 400, 20, 200, {
      isStatic: true,
      render: {
        wireframes : true
      }
    });

    const floor3 = Bodies.rectangle(275, 20, 250, 20, {
      isStatic: true,
      render: {
        wireframes : true
      }
    });

    const floor4 = Bodies.rectangle(850, 300, 250, 20, {
      isStatic: true,
      render: {
        wireframes : true
      }
    });

    const pyramid1 = Composites.pyramid(320, 250, 9, 10, 0, 0, function(x, y) {
      return Bodies.rectangle(x, y, 25, 40,
        {
          friction: .5,
        });
  });

  const pyramid2 = Composites.pyramid(750, 90, 9, 5, 0, 0, function(x, y) {
    return Bodies.rectangle(x, y, 25, 40,
      {
        friction: .5,
      });
});

    World.add(engine.world, [floor, balls,constraint,pyramid1,pyramid2,floor2,floor3,floor4]);

    Matter.Runner.run(engine)
    Render.run(render);

    Events.on(engine, 'afterUpdate', function() {
      if (mouseConstraint.mouse.button === -1 && (balls.position.x > BallsX+20 || balls.position.y < BallsY-20)) {
        balls = Bodies.circle(BallsX, BallsY, 25, {
          restitution: restitution,
          frictionAir: frictionAir,
          friction: 0,
          render: {
            fillStyle: 'yellow'
          }
        });
          World.add(engine.world, balls);
          constraint.bodyB = balls;
      }
  });

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