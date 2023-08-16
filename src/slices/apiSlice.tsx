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
                const parsedNumber = parseInt(res.split(' ').filter((x:string)=> parseInt(x))[0]);
                return isNaN(parsedNumber) ? -1 : parsedNumber;
            }
        })
    })
})

export const {useGetWeekQuery, useUpdateSeasonQuery, useGetCurrentWeekQuery} = weekApi
