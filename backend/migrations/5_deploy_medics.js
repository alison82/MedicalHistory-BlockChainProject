const MedicsRegister = artifacts.require("MedicsRegister");

module.exports = function(deployer) {
    deployer.deploy(MedicsRegister, "Historial Clínico Electrónico");
}