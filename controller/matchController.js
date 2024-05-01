const fetch = require('node-fetch');

// Match Data
exports.getData = async(req, res, next) =>{
        fetch('http://apicricketchampion.in/apiv4/homeList/b39d003a77b86b49021b8ba8861bab7c', {
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

