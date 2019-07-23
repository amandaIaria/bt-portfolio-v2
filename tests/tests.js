context = require.context('./cases', true, /\.js$/);
context.keys().forEach(context);
module.exports = context;