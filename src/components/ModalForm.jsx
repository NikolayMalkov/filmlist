import React from 'react';
import '../css/App.css';
import axios from 'axios';
import { useForm } from "react-hook-form";

const Modal = ({active, toggle}) => {

    const { register, handleSubmit } = useForm();

// Добавить новый фильм
    function onSubmit(data){
        const baseUrl = "http://localhost:5000/films";
        axios.post(baseUrl, data)
        console.log(data);
    }

    return (
        <div className={ active ? 'ModalForm active' : 'ModalForm' } onClick={() => toggle(false)}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
            <h2>добавить фильм в список</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="title" {...register("title")} />
                <button type="submit">Отправить</button>
            </form>
            </div> 
        </div>
    )
}

export default Modal;