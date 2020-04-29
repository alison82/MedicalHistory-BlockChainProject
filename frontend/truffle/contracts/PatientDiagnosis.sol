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
        string comorb;
        uint256 age;
        uint256 weight;
        string diagnostic;
        string observations;
        string[] estudio;
        bool isDiag;
    }

    /**
     * @title Representa un Estudio el cual le pertenece a un paciente.
     */
    struct Paciente {
        string nombre;
        string curp;
        string tipoSangre;
        string sexo;
        string hashCredencial;
        string hashFoto;
        bool isPatient;
    }

    /**
     * @notice Mapea el paciente a su diagnóstico..
     */
    mapping (address => mapping (uint256 => Diagnostico)) public fileToPatientDiagnosis;
    mapping (address => uint256[]) public extendedFileToPatientDiagnosis;
    mapping (address => Paciente) public fileToPatient;
    /**
     * @notice Patrón de switch para encender/apagar
     */
    bool private stopped = false;

    /**
     * @dev Eventos que serán registrados en la blockchain.
     */
    event DiagnosticAdded(
        address indexed _patient,
        address indexed _medic,
        uint256 _date
        );

    event DiagnosisUpdate(
        address indexed _patient,
        address indexed _medic,
        uint256 _date
        );

    event DiagnosticRetrieve(
        address indexed _patient,
        address indexed _medic,
        string _comorb,
        uint256 _age,
        uint256 _weight,
        string _diagnostic,
        string  _observations,
        string[] _estudio
        );

    event FullDiagnosticRetrieve(
        address indexed _patient,
        address indexed _medic,
        uint256[] _dates
    );

//    event DiagnosticDelete(
//        address indexed _patient,
//        address indexed _medic,
//        uint256 _date
//        );
    event PatientAdded(
        address indexed _patient,
        uint256 whenWas
        );

    event PatientUpdate(
        address indexed _patient,
        address indexed _medic,
        uint256 whenWas
        );

    event PatientRetrieve(
        address indexed _patient,
        address indexed _medic,
        string _nombre,
        string _curp,
        string _tipoSangre,
        string _sexo,
        string _hashCredencial,
        string _hashFoto,
        uint256 whenWas
        );

