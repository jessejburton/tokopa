<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <title><?php bloginfo( 'pingback_url' ); ?></title>
    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />

    <?php wp_head(); ?>

  </head>
  <body <?php body_class('js-loading'); ?>>

  <header class="header">
    <div class="header__menu-container">
      <div class="primary-menu">
        <?php wp_nav_menu( array( 'theme_location' => 'primary-menu' ) ); ?>
      </div>
      <div class="social-menu">
        <?php wp_nav_menu( array( 'theme_location' => 'social-menu' ) ); ?>
      </div>
    </div>
    <div class="mobile-menu-button" onclick="toggle()">
      <div></div>
    </div>
  </header>
