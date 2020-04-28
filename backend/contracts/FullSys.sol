pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

import "./PatientDiagnosis.sol";

/**
 * @title Smart Contract de Diagnóstico de pacientes - Control de Diagnóstico realizado por el médico.
 * @author Francisco Alemán
 * @notice Este contrato representa el registro de un Diagnóstico asociado a una persona.
 * @dev El contrato hereda las funciones del contrato de roles
 */

contract FullSys is PatientDiagnosis {
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
        uint256 _dates
    );
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
        require(bytes(_comorb).length < 50);
        require(_age < 120);
        require(_weight < 700);
        require(bytes(_diagnostic).length < 256);
        require(bytes(_observations).length < 512);

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
        require(bytes(_comorb).length < 256);
        require(_age < 120);
        require(_weight < 700);
        require(bytes(_diagnostic).length < 50);
        require(bytes(_observations).length < 512);
        require(_date >= 0 && _date <= 2**256 - 1);
        require(_estudio.length > 0);

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
    * @notice Returns el Diagnóstico en el índice del propietario de la dirección.
    * @dev Controlado por el switch
    * @param _account The owner address
    * @return _date The uploaded timestamp
    */
    function viewDiagnostic(address _account, uint256 _date) public nonlyStopped onlyPatient returns (
        string[] memory _estudio
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
            diagnostico.observations
        );
        _estudio = diagnostico.estudio;
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
    public nonlyStopped onlyPatient returns (uint256[] memory _dates) {
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
    function deleteDiagnostic(address _account, uint256 _date) public nonlyStopped onlyMedic returns (bool _success) {
        require(_account != address(0));
        require(isDiag(_account, _date));
        require(_date >= 0 && _date <= 2**256 - 1);

        fileToPatientDiagnosis[_account][_date].isDiag = false;

        emit DiagnosticDelete(
            _account,
            msg.sender,
            _date
        );
        _success = true;
    }
}
