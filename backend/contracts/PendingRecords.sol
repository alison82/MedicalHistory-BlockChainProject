<<<<<<< HEAD
pragma solidity 0.5.16;

import "./MedicsRegister.sol";


contract PendingRecords is MedicsRegister {
    string[] public medicPending;
    event NewMedicRecord(string _hash);
    event RemoveMedicRecord(string _hash);

    /**
    * @notice Guarda el hash de un registro del medico
    * @param _hashString cadena de IPFS que contiene el archivo de registro
    */
    function addMedicRecord(string memory _hashString) public {
        medicPending.push(_hashString);
        emit NewMedicRecord(_hashString);
    }

    /**
    * @notice Regresa la longitud del arreglo de solicitudes pendientes
    * @return Longitud de MedicPending
    */
    function getPendingLength() public view returns(uint count) {
        return medicPending.length;
    }

    /**
    * @notice Regresa la cadena hash de un indice dado
    * @param _index Indice a consultar
    * @return Cadena dentro del indice indicado en MedicPending
    */
    function getPendingRequest(uint32 _index) public view returns(string memory _hashString) {
        return medicPending[_index];
    }

    /**
    * @notice Remueve el elemento del indice indicado
    * @dev Hace un swap para no dejar espacios en blanco
    * @param _index The owner address
    * @return booleano diciendo si fue exitoso o no
    */
    function removePending(uint32 _index) public returns(bool success) {
        if (_index >= medicPending.length) return false;

        string memory removedHash = medicPending[_index];
        for (uint i = _index; i < medicPending.length-1; i++) {
            medicPending[i] = medicPending[i+1];
        }
        delete medicPending[medicPending.length-1];
        medicPending.length--;
        emit RemoveMedicRecord(removedHash);
        return true;
    }
}
