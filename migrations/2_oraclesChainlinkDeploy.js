const oraclesChainlink = artifacts.require("OraclesChainlink");

module.exports = function (deployer) {
  deployer.deploy(oraclesChainlink);
};
