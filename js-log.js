Log = {
	level: 0,

	debug: function(msg) { Log.write(0, 'debug', arguments); },
	info:  function(msg) { Log.write(1, 'info', arguments); },
	warn:  function(msg) { Log.write(2, 'warn', arguments); },
	error: function(msg) { Log.write(3, 'error', arguments); },

	write: function(lvl, method, args) {
		if(lvl >= Log.level && console !== undefined && console.log !== undefined) {
			var f = typeof console[method] === 'function' ? console[method] : console.log;
			f.apply ? f.apply(console, args) : f(args); 
		}
	}
};
