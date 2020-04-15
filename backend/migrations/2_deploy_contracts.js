const PatientRecords = artifacts.require("PatientRecords");
const PatientDiagnosis = artifacts.require("PatientDiagnosis");

module.exports = function(deployer) {
    deployer.deploy(PatientRecords, "Historial Clínico Electrónico");
    deployer.deploy(PatientDiagnosis, "Historial Clínico Electrónico");
}
