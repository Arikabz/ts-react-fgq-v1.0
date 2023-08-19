export function getTeamAbbreviation(teamName: string): string {
    const teamAbbreviations: Record<string, string> = {
        'Arizona': 'ARI',
        'Atlanta': 'ATL',
        'Baltimore': 'BAL',
        'Buffalo': 'BUF',
        'Carolina': 'CAR',
        'Chicago': 'CHI',
        'Cincinnati': 'CIN',
        'Cleveland': 'CLE',
        'Dallas': 'DAL',
        'Denver': 'DEN',
        'Detroit': 'DET',
        'Green Bay': 'GB',
        'Houston': 'HOU',
        'Indianapolis': 'IND',
        'Jacksonville': 'JAX',
        'Kansas City': 'KC',
        'Las Vegas': 'LV',
        'Los Angeles Chargers': 'LAC',
        'Los Angeles Rams': 'LAR',
        'Miami': 'MIA',
        'Minnesota': 'MIN',
        'New England': 'NE',
        'New Orleans': 'NO',
        'N.Y. Giants': 'NYG',
        'N.Y. Jets': 'NYJ',
        'Philadelphia': 'PHI',
        'Pittsburgh': 'PIT',
        'San Francisco': 'SF',
        'Seattle': 'SEA',
        'Tampa Bay': 'TB',
        'Tennessee': 'TEN',
        'Washington': 'WAS',
    };

    const normalizedTeamName = teamName.trim(); // Remove leading/trailing spaces
    const abbreviation = teamAbbreviations[normalizedTeamName] || 'N/A';
    return abbreviation;
}
