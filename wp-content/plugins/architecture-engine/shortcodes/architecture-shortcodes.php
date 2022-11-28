<?php

/* ======== 3STEPS SHORTCODE ========= */
if ( ! function_exists( 'tsa_3steps_shortcode' ) ) {

	function tsa_3steps_shortcode( $atts ) {

		$atts = shortcode_atts( array(
			'title1' => '',
			'description1' => '',
			'title2' => '',
			'description2' => '',
			'title3' => '',
			'description3' => '',

		), $atts, 'tsa_3steps' );

		extract($atts);

		$html_output ='<section class="sec-space"><div class="container"><div class="process"><div class="row">';

		if ( $title1!="" ) {

			$html_output .='<div class="col-md-4">
				<span>01</span>
				<div class="text">
				<h3>'.$title1.'</h3>
				<p>'.$description1.'</p>
				</div>
			</div>';

		}

		if ( $title2!="" ) {

			$html_output .='<div class="col-md-4">
				<span>02</span>
				<div class="text">
				<h3>'.$title2.'</h3>
				<p>'.$description2.'</p>
				</div>
			</div>';

		}

		if ( $title3!="" ) {

			$html_output .='<div class="col-md-4">
				<span>03</span>
				<div class="text">
				<h3>'.$title3.'</h3>
				<p>'.$description3.'</p>
				</div>
			</div>';

		}

		$html_output .='</div></div></div></section>';

		return $html_output;

	}

}

add_shortcode( 'tsa_3steps', 'tsa_3steps_shortcode' );

/* ======== ACHIEVEMENTS SHORTCODE ========= */
if ( ! function_exists( 'tsa_achievements_shortcode' ) ) {

	function tsa_achievements_shortcode( $atts ) {

		$atts = shortcode_atts( array(
			'heading' => '',
			'sub_heading' => '',
			'title1' => '',
			'description1' => '',
			'title2' => '',
			'description2' => '',
			'title3' => '',
			'description3' => '',
			'title4' => '',
			'description4' => '',
			'title5' => '',
			'description5' => '',
			'title6' => '',
			'description6' => '',
			'background'=>'',

		), $atts, 'tsa_achievements' );

		extract($atts);

		if( $background!=""){

			$background = wp_get_attachment_image_src($background,'full');
			$background=$background[0];

		}

		$html_output ='<section class="sec-space awards" style="background: url('.$background.') no-repeat fixed;">
			  <div class="container">
				<div class="col-md-12">
					<div class="main-heading white">
						<h4>'.$sub_heading.'</h4>
						<h1>'.$heading.'</h1>
					</div>
				</div><div class="achievements">
					<div class="col-md-12">';

		if ( $title1!=""){

			$html_output.='<div class="achiev-sec">
				<h1>1</h1>
				<p><strong>'.$title1.'</strong> '.$description1.'</p>
			</div>';

		}

		if ( $title2!=""){

			$html_output.='<div class="achiev-sec right">
				<h1>2</h1>
				<p><strong>'.$title2.'</strong> '.$description2.'</p>
			</div>';

		}

		$html_output.='<div class="clear"></div>';

		if ( $title3!=""){

			$html_output.='<div class="achiev-sec">
				<h1>3</h1>
				<p><strong>'.$title3.'</strong> '.$description3.'</p>
			</div>';

		}

		if ( $title4!=""){

			$html_output.='<div class="achiev-sec right">
				<h1>4</h1>
				<p><strong>'.$title4.'</strong> '.$description4.'</p>
			</div>';

		}

		$html_output.='<div class="clear"></div>';

		if ( $title5!=""){

			$html_output.='<div class="achiev-sec">
				<h1>5</h1>
				<p><strong>'.$title5.'</strong> '.$description5.'</p>
			</div>';

		}

		if ( $title6!=""){

			$html_output.='<div class="achiev-sec right">
				<h1>6</h1>
				<p><strong>'.$title6.'</strong> '.$description6.'</p>
			</div>';

		}


		$html_output.='</div>	</div></div></section>';

		return $html_output;

	}

}

add_shortcode( 'tsa_achievements', 'tsa_achievements_shortcode' );

