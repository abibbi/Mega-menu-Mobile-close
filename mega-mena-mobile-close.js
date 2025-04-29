/* Max Mega Menu 
 * Close the mobile menu as soon as a menu item is clicked */
jQuery("ul.max-mega-menu").on("after_mega_menu_init", function() {
    var menu = jQuery(this);
    jQuery("li.mega-menu-item:not(.mega-menu-item-has-children) > a.mega-menu-link").on('click', function(e) {
        menu.data('maxmegamenu').hideMobileMenu();
    });
});