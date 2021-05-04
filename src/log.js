module.exports = {
  logerr: (mess, ...opt) => {
    console.error('\nERROR:', mess, opt.length ? opt : '');
  },

  log: (mess, ...opt) => {
    console.error(mess, opt.length ? opt : '');
  }


};
