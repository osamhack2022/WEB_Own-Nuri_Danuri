const db = require('../config/db')
const router = require('./user_inform')

router.post('/회원가입', (req,res,next) =>{
    const param = [req.body.id, req.body.pw, req.body.troop]

    db.query('INSERT INTO member(`id`,`pw`,`troop`) VALUES (?,?,?)' , param , (err, row) =>{
        if(err) console.log(err)
    })
    
    res.end
})