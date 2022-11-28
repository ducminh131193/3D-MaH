<?php
global $architecture_theme_options;
?>

	<!-- START FOOTER -->
  <?php if ( isset($architecture_theme_options['footer-style']) && $architecture_theme_options['footer-style'] == false ) { ?>
    <footer class="footer-light" id="footer">
	<?php } else { ?>
    <footer class="footer" id="footer">
	<?php } ?>

  <div class="container">
    <div class="footer-detail">
      <?php if(isset( $architecture_theme_options['footer-style'] ) ){ ?>
        <div class="row">
          <?php
          if (isset($architecture_theme_options['footer-widgets']) &&  $architecture_theme_options['footer-widgets']== 1 ){
            ?>
  					<div class="col-md-4">
  						<div class="footer-sec">
  						  <?php dynamic_sidebar( 'architecture-footer-widget-1' ); ?>
              </div>
  					</div>
  					<div class="col-md-4">
  						<div class="footer-sec">
  						<?php dynamic_sidebar( 'architecture-footer-widget-2' ); ?>
              </div>
  					</div>
            <div class="col-md-4">
  						<div class="footer-sec">
                <?php dynamic_sidebar( 'architecture-footer-widget-3' ); ?>
  						</div>
  					</div>
          <?php
          }

          if ( $architecture_theme_options['footer-widgets']== 0 ){
              if ( $architecture_theme_options['footer-phone']!="" || $architecture_theme_options['footer-email']!="" ) { ?>
    					<div class="col-md-4">
    						<div class="footer-sec">
    							<h3><?php echo esc_html__( "LET'S TALK", 'architecture' ); ?></h3>
    							<span><?php if( $architecture_theme_options['footer-phone']!="" ) { echo esc_html($architecture_theme_options['footer-phone'] ); echo '<br/>'; } echo esc_html( $architecture_theme_options['footer-email'] ); ?></span>
    						</div>
    					</div>
    					<?php } ?>
              <?php if ( $architecture_theme_options['footer-address']!="" ) { ?>
    					<div class="col-md-4">
    						<div class="footer-sec">
    							<h3><?php echo esc_html__( 'FIND US', 'architecture' ); ?></h3>
    							<span><?php echo esc_html( $architecture_theme_options['footer-address'] );?></span>
    						</div>
    					</div>
              <?php } ?>
              <?php if ( $architecture_theme_options['footer_facebook_url']!="" || $architecture_theme_options['footer_twitter_url']!="" || $architecture_theme_options['footer_google_url']!=""  ) { ?>
    					<div class="col-md-4">
    						<div class="footer-sec">
    							<h3><?php echo esc_html__( 'FOLLOW US', 'architecture' ); ?></h3>
    							<div class="social-icons">
                    <?php if ( $architecture_theme_options['footer_facebook_url']!="" ) {?>
    								<a href="<?php echo esc_url( $architecture_theme_options['footer_facebook_url'] ); ?>" target="_blank" class="fb"><i class="icon-facebook-1"></i></a>
                    <?php } ?>
                    <?php if ( $architecture_theme_options['footer_twitter_url']!="" ) {?>
    								<a href="<?php echo esc_url( $architecture_theme_options['footer_twitter_url'] ); ?>" target="_blank" class="tw"><i class="icon-twitter-1"></i></a>
                    <?php } ?>
                    <?php if ( $architecture_theme_options['footer_google_url']!="" ) {?>
    								<a href="<?php echo esc_url( $architecture_theme_options['footer_google_url'] ); ?>" target="_blank" class="gp"><i class="icon-google"></i></a>
                    <?php } ?>
    							</div>
    						</div>
    					</div>
    					<?php }

        } // end of widget not set.
        ?>


				</div>
        <?php } ?>
			</div>
		</div>

    <?php if( isset( $architecture_theme_options['footer-style'] ) ){ ?>
      <div class="footer-bottom">
        <div class="copyrights">
          <div class="container">
            <p><?php echo esc_html( $architecture_theme_options['footer-copyright'] ); ?></p>
            <span><?php echo esc_html( $architecture_theme_options['footer-powered-by'] ); ?></span>
				  </div>
			  </div>
		  </div>
    <?php } ?>

	</footer>
<!-- END FOOTER -->

</div>

<?php wp_footer(); ?>

</body>
</html>
