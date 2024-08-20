const Command = require("./command");

class Message {
   // Write code here!
   constructor(name, commands) {
      this.name = "two commands";
      if (!name) {
         throw Error("name required");
     
      }
      this.commands = commands;
   }
   
}
let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message("two commands", commands);





module.exports = Message;