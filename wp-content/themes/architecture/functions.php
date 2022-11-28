<?php

/* ================ MENU LOCATIONS ============== */
add_action( 'init', 'architecture_register_menus' );

if ( ! function_exists( 'architecture_register_menus' ) ) {

	function architecture_register_menus() {

	  register_nav_menus(

		array(
	      'main-menu' => esc_html__( 'Main Menu', "architecture" ),
	      'fly-menu' => esc_html__( 'Mobile/Flyout Menu', "architecture" )
	    )

	  );

	}

}

/* ================ CUSTOM WALKER TO ADD NUMBERING BEFORE MENU ITEMS IN THE HEADER VERSION 1 MAIN MENU ============== */
add_filter( 'walker_nav_menu_start_el', 'architecture_walker_nav_menu_start_el' , 10, 4 );

if ( ! function_exists( 'architecture_walker_nav_menu_start_el' ) ) {

	function architecture_walker_nav_menu_start_el($item_output, $item, $depth, $args){

		if ( isset( $args -> show_numbers ) && $args -> show_numbers == true ) {

			global $architecture_menu_item_number ;

			if( $architecture_menu_item_number < 10 ) {

				$architecture_counter_refined = "0".$architecture_menu_item_number;
			}
			else {

				$architecture_counter_refined= $architecture_menu_item_number;
			}

			$output = '<span>'.$architecture_counter_refined.'.</span>';

			$output .= $item_output;

			$architecture_menu_item_number++;

			return $output;

		}
		else {

			return $item_output;
		}

	}

}

/* ================ FILTER TO ADD SELECT CLASS TO CURRENT MENU ITEM ============== */
add_filter('nav_menu_css_class' , 'architecture_select_current' , 10 , 2);

if ( ! function_exists( 'architecture_select_current' ) ) {

	function architecture_select_current($classes, $item){

		 if( in_array('current-menu-item', $classes) ){

		         $classes[] = 'select ';
	     }

		 return $classes;
	}

}

/* ================ APPEND SOCIAL LINKS IN FLYOUT/MOBILE MENU ============== */
add_filter( 'wp_nav_menu_items', 'architecture_fly_menu_item', 10, 2 );

if ( ! function_exists( 'architecture_fly_menu_item' ) ) {

	function architecture_fly_menu_item ( $items, $args ) {

		global $architecture_theme_options;

	    if ( $args->theme_location == 'fly-menu' && (isset($architecture_theme_options['menu_show_follow_section']) && $architecture_theme_options['menu_show_follow_section'] == true) ) {

	        $items .= '<li class="cd-label">'.esc_html__('Follow us','architecture').'</li>

				<li class="social-icons">';

				if ( $architecture_theme_options['menu_facebook_url']!="" )
					 $items.='<a href="'.esc_url( $architecture_theme_options['menu_facebook_url'] ).'"><span class="icon-facebook-1"></span></a>';

				if ( $architecture_theme_options['menu_twitter_url']!="" )
					 $items.='<a href="'.esc_url( $architecture_theme_options['menu_twitter_url'] ).'"><span class="icon-twitter-1"></span></a>';

				if ( $architecture_theme_options['menu_google_url']!="" )
					 $items.='<a href="'.esc_url( $architecture_theme_options['menu_google_url'] ).'"><span class="icon-google"></span></a>';


	           $items.='</li>';

	    }

	    return $items;

	}

}

/* ================ TGMPA Integration ============== */
require_once( trailingslashit( get_template_directory() ). 'includes/tgma.php' );


/* ================ COMMENT REPLY SCRIPT  ============== */

if ( is_singular() ) wp_enqueue_script( "comment-reply" );

/* ================ THEME SUPPORT ============== */

add_theme_support( "title-tag" );
add_theme_support( 'automatic-feed-links' );
add_theme_support( 'custom-header' );
add_theme_support( "custom-background");
add_editor_style();

if ( ! isset( $content_width ) ) {
	$content_width = 1170;
}

/* ================ ADD FEATURED IMAGE SUPPORT ============== */

add_theme_support( 'post-thumbnails' );

add_image_size( 'architecture-related-project-size', 500, 415, true );
add_image_size( 'architecture-project-archive', 370, 305, true );
add_image_size( 'architecture-project-shortcode', 570, 470, true );
add_image_size( 'architecture-team-shortcode', 370, 370, true );
add_image_size( 'architecture-services-shortcode', 585, 436, true );

/* =============== BREADCRUMBS ===================== */

