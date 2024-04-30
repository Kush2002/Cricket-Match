$(document).ready(function() {
    $(".selectable .buttonSelector:first").click();
    fetchTeam();
    });
$(document).ready(function() {
    $('#btnTeam').click(function(){
        fetchTeam();
    });
});
$(document).ready(function() {
    $('#btnTest').click(function(){
        fetchTest();
    });
});
async function fetchTeam() {
    try {
        let formData = new FormData();
        formData.append('type', '1');
        let apiUrl = `http://apicricketchampion.in/apiv4/teamRanking/b39d003a77b86b49021b8ba8861bab7c`;
        let response = await fetch(apiUrl, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        let resHtml1 = generateRankingHTML(data);
        $('#btnData1').html(resHtml1);

        // 2 Table
        let formData2 = new FormData();
        formData2.append('type', '2');
        let apiUrl2 = `http://apicricketchampion.in/apiv4/teamRanking/b39d003a77b86b49021b8ba8861bab7c`;
        let response2 = await fetch(apiUrl2, {
            method: 'POST',
            body: formData2
        });
        if (!response2.ok) {
            throw new Error('Network response was not ok');
        }
        let data2 = await response2.json();
        let resHtml2 = generateRankingHTML(data2);
        $('#btnData2').html(resHtml2);

        // 3 Table
        let formData3 = new FormData();
        formData3.append('type', '3');
        let apiUrl3 = `http://apicricketchampion.in/apiv4/teamRanking/b39d003a77b86b49021b8ba8861bab7c`;
        let response3 = await fetch(apiUrl3, {
            method: 'POST',
            body: formData3
        });
        if (!response3.ok) {
            throw new Error('Network response was not ok');
        }
        let data3 = await response3.json();
        let resHtml3 = generateRankingHTML(data3);
        $('#btnData3').html(resHtml3);
    } catch (error) {
        console.error('Error fetching API data:', error);
        $('#btnData1').html('<p>Error fetching API data</p>');
    }
}

function generateRankingHTML(data) {
    let html = `
    <div class='table-radius' style="background-color:#C500E1;">
        <span class='text-white h3' style="margin-left:9px">${data.type} Ranking</span>
    </div>
    <table  class='table mb-5 table-radius'>
    <tbody>
        <tr style="text-align:center">
            <th>Rank</th>
            <th>Team</th>
            <th>Rating</th>
            <th>Points</th>
        </tr>`;
    data.data.slice(0, 10).forEach(item => {
    html += `
        <tr style="text-align:center;font-size:14px">
            <td style="color:#000;">${item.rank}</td>
            <td style="text-align:left">${item.team}</td>
            <td>${item.rating}</td>
            <td>${item.point}</td>
        </tr>`;
    });
    html += `
                </tbody>
            </table>`;
    return html;
}
async function fetchTest() {
    try {
        let formData = new FormData();
        formData.append('type', '1');
        let apiUrl = `http://apicricketchampion.in/apiv4/playerRanking/b39d003a77b86b49021b8ba8861bab7c`;
        let response = await fetch(apiUrl, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        let resHtml1 = generateTestHTML(data);
        $('#btnData1').html(resHtml1);

        // 2 Table
        let formData2 = new FormData();
        formData2.append('type', '2');
        let apiUrl2 = `http://apicricketchampion.in/apiv4/playerRanking/b39d003a77b86b49021b8ba8861bab7c`;
        let response2 = await fetch(apiUrl2, {
            method: 'POST',
            body: formData2
        });
        if (!response2.ok) {
            throw new Error('Network response was not ok');
        }
        let data2 = await response2.json();
        let resHtml2 = generateTestHTML(data2);
        $('#btnData2').html(resHtml2);

        // 3 Table
        let formData3 = new FormData();
        formData3.append('type', '3');
        let apiUrl3 = `http://apicricketchampion.in/apiv4/playerRanking/b39d003a77b86b49021b8ba8861bab7c`;
        let response3 = await fetch(apiUrl3, {
            method: 'POST',
            body: formData3
        });
        if (!response3.ok) {
            throw new Error('Network response was not ok');
        }
        let data3 = await response3.json();
        let resHtml3 = generateTestHTML(data3);
        $('#btnData3').html(resHtml3);
    } catch (error) {
        console.error('Error fetching API data:', error);
        $('#btnData1').html('<p>Error fetching API data</p>');
    }
}

function generateRankingHTML(data) {
    let html = `
    <div class='table-radius' style="background-color:#C500E1;">
        <span class='text-white h3' style="margin-left:9px">${data.type} Ranking</span>
    </div>
    <table  class='table mb-5 table-radius'>
    <tbody>
        <tr style="text-align:center">
            <th>Rank</th>
            <th>Team</th>
            <th>Rating</th>
            <th>Points</th>
        </tr>`;
    data.data.slice(0, 10).forEach(item => {
    html += `
        <tr style="text-align:center;font-size:14px">
            <td style="color:#000;">${item.rank}</td>
            <td style="text-align:left">${item.team}</td>
            <td>${item.rating}</td>
            <td>${item.point}</td>
        </tr>`;
    });
    html += `
                </tbody>
            </table>`;
    return html;
}

function generateTestHTML(data) {
    let html = `
    <div class='table-radius' style="background-color:#C500E1;">
        <span class='text-white h3' style="margin-left:9px">${data.type} Ranking</span>
    </div>
    <table  class='table mb-5 table-radius'>
    <tbody>
        <tr style="text-align:center">
            <th>Rank</th>
            <th>Player</th>
            <th>Country</th>
            <th>Points</th>
        </tr>`;
    data.data.slice(0, 10).forEach(item => {
    html += `
        <tr style="text-align:center;font-size:14px">
            <td style="color:#000;">${item.rank}</td>
            <td style="text-align:left">${item.name}</td>
            <td>${item.country}</td>
            <td>${item.rating}</td>
        </tr>`;
    });
    html += `
                </tbody>
            </table>`;
    return html;
}
