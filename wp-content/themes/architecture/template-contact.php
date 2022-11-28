<?php get_header();
while(have_posts()): the_post();
// Template Name: Contact Page
 ?>

  <!-- START SUB-BANNER -->
  	<div class="sub-banner">
  		<div class="container">
  			<div class="text-detail">
  				<h2><?php the_title(); ?></h2>
  				<p><?php the_content(); ?></p>
  				<?php architecture_breadcrumbs(); ?>
  			</div>
  		</div>
  	</div>
    <!-- END SUB-BANNER -->

  <!-- START CONTENT -->
  <div class="sub-content">
    <!--Start Map-->
  	<div id='map'>
  		<div class="container">
  		<div id='find-us'></div>
  		</div>
  	</div>
  <!--End Map-->

  <!-- START CONTACT DETAIL -->
  <section class="sec-space">
    <div class="container">
			<div class="contact-detail">
				<div class="row">
					<div class="col-md-7">

            <?php

            if ( class_exists( 'acf' ) ){
              if( have_rows('offices') ):

                $offices_counter = 0;
								$office_class    = "office office-right";

                while ( have_rows('offices') ) : the_row();

                if( $office_class == "office office-right" )
                $office_class = "office";

                else

                $office_class = "office office-right";
								$location   	= get_sub_field('office_address');
								$phone 	    	= get_sub_field('office_phone');
								$email 	      = get_sub_field('office_email');
								$title 		    = get_sub_field('office_name');
								$lat	        = $location['lat'];
								$long	        = $location['lng'];

								echo	'<div class="'. esc_attr( $office_class ) .'">';
								echo	'<h5>'. esc_html($title).'</h5>';
								echo	'<div class="detail">';
								echo	'<span><strong>T:</strong> '. esc_html($phone).'</span>';
								echo	'<span><strong>E:</strong> '. esc_html($email).'</span>';
								echo	'<span class="address">'. esc_html($location['address']).'</span>';
								echo	'</div></div>';

                if ( $offices_counter == 0 ) {
                  $offices_counter = 1;
									?>

                  <style>
                    #find-us {
                      height:520px;
										 }
										</style>

                    <script>
                    jQuery(document).ready(function() {
                      architecture_showMapOnContactPage("<?php echo esc_js( $lat ); ?>","<?php echo esc_js( $long ); ?>", "<?php echo esc_js( $location['address'] ); ?>", "<?php echo esc_url( get_template_directory_uri() ); ?>", "<?php echo esc_js( $title ); ?>", "<?php echo esc_js( $phone ); ?>", "<?php echo esc_js( $email ); ?>");
										});
                    </script>

                    <?php }

                    endwhile;

                endif;
								} ?>

							</div>

							<div class="col-md-5">
								<div class="inquiries">
									<h5><?php echo esc_html__( 'INQUIRIES','architecture' );?></h5>
									<div class="form">
                  	<div class="alert alert-success alert-dismissable contact-success"><?php echo esc_html__( 'Thanks for contacting us. We will get back to you asap.', 'architecture' ) ?></div>
                  	<form id="architecture-contact-form" onSubmit="return architecture_contact_form()">
  										<input name="name" id="architecture_name" type="text" value="" placeholder="<?php echo esc_html__( "Name", "architecture" ); ?>">
  										<input name="email" required id="architecture_email" type="text" value="" placeholder="<?php echo esc_html__( "Email Address", "architecture" ); ?>">
  										<textarea name="message" id="architecture_message" placeholder="<?php echo esc_html__( "Message", "architecture" ); ?>"></textarea>
  										<input name="submit" type="submit" value="Send">
                    </form>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>
		<!-- END CONTACT DETAIL -->

	</div>
	<!-- END CONTENT -->

<?php
 endwhile;

get_footer(); ?>
