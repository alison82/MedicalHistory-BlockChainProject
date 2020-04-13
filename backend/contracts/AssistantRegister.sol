pragma solidity 0.5.16;
import "./acceso/UserRoles.sol";


/**
 * @title Smart Contract de Registro de asistentes - El administrador agrega un asistente.
 * @author Francisco Alemán
 * @notice Este contrato representa el registro de un asistente.
 * @dev El contrato hereda las funciones del contrato de roles
 */

 contract AssistantRegister is UserRoles{
     /**
     * @title Representa los datos del asistente.
     */

     struct Asistente {
        string name;
        string aPat;
        string aMat;
        string curp;
        string hashPicture;
        uint256 date;
    }

    /**
     * @notice Mapea la dirección a la lista de asistentes..
     */
    mapping (address => Asistente[]) public fileToAssistant;

    /**
     * @notice Patrón de switch para encender/apagar
     */
    bool private stopped = false;

    /**
     * @dev Eventos que serán registrados en la blockchain.
     */
    
    event AssistantAdded(
        address indexed _assistant,
        address indexed _admin,
        string _name,
        string _aPat,
        string _aMat,
        string _curp,
        string _hashPicture,
        uint256 date);

    event AssistantUpdate(
        address indexed _assistant,
        address indexed _admin,
        string _name,
        string _aPat,
        string _aMat,
        string _curp,
        string _hashPicture,
        uint256 _date,
        uint256 _queryDate);

    event AssistantRetrieve(
        address indexed _assistant,
        address indexed _admin,
        string _name,
        string _aPat,
        string _aMat,
        string  _curp,
        string  _hashPicture,
        uint256 _date,
        uint256 _queryDate);

    event AssistantDelete(
        address indexed _assistant,
        address indexed _admin,
        string _hashPicture,
        uint256 _date);

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
   * @dev Función de registro de Asistente. Esta función es realizada por un administrador.
   * @param _account a
   * @param _name a
   * @param _aPat a
   * @param _aMat a
   * @param _curp a
   * @param _hashPicture a
   *@param _date a
   * @return _success a
   */

    function addAssistant(
        address _account,
        string memory _name,
        string memory _aPat,
        string memory _aMat,
        string memory _curp,
        string memory _hashPicture)
    public nonlyStopped onlyAdmin returns (bool _success) {
        require(_account != 0x0000000000000000000000000000000000000000);
        require(bytes(_name).length < 50);
        require(bytes(_aPat).length < 30);
        require(bytes(_aMat).length < 30);
        require(bytes(_curp).length == 5);
        require(bytes(_hashPicture).length == 5);
        uint256 _date = now;

        
        Asistente memory asistente = Asistente(
            _name,
            _aPat,
            _aMat,
            _curp,
            _hashPicture,
            _date
        );

        fileToAssistant[_account].push(asistente);

        emit AssistantAdded(
            _account,
            msg.sender,
            _name,
            _aPat,
            _aMat,
            _curp,
            _hashPicture,
            _date
        );
        _success = true;
    }

    /**
    * @notice Returns el Asistente en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account Cuenta del asistente
    */
    function updateAssistant(
        address _account,
        string memory _name,
        string memory _aPat,
        string memory _aMat,
        string memory _curp,
        string memory _hashPicture,
        uint256 _date)
    public nonlyStopped onlyAdmin returns (bool _success) {
        require(_account != 0x0000000000000000000000000000000000000000);
        require(bytes(_name).length < 50);
        require(bytes(_aPat).length < 30);
        require(bytes(_aMat).length < 30);
        require(bytes(_curp).length == 5);
        require(bytes(_hashPicture).length == 5);
        require(_date >= 0 && _date <= 2**256 - 1);
        require(fileToAssistant[_account].length > 0);

        uint256 _queryDate = now;
        uint256 len = getAssistantCount(_account);
        Asistente memory asistente;
        for (uint256 i = 0; i < len; i++) {
            asistente = fileToAssistant[_account][i];
            if (asistente.date == _date) {
                break;
            }
        }

        asistente.name = _name;
        asistente.aPat = _aPat;
        asistente.aMat = _aMat;
        asistente.curp = _curp;
        asistente.hashPicture = _hashPicture;
        asistente.date = _date;

        emit AssistantUpdate(
            _account,
            msg.sender,
            asistente.name,
            asistente.aPat,
            asistente.aMat,
            asistente.curp,
            asistente.hashPicture,
            asistente.date,
            _queryDate
        );
        _success = true;
    }

    /**
    * @notice Returns el Asistente.
    * @dev Controlado por el switch
    * @param _account The owner address
    * @return _date The uploaded timestamp
    */
    function viewAssistant(address _account, uint256 _date) public nonlyStopped onlyAdmin returns (
        string memory name,
        string memory aPat,
        string memory aMat,
        string memory curp,
        string memory hashPicture) {
        if (isAdmin(msg.sender)) {
            require(msg.sender != _account);
        }
        require(_account != 0x0000000000000000000000000000000000000000);
        require(_date >= 0 && _date <= 2**256 - 1);
        require(fileToAssistant[_account].length > 0);

        uint256 _queryDate = now;
        uint256 len = getAssistantCount(_account);
        Asistente memory asistente;

        for (uint256 i = 0; i < len; i++) {
            asistente = fileToAssistant[_account][i];
            if (asistente.date == _date) {
                break;
            }
        }

        emit AssistantRetrieve(
            _account,
            msg.sender,
            asistente.name,
            asistente.aPat,
            asistente.aMat,
            asistente.curp,
            asistente.hashPicture,
            asistente.date,
            _queryDate
        );
        name = asistente.name;
        aPat = asistente.aPat;
        aMat = asistente.aMat;
        curp = asistente.curp;
        hashPicture = asistente.hashPicture;
    }

    /**
    * @notice Returns el asistente en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account The owner address
    * @return _date The uploaded timestamp
    */
    function deleteAssistant(address _account, uint256 _date) public nonlyStopped onlyAdmin returns (bool _success) {
        require(_account != 0x0000000000000000000000000000000000000000);
        require(_date >= 0 && _date <= 2**256 - 1);
        require(fileToAssistant[_account].length > 0);

        uint256 _queryDate = now;
        uint256 len = getAssistantCount(_account);

        for (uint256 i = 0; i < len; i++) {
            if (fileToAssistant[_account][i].date == _date) {
                emit AssistantDelete(
                    _account,
                    msg.sender,
                    fileToAssistant[_account][i].hashPicture,
                    _queryDate
                );
                delete fileToAssistant[_account][i];
                break;
            }
        }
        _success = true;
    }

    /**
    * @notice Retorna el número de Asistente que posee cierta dirección de asistente.
    * @dev Controlado por el switch
    * @param _assistant El dueño de la dirección
    * @return Retorna el número de Asistente
    */
    function getAssistantCount(address _assistant) internal view nonlyStopped returns (uint256) {
        require(_assistant != 0x0000000000000000000000000000000000000000);
        return fileToAssistant[_assistant].length;
    }

 }