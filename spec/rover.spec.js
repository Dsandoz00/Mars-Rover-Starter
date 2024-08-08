const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function () {
  // 7 tests here!
  it("constructor sets position and default values mode and generatorWatts", function () {
    let rover = new Rover(98382);
    expect(rover.position).toBe(98382);
    expect(rover.mode).toBe("NORMAL");
    expect(rover.generatorWatts).toBe(110);
  });

  it("response returned by receiveMessage contains the name of the message", function () {});
  let commands = [new Command("MOVE", 98382), new Command("STATUS_CHECK")];
  let message = new Message("Gerald", commands);
  let rover = new Rover(20000);
  let response = rover.receiveMessage(message);
  expect(response.message).toBe("Gerald");

  it("response returned receiveMessage includes two results if two commands are sent in the message", function () {
    let commands = [new Command("MOVE", 98382), new Command("STATUS_CHECK")];
    let message = new Message("Gerald", commands);
    let rover = new Rover(20000);
    let response = rover.receiveMessage(message);
    expect(response.results.length).toBe(commands.length);
  });

  it("responds correctly to the status check command", function () {
    let commands = [new Command("MOVE", 98382), new Command("STATUS_CHECK")];
    let message = new Message("Gerald", commands);
    let rover = new Rover(20000);
    let response = rover.receiveMessage(message);
    let statHold = {
      completed: true,
      roverStatus: {
        mode: "NORMAL",
        generatorWatts: 110,
        position: 98382,
      },
    };

    expect(response.results[0]).toEqual(statHold);
  });

  it("responds correctly to the mode change command", function () {
    let commands = [new Command("MOVE", 98382), new Command("STATUS_CHECK")];
    let message = new Message("Gerald", commands);
    let rover = new Rover(20000);
    let response = rover.receiveMessage(message);

    expect(rover.mode).toBe("LOW_POWER");
  });

  it("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
    let commands = [new Command("MOVE", 98382), new Command("STATUS_CHECK")];
    let message = new Message("Gerald", commands);
    let rover = new Rover(20000);
    let response = rover.receiveMessage(message);

    expect(rover.mode).toBe("LOW_POWER");
    expect(response.results[0].completed).toBe(true);
    expect(rover.position).toBe(20000);
    expect(response.results[1].completed).toBe(false);
  });

  it("responds with the position for the move command", function () {
    let commands = [new Command("MOVE", 98382), new Command("STATUS_CHECK")];
    let message = new Message("Gerald", commands);
    let rover = new Rover(20000);
    
    rover.receiveMessage(message);

    expect(rover.postion).toEqual(98382);
  });
});
