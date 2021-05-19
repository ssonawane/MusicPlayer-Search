import React from 'react';
import style from './MusicList.module.css';
import parse from 'html-react-parser';
import Highlighter from "../higlighter/HighLighter";
import sanitizeHtml from 'sanitize-html';
import { CONSTANT } from '../../constant'

function MusicList({ title, supplement_information, description, links, searchStrArr, filterChkArr }) {

    let pdfLink = '';
    let pdfUrl = '';

    links?.forEach(link => {
        if (link.type === 'link') {
            pdfLink = link.text;
            pdfUrl = link.file_url
        }
    })

    console.log(CONSTANT)
    return <div className={style.listHeader}>
        <div data-testid="img-placeholder">
            <img src='./music_placeholder.png' className={style.imgHolder} alt="" />
        </div>
        <div className={style.songDetails}>
            {
                filterChkArr.map(data => (
                    (data.value === CONSTANT.TITLE) && <p data-testid="title"><strong>{data.flag ? <Highlighter
                        highlightClassName={style.highlight}
                        searchWords={searchStrArr}
                        autoEscape={true}
                        textToHighlight={sanitizeHtml(title)}
                    /> : sanitizeHtml(title)}</strong></p>
                ))
            }



            <p data-testid="information" className={style.descFont}><i>{sanitizeHtml(supplement_information)}</i></p>

            {
                filterChkArr.map(data => (
                    (data.value === CONSTANT.DESCRIPTION) && <p data-testid="description" className={style.descFont}>{(data.flag) ? <Highlighter
                        highlightClassName={style.highlight}
                        searchWords={searchStrArr}
                        autoEscape={true}
                        textToHighlight={sanitizeHtml(description[0])}
                    /> : (parse(sanitizeHtml(description?.[0] ? description?.[0] : '')))}</p>

                ))
            }


            <div data-testid="playlink">
                <a className={style.playLink} href={links?.[0]?.file_url || '#'}>{sanitizeHtml(links?.[0]?.text)}</a>
            </div>
            <div data-testid="pdflink">
                <a className={style.pdfLink} href={pdfUrl || '#'}>{sanitizeHtml(pdfLink || '')}</a>
            </div>
        </div>
    </div>
}

export default React.memo(MusicList)
