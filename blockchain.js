const SHA256 =require("crypto-js/sha256");
 
class Block {
    constructor(index, timestamp, data, previousHash = '') {
      this.index = index;
      this.previousHash = previousHash;
      this.timestamp = timestamp;
      this.data = data;
      this.hash = this.calculateHash();
    }
    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
  }
  class Blockchain{
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock() {
        return new Block(0, "20/11/2017", "Genesis block ", "0");
    }
getLatestBlock() {
    return this.chain[this.chain.length - 1];
}
addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    console.log(this.getLatestBlock().hash)
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
}
  

  ischainvalid() 
  {
      for (var i=1;i< this.chain.length;i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i-1];

          if(currentBlock.hash !==currentBlock.calculateHash()){
              return false;
          }
            if(currentBlock.previouesBlock!= previousBlock){
                return false;
            }
      }
            returnfalse 
        }
    }
let scoin = new Blockchain();

scoin.addBlock(new Block(1,'15/12/2021',{amount : 140}));
scoin.addBlock(new Block(2,'16/12/2021',{amount : 100}));

console.log(JSON.stringify(scoin,null,4));



  

