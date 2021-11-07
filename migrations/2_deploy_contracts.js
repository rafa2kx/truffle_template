const TutorialContract = artifacts.require("TutorialContract");

module.exports = function (deployer) {
  deployer.deploy(TutorialContract);
};