pragma solidity 0.5.16;

import "@openzeppelin/contracts/access/Roles.sol";

/**
 * @title Smart Contract de roles - Control de Permisos/Acceso basado en rol.
 * @author Adrián Constante
 */

contract UserRoles {
    /**
     * @dev Contrato que define los roles en el sistema hospitalario.
     */
    using Roles for Roles.Role;

    /**
     * @dev Eventos que serán registrados en la blockchain con finalidad de auditoria.
     */
    event AdminAdded(
        address indexed newAdm,
        address indexed whoAddedAdm);

    event AdminRenounce(address indexed accountRen);

    event MedicAdded(
        address indexed newMed,
        address indexed whoAddedMed);

    event MedicRemoved(
        address indexed oldMed,
        address indexed whoRemovedMed);

    event MedicRenounce(address indexed medRen);

    event PatientAdded(
        address indexed newPat,
        address indexed whoAddedPat);

    event PatientRemoved(
        address indexed oldPat,
        address indexed whoRemovedPat);

    //Para los asistentes
    event AssistantAdded(
        address indexed newAssistant,
        address indexed whoAddedAssistant
    );

    event AssistantRemoved(
        address indexed oldAssistant,
        address indexed whoRemovedAssistant);

    /**
     * @dev Usamos nuestra libería de OpenZeppelin para facilitar la funciones básicas de los roles.
     */
    Roles.Role private _admins;
    Roles.Role private _medic;
    Roles.Role private _patient;
    Roles.Role private _assistant;

    /**
     * @dev Rol con mayores prvilegios(Admin). Se construye un admin al desplegar por primera vez el contrato.
     */
    constructor () internal {
        _addAdmin(msg.sender);
    }

   /**
    * @dev Modificador para solo permitir que sea llamada por admins. Modifica comportamiento de funciones.
    */
    modifier onlyAdmin() {
        require(isAdmin(msg.sender), "No se cuenta con el rol especificado(Admin)");
        _;
    }

    modifier onlyMedic() {
        require(isMedic(msg.sender), "No se cuenta con el rol especificado(Médico)");
        _;
    }

    modifier onlyPatient() {
        require(isPatient(msg.sender) || isMedic(msg.sender),
        "No se cuenta con el rol especificado(Paciente o médico)");
        _;
    }

    modifier onlyAssistant() {
        require(isAssistant(msg.sender) || isMedic(msg.sender),
        "No se cuenta con el rol especificado(Asistente o médico)");
        _;
    }

    /**
    * @param account Cuenta donde se validará el rol.
    * @return true si la cuenta tiene rol de admin
    */
    function isAdmin(address account) public view returns (bool) {
        return _admins.has(account);
    }

    /**
     * @dev Función pública para asignar admin
     * @param account Cuenta que será asignada como admin
     */
    function addAdmin(address account) public onlyAdmin {
        _addAdmin(account);
    }

    /**
    * @dev Renunciar a rol de administrador. Quien inque al contrato no volverá a ser admin.
    */
    function renounceAdmin() public {
        _renounceAdmin(msg.sender);
    }

    /**
    * @param account Cuenta donde se validará el rol.
    * @return true si la cuenta tiene rol de médico
    */
    function isMedic(address account) public view returns (bool) {
        return _medic.has(account);
    }

    /**
     * @dev Función pública para asignar médico
     * @param account Cuenta que será asignada como médico
     */
    function addMedic(address account) public onlyAdmin {
        _addMedic(account);
    }

    /**
     * @dev Función pública para remover médico
     * @param account Cuenta que será removida de médico
     */
    function removeMedic(address account) public onlyAdmin {
        _removeMedic(account);
    }

    /**
    * @dev Renunciar a rol de personal médico. Quien invoque al contrato no volverá a ser médico.
    */
    function renounceMedic() public onlyMedic {
        _removeMedic(msg.sender);
    }

    /**
    * @param account Cuenta donde se validará el rol.
    * @return true si la cuenta tiene rol de asistente
    */
    function isAssistant(address account) public view returns (bool) {
        return _assistant.has(account);
    }

    /**
     * @dev Función pública para asignar asistente
     * @param account Cuenta que será asignada como asistente
     */
    function addAssistant(address account) public onlyAdmin {
        _addAssistant(account);
    }

    /**
    * @param account Cuenta donde se validará el rol.
    * @return true si la cuenta tiene rol de paciente
    */
    function isPatient(address account) public view returns (bool) {
        return _patient.has(account);
    }

    /**
     * @dev Función pública para asignar paciente
     * @param account Cuenta que será asignada como paciente
     */
    function addPatient(address account) public onlyAssistant {
        _addPatient(account);
    }

    /**
    * @dev Remover a rol de paciente. Quien invoque al contrato no volverá a ser paciente.
    */
    function removePatient(address account) public onlyMedic {
        _removePatient(account);
    }

    /**
    * @dev Remover a rol de asistente. Quien invoque al contrato no volverá a ser asistente.
    */
    function removeAssistant(address account) public onlyAdmin {
        _removeAssistant(account);
    }

    /**
    * @dev Función interna para implementar la asignación de asistente
    * @param account La cuenta que será asignada como asistente.
    */
    function _addAssistant(address account) internal {
        _assistant.add(account);
        emit AssistantAdded(account, msg.sender);
    }

     /**
     * @dev Función interna para implementar la renuncia/revocación de asistentes
     * @param account La cuenta que será revocada de asistentes.
    */
    function _removeAssistant(address account) internal {
        _assistant.remove(account);
        emit AssistantRemoved(account, msg.sender);
    }

    /**
    * @dev Función interna para implementar la asignación de pacientes
    * @param account La cuenta que será asignada como paciente.
    */
    function _addPatient(address account) internal {
        _patient.add(account);
        emit PatientAdded(account, msg.sender);
    }

    /**
     * @dev Función interna para implementar la renuncia/revocación de pacientes
     * @param account La cuenta que será revocada de pacientes.
    */
    function _removePatient(address account) internal {
        _patient.remove(account);
        emit PatientRemoved(account, msg.sender);
    }

    /**
    * @dev Función interna para implementar la asignación de admins
    * @param account La cuenta que será asignada como admin.
    */
    function _addAdmin(address account) internal {
        _admins.add(account);
        emit AdminAdded(account, msg.sender);
    }

    /**
     * @dev Función interna para implementar la renuncia/revocación de admins
     * @param account La cuenta que será revocada de admin.
    */
    function _renounceAdmin(address account) internal {
        _admins.remove(account);
        emit AdminRenounce(account);
    }

    /**
    * @dev Función interna para implementar la asignación de médicos
    * @param account La cuenta que será asignada como médico.
    */
    function _addMedic(address account) internal {
        _medic.add(account);
        emit MedicAdded(account, msg.sender);
    }

    /**
     * @dev Función interna para implementar la revocación de amédico
     * @param account La cuenta que será revocada de médico.
    */
    function _removeMedic(address account) internal {
        _medic.remove(account);
        emit MedicRemoved(account, msg.sender);
    }

    /**
     * @dev Función interna para implementar la renuncia de un medico
     * @param account La cuenta que será revocada de médico.
    */
    function _renounceMedic(address account) internal {
        _medic.remove(account);
        emit MedicRenounce(account);
    }
}
