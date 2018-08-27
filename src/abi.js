
export default [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "games",
      "outputs": [
        {
          "name": "playerA",
          "type": "address"
        },
        {
          "name": "playerB",
          "type": "address"
        },
        {
          "name": "lastPlayer",
          "type": "address"
        },
        {
          "name": "winner",
          "type": "address"
        },
        {
          "name": "currentRound",
          "type": "uint256"
        },
        {
          "name": "round1PlayerAPoints",
          "type": "uint256"
        },
        {
          "name": "round2PlayerAPoints",
          "type": "uint256"
        },
        {
          "name": "round3PlayerAPoints",
          "type": "uint256"
        },
        {
          "name": "round1PlayerBPoints",
          "type": "uint256"
        },
        {
          "name": "round2PlayerBPoints",
          "type": "uint256"
        },
        {
          "name": "round3PlayerBPoints",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "gameIdToGame",
      "outputs": [
        {
          "name": "playerA",
          "type": "address"
        },
        {
          "name": "playerB",
          "type": "address"
        },
        {
          "name": "lastPlayer",
          "type": "address"
        },
        {
          "name": "winner",
          "type": "address"
        },
        {
          "name": "currentRound",
          "type": "uint256"
        },
        {
          "name": "round1PlayerAPoints",
          "type": "uint256"
        },
        {
          "name": "round2PlayerAPoints",
          "type": "uint256"
        },
        {
          "name": "round3PlayerAPoints",
          "type": "uint256"
        },
        {
          "name": "round1PlayerBPoints",
          "type": "uint256"
        },
        {
          "name": "round2PlayerBPoints",
          "type": "uint256"
        },
        {
          "name": "round3PlayerBPoints",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "cardIndexToOwner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "cards",
      "outputs": [
        {
          "name": "power",
          "type": "uint32"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "dna",
          "type": "uint256"
        },
        {
          "name": "generation",
          "type": "uint8"
        },
        {
          "name": "winCount",
          "type": "uint16"
        },
        {
          "name": "lossCount",
          "type": "uint16"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_gameId",
          "type": "uint256"
        },
        {
          "components": [
            {
              "name": "playerA",
              "type": "address"
            },
            {
              "name": "playerB",
              "type": "address"
            },
            {
              "name": "lastPlayer",
              "type": "address"
            },
            {
              "name": "winner",
              "type": "address"
            },
            {
              "name": "currentRound",
              "type": "uint256"
            },
            {
              "name": "round1PlayerAPoints",
              "type": "uint256"
            },
            {
              "name": "round2PlayerAPoints",
              "type": "uint256"
            },
            {
              "name": "round3PlayerAPoints",
              "type": "uint256"
            },
            {
              "name": "round1PlayerBPoints",
              "type": "uint256"
            },
            {
              "name": "round2PlayerBPoints",
              "type": "uint256"
            },
            {
              "name": "round3PlayerBPoints",
              "type": "uint256"
            }
          ],
          "indexed": false,
          "name": "_game",
          "type": "tuple"
        }
      ],
      "name": "GameCreated",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "countCards",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "startGame",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "getCardsByOwner",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "gameId",
          "type": "uint256"
        }
      ],
      "name": "nextRound",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "gameId",
          "type": "uint256"
        },
        {
          "name": "cardId",
          "type": "uint256"
        }
      ],
      "name": "useCardInGameOrJoinGame",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "cardId",
          "type": "uint256"
        },
        {
          "name": "name",
          "type": "string"
        }
      ],
      "name": "changeCardName",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "createNewCard",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "getSomeRandomDna",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getLastCard",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];