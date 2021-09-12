const path = require('path')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'client', 'views', 'home.html'))
}

module.exports = { GET }