/* ======== CLIENTS SHORTCODE ========= */
if ( ! function_exists( 'tsa_clients_shortcode' ) ) {

	function tsa_clients_shortcode( $atts ) {

		$atts = shortcode_atts( array(
			'heading' => '',
			'sub_heading' => '',
			'tagline' => '',
			'logos_image' => '',

		), $atts, 'tsa_clients' );

		extract($atts);

		if( $logos_image!=""){

			$logos_image = wp_get_attachment_image_src($logos_image,'full');
			$logos_image=$logos_image[0];

		}
		$html_output ='<section class="sec-space gray-bg"><div class="container"><div class="clients"><div class="row">
						<div class="col-md-12">
							<div class="main-heading">
								<h4>'.$sub_heading.'</h4>
								<h1>'.$heading.'</h1>
								<span>'.$tagline.'</span>
							</div>
						</div>

						<div id="exampleSlider" class="col-md-12">
						<div class="MS-content">
							<div class="item">
								<p><img src="wp-content/themes/architecture/images/Arctec-3d.png" alt=""></p>
							</div>
							<div class="item">
								<p><img src="wp-content/themes/architecture/images/eureka_logo-2.png" alt=""></p>
							</div>
							<div class="item">
								<p><img src="wp-content/themes/architecture/images/geomagic_logo.png" alt=""></p>
							</div>
							<div class="item">
								<p><img src="wp-content/themes/architecture/images/mois_logo.png" alt=""></p>
							</div>
							<div class="item">
								<p><img src="wp-content/themes/architecture/images/NCspeed_logo.png" alt=""></p>
							</div>
						
							<div class="item">
								<p><img src="wp-content/themes/architecture/images/netfabb-1.png" alt=""></p>
							</div>
							<div class="item">
								<p><img src="wp-content/themes/architecture/images/Surfcam_logo_small.png" alt=""></p>
							</div>
							<div class="item">
								<p><img src="wp-content/themes/architecture/images/worknc_logo_small.png" alt=""></p>
							</div>
							
						</div>
						<div class="MS-controls">
							<button class="MS-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
							<button class="MS-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
						</div>
					</div>				 

						</div></div></div></div></section>';

		return $html_output;

	}

}

add_shortcode( 'tsa_clients', 'tsa_clients_shortcode' );

/* ======== CONTENT BOX SHORTCODE ========= */
if ( ! function_exists( 'tsa_content_box_shortcode' ) ) {

	function tsa_content_box_shortcode( $atts , $content =  NULL ) {

		$atts = shortcode_atts( array(
			'heading' => '',
			'image_align' => '',
			'logos_image' => '',
		), $atts, 'tsa_content_box' );

		extract($atts);

		$content = wpb_js_remove_wpautop($content, true);

		if( $logos_image!=""){
			$logos_image = wp_get_attachment_image_src($logos_image,'full');
			$logos_image=$logos_image[0];
		}

if( $image_align == 'left' ){
		$html_output = '<section><div class="container"><div class="row"><div class="our-service-box">';
}
else{
	$html_output = '<section><div class="container"><div class="row"><div class="our-service-box align-right-grid">';
}
		$html_output .= '<div class="service-img-view">
			                    	<img src="'.$logos_image.'" alt="" />
			                    </div>
			                    <div class="service-content-box">
			                    	<h5>'.$heading.'</h5>
			                        <p>'.$content.'</p>
			                    </div>
            				 </div></div></div></section>';
		return $html_output;

	}

}

add_shortcode( 'tsa_content_box', 'tsa_content_box_shortcode' );

require_once dirname( __FILE__ ) . '/price-table.php';


/* ======== PROCESS SHORTCODE ========= */
if ( ! function_exists( 'tsa_process_shortcode' ) ) {

	function tsa_process_shortcode($atts, $content)
	{
		$atts = shortcode_atts( array(
			'step1' => '',
			'step2' => '',
			'step3' => '',
			'step4' => '',
			'step5' => '',
			'step6' => '',
			'step7' => '',
		), $atts );

		extract($atts);

		$content = wpb_js_remove_wpautop($content, true);

		$html_output = '<section>	<div class="container"><div class="some-about"><div class="row"><div class="about-detail">
							<div class="col-md-8">
							<p>'.$content.'</p>
							</div><div class="col-md-4">
							<ul>';

		if ( $step1!="") $html_output .='<li><span class="number">1)</span> <span>'.$step1.'</span></li>';

		if ( $step2!="") $html_output .='<li><span class="number">2)</span> <span>'.$step2.'</span></li>';

		if ( $step3!="") $html_output .='<li><span class="number">3)</span> <span>'.$step3.'</span></li>';

		if ( $step4!="") $html_output .='<li><span class="number">4)</span> <span>'.$step4.'</span></li>';

		if ( $step5!="") $html_output .='<li><span class="number">5)</span> <span>'.$step5.'</span></li>';

		if ( $step6!="") $html_output .='<li><span class="number">6)</span> <span>'.$step6.'</span></li>';

		if ( $step7!="") $html_output .='<li><span class="number">7)</span> <span>'.$step7.'</span></li>';

		$html_output .='</ul></div></div></div></div></div></section>';

		return $html_output;

	}

}

