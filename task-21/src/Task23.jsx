import { useState } from "react"

const Task23 = () => {
    let [formData, setFormData] = useState({ name: "", email: "" })

    const handleToChange = (e) => {
        setFormData((currval) => {
            return { ...currval, [e.target.name]: e.target.value }
        });
    }

    const handletosumbit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData({
            name: "", email: ""
        })
    }
    return (
        <div>
            <h2>Task-23 form viladitaion</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Enter your name " value={formData.name} onChange={handleToChange} />
                <br /><br />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your Email" value={formData.email} onChange={handleToChange} />
                <br /><br />
                <button type="submit" onClick={handletosumbit}>Submit</button>
            </form>
        </div>
    )
}

export default Task23