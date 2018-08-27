import times from 'async/times';
import * as cardbaseInstance from "../cardbaseInstance";

export const loadMyGames = () => new Promise((resolve, reject) => {
    let games = [];
    let noOfMyCards = 0;

    cardbaseInstance
    .get()
    .methods
    .countGames()
    .call({
      from: cardbaseInstance.getDefaultAddress()
    })
    .then((res) => {
      const length = Number(res.toString());
      
      times(length, (index, cb) => {
        const promise = cardbaseInstance
            .get()
            .methods
            .games(index)
            .call({
                from: cardbaseInstance.getDefaultAddress()
            });

            promise
            .then(gameDetails => {
                if (
                    cardbaseInstance.getDefaultAddress() !== gameDetails.playerA &&
                    cardbaseInstance.getDefaultAddress() !== gameDetails.playerB) {
                    return cb();
                }
                    gameDetails.gameId = index;
                    
                    games.push(gameDetails);
        
                    cb();
                });
            }, err => {
                return resolve(games);
            });
      });
    });
