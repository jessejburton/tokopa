<?php
/**
 *
 * FILE CREATED BY BURTONMEDIA to overwrite default WooCommerce Functionality
 *
 * Added condition to only display payment method if address is Canadian
 *
 * Output a single payment method
 *
 * @see 	    https://docs.woocommerce.com/document/template-structure/
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     2.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/*
* 	BURTON MEDIA - Geolocation must be enabled @ Woo Settings
*	This has been added to determine if the EMT payment option should be available
*/
$location = WC_Geolocation::geolocate_ip();
$country = $location['country'];

/* Determines the selected country based on customer address not GeoLocation*/
global $woocommerce;
$customer_country = $woocommerce->customer->get_country();

$show = true;
foreach ( WC()->cart->get_cart() as $cart_item_key => $cart_item ) {
  $_product   = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );

  if($_product->virtual === "yes"){
    $show = false;
  }
}
?>
<li class="wc_payment_method payment_method_<?php echo $gateway->id; ?>">
	<?php if($gateway->id != 'emt' || (($show) && $gateway->id == 'emt' && ($country == "CA" && $customer_country == "CA"))) { ?> <!-- BURTON MEDIA - Only show EMT payment if in Canada -->

		<input id="payment_method_<?php echo $gateway->id; ?>" type="radio" class="input-radio" name="payment_method" value="<?php echo esc_attr( $gateway->id ); ?>" <?php checked( $gateway->chosen, true ); ?> data-order_button_text="<?php echo esc_attr( $gateway->order_button_text ); ?>" />

		<label for="payment_method_<?php echo $gateway->id; ?>">
			<?php echo $gateway->get_title(); ?> <?php echo $gateway->get_icon(); ?>
		</label>
		<?php if ( $gateway->has_fields() || $gateway->get_description() ) : ?>
			<div class="payment_box payment_method_<?php echo $gateway->id; ?>" <?php if ( ! $gateway->chosen ) : ?>style="display:none;"<?php endif; ?>>
				<?php $gateway->payment_fields(); ?>
			</div>
		<?php endif; ?>

	<?php } ?>
</li>
