
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Betting {
    address public owner;
    uint256 public minimumBet;
    uint256 public totalBets;
    uint256 public numberOfBets;
    uint256 public eventId;

    struct Bet {
        address userId;
        uint256 eventId;
        uint256 amountBet;
        uint256 optionSelected;
    }

    struct Event {
        string name;
        string title;
        uint256 odds;
    }

    mapping(address => Bet[]) public userBets;
    address[] public players;
    mapping(uint256 => Event) public events;

    constructor(uint256 _minimumBet) {
        owner = msg.sender;
        minimumBet = _minimumBet;
    }

    function placeBet(uint256 _eventId, uint256 _optionSelected) public payable {
        require(msg.value >= minimumBet, "Insufficient bet amount");
        require(_optionSelected >= 1 && _optionSelected <= 10, "Invalid option selected");

        Bet memory newBet = Bet({
            userId: msg.sender,
            eventId: _eventId,
            amountBet: msg.value,
            optionSelected: _optionSelected
        });

        userBets[msg.sender].push(newBet);
        players.push(msg.sender);
        totalBets += msg.value;
        numberOfBets++;

    }

    function createEvent(uint256 _eventId, string memory _name, string memory _title, uint256 _odds) public {
        require(msg.sender == owner, "Only owner can create events");
        
        events[_eventId] = Event({
            name: _name,
            title: _title,
            odds: _odds
        });
    }

    function getAllPlayers() public view returns (address[] memory) {
        return players;
    }
}
