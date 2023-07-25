import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './contextMenu.css'
import {toggle} from '../../reducers/modalSlice'
import {removePerson} from '../../reducers/personSlice';


function ContextMenu(){
    const dispatch = useDispatch();
    const active = useSelector(state => state.contextMenu.active)
    return(
        <div >
            <ul className={active ? "contextMenu active" : "contextMenu"} >
                <li onClick={() => dispatch(toggle())}>Удалить</li>
                <li>Редактировать</li>  
            </ul>  
        </div>
    )
}

export default ContextMenu;