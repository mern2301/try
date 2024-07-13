const mongoose = require('mongoose');
function dbConnection(){
    mongoose.connect('mongodb+srv://citesmern2301:citesmern2301@cluster0.tvvskuz.mongodb.net/ecommerce?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));
}
module.exports = dbConnection;