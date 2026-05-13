

const SHIPPING_FEES = {
    domicile: 600,
    bureau:   350,
    campus:   0,
    cite:     0
};

function getCart() {
    try {
        return JSON.parse(localStorage.getItem('dzsk_cart')) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('dzsk_cart', JSON.stringify(cart));
    refreshCartCount();
}

function addToCart(productId) {
    const cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: productId, qty: 1 });
    }
    saveCart(cart);

    showToast("✓ Ajouté au panier !", 'success');
    const badge = document.getElementById('cartCount');
    if (badge) {
        badge.classList.remove('bump');

        void badge.offsetWidth;
        badge.classList.add('bump');
    }
}

function changeQty(productId, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    saveCart(cart);
    if (typeof renderCart === 'function') renderCart();
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(i => i.id !== productId);
    saveCart(cart);
    if (typeof renderCart === 'function') renderCart();
}

function clearCart() {
    saveCart([]);
    refreshCartCount();
    if (typeof renderCart === 'function') renderCart();
    if (typeof showToast === 'function') showToast('🗑️ Panier vidé');
}

function refreshCartCount() {
    const badge = document.getElementById('cartCount');
    if (!badge) return;
    const cart = getCart();
    const total = cart.reduce((sum, i) => sum + i.qty, 0);
    badge.textContent = total;
}

function showToast(text, type) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = text;
    toast.className = 'toast show ' + (type || '');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.className = 'toast';
    }, 2200);
}

function getCartSubtotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => {
        const product = getProductById(item.id);
        return product ? sum + product.price * item.qty : sum;
    }, 0);
}

function getCurrentShipping() {
    const sel = document.querySelector('input[name="delivery"]:checked');
    if (!sel) return 0;
    return SHIPPING_FEES[sel.value] || 0;
}

function renderCart() {
    const list      = document.getElementById('cartList');
    const empty     = document.getElementById('cartEmpty');
    const summary   = document.getElementById('cartSummary');
    const subtotalEl= document.getElementById('cartSubtotal');
    const shippingEl= document.getElementById('cartShipping');
    const totalEl   = document.getElementById('cartTotal');
    const submitBtn = document.getElementById('submitOrder');

    if (!list) return;

    const cart = getCart();

    if (cart.length === 0) {
        list.innerHTML = '';
        empty.hidden = false;
        summary.hidden = true;
        if (submitBtn) submitBtn.disabled = true;
        return;
    }

    empty.hidden = true;
    summary.hidden = false;
    if (submitBtn) submitBtn.disabled = false;

    list.innerHTML = cart.map(item => {
        const p = getProductById(item.id);
        if (!p) return '';
        const imgFile = p.image || (p.id + '.jpg');
        const imgSrc = (typeof imagesBasePath === 'function' ? imagesBasePath() : '../images/') + imgFile;
        return `
            <div class="cart-item" data-id="${p.id}">
                <div class="cart-item-thumb">
                    <img class="cart-item-img" src="${imgSrc}" alt="${p.name}" onerror="this.remove();">
                    <span class="cart-item-emoji">${p.thumb}</span>
                </div>
                <div class="cart-item-info">
                    <h4>${p.name}</h4>
                    <p>${formatPrice(p.price)} l'unité · ${p.filiere}</p>
                </div>
                <div class="cart-qty">
                    <button data-action="dec" data-id="${p.id}" aria-label="Diminuer">−</button>
                    <span>${item.qty}</span>
                    <button data-action="inc" data-id="${p.id}" aria-label="Augmenter">+</button>
                </div>
                <span class="cart-item-price">${formatPrice(p.price * item.qty)}</span>
                <button class="cart-item-remove" data-action="remove" data-id="${p.id}" aria-label="Retirer">✕</button>
            </div>
        `;
    }).join('');

    const sub  = getCartSubtotal();
    const ship = getCurrentShipping();
    subtotalEl.textContent = formatPrice(sub);
    shippingEl.textContent = formatPrice(ship);
    totalEl.textContent    = formatPrice(sub + ship);

    list.querySelectorAll('[data-action]').forEach(btn => {
        const id = btn.getAttribute('data-id');
        const action = btn.getAttribute('data-action');
        btn.addEventListener('click', e => {
            e.preventDefault();
            if (action === 'inc') changeQty(id, +1);
            if (action === 'dec') changeQty(id, -1);
            if (action === 'remove') removeFromCart(id);
        });
    });
}

