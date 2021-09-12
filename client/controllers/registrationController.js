const path = require('path')

const GET = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'client', 'views', 'registration.html'))
}

module.exports = { GET }