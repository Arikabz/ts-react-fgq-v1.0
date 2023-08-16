import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const weekApi = createApi({
    reducerPath: 'weekApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:6969/api'}),
    endpoints: builder => ({
        getWeek: builder.query<GameWeek,number>({
            query: (w) => '/season/week/'+w,
        }),
        updateSeason: builder.query<string,void>({
            query: () => '/season',
        }),
        getCurrentWeek: builder.query<number,void>({
            query: () => '/currentWeek',
            transformResponse: (res:string) => {
                const match = res.match(/\d+/);
                const parsedNumber = match ? parseInt(match[0]) : -1;
                return isNaN(parsedNumber) ? -1 : parsedNumber;
            }
        })
    })
})

export const {useGetWeekQuery, useUpdateSeasonQuery, useGetCurrentWeekQuery} = weekApi
