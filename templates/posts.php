
<div id="post-<?php the_ID(); ?>" data-aos="fade-in" class="post">

  <!-- Display Post Thumbnail -->
  <div class="post__thumbnail">
    <div class="post__thumbnail-container">
      <?php if ( get_the_post_thumbnail() !== '' ) : ?>
          <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="post__thumbnail-link">
              <?php the_post_thumbnail('',['class' => 'thumbnail']); ?>
          </a>
      <?php endif; ?>
    </div>
  </div>

  <!-- Display Post Content -->
  <div class="post__content">
    <div class="post__header">
      <?php
        the_title( '<h3 class="post__title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' );
      ?>
    </div>

    <!-- Social Warfare Icons -->
    <div class="socialwarfare"><?php echo do_shortcode('[social_warfare]'); ?></div>

    <!-- Post Meta -->
    <div class="post__meta">
      <?php the_time( 'M j, Y' ); ?> | <?php show_categories(get_the_category()); ?> | <?php comments_number(); ?>
    </div>

    <!-- Post Excerpt -->
    <div class="post__excerpt">
      <?php the_excerpt(); ?>
    </div>

  </div>
</div><!-- ## Post End ## -->

