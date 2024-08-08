const Command = require("./command");

class Message {
   // Write code here!
   constructor(name, commands) {
      this.name = "Gerald";
      if (!name) {
         throw Error("name required");
     
      }
      this.commands = commands;
   }
   
}
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Gerald', commands);





module.exports = Message;