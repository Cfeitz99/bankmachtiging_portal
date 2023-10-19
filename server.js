const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<form action="/submit" method="post"><input type="text" name="bankDetails" placeholder="Enter bank details"><button type="submit">Submit</button></form>');
});

app.post('/submit', (req, res) => {
    console.log(req.body.bankDetails); // Log for demonstration purposes only!
    res.send('Thank you for submitting your bank details.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
