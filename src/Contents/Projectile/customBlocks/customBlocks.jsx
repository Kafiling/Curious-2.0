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
        .setCheck("Number")
        .appendField("แทนค่าตัวแปรที่ 1")
        .appendField(new Blockly.FieldDropdown([["Vx","InputVx"], ["Sx","InputSx"], ["t","Inputt"]]), "Input1");
    this.appendValueInput("value 2")
        .setCheck("Number")
        .appendField("แทนค่าตัวแปรที่ 2")
        .appendField(new Blockly.FieldDropdown([["Vx","InputVx"], ["Sx","InputSx"], ["t","Inputt"]]), "Input2");
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
              alert('Error : หาค่าตัวแปรที่ไม่มีในสูตร')
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
           alert('Error : หาค่าตัวแปรที่ไม่มีในสูตร')
            break;

          // u = (2s - t^2 a)/2t ; t != 0
          case 'FindUy':
            var OutputType = 'Uy'
            var Output = ((Number(InputSy)*2) - ((Number(Inputt) * Number(Inputt))* Number(InputAy))) / (Number(Inputt)+Number(Inputt))
            break;

          // s = ut + 1/2 at^2
          // (s - ut)*2/t^2 =a
          case 'FindAy':
            var OutputType = 'Ay'
            var Output = ((Number(InputSy)-(Number(InputUy) * Number(Inputt)))*2)/((Number(Inputt)+Number(Inputt)))
            break;
          // s = ut + 1/2 at^2
          // 0= 0.5at^2 + ut - s
          // a =0.5a , b=u , c=s
          case 'Findt':
            var OutputType = 't'

            if (InputAy == 0){
              var Output = Number(InputSy) / Number(InputUy)
            }
            else{
              // calculate discriminant
              let discriminant = (Number(InputUy) * Number(InputUy)) - (4 * 0.5*Number(InputAy) * Number(InputSy))
              // condition for real and different roots
                if (discriminant > 0) {
                  let root1 = (-Number(InputUy) + Math.sqrt(discriminant)) / (2 * 0.5 * Number(InputAy));
                  let root2 = (-Number(InputUy) - Math.sqrt(discriminant)) / (2 * 0.5 * Number(InputAy));
  
                  // result
                  var Output = root1 + ',' + root2
                 
                }
  
                // condition for real and equal roots
                else if (discriminant == 0) {
                  let root1  = -Number(InputUy) / (2 * 0.5 * Number(InputAy));
  
                  // result
                  var Output = root1 
                }

            
              

              // if roots are not real
              else {
                var Output = 'คำตอบไม่เป็นสมาชิกจำนวนจริง'
              
              }
            }
                    
                
            break;

          default:
            break;
        }

        break;  

      case 's = vt - 1/2 at^2':


        switch (dropdown_find) {
          case 'FindSy':
            var OutputType = 'Sy'
            var Output = (Number(InputVy)*Number(Inputt)) - (0.5*Number(InputAy)*Number(Inputt)*Number(Inputt))
            break;
        
          // s = vt - 1/2 at^2
          // (s + 1/2at^2)/t = v
          case 'FindVy':
           var OutputType = 'Vy'
           var Output = (Number(InputSy) + (0.5 * Number(InputAy) * Number(Inputt) * Number(Inputt)))/Number(Inputt)
            break;
          
          case 'FindUy':
            var OutputType = 'Uy'
            alert('Error : หาค่าตัวแปรที่ไม่มีในสูตร')
                
            break;
          // s = vt - 1/2 at^2
          // (s - vt)*(-2) / (t^2) = a
          case 'FindAy':
            var OutputType = 'Ay'
            var Output =  (Number(InputSy) - (Number(InputVy)*Number(Inputt)))*(-2)/(Number(Inputt)*Number(Inputt))
            break;
          // s = vt - 1/2 at^2
          // -1/2at^2 + vt - s =0
          // a = -0.5a ,b = v ,c = -s
          case 'Findt':
            var OutputType = 't'
            
            if (InputAy == 0){
              var Output = Number(InputSy) / Number(InputVy)
            }
            else{
              // calculate discriminant
              let discriminant = (Number(InputVy) * Number(InputVy)) - (4 * 0.5 * Number(InputAy) * Number(InputSy))
              // condition for real and different roots
                if (discriminant > 0) {
                  let root1 = (-Number(InputVy) + Math.sqrt(discriminant)) / (2 * (-0.5) * Number(InputAy));
                  let root2 = (-Number(InputVy) - Math.sqrt(discriminant)) / (2 * (-0.5) * Number(InputAy));
  
                  // result
                  var Output = root1 + ',' + root2
                 
                }
  
                // condition for real and equal roots
                else if (discriminant == 0) {
                  let root1  = -Number(InputVy) / (2 * (-0.5) * Number(InputAy));
  
                  // result
                  var Output = root1 
                }

            
              

              // if roots are not real
              else {
                var Output = 'คำตอบไม่เป็นสมาชิกจำนวนจริง'
              
              }
            }
                
            break;

          default:
            break;
        }

        
        break;

      case 's = (u+v)/2 t':
        switch (dropdown_find) {
          case 'FindSy':
            var OutputType = 'Sy'
            var Output = (Number(InputUy)+Number(InputVy))/(2*Number(Inputt))
            break;
        //s = (u+v)/2 t
        //2st-u = v
          case 'FindVy':
           var OutputType = 'Vy'
           var Output = (2*Number(InputSy)*Number(Inputt))-Number(InputUy)
            break;
         //2st-v = u
          case 'FindUy':
            var OutputType = 'Uy'
            var Output = (2*Number(InputSy)*Number(Inputt))-Number(InputVy)
                
            break;
          
          case 'FindAy':
            var OutputType = 'Ay'
            alert('Error : หาค่าตัวแปรที่ไม่มีในสูตร')
            break;
          // s = (u+v)/2 t
          // t = (u+v)/2s
          case 'Findt':
            var OutputType = 't'
            var Output = (Number(InputUy)+Number(InputVy))/(Number(InputSy)*s)
                
            break;

          default:
            break;
        }  

        break;

      case 'v^2 = u^2 + 2as':
        switch (dropdown_find) {
          case 'FindSy':
            var OutputType = 'Sy'
            var Output = ((Number(InputVy)*Number(InputVy))-(Number(InputUy)*Number(InputUy)))/ (2*Number(InputAy))
            break;
        //v^2 = u^2 + 2as
        
          case 'FindVy':
           var OutputType = 'Vy'
           var Output = Math.sqrt((Number(InputUy)*Number(InputUy)) + (2*Number(InputAy)*Number(InputSy)))
            break;
         //v^2 - 2as = u^2 
          case 'FindUy':
            var OutputType = 'Uy'
            var Output = Math.sqrt((Number(InputVy)*Number(InputVy)) - (2*Number(InputAy)*Number(InputSy)))
                
            break;
          //v^2 = u^2 + 2as
          // (v^2 - u^2)/2s = a
          case 'FindAy':
            var OutputType = 'Ay'
            var Output = ((Number(InputVy)*Number(InputVy))-(Number(InputUy)*Number(InputUy)))/ (2*Number(InputSy))
            break;
          // s = (u+v)/2 t
          // t = (u+v)/2s
          case 'Findt':
            var OutputType = 't'
            alert('Error : หาค่าตัวแปรที่ไม่มีในสูตร')
                
            break;

          default:
            break;
        }  
      break;

      default:
        break;
    }

  console.log(Output)
  var code = 'a_stable' +  '  ' +'Formular : ' + dropdown_formular +
  "\r\n" + 'Find : ' + dropdown_find +
  "\r\n" + dropdown_input1 + ' = ' + value_value_1 + 
  "\r\n" + dropdown_input2 + ' = ' + value_value_2 +
  "\r\n" + dropdown_input3 + ' = ' + value_value_3 +
  "\r\n" +
  "\r\n" + 'Output : ' + OutputType + ' = ' + Output +
  "\r\n" + '--------------------'
  return code ;
};

