import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicList from './MusicList';

function SearchBody() {
    const [songsList, setSongsList] = useState([]);

    useEffect(() => {
        axios.get('./data.json').then(resp => {
            setSongsList(resp.data.sections[0].assets)
        }).catch(err => {
            console.log("error", err)
        })
    }, []);

    return <div>
        {
            songsList.map(song => <MusicList key={song.title} {...song} />)
        }
    </div>
}

export default SearchBody;