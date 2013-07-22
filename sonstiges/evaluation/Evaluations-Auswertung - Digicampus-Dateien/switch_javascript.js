jQuery(document).ready(function() {


jQuery("#open_switch_link").click(function(){jQuery(this).blur();jQuery("~div",this).slideToggle();return false;});
       jQuery("a#closelist").click(function(){jQuery("#open_switch_link").click()});

        var waiting_content = "<div style=text-align:center><br><br><img src='https://digicampus.uni-augsburg.de/kursverwaltung/plugins_packages/augsburg-medienlabor/MultipleAccounts/assets/images/bluebar.gif' alt=''><br><font color=#435B87>Benutzerkonto wird gewechselt... </font></div>";


        jQuery(document).ready(function(){
              jQuery("body").append("<div id=changediag>"+waiting_content+"</div>");

        //define config object
        var dialogOpts = {
            title:"Accountwechsel",
            modal: true,
            autoOpen: false,

            width: 800,
            open: function() {
                //display correct dialog content

            }
        };
        //damit auf jqueryui-fehlerseiten das nicht ständig sichtbar ist
        jQuery("div#changediag").hide();
        jQuery("div#changediag").dialog(dialogOpts);
        })
        var d = new Date();

        var url = document.URL;
        //rautezeichen müssen weg, da ansonsten kein reload stattfindet!

        if((rautezeichen = url.indexOf("#")) != -1)
        {
            url = url.substring(0,rautezeichen);
        }
        var refreshappendix = "drv="+d.getUTCMilliseconds();

        if( url.indexOf("?") == -1)
            refreshappendix = "?"+refreshappendix;
        else
            refreshappendix = "&"+refreshappendix;



        jQuery(".switchlink").click(function()
        {
            try{
                window.stop();
            }
            catch( e){}
            try{
               document.execCommand('Stop')
            }
            catch(e){}
            /*maybe this restarts animation in some browsers. doesnt in ff3 thou*/
            $("div#changediag img").attr('src', $("div#changediag  img").attr('src')+"?"+new Date().getTime());
            var selected_acc = $(this).attr('id');
            jQuery.ajax(  {
                 type: "POST",
                 url:  "https://digicampus.uni-augsburg.de/kursverwaltung/plugins.php/multipleaccounts/switch/true",
                 data: 'switch='+selected_acc,

                    success: function(){
                      window.location.href = url+refreshappendix;
                    },
                 error: function(){
                     jQuery("div#changediag").html('<div class="messagebox messagebox_error">Das Wechseln des Benutzerkontos ist fehlgeschlagen. Bitte gehen Sie auf die Startseite, um das genutzte Benutzerkonto zu wechseln. </div>');
                    }
                }
        );
        $("div#changediag").dialog("open");
                jQuery("div#changediag").show();
    });
});