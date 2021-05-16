import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicList from '../musiclist/MusicList';

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

        setSearchStrArr(searchStr.split(' '));
        setFilterChkArr(drpDwnFilter);

        srchArr = searchStr.match(/\w+|"[^"]+"/g);


        const results = songsList.filter(song => {
            titleFlag = descFlag = keyFlag = false;
            return srchArr?.find(str => {
                str = str.toLowerCase();
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


        if (srchArr?.length) {
            results?.length === 0 ? setFilteredList([]) : setFilteredList(results)
        } else {
            setFilteredList(songsList);
        }

        //setFilteredList(results);

    }, [searchStr, drpDwnFilter])


    return <div>
        {
            (filteredList.length === 0 && searchStrArr.length !== 0) ? <h3 style={{ textAlign: "center" }}>No Result found !!!</h3> :
                filteredList.map(song => <MusicList data-testid="music-list" key={song.title} {...song} searchStrArr={searchStrArr} filterChkArr={filterChkArr} />)
        }
    </div>
}

export default SearchBody;