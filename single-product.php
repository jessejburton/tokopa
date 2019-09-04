<?php get_header(); ?>
<div class="main">
  <div class="content-container">
    <div class="content">

      <div class="banner-image">
        <img src="/wp-content/themes/tokopa/images/blog-header-small.jpg" />
      </div>

      <div class="woocommerce">
        <?php
          if ( have_posts() ) : while ( have_posts() ) : the_post();

            get_template_part( 'templates/product', get_post_format() );

          endwhile; endif;
        ?>
      </div>

    </div>
  </div>
</div>
<?php get_footer(); ?>