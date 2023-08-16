import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const weekApi = createApi({
    reducerPath: 'weekApi',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:6969/api'}),
    endpoints: builder => ({
        getWeek: builder.query({
            query: (w) => '/season/week/'+w,
        }),
        updateSeason: builder.query({
            query: () => '/season',
        }),
        getCurrentWeek: builder.query({
            query: () => '/currentWeek',
        })
    })
})

export const {useGetWeekQuery, useUpdateSeasonQuery, useGetCurrentWeekQuery} = weekApi
