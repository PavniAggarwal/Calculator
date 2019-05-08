var firstnum;
var secondnum;
var result;
var operation=null;
function dis(val) {
	if(document.getElementById("result").value=="0" || document.getElementById("result").value==result || document.getElementById("result").value=="")
	{
		document.getElementById("result").value=val
	}
	else
	{
		document.getElementById("result").value+=val
	}
	result="0"
	document.getElementById("backspace").disabled=false
	if(val!=0)
	{
		document.getElementById("c").value="C"
	}
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