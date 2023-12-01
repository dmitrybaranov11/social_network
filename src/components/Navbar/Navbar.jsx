import React from "react";
import s from './Navbar.module.css';
import {Link, NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={navData => navData.isActive ? s.activeLink : s.item} >
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.activeLink : s.item}>
                    Message
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={navData => navData.isActive ? s.activeLink : s.item}>
                    New
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={navData => navData.isActive ? s.activeLink : s.item}>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={navData => navData.isActive ? s.activeLink : s.item}>
                    Settings
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends' className={navData => navData.isActive ? s.activeLink : s.item}>
                    Friends
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;