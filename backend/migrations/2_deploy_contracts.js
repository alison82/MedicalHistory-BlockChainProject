const PatientDiagnosis = artifacts.require("PatientDiagnosis");
const PendingRecords = artifacts.require("PendingRecords")
module.exports = function(deployer) {
    deployer.deploy(PatientDiagnosis, "Historial Clínico Electrónico");
    deployer.deploy(PendingRecords, "Historial Clínico Electrónico");
}
