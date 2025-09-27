import React, { useState } from 'react'

const Task24 = () => {
    const [formData, setFormData] = useState({ name: "", age: "", dateofbirth: "", contact: "", email: "", password: "" })

    const handleToChange = (e) => {
        setFormData((info) => {
            return { ...info, [e.target.name]: e.target.value }
        })
    }

    const handleTosubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData(
            { name: "", age: "", dateofbirth: "", contact: "", email: "", password: "" }
        )
    }
    return (
        <div>
            <h1>Task-24 form</h1>
            <form>
                <input type="text" name="name" placeholder='Enter your name ' value={formData.name} onChange={handleToChange} />
                <br /><br />
                <input type="number" name="age" id="age" placeholder='Enter your age ' value={formData.age} onChange={handleToChange} />
                <br /><br />
                <input type="date" name="dateofbirth" id="dateofbirth" value={formData.dateofbirth} onChange={handleToChange} />
                <br /><br />
                <input type="text" name="contact" id="contact" placeholder='Enter your Contact Number' value={formData.contact} onChange={handleToChange} />
                <br /><br />
                <input type="email" name="email"  placeholder='Enter your email' value={formData.email} onChange={handleToChange} />
                <br /><br />
                <input type="password" name="password" id="password" placeholder='Enter your password' value={formData.password} onChange={handleToChange} />
                <br /><br />
                <button type='submit' onClick={handleTosubmit}>submit</button>
            </form>
        </div>
    )
}

export default Task24