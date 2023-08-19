import { weekApi } from "../slices/apiSlice";
import { getTeamAbbreviation } from "../services/teamAbbreviation";
import { useState } from "react";

interface entryProps {
    game: Game;
}
interface teamData {
    score: string,
    class: string,
}



const Entry = ({game}:entryProps) => {
    const [md, setMd] = useState(window.matchMedia("(min-width:768)").matches)
    const [prediction, setPrediction] = useState('');
    const [inputAway, setInputAway] = useState('');
    const [inputHome, setInputHome] = useState('');
    const [awayPrediction, setAwayPrediction] = useState(prediction.awayPrediction);
    const [homePrediction, setHomePrediction] = useState(prediction.homePrediction);



    const home:teamData = {
        score: '',
        class: '',
    }
    const away:teamData = {
        score: '',
        class: '',
    }

    let happened = game.result || false

    if(game.result){
        let scores = game.result.split(' ')
        console.log(scores)


        const getAwayInitials = (input:string) =>{
            if(getTeamAbbreviation(input)==='N/A'){
                const trimmedAway = game.Away.split(' ').filter(x=> x!==''&&x!=='\n').filter((x,i)=>i!==0).join(' ');
                return getTeamAbbreviation(trimmedAway);
            } else return getTeamAbbreviation(input)
        }
        const awayInitials = getAwayInitials(game.Away)
        console.log(awayInitials)

        if(awayInitials===scores[0]){
            home.score = scores[4]
            home.class = 'text-green-600'
            away.score = scores[1];
            away.class = 'text-red-600'
        }
        else {
            away.score = scores[4]
            away.class = 'text-green-600'
            home.score = scores[1];
            home.class = 'text-red-600'
        }
    } 
    function getStadium () {
        if(game.Buy_Tickets){
            return game.Venue
        } else{
            return game.TV
        }
    }

    const showGuessInput = () => {
        console.log('stuff')
    }


    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={game.AwayLogo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{game.Away}</div>
                        <div className="text-sm opacity-50">{away.score}</div>
                    </div>
                </div>
            </td>
            {!happened &&
                <td>
                    <div className="font-bold">{game.Time}</div>
                    <div className="text-sm opacity-50">{game.TV.length>4 ? 'CBS' : game.TV}</div>
                </td>
            }
            {happened &&
                <td>
                    <div className=''>
                        <div className="font-bold flex flex-row">
                            <div className={`basis-1/3 ${away.class}`}>
                                {away.score} 
                            </div>
                            <div className='basis-1/3'>
                            </div>
                            <div className={`basis-1/3 ${home.class}`}>
                                {home.score} 
                            </div>
                        </div>
                    </div>
                </td>
            }
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={game.HomeLogo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{game.Home}</div>
                        <div className="text-sm opacity-50">{home.score}</div>
                    </div>
                </div>
            </td>
            <td>
                {!happened && 
                    <div>{getStadium()}</div>
                }
                {happened && 
                    <a className='btn btn-ghost btn-xs' href={game.gameInfo} target='_blank' rel='noreferrer'>Game Info</a>
                }
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    )
}

export default Entry
