export const addPlayers = (value) => ({
   type: 'ADD_PLAYERS',
   value
});

export const playersName = (key, value) => ({
    type: 'PLAYERS_NAME',
    key,
    value
});

export const scorePrediction = (key, value) => ({
    type: 'SCORE_PREDICTION',
    key,
    value
});

export const addScore = (key, value) => ({
    type: 'ADD_SCORE',
    key,
    value
});

