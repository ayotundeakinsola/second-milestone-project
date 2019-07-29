queue()
    .defer(d3.csv, "data/imdb.csv")
    .await(makeGraphs);
    
function makeGraphs(error, imdbData) {
    
}