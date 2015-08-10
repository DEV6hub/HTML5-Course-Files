(function ($) {

    $.fn.renderTable = function (params) {

        return this.each(function () {

            var settings = {
                'books' : null,
                'booksTable' : null
            };

            if (params) {
                $.extend(settings, params);
            } else {
                alert('Please send in some parameters...');
                return;
            }

            settings.booksTable.empty();
            settings.booksTable.append('<tr><th>Title</th><th>Author</th><th>Price</th></tr>');

            var numBooks = settings.books.length;
            for (var i = 0; i < numBooks; i++) {
                var book = settings.books[i];
                settings.booksTable.append('<tr><td>' + book.title + '</td><td>' + book.author + '</td><td>' + book.price + '</td></tr>');
            }

            settings.booksTable.fadeIn();

        });

    };
})(jQuery);
