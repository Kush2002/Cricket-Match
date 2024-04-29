const fetch = require('node-fetch');

exports.getRecentData = async(req, res, next) =>{
        fetch('http://apicricketchampion.in/apiv4/seriesList/b39d003a77b86b49021b8ba8861bab7c', {
            headers: {
                'Content-type': 'application/json',
            }
        })
       .then(resp => resp.json())
       .then(json => {
        // console.log(json);
            req.body = json
            next();
        });
};

    // Make an API request based on selectedValue
exports.getRecentMatchesSeriesList = async(req, res, next) =>{
    fetch('http://apicricketchampion.in/apiv4/seriesList/b39d003a77b86b49021b8ba8861bab7c', {
        headers: {
            'Content-type': 'application/json',
        }
    })
   .then(resp => resp.json())
   .then(json => {
    // console.log('Recent Match Series',json);
        req.body = json
        next();
    });
};

const axios = require('axios');
const FormData = require('form-data');

exports.getRecentMatchesData = async (req, res, next) => {
    const match_id = req.query.matchId;
    // console.log(match_id);
    if (!match_id) {
        return res.status(400).json({ error: 'Match ID is required' });
    }
    try {
        let data = new FormData();
        data.append('match_id', match_id);
        let config = {
            method: 'post',
            url: 'http://apicricketchampion.in/apiv4/liveMatch/b39d003a77b86b49021b8ba8861bab7c',
            headers: {
                ...data.getHeaders()
            },
            data: data
        };
        const response = await axios(config);
        const json = response.data;
        // console.log('Match Info:', json);
        req.body = json;
        next();
    } catch (err) {
        console.error('Error fetching match info:', err);
        res.status(500).json({ error: 'Failed to fetch match info' });
    }
};
