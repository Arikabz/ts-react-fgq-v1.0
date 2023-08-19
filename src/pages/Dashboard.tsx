import TableWithVisuals from '../components/TableWithVisuals'
import NavbarLoggedIn from '../components/NavbarLoggedIn'
//import {updateSeason, getCurrentWeek} from '../services/Services'
import { useEffect } from 'react'
import {  withAuthenticationRequired } from '@auth0/auth0-react'
import { useGetCurrentWeekQuery } from '../slices/apiSlice'
import { useDispatch } from 'react-redux'
import { setWeekNum } from '../slices/weekNumSlice'
import RadialProgress from '../components/RadialProgress'




const Dashboard = () => {
    const dispatch = useDispatch();
    const {isError, data, isLoading} = useGetCurrentWeekQuery();
    //const { getAccessTokenSilently } = useAuth0();
    //const token = useSelector((state:RootState) => state.token.token)

    useEffect(() => {
        if (!isLoading && data) {
            console.log(data)
            dispatch(setWeekNum(data)); // Dispatch weekNum after getting token
        }
    }, [dispatch, isLoading, data]);


    //const weekApiWithToken = weekApi(token);

    return (
        <div>
            {data ? (
                <NavbarLoggedIn content={<TableWithVisuals weekNum={data} />} />
            ) : (
                    <RadialProgress />
                )}
            {isError && <>Error</>}
        </div>
    );
}

export default withAuthenticationRequired(Dashboard, {
    onRedirecting: () => <RadialProgress/>
})
