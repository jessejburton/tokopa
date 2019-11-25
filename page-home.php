<?php
/*
 * Template Name: Home Page
 * description: Toko-pa Official Site | Home Page Template
*/
?>

<?php get_header(); ?>

<div class="banner banner--home">
  <img
    id="logo"
    class="banner__logo"
    src="<?php echo get_template_directory_uri(); ?>/images/TokoPaLogoTeal.png"
    alt="Home Page Logo"
  />
</div>
<div class="signup">
  <div class="signup__text optimus">
    3 Essentials for Dream Recovery<br />Download the Free PDF Guide
  </div>
  <div class="signup__form">
    <?php echo do_shortcode('[activecampaign form=7]'); ?>
  </div>
</div>

<?php get_footer(); ?>