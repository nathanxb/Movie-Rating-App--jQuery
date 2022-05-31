//movie submission
$('.movie-form').on("submit", function (e) {
    e.preventDefault();
    let movieTitle = $('.movie-form input').eq(0).val();
    let movieRating = $('.movie-form input').eq(1).val();
    if (movieTitle.length < 2) {
        alert('Movie must have at least 2 characters')
        return;
    }
    if (movieRating < 0 || movieRating > 10) {
        alert('Movie Ratings are from 0 - 10!')
        return;
    } else {
        $('#ratings-table')
            .append(`<tr>
        <td>${movieTitle}</td>
        <td>${movieRating}</td>
        <td><button id='remove'>Remove</button></td>
        </tr>`);
        $('.movie-form input').eq(0).val('');
        $('.movie-form input').eq(1).val('');
    }
});

//remove button functionality
$('#ratings-table').on('click', 'button', function () {
    $(this).parents('tr').remove();
})