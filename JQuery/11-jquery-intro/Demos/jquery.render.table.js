(function ($) {

    $.fn.renderTable = function (params) {

        return this.each(function () {  // Iterates over each selected jQuery object

            // Local variables packed in an object:
            var settings = {
                'books':null,
                'booksTable':null
            };

            if (params) {
                $.extend(settings, params); // Merge the two objects into the settings object, overwriting if necessary
            } else {
                alert('Please send in some parameters...');
                return;
            }

            // Start ceating the new table tag:
            var newTable = $('<table id="booksTable"></table>');

            newTable.append('<tr><th>Title</th><th>Author</th><th>Price</th></tr>');

            // Create the tr tags for each book retrieved:
            var numBooks = settings.books.length;
            for (var i = 0; i < numBooks; i++) {
                var book = settings.books[i];
                newTable.append('<tr><td>' + book.title + '</td><td>' + book.author + '</td><td>' + book.price + '</td></tr>');
            }

            // Hide the new table so the fade-in works below
            newTable.css('display', 'none');

            // Replace the existing table tag:
            settings.booksTable.replaceWith(newTable);

            newTable.fadeIn(1000);
        });
    };
})(jQuery);