add_shortcode( 'tsa_process', 'tsa_process_shortcode' );

/* ======== ICON SET SHORTCODE ========= */
if ( ! function_exists( 'tsa_icon_set_shortcode' ) ) {

	function tsa_icon_set_shortcode($atts)
	{
		$atts = shortcode_atts( array(
			'icon1' => '',
			'icon2' => '',
			'icon3' => '',
			'description'=> '',
		), $atts );

		extract($atts);

		$html_output = '<section class="our-studio"><div class="container"><div class="row"><div class="col-md-12"><div class="icons">';

		if($icon1!="") $html_output .=	'<i class="icon-noun_'.$icon1.'_cc"></i>';

		if($icon2!="") $html_output .=	'<i class="icon-noun_'.$icon2.'_cc"></i>';

		if($icon3!="") $html_output .=	'<i class="icon-noun_'.$icon3.'_cc"></i>';

		$html_output .='</div><span>'.$description.'</span></div></div></div></section>';

		return $html_output;

	}

}

add_shortcode( 'tsa_icon_set', 'tsa_icon_set_shortcode' );

/* ======== PROJECTS SHORTCODE ========= */
if ( ! function_exists( 'tsa_projects_shortcode' ) ) {

	function tsa_projects_shortcode( $atts ) {

		$atts = shortcode_atts( array(
			'limit' => 6,
			'columns' => 2,
			'style' => 'classic',
			'heading'=>'',
			'sub_heading'=>'',
			'tagline'=>'',
			'projects_link'=>'#',
		), $atts, 'tsa_projects' );

		extract($atts);

		$cols = 6;

		if ( $atts['columns'] == 2 ) $cols = 6;

		else if ( $atts['columns'] == 3 ) $cols = 4;

		else if ( $atts['columns'] == 4 ) $cols = 3;

		if ( $atts['style'] == 'modern' ) {

			$html_output = '<section class="sec-space">
				<div class="container">
					<div class="row">

						<div class="col-md-12">
							<div class="main-heading">
								<h4>'.$sub_heading.'</h4>
								<h1>'.$heading.'</h1>
								<span>'.$tagline.'</span>
							</div>
						</div><div class="projects">';

		}
		else{

			$html_output = '<section class="sec-space all-projects gray-bg"><div class="row"><div class="col-md-12">
							<div class="main-heading">
								<h4>'.$sub_heading.'</h4>
								<h1>'.$heading.'</h1>
								<span>'.$tagline.'</span>
							</div></div><div class="projects"><div class="projects-main">';
		}

		 $args = array(
			'posts_per_page'   => $atts['limit'],
			'offset'           => 0,
			'orderby'          => 'date',
			'order'            => 'DESC',
			'post_type'        => 'project',
			'post_status'      => 'publish',
			'suppress_filters' => true
		);

		$projects_query = new WP_Query( $args );

		$projects_array = $projects_query->posts;

		if ( count ( $projects_array ) > 0 ){

			$projects_counter = 1;

			foreach ( $projects_array as $project_item ) {

				if ( $projects_counter < 10 ) $projects_counter_formatted = "0".$projects_counter;
				else $projects_counter_formatted = $projects_counter;

				$project_terms_array = wp_get_post_terms( $project_item->ID, "project-category" );
				$project_terms_list_string ="";
				$project_terms_counter = 0;

				if ( count ( $project_terms_array ) > 0 ) {

					foreach ( $project_terms_array as $project_term_item ) {

						if ( $project_terms_counter != count ( $project_terms_array ) -1 )
							$project_terms_list_string.=$project_term_item->name.", ";
						else
							$project_terms_list_string.=$project_term_item->name;

						$project_terms_counter++;

					}

				}

				if ( $atts['style'] == 'modern' ) {

					$html_output .=	'<div class="col-md-'.$cols.'"><div class="project-sec"><div class="work"><div class="grid"><figure class="effect-sadie">
												<div class="image">'.get_the_post_thumbnail($project_item->ID,"architecture-project-shortcode").'</div><figcaption>
													<h2><img src="'.get_template_directory_uri().'/images/plus.png" alt=""></h2>
													<a href="'.get_permalink($project_item->ID).'"></a>
												</figcaption></figure><div class="detail">
												<span class="number">'.$projects_counter_formatted.'</span>
												<div class="text">
													<h6>'.$project_item->post_title.'</h6>
													<span class="tags">'.$project_terms_list_string.'</span>
												</div></div></div></div></div></div>';

				}
				else {

					$html_output .= '<div class="col-md-'.$cols.'">
								<div class="project-sec"><div class="work"><div class="grid">	<figure class="effect-sadie">
											<div class="image">'.get_the_post_thumbnail($project_item->ID,"architecture-project-shortcode").'</div><figcaption>
												<h2><img src="'.get_template_directory_uri().'/images/plus.png" alt=""></h2>
												<a href="'.get_permalink($project_item->ID).'"></a>
											</figcaption></figure><div class="project-title"><div class="text">
												<h6>'.$project_item->post_title.'</h6>
												<span class="tags">'.$project_terms_list_string.'</span>
											</div></div></div></div></div></div>';

							if( $projects_counter % 4 ==0 )
								$html_output.='</div><div class="projects-main">';

				}

				$projects_counter++;

			}

		}

		if ( $atts['style'] == 'modern' )
			$html_output .=	'</div><div class="view-all"><a class="black-btn" href="'.$projects_link.'">'.__("View All Projects","tsae").'</a></div></div></div></section>';
		else
			$html_output .=	'</div></div><div class="view-all"><a class="black-btn" href="'.$projects_link.'">'.__("View All Projects","tsae").'</a></div></div></section>';

		return $html_output;

	}

}

