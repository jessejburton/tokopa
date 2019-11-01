<?php get_header(); ?>
<div class="main">
  <div class="content-container">
    <div class="content">
    <!-- Display Header Image -->
    <div class="banner-image">
      <img src="<?php bloginfo('stylesheet_directory');?>/images/blog-header-small.jpg" />
    </div>

    <!-- Display Main Content -->
    <div class="content-with-sidebar">
      <!-- Post Content -->
      <div class="posts">
        <?php
          if ( have_posts() ) : while ( have_posts() ) : the_post();

          get_template_part( 'templates/post', get_post_format() );

          endwhile; endif;
        ?>

        <!-- Post Comments -->
        <div class="post__comments">
          <?php
            if ( comments_open() ) :
              comments_template( '/templates/comments.php' );
            endif;
          ?>
        </div>
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
