queue()
    .defer(d3.csv, "data/IMDB-Movie-Data.csv")
    .await(makeGraphs);
    
function makeGraphs(error, IMDBData) {
    
}