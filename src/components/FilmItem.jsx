import React, { useState } from 'react';
import '../css/App.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const FilmItem = ({id, title}) => {

    const { register, handleSubmit } = useForm();
    
    const [titleInput, toggleTitle] = useState(true)

    const baseUrl = "http://localhost:5000/films";

// Delete film from database
    const delFilm = async () => {
        const res = await axios.delete(baseUrl + '/' + id)
        console.log(res.status)
    }
    const onSubmit = async (data) => {
       await axios.put(baseUrl + '/' + id, data).then(res => {
           toggleTitle(true)
       })
    }


    return (
        <div className='FilmItem'>
            <div>
                {titleInput ? <span className='FilmTitle' onClick={() => toggleTitle(false)} >{title}</span> 
                 : <span>
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' name='filmtitle' {...register("title")}></input>
                        <button className='UpdateFilmTitle' type="submit">Обновить</button>
                     </form>
                   </span>
                }
                
            </div>
            <div>
                <span className='deleteBtn' onClick={() => delFilm(id)}>X</span>
            </div>   
        </div>
    )
}

export default FilmItem;