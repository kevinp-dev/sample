// transforms response from http://www.reddit.com/r/:subreddit/.json?jsonp= 
// for easier consumption
export function massageResponse(response) {
    const innerData = response?.data?.data?.children || [];
    const massagedData = innerData.map(item => item.data);
    return massagedData;
}