import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicList from './MusicList';
import Highlighter from "react-highlight-words";

function SearchBody({ searchStr, drpDwnFilter }) {
    const [songsList, setSongsList] = useState([]);
    const [searchStrArr, setSearchStrArr] = useState([]);
    const [filterArr, setFilterArr] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        axios.get('./data.json').then(resp => {
            setSongsList(resp.data.sections[0].assets)
            setFilteredList(resp.data.sections[0].assets);
        }).catch(err => {
            console.log("error", err)
        })
    }, []);

    useEffect(() => {

        setSearchStrArr(searchStr.split(' '));
        let filterFlag = false;
        let filtered = [];
        songsList.forEach(obj => {
            filterFlag = false;
            searchStrArr.forEach(str => {
                if (obj.title.toLowerCase().includes(str.toLowerCase())) {
                    filterFlag = true;
                }
            })

            if (filterFlag) {
                filtered.push(obj)
            }
        })
        setFilteredList(filtered);

    }, [searchStr, drpDwnFilter])


    return <div>
        {
            filteredList.map(song => <MusicList key={song.title} {...song} searchStrArr={searchStrArr} />)
        }
    </div>
}

export default SearchBody;