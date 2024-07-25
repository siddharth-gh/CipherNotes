import React from 'react'
import styles from './navbar.module.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import Input from '../../atoms/input';

function Navbar() {

    const changeTheme = () => {
        const currentColor = document.body.style.backgroundColor;
        if (currentColor === "rgb(255, 255, 255)" || currentColor === "") {
            document.body.style.backgroundColor = "#808080"; // Green
        } else {
            document.body.style.backgroundColor = "rgb(255, 255, 255)"; // Red
        }
    }



    const [searchText, setSearchText] = React.useState('');
    return (
        <header className={styles.header}>
            <article className={styles['search-bar']}>
                <Icon icon="bx:bx-search" style={{ color: "black" }} />
                <Input
                    type="text"
                    placeholder="Search Notes"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    className={styles['field']}
                />
            </article>
            <div className={styles.theme} onClick={changeTheme}>
                <Icon icon="icon-park-outline:dark-mode" style={{ color: "black" }} />
            </div>
        </header>
    )
}

export default Navbar
