document.addEventListener('DOMContentLoaded', function () {
    console.log("reserva.js: DOMContentLoaded event fired.");

    const calendarioGrid = document.getElementById('calendario-grid');
    const currentMonthYearDisplay = document.getElementById('current-month-year');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    const resumoData = document.getElementById('resumo-data');
    const resumoPessoas = document.getElementById('resumo-pessoas');
    const resumoHorario = document.getElementById('resumo-horario');
    const resumoTotal = document.getElementById('resumo-total');

    const numeroPessoasInput = document.getElementById('numero-pessoas');
    const horarioInicioInput = document.getElementById('horario-inicio');
    const horarioFimInput = document.getElementById('horario-fim');
    const confirmarReservaBtn = document.getElementById('confirmar-reserva-btn');

    if (!calendarioGrid) {
        console.error("reserva.js: Element with ID 'calendario-grid' not found!");
        return;
    }

    let currentDate = new Date(2025, 4, 1);
    let selectedDatesArray = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    console.log("reserva.js: Initial currentDate:", currentDate);

    function renderCalendar() {
        console.log("reserva.js: renderCalendar called for", currentDate.toLocaleDateString('pt-BR'));
        calendarioGrid.innerHTML = '';
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        if (currentMonthYearDisplay) {
            currentMonthYearDisplay.textContent = `${currentDate.toLocaleString('pt-BR', { month: 'long' })} ${year}`;
        }

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.classList.add('dia-calendario', 'disabled', 'out-of-month');
            calendarioGrid.appendChild(emptyCell);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.classList.add('dia-calendario');
            dayCell.textContent = day;

            const cellDate = new Date(year, month, day);
            cellDate.setHours(0, 0, 0, 0);
            const cellDateString = cellDate.toISOString().split('T')[0];
            dayCell.dataset.date = cellDateString;

            if (cellDate.toDateString() === today.toDateString()) {
                dayCell.classList.add('today');
            }

            if (selectedDatesArray.includes(cellDateString)) {
                dayCell.classList.add('selected');
            }

            if (cellDate < today) {
                dayCell.classList.add('disabled');
            }

            dayCell.addEventListener('click', () => {
                if (dayCell.classList.contains('disabled')) {
                    console.log("reserva.js: Clicked disabled date:", cellDate);
                    return;
                }

             
                const dateIndex = selectedDatesArray.indexOf(cellDateString);

                if (dateIndex > -1) { 
                    selectedDatesArray.splice(dateIndex, 1);
                    dayCell.classList.remove('selected');
                } else {
                    selectedDatesArray.push(cellDateString);
                    dayCell.classList.add('selected');
                }
                selectedDatesArray.sort();
                console.log("reserva.js: Dates selected:", selectedDatesArray);
                updateSummary();
            });
            calendarioGrid.appendChild(dayCell);
        }
        console.log("reserva.js: Calendar rendered.");
    }

    if (prevMonthBtn) {
        prevMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });
    }

    if (nextMonthBtn) {
        nextMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });
    }

    function updateSummary() {
        console.log("reserva.js: updateSummary called. Selected dates:", selectedDatesArray);
        if (resumoData) {
         
            if (selectedDatesArray.length > 0) {
                resumoData.textContent = selectedDatesArray.map(dateStr => {
                    const d = new Date(dateStr + 'T00:00:00'); 
                    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
                }).join(', ');
            } else {
                resumoData.textContent = 'Não selecionada';
            }
        }

        const numPessoas = numeroPessoasInput ? parseInt(numeroPessoasInput.value) || 1 : 1;
        if (resumoPessoas) resumoPessoas.textContent = numPessoas;

        const inicio = horarioInicioInput ? horarioInicioInput.value || "09:00" : "09:00";
        const fim = horarioFimInput ? horarioFimInput.value || "18:00" : "18:00";
        if (resumoHorario) resumoHorario.textContent = `${inicio} - ${fim}`;

   
        let totalCost = 0;
        const dailyRate = 150;
        const perPersonExtraCostPerDay = 20;

        if (selectedDatesArray.length > 0) {
            totalCost = selectedDatesArray.length * dailyRate;
            if (numPessoas > 1) {
                totalCost += (numPessoas - 1) * perPersonExtraCostPerDay * selectedDatesArray.length;
            }
        }
        if (resumoTotal) resumoTotal.textContent = `R$ ${totalCost.toFixed(2).replace('.', ',')}`;
        console.log("reserva.js: Summary updated. Total:", totalCost);
    }

    if (numeroPessoasInput) numeroPessoasInput.addEventListener('input', updateSummary);
    if (horarioInicioInput) horarioInicioInput.addEventListener('change', updateSummary);
    if (horarioFimInput) horarioFimInput.addEventListener('change', updateSummary);

    if (confirmarReservaBtn) {
        confirmarReservaBtn.addEventListener('click', () => {
            if (selectedDatesArray.length === 0) {
                alert('Por favor, selecione pelo menos uma data.');
                return;
            }
            const reserva = {
                datas: selectedDatesArray, 
                horarioInicio: horarioInicioInput.value,
                horarioFim: horarioFimInput.value,
                pessoas: numeroPessoasInput.value,
                total: resumoTotal.textContent
            };
            console.log('Reserva Confirmada:', reserva);
            alert(`Reserva confirmada para ${reserva.datas.join(', ')} (${reserva.horarioInicio}-${reserva.horarioFim}) para ${reserva.pessoas} pessoa(s). Total: ${reserva.total}`);
        });
    }

    console.log("reserva.js: Performing initial render and summary update.");
    
    const may13th2025Str = "2025-05-23";
    if (currentDate.getFullYear() === 2025 && currentDate.getMonth() === 4) {
        if (!selectedDatesArray.includes(may13th2025Str)) {
            selectedDatesArray.push(may13th2025Str);
            selectedDatesArray.sort(); 
        }
    }

    renderCalendar(); 
    updateSummary(); 
    console.log("reserva.js: Script initialization complete. Selected dates:", selectedDatesArray);
});