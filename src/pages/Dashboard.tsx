import TableWithVisuals from '../components/TableWithVisuals'
import NavbarLoggedIn from '../components/NavbarLoggedIn'
//import {updateSeason, getCurrentWeek} from '../services/Services'
import { useEffect } from 'react'
import { useGetCurrentWeekQuery } from '../slices/apiSlice'
import { useDispatch } from 'react-redux'
import { setWeekNum } from '../slices/weekNumSlice'


const Dashboard = () => {
    const {data, isLoading, isFetching, isUninitialized} = useGetCurrentWeekQuery();
    const dispatch = useDispatch();
    dispatch(setWeekNum(weekNumber));
    //const [week, setWeek] = useState('')
    useEffect(()=>{
        //console.log('getting week...')
        //updateSeason().then(res => console.log(res))
        //getCurrentWeek().then(x=> setWeek(x.result[0]))

    },[])
    if(isLoading||isFetching||isUninitialized){
    return (
    <div>Loading</div>
    )
    }else{
        <div>
            <NavbarLoggedIn content={<TableWithVisuals weekNum={parseInt(data.split(' ').filter((x:string)=> parseInt(x))[0])} />} />
        </div>
    }
}

export default Dashboard
