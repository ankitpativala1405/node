const express = require('express')

const port = 8090

const app = express()

app.use(express.urlencoded())

app.set('view engine' , 'ejs')

app.get('/' , (req , res) => {
    return res.render('home')
})

let studentData = []

// app.get('/home' , (req , res) => {
//     return res.render('home')
// })

app.get('/form' , (req , res) => {
    return res.render('form' , {
        student:studentData
    })
})


app.get('/editData' , (req , res) => {
    let userEditId = req.query.id

    let newEditData = studentData.filter((val) => {
        return val.userid == userEditId
    })

    return res.render('edit' , {
        editData : newEditData[0]
    })
})

app.get('/deleteData' , (req , res) => {
    let userDeleteId = req.query.id

    let newDeleteData = studentData.filter((val) => {
        return val.userid != userDeleteId
    })

    studentData = newDeleteData

    return res.redirect('/form')
})

app.post('/editData' , (req , res) =>{

    let editId = req.body.editId

    editId = parseInt(editId)

    studentData = studentData.map((user) => {
        if(user.userid === editId){
            user.name = req.body.name
            user.email = req.body.email
            user.password = req.body.password
        }

        return user;
    })

    console.log('user updated' , editId);

    return res.redirect('/form')
    
})


app.post('/insertData' , (req , res) => {

    let userid = Number(req.body.userId)
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password

    let obj = {
        userid:userid,
        name:name,
        email:email,
        password:password
    };

    studentData.push(obj);
    console.log("Student successfully Added");
    console.log(obj);
    return res.redirect('/form');
    
})

app.listen(port , (error) => {
    if(error){
        console.log('server not start');
        return false;
    }
    console.log(`server has been start on port ${port}`);
})
