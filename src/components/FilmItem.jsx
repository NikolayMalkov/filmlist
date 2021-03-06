import React, { useState } from 'react';
import '../css/App.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const FilmItem = ({id, title}) => {
    // Хук обработчик формы
    const { register, handleSubmit } = useForm();
    
    const [titleInput, toggleTitle] = useState(true)

    const baseUrl = "http://localhost:5000/films";

// Delete film from database
    const delFilm = async () => {
        const res = await axios.delete(baseUrl + '/' + id)
        console.log(res.status)
    }
// Update film title
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
                        <TextField id="standard-basic" label="Standard" variant="standard" {...register("title")} />
                        <Button type="submit" variant="contained" color="success">Обновить</Button>
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