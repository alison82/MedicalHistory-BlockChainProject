const PatientDiagnosis = artifacts.require("PatientDiagnosis");

module.exports = function(deployer) {
    deployer.deploy(PatientDiagnosis, "Historial Clínico Electrónico");

    const MedicsRegister = artifacts.require("MedicsRegister");
    const AssistantRegister = artifacts.require("AssistantRegister");
    const PendingRecords = artifacts.require("PendingRecords");

}
