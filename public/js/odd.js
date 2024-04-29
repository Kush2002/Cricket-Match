$(document).ready(function() {
    $('#btnOdd').click(function(){
        fetchOdd();
    });
});

async function fetchOdd() {
    try {
        let match_id = $('div[data-id]').data('id');
        // console.log('MatchId:', match_id);
        let formData = new FormData();
        formData.append('match_id', match_id);
        let apiUrl = `http://apicricketchampion.in/apiv4/matchOddHistory/b39d003a77b86b49021b8ba8861bab7c`;
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
        for (let i = 0; i < data.data.length; i++) { 
        resHtml +=`
            <div class='row text-black'>
                <div class='col-2'>
                    <span class='fw-bold' id='${data.data[i].match_odd_id}'>${data.data[i].team}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>${data.data[i].time}</span>
                </div>
                <div class='col-2' style='text-align:right; margin-end:20px' >
                    <span style='margin-right:5px;'>${data.data[i].overs}</span>
                </div>
                <div class='col-3' style='text-align:center'>
                    <span style='text-align:center'>${data.data[i].min_rate}</span><hr>
                    <span style='text-align:center'>${data.data[i].max_rate}</span>
                </div>
                <div class='col-5' style='text-align:center'>
                    <span >Team Socre: ${data.data[i].score}</span>
                    <br> 
                    <span style="background-color:green;color:#fff;padding:3px 12px;font-size:13px">${data.data[i].s_max}</span>
                    <span style="background-color:red;color:#fff;padding:3px 12px;font-size:13px">${data.data[i].s_min}</span>
                </div>
                <hr>
            </div>`
        }
        $('#matchData2').html(resHtml);
    } catch (error) {
        console.error('Error fetching API data:', error);
    }
}