import {useEffect, useState} from "react";

export default function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const id = tick()
        return () => clearTimeout(id)
    }, [])


    const tick = () => {
        return setInterval(() => {
            setTime(() => new Date().toLocaleTimeString())
        }, 1000)
    }

    return (
        <p>Current time: {time}</p>
    )
}