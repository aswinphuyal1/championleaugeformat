/*const leagueData = {
    premierLeague: [
        "Manchester City", "Arsenal", "Manchester United", 
        "Liverpool", "Chelsea", "Tottenham Hotspur", 
        "Newcastle United", "Brighton"
    ],
    bundesliga: [
        "Bayern Munich", "Borussia Dortmund", "RB Leipzig", 
        "Union Berlin", "Freiburg", "Bayer Leverkusen", 
        "Eintracht Frankfurt", "Wolfsburg"
    ],
    laLiga: [
        "Real Madrid", "Barcelona", "Atletico Madrid", 
        "Real Sociedad", "Sevilla", "Villarreal", 
        "Real Betis", "Athletic Bilbao"
    ],
    serieA: [
        "Napoli", "Inter Milan", "AC Milan", 
        "Juventus", "Roma", "Atalanta", 
        "Lazio", "Torino"
    ],
    ligue1: [
        "Paris Saint-Germain", "Marseille", "Monaco", 
        "Lens", "Lille", "Rennes", 
        "Lyon", "Nice"
    ],
    ligaPortugal: [
        "Benfica", "Porto", "Sporting CP", 
        "Braga", "Vitória SC", "Boavista", 
        "Famalicão", "Casa Pia" 
    ]
};

// Populate Club 1 dropdown with clubs from all leagues
// Populate Club 1 dropdown with clubs from all leagues
const club1Select = document.getElementById("club1");

// Flatten all clubs from leagueData into a single array
const allClubs = Object.values(leagueData).flat();

allClubs.forEach(club => {
    const option = document.createElement("option");
    option.value = club;
    option.textContent = club;
    club1Select.appendChild(option); // Add the club as an option in the dropdown
});

/*
const club1Select = document.getElementById("club1");
const generateBtn = document.getElementById("generateBtn");
const matchList = document.getElementById("matchList");

// Combine all clubs into one array and populate the dropdown
const allClubs = Object.values(leagueData).flat();
allClubs.forEach(club => {
    const option = document.createElement("option");
    option.value = club;
    option.textContent = club;
    club1Select.appendChild(option);
});

// Enable "Generate Matches" button when a club is selected
club1Select.addEventListener("change", () => {
    generateBtn.disabled = false;
});

// Generate 8 random matches
generateBtn.addEventListener("click", () => {
    const selectedClub = club1Select.value;
    const matches = [];
    const leagues = Object.keys(leagueData);
    const selectedClubLeague = leagues.find(league => leagueData[league].includes(selectedClub));
    
    // Ensure matches are only against clubs from other leagues
    const otherLeagues = leagues.filter(league => league !== selectedClubLeague);
    const allOtherClubs = otherLeagues.flatMap(league => leagueData[league]);

    // Shuffle clubs and pick 8 unique opponents
    const shuffledClubs = allOtherClubs.sort(() => Math.random() - 0.5);
    const opponents = shuffledClubs.slice(0, 8);

    // Assign first 4 as Home and next 4 as Away
    opponents.forEach((opponent, index) => {
        matches.push({
            type: index < 4 ? "Home" : "Away",
            opponent: opponent
        });
    });

    // Display matches
    matchList.innerHTML = ""; // Clear previous matches
    matches.forEach((match, index) => {
        const matchDiv = document.createElement("div");
        matchDiv.classList.add("match");
        matchDiv.textContent = `Match ${index + 1} (${match.type}): ${selectedClub} vs ${match.opponent}`;
        matchList.appendChild(matchDiv);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Your club population code here
});
*/
document.addEventListener("DOMContentLoaded", () => {
    const leagueData = {
        premierLeague: [
            "Manchester City", "Arsenal", "Manchester United", 
            "Liverpool", "Chelsea", "Tottenham Hotspur", 
            "Newcastle United", "Brighton"
        ],
        bundesliga: [
            "Bayern Munich", "Borussia Dortmund", "RB Leipzig", 
            "Union Berlin", "Freiburg", "Bayer Leverkusen", 
            "Eintracht Frankfurt", "Wolfsburg"
        ],
        laLiga: [
            "Real Madrid", "Barcelona", "Atletico Madrid", 
            "Real Sociedad", "Sevilla", "Villarreal", 
            "Real Betis", "Athletic Bilbao"
        ],
        serieA: [
            "Napoli", "Inter Milan", "AC Milan", 
            "Juventus", "Roma", "Atalanta", 
            "Lazio", "Torino"
        ],
        ligue1: [
            "Paris Saint-Germain", "Marseille", "Monaco", 
            "Lens", "Lille", "Rennes", 
            "Lyon", "Nice"
        ],
        ligaPortugal: [
            "Benfica", "Porto", "Sporting CP", 
            "Braga", "Vitória SC", "Boavista", 
            "Famalicão", "Casa Pia" 
        ]
    };

    // Populate Club 1 dropdown with clubs from all leagues
    const club1Select = document.getElementById("club1");
    const generateBtn = document.getElementById("generateBtn");
    const matchList = document.getElementById("matchList");

    // Flatten all clubs from leagueData into a single array
    const allClubs = Object.values(leagueData).flat();

    allClubs.forEach(club => {
        const option = document.createElement("option");
        option.value = club;
        option.textContent = club;
        club1Select.appendChild(option); // Add the club as an option in the dropdown
    });

    // Enable "Generate Matches" button when a club is selected
    club1Select.addEventListener("change", () => {
        generateBtn.disabled = false;
    });

    // Generate 8 random matches
    generateBtn.addEventListener("click", () => {
        const selectedClub = club1Select.value;
        const matches = [];
        const leagues = Object.keys(leagueData);
        const selectedClubLeague = leagues.find(league => leagueData[league].includes(selectedClub));
        
        // Ensure matches are only against clubs from other leagues
        const otherLeagues = leagues.filter(league => league !== selectedClubLeague);
        const allOtherClubs = otherLeagues.flatMap(league => leagueData[league]);

        // Shuffle clubs and pick 8 unique opponents
        const shuffledClubs = allOtherClubs.sort(() => Math.random() - 0.5);
        const opponents = shuffledClubs.slice(0, 8);

        // Assign first 4 as Home and next 4 as Away
        opponents.forEach((opponent, index) => {
            matches.push({
                type: index < 4 ? "Home" : "Away",
                opponent: opponent
            });
        });

        // Display matches
        matchList.innerHTML = ""; // Clear previous matches
        matches.forEach((match, index) => {
            const matchDiv = document.createElement("div");
            matchDiv.classList.add("match");
            matchDiv.textContent = `Match ${index + 1} (${match.type}): ${selectedClub} vs ${match.opponent}`;
            matchList.appendChild(matchDiv);
        });
    });
});
