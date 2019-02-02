pragma solidity ^0.4.22;
//pragma solidity ^0.5.0;

contract Thankyou {
  address owner; 

  struct Thank{
    address toAddress;
    string name;
    uint amount; //Considering for Phase-II.
  }

  mapping (address=> Thank[]) public myThankYouList;
  mapping (address=> uint) public myThankYouListCount;
  mapping(address => uint) public ThankYouList;
  uint public ThankYouListCount;

  constructor() public {
    owner = msg.sender;
    ThankYouListCount = 0;
  }

  function sayThanks(address fromAddress, address toAddress, string memory name, uint amount) public {    
    //Validation-1 (to & from address should not be same)
    //Validation-2 (amount should not be zero)
    //Validation-3 (from account should have a fair amount to transfer)      
    Thank memory newThanks = Thank(toAddress, name, amount);
      
    //Maintain the count for a person's thank giving. 
    if(myThankYouList[fromAddress].length != 0){
      myThankYouListCount[fromAddress] = myThankYouListCount[fromAddress] + 1;
    }else {
      myThankYouListCount[fromAddress] = 1;
    }
      
    //Push element into the sequence. 
    myThankYouList[fromAddress].push(newThanks);  
      
    //Add a count in the Thanks you list. 
    if(ThankYouList[toAddress] != 0)
    {
      uint count = ThankYouList[toAddress];
      ThankYouList[toAddress] = count + 1;
    }
    else {
      ThankYouList[toAddress] = 1;
    }
    
    ThankYouListCount++;
  }
  
   
}
