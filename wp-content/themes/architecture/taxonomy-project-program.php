<?php get_header();
global $architecture_theme_options;
global $wp_query;

// Template Name: Work Page
 ?>


<!-- START SUB-BANNER -->
	<div class="sub-banner">
		<div class="container">
			<div class="text-detail">
				<h2><?php single_term_title(); ?></h2>
				<p><?php echo esc_html( term_description() ); ?></p>
				<?php architecture_breadcrumbs(); ?>
			</div>
		</div>
	</div>
<!-- END SUB-BANNER -->

<!-- START CONTENT -->
  <div class="sub-content">
		<div class="all-work">
		  <!--Start Work-->
			<div class="container">

        <?php
      	echo '<div id="js-grid-lightbox-gallery" class="cbp">';
        while(have_posts()): the_post();
      	$project_terms_array       = wp_get_post_terms( get_the_ID(), "project-category" );
      	$project_terms_list_string = "";
      	$project_terms_counter     = 0;

      	foreach ( $project_terms_array as $project_term_item ) {
      		if ( $project_terms_counter  != count ( $project_terms_array ) -1 ){
      			$project_terms_list_string .= $project_term_item->name.", ";
      		} else {
      			$project_terms_list_string .= $project_term_item->name;
      		}
      		$project_terms_counter++;
      	} ?>

        <div class="cbp-item">
    			<a href="<?php echo esc_url( get_the_permalink() ); ?>">
    			<div class="cbp-caption">
    				<div class="cbp-caption-defaultWrap">
    					<div class="work">
    						<figure class="effect-sadie">
    							<div class="image"><?php the_post_thumbnail( "architecture-project-archive" ); ?></div>
    							<figcaption>
    								<h2><img src="<?php echo get_template_directory_uri(); ?>/images/plus.png" alt=""></h2>
    							</figcaption>
    						</figure>
    					</div>
    				</div>
    			</div>
    			</a>

  			<div class="cbp-l-grid-projects-title"><?php the_title(); ?></div>
  			<div class="cbp-l-grid-projects-desc"><?php echo esc_html( $project_terms_list_string ); ?></div>
      </div>

    <?php endwhile; ?>

    </div>
  		<div style="padding: 0;margin:50px 0 0 0;" class="col-xs-12">
        <div class="new-older">
          <?php next_posts_link( '<i class="icon-angle-double-left"></i><span>'.esc_html__( "Older Posts", "architecture" ).'</span>'  ); ?>
          <?php previous_posts_link( '<span>'.esc_html__( "Newest Posts", "architecture" ).'</span><i class="icon-angle-double-right"></i>' ); ?>
      </div>
    </div>

		</div>
	</div>
	<!--End Work-->

</div>
<!-- END CONTENT -->

<?php get_footer(); ?>
