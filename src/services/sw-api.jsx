export async function getAllStarships() {
    try {
        const response = await fetch('https://swapi.dev/api/starships/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching starships:", error);
        return []; 
    }
}