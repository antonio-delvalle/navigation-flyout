/*-----------------------------------------------------------------------------------*/
/* GENERAL SCRIPTS */
/*-----------------------------------------------------------------------------------*/

// On document ready (once the html document has been loaded)
jQuery(document).ready(function (jQuery) {

    // Agregando javascript para toggle-nav
    // Add the 'show-nav' class to the body when the nav toggle is clicked
    jQuery('.nav-toggle').click(function (e) {

        // Prevent default behaviour
        e.preventDefault();
        
        console.log('.nav-togge click');

        // Toggle active class
        jQuery(this).toggleClass('active');

        // Add the 'show-nav' class
        jQuery('body').toggleClass('show-nav');

        // Check if .top-navigation already exists
        if (jQuery('#navigation').find('.top-navigation').size()) return;

        // If it doesn't, clone it (so it will still appear when resizing the browser window in desktop orientation) and add it.
        jQuery('#top .top-navigation').clone().appendTo('#navigation .menus');
    });

    // Remove the 'show-nav' class from the body when the nav-close anchor is clicked
    jQuery('.nav-close').click(function (e) {

        // Prevent default behaviour
        e.preventDefault();

        // Remove the 'show-nav' class
        jQuery('body').removeClass('show-nav');

        // Remove the active class from the nav toggle
        jQuery('.nav-toggle').toggleClass('active');
    });

    // Remove 'show-nav' class from the body when user tabs outside of #navigation on handheld devices
    var hasParent = function (el, id) {
        if (el) {
            do {
                if (el.id === id) {
                    return true;
                }
                if (el.nodeType === 9) {
                    break;
                }
            }
            while ((el = el.parentNode));
        }
        return false;
    };


});