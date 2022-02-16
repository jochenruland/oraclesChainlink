const test_oraclesChainlink = artifacts.require("test_oraclesChainlink");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("test_oraclesChainlink", function (/* accounts */) {
  it("should assert true", async function () {
    await test_oraclesChainlink.deployed();
    return assert.isTrue(true);
  });
});
