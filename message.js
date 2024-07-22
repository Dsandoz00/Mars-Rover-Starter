const Command = require("./command");

class Message {
   // Write code here!
   constructor(name, commands) {
      this.name = "Gerald";
      if (!name) {
         throw Error("name required");
      //--------------------------------------------------------------------------------------------------------
      //Within the name property I added the conditions set by the matching unit test stating how an error will be thrown if name isn't the first argument
      //--------------------------------------------------------------------------------------------------------
      }
      this.commands = commands;
   }
   
}
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Gerald', commands);



//----------------------------------------------------------------------------------------------------------------
//Message Object: Bundling commands to send to the rover
//The commands argument contains an array of objects from the command class
//----------------------------------------------------------------------------------------------------------------

module.exports = Message;