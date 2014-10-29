// ALL print false
if (0) { print('true'); } else { print('false'); }
if (NaN) { print('true'); } else { print('false'); }
if (null) { print('true'); } else { print('false'); }
if (undefined) { print('true'); } else { print('false'); }
if ('') { print('true'); } else { print('false'); }

// above code print true
var f = new Boolean(false);
if (f) { print('true'); } else { print('false'); }