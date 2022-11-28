<?php
/*
Plugin Name: Architecture Engine
Plugin URI: http://architecture.brighthemes.biz
Description: Engine for Architecture Theme
Version: 1.1
Author: Brigh Themes
Author URI: https://themeforest.net/user/brighthemes
License: GNU General Public License version 3.0 & Envato Regular/Extended License
License URI:  http://www.gnu.org/licenses/gpl-3.0.html & http://themeforest.net/licenses
Text Domain: tsae
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if( ! class_exists('tsae') ) :

class tsae {

	// vars
	var $settings;


	function __construct() {

		add_action( 'plugins_loaded', 'tsae_load_textdomain' );
		/**
		 * Load plugin textdomain.
		 *
		 * @since 1.0.0
		 */
		function tsae_load_textdomain() {

		  load_plugin_textdomain( 'tsae', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );

		}

	}

	function initialize() {

		// vars
		$this->settings = array(

			// basic
			'name'				=> __('Architecture Engine', 'tsae'),
			'version'			=> '1.0.0',

		);

		add_action( 'init', array ( $this, 'tsae_register_post_types' ) );
		add_action( 'init', array ( $this, 'tsae_register_taxonomies' ) );

	}

	/* ================ REGISTER PROJECT, TEAM, TESTIMONIAL AND SERVICE POST TYPES ============== */

	function tsae_register_post_types() {

		$labels = array(
			'name'               => _x( 'Projects', 'post type general name', 'tsae' ),
			'singular_name'      => _x( 'Project', 'post type singular name', 'tsae' ),
			'menu_name'          => _x( 'Projects', 'admin menu', 'tsae' ),
			'name_admin_bar'     => _x( 'Project', 'add new on admin bar', 'tsae' ),
			'add_new'            => _x( 'Add New', 'project', 'tsae' ),
			'add_new_item'       => __( 'Add New Project', 'tsae' ),
			'new_item'           => __( 'New Project', 'tsae' ),
			'edit_item'          => __( 'Edit Project', 'tsae' ),
			'view_item'          => __( 'View Project', 'tsae' ),
			'all_items'          => __( 'All Projects', 'tsae' ),
			'search_items'       => __( 'Search Projects', 'tsae' ),
			'parent_item_colon'  => __( 'Parent Projects:', 'tsae' ),
			'not_found'          => __( 'No Projects found.', 'tsae' ),
			'not_found_in_trash' => __( 'No Projects found in Trash.', 'tsae' )
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Description.', 'tsae' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'projects' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
		);

		register_post_type( 'project', $args );

		$labels = array(
			'name'               => _x( 'Team', 'post type general name', 'tsae' ),
			'singular_name'      => _x( 'Team', 'post type singular name', 'tsae' ),
			'menu_name'          => _x( 'Team', 'admin menu', 'tsae' ),
			'name_admin_bar'     => _x( 'Team Member', 'add new on admin bar', 'tsae' ),
			'add_new'            => _x( 'Add New', 'team', 'tsae' ),
			'add_new_item'       => __( 'Add New Team Member', 'tsae' ),
			'new_item'           => __( 'New Team Member', 'tsae' ),
			'edit_item'          => __( 'Edit Team Member', 'tsae' ),
			'view_item'          => __( 'View Team Member', 'tsae' ),
			'all_items'          => __( 'All Team', 'tsae' ),
			'search_items'       => __( 'Search Team', 'tsae' ),
			'parent_item_colon'  => __( 'Parent Team:', 'tsae' ),
			'not_found'          => __( 'No Team found.', 'tsae' ),
			'not_found_in_trash' => __( 'No Team found in Trash.', 'tsae' )
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Description.', 'tsae' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'team' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
		);

		register_post_type( 'tsa-team', $args );

		$labels = array(
			'name'               => _x( 'Testimonials', 'post type general name', 'tsae' ),
			'singular_name'      => _x( 'Testimonial', 'post type singular name', 'tsae' ),
			'menu_name'          => _x( 'Testimonials', 'admin menu', 'tsae' ),
			'name_admin_bar'     => _x( 'Testimonial', 'add new on admin bar', 'tsae' ),
			'add_new'            => _x( 'Add New', 'testimonial', 'tsae' ),
			'add_new_item'       => __( 'Add New Testimonial', 'tsae' ),
			'new_item'           => __( 'New Testimonial', 'tsae' ),
			'edit_item'          => __( 'Edit Testimonial', 'tsae' ),
			'view_item'          => __( 'View Testimonial', 'tsae' ),
			'all_items'          => __( 'All Testimonial', 'tsae' ),
			'search_items'       => __( 'Search Testimonials', 'tsae' ),
			'parent_item_colon'  => __( 'Parent Testimonials:', 'tsae' ),
			'not_found'          => __( 'No Testimonials found.', 'tsae' ),
			'not_found_in_trash' => __( 'No Testimonials found in Trash.', 'tsae' )
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Description.', 'tsae' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'testimonials' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
		);

		register_post_type( 'tsa-testimonial', $args );

		$labels = array(
			'name'               => _x( 'Services', 'post type general name', 'tsae' ),
			'singular_name'      => _x( 'Service', 'post type singular name', 'tsae' ),
			'menu_name'          => _x( 'Services', 'admin menu', 'tsae' ),
			'name_admin_bar'     => _x( 'Service', 'add new on admin bar', 'tsae' ),
			'add_new'            => _x( 'Add New', 'service', 'tsae' ),
			'add_new_item'       => __( 'Add New Service', 'tsae' ),
			'new_item'           => __( 'New Service', 'tsae' ),
			'edit_item'          => __( 'Edit Service', 'tsae' ),
			'view_item'          => __( 'View Service', 'tsae' ),
			'all_items'          => __( 'All Service', 'tsae' ),
			'search_items'       => __( 'Search Services', 'tsae' ),
			'parent_item_colon'  => __( 'Parent Services:', 'tsae' ),
			'not_found'          => __( 'No Services found.', 'tsae' ),
			'not_found_in_trash' => __( 'No Services found in Trash.', 'tsae' )
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Description.', 'tsae' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'services' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
		);

		register_post_type( 'tsa-service', $args );

		$labels = array(
			'name'               => _x( 'Sliders', 'post type general name', 'tsae' ),
			'singular_name'      => _x( 'Slider', 'post type singular name', 'tsae' ),
			'menu_name'          => _x( 'Sliders', 'admin menu', 'tsae' ),
			'name_admin_bar'     => _x( 'Slider', 'add new on admin bar', 'tsae' ),
			'add_new'            => _x( 'Add New', 'slider', 'tsae' ),
			'add_new_item'       => __( 'Add New Slider', 'tsae' ),
			'new_item'           => __( 'New Slider', 'tsae' ),
			'edit_item'          => __( 'Edit Slider', 'tsae' ),
			'view_item'          => __( 'View Slider', 'tsae' ),
			'all_items'          => __( 'All Slider', 'tsae' ),
			'search_items'       => __( 'Search Sliders', 'tsae' ),
			'parent_item_colon'  => __( 'Parent Sliders:', 'tsae' ),
			'not_found'          => __( 'No Sliders found.', 'tsae' ),
			'not_found_in_trash' => __( 'No Sliders found in Trash.', 'tsae' )
		);

		$args = array(
			'labels'             => $labels,
			'description'        => __( 'Description.', 'tsae' ),
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'query_var'          => true,
			'rewrite'            => array( 'slug' => 'sliders' ),
			'capability_type'    => 'post',
			'has_archive'        => true,
			'hierarchical'       => false,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
		);

		register_post_type( 'tsa-slider', $args );

	}

	/* ================ REGISTER CLIENTS, PROGRAMS, CATEGORIES AND ARCHITECTS TAXONOMIES ============== */

	function tsae_register_taxonomies() {

		//CLIENTS TAXONOMY REGISTER
		$labels = array(
			'name'                       => _x( 'Clients', 'taxonomy general name' ),
			'singular_name'              => _x( 'Client', 'taxonomy singular name' ),
			'search_items'               => __( 'Search Clients' , 'tsae' ),
			'popular_items'              => __( 'Popular Clients' , 'tsae' ),
			'all_items'                  => __( 'All Clients' , 'tsae' ),
			'parent_item'                => null,
			'parent_item_colon'          => null,
			'edit_item'                  => __( 'Edit Client' , 'tsae' ),
			'update_item'                => __( 'Update Client' , 'tsae' ),
			'add_new_item'               => __( 'Add New Client' , 'tsae' ),
			'new_item_name'              => __( 'New Client Name' , 'tsae' ),
			'separate_items_with_commas' => __( 'Separate clients with commas' , 'tsae' ),
			'add_or_remove_items'        => __( 'Add or remove clients' , 'tsae' ),
			'choose_from_most_used'      => __( 'Choose from the most used clients' , 'tsae' ),
			'not_found'                  => __( 'No clients found.' , 'tsae' ),
			'menu_name'                  => __( 'Clients' , 'tsae' ),
		);

		$args = array(
			'hierarchical'          => true,
			'labels'                => $labels,
			'show_ui'               => true,
			'show_admin_column'     => false,
			'meta_box_cb'						=> false,
			'update_count_callback' => '_update_post_term_count',
			'query_var'             => true,
			'rewrite'               => array( 'slug' => 'clients' ),
		);

		register_taxonomy( 'project-client', 'project', $args );

		//ARCHITECTS TAXONOMY REGISTER
		$labels = array(
			'name'                       => _x( 'Architects', 'taxonomy general name' ),
			'singular_name'              => _x( 'Architect', 'taxonomy singular name' ),
			'search_items'               => __( 'Search Architects' , 'tsae' ),
			'popular_items'              => __( 'Popular Architects' , 'tsae' ),
			'all_items'                  => __( 'All Architects' , 'tsae' ),
			'parent_item'                => null,
			'parent_item_colon'          => null,
			'edit_item'                  => __( 'Edit Architect' , 'tsae' ),
			'update_item'                => __( 'Update Architect' , 'tsae' ),
			'add_new_item'               => __( 'Add New Architect' , 'tsae' ),
			'new_item_name'              => __( 'New Architect Name' , 'tsae' ),
			'separate_items_with_commas' => __( 'Separate architects with commas' , 'tsae' ),
			'add_or_remove_items'        => __( 'Add or remove architects' , 'tsae' ),
			'choose_from_most_used'      => __( 'Choose from the most used architects' , 'tsae' ),
			'not_found'                  => __( 'No architects found.' , 'tsae' ),
			'menu_name'                  => __( 'Architects' , 'tsae' ),
		);

		$args = array(
			'hierarchical'          => true,
			'labels'                => $labels,
			'show_ui'               => true,
			'show_admin_column'     => false,
			'meta_box_cb'						=> false,
			'update_count_callback' => '_update_post_term_count',
			'query_var'             => true,
			'rewrite'               => array( 'slug' => 'architects' ),
		);

		register_taxonomy( 'project-architect', 'project', $args );

		//PROGRAMS TAXONOMY REGISTER
		$labels = array(
			'name'                       => _x( 'Programs', 'taxonomy general name' ),
			'singular_name'              => _x( 'Program', 'taxonomy singular name' ),
			'search_items'               => __( 'Search Programs' , 'tsae' ),
			'popular_items'              => __( 'Popular Programs' , 'tsae' ),
			'all_items'                  => __( 'All Programs' , 'tsae' ),
			'parent_item'                => null,
			'parent_item_colon'          => null,
			'edit_item'                  => __( 'Edit Program', 'tsae' ),
			'update_item'                => __( 'Update Program' , 'tsae' ),
			'add_new_item'               => __( 'Add New Program' , 'tsae' ),
			'new_item_name'              => __( 'New Program Name' , 'tsae' ),
			'separate_items_with_commas' => __( 'Separate programs with commas' , 'tsae' ),
			'add_or_remove_items'        => __( 'Add or remove programs' , 'tsae' ),
			'choose_from_most_used'      => __( 'Choose from the most used programs' , 'tsae' ),
			'not_found'                  => __( 'No programs found.' , 'tsae' ),
			'menu_name'                  => __( 'Programs' , 'tsae' ),
		);

		$args = array(
			'hierarchical'          => true,
			'labels'                => $labels,
			'show_ui'               => true,
			'show_admin_column'     => false,
			'meta_box_cb'						=> false,
			'update_count_callback' => '_update_post_term_count',
			'query_var'             => true,
			'rewrite'               => array( 'slug' => 'programs' ),
		);

		register_taxonomy( 'project-program', 'project', $args );

		//CATEGORIES TAXONOMY REGISTER
		$labels = array(
			'name'                       => _x( 'Categories', 'taxonomy general name' ),
			'singular_name'              => _x( 'Category', 'taxonomy singular name' ),
			'search_items'               => __( 'Search Categories' , 'tsae' ),
			'popular_items'              => __( 'Popular Categories' , 'tsae' ),
			'all_items'                  => __( 'All Categories' , 'tsae' ),
			'parent_item'                => null,
			'parent_item_colon'          => null,
			'edit_item'                  => __( 'Edit Category' , 'tsae' ),
			'update_item'                => __( 'Update Category' , 'tsae' ),
			'add_new_item'               => __( 'Add New Category' , 'tsae' ),
			'new_item_name'              => __( 'New Category Name' , 'tsae' ),
			'separate_items_with_commas' => __( 'Separate categories with commas' , 'tsae' ),
			'add_or_remove_items'        => __( 'Add or remove categories' , 'tsae' ),
			'choose_from_most_used'      => __( 'Choose from the most used categories' , 'tsae' ),
			'not_found'                  => __( 'No categories found.' , 'tsae' ),
			'menu_name'                  => __( 'Categories' , 'tsae' ),
		);

		$args = array(
			'hierarchical'          => true,
			'labels'                => $labels,
			'show_ui'               => true,
			'show_admin_column'     => true,
			'update_count_callback' => '_update_post_term_count',
			'query_var'             => true,
			'rewrite'               => array( 'slug' => 'project-categories' ),
		);

		register_taxonomy( 'project-category', 'project', $args );

	}


}

