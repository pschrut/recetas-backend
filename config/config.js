process.env.PORT = process.env.PORT || 3000;
process.env.MONGO_URI = 'mongodb+srv://pschrut:zQFjTvqkf0lI6xpK@cluster0-g4cpb.mongodb.net/recipies?retryWrites=true&w=majority';
process.env.NODE_ENV = 'prd';

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/recipies';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URL_DB = urlDB;