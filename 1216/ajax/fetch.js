//関数化
const loadNews = function () {
    fetch('./news.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
        });
};

loadNews();