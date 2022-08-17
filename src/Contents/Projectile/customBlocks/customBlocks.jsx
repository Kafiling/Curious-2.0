import Blockly from 'blockly';


Blockly.Blocks['value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ค่าตัวแปร");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Sx","ValueSx"], ["Vx","ValueVx"], ["t","Valuet"], ["Sy","ValueSy"], ["Uy","ValueUy"], ["Vy","ValueVy"], ["Ay","ValueAy"]]), "Value")
        .appendField("=")
        .appendField(new Blockly.FieldNumber(0), "NAME");
    this.setOutput(true, null);
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
        .appendField(new Blockly.FieldDropdown([["Sy","FindSy"], ["Vy","FindVy"], ["Uy","FindUy"], ["Ay","FindAy"], ["t","Findt"]]), "Find");
    this.appendValueInput("value 1")
        .setCheck(null)
        .appendField("แทนค่าตัวแปรที่ 1");
    this.appendValueInput("value 2")
        .setCheck(null)
        .appendField("แทนค่าตัวแปรที่ 2");
    this.appendValueInput("value 3")
        .setCheck(null)
        .appendField("แทนค่าตัวแปรที่ 3");
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

Blockly.JavaScript['value'] = function(block) {
  var dropdown_value = block.getFieldValue('Value');
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['a_stable'] = function(block) {
  var dropdown_formular = block.getFieldValue('Formular');
  var dropdown_find = block.getFieldValue('Find');
  var value_value_1 = Blockly.JavaScript.valueToCode(block, 'value 1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_2 = Blockly.JavaScript.valueToCode(block, 'value 2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_3 = Blockly.JavaScript.valueToCode(block, 'value 3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['v_stable'] = function(block) {
  var dropdown_find = block.getFieldValue('Find');
  var value_value_1 = Blockly.JavaScript.valueToCode(block, 'value 1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value_2 = Blockly.JavaScript.valueToCode(block, 'value 2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};