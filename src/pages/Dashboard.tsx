import TableWithVisuals from '../components/TableWithVisuals'
import NavbarLoggedIn from '../components/NavbarLoggedIn'
//import {updateSeason, getCurrentWeek} from '../services/Services'
//import { useEffect } from 'react'
import { useGetCurrentWeekQuery } from '../slices/apiSlice'
import { useDispatch } from 'react-redux'
import { setWeekNum } from '../slices/weekNumSlice'
import RadialProgress from '../components/RadialProgress'



const Dashboard = () => {
    const {isError, data } = useGetCurrentWeekQuery();
    const dispatch = useDispatch();
        dispatch(setWeekNum(data));
        return(
        
            <div>
            {
                data &&
                <NavbarLoggedIn content={<TableWithVisuals/>} />
            }
            {
                !data &&
                <RadialProgress  />
            }{
                isError &&
                    <div>ERROR!</div>
            }
            </div>
        )
}

export default Dashboard
