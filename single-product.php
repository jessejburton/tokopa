<?php get_header(); ?>
<div class="main">
  <div class="content-container">
    <div class="content">

    <!-- Display Header Image -->
    <div class="banner-image">
      <img src="<?php bloginfo('stylesheet_directory');?>/images/blog-header-small.jpg" />
    </div>

    <!-- Display Main Content -->
    <div class="content page-content">
      <!-- Post Content -->
      <div class="posts">
        <?php
          if ( have_posts() ) : while ( have_posts() ) : the_post();

          get_template_part( 'templates/product', get_post_format() );

          endwhile; endif;
        ?>

    </div><!-- .content -->
  </div><!-- .content-container -->
</div><!-- .main -->
<?php get_footer(); ?>
