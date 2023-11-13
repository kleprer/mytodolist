import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddItem({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }
    return (
    <form className='form' style={{marginBottom: '1rem'}} onSubmit = {submitHandler}>
        <input className='input' value={value} onChange={event => setValue(event.target.value)}/>
            <button className='submit' type="submit">Добавить задачу</button>
    </form>
    )
}
AddItem.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddItem;






