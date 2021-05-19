import React, { useState, useEffect, useContext } from 'react';
import Checkbox from '../checkbox/CheckBox';
import { context } from '../../App';
import { CONSTANT } from '../../constant';

function DropdownFilter({ getDrpDwnFilter }) {
    const musicListArr = useContext(context);
    let defaultArr = [{ flag: false, value: 'all', text: 'All' }];

    let checkboxListArr = (musicListArr?.length > 0) ? Object.keys(musicListArr?.[0]) : [];

    checkboxListArr?.forEach(value => {
        CONSTANT.CHECKBOXES_LIST.forEach(item => {
            if (value === item) {
                defaultArr.push({
                    flag: false,
                    value: item.toLocaleLowerCase(),
                    text: item.charAt(0).toUpperCase() + item.substr(1)
                })
            }
        })
    })

    const [checkedItems, setCheckedItems] = useState(defaultArr);

    const changeHandler = e => {
        const filteredArr = [...checkedItems];
        let checkAllFlag = true;

        filteredArr.forEach(item => {
            if (e.target.value === 'all') {
                item.flag = e.target.checked;
            } else if (item.value === e.target.value) {
                item.flag = e.target.checked;
                filteredArr[0].flag = false;
            }
        })

        for (let i = 1; i < filteredArr.length; i++) {
            if (!filteredArr[i]?.flag) {
                checkAllFlag = false;
                break;
            }
        }

        if (checkAllFlag) {
            filteredArr[0].flag = true;
        }

        setCheckedItems(filteredArr)
    }

    useEffect(() => {
        getDrpDwnFilter(checkedItems);
    }, [checkedItems])

    return <div className="dropdown">
        <a href="#" data-testid="activity" className="dropbtn">
            Activities
        </a>
        <div data-testid="drpdwn-content" className="dropdown-content">
            {
                checkedItems.map(item => <Checkbox key={item.value} changeHandler={changeHandler} {...item} />)
            }
        </div>
    </div>
}
export default DropdownFilter;