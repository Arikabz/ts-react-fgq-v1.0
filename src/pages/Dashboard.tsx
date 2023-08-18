import TableWithVisuals from '../components/TableWithVisuals'
import NavbarLoggedIn from '../components/NavbarLoggedIn'
//import {updateSeason, getCurrentWeek} from '../services/Services'
import { useEffect } from 'react'
import {  useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { useGetCurrentWeekQuery } from '../slices/apiSlice'
import { useDispatch } from 'react-redux'
import { setWeekNum } from '../slices/weekNumSlice'
import { setToken } from '../slices/tokenSlice'
import RadialProgress from '../components/RadialProgress'



const Dashboard = () => {
    const dispatch = useDispatch();
    const { getAccessTokenSilently } = useAuth0();
    const {isError, data, isLoading} = useGetCurrentWeekQuery();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await getAccessTokenSilently();
                dispatch(setToken(token)); // Dispatch token first
                if (!isLoading && data) {
                    dispatch(setWeekNum(data)); // Dispatch weekNum after getting token
                }
            } catch (error) {
                console.error('Error fetching access token:', error);
            }
        };

        fetchData();
    }, [dispatch, getAccessTokenSilently, isLoading, data]);

    return (
        <div>
            {data ? (
                <NavbarLoggedIn content={<TableWithVisuals weekNum={data} />} />
            ) : (
                <RadialProgress />
            )}
            {isError && <div>ERROR!</div>}
        </div>
    );
}

export default withAuthenticationRequired(Dashboard, {
    onRedirecting: () => <RadialProgress/>
})
