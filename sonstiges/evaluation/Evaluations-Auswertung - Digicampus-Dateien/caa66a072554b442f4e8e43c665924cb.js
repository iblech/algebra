


var json_html_subnav = (["","","<a href=\"\/kursverwaltung\/sem_portal.php\">Veranstaltungen<\/a><a href=\"\/kursverwaltung\/archiv.php\">Archiv<\/a><a href=\"\/kursverwaltung\/browse.php\">Personen<\/a><a href=\"https:\/\/digicampus.uni-augsburg.de\/kursverwaltung\/plugins.php\/iframeplugin\/api\/lehramt_modularisiert\">Modulhandb&uuml;cher<\/a><a href=\"\/kursverwaltung\/institut_browse.php\">Einrichtungen<\/a><a href=\"\/kursverwaltung\/lit_search.php\">Literatur<\/a><a href=\"\/kursverwaltung\/resources.php?view=search&amp;reset=TRUE\">R&auml;ume<\/a>","<a href=\"\/kursverwaltung\/sms_box.php?sms_inout=in\">Posteingang<\/a><a href=\"\/kursverwaltung\/sms_box.php?sms_inout=out\">Gesendet<\/a><a href=\"\/kursverwaltung\/sms_send.php?cmd=new\">Neue Nachricht schreiben<\/a><a href=\"https:\/\/digicampus.uni-augsburg.de\/kursverwaltung\/plugins.php\/iframeplugin\/api\/webmail\">Universit&auml;re E-Mail<\/a>","<a href=\"\/kursverwaltung\/calendar.php?caluser=self\">Terminkalender<\/a><a href=\"\/kursverwaltung\/dispatch.php\/calendar\/schedule\">Stundenplan<\/a>","<a href=\"\/kursverwaltung\/about.php\">Profil<\/a><a href=\"\/kursverwaltung\/edit_about.php?view=Bild\">Bild<\/a><a href=\"\/kursverwaltung\/edit_about.php?view=Daten\">Nutzerdaten<\/a><a href=\"\/kursverwaltung\/edit_about.php?view=Sonstiges\">Kategorien<\/a><a href=\"\/kursverwaltung\/plugins.php\/sprechstundenplugin\/show\">Sprechstunden<\/a><a href=\"\/kursverwaltung\/plugins.php\/multipleaccounts\/my_accounts?ajax_mode=0\">Meine Benutzerkonten<\/a>","<a href=\"\/kursverwaltung\/online.php\">Wer ist online?<\/a><a href=\"\/kursverwaltung\/contact.php?view=alpha\">Kontakte<\/a><a href=\"\/kursverwaltung\/chat_online.php\">Chat<\/a><a href=\"\/kursverwaltung\/dispatch.php\/studygroup\/browse\">Studiengruppen<\/a><a href=\"\/kursverwaltung\/score.php\">Rangliste<\/a>","<a href=\"\/kursverwaltung\/admin_news.php?range_id=self\">Ank&uuml;ndigungen<\/a><a href=\"\/kursverwaltung\/admin_vote.php?page=overview&amp;showrangeID=engalexa\">Umfragen und Tests<\/a><a href=\"\/kursverwaltung\/admin_evaluation.php?rangeID=engalexa\">Evaluationen<\/a><a href=\"\/kursverwaltung\/edit_about.php?view=rss\">RSS-Feeds<\/a><a href=\"\/kursverwaltung\/admin_lit_list.php?_range_id=self\">Literatur<\/a><a href=\"\/kursverwaltung\/export.php\">Export<\/a><a href=\"https:\/\/digicampus.uni-augsburg.de\/kursverwaltung\/plugins.php\/iframeplugin\/api\/qis\">QIS<\/a><a href=\"https:\/\/digicampus.uni-augsburg.de\/kursverwaltung\/plugins.php\/iframeplugin\/api\/megastore\">Megastore<\/a>","<a href=\"\/kursverwaltung\/plugins.php\/demokratix\/show\">Demokratix - Eure Ideen f&uuml;r eure Uni<\/a><a href=\"\/kursverwaltung\/plugins.php\/demokratix\/report\">Berichte ansehen<\/a><a href=\"\/kursverwaltung\/plugins.php\/demokratix\/help?test=true\">So funktionierts<\/a>",""]);
var somethingopen = false;
var saved_object;
var is_active_item;
jQuery(document).ready(function()
{
var text_to_append = "";
/*add a subnavigation to each menuentry-item*/
jQuery("#barTopMenu li").each(function(index){

text_to_append = $("<div class=studip_sub_navigation style=\"display:none\" ></div>");
try {if(json_html_subnav[index].length>1)
$(text_to_append).html(json_html_subnav[index])
jQuery(this).append(text_to_append);
}
catch(e){}
})

jQuery("#barTopMenu li").hover
(

function(){
if(!somethingopen)
{somethingopen = true;
saved_object = jQuery("div.studip_sub_navigation",this);
is_active_item = jQuery(this).hasClass("active");
setTimeout(function(){
if(somethingopen)
{
jQuery(saved_object).parent(0).addClass("active");
jQuery(saved_object).fadeIn(100);

}
},350);

}
},
function(){
somethingopen = false;
jQuery("div.studip_sub_navigation").fadeOut(500);
if(!is_active_item)
    jQuery(this).removeClass("active");
}

);

});