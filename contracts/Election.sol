pragma solidity ^0.4.22;
contract Election {

    struct Candidate
    {
      uint CandidateId;
      string Name;
      uint VoteCount;
    }

    // Read/write candidate
    string public candidate;

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public voters;

    uint public CandidateCount;

    // Constructor
    constructor () public {
        CandidateCount = 0;
        addCandidate("Candidate automated 1");
        addCandidate("Candidate automated 2");
        addCandidate("Candidate automated 3");
    }

  function addCandidate(string _name) private{
    CandidateCount++;
    candidates[CandidateCount] = Candidate(CandidateCount, _name, 0);
  }

  function vote(uint _CandidateId){
    require(!voters[msg.sender]);

    require(_CandidateId > 0 && _CandidateId <= CandidateCount);

    voters[msg.sender] = true;

    candidates[_CandidateId].VoteCount++;
  }

}