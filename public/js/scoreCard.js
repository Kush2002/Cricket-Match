$(document).ready(function() {
    $('#btnScoreCard').click(function(){
        fetchScoreCard();
    });
});
    async function fetchScoreCard() {
        try {
            let match_id = $('div[data-id]').data('id');
            // console.log('MatchId:', match_id);
            let formData = new FormData();
            formData.append('match_id', match_id);
            let apiUrl = `http://apicricketchampion.in/apiv4/scorecardByMatchId/b39d003a77b86b49021b8ba8861bab7c`;
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
            if (data.data && data.data.scorecard && data.data.scorecard["1"] && data.data.scorecard["1"].team) {
                resHtml +=`
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="card1 col-lg-12" style="margin-left:0px;padding:0px">
                            <div class="card-new-data" style="padding:0px;background:none">
                            <span class="team-name team">${data.data.scorecard["1"].team.name}</span> 
                        <div style="margin-top:15px">
                            <table class="font-xcore" style="background:#fff;box-shadow: 0px 0px 30px #0000001A;">
                            <tbody>
                                <tr class="row-tr team-name">
                                    <th style="width:30%">Batsman</th>
                                    <th style="width:50%"></th>
                                    <th style="text-align:center; width:5%">R</th>
                                    <th style="text-align:center; width:5%">B</th>
                                    <th style="text-align:center; width:5%">4s</th>
                                    <th style="text-align:center; width:5%">6s</th>
                                    <th style="text-align:center; width:5%;">SR</th>
                                </tr>`
                                if (data.data.scorecard["1"].batsman && data.data.scorecard["1"].batsman.length > 0) {
                                    data.data.scorecard["1"].batsman.forEach((batsman) => {
                                        resHtml += `
                                            <tr class='text-black line'>
                                                <td style="color:#000;font-weight:bold">
                                                    <a href="player_profile?player=${batsman.player_id}" style="text-decoration: none;color:#3B0344;font-size:15px">${batsman.name}</a>
                                                </td>
                                                <td style="" class="font15">${batsman.out_by}</td>
                                                <td style="text-align:center" class="font15">${batsman.run}</td>
                                                <td style="text-align:center" class="font15">${batsman.ball}</td>
                                                <td style="text-align:center" class="font15">${batsman.fours}</td>
                                                <td style="text-align:center" class="font15">${batsman.sixes}</td>
                                                <td style="text-align:center" class="font15">${batsman.strike_rate}</td>
                                            </tr>`;
                                        });
                                    }
                                    resHtml += `
                            </tbody>
                        </table>
                    </div>    
                        <div style="margin-top:15px">
                        <table class="font-xcore" style="background:#fff;box-shadow: 0px 0px 30px #0000001A;">
                            <tbody>
                                <tr class="bg-row-tr team-name">
                                    <th style="width:73%;">Bowler</th>
                                    <th style="text-align:center; width:5%;">O</th>
                                    <th style="text-align:center; width:5%;">M</th>
                                    <th style="text-align:center; width:5%;">R</th>
                                    <th style="text-align:center; width:5%;">W</th>
                                    <th style="text-align:center; width:5%;">ER</th>
                                    <th style="text-align:center; width:5%;">DB</th>
                                </tr>`
                                if (data.data.scorecard["1"].bolwer && data.data.scorecard["1"].bolwer.length > 0) {
                                    data.data.scorecard["1"].bolwer.forEach((bolwer) => {
                                        resHtml += `
                                            <tr class='text-black line'>
                                                <td style="color:#000;font-weight:bold">
                                                    <a href="player_profile?player=${bolwer.player_id}" style="text-decoration: none;color:#3B0344;font-size:15px">${bolwer.name}</a>
                                                </td>
                                                <td style="text-align:center" class="font15">${bolwer.over}</td>
                                                <td style="text-align:center" class="font15">${bolwer.maiden}</td>
                                                <td style="text-align:center" class="font15">${bolwer.run}</td>
                                                <td style="text-align:center" class="font15">${bolwer.wicket}</td>
                                                <td style="text-align:center" class="font15">${bolwer.economy}</td>
                                                <td style="text-align:center" class="font15">${bolwer.dot_ball}</td>
                                            </tr>`;
                                        });
                                    }
                                resHtml += `
                                </tbody>
                            </table>
                       </div>    
                    <div style="margin-top:15px">
                        <table class="font-xcore" style="background:#fff;box-shadow: 0px 0px 30px #0000001A;">
                                <tbody>
                                <tr class="bg-row-tr team-name">
                                        <th style="width:88%;">Batsman</th>
                                        <th style="text-align:center; width:5%;">S</th>
                                        <th style="text-align:center; width:5%;">W</th>
                                        <th style="text-align:center; width:5%;">Over</th>
                                    </tr>`
                            if (data.data.scorecard["1"].fallwicket && data.data.scorecard["1"].fallwicket.length > 0) {
                                data.data.scorecard["1"].fallwicket.forEach((fallwicket) => {
                                    resHtml += `
                                    <tr class="text-black line">
                                        <td style="color:#000;font-weight:bold" >${fallwicket.player}</td>
                                        <td style="text-align:center" class="font15">${fallwicket.score}</td>
                                        <td style="text-align:center" class="font15">${fallwicket.wicket}</td>
                                        <td style="text-align:center" class="font15">${fallwicket.over}</td>
                                    </tr>`;
                                });
                            }
                            resHtml += `            
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                    `
                }
                //                          ********** TEAM - 2 **********
                let resHtml1 = '';
            if (data.data && data.data.scorecard && data.data.scorecard["2"] && data.data.scorecard["2"].team) {
                resHtml1 +=`
                <div class="row" style='margin-top:20px;'>
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="card1 col-lg-12" style="margin-left:0px;padding:0px">
                            <div class="card-new-data" style="padding:0px;background:none">
                            <span class="team-name team">${data.data.scorecard["2"].team.name}</span> 
                        <div style="margin-top:15px">
                            <table class="font-xcore" style="background:#fff;box-shadow: 0px 0px 30px #0000001A;">
                            <tbody>
                                <tr class="bg-row-tr team-name">
                                    <th style="width:30%">Batsman</th>
                                    <th style="width:50%"></th>
                                    <th style="text-align:center; width:5%;">R</th>
                                    <th style="text-align:center; width:5%;">B</th>
                                    <th style="text-align:center; width:5%;">4s</th>
                                    <th style="text-align:center; width:5%;">6s</th>
                                    <th style="text-align:center; width:5%;">SR</th>
                                </tr>`
                                if (data.data.scorecard["2"].batsman && data.data.scorecard["2"].batsman.length > 0) {
                                    data.data.scorecard["2"].batsman.forEach((batsman) => {
                                        resHtml1 += `
                                            <tr class='text-black line'>
                                                <td style="color:#000;font-weight:bold">
                                                    <a href="player_profile?player=${batsman.player_id}" style="text-decoration: none;color:#3B0344;font-size:15px">${batsman.name}</a>
                                                </td>
                                                <td style="" class="font15">${batsman.out_by}</td>
                                                <td style="text-align:center" class="font15">${batsman.run}</td>
                                                <td style="text-align:center" class="font15">${batsman.ball}</td>
                                                <td style="text-align:center" class="font15">${batsman.fours}</td>
                                                <td style="text-align:center" class="font15">${batsman.sixes}</td>
                                                <td style="text-align:center" class="font15">${batsman.strike_rate}</td>
                                            </tr>`;
                                        });
                                    }
                                    resHtml1 += `
                            </tbody>
                        </table>
                    </div>    
                        <div style="margin-top:15px">
                        <table class="font-xcore" style="background:#fff;box-shadow: 0px 0px 30px #0000001A;">
                            <tbody>
                                <tr class="bg-row-tr team-name">
                                    <th style="width:73%;">Bowler</th>
                                    <th style="text-align:center; width:5%;">O</th>
                                    <th style="text-align:center; width:5%;">M</th>
                                    <th style="text-align:center; width:5%;">R</th>
                                    <th style="text-align:center; width:5%;">W</th>
                                    <th style="text-align:center; width:5%;">ER</th>
                                    <th style="text-align:center; width:5%;">DB</th>
                                </tr>`
                                if (data.data.scorecard["2"].bolwer && data.data.scorecard["2"].bolwer.length > 0) {
                                    data.data.scorecard["2"].bolwer.forEach((bolwer) => {
                                        resHtml1 += `
                                            <tr class='text-black line'>
                                                <td style="color:#000;font-weight:bold">
                                                    <a href="player_profile?player=${bolwer.player_id}" style="text-decoration: none;color:#3B0344;font-size:15px">${bolwer.name}</a>
                                                </td>
                                                <td style="text-align:center" class="font15">${bolwer.over}</td>
                                                <td style="text-align:center" class="font15">${bolwer.maiden}</td>
                                                <td style="text-align:center" class="font15">${bolwer.run}</td>
                                                <td style="text-align:center" class="font15">${bolwer.wicket}</td>
                                                <td style="text-align:center" class="font15">${bolwer.economy}</td>
                                                <td style="text-align:center" class="font15">${bolwer.dot_ball}</td>
                                            </tr>`;
                                        });
                                    }
                                    resHtml1 += `
                                </tbody>
                            </table>
                       </div>    
                    <div style="margin-top:15px">
                        <table class="font-xcore" style="background:#fff;box-shadow: 0px 0px 30px #0000001A;">
                                <tbody>
                                <tr class="bg-row-tr team-name">
                                        <th style="width:88%;">Batsman</th>
                                        <th style="text-align:center; width:5%;">S</th>
                                        <th style="text-align:center; width:5%;">W</th>
                                        <th style="text-align:center; width:5%;">Over</th>
                                    </tr>`
                            if (data.data.scorecard["2"].fallwicket && data.data.scorecard["2"].fallwicket.length > 0) {
                                data.data.scorecard["2"].fallwicket.forEach((fallwicket) => {
                                    resHtml1 += `
                                    <tr class='text-black line'>
                                        <td style="color:#000;font-weight:bold">${fallwicket.player}</td>
                                        <td style="text-align:center" class="font15">${fallwicket.score}</td>
                                        <td style="text-align:center" class="font15">${fallwicket.wicket}</td>
                                        <td style="text-align:center" class="font15">${fallwicket.over}</td>
                                    </tr>`;
                                });
                            }
                            resHtml1 += `            
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>`
                }
            $('#matchData2').html(resHtml + resHtml1);
                } catch (error) {
                console.error('Error fetching API data:', error);
        }
    }