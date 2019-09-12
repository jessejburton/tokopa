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
<<<<<<< HEAD
        <!-- IF SEARCHING -->
        <?php if(is_search()){ ?>
        <div class="search__header">
          <h1>
            Search Result for <?php $allsearch = new WP_Query("s=$s&showposts=-1"); $key = wp_specialchars($s, 1); $count = $allsearch->post_count; _e(''); _e('<span class="search-terms">'); echo $key; _e('</span>'); _e(' &mdash; '); echo $count . ' '; _e('articles'); wp_reset_query(); ?></h1>
        <?php } ?>
          <?php get_search_form(); ?>
        </div>

        <!-- Content -->
=======

>>>>>>> 3fd2df183e8ffea2bbcc09992cae85cb0b8e0e82
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
