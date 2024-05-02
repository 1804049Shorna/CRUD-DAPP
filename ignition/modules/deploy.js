const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("chaiModule", (m) => {
 
  const chai = m.contract("chai");

  return { chai};
});

