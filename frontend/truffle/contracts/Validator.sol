pragma solidity 0.5.16;

contract Validator {

    address owner;
    mapping(uint256=>bool) usedNonces;

    function verifyNonce(uint256 Nonce)public returns(bool success){
        require(!usedNonces[Nonce], "Nonce used");
        usedNonces[Nonce] = true;

        success = true;
    }

    function verify(bytes32 r, bytes32 s, uint8 v, bytes32 hash)public pure returns(address) {
        return ecrecover(hash, v, r, s);
    }



    // function kill() onlyOwner {
    //     suicide(owner);
    // }
}
