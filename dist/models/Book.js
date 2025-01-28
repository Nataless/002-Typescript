System.register(["mongoose"], function (exports_1, context_1) {
    "use strict";
    var mongoose_1, bookSchema, BookModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (mongoose_1_1) {
                mongoose_1 = mongoose_1_1;
            }
        ],
        execute: function () {
            bookSchema = new mongoose_1.Schema({
                title: {
                    type: String,
                    required: true
                },
                description: {
                    type: String,
                    default: ''
                },
                authors: {
                    type: String,
                    default: ''
                },
                favorite: {
                    type: String,
                    default: ''
                },
                fileCover: {
                    type: String,
                    default: ''
                },
                fileName: {
                    type: String,
                    default: ''
                },
                fileBook: {
                    type: String,
                    default: ''
                }
            });
            console.log(bookSchema);
            exports_1("BookModel", BookModel = mongoose_1.model('Book', bookSchema));
        }
    };
});
