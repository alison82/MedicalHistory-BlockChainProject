const PatientDiagnosis = artifacts.require("PatientDiagnosis");
const MedicsRegister = artifacts.require("MedicsRegister");
const AssistantRegister = artifacts.require("AssistantRegister");
const PendingRecords = artifacts.require("PendingRecords");
const Validator = artifacts.require("Validator");

module.exports = function(deployer) {
    deployer.deploy(PatientDiagnosis, "Historial Clínico Electrónico");
    deployer.deploy(MedicsRegister, "Historial Clínico Electrónico");
    deployer.deploy(AssistantRegister, "Historial Clínico Electrónico");
    deployer.deploy(PendingRecords, "Historial Clínico Electrónico");
    deployer.deploy(Validator, "Historial Clínico Electrónico");
}
