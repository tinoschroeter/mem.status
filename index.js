const statusIcon = require("status-icon")();
const os = require("node:os");

setInterval(() => {
  const mem = os.freemem();

  console.log(`mem: ${mem}`);
  if (mem > 1024) statusIcon.set("./stati/green.png");
  if (mem < 1024 && mem > 512) statusIcon.set("./stati/yellow.png");
  if (mem < 512) statusIcon.set("./stati/red.png");
}, 2000);
