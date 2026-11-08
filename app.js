// import express package
import express from 'express';

// Create a instance of express application.
const app = express();

// Set port number for server to read.
const PORT = 3010;

// set EJS as the default template.
app.set('view engine', 'ejs');

// Enable static file serving.
app.use(express.static('public'));

// Define a default route
app.get('/', (req, res) => {
    const person = {name: 'Donald Duck', occupation: 'Plumber', favoriteColor: 'Purple' }

    // renders a page based off its file name.
    res.render('home', { person });

});

// Define a default "route" ('/')
app.get('/friends', (req, res) => {


    const friends = [ 'Mickey', 'Goofy', 'Minnie', 'Daisy' ];

    res.render('friends', { friends });

});

// Starts the server on the designated port.
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));