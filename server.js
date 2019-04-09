
var expr=require('express');
var hbs=require('hbs');

var app=expr();

hbs.registerPartials(__dirname+'/views/partials')
app.set('View String','hbs');
app.use(expr.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear()
});
hbs.registerHelper('screamIt',(text)=>{
	return text.toUpperCase();
});
hbs.registerHelper('Academic',(text)=>{
	return text.toUpperCase();
});
hbs.registerHelper('Examination',(text)=>{
	return text.toUpperCase();
});

app.get('/',(req,res)=>{
res.render('home.hbs',{
	pageTitle:'Home Page',
	welcomeMessage:'Welcome to my website',
	currentYear:new Date().getFullYear()
     });
});

app.get('/about',(req,res)=>{
res.render('about.hbs',{
	pageTitle:'About Page',
	currentYear:new Date().getFullYear()
     });
});

app.get('/academic',(req,res)=>{
res.render('academic.hbs',{
	pageTitle:'Academic Page',
courses:'NodeJs',
courses1:'Capstone Project',
courses2:'Information System',
courses3:'Multiplatform with Mobile App'
     });
});
app.get('/examination',(req,res)=>{
res.render('examination.hbs',{
	pageTitle:'Examination Page',
	NodeJs:'NodeJs:A+',
CapstoneProject:'Capstone Project:O',
InformationSystem:'Information System:A',
MultiplatformwithMobileApp:'Multiplatform with Mobile App:A'
     });
});

app.listen(3000,()=>{
	console.log('server is upto on port 3000!');
});