// Breadcrumbs
if ( ! function_exists( 'architecture_breadcrumbs' ) ) {

	function architecture_breadcrumbs() {

		global $architecture_theme_options;

	    // Settings
	    $separator          = '&#47;';
	    $breadcrums_id      = 'breadcrumbs';
	    $breadcrums_class   = 'breadcrumbs';
	    $home_title         = esc_html__("Home","architecture");
		if(isset($architecture_theme_options['blog-title'])) $blog_title = $architecture_theme_options['blog-title'];
		else $blog_title = esc_html__( "Blog", "architecture" );

		$prefix = "";

	    // If you have any custom post types with custom taxonomies, put the taxonomy name below (e.g. product_cat)
	    $custom_taxonomy    = 'product_cat';

	    // Get the query & post information
	    global $post,$wp_query;


		 // Do not display on the homepage
	    if ( !is_front_page() ) {

	        // Build the breadcrums
	        echo '<ul id="' . esc_attr( $breadcrums_id ) . '" class="' . esc_attr( $breadcrums_class ) . '">';

	        // Home page
	        echo '<li class="item-home"><a class="bread-link bread-home" href="' . esc_url( get_home_url() ) . '" title="' . esc_attr( $home_title ) . '">' . esc_html($home_title) . '</a>';
	        echo '<span class="separator separator-home"> ' . esc_html($separator) . ' </span></li>';

			if ( is_home() ) {
				echo '<li class="item-current item-archive"><strong class="bread-current bread-archive">' . esc_html($blog_title) . '</strong></li>';
			}

	        if ( is_archive() && !is_tax() && !is_category() && !is_tag() ) {

	            echo '<li class="item-current item-archive"><strong class="bread-current bread-archive">' . post_type_archive_title($prefix, false) . '</strong></li>';

	        } else if ( is_archive() && is_tax() && !is_category() && !is_tag() ) {

	            // If post is a custom post type
	            $post_type = get_post_type();

	            // If it is a custom post type display name and link
	            if($post_type != 'post') {

	                $post_type_object = get_post_type_object($post_type);
	                $post_type_archive = get_post_type_archive_link($post_type);

	                echo '<li class="item-cat item-custom-post-type-' . esc_attr( $post_type ) . '"><a class="bread-cat bread-custom-post-type-' . esc_attr( $post_type ) . '" href="' . esc_url( $post_type_archive ) . '" title="' . esc_attr( $post_type_object->labels->name ) . '">' . esc_html($post_type_object->labels->name) . '</a>';
	                echo '<span class="separator"> ' . esc_html($separator) . ' </span></li>';

	            }

	            $custom_tax_name = get_queried_object()->name;
	            echo '<li class="item-current item-archive"><strong class="bread-current bread-archive">' . esc_html($custom_tax_name) . '</strong></li>';

	        } else if ( is_single() ) {

	            // If post is a custom post type
	            $post_type = get_post_type();

	            // If it is a custom post type display name and link
	            if($post_type != 'post') {

	                $post_type_object = get_post_type_object($post_type);
	                $post_type_archive = get_post_type_archive_link($post_type);

	                echo '<li class="item-cat item-custom-post-type-' . esc_attr( $post_type ) . '"><a class="bread-cat bread-custom-post-type-' . esc_attr( $post_type ) . '" href="' . esc_url( $post_type_archive ) . '" title="' . esc_attr( $post_type_object->labels->name ) . '">' . esc_html($post_type_object->labels->name) . '</a>';
	                echo '<span class="separator"> ' . esc_html($separator) . ' </span></li>';

	            }

	            // Get post category info
	            $category = get_the_category();

	            if(!empty($category)) {
	                // Get last category post is in
									$categories_array_values = array_values($category);
	                $last_category = end($categories_array_values);

	                // Get parent any categories and create array
	                $get_cat_parents = rtrim(get_category_parents($last_category->term_id, true, ','),',');
	                $cat_parents = explode(',',$get_cat_parents);

	                // Loop through parent categories and store in variable $cat_display
	                $cat_display = '';
	                foreach($cat_parents as $parents) {

	                    $cat_display .= '<li class="item-cat">'.$parents;
	                    $cat_display .= '<span class="separator"> ' . esc_html($separator) . ' </span></li>';
	                }

	            }

	            // If it's a custom post type within a custom taxonomy
	            $taxonomy_exists = taxonomy_exists($custom_taxonomy);
	            if(empty($last_category) && !empty($custom_taxonomy) && $taxonomy_exists) {

	                $taxonomy_terms = get_the_terms( $post->ID, $custom_taxonomy );
	                $cat_id         = $taxonomy_terms[0]->term_id;
	                $cat_nicename   = $taxonomy_terms[0]->slug;
	                $cat_link       = get_term_link($taxonomy_terms[0]->term_id, $custom_taxonomy);
	                $cat_name       = $taxonomy_terms[0]->name;

	            }

	            // Check if the post is in a category
	            if(!empty($last_category)) {
	                echo $cat_display;
	                echo '<li class="item-current item-' . esc_attr( $post->ID ) . '"><strong class="bread-current bread-' . esc_attr( $post->ID ) . '" title="' . esc_attr( get_the_title() ) . '">' . get_the_title() . '</strong></li>';

	            // Else if post is in a custom taxonomy
	            } else if(!empty($cat_id)) {

	                echo '<li class="item-cat item-cat-' . esc_attr( $cat_id ) . ' item-cat-' . esc_attr( $cat_nicename ) . '"><a class="bread-cat bread-cat-' . esc_attr( $cat_id ) . ' bread-cat-' . esc_attr( $cat_nicename ) . '" href="' . esc_url( $cat_link ) . '" title="' . esc_attr( $cat_name ) . '">' . esc_html($cat_name) . '</a>';
	                echo '<span class="separator"> ' . $separator . ' </span></li>';
	                echo '<li class="item-current item-' . esc_attr( $post->ID ) . '"><strong class="bread-current bread-' . esc_attr( $post->ID ) . '" title="' . esc_attr( get_the_title() ) . '">' . get_the_title() . '</strong></li>';

	            } else {

	                echo '<li class="item-current item-' . esc_attr( $post->ID ) . '"><strong class="bread-current bread-' . esc_attr( $post->ID ) . '" title="' . esc_attr( get_the_title() ) . '">' . get_the_title() . '</strong></li>';

	            }

	        } else if ( is_category() ) {

	            // Category page
	            echo '<li class="item-current item-cat"><strong class="bread-current bread-cat">' . single_cat_title('', false) . '</strong></li>';

	        } else if ( is_page() ) {

	            // Standard page
	            if( $post->post_parent ){

	                // If child page, get parents
	                $anc = get_post_ancestors( $post->ID );

	                // Get parents in the right order
	                $anc = array_reverse($anc);

	                // Parent page loop
	                foreach ( $anc as $ancestor ) {
	                    $parents .= '<li class="item-parent item-parent-' . esc_attr( $ancestor  ). '"><a class="bread-parent bread-parent-' . esc_attr( $ancestor ) . '" href="' . esc_url( get_permalink($ancestor) ) . '" title="' . esc_attr( get_the_title($ancestor) ) . '">' . esc_html(get_the_title($ancestor)) . '</a>';
	                    $parents .= '<span class="separator separator-' . esc_attr( $ancestor ) . '"> ' . esc_html($separator) . ' </span></li>';
	                }

	                // Display parent pages
	                echo $parents;

	                // Current page
	                echo '<li class="item-current item-' . esc_attr( $post->ID ) . '"><strong title="' . esc_attr( get_the_title() ) . '"> ' . get_the_title() . '</strong></li>';

	            } else {

	                // Just display current page if not parents
	                echo '<li class="item-current item-' . esc_attr( $post->ID ) . '"><strong class="bread-current bread-' . esc_attr( $post->ID ) . '"> ' . get_the_title() . '</strong></li>';

	            }

	        } else if ( is_tag() ) {

	            // Tag page

	            // Get tag information
	            $term_id        = get_query_var('tag_id');
	            $taxonomy       = 'post_tag';
	            $args           = 'include=' . $term_id;
	            $terms          = get_terms( $taxonomy, $args );
	            $get_term_id    = $terms[0]->term_id;
	            $get_term_slug  = $terms[0]->slug;
	            $get_term_name  = $terms[0]->name;

	            // Display the tag name
	            echo '<li class="item-current item-tag-' . esc_attr( $get_term_id ) . ' item-tag-' . esc_attr($get_term_slug) . '"><strong class="bread-current bread-tag-' . esc_attr($get_term_id) . ' bread-tag-' . esc_attr($get_term_slug) . '">' . esc_html($get_term_name) . '</strong></li>';

	        } elseif ( is_day() ) {

	            // Day archive

	            // Year link
	            echo '<li class="item-year item-year-' . esc_attr( get_the_time('Y') ) . '"><a class="bread-year bread-year-' . esc_attr( get_the_time('Y') ) . '" href="' . esc_url( get_year_link( get_the_time('Y') ) ) . '" title="' . esc_attr( get_the_time('Y') ) . '">' . get_the_time('Y') .  esc_html__('Archives','architecture').'</a>';
	            echo '<span class="separator separator-' . get_the_time('Y') . '"> ' . esc_html($separator) . ' </span></li>';

	            // Month link
	            echo '<li class="item-month item-month-' . esc_attr( get_the_time('m') ) . '"><a class="bread-month bread-month-' . esc_attr( get_the_time('m') ) . '" href="' . esc_url( get_month_link( get_the_time('Y'), get_the_time('m') ) ) . '" title="' . esc_attr( get_the_time('M') ) . '">' . get_the_time('M') .  esc_html__('Archives','architecture').'</a>';
	            echo '<span class="separator separator-' . esc_attr( get_the_time('m') ) . '"> ' . esc_html($separator) . ' </span></li>';

	            // Day display
	            echo '<li class="item-current item-' . esc_attr( get_the_time('j') ) . '"><strong class="bread-current bread-' . esc_attr( get_the_time('j') ) . '"> ' . get_the_time('jS') . ' ' . get_the_time('M') .   esc_html__('Archives','architecture').'</strong></li>';

	        } else if ( is_month() ) {

	            // Month Archive

	            // Year link
	            echo '<li class="item-year item-year-' . esc_attr( get_the_time('Y') ) . '"><a class="bread-year bread-year-' . esc_attr( get_the_time('Y') ) . '" href="' . esc_url( get_year_link( get_the_time('Y') ) ) . '" title="' . esc_attr( get_the_time('Y') ) . '">' . get_the_time('Y') .  esc_html__('Archives','architecture').'</a>';
	            echo '<span class="separator separator-' . esc_attr( get_the_time('Y') ) . '"> ' . esc_html($separator) . ' </span></li>';

	            // Month display
	            echo '<li class="item-month item-month-' . esc_attr( get_the_time('m') ) . '"><strong class="bread-month bread-month-' . esc_attr( get_the_time('m') ) . '" title="' . esc_attr( get_the_time('M') ) . '">' . get_the_time('M') .  esc_html__('Archives','architecture').'</strong></li>';

	        } else if ( is_year() ) {

	            // Display year archive
	            echo '<li class="item-current item-current-' . esc_attr( get_the_time('Y') ) . '"><strong class="bread-current bread-current-' . esc_attr( get_the_time('Y') ) . '" title="' . esc_attr( get_the_time('Y') ) . '">' . get_the_time('Y') .  esc_html__('Archives','architecture').'</strong></li>';

	        } else if ( is_author() ) {

	            // Auhor archive

	            // Get the author information
	            global $author;
	            $userdata = get_userdata( $author );

	            // Display author name
	            echo '<li class="item-current item-current-' . esc_attr( $userdata->user_nicename ) . '"><strong class="bread-current bread-current-' . esc_attr( $userdata->user_nicename ) . '" title="' . esc_attr( $userdata->display_name ) . '">' . esc_html__('Author: ','architecture') . $userdata->display_name . '</strong></li>';

	        } else if ( get_query_var('paged') ) {

	            // Paginated archives
	            echo '<li class="item-current item-current-' . esc_attr( get_query_var('paged') ) . '"><strong class="bread-current bread-current-' . esc_attr( get_query_var('paged') ) . '" title="Page ' . esc_attr( get_query_var('paged') ) . '">'.esc_html__('Page',"architecture") . ' ' . get_query_var('paged') . '</strong></li>';

	        } else if ( is_search() ) {

	            // Search results page
	            echo '<li class="item-current item-current-' . esc_attr( get_search_query() ) . '"><strong class="bread-current bread-current-' . esc_attr( get_search_query() ) . '" title="'.esc_html__('Search results for: ','architecture') . esc_attr( get_search_query() ) . '">'.esc_html__('Search results for: ','architecture') . get_search_query() . '</strong></li>';

	        } elseif ( is_404() ) {

	            // 404 page
	            echo '<li>' . esc_html__('Error 404','architecture') . '</li>';
	        }

	        echo '</ul>';

	    }

	}

}

/* ======== MODIFY THE CLASSES OF PAGINATION LINKS FOR BLOG PAGE ========= */
add_filter('next_posts_link_attributes', 'architecture_posts_link_attributes_next');
add_filter('previous_posts_link_attributes', 'architecture_posts_link_attributes_prev');

if ( ! function_exists( 'architecture_posts_link_attributes_prev' ) ) {

	function architecture_posts_link_attributes_prev() {
	    return 'class="more-post newsest"';
	}

}

if ( ! function_exists( 'architecture_posts_link_attributes_next' ) ) {

	function architecture_posts_link_attributes_next() {
	    return 'class="more-post older"';
	}

}

/* ======== AJAX PAGINATION FOR WORK TEMPLATE ========= */
add_action( 'wp_ajax_nopriv_ajax_pagination_work', 'architecture_ajax_pagination_work' );
add_action( 'wp_ajax_ajax_pagination_work', 'architecture_ajax_pagination_work' );

if ( ! function_exists( 'architecture_ajax_pagination_work' ) ) {

	function architecture_ajax_pagination_work() {

		global $architecture_theme_options;
		if(!isset($architecture_theme_options['projects-per-page'])) $architecture_theme_options['projects-per-page']=12;

		$page_id	=	$_POST['page_id'] + 1;

		$off_set	=	$architecture_theme_options['projects-per-page'] * $page_id;

		$args = array(
		'posts_per_page'   => $architecture_theme_options['projects-per-page'],
		'offset'           => $off_set,
		'orderby'          => 'date',
		'order'            => 'DESC',
		'post_type'        => 'project',
		'post_status'      => 'publish',
		'suppress_filters' => true
		);
		$projects_array = get_posts( $args );
		if ( count ( $projects_array ) > 0 ){
			foreach ( $projects_array as $project_item ) {
				$project_terms_array = wp_get_post_terms( $project_item->ID, "project-category" );
	            $project_terms_class_string ="";
				$project_terms_list_string ="";
				$project_terms_counter = 0;
				//print_r($project_terms_array);
				foreach ( $project_terms_array as $project_term_item ) {
					if ( $project_terms_counter != count ( $project_terms_array ) -1 ){
						$project_terms_class_string.=$project_term_item->slug." ";
						$project_terms_list_string.=$project_term_item->name.", ";
					}
					else {
						$project_terms_class_string.=$project_term_item->slug;
						$project_terms_list_string.=$project_term_item->name;
					}
					$project_terms_counter++;
				}

			?>

		   <div class="cbp-item <?php echo esc_attr($project_terms_class_string); ?>">
				<a href="<?php echo esc_url( get_permalink($project_item->ID) ); ?>">
				<div class="cbp-caption">
					<div class="cbp-caption-defaultWrap">
						<div class="work">
							<figure class="effect-sadie">
								<div class="image"><?php echo esc_url( get_the_post_thumbnail($project_item->ID,"project-archive") ); ?></div>
								<figcaption>
									<h2><img src="<?php echo get_template_directory_uri(); ?>/images/plus.png" alt=""></h2>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
				</a>

				<div class="cbp-l-grid-projects-title"><?php echo esc_html($project_item->post_title); ?></div>
				<div class="cbp-l-grid-projects-desc"><?php echo esc_html($project_terms_list_string); ?></div>
	        </div>

		<?php } }
	    die();
	}

}

/* ======== POSTS PER PAGE FOR PROJECTS ========= */
if ( ! function_exists( 'architecture_set_posts_per_page_for_projects_archive' ) ) {

	function architecture_set_posts_per_page_for_projects_archive( $query ) {

	  global $architecture_theme_options;
	  if(!isset($architecture_theme_options['projects-per-page'])) $architecture_theme_options['projects-per-page']=12;

	  if ( !is_admin() && $query->is_main_query() && ( is_post_type_archive( 'project' ) || is_tax("project-client") || is_tax("project-category") || is_tax("project-program") || is_tax("project-architect") ) ) {
	    $query->set( 'posts_per_page', $architecture_theme_options['projects-per-page'] );
	  }

	}

}

