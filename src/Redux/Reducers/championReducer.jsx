export default (state = {}, { type, payload }) => {

    switch (type) {
        case 'SET_CHAMPIONS':
            return payload;
        case 'ADD_CHAMPION_TO_USER':
            return console.log("this works");
        default:
            return state;
    }


};