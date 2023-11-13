import React from 'react'

function FilterTodo({setStatus}) {
    const statusHandler = (event) => {
        console.log(event.target.value)
        setStatus(event.target.value)
    }
    return (
        <div className='select'>
            <select onChange = {statusHandler} className='filter-todo'>
                <option value='all'>Все</option>
                <option value='abc'>По алфавиту</option>
                <option value='completed'>Завершенные</option>
                <option value='uncompleted'>Незавершенные</option>
            </select>
        </div>
    )
}

export default FilterTodo