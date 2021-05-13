import React from 'react';
import style from './MusicList.module.css';
import parse from 'html-react-parser';

function MusicList({ title, supplement_information, description, links }) {

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
            <p><strong>{title}</strong></p>
            <p><i>{supplement_information}</i></p>
            <p>{description?.[0] && parse(description?.[0])}</p>
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
