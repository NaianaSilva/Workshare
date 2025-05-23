document.addEventListener('DOMContentLoaded', function() {

    const priceRange = document.getElementById('priceRange');
    const currentPriceDisplay = document.querySelector('.current-price-display');

    function updatePriceDisplay() {
        if (!priceRange || !currentPriceDisplay) return;

        const value = priceRange.value;
        currentPriceDisplay.textContent = `R$ ${value}`;

        const min = parseFloat(priceRange.min);
        const max = parseFloat(priceRange.max);
        const val = parseFloat(value);
       
        const percentage = (max - min === 0) ? 0 : (val - min) / (max - min);

        const thumbWidth = 18; 
        const trackWidth = priceRange.offsetWidth;
        
   
        let thumbPosition = percentage * (trackWidth - thumbWidth) + (thumbWidth / 2);
        
  
        const displayWidth = currentPriceDisplay.offsetWidth;
        thumbPosition = Math.max(displayWidth / 2, thumbPosition);
        thumbPosition = Math.min(trackWidth - displayWidth / 2, thumbPosition);

        currentPriceDisplay.style.left = `${thumbPosition}px`;
   
    }

    if (priceRange && currentPriceDisplay) {
        priceRange.addEventListener('input', updatePriceDisplay);
 
        updatePriceDisplay(); 
   
        window.addEventListener('resize', updatePriceDisplay);
    }

    const searchPageCalendarIcon = document.getElementById('searchPageCalendarIcon');
    const searchPageDateInput = document.getElementById('searchPageDateInput');

    if (searchPageCalendarIcon && searchPageDateInput) {
        searchPageCalendarIcon.addEventListener('click', function() {
            try {
                searchPageDateInput.showPicker();
            } catch (error) {
                searchPageDateInput.focus();
                console.warn("searchPageDateInput.showPicker() not supported or error, falling back to focus(). Error:", error);
            }
        });
    }

    const searchPagePeopleInput = document.querySelector('.search-form input[name="pessoas"]');
    if (searchPagePeopleInput && searchPagePeopleInput.type === 'number') {
        searchPagePeopleInput.addEventListener('input', function() {
            if (this.value !== "" && parseInt(this.value) < parseInt(this.min)) {
                this.value = this.min;
            }
        });
        if (searchPagePeopleInput.value === "" || (searchPagePeopleInput.min && parseInt(searchPagePeopleInput.value) < parseInt(searchPagePeopleInput.min))) {
            searchPagePeopleInput.value = searchPagePeopleInput.min || 1;
        }
    }

    const filterButtons = document.querySelectorAll('.filters .checkbox-container input[type="checkbox"]');
    const spaceCards = document.querySelectorAll('.space-results .space-card');

    function applyFilters() {
      
        console.log("Applying filters (placeholder)...");

    
        const selectedTypes = [];
        document.querySelectorAll('.filter-section:nth-child(2) .checkbox-container input:checked').forEach(cb => {
            selectedTypes.push(cb.parentElement.textContent.trim());
        });
        console.log("Selected Types:", selectedTypes);

     
        const selectedAmenities = [];
         document.querySelectorAll('.filter-section:nth-child(3) .checkbox-container input:checked').forEach(cb => {
            selectedAmenities.push(cb.parentElement.textContent.trim());
        });
        console.log("Selected Amenities:", selectedAmenities);
        console.log("Price Range Value:", priceRange ? priceRange.value : "N/A");


        spaceCards.forEach(card => {
            card.style.display = 'flex';
        });
    }

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('change', applyFilters);
        });
    }
    if(priceRange) {
        priceRange.addEventListener('change', applyFilters);
    }


    const topSearchForm = document.querySelector('.search-bar-container .search-form');
    if (topSearchForm) {
        topSearchForm.addEventListener('submit', function(event) {

            const local = this.elements.local ? this.elements.local.value : '';
            const data = this.elements.data ? this.elements.data.value : '';
            const pessoas = this.elements.pessoas ? this.elements.pessoas.value : '';

            console.log(`Top search form submitted. Action: ${this.action}`);
            console.log(`Searching for: Local: ${local}, Data: ${data}, Pessoas: ${pessoas}`);
        });
    }
});