add_action( 'pre_get_posts', 'architecture_set_posts_per_page_for_projects_archive' );

/* ======== TITLE FILTER ========= */
if ( ! function_exists( 'architecture_filter_wp_title' ) ) {

	function architecture_filter_wp_title( $title, $sep ) {

	    global $paged, $page;

	    if ( is_feed() )
	        return $title;

	    // Add the site name.
	    $title .= get_bloginfo( 'name' );

	    // Add the site description for the home/front page.
	    $site_description = get_bloginfo( 'description', 'display' );
	    if ( $site_description && ( is_home() || is_front_page() ) )
	        $title = "$title $sep $site_description";

	    // Add a page number if necessary.
	    if ( $paged >= 2 || $page >= 2 )
	        $title = "$title $sep " . sprintf( __( 'Page %s', 'architecture' ), max( $paged, $page ) );

	    return $title;

	}

}

add_filter( 'wp_title', 'architecture_filter_wp_title', 10, 2 );

/* ======== SEARCH QUERY ========= */

add_action( 'pre_get_posts', 'architecture_search_query' );

if ( ! function_exists( 'architecture_search_query' ) ) {

	function architecture_search_query ( $query ) {

		if ( !is_admin() && $query->is_main_query() ) {

			if ($query->is_search) {

				$query->set('post_type', 'project');

			}

		}

	}

}

/* ======== ACF IMPORTER ========= */
require_once( trailingslashit( get_template_directory() ). 'includes/acf-import.php' );

/* ======== DEMO IMPORTER HELPER========= */
require_once( trailingslashit( get_template_directory() ). 'includes/demo-import-helper.php' );

/* ======== Disabling dev mode of redux========= */
if ( ! function_exists( 'architecture_redux_disable_dev_mode_plugin' ) ) {

    function architecture_redux_disable_dev_mode_plugin( $redux ) {

				if ( $redux->args['opt_name'] != 'redux_demo' ) {

            $redux->args['dev_mode'] = false;
            $redux->args['forced_dev_mode_off'] = false;

        }

    }
}

add_action( 'redux/construct', 'architecture_redux_disable_dev_mode_plugin' );

/* ======  SYSTEM Status SUBMENU ====== */
add_action('admin_menu', 'architecture_themesqr_system_status_page');

if ( ! function_exists( 'architecture_themesqr_system_status_page' ) ) {

	function architecture_themesqr_system_status_page() {
	    add_theme_page(
	        'themes.php',
	        'System Status',
	        'manage_options',
	        'system-status',
	        'architecture_themesqr_ss_page_callback' );
	}

}

/* ======== Formating of memory size ========= */
if ( ! function_exists( 'architecture_php_ini_to_num' ) ) {

	function architecture_php_ini_to_num( $size ) {
		$l   = substr( $size, -1 );
		$ret = substr( $size, 0, -1 );
		switch ( strtoupper( $l ) ) {
			case 'P':
				$ret *= 1024;
			case 'T':
				$ret *= 1024;
			case 'G':
				$ret *= 1024;
			case 'M':
				$ret *= 1024;
			case 'K':
				$ret *= 1024;
		}
		return $ret;
	}

}

/* ======== System Staus Section in dashbaord ========= */
if ( ! function_exists( 'architecture_themesqr_ss_page_callback' ) ) {

	function architecture_themesqr_ss_page_callback() {
	?>

		<div class="wrap about-wrap architecture-wrap">
			<h1><?php echo esc_html__( "System Status ", "architecture" );"!"; ?></h1>

			<div class="architecture-system-status">
				<table class="widefat" cellspacing="0">
					<thead>
						<tr>
							<th colspan="3" data-export-label="WordPress Environment"><?php esc_html_e( 'WordPress Environment and Server', 'architecture' ); ?></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td data-export-label="Home URL"><?php esc_html_e( 'Home URL', 'architecture' ); ?>:</td>
							<td class="help"><?php echo '<a href="#" class="help_tip" data-tip="' . esc_attr__( 'The URL of your site\'s homepage.', 'architecture'  ) . '">[?]</a>'; ?></td>
							<td><?php echo home_url(); ?></td>
						</tr>
						<tr>
							<td data-export-label="WP Version"><?php esc_html_e( 'WP Version', 'architecture' ); ?>:</td>
							<td class="help"><?php echo '<a href="#" class="help_tip" data-tip="' . esc_attr__( 'The version of WordPress installed on your site.', 'architecture'  ) . '">[?]</a>'; ?></td>
							<td><?php bloginfo('version'); ?></td>
						</tr>
						<tr>
							<td data-export-label="WP Memory Limit"><?php esc_html_e( 'WP Memory Limit', 'architecture' ); ?>:</td>
							<td class="help"><?php echo '<a href="#" class="help_tip" data-tip="' . esc_attr__( 'The maximum amount of memory (RAM) that your site can use at one time.', 'architecture'  ) . '">[?]</a>'; ?></td>
							<td><?php
								$memory = architecture_php_ini_to_num( WP_MEMORY_LIMIT );
								if ( $memory < 128000000 ) {
									echo '<mark style="color: #a00;background: none;">' . sprintf( __( '%s - We recommend setting memory to at least <strong>128MB</strong>. <br /> To learn how, see: <a href="%s" target="_blank">Increasing memory allocated to PHP.</a>', 'architecture' ), size_format( $memory ), 'http://codex.wordpress.org/Editing_wp-config.php#Increasing_memory_allocated_to_PHP' ) . '</mark>';
								} else {
									echo '<mark style="color: #7ad03a;background: none;">' . size_format( $memory ) . '</mark>';
									if ( $memory < 256000000 ) {
										echo '<br /><mark style="color: #a00;background: none;">' . esc_html__( 'Your current memory limit is sufficient, but if you need to import  demo content, the required memory limit is <strong>256MB.</strong>', 'architecture' ) . '</mark>';
									}
								}
							?></td>
						</tr>

						<tr>
							<td data-export-label="Language"><?php esc_html_e( 'Language', 'architecture' ); ?>:</td>
							<td class="help"><?php echo '<a href="#" class="help_tip" data-tip="' . esc_attr__( 'The current language used by WordPress. Default = English', 'architecture'  ) . '">[?]</a>'; ?></td>
							<td><?php echo get_locale() ?></td>
						</tr>

					<?php if ( function_exists( 'ini_get' ) ) : ?>
						<tr>
							<td data-export-label="PHP Post Max Size"><?php _e( 'PHP Post Max Size', 'architecture' ); ?>:</td>
							<td class="help"><?php echo '<a href="#" class="help_tip" data-tip="' . esc_attr__( 'The largest file size that can be contained in one post.', 'architecture'  ) . '">[?]</a>'; ?></td>
							<td><?php
								$post_max_size	=	size_format( architecture_php_ini_to_num( ini_get('post_max_size') ) );
								if ( $post_max_size < 32 ){
									echo '<mark style="color: #a00;background: none;">'. esc_html($post_max_size) . esc_html__( ' - Recommended Value: 32MB.', 'architecture' ) . '</mark>';
								}else{
									echo '<mark style="color: #7ad03a;background: none;">'. esc_html($post_max_size) .'</mark>';
								} ?>
							</td>
						</tr>
						<tr>
							<td data-export-label="PHP Time Limit"><?php _e( 'PHP Time Limit', 'architecture' ); ?>:</td>
							<td class="help"><?php echo '<a href="#" class="help_tip" data-tip="' . esc_attr__( 'The amount of time (in seconds) that your site will spend on a single operation before timing out (to avoid server lockups)', 'architecture'  ) . '">[?]</a>'; ?></td>
							<td><?php
								$time_limit = ini_get('max_execution_time');

								if ( $time_limit < 180 && $time_limit != 0 ) {
									echo '<mark style="color: #a00;background: none;">' . sprintf( __( '%s - We recommend setting max execution time to at least 180. <br /> To import  demo content, <strong>300</strong> seconds of max execution time is required.<br />See: <a href="%s" target="_blank">Increasing max execution to PHP</a>', 'architecture' ), $time_limit, 'http://codex.wordpress.org/Common_WordPress_Errors#Maximum_execution_time_exceeded' ) . '</mark>';
								} else {
									echo '<mark style="color: #7ad03a;background: none;">' . $time_limit . '</mark>';
									if ( $time_limit < 300 && $time_limit != 0 ) {
										echo '<br /><mark style="color: #a00;background: none;">' . esc_html__( 'Current time limit is sufficient, but if you need import  demo content, the required time is <strong>300</strong>.', 'architecture' ) . '</mark>';
									}
								}
							?></td>
						</tr>
						<tr>
							<td data-export-label="PHP Max Input Vars"><?php esc_html_e( 'PHP Max Input Vars', 'architecture' ); ?>:</td>
							<td class="help"><?php echo '<a href="#" class="help_tip" data-tip="' . esc_attr__( 'The maximum number of variables your server can use for a single function to avoid overloads.', 'architecture'  ) . '">[?]</a>'; ?></td>
							<?php
							$registered_navs = get_nav_menu_locations();
							$menu_items_count = array( "0" => "0" );
							foreach( $registered_navs as $handle => $registered_nav ) {
								$menu = wp_get_nav_menu_object( $registered_nav );
								if( $menu ) {
									$menu_items_count[] = $menu->count;
								}
							}

							$max_items = max( $menu_items_count );
							$required_input_vars = ini_get('max_input_vars');
							?>
							<td><?php
								$max_input_vars = ini_get('max_input_vars');
								$required_input_vars = $required_input_vars + ( 500 + 1000 );
								// 1000 = theme options

								if ( $max_input_vars < $required_input_vars ) {
									echo '<mark style="color: #a00;background: none;">' . sprintf( __( '%s - Recommended Value: %s.<br />Max input vars limitation will truncate POST data such as menus. See: <a href="%s" target="_blank">Increasing max input vars limit.</a>', 'architecture' ), $max_input_vars, '<strong>' . ( $required_input_vars + ( 500 + 1000 ) ) . '</strong>', 'http://sevenspark.com/docs/ubermenu-3/faqs/menu-item-limit' ) . '</mark>';
								} else {
									echo '<mark style="color: #7ad03a;background: none;">' . esc_html($max_input_vars) . '</mark>';
								}
							?></td>
						</tr>
						<tr>
							<td data-export-label="Max Upload Size"><?php esc_html_e( 'Max Upload Size', 'architecture' ); ?>:</td>
							<td class="help"><?php echo '<a href="#" class="help_tip" data-tip="' . esc_attr__( 'The largest file size that can be uploaded to your WordPress installation.', 'architecture'  ) . '">[?]</a>'; ?></td>
							<td><?php
								$max_upload_size	=	size_format( wp_max_upload_size() );
								if ( $post_max_size < 32 ){
									echo '<mark style="color: #a00;background: none;">'. esc_html($max_upload_size) . esc_html__( ' - Recommended Value: 32MB.', 'architecture' ) . '</mark>';
								}else{
									echo '<mark style="color: #7ad03a;background: none;">'. esc_html($max_upload_size) .'</mark>';
								}?>
							</td>
						</tr>
					<?php endif; ?>
					</tbody>
				</table>
			</div>
		</div>
	<?php
	}
}

