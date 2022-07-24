//exports=getDate;   this will work too but to shoorten the  code
//or we can write whole module.exports=getDate;

exports.getDate=function(){
var today=new Date();
var options={weekday:"long",
day:"numeric",
month:"long"};
return today.toLocaleDateString("en-US",options);
}
