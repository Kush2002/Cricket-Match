exports.getHomePage = async(req, res, next) => {
        // console.log('req.body');
        const {data, news} = req.body;
        // console.log('data',data);
        // console.log('news',news);
        res.status(200).render('match', {   
            title: 'Home',
            text:'MATCHES FOR YOU',
            data,
            news
        });
};

exports.getLiveMatch = async(req, res, next) => {
    // console.log('req.body');
    // const data = req.body;
    // console.log(data);
    res.status(200).render('live', {   
        title: 'Live Matches',
        text:'Live Matches',
        // data
    });
};

exports.getUpcomingMatch = async(req, res, next) => {
    // console.log('req.body');
    const data = req.body;
    // console.log(data);
    res.status(200).render('upcoming', {   
        title: 'UpComing Matches',
        text:'Upcoming Matches',
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
    // const data = req.body;
    // console.log(data);
    res.status(200).render('news', {   
        title: 'News For Matches',
        text:'News For Matches',
        // data
    });
};

exports.getSeries = async(req, res, next) => {
    // console.log('req.body');
    // const data = req.body;
    // console.log(data);
    res.status(200).render('series', {   
        title: 'Series Matches',
        text:'Series Matches',
        // data
    });
};

exports.getRankig = async(req, res, next) => {
    // console.log('req.body');
    // const data = req.body;
    // console.log(data);
    res.status(200).render('ranking', {   
        title: 'Ranking Matches',
        text:'Ranking Matches',
        // data
    });
};