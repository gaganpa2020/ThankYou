var ThankYou = artifacts.require("./Thankyou.sol");

module.exports = function(deployer){
    deployer.deploy(ThankYou);
}