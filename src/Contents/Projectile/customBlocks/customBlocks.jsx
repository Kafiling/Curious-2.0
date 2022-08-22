import Blockly from 'blockly';

Blockly.Blocks['value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ค่าตัวแปร");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Sx","ValueSx"], ["Vx","ValueVx"], ["t","ValueNt"], ["Sy","ValueSy"], ["Uy","ValueUy"], ["Vy","ValueVy"], ["Ay","ValueAy"]]), "Value")
        .appendField("=")
        .appendField(new Blockly.FieldNumber(0), "ValueNum");
    this.setOutput(true, "Array");
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['a_stable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("การเคลื่อนที่ความเร่งคงที่");
    this.appendDummyInput()
        .appendField("เลือกสูตร")
        .appendField(new Blockly.FieldDropdown([["v = u + at","v = u + at"], ["s = ut + 1/2 at^2","s = ut + 1/2 at^2"], ["s = vt - 1/2 at^2","s = vt - 1/2 at^2"], ["s = (u+v)/2 t","s = (u+v)/2 t"], ["v^2 = u^2 + 2as","v^2 = u^2 + 2as"]]), "Formular");
    this.appendDummyInput()
        .appendField("ตัวแปรที่ต้องการหา :")
        .appendField(new Blockly.FieldDropdown([["Vy","FindVy"], ["Uy","FindUy"], ["Ay","FindAy"], ["Sy","FindSy"], ["t","Findt"]]), "Find");
    this.appendValueInput("value 1")
        .setCheck("Number")
        .appendField("แทนค่าตัวแปรที่ 1")
        .appendField(new Blockly.FieldDropdown([["Vy","InputVy"], ["Uy","InputUy"], ["Ay","InputAy"], ["Sy","InputSy"], ["t","Inputt"]]), "Input1");
    this.appendValueInput("value 2")
        .setCheck("Number")
        .appendField("แทนค่าตัวแปรที่ 2")
        .appendField(new Blockly.FieldDropdown([["Vy","InputVy"], ["Uy","InputUy"], ["Ay","InputAy"], ["Sy","InputSy"], ["t","Inputt"]]), "Input2");
    this.appendValueInput("value 3")
        .setCheck("Number")
        .appendField("แทนค่าตัวแปรที่ 3")
        .appendField(new Blockly.FieldDropdown([["Vy","InputVy"], ["Uy","InputUy"], ["Ay","InputAy"], ["Sy","InputSy"], ["t","Inputt"]]), "Input3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['v_stable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("การเคลื่อนที่ความเร็วคงที่");
    this.appendDummyInput()
        .appendField("สูตร v = s/t");
    this.appendDummyInput()
        .appendField("เลือกตัวแปรที่ต้องการหา")
        .appendField(new Blockly.FieldDropdown([["Vx","FindVx"], ["Sx","FindSx"], ["t","Findt"]]), "Find");
    this.appendValueInput("value 1")
        .setCheck(null)
        .appendField("แทนค่าตัวแปรที่ 1");
    this.appendValueInput("value 2")
        .setCheck(null)
        .appendField("แทนค่าตัวแปรที่ 2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['imported_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("นำค่าตัวแปร")
        .appendField(new Blockly.FieldDropdown([["Sx","Sx"], ["Vx","Vx"], ["t","t"], ["Sy","Sy"], ["Uy","Uy"], ["Vy","Vy"], ["Ay","Ay"]]), "Value")
        .appendField("จากด้านบนมาแทนในสมการ");
    this.setOutput(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['value'] = function(block) {
  var variable = block.getFieldValue('Value');
  var variableNum = block.getFieldValue('ValueNum');
  const outputMap = new Map([
    ['variable', variable],
    ['variableNum', variableNum]
  ]);
  var code = outputMap

  return [code, Blockly.JavaScript.ORDER_NONE];;
};


Blockly.JavaScript['a_stable'] = function(block) {
  var dropdown_formular = block.getFieldValue('Formular');
  var dropdown_find = block.getFieldValue('Find');
  var dropdown_input1 = block.getFieldValue('Input1');
  var value_value_1 = Blockly.JavaScript.valueToCode(block, 'value 1', Blockly.JavaScript.ORDER_NONE)|| '0';
  var dropdown_input2 = block.getFieldValue('Input2');
  var value_value_2 = Blockly.JavaScript.valueToCode(block, 'value 2', Blockly.JavaScript.ORDER_NONE)|| '0';
  var dropdown_input3 = block.getFieldValue('Input3');
  var value_value_3 = Blockly.JavaScript.valueToCode(block, 'value 3', Blockly.JavaScript.ORDER_NONE)|| '0';
  // TODO: Assemble JavaScript into code variable.
 switch (dropdown_input1) {
  case 'InputVy':
    var InputVy = value_value_1
    break;

  case 'InputUy':
    var InputUy = value_value_1
    break;

  case 'InputAy':
    var InputAy = value_value_1
    break;
  
  case 'InputSy':
    var InputSy = value_value_1
    break;

  case 'Inputt':
    var Inputt = value_value_1
    break;
 
  default:
    break;
 }

 switch (dropdown_input2) {
  case 'InputVy':
    var InputVy = value_value_2
    break;

  case 'InputUy':
    var InputUy = value_value_2
    break;

  case 'InputAy':
    var InputAy = value_value_2
    break;
  
  case 'InputSy':
    var InputSy = value_value_2
    break;

  case 'Inputt':
    var Inputt = value_value_2
    break;
 
  default:
    break;
 }

 switch (dropdown_input3) {
  case 'InputVy':
    var InputVy = value_value_3
    break;

  case 'InputUy':
    var InputUy =value_value_3
    break;

  case 'InputAy':
    var InputAy =value_value_3
    break;
  
  case 'InputSy':
    var InputSy =value_value_3
    break;

  case 'Inputt':
    var Inputt =value_value_3
    break;
 
  default:
    break;
 }


    switch (dropdown_formular) {
      case 'v = u + at' :
       
          switch (dropdown_find) {
            case 'FindSy':
              var OutputType = 'Sy'
              alert('Error : แทนค่าตัวแปรที่ไม่มีในสูตร')
              break;
          
            case 'FindVy':
             var OutputType = 'Vy'
             var Output = Number(InputUy) + (Number(InputAy) * Number(Inputt))
              break;
            // u = v - at
            case 'FindUy':
              var OutputType = 'Uy'
              var Output = Number(InputVy) - (Number(InputAy) * Number(Inputt))
                  
              break;
            // v - u = at
            // (v - u)/t = a
            case 'FindAy':
              var OutputType = 'Ay'
              var Output = (Number(InputVy)-Number(InputUy))/Number(Inputt)
              break;
            // (v - u)/a
            case 'Findt':
              var OutputType = 't'
              var Output = (Number(InputVy)-Number(InputUy))/Number(InputAy)
                  
              break;

            default:
              break;
          }
        
        break;
    
      case 's = ut + 1/2 at^2' :

        switch (dropdown_find) {
          case 'FindSy':
            var OutputType = 'Sy'
            var Output = (Number(InputUy) * Number(Inputt)) + (0.5 * Number(InputAy) * Number(Inputt) * Number(Inputt))
            break;
        
          case 'FindVy':
           var OutputType = 'Vy'
           alert('Error : แทนค่าตัวแปรที่ไม่มีในสูตร')
            break;

          // u = (2s - t^2 a)/2t ; t != 0
          case 'FindUy':
            var OutputType = 'Uy'
            if (Inputt = 0){
              alert('Error : ตัวส่วนเท่ากับ 0 ; ไม่นิยาม')
            }
            else{
              var Output = ((2*Number(InputSy)) - (Number(InputAy) * Number(Inputt) * Number(Inputt))) / (2 * Number(Inputt))
            }
            
                
            break;
          // v - u = at
          // (v - u)/t = a
          case 'FindAy':
            var OutputType = 'Ay'
            var Output = (Number(InputVy)-Number(InputUy))/Number(Inputt)
            break;
          // (v - u)/a
          case 'Findt':
            var OutputType = 't'
            var Output = (Number(InputVy)-Number(InputUy))/Number(InputAy)
                
            break;

          default:
            break;
        }

        break;  

      case 's = vt - 1/2 at^2':
        
        break;

      case 's = (u+v)/2 t':
        
        break;

      case 'v^2 = u^2 + 2as':
        
      break;

      default:
        break;
    }
  console.log((2 * Number(Inputt))) 
  console.log(value_value_1)
  console.log(InputVy)
  console.log(Output)
  var code = 'a_stable' +  '  ' +'Formular : ' + dropdown_formular +
  "\r\n" + 'Find : ' + dropdown_find +
  "\r\n" + dropdown_input1 + ' = ' + value_value_1 + 
  "\r\n" + dropdown_input2 + ' = ' + value_value_2 +
  "\r\n" + dropdown_input3 + ' = ' + value_value_3 +
  "\r\n" +
  "\r\n" + 'Output : ' + OutputType + ' = ' + Output
  return code ;
};

Blockly.JavaScript['v_stable'] = function(block) {
  var dropdown_find = block.getFieldValue('Find');
  var value_value_1 = Blockly.JavaScript.valueToCode(block, 'value 1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_2 = Blockly.JavaScript.valueToCode(block, 'value 2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['imported_value'] = function(block) {
  var dropdown_value = block.getFieldValue('Value');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};