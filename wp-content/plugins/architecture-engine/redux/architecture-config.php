<?php
    /**
     * ReduxFramework Sample Config File
     * For full documentation, please visit: http://docs.reduxframework.com/
     */

    if ( ! class_exists( 'Redux' ) ) {
        return;
    }


    // This is your option name where all the Redux data is stored.
    $opt_name = "architecture_theme_options";

    // This line is only for altering the demo. Can be easily removed.
    $opt_name = apply_filters( 'redux_demo/opt_name', $opt_name );

    /**
     * ---> SET ARGUMENTS
     * All the possible arguments for Redux.
     * For full documentation on arguments, please refer to: https://github.com/ReduxFramework/ReduxFramework/wiki/Arguments
     * */

    $theme = wp_get_theme(); // For use with some settings. Not necessary.

    $args = array(
        // TYPICAL -> Change these values as you need/desire
        'opt_name'             => $opt_name,
        // This is where your data is stored in the database and also becomes your global variable name.
        'display_name'         => esc_html__("Architecture", "tsae"),
        // Name that appears at the top of your panel
        'display_version'      => $theme->get( 'Version' ),
        // Version that appears at the top of your panel
        'menu_type'            => 'submenu',
        //Specify if the admin menu should appear or not. Options: menu or submenu (Under appearance only)
        'allow_sub_menu'       => false,
        // Show the sections below the admin menu item or not
        'menu_title'           => esc_html__( 'Theme Options', 'tsae' ),
        'page_title'           => esc_html__( 'Theme Options', 'tsae' ),
        // You will need to generate a Google API key to use this feature.
        // Please visit: https://developers.google.com/fonts/docs/developer_api#Auth
        'google_api_key'       => '',
        // Set it you want google fonts to update weekly. A google_api_key value is required.
        'google_update_weekly' => false,
        // Must be defined to add google fonts to the typography module
        'async_typography'     => true,
        // Use a asynchronous font on the front end or font string
        //'disable_google_fonts_link' => true,                    // Disable this in case you want to create your own google fonts loader
        'admin_bar'            => true,
        // Show the panel pages on the admin bar
        'admin_bar_icon'       => 'dashicons-portfolio',
        // Choose an icon for the admin bar menu
        'admin_bar_priority'   => 50,
        // Choose an priority for the admin bar menu
        'global_variable'      => '',
        // Set a different name for your global variable other than the opt_name
        'dev_mode'             => false,
        // Show the time the page took to load, etc
        'update_notice'        => false,
        // If dev_mode is enabled, will notify developer of updated versions available in the GitHub Repo
        'customizer'           => true,
        // Enable basic customizer support
        //'open_expanded'     => true,                    // Allow you to start the panel in an expanded way initially.
        //'disable_save_warn' => true,                    // Disable the save warning when a user changes a field

        // OPTIONAL -> Give you extra features
        'page_priority'        => null,
        // Order where the menu appears in the admin area. If there is any conflict, something will not show. Warning.
        'page_parent'          => 'themes.php',
        // For a full list of options, visit: http://codex.wordpress.org/Function_Reference/add_submenu_page#Parameters
        'page_permissions'     => 'manage_options',
        // Permissions needed to access the options panel.
        'menu_icon'            => '',
        // Specify a custom URL to an icon
        'last_tab'             => '',
        // Force your panel to always open to a specific tab (by id)
        'page_icon'            => 'icon-themes',
        // Icon displayed in the admin panel next to your menu_title
        'page_slug'            => 'theme-options',
        // Page slug used to denote the panel, will be based off page title then menu title then opt_name if not provided
        'save_defaults'        => true,
        // On load save the defaults to DB before user clicks save or not
        'default_show'         => false,
        // If true, shows the default value next to each field that is not the default value.
        'default_mark'         => '',
        // What to print by the field's title if the value shown is default. Suggested: *
        'show_import_export'   => true,
        // Shows the Import/Export panel when not used as a field.

        // CAREFUL -> These options are for advanced use only
        'transient_time'       => 60 * MINUTE_IN_SECONDS,
        'output'               => true,
        // Global shut-off for dynamic CSS output by the framework. Will also disable google fonts output
        'output_tag'           => true,
        // Allows dynamic CSS to be generated for customizer and google fonts, but stops the dynamic CSS from going to the head
        // 'footer_credit'     => '',                   // Disable the footer credit of Redux. Please leave if you can help it.

        // FUTURE -> Not in use yet, but reserved or partially implemented. Use at your own risk.
        'database'             => '',
        // possible: options, theme_mods, theme_mods_expanded, transient. Not fully functional, warning!
        'use_cdn'              => true,
        // If you prefer not to use the CDN for Select2, Ace Editor, and others, you may download the Redux Vendor Support plugin yourself and run locally or embed it in your code.

        // HINTS
        'hints'                => array(
            'icon'          => 'el el-question-sign',
            'icon_position' => 'right',
            'icon_color'    => 'lightgray',
            'icon_size'     => 'normal',
            'tip_style'     => array(
                'color'   => 'red',
                'shadow'  => true,
                'rounded' => false,
                'style'   => '',
            ),
            'tip_position'  => array(
                'my' => 'top left',
                'at' => 'bottom right',
            ),
            'tip_effect'    => array(
                'show' => array(
                    'effect'   => 'slide',
                    'duration' => '500',
                    'event'    => 'mouseover',
                ),
                'hide' => array(
                    'effect'   => 'slide',
                    'duration' => '500',
                    'event'    => 'click mouseleave',
                ),
            ),
        )
    );


    Redux::setArgs( $opt_name, $args );

    /*
     * ---> END ARGUMENTS
     */

	 /* ================ GENERAL SECTION ============== */

	Redux::setSection( $opt_name, array(
        'title'      => __( 'General', 'tsae' ),
        'id'         => 'general-settings',
		'icon'       => 'fa fa-cog',
		'fields'	 => array(



				array(
					'id'        => 'theme-color',
					'type'      => 'color',
					'title'     => esc_html__('Theme Color', 'tsae'),
          'subtitle'    => esc_html__('This color is applied to different elements on your website like shortcodes, read more links, blog elements and buttons.', 'tsae'),
					"default"   => '#e7a920',
					"validate"   => 'color',
					"transparent"   => false,

				),

        array(
					'id'       => 'theme-skin',
					'type'     => 'image_select',
					'title'    => esc_html__('Theme Skin', 'tsae'),
          'subtitle'    => esc_html__('Selecting any skin here will load a pre-defined color scheme for your website. If any of the skin is selected, many of your colors related theme options will not work including the Theme Color option.', 'tsae'),
					'options'  => array(
            'none'      => array(
							'alt'   => 'none',
							'img'   => get_template_directory_uri ().'/images/none.jpg'
						),
						'light-blue'      => array(
							'alt'   => 'light-blue',
							'img'   => get_template_directory_uri ().'/images/blue.jpg'
						),
						'pink'      => array(
							'alt'   => 'pink',
							'img'   => get_template_directory_uri ().'/images/pink.jpg'
						),
            'green'      => array(
							'alt'   => 'green',
							'img'   => get_template_directory_uri ().'/images/green.jpg'
						),
            'light-green'      => array(
							'alt'   => 'light-green',
							'img'   => get_template_directory_uri ().'/images/light-green.jpg'
						),
            'dark-blue'      => array(
							'alt'   => 'dark-blue',
							'img'   => get_template_directory_uri ().'/images/dark-blue.jpg'
						),
            'orange'      => array(
							'alt'   => 'orange',
							'img'   => get_template_directory_uri ().'/images/orange.jpg'
						),
            'yellow'      => array(
							'alt'   => 'yellow',
							'img'   => get_template_directory_uri ().'/images/yellow.jpg'
						),
            'red'      => array(
							'alt'   => 'red',
							'img'   => get_template_directory_uri ().'/images/red.jpg'
						),
            'purple'      => array(
							'alt'   => 'purple',
							'img'   => get_template_directory_uri ().'/images/purple.jpg'
						),
            'brown'      => array(
							'alt'   => 'brown',
							'img'   => get_template_directory_uri ().'/images/brown.jpg'
						),
					),
					'default' => 'none'

				),

				array(
					'id'        => 'body-background-color',
					'type'      => 'color',
					'title'     => esc_html__('Body Background Color', 'tsae'),
					"default"   => '#ffffff',
					"validate"   => 'color',
					"transparent"   => false,

				),
				array(
					'id'        => 'body-font-color',
					'type'      => 'color',
					'title'     => esc_html__('Body Font Color', 'tsae'),
					"default"   => '#000000',
					"validate"   => 'color',
					"transparent"   => false,

				),
				array(
					'id'        => 'body-link-color',
					'type'      => 'color',
					'title'     => esc_html__('Body Link Color', 'tsae'),
					"default"   => '#000',
					"validate"   => 'color',
					"transparent"   => false,

				),
				array(
				'id'       => 'logo',
				'type'     => 'media',
				'url'      => true,
				'mode'     => false,
				'title'    => esc_html__('Logo', 'tsae'),
				),
        array(
        'id'       => 'loader-logo',
        'type'     => 'media',
        'url'      => true,
        'mode'     => false,
        'title'    => esc_html__('Loading Screen Logo', 'tsae'),
        ),
				array(
				'id'       => 'logo-url',
				'type'     => 'text',
				'title'    => esc_html__('Logo URL', 'tsae'),
				'subtitle'    => esc_html__('If you want to link your logo to any link other than website home page.', 'tsae'),
				),
				array(
				'id'       => 'contact-email',
				'type'     => 'text',
				"default"   => 'info@yourcompany.com',
				'title'    => esc_html__('Contact Email', 'tsae'),
        'subtitle'    => esc_html__('Any submission on contact page will be sent to this email address.', 'tsae'),
				),
				array(
				'id'       => 'maps-api-key',
				'type'     => 'text',
				'title'    => esc_html__('Google Maps Api Key', 'tsae'),
				'subtitle'    => __('Google maps now require api key to show maps on your website. So this field must be filled if you want to use maps. Please <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">click here</a> to learn how to generate this key for your website.', 'tsae'),
				),
				array(
				'id'       => 'blog-title',
				'type'     => 'text',
				'title'    => esc_html__('Blog Page Title', 'tsae'),
				"default"   =>  esc_html__('Blog', 'tsae'),

				),
				array(
				'id'       => 'blog-sub-title',
				'type'     => 'text',
				'title'    => esc_html__('Blog Page Subtitle', 'tsae'),
				),
				array(
				'id'       => 'projects-archive-page-title',
				'type'     => 'text',
				'title'    => esc_html__('Projects Archive Page Title', 'tsae'),
				"default"   =>  esc_html__('Our Creative Work', 'tsae'),

				),
				array(
				'id'       => 'projects-archive-page-sub-title',
				'type'     => 'text',
				'title'    => esc_html__('Projects Archive Page Subtitle', 'tsae'),
				),
				array(
				'id'       => 'projects-per-page',
				'type'     => 'spinner',
				'default'   => 12,
				'min'   => 1,
				'max'   => 60,
				'title'    => esc_html__('Projects Per Page', 'tsae'),
				),
		)
	));

	/* ================ HEADER SECTION ============== */

	Redux::setSection( $opt_name, array(
        'title'      => esc_html__( 'Header', 'tsae' ),
        'id'         => 'header-settings',
		'icon'       => 'fa fa-bars',
		'fields'	 => array(

				array(
					'id'       => 'header-layout',
					'type'     => 'image_select',
					'title'    => esc_html__('Header Layout', 'tsae'),
					'options'  => array(
						'header1'      => array(
							'alt'   => 'Header 1',
							'img'   => get_template_directory_uri ().'/images/header1.png'
						),
						'header2'      => array(
							'alt'   => 'Header 2',
							'img'   => get_template_directory_uri ().'/images/header2.png'
						),
					),
					'default' => 'header1'
				),
				array(
					'id'        => 'header-background-color',
					'type'      => 'color',
					'title'     => esc_html__('Header Background Color', 'tsae'),
					"default"   => '#000000',
					"validate"   => 'color',
					"transparent"   => false,

				),

				array(
					'id'        => 'header-font-color',
					'type'      => 'color',
					'title'     => esc_html__('Header Font Color', 'tsae'),
          'subtitle'    => esc_html__('This color will also be applied to the menu items.', 'tsae'),
					"default"   => '#ffffff',
					"validate"   => 'color',
					"transparent"   => false,

				),
				array(
					'id'        => 'menu-hover-color',
					'type'      => 'color',
					'title'     => esc_html__('Menu Hover Color', 'tsae'),
					"default"   => '#e7a920',
					"validate"   => 'color',
					"transparent"   => false,

				),
				array(
					'id'        => 'menu-hover-lb-color',
					'type'      => 'color',
					'title'     => esc_html__('Menu Hover Line/Box Color', 'tsae'),
					"default"   => '#e7a920',
					"validate"   => 'color',
					"transparent"   => false,

				),

				array(
					'id'        => 'menu-number-show',
					'type'      => 'color',
					'title'     => esc_html__('Show Menu number', 'tsae'),
					"default"   => '#000',
					"validate"   => 'color',
					"transparent"   => false,
					'required' => array(
						array('header-layout','equals','header1')
					)
				),
				array(
					'id'        => 'menu-number-show',
					'type'     => 'switch',
					'title'    => esc_html__('Show Menu Number', 'tsae'),
					'default'  => true,
					'required' => array(
						array('header-layout','equals','header1')
					)
				),
				array(
					'id'        => 'menu-number-color',
					'type'     => 'color',
					'title'    => esc_html__('Menu Number Color', 'tsae'),
					'default'  => '#868686',
					"transparent"   => false,
					'required' => array(
						array('header-layout','equals','header1'),
						array('menu-number-show','equals',true),
					)
				),
				array(
					'id'        => 'header-flyout-icon-color',
					'type'      => 'color',
					'title'     => esc_html__('Flyout Menu Icon Color', 'tsae'),
					"default"   => '#000',
					"validate"   => 'color',
					"transparent"   => false,
					'required' => array(
						array('header-layout','equals','header2')
					)
				),


				array(
					'id'        => 'flyout-font-color',
					'type'      => 'color',
					'title'     => esc_html__('Flyout Font Color', 'tsae'),
					"default"   => '#ffffff',
					"validate"   => 'color',
					"transparent"   => false,
					'required' => array(
						array('header-layout','equals','header2')
					)

				),
				array(
					'id'        => 'flyout-hover-color',
					'type'      => 'color',
					'title'     => esc_html__('Flyout Hover Color', 'tsae'),
					"default"   => '#000000',
					"validate"   => 'color',
					"transparent"   => false,
					'required' => array(
						array('header-layout','equals','header2')
					)

				),
				array(
					'id'        => 'menu_show_follow_section',
					'type'     => 'switch',
					'title'    => esc_html__('Show Follow Us Section in Flyout/Mobile Menu', 'tsae'),
					'default'  => true,
				),
				array(
					'id'        => 'menu_facebook_url',
					'type'     => 'text',
					'title'    => esc_html__('Facebook URL', 'tsae'),
					'default'  => "#",
					'required' => array(
						array('menu_show_follow_section','equals',true)
					)
				),
				array(
					'id'        => 'menu_twitter_url',
					'type'     => 'text',
					'title'    => esc_html__('Twitter URL', 'tsae'),
					'default'  => "#",
					'required' => array(
						array('menu_show_follow_section','equals',true)
					)
				),
				array(
					'id'        => 'menu_google_url',
					'type'     => 'text',
					'title'    => esc_html__('Google URL', 'tsae'),
					'default'  => "#",
					'required' => array(
						array('menu_show_follow_section','equals',true)
					)
				),



		)
	));

	/* ================ FOOTER SECTION ============== */

	Redux::setSection( $opt_name, array(
        'title'      => esc_html__( 'Footer', 'tsae' ),
        'id'         => 'footer-settings',
		'icon'       => 'fa fa-level-down',
		'fields'	 => array(


				array(
					'id'       => 'footer-style',
					'type'     => 'switch',
					'title'    => esc_html__('Footer Style', 'tsae'),
					'default'  => true,
					'on'	   => 'Dark',
					'off'	   => 'Light'
				),
				array(
					'id'        => 'footer-font-color',
					'type'      => 'color',
					'title'     => esc_html__('Footer Font Color', 'tsae'),
					"default"   => '#ffffff',
					"validate"   => 'color',
					"transparent"   => false,

				),

				array(
				'id'       => 'footer-copyright',
				'type'     => 'text',
				'title'    => esc_html__('Copyright Text', 'tsae'),
				"default"   => esc_html__('Copyrights 2022','tsae'),
				),
				array(
					'id'        => 'footer-powered-by',
					'type'     => 'text',
					'title'    => esc_html__('Powered by Text', 'tsae'),
					'default'  => 'Design by: DataDesign',

				),

				array(
          'id'       => 'footer-widgets',
					'type'     => 'switch',
					'title'    => esc_html__('Use Widgets for Footer', 'tsae'),
          'sub-title' => esc_html__('If you select to use widgets for footer, you will have to add your widgets inside Footer widget area 1,2 and 3 in Appearance >> Widgets section of dashboard. ','tsae'),
					'default'  => false,
					'on'	   => 'Yes',
					'off'	   => 'No'
				),
				array(
				'id'       => 'footer-phone',
				'type'     => 'text',
				'title'    => esc_html__('Phone Number', 'tsae'),
				"default"   => '+1 000 22 999',
				'required' => array(
								array('footer-widgets','equals',false)
							)
				),
				array(
				'id'       => 'footer-email',
				'type'     => 'text',
				'title'    => esc_html__('Email Address', 'tsae'),
				"default"   => 'info@yourcompany.com',
				'required' => array(
								array('footer-widgets','equals',false)
							)
				),
				array(
				'id'       => 'footer-address',
				'type'     => 'text',
				'title'    => esc_html__('Address', 'tsae'),
				"default"   => 'New York, CA 12012',
				'required' => array(
								array('footer-widgets','equals',false)
							)
				),
				array(
					'id'        => 'footer_facebook_url',
					'type'     => 'text',
					'title'    => esc_html__('Facebook URL', 'tsae'),
					'default'  => "#",
					'required' => array(
								array('footer-widgets','equals',false)
							)

				),
				array(
					'id'        => 'footer_twitter_url',
					'type'     => 'text',
					'title'    => esc_html__('Twitter URL', 'tsae'),
					'default'  => "#",
					'required' => array(
								array('footer-widgets','equals',false)
							)

				),
				array(
					'id'        => 'footer_google_url',
					'type'     => 'text',
					'title'    => esc_html__('Google URL', 'tsae'),
					'default'  => "#",
					'required' => array(
								array('footer-widgets','equals',false)
							)

				),

		)
	));

	/* ================ CUSTOM STYLES SECTION ============== */

	Redux::setSection( $opt_name, array(
        'title'      => esc_html__( 'Custom Styles', 'tsae' ),
        'id'         => 'styles-settings',
		'icon'       => 'fa fa-eye',
		'fields'	 => array(
				array(
				'id'       	=> 'desktop-css',
				'type'     	=> 'ace_editor',
				'title'    	=> esc_html__('Custom CSS Code for Desktop', 'tsae'),
				'subtitle' 	=> esc_html__('This code will work for any device with size equal to or bigger than 768px.', 'tsae'),
				"mode"  	=> 'css',
				"theme"   	=> 'chrome',
				),
				array(
				'id'       	=> 'mobile-css',
				'type'     	=> 'ace_editor',
				'title'    	=> esc_html__('Custom CSS Code for Mobile Devices', 'tsae'),
				'subtitle' 	=> esc_html__('This code will work for any device with size less than 768px.', 'tsae'),
				"mode"  	=> 'css',
				"theme"   	=> 'chrome',
				),
		)
	));

	/* ================ CUSTOM SCRIPTS SECTION ============== */

	Redux::setSection( $opt_name, array(
        'title'      => esc_html__( 'Custom Scripts', 'tsae' ),
        'id'         => 'scripts-settings',
		'icon'       => 'fa fa-file-code-o',
		'fields'	 => array(
				array(
				'id'       	=> 'tracking-script',
				'type'     	=> 'ace_editor',
				'title'    	=> esc_html__('Tracking Codes', 'tsae'),
				'subtitle' 	=> esc_html__('This code will be placed right before the closing tag of head.', 'tsae'),
				"mode"  	=> 'javascript',
				"desc" 		=> esc_html__('Do not use the "$" as selector, you can use the "jQuery" selector. Also do not use any script tags, they are already included.','tsae'),
				"theme"   	=> 'chrome',
				),
				array(
				'id'       	=> 'general-script',
				'type'     	=> 'ace_editor',
				'title'    	=> esc_html__('Custom Scripts', 'tsae'),
				'subtitle' 	=> esc_html__('This code will be placed right before the closing tag of body.', 'tsae'),
				"mode"  	=> 'javascript',
				"desc" 		=> esc_html__('Do not use the "$" as selector, you can use the "jQuery" selector. Also do not use any script tags, they are already included.','tsae'),
				"theme"   	=> 'chrome',
				),
		)
	));


	/* ================ TYPOGRAPHY SECTION ============== */

	Redux::setSection( $opt_name, array(
        'title'      => esc_html__( 'Typography', 'tsae' ),
        'id'         => 'typography-settings',
		'icon'       => 'fa fa-keyboard-o',
		'fields'	 => array(
				array(
					'id'          => 'menu-typography',
					'type'        => 'typography',
					'title'       => esc_html__('Main & Sticky Menu Typography', 'tsae'),
					'google'      => true,
					'font-backup' => true,
					'output'      => array('.header ul li a','.header .navigation .language a','.cd-primary-nav a'),
					'units'       =>'px',
					'color'		  => false,
					'font-size'   => false,
       				'line-height' => false,
					'text-align'  => false,
					'default'     => array(
						'font-family' => 'Montserrat',
						'google'      => true,
						'font-backup' => 'Arial, Helvetica, sans-serif',
					),
				),

				array(
					'id'          => 'body-typography',
					'type'        => 'typography',
					'title'       => esc_html__('Body Typography', 'tsae'),
					'google'      => true,
					'font-backup' => true,
					'output'      => array('body span p'),
					'units'       =>'px',
					'color'		  => false,
					'font-size'   => false,
       				'line-height' => false,
					'text-align'  => false,
					'default'     => array(
						'font-family' => 'Roboto Slab',
						'google'      => true,
						'font-backup' => 'Arial, Helvetica, sans-serif',
						'subsets'	  => 'latin'
					),
				),

				array(
					'id'          => 'h1-typography',
					'type'        => 'typography',
					'title'       => esc_html__('H1 Typography', 'tsae'),
					'google'      => true,
					'font-backup' => true,
					'output'      => array('h1'),
					'units'       =>'px',
					'font-size'   => false,
       				'line-height' => false,
					'text-align'  => false,
					'default'     => array(
						'font-family' => 'Montserrat',
						'google'      => true,
						'font-backup' => 'Arial, Helvetica, sans-serif',
					),
				),
				array(
					'id'          => 'h2-typography',
					'type'        => 'typography',
					'title'       => esc_html__('H2 Typography', 'tsae'),
					'google'      => true,
					'font-backup' => true,
					'output'      => array('h2'),
					'units'       =>'px',
					'font-size'   => false,
       				'line-height' => false,
					'text-align'  => false,
					'default'     => array(
						'font-family' => 'Montserrat',
						'google'      => true,
						'font-backup' => 'Arial, Helvetica, sans-serif',
					),
				),
				array(
					'id'          => 'h3-typography',
					'type'        => 'typography',
					'title'       => esc_html__('H3 Typography', 'tsae'),
					'google'      => true,
					'font-backup' => true,
					'output'      => array('h3'),
					'units'       =>'px',
					'font-size'   => false,
       				'line-height' => false,
					'text-align'  => false,
					'default'     => array(
						'font-family' => 'Montserrat',
						'google'      => true,
						'font-backup' => 'Arial, Helvetica, sans-serif',
					),
				),
				array(
					'id'          => 'h4-typography',
					'type'        => 'typography',
					'title'       => esc_html__('H4 Typography', 'tsae'),
					'google'      => true,
					'font-backup' => true,
					'output'      => array('h4'),
					'units'       =>'px',
					'font-size'   => false,
       				'line-height' => false,
					'text-align'  => false,
					'default'     => array(
						'font-family' => 'Montserrat',
						'google'      => true,
						'font-backup' => 'Arial, Helvetica, sans-serif',
					),
				),
				array(
					'id'          => 'h5-typography',
					'type'        => 'typography',
					'title'       => esc_html__('H5 Typography', 'tsae'),
					'google'      => true,
					'font-backup' => true,
					'output'      => array('h5'),
					'units'       =>'px',
					'font-size'   => false,
       				'line-height' => false,
					'text-align'  => false,
					'default'     => array(
						'font-family' => 'Montserrat',
						'google'      => true,
						'font-backup' => 'Arial, Helvetica, sans-serif',
					),
				),
				array(
					'id'          => 'h6-typography',
					'type'        => 'typography',
					'title'       => esc_html__('H6 Typography', 'tsae'),
					'google'      => true,
					'font-backup' => true,
					'output'      => array('h6'),
					'units'       =>'px',
					'font-size'   => false,
       				'line-height' => false,
					'text-align'  => false,
					'default'     => array(
						'font-family' => 'Montserrat',
						'google'      => true,
						'font-backup' => 'Arial, Helvetica, sans-serif',
					),
				),
		)
	));



    /*
     * ---> START HELP TABS
     */

    $tabs = array(
        array(
            'id'      => 'redux-help-tab-1',
            'title'   => esc_html__( 'Theme Information 1', 'tsae' ),
            'content' => esc_html__( '<p>This is the tab content, HTML is allowed.</p>', 'tsae' )
        ),
        array(
            'id'      => 'redux-help-tab-2',
            'title'   => esc_html__( 'Theme Information 2', 'tsae' ),
            'content' => esc_html__( '<p>This is the tab content, HTML is allowed.</p>', 'tsae' )
        )
    );
    Redux::setHelpTab( $opt_name, $tabs );

    // Set the help sidebar
    $content = esc_html__( '<p>This is the sidebar content, HTML is allowed.</p>', 'tsae' );
    Redux::setHelpSidebar( $opt_name, $content );


    /*
     * <--- END HELP TABS
     */


    /*
     *
     * ---> START SECTIONS
     *
     */

	/*
     *
     * ---> END SECTIONS
     *
     */


    /*
     *
     * YOU MUST PREFIX THE FUNCTIONS BELOW AND ACTION FUNCTION CALLS OR ANY OTHER CONFIG MAY OVERRIDE YOUR CODE.
     *
     */

    /*
    *
    * --> Action hook examples
    *
    */

    // If Redux is running as a plugin, this will remove the demo notice and links
    //add_action( 'redux/loaded', 'remove_demo' );

    // Function to test the compiler hook and demo CSS output.
    // Above 10 is a priority, but 2 in necessary to include the dynamically generated CSS to be sent to the function.
    //add_filter('redux/options/' . $opt_name . '/compiler', 'compiler_action', 10, 3);

    // Change the arguments after they've been declared, but before the panel is created
    //add_filter('redux/options/' . $opt_name . '/args', 'change_arguments' );

    // Change the default value of a field after it's been set, but before it's been useds
    //add_filter('redux/options/' . $opt_name . '/defaults', 'change_defaults' );

    // Dynamically add a section. Can be also used to modify sections/fields
    //add_filter('redux/options/' . $opt_name . '/sections', 'dynamic_section');

    /**
     * This is a test function that will let you see when the compiler hook occurs.
     * It only runs if a field    set with compiler=>true is changed.
     * */
    if ( ! function_exists( 'compiler_action' ) ) {
        function compiler_action( $options, $css, $changed_values ) {
            echo '<h1>The compiler hook has run!</h1>';
            echo "<pre>";
            print_r( $changed_values ); // Values that have changed since the last save
            echo "</pre>";
            //print_r($options); //Option values
            //print_r($css); // Compiler selector CSS values  compiler => array( CSS SELECTORS )
        }
    }

    /**
     * Custom function for the callback validation referenced above
     * */
    if ( ! function_exists( 'redux_validate_callback_function' ) ) {
        function redux_validate_callback_function( $field, $value, $existing_value ) {
            $error   = false;
            $warning = false;

            //do your validation
            if ( $value == 1 ) {
                $error = true;
                $value = $existing_value;
            } elseif ( $value == 2 ) {
                $warning = true;
                $value   = $existing_value;
            }

            $return['value'] = $value;

            if ( $error == true ) {
                $return['error'] = $field;
                $field['msg']    = 'your custom error message';
            }

            if ( $warning == true ) {
                $return['warning'] = $field;
                $field['msg']      = 'your custom warning message';
            }

            return $return;
        }
    }

    /**
     * Custom function for the callback referenced above
     */
    if ( ! function_exists( 'redux_my_custom_field' ) ) {
        function redux_my_custom_field( $field, $value ) {
            print_r( $field );
            echo '<br/>';
            print_r( $value );
        }
    }

    /**
     * Custom function for filtering the sections array. Good for child themes to override or add to the sections.
     * Simply include this function in the child themes functions.php file.
     * NOTE: the defined constants for URLs, and directories will NOT be available at this point in a child theme,
     * so you must use get_template_directory_uri() if you want to use any of the built in icons
     * */
    if ( ! function_exists( 'dynamic_section' ) ) {
        function dynamic_section( $sections ) {
            //$sections = array();
            $sections[] = array(
                'title'  => esc_html__( 'Section via hook', 'tsae' ),
                'desc'   => esc_html__( '<p class="description">This is a section created by adding a filter to the sections array. Can be used by child themes to add/remove sections from the options.</p>', 'tsae' ),
                'icon'   => 'el el-paper-clip',
                // Leave this as a blank section, no options just some intro text set above.
                'fields' => array()
            );

            return $sections;
        }
    }

    /**
     * Filter hook for filtering the args. Good for child themes to override or add to the args array. Can also be used in other functions.
     * */
    if ( ! function_exists( 'change_arguments' ) ) {
        function change_arguments( $args ) {
            //$args['dev_mode'] = true;

            return $args;
        }
    }

    /**
     * Filter hook for filtering the default value of any given field. Very useful in development mode.
     * */
    if ( ! function_exists( 'change_defaults' ) ) {
        function change_defaults( $defaults ) {
            $defaults['str_replace'] = 'Testing filter hook!';

            return $defaults;
        }
    }

    /**
     * Removes the demo link and the notice of integrated demo from the redux-framework plugin
     */
    if ( ! function_exists( 'remove_demo' ) ) {
        function remove_demo() {
            // Used to hide the demo mode link from the plugin page. Only used when Redux is a plugin.
            if ( class_exists( 'ReduxFrameworkPlugin' ) ) {
                remove_filter( 'plugin_row_meta', array(
                    ReduxFrameworkPlugin::instance(),
                    'plugin_metalinks'
                ), null, 2 );

                // Used to hide the activation notice informing users of the demo panel. Only used when Redux is a plugin.
                remove_action( 'admin_notices', array( ReduxFrameworkPlugin::instance(), 'admin_notices' ) );
            }
        }
    }
