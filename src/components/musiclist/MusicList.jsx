import React from 'react';
import style from './MusicList.module.css';
import parse from 'html-react-parser';
import Highlighter from "../higlighter/HighLighter";
import sanitizeHtml from 'sanitize-html';

function MusicList({ title, supplement_information, description, links, searchStrArr, filterChkArr }) {

    let pdfLink = '';
    let pdfUrl = '';

    links?.forEach(link => {
        if (link.type === 'link') {
            pdfLink = link.text;
            pdfUrl = link.file_url
        }
    })


    return <div className={style.listHeader}>
        <div data-testid="img-placeholder">
            <img src='./music_placeholder.png' className={style.imgHolder} alt="" />
        </div>
        <div className={style.songDetails}>


            <p data-testid="title"><strong>{filterChkArr?.[1].flag ? <Highlighter
                highlightClassName={style.highlight}
                searchWords={searchStrArr}
                autoEscape={true}
                textToHighlight={sanitizeHtml(title)}
            /> : sanitizeHtml(title)}</strong></p>


            <p data-testid="information" className={style.descFont}><i>{sanitizeHtml(supplement_information)}</i></p>
            <p data-testid="description" className={style.descFont}>{filterChkArr?.[2].flag ? <Highlighter
                highlightClassName={style.highlight}
                searchWords={searchStrArr}
                autoEscape={true}
                textToHighlight={sanitizeHtml(description[0])}
            /> : (parse(sanitizeHtml(description?.[0] ? description?.[0] : '')))}</p>

            <div data-testid="playlink">
                <a className={style.playLink} href={links?.[0]?.file_url || '#'}>{sanitizeHtml(links?.[0]?.text)}</a>
            </div>
            <div data-testid="pdflink">
                <a className={style.pdfLink} href={pdfUrl || '#'}>{sanitizeHtml(pdfLink || '')}</a>
            </div>
        </div>
    </div>
}

export default MusicList
