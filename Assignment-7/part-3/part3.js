// 1
var fav_movies = ["The Prestige", "Shutter Island", "The Dark Knight", "Avengers", "Rush"];
console.log(fav_movies[1]);

// 2
var movies = new Array(5);
movies[0] = "The Prestige";
movies[1] = "Shutter Island", "The Dark Knight", "Avengers", "Rush";
movies[2] = "The Dark Knight";
movies[3] = "Avengers";
movies[4] = "Rush";
console.log(movies[0]);

// 3
var movies_2 = new Array(5);
movies[0] = "The Prestige";
movies[1] = "Shutter Island", "The Dark Knight", "Avengers", "Rush";
movies[2] = "The Dark Knight";
movies[3] = "Avengers";
movies[4] = "Rush";
movies_2.splice(2,0,"Shawshank-Redemption");
console.log(movies_2.length);

// 4
var movies_3 = [];
movies_3[0] = "The Prestige";
movies_3[1] = "Shutter Island", "The Dark Knight", "Avengers", "Rush";
movies_3[2] = "The Dark Knight";
movies_3[3] = "Avengers";
movies_3[4] = "Rush";

delete movies_3[0];
console.log(movies_3);

// 5

var favMovies3 = [];
favMovies3[0] = "The Prestige";
favMovies3[1] = "Shutter Island";
favMovies3[2] = "The Dark Knight";
favMovies3[3] = "Avengers";
favMovies3[4] = "Rush";
favMovies3[5] = "Shawshank-Redemption";
favMovies3[6] = "Thor: Ragnarok"

for (let index = 0; index < favMovies3.length; index++) {
    window.console.log(favMovies3[index]);
}

// 6
var favMovies4 = [];
favMovies4[0] = "The Prestige";
favMovies4[1] = "Shutter Island";
favMovies4[2] = "The Dark Knight";
favMovies4[3] = "Avengers";
favMovies4[4] = "Rush";
favMovies4[5] = "Shawshank-Redemption";
favMovies4[6] = "Thor: Ragnarok"

for (index in favMovies4) {
    if (favMovies4.hasOwnProperty(index)) {
        window.console.log(favMovies4[index]);
    }
}

// 7
var favMovies5 = [];
favMovies5[0] = "Inception";
favMovies5[1] = "Rush";
favMovies5[2] = "Kungfu Panda";
favMovies5[3] = "2012";
favMovies5[4] = "Casino Royale";
favMovies5[5] = "Stuart Little";
favMovies5[6] = "Baby's Day Out";

favMovies5.sort();
for (index in favMovies5) {
    if (favMovies5.hasOwnProperty(index)) {
        window.console.log(favMovies5[index]);
    }
}

// 8
var favMovies6 = [];
favMovies6[0] = "Inception";
favMovies6[1] = "Rush";
favMovies6[2] = "Kungfu Panda";
favMovies6[3] = "2012";
favMovies6[4] = "Casino Royale";
favMovies6[5] = "Stuart Little";
favMovies6[6] = "Baby's Day Out";

var leastFavMovies = [];
leastFavMovies[0] = "Saw";
leastFavMovies[1] = "the wrong turn";
leastFavMovies[2] = "Twilight";

window.console.log("Movies I like:\n\n");
window.document.write("Movies I like:\n\n");
window.document.write("<br>");
for (let index = 0; index < favMovies6.length; index++) {
    window.console.log(favMovies6[index]);
    window.document.write(favMovies6[index]);
    window.document.write("<br>");
}
window.console.log("\n");

window.document.write("<br>");
window.console.log("Movies I regret watching:\n\n");
window.document.write("Movies I regret watching:\n\n");
window.document.write("<br>");
for (let index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]);
    window.document.write(leastFavMovies[index]);
    window.document.write("<br>");
}
window.console.log("\n");

// 9
var movies = favMovies6.concat(leastFavMovies);
movies.reverse();
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}
window.console.log("\n");

// 10
var movies2 = favMovies6.concat(leastFavMovies);
window.console.log(movies.pop());