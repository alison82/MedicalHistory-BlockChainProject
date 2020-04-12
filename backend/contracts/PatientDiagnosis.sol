pragma solidity 0.5.16;
import "./PatienRecords.sol";

/**
 * @title Smart Contract de Diagnóstico de pacientes - Control de Diagnóstico realizado por el médico.
 * @author Francisco Alemán
 * @notice Este contrato representa el registro de un Diagnóstico asociado a una persona.
 * @dev El contrato hereda las funciones del contrato de roles
 */

contract PatientDiagnosis is PatientRecords {

    /**
     * @title Representa un Diágnostico el cual le pertenece a un paciente.
     */
    struct Diagnostico {
        uint256 age;
        uint256 weight;
        string diagnostic;
        string observations;
        uint256 date;
    }

    /**
     * @notice Mapea el paciente a su diagnóstico..
     */
    mapping (address => Diagnostico[]) public fileToPatientDiagnosis;
    /**
     * @notice Patrón de switch para encender/apagar
     */
    bool private stopped = false;

    /**
     * @dev Eventos que serán registrados en la blockchain.
     */
    event DiagnosticdAdded(
        address indexed _patient,
        address indexed _medic,
        uint256 _age,
        uint256 _weight,
        string _diagnostic,
        string _observations,
        uint256 _date);

    event DiagnosisUpdate(
        address indexed _patient,
        address indexed _medic,
        uint256 _age,
        uint256 _weight,
        string _diagnostic,
        string _observations,
        uint256 _date,
        uint256 _queryDate);

    event DiagnosticRetrieve(
        address indexed _patient,
        address indexed _medic,
        uint256 _age,
        uint256 _weight,
        string _diagnostic,
        string  _observations,
        uint256  _date,
        uint256 _queryDate);

    event DiagnosticDelete(
        address indexed _patient,
        address indexed _medic,
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
   * @dev Función de creación de Diagnóstico. Esta función es realizada por un doctor.
   * @param _account a
   * @param _age a
   * @param _weight a
   * @param _diagnostic a
   * @param _observations a
   *@param _date a
   * @return _success a
   */
    function addDiagnostic(
        address _account,
        uint256 _age,
        uint256 _weight,
        string memory _diagnostic,
        string memory _observations)
    public nonlyStopped onlyMedic returns (bool _success) {
        require(_account != 0x0000000000000000000000000000000000000000);
        require(_age < 120);
        require(_weight < 700);
        require(bytes(_diagnostic).length < 20);
        require(bytes(_observations).length < 512);
        uint256 _date = now;


        Diagnostico memory diagnostico = Diagnostico(
            _age,
            _weight,
            _diagnostic,
            _observations,
            _date
        );

        fileToPatientDiagnosis[_account].push(diagnostico);

        emit DiagnosticdAdded(
            _account,
            msg.sender,
            _age,
            _weight,
            _diagnostic,
            _observations,
            _date
        );
        _success = true;
    }

    /**
    * @notice Returns el Diagnóstico en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account Cuenta del paciente
    */
    function updateDiagnostic(
        address _account,
        uint256  _age,
        uint256  _weight,
        string memory _diagnostic,
        string memory _observations,
        uint256 _date)
    public nonlyStopped onlyMedic returns (bool _success) {
        require(_account != 0x0000000000000000000000000000000000000000);
        require(_age < 120);
        require(_weight < 700);
        require(bytes(_diagnostic).length < 20);
        require(bytes(_observations).length < 512);
        require(_date >= 0 && _date <= 2**256 - 1);
        require(fileToPatientDiagnosis[_account].length > 0);

        uint256 _queryDate = now;
        uint256 len = getDiagnosticCount(_account);
        Diagnostico memory diagnostico;
        for (uint256 i = 0; i < len; i++) {
            diagnostico = fileToPatientDiagnosis[_account][i];
            if (diagnostico.date == _date) {
                break;
            }
        }

        diagnostico.age = _age;
        diagnostico.weight = _weight;
        diagnostico.diagnostic = _diagnostic;
        diagnostico.observations = _observations;
        diagnostico.date = _date;

        emit DiagnosisUpdate(
            _account,
            msg.sender,
            diagnostico.age,
            diagnostico.weight,
            diagnostico.diagnostic,
            diagnostico.observations,
            diagnostico.date,
            _queryDate
        );
        _success = true;
    }

    /**
    * @notice Returns el Diagnóstico en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account The owner address
    * @return _date The uploaded timestamp
    */
    function viewDiagnostic(address _account, uint256 _date) public nonlyStopped onlyPatient returns (
        uint256  age,
        uint256 weight,
        string memory diagnostic,
        string memory observations) {
        if (isPatient(msg.sender)) {
            require(msg.sender == _account);
        }
        if (isMedic(msg.sender)) {
            require(msg.sender != _account);
        }
        require(_account != 0x0000000000000000000000000000000000000000);
        require(_date >= 0 && _date <= 2**256 - 1);
        require(fileToPatientDiagnosis[_account].length > 0);

        uint256 _queryDate = now;
        uint256 len = getDiagnosticCount(_account);
        Diagnostico memory diagnostico;

        for (uint256 i = 0; i < len; i++) {
            diagnostico = fileToPatientDiagnosis[_account][i];
            if (diagnostico.date == _date) {
                break;
            }
        }

        emit DiagnosticRetrieve(
            _account,
            msg.sender,
            diagnostico.age,
            diagnostico.weight,
            diagnostico.diagnostic,
            diagnostico.observations,
            diagnostico.date,
            _queryDate
        );
        age = diagnostico.age;
        weight = diagnostico.weight;
        diagnostic = diagnostico.diagnostic;
        observations = diagnostico.observations;
    }

    /**
    * @notice Returns el estudio en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account The owner address
    * @return _uploadDate The uploaded timestamp
    */
    function deleteDiagnostic(address _account, uint256 _date) public nonlyStopped onlyMedic returns (bool _success) {
        require(_account != 0x0000000000000000000000000000000000000000);
        require(_date >= 0 && _date <= 2**256 - 1);
        require(fileToPatientDiagnosis[_account].length > 0);

        uint256 _queryDate = now;
        uint256 len = getDiagnosticCount(_account);

        for (uint256 i = 0; i < len; i++) {
            if (fileToPatientDiagnosis[_account][i].date == _date) {
                emit DiagnosticDelete(
                    _account,
                    msg.sender,
                    _queryDate
                );
                delete fileToPatientDiagnosis[_account][i];
                break;
            }
        }
        _success = true;
    }

    /**
    * @notice Retorna el número de Diagnósticos que posee cierta dirección de paciente.
    * @dev Controlado por el switch
    * @param _patient El dueño de la dirección
    * @return Retorna el número de Diagnósticos de cierto paciente
    */
    function getDiagnosticCount(address _patient) internal view nonlyStopped returns (uint256) {
        require(_patient != 0x0000000000000000000000000000000000000000);
        return fileToPatientDiagnosis[_patient].length;
    }
}
