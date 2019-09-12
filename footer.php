
<footer class="footer" data-aos="fade-up">
  <div class="footer__widgets">
		<?php
			if(is_active_sidebar('footer-1')){
				dynamic_sidebar('footer-1');
			}
			if(is_active_sidebar('footer-2')){
				dynamic_sidebar('footer-2');
			}
			if(is_active_sidebar('footer-3')){
				dynamic_sidebar('footer-3');
			}
			if(is_active_sidebar('footer-4')){
				dynamic_sidebar('footer-4');
			}
    ?>
  </div>
  <div class="footer__brand">
    <p>Toko-pa.com | Copyright &copy; <?php echo date("Y"); ?> | Designed by <a href="#">Andrea Palframan</a> | Developed by <a href="#">BURTON<strong>MEDIA</strong></a></p>
  </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>