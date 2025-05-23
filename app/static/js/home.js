document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidade de Filtragem de Espaços
    const filterButtons = document.querySelectorAll('.filter-btn');
    const spaceCards = document.querySelectorAll('.space-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterCategory = this.dataset.filter;

            spaceCards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (filterCategory === 'todos' || filterCategory === cardCategory) {
                    card.style.display = 'flex'; 
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Impedir valores negativos no input de pessoas
    const peopleInput = document.querySelector('input[name="pessoas"]');
    if (peopleInput) {
        peopleInput.addEventListener('input', function() {
            if (parseInt(this.value) < parseInt(this.min)) {
                this.value = this.min;
            }
        });
        if (peopleInput.value === "" || parseInt(peopleInput.value) < parseInt(peopleInput.min)) {
             peopleInput.value = peopleInput.min || 1;
        }
    }

    // START: Funcionalidade do Calendário para o Hero Banner
    const heroCalendarIcon = document.getElementById('heroCalendarIcon');
    const heroDateInput = document.getElementById('heroDateInput');

    if (heroCalendarIcon && heroDateInput) {
        heroCalendarIcon.addEventListener('click', function() {
            try {
                heroDateInput.showPicker();
            } catch (error) {
                heroDateInput.focus();
                console.warn("heroDateInput.showPicker() not supported or threw an error, falling back to focus(). Error:", error);
            }
        });
    }


    // 2. Funcionalidade para o botão "Ver mais espaços"
    const verMaisEspacosBtn = document.querySelector('.btn-ver-mais');
    if (verMaisEspacosBtn) {
        verMaisEspacosBtn.addEventListener('click', function(event) {
            console.log('Botão "Ver mais espaços" clicado! Redirecionando para: ' + this.href);
        });
    }

    // 3. Funcionalidade para o botão "Buscar" no formulário do Hero Banner
    const searchForm = document.querySelector('section.hero-banner .search-form'); 
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
        

            const local = this.elements.local ? this.elements.local.value : '';
            const data = this.elements.data ? this.elements.data.value : '';
            const pessoas = this.elements.pessoas ? this.elements.pessoas.value : '';

            console.log(`Formulário de busca enviado. Destino: ${this.action}`);
            console.log(`Buscando espaços em: ${local}, Data: ${data}, Pessoas: ${pessoas}`);
         
        });
    }
});