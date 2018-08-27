import times from 'async/times';
import * as cardbaseInstance from "../cardbaseInstance";

export const loadMyCards = () => new Promise((resolve, reject) => {
    let cards = [];
    let noOfMyCards = 0;

    cardbaseInstance
    .get()
    .methods
    .countCards()
    .call({
      from: cardbaseInstance.getDefaultAddress()
    })
    .then((res) => {
      const length = Number(res.toString());
      
      times(length, (index, cb) => {
        const promise = cardbaseInstance
            .get()
            .methods
            .cardIndexToOwner(index)
            .call({
                from: cardbaseInstance.getDefaultAddress()
            });

            promise.then((ethAddress) => {
                if (cardbaseInstance.getDefaultAddress() !== ethAddress) {
                    return cb();
                }
                
                noOfMyCards++;

                cardbaseInstance.get()
                .methods
                .cards(index)
                .call({
                    from: cardbaseInstance.getDefaultAddress()
                })
                .then(cardDetails => {
                    cardDetails.cardId = index;
                    
                    cards.push(cardDetails);
        
                    cb();
                });
            }, err => {
            console.error(err);
            return cb(err);
            });
      }, () => {
        return resolve(cards);
      });
    });
});
