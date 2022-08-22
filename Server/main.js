const userRouter = require('./routers/userRouter');
const express = require('express');
const cors = require('cors')
const jsonfile = require('jsonfile')


let app = express();
app.use(express.json());

app.use(cors())


require('./configs/database');


app.use('/api/users', userRouter);

app.listen(8000);

