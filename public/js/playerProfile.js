$(document).ready(function() {
    fetchPlayerData();
});

async function fetchPlayerData() {
    try {
        let player_id = $("#player_id").val();
        console.log('Player ID:', player_id);
        let formData = new FormData();
        formData.append('player_id', player_id);
        let apiUrl = `http://apicricketchampion.in/apiv4/playerInfo/b39d003a77b86b49021b8ba8861bab7c`;
        let response = await fetch(apiUrl, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        console.log(data);
        let responseHtml = `<span>done</span>`;
        $('#matchData').html(responseHtml);
    } catch (error) {
        console.error('Error fetching API data:', error);
        $('#matchData').html('<p>Error fetching API data</p>');
    }
}

