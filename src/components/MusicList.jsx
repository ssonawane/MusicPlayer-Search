import React from 'react';
import style from './MusicList.module.css';
import parse from 'html-react-parser';
import Highlighter from "./HighLighter";
import sanitizeHtml from 'sanitize-html';

function MusicList({ title, supplement_information, description, links, searchStrArr, filterChkArr }) {

    let pdfLink = '';
    let pdfUrl = '';

    links.forEach(link => {
        if (link.type === 'link') {
            pdfLink = link.text;
            pdfUrl = link.file_url
        }
    })


    return <div className={style.listHeader}>
        <div>
            <img src='./music_placeholder.png' className={style.imgHolder} />
        </div>
        <div className={style.songDetails}>


            <p><strong>{filterChkArr[1].flag ? <Highlighter
                highlightClassName={style.highlight}
                searchWords={searchStrArr}
                autoEscape={true}
                textToHighlight={title}
            /> : title}</strong></p>


            <p><i>{supplement_information}</i></p>
            <p>{<Highlighter
                highlightClassName={style.highlight}
                searchWords={searchStrArr}
                autoEscape={true}
                textToHighlight={(description[0])}
            />}</p>

            <div>
                <a className={style.playLink} href={links?.[0]?.file_url || '#'}>{links?.[0]?.text}</a>
            </div>
            <div>
                <a className={style.pdfLink} href={pdfUrl || '#'}>{pdfLink || ''}</a>
            </div>
        </div>
    </div>
}

export default MusicList