/* ======== Translation domain loading ========= */

add_action( 'after_setup_theme', 'architecture_theme_setup' );

function architecture_theme_setup(){

    load_theme_textdomain( 'architecture', get_template_directory() . '/languages' );

}

/* ======== ACF google api key ========= */
if ( ! function_exists( 'architecture_tsa_acf_google_map_api' ) ) {

	function architecture_tsa_acf_google_map_api( $api ){

		global $architecture_theme_options;

		if(isset($architecture_theme_options['maps-api-key'])&& !empty($architecture_theme_options['maps-api-key']) ){
			$api['key'] = $architecture_theme_options['maps-api-key'];
		}

		return $api;

	}

}

add_filter('acf/fields/google_map/api', 'architecture_tsa_acf_google_map_api' );

/* ======== Redux remove link under tools ========= */
/** remove redux menu under the tools **/
add_action( 'admin_menu', 'architecture_remove_redux_menu',12 );
function architecture_remove_redux_menu() {
    remove_submenu_page('tools.php','redux-about');
}


/* ======== Enqueue styles and scripts for the theme ========= */
function architecture_enqueue_styles(){
	wp_enqueue_style( 'architecture-main', get_template_directory_uri()."/style.css" );
	global $architecture_theme_options;

	if(isset($architecture_theme_options['theme-skin'])){
		$skin = $architecture_theme_options['theme-skin'];
		if($architecture_theme_options['theme-skin'] != 'none')
		{
				wp_enqueue_style( 'architecture-theme-skin', get_template_directory_uri()."/css/theme-colors/".$skin.".css" );
		}
	}
}

add_action( 'wp_enqueue_scripts', 'architecture_enqueue_styles' );

function architecture_enqueue_scripts(){

	global $architecture_theme_options;

	wp_enqueue_script( 'architecture-smooth-scroll', get_template_directory_uri() . '/js/compressed.js', array('jquery'), '1.0.0', true );

	if(isset($architecture_theme_options['maps-api-key'])&&!empty($architecture_theme_options['maps-api-key']))
	{
		wp_enqueue_script( 'google-maps', 'https://maps.googleapis.com/maps/api/js?key='.$architecture_theme_options['maps-api-key'], array('jquery'), '1.0.0', true );
	}
	else{
		wp_enqueue_script( 'google-maps', 'https://maps.googleapis.com/maps/api/js', array('jquery'), '1.0.0', true );
	}
}

add_action( 'wp_enqueue_scripts', 'architecture_enqueue_scripts' );


/* ======== Remove redux notifications ========= */

function architecture_removeDemoModeLink() { // Be sure to rename this function to something more unique
    if ( class_exists('ReduxFrameworkPlugin') ) {
        remove_filter( 'plugin_row_meta', array( ReduxFrameworkPlugin::get_instance(), 'plugin_metalinks'), null, 2 );
    }
    if ( class_exists('ReduxFrameworkPlugin') ) {
        remove_action('admin_notices', array( ReduxFrameworkPlugin::get_instance(), 'admin_notices' ) );
    }
}
add_action('init', 'architecture_removeDemoModeLink');

function architecture_inline_scripts(){
	?>

    <script type="text/javascript">
		'use strict';
		var ajax_work_requests=0;
		jQuery(".cbp-l-loadMore-defaultText").click(function(e) {

			jQuery.ajax({
				method:"POST",
				url: "<?php echo admin_url("admin-ajax.php");?>",
				data: {action:"ajax_pagination_work",page_id:ajax_work_requests},
				success:function(data){
					jQuery("#js-grid-lightbox-gallery").cubeportfolio('appendItems', data);
					ajax_work_requests++;
					if ( ajax_work_requests == total_projects_pages - 1 ) {
						jQuery(".cbp-l-loadMore-loadingText").hide();
						jQuery(".cbp-l-loadMore-defaultText").hide();
						jQuery(".cbp-l-loadMore-noMoreLoading").show();
					}
					else{
						jQuery(".cbp-l-loadMore-loadingText").hide();
						jQuery(".cbp-l-loadMore-defaultText").show();
					}
				},
				beforeSend:function(xhr){
					jQuery(".cbp-l-loadMore-defaultText").hide();
					jQuery(".cbp-l-loadMore-loadingText").show();
				}
			});



        });


		function architecture_contact_form() {
			'use strict';
			jQuery.ajax({
				method:"POST",
				url: "<?php echo admin_url("admin-ajax.php");?>",
				data: {action:"architecture_contact_form",name:jQuery("#architecture_name").val(), email:jQuery("#architecture_email").val(), message:jQuery("#architecture_message").val()},
				success:function(data){
					if( data == "sent" ) {
						jQuery("#architecture-contact-form")[0].reset();
						jQuery(".contact-success").show();
					}
				}
			});
			return false;
		}

		jQuery(document).ready(function() {

			/*
			 *  Button helper. Disable animations, hide close button, change title type and content
			 */

			jQuery('.fancybox-buttons').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',

				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,

				helpers : {
					title : {
						type : 'inside'
					},
					buttons	: {}
				},

				afterLoad : function() {
					this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
				}
			});

			jQuery(document).ready(function( jQuery ) {
				jQuery('.counter').counterUp({
					delay: 10,
					time: 1000
				});
			});



		});

		jQuery(document).ready(function(){
			jQuery(".open-search-popup").click(function(){
				jQuery(".search-popup-box").slideDown(300);
			});
			jQuery(".close-search-popup").click(function(){
				jQuery(".search-popup-box").slideUp(300);
			});
			jQuery(".search-icon-btn").click(function(){
				jQuery("#architecture-search-form").submit();
			});

		});

	</script>

	<?php
		global $architecture_theme_options;

    if( isset( $architecture_theme_options['tracking-script'] ) ){
    ?>
        <script type="text/javascript">
        <?php echo $architecture_theme_options['tracking-script']; ?>
        </script>
    <?php
    }

    if( isset( $architecture_theme_options['general-script'] ) ){
    ?>
        <script type="text/javascript">
        <?php echo $architecture_theme_options['general-script']; ?>
        </script>
    <?php
    }

}
add_action( 'wp_footer', 'architecture_inline_scripts', 21);

/**
* Loading google fonts
*/
function architecture_fonts_url() {
$fonts_url = '';

/* Translators: If there are characters in your language that are not
* supported by Lora, translate this to 'off'. Do not translate
* into your own language.
*/
$montserrat		= _x( 'on', 'Montserrat font: on or off', 'architecture' );
$roboto_slab	= _x( 'on', 'Roboto Slab font: on or off', 'architecture' );
$open_sans		= _x( 'on', 'Open Sans font: on or off', 'architecture' );
$lato			= _x( 'on', 'Lato font: on or off', 'architecture' );

if ( 'off' !== $montserrat || 'off' !== $roboto_slab || 'off' !== $open_sans || 'off' !== $lato ) {
	$font_families = array();

	if ( 'off' !== $montserrat ) {
		$font_families[] = 'Montserrat:400,700';
	}

	if ( 'off' !== $roboto_slab ) {
		$font_families[] = 'Roboto Slab:400,300,700';
	}

	if ( 'off' !== $open_sans ) {
		$font_families[] = 'Open Sans:300,400,600,700,800';
	}

	if ( 'off' !== $lato ) {
		$font_families[] = 'Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic';
	}

	$query_args = array(
	'family' => urlencode( implode( '|', $font_families ) ),
	'subset' => urlencode( 'latin,latin-ext' ),
	);

	$fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css' );
}

return esc_url_raw( $fonts_url );
}

function architecture_scripts_styles() {
	wp_enqueue_style( 'architecture-fonts', architecture_fonts_url(), array(), null );
}
add_action( 'wp_enqueue_scripts', 'architecture_scripts_styles' );


if ( ! function_exists( 'architecture_remove_anonymous_object_filter' ) ){
    /**
     * Remove an anonymous object filter.
     *
     * @param  string $tag    Hook name.
     * @param  string $class  Class name
     * @param  string $method Method name
     * @return void
     */
    function architecture_remove_anonymous_object_filter( $tag, $class, $method ) {
        $filters = $GLOBALS['wp_filter'][ $tag ];
        if ( empty ( $filters ) ) {
          return;
        }
        foreach ( $filters as $priority => $filter ) {
            foreach ( $filter as $identifier => $function ) {
                if ( is_array( $function)
                    and is_a( $function['function'][0], $class )
                    and $method === $function['function'][1] ) {

                    remove_filter(
                        $tag,
                        array ( $function['function'][0], $method ),
                        $priority
                    );
                }
            }
        }
    }
}
function architecture_remove_redux_framework_admin_notices_action() {
    architecture_remove_anonymous_object_filter(
        'admin_notices',
        'ReduxFramework',
        '_admin_notices'
    );
}
add_action('admin_init', 'architecture_remove_redux_framework_admin_notices_action');

function architecture_content_float_fix( $content )
{
    return $content . "<div class='clearfix'></div>";
}
add_filter( 'the_content', 'architecture_content_float_fix' );

