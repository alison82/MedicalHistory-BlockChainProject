const PatientDiagnosis = artifacts.require("PatientDiagnosis");
<<<<<<< HEAD

module.exports = function(deployer) {
    deployer.deploy(PatientDiagnosis, "Historial Clínico Electrónico");
=======
const MedicsRegister = artifacts.require("MedicsRegister");
const AssistantRegister = artifacts.require("AssistantRegister");
const PendingRecords = artifacts.require("PendingRecords");

module.exports = function(deployer) {
    deployer.deploy(PatientDiagnosis, "Historial Clínico Electrónico");
    deployer.deploy(MedicsRegister, "Historial Clínico Electrónico");
    deployer.deploy(AssistantRegister, "Historial Clínico Electrónico");
    deployer.deploy(PendingRecords, "Historial Clínico Electrónico");
>>>>>>> dbb4894bb395413df9972d12775c55153e72b9e9
}
