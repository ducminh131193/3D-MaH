<?php
/**
 * The template part for displaying content
 */
?>
<div  id="post-<?php echo esc_attr( get_the_ID() ); ?>" <?php post_class("col-md-12"); ?>>
	<div class="sticky-post"><?php echo esc_html__("Featured","architecture"); ?></div>
    <div class="news-sec">
        
        <div class="news-main">
            <?php the_post_thumbnail(); ?>
            <span><a href="<?php echo esc_url( get_the_permalink() ); ?>"><?php echo esc_html(get_the_date()); ?></a></span>
        </div>
        
        <div class="detail">
            <?php the_title( sprintf( '<h3 class="entry-title">', esc_url( get_permalink() ) ), '</h3>' ); ?>
            <?php the_excerpt(); ?>
            <a href="<?php echo esc_url( get_the_permalink() ); ?>"><?php echo esc_html__("Continue Reading","architecture"); ?></a>
        </div>
    <div class="clear"></div>	
    </div>
</div>
