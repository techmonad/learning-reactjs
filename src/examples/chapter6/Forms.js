import {useState} from "react";

export default function Forms(){
    const [title, setTitle] = useState("")
    const [color, setColor] = useState("")

    const submit = e =>{
        e.preventDefault()
        console.log(title)
        console.log(color)
        setTitle("")
        setColor("")
    }

    return(
        <form onSubmit={e => submit(e)}>
            <input type="text"  value={title} onChange={e => setTitle(e.target.value)}/>
            <input type="color"  value={color} onChange={e => setColor(e.target.value)}/>
            <button>Add</button>
        </form>
    )
}