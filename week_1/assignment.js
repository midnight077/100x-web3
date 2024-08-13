// find a input whos hash has 5 0's at starting
const crypto = require('crypto');

function findHashWithPrefix(prefix){
    let input = 0;
    while(1){
        let hash = crypto.createHash('sha256').update(input.toString()).digest('hex')
        if(hash.startsWith(prefix)){
            return {input , hash}
        }
        input++;
    }

}

let ans = findHashWithPrefix('00000');
console.log(ans.input)
console.log(ans.hash)
