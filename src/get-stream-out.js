const { logerr } = require('./log.js');
const fs = require('fs');

const openOutStream = (output) => {
  let streamOut;
  if (output) {
    try{
        const fsof = fs.lstatSync(output).isFile();
        if( !fsof) return -3;
    }catch(e){
      if(e.code == 'ENOENT'){
        //no such file or directory
        return -4;
      }else {
        return  -1;
      }
    }

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

module.exports = (output) => {
  const streamOut = openOutStream(output);

  switch (streamOut) {
  case null:
    logerr('Can\'t access OUTPUT file. File is not writable!');
    process.exitCode = 120;
    return null;
  case -1:
    logerr('Can\'t access OUTPUT file. File not exist or you don\'t have rights!');
    process.exitCode = 121;
    return null;
  case -3:
    logerr('Can\'t access OUTPUT file. It is not a file!');
    process.exitCode = 123;
    return null;
  case -4:
    logerr('Can\'t access OUTPUT file. File not exist or you don\'t have rights!');
    process.exitCode = 124;
    return null;

    default: 
      return streamOut;
  }
}
