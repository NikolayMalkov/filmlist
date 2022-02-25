import React from 'react';
import '../css/App.css'
import FilmItem from './FilmItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './ModalForm';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';


const Complete = () => {

//Локальный стейт списка фильмов
    const [films, setFilms] = useState([]);

//Стейт состояния модального окна для добавления фильма
    const [modalVisible, toggleModalVisible] = useState(false);

//Получение фильмов при инициализации страницы
    useEffect(() => {
        getFilms();
      });

//Получение списка фильмов из БД и добавление их в локальный стейт
    const getFilms = async () => {
        const response = await axios.get(baseUrl)
        setFilms(response.data) 
    }
// BaseUrl
    const baseUrl = "http://localhost:5000/films";

    return (
        <div className='complete-container'>
            <h1>Film list v.0.0.1 pre-alpha</h1>
            <Modal active={modalVisible} 
                   toggle={toggleModalVisible} />
            {films.map( film => <FilmItem 
                                    id ={film.id} 
                                    title={film.title}
                                    /> )}

            <Button onClick={() => toggleModalVisible(true)} 
                                    variant="contained" 
                                    color="success">Добавить
            </Button>
            
            <Pagination count={10} color="primary" />
        </div>
    )
}

export default Complete;