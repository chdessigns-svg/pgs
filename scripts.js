function toggleMenu() {
    const mobile = document.getElementById('mobileMenu');
    if (mobile) mobile.classList.toggle('open');
}

function switchTab(tab, button) {
    const target = button?.target || button;
    document.querySelectorAll('.page-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById('tab-' + tab);
    if (panel) panel.classList.add('active');
    if (target && target.classList) target.classList.add('active');
}

function submitForm(btn) {
    if (!btn) return;
    btn.textContent = 'Sending...';
    btn.style.opacity = '0.7';
    setTimeout(() => {
        btn.style.display = 'none';
        const success = document.getElementById('formSuccess');
        if (success) success.style.display = 'block';
    }, 1200);
}

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    document.querySelectorAll('.mobile-menu a').forEach(a => {
        a.addEventListener('click', () => {
            const mobile = document.getElementById('mobileMenu');
            if (mobile) mobile.classList.remove('open');
        });
    });
});
