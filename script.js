var json = [{
  "menuText" : "Option 1",
  "url" : "#",
  "subMenu":[{
	"subMenuText" : "Sub-Option 1.1",
	"url" : "#"
  },{
	"subMenuText" : "Sub-Option 1.2",
	"url" : "#"
  },{
	"subMenuText" : "Sub-Option 1.3",
	"url" : "#"
  }]
},{
  "menuText" : "Option 2",
  "url" : "#",
  "subMenu":[{
	"subMenuText" : "Sub-Option 2.1",
	"url" : "#"
  },{
	"subMenuText" : "Sub-Option 2.2",
	"url" : "#"
  },{
	"subMenuText" : "Sub-Option 2.3",
	"url" : "#"
  }]
},{
  "menuText" : "Option 3",
  "url" : "#",
  "subMenu":[{
	"subMenuText" : "Sub-Option 3.1",
	"url" : "#"
  },{
	"subMenuText" : "Sub-Option 3.2",
	"url" : "#"
  },{
	"subMenuText" : "Sub-Option 3.3",
	"url" : "#"
  }]
},{
  "menuText" : "Option 4",
  "url" : "#",
  "subMenu":[{
	"subMenuText" : "Sub-Option 4.1",
	"url" : "#"
  },{
	"subMenuText" : "Sub-Option 4.2",
	"url" : "#"
  },{
	"subMenuText" : "Sub-Option 4.3",
	"url" : "#"
  }]
}];

$(function(){
	
	var html = "",
		  el;
	$.each(json,function(i){
		html+='<li><a href="'+json[i].url+'">'+json[i].menuText+'</a>';
		if( json[i].subMenu.length > 0) {
			el = json[i].subMenu;
			html+='<ul class="sub">';
			$.each(el,function(n){
				html+='<li><a href="'+el[n].url+'">'+el[n].subMenuText+'</a></li>';
			})
			html+='</ul>';
		}
		html+='</li>';
	});
	$("ul.main").html(html);
	
	$(".main a").click(function(e){
		e.preventDefault();
		$(this).parent().find(".sub").slideToggle('fast');
	});
	$(".menuButton").on('click',function(e){
		var curr = parseInt($('.content').css('left'),10) > 195;
		e.preventDefault();
		$(".content").animate({'left':(curr ? 0 : 200)},300);
	});
	
	
})

