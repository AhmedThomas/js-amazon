import * as cartModule from '../../data/cart.js';
import * as productModule from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryoptions.js';
import { formatCurrency } from '../utils/money.js';

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCentes = 0;

  cartModule.cart.forEach((cartItem) => {
    const product = productModule.getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCentes += deliveryOption.priceCents;
  });

  const totalBeforeTax = productPriceCents + shippingPriceCentes;
  const taxCents = totalBeforeTax * 0.1;
  const totalCents = taxCents + totalBeforeTax;

  const paymentSummaryHTML =
    /* HTML */
    `
      <div class="payment-summary-title">Order Summary</div>

      <div class="payment-summary-row">
        <div>Items (3):</div>
        <div class="payment-summary-money">
          $${formatCurrency(productPriceCents)}
        </div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">
          $${formatCurrency(shippingPriceCentes)}
        </div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">
          $${formatCurrency(totalBeforeTax)}
        </div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
      </div>

      <button class="place-order-button button-primary">
        Place your order
      </button>
    `;

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
}
