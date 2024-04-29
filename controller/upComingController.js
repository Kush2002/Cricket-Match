const fetch = require('node-fetch');

exports.getUpComingMatches = async(req, res, next) =>{
    fetch('http://apicricketchampion.in/apiv4/upcomingMatches/b39d003a77b86b49021b8ba8861bab7c', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            
        }
    })
    .then(resp => resp.json())
    .then(json => {
        // console.log('UpComing Match',upComing);
        req.body = json
            next();
    });
};
