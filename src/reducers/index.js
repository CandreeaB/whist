let playersObj = localStorage.getItem('playersName');
playersObj = JSON.parse(playersObj);

let offerObj = localStorage.getItem('offer');
offerObj = JSON.parse(offerObj);

let scoreObj = localStorage.getItem('score');
scoreObj = JSON.parse(scoreObj);

let initialState = {
    players: 0,
    playersName: playersObj || {Player1:'', Player2:'',Player3:'', Player4:'', Player5:'', Player6:''},
    offer: offerObj || {Player1: 0, Player2: 0,Player3: 0, Player4: 0, Player5: 0, Player6: 0 },
    score: scoreObj || {Player1: 0, Player2: 0,Player3: 0, Player4: 0, Player5: 0, Player6: 0 },
};

const mainReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_PLAYERS': {
            return {
                ...state,
              players: [action.value]
            }
        }
        case 'PLAYERS_NAME': {
            let previousPlayers = JSON.parse(localStorage.getItem('playersName')) || {Player1:'', Player2:'',Player3:'', Player4:'', Player5:'', Player6:''};
            let newPlayer = {
                ...previousPlayers,
                [action.key]: action.value
            };
            localStorage.setItem('playersName', JSON.stringify(newPlayer));
            return {
                ...state,
                ...{playersName: newPlayer}
            }
        }
        case 'SCORE_PREDICTION': {
            let previousOffer = JSON.parse(localStorage.getItem('offer')) || {Player1: 0, Player2: 0,Player3: 0, Player4: 0, Player5: 0, Player6: 0 };
            let newOffer = {
                ...previousOffer,
                [action.key]: action.value
            };
            localStorage.setItem('offer', JSON.stringify(newOffer));
            return {
                ...state,
                ...{offer: newOffer}
            }
        }
      //
      // case 'ADD_SCORE': {
      //   let previousScore = JSON.parse(localStorage.getItem('score')) || {Player1: 0, Player2: 0,Player3: 0, Player4: 0, Player5: 0, Player6: 0 };
      //   let newScore = {
      //     ...previousScore,
      //     [action.key]: action.value
      //   };
      //   localStorage.setItem('score', JSON.stringify(newScore));
      //   return {
      //     ...state,
      //     ...{score: newScore}
      //
      //   }
      // }
        default:
            return state
    }
};

export default mainReducer;
