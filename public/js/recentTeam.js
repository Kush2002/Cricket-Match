function redirectToMatch(match_id) {
    const pageUrl = `/score_match/?matchId=${match_id}`;
    // console.log(pageUrl);
    window.location.href = pageUrl;
}
async function fetchMatchData(){
    try {
        let series_id = $("#seriesId").val();
        // console.log('Series ID:', series_id);
        let formData = new FormData();
        formData.append('series_id', series_id);
        let apiUrl = `http://apicricketchampion.in/apiv4/recentMatchesBySeriesId/b39d003a77b86b49021b8ba8861bab7c`;
        let response = await fetch(apiUrl, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // console.log(response);
        let data = await response.json();
        let responseHtml = '';
        for (let i = 0; i < data.data.length; i++) {    
            responseHtml += `
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="card text-white cardView" onclick="redirectToMatch('${data.data[i].match_id}')">
                        <div class="row" >
                            <div class="card-title col-12" style="background-color:#C500E1; font-weight:bold;color:white;display:flex;"
                            id='${data.data[i].match_id ? data.data[i].match_id : ''}'>
                                ${data.data[i].series ? data.data[i].series : ''}
                            </div>
                        </div>
                        <div class="row">
                            <div class="card-title col-12" style="font-size: 10px;">
                                Venue:${data.data[i].venue ? data.data[i].venue : ''}
                            </div>
                        </div>
                        <div class="row">
                            <div class="card-title col-8" style="font-size: 15px;">
                                ${data.data[i].match_date} ${data.data[i].match_time}
                            </div>
                            <div class="card-title col-4 text-right" style="font-size: 15px;">
                                ${data.data[i].matchs ? data.data[i].matchs : ''}
                            </div>
                        </div>
                        <div class="row">
                            <div class="card-title col-4">
                                ${data.data[i].team_a_img ? `<img src="${data.data[i].team_a_img}" class="img-icon" alt="Team A Image">` : ''}
                                ${data.data[i].team_a_short ? data.data[i].team_a_short : ''}
                            </div>
                            <div class="card-title col-4" style='align:center'>
                                <img src="/img/vs.png" style="height:30px;display:flex;margin:auto" alt="VS Image">
                            </div>
                            <div class="card-title col-4">
                                ${data.data[i].team_b_short ? data.data[i].team_b_short : ''}
                                ${data.data[i].team_b_img ? `<img src="${data.data[i].team_b_img}" class="img-icon" alt="Team B Image">` : ''}
                                </div>
                        </div>
                        <div class="row">
                            <div class="card-title col-6" style="font-size: 15px;">
                                ${data.data[i].team_a_scores ? data.data[i].team_a_scores : ''}
                                &nbsp;&nbsp;
                                ${data.data[i].team_a_scores ? data.data[i].team_a_over : ''}
                            </div>

                            <div class="card-title col-6" style="font-size: 15px; text-align:right;">
                                ${data.data[i].team_b_scores ? data.data[i].team_b_scores : ''}
                                &nbsp;&nbsp;
                                ${data.data[i].team_b_over ? data.data[i].team_b_over : ''}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-center" >
                                ${data.data[i].result ? `<button class='card-text' style="background-color: #C500E1; border: #C500E1 solid 1px; color: white;">
                                ${data.data[i].result}</button>` : ''}
                            </div>
                        </div>
                    </div>
                </div>`;
        }
        $('#matchData').html(responseHtml);
    } catch (error) {
        console.error('Error fetching API data:', error);
        $('#matchData').html('<p>Error fetching API data</p>');
    }
}
fetchMatchData(seriesId);
$(document).ready(async function() {
$("#seriesId").change(async function() {
        fetchMatchData(seriesId);
});
});

