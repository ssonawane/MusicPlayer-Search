import React, { useEffect, useState, useContext } from 'react';
import MusicList from '../musiclist/MusicList';
import { context } from '../../App'

function SearchBody({ searchStr, drpDwnFilter }) {
    const [songsList, setSongsList] = useState([]);
    const [searchStrArr, setSearchStrArr] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [filterChkArr, setFilterChkArr] = useState([]);

    const musicListArr = useContext(context);


    useEffect(() => {
        setSongsList(musicListArr);
        setFilteredList(musicListArr);
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
                let result = false;
                for (let obj of drpDwnFilter) {
                    if (obj?.flag) {
                        let checkType = obj.value;
                        result = song[checkType]?.toString().toLowerCase().includes(str);
                        if (result) {
                            break;
                        }
                    }
                }

                // if (drpDwnFilter[1].flag) {
                //     titleFlag = song.title.toLowerCase().includes(str);
                // }

                // if (drpDwnFilter[2].flag) {
                //     descFlag = song.description[0].toLowerCase().includes(str);
                // }

                // if (drpDwnFilter[3].flag) {
                //     keyFlag = srchArr?.find(str => {
                //         return song.keywords?.find(keywrd => keywrd.toLowerCase() === str)
                //     })
                // }

                return result;
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
            (filteredList.length === 0 && searchStrArr.length !== 0) ? <h3 style={{ textAlign: "center" }}>No Result found. Please select correct search criteria !!!</h3> :
                filteredList.map(song => <MusicList data-testid="music-list" key={song.title} {...song} searchStrArr={searchStrArr} filterChkArr={filterChkArr} />)
        }
    </div>
}

export default SearchBody;