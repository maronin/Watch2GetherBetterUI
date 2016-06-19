// ==UserScript==
// @name         watch2gether better player
// @version      1.0.0
// @description  Makes the UI way better.
// @author       Mark
// @match        http://www.watch2gether.com/rooms/*
// @match        https://www.watch2gether.com/rooms/*
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @require      https://code.jquery.com/ui/1.11.4/jquery-ui.min.js
// @grant        GM_addStyle
// ==/UserScript==

if( typeof GM_addStyle != 'function' )
    function GM_addStyle(css)
{
    var style = document.createElement('style');
    style.innerHTML = css;
    style.type='text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
}
    var minifiedCss = "#player-chat { position: relative !important; } #userbar-chat { height: 100% !important; } .chat-right {position: fixed !important; bottom: 0; right: 0; height: 100%; width: 380px !important; background: white; padding: 0px; } .ui.container { width: calc(100% - 380px); margin-left: 1px !important; margin-right: auto!important; } #playlist-history .bottom.attached.segment { height: calc(100% - 40px);} .ui.attached.menu { margin: 0 0px; width: calc(100%); } .ui.attached.segment { width: 100% !important; margin: 0 !important; }";
    var playerBar = ".ui-slider-horizontal .ui-slider-handle { width: 4px;margin-left: 0px; height: 13px; margin: 0px; background: #969696; border-radius: 0px; top: 0px !important; border: none;  outline: 0;}";
    var slider = " .ui-slider-range { background-color: #F12B24 !important; }";
    GM_addStyle(minifiedCss);
    GM_addStyle(slider);
    GM_addStyle(playerBar);

$(document).ready(function() {

    var chat = $("#userbar-chat").parent();
    var playlist = $("#playlist-history").parent();
    var playerChat = $("#player-chat");
    var playerSearch = $($("#client-container .ui").children()[2]);
    var searchResultMenu = $("#search-results-menu").parent();

    chat.removeClass("column");
    chat.addClass("chat-right");
    $("#client-pusher").append(chat);
    playerSearch.prepend(chat);
    playerChat.append(playlist);

    playlist.removeClass('five');
    prependClass(playlist, 'six');

    searchResultMenu.removeClass('eleven');
    prependClass(searchResultMenu, 'sixteen');


    $('#playlist-history').css('height', '100%');
    $('#client-container').css('padding-bottom', '0px');

    
    //Hide the cookies
    $("#cookie-message").hide();
    
    //Remove the like button.
    $('.like-button').remove();
    //Remove the feedback sticker.
    $('.feedback-sticker').remove();
    //remove the footer.
    $('.footer').remove();
    
    
    
    //Custom player bar
    $(".ui-slider-handle.ui-state-default.ui-corner-all").removeClass("ui-slider-handle");
});

function prependClass(ele, className) {
    var classes = ele.attr('class');
    classes = className + ' ' + classes;
    ele.attr('class', classes);
}