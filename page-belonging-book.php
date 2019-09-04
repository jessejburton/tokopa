<?php get_header('clear'); ?>
<div class="main">
  <div class="content-container">
    <div class="content">

      <div class="banner-image banner-book">
        <div class="banner-content-top">
          <img class="book" src="<?php echo get_template_directory_uri(); ?>/images/book.png" />
          <img class="belonging" src="<?php echo get_template_directory_uri(); ?>/images/belonging.png" />
        </div>
        <div class="banner-content-text">
          <p class="book-text optimus">The award-winning book from toko-pa turner on exile and the search for belonging.</p>
          <p class="book-button">
            <button class="arrow arrow--button" onclick="window.location='/product/belonging-remembering-ourselves-home/';">Order My Copy</button>
          </p>
        </div>
      </div>

      <?php
        if ( have_posts() ) : while ( have_posts() ) : the_post();

          get_template_part( 'templates/content', get_post_format() );

        endwhile; endif;
      ?>

    </div>
  </div>
</div>
<?php get_footer(); ?>