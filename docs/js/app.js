async function init() {
    const searchInput = document.getElementById('searchInput');
    const container = document.getElementById('verticalsContainer');

    try {
        // Fetch the data from the root directory
        const response = await fetch('../data/directory.json');
        if (!response.ok) throw new Error('Could not fetch directory data');
        const data = await response.json();

        function render(filter = '') {
            container.innerHTML = '';
            const query = filter.toLowerCase();

            const filteredData = data.map(vertical => {
                const filteredOutlets = vertical.outlets.filter(outlet => 
                    outlet.name.toLowerCase().includes(query) || 
                    vertical.vertical.toLowerCase().includes(query) ||
                    outlet.focus.toLowerCase().includes(query)
                );
                return { ...vertical, outlets: filteredOutlets };
            }).filter(vertical => vertical.outlets.length > 0);

            if (filteredData.length === 0) {
                container.innerHTML = '<div class="loading">No outlets found matching your search.</div>';
                return;
            }

            filteredData.forEach(section => {
                const card = document.createElement('div');
                card.className = 'vertical-card';
                
                card.innerHTML = `
                    <div class="vertical-header">
                        <span>${section.emoji}</span>
                        <h2>${section.vertical}</h2>
                    </div>
                    <ul class="outlet-list">
                        ${section.outlets.map(outlet => `
                            <li class="outlet-item">
                                <div class="outlet-main">
                                    <a href="${outlet.url}" target="_blank" class="outlet-name">
                                        ${outlet.name} ${outlet.tier === 'Primary' ? '⭐' : ''}
                                    </a>
                                    <span class="outlet-type">${outlet.type}</span>
                                </div>
                                <span class="outlet-focus">${outlet.focus}</span>
                            </li>
                        `).join('')}
                    </ul>
                `;
                container.appendChild(card);
            });
        }

        searchInput.addEventListener('input', (e) => render(e.target.value));
        render();

    } catch (error) {
        console.error('Error initializing GroundZero:', error);
        container.innerHTML = `<div class="loading">❌ Error loading data: ${error.message}</div>`;
    }
}

init();
