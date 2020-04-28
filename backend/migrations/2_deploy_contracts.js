const PatientDiagnosis = artifacts.require("PatientDiagnosis");

module.exports = function(deployer) {
    deployer.deploy(PatientDiagnosis, "Historial Clínico Electrónico");
}
