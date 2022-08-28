import React, { useEffect, useState, useRef } from 'react';
import Matter from 'matter-js';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';


import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import "./customBlocks/customBlocks";

export const App = () => {

  return (
    <>
    <BlocklyApp/>
    </>
  )
}


export const BlocklyApp = () => {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");

  const initialXml =
  '<xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none"><block type="v_stable" id="PBghwWnaM`W%(?~wV@~i" x="63" y="38"><field name="Find">FindVx</field><field name="Input1">InputVx</field><field name="Input2">InputVx</field></block><block type="a_stable" id="iN*56[R3*AF{32?EQ`mH" x="63" y="213"><field name="Formular">v = u + at</field><field name="Find">FindVy</field><field name="Input1">InputVy</field><field name="Input2">InputVy</field><field name="Input3">InputVy</field></block></xml>';
  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "สูตรการคำนวณ",
        colour: "#5CA699",
        contents: [
          {
            kind: "block",
            type: "a_stable",
          },
          {
            kind: "block",
            type: "v_stable",
          },
          {
            kind: "block",
            type: "math_number",
          },
          {
            kind: "block",
            type: "variables_get",
            
          },
          {
            kind: "block",
            type: "variables_set",
            
          },
          
        ],
      },
    ],
  };
  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

  function runCode(workspace) {
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try {
      eval(code);
    } catch (e) {
      alert('Bad code: ' + e);
    }
  }

  return (
    <>
    
    <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
        className="blockly-fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: "#ccc",
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />
    
      
      
      <textarea
        id="code"
        style={{ height: "400px", width: "70vw" }}
        value={javascriptCode}
        readOnly
      ></textarea>
  
    </>
  );
}





