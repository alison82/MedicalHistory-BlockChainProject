const PatientDiagnosis = artifacts.require("PatientDiagnosis");
const Validator = artifacts.require("Validator");

module.exports = function(deployer) {
    deployer.deploy(PatientDiagnosis, "Historial Clínico Electrónico");
    deployer.deploy(Validator, "Validador para loguearse");

    const MedicsRegister = artifacts.require("MedicsRegister");
    const AssistantRegister = artifacts.require("AssistantRegister");
    const PendingRecords = artifacts.require("PendingRecords");

}
