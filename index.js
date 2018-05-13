$(document).ready(function () {
    let response;
    let newQuote;
    let colors = ["#3f89ff", "#1850ab", "#188fab", "#f1af14", "#c73fff", "#ff3f98", "#3fff68", "#423fff", "#de8a71", "#dedb71", "#71b6deab", "#a571deab", "#de7171ab", "#920022ab", "#920022", "#009277", "#5a0092", "#880087", "#c39400", "#00c313"];
    let randomColor;

    function apiRequest() {
        $.getJSON("https://talaikis.com/api/quotes/random/", function (resp) {
            randomColor = colors[Math.floor(Math.random() * colors.length)];
            response = resp;
            newQuote = response.quote;
            renderResults();
            $('html, button').css({
                'background-color': randomColor,
                'transition': 'all 1.7s ease'
            });
        });
    }

    function renderResults() {
        $('#loaded-quote').empty();
        $('#loaded-quote').append(`<p class="quote-block">${newQuote}</p> <p class="author">- ${response.author}</p>`);
    }

    function handleButton() {
        $('#quotes').on('click', 'button', (function () {
            apiRequest();
        }));
    }


    $(apiRequest);
    $(handleButton);

});