add_shortcode( 'tsa_projects', 'tsa_projects_shortcode' );

/* ======== TESTIMONIALS SHORTCODE ========= */
if ( ! function_exists( 'tsa_testimonials_shortcode' ) ) {

	function tsa_testimonials_shortcode( $atts ) {

		$atts = shortcode_atts( array(
			'heading' => '',
			'sub_heading' => '',
			'background' => '',
		), $atts, 'tsa_testimonials' );

		extract($atts);

		$args = array(
			'posts_per_page'   => -1,
			'orderby'          => 'date',
			'order'            => 'DESC',
			'post_type'        => 'tsa-testimonial',
			'post_status'      => 'publish',
		);


		$testimonials_query = new WP_Query( $args );

		if( $background!=""){

			$background = wp_get_attachment_image_src($background,'full');
			$background=$background[0];

	  }

		$html_output = '<section class="sec-space clients-words" style="background: url('.$background.') no-repeat fixed;"><div class="container"><div class="col-md-12">
					<div class="main-heading white">
						<h4>'.$sub_heading.'</h4>
						<h1>'.$heading.'</h1></div></div><div class="col-md-12"><div class="kind-words"><div id="client-words" class="owl-carousel">';

		if ( $testimonials_query->have_posts() ) {

			while ( $testimonials_query->have_posts() ) :
				$testimonials_query->the_post();
				if( class_exists( 'acf' ) ){
					$designation = get_field('designation', get_the_ID());
				}else{
					$designation = "";
				}
				$html_output .= '<div><p>'.get_the_content().'</p><span>- '.get_the_title().', <span class="client">'. $designation .'</span></span></div>';

			endwhile;
			wp_reset_postdata();
		}

		$html_output .= '</div></div></div></div></section>';

		return $html_output;

	}

}

add_shortcode( 'tsa_testimonials', 'tsa_testimonials_shortcode' );

