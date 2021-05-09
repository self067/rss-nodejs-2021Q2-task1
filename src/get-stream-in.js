const { logerr } = require('./log.js');
const fs = require('fs');

const openInStream = (input) => {
  let streamIn = null;
  if (input) {
    try{
        const fsif = fs.lstatSync(input).isFile();
        if( !fsif) return -3;
    }catch(e){
      if(e.code == 'ENOENT'){
        //no such file or directory
        return -4;
      }else {
        return  -1;
      }
    }
      try {
        fs.accessSync(input, fs.constants.R_OK);
      }
      catch {
        return null;
      }
      streamIn = fs.createReadStream(input, {flags:'r'});
  }
  else
    streamIn = process.stdin;

  return streamIn;
}

module.exports = (input) => {

  const streamIn = openInStream(input);

  switch (streamIn) {
  case null:
    logerr('Can\'t access INPUT file. File not exist or you don\'t have rights!');
    process.exitCode = 110;
    return null;
  case -1:
    logerr('Can\'t access INPUT file. File not exist or you don\'t have rights!');
    process.exitCode = 111;
    return null;
  case -3:
    logerr('Can\'t access INPUT file. It is not a file!');
    process.exitCode = 113;
    return null;
  case -4:
    logerr('Can\'t access INPUT file. File not exist or you don\'t have rights!');
    process.exitCode = 114;
    return null;

    default: 
      return streamIn;
  }

}
