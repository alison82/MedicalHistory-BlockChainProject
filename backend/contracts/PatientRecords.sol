pragma solidity 0.5.16;

import "./acceso/UserRoles.sol";

/**
 * @title Smart Contract de Historial de pacientes - Control de Estudio basado en rol.
 * @author Adrián Constante
 * @notice Este contrato representa el registro de un Estudio asociado a una persona.
 * @notice Debido a las limitaciones de almacenamiento, los Estudio serál almacenados en IPFS.
 * El hash IPFS generado por el archivo en conjunto con metadatos del paciente serán almacenados en la blockchain.
 * @dev El contrato hereda las funciones del contrato de roles
 */

contract PatientRecords is UserRoles {
    /**
     * @title Representa un Estudio el cual le pertenece a un paciente.
     */
    struct Estudio {
        string nombre;
        string comorb;
        string groupBlood;
        string ipfsHash;
        uint256 uploadDate;
    }

    /**
     * @notice Mapea el paciente a su historial clínico..
     */
    mapping (address => Estudio[]) public fileToPatient;

    /**
     * @notice Patrón de switch para encender/apagar
     */
    bool private stopped = false;

    /**
     * @dev Eventos que serán registrados en la blockchain con finalidad de auditoria.
     */
    event RecordAdded(
        address indexed _patient,
        address indexed _medic,
        string _nombre,
        string _comorb,
        string _groupBlood,
        string _ipfsHash,
        uint256 _uploadDate);

    event RecordUpdate(
        address indexed _patient,
        address indexed _medic,
        string _nombre,
        string _comorb,
        string _groupBlood,
        string _ipfsHash,
        uint256 _uploadDate,
        uint256 _queryDate);

    event RecordRetrieve(
        address indexed _patient,
        address indexed _medic,
        string _nombre,
        string _comorb,
        string _groupBlood,
        string  _ipfsHash,
        uint256  _uploadDate,
        uint256 _queryDate);

    event RecordDelete(
        address indexed _patient,
        address indexed _medic,
        string ipfsHash,
        uint256 _uploadDate);

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
    * @dev Está función será llamada para todos los mensajes que sean enviados a este contrado.
    * Enviar Ether a este contrato ocasionará una excepción, dado que las funciones no tienen un modificador de pago.
    */
    function() external {}

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
   * @dev Función de creación de Estudio. Esta función es realizada por un doctor.
   * @param _account a
   * @param _nombre a
   * @param _comorb a
   * @param _groupBlood a
   * @param _ipfsHash a
   * @return _success a
   */
    function addRecord(
        address _account,
        string memory _nombre,
        string memory _comorb,
        string memory _groupBlood,
        string memory _ipfsHash)
    public nonlyStopped onlyMedic returns (bool _success) {
        require(_account != 0x0000000000000000000000000000000000000000);
        require(bytes(_nombre).length < 128);
        require(bytes(_comorb).length < 512);
        require(bytes(_groupBlood).length < 8);
        require(bytes(_ipfsHash).length == 46);

        uint256 _uploadDate = now;
        Estudio memory estudio = Estudio(
            _nombre,
            _comorb,
            _groupBlood,
            _ipfsHash,
            _uploadDate
        );

        fileToPatient[_account].push(estudio);

        emit RecordAdded(
            _account,
            msg.sender,
            _nombre,
            _comorb,
            _groupBlood,
            _ipfsHash,
            _uploadDate
        );
        _success = true;
    }

    /**
    * @notice Returns el estudio en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account The owner address
    * @return _uploadDate The uploaded timestamp
    */
    function viewRecord(address _account, uint256 _uploadDate) public nonlyStopped onlyPatient returns (
        string memory nombre,
        string memory comorb,
        string memory groupBlood,
        string memory ipfsHash) {
        if (isPatient(msg.sender)) {
            require(msg.sender == _account);
        }
        if (isMedic(msg.sender)) {
            require(msg.sender != _account);
        }
        require(_account != 0x0000000000000000000000000000000000000000);
        require(_uploadDate >= 0 && _uploadDate <= 2**256 - 1);
        require(fileToPatient[_account].length > 0);

        uint256 _queryDate = now;
        uint256 len = getRecordCount(_account);
        Estudio memory estudio;

        for (uint256 i = 0; i < len; i++) {
            estudio = fileToPatient[_account][i];
            if (estudio.uploadDate == _uploadDate) {
                break;
            }
        }

        emit RecordRetrieve(
            _account,
            msg.sender,
            estudio.nombre,
            estudio.comorb,
            estudio.groupBlood,
            estudio.ipfsHash,
            estudio.uploadDate,
            _queryDate
        );
        nombre = estudio.nombre;
        comorb = estudio.comorb;
        groupBlood = estudio.groupBlood;
        ipfsHash = estudio.ipfsHash;
    }

    /**
    * @notice Returns el estudio en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account Cuenta del paciente
    * @return _ipfsHash The IPFS hash
    */
    function updateRecord(
        address _account,
        string memory _nombre,
        string memory _comorb,
        string memory _groupBlood,
        string memory _ipfsHash,
        uint256 _uploadDate)
    public nonlyStopped onlyMedic returns (bool _success) {
        require(_account != 0x0000000000000000000000000000000000000000);
        require(bytes(_nombre).length < 128);
        require(bytes(_comorb).length < 512);
        require(bytes(_groupBlood).length < 8);
        require(bytes(_ipfsHash).length == 46);
        require(_uploadDate >= 0 && _uploadDate <= 2**256 - 1);
        require(fileToPatient[_account].length > 0);

        uint256 _queryDate = now;
        uint256 len = getRecordCount(_account);
        Estudio memory estudio;
        for (uint256 i = 0; i < len; i++) {
            estudio = fileToPatient[_account][i];
            if (estudio.uploadDate == _uploadDate) {
                break;
            }
        }

        estudio.nombre = _nombre;
        estudio.comorb = _comorb;
        estudio.groupBlood = _groupBlood;
        estudio.ipfsHash = _ipfsHash;
        estudio.uploadDate = _uploadDate;

        emit RecordUpdate(
            _account,
            msg.sender,
            estudio.nombre,
            estudio.comorb,
            estudio.groupBlood,
            estudio.ipfsHash,
            estudio.uploadDate,
            _queryDate
        );
        _success = true;
    }

    /**
    * @notice Returns el estudio en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account The owner address
    * @return _uploadDate The uploaded timestamp
    */
    function deleteRecord(address _account, uint256 _uploadDate) public nonlyStopped onlyMedic returns (bool _success) {
        require(_account != 0x0000000000000000000000000000000000000000);
        require(_uploadDate >= 0 && _uploadDate <= 2**256 - 1);
        require(fileToPatient[_account].length > 0);

        uint256 _queryDate = now;
        uint256 len = getRecordCount(_account);

        for (uint256 i = 0; i < len; i++) {
            if (fileToPatient[_account][i].uploadDate == _uploadDate) {
                emit RecordDelete(
                    _account,
                    msg.sender,
                    fileToPatient[_account][i].ipfsHash,
                    _queryDate
                );
                delete fileToPatient[_account][i];
                break;
            }
        }
        _success = true;
    }

    /**
    * @notice Retorna el número de Estudios que posee cierta dirección de paciente.
    * @dev Controlado por el switch
    * @param _patient El dueño de la dirección
    * @return Retorna el número de estudios de cierto paciente
    */
    function getRecordCount(address _patient) internal view nonlyStopped returns (uint256) {
        require(_patient != 0x0000000000000000000000000000000000000000);
        return fileToPatient[_patient].length;
    }
}
