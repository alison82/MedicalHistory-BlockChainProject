pragma solidity >=0.4.21 <0.7.0

contract Validator {
    
    address owner;
    mapping(uint256=>bool) usedNonces;
    
    constructor()public{
        owner = msg.sender;
    }
    
    modifier onlyOwner(){
        if(owner == msg.sender){
            _;
        }
    }

    function verifyNonce(uint256 Nonce)public returns(bool success){
        require(!usedNonces[Nonce], "Nonce used");
        usedNonces[Nonce] = true;

        success = true;
    }

    function verify(bytes32 r, bytes32 s, uint8 v, bytes32 hash)public returns(address) {
        return ecrecover(hash, v, r, s);
    } 
    
   
    
    // function kill() onlyOwner {
    //     suicide(owner);
    // }
}