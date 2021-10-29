import React from "react";
import Todolistitem from "./todolistitem/todo-list-item";
import './todolist.css'

const Todolist = ({todos, onDeleted, onImportant}) => {
    const elements = todos.map((item) => { //пропиши console.log(item);
      const {id, ...otherprops } = item; //находится id ему присвается id а otherprops присваевается остальные элементы массива
      const styleli = {
        marginTop: '10px'
      }
      return (
          <li style={styleli} key = {id}><Todolistitem 
          onDeleted={() => onDeleted(id)}
          onImportant={() => onImportant(id)}
        {...otherprops}/></li>
              // если непонятно то смотри урок по спрэд оператору в es6 
              //  а так это все элементы массива НО важно чтобы названия совпадали с значениями
              // или вот более длинная запись label = { item.label }, important = { item.important } 
        );
    })

    return (
      <>
        {todos.length === 0 &&
          <p>
            пока что у вас нет заметок 
          </p>
        }
        {todos.length >= 1 &&
          <ul>
            { elements }
          </ul>
        }
      </>
    );
  }

export default Todolist;
  