

const REGEX = {

    name:     /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,40}$/,

    email:    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

    password: /^.{6,}$/,

    phone:    /^(?:(?:\+|00)213|0)\s?[567](?:[\s.-]?\d){8}$/
};

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem('dzsk_users')) || [];
    } catch (e) {
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem('dzsk_users', JSON.stringify(users));
}

function getSession() {
    try {
        return JSON.parse(localStorage.getItem('dzsk_session'));
    } catch (e) {
        return null;
    }
}

function setSession(user) {
    localStorage.setItem('dzsk_session', JSON.stringify(user));
}

function clearSession() {
    localStorage.removeItem('dzsk_session');
}

const DEMO_USERS = [
    {
        firstName: 'Demo',
        lastName: 'UMMTO',
        email: 'demo@ummto.dz',
        password: 'demo123',
        filiere: 'Informatique',
        niveau: 'L2'
    }
];

function seedDemoUsers() {
    const users = getUsers();
    DEMO_USERS.forEach(demo => {
        if (!users.find(u => u.email === demo.email)) {
            users.push(demo);
        }
    });
    saveUsers(users);
}

function refreshNavAuth() {
    const session = getSession();
    if (session) {
        document.body.classList.add('is-logged-in');
        const greeting = document.getElementById('userGreeting');
        if (greeting) {
            greeting.innerHTML = `Salut <strong>${escapeHtml(session.firstName)}</strong> 👋`;
        }
    } else {
        document.body.classList.remove('is-logged-in');
    }
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function setupMobileNav() {
    const toggle = document.getElementById('navToggle');
    const nav    = document.getElementById('mainNav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}

function setupLogoutBtn() {
    const btn = document.getElementById('logoutBtn');
    if (!btn) return;
    btn.addEventListener('click', e => {
        e.preventDefault();
        clearSession();
        const isInContent = window.location.pathname.includes('/content/');
        window.location.href = isInContent ? '../index.html' : 'index.html';
    });
}

function setFieldStatus(input, errorEl, message) {
    if (message) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        if (errorEl) errorEl.textContent = message;
    } else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        if (errorEl) errorEl.textContent = '';
    }
}

function showFormMessage(form, type, text) {
    const box = form.querySelector('#formMessage');
    if (!box) return;
    box.className = 'form-message ' + type;
    box.textContent = text;
}

function validateRegister(form) {
    const fields = {
        firstName:        form.firstName,
        lastName:         form.lastName,
        email:            form.email,
        password:         form.password,
        passwordConfirm:  form.passwordConfirm,
        filiere:          form.filiere,
        niveau:           form.niveau
    };
    let ok = true;

    if (!REGEX.name.test(fields.firstName.value.trim())) {
        setFieldStatus(fields.firstName, document.getElementById('err-firstName'),
            "Prénom invalide (2 à 40 lettres).");
        ok = false;
    } else setFieldStatus(fields.firstName, document.getElementById('err-firstName'), '');

    if (!REGEX.name.test(fields.lastName.value.trim())) {
        setFieldStatus(fields.lastName, document.getElementById('err-lastName'),
            "Nom invalide (2 à 40 lettres).");
        ok = false;
    } else setFieldStatus(fields.lastName, document.getElementById('err-lastName'), '');

    if (!REGEX.email.test(fields.email.value.trim())) {
        setFieldStatus(fields.email, document.getElementById('err-email'),
            "Email invalide (ex: prenom.nom@ummto.dz).");
        ok = false;
    } else setFieldStatus(fields.email, document.getElementById('err-email'), '');

    if (!REGEX.password.test(fields.password.value)) {
        setFieldStatus(fields.password, document.getElementById('err-password'),
            "Au moins 6 caractères.");
        ok = false;
    } else setFieldStatus(fields.password, document.getElementById('err-password'), '');

    if (fields.passwordConfirm.value !== fields.password.value || !fields.passwordConfirm.value) {
        setFieldStatus(fields.passwordConfirm, document.getElementById('err-passwordConfirm'),
            "Les mots de passe ne correspondent pas.");
        ok = false;
    } else setFieldStatus(fields.passwordConfirm, document.getElementById('err-passwordConfirm'), '');

    if (!fields.filiere.value) {
        setFieldStatus(fields.filiere, document.getElementById('err-filiere'),
            "Sélectionne ta filière.");
        ok = false;
    } else setFieldStatus(fields.filiere, document.getElementById('err-filiere'), '');

    if (!fields.niveau.value) {
        setFieldStatus(fields.niveau, document.getElementById('err-niveau'),
            "Sélectionne ton niveau.");
        ok = false;
    } else setFieldStatus(fields.niveau, document.getElementById('err-niveau'), '');

    return ok;
}

function setupRegisterPage() {
    const form = document.getElementById('registerForm');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!validateRegister(form)) {
            showFormMessage(form, 'error', "Vérifie les champs en rouge avant de continuer.");
            return;
        }

        const email = form.email.value.trim().toLowerCase();
        const users = getUsers();

        if (users.find(u => u.email === email)) {
            showFormMessage(form, 'error', "Cet email est déjà inscrit. Connecte-toi plutôt.");
            return;
        }

        const newUser = {
            firstName: form.firstName.value.trim(),
            lastName:  form.lastName.value.trim(),
            email:     email,
            password:  form.password.value,
            filiere:   form.filiere.value,
            niveau:    form.niveau.value,
            createdAt: new Date().toISOString()
        };
        users.push(newUser);
        saveUsers(users);

        setSession({
            firstName: newUser.firstName,
            lastName:  newUser.lastName,
            email:     newUser.email,
            filiere:   newUser.filiere,
            niveau:    newUser.niveau
        });

        showFormMessage(form, 'success',
            `Bienvenue ${newUser.firstName} ! Inscription réussie. Redirection en cours…`);

        setTimeout(() => { window.location.href = '../index.html'; }, 1400);
    });
}

function validateLogin(form) {
    let ok = true;
    if (!REGEX.email.test(form.email.value.trim())) {
        setFieldStatus(form.email, document.getElementById('err-email'),
            "Email invalide.");
        ok = false;
    } else setFieldStatus(form.email, document.getElementById('err-email'), '');

    if (!REGEX.password.test(form.password.value)) {
        setFieldStatus(form.password, document.getElementById('err-password'),
            "Au moins 6 caractères.");
        ok = false;
    } else setFieldStatus(form.password, document.getElementById('err-password'), '');

    return ok;
}

function setupLoginPage() {
    const form = document.getElementById('loginForm');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!validateLogin(form)) {
            showFormMessage(form, 'error', "Vérifie les champs en rouge.");
            return;
        }

        const email    = form.email.value.trim().toLowerCase();
        const password = form.password.value;
        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            showFormMessage(form, 'error', "Email ou mot de passe incorrect.");
            return;
        }

        setSession({
            firstName: user.firstName,
            lastName:  user.lastName,
            email:     user.email,
            filiere:   user.filiere,
            niveau:    user.niveau
        });

        showFormMessage(form, 'success',
            `Connexion réussie, bienvenue ${user.firstName} ! Redirection…`);

        setTimeout(() => { window.location.href = '../index.html'; }, 1200);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupMobileNav();
    setupLogoutBtn();

    seedDemoUsers();
    refreshNavAuth();

    if (typeof refreshCartCount === 'function') {
        refreshCartCount();
    }

    setupRegisterPage();
    setupLoginPage();
});
