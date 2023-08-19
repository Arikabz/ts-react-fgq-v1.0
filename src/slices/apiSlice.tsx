import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { sec } from "../auth/security"


interface weekNumRes {
    result: Array<string>
}
interface weekRes {
    result: [Week]
}


export const weekApi = createApi({
    reducerPath: 'weekApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:6969/api',
        prepareHeaders: async (headers) => {
            const authToken = await sec.getAccessTokenSilently()();
            if (authToken){
                headers.set(
                    "Authorization", `Bearer ${authToken}`
                )
            }
            return headers
        }
    }),
    endpoints: builder => ({
        getWeek: builder.query<Week,number>({
            query: (w) => '/season/week/'+w,
            transformResponse: (res:weekRes) => {
                console.log(res.result[0])
                return res.result[0];
            }
        }),
        updateSeason: builder.query<string,void>({
            query: () => '/season',
        }),
        getCurrentWeek: builder.query<number,void>({
            query: () => '/currentWeek',
            transformResponse: (res:weekNumRes) => {
                const data = res.result[0]
                const match = data.match(/\d+/);
                const parsedNumber = match ? parseInt(match[0]) : -1;
                return isNaN(parsedNumber) ? -1 : parsedNumber;
            }
        })
    })
})

export const {useGetWeekQuery, useUpdateSeasonQuery, useGetCurrentWeekQuery} = weekApi;
