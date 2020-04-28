pragma solidity ^0.5.16;

import "./acceso/UserRoles.sol";

/**
 * @title Smart Contract de Registro de médicos.
 * @author Francisco Alemán
 * @notice Este contrato representa el registro de los médicos.
 * @dev El contrato hereda las funciones del contrato de roles
 */

contract MedicsRegister is UserRoles {

     /**
     * @title Representan los datos del médico.
     */
    struct Medico {
        string name;
        string specialty;
        string cedula;
        string email;
        string hashPicture;
        uint256 whenAdded;
        bool isMedico;
    }

    /**
     * @notice Mapea la dirección al médico..
     */
    mapping (address => Medico) public fileToMedic;

     /**
     * @notice Patrón de switch para encender/apagar
     */
    bool private stopped = false;

     /**
     * @dev Eventos que serán registrados en la blockchain.
     */
    event MedicsAdded(
        address indexed _medic,
        address indexed _admin,
        string _name,
        string _specialty,
        string _cedula,
        string _email,
        string _hashPicture,
        uint256 _date);

//    event Medics(
//        address indexed _medic,
//        address indexed _admin,
//        string _name,
//        string _specialty,
//        string _cedula,
//        string _email,
//        string _hashPicture,
//        uint256 _queryDate);
    event MedicsRetrieve(
        address indexed _medic,
        address indexed _admin,
        string _name,
        string _specialty,
        string _cedula,
        string  _email,
        string  _hashPicture,
        uint256 _date,
        uint256 _queryDate);

//    event MedicsDelete(
//        address indexed _medic,
//        address indexed _admin,
//        string _hashPicture,
//        uint256 _date);
    /**
    * @dev Indica que se ha puesto el contrato en pausa.
    * @param _admin Un administrador
    * @param _stop Indica cuando hay una pausa o una reanudación.
    */
    event LogSwitchStop(
        address indexed _admin,
        bool _stop
    );

    /**
    * @dev Previene de ejecución del contrato
    */
    modifier nonlyStopped {
        require(!stopped);
        _;
    }

    /**
    * @notice Pausar el contrato
    * Se detiene el contrato bajo ciertas condiciones.
    * Sera útil cuando nuevos errores sean descubiertos.
    * @param _stop Switch del contrado de encendido/apagado
    */
    function emergencyStop(bool _stop) public onlyAdmin {
        stopped = _stop;
        emit LogSwitchStop(msg.sender, _stop);
    }

     /**
   * @dev Función para agregar un médico. Esta función es realizada por un administrador.
   * @param _account a
   * @param _name a
   * @param _specialty a
   * @param _cedula a
   * @param _email a
   * @param _hashPicture a
   * @return _success a
   */
    function addMedics(
        address _account,
        string memory _name,
        string memory _specialty,
        string memory _cedula,
        string memory _email,
        string memory _hashPicture
    )
    public nonlyStopped onlyAdmin returns (bool _success) {
        require(_account != 0x0000000000000000000000000000000000000000);
        require(bytes(_name).length < 128);
        require(bytes(_specialty).length < 30);
        require(bytes(_cedula).length < 30);
        require(bytes(_email).length < 30);
        require(bytes(_hashPicture).length < 30);

        uint256 _date = now;
        Medico memory medico = Medico(
            _name,
            _specialty,
            _cedula,
            _email,
            _hashPicture,
            _date,
            true
        );

        fileToMedic[_account] = medico;
        addMedic(_account);

        emit MedicsAdded(
            _account,
            msg.sender,
            _name,
            _specialty,
            _cedula,
            _email,
            _hashPicture,
            _date
        );
        _success = true;
    }

    /**
    * @notice Returns el Medico en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account Cuenta del médico
    * @return a
    */
//    function //Medics(
//        address _account,
//        string memory _name,
//        string memory _specialty,
//        string memory _cedula,
//        string memory _email,
//        string memory _hashPicture
//    )
//    public nonlyStopped onlyAdmin returns (bool _success) {
//        require(_account != 0x0000000000000000000000000000000000000000);
//        require(bytes(_name).length < 128);
//        require(bytes(_specialty).length < 30);
//        require(bytes(_cedula).length < 30);
//        require(bytes(_email).length < 30);
//        require(bytes(_hashPicture).length < 30);
//        //require(fileToMedic[_account].length > 0);
//
//        uint256 _queryDate = now;
//
//        Medico memory medico = Medico(
//            _name,
//            _specialty,
//            _cedula,
//            _email,
//            _hashPicture,
//            fileToMedic[_account].whenAdded,
//            true
//        );
//
//        fileToMedic[_account] = medico;
//
//        medico.name = _name;
//        medico.specialty = _specialty;
//        medico.cedula = _cedula;
//        medico.email = _email;
//        medico.hashPicture = _hashPicture;
//
//        emit Medics//(
//            _account,
//            msg.sender,
//            medico.name,
//            medico.specialty,
//            medico.cedula,
//            medico.email,
//            medico.hashPicture,
//            _queryDate
//        );
//        _success = true;
//    }
    /**
    * @notice Returns el Medico en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account The owner address
    * @return _date The uploaded timestamp
    */
    function viewMedics(address _account, uint256 _date) public nonlyStopped onlyAdmin returns (
        string memory name,
        string memory specialty,
        string memory cedula,
        string memory email,
        string memory hashPicture,
        uint256 whenAdded
    ) {
        if (isAdmin(msg.sender)) {
            require(msg.sender != _account);
        }
        require(_account != 0x0000000000000000000000000000000000000000);
        require(_date >= 0 && _date <= 2**256 - 1);
        //require(fileToMedic[_account].length > 0);

        uint256 _queryDate = now;
        Medico memory medico = fileToMedic[_account];

        emit MedicsRetrieve(
            _account,
            msg.sender,
            medico.name,
            medico.specialty,
            medico.cedula,
            medico.email,
            medico.hashPicture,
            medico.whenAdded,
            _queryDate
        );
        name = medico.name;
        specialty = medico.specialty;
        cedula = medico.cedula;
        email = medico.email;
        hashPicture = medico.hashPicture;
        whenAdded = medico.whenAdded;
    }

    /**
    * @notice Returns el medico en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account The owner address
    * @return _date The uploaded timestamp
    */
//    function deleteMedics(address _account, uint256 _date) public nonlyStopped onlyAdmin returns (bool _success) {
//        require(_account != 0x0000000000000000000000000000000000000000);
//        require(_date >= 0 && _date <= 2**256 - 1);
//        //require(fileToMedic[_account].length > 0);
//
//        uint256 _queryDate = now;
//        string memory hashPic = fileToMedic[_account].hashPicture;
//        fileToMedic[_account].isMedico = false;
//
//        emit MedicsDelete(
//            _account,
//            msg.sender,
//            hashPic,
//            _queryDate
//        );
//        _success = true;
//    }

}
