export default function botaoTopo() {
    const btnTopo = document.getElementById('btn-topo');

    if (!btnTopo) return; // evita erro caso o elemento não exista

    // mostrar o botão quando descer 300px
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnTopo.style.display = 'flex';
        } else {
            btnTopo.style.display = 'none';
        }
    });

    // voltar ao topo
    btnTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
