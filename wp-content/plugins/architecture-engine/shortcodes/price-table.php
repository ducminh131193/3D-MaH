<?php
if ( ! function_exists( 'architecture_parent_price_table_shortcode' ) ) {
	function architecture_parent_price_table_shortcode( $atts , $content = NULL ){
		extract( shortcode_atts( array(
			'section_id'        => '',
      'background_color'  => '#fbfbfb',
		), $atts ) );
			ob_start(); ?>
      <!-- Section pricing table parent -->
	  	<div class="main-heading main-heading-seller">
			<h2>Our Best Seller</h2>				
		</div>
			<section"><div class="container"><div class="row"><div class="pricing-table-wrapper">
        	<ul>
						<?php echo do_shortcode( $content ); ?>
						<div class="clearfix"></div>
					</ul>
			</div></div></div></section>
    <?php
		return ob_get_clean();
	}
}
add_shortcode('architecture_price_table_parent', 'architecture_parent_price_table_shortcode');


if ( ! function_exists( 'architecture_child_price_table_shortcode' ) ) {
	function architecture_child_price_table_shortcode( $atts , $content =  NULL ){
		extract( shortcode_atts( array(
			'title'				=> '',
			'unit'				=> '',
			'price'				=> '',
			'tag' 				=> '',
			'active' 			=> '',
			'buttonlink' 		=> '',
			'img'				=> ''
		), $atts ) );

			ob_start();

			$content = wpb_js_remove_wpautop($content, true);

			if($active == 'false'){
				?> <li> <?php
			}else{
				?> <li class="active"> <?php
			}
			?>
      <!-- item -->

      		<h4><?php echo $title; ?></h4>
			<img src="<?php echo $img; ?>" alt="">
          <h1><sup><?php echo $unit; ?></sup><?php echo $price; ?> </br><small><?php echo $tag; ?></small></h1>
          <div class="table-seprator"></div>
          <div class="table-offers-content">
						<?php echo $content; ?>
          </div>
          <div class="table-footer">
          	<a class="table-signup-Btn" href="<?php echo $buttonlink; ?>">Buy now</a>
          </div>
      </li>

    <?php
		return ob_get_clean();
	}
}
add_shortcode('architecture_price_table_child', 'architecture_child_price_table_shortcode');


// Visual Composer Map
if ( ! function_exists( 'architecture_vc_map_price_table' ) ) {

function architecture_vc_map_price_table() {
	vc_map( array(
			'name'										=> esc_html__( 'Pricing Table', 'tsae' ),
			'base' 				      		  => 'architecture_price_table_parent',
			'category'				  			=> esc_html__( 'Architecture Theme', 'tsae' ),
      'icon'                    => get_template_directory_uri()."/images/hammer-yellow.png",
			'as_parent' 			  			=> array('only' => 'architecture_price_table_child'),
			'show_settings_on_create' => true,
			'content_element' 		  	=> true,
	    'is_container' 			  		=> false,
			'js_view' 				  			=> 'VcColumnView',
			'params'                  => array (
				array(
					"type" => "textfield",
					"holder" => "div",
					"class" => "",
					"heading" => esc_html__( "Heading", "tsae"),
					"param_name" => "section_heading",
					// 'description' => __( "Remembers Section Id Must be Unique.", "tsae" )
				),
			),
			)
);

	vc_map( array(

	    "name" 										=> esc_html__("Pricing Item", 'tsae'),
	    "base" 										=> "architecture_price_table_child",
	    "content_element"   			=> true,
      'icon'                    => get_template_directory_uri()."/images/hammer-yellow.png",
	    "as_child" 								=> array('only' => 'architecture_price_table_parent'),
			"show_settings_on_create" => true,
			'is_container' 						=> true,
	    "params" => array(
				array(
						"type" => "textfield",
						"holder" => "div",
						"class" => "",
						"heading" => __( "Title", "tsae" ),
						"param_name" => "title",
						"value" => __( "", "tsae" ),
					),
					array(
						"type" => "textfield",
						"holder" => "div",
						"class" => "",
						"heading" => __( "Price", "tsae" ),
						"param_name" => "price",
						"value" => __( "", "tsae" ),
					),
					array(
						"type" => "textfield",
						"holder" => "div",
						"class" => "",
						"heading" => __( "Unit", "tsae" ),
						"param_name" => "unit",
						"value" => __( "", "tsae" ),
					),
					array(
						"type" => "textfield",
						"holder" => "div",
						"class" => "",
						"heading" => __( "Tag", "tsae" ),
						"param_name" => "tag",
						"value" => __( "", "tsae" ),
					),
					array(
					  "type" => "dropdown",
					  "holder" => "div",
					  "class" => "",
					  "heading" => __( "Active", "tsae" ),
					  "param_name" => "active",
						"default" => "false",
					  "value" => array ( __("True","tsae") => "true", __("False","tsae") =>"false")
					),
					array(
						"type" => "textarea_html",
						"holder" => "div",
						"class" => "",
						"heading" => __( "Description", "tsae" ),
						"param_name" => "content",
						"value" => __( "", "tsae" ),
					),
					array(
						"type" => "textfield",
						"holder" => "div",
						"class" => "",
						"heading" => __( "Button Link", "tsae" ),
						"param_name" => "buttonlink",
						"value" => __( "", "tsae" ),
					),

				)

	) );

if ( class_exists( 'WPBakeryShortCodesContainer' ) ) {
    class WPBakeryShortCode_architecture_price_table_parent extends WPBakeryShortCodesContainer {
    }
}
if ( class_exists( 'WPBakeryShortCode' ) ) {
    class WPBakeryShortCode_architecture_price_table_child extends WPBakeryShortCode {
    }
}


	}
}

add_action( 'vc_before_init', 'architecture_vc_map_price_table' );
?>
