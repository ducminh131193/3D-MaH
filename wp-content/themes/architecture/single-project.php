<?php get_header();
$fb_share_url 			= "http://www.facebook.com/sharer.php?u=".urlencode( get_permalink() );
$gplus_share_url 		= "https://plus.google.com/share?url=".urlencode( get_permalink() );
$tw_share_url 			= "https://twitter.com/share?text=".urlencode( get_the_title() )."&url=".urlencode( get_permalink() );

while(have_posts()): the_post();
 ?>

  <!-- START SUB-BANNER -->
  	<div class="sub-banner">
  		<div class="container">
  			<div class="text-detail">
  				<h2><?php if ( class_exists( 'acf' ) ) the_field("page_title_text"); ?></h2>
  				<p><?php if ( class_exists( 'acf' ) ) the_field("page_title_tagline"); ?></p>
  				<?php architecture_breadcrumbs(); ?>
  			</div>
  		</div>
  	</div>
  <!-- END SUB-BANNER -->

  <!-- START CONTENT -->
  <div class="sub-content">
    <!-- START PROJECT DETAIL -->
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <!-- START PROJECT FEATURES -->
  						<div class="project-features">
  							<div class="feature-sec">
  								<h6><?php echo esc_html__( "CLIENT","architecture" );?></h6>
  								<span>
  								<?php
  								if ( class_exists( 'acf' ) ){
  									$client = get_field( "client" );
  								}else{
  									$client = "";
  								}
  								if ( $client != "" )
  									echo esc_html( $client->name ); ?>
                  </span>
  							</div>

  							<div class="feature-sec">
  								<h6><?php echo esc_html__( "ARCHITECTS","architecture" );?></h6>
                  <span>
  								<?php
  								if ( class_exists( 'acf' ) ){
  									$architects = get_field( "architects" );
  									if ( $architects!="" ) {
  										$archi_array = array();
  										foreach($architects as $archi){
  											$archi_array[] = $archi->name;
  										}
  										echo esc_html( implode( " , ",$archi_array ) );
  									}
  								}
  								?>
                  </span>
  							</div>

  							<div class="feature-sec">
  								<h6><?php echo esc_html__( "YEAR","architecture" );?></h6>
  								<span><?php if ( class_exists( 'acf' ) ) the_field( "year" ); ?></span>
  							</div>

  							<div class="feature-sec">
  								<h6><?php echo esc_html__( "PROGRAM","architecture" );?></h6>
  								<span>
  								<?php
  								if ( class_exists( 'acf' ) ){
  									$program = get_field( "program" );
  								}else{
  									$program = "";
  								}
  								if ( $program != "" )
  									echo esc_html( $program->name );
  								?>
                  </span>
  							</div>

  							<div class="feature-sec">
  								<h6><?php echo esc_html__( "STATUS","architecture" );?></h6>
  								<span><?php if ( class_exists( 'acf' ) ) the_field( "status" ); ?></span>
  							</div>

  						</div>
  						<!-- END PROJECT FEATURES -->

  						<!-- START PROJECT FEATURES -->
  						<div class="project-detail">
  							<div class="detail-sec">
  							<?php the_post_thumbnail(); ?>
  							<div class="text">
  								<h3><?php the_title(); ?></h3>
  								<p><?php if ( class_exists( 'acf' ) ) the_field( "project_description" ); ?></p>
  							</div>
  							</div>
  						</div>
              <!--SHARING BOX-->
              <div class="social-media-sharing-box">
                  <ul>
                  	<li class="social-sharing-title"><?php echo esc_html__( "Share this Story: ","architecture" );?></li>
                  	   <li class="fb"><a href="<?php echo $fb_share_url; ?>" target="_blank"><i class="icon-facebook-1" aria-hidden="true"></i></a> </li>
                       <li class="tw"><a href="<?php echo $tw_share_url; ?>" target="_blank"><i class="icon-twitter-1" aria-hidden="true"></i></a> </li>
                       <li class="gp"><a href="<?php echo $gplus_share_url; ?>" target="_blank"><i class="icon-google" aria-hidden="true"></i></a></li>
                  </ul>
              </div>

  						<!-- END PROJECT FEATURES -->

  						<!-- START PROJECT IMAGES -->
  						<div class="project-images">
              <?php

              if ( class_exists( 'acf' ) ){
  							$project_images = get_field( "project_images" );
  						} else {
  							$project_images = "";
  						}

  						if ( $project_images != "") {
  						foreach ( $project_images as $project_image ) {
  						?>

  							<div class="col-md-6">
  								<div class="work">
  									<div class="grid">
                      <figure class="effect-sadie">
  											<img src="<?php echo esc_url( $project_image['sizes']['medium_large'] ); ?>" alt="<?php echo esc_attr( $project_image['alt'] ); ?>">

  											<figcaption>
  											<h2><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/plus.png" alt=""></h2>
  											<a class="fancybox-buttons" data-fancybox-group="project_images" href="<?php echo esc_url( $project_image['url'] ); ?>"></a>
  											</figcaption>

  										</figure>
  									</div>
  								</div>
  							</div>

  						<?php } } ?>

  						</div>
  						<!-- END PROJECT IMAGES -->

  					</div>
  				</div>
  			</div>

  			<?php the_content(); ?>

  			<!-- START PROJECT IMAGES -->

        <?php

        $project_terms = wp_get_post_terms( get_the_ID(), "project-category" );

        if ( count ( $project_terms ) > 0 ) {
          $term_ids = array();
  		    foreach ( $project_terms as $project_term ) {
            $term_ids[] = $project_term->term_id;
  		    }

           $args = array(
    				'post_type' => 'project',
    				'post__not_in' => array( get_the_ID() ),
    				'tax_query' => array(
    					array(
    					'taxonomy' => 'project-category',
    					'field' => 'id',
    					'terms' => $term_ids
    					 )
    				  )
    				);

            $related_projects_query = new WP_Query( $args );

  					if ( $related_projects_query->have_posts() ) {
  						echo '<div class="sec-space"><div class="container"><div class="row">';

  						while ( $related_projects_query->have_posts() ) {
  							$related_projects_query->the_post();
  							if ( has_post_thumbnail(get_the_ID()) ){

  								wp_get_attachment_url( get_post_thumbnail_id( get_the_ID() ) )
  								?>

                  <div class="col-md-4">
                      <div class="work">
                          <div class="grid">

                              <figure class="effect-sadie">
                                  <?php the_post_thumbnail("architecture-related-project-size"); ?>
                                  <figcaption>
                                  <h2><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/plus.png" alt=""></h2>
                                  <a class="fancybox-buttons" data-fancybox-group="button" href="<?php echo esc_url( get_the_post_thumbnail_url() );  ?>"></a>
                                  </figcaption>
                              </figure>

                          </div>
                      </div>
                  </div>

              <?php
  							}
  						}
  						echo '</div></div></div>';
  					} } ?>

            <!-- END PROJECT IMAGES -->

      </section>
      <!-- END PROJECT DETAIL -->

  </div>
  <!-- END CONTENT -->

<?php
 endwhile;

get_footer(); ?>
