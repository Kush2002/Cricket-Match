$(document).ready(function() {
    $('#btnFancy').click(function(){
        
        fetchFancy();
    });
});

async function fetchFancy() {
    try {
        let match_id = $('div[data-id]').data('id');
        // console.log('MatchId:', match_id);
        let formData = new FormData();
        formData.append('match_id', match_id);
        let apiUrl = `http://apicricketchampion.in/apiv4/matchFancy/b39d003a77b86b49021b8ba8861bab7c`;
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
        
            resHtml +=`
            	<div class='row fancy'>
            		<div class='col-10'>
        	        	<span>Fancy</span>
    	        	</div>
	            	<div class='col-1'>
                		<span>No</span>
            		</div>
            		<div class='col-1'>
                		<span>Yes</span>
            		</div>
            	</div>`
                let html ='';
                for (let i = 0; i < data.data.length; i++) {
                html +=
                `<div class='row'>
            	    <div class='col-10'>
                	    <span class='text-black fw-bold'>${data.data[i].fancy}</span><br>
                	    <span style="color: blue;">${data.data[i].created}</span>
            	    </div>
            	    <div class='col-1'>
                    	<span class='text-black'>${data.data[i].back_price}</span><br>
                	    <span style="color: red;" class='fw-bold'>${data.data[i].back_size} </span>
            	    </div>
            	    <div class='col-1'>
    	                <span class='text-black'>${data.data[i].lay_price}</span><br>
                	    <span style="color: green;" class='fw-bold'>${data.data[i].lay_size}</span>
            	    </div>
                    <hr/>
                </div>`
            }
        $('#matchData2').html(resHtml + html);
    } catch (error) {
        console.error('Error fetching API data:', error);
    }
}