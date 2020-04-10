pragma solidity 0.5.16;

import "./acceso/UserRoles.sol";

/**
 * @title 
 * @author Adrián Constante
 * @notice
 * @notice
 * @dev
 */

contract PersonalRegister is UserRoles {
   /**
    * @title Representa un Estudio el cual le pertenece a un paciente.
    */
    struct Paciente {
        string nombre;
        string aPat;
        string aMat;
        string idHash;
        uint256 uploadDate;
    }

    struct Medico {
        string nombre;
        string aPat;
        string aMat;
        string idHash;
        uint256 uploadDate;
    }

    struct Admin {
        string nombre;
        string aPat;
        string aMat;
        string idHash;
        uint256 uploadDate;
    }
}