function tsae() {

	global $tsae;

	if( !isset ($tsae) ) {

		$tsae = new tsae();

		$tsae->initialize();

	}
}

// initialize
tsae();

endif; // class_exists check

/* ======== INCLUDING SHORTCODES ========= */
require_once dirname( __FILE__ ) . '/shortcodes/architecture-shortcodes.php';

/* ================ SEND CONTACT FORM ============== */
add_action("wp_ajax_architecture_contact_form", "architecture_send_contact_form");
add_action("wp_ajax_nopriv_architecture_contact_form", "architecture_send_contact_form");

if ( ! function_exists( 'architecture_send_contact_form' ) ) {

	function architecture_send_contact_form () {

		global $architecture_theme_options;

		$recipients = array();
		if(isset($architecture_theme_options['contact-email'])) $recipients[] 	= 	$architecture_theme_options['contact-email'];
		else $recipients[] 	= 	"info@domain.com";
		$subject	 	= 	esc_html__( 'Contact Request', 'architecture' );

		$name 			= 	$_POST['name'];
		$email 			= 	$_POST['email'];
		$message 		= 	$_POST['message'];
		$body 			= 	"";

		if ( $name ) {

			$body .= esc_html__( 'Name', 'architecture' ) . ': ' . esc_html($name) . '<br />';

		}

		$body .= esc_html__( 'Email', 'architecture' ) . ': ' . esc_html($email) . '<br />';

		if ( $message ) {

			$body .= esc_html__( 'Message', 'architecture' ) . ': ' . esc_html($message) . '<br />';

		}


		$headers[] = "From: ".esc_html($name). "<".esc_html($email).">";

		$headers[] = "Content-Type: text/html; charset=UTF-8";

		wp_mail( $recipients, $subject, $message, $headers );

		echo "sent";
		exit;

	}

}

