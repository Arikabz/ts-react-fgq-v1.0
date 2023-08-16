import React, {Dispatch, useEffect, useState} from 'react'
import Select from '../components/Select'
import RadialProgress from '../components/RadialProgress'
import Entry from './Entry'
import { useGetWeekQuery } from '../slices/apiSlice'
import { useDispatch } from 'react-redux'
import { setWeekData } from '../slices/weekSlice'
import { setWeekNum } from '../slices/weekNumSlice'

type Props ={
    weekNum:number;
}

const TableWithVisuals = ({weekNum}:Props) => {

    const dispatch = useDispatch();
    const {isError, data, isFetching} = useGetWeekQuery(weekNum)
    //const [weekArr, setWeekArr] = useState({});

    useEffect(()=>{
    },[])
    const changeWeek = (num:number) => {
        console.log('change week to:')
        console.log(num)
        dispatch(setWeekNum(num))
        //getWeek(num).then(x=> setWeekArr(x))
    }
    if(isError) return <>Error</>
    if(isFetching && !data) return <>Loading</>
    else if(data !== undefined){
        dispatch(setWeekData(data))
        return (
        <div className="overflow-x-auto w-full">
            {weekArr.result &&
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Away</th>
                            <th></th>
                            <th>Home</th>
                            <th>More</th>
                            <th>
                                <Select thisWeek={thisWeek} onChange={changeWeek} num={16}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {games.map((g:Game,i:number) => {
                            return <Entry key={i+1} game={g}/>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Away</th>
                            <th></th>
                            <th>Home</th>
                            <th>More</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            }
            {!weekArr.result &&

                <RadialProgress />
            }
        </div>
    )}
}

export default TableWithVisuals
