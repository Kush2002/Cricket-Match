$(document).ready(function() {
    $(".selectable .buttonSelector:first").click();
    fetchTeam();
    });
$(document).ready(function() {
    $('#btnTeam').click(function(){
        fetchTeam();
    });
});
async function fetchSummary() {
    try {
        // let match_id = $('div[data-id]').data('id');
        // // console.log('MatchId:', match_id);
        let formData = new FormData();
        // formData.append('match_id', match_id);
        let apiUrl = `http://apicricketchampion.in/apiv4/teamRanking/b39d003a77b86b49021b8ba8861bab7c`;
        let response = await fetch(apiUrl, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        console.log('API Response:', data);
        let resHtml = '';
                resHtml += `<span> done</span>`;
        $('#btnData').html(resHtml);
        } catch (error) {
        console.error('Error fetching API data:', error);
        $('#btnData').html('<p>Error fetching API data</p>');
        }
    }