/* ================ REDUX INTEGRATION ============== */

if ( class_exists( 'ReduxFrameworkPlugin' )  ) {

		require_once( 'redux/architecture-config.php' );

}


function architecture_enqueue_scripts_redux($hook) {

	if( 'themes.php?page=_options' == $hook ) {
  	return;
  }

	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/css/font-awesome.min.css', array(), time(), 'all' );

}

add_action( 'admin_enqueue_scripts', 'architecture_enqueue_scripts_redux');

// redux extension loader script
if(!function_exists('architecture_redux_register_custom_extension_loader')) :


		function architecture_redux_register_custom_extension_loader($ReduxFramework) {

			// path to redux extensions
			$redux_extensions_path = 'redux/';

			// loading wbc_importer extension
			$extension_class_wbc_importer = 'ReduxFramework_extension_wbc_importer';
			if( !class_exists( $extension_class_wbc_importer ) ) {
				// In case you wanted override your override, hah.
				$class_file = $redux_extensions_path . '/wbc_importer/extension_wbc_importer.php';
				$class_file = apply_filters( 'redux/extension/'.$ReduxFramework->args['opt_name'].'/wbc_importer', $class_file );
				if( $class_file ) {
					require_once( $class_file );
					$extension = new $extension_class_wbc_importer( $ReduxFramework );
				}
			}

		}
		// Modify {$redux_opt_name} to match your opt_name
		add_action("redux/extensions/architecture_theme_options/before", 'architecture_redux_register_custom_extension_loader', 0);


endif;
?>
