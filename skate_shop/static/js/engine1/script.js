// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fade(c,a,b){var e=jQuery,g=e(this),d=e("ul",b),f=e("<div>").addClass("ws_effect").appendTo(b.parent()),h={position:"absolute",left:0,top:0,width:"100%",height:"100%",transform:"translate3d(0,0,0)"};this.go=function(i,j){g.trigger("effectStart",f);var k=e(a.get(i)).clone().css(h).hide().appendTo(f);if(!c.noCross){var l=e(a.get(j)).clone().css(h).appendTo(f);l.fadeOut(c.duration,function(){l.remove()})}k.fadeIn(c.duration,function(){g.trigger("effectEnd",i);k.remove()});return i}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"fade",prev:"",next:"",duration:20*100,delay:33*100,width:1024,height:768,autoPlay:true,playPause:true,stopOnHover:false,loop:false,bullets:true,caption:true,captionEffect:"fade",controls:true,onBeforeStep:0,images:0});