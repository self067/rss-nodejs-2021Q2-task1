const fs = require('fs');

module.exports = (output) => {
  let streamOut;
  if (output) {
    try {
      fs.accessSync(output, fs.constants.W_OK);
    }
    catch {
      return null;
    }
    streamOut = fs.createWriteStream(output, {flags:'a'});
  }
  else
    streamOut = process.stdout;

  return streamOut;
}
