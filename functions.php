<?php
/**
 * Toko-pa Theme functions and definitions
 *
 * @package TOKOPA
 * @subpackage TokoPa_Theme
 * @since Toko-pa
 *
 *  MAIN THEME SETUP
 *  REGISTER STYLES AND SCRIPTS
 *
 */

/******************************
  MAIN THEME SETUP
*******************************/
function custom_theme_setup(){

  /* THEME OPTIONS */
  // Add Featured Image Support
  add_theme_support( 'post-thumbnails' );

  // Enable shortcodes in html widgets
  add_filter('widget_text','do_shortcode');

  /* THEME MENUS */
	// Add another menu to the array to add more menus to this theme
	register_nav_menus( array(
    'primary-menu' => __( 'Primary Menu' ),
    'social-menu' => __( 'Social Menu' )
  ) );

  /* WIDGETS */
  // First Footer Widget
  register_sidebar( array(
    'name' => 'Footer 1',
    'id' => 'footer-1',
    'description' => 'Appears in the footer area',
    'before_widget' => '<div class="footer__widget">',
    'after_widget' => '</div>',
    'before_title' => '<h6 class="widget-title">',
    'after_title' => '</h6>',
    ) );

  // Second Footer Widget
  register_sidebar( array(
    'name' => 'Footer 2',
    'id' => 'footer-2',
    'description' => 'Appears in the footer area',
    'before_widget' => '<div class="footer__widget">',
    'after_widget' => '</div>',
    'before_title' => '<h6 class="widget-title">',
    'after_title' => '</h6>',
  ) );

  // Third Footer Widget
  register_sidebar( array(
    'name' => 'Footer 3',
    'id' => 'footer-3',
    'description' => 'Appears in the footer area',
    'before_widget' => '<div class="footer__widget">',
    'after_widget' => '</div>',
    'before_title' => '<h6 class="widget-title">',
    'after_title' => '</h6>',
  ) );

  // Fourth Footer Widget
  register_sidebar( array(
    'name' => 'Footer 4',
    'id' => 'footer-4',
    'description' => 'Appears in the footer area',
    'before_widget' => '<div class="footer__widget">',
    'after_widget' => '</div>',
    'before_title' => '<h6 class="widget-title">',
    'after_title' => '</h6>',
  ) );

  /* SIDEBAR */
  function custom_theme_sidebar() {
    register_sidebar(
        array (
            'name' => __( 'Sidebar', 'tokopa' ),
            'id' => 'tokopa-side-bar',
            'description' => __( 'Sidebar', 'tokopa' ),
            'before_widget' => '<div class="widget-content">',
            'after_widget' => "</div>",
            'before_title' => '<h4 class="widget-title">',
            'after_title' => '</h4>',
        )
    );
  }
  add_action( 'widgets_init', 'custom_theme_sidebar' );
}
add_action( 'after_setup_theme', 'custom_theme_setup' );

/*********************************
  REGISTER STYLES AND SCRIPTS
**********************************/
// Javascript
function register_theme_js() {
  // Register
  wp_register_script('aos', get_template_directory_uri() . '/js/aos.js', array(), '1.0', true);
  wp_register_script('GSAP', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js', array(), '2.1.3', true);
  wp_register_script('theme_javascript', get_template_directory_uri() . '/js/main.js', array(), '1.0', true);

  // Enqueue
  wp_enqueue_script('aos');
  wp_enqueue_script('theme_javascript');
  wp_enqueue_script('GSAP');

}
add_action( 'init', 'register_theme_js' );

// CSS
function register_theme_css() {
    wp_register_style( 'normalize', get_template_directory_uri() . '/css/normalize.css' );
    wp_register_style( 'aos', get_template_directory_uri() . '/css/aos.css' );
    wp_register_style( 'tokopa_styles', get_template_directory_uri() . '/css/style.css?v2.0' );

    // Enqueue
    wp_enqueue_style( 'normalize' );
    wp_enqueue_style( 'aos' );
    wp_enqueue_style( 'tokopa_styles' );

}
add_action( 'wp_enqueue_scripts', 'register_theme_css' );

function show_categories($arr){
  foreach ($arr as $cat){
    ?><a href="<?php echo get_category_link($cat); ?>"><?php echo $cat->name; ?></a><?php
    if (next($arr)) {
        echo ','; // Add comma for all elements instead of last
    }
  }
}

/* DON't AUTO EMPTY TRASH (to use as an archive) */
function tokopa_remove_schedule_delete() {
  remove_action( 'wp_scheduled_delete', 'wp_scheduled_delete' );
}
add_action( 'init', 'tokopa_remove_schedule_delete' );

/* WOO COMMERCE */

// Change Add to Cart Text
function woo_custom_single_add_to_cart_text() {
    return __( 'Add to Cart', 'woocommerce' );
}
add_filter( 'add_to_cart_text', 'woo_custom_single_add_to_cart_text' );
add_filter( 'woocommerce_product_single_add_to_cart_text', 'woo_custom_single_add_to_cart_text' );