/* ======== TEAM SHORTCODE ========= */
if ( ! function_exists( 'tsa_team_shortcode' ) ) {

	function tsa_team_shortcode( $atts ) {

		$atts = shortcode_atts( array(
			'heading' => '',
			'sub_heading' => '',
			'tagline' => '',
		), $atts, 'tsa_testimonials' );

		extract($atts);

		$args = array(
			'posts_per_page'   => -1,
			'offset'           => 0,
			'orderby'          => 'date',
			'order'            => 'DESC',
			'post_type'        => 'tsa-team',
			'post_status'      => 'publish',
			'suppress_filters' => true
		);

		$html_output = '<section class="sec-space"><div class="container"><div class="row"><div class="col-md-12"><div class="main-heading">
								<h4>'.$sub_heading.'</h4>
								<h1>'.$heading.'</h1>
								<span>'.$tagline.'</span></div></div><div class="our-team">';

		$team_query = new WP_Query( $args );
		$team_array = $team_query->posts;

		if ( count ( $team_array ) > 0 ) {

			foreach ( $team_array as $team_item ) {

				$designation	= "";
				$facebook		= "";
				$twitter		= "";
				if( class_exists( 'acf' ) ){
					$designation	= get_field("designation", $team_item->ID);
					$facebook		= get_field("facebook", $team_item->ID);
					$twitter		= get_field("twitter", $team_item->ID);
				}

				$html_output .=  '<div class="col-md-4"><div class="team">
												'.get_the_post_thumbnail($team_item->ID,"architecture-team-shortcode").'<div class="detail"><div class="name">
														<h5>'.$team_item->post_title.'</h5>
														<span>'. $designation .'</span></div><div class="social-icons">
														<a href="'. $facebook .'"><i class="icon-facebook-1"></i></a>
														<a href="'. $twitter .'"><i class="icon-twitter-1"></i></a>
													</div><p>'.$team_item->post_content.'</p>	</div></div></div>';

			}

		}

		$html_output .= '<div class="clear"></div></div></div></div></section>';

		return $html_output;

	}

}

add_shortcode( 'tsa_team', 'tsa_team_shortcode' );

/* ======== SERVICES SHORTCODE ========= */
if ( ! function_exists( 'tsa_services_shortcode' ) ) {

	function tsa_services_shortcode( $atts ) {

		$atts = shortcode_atts( array(
			'heading' => '',
			'sub_heading' => '',
			'tagline' => '',
		), $atts, 'tsa_services' );

		extract($atts);

		$args = array(
			'posts_per_page'   => -1,
			'offset'           => 0,
			'orderby'          => 'date',
			'order'            => 'DESC',
			'post_type'        => 'tsa-service',
			'post_status'      => 'publish',
			'suppress_filters' => true
		);

		$service_query = new WP_Query( $args );
		$services_array = $service_query->posts;

		$html_output = '<section class="sec-space"><div class="container"><div class="row"><div class="col-md-12"><div class="main-heading">
								<h4>'.$sub_heading.'</h4>
								<h1>'.$heading.'</h1>
								<span>'.$tagline.'</span></div></div><div class="clear"></div><div class="what-we-do"><div id="tabbed-nav" class="tabbed-nav"> <ul> ';

		if ( count ( $services_array ) > 0 ) {

			foreach ( $services_array as $service_item ) {

				$html_output.= '<li><a>'.$service_item->post_title.'</a></li>';

			}

		}

		$html_output .= '</ul><div>';

		if ( count ( $services_array ) > 0 ) {

			foreach ( $services_array as $service_item ) {

				$html_output.= '<div><div class="row"><div class="col-md-6"><div class="welcome-serv-img">'.get_the_post_thumbnail($service_item->ID,"architecture-services-shortcode").'</div></div><div class="col-md-6"><div class="detail"><p>'.$service_item->post_content.'</p></div></div></div></div>';

			}

		}

		$html_output	.=	'</div></div></div></div></div></section>';

		return $html_output;

	}

}

add_shortcode( 'tsa_services', 'tsa_services_shortcode' );

