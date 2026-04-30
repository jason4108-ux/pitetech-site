(function () {
  'use strict';

  const root = document.documentElement;
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-primary-nav]');

  function setMenu(open) {
    if (!toggle || !nav) return;
    root.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      setMenu(!root.classList.contains('menu-open'));
    });

    nav.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) setMenu(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenu(false);
    });

    document.addEventListener('click', (event) => {
      if (!root.classList.contains('menu-open')) return;
      const target = event.target;
      if (target instanceof Node && !nav.contains(target) && !toggle.contains(target)) {
        setMenu(false);
      }
    });
  }

  const form = document.querySelector('[data-mailto-form]');
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const productMap = new Map([
    ['PITE3915', 'PITE3915 Battery Tester'],
    ['battery-tester', 'PITE3915 Battery Tester'],
    ['PITE3836', 'PITE3836 Ground Fault Locator'],
    ['ground-fault-locator', 'PITE3836 Ground Fault Locator'],
    ['PITE3980', 'PITE3980 DC Load Bank'],
    ['dc-load-bank', 'PITE3980 DC Load Bank'],
  ]);

  const productSelect = form.elements.namedItem('Product');
  const requestedProduct = params.get('product');
  if (productSelect instanceof HTMLSelectElement && requestedProduct) {
    const normalized = productMap.get(requestedProduct) || requestedProduct;
    const option = Array.from(productSelect.options).find((item) => item.value === normalized || item.text === normalized);
    if (option) productSelect.value = option.value || option.text;
  }

  const message = form.elements.namedItem('Message');
  const resource = params.get('resource');
  if (message instanceof HTMLTextAreaElement && resource && !message.value.trim()) {
    message.value = 'Resource request: ' + resource + '\n\nProject details:';
  }

  const fields = form.querySelectorAll('input, textarea, select');
  fields.forEach((field) => {
    field.addEventListener('invalid', () => {
      field.setAttribute('aria-invalid', 'true');
    });
    field.addEventListener('input', () => {
      if (field.validity.valid) field.removeAttribute('aria-invalid');
    });
    field.addEventListener('blur', () => {
      if (field.validity.valid) field.removeAttribute('aria-invalid');
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      const firstInvalid = form.querySelector(':invalid');
      if (firstInvalid instanceof HTMLElement) firstInvalid.focus();
      return;
    }

    const data = new FormData(form);
    const product = data.get('Product') || 'PITE product inquiry';
    const subject = 'PITE inquiry - ' + product;
    const lines = [];

    for (const [key, value] of data.entries()) {
      const text = String(value).trim();
      if (text) lines.push(key + ': ' + text);
    }

    window.location.href = 'mailto:sales@pitetech.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
  });
})();