function validateOrder(form) {
    let ok = true;

    const fullNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}(?:[\s'-][A-Za-zÀ-ÖØ-öø-ÿ]{2,})+$/;
    if (!fullNameRegex.test(form.fullName.value.trim())) {
        setFieldStatus(form.fullName, document.getElementById('err-fullName'),
            "Saisis ton nom complet (prénom + nom).");
        ok = false;
    } else setFieldStatus(form.fullName, document.getElementById('err-fullName'), '');

    if (!REGEX.phone.test(form.phone.value.trim())) {
        setFieldStatus(form.phone, document.getElementById('err-phone'),
            "Numéro algérien invalide (ex: 0555 12 34 56 ou +213 555 123 456).");
        ok = false;
    } else setFieldStatus(form.phone, document.getElementById('err-phone'), '');

    if (!form.wilaya.value) {
        setFieldStatus(form.wilaya, document.getElementById('err-wilaya'),
            "Sélectionne ta wilaya.");
        ok = false;
    } else setFieldStatus(form.wilaya, document.getElementById('err-wilaya'), '');

    if (form.address.value.trim().length < 6) {
        setFieldStatus(form.address, document.getElementById('err-address'),
            "Adresse trop courte (6 caractères minimum).");
        ok = false;
    } else setFieldStatus(form.address, document.getElementById('err-address'), '');

    const deliveryEl = document.getElementById('err-delivery');
    if (!form.delivery.value) {
        if (deliveryEl) deliveryEl.textContent = "Choisis un mode de livraison.";
        ok = false;
    } else if (deliveryEl) deliveryEl.textContent = '';

    const paymentEl = document.getElementById('err-payment');
    if (!form.payment.value) {
        if (paymentEl) paymentEl.textContent = "Choisis un mode de paiement.";
        ok = false;
    } else if (paymentEl) paymentEl.textContent = '';

    return ok;
}

function getOrders() {
    try {
        return JSON.parse(localStorage.getItem('dzsk_orders')) || [];
    } catch (e) { return []; }
}

function saveOrders(orders) {
    localStorage.setItem('dzsk_orders', JSON.stringify(orders));
}

function renderOrdersHistory() {
    const section = document.getElementById('ordersHistorySection');
    const list    = document.getElementById('ordersHistoryList');
    if (!section || !list) return;

    const orders = getOrders();
    if (orders.length === 0) {
        section.hidden = true;
        return;
    }
    section.hidden = false;
    list.innerHTML = orders.slice().reverse().map(order => {
        const date = new Date(order.date).toLocaleDateString('fr-FR', {
            day: '2-digit', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
        return `
            <article class="order-history-item">
                <span style="font-size:1.6rem;">📦</span>
                <div>
                    <h4>Commande de ${order.fullName}</h4>
                    <p>${order.itemsCount} article(s) · ${order.wilaya} · ${date}</p>
                </div>
                <div style="text-align:right;">
                    <span class="order-status-badge">Confirmée</span>
                    <p style="font-weight:700; color: var(--c-primary); margin-top:6px;">
                        ${formatPrice(order.total)}
                    </p>
                </div>
            </article>
        `;
    }).join('');
}

function initOrderPage() {
    renderCart();
    renderOrdersHistory();

    const form = document.getElementById('orderForm');
    if (!form) return;

    const session = getSession();
    if (session) {
        form.fullName.value = session.firstName + ' ' + session.lastName;
    }

    const siteGroup = document.getElementById('siteUmmtoGroup');
    function refreshSiteVisibility() {
        if (!siteGroup) return;
        const sel = form.querySelector('input[name="delivery"]:checked');
        const mode = sel ? sel.value : '';

        siteGroup.style.display = (mode === 'campus' || mode === 'cite') ? 'block' : 'none';
    }
    refreshSiteVisibility();

    form.querySelectorAll('input[name="delivery"]').forEach(r => {
        r.addEventListener('change', () => {
            renderCart();
            refreshSiteVisibility();
        });
    });

    const clearBtn = document.getElementById('clearCart');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('Vider tout le panier ?')) clearCart();
        });
    }

    form.addEventListener('submit', e => {
        e.preventDefault();

        const cart = getCart();
        if (cart.length === 0) {
            showFormMessage(form, 'error', "Ton panier est vide. Ajoute des produits avant de commander.");
            return;
        }

        if (!validateOrder(form)) {
            showFormMessage(form, 'error', "Vérifie les informations saisies.");
            return;
        }

        const subtotal = getCartSubtotal();
        const shipping = getCurrentShipping();
        const order = {
            id: 'CMD-' + Date.now(),
            date: new Date().toISOString(),
            fullName: form.fullName.value.trim(),
            phone:    form.phone.value.trim(),
            address:  form.address.value.trim(),
            wilaya:   form.wilaya.value,
            delivery: form.delivery.value,
            siteUmmto: form.siteUmmto ? form.siteUmmto.value : '',
            payment:  form.payment.value,
            items: cart.map(item => {
                const p = getProductById(item.id);
                return {
                    id: item.id,
                    name: p ? p.name : 'Produit inconnu',
                    price: p ? p.price : 0,
                    qty: item.qty
                };
            }),
            itemsCount: cart.reduce((s, i) => s + i.qty, 0),
            subtotal: subtotal,
            shipping: shipping,
            total:    subtotal + shipping
        };

        const orders = getOrders();
        orders.push(order);
        saveOrders(orders);

        clearCart();

        showFormMessage(form, 'success',
            `✅ Votre commande a été confirmée avec succès. Référence : ${order.id}`);

        form.reset();
        if (session) form.fullName.value = session.firstName + ' ' + session.lastName;

        setTimeout(() => {
            renderOrdersHistory();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 600);
    });
}
