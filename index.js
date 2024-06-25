const express = require('express');
const app = express();
app.use('/demo',(req, res) => {
    return res.json({
        msg:'its running successfully'
    })
})
app.listen(3244,() => {
    console.log('code was running successfully on prot number 3244');
})