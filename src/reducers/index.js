// Reducers
import { combineReducers } from 'redux';

// static list of songs reducer
// no arguments required because it is a static list
const songsReducer = ()=> {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title : 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want It That Way', duration: '2:20' }
    ];
};

// select song

const selectedSongReducer = (selectedSong=null, action)=> {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});