<?php

/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 */
get_header();

	if ( class_exists( 'acf' ) ){
		$rev_slider_alias = get_field( "revolution_slider_alias" );

		if( class_exists( 'revslider' ) )
		{
			if ( $rev_slider_alias != "" ) {

				putRevSlider( $rev_slider_alias );
				echo '<div class="divider-dark"></div>';
			}
		}
	}

 if ( class_exists( 'acf' ) && get_field( "show_title_bar" ) == true) {
	    $padding_class=""; ?>

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
		$rev_slider_alias	=	"";
		$rev_slider_alias	=	get_field( 'revolution_slider_alias' );
		if( $rev_slider_alias	==	"" ) { ?>
			<!-- START SUB-BANNER -->
			<div class="sub-banner">
				<div class="container">
					<div class="text-detail">
					</div>
				</div>
			</div>
	   <!-- END SUB-BANNER -->

	<?php } } ?>

	<!-- START CONTENT -->
	<div class="content container">
		<div class="container-main">
			<?php
			// Start the loop.
			while ( have_posts() ) : the_post();

			// Include the page content template.
			get_template_part( 'template-parts/content', 'page' ); ?>

			<?php
			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) {
				echo '<div class="news-detail comments-page">';
				comments_template();
				echo '</div>';
			} ?>

		<?php
		// End of the loop.
		endwhile; ?>

		</div>
	</div>
	<!-- END CONTENT -->

<?php get_footer(); ?>
