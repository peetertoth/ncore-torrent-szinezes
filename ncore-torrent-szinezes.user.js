// ==UserScript==
// @name         ncore-torrents-szinezes
// @namespace    peetftp.ddns.net
// @version      1.0
// @description  feltöltés ideje alapján szinezi a boxok hátterét
// @author       kyle
// @match        https://ncore.cc/torrents.php?miszerint*
// @grant        none
// @require      https://code.jquery.com/ui/1.11.4/jquery-ui.js
// @updateURL    https://raw.githubusercontent.com/peetertoth/ncore-torrent-szinezes/master/ncore-torrent-szinezes.user.js
// @downloadURL  https://raw.githubusercontent.com/peetertoth/ncore-torrent-szinezes/master/ncore-torrent-szinezes.user.js
// ==/UserScript==

$(document).ready(function() {
    l = document.getElementsByClassName('box_feltoltve2');
    colors = ['#2ECC71', '#58D68D', '#82E0AA', '#ABEBC6', '#D5F5E3',
              '#3498DB', '#5DADE2', '#85C1E9', '#AED6F1', '#D6EAF8',
              '#8E44AD', '#A569BD', '#BB8FCE', '#D2B4DE', '#E8DAEF'];
    cDate = new Date();

    for (i=0; i < l.length; ++i) {
        sDate = l[i].innerHTML.split('<br>')[0];
        date = new Date(sDate);

        for (j=0; j < colors.length; ++j) {
            compareDate = new Date();
            compareDate.setDate(compareDate.getDate() - (j+1)*7);

            if (date > compareDate) {
                l[i].style.backgroundColor = colors[j];
                break;
            }
        }
    }
});