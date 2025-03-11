const crypto = require('crypto');

function findHashWithPrefix(prefix){
    let input = 0;
    while(true){
        let inputStr =input.toString();
        let hash =crypto.createHash('sha256').update(input).digest('Hex');
        if(hash.startsWith(prefix)){
            return {input : inputStr , hash:hash};
        } input ++
    }
}

const result = findHashWithPrefix('00000');
console.log(`Input : ${result.input}`);
console.log(`HAsh : ${result.hash}`);
