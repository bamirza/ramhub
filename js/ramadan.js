today = new Date();
var eid = new Date(today.getFullYear(), 9, 31);

if  (today.getMonth()==11 && today.getDate()>25) {
	eid.setFullYear(cmas.getFullYear()+1); 
	}  
var one_day=1000*60*60*24;

document.getElementById("countdown").innerHTML = (Math.ceil((eid.getTime()-today.getTime())/(one_day))+ " days left until Eid!");