import '@/styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const cart = document.querySelector('.IDHL-cart');
  const backdrop = document.querySelector('.IDHL-cart-backdrop');
  const addToBagBtn = document.querySelector('.IDHL-add-to-bag');
  const closeBtn = document.querySelector('.IDHL-cart__close');

  addToBagBtn?.addEventListener('click', () => {
    cart?.classList.add('IDHL-cart--open');
    backdrop?.classList.add('IDHL-cart-backdrop--visible');
  });

  const closeCart = () => {
    cart?.classList.remove('IDHL-cart--open');
    backdrop?.classList.remove('IDHL-cart-backdrop--visible');
  };

  backdrop?.addEventListener('click', closeCart);
  closeBtn?.addEventListener('click', closeCart);
});
