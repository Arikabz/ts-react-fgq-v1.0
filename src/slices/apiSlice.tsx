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
        }),
        editExtraPoints: builder.mutation({
            query: ({userID, points, reason}) => ({
                url: '/user/editExtraPoints',
                method: 'POST',
                body: JSON.stringify({
                    userID:userID,
                    points:points,
                    reason:reason,
                }),
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        getUserInfo: builder.mutation({
            query: (payload) => ({
                url: '/user/getUserInfo',
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                }),
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        postSinglePrediction: builder.mutation({
            query: (payload) => ({
                url: '/predictions/uploadSinglePrediction',
                method: 'POST',
                body: JSON.stringify({
                    userID: payload.userID,
                    weekNum: payload.weekNum,
                    leagueID: payload.leagueID,
                    gameNum: payload.gameNum,
                    awayGuess: payload.awayGuess,
                    homeGuess: payload.homeGuess,
                }),
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        makePredictionTemplate: builder.mutation({
            query: (payload) => ({
                url: '/predictions/makePredictionTemplate',
                method: 'POST',
                body: JSON.stringify({
                    userID: payload.userID,
                    weekNum: payload.weekNum,
                    leagueID: payload.leagueID,
                }),
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        createLeague: builder.mutation({
            query: (payload) => ({
                url: 'league/createLeague',
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                }),
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        registerUserInLeague: builder.mutation({
            query: (payload) => ({
                url: '/user/registerUserInLeague',
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    leagueID: payload.leagueID,
                }),
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        getLeagueData: builder.mutation({
            query: (payload) => ({
                url: '/user/getLeagueData',
                method: 'POST',
                body: JSON.stringify({
                    leagueID: payload.leagueID,
                }),
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        checkUserAndRegister: builder.mutation({
            query: (payload) => ({
                url: '/user/checkAndRegister',
                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    userName: payload.userName,
                }),
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
        getLeagueUsers: builder.mutation({
            query: (leagueID:string) => ({
                url: '/user/getLeagueUsers',
                method: 'POST',
                body: JSON.stringify({
                    leagueID:leagueID,
                }),
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
        }),
    }),
})

export const {useGetWeekQuery, useUpdateSeasonQuery, useGetCurrentWeekQuery } = weekApi;
