const Blockledge = artifacts.require("Blockledge");

module.exports = function(_deployer) {
  _deployer.deploy(Blockledge); 
};
