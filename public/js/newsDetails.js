function redirectToNews(news_id,title) {
    const pageUrl = `/newsDetails/?news=${news_id},${title}`;
    // console.log(pageUrl);
    window.location.href = pageUrl;
}