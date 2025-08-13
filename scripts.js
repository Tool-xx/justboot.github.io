// Данные программ (можно заменить на загрузку с GitHub)
const softwareData = [
    {
        category: "browsers",
        name: "Tor Browser",
        url: "https://www.torproject.org/download/",
        icon: "T"
    },
    {
        category: "games",
        name: "Steam",
        url: "https://store.steampowered.com/about/",
        icon: "S"
    }
];

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderSoftware('all');
    setupCategoryTabs();
});

function renderSoftware(category) {
    const grid = document.getElementById('software-grid');
    grid.innerHTML = '';
    
    const filtered = category === 'all' 
        ? softwareData 
        : softwareData.filter(item => item.category === category);
    
    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'software-card';
        card.innerHTML = `
            <div class="card-icon">${item.icon}</div>
            <h3>${item.name}</h3>
            <button onclick="window.open('${item.url}', '_blank')">
                Установить
            </button>
        `;
        grid.appendChild(card);
    });
}

function setupCategoryTabs() {
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => {
                t.classList.remove('active');
            });
            tab.classList.add('active');
            renderSoftware(tab.dataset.category);
        });
    });
}