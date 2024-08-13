const crypto = require('crypto');

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');


console.log( hash);

// whats the difference between bitcoin node and bitcoin miner
