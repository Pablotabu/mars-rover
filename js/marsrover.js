var myRover = {
  direction: 'N',
  position: [0, 2],
  travelLog: [],
}

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
}

function turnRight(rover) {
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
}

function goForward(rover) {
  var futurePosition = [0, 0]
  switch (rover.direction) {
    case directions.NORTH:
      futurePosition = [rover.position[0], rover.position[1] - 1];
      break;
    case directions.EAST:
      futurePosition = [rover.position[0] + 1, rover.position[1]];
      break;
    case directions.SOUTH:
      futurePosition = [rover.position[0], rover.position[1] + 1];
      break;
    case directions.WEST:
      futurePosition = [rover.position[0] - 1, rover.position[1]];
      break;
  }
  if (!checkRoverIfAfterMoveInBounds(futurePosition)) {
    console.log('Cannot move - I would die!')
    return;
  }
  if (IsThereAnObstacle(futurePosition)) {
    console.log('cannot move because there is an obstacle!')
    return;
  }
  rover.position = futurePosition;
}

function goBackwards(rover) {
  var futurePosition = [0, 0]
  switch (rover.direction) {
    case directions.NORTH:
      futurePosition = [rover.position[0], rover.position[1] + 1];
      break;
    case directions.EAST:
      futurePosition = [rover.position[0] - 1, rover.position[1]];
      break;
    case directions.SOUTH:
      futurePosition = [rover.position[0], rover.position[1] - 1];
      break;
    case directions.WEST:
      futurePosition = [rover.position[0] + 1, rover.position[1]];
      break;
  }
  if (!checkRoverIfAfterMoveInBounds(futurePosition)) {
    console.log('Cannot move - I would die!')
    return;
  }
  if (IsThereAnObstacle(futurePosition)) {
    console.log('cannot move because there is an obstacle!')
    return;
  }
  rover.position = futurePosition;
}

function checkRoverIfAfterMoveInBounds(position) {
  const bounds = [10, 10]
  if (position[0] > bounds[0] || position[1] > bounds[1] || position[0] < 0 || position[1] < 0)
    return false;
  return true;
}

function moveCommand(command, rover) {
  addPositionToLog(rover.position, rover)
  for (let i = 0; i < command.length; i++) {
    const actualCommand = command[i];
    switch (actualCommand) {
      case 'r':
        turnRight(rover)
        break;
      case 'l':
        turnLeft(rover);
        break;
      case 'f':
        goForward(rover);
        addPositionToLog(rover.position, rover)
        break;
      case 'b':
        goBackwards(rover)
        addPositionToLog(rover.position, rover)
    }
  }
  printLog(rover)
}

function printLog(rover) {
  rover.travelLog.forEach(actualTravelLogItem => {
    console.log(actualTravelLogItem)
  })
}

function addPositionToLog(position, rover) {
  var pos = [position[0], position[1]]
  rover.travelLog.push(pos)
}

function moveCommandWithValidation(command, rover) {
  var canMove = false;
  for (let i = 0; i < command.length; i++) {
    const actualCommand = command[i];
    if (actualCommand == 'f' || actualCommand == 'b' || actualCommand == 'r' || actualCommand == 'l') {
      canMove = true;
    } else {
      console.log('Command string contains invalid commands. Please review your input! Rover will not move until another command is sent.')
      canMove = false;
      break;
    }
  }
  if (canMove) {
    moveCommand(command, rover)
  }
}

function IsThereAnObstacle(position) {
  for (let i = 0; i < Obstacles.length; i++) {
    const actualObstacle = Obstacles[i];
    if (position[0] == actualObstacle[0] && position[1] == actualObstacle[1])
      return true;
  }
  return false;
}

const Obstacles = [
  [0, 2],
  [5, 2],
  [0, 3]
]

//moveCommandWithValidation('bbbbbbb', myRover);



moveCommandWithValidation('bfrlbfrlfbrllbfrl', myRover)