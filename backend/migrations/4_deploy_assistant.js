const AssistantRegister = artifacts.require("AssistantRegister");

module.exports = function(deployer) {
    deployer.deploy(AssistantRegister, "Historial Clínico Electrónico");
}