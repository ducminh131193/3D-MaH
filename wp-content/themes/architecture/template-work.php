<?php get_header();
global $architecture_theme_options;
while(have_posts()): the_post();
// Template Name: Work Page
 ?>

<!-- START SUB-BANNER -->
	<div class="sub-banner">
		<div class="container">
			<div class="text-detail">
				<h2><?php the_title(); ?></h2>
				<p><?php if ( class_exists( 'acf' ) ){ the_field( "post_sub_title" ); } ?></p>
				<?php architecture_breadcrumbs(); ?>
			</div>
		</div>
	</div>
<!-- END SUB-BANNER -->

<!-- START CONTENT -->
<div class="sub-content">
  <div class="all-work">
	  <div class="container">
      <?php the_content(); ?>
    </div>

		<!--Start Work-->
    <div class="container">
			<div class="clearfix">
				<div id="js-filters-lightbox-gallery2" class="cbp-l-filters-button cbp-l-filters-center">
					<div data-filter="*" class="cbp-filter-item-active cbp-filter-item"><?php echo esc_html__('All','architecture'); ?></div>

          <?php
          $project_terms = get_terms( array(
						'taxonomy'   => 'project-category',
						'hide_empty' => false,
					) );

					if ( count ( $project_terms ) >0 ) {
						foreach ( $project_terms as $project_term ) { ?>

  					<div data-filter=".<?php echo esc_attr( $project_term->slug ); ?>" class="cbp-filter-item"><?php echo esc_html( $project_term->name ); ?></div>
            <?php } } ?>
				</div>
			</div>

      <?php

      $args = array(
    	'posts_per_page'   => $architecture_theme_options['projects-per-page'],
    	'offset'           => 0,
    	'orderby'          => 'date',
    	'order'            => 'DESC',
    	'post_type'        => 'project',
    	'post_status'      => 'publish',
    	'suppress_filters' => true
    	);

    	$projects_query = new WP_Query( $args );
    	$projects_array = $projects_query->posts;
    	?>

    <script>
  	var total_projects_pages = <?php echo ceil( $projects_query->found_posts / $architecture_theme_options['projects-per-page'] ); ?>;
  	</script>

    <?php
    echo '<div id="js-grid-lightbox-gallery" class="cbp">';

    if ( count ( $projects_array ) > 0 ){
      foreach ( $projects_array as $project_item ) {
        $project_terms_class_string ="";
        $project_terms_array       = wp_get_post_terms( $project_item->ID, "project-category" );
  			$project_terms_list_string ="";
  			$project_terms_counter     = 0;

        foreach ( $project_terms_array as $project_term_item ) {
  				if ( $project_terms_counter   != count ( $project_terms_array ) -1 ){
  					$project_terms_class_string .= $project_term_item->slug." ";
  					$project_terms_list_string  .= $project_term_item->name.", ";
  				}
  				else {
  					$project_terms_class_string .= $project_term_item->slug;
  					$project_terms_list_string  .= $project_term_item->name;
  				}
  				$project_terms_counter++;
			  } ?>

        <div class="cbp-item <?php echo esc_attr( $project_terms_class_string ); ?>">
    			<a href="<?php echo esc_url( get_permalink( $project_item->ID ) ); ?>">
    			<div class="cbp-caption">
    				<div class="cbp-caption-defaultWrap">
    					<div class="work">
    						<figure class="effect-sadie">
    							<div class="image"><?php echo get_the_post_thumbnail( $project_item->ID,"architecture-project-archive" ); ?></div>
    							<figcaption>
    								<h2><img src="<?php echo get_template_directory_uri(); ?>/images/plus.png" alt=""></h2>
    							</figcaption>
    						</figure>
    					</div>
    				</div>
    			</div>
    			</a>

  			<div class="cbp-l-grid-projects-title"><?php echo esc_html( $project_item->post_title ); ?></div>
  			<div class="cbp-l-grid-projects-desc"><?php echo esc_html( $project_terms_list_string ); ?></div>
      </div>

		<?php } } ?>
    </div>

    <?php

    if( $architecture_theme_options['projects-per-page'] != 0 || $architecture_theme_options['projects-per-page'] != '')
    {
      if ( ceil( $projects_query->found_posts / $architecture_theme_options['projects-per-page'] )  != 0 && ceil( $projects_query->found_posts / $architecture_theme_options['projects-per-page'] )  > 1 ) { ?>
        <div id="js-loadMore-lightbox-gallery" class="cbp-l-loadMore-button">
  				<div class="cbp-l-loadMore-link" rel="nofollow">
  					<span class="cbp-l-loadMore-defaultText"><?php echo esc_html__( "LOAD MORE", "architecture" ); ?></span>
  					<span class="cbp-l-loadMore-loadingText"><?php echo esc_html__( "LOADING...", "architecture" ); ?></span>
  					<span class="cbp-l-loadMore-noMoreLoading"><?php echo esc_html__( "NO MORE WORKS", "architecture" ); ?></span>
  				</div>
			</div>
		<?php } } ?>
		</div>

	 </div>
	<!--End Work-->

</div>
<!-- END CONTENT -->

<?php
 endwhile;

get_footer(); ?>
