const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.connection
    .once('open', () => console.log("Mongo Connected"))
    .on('error', (error) => console.log("Error", error))