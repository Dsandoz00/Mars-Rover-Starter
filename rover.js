const Message = require("./message");

class Rover {
   // Write code here!
   constructor(position, mode = "NORMAL", generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }
   receiveMessage(message) {
      let results = []
     
      for (let i = 0; i < message.commands.length; i++) {
         if (message.commands[i].commandType === 'STATUS_CHECK') {
            results.push({
               completed: true,
               roverStatus: {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts,
                  position: this.position
               }
            });
         } else if (message.commands[i].commandType === "MODE_CHANGE") {
            this.mode = message.commands[i].value;
            results.push({
               completed: true
            })
         } else if (message.commands[i].commandType === "MOVE") {
            if (this.mode === "LOW_POWER") {
               results.push({
                  completed: false
               })
            } else {
               this.position = message.commands[i].value;
               results.push({
                  completed: true
               })
            }
         } else {
            results.push({
               completed: true
            })
         }
      }


      return {message: message.name, results: results};
      };
}



module.exports = Rover;