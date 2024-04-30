const express = require('express');
const router = express.Router();
const matchController = require('../controller/matchController');
const recentMatchController = require('../controller/recentMatchController');
const playersController = require('../controller/playersController');
const viewController = require('../controller/viewController');
const upComingController = require('../controller/upComingController');

router.get('/',
    matchController.getData,
    matchController.getMatchesNews,
    viewController.getHomePage);

router.get('/recent',
    recentMatchController.getRecentData,
    recentMatchController.getRecentMatchesSeriesList,
    viewController.getRecentCardMatch,
    viewController.getRecentPage);

router.get('/live',
    viewController.getLiveMatch);

router.get('/series',
    viewController.getSeries);

router.get('/news',
    viewController.getNews);

router.get('/ranking',
    viewController.getRankig);

router.get('/upcoming',
    upComingController.getUpComingMatches,
    viewController.getUpcomingMatch);

router.get('/score_match',
    recentMatchController.getRecentMatchesData,
    viewController.getScoreView);

router.get('/player_profile',
    playersController.getRecentPlayersData,
    viewController.getPlayerDetails);

module.exports = router;
