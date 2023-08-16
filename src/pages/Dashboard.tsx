import TableWithVisuals from '../components/TableWithVisuals'
import NavbarLoggedIn from '../components/NavbarLoggedIn'
//import {updateSeason, getCurrentWeek} from '../services/Services'
//import { useEffect } from 'react'
import { useGetCurrentWeekQuery } from '../slices/apiSlice'
import { useDispatch } from 'react-redux'
import { setWeekNum } from '../slices/weekNumSlice'


const Dashboard = () => {
    const {isError, data, isLoading, isFetching, isUninitialized} = useGetCurrentWeekQuery();
    //const dispatch = useDispatch();
    //dispatch(setWeekNum(weekNumber));
    if(isError) return <>Error</>
    if(isFetching && !data) return <>Loadin</>
    else if (data !== undefined ){
        <div>
            <NavbarLoggedIn content={<TableWithVisuals weekNum={data} />} />
        </div>
    }
}

export default Dashboard
