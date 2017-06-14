
var i=0;
var j=0;
var turns=0;
var a=new Array('A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H');
var temp;
var num;
var pattern=new Array(16);
var position=new Array(16);
var count=null;
var clear=0;
var prev_id;

function randomchar(x)
{
	return String.fromCharCode(65 + x); 
}

function backpattern()
{
	for(i=0;i<16;i++)
	{
		position[i] ='r'+ Math.floor(i/4) + 'c' + Math.floor(i%4);
		num=Math.floor((Math.random())*(16-i));
		temp=a[num];
		a[num]=a[15-i];
		a[15-i]=temp;
		document.getElementById(position[i]+'').className='default';
	}
}

function show(active)
{
	if(count==null)
	{
		active.className='clicked';
		active.innerHTML=a[position.indexOf(active.id+'')];
		count=a[position.indexOf(active.id+'')];
		prev_id=active.id+'';
		turns++;
	}
	else if(prev_id!=active.id)
	{
		if(count==a[position.indexOf(active.id+'')])
		{
			clear++;
		    document.getElementById('clear').innerHTML = 'CLEAR:' + clear;
			active.className='clicked';
		    active.innerHTML=a[position.indexOf(active.id+'')];
			document.getElementById(prev_id+'').className='found';
			document.getElementById(active.id+'').className='found';
			document.getElementById(prev_id+'').onclick='';
			document.getElementById(active.id+'').onclick='';
			count=null;
		}
		else
		{
			alert(a[position.indexOf(active.id)]);
			setTimeout(hide(prev_id,active.id),6000);
		}
	}
	if(clear==8)
	{
		document.getElementById('clear').innerHTML = 'CLEAR:'+'All';
		document.getElementById('turns').innerHTML = 'TURNS: ' + turns;
		var score=turns;
		/*document.getElementById('score')=score;*/
		alert("congo your minimum turns are:"+turns);
    }
}    

function hide(id1,id2)
{
       document.getElementById(id1+'').className='default';
       document.getElementById(id2+'').className='default';  
       document.getElementById(id1 + '').innerHTML = document.getElementById(id2 + '').innerHTML = '';
	   document.getElementById('clear').innerHTML = 'CLEAR:' + clear;
	   document.getElementById('turns').innerHTML = 'TURNS:' + turns;	   
	   count=null;
}
function rand(id2)
{
   var yup=setInterval(frame,1000);
   var t=document.getElementById('id2');
   function frame()
   {
      var r=Math.floor(Math.random()*256);
	  var g=Math.floor(Math.random()*256);
	  var b=Math.floor(Math.random()*256);
      t.style.color=rgb(r,g,b);
   }
}   
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			

	
	    
		

 
