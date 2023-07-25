import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../style/css/modal.css'
//import './modal.css'
import { toggle } from '../reducers/modalSlice';
import {removePerson} from '../reducers/personSlice'

function Modal(){
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);

    function handleRemoveClick(personId){
        dispatch(removePerson({id: personId}));
        dispatch(toggle());
    }
    
    return(
        <div className={modal.active ? 'modal active' : 'modal'} onClick={() => dispatch(toggle())}>
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <p>Подтвердите действие</p>
                <span className='buttons'>
                    <button onClick={() => dispatch(toggle())}>Отменить</button>
                    <button id='del' onClick={() => {handleRemoveClick(modal.personId)}}>Удалить</button>                    
                </span>  
            </div>  
        </div>
    )
}

export default Modal;