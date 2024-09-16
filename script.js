// Script para alternar entre modos Simplificado e Avançado
document.addEventListener("DOMContentLoaded", function () {
    const simplifiedBtn = document.getElementById("simplified-mode");
    const advancedBtn = document.getElementById("advanced-mode");
    const sidebar = document.querySelector(".sidebar");
    const quickLinks = document.querySelector(".quick-links");
    const technologyList = document.querySelector(".technology-list");
    
    // Função para aplicar Modo Simplificado
    simplifiedBtn.addEventListener("click", function () {
        sidebar.style.display = "none"; // Esconde a barra lateral
        quickLinks.style.display = "none"; // Esconde os links rápidos
        technologyList.innerHTML = "<h2>Welcome to Simplified Mode!</h2><p>In simplified mode, we show less information for easier navigation.</p>";
    });

    // Função para aplicar Modo Avançado
    advancedBtn.addEventListener("click", function () {
        sidebar.style.display = "block"; // Mostra a barra lateral
        quickLinks.style.display = "block"; // Mostra os links rápidos
        technologyList.innerHTML = `
            <h2>Featured Technologies</h2>
            <div class="technology-grid">
                <article class="technology-item">
                    <h3>Blockchain</h3>
                    <p>Blockchain is a distributed database that allows secure, transparent, and tamper-proof record-keeping...</p>
                    <a href="#" class="read-more">Read more</a>
                </article>
                <article class="technology-item">
                    <h3>Artificial Intelligence</h3>
                    <p>AI refers to the simulation of human intelligence in machines that are programmed to think and learn...</p>
                    <a href="#" class="read-more">Read more</a>
                </article>
                <article class="technology-item">
                    <h3>Internet of Things (IoT)</h3>
                    <p>The IoT refers to the network of physical objects embedded with sensors and software to connect and exchange data...</p>
                    <a href="#" class="read-more">Read more</a>
                </article>
            </div>
        `;
    });
});
