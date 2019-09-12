
<div id="post-<?php the_ID(); ?>" data-aos="fade-in">

  <!-- Display Post Content -->
  <div class="post__content post__single">
    <div class="post__header">
      <?php the_title( '<h3 class="post__title">', '</h3>' ); ?>
    </div>

    <!-- Post Meta -->
    <div class="post__meta">
      <?php the_time( 'M j, Y' ); ?> | <?php show_categories(get_the_category()); ?> | <?php comments_number(); ?>
    </div>

    <!-- Post Content -->
    <div class="post-content">
      <?php the_content(); ?>
    </div>

  </div><!-- .post__content -->
</div><!-- ## Post End ## -->

