import React, { useState, useEffect } from 'react';
import Checkbox from './CheckBox';

function DropdownFilter({ getDrpDwnFilter }) {
    const defaultArr =
        [{ flag: false, value: 'all', text: 'All' },
        { flag: true, value: 'title', text: 'Title' },
        { flag: false, value: 'desc', text: 'Description' },
        { flag: false, value: 'keywrds', text: 'Keywords' }];

    const [checkedItems, setCheckedItems] = useState(defaultArr);


    const changeHandler = e => {
        const filteredArr = [...checkedItems];

        filteredArr.forEach(item => {
            if (e.target.value === 'all') {
                item.flag = e.target.checked;
            } else if (item.value === e.target.value) {
                item.flag = e.target.checked
            }
        })

        setCheckedItems(filteredArr)
    }

    useEffect(() => {
        getDrpDwnFilter(checkedItems);
    }, [checkedItems])

    return <div className="dropdown">
        <a href="#" className="dropbtn">
            Activities
        </a>
        <div className="dropdown-content">
            {
                checkedItems.map(item => <Checkbox key={item.value} changeHandler={changeHandler} {...item} />)
            }
        </div>
    </div>
}
export default DropdownFilter;