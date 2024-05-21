/*ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ*/
var PrClick=new Array(false,false);
/*подсветка нажатой кнопки*/
function click_event_one(id)
{
	var doc=document.getElementsByTagName("a");
	var doc_id=document.getElementsByTagName("span");
	for (var j=0; j<doc.length; j++)
	{
		if (doc_id[j].id==id && doc[j].style.color=='yellow')
		{
			doc[j].style.color="";
		}
		else if (doc_id[j].id==id)
		{
			doc[j].style.color='yellow';
		}
	}
}
/*Функция для отображения всех выбранных блоков*/
/*
	В функции присутствует недочёт ввиде ошибочного первого срабатывания
	когда display:block;
*/
function visibility_invisibility_one(id)
{
	click_event_one(id);
	var doc=document.getElementById(id);
	if (doc.style.display=="block")
	{
		doc.style.display="none";
	}
	else
	{
		doc.style.display="block";
	}
}

/*подсветка лишь одной нажатой кнопки*/
function click_event_all(id)
{
	var doc=document.getElementsByTagName("a");
	var doc_id=document.getElementsByTagName("span");
	for (var j=0; j<doc.length; j++)
	{
		if (doc_id[j].id==id)
		{
			doc[j].style.color='Yellow';
		}
		else
		{
			doc[j].style.color="";
		}
	}
}

/*Функция для отображения только одного блока*/
function visibility_invisibility_all(id)
{
	click_event_all(id);
	var doc=document.getElementsByTagName("span");
	
	for (var i=0; i<doc.length; i++)
	{
		
		if (doc[i].id==id)
		{
			doc[i].style.display="block";
		}
		else
		{
			
			doc[i].style.display="none";
		}
	}
}

/*нажатие отжатие кнопки*/
function button_press(press,i,doc,C,B,BC,BSt,MT,BSh)
{
			PrClick[i]=press;
			doc[i].style.color=C;
			doc[i].style.background=B;
			doc[i].style.borderColor=BC;
			doc[i].style.borderStyle=BSt;
			doc[i].style.boxShadow=BSh;
			/*Firefox*/
			doc[i].style.MozTransform=MT;
			/*Internet Explorer*/
			doc[i].style.transform=MT;
}
/*оброботка нажатия на кнопку*/
function pressing_the_button(id)
{
	var doc=document.getElementsByClassName("realm2");
	var j=0;
	for (var i=0; i<doc.length; i++)
	{
		if (i==0)
		{
			j=1;
		}
		else
		{
			j=0;
		}
		/*отжата-нажать*/
		if (doc[i].id==id && PrClick[i]==false && PrClick[j]==false)
		{
			button_press(true,i,doc,'Yellow','rgb(0,180,180)','Yellow','groove','translate(0px,10px)','0px 0px black');
		}
		/*т.к. одна уже нажата, то её надо отжать, а другую нажать*/
		else if (doc[i].id==id && PrClick[i]==false && PrClick[j]==true)
		{
			button_press(true,i,doc,'Yellow','rgb(0,180,180)','Yellow','groove','translate(0px,10px)','0px 0px black');
			button_press(false,j,doc,"","","","","","");
		}
		/*нажата-отжать*/
		else if (doc[i].id==id && PrClick[i]==true && PrClick[j]==false)
		{
			button_press(false,i,doc,"","","","","","");
		}
	}
}

/*Функция для метода отображения текста*/
function typeOne_or_typeTwo(id)
{
	for (var i=0;i<2;i++)
	{
		if (document.getElementById(id).id!="basis" && (PrClick[0]==true || PrClick[1]==true))
		{
			document.getElementById("basis").style.display="none";
			document.getElementsByClassName("mya")[0].style.color="rgb(255,255,255)";
		}
		else
		{
			visibility_invisibility_all("basis");
			return;
		}
		if (PrClick[0]==true)
		{
			visibility_invisibility_one(id);
			return;
		}
		else if (PrClick[1]==true)
		{
			visibility_invisibility_all(id);
			return;
		}
	}
}

/*Для начального отображения страницы*/
function first_in()
{
	document.getElementById("basis").style.display="block";
	document.getElementsByTagName("a")[0].style.color="Yellow";
}
first_in();