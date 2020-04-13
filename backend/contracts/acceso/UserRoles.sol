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

    /**
     * @dev Usamos nuestra libería de OpenZeppelin para facilitar la funciones básicas de los roles.
     */
    Roles.Role private _admins;
    Roles.Role private _medic;
    Roles.Role private _patient;

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

    /**
    * @dev Está función será llamada para todos los mensajes que sean enviados a este contrado.
    * Enviar Ether a este contrato ocasionará una excepción, dado que las funciones no tienen un modificador de pago.
    */
    function() external {}

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
    * @return true si la cuenta tiene rol de paciente
    */
    function isPatient(address account) public view returns (bool) {
        return _patient.has(account);
    }

    /**
     * @dev Función pública para asignar paciente
     * @param account Cuenta que será asignada como paciente
     */
    function addPatient(address account) public onlyMedic {
        _addPatient(account);
    }

    /**
    * @dev Remover a rol de paciente. Quien invoque al contrato no volverá a ser paciente.
    */
    function removePatient(address account) public onlyMedic {
        _removePatient(account);
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
