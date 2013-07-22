
STUDIP.beautifylogin =
{
iframe_loaded : 0,
keepiframevisible : true,
iframe_last_url:"",
showIframe: function()
{
if(this.keepiframevisible)
{
$("iframe#logindialog_iframe").show();
$("div#iframe_loading_div").hide();
}
},
hideIframe:   function ()
{
$("iframe#logindialog_iframe").hide();
$("div#iframe_loading_div").show();
} ,
/*
*called every n milisecs to check if it should set the iframe visible
*/
checkIframeVisibility:   function ()
{
if(this.keepiframevisible)
setTimeout("STUDIP.beautifylogin.showIframe();", 2000);
else
this.hideIframe()
},
loadtest:function()
{
alert(document.getElementById("logindialog_iframe").documentWindow.location.href);

},
heightenLoadCounter :function()
{  /*check for iframe having a real url, not just false. needed for chrome*/
var curr_url = '';
try{ curr_url = (document.getElementById("logindialog_iframe").src);}
catch(e){}

if(!curr_url || (curr_url).indexOf("http")> -1)
this.iframe_loaded++;

if( this.iframe_loaded > 3)
{
this.showhelp();
this.iframe_loaded  = 0;
}
},
/*
* ausm DC: Zeige eine Hilfe wenn der Loginiframe öfter lädt
**/
showhelp: function()
{
var dialogOpts = {
title:"Loginprobleme?",
modal: false,
autoOpen: false,
position: [50,50]
};
$("div#password_question").dialog(dialogOpts).show().dialog("open");;
var helptext = 'Als Studierender erhalten Sie Ihre pers&ouml;nliche RZ-Benutzerkennung mit den Immatrikulationsunterlagen.<br>Als Mitarbeiter erhalten Sie Ihre Kennung von den DV-Betreuern Ihrer Fakult&auml;t.<br><br><ul><li>Wenn diese Kennung nicht akzeptiert wird, k&ouml;nnen Sie initial versuchen, Ihr  <a class="link-extern" href="https://www.student.uni-augsburg.de/cgi-bin/passwd" target="_blank">Passwort zu &auml;ndern</a> .<ul><li>Ist dies nicht erfolgreich, wenden Sie sich als Mitarbeiter bitte an Ihren  <a class="link-extern" href="http://www.rz.uni-augsburg.de/info/dvbetreuer/" target="_blank">DV-Betreuer</a> ,</li><li>als Studierender an das  <a class="link-extern" href="http://www.rz.uni-augsburg.de/de/zebra/index.html" target="_blank">ZEBRA</a> .</li></ul></li></ul><br><ul><li>Wenn Ihr Passwort akzeptiert wurde, es aber danach nicht weitergeht, wenden Sie sich bitte an unseren  <a class="link-extern" href="http://support.imb-uni-augsburg.de/open.php" target="_blank">Digicampus-Support</a> .</li></ul>';
$("div#password_question input").first().click(function(){$("div#password_question").html(helptext);$("div#password_question a").css("text-decoration","underline");});
$("div#password_question input:eq(1)").click(function(){$("div#password_question").dialog("close")});

},
closehelp:function()
{
$("div#password_question").dialog("close");
}

}




//activate and construct the dialog
$(document).ready(function(){
if(self==top)
{
var wWidth = $(window).width();
var dWidth = wWidth * 0.8; //this will make the dialog n % of thewindow size
var dHeight = $(window).height() * 1.5;;


//define config object
var dialogOpts = {
title:"Logout",
modal: false,
autoOpen: false,

width: dWidth,
height:dHeight,
open: function() {
//display correct dialog content
// $("div#logindialog").load("")
//check if iframe should be visible (in interval). Shall avoid showing the iframe content thou not necessary
var iframe_href_interval = window.setInterval("STUDIP.beautifylogin.checkIframeVisibility()", 5);
// var iframe_href_interval2 = window.setInterval("STUDIP.beautifylogin.loadtest()", 2000);
STUDIP.beautifylogin.hideIframe();
$('iframe#logindialog_iframe').height(parseInt($('div#logindialog').height())+Math.abs(parseInt($('iframe#logindialog_iframe').css("margin-top")))-10+"px" );

},
close: function(ev, ui)
{
//If user cancels login, then page must be reloaded with cancel_login set!
//Else he would see the login-page whatever page called.
var d = new Date();
var url = document.URL;
//rautezeichen müssen weg, da ansonsten kein reload stattfindet!
if((rautezeichen = url.indexOf("#")) != -1)
{
url = url.substring(0,rautezeichen);
}
var refreshappendix = "drv="+d.getUTCMilliseconds()+"&cancel_login=1";

if( url.indexOf("?") == -1)
refreshappendix = "?"+refreshappendix;
else
refreshappendix = "&"+refreshappendix;
window.location.href = url+refreshappendix;
//$(this).close();
}
};




$("a[href*=\"logout\"]").each(function(index) {
//create ONE div
if(index==0)
{   var waiting_content = "<div style=text-align:center><br><br><img src='https://digicampus.uni-augsburg.de/kursverwaltung/plugins_packages/augsburg-medienlabor/BeautifyLogin/img/bluebar.gif' alt=''><br><font color=#435B87>Daten werden geladen...</font></div>";
//a div including an iframe where head is being cut via margin-top
var   pw_q = "<div id='password_question' style='display:none;'>Haben Sie Probleme, sich einzuloggen und benötigen Sie Hilfe? <br><br><input type=button value=Ja>&nbsp;<input type=button value=Nein></div>";
var pw_link="";

    $("body").append("<div id=logindialog>"+pw_q+pw_link+"<iframe id=logindialog_iframe  style=' width:99%;height:140%; margin-top: -1em; overflow: hidden; border:none;' onload='top.STUDIP.beautifylogin.heightenLoadCounter();' src='javascript:false;'></iframe><div id=iframe_loading_div>"+waiting_content+"</div></div>");
$("div#logindialog").dialog(dialogOpts);

}
//if clicked on login / logout, activate dialog
$(this).click(function() {
var iframe_target = $(this).attr("href");
$("iframe#logindialog_iframe").attr("src",iframe_target);
this.iframe_last_url = iframe_target;
$("div#logindialog").dialog("open") ;
return false;
});

});

}



});