/* ================ Footer Widgets ============== */
if ( ! function_exists( 'architecture_register_sidebars' ) ) {

	function architecture_register_sidebars() {

		global $architecture_theme_options;

		if (isset($architecture_theme_options['footer-widgets']) &&  $architecture_theme_options['footer-widgets']== 1 ){

			$args = array(
				'name'          => esc_html__( 'Footer Widget Area 1', 'architecture' ),
				'id'            => 'architecture-footer-widget-1',
				'before_widget' => '',
				'after_widget'  => '',
				'before_title'  => '<h3>',
				'after_title'   => '</h3>' );

			register_sidebar( $args );

			$args = array(
				'name'          => esc_html__( 'Footer Widget Area 2', 'architecture' ),
				'id'            => 'architecture-footer-widget-2',
				'before_widget' => '',
				'after_widget'  => '',
				'before_title'  => '<h3>',
				'after_title'   => '</h3>' );

			register_sidebar( $args );

			$args = array(
				'name'          => esc_html__( 'Footer Widget Area 3', 'architecture' ),
				'id'            => 'architecture-footer-widget-3',
				'before_widget' => '',
				'after_widget'  => '',
				'before_title'  => '<h3>',
				'after_title'   => '</h3>' );

			register_sidebar( $args );
		}

	}

}


add_action( 'widgets_init', 'architecture_register_sidebars' );

/* ================ GENERATE CSS CODE FROM THEME OPTIONS ============== */

function architecture_default_inline_styles(){

	echo '<style id="architecture-inline-css" type="text/css">';

	echo '.cd-primary-nav a,.header .navigation .language a,.header ul li a{font-family:Montserrat,Arial,Helvetica,sans-serif;font-weight:400;font-style:normal;opacity:1;visibility:visible;-webkit-transition:opacity .24s ease-in-out;-moz-transition:opacity .24s ease-in-out;transition:opacity .24s ease-in-out},.wf-loading .cd-primary-nav a,.wf-loading .header .navigation .language a,.wf-loading .header ul li a{opacity:0},.ie.wf-loading .cd-primary-nav a,.ie.wf-loading .header .navigation .language a,.ie.wf-loading .header ul li a{visibility:hidden}body span p{font-family:"Roboto Slab",Arial,Helvetica,sans-serif;font-weight:400;font-style:normal;opacity:1;visibility:visible;-webkit-transition:opacity .24s ease-in-out;-moz-transition:opacity .24s ease-in-out;transition:opacity .24s ease-in-out},.wf-loading body span p,.wf-loading h6{opacity:0},.ie.wf-loading body span p,.ie.wf-loading h6{visibility:hidden}</style><style id="architecture-inline-css" type="text/css">#header-1{display:block}#header-2{display:none}.cd-header{top:auto}#header-1 .header-two .header .logo img{height:39px;width:auto}#header-1 .header-one .header .logo img{height:75px;width:auto}#header-2 .header-two-main .header .logo img{height:66px;width:auto}a{cursor:pointer}.header,.header-two,.header-two .header,.header-two-main .header{background-color:#000}.header .navigation .search-btn a,.header-one .header .navigation ul li a,.header-two .header .navigation ul li a{color:#fff}.header-one .header .navigation ul li a:hover,.header-one .header .navigation ul li.select a,.header-two .header .navigation ul li a:hover,.header-two .header .navigation ul li.select a{color:#e7a920}.header-one .header .navigation ul li a:before,.header-two .header .navigation ul li a:before{background:#e7a920}.header-two-main .header ul li a{color:#fff}.header-two-main .header ul li a:hover,.header-two-main .header ul li.select a{color:#e7a920;background:#e7a920}.cd-primary-nav-trigger .cd-menu-icon,.cd-primary-nav-trigger .cd-menu-icon.is-clicked::after,.cd-primary-nav-trigger .cd-menu-icon.is-clicked::before,.cd-primary-nav-trigger .cd-menu-icon::before,.cd-primary-nav-trigger .cd-menu-icon:after,.mobile-menu .cd-primary-nav-trigger .cd-menu-icon,.mobile-menu .cd-primary-nav-trigger .cd-menu-icon::after,.mobile-menu .cd-primary-nav-trigger .cd-menu-icon::before{background-color:#000!important}.cd-primary-nav-trigger .cd-menu-icon.is-clicked{background-color:rgba(255,255,255,0)!important}.cd-primary-nav,.news .news-sec .news-main span{background:#e7a920}.cd-primary-nav .cd-label,.cd-primary-nav .social-icons a,.cd-primary-nav a{color:#fff}.cd-primary-nav .social-icons a:hover,.cd-primary-nav .social-icons span:hover,.cd-primary-nav a:hover{color:#000}#header-1 .header ul li span{color:#868686}.news .news-sec .news-main{border-bottom-color:#e7a920}.new-older .more-post:hover,.news-detail .comments .comment .reply a,.process span{color:#e7a920}.footer .footer-bottom p,.footer .footer-bottom span,.footer .footer-detail .footer-sec,.footer .footer-detail .footer-sec .social-icons a{color:#fff}.footer .footer-bottom a,.navigation ul.menu li.menu-item-has-children ul.sub-menu li:hover a,body a:hover{color:#e7a920}.navigation ul.menu li.menu-item-has-children ul.sub-menu li:hover{background-color:#fff}.navigation ul.menu li.menu-item-has-children ul.sub-menu li{background-color:#e7a920}.search-field-box{border-bottom:2px solid #e7a920}body{background:#fff}body,body a,p{color:#000}.work:hover span.number{color:#e7a920!important}.kind-words span,.post-pagination a,.projects .work:hover .text h6{color:#e7a920}#client-words .owl-page.active,#client-words .owl-page:hover,.read-more-btn,.z-tabs.silver>ul>li>a:hover{background:#e7a920}.cbp-l-filters-button .cbp-filter-item.cbp-filter-item-active,.cbp-l-filters-button .cbp-filter-item:hover{border:1px solid #e7a920;background:#e7a920}.sub-banner .text-detail ul{border-bottom:solid 4px #e7a920!important}.news .news-sec .detail a:hover{border-bottom:solid 1px #e7a920;color:#e7a920}.sticky .sticky-post{background-color:#e7a920}';

	echo '</style>';

}

add_action('wp_head', 'architecture_default_inline_styles', 21);

