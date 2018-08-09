var myRover = {direction: 'N',
                position : [2, 3]
                }
// ======================

// ======================
function turnLeft(rover){
  //console.log("turnLeft was called!");
  switch(rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
   case 'E':
      rover.direction = 'N';
      break;
   case 'S':
      rover.direction = 'E';
      break;
   case 'W':
      rover.direction = 'S';
      break;
  }
  //console.log(rover);
  
}
//turnLeft(myRover)


//function turnRight(rover){
  //console.log("turnRight was called!");
//}
function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
   case 'E':
      rover.direction = 'S';
      break;
   case 'S':
      rover.direction = 'W';
      break;
   case 'W':
      rover.direction = 'N';
      break;
  }
//console.log(rover);
  
}
//turnRight(myRover)

//function moveForward(rover){
  //console.log("moveForward was called")
//



sdfsdfsdf
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--;
      break;
    case 'E':
      rover.position[0]++;
      break;
    case 'S':
      rover.position[1]++;
      break;
    case 'W':
      rover.position[0]--;
      break;
  }

  //console.log(rover.position);
}

//goForward(myRover);
function moveRover(rover){
  for (var i = 0; i < rover.comands.length;i++){
    
  if (rover.comands[i] == 'r'){
  turnRight(rover)
    }
   if (rover.comands[i] == 'l'){
    turnLeft(rover);
   }
   if (rover.comands[i] == 'f'){
    goForward(rover);
   }
  i++;}

return?? console.log(rover.comands);
}
moveRover(myRover);