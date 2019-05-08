var firstnum;
var secondnum;
var result;
var operation=null;
var isdegree=true;
function dis(val) {
	if(document.getElementById("result").value=="0" || document.getElementById("result").value==result || document.getElementById("result").value=="")
	{
		document.getElementById("result").value=val
	}
	else
	{
		if(document.getElementById("result").value!=Math.PI && document.getElementById("result").value!=Math.E)
		{
			document.getElementById("result").value+=val
		}
		else
		{
			document.getElementById("result").value="Error"
		}
	}
	result="0"
	document.getElementById("backspace").disabled=false
	if(val!=0)
	{
		document.getElementById("c").value="C"
	}
}
function e() {
	if(document.getElementById("result").value=="0" || document.getElementById("result").value==result || document.getElementById("result").value=="")
	{
		document.getElementById("result").value=Math.E
	}
	else
	{
		document.getElementById("result").value="Error"
	}
	document.getElementById("backspace").disabled=false
	document.getElementById("c").value="C"
}
function pi() {
	if(document.getElementById("result").value=="0" || document.getElementById("result").value==result || document.getElementById("result").value=="") 
	{
		document.getElementById("result").value=Math.PI
	}
	else
	{
		document.getElementById("result").value="Error"
	}
	document.getElementById("backspace").disabled=false
	document.getElementById("c").value="C"
}
function decimal() {
	document.getElementById("result").value+="."
	result="0"
	document.getElementById("c").value="C"
	document.getElementById("backspace").disabled=false
}
function add() {
	if(operation!=null)
	{
		equal()
		firstnum=result
		operation="+"
		document.getElementById("backspace").disabled=false
	}
	else
	{
		firstnum= parseFloat(document.getElementById("result").value)
		document.getElementById("result").value=""
		operation="+"
		document.getElementById("backspace").disabled=false
	}
}
function subtract() {
	if(operation!=null)
	{
		equal()
		firstnum=result
		operation="-"
		document.getElementById("backspace").disabled=false
	}
	else
	{
		firstnum= parseFloat(document.getElementById("result").value)
		document.getElementById("result").value=""
		operation="-"
		document.getElementById("backspace").disabled=false
	}
}
function multiply() {
	if(operation!=null)
	{
		equal()
		firstnum=result
		operation="*"
		document.getElementById("backspace").disabled=false
	}
	else
	{
		firstnum= parseFloat(document.getElementById("result").value)
		document.getElementById("result").value=""
		operation="*"
		document.getElementById("backspace").disabled=false
	}
}
function divide() {
	if(operation!=null)
	{
		equal()
		firstnum=result
		operation="/"
		document.getElementById("backspace").disabled=false
	}
	else
	{
		firstnum= parseFloat(document.getElementById("result").value)
		document.getElementById("result").value=""
		operation="/"
		document.getElementById("backspace").disabled=false
	}
}
function percentage() {
	if(operation!=null)
	{
		equal()
		firstnum=result
		operation="%"
		document.getElementById("backspace").disabled=false
	}
	else
	{
		firstnum= parseFloat(document.getElementById("result").value)
		document.getElementById("result").value=""
		operation="%"
		document.getElementById("backspace").disabled=false
	}
}
function reciprocal() {
	if(operation!=null)
	{
		equal()
		firstnum=result
		result=1/firstnum
		document.getElementById("result").value=result
	}
	else
	{
		firstnum=parseFloat(document.getElementById("result").value)
		result=1/firstnum
		document.getElementById("result").value=result
	}
}
function factorial() {
	if(operation!=null)
	{
		equal()
		firstnum=result
		result=fact(firstnum)
		document.getElementById("result").value=result
	}
	else
	{
		firstnum=parseFloat(document.getElementById("result").value)
		result=fact(firstnum)
		document.getElementById("result").value=result
	}
}
function fact(n) {
	return (n!=1) ? n * fact(n-1) : 1;
}
function root() {
	if(operation!=null)
	{
		equal()
		firstnum=result
		if(firstnum>0)
		{
			result=Math.sqrt(firstnum)
			document.getElementById("result").value=result
		}
		else
		{
			document.getElementById("result").value="Error"
		}
	}
	else
	{
		firstnum=parseFloat(document.getElementById("result").value)
		if(firstnum>0)
		{
			result=Math.sqrt(firstnum)
			document.getElementById("result").value=result
		}
		else
		{
			document.getElementById("result").value="Error"
		}
	}
}
function power() {
	if(operation!=null)
	{
		equal()
		firstnum=result
		operation="^"
		document.getElementById("backspace").disabled=false
	}
	else
	{
		firstnum= parseFloat(document.getElementById("result").value)
		document.getElementById("result").value=""
		operation="^"
		document.getElementById("backspace").disabled=false
	}
}
function exponent() {
	if(operation!=null)
	{
		equal()
		firstnum=result
		result=Math.pow(Math.E,firstnum)
		document.getElementById("result").value=result
	}
	else
	{
		firstnum=parseFloat(document.getElementById("result").value)
		result=Math.pow(Math.E,firstnum)
		document.getElementById("result").value=result
	}
}
function absolute() {
	if(operation!=null)
	{
		equal()
		val=result
	}
	else
	{
		val=document.getElementById("result").value
	}
	if(val.charAt(0)!='-')
	{
		document.getElementById("result").value=val
	}
	else
	{
		document.getElementById("result").value=val.substring(1,val.length)
	}
}
function log() {
	if(operation!=null)
	{
		equal()
		firstnum=result
		if(firstnum>0)
		{
			result=Math.log10(firstnum)
			document.getElementById("result").value=result
		}
		else
		{
			document.getElementById("result").value="Error"
		}
	}
	else
	{
		firstnum=parseFloat(document.getElementById("result").value)
		if(firstnum>0)
		{
			result=Math.log10(firstnum)
			document.getElementById("result").value=result
		}
		else
		{
			document.getElementById("result").value="Error"
		}
	}
}
function natural_log() {
	if(operation!=null)
	{
		equal()
		firstnum=result
		if(firstnum>0)
		{
			result=Math.log(firstnum)
			document.getElementById("result").value=result
		}
		else
		{
			document.getElementById("result").value="Error"
		}
	}
	else
	{
		firstnum=parseFloat(document.getElementById("result").value)
		if(firstnum>0)
		{
			result=Math.log(firstnum)
			document.getElementById("result").value=result
		}
		else
		{
			document.getElementById("result").value="Error"
		}
	}
}
function change() {
	if(document.getElementById("sin").value=="sin")
	{
		document.getElementById("sin").style="background-image: url(sin_inverse.JPG) ; background-repeat: no-repeat ; background-position: center ; background-size: 98%"
		document.getElementById("sin").value=" "
		document.getElementById("cos").style="background-image: url(cos_inverse.JPG) ; background-repeat: no-repeat ; background-position: center ; background-size: 98%"
		document.getElementById("cos").value=" "
		document.getElementById("tan").style="background-image: url(tan_inverse.JPG) ; background-repeat: no-repeat ; background-position: center ; background-size: 98%"
		document.getElementById("tan").value=" "
		document.getElementById("degree").disabled=true
	}
	else
	{
		document.getElementById("sin").style="color: grey; font-weight: normal"
		document.getElementById("sin").value="sin"
		document.getElementById("cos").style="color: grey; font-weight: normal"
		document.getElementById("cos").value="cos"
		document.getElementById("tan").style="color: grey; font-weight: normal"
		document.getElementById("tan").value="tan"
		document.getElementById("degree").disabled=false
	}
}
function degree() {
	if(isdegree==true)
	{
		document.getElementById("degree").value="rad"
		document.getElementById("second").disabled=true
	}
	else
	{
		document.getElementById("degree").value="deg"
		document.getElementById("second").disabled=false
	}
}
function sin() {
	if(document.getElementById("sin").value=="sin")
	{
		if(isdegree==true)
		{
			if(operation!=null)
			{
				equal()
				firstnum=result
				result=Math.sin(firstnum * (Math.PI / 180))
				document.getElementById("result").value=result
			}
			else
			{
				firstnum=parseFloat(document.getElementById("result").value)
				result=Math.sin(firstnum * (Math.PI / 180))
				document.getElementById("result").value=result
			}
		}
		else
		{
			if(operation!=null)
			{
				equal()
				firstnum=result
				result=Math.sin(firstnum)
				document.getElementById("result").value=result
			}
			else
			{
				firstnum=parseFloat(document.getElementById("result").value)
				result=Math.sin(firstnum)
				document.getElementById("result").value=result
			}
		}
	}
	else
	{
		if(operation!=null)
		{
			equal()
			firstnum=result
			result=Math.asin(firstnum)
			document.getElementById("result").value=result
		}
		else
		{
			firstnum=parseFloat(document.getElementById("result").value)
			result=Math.asin(firstnum)
			document.getElementById("result").value=result
		}
	}
}
function cos() {
	if(document.getElementById("cos").value=="cos")
	{
		if(isdegree==true)
		{
			if(operation!=null)
			{
				equal()
				firstnum=result
				result=Math.cos(firstnum * (Math.PI / 180))
				document.getElementById("result").value=result
			}
			else
			{
				firstnum=parseFloat(document.getElementById("result").value)
				result=Math.cos(firstnum * (Math.PI / 180))
				document.getElementById("result").value=result
			}
		}
		else
		{
			if(operation!=null)
			{
				equal()
				firstnum=result
				result=Math.cos(firstnum)
				document.getElementById("result").value=result
			}
			else
			{
				firstnum=parseFloat(document.getElementById("result").value)
				result=Math.cos(firstnum)
				document.getElementById("result").value=result
			}
		}
	}
	else
	{
		if(operation!=null)
		{
			equal()
			firstnum=result
			result=Math.acos(firstnum)
			document.getElementById("result").value=result
		}
		else
		{
			firstnum=parseFloat(document.getElementById("result").value)
			result=Math.acos(firstnum)
			document.getElementById("result").value=result
		}
	}
}
function tan() {
	if(document.getElementById("tan").value=="tan")
	{
		if(isdegree==true)
		{
			if(operation!=null)
			{
				equal()
				firstnum=result
				result=Math.tan(firstnum * (Math.PI / 180))
				document.getElementById("result").value=result
			}
			else
			{
				firstnum=parseFloat(document.getElementById("result").value)
				result=Math.tan(firstnum * (Math.PI / 180))
				document.getElementById("result").value=result
			}
		}
		else
		{
			if(operation!=null)
			{
				equal()
				firstnum=result
				result=Math.tan(firstnum)
				document.getElementById("result").value=result
			}
			else
			{
				firstnum=parseFloat(document.getElementById("result").value)
				result=Math.tan(firstnum)
				document.getElementById("result").value=result
			}
		}
	}
	else
	{
		if(operation!=null)
		{
			equal()
			firstnum=result
			result=Math.atan(firstnum)
			document.getElementById("result").value=result
		}
		else
		{
			firstnum=parseFloat(document.getElementById("result").value)
			result=Math.atan(firstnum)
			document.getElementById("result").value=result
		}
	}
}
function equal() {
	try {
		if(operation=="+")
		{
			secondnum=parseFloat(document.getElementById("result").value)
			result=firstnum + secondnum
			operation=null
		}
		else if (operation=="-") 
		{
			secondnum=parseFloat(document.getElementById("result").value)
			result=firstnum - secondnum
			operation=null
		}
		else if (operation=="*") 
		{
			secondnum=parseFloat(document.getElementById("result").value)
			result=firstnum*secondnum
			operation=null
		}
		else if (operation=="/") 
		{
			secondnum=parseFloat(document.getElementById("result").value)
			if(secondnum==0)
			{
				result="Not Defined"
			}
			else
			{
				result=firstnum/secondnum
			}			
			operation=null
		}
		else if (operation=="%") 
		{

			if(document.getElementById("result").value=="")
			{
				result=firstnum/100
				operation=null
			}
			else
			{
				secondnum=parseFloat(document.getElementById("result").value)
				result=(firstnum/secondnum)*100
				operation=null
			}
		}
		else if(operation=="^")
		{
			secondnum=parseFloat(document.getElementById("result").value)
			result=Math.pow(firstnum,secondnum)
			operation=null
		}
		else if(operation==null)
		{
			result=document.getElementById("result").value
			if(result.charAt(result.length-1)=='.') 
			{
				result=result.substring(0,result.length-1)
			}
		}
		document.getElementById("result").value=result.toString()
	}
	catch(e) {
		document.getElementById("result").value="Error"
	}
}
function clr() {
	document.getElementById("result").value="0"
	document.getElementById("c").value="AC"
	operation=null
	document.getElementById("backspace").disabled=false
}
function backspace() {
	if(document.getElementById("result").value==result)
	{
		document.getElementById("backspace").disabled=true
	}
	else
	{
		var val=document.getElementById("result").value
		if(val.length > 1)
		{	
			if(document.getElementById("result").value==Math.PI || document.getElementById("result").value==Math.E(1))
			{
				document.getElementById("result")="0"
				document.getElementById("c").value="AC"
				document.getElementById("backspace").disabled=false
			}
			document.getElementById("result").value=val.substring(0,val.length-1)
			if(document.getElementById("result").value=="0" && operation==null)
			{
				document.getElementById("c").value="AC"
			}
		}
		else
		{
			if(operation!=null)
			{
				document.getElementById("result").value=""
			}
			if(operation==null)
			{
				document.getElementById("result").value="0"
				document.getElementById("c").value="AC"
			}
		}
	}
}