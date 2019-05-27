<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <title><?php bloginfo( 'pingback_url' ); ?></title>

    <?php wp_head(); ?>
  </head>
  <body>

  <header class="header">
    <div class="header-primary">
      <div class="header__brand">
        <a class="home-link" href="<?php echo get_home_url(); ?>" title="Home">
          <img class="header__icon" src="<?php echo get_template_directory_uri() . '/dist/images/sscy_lotus_white.svg'; ?>" />
        </a>
      </div>
      <div class="header__primary-navigation">
        <?php wp_nav_menu( array( 'theme_location' => 'primary-menu' ) ); ?>
      </div>
    </div>

    <div class="header__secondary-navigation">
      <?php wp_nav_menu( array( 'theme_location' => 'secondary-menu' ) ); ?>
      <form class="search" action="<?php echo get_home_url(); ?>">
        <input type="text" class="search__text" id="search" name="s" placeholder="search..." />
        <button class="search__button"><i class="fas fa-search"></i></button>
      </form>
    </div>
  </header>

  <div class="mobile__button"></div>
  <div class="mobile__menu-background"></div>
  <div class="mobile__menu">
    <?php wp_nav_menu( array( 'theme_location' => 'primary-menu' ) ); ?>
    <?php wp_nav_menu( array( 'theme_location' => 'secondary-menu' ) ); ?>
  </div>

  <?php if ( is_front_page() ) { ?>
    <div class="banner">
      <div class="banner__background"></div>
      <div class="banner__arrow banner__arrow--prev"></div>
      <div class="banner__center">
        <div class="banner__content">
          <div class="banner__container" data-bgimage="wp-content/themes/saltspringcentre/dist/images/ytt-header-background.jpg">
            <div class="banner__logo">
              <img class="banner_lotus" src="<?php echo get_template_directory_uri() . '/dist/images/sscy_lotus_white.svg'; ?>" />
              <img class="banner_logo-text" src="<?php echo get_template_directory_uri() . '/dist/images/sscy_text_white.svg'; ?>" />
            </div>
          </div>
          <div class="banner__container" data-bgimage="wp-content/themes/saltspringcentre/dist/images/ytt-header-background.jpg">
            <div class="banner__logo">
              <img class="banner_lotus" src="<?php echo get_template_directory_uri() . '/dist/images/sscy_lotus_white.svg'; ?>" />
              <div class="banner__heading">Yoga Teacher Training</div>
              <div class="banner__text">
                <p>The Salt Spring Centre is offering a 200 hour Yoga Teacher Training in 2019.
* NEW IN 2019 - Teach to Learn Scholarship *</p>
              </div>
              <a
                class="button button--white banner__button"
                href="yoga-teacher-training">
                  Learn More
                  <i class="fas fa-caret-right"></i>
                  <i class="fas fa-caret-right"></i>
                  <i class="fas fa-caret-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="banner__navigation">
          <a href="#" class="banner__icon active" data-banner="0"></a>
          <?php for ( $i = 0; $i < $num_banners; $i++ ){ ?>
            <a href="javascript:void(0);" class="banner__icon" data-banner="<?php echo $i+1; ?>"></a>
          <?php } ?>
        </div>
      </div>
      <div class="banner__arrow banner__arrow--next"></div>
    </div>
  <?php } ?>