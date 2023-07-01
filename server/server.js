const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnect = require('./dbConnect');

app.use(express.json());
const userRoute = require('./routes/userRoute');

app.use('/api/user/', userRoute);


    // app.use("/", express.static('client/build'));

    // app.get('*', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    // })


// deployment config
const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`app listening on port ${port}!`));

