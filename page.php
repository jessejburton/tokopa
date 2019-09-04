<?php get_header(); ?>
<div class="main">
  <div class="content-container">
    <div class="content">

    <?php if ( has_post_thumbnail() ) { ?>
      <div class="banner-image">
        <?php the_post_thumbnail(); ?>
      </div>

      <?php if( is_front_page() ){ ?>
        <div class="home_signup_container">
          <div class="home_signup">
            <div class="home_signup_text">3 Essentials for Dream Recovery<br />Download the Free PDF Guide
            </div>
            <div class="home_signup_form">
              <?php echo do_shortcode('[activecampaign form=7]'); ?>
            </div>
          </div>
        </div>
      <?php } ?>
    <?php } ?>

      <?php
        if ( have_posts() ) : while ( have_posts() ) : the_post();

          get_template_part( 'templates/content', get_post_format() );

        endwhile; endif;
      ?>

    </div>
  </div>
</div>
<?php get_footer(); ?>