function redirectToMatch(match_id) {
    const pageUrl = `/score_match/?matchId=${match_id}`;
    // console.log(pageUrl);
    window.location.href = pageUrl;
}