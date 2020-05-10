const PatientDiagnosis = artifacts.require("PatientDiagnosis");
const PendingRecords = artifacts.require("PendingRecords");
const Validator = artifacts.require("Validator");


module.exports = function(deployer) {
    deployer.deploy(PatientDiagnosis, "Historial Clínico Electrónico");
    deployer.deploy(PendingRecords, "Historial Clínico Electrónico");
    deployer.deploy(Validator, "Historial Clínico Electrónico");
}




