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
    const {isError, data, isLoading} = useGetCurrentWeekQuery();
    const dispatch = useDispatch();
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const token = await getAccessTokenSilently();
                dispatch(setToken(token));
            } catch (error) {
                console.error('Error fetching access token:', error);
            }
        };

        fetchToken();
    }, [dispatch, getAccessTokenSilently]);

    useEffect(() => {
        if (!isLoading && data) {
            dispatch(setWeekNum(data));
        }
    }, [data, dispatch, isLoading]);
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
