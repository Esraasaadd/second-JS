var quote=document.getElementById("quote");
var autherName=document.getElementById("autherName");

arrayOfQuotes=[
    {'autherName':"--Oscar Wilde" , 'quote':"“Be yourself; everyone else is already taken.”"} ,
    {'autherName':"--Marcus Tullius Cicero" , 'quote':"“A room without books is like a body without a soul.”"},
    {'autherName':"--Mae West" , 'quote':"“You only live once, but if you do it right, once is enough.”"} ,
    {'autherName':"--Mahatma Gandhi" , 'quote':"“Be the change that you wish to see in the world.”"} ,
    {'autherName':"--Robert Frost" , 'quote':"“In three words I can sum up everything I've learned about life: it goes on.”"} 
]


function quoteGenerator(){
    var lengthOfArray=arrayOfQuotes.length-1;
    var randomNum=Math.floor(Math.random() * (lengthOfArray - 0 + 1) ) + 0;
    console.log(arrayOfQuotes[randomNum]);
    quote.innerHTML=arrayOfQuotes[randomNum].quote;
    autherName.innerHTML=arrayOfQuotes[randomNum].autherName;
}
