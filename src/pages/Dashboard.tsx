import TableWithVisuals from '../components/TableWithVisuals'
import NavbarLoggedIn from '../components/NavbarLoggedIn'
import {updateSeason, getCurrentWeek} from '../services/Services'
import { useEffect, useState } from 'react'


const Dashboard = () => {
    const [week, setWeek] = useState('')
    useEffect(()=>{
        console.log('getting week...')
        updateSeason().then(res => console.log(res))
        getCurrentWeek().then(x=> setWeek(x.result[0]))

    },[])
    return (
        <div>
            <NavbarLoggedIn content={<TableWithVisuals weekNum={parseInt(week.split(' ')[1])} thisWeek={week}/>} />
        </div>
    )
}

export default Dashboard
