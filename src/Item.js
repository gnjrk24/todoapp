import React,{useState} from 'react'

const Item = ({ content, deleteTodo,id }) => {
    const [isDone, setIsDone] = useState(false)
    const deletebutton = () => {
        deleteTodo(id)
    }

    return (
        <li>
            <input type='checkbox'
            onChange={() => {
                setIsDone(!isDone)
            }} />
            <span style={
                {textDecoration: isDone ? 'line-through' : 'none'}
            }>
                {content}!</span>
                <button onClick={deletebutton}>delete</button>
        </li>
    )
}

export default Item;
