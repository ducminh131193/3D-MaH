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
			  $page_title = $architecture_theme_options['blog-title'];
			  $page_sub_title = $architecture_theme_options['blog-sub-title'];

			} elseif ( is_front_page() ) {
			  // static homepage
			  $page_title = esc_html__("Home", "architecture");
			} elseif ( is_home() ) {
			  $page_title = $architecture_theme_options['blog-title'];
			  $page_sub_title = $architecture_theme_options['blog-sub-title'];
			} else {
			  $page_title = "-1";
			  $page_sub_title = term_description();
			}
			?>

			<div class="text-detail">
				<h2><?php if ( $page_title!="-1" ) echo esc_html($page_title); else single_term_title(); ?></h2>
		    <p><?php echo esc_html($page_sub_title); ?></p>
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
            <div class="col-md-6 col-md-offset-3">
              <img src="<?php echo get_template_directory_uri().'/images/404img.png'; ?>">
            </div>
			    </div><br>
					<div class="row">
						<center>
							<a class="black-btn" href="<?php echo esc_url(home_url()); ?>"><?php echo esc_html__( 'Go back to Home' , 'architecture' ); ?></a>
	          </center>
					</div>
				</div>
			</div>
		</section>
		<!-- END NEWS -->

	</div>
<!-- END CONTENT -->

<?php get_footer(); ?>
