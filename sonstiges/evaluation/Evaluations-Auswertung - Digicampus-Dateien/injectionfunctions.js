

STUDIP.injectCode =
{
    jq : $,
    addWarningToVeranstaltungsnummer: function()
    {
        // alert("fu");
        jq = this.jq;
        if(!this.jq('input[name=course_seminar_number]'))
        {
            return true;
        }

        var didprepend=false;
        jq('input[name=course_seminar_number]').focus(function () {
            if(didprepend)
                return;
            var elem = jq(this).parent().get(0);
            //@todo vorsicht hier wird $verwendet
            var warning ="<div  id=warning_div style='position:absolute; margin-top:0px; padding:5px; border:2px solid #798CDB; background:#FFFFAC; width:200px; font-size:80%;'>An der Philosophisch-Sozialwissenschaftlichen Fakult�t wird die Veranstaltungsnummer automatisch generiert. In diesem Fall m�ssen Sie keine Nummer eintragen.  <br><br><a href=#>Klicken Sie hier um die Meldung zu schlie�en.</a></div>";
           
            didprepend = true;
            jq(elem).append(warning);
            jq("#warning_div").click(function(){
                jq("div#warning_div").hide()
            });
        //alert('a');
        });

    },
    hideIframe:   function ()
    {//alert('hide');
        $("iframe#logindialog_iframe").hide();
        $("div#iframe_loading_div").show();
    },
    showQISMessage: function(in_wizzard, text)
    { var is_rp = null;
        if(in_wizzard)
        {
             is_rp = $("body:contains('Sie haben die M�glichkeit, sich Raumeigenschaften sowie einen konkreten Raum zu w�nschen.')");
            if (is_rp)
            {
                $("td:contains('hier ein, welche Angaben zu R�umen gemacht werden')").append(text);
            }
        }
        else
        {
             is_rp = $("body:contains('Hier k�nnen Sie f�r die gesamte Veranstaltung')");
            if (is_rp)
            {
                $("td:contains('Hier k�nnen Sie f�r die gesamte Veranstaltung')").first().append(text);
            }
        }

    },
    alerttest:function()
    {
        alert('Im in injectorconfig');
    }

}


