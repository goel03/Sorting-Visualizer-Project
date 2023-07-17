var express = require("express");
var http = require("http")
var path = require("path")
var nodemailer = require("nodemailer")

var app = express();
var server = http.Server(app)
var port = 1000

app.set("port", port)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "mini_pro_new")))

//Routing
app.get("/", function(req, response){
    response.sendFile(path.join(__dirname, "mini_pro_new/start.html"))
})


app.post("/send_email", function(req, response){
    var from = req.body.from
    var to = req.body.to
    var subject = req.body.subject
    var message = req.body.message

    var transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: 'project321example@outlook.com',
          pass: 'project@123'
        }
    })

    var mailOptions = {
        from:'project321example@outlook.com',
        to:'project321example@outlook.com',
        subject:subject,
        text:message
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error)
        } else {
            console.log("Email Sent: " + info.response)
        }
        response.redirect("/")
    })
})

//Initialize Web Server
server.listen(port, function(){
    console.log("starting server on port " + port)
})
console.clear()