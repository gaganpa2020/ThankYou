pragma solidity ^0.4.22;

contract Thankyou {
  address owner; 

  struct Person{
    uint Thankyou;
  }


  mapping(address => Person) public personsThanks;
  
  constructor() public {
    owner = msg.sender;
  }

  function sayThanks(address toAddress) public {

    if(personsThanks[toAddress].Thankyou != 0)
    {
      uint count = personsThanks[toAddress].Thankyou;
      personsThanks[toAddress].Thankyou = count + 1;
    }
    else {
      personsThanks[toAddress] = Person(1);
    }
  }
}
