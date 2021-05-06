const { logerr } = require('./log.js');

module.exports = argv => {
  const isNumber = function(n) {
    return !isNaN(parseInt(n)) && isFinite(n);
  };

  const args = {};
  for (const key in argv) {
    switch (key) {
    case '_': break;
    case 's':
    case 'shift':
      if (!isNumber(argv[key])) {
        logerr('Shift parameter must be a number!');
        return null;
      }
      args['shift'] = parseInt(argv[key]);
      break;
    case 'i':
    case 'input':
      args['input'] = argv[key];
      break;
    case 'o':
    case 'output':
      args['output'] = argv[key];
      break;
    case 'a':
    case 'action':
      if (argv[key] === 'encode' || argv[key] === 'decode') {
        args['action'] = argv[key];
      } else {
        logerr('Action parameter must be encode or decode!', argv[key]);
        return null;
      }
      break;
    default:
      logerr(`Unknown option ${key}=${argv[key]}`);
      return null;
    }
  }

  if (!('shift' in args)) {
    logerr('Required parameter "Shift" is absent.');
    return null;
  }

  if (!('action' in args)) {
    logerr('Required parameter "Action" is absent.');
    return null;
  }

  return args;
};
