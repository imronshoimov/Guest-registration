const path = require('path')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'client', 'views', 'guests.html'))
}

module.exports = { GET }