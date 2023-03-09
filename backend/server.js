let app=require('./http/index')
let conncetion=require('./db/connection/index')
let loginroute=require('./routes/auth/register')
app.use('/register', loginroute)



