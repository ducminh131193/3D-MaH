<style>
  .logo{
    display: flex;
    align-items: center;
  }
  #header-2 .header-two-main .header .logo img{
    height: auto !important;
  }

</style>
<?php global $architecture_theme_options; ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>><head>

  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link href="wp-content/themes/architecture/css/custom.css" rel="stylesheet">

  <?php
  wp_head();
  ?>

</head>

<body <?php body_class(); ?>>

  <?php

  global $architecture_menu_item_number;
	$architecture_menu_item_number = 1;

  if( isset ( $architecture_theme_options['logo'] ) && isset ( $architecture_theme_options['logo']['url'] ) && $architecture_theme_options['logo']['url']!="" ){
    $architecture_theme_options['logo']	=	$architecture_theme_options['logo']['url'];
		$logo_text	= "";
	} else {
    $architecture_theme_options['logo']	= get_template_directory_uri()."/images/logo-white.png";
		$logo_text	= get_bloginfo('name');
	}

  if( isset ( $architecture_theme_options['logo-url'] ) ) {
    $logo_url = ( $architecture_theme_options['logo-url'] == "" ) ? home_url() : $architecture_theme_options['logo-url'];
  } else {
    $logo_url = home_url();
	} ?>

  <!--Search popup-->
  <div class="search-popup-box">
    <div class="vertical-align-box">
      <div class="vertical-inner-box">
        <div class="container">
        	<a class="close-search-popup " href="javascript:void(0);">x</a>
            <div class="search-field-box">
              <form id="architecture-search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>" method="get">
              	<input type="text" value="" name="s" placeholder="<?php echo esc_html__( "Search Projects...", "architecture" ); ?>" />
              </form>
              <a class="search-icon-btn" href="javascript:void(0);"><i class="icon-icons185"></i></a>
              <div class="clearfix"></div>
            </div>
        </div>
      </div>
    </div>
  </div>

  <div id="wrap">

    <?php if( isset( $architecture_theme_options['loader-logo'] ) ){ ?>
      <!--Start PreLoader-->
      <div id="loader-wrapper">
    	  <div id="loader"><?php if(!empty($architecture_theme_options['loader-logo'])){ ?> <img src="<?php echo esc_url( $architecture_theme_options['loader-logo']['url'] ); ?>" alt=""> <?php } ?><span><?php echo esc_html__("Loading...","architecture") ?></span></div>
    	  <!--/#loader-->
    	  <div class="loader-section section-left"></div>
    	  <!--/#loader-section section-left-->
    	  <div class="loader-section section-right"></div>
    	  <!--/#loader-section section-right-->
  	 </div>
  	<!--End PreLoader-->
  	<?php } ?>

    <div id="header-1">
      <!-- CUSTOM MENU START -->
      <div class="mobile-menu">
        <div class="cd-header">
        	<a class="cd-primary-nav-trigger" href="javascript:void(0);">
				    <span class="cd-menu-icon"></span>
			    </a>
       </div>

       <nav>
         <?php
         $menu_location_name = 'fly-menu';
         $locations          = get_nav_menu_locations();

         if (isset ( $locations[ $menu_location_name ] ) ) {
            $flyout_and_mobile_menu = array(
              'theme_location' => $menu_location_name,
              'container'      => '',
              'echo'           => true,
              'menu_class'     => 'cd-primary-nav',
              'fallback_cb'    => false,
				      'depth'          => 1,
            );
            wp_nav_menu( $flyout_and_mobile_menu );
          } ?>

        </nav>
	     </div>
       <!-- CUSTOM MENU END -->

  <!-- MAIN HEADER -->
  <header class="header-one cb-header">
    <div class="container">
      <div class="header">
  			<div class="row">
          <div class="col-md-12">
            <div class="logo">

            	<?php if( $logo_text == "" ){ ?>
  							<a href="<?php echo esc_url( $logo_url ); ?>">
  								<img src="<?php echo esc_url( $architecture_theme_options['logo'] ); ?>" alt="">
  							</a>
  						<?php } else { ?>
  							<a class="architecture-logo-text" href="<?php echo esc_url( $logo_url ); ?>">
  								<?php echo esc_html( $logo_text ); ?>
  							</a>
  						<?php } ?>
  					</div>

  					<div class="navigation">
  					<?php

            $menu_location_name = 'main-menu';
  					$locations          = get_nav_menu_locations();

            if (isset ( $locations[ $menu_location_name ] ) ) {
  						$architecture_header1_main_menu = array(
  							'theme_location' => 'main-menu',
  							'container'      => '',
  							'echo'           => true,
  							'fallback_cb'    => false,
  							'show_numbers'   => true,
  							'walker'         => new Walker_Nav_Menu(),
  							'depth'          => 3,
  						);
  						wp_nav_menu( $architecture_header1_main_menu );

  					} ?>

            <div class="search-btn">
              <a class="open-search-popup" href="javascript:void(0);"><i class="icon-icons185"></i></a>
            </div>
          </div>
         </div>
  	  	</div>
  		 </div>
      </div>
  </header>

  <!-- STICKY HEADER -->
  <header class="header-two cb-header">
  <div class="container">
    <div class="header">
      <div class="row">
        <div class="col-md-12">
          <div class="logo">

            <?php if( $logo_text == "" ){ ?>
              <a href="<?php echo esc_url( $logo_url ); ?>">
  						  <img src="<?php echo esc_url( $architecture_theme_options['logo'] ); ?>" alt="">
  					  </a>
  				  <?php } else { ?>
              <a class="architecture-logo-text architecture-logo-text-mobile" href="<?php echo esc_url( $logo_url ); ?>">
  						 <?php echo esc_html( $logo_text ); ?>
  					  </a>
  				 <?php } ?>
  			  </div>
  			  <div class="navigation">

            <?php

      			$menu_location_name = 'main-menu';
      			$locations          = get_nav_menu_locations();

      			if (isset ( $locations[ $menu_location_name ] ) ) {
      				$architecture_header1_sticky_menu = array(
      					'theme_location' => 'main-menu',
      					'container'      => '',
      					'echo'           => true,
      					'fallback_cb'    => false,
      					'show_numbers'   => false,
      					'walker'         => new Walker_Nav_Menu(),
      					'depth'          => 3,
      				);
      				wp_nav_menu( $architecture_header1_sticky_menu );

      			} ?>

      			 <div class="search-btn">
              <a class="open-search-popup" href="javascript:void(0);"><i class="icon-icons185"></i></a>
            </div>
      	   </div>
      	 </div>
       </div>
     </div>
    </div>
   </header>
  </div>

  <div id="header-2">
    <header class="header-two-main">

      <div class="header">
        <div class="row">
          <div class="col-md-12">
            <div class="logo">
        			<?php if( $logo_text == "" ){ ?>
        				<a href="<?php echo esc_url( $logo_url ); ?>">
        					<img src="<?php echo esc_url( $architecture_theme_options['logo'] ); ?>" alt="">
        				</a>
        			<?php } else { ?>
        				<a class="architecture-logo-text" href="<?php echo esc_url( $logo_url ); ?>">
        					<?php echo esc_html( $logo_text ); ?>
        				</a>
        			<?php } ?>
        		</div>

            <div class="navigation">

              <?php

              $menu_location_name = 'main-menu';
          		$locations          = get_nav_menu_locations();
          		if (isset ( $locations[ $menu_location_name ] ) ) {
          			$architecture_header2_main_menu = array(
          				'theme_location' => 'main-menu',
          				'container'      => '',
          				'echo'           => true,
          				'fallback_cb'    => false,
          				'show_numbers'   => false,
          				'walker'         => new Walker_Nav_Menu(),
          				'depth'          => 3,
          			);
          			wp_nav_menu( $architecture_header2_main_menu );

          		} ?>

          		<div class="search-btn">
                <a class="open-search-popup" href="javascript:void(0);"><i class="icon-icons185"></i></a>
            </div>
           </div>

         </div>
        </div>
   </div>
  </header>

    <!-- CUSTOM MENU START -->
    <div class="cd-header">
      <a class="cd-primary-nav-trigger" href="javascript:void(0);">
        <span class="cd-menu-icon"></span>
      </a>
    </div>

    <nav>

      <?php

      $menu_location_name = 'fly-menu';
      $locations          = get_nav_menu_locations();

      if (isset ( $locations[ $menu_location_name ] ) ) {
        $flyout_and_mobile_menu = array(
        'theme_location' => $menu_location_name,
        'container'      => '',
        'echo'           => true,
    		'menu_class'     => 'cd-primary-nav',
        'fallback_cb'    => false,
    		'depth'          => 1,
        );

        wp_nav_menu( $flyout_and_mobile_menu );

        } ?>

	   </nav>
	</div>
