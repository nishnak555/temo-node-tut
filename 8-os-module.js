const os = require("os");
//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uprtime in seconds
console.log(`the system uptime is : ${os.uptime()} seconds`);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  Freemem: os.freemem(),
};
console.log(currentOS);
