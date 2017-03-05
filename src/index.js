import {createStore} from "redux";


function playList(state = [], action) {
    if (action.type == "ADD_TRACK") {
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}


const store = createStore(playList);


store.dispatch({type: 'ADD_TRACK', payload: 'How get away the murder'});

const addTrackButton = document.querySelectorAll(".addTrack")[0];
const inputTrack = document.querySelectorAll(".trackInput")[0];

addTrackButton.addEventListener('click', () => {
    const newTrack = inputTrack.value;
    store.dispatch({type: 'ADD_TRACK', payload: newTrack});
});

const ulPlayList = document.querySelectorAll(".playList")[0];


store.subscribe(() => {
    displayPlayList(store.getState(), ulPlayList);
})

function displayPlayList(playList, ulPlayList) {
    ulPlayList.innerHTML = "";
    playList.forEach(track => {
        let li = document.createElement("li");
        li.textContent = track;
        ulPlayList.appendChild(li);
    });
    inputTrack.value = "";
}