/* ======== Facts SHORTCODE ========= */
if ( ! function_exists( 'tsa_facts_shortcode' ) ) {

	function tsa_facts_shortcode($atts)
	{
			$atts = shortcode_atts( array(
			'number1' => '',
			'title1' => '',
			'number2' => '',
			'title2' => '',
			'number3' => '',
			'title3' => '',
		), $atts );

		extract($atts);

		$html_output = '<section><div class="container">	<div class="row"><div class="fun-facts"><div class="col-md-3">
								<img src="'.get_template_directory_uri().'/images/big-wave.png" alt=""></div><div class="fun-facts-detail">';

		if ( $number1 !="" ) {

			$html_output .='<div class="col-md-3"><div><span class="counter">'.$number1.'</span><span>'.$title1.'</span></div></div>';

		}

		if ( $number2 !="" ) {

			$html_output .='<div class="col-md-3"><div><span class="counter">'.$number2.'</span><span>'.$title2.'</span></div></div>';

		}

		if ( $number3 !="" ) {

			$html_output .='<div class="col-md-3"><div><span class="counter">'.$number3.'</span><span>'.$title3.'</span></div></div>';

		}

		$html_output .='</div><div class="clear"></div></div></div></div></section>';

		return $html_output;

	}

}

add_shortcode( 'tsa_facts', 'tsa_facts_shortcode' );

/* ======== SLIDER SHORTCODE ========= */
if ( ! function_exists( 'tsa_slider_shortcode' ) ) {

	function tsa_slider_shortcode($atts)
	{
		$atts = shortcode_atts( array(
			'slider_id' 	=> 0,
		), $atts );

		extract($atts);

		$html_output = '<section><div class="container"><div class="some-about"><div class="row"><div class="col-md-12"><div id="about-slide">'.__("No Slider found!").'</div></div></div></div></div></section>';

		if ( $slider_id != 0 ) {

			$slider = get_post( $slider_id );

			if ( $slider != NULL ) {

				$html_output = '<section><div class="container"><div class="some-about"><div class="row"><div class="col-md-12"><div id="about-slide" class="owl-carousel owl-theme architecture-slider">';

				if( class_exists( 'acf' ) ){
					$images = get_field('gallery', $slider_id);
				}else{
					$images = "";
				}

				if( $images ):

					foreach( $images as $image ):

						$html_output .= '<div class="item"><img src="'.$image['url'].'" alt="'.$image['alt'].'"></div>';

					endforeach;

				endif;

				$html_output .=	'</div></div></div></div></div></section>';

			}
			else {

				$html_output = '<section><div class="container"><div class="some-about"><div class="row"><div class="col-md-12"><div id="about-slide">'.__("No Slider found!").'</div></div></div></div></div></section>';

			}

		}

		return $html_output;

	}

}

add_shortcode( 'tsa_slider', 'tsa_slider_shortcode' );

