class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 }
 let modeCommand = new Command('MODE_CHANGE', 'LOW_POWER');
 let moveCommand = new Command('MOVE', 2100)
 let commands = [modeCommand, moveCommand];

 module.exports = Command;

 //--------------------------------------------------------------------------------
 //Creating the command objects. What is being asked of me?
    //Objects can have these commandtypes + 
    //values (MODE_CHANGE(A number for the position the rove should move to), MOVE(LOW_POWER, NORMAL), STATUS CHECK(no values))
    //creating an array of objects to pass through message call => rover class
  //-------------------------------------------------------------------------------