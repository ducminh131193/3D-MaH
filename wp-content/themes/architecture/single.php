<?php
get_header(); ?>

<!-- Start the loop  -->
<?php while ( have_posts() ) : the_post(); ?>

<?php if ( class_exists( 'acf' ) && get_field( "show_title_bar" ) == true ) {
    $padding_class="";
?>
  <!-- START SUB-BANNER -->
  	<div class="sub-banner">
  		<div class="container">
  			<div class="text-detail">
  				<h2><?php the_title(); ?></h2>
  				<p><?php if( class_exists( 'acf' ) ) the_field( "post_sub_title" ); ?></p>
  					<?php architecture_breadcrumbs(); ?>
  			</div>
  		</div>
  	</div>
  <!-- END SUB-BANNER -->
  <?php } else if( ! class_exists( 'acf' ) ) {
  			$padding_class=""; ?>
  			<!-- START SUB-BANNER -->
  			<div class="sub-banner">
  				<div class="container">
  					<div class="text-detail">
  						<h2><?php the_title(); ?></h2>
  					</div>
  				</div>
  			</div>
    <!-- END SUB-BANNER -->
  	<?php } else {
  		$padding_class=" pad-top";
  	} ?>
  <!-- START CONTENT -->
  <div class="sub-content<?php echo $padding_class; ?>">
  	<!-- START NEWS -->
  	<div class="container">
  		<section>
  			<div class="news-detail">
  				<div class="row">
  					<div class="col-md-6">
  						<div class="post-featured-image">
  							<?php the_post_thumbnail(); ?>
  						</div>
            </div>
            <div class="col-md-6"><div class="post-featured-image">
              <?php
              if( class_exists( 'acf' ) && get_field( "featured_image_2" )!="" ) { ?>
  						<img src="<?php if( class_exists( 'acf' ) ) the_field( "featured_image_2" ); ?>" />
              <?php } ?>
  					</div>
  				</div>
  			</div>
  			<div class="row" style="margin-top:30px;">
  				<div class="col-md-12">
  					<?php // Include the single post content template.
  					get_template_part( 'template-parts/content', 'single' ); ?>
  					<div class="clear"></div>
  					<section class="sec-space">
  						<div class="next-posts">
  							<div class="arrows">
  								<?php
  								$prev_post = get_adjacent_post( false, '', true );

                  if( ! empty( $prev_post ) ) {
  									echo '<a href="' . esc_url( get_permalink( $prev_post->ID ) ) . '" title="' . esc_attr( $prev_post->post_title ) . '"><i class="icon-long-arrow-left"></i></a>';
  								}

  								$next_post = get_adjacent_post( false, '', false );

  								if( ! empty( $next_post ) ) {
  									echo '<a href="' . esc_url( get_permalink( $next_post->ID ) ) . '" title="' . esc_attr( $next_post->post_title ) . '"><i class="icon-long-arrow-right"></i></a>';
  								} ?>
  							</div>
  							<div class="grid-news">
  								<a href="<?php  if ( esc_attr(get_option( 'page_for_posts' ) ) == 0 ) echo esc_url( home_url() ); else echo esc_url( get_permalink(get_option( 'page_for_posts' )) ); ?>"><i class="icon-grid2"></i></a>
  							</div>
  						</div>
  					</section>

  					<div class="clear"></div>

  					<?php
  						// If comments are open or we have at least one comment, load up the comment template.
  						if ( comments_open() || get_comments_number() ) {
  							comments_template();
  						} ?>

  				</div>

  				<?php endwhile; ?>

  				</div>
  			</div>
  		</div>
  	</section>
  	<!-- END NEWS -->
    <?php
    	edit_post_link(
    		sprintf(
    			/* translators: %s: Name of current post */
    			__( 'Edit<span class="screen-reader-text"> "%s"</span>', 'architecture' ),
    			get_the_title()
    		),
    		'<footer class="entry-footer"><span class="edit-link">',
    		'</span></footer><!-- .entry-footer -->'
    	);
    ?>
  </div>
  <!-- END CONTENT -->

<?php get_footer(); ?>
