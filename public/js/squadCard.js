$(document).ready(function() {
$(".selectable .buttonSelector:first").click();
    fetchSummary();
});
$(document).ready(function() {
    $('#btnSummary').click(function(){
        fetchSummary();
    });
});
$(document).ready(function() {
    $('#btnSquad').click(function(){
        fetchSquad();
    });
});
async function fetchSummary() {
    try {
        let match_id = $('div[data-id]').data('id');
        // console.log('MatchId:', match_id);
        let formData = new FormData();
        formData.append('match_id', match_id);
        let apiUrl = `http://apicricketchampion.in/apiv4/matchInfo/b39d003a77b86b49021b8ba8861bab7c`;
        let response = await fetch(apiUrl, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        // console.log('API Response:', data);
        let resHtml = '';
        let resHtml2 = '';
                resHtml += `
                    <div class='row'>
                        <div class='col-12 text-white' style='background-color:#3B0344;font-size:25px;border-top-left-radius:10px;border-top-right-radius:10px;' >
                            <p>${data.data.series}</p>
                        </div>
                        <div class='col-4 text-black d-flex justify-content-start'>
                            <div class='p-2 bd-highlight'>
                                <img src="${data.data.team_a_img}" style="height:50px; width:50px;" alt="Team A Image">
                                <span style='color:#3B0344;'><b>${data.data.team_a}</b></span>
                            </div>
                        </div>
                        <div class='col-4 text-black d-flex justify-content-center'>
                            <div class='p-2 bd-highlight'>
                                <img src="/img/vsScore.png" class="rounded-circle" style="height:50px; width:50px;" alt="Team A Image">
                            </div>
                        </div>
                        <div class='col-4 text-black d-flex justify-content-end'>
                            <div class="p-2 bd-highlight">
                            <span style='color:#3B0344;'><b>${data.data.team_b}</b></span>
                                <img src="${data.data.team_b_img}" style="height:50px; width:50px;" alt="Team A Image">
                            </div>
                        </div>
                    </div>
                    <hr>`
                    resHtml2 += `<div class='row text-black'>
                        <div class='col-3'>
                        <b>Match</b>
                        </div>
                        <div class='col-9'>
                            ${data.data.team_a} &nbsp; <b>V/S</b> &nbsp; 
                            ${data.data.team_b} &nbsp;&nbsp; ${data.data.matchs}
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-3'>
                            <b>Date</b>
                        </div>
                        <div class='col-9'>
                            ${data.data.match_date} &nbsp;
                            ${data.data.match_time}
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-3'>
                            <b>Venue</b>
                        </div>
                        <div class='col-9'>
                            ${data.data.venue}
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-3'>
                            <b>Toss</b>
                        </div>
                        <div class='col-9'>
                            ${data.data.toss}
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-3'>
                            <b>Match Referee</b>
                        </div>
                        <div class='col-9'>
                            ${data.data.referee}
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-3'>
                            <b>Umpire</b>
                        </div>
                        <div class='col-9'>
                            ${data.data.umpire}
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-3'>
                            <b>Third Umpire</b>
                        </div>
                        <div class='col-9'>
                            ${data.data.third_umpire}
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-3'>
                            <b>Toss Comparison</b>
                        </div>
                        <div class='col-9'>
                            ${data.data.team_a_short} (
                            ${generateTossComparisonHtml(data.data.toss_comparison.team_a)} /
                            ${data.data.team_b_short} ( 
                            ${generateTossComparisonHtml(data.data.toss_comparison.team_b)}
                        )
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-3'>
                            <b>Head to Head</b>
                        </div>
                        <div class='col-9'>
                            ${data.data.team_a_short} ( ${data.data.head_to_head.team_a_win_count} ) / 
                            ${data.data.team_b_short} ( ${data.data.head_to_head.team_b_win_count} )
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-3'>
                            <b>Toss Comparison</b>
                        </div>
                        <div class='col-9'>
                            ${data.data.team_a_short} (
                            ${generateTossComparisonHtml(data.data.forms.team_a)} /
                            ${data.data.team_b_short} ( 
                            ${generateTossComparisonHtml(data.data.forms.team_b)}
                        )
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-12'>
                            <span class='text-uppercase' style="color: #3B0344;"><b>Pace and Spin Data</b></span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Total matches</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.pace_spin.total_matches}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Win bat first</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.pace_spin.win_bat_first}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Win bowl first</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.pace_spin.win_bowl_first}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Pace wkt</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.pace_spin.pace_wkt}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Spin wkt</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.pace_spin.spin_wkt}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Pace percent</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.pace_spin.pace_percent}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Spin percent</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.pace_spin.spin_percent}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-12'>
                            <span class='text-uppercase' style="color: #3B0344;"><b>Venue Weather</b></span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Temp c</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.venue_weather.temp_c}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Temp f</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.venue_weather.temp_f}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Weather</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.venue_weather.weather}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Weather icon</b>
                        </div>
                        <div class='col-4'>
                        <img src="${data.data.venue_weather.weather_icon}" style="height:50px; width:50px;" alt="Team A Image">
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Wind mph</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.venue_weather.wind_mph}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Wind kph</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.venue_weather.wind_kph}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Wind dir</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.venue_weather.wind_dir}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Humidity</b>
                        </div>
                        <div class='col-4'>
                            <span>${data.data.venue_weather.humidity}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Cloud</b>
                        </div>
                    <div class='col-4'>
                        <span>${data.data.venue_weather.cloud}</span>
                    </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-12'>
                            <span class='text-uppercase' style="color: #3B0344;"><b>Team Comparison</b></span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Team B low score</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.team_comparison.team_b_low_score}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Team B high score</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.team_comparison.team_b_high_score}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Team B avg score</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.team_comparison.team_b_avg_score}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Team B win</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.team_comparison.team_b_win}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Team A low score</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.team_comparison.team_a_low_score}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Team A high score</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.team_comparison.team_a_high_score}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Team A avg score</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.team_comparison.team_a_avg_score}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                        <div class='col-8'>
                            <b>Team A win</b>
                        </div>
                        <div class='col-4'>
                        <span>${data.data.team_comparison.team_a_win}</span>
                        </div>
                    </div>
                    <hr>
                    <div class='row text-black'>
                    <div class='col-12'>
                        <span class='d-flex justify-content-center'>* * * * *</span>
                    </div>
                </div>`;
        $('#matchData1').html(resHtml);
        $('#matchData2').html(resHtml2);
        } catch (error) {
        console.error('Error fetching API data:', error);
        $('#matchData1').html('<p>Error fetching API data</p>');
        $('#matchData2').html('<p>Error fetching API data</p>');
        }
    }
    function generateTossComparisonHtml(tossResults) {
    let html = '';
    tossResults.forEach(result => {
        if (result === 'W') {
            html += `<span style="background-color: green; color: #fff; padding: 3px 12px; margin-right: 2px; border-radius: 4px;">${result}</span>`;
        } else if (result === 'L') {
            html += `<span style="background-color: red; color: #fff; padding: 3px 12px; margin-right: 2px; border-radius: 4px;">${result}</span>`;
        }
    });
    return html;
}

async function fetchSquad() {
    try {
        let match_id = $('div[data-id]').data('id');
        // console.log('MatchId:', match_id);
        let formData = new FormData();
        formData.append('match_id', match_id);
        let apiUrl = `http://apicricketchampion.in/apiv4/squadsByMatchId/b39d003a77b86b49021b8ba8861bab7c`;
        let response = await fetch(apiUrl, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        // console.log('Click API Response:', data); 
        let teamASquad = data.data.team_a.player;
        let teamBSquad = data.data.team_b.player;
        // console.log(teamASquad);
        // console.log(teamBSquad);
        let teamA = '';
            teamA += `
                <div class="row">
                    <div class="card1 col-lg-6 col-md-12 col-sm-12" style="margin-left:0px;padding:0px 5px">
                        <div class="card-new-data" style="box-shadow: 0px 0px 30px;border-radius:10px;padding:0px 0px">
                        <div class="card-body" style="padding:0rem 0rem;gap:0px !important">
                        <div style="justify-content: start;display: flex;align-items: center;padding:5px 10px;background:#3B0344">
                            <span style="font-size: 20px;color:#ffff;"> &nbsp; &nbsp;  ${data.data.team_a.name} Squad</span>
                        </div>
                        <div>
                        <table>
                            <tbody>
                                <tr class="bg-row-tr" style="background:#f5f5f5;color:#3B0344">
                                    <th style="width:20%"></th>
                                    <th style="width:50%">Player Name</th>
                                    <th style="width:30%">Position</th>
                                </tr>`;

                    if (Array.isArray(teamASquad) && teamASquad.length > 0) {
                        teamASquad.forEach(player => {
                            teamA += `
                                <tr data-id=''>
                                    <td><img src="${player.image}" style="width: 40px; height:40px;border-radius: 100%;"></td>
                                    <td><a href="/player_profile?player=${player.player_id}" style="text-decoration: none; color: #3B0344; font-size: 14px">${player.name}</a></td>
                                    <td style="font-size:14px;" class='text-black'>${player.play_role}</td>
                                </tr>`;
                        });
                    }
                    teamA += `
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>`;
    let teamB = '';
        teamB += `
            <div class="card1 col-lg-6 col-md-12 col-sm-12" style="margin-left:0px;padding:0px 5px">
                <div class="card-new-data" style="box-shadow: 0px 0px 30px;border-radius:10px;padding:0px 0px">
                    <div class="card-body" style="padding:0rem 0rem;gap:0px !important">
                    <div style="justify-content: start;display: flex;align-items: center;padding:5px 10px;background:#3B0344">
                        <span style="font-size: 20px;color:#ffff;"> &nbsp; &nbsp;  ${data.data.team_b.name} Squad</span>
                    </div>
                    <div>
                    <table>
                        <tbody>
                            <tr class="bg-row-tr" style="background:#f5f5f5;color:#3B0344">
                                <th style="width:20%"></th>
                                <th style="width:50%">Player Name</th>
                                <th style="width:30%">Position</th>
                            </tr>`;
        if (Array.isArray(teamBSquad) && teamBSquad.length > 0) {
            teamBSquad.forEach(player => {
                teamB += `
                    <tr>
                        <td><img src="${player.image}" style="width: 40px; height:40px;border-radius: 100%;"></td>
                        <td><a href="/player_profile?player=${player.player_id}" style="text-decoration: none; color: #3B0344; font-size: 14px">${player.name}</a></td>
                        <td style="font-size:14px;" class='text-black'>${player.play_role}</td>
                    </tr>`;
                });
        }
        teamB += `
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>`;
        $('#matchData2').html(teamA + teamB);
            // console.log(resHtml);
            } catch (error) {
            console.error('Error fetching API data:', error);
    }
}
