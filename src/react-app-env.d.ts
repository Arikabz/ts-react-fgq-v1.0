/// <reference types="react-scripts" />
interface Game {
    AwayLogo: string;
    Away: string;
    HomeLogo: string;
    Home: string;
    Time: string;
    TV: string;
    Venue: string;
    Buy_Tickets: string;
    result: string;
    gameInfo: string;
}
interface weekNum {
    w: number;
}
interface Week {
    id: string;
    Week: number;
    Games: Array<Game>;
    updatedAt: string;
}
