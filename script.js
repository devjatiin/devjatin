const roles = ["web developer", "UI designer", "WordPress developer", "Shopify developer", "digital marketer"];
const el = document.getElementById('role-text');
let ri = 0, ci = 0, deleting = false;
function tick() {
    const word = roles[ri];
    if (!deleting) {
        ci++; el.textContent = word.slice(0, ci);
        if (ci === word.length) { deleting = true; setTimeout(tick, 1300); return; }
    } else {
        ci--; el.textContent = word.slice(0, ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(tick, deleting ? 35 : 75);
}
tick();
document.getElementById('year').textContent = new Date().getFullYear();