import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicList from './MusicList';
import Highlighter from "react-highlight-words";

function SearchBody({ searchStr, drpDwnFilter }) {
    const [songsList, setSongsList] = useState([]);
    const [searchStrArr, setSearchStrArr] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [filterChkArr, setFilterChkArr] = useState([]);

    useEffect(() => {
        axios.get('./data.json').then(resp => {
            setSongsList(resp.data.sections[0].assets)
            setFilteredList(resp.data.sections[0].assets);
        }).catch(err => {
            console.log("error", err)
        })
    }, []);

    useEffect(() => {
        let srchArr = [];
        let titleFlag, descFlag, keyFlag;

        console.log(drpDwnFilter);
        setSearchStrArr(searchStr.split(' '));
        setFilterChkArr(drpDwnFilter);

        srchArr = searchStr.match(/\w+|"[^"]+"/g);


        const results = songsList.filter(song => {
            titleFlag = descFlag = keyFlag = false;
            return srchArr?.find(str => {
                if (drpDwnFilter[1].flag) {
                    titleFlag = song.title.toLowerCase().includes(str);
                }

                if (drpDwnFilter[2].flag) {
                    descFlag = song.description[0].toLowerCase().includes(str);
                }

                if (drpDwnFilter[3].flag) {
                    keyFlag = srchArr?.find(str => {
                        return song.keywords?.find(keywrd => keywrd.toLowerCase() === str)
                    })
                }

                return (titleFlag || descFlag || keyFlag);
            })
        });


        results?.length === 0 ? setFilteredList(songsList) : setFilteredList(results)

        //setFilteredList(results);

    }, [searchStr, drpDwnFilter])


    return <div>
        {
            filteredList.map(song => <MusicList key={song.title} {...song} searchStrArr={searchStrArr} filterChkArr={filterChkArr} />)
        }
    </div>
}

export default SearchBody;