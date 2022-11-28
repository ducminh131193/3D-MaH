<?php
/**
 * The template part for displaying single posts
 *
 */
 $fb_share_url 			= "http://www.facebook.com/sharer.php?u=".urlencode( get_permalink() );
 $gplus_share_url 		= "https://plus.google.com/share?url=".urlencode( get_permalink() );
 $tw_share_url 			= "https://twitter.com/share?text=".urlencode( get_the_title() )."&url=".urlencode( get_permalink() );
?>
<section class="detail-sec">

    <?php
	the_content( sprintf(
				__( 'Continue reading %s', 'architecture' ),
				the_title( '<span class="screen-reader-text">', '</span>', false )
			) ); ?>

    <?php the_tags();
	echo '<div class="post-pagination">';
    wp_link_pages();
	echo '</div>';
	?>
</section>

<!--SHARING BOX-->
<div class="social-media-sharing-box">
    <ul>
      <li class="social-sharing-title"><?php echo esc_html__( "Share this Story: ","architecture" );?></li>
         <li class="fb"><a href="<?php echo $fb_share_url; ?>" target="_blank"><i class="icon-facebook-1" aria-hidden="true"></i></a> </li>
         <li class="tw"><a href="<?php echo $tw_share_url; ?>" target="_blank"><i class="icon-twitter-1" aria-hidden="true"></i></a> </li>
         <li class="gp"><a href="<?php echo $gplus_share_url; ?>" target="_blank"><i class="icon-google" aria-hidden="true"></i></a></li>
    </ul>
</div>