//    event PatientDelete(
//        address indexed _patient,
//        address indexed _medic,
//        uint256 _date
//        );
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

    function patientDiagnosis(address _account, uint256 _timeStamp) public view returns (Diagnostico memory diag) {
        return fileToPatientDiagnosis[_account][_timeStamp];
    }

    function extendedIsDiag(address _account) public view returns (bool isIndeed) {
        return extendedFileToPatientDiagnosis[_account].length >= 0;
    }

    function isDiag(address entityAddress, uint256 date) public view returns(bool isIndeed) {
        return fileToPatientDiagnosis[entityAddress][date].isDiag;
    }

    function isPaciente(address entityAddress) public view returns(bool isIndeed) {
        return fileToPatient[entityAddress].isPatient;
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
        string memory _comorb,
        uint16 _age,
        uint16 _weight,
        string memory _diagnostic,
        string memory _observations,
        string[] memory _estudio
        )
    public nonlyStopped onlyMedic returns (bool _success) {
        require(_account != address(0));
        require(extendedIsDiag(_account));
        require(isPatient(_account) && isMedic(msg.sender));
        // require(bytes(_comorb).length < 50);
        // require(_age < 120);
        // require(_weight < 700);
        // require(bytes(_diagnostic).length < 256);
        // require(bytes(_observations).length < 512);

        uint256 _date = now;
        Diagnostico memory diagnostico = Diagnostico(
            _comorb,
            _age,
            _weight,
            _diagnostic,
            _observations,
            _estudio,
            true
        );

        fileToPatientDiagnosis[_account][_date] = diagnostico;
        extendedFileToPatientDiagnosis[_account].push(_date);

        emit DiagnosticAdded(
            _account,
            msg.sender,
            _date
        );
        _success = true;
    }

    /**
   * @dev Función de creación de Diagnóstico. Esta función es realizada por un doctor.
   * @return _success a
   */
    function patientSelfReg(
        string memory _nombre,
        string memory _curp,
        string memory _tipoSangre,
        string memory _sexo,
        string memory _hashCredencial,
        string memory _hashFoto
        )
    public payable nonlyStopped returns (bool _success) {
        require(msg.value == 0.05 ether, "Pagale mijo");

        // require(bytes(_nombre).length < 50);
        // require(bytes(_curp).length == 18);
        // require(bytes(_tipoSangre).length < 8);
        // require(bytes(_sexo).length < 10);
        // require(bytes(_hashCredencial).length == 46);
        // require(bytes(_hashFoto).length == 46);


        Paciente memory paciente = Paciente(
            _nombre,
            _curp,
            _tipoSangre,
            _sexo,
            _hashCredencial,
            _hashFoto,
            true
        );

        fileToPatient[msg.sender] = paciente;
        addPatient(msg.sender);

        emit PatientAdded(
            msg.sender,
            now
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
        require(isDiag(_account, _date));
        // require(bytes(_comorb).length < 256);
        // require(_age < 120);
        // require(_weight < 700);
        // require(bytes(_diagnostic).length < 50);
        // require(bytes(_observations).length < 512);
        // require(_date >= 0 && _date <= 2**256 - 1);
        // require(_estudio.length > 0);

        Diagnostico memory diagnostico = Diagnostico(
            _comorb,
            _age,
            _weight,
            _diagnostic,
            _observations,
            _estudio,
            true
        );

        fileToPatientDiagnosis[_account][_date] = diagnostico;

        emit DiagnosisUpdate(
            _account,
            msg.sender,
            now
        );
        _success = true;
    }

    /**
   * @dev Función de creación de Diagnóstico. Esta función es realizada por un doctor.
   * @param _account a
   * @return _success a
   */
    function selfUpdatePatient(
        address _account,
        string memory _nombre,
        string memory _curp,
        string memory _tipoSangre,
        string memory _sexo,
        string memory _hashCredencial,
        string memory _hashFoto
        )
    public payable nonlyStopped onlyPatient returns (bool _success) {
        require(_account != address(0));
        require(msg.value == 0.03 ether);

        // require(bytes(_nombre).length < 50);
        // require(bytes(_curp).length == 18);
        // require(bytes(_tipoSangre).length < 8);
        // require(bytes(_sexo).length < 10);
        // require(bytes(_hashCredencial).length == 46);
        // require(bytes(_hashFoto).length == 46);


        Paciente memory paciente = Paciente(
            _nombre,
            _curp,
            _tipoSangre,
            _sexo,
            _hashCredencial,
            _hashFoto,
            true
        );

        fileToPatient[_account] = paciente;

        emit PatientUpdate(
            _account,
            msg.sender,
            now
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
        bool _success
        ) {
        require(_account != address(0));
        require(_date >= 0 && _date <= 2**256 - 1);
        require(isDiag(_account, _date));
        Diagnostico memory diagnostico = patientDiagnosis(_account, _date);
        if (isMedic(msg.sender) && isPatient(msg.sender)) {
            require(msg.sender != _account || msg.sender == _account);
        } else if (isMedic(msg.sender)) {
            require(msg.sender != _account);
        } else if (isPatient(msg.sender)) {
            require(msg.sender == _account);
        }
        emit DiagnosticRetrieve(
            _account,
            msg.sender,
            diagnostico.comorb,
            diagnostico.age,
            diagnostico.weight,
            diagnostico.diagnostic,
            diagnostico.observations,
            diagnostico.estudio
        );
        _success = true;
    }

    /**
   * @dev Función de creación de Diagnóstico. Esta función es realizada por un doctor.
   * @param _account a
   */
    function retrievePatient(
        address _account
        )
    public payable nonlyStopped  returns (
            string memory _hashCredencial,
            string memory _hashFoto
        ) {
        require(_account != address(0));
        require(msg.value == 0.001 ether);

        Paciente memory paciente = fileToPatient[_account];

        emit PatientRetrieve(
            _account,
            msg.sender,
            paciente.nombre,
            paciente.curp,
            paciente.tipoSangre,
            paciente.sexo,
            paciente.hashCredencial,
            paciente.hashFoto,
            now
        );

        _hashCredencial = paciente.hashCredencial;
        _hashFoto = paciente.hashFoto;
    }


    function getExtendedViewDiagnosticSize(address _account) public nonlyStopped returns(uint count){
        count=extendedFileToPatientDiagnosis[_account].length();
    }


    /**
    * @notice Returns el Diagnóstico en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account The owner address
    * @return _date The uploaded timestamp
    */
    function extendedViewDiagnostic(
        address _account
        )
    public nonlyStopped returns (uint256[] memory _dates) {
        require(_account != address(0));
        require(extendedIsDiag(_account));
        if (isMedic(msg.sender) && isPatient(msg.sender)) {
            require(msg.sender != _account || msg.sender == _account);
        } else if (isMedic(msg.sender)) {
            require(msg.sender != _account);
        } else if (isPatient(msg.sender)) {
            require(msg.sender == _account);
        }
        emit FullDiagnosticRetrieve(
            _account,
            msg.sender,
            extendedFileToPatientDiagnosis[_account]
        );
        _dates = extendedFileToPatientDiagnosis[_account];
    }

    /**
    * @notice Returns el estudio en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account The owner address
    * @return _uploadDate The uploaded timestamp
    */
//    function deleteDiagnostic(address _account, uint256 _date) public nonlyStopped onlyMedic returns (bool _success) {
//        require(_account != address(0));
//        require(isDiag(_account, _date));
//        require(_date >= 0 && _date <= 2**256 - 1);
//
//        fileToPatientDiagnosis[_account][_date].isDiag = false;
//
//        emit DiagnosticDelete(
//            _account,
//            msg.sender,
//            _date
//        );
//        _success = true;
//    }

}
