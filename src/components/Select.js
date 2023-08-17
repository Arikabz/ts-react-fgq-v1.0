import { useState } from "react"

const Select = ({thisWeek, onChange, num}) => {
    const [current, setCurrent] = useState(thisWeek)
    let opts = []

    for(let i=1; i<=num; i++){
        opts.push(i)
    }
    function handleChange(e){
        onChange(e.target.value)
        setCurrent(e.target.value)
    }

    return (
        <select className="select w-full max-w-xs" value={current} onChange={e=>handleChange(e)} >
            {opts.map(x=>{
                return <option value={x} key={x}>Week {x}</option>
            })}
        </select>
    )
}

export default Select
