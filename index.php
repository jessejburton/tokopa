<?php get_header(); ?>
<div class="main">
  <div class="content-container">
    <div class="content">

    <!-- Display Header Image -->
    <div class="banner-image">
      <img src="<?php bloginfo('stylesheet_directory');?>/images/blog-header.jpg" />
    </div>

    <!-- Display Main Content -->
    <div class="content-with-sidebar">
      <!-- Post Content -->
      <div class="posts">
        <?php
          if ( have_posts() ) : while ( have_posts() ) : the_post();

          get_template_part( 'templates/posts', get_post_format() );

          endwhile; endif;
        ?>
      </div><!-- .posts -->

      <!-- Sidebar Content -->
      <div class="sidebar">
          <?php dynamic_sidebar('tokopa-side-bar'); ?>
      </div><!-- .sidebar -->
    </div><!-- .content-with-sidebar -->

    </div><!-- .content -->
  </div><!-- .content-container -->
</div><!-- .main -->
<?php get_footer(); ?>
