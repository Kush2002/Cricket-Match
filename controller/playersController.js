const axios = require('axios');
const FormData = require('form-data');

exports.getRecentPlayersData = async (req, res, next) => {
  // console.log(req.query);
    const player_id = req.query.player;
    // console.log(player_id);
    if (!player_id) {
        return res.status(400).json({ error: 'Player ID is required' });
    }
    try {
        let data = new FormData();
        data.append('player_id', player_id);
        let config = {
            method: 'post',
            url: 'http://apicricketchampion.in/apiv4/playerInfo/b39d003a77b86b49021b8ba8861bab7c',
            data: data
        };
        const response = await axios(config);
        const json = response.data;
        // console.log('Player Info:', json);
        req.body = json;
        next();
    } catch (err) {
        console.error('Error fetching player info:', err);
        res.status(500).json({ error: 'Failed to fetch player info' });
    }
};