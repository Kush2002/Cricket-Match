const fetch = require('node-fetch');
const axios = require('axios');
const FormData = require('form-data');

// Match Data
exports.getData = async(req, res, next) =>{
        fetch('http://apicricketchampion.in/apiv4/homeList/b39d003a77b86b49021b8ba8861bab7c', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        })
       .then(resp => resp.json())
       .then(data => {
        // console.log(data);
            req.body.data = data
            next();
        });
};

exports.getMatchesNews = async(req, res, next) =>{
    fetch('http://apicricketchampion.in/apiv4/news/b39d003a77b86b49021b8ba8861bab7c', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then(resp => resp.json())
    .then(news => {
        // console.log('Match News',news);
        req.body.news = news
            next();
    });
};
exports.getLiveMatchsList = async(req, res, next) =>{
    fetch('http://apicricketchampion.in/apiv4/liveMatchList/b39d003a77b86b49021b8ba8861bab7c', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then(resp => resp.json())
    .then(live => {
        // console.log('Live Matches List',live);
        req.body.live = live
            next();
    });
};


exports.getSeriesList = async(req, res, next) =>{
    fetch('http://apicricketchampion.in/apiv4/seriesList/b39d003a77b86b49021b8ba8861bab7c', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        }
    })
    .then(resp => resp.json())
    .then(series => {
        // console.log('Series List',series);
        req.body.series = series
            next();
    });
};

exports.getNewsDetails = async (req, res, next) => {
    const news_id = req.query.news;
    // console.log(news_id);
    if (!news_id) {
        return res.status(400).json({ error: 'News ID is required' });
    }
    try {
        let data = new FormData();
        data.append('news_id', news_id);
        let config = {
            method: 'POST',
            url: 'http://apicricketchampion.in/apiv4/newsDetail/b39d003a77b86b49021b8ba8861bab7c',
            headers: {
                ...data.getHeaders()
            },
            data: data
        };
        const response = await axios(config);
        const json = response.data;
        // console.log('News Details:', json);
        req.body = json;
        next();
    } catch (err) {
        console.error('Error fetching News Details', err);
        res.status(500).json({ error: 'Failed to fetch News Details' });
    }
};