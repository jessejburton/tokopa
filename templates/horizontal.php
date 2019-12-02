<div class="post">
  <div class="post__image">
    <?php if ( get_the_post_thumbnail() !== '' ) : ?>
        <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="post__thumbnail-link">
            <?php the_post_thumbnail('',['class' => 'thumbnail']); ?>
        </a>
    <?php endif; ?>
  </div>
  <div>
    <?php
      the_title( '<h2><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
    ?>
    <div class="post__comments"><?php the_time( 'M j, Y' ); ?> | <?php comments_number(); ?></div>
    <div class="post__shares"><?php echo do_shortcode('[social_warfare]'); ?></div>
    <div class="post__excerpt"><?php the_excerpt(); ?></div>
    <div class="post__link">
      <a href="<?php the_permalink(); ?>"
         title="<?php the_title(); ?>"
         class="arrow-link">READ MORE
      </a>
    </div>
  </div>
</div>