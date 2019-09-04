<div class="comments">
  <a id="comments"></a>
  <h2><?php echo get_comments_number(); ?> Comments</h2>
  <?php if($comments) : ?>
      <ol class="comments">
      <?php foreach($comments as $comment) : ?>
          <li id="comment-<?php comment_ID(); ?>" class="comment <?php if ($comment->user_id == 1) echo "authcomment";?>">
              <?php if ($comment->comment_approved == '0') : ?>
                  <p>Your comment is awaiting approval</p>
              <?php endif; ?>
              <div class="comment-avatar"><?php echo get_avatar(get_comment_author_email(), 96); ?></div>
              <div class="comment-body">
                <cite><h3><?php comment_author_link(); ?></h3> <small>on <?php comment_date(); ?> at <?php comment_time(); ?></small></cite>
                <?php comment_text(); ?>
              </div>
              <!-- Need to fix replying if necessary
              <div class="comment-reply arrow">
                <?php
                  $post_id = get_the_ID();
                  $comment_id =get_comment_ID();

                  //get the setting configured in the admin panel under settings discussions "Enable threaded (nested) comments  levels deep"
                  $max_depth = get_option('thread_comments_depth');
                  //add max_depth to the array and give it the value from above and set the depth to 1
                  $default = array(
                      'add_below'  => 'comment',
                      'respond_id' => 'respond',
                      'reply_text' => __('Reply'),
                      'login_text' => __('Log in to Reply'),
                      'depth'      => 1,
                      'before'     => '',
                      'after'      => '',
                      'max_depth'  => $max_depth
                      );
                ?>
               <?php comment_reply_link($default,$comment_id,$post_id);
                ?>
              </div>-->
          </li>
      <?php endforeach; ?>
      </ol>
  <?php endif; ?>

  <?php if(comments_open()) : ?>
    <h3 class="reply-header">Leave a Reply</h3>
      <?php if(get_option('comment_registration') && !$user_ID) : ?>
          <p>You must be <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?redirect_to=<?php echo urlencode(get_permalink()); ?>">logged in</a> to post a comment.</p><?php else : ?>
          <form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">
              <?php if($user_ID) : ?>
                  <p>Logged in as <a href="<?php echo get_option('siteurl'); ?>/wp-admin/profile.php"><?php echo $user_identity; ?></a>. <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?action=logout" title="Log out of this account">Log out &raquo;</a></p>
              <?php else : ?>
                  <p><input type="text" name="author" id="author" value="<?php echo $comment_author; ?>" size="22" tabindex="1" />
                  <label for="author">Name <?php if($req) echo "(required)"; ?></label></p>
                  <p><input type="text" name="email" id="email" value="<?php echo $comment_author_email; ?>" size="22" tabindex="2" />
                  <label for="email">Email (will not be published<?php if($req) echo ", required"; ?>)</label></p>
                  <p><input type="text" name="url" id="url" value="<?php echo $comment_author_url; ?>" size="22" tabindex="3" />
                  <label for="url">Website</label></p>
              <?php endif; ?>
              <p><textarea name="comment" id="comment" class="comment-textarea" rows="10" tabindex="4"></textarea></p>
              <?php //show_subscription_checkbox(); ?>
              <p style="text-align:right"><button name="submit" type="submit" class="arrow arrow--button" id="submit" tabindex="5">Post Comment</button>
              <input type="hidden" name="comment_post_ID" value="<?php echo $id; ?>" /></p>
              <?php do_action('comment_form', $post->ID); ?>
          </form>
      <?php endif; ?>
  <?php endif; ?>
</div>