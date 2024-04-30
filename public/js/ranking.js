$(document).ready(function() {
    $(".selectable .buttonSelector:first").click();
    fetchTeam();
    });
$(document).ready(function() {
    $('#btnTeam').click(function(){
        fetchTeam();
    });
});
async function fetchTeam() {
    try {
        // let match_id = $('div[data-id]').data('id');
        // // console.log('MatchId:', match_id);
        let formData = new FormData();
        formData.append('type','1');
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
        let resHtml1 = '';
                resHtml1 += `
                <div id="com" class="tabcontent" style="display: block;">
                    <div class="" style="padding:10px">
                    <div class="rank-grid" style="height:508px;overflow:auto">
                    <div class="grid-rank" style="">
                        <h2 class="bg-row-tr" style="padding:10px;margin-bottom:0px">ODI Ranking</h2>
                        <table style="width:100%;background:#fff">
                        <tbody>
                        <tr style="background:#f5f5f5;color:#4539ff">
                            <th>Rank</th>
                            <th style="text-align:left">Team</th>
                            <th>Rating</th>
                            <th>Points</th>
                        </tr>`
                        let resHtml2 ='';
                        for (let i = 0; i < data.data.length; i++) {
                        resHtml2 +=
                            `<tr style="text-align:center;font-size:14px">
                            <td style="color:#000;">${data.data[i].rank}</td>
                            <td style="text-align:left">${data.data[i].team}</td>
                            <td>${data.data[i].rating}</td>
                            <td>${data.data[i].point}</td>
                        </tr>
                        `}`
                    </tbody>
                </table>
                </div>
                </div>
                </div>
                </div>`;
        $('#btnData').html(resHtml1 + resHtml2 );
        } catch (error) {
        console.error('Error fetching API data:', error);
        $('#btnData').html('<p>Error fetching API data</p>');
        }
    }
