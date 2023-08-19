import  { useEffect, useState} from 'react'
import Select from '../components/Select'
import RadialProgress from '../components/RadialProgress'
import Entry from './Entry'
import { useGetWeekQuery } from '../slices/apiSlice'
import { useDispatch } from 'react-redux'
import { setWeekData } from '../slices/weekSlice'
import { setWeekNum } from '../slices/weekNumSlice'


const TableWithVisuals = ({weekNum}:{weekNum:number}) => {
    const dispatch = useDispatch();
    const [localWeekNum, setLocalWeekNum] = useState(weekNum)
    const { data, isError, isLoading} = useGetWeekQuery(localWeekNum)

    useEffect(()=>{
        if(!isLoading&&!isError){
            console.log(data)
            dispatch(setWeekData(data))
        }
    },[ data,dispatch,isLoading,isError,localWeekNum])

    const changeWeek = (num:number) => {
        setLocalWeekNum(num)
        dispatch(setWeekNum(num))
    }
        return (
        <>    
            
        <div className="overflow-x-auto w-full">
            {data &&
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
                                <Select thisWeek={weekNum} onChange={changeWeek} num={16}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.Games.map((g:Game,i:number) => {
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
            {!data &&

                <RadialProgress />
            }
        </div>
        </>
    )
}

export default TableWithVisuals
