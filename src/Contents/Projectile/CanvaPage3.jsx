import * as React from "react";
import {
  Engine,
  RenderClones,
  Walls,
  Rectangle,
  Circle,
  Constraint
} from "react-matter-js";
import { Global, css } from "@emotion/core";

const App = () => {
  const width = 600;
  const height = 400;
  return (
    <div>
      <Global
        styles={css`
          body {
            background: #111;
          }
        `}
      />
      <Engine options={{}}>
        <RenderClones
          enableMouse
          options={{
            width,
            height,
            background: "transparent",
            wireframeBackground: "transparent"
          }}
        >
          <Walls x={0} y={0} width={width} height={height} wallWidth={25} />
          <Circle
            clone
            x={500}
            y={100}
            radius={50}
            className={css``}
            cloneClass={css`
              fill: #f06;
            `}
          />
          <Constraint>
            <Circle clone x={100} y={100} radius={50} />
            <Rectangle clone x={300} y={100} width={100} height={100} />
          </Constraint>
        </RenderClones>
      </Engine>
      <div>
        <a href="https://github.com/slikts/react-matter-js">react-matter-js</a>
      </div>
    </div>
  );
};

export default App;
