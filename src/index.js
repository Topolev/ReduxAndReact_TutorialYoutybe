import {createStore} from "redux";


function playList(state = [], action){
    if (action.type == "ADD_TRACK"){
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}


const store = createStore(playList);


store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({type: 'ADD_TRACK', payload: 'Switched at birth'});
store.dispatch({type: 'ADD_TRACK', payload: 'How get away the murder'});