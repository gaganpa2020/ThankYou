var Thankyou = artifacts.require("./Thankyou.sol");

contract("Thankyou", function(accounts) {

    var thankyouInstance;

    it("deploy the thank you instance", function(){
        return Thankyou.deployed().then(function(instance){
            thankyouInstance = instance;
            assert(thankyouInstance != null, "instance is not deployed for Thank you contract.");
        });
    });


    it("Check say thanks", function(){
        return Thankyou.deployed().then(function(instance){
            thankyouInstance = instance;
            return thankyouInstance.sayThanks(accounts[0]);
        }).then(function(recipt){
            return thankyouInstance.personsThanks(accounts[0]);
        }).then(function(thankYouCount){
            assert(thankYouCount != null, "person is null");            
            return thankYouCount;
        }).then(function(thankYouCount){
            assert(thankYouCount == 1, "Thanks count is not as expected.");
        }).then(function(){
            thankyouInstance.sayThanks(accounts[0]);
            return thankyouInstance.personsThanks(accounts[0]);
        }).then(function(thankYouCount){
            assert(thankYouCount == 2, "Thanks count is not as expected.");
        });
    });

});