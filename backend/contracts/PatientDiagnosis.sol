pragma solidity 0.5.16;
pragma experimental ABIEncoderV2;

import "./PatientRecords.sol";

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
        string nombre;
        string comorb;
        uint256 age;
        uint256 weight;
        string diagnostic;
        string observations;
        string[] estudio;
    }

    /**
     * @notice Mapea el paciente a su diagnóstico..
     */
    mapping (address => mapping (uint256 => Diagnostico)) public fileToPatientDiagnosis;
    mapping (address => uint256[]) public extendedFileToPatientDiagnosis;
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
        string _nombre,
        string _comorb,
        uint256 _age,
        uint256 _weight,
        string _diagnostic,
        string _observations,
        uint256 _date
        );

    event DiagnosisUpdate(
        address indexed _patient,
        address indexed _medic,
        string _nombre,
        string _comorb,
        uint256 _age,
        uint256 _weight,
        string _diagnostic,
        string _observations
        );

    event DiagnosticRetrieve(
        address indexed _patient,
        address indexed _medic,
        string _nombre,
        string _comorb,
        uint256 _age,
        uint256 _weight,
        string _diagnostic,
        string  _observations
        );

    event FullDiagnosticRetrieve(
        address indexed _patient,
        address indexed _medic,
        uint256[] _dates
    );

    event DiagnosticDelete(
        address indexed _patient,
        address indexed _medic,
        uint256 _date
        );

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
    function () external payable {}

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

    function patientDiagnosis(address _account, uint256 _timeStamp) public view returns (Diagnostico memory) {
        return fileToPatientDiagnosis[_account][_timeStamp];
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
        string memory _nombre,
        string memory _comorb,
        uint8 _age,
        uint8 _weight,
        string memory _diagnostic,
        string memory _observations,
        string[] memory _estudio
        )
    public nonlyStopped onlyMedic returns (bool _success) {
        require(_account != address(0));
        require(isPatient(_account) && isMedic(msg.sender));
        require(bytes(_nombre).length < 25);
        require(bytes(_comorb).length < 50);
        require(_age < 120);
        require(_weight < 700);
        require(bytes(_diagnostic).length < 256);
        require(bytes(_observations).length < 512);

        uint256 _date = now;
        Diagnostico memory diagnostico = Diagnostico(
            _nombre,
            _comorb,
            _age,
            _weight,
            _diagnostic,
            _observations,
            _estudio
        );

        fileToPatientDiagnosis[_account][_date] = diagnostico;
        extendedFileToPatientDiagnosis[_account].push(_date);

        emit DiagnosticdAdded(
            _account,
            msg.sender,
            _nombre,
            _comorb,
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
        string memory _nombre,
        string memory _comorb,
        uint256 _age,
        uint256 _weight,
        string memory _diagnostic,
        string memory _observations,
        string[] memory _estudio,
        uint256 _date
        )
    public nonlyStopped onlyMedic returns (bool _success) {
        require(_account != address(0));
        require(bytes(_nombre).length < 25);
        require(bytes(_comorb).length < 256);
        require(_age < 120);
        require(_weight < 700);
        require(bytes(_diagnostic).length < 50);
        require(bytes(_observations).length < 512);
        require(_date >= 0 && _date <= 2**256 - 1);
        //require(fileToPatientDiagnosis[_account][_date] != 0);
        require(_estudio.length > 0);

        Diagnostico memory diagnostico = patientDiagnosis(_account, _date);
        diagnostico.nombre = _nombre;
        diagnostico.comorb = _comorb;
        diagnostico.age = _age;
        diagnostico.weight = _weight;
        diagnostico.diagnostic = _diagnostic;
        diagnostico.observations = _observations;
        diagnostico.estudio = _estudio;

        emit DiagnosisUpdate(
            _account,
            msg.sender,
            diagnostico.nombre,
            diagnostico.comorb,
            diagnostico.age,
            diagnostico.weight,
            diagnostico.diagnostic,
            diagnostico.observations
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
        string memory _nombre,
        string memory _comorb,
        uint256 _age,
        uint256 _weight,
        string memory _diagnostic,
        string memory _observations,
        string[] memory _estudio
        ) {
        if (isPatient(msg.sender)) {
            require(msg.sender == _account);
        }
        if (isMedic(msg.sender)) {
            require(msg.sender != _account);
        }
        require(_account != address(0));
        require(_date >= 0 && _date <= 2**256 - 1);
        //require(fileToPatientDiagnosis[_account][_date] != false);

        Diagnostico memory diagnostico = patientDiagnosis(_account, _date);

        emit DiagnosticRetrieve(
            _account,
            msg.sender,
            diagnostico.nombre,
            diagnostico.comorb,
            diagnostico.age,
            diagnostico.weight,
            diagnostico.diagnostic,
            diagnostico.observations
        );
        _nombre = diagnostico.nombre;
        _comorb = diagnostico.comorb;
        _age = diagnostico.age;
        _weight = diagnostico.weight;
        _diagnostic = diagnostico.diagnostic;
        _observations = diagnostico.observations;
        _estudio = diagnostico.estudio;
    }

    /**
    * @notice Returns el Diagnóstico en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account The owner address
    * @return _date The uploaded timestamp
    */
    function extendedViewDiagnostic(address _account) public nonlyStopped onlyPatient view returns (uint256[] _dates) {
        require(_account != address(0));
        require(_date >= 0 && _date <= 2**256 - 1);
        if (isMedic(msg.sender) || isPatient(msg.sender)) {
            _dates = extendedFileToPatientDiagnosis[_account];
        } else if (isPatient(msg.sender)) {
            require(msg.sender == _account);
            _dates = extendedFileToPatientDiagnosis[_account];
        } else if (isMedic(msg.sender)) {
            require(msg.sender != _account);
            _dates = extendedFileToPatientDiagnosis[_account];
        }

        emit FullDiagnosticRetrieve(
            _account,
            msg.sender,
            _dates
        );
    }

    /**
    * @notice Returns el estudio en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account The owner address
    * @return _uploadDate The uploaded timestamp
    */
    function deleteDiagnostic(address _account, uint256 _date) public nonlyStopped onlyMedic returns (bool _success) {
        require(_account != address(0));
        require(_date >= 0 && _date <= 2**256 - 1);
        //require(fileToPatientDiagnosis[_account][_date] != false);

        delete fileToPatientDiagnosis[_account][_date];
        extendedFileToPatientDiagnosis[_account] = 0;
        
        emit DiagnosticDelete(
            _account,
            msg.sender,
            _date
        );
        _success = true;
    }

}
