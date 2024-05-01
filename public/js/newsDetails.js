function redirectToNews(news_id,title) {
    const pageUrl = `/newsDetails/?cricket-news-details?news=${news_id},${title}`;
    console.log(pageUrl);
    window.location.href = pageUrl;
}