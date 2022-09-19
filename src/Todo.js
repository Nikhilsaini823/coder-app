import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Nevbar from './Nevbar'
import axios from 'axios'
import './Todo.css'
import './Card1.css'

export const Todo=() => {
    const token = localStorage.getItem('token')
    const [todos, setTodo] = useState([])
    
    useEffect(() =>{
        console.log('in use effect')
        if (token.length > 0){
            axios.get('http://localhost:8000/todos/', {'headers': {'Authorization': 'Token '+token}})
            .then(function (response) {
                setTodo(response.data.results)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }, [])

    const onDelete = (event, id) => {
        axios.delete('http://localhost:8000/todos/'+id+'/delete/', {'headers': {'Authorization': 'Token '+token}})
            .then(function (response) {
              let data = []
              todos.forEach((todo) => {
                if (todo.id !== id) {
                  data.push(todo)
                }
              })
              setTodo(data)
              })
              .catch(function (error){
                console.log(error)
              })
      }

    const onFinished = (event, id) => {
        console.log('token', token)
        axios.put('http://localhost:8000/todos/'+id+'/task_status/', {}, {'headers': {'Authorization': 'Token '+token}})
            .then(function (response) {
              console.log(response)
              let data = []
              todos.forEach((todo) => {
                if (todo.id === id) {
                  todo.task_status = 'COMPLETE'
                }
                data.push(todo)
              })
              setTodo(data)
            })
              .catch(function (error){
                console.log(error)
              })
      }

      const renderTodos = () => {
        let i = 0
        return todos.map((todo) => {
          i+=1
          return (
            <tr key={todo.id}>
                <th scope="row ">{i}</th>
                <td className='space pgh' >{todo.title}</td>
                <td className='space pgh'>{todo.description}</td>
                <td className='space pgh'>{todo.task_status}</td>
                <td className='space'>
                <button type="submit" className="btn btn-danger my-3" onClick={(event) => onDelete(event, todo.id)} style={{'marginRight': '10px'}}>Delete</button>
                {todo.task_status === 'Pending' && <button type="submit" className="btn btn-success ms-1 "  onClick={(event) => onFinished(event, todo.id)}>Finished</button>}
                </td>
            </tr>
          )
        })
      }

  return (
    <>
    <Nevbar/>
      <table className='table'>
        <thead>
          <th className='space '>Sr No</th>
          <th className='space'>User Name</th>
          <th className='space'>Title</th>
          <th className='space'>Description</th>
          <th className='space'>Actions</th>
        </thead>
        <tbody>
          {renderTodos()}
        </tbody>
      </table>
        
    <Footer/>
    </>
  )
}
