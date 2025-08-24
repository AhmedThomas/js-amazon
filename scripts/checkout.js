import { renderOrderSummary } from './checkout/order-summary.js';
import { renderPaymentSummary } from './checkout/payment-summary.js';
import { loadProducts } from '../data/products.js';

new Promise((resolve) => {
  loadProducts(() => {
    resolve('value one');
  });
}).then((value) => {
  console.log(value);
  renderOrderSummary();
  renderPaymentSummary();
});
