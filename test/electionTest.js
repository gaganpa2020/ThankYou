var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {

    var electionInstance;

    it("initializes with two candidates", function() {
        return Election.deployed().then(function(instance) {
          return instance.CandidateCount();
        }).then(function(count) {
          assert.equal(count, 3);
        });
      });


     it("Check default candidate", function(){
        return Election.deployed().then(function(instance){ 
            instance.candidates(1).then(function(candidate){
                console.log(candidate[0]);
                console.log(candidate[1]);
                assert.equal(candidate[1], "Candidate automated 1");
            });
        });
     }); 

     it("Check if use can cast his vote", function(){
        return Election.deployed().then(function(instance){
            electionInstance = instance;
            candidateId = 1;
            return electionInstance.vote(candidateId, {from: accounts[0]});
        }).then(function(recipt){
            return electionInstance.voters(accounts[0]);
        }).then(function(voted){
            assert(voted, "Voter has casted his vote.");
            return electionInstance.candidates(candidateId);
        }).then(function(candidate){
            var voteCount = candidate[2];
            assert.equal(voteCount, 1, "Increments the voters vote");
        });
     });

});