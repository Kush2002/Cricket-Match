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