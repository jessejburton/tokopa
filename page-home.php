<?php
/*
 * Template Name: Home Page
 * description: Toko-pa Official Site | Home Page Template
*/
?>

<?php get_header(); ?>

<!-- BANNER -->
<section class="banner banner--home">
  <img
    id="logo"
    class="banner__logo"
    src="<?php echo get_template_directory_uri(); ?>/images/TokoPaLogoTeal.png"
    alt="Home Page Logo"
  />
</section>

<!-- SIGNUP -->
<section class="signup">
  <div class="content-container">
    <div class="signup__text optimus">
      3 Essentials for Dream Recovery<br />Download the Free PDF Guide
    </div>
    <div class="signup__form">
      <?php echo do_shortcode('[activecampaign form=7]'); ?>
    </div>
  </div>
</section>

<!-- Section 1 -->
<section class="promotion">
  <div class="content-container">
    <h2 class="emphasis">Like a living bridge, dreamwork is a practice in which we coax, weave, and tend to the roots of our separation—and in so doing, restore our membership in belonging.</h2>
    <div class="promos">
      <!-- This gets populated from getPromos() in main.js -->
    </div>
  </div>
</section>

<!-- Belonging Section -->
<section class="belonging">
  <div class="content-container">
    <div class="belonging__book">
      <img src="/wp-content/themes/tokopa/images/book.png" alt="Belonging | a book by Toko-pa" />
    </div>
    <div class="belonging__text">
      <img src="/wp-content/themes/tokopa/images/belonging-horizontal.png" alt="Belonging | a book by Toko-pa" />
      <div class="quote">
        <h1 class="optimus">“An exquisitely crafted journey that explores the deep longings of the soul,</h1>
        <p>the mysterious workings of our dreams, the bittersweet wisdom of the orphaned self and the losses of our lineage that we would rather ignore. Toko-pa Turner speaks with poetry and practicality, pure compassion and profound integrity to the heart of what it means to belong to ourselves, to our people, to our communities and to the earth. <strong>Belonging is the book I have been longing to read all my life.”</strong></p>

        <p class="author">-Lucy H. Pearce, Amazon bestselling author, Burning Woman, Moon Time, The Rainbow Way</p>
      </div>
      <div class="button-container">
        <button class="button button--2">Read</button>
      </div>
    </div>
  </div>
</section>

<!-- Quotes Section -->
<section class="quotes">
  <div class="prev"></div>
  <div class="center">
    <header class="header">
      <h1>Quotes</h1>
      <h2>Excerpts from Belonging</h2>
    </header>
    <div class="quote-container">
      <!-- This gets populated from getQuotes() in main.js -->
    </div>
  </div>
  <div class="next"></div>
</section>

<!-- Retreat Section -->
<section class="retreat">
  <div class="content-container">
    <div class="retreat__text">
      <h1>ANNUAL WOMEN’S RETREAT WITH TOKO-PA</h1>
      <h2>October 1st-4th, 2020 // Salt Spring Island, B.C.</h2>
      <p>Early Registration COMING SOON</p>
      <p><strong>2019 SOLD OUT <span></span> <a href="https://toko-pa.com/annual-dreaming-retreat/">Learn More & Join The Waitlist</a></strong></p>
      <p>“I was held and protected by the council of women who gathered at this beautiful farm, sharing food and dreams and the desire for connecting to something more meaningful than what most of us found at home in our busy lives.”</p>
    </div>
    <div class="retreat__image">
      <img src="https://i1.wp.com/toko-pa.com/wp-content/uploads/2018/01/BannerArtboard-2Embodying.jpg?zoom=1.25&w=1080&ssl=1" alt="Annual Women's Retreat with Toko-pa" />
    </div>
  </div>
</section>

<!-- Blog Section -->
<section class="blog">
  <header class="blog__header">
    <div class="blog__title">
      <h1>Dreamspeak</h1>
      <h2>Toko-pa's Blog</h2>
    </div>
  </header>

  <nav class="blog__navigation content-container" id="blog-menu">
    <?php wp_nav_menu( array( 'theme_location' => 'home-blog-menu' ) ); ?>
  </nav>
</section>

<!-- Latest post -->
<section class="latest">
  <div class="content-container">
    <h1>Latest Post...</h1>
    <!-- TODO This will eventually get populated from getLatestPost() in main.js -->
    <?php
        $loop = new WP_Query( array(
          'posts_per_page'      => 1,
          'post_type'           => 'post',
          'orderby'             => 'date',
          'order'               => 'DESC',
          'ignore_sticky_posts' =>true
        ) );

        $loop->the_post();
        get_template_part( 'templates/horizontal', get_post_format() );
        wp_reset_postdata();
    ?>
  </div>
</section>

<section class="posts">
  <div class="content-container">
    <?php
        $loop = new WP_Query( array(
          'posts_per_page'      => 6,
          'post_type'           => 'post',
          'orderby'             => 'date',
          'order'               => 'DESC'
        ) );

        while( $loop->have_posts() ) {
            $loop->the_post();

          ?><div><?php
            get_template_part( 'templates/vertical', get_post_format() );
          ?></div><?php

        }
        wp_reset_postdata();
    ?>
  </div>
  <div class="show__more">
    <a href="#">{ Show More }</a>
  </div>
</section>

<?php get_footer(); ?>