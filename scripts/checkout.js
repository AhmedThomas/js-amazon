import { renderOrderSummary } from './checkout/order-summary.js';
import { renderPaymentSummary } from './checkout/payment-summary.js';
import { fetchProducts } from '../data/products.js';

// Promise.all([fetchProducts()]).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });

fetchProducts().then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