/* ======== VISUAL COMPOSER MAPPING ========= */
function tsa_vc_shortcodes() {

	//////// Projects Shortcode //////
	$vc_map_array_projects = array (

	'name' => __("Projects","tsae"),
	'base' => "tsa_projects",
	'category' => __("Architecture Theme", "tsae"),
	'icon' => get_template_directory_uri()."/images/hammer-yellow.png",
	'params' => array(
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Limit", "tsae" ),
			  "param_name" => "limit",
			  "value" => __( "6", "tsae" ),
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Heading", "tsae" ),
			  "param_name" => "heading",
			  "value" => __( "", "tsae" ),
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Sub Heading", "tsae" ),
			  "param_name" => "sub_heading",
			  "value" => __( "", "tsae" ),
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Tagline", "tsae" ),
			  "param_name" => "tagline",
			  "value" => __( "", "tsae" ),
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "More Projects Link", "tsae" ),
			  "param_name" => "projects_link",
			  "value" => __( "", "tsae" ),
			),
			array(
			  "type" => "dropdown",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Columns", "tsae" ),
			  "param_name" => "columns",
			  "value" => array ( "2" => 2, "3" =>3, "4" => 4 )
			),
			array(
			  "type" => "dropdown",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Style", "tsae" ),
			  "param_name" => "style",
			  "value" => array ( __("Classic","tsae") => "classic", __("Modern","tsae") =>"modern")
			),

		)

	);

	vc_map( $vc_map_array_projects );

	//////// Testimonials Shortcode //////
	$vc_map_array_testimonials = array (

	'name' => __("Testimonials","tsae"),
	'base' => "tsa_testimonials",
	'icon' => get_template_directory_uri()."/images/hammer-yellow.png",
	'category' => __("Architecture Theme", "tsae"),
	'params' => array(
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Heading", "tsae" ),
			  "param_name" => "heading",
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Sub Heading", "tsae" ),
			  "param_name" => "sub_heading",
			),
			array(
			  "type" => "attach_image",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Background", "tsae" ),
			  "param_name" => "background",
			),
		)
	);

	vc_map( $vc_map_array_testimonials );

	//////// Team Shortcode //////
	$vc_map_array_team = array (

	'name' => __("Team","tsae"),
	'base' => "tsa_team",
	'icon' => get_template_directory_uri()."/images/hammer-yellow.png",
	'category' => __("Architecture Theme", "tsae"),
	'params' => array(
		array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Heading", "tsae" ),
			  "param_name" => "heading",
			  "value" => __( "", "tsae" ),
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Sub Heading", "tsae" ),
			  "param_name" => "sub_heading",
			  "value" => __( "", "tsae" ),
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Tagline", "tsae" ),
			  "param_name" => "tagline",
			  "value" => __( "", "tsae" ),
			),
	)
	);

	vc_map( $vc_map_array_team );

	//////// Services Shortcode //////
	$vc_map_array_services = array (

	'name' => __("Services","tsae"),
	'base' => "tsa_services",
	'icon' => get_template_directory_uri()."/images/hammer-yellow.png",
	'category' => __("Architecture Theme", "tsae"),
	'params' => array(
		array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Heading", "tsae" ),
			  "param_name" => "heading",
			  "value" => __( "", "tsae" ),
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Sub Heading", "tsae" ),
			  "param_name" => "sub_heading",
			  "value" => __( "", "tsae" ),
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Tagline", "tsae" ),
			  "param_name" => "tagline",
			  "value" => __( "", "tsae" ),
			),
	)
	);

	vc_map( $vc_map_array_services );

	//////// Counter Shortcode //////
	$vc_map_array_counter = array (

	'name' => __("Fun Facts","tsae"),
	'base' => "tsa_facts",
	'icon' => get_template_directory_uri()."/images/hammer-yellow.png",
	'category' => __("Architecture Theme", "tsae"),
	'params' => array(
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Number", "tsae" ),
			  "param_name" => "number1",
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Title", "tsae" ),
			  "param_name" => "title1",
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Number", "tsae" ),
			  "param_name" => "number2",
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Title", "tsae" ),
			  "param_name" => "title2",
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Number", "tsae" ),
			  "param_name" => "number3",
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Title", "tsae" ),
			  "param_name" => "title3",
			),

		)

	);

	vc_map( $vc_map_array_counter );


	//////// Slider Shortcode //////
	$vc_map_array_slider = array (

	'name' => __("Slider","tsae"),
	'base' => "tsa_slider",
	'icon' => get_template_directory_uri()."/images/hammer-yellow.png",
	'category' => __("Architecture Theme", "tsae"),
	'params' => array(
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Slider ID", "tsae" ),
			  "param_name" => "slider_id",
			),

		)

	);

	vc_map( $vc_map_array_slider);

	//////// ICON SET SHORTCODE  //////
	$vc_map_array_icon_set = array (

	'name' => __("Icon Set","tsae"),
	'base' => "tsa_icon_set",
	'icon' => get_template_directory_uri()."/images/hammer-yellow.png",
	'category' => __("Architecture Theme", "tsae"),
	'params' => array(
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Description", "tsae" ),
			  "param_name" => "description",
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Code for Icon 1", "tsae" ),
			  "param_name" => "icon1",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Code for Icon 2", "tsae" ),
			  "param_name" => "icon2",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Code for Icon 3", "tsae" ),
			  "param_name" => "icon3",
			  "value" =>'' ,
			)
		)

	);

	vc_map( $vc_map_array_icon_set );

	/////// PROCESS SHORTCODE  //////
	$vc_map_array_process = array (

	'name' => __("Process","tsae"),
	'base' => "tsa_process",
	'icon' => get_template_directory_uri()."/images/hammer-yellow.png",
	'category' => __("Architecture Theme", "tsae"),
	'params' => array(
			array(
			  "type" => "textarea_html",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Description", "tsae" ),
			  "param_name" => "content",
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Step 1", "tsae" ),
			  "param_name" => "step1",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Step 2 (if any)", "tsae" ),
			  "param_name" => "step2",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Step 3 (if any)", "tsae" ),
			  "param_name" => "step3",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Step 4 (if any)", "tsae" ),
			  "param_name" => "step4",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Step 5 (if any)", "tsae" ),
			  "param_name" => "step5",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Step 6 (if any)", "tsae" ),
			  "param_name" => "step6",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Step 7 (if any)", "tsae" ),
			  "param_name" => "step7",
			  "value" =>'' ,
			),

		)

	);

	vc_map( $vc_map_array_process );

	/////// CLIENTS SHORTCODE  //////
	$vc_map_array_clients = array (

	'name' => __("Clients","tsae"),
	'base' => "tsa_clients",
	'icon' => get_template_directory_uri()."/images/hammer-yellow.png",
	'category' => __("Architecture Theme", "tsae"),
	'params' => array(
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Heading", "tsae" ),
			  "param_name" => "heading",
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Sub Heading", "tsae" ),
			  "param_name" => "sub_heading",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Tagline", "tsae" ),
			  "param_name" => "tagline",
			  "value" =>'' ,
			),
			array(
			  "type" => "attach_image",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Clients Logos Image", "tsae" ),
			  "param_name" => "logos_image",
			),

		)

	);

	vc_map( $vc_map_array_clients );

	/////// CONTENT BOX SHORTCODE  //////
	$vc_map_array_content_box = array (

	'name' => __("Content Box","tsae"),
	'base' => "tsa_content_box",
	'icon' => get_template_directory_uri()."/images/hammer-yellow.png",
	'category' => __("Architecture Theme", "tsae"),
	'params' => array(
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Heading", "tsae" ),
			  "param_name" => "heading",
			),
			array(
			  "type" => "textarea_html",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Description", "tsae" ),
			  "param_name" => "content",
			  "value" =>'' ,
			),
			array(
			  "type" => "dropdown",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Image Align", "tsae" ),
			  "param_name" => "image_align",
				"default" => "right",
			  "value" => array ( __("Right","tsae") => "right", __("Left","tsae") =>"left")
			),
			array(
			  "type" => "attach_image",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Content Box Image", "tsae" ),
			  "param_name" => "logos_image",
			),
		)
	);

	vc_map( $vc_map_array_content_box );

	/////// ACHIEVEMENTS SHORTCODE  //////
	$vc_map_array_achievements = array (

	'name' => __("Achievements","tsae"),
	'base' => "tsa_achievements",
	'icon' => get_template_directory_uri()."/images/hammer-yellow.png",
	'category' => __("Architecture Theme", "tsae"),
	'params' => array(
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Heading", "tsae" ),
			  "param_name" => "heading",
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Sub Heading", "tsae" ),
			  "param_name" => "sub_heading",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Title", "tsae" ),
			  "param_name" => "title1",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Description", "tsae" ),
			  "param_name" => "description1",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Title", "tsae" ),
			  "param_name" => "title2",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Description", "tsae" ),
			  "param_name" => "description2",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Title", "tsae" ),
			  "param_name" => "title3",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Description", "tsae" ),
			  "param_name" => "description3",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Title", "tsae" ),
			  "param_name" => "title4",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Description", "tsae" ),
			  "param_name" => "description4",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Title", "tsae" ),
			  "param_name" => "title5",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Description", "tsae" ),
			  "param_name" => "description5",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Title", "tsae" ),
			  "param_name" => "title6",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Description", "tsae" ),
			  "param_name" => "description6",
			  "value" =>'' ,
			),
			array(
			  "type" => "attach_image",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Background Image", "tsae" ),
			  "param_name" => "background",
			),



		)

	);

	vc_map( $vc_map_array_achievements );

	/////// 3STEPS SHORTCODE  //////
	$vc_map_array_3steps = array (

	'name' => __("3 Steps","tsae"),
	'base' => "tsa_3steps",
	'icon' => get_template_directory_uri()."/images/hammer-yellow.png",
	'category' => __("Architecture Theme", "tsae"),
	'params' => array(

			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Title", "tsae" ),
			  "param_name" => "title1",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Description", "tsae" ),
			  "param_name" => "description1",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Title", "tsae" ),
			  "param_name" => "title2",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Description", "tsae" ),
			  "param_name" => "description2",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Title", "tsae" ),
			  "param_name" => "title3",
			  "value" =>'' ,
			),
			array(
			  "type" => "textfield",
			  "holder" => "div",
			  "class" => "",
			  "heading" => __( "Description", "tsae" ),
			  "param_name" => "description3",
			  "value" =>'' ,
			),
		)

	);

	vc_map( $vc_map_array_3steps );

}

add_action("vc_before_init","tsa_vc_shortcodes");

?>
