var express = require('express');
var app = express();

app.get('/', function(req, res){
   var cook = res.cookie('name', 'prashant').send('सादगी तो हमारी जरा देखिये, एतबार आपके वादे पे कर लिया बात तो शीर्फ एक रात की थी मगर, इंतज़ार आपका उम्रभर कर लिया');
   console.log(cook)
});

app.listen(3000);