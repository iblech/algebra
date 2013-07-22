function showArtikel(id, typ)
{
    if(!typ) typ = '';
	jQuery.get(STUDIP.ABSOLUTE_URI_STUDIP + 'plugins.php/schwarzesbrettplugin/ajaxdispatch?objid='+id, function(transport) {
		jQuery('#content'+typ+'_'+id).html(transport);
		jQuery('#content'+typ+'_'+id).slideDown();
		jQuery('#headline'+typ+'_'+id).hide();
		if(typ != '') {
		    jQuery('#close_'+id).attr('href','javascript: closeArtikel("'+id+'","l");');
		}
	});
}

function closeArtikel(id, typ)
{
    if(!typ) typ = '';
    jQuery('#content'+typ+'_'+id).hide();
	jQuery('#headline'+typ+'_'+id).show();
	jQuery('#indikator_'+id).attr('src', STUDIP.ASSETS_URL + 'images/icons/16/blue/arr_1right.png');
}

function toogleThema(id)
{
	if(jQuery('#list_'+id).css('display') == 'none') {
	    jQuery.get(STUDIP.ABSOLUTE_URI_STUDIP + 'plugins.php/schwarzesbrettplugin/ajaxdispatch?thema_id='+id, function(transport) {
		    jQuery('#list_'+id).html(transport);
		    jQuery('#list_'+id).slideToggle();
	    });
	} else {
	    jQuery('#list_'+id).slideToggle();
	}
	jQuery('#show_'+id).toggle();
	jQuery('#hide_'+id).toggle();
}
