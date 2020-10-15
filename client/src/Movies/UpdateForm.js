import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'

const UpdateForm = ({movieList, setMovieList}) => {
    const [formValues, setFormValues] = useState()
    const { push } = useHistory()
    const { id } = useParams()

    useEffect(()=> {
        axios.get(`http://localhost:5000/api/movies/${id}`)
        .then(res => {
            setFormValues(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const submitHandler = e => {
        e.preventDefault()
        axios.put('http://localhost:5000/api/movies/${id}', formValues)
        .then(res => {
            setMovieList(res.data)
            push(`/`)
        }).catch(err=> {
            console.log(err)
        })
    }

    const changeHandler = e => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                type="text"
                 name="title" 
                 value={formValues.title} 
                 onChange={changeHandler}>
                </input>

                <input 
                type="text"
                 name="title" 
                 value={formValues.director} 
                 onChange={changeHandler}>
                </input>

                <input 
                type="text"
                 name="title" 
                 value={formValues.metascore} 
                 onChange={changeHandler}>
                </input>

                

            </form>
        </div>
    )
}

export default UpdateForm