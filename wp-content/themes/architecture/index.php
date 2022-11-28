<?php
get_header(); ?>

	<!-- START SUB-BANNER -->
	<div class="sub-banner">
		<div class="container">

			<?php

			global $wp_query;
			global $architecture_theme_options;

			$page_title = "";
			$page_sub_title = "";

			if ( is_front_page() && is_home() ) {
			  // Default homepage
			  $page_title			= isset( $architecture_theme_options['blog-title'] ) ? $architecture_theme_options['blog-title'] : "";
			  $page_sub_title	= isset( $architecture_theme_options['blog-sub-title'] ) ? $architecture_theme_options['blog-sub-title'] : "";

			} elseif ( is_front_page() ) {
			  // static homepage
			  $page_title = esc_html__( "Home", "architecture" );
			} elseif ( is_home() ) {
			  $page_title		  = isset( $architecture_theme_options['blog-title'] ) ? $architecture_theme_options['blog-title'] : "";
			  $page_sub_title	= isset( $architecture_theme_options['blog-sub-title'] ) ? $architecture_theme_options['blog-sub-title'] : "";
			} else {
			  $page_title     = "-1";
			  $page_sub_title = term_description();
			} ?>

			<div class="text-detail">
				<h2><?php if ( $page_title!="-1" ) echo esc_html( $page_title ); else single_term_title(); ?></h2>
		    <p><?php echo esc_html( $page_sub_title ); ?></p>
				<?php architecture_breadcrumbs(); ?>
			</div>

		</div>
	</div>
<!-- END SUB-BANNER -->

	<!-- START CONTENT -->
	<div class="sub-content">

		<!-- START NEWS -->
		<section>
			<div class="container">
				<div class="news">
					<div class="row">

						<?php

						if ( have_posts() ) :
						$loop_counter = 1;

						// Start the loop.
						echo '<div class="left-side">';

						while ( have_posts() ) : the_post();

							/*
							 * Include the Post-Format-specific template for the content.
							 * If you want to override this in a child theme, then include a file
							 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
							 */


							if ( $loop_counter > ceil($wp_query->post_count/2) ) {
								echo '</div><div class="right-side">';
							}


							get_template_part( 'template-parts/content', get_post_format() );

							$loop_counter++;

						// End the loop.
						endwhile;

						echo '</div>';
						?>

				<div class="col-md-12">
	        <div class="new-older">
						<?php next_posts_link( '<i class="icon-angle-double-left"></i><span>'.esc_html__( "Older Posts", "architecture" ).'</span>'  ); ?>
	          <?php previous_posts_link( '<span>'.esc_html__( "Newest Posts", "architecture" ).'</span><i class="icon-angle-double-right"></i>' ); ?>
	        </div>
	      </div>

      <?php

			// If no content, include the "No posts found" template.
			else :
				get_template_part( 'template-parts/content', 'none' );

			endif; ?>

			</div>
		</div>
	</div>
</section>
<!-- END NEWS -->

</div>
<!-- END CONTENT -->

<?php get_footer(); ?>
