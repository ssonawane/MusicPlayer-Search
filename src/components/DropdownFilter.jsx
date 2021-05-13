import React, { useState } from 'react';
import Checkbox from './CheckBox';

function DropdownFilter() {
    const defaultArr =
        [{ flag: true, value: 'all', text: 'All' },
        { flag: false, value: 'title', text: 'Title' },
        { flag: false, value: 'desc', text: 'Description' },
        { flag: false, value: 'keywrds', text: 'Keywords' }];

    const [checkedItems, setCheckedItems] = useState(defaultArr);


    const changeHandler = e => {
        const filteredArr = [...checkedItems];

        filteredArr.forEach(item => {
            if (item.value === e.target.value) {
                item.flag = e.target.checked
            }
        })

        setCheckedItems(filteredArr)

        console.log(checkedItems);
    }

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