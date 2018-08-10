var myRover = {
  direction: 'N',
  position: [0, 2]
}
// ======================

let Position = {
  X: 0,
  Y: 0
}

const directions = {
  SOUTH: 'S',
  NORTH: 'N',
  WEST: 'W',
  EAST: 'E'
}

// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case directions.NORTH:
      rover.direction = directions.WEST;
      break;
    case directions.EAST:
      rover.direction = directions.NORTH;
      break;
    case directions.SOUTH:
      rover.direction = directions.EAST;
      break;
    case directions.WEST:
      rover.direction = directions.SOUTH;
      break;
  }
  //console.log(rover);

}
//turnLeft(myRover)


//function turnRight(rover){
//}
function turnRight(rover) {
  console.log('turn right was called')
  console.log('actual direction: ' + rover.direction)
  switch (rover.direction) {
    case directions.NORTH:
      rover.direction = directions.EAST;
      break;
    case directions.EAST:
      rover.direction = directions.SOUTH;
      break;
    case directions.EAST:
      rover.direction = directions.WEST;
      break;
    case directions.WEST:
      rover.direction = directions.NORTH;
      break;
  }
  console.log('after turning direction: ' + rover.direction);

}
//turnRight(myRover)

//function moveForward(rover){
//console.log("moveForward was called")
//

function goForward(rover) {
  console.log('go forward was called')
  console.log('Actual position - X:' + rover.position[0] + ' Y: ' + rover.position[1])
  switch (rover.direction) {
    case directions.NORTH:
      rover.position[1]--;
      break;
    case directions.EAST:
      rover.position[0]--;
      break;
    case directions.SOUTH:
      rover.position[1]--;
      break;
    case directions.WEST:
      rover.position[0]--;
      break;
  }
  console.log('After going forward position - X:' + rover.position[0] + ' Y: ' + rover.position[1])
}

//goForward(myRover);
// function moveRover(rover) {
//   for (var i = 0; i < rover.commands.length; i++) {

//     if (rover.commands[i] == 'r') {
//       turnRight(rover)
//     }
//     if (rover.commands[i] == 'l') {
//       turnLeft(rover);
//     }
//     if (rover.commands[i] == 'f') {
//       goForward(rover);
//     }    
//   }

//   return console.log(rover.commands);
// }

function moveCommand(command, rover) {
  console.log("Actual pos:" + rover.position[0] + ',' + rover.position[1]);
  console.log('Actual dir:' + rover.direction);
  for (var i = 0; i < command.length; i++) {
    var actualCommand = command[i];
    switch (actualCommand) {
      case 'r':
        turnRight(rover)
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'f':
        goForward(rover);
    }
  }
  console.log("After Command pos:" + rover.position[0] + ',' + rover.position[1]);
  console.log('After Command dir:' + rover.direction);
}


moveCommand('frllfrfrfr', myRover);
//goForward(myRover);