Blockly.JavaScript['v_stable'] = function(block) {
  var dropdown_find = block.getFieldValue('Find');
  var dropdown_input1 = block.getFieldValue('Input1');
  var value_value_1 = Blockly.JavaScript.valueToCode(block, 'value 1', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_input2 = block.getFieldValue('Input2');
  var value_value_2 = Blockly.JavaScript.valueToCode(block, 'value 2', Blockly.JavaScript.ORDER_ATOMIC);
  
  switch (dropdown_input1) {
    case 'InputVx':
      var InputVx = value_value_1
      break;
  
    case 'InputSx':
      var InputSx = value_value_1
      break;
    
    case 'Inputt':
      var Inputt = value_value_1
      break;
   
    default:
      break;
   }

   switch (dropdown_input2) {
    case 'InputVx':
      var InputVx = value_value_2
      break;
  
    case 'InputSx':
      var InputSx = value_value_2
      break;
    
    case 'Inputt':
      var Inputt = value_value_2
      break;
   
    default:
      break;
   }

   switch (dropdown_find) {
    case 'FindVx':
      var OutputType = 'Vx'
      var Output = Number(InputSx)/Number(Inputt)
      break;
   
    case 'FindSx':
      var OutputType = 'Sx'
      var Output = (Number(InputVx)*Number(Inputt))
      break;

    case 'Findt':
      var OutputType = 't'
      var Output = Number(InputSx)/Number(InputVx)
      break;

    default:
      break;
   }

  var code = 'v_stable' +  '  ' +'Formular : ' + 'v = s/t' +
  "\r\n" + 'Find : ' + dropdown_find +
  "\r\n" + dropdown_input1 + ' = ' + value_value_1 + 
  "\r\n" + dropdown_input2 + ' = ' + value_value_2 +
  "\r\n" +
  "\r\n" + 'Output : ' + OutputType + ' = ' + Output +
  "\r\n" + '--------------------'
  return code;
};

Blockly.JavaScript['imported_value'] = function(block) {
  var dropdown_value = block.getFieldValue('Value');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};