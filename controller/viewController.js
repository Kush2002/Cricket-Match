exports.getHomePage = async(req, res, next) => {
        // console.log('req.body');
        const {data, news} = req.body;
        // console.log('data',data);
        // console.log('news',news);
        res.status(200).render('match', {   
            title: 'Live Cricke Match | INDIA, CSK, GT...',
            text:'MATCHES FOR YOU',
            data,
            news
        });
};

exports.getLiveMatch = async(req, res, next) => {
    // console.log('req.body');
    const {live} = req.body;
    // console.log(live);
    res.status(200).render('live', {   
        title: 'Live Matches',
        text:'LIVE MATCHES',
        live
    });
};

exports.getUpcomingMatch = async(req, res, next) => {
    // console.log('req.body');
    const data = req.body;
    // console.log(data);
    res.status(200).render('upcoming', {   
        title: 'UpComing Matches',
        text:'UPCOMING MATCHES',
        data
    });
};

exports.getScoreView = async(req, res, next) =>{
    const match = req.body;
    // console.log('MATCH DATA',match);
    res.status(200).render('score_match',{
        title:'Score Card',
        match
    });
};

exports.getRecentPage = async(req, res, next) => {
    // console.log('req.body');
    const data = req.body;
    console.log(data.data);
    res.status(200).render('recent', {   
        title: 'Recent Matches',
        text:'MATCHES FOR YOU',
        data:data
    });
};

exports.getRecentCardMatch = async(req, res, next) => {
    // console.log('req.body');
    const data = req.body;
    // console.log(data.data);
    res.status(200).render('recent', {   
        title: 'Recent Matches',
        text:'MATCHES FOR YOU',
        data:data
    });
};

exports.getPlayerDetails = async(req, res, next) => {
    // console.log('req.body');
    const data = req.body;
    // console.log(data.data);
    res.status(200).render('player_profile', {   
        title: "Player's Details",
        data:data
    });
};

exports.getNews = async(req, res, next) => {
    // console.log('req.body');
    const {news} = req.body;
    // console.log(news);
    res.status(200).render('news', {   
        title: 'Latest Cricket News',
        text:'NEWS',
        news
    });
};

exports.getNewsDetails = async(req, res, next) => {
    // console.log('req.body');
    const newsData = req.body;
    // console.log(newsData);
    res.status(200).render('newsDetails', {   
        title: 'Latest Cricket News',
        text:'Full News Details',
        newsData
    }); 
};

exports.getSeries = async(req, res, next) => {
    // console.log('req.body');
    const {series} = req.body;
    // console.log(series);
    res.status(200).render('series', {   
        title: 'Cricket Series-Schedule |National, InterNational & Domestic Series',
        text:'SERIES LIST',
        series
    });
};

exports.getRankig = async(req, res, next) => {
    // console.log('req.body');
    // const data = req.body;
    // console.log(data);
    res.status(200).render('ranking', {   
        title: "ICC Ranking | Team Ranking | Man's & Women's Ranking",
        text:'RANKING',
        // data
    });
};