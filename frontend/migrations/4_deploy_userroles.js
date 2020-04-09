const UserRoles = artifacts.require("UserRoles");

module.exports = function(deployer) {
    deployer.deploy(UserRoles, "Roles por usuarios");
}