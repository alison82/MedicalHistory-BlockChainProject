const PatientDiagnosis = artifacts.require("PatientDiagnosis");
const MedicsRegister = artifacts.require("MedicsRegister");
const AssistantRegister = artifacts.require("AssistantRegister");

module.exports = function(deployer) {
    deployer.deploy(PatientDiagnosis, "Historial Clínico Electrónico");
    deployer.deploy(MedicsRegister, "Historial Clínico Electrónico");
    deployer.deploy(AssistantRegister, "Historial Clínico Electrónico");
}
