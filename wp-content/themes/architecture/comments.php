<?php
/**
 * The template for displaying comments
 *
 * The area of the page that contains both current comments
 * and the comment form.
 */

/*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

		<section>
			<div class="comments">
				<h5><?php echo esc_html__( "COMMENTS", "architecture" ); ?></h5>
        	<?php wp_list_comments(); ?>
					<?php the_comments_navigation(); ?>

					<section class="sec-space">
						<div class="comment-form">
								<?php if(comments_open()){ ?>
                <h5><?php echo esc_html__( "ADD your COMMENT", "architecture" ); ?></h5>
								<?php
								}
								$commenter = wp_get_current_commenter();
								$req = get_option( 'require_name_email' );
								$aria_req = ( $req ? " aria-required='true'" : '' );
								$fields =  array(

							  'author' =>
								'<input id="author" placeholder="'.esc_html__( "Name", "architecture" ).'" name="author" type="text" value="" size="30"/>',

							  'email' =>
								'<input id="email" placeholder="'.esc_html__( "Email", "architecture" ).'" name="email" type="text" value="" size="30"/>',

							  'comment_field' =>'<textarea id="comment" name="comment" placeholder="'.esc_html__( "Message", "architecture" ).'" aria-required="true"></textarea>',
							);

							if ( is_user_logged_in () ) {
								$comment_field = '<textarea id="comment" name="comment" placeholder="'.esc_html__( "Message", "architecture" ).'" aria-required="true"></textarea>';
							} else {
								$comment_field="";
							}

							$comments_args = array(
								// change the title of send button
								'label_submit'=> esc_html__( 'POST', "architecture" ),
								// change the title of the reply section
								'title_reply'=> "",
				        // remove "Text or HTML to be displayed after the set of comment fields"
				        'comment_notes_after' => '',
								'class_form' => 'form',
				        // redefine your own textarea (the comment body)
								'comment_field' => $comment_field ,
								'fields' =>  $fields,
							);
							if(comments_open()){
								comment_form( $comments_args );
							}
								?>
            </div>
					</section>
					<?php the_comments_navigation(); ?>
				</div>
			</section>


		<?php
		// If comments are closed and there are comments, let's leave a little note, shall we?
		if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) : ?>

		<p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'architecture' ); ?></p>
	<?php endif; ?>

</div><!-- .comments-area -->