function architecture_theme_options_inline_styles(){

	global $architecture_theme_options;

	if( isset($architecture_theme_options['header-layout']) ) {

	echo '<style id="architecture-inline-to-css" type="text/css">';

	/* ================ GENERATE CSS CODE FROM THEME OPTIONS >> HEADER SECTION ============== */

	if( isset($architecture_theme_options['header-layout']) && $architecture_theme_options['header-layout'] ==	'header1' ) {

		echo '
		#header-1{display:block;}
		#header-2{display:none;}
		';
	}

	else if( isset($architecture_theme_options['header-layout']) && $architecture_theme_options['header-layout'] == 'header2' ) {

		echo '
		#header-1{display:none;}
		#header-2{display:block;}
		';
	}

	echo	'.cd-header{top:auto}';
	echo	'#header-1 .header-two .header .logo img{height:39px; width:auto}';
	echo	'#header-1 .header-one .header .logo img{height:75px; width:auto}';
	echo	'#header-2 .header-two-main .header .logo img{height:66px; width:auto}';
	echo	'a{cursor:pointer}';

	if( isset($architecture_theme_options['header-background-color']) ){
		echo	'.header-two, .header-two .header,.header-two-main .header{background-color:'.$architecture_theme_options['header-background-color'].'}';
		echo 	'.header{background-color:'.$architecture_theme_options['header-background-color'].'}';
	}

	if( isset($architecture_theme_options['header-font-color']) ){
		echo	'.header-one .header .navigation ul li a, .header-two .header .navigation ul li a{color:'.$architecture_theme_options['header-font-color'].'}';
		echo 	'.header .navigation .search-btn a{color:'.$architecture_theme_options['header-font-color'].'}';
	}

	if( isset($architecture_theme_options['menu-hover-color']) ){
		echo	'.header-one .header .navigation ul li.select a, .header-two .header .navigation ul li.select a{color:'.$architecture_theme_options['menu-hover-color'].'}';
		echo	'.header-one .header .navigation ul li a:hover, .header-two .header .navigation ul li a:hover{color:'.$architecture_theme_options['menu-hover-color'].'}';
	}

	if( isset($architecture_theme_options['menu-hover-lb-color']) ){
		echo	'.header-one .header .navigation ul li a:before, .header-two .header .navigation ul li a:before{background:'.$architecture_theme_options['menu-hover-lb-color'].'}';
	}

	if( isset($architecture_theme_options['header-font-color']) ){
	echo	'.header-two-main .header ul li a{color:'.$architecture_theme_options['header-font-color'].'}';
	echo '.navigation ul.menu li.menu-item-has-children ul.sub-menu li.current-menu-item{background: '.$architecture_theme_options['header-font-color'].';}';
	}

	if( isset($architecture_theme_options['menu-hover-color']) && isset($architecture_theme_options['menu-hover-lb-color']) ){
	echo	'.header-two-main .header ul li.select a{color:'.$architecture_theme_options['menu-hover-color'].';background:'.$architecture_theme_options['menu-hover-lb-color'].'}';
	echo	'.header-two-main .header ul li a:hover{color:'.$architecture_theme_options['menu-hover-color'].';background:'.$architecture_theme_options['menu-hover-lb-color'].'}';
	}

	if( isset($architecture_theme_options['header-flyout-icon-color']) ){
	echo	'.cd-primary-nav-trigger .cd-menu-icon, .cd-primary-nav-trigger .cd-menu-icon::before, .cd-primary-nav-trigger .cd-menu-icon:after,.cd-primary-nav-trigger .cd-menu-icon.is-clicked::before, .cd-primary-nav-trigger .cd-menu-icon.is-clicked::after,.mobile-menu .cd-primary-nav-trigger .cd-menu-icon,.mobile-menu .cd-primary-nav-trigger .cd-menu-icon::before, .mobile-menu .cd-primary-nav-trigger .cd-menu-icon::after{background-color:'.$architecture_theme_options['header-flyout-icon-color'].' !important;}';
	}

	echo	'.cd-primary-nav-trigger .cd-menu-icon.is-clicked{background-color: rgba(255,255,255,0) !important;}';

	if( isset( $architecture_theme_options['flyout-font-color'] ) ){
	echo 	'.cd-primary-nav a,.cd-primary-nav .cd-label, .cd-primary-nav .social-icons a{color:'.$architecture_theme_options['flyout-font-color'].'}';
	echo 	'.cd-primary-nav a:hover, .cd-primary-nav .social-icons a:hover, .cd-primary-nav .social-icons span:hover{color:'.$architecture_theme_options['flyout-hover-color'].'}';
	}


	//Theme color is used for flyout menu background color
	if( isset( $architecture_theme_options['theme-color'] ) ){
	echo	'.cd-primary-nav{background:'.$architecture_theme_options['theme-color'].'}';

	echo	'.news .news-sec .news-main span{background:'.$architecture_theme_options['theme-color'].'}';
	echo	'.news .news-sec .news-main{border-bottom-color:'.$architecture_theme_options['theme-color'].'}';
	echo 	'.new-older .more-post:hover{color:'.$architecture_theme_options['theme-color'].'}';
	echo	'.news-detail .comments .comment .reply a{color:'.$architecture_theme_options['theme-color'].'}';
	echo 	'.process span{color:'.$architecture_theme_options['theme-color'].'}';

	echo '.footer .footer-bottom a{color:'.$architecture_theme_options['theme-color'].'}';

	echo '.navigation ul.menu li.menu-item-has-children ul.sub-menu li:hover{background-color:'.$architecture_theme_options['header-font-color'].'}';
		echo '.navigation ul.menu li.menu-item-has-children ul.sub-menu li:hover a{color:'.$architecture_theme_options['theme-color'].'}';
	echo '.navigation ul.menu li.menu-item-has-children ul.sub-menu li{background-color:'.$architecture_theme_options['theme-color'].';}';
	echo '.search-field-box{border-bottom:2px solid '.$architecture_theme_options['theme-color'].'}';

	echo 'body a:hover{color:'.$architecture_theme_options['theme-color'].'}';
	echo '.work:hover span.number{color:'.$architecture_theme_options['theme-color'].'!important}';
	echo '.projects .work:hover .text h6{color:'.$architecture_theme_options['theme-color'].'}';
	echo '.kind-words span{color:'.$architecture_theme_options['theme-color'].'}';
	echo '#client-words .owl-page:hover{background:'.$architecture_theme_options['theme-color'].'}';
	echo '#client-words .owl-page.active{background:'.$architecture_theme_options['theme-color'].'}';
	echo '.z-tabs.silver > ul > li> a:hover{background:'.$architecture_theme_options['theme-color'].'}';
	echo '.read-more-btn{background:'.$architecture_theme_options['theme-color'].'}';
	echo '.cbp-l-filters-button .cbp-filter-item:hover{border: solid 1px '.$architecture_theme_options['theme-color'].';background:'.$architecture_theme_options['theme-color'].'}';
	echo '.cbp-l-filters-button .cbp-filter-item.cbp-filter-item-active{border: solid 1px '.$architecture_theme_options['theme-color'].';background:'.$architecture_theme_options['theme-color'].'}';
	echo '.sub-banner .text-detail ul{border-bottom: solid 4px '.$architecture_theme_options['theme-color'].'!important}';
	echo '.news .news-sec .detail a:hover{border-bottom: solid 1px '.$architecture_theme_options['theme-color'].';color:'.$architecture_theme_options['theme-color'].'}';
	echo '.sticky .sticky-post{
		background-color:'.$architecture_theme_options['theme-color'].';
	}';
	echo '.post-pagination a{color:'.$architecture_theme_options['theme-color'].'}';
	}

	if( isset( $architecture_theme_options['menu-number-color'] ) ){
	echo	'#header-1 .header ul li span{color:'.$architecture_theme_options['menu-number-color'].'}';
	}

	if( isset( $architecture_theme_options['menu-number-show'] ) ){
	if( $architecture_theme_options['menu-number-show']	==	false) {

		echo	'#header-1 .header ul li span{display:none}';

	}
	}

	if( isset( $architecture_theme_options['footer-font-color'] ) ){
	echo '.footer .footer-detail .footer-sec, .footer .footer-detail .footer-sec .social-icons a, .footer .footer-bottom p, .footer .footer-bottom span{color:'.$architecture_theme_options['footer-font-color'].'}';
	}

	if( isset( $architecture_theme_options['body-background-color'] ) ){
	echo 'body{background:'.$architecture_theme_options['body-background-color'].'}';
	}

	if( isset( $architecture_theme_options['body-font-color'] ) ){
	echo 'body,p{color:'.$architecture_theme_options['body-font-color'].'}';
	}

	if( isset( $architecture_theme_options['body-link-color'] ) ){
	echo 'body a{color:'.$architecture_theme_options['body-link-color'].'}';
	}

	if( isset( $architecture_theme_options['desktop-css'] ) ){
		echo '@media screen and (min-width: 768px) {';
		echo $architecture_theme_options['desktop-css'];
		echo '}';
	}

	if( isset( $architecture_theme_options['mobile-css'] ) ){
		echo '@media screen and (max-width: 767px) {';
		echo $architecture_theme_options['mobile-css'];
		echo '}';
	}

	if( isset( $architecture_theme_options['menu-number-color'] ) ){
	$skin = $architecture_theme_options['theme-skin'];
	}else{
	$skin = "";
	}

	//Borwn skin stylesheet
	if($skin == 'brown')
	{
		echo '.header-one .header .navigation ul li.select a, .header-two .header .navigation ul li.select a{color:#825339;}
	.header-one .header .navigation ul li a:before, .header-two .header .navigation ul li a:before {background:#825339;}
	.header-one .header .navigation ul li a:hover, .header-two .header .navigation ul li a:hover{color:#825339;}
	.our-studio .icons i{ color:#825339;}
	.main-heading h4{ color: #825339;}
	.work:hover span.number{ color:#825339 !important;}
	.projects .work:hover .text h6{ color:#825339 ;}
	.kind-words span{color:#825339;}

	.read-more-btn{background:#825339;}

	#client-words .owl-page.active{ background: #825339;}
	#client-words .owl-page:hover{background: #825339;}
	.z-tabs.silver > ul > li> a:hover{ background:#825339;}

	.footer .footer-bottom a{ color:#825339;}
	.cbp-l-filters-button .cbp-filter-item.cbp-filter-item-active{background-color:#825339; border-color:#825339 ;}
	.cbp-l-filters-button .cbp-filter-item-active {background: #825339; border-color: #825339;}
	.cbp-l-filters-button .cbp-filter-item:hover { background: #825339; border: solid 1px #825339;}
	.sub-banner .text-detail ul{border-bottom:solid 4px #825339;}
	.sub-banner .text-detail ul li a:hover{ color:#825339;}
	.news .news-sec .news-main span{background: #825339;}
	.news .news-sec .news-main{ border-bottom:solid 4px #825339;}
	.news .news-sec .detail a:hover{ color:#825339; border-bottom:solid 1px #825339;}
	.new-older .more-post:hover{color:#825339;}
	.news-detail .next-posts a:hover{ color:#825339;}
	.news-detail .comments .comment-sec .detail a{ color: #825339;}
	.header-two-main .header ul li a:hover{background: #825339; }
	.header-two-main .header ul li.select a{background: #825339;}
	.process span{color:#825339;}
	.footer-light .footer-bottom a{ color:#825339;}

	.cd-primary-nav { background: #825339;}
	[class^="icon-"], [class*=" icon-"]{color:#825339 !important; }
	h4 span{color:#825339 !important; }
	';
	}

	//Dark Blue skin stylesheet
	if($skin == 'dark-blue')
	{
		echo '.header-one .header .navigation ul li.select a, .header-two .header .navigation ul li.select a{color:#3a539b;}
		.header-one .header .navigation ul li a:before, .header-two .header .navigation ul li a:before {background:#3a539b;}
		.header-one .header .navigation ul li a:hover, .header-two .header .navigation ul li a:hover{color:#3a539b;}
		.our-studio .icons i{ color:#3a539b;}
		.main-heading h4{ color: #3a539b;}
		.work:hover span.number{ color:#3a539b !important;}
		.projects .work:hover .text h6{ color:#3a539b ;}
		.kind-words span{color:#3a539b;}

		.read-more-btn{background:#3a539b;}

		#client-words .owl-page.active{ background: #3a539b;}
		#client-words .owl-page:hover{background: #3a539b;}
		.z-tabs.silver > ul > li> a:hover{ background:#3a539b;}

		.footer .footer-bottom a{ color:#3a539b;}
		.cbp-l-filters-button .cbp-filter-item.cbp-filter-item-active{background-color:#3a539b; border-color:#3a539b ;}
		.cbp-l-filters-button .cbp-filter-item-active {background: #3a539b; border-color: #3a539b;}
		.cbp-l-filters-button .cbp-filter-item:hover { background: #3a539b; border: solid 1px #3a539b;}
		.sub-banner .text-detail ul{border-bottom:solid 4px #3a539b;}
		.sub-banner .text-detail ul li a:hover{ color:#3a539b;}
		.news .news-sec .news-main span{background: #3a539b;}
		.news .news-sec .news-main{ border-bottom:solid 4px #3a539b;}
		.news .news-sec .detail a:hover{ color:#3a539b; border-bottom:solid 1px #3a539b;}
		.new-older .more-post:hover{color:#3a539b;}
		.news-detail .next-posts a:hover{ color:#3a539b;}
		.news-detail .comments .comment-sec .detail a{ color: #3a539b;}
		.header-two-main .header ul li a:hover{background: #3a539b; }
		.header-two-main .header ul li.select a{background: #3a539b;}
		.process span{color:#3a539b;}
		.footer-light .footer-bottom a{ color:#3a539b;}

		.cd-primary-nav { background: #3a539b;}
		[class^="icon-"], [class*=" icon-"]{color:#3a539b !important; }
		h4 span{color:#3a539b !important; }
	';
	}

	//Green skin stylesheet
	if($skin == 'green')
	{
		echo '.header-one .header .navigation ul li.select a, .header-two .header .navigation ul li.select a{color:#9cba36;}
		.header-one .header .navigation ul li a:before, .header-two .header .navigation ul li a:before {background:#9cba36;}
		.header-one .header .navigation ul li a:hover, .header-two .header .navigation ul li a:hover{color:#9cba36;}
		.our-studio .icons i{ color:#9cba36;}
		.main-heading h4{ color: #9cba36;}
		.work:hover span.number{ color:#9cba36 !important;}
		.projects .work:hover .text h6{ color:#9cba36 ;}
		.kind-words span{color:#9cba36;}

		.read-more-btn{background:#9cba36;}

		#client-words .owl-page.active{ background: #9cba36;}
		#client-words .owl-page:hover{background: #9cba36;}
		.z-tabs.silver > ul > li> a:hover{ background:#9cba36;}

		.footer .footer-bottom a{ color:#9cba36;}
		.cbp-l-filters-button .cbp-filter-item.cbp-filter-item-active{background-color:#9cba36; border-color:#9cba36 ;}
		.cbp-l-filters-button .cbp-filter-item-active {background: #9cba36; border-color: #9cba36;}
		.cbp-l-filters-button .cbp-filter-item:hover { background: #9cba36; border: solid 1px #9cba36;}
		.sub-banner .text-detail ul{border-bottom:solid 4px #9cba36;}
		.sub-banner .text-detail ul li a:hover{ color:#9cba36;}
		.news .news-sec .news-main span{background: #9cba36;}
		.news .news-sec .news-main{ border-bottom:solid 4px #9cba36;}
		.news .news-sec .detail a:hover{ color:#9cba36; border-bottom:solid 1px #9cba36;}
		.new-older .more-post:hover{color:#9cba36;}
		.news-detail .next-posts a:hover{ color:#9cba36;}
		.news-detail .comments .comment-sec .detail a{ color: #9cba36;}
		.header-two-main .header ul li a:hover{background: #9cba36; }
		.header-two-main .header ul li.select a{background: #9cba36;}
		.process span{color:#9cba36;}
		.footer-light .footer-bottom a{ color:#9cba36;}

		.cd-primary-nav { background: #9cba36;}
		[class^="icon-"], [class*=" icon-"]{color:#9cba36 !important; }
		h4 span{color:#9cba36 !important; }
	';
	}

	//Green skin stylesheet
	if($skin == 'green')
	{
	echo '.header-one .header .navigation ul li.select a, .header-two .header .navigation ul li.select a{color:#9cba36;}
	.header-one .header .navigation ul li a:before, .header-two .header .navigation ul li a:before {background:#9cba36;}
	.header-one .header .navigation ul li a:hover, .header-two .header .navigation ul li a:hover{color:#9cba36;}
	.our-studio .icons i{ color:#9cba36;}
	.main-heading h4{ color: #9cba36;}
	.work:hover span.number{ color:#9cba36 !important;}
	.projects .work:hover .text h6{ color:#9cba36 ;}
	.kind-words span{color:#9cba36;}

	.read-more-btn{background:#9cba36;}

	#client-words .owl-page.active{ background: #9cba36;}
	#client-words .owl-page:hover{background: #9cba36;}
	.z-tabs.silver > ul > li> a:hover{ background:#9cba36;}

	.footer .footer-bottom a{ color:#9cba36;}
	.cbp-l-filters-button .cbp-filter-item.cbp-filter-item-active{background-color:#9cba36; border-color:#9cba36 ;}
	.cbp-l-filters-button .cbp-filter-item-active {background: #9cba36; border-color: #9cba36;}
	.cbp-l-filters-button .cbp-filter-item:hover { background: #9cba36; border: solid 1px #9cba36;}
	.sub-banner .text-detail ul{border-bottom:solid 4px #9cba36;}
	.sub-banner .text-detail ul li a:hover{ color:#9cba36;}
	.news .news-sec .news-main span{background: #9cba36;}
	.news .news-sec .news-main{ border-bottom:solid 4px #9cba36;}
	.news .news-sec .detail a:hover{ color:#9cba36; border-bottom:solid 1px #9cba36;}
	.new-older .more-post:hover{color:#9cba36;}
	.news-detail .next-posts a:hover{ color:#9cba36;}
	.news-detail .comments .comment-sec .detail a{ color: #9cba36;}
	.header-two-main .header ul li a:hover{background: #9cba36; }
	.header-two-main .header ul li.select a{background: #9cba36;}
	.process span{color:#9cba36;}
	.footer-light .footer-bottom a{ color:#9cba36;}

	.cd-primary-nav { background: #9cba36;}
	[class^="icon-"], [class*=" icon-"]{color:#9cba36 !important; }
	h4 span{color:#9cba36 !important; }
	';
	}

	//light-blue skin stylesheet
	if($skin == 'light-blue')
	{
		echo '.header-one .header .navigation ul li.select a, .header-two .header .navigation ul li.select a{color:#2b96cc;}
	.header-one .header .navigation ul li a:before, .header-two .header .navigation ul li a:before {background:#2b96cc;}
	.header-one .header .navigation ul li a:hover, .header-two .header .navigation ul li a:hover{color:#2b96cc;}
	.our-studio .icons i{ color:#2b96cc;}
	.main-heading h4{ color: #2b96cc;}
	.work:hover span.number{ color:#2b96cc !important;}
	.projects .work:hover .text h6{ color:#2b96cc ;}
	.kind-words span{color:#2b96cc;}

	.read-more-btn{background:#2b96cc;}

	#client-words .owl-page.active{ background: #2b96cc;}
	#client-words .owl-page:hover{background: #2b96cc;}
	.z-tabs.silver > ul > li> a:hover{ background:#2b96cc;}

	.footer .footer-bottom a{ color:#2b96cc;}
	.cbp-l-filters-button .cbp-filter-item.cbp-filter-item-active{background-color:#2b96cc; border-color:#2b96cc ;}
	.cbp-l-filters-button .cbp-filter-item-active {background: #2b96cc; border-color: #2b96cc;}
	.cbp-l-filters-button .cbp-filter-item:hover { background: #2b96cc; border: solid 1px #2b96cc;}
	.sub-banner .text-detail ul{border-bottom:solid 4px #2b96cc;}
	.sub-banner .text-detail ul li a:hover{ color:#2b96cc;}
	.news .news-sec .news-main span{background: #2b96cc;}
	.news .news-sec .news-main{ border-bottom:solid 4px #2b96cc;}
	.news .news-sec .detail a:hover{ color:#2b96cc; border-bottom:solid 1px #2b96cc;}
	.new-older .more-post:hover{color:#2b96cc;}
	.news-detail .next-posts a:hover{ color:#2b96cc;}
	.news-detail .comments .comment-sec .detail a{ color: #2b96cc;}
	.header-two-main .header ul li a:hover{background: #2b96cc; }
	.header-two-main .header ul li.select a{background: #2b96cc;}
	.process span{color:#2b96cc;}
	.footer-light .footer-bottom a{ color:#2b96cc;}

	.cd-primary-nav { background: #2b96cc;}
	[class^="icon-"], [class*=" icon-"]{color:#2b96cc !important; }
	h4 span{color:#2b96cc !important; }
	';
	}

	//light-green skin stylesheet
	if($skin == 'light-green')
	{
		echo '.header-one .header .navigation ul li.select a, .header-two .header .navigation ul li.select a{color:#1abc9c;}
		.header-one .header .navigation ul li a:before, .header-two .header .navigation ul li a:before {background:#1abc9c;}
		.header-one .header .navigation ul li a:hover, .header-two .header .navigation ul li a:hover{color:#1abc9c;}
		.our-studio .icons i{ color:#1abc9c;}
		.main-heading h4{ color: #1abc9c;}
		.work:hover span.number{ color:#1abc9c !important;}
		.projects .work:hover .text h6{ color:#1abc9c ;}
		.kind-words span{color:#1abc9c;}

		.read-more-btn{background:#1abc9c;}

		#client-words .owl-page.active{ background: #1abc9c;}
		#client-words .owl-page:hover{background: #1abc9c;}
		.z-tabs.silver > ul > li> a:hover{ background:#1abc9c;}

		.footer .footer-bottom a{ color:#1abc9c;}
		.cbp-l-filters-button .cbp-filter-item.cbp-filter-item-active{background-color:#1abc9c; border-color:#1abc9c ;}
		.cbp-l-filters-button .cbp-filter-item-active {background: #1abc9c; border-color: #1abc9c;}
		.cbp-l-filters-button .cbp-filter-item:hover { background: #1abc9c; border: solid 1px #1abc9c;}
		.sub-banner .text-detail ul{border-bottom:solid 4px #1abc9c;}
		.sub-banner .text-detail ul li a:hover{ color:#1abc9c;}
		.news .news-sec .news-main span{background: #1abc9c;}
		.news .news-sec .news-main{ border-bottom:solid 4px #1abc9c;}
		.news .news-sec .detail a:hover{ color:#1abc9c; border-bottom:solid 1px #1abc9c;}
		.new-older .more-post:hover{color:#1abc9c;}
		.news-detail .next-posts a:hover{ color:#1abc9c;}
		.news-detail .comments .comment-sec .detail a{ color: #1abc9c;}
		.header-two-main .header ul li a:hover{background: #1abc9c; }
		.header-two-main .header ul li.select a{background: #1abc9c;}
		.process span{color:#1abc9c;}
		.footer-light .footer-bottom a{ color:#1abc9c;}

		.cd-primary-nav { background: #1abc9c;}
		[class^="icon-"], [class*=" icon-"]{color:#1abc9c !important; }
		h4 span{color:#1abc9c !important; }
	';
	}

	//orange skin stylesheet
	if($skin == 'orange')
	{
		echo '.header-one .header .navigation ul li.select a, .header-two .header .navigation ul li.select a{color:#ff9c00;}
	.header-one .header .navigation ul li a:before, .header-two .header .navigation ul li a:before {background:#ff9c00;}
	.header-one .header .navigation ul li a:hover, .header-two .header .navigation ul li a:hover{color:#ff9c00;}
	.our-studio .icons i{ color:#ff9c00;}
	.main-heading h4{ color: #ff9c00;}
	.work:hover span.number{ color:#ff9c00 !important;}
	.projects .work:hover .text h6{ color:#ff9c00 ;}
	.kind-words span{color:#ff9c00;}

	.read-more-btn{background:#ff9c00;}

	#client-words .owl-page.active{ background: #ff9c00;}
	#client-words .owl-page:hover{background: #ff9c00;}
	.z-tabs.silver > ul > li> a:hover{ background:#ff9c00;}

	.footer .footer-bottom a{ color:#ff9c00;}
	.cbp-l-filters-button .cbp-filter-item.cbp-filter-item-active{background-color:#ff9c00; border-color:#ff9c00 ;}
	.cbp-l-filters-button .cbp-filter-item-active {background: #ff9c00; border-color: #ff9c00;}
	.cbp-l-filters-button .cbp-filter-item:hover { background: #ff9c00; border: solid 1px #ff9c00;}
	.sub-banner .text-detail ul{border-bottom:solid 4px #ff9c00;}
	.sub-banner .text-detail ul li a:hover{ color:#ff9c00;}
	.news .news-sec .news-main span{background: #ff9c00;}
	.news .news-sec .news-main{ border-bottom:solid 4px #ff9c00;}
	.news .news-sec .detail a:hover{ color:#ff9c00; border-bottom:solid 1px #ff9c00;}
	.new-older .more-post:hover{color:#ff9c00;}
	.news-detail .next-posts a:hover{ color:#ff9c00;}
	.news-detail .comments .comment-sec .detail a{ color: #ff9c00;}
	.header-two-main .header ul li a:hover{background: #ff9c00; }
	.header-two-main .header ul li.select a{background: #ff9c00;}
	.process span{color:#ff9c00;}
	.footer-light .footer-bottom a{ color:#ff9c00;}

	.cd-primary-nav { background: #ff9c00;}
	[class^="icon-"], [class*=" icon-"]{color:#ff9c00 !important; }
	h4 span{color:#ff9c00 !important; }
	';
	}

	//pink skin stylesheet
	if($skin == 'pink')
	{
		echo '.header-one .header .navigation ul li.select a, .header-two .header .navigation ul li.select a{color:#e9266f;}
	.header-one .header .navigation ul li a:before, .header-two .header .navigation ul li a:before {background:#e9266f;}
	.header-one .header .navigation ul li a:hover, .header-two .header .navigation ul li a:hover{color:#e9266f;}
	.our-studio .icons i{ color:#e9266f;}
	.main-heading h4{ color: #e9266f;}
	.work:hover span.number{ color:#e9266f !important;}
	.projects .work:hover .text h6{ color:#e9266f ;}
	.kind-words span{color:#e9266f;}

	.read-more-btn{background:#e9266f;}

	#client-words .owl-page.active{ background: #e9266f;}
	#client-words .owl-page:hover{background: #e9266f;}
	.z-tabs.silver > ul > li> a:hover{ background:#e9266f;}

	.footer .footer-bottom a{ color:#e9266f;}
	.cbp-l-filters-button .cbp-filter-item.cbp-filter-item-active{background-color:#e9266f; border-color:#e9266f ;}
	.cbp-l-filters-button .cbp-filter-item-active {background: #e9266f; border-color: #e9266f;}
	.cbp-l-filters-button .cbp-filter-item:hover { background: #e9266f; border: solid 1px #e9266f;}
	.sub-banner .text-detail ul{border-bottom:solid 4px #e9266f;}
	.sub-banner .text-detail ul li a:hover{ color:#e9266f;}
	.news .news-sec .news-main span{background: #e9266f;}
	.news .news-sec .news-main{ border-bottom:solid 4px #e9266f;}
	.news .news-sec .detail a:hover{ color:#e9266f; border-bottom:solid 1px #e9266f;}
	.new-older .more-post:hover{color:#e9266f;}
	.news-detail .next-posts a:hover{ color:#e9266f;}
	.news-detail .comments .comment-sec .detail a{ color: #e9266f;}
	.header-two-main .header ul li a:hover{background: #e9266f; }
	.header-two-main .header ul li.select a{background: #e9266f;}
	.process span{color:#e9266f;}
	.footer-light .footer-bottom a{ color:#e9266f;}

	.cd-primary-nav { background: #e9266f;}
	[class^="icon-"], [class*=" icon-"]{color:#e9266f !important; }
	h4 span{color:#e9266f !important; }
	';
	}

	//purple skin stylesheet
	if($skin == 'purple')
	{
		echo '.header-one .header .navigation ul li.select a, .header-two .header .navigation ul li.select a{color:#9b59b6;}
	.header-one .header .navigation ul li a:before, .header-two .header .navigation ul li a:before {background:#9b59b6;}
	.header-one .header .navigation ul li a:hover, .header-two .header .navigation ul li a:hover{color:#9b59b6;}
	.our-studio .icons i{ color:#9b59b6;}
	.main-heading h4{ color: #9b59b6;}
	.work:hover span.number{ color:#9b59b6 !important;}
	.projects .work:hover .text h6{ color:#9b59b6 ;}
	.kind-words span{color:#9b59b6;}

	.read-more-btn{background:#9b59b6;}

	#client-words .owl-page.active{ background: #9b59b6;}
	#client-words .owl-page:hover{background: #9b59b6;}
	.z-tabs.silver > ul > li> a:hover{ background:#9b59b6;}

	.footer .footer-bottom a{ color:#9b59b6;}
	.cbp-l-filters-button .cbp-filter-item.cbp-filter-item-active{background-color:#9b59b6; border-color:#9b59b6 ;}
	.cbp-l-filters-button .cbp-filter-item-active {background: #9b59b6; border-color: #9b59b6;}
	.cbp-l-filters-button .cbp-filter-item:hover { background: #9b59b6; border: solid 1px #9b59b6;}
	.sub-banner .text-detail ul{border-bottom:solid 4px #9b59b6;}
	.sub-banner .text-detail ul li a:hover{ color:#9b59b6;}
	.news .news-sec .news-main span{background: #9b59b6;}
	.news .news-sec .news-main{ border-bottom:solid 4px #9b59b6;}
	.news .news-sec .detail a:hover{ color:#9b59b6; border-bottom:solid 1px #9b59b6;}
	.new-older .more-post:hover{color:#9b59b6;}
	.news-detail .next-posts a:hover{ color:#9b59b6;}
	.news-detail .comments .comment-sec .detail a{ color: #9b59b6;}
	.header-two-main .header ul li a:hover{background: #9b59b6; }
	.header-two-main .header ul li.select a{background: #9b59b6;}
	.process span{color:#9b59b6;}
	.footer-light .footer-bottom a{ color:#9b59b6;}

	.cd-primary-nav { background: #9b59b6;}
	[class^="icon-"], [class*=" icon-"]{color:#9b59b6 !important; }
	h4 span{color:#9b59b6 !important; }
	';
	}

	//red skin stylesheet
	if($skin == 'red')
	{
		echo '.header-one .header .navigation ul li.select a, .header-two .header .navigation ul li.select a{color:#f15b5a;}
	.header-one .header .navigation ul li a:before, .header-two .header .navigation ul li a:before {background:#f15b5a;}
	.header-one .header .navigation ul li a:hover, .header-two .header .navigation ul li a:hover{color:#f15b5a;}
	.our-studio .icons i{ color:#f15b5a;}
	.main-heading h4{ color: #f15b5a;}
	.work:hover span.number{ color:#f15b5a !important;}
	.projects .work:hover .text h6{ color:#f15b5a ;}
	.kind-words span{color:#f15b5a;}

	.read-more-btn{background:#f15b5a;}

	#client-words .owl-page.active{ background: #f15b5a;}
	#client-words .owl-page:hover{background: #f15b5a;}
	.z-tabs.silver > ul > li> a:hover{ background:#f15b5a;}

	.footer .footer-bottom a{ color:#f15b5a;}
	.cbp-l-filters-button .cbp-filter-item.cbp-filter-item-active{background-color:#f15b5a; border-color:#f15b5a ;}
	.cbp-l-filters-button .cbp-filter-item-active {background: #f15b5a; border-color: #f15b5a;}
	.cbp-l-filters-button .cbp-filter-item:hover { background: #f15b5a; border: solid 1px #f15b5a;}
	.sub-banner .text-detail ul{border-bottom:solid 4px #f15b5a;}
	.sub-banner .text-detail ul li a:hover{ color:#f15b5a;}
	.news .news-sec .news-main span{background: #f15b5a;}
	.news .news-sec .news-main{ border-bottom:solid 4px #f15b5a;}
	.news .news-sec .detail a:hover{ color:#f15b5a; border-bottom:solid 1px #f15b5a;}
	.new-older .more-post:hover{color:#f15b5a;}
	.news-detail .next-posts a:hover{ color:#f15b5a;}
	.news-detail .comments .comment-sec .detail a{ color: #f15b5a;}
	.header-two-main .header ul li a:hover{background: #f15b5a; }
	.header-two-main .header ul li.select a{background: #f15b5a;}
	.process span{color:#f15b5a;}
	.footer-light .footer-bottom a{ color:#f15b5a;}

	.cd-primary-nav { background: #f15b5a;}
	[class^="icon-"], [class*=" icon-"]{color:#f15b5a !important; }
	h4 span{color:#f15b5a !important; }
	';
	}

	//yellow skin stylesheet
	if($skin == 'yellow')
	{
		echo '.header-one .header .navigation ul li.select a, .header-two .header .navigation ul li.select a{color:#e7a920;}
	.header-one .header .navigation ul li a:before, .header-two .header .navigation ul li a:before {background:#e7a920;}
	.header-one .header .navigation ul li a:hover, .header-two .header .navigation ul li a:hover{color:#e7a920;}
	.our-studio .icons i{ color:#e7a920;}
	.main-heading h4{ color: #e7a920;}
	.work:hover span.number{ color:#e7a920 !important;}
	.projects .work:hover .text h6{ color:#e7a920 ;}
	.kind-words span{color:#e7a920;}

	.read-more-btn{background:#e7a920;}

	#client-words .owl-page.active{ background: #e7a920;}
	#client-words .owl-page:hover{background: #e7a920;}
	.z-tabs.silver > ul > li> a:hover{ background:#e7a920;}

	.footer .footer-bottom a{ color:#e7a920;}
	.cbp-l-filters-button .cbp-filter-item.cbp-filter-item-active{background-color:#e7a920; border-color:#e7a920 ;}
	.cbp-l-filters-button .cbp-filter-item-active {background: #e7a920; border-color: #e7a920;}
	.cbp-l-filters-button .cbp-filter-item:hover { background: #e7a920; border: solid 1px #e7a920;}
	.sub-banner .text-detail ul{border-bottom:solid 4px #e7a920;}
	.sub-banner .text-detail ul li a:hover{ color:#e7a920;}
	.news .news-sec .news-main span{background: #e7a920;}
	.news .news-sec .news-main{ border-bottom:solid 4px #e7a920;}
	.news .news-sec .detail a:hover{ color:#e7a920; border-bottom:solid 1px #e7a920;}
	.new-older .more-post:hover{color:#e7a920;}
	.news-detail .next-posts a:hover{ color:#e7a920;}
	.news-detail .comments .comment-sec .detail a{ color: #e7a920;}
	.header-two-main .header ul li a:hover{background: #e7a920; }
	.header-two-main .header ul li.select a{background: #e7a920;}
	.process span{color:#e7a920;}
	.footer-light .footer-bottom a{ color:#e7a920;}

	.cd-primary-nav { background: #e7a920;}
	[class^="icon-"], [class*=" icon-"]{color:#e7a920 !important; }
	h4 span{color:#e7a920 !important; }
	';
	}
	}



	echo '</style>';

}
add_action('wp_head', 'architecture_theme_options_inline_styles', 22);

add_filter('upload_mimes', 'custom_upload_mimes');
function custom_upload_mimes ( $existing_mimes=array() ) {
    // add your extension to the mimes array as below
    $existing_mimes['zip'] = 'application/zip';
    $existing_mimes['gz'] = 'application/x-gzip';
    return $existing_mimes;
}
