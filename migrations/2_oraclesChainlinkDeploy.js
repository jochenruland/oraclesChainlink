const oraclesChainlink = artifacts.require("oraclesChainlink");

module.exports = function (deployer) {
  deployer.deploy(oraclesChainlink);
};
