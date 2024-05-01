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

$(document).ready(function() {
    $('#btnOdi').click(function(){
        fetchOdi();
    });
});

$(document).ready(function() {
    $('#btnT20').click(function(){
        fetchT20();
    });
});

$(document).ready(function() {
    $('#btnWodi').click(function(){
        fetchWodi();
    });
});

$(document).ready(function() {
    $('#btnWt20').click(function(){
        fetchWt20();
    });
});

async function fetchTeam() {
    try {
        const types = ['1', '2', '3'];
        for (const type of types) {
            let formData = new FormData();
            formData.append('type', type);
            let apiUrl = `http://apicricketchampion.in/apiv4/teamRanking/b39d003a77b86b49021b8ba8861bab7c`;
            let response = await fetch(apiUrl, {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                throw new Error(`Network response was not ok for type ${type}`);
            }
            let data = await response.json();
            let resHtml = generateTeamHTML(data);
            $(`#btnData${type}`).html(resHtml);
        }
    } catch (error) {
        console.error('Error fetching API data:', error);
        $('#btnData1').html('<p>Error fetching API data</p>');
    }
}
function generateTeamHTML(data) {
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
        for (let i = 0; i < Math.min(data.data.length, 10); i++) {
        html += `
        <tr style="text-align:center;font-size:14px">
            <td style="color:#000;">${data.data[i].rank}</td>
            <td style="text-align:left">${data.data[i].team}</td>
            <td>${data.data[i].rating}</td>
            <td>${data.data[i].point}</td>
        </tr>`;
        };
    html += `
                </tbody>
            </table>`;
    return html;
}

async function fetchTest() {
    try {
        const types = ['1', '2', '3'];
        for (const type of types) {
            let formData = new FormData();
            formData.append('type', type);
            let apiUrl = 'http://apicricketchampion.in/apiv4/playerRanking/b39d003a77b86b49021b8ba8861bab7c';
            let response = await fetch(apiUrl, {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                throw new Error(`Network response was not ok for type ${type}`);
            }
            let data = await response.json();
            let resHtml = generateTestHTML(data);
            $(`#btnData${type}`).html(resHtml);
        }
    } catch (error) {
        console.error('Error fetching API data:', error);
        $('#btnData1').html('<p>Error fetching API data</p>');
    }
}
function generateTestHTML(data) {
    let html = `
    <div class='table-radius' style="background-color:#C500E1;">
        <span class='text-white h3' style="margin-left:9px">${data.type.split(' ')[1]}</span>
    </div>
    <table  class='table mb-5 table-radius'>
    <tbody>
        <tr style="text-align:center">
            <th>Rank</th>
            <th>Player</th>
            <th>Country</th>
            <th>Points</th>
        </tr>`;
        for (let i = 0; i < Math.min(data.data.length, 10); i++) {
        html += `
        <tr style="text-align:center;font-size:14px">
            <td style="color:#000;">${data.data[i].rank}</td>
            <td style="text-align:left">${data.data[i].name}</td>
            <td>${data.data[i].country}</td>
            <td>${data.data[i].rating}</td>
        </tr>`;
        };
    html += `
                </tbody>
            </table>`;
    return html;
}

async function fetchOdi() {
    try {
        const types = ['4', '5', '6'];
        let i = 1;
        for (const type of types) {
            let formData = new FormData();
            formData.append('type', type);
            let apiUrl = 'http://apicricketchampion.in/apiv4/playerRanking/b39d003a77b86b49021b8ba8861bab7c';
            let response = await fetch(apiUrl, {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                throw new Error(`Network response was not ok for type ${type}`);
            }
            let data = await response.json();
            console.log(data);
            let resHtml = generateOdiHTML(data);
            $(`#btnData${i}`).html(resHtml);
            i++;
        }
    } catch (error) {
        console.error('Error fetching API data:', error);
        $('#btnData1').html('<p>Error fetching API data</p>');
    }
}
function generateOdiHTML(data) {
    let html = `
    <div class='table-radius' style="background-color:#C500E1;">
        <span class='text-white h3' style="margin-left:9px">${data.type.split(' ')[1]}</span>
    </div>
    <table  class='table mb-5 table-radius'>
    <tbody>
        <tr style="text-align:center">
            <th>Rank</th>
            <th>Player</th>
            <th>Country</th>
            <th>Points</th>
        </tr>`;
        for (let i = 0; i < Math.min(data.data.length, 10); i++) {
        html += `
        <tr style="text-align:center;font-size:14px">
            <td style="color:#000;">${data.data[i].rank}</td>
            <td style="text-align:left">${data.data[i].name}</td>
            <td>${data.data[i].country}</td>
            <td>${data.data[i].rating}</td>
        </tr>`;
        }
        html += `
                </tbody>
            </table>`;
    return html;
}

async function fetchT20() {
    try {
        const types = ['7', '8', '9'];
        let i = 1;
        for (const type of types) {
            let formData = new FormData();
            formData.append('type', type);
            let apiUrl = 'http://apicricketchampion.in/apiv4/playerRanking/b39d003a77b86b49021b8ba8861bab7c';
            let response = await fetch(apiUrl, {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                throw new Error(`Network response was not ok for type ${type}`);
            }
            let data = await response.json();
            // console.log(data);
            let resHtml = generateT20HTML(data);
            $(`#btnData${i}`).html(resHtml);
            i++;
        }
    } catch (error) {
        console.error('Error fetching API data:', error);
        $('#btnData1').html('<p>Error fetching API data</p>');
    }
}
function generateT20HTML(data) {
    let html = `
    <div class='table-radius' style="background-color:#C500E1;">
        <span class='text-white h3' style="margin-left:9px">${data.type.split(' ')[1]}</span>
    </div>
    <table  class='table mb-5 table-radius'>
    <tbody>
        <tr style="text-align:center">
            <th>Rank</th>
            <th>Player</th>
            <th>Country</th>
            <th>Points</th>
        </tr>`;
        for (let i = 0; i < Math.min(data.data.length, 10); i++) {
        html += `
        <tr style="text-align:center;font-size:14px">
            <td style="color:#000;">${data.data[i].rank}</td>
            <td style="text-align:left">${data.data[i].name}</td>
            <td>${data.data[i].country}</td>
            <td>${data.data[i].rating}</td>
        </tr>`;
        }
        html += `
                </tbody>
            </table>`;
    return html;
}

async function fetchWodi() {
    try {
        const types = ['10', '11', '12'];
        let i = 1;
        for (const type of types) {
            let formData = new FormData();
            formData.append('type', type);
            let apiUrl = 'http://apicricketchampion.in/apiv4/playerRanking/b39d003a77b86b49021b8ba8861bab7c';
            let response = await fetch(apiUrl, {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                throw new Error(`Network response was not ok for type ${type}`);
            }
            let data = await response.json();
            // console.log(data);
            let resHtml = generateWodiHTML(data);
            $(`#btnData${i}`).html(resHtml);
            i++;
        }
    } catch (error) {
        console.error('Error fetching API data:', error);
        $('#btnData1').html('<p>Error fetching API data</p>');
    }
}
function generateWodiHTML(data) {
    let html = `
    <div class='table-radius' style="background-color:#C500E1;">
        <span class='text-white h3' style="margin-left:9px">${data.type.split(' ')[2]}</span>
    </div>
    <table  class='table mb-5 table-radius'>
    <tbody>
        <tr style="text-align:center">
            <th>Rank</th>
            <th>Player</th>
            <th>Country</th>
            <th>Points</th>
        </tr>`;
        for (let i = 0; i < Math.min(data.data.length, 10); i++) {
        html += `
        <tr style="text-align:center;font-size:14px">
            <td style="color:#000;">${data.data[i].rank}</td>
            <td style="text-align:left">${data.data[i].name}</td>
            <td>${data.data[i].country}</td>
            <td>${data.data[i].rating}</td>
        </tr>`;
        }
        html += `
                </tbody>
            </table>`;
    return html;
}

async function fetchWt20() {
    try {
        const types = ['13', '14', '15'];
        let i = 1;
        for (const type of types) {
            let formData = new FormData();
            formData.append('type', type);
            let apiUrl = 'http://apicricketchampion.in/apiv4/playerRanking/b39d003a77b86b49021b8ba8861bab7c';
            let response = await fetch(apiUrl, {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                throw new Error(`Network response was not ok for type ${type}`);
            }
            let data = await response.json();
            // console.log(data);
            let resHtml = generateWt20HTML(data);
            $(`#btnData${i}`).html(resHtml);
            i++;
        }
    } catch (error) {
        console.error('Error fetching API data:', error);
        $('#btnData1').html('<p>Error fetching API data</p>');
    }
}
function generateWt20HTML(data) {
    let html = `
    <div class='table-radius' style="background-color:#C500E1;">
        <span class='text-white h3' style="margin-left:9px">${data.type.split(' ')[2]}</span>
    </div>
    <table  class='table mb-5 table-radius'>
    <tbody>
        <tr style="text-align:center">
            <th>Rank</th>
            <th>Player</th>
            <th>Country</th>
            <th>Points</th>
        </tr>`;
        for (let i = 0; i < Math.min(data.data.length, 10); i++) {
        html += `
        <tr style="text-align:center;font-size:14px">
            <td style="color:#000;">${data.data[i].rank}</td>
            <td style="text-align:left">${data.data[i].name}</td>
            <td>${data.data[i].country}</td>
            <td>${data.data[i].rating}</td>
        </tr>`;
        }
        html += `
                </tbody>
            </table>`;
    return html;
}