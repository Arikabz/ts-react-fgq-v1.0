
const Select = ({thisWeek, onChange, num}) => {
    let opts = []

    for(let i=1; i<=num; i++){
        opts.push(i)
    }
    function handleChange(e){
        onChange(e.target.value)
    }

    return (
        <select className="select w-full max-w-xs" onChange={e=>handleChange(e)} >
            {opts.map(x=>{
                if(x===Number(thisWeek)){
                return <option value={x} key={x} selected>Week {x}</option>
                }
                return <option value={x} key={x}>Week {x}</option>
            })}
        </select>
    )
}

export default Select
