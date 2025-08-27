// ===== APLICACIÓN DE AHORRO - SCRIPT PRINCIPAL =====
// Datos globales
let goals = [];
const settings = {
    language: 'es',
    currency: 'USD'
};
let currentGoalId = null;
let currentMoneyAction = null;

// Traducciones completas
const translations = {
    es: {
        // Textos principales
        'app-title': 'MiAhorro - Tus Metas de Ahorro',
        'total-savings': '💰 ahorros totales',
        'total-saved': 'Total Ahorrado',
        'my-goals': 'Mis Metas',
        'start-saving-adventure': '¡Comienza tu aventura de ahorro!',
        'tap-plus-button': 'Toca el botón + para crear tu primera meta',
        'create-first-goal': 'Crea tu primera meta para visualizar tus ahorros',
        'no-limit': 'Sin límite',
        'goal-reached': '¡Meta alcanzada!',
        'export': 'Exportar',
        'import': 'Importar',
        
        // Configuración
        'settings': 'Configuración',
        'language': 'Idioma',
        'main-currency': 'Moneda Principal',
        'cancel': 'Cancelar',
        'save-changes': 'Guardar Cambios',
        'settings-saved': '¡Configuración guardada exitosamente!',
        
        // Nueva meta
        'new-goal': 'Nueva Meta',
        'goal-name': 'Nombre de la meta *',
        'goal-name-placeholder': 'Ej: Vacaciones, Auto nuevo, Casa...',
        'target-amount': 'Cantidad objetivo (opcional)',
        'currency': 'Moneda',
        'image-optional': 'Imagen (opcional)',
        'tap-add-image': 'Toca para agregar una imagen',
        'save-goal': 'Guardar Meta',
        'enter-goal-name': 'Por favor, ingresa un nombre para la meta',
        
        // Detalle de meta
        'goal-detail': 'Detalle de la Meta',
        'saved': 'Ahorrado',
        'target': 'Objetivo',
        'add': 'Agregar',
        'remove': 'Retirar',
        'edit': 'Editar',
        'transaction-history': 'Historial de Movimientos',
        
        // Agregar/Quitar dinero
        'add-money': 'Agregar Dinero',
        'remove-money': 'Retirar Dinero',
        'amount': 'Cantidad',
        'note-optional': 'Nota (opcional)',
        'note-placeholder': 'Ej: Ahorro mensual, Regalo, Bono...',
        'confirm': 'Confirmar',
        
        // Editar meta
        'edit-goal': 'Editar Meta',
        'goal-name-edit': 'Nombre de la meta',
        'target-amount-edit': 'Cantidad objetivo',
        'image': 'Imagen',
        'tap-change-image': 'Toca para cambiar la imagen',
        'save': 'Guardar',
        
        // Eliminar
        'confirm-delete': 'Confirmar Eliminación',
        'delete-confirmation': '¿Estás seguro de que deseas eliminar esta meta?',
        'action-undoable': 'Esta acción no se puede deshacer.',
        'delete': 'Eliminar',
        
        // Transacciones
        'added': 'Agregado',
        'removed': 'Retirado',
        'remaining': 'Faltan'
    },
    
    en: {
        // Main texts
        'app-title': 'MySavings - Your Savings Goals',
        'total-savings': '💰 total savings',
        'total-saved': 'Total Saved',
        'my-goals': 'My Goals',
        'start-saving-adventure': 'Start your savings journey!',
        'tap-plus-button': 'Tap the + button to create your first goal',
        'create-first-goal': 'Create your first goal to track your savings',
        'no-limit': 'No limit',
        'goal-reached': 'Goal achieved!',
        'export': 'Export',
        'import': 'Import',
        
        // Settings
        'settings': 'Settings',
        'language': 'Language',
        'main-currency': 'Main Currency',
        'cancel': 'Cancel',
        'save-changes': 'Save Changes',
        'settings-saved': 'Settings saved successfully!',
        
        // New goal
        'new-goal': 'New Goal',
        'goal-name': 'Goal name *',
        'goal-name-placeholder': 'Ex: Vacation, New car, House...',
        'target-amount': 'Target amount (optional)',
        'currency': 'Currency',
        'image-optional': 'Image (optional)',
        'tap-add-image': 'Tap to add an image',
        'save-goal': 'Save Goal',
        'enter-goal-name': 'Please enter a goal name',
        
        // Goal detail
        'goal-detail': 'Goal Details',
        'saved': 'Saved',
        'target': 'Target',
        'add': 'Add',
        'remove': 'Remove',
        'edit': 'Edit',
        'transaction-history': 'Transaction History',
        
        // Add/Remove money
        'add-money': 'Add Money',
        'remove-money': 'Remove Money',
        'amount': 'Amount',
        'note-optional': 'Note (optional)',
        'note-placeholder': 'Ex: Monthly savings, Gift, Bonus...',
        'confirm': 'Confirm',
        
        // Edit goal
        'edit-goal': 'Edit Goal',
        'goal-name-edit': 'Goal name',
        'target-amount-edit': 'Target amount',
        'image': 'Image',
        'tap-change-image': 'Tap to change image',
        'save': 'Save',
        
        // Delete
        'confirm-delete': 'Confirm Deletion',
        'delete-confirmation': 'Are you sure you want to delete this goal?',
        'action-undoable': 'This action cannot be undone.',
        'delete': 'Delete',
        
        // Transactions
        'added': 'Added',
        'removed': 'Removed',
        'remaining': 'Remaining'
    },
    
    pt: {
        // Textos principais
        'app-title': 'MinhasPoupanças - Suas Metas de Poupança',
        'total-savings': '💰 poupanças totais',
        'total-saved': 'Total Poupado',
        'my-goals': 'Minhas Metas',
        'start-saving-adventure': 'Comece sua jornada de poupança!',
        'tap-plus-button': 'Toque no botão + para criar sua primeira meta',
        'create-first-goal': 'Crie sua primeira meta para acompanhar suas poupanças',
        'no-limit': 'Sem limite',
        'goal-reached': 'Meta alcançada!',
        'export': 'Exportar',
        'import': 'Importar',
        
        // Configurações
        'settings': 'Configurações',
        'language': 'Idioma',
        'main-currency': 'Moeda Principal',
        'cancel': 'Cancelar',
        'save-changes': 'Salvar Alterações',
        'settings-saved': 'Configurações salvas com sucesso!',
        
        // Nova meta
        'new-goal': 'Nova Meta',
        'goal-name': 'Nome da meta *',
        'goal-name-placeholder': 'Ex: Férias, Carro novo, Casa...',
        'target-amount': 'Valor objetivo (opcional)',
        'currency': 'Moeda',
        'image-optional': 'Imagem (opcional)',
        'tap-add-image': 'Toque para adicionar uma imagem',
        'save-goal': 'Salvar Meta',
        'enter-goal-name': 'Por favor, insira um nome para a meta',
        
        // Detalhe da meta
        'goal-detail': 'Detalhes da Meta',
        'saved': 'Poupado',
        'target': 'Objetivo',
        'add': 'Adicionar',
        'remove': 'Remover',
        'edit': 'Editar',
        'transaction-history': 'Histórico de Transações',
        
        // Adicionar/Remover dinheiro
        'add-money': 'Adicionar Dinheiro',
        'remove-money': 'Remover Dinheiro',
        'amount': 'Valor',
        'note-optional': 'Nota (opcional)',
        'note-placeholder': 'Ex: Poupança mensal, Presente, Bônus...',
        'confirm': 'Confirmar',
        
        // Editar meta
        'edit-goal': 'Editar Meta',
        'goal-name-edit': 'Nome da meta',
        'target-amount-edit': 'Valor objetivo',
        'image': 'Imagem',
        'tap-change-image': 'Toque para alterar a imagem',
        'save': 'Salvar',
        
        // Excluir
        'confirm-delete': 'Confirmar Exclusão',
        'delete-confirmation': 'Tem certeza de que deseja excluir esta meta?',
        'action-undoable': 'Esta ação não pode ser desfeita.',
        'delete': 'Excluir',
        
        // Transações
        'added': 'Adicionado',
        'removed': 'Removido',
        'remaining': 'Restam'
    },
    
    que: {
        // Textos principales
        'app-title': 'Qolqe Waqaychay - Qampa Metakuna',
        'total-savings': '💰 llapan qolqe waqaychasqa',
        'total-saved': 'Llapan Waqaychasqa',
        'my-goals': 'Ñuqapa Metakuna',
        'start-saving-adventure': '¡Qolqe waqaychay puriyta qallariy!',
        'tap-plus-button': '+ botonta ñit\'iy ñawpaq metaykita ruwanapaq',
        'create-first-goal': 'Ñawpaq metaykita ruway qolqeykita qhawanapaq',
        'no-limit': 'Mana sayay',
        'goal-reached': '¡Meta chayasqa!',
        'export': 'Lluqsichiy',
        'import': 'Yaykuchiy',
        
        // Configuración
        'settings': 'Allichay',
        'language': 'Simi',
        'main-currency': 'Hatun Qolqe',
        'cancel': 'Saqiy',
        'save-changes': 'Tikaykunata waqaychay',
        'settings-saved': '¡Allichay allinta waqaychasqa!',
        
        // Nueva meta
        'new-goal': 'Musuq Meta',
        'goal-name': 'Metapa sutin *',
        'goal-name-placeholder': 'Kayhinata: Samay, Musuq auto, Wasi...',
        'target-amount': 'Munasqa qolqe (munasqanman hina)',
        'currency': 'Qolqe',
        'image-optional': 'Siq\'i (munasqanman hina)',
        'tap-add-image': 'Ñit\'iy huk siq\'ita yapanapaq',
        'save-goal': 'Metata waqaychay',
        'enter-goal-name': 'Ama hina kay, metapa sutinta qillqay',
        
        // Detalle de meta
        'goal-detail': 'Metapa Willakuyninkunata',
        'saved': 'Waqaychasqa',
        'target': 'Meta',
        'add': 'Yapay',
        'remove': 'Hurquy',
        'edit': 'Allichay',
        'transaction-history': 'Qolqe Ruraykunapa Willakuynin',
        
        // Agregar/Quitar dinero
        'add-money': 'Qolqeta yapay',
        'remove-money': 'Qolqeta hurquy',
        'amount': 'Qolqe',
        'note-optional': 'Qillqasqa (munasqanman hina)',
        'note-placeholder': 'Kayhinata: Killapa qolqen, Sipiy, Yapay...',
        'confirm': 'Takyachiy',
        
        // Editar meta
        'edit-goal': 'Metata allichay',
        'goal-name-edit': 'Metapa sutin',
        'target-amount-edit': 'Munasqa qolqe',
        'image': 'Siq\'i',
        'tap-change-image': 'Ñit\'iy siq\'ita tikanaykipaq',
        'save': 'Waqaychay',
        
        // Eliminar
        'confirm-delete': 'Qichuy takyachiy',
        'delete-confirmation': '¿Chiqachu kay metata qichuyta munankichu?',
        'action-undoable': 'Kay rurayqa manam kutichikuyta atinchu.',
        'delete': 'Qichuy',
        
        // Transacciones
        'added': 'Yapasqa',
        'removed': 'Hurqusqa',
        'remaining': 'Faltasqa'
    }
};

// Información de monedas
const currencyInfo = {
    USD: { name: 'Dólar', flag: '🇺🇸' },
    EUR: { name: 'Euro', flag: '🇪🇺' },
    COP: { name: 'Peso Colombiano', flag: '🇨🇴' },
    BRL: { name: 'Real', flag: '🇧🇷' },
    MXN: { name: 'Peso Mexicano', flag: '🇲🇽' },
    ARS: { name: 'Peso Argentino', flag: '🇦🇷' },
    CLP: { name: 'Peso Chileno', flag: '🇨🇱' },
    PEN: { name: 'Sol Peruano', flag: '🇵🇪' }
};

// ===== FUNCIONES DE FORMATEO DE NÚMEROS =====
function formatNumberInput(value) {
    // Si el valor está vacío, retornarlo tal como está
    if (!value || value === '') return value;
    
    // Remover caracteres no numéricos excepto punto decimal
    const cleanValue = value.replace(/[^\d.]/g, '');
    
    // Si después de limpiar no hay nada, retornar vacío
    if (!cleanValue) return '';
    
    // Separar parte entera y decimal
    const parts = cleanValue.split('.');
    let integerPart = parts[0];
    const decimalPart = parts[1];
    
    // Solo formatear si hay al menos un dígito
    if (!integerPart) return cleanValue;
    
    // Formatear parte entera con separadores de miles
    if (integerPart.length > 3) {
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    // Reconstruir el número
    let formattedValue = integerPart;
    if (decimalPart !== undefined) {
        formattedValue += '.' + decimalPart;
    }
    
    return formattedValue;
}

function parseFormattedNumber(value) {
    // Remover separadores de miles y convertir a número
    if (!value || value === '') return 0;
    return parseFloat(value.replace(/,/g, '')) || 0;
}

function setupNumberFormatting(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    // Cambiar el tipo de input a text para permitir formateo
    input.type = 'text';
    input.inputMode = 'decimal'; // Mantener el teclado numérico en móviles
    
    // Remover event listeners previos si existen
    input.removeEventListener('input', input._formatHandler);
    input.removeEventListener('keydown', input._keydownHandler);
    input.removeEventListener('blur', input._blurHandler);
    
    // Handler para keydown - permitir solo números, punto decimal y teclas especiales
    input._keydownHandler = function(e) {
        const allowedKeys = [
            'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
            'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
            'Home', 'End', 'Period'
        ];
        
        // Permitir Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        if (e.ctrlKey && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) {
            return;
        }
        
        // Permitir teclas especiales
        if (allowedKeys.includes(e.key)) {
            return;
        }
        
        // Permitir números
        if (e.key >= '0' && e.key <= '9') {
            return;
        }
        
        // Permitir punto decimal solo si no hay uno ya
        if (e.key === '.' && !e.target.value.includes('.')) {
            return;
        }
        
        // Bloquear todo lo demás
        e.preventDefault();
    };
    
    // Handler para input - formatear mientras se escribe
    input._formatHandler = function(e) {
        const cursorPosition = e.target.selectionStart;
        const oldValue = e.target.value;
        const newValue = formatNumberInput(oldValue);
        
        if (newValue !== oldValue) {
            e.target.value = newValue;
            
            // Calcular nueva posición del cursor
            let newCursorPosition = cursorPosition;
            const oldCommas = (oldValue.match(/,/g) || []).length;
            const newCommas = (newValue.match(/,/g) || []).length;
            const commasDiff = newCommas - oldCommas;
            
            if (commasDiff !== 0) {
                newCursorPosition = cursorPosition + commasDiff;
            }
            
            // Asegurar que el cursor esté en una posición válida
            newCursorPosition = Math.max(0, Math.min(newCursorPosition, newValue.length));
            
            // Usar setTimeout para asegurar que el cursor se posicione correctamente
            setTimeout(() => {
                e.target.setSelectionRange(newCursorPosition, newCursorPosition);
            }, 0);
        }
    };
    
    // Handler para blur - formatear al perder el foco
    input._blurHandler = function(e) {
        const value = e.target.value;
        if (value && value.trim() !== '') {
            e.target.value = formatNumberInput(value);
        }
    };
    
    // Agregar event listeners
    input.addEventListener('keydown', input._keydownHandler);
    input.addEventListener('input', input._formatHandler);
    input.addEventListener('blur', input._blurHandler);
}

// ===== FUNCIONES DE ALMACENAMIENTO =====
function saveToStorage() {
    try {
        localStorage.setItem("miAhorroMetas", JSON.stringify(goals));
        localStorage.setItem("miAhorroSettings", JSON.stringify(settings));
        console.log('✅ Datos guardados correctamente');
    } catch (error) {
        console.error('❌ Error guardando:', error);
    }
}

function loadFromStorage() {
    try {
        const goalsData = localStorage.getItem("miAhorroMetas");
        if (goalsData) goals = JSON.parse(goalsData);
        
        const settingsData = localStorage.getItem("miAhorroSettings");
        if (settingsData) Object.assign(settings, JSON.parse(settingsData));
        
        console.log('✅ Datos cargados correctamente');
    } catch (error) {
        console.error('❌ Error cargando:', error);
    }
}

// ===== FUNCIONES DE CONFIGURACIÓN =====
function openSettings() {
    console.log('🔧 Abriendo configuración...');
    const modal = document.getElementById("settings-modal");
    if (modal) {
        modal.style.display = "flex";
        
        // Cargar valores actuales
        const langSelect = document.getElementById("language-select");
        const currencySelect = document.getElementById("currency-select");
        
        if (langSelect) langSelect.value = settings.language;
        if (currencySelect) currencySelect.value = settings.currency;
        
        console.log('✅ Modal de configuración abierto');
    }
}

function closeSettings() {
    console.log('🔧 Cerrando configuración...');
    const modal = document.getElementById("settings-modal");
    if (modal) {
        modal.style.display = "none";
    }
}

function saveSettings() {
    console.log('💾 Guardando configuración...');
    
    const langSelect = document.getElementById("language-select");
    const currencySelect = document.getElementById("currency-select");
    
    if (langSelect && currencySelect) {
        settings.language = langSelect.value;
        settings.currency = currencySelect.value;
        
        saveToStorage();
        updateTotals();
        updateGoalsUI(); // Actualizar la interfaz con el nuevo idioma
        updateUILanguage(); // Actualizar todos los textos de la interfaz
        
        // Mensaje de confirmación removido para evitar notificaciones molestas
        console.log(`✅ Configuración guardada - Idioma: ${settings.language}, Moneda: ${settings.currency}`);
        
        closeSettings();
        console.log('✅ Configuración guardada');
    }
}

// ===== FUNCIONES DE METAS =====
function openAddGoal() {
    console.log('➕ Abriendo nueva meta...');
    const modal = document.getElementById("add-goal-modal");
    if (modal) {
        modal.style.display = "flex";
        resetAddGoalForm();
        setupCurrencySelect();
        console.log('✅ Modal de nueva meta abierto');
    }
}

function closeAddGoal() {
    console.log('➕ Cerrando nueva meta...');
    const modal = document.getElementById("add-goal-modal");
    if (modal) {
        modal.style.display = "none";
    }
}

function resetAddGoalForm() {
    const nameInput = document.getElementById("goal-name");
    const amountInput = document.getElementById("goal-amount");
    const currencySelect = document.getElementById("goal-currency");
    const imageInput = document.getElementById("goal-image");
    const imagePreview = document.getElementById("image-preview");
    
    if (nameInput) nameInput.value = "";
    if (amountInput) amountInput.value = "";
    if (currencySelect) currencySelect.value = settings.currency || "USD";
    if (imageInput) imageInput.value = "";
    
    // Limpiar preview de imagen
    if (imagePreview) {
        imagePreview.innerHTML = `
            <div class="upload-placeholder">
                <span class="upload-icon">📷</span>
                <span>Toca para agregar imagen</span>
            </div>
        `;
    }
}

function setupCurrencySelect() {
    const currencySelect = document.getElementById("goal-currency");
    if (currencySelect) {
        currencySelect.innerHTML = Object.entries(currencyInfo).map(([code, info]) => 
            `<option value="${code}">${info.flag} ${code} - ${info.name}</option>`
        ).join('');
        currencySelect.value = settings.currency;
    }
}

function saveGoal() {
    console.log('💾 Guardando nueva meta...');
    
    const nameInput = document.getElementById("goal-name");
    const amountInput = document.getElementById("goal-amount");
    const currencySelect = document.getElementById("goal-currency");
    const imageInput = document.getElementById("goal-image");
    
    if (!nameInput || !currencySelect) {
        console.error('❌ Elementos del formulario no encontrados');
        return;
    }
    
    const name = nameInput.value.trim();
    const amount = parseFormattedNumber(amountInput.value) || 0;
    const currency = currencySelect.value;
    const imageFile = imageInput ? imageInput.files[0] : null;
    
    if (!name) {
        console.warn('⚠️ Nombre de meta requerido');
        return;
    }
    
    const goal = {
        id: Date.now(),
        name: name,
        targetAmount: amount,
        currentAmount: 0,
        currency: currency,
        image: null,
        transactions: [],
        createdAt: new Date().toISOString()
    };
    
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            goal.image = e.target.result;
            goals.push(goal);
            saveToStorage();
            updateGoalsUI();
            updateTotals();
            closeAddGoal();
            console.log('✅ Meta guardada con imagen');
        };
        reader.readAsDataURL(imageFile);
    } else {
        goals.push(goal);
        saveToStorage();
        updateGoalsUI();
        updateTotals();
        closeAddGoal();
        console.log('✅ Meta guardada sin imagen');
    }
}

// ===== FUNCIONES DE UI =====
function updateGoalsUI() {
    const container = document.getElementById("goals-container");
    if (!container) {
        console.error('❌ Contenedor de metas no encontrado');
        return;
    }
    
    if (goals.length === 0) {
        const t = translations[settings.language] || translations.es;
        container.innerHTML = `
            <div class="empty-state">
                <p>${t['start-saving-adventure']}</p>
                <p>${t['tap-plus-button']}</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = goals.map((goal, index) => {
        const progress = goal.targetAmount > 0 ? Math.min((goal.currentAmount / goal.targetAmount) * 100, 100) : 0;
        const remaining = goal.targetAmount > 0 ? Math.max(goal.targetAmount - goal.currentAmount, 0) : 0;
        const t = translations[settings.language] || translations.es;
        
        return `
            <div class="goal-card" data-goal-id="${goal.id}" data-index="${index}">
                <div class="goal-content" onclick="openGoalDetail(${goal.id})">
                    ${goal.image ? `<img src="${goal.image}" alt="${goal.name}" class="goal-image">` : '<div class="goal-icon">💰</div>'}
                    <div class="goal-info">
                        <h3>${goal.name}</h3>
                        <div class="goal-amounts">
                            <span class="saved">${formatCurrency(goal.currentAmount, goal.currency)}</span>
                            ${goal.targetAmount > 0 ? `<span class="target">de ${formatCurrency(goal.targetAmount, goal.currency)}</span>` : `<span class="target">${t['no-limit']}</span>`}
                        </div>
                        ${goal.targetAmount > 0 ? `
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${progress}%"></div>
                            </div>
                            <div class="remaining">
                                ${remaining > 0 ? `${t['remaining']} ${formatCurrency(remaining, goal.currency)}` : t['goal-reached']}
                            </div>
                        ` : ''}
                        <div class="goal-date">
                            Creada: ${new Date(goal.createdAt).toLocaleDateString()}
                        </div>
                    </div>
                </div>
                <div class="drag-handle" onclick="event.stopPropagation()">
                    <div class="drag-lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Agregar event listeners para drag and drop con long press
    setupDragAndDrop();
    
    console.log(`✅ UI actualizada con ${goals.length} metas`);
}

function updateTotals() {
    const totalsByCurrency = {};
    
    goals.forEach(goal => {
        if (!totalsByCurrency[goal.currency]) {
            totalsByCurrency[goal.currency] = 0;
        }
        totalsByCurrency[goal.currency] += goal.currentAmount;
    });
    
    const currenciesScroll = document.getElementById("currencies-scroll");
    if (!currenciesScroll) {
        console.error('❌ Contenedor de totales no encontrado');
        return;
    }
    
    if (Object.keys(totalsByCurrency).length === 0) {
        const t = translations[settings.language] || translations.es;
        currenciesScroll.innerHTML = `
            <div class="empty-totals">
                <p>${t['create-first-goal']}</p>
            </div>
        `;
        return;
    }
    
    const totalsHTML = Object.entries(totalsByCurrency).map(([currency, amount]) => {
        return `<div class="currency-total">
            <span class="currency-flag">${currencyInfo[currency]?.flag || '💰'}</span>
            <span class="currency-amount">${formatCurrency(amount, currency)}</span>
        </div>`;
    }).join('');
    
    currenciesScroll.innerHTML = totalsHTML;
    console.log('✅ Totales actualizados');
}

function formatCurrency(amount, currency) {
    try {
        return new Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }).format(amount);
    } catch (error) {
        return `${amount.toFixed(2)} ${currency}`;
    }
}

// ===== FUNCIONES DE DETALLE DE META =====
function openGoalDetail(goalId) {
    console.log('📊 Abriendo detalle de meta:', goalId);
    currentGoalId = goalId;
    const goal = goals.find(g => g.id === goalId);
    if (!goal) return;
    
    const modal = document.getElementById("goal-detail-modal");
    if (!modal) return;
    
    // Actualizar contenido del modal
    const nameElement = document.getElementById("detail-goal-name");
    const savedElement = document.getElementById("detail-saved-amount");
    const targetElement = document.getElementById("detail-target-amount");
    const t = translations[settings.language] || translations.es;
    
    if (nameElement) nameElement.textContent = goal.name;
    if (savedElement) savedElement.textContent = formatCurrency(goal.currentAmount, goal.currency);
    if (targetElement) targetElement.textContent = goal.targetAmount > 0 ? formatCurrency(goal.targetAmount, goal.currency) : t['no-limit'];
    
    // Actualizar imagen con formato más ancho
    const imageContainer = document.getElementById("detail-goal-image");
    if (imageContainer) {
        // Remover clase enlarged si existe
        imageContainer.classList.remove('enlarged');
        
        if (goal.image) {
            imageContainer.innerHTML = `<img src="${goal.image}" alt="${goal.name}">`;
            
            // Agregar evento de clic para zoom más ancho
            imageContainer.onclick = function() {
                imageContainer.classList.toggle('enlarged');
            };
        } else {
            imageContainer.innerHTML = `<div class="goal-icon">💰</div>`;
            imageContainer.onclick = null; // Remover evento si no hay imagen
        }
    }
    
    // Actualizar progreso
    if (goal.targetAmount > 0) {
        const progress = Math.min((goal.currentAmount / goal.targetAmount) * 100, 100);
        const remaining = Math.max(goal.targetAmount - goal.currentAmount, 0);
        
        const progressFill = document.getElementById("detail-progress-fill");
        const progressPercentage = document.getElementById("detail-progress-percentage");
        const remainingAmount = document.getElementById("detail-remaining-amount");
        
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressPercentage) progressPercentage.textContent = `${progress.toFixed(1)}%`;
        if (remainingAmount) remainingAmount.textContent = remaining > 0 ? `${t['remaining']} ${formatCurrency(remaining, goal.currency)}` : t['goal-reached'];
    }
    
    // Actualizar transacciones
    updateTransactionsList(goal);
    
    modal.style.display = "flex";
}

function closeGoalDetail() {
    const modal = document.getElementById("goal-detail-modal");
    if (modal) {
        modal.style.display = "none";
        currentGoalId = null;
    }
}

// ===== FUNCIONES DE DINERO (NOMBRES CORREGIDOS) =====
function showAddMoney() {
    console.log('💰 Abriendo agregar dinero...');
    currentMoneyAction = 'add';
    const titleElement = document.getElementById("money-modal-title");
    const t = translations[settings.language] || translations.es;
    if (titleElement) titleElement.textContent = t['add-money'];
    
    const amountInput = document.getElementById("money-amount");
    const noteInput = document.getElementById("money-note");
    if (amountInput) amountInput.value = "";
    if (noteInput) noteInput.value = "";
    
    const modal = document.getElementById("money-modal");
    if (modal) modal.style.display = "flex";
}

function showRemoveMoney() {
    console.log('💰 Abriendo quitar dinero...');
    currentMoneyAction = 'remove';
    const titleElement = document.getElementById("money-modal-title");
    const t = translations[settings.language] || translations.es;
    if (titleElement) titleElement.textContent = t['remove-money'];
    
    const amountInput = document.getElementById("money-amount");
    const noteInput = document.getElementById("money-note");
    if (amountInput) amountInput.value = "";
    if (noteInput) noteInput.value = "";
    
    const modal = document.getElementById("money-modal");
    if (modal) modal.style.display = "flex";
}

function closeMoneyModal() {
    const modal = document.getElementById("money-modal");
    if (modal) modal.style.display = "none";
    currentMoneyAction = null;
}

function saveMoneyTransaction() {
    const amountInput = document.getElementById("money-amount");
    const noteInput = document.getElementById("money-note");
    const t = translations[settings.language] || translations.es;
    
    if (!amountInput) return;
    
    const amount = parseFormattedNumber(amountInput.value);
    const note = noteInput ? noteInput.value.trim() : "";
    
    if (!amount || amount <= 0) {
        console.warn('⚠️ Cantidad válida requerida');
        return;
    }
    
    const goal = goals.find(g => g.id === currentGoalId);
    if (!goal) return;
    
    const transaction = {
        id: Date.now(),
        amount: currentMoneyAction === 'add' ? amount : -amount,
        note: note || (currentMoneyAction === 'add' ? t['added'] : t['removed']),
        date: new Date().toISOString(),
        type: currentMoneyAction
    };
    
    // Actualizar cantidad actual
    if (currentMoneyAction === 'add') {
        goal.currentAmount += amount;
    } else {
        goal.currentAmount = Math.max(0, goal.currentAmount - amount);
    }
    
    // Agregar transacción
    if (!goal.transactions) goal.transactions = [];
    goal.transactions.unshift(transaction);
    
    // Guardar y actualizar UI
    saveToStorage();
    updateGoalsUI();
    updateTotals();
    
    // Actualizar modal de detalle si está abierto
    const detailModal = document.getElementById("goal-detail-modal");
    if (detailModal && detailModal.style.display === "flex") {
        openGoalDetail(currentGoalId);
    }
    
    closeMoneyModal();
    console.log(`✅ ${currentMoneyAction === 'add' ? t['added'] : t['removed']}: ${formatCurrency(amount, goal.currency)}`);
}

// ===== FUNCIONES DE EDICIÓN (NOMBRE CORREGIDO) =====
function openEditGoal() {
    console.log('✏️ Abriendo editar meta...');
    const goal = goals.find(g => g.id === currentGoalId);
    if (!goal) return;
    
    const nameInput = document.getElementById("edit-goal-name");
    const amountInput = document.getElementById("edit-goal-amount");
    const currencySelect = document.getElementById("edit-goal-currency");
    const imagePreview = document.getElementById("edit-image-preview");
    
    if (nameInput) nameInput.value = goal.name;
    if (amountInput) amountInput.value = goal.targetAmount;
    
    // Configurar select de monedas
    if (currencySelect) {
        currencySelect.innerHTML = Object.entries(currencyInfo).map(([code, info]) => 
            `<option value="${code}">${info.flag} ${code} - ${info.name}</option>`
        ).join('');
        currencySelect.value = goal.currency;
    }
    
    // Mostrar imagen actual o placeholder
    if (imagePreview) {
        if (goal.image) {
            imagePreview.innerHTML = `<img src="${goal.image}" alt="${goal.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">`;
        } else {
            imagePreview.innerHTML = `
                <div class="upload-placeholder">
                    <span class="upload-icon">📷</span>
                    <span>Toca para cambiar imagen</span>
                </div>
            `;
        }
    }
    
    const modal = document.getElementById("edit-goal-modal");
    if (modal) modal.style.display = "flex";
}

function closeEditGoal() {
    const modal = document.getElementById("edit-goal-modal");
    if (modal) modal.style.display = "none";
}

function saveEditGoal() {
    const goal = goals.find(g => g.id === currentGoalId);
    if (!goal) return;
    
    const nameInput = document.getElementById("edit-goal-name");
    const amountInput = document.getElementById("edit-goal-amount");
    const currencySelect = document.getElementById("edit-goal-currency");
    const imageInput = document.getElementById("edit-goal-image");
    const t = translations[settings.language] || translations.es;
    
    if (!nameInput) return;
    
    const name = nameInput.value.trim();
    const amount = amountInput ? parseFormattedNumber(amountInput.value) || 0 : 0;
    const currency = currencySelect ? currencySelect.value : goal.currency;
    const imageFile = imageInput ? imageInput.files[0] : null;
    
    if (!name) {
        alert(t['enter-goal-name']);
        return;
    }
    
    // Función para actualizar la meta
    function updateGoal() {
        goal.name = name;
        goal.targetAmount = amount;
        goal.currency = currency;
        
        saveToStorage();
        updateGoalsUI();
        updateTotals();
        closeEditGoal();
        
        // Actualizar modal de detalle si está abierto
        const detailModal = document.getElementById("goal-detail-modal");
        if (detailModal && detailModal.style.display === "flex") {
            openGoalDetail(currentGoalId);
        }
        
        console.log('✅ Meta editada');
    }
    
    // Si hay una nueva imagen, procesarla
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            goal.image = e.target.result;
            updateGoal();
        };
        reader.readAsDataURL(imageFile);
    } else {
        // Si no hay nueva imagen, mantener la actual
        updateGoal();
    }
}

// ===== FUNCIONES DE ELIMINACIÓN =====
function confirmDeleteGoal(goalId = currentGoalId) {
    console.log('🔍 Confirmando eliminación...');
    console.log('goalId recibido:', goalId);
    console.log('currentGoalId actual:', currentGoalId);
    
    if (!goalId) {
        console.error('❌ No se proporcionó goalId');
        return;
    }
    
    const goal = goals.find(g => g.id === goalId);
    if (!goal) {
        console.error('❌ No se encontró la meta con ID:', goalId);
        return;
    }
    
    console.log('Meta encontrada:', goal.name);
    currentGoalId = goalId;
    console.log('currentGoalId establecido a:', currentGoalId);
    
    const nameElement = document.getElementById("delete-goal-name");
    if (nameElement) nameElement.textContent = goal.name;
    
    const modal = document.getElementById("confirm-delete-modal");
    if (modal) {
        modal.style.display = "flex";
        console.log('✅ Modal de confirmación mostrado');
    } else {
        console.error('❌ No se encontró el modal de confirmación');
    }
}

function closeConfirmDelete() {
    const modal = document.getElementById("confirm-delete-modal");
    if (modal) modal.style.display = "none";
    currentGoalId = null;
}

function deleteGoal() {
    console.log('🗑️ Intentando eliminar meta...');
    console.log('currentGoalId:', currentGoalId);
    console.log('goals antes:', goals.length);
    
    if (!currentGoalId) {
        console.error('❌ No hay currentGoalId');
        return;
    }
    
    const goalIndex = goals.findIndex(g => g.id === currentGoalId);
    console.log('goalIndex encontrado:', goalIndex);
    
    if (goalIndex > -1) {
        const goalToDelete = goals[goalIndex];
        console.log('Meta a eliminar:', goalToDelete.name);
        
        goals.splice(goalIndex, 1);
        console.log('goals después:', goals.length);
        
        saveToStorage();
        updateGoalsUI();
        updateTotals();
        
        // Cerrar modales abiertos
        closeConfirmDelete();
        closeGoalDetail();
        
        console.log('✅ Meta eliminada exitosamente');
        
        // Eliminar el alert molesto
    } else {
        console.error('❌ No se encontró la meta con ID:', currentGoalId);
    }
}

// ===== FUNCIONES AUXILIARES =====
function updateTransactionsList(goal) {
    const container = document.getElementById("transactions-list");
    if (!container) return;
    const t = translations[settings.language] || translations.es;
    
    if (!goal.transactions || goal.transactions.length === 0) {
        container.innerHTML = '<p class="no-transactions">No hay transacciones aún</p>';
        return;
    }
    
    container.innerHTML = goal.transactions.map(transaction => {
        const date = new Date(transaction.date).toLocaleDateString();
        const time = new Date(transaction.date).toLocaleTimeString();
        const isPositive = transaction.amount > 0;
        
        return `
            <div class="transaction-item ${isPositive ? 'positive' : 'negative'}">
                <div class="transaction-info">
                    <span class="transaction-amount">${isPositive ? '+' : ''}${formatCurrency(Math.abs(transaction.amount), goal.currency)}</span>
                    <span class="transaction-note">${transaction.note}</span>
                </div>
                <div class="transaction-date">
                    <span>${date}</span>
                    <span>${time}</span>
                </div>
            </div>
        `;
    }).join('');
}

function handleImageUpload(event) {
    const file = event.target.files[0];
    const preview = document.getElementById("image-preview");
    
    if (file && preview) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="Meta" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">`;
        };
        reader.readAsDataURL(file);
    }
}

// Función para manejar carga de imagen en modal de edición
function handleEditImageUpload(event) {
    const file = event.target.files[0];
    const preview = document.getElementById("edit-image-preview");
    
    if (file && preview) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.innerHTML = `<img src="${e.target.result}" alt="Meta" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">`;
        };
        reader.readAsDataURL(file);
    }
}

// ===== EVENTOS GLOBALES =====
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}



// ===== FUNCIONES DE EXPORTACIÓN E IMPORTACIÓN =====
function exportData() {
    const data = {
        goals: goals,
        settings: settings,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `metas-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(link.href);
}

function importData() {
    const fileInput = document.getElementById('import-file');
    fileInput.click();
}

function handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.goals && Array.isArray(data.goals)) {
                goals = data.goals;
                localStorage.setItem('miAhorroMetas', JSON.stringify(goals));
            }
            
            if (data.settings && typeof data.settings === 'object') {
                settings = { ...settings, ...data.settings };
                localStorage.setItem('miAhorroSettings', JSON.stringify(settings));
                updateUILanguage();
            }
            
            updateGoalsUI();
            updateTotals();
            
            const t = translations[settings.language] || translations.es;
            alert(t['import'] + ' completado exitosamente');
        } catch (error) {
            alert('Error al importar el archivo. Verifique que sea un archivo JSON válido.');
        }
    };
    reader.readAsText(file);
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando aplicación...');
    loadFromStorage();
    updateGoalsUI();
    updateTotals();
    updateUILanguage(); // Actualizar la interfaz con el idioma guardado
    
    // Configurar formateo de números para todos los inputs de cantidad
    setupNumberFormatting('goal-amount');
    setupNumberFormatting('money-amount');
    setupNumberFormatting('edit-goal-amount');
    
    // Configurar drag and drop después de cargar las metas
    setupDragAndDrop();
    
    // Configurar botones de exportación e importación
    document.getElementById('export-btn').addEventListener('click', exportData);
    document.getElementById('import-btn').addEventListener('click', importData);
    document.getElementById('import-file').addEventListener('change', handleFileImport);
    
    console.log('✅ Aplicación inicializada correctamente');
});

// Variables globales para drag and drop
let draggedElement = null;
let startY = 0;
let currentY = 0;
let initialIndex = -1;
let isDragging = false;
let touchTimeout = null;
let dragStartTime = 0;
let isLongPress = false;

// Funciones para drag and drop con soporte táctil y mouse
function setupDragAndDrop() {
    const goalCards = document.querySelectorAll('.goal-card');
    console.log('🔧 Configurando drag táctil y mouse para', goalCards.length, 'tarjetas');
    
    goalCards.forEach((card, index) => {
        const dragHandle = card.querySelector('.drag-handle');
        
        if (!dragHandle) {
            console.warn('❌ No drag-handle en tarjeta', index);
            return;
        }
        
        // Limpiar eventos anteriores
        dragHandle.replaceWith(dragHandle.cloneNode(true));
        const newHandle = card.querySelector('.drag-handle');
        
        // Eventos táctiles
        newHandle.addEventListener('touchstart', function(e) {
            startDragWithLongPress(e, card, 'touch');
        }, { passive: false });
        
        // Eventos de mouse
        newHandle.addEventListener('mousedown', function(e) {
            startDragWithLongPress(e, card, 'mouse');
        }, { passive: false });
        
        // Prevenir comportamientos por defecto
        newHandle.addEventListener('click', function(e) {
            if (isLongPress) {
                e.preventDefault();
                e.stopPropagation();
            }
        });
        
        newHandle.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });
    });
}

function startDragWithLongPress(e, card, inputType) {
    e.preventDefault();
    e.stopPropagation();
    
    const handle = card.querySelector('.drag-handle');
    const currentIndex = parseInt(card.dataset.index);
    
    console.log('🎯 Iniciando long press para meta', currentIndex, 'tipo:', inputType);
    
    // Reset variables
    isLongPress = false;
    dragStartTime = Date.now();
    
    // Obtener posición inicial
    const clientY = inputType === 'touch' ? e.touches[0].clientY : e.clientY;
    startY = clientY;
    currentY = clientY;
    
    // Feedback visual inmediato
    handle.classList.add('pressing');
    
    // Timer para activar drag (300ms para mouse, 500ms para touch)
    const longPressDelay = inputType === 'mouse' ? 300 : 500;
    
    touchTimeout = setTimeout(() => {
        console.log('✅ Long press activado!');
        isLongPress = true;
        
        // Cambiar estado visual
        handle.classList.remove('pressing');
        handle.classList.add('drag-active');
        card.classList.add('dragging');
        
        // Vibración solo para touch
        if (inputType === 'touch' && navigator.vibrate) {
            navigator.vibrate(50);
        }
        
        // Configurar variables de drag
        draggedElement = card;
        initialIndex = currentIndex;
        isDragging = true;
        
        // Configurar eventos de movimiento según el tipo de input
        if (inputType === 'touch') {
            document.addEventListener('touchmove', handleMove, { passive: false });
            document.addEventListener('touchend', finalizeDrag, { once: true });
        } else {
            document.addEventListener('mousemove', handleMove, { passive: false });
            document.addEventListener('mouseup', finalizeDrag, { once: true });
        }
        
    }, longPressDelay);
    
    // Función para cancelar el long press
    function cancelLongPress() {
        if (touchTimeout) {
            clearTimeout(touchTimeout);
            touchTimeout = null;
        }
        handle.classList.remove('pressing', 'drag-active');
        card.classList.remove('dragging');
        console.log('❌ Long press cancelado');
    }
    
    // Eventos para cancelar el long press
    if (inputType === 'touch') {
        const cancelEvents = ['touchend', 'touchcancel', 'touchmove'];
        cancelEvents.forEach(eventType => {
            document.addEventListener(eventType, function cancelHandler(e) {
                if (eventType === 'touchmove') {
                    const moveY = e.touches[0].clientY;
                    const distance = Math.abs(moveY - startY);
                    if (distance > 10) { // Si se mueve más de 10px, cancelar
                        cancelLongPress();
                        cancelEvents.forEach(et => {
                            document.removeEventListener(et, cancelHandler);
                        });
                    }
                } else {
                    if (!isDragging) {
                        cancelLongPress();
                    }
                    cancelEvents.forEach(et => {
                        document.removeEventListener(et, cancelHandler);
                    });
                }
            }, { once: eventType !== 'touchmove' });
        });
    } else {
        const cancelEvents = ['mouseup', 'mouseleave', 'mousemove'];
        cancelEvents.forEach(eventType => {
            document.addEventListener(eventType, function cancelHandler(e) {
                if (eventType === 'mousemove') {
                    const distance = Math.abs(e.clientY - startY);
                    if (distance > 10) {
                        cancelLongPress();
                        cancelEvents.forEach(et => {
                            document.removeEventListener(et, cancelHandler);
                        });
                    }
                } else {
                    if (!isDragging) {
                        cancelLongPress();
                    }
                    cancelEvents.forEach(et => {
                        document.removeEventListener(et, cancelHandler);
                    });
                }
            }, { once: eventType !== 'mousemove' });
        });
    }
}

function handleMove(e) {
    if (!isDragging || !draggedElement) return;
    
    e.preventDefault();
    
    // Obtener posición actual
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    currentY = clientY;
    
    // Calcular desplazamiento con límite más suave
    const deltaY = currentY - startY;
    const limitedDelta = Math.max(-50, Math.min(50, deltaY * 0.3)); // Limitar a ±50px y reducir sensibilidad
    
    // Mover visualmente el elemento con transformación más sutil
    draggedElement.style.transform = `translateY(${limitedDelta}px) scale(1.02)`;
    draggedElement.style.zIndex = '1000';
    
    // Detectar elemento objetivo
    const goalCards = Array.from(document.querySelectorAll('.goal-card'));
    const draggedIndex = goalCards.indexOf(draggedElement);
    
    let targetCard = null;
    let targetIndex = -1;
    
    // Buscar la tarjeta sobre la que estamos con zona más amplia
    for (let i = 0; i < goalCards.length; i++) {
        if (i === draggedIndex) continue;
        
        const card = goalCards[i];
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const threshold = rect.height * 0.3; // 30% del alto de la tarjeta
        
        // Verificar si estamos en la zona de intercambio
        if (Math.abs(clientY - cardCenter) < threshold) {
            targetCard = card;
            targetIndex = i;
            break;
        }
    }
    
    // Si encontramos un objetivo válido, intercambiar
    if (targetCard && targetIndex !== draggedIndex) {
        console.log(`🔄 Intercambiando posición ${draggedIndex} con ${targetIndex}`);
        
        // Intercambiar en el array de goals
        const temp = goals[draggedIndex];
        goals[draggedIndex] = goals[targetIndex];
        goals[targetIndex] = temp;
        
        // Actualizar UI manteniendo el estado de drag
        updateGoalsUIKeepDrag(draggedElement.dataset.goalId);
        
        // Actualizar referencia del elemento arrastrado
        draggedElement = document.querySelector(`[data-goal-id="${draggedElement.dataset.goalId}"]`);
        
        // Aplicar el estado visual nuevamente
        draggedElement.style.transform = `translateY(${limitedDelta}px) scale(1.02)`;
        draggedElement.style.zIndex = '1000';
        draggedElement.classList.add('dragging');
        
        // Vibración de feedback más suave
        if (e.type.includes('touch') && navigator.vibrate) {
            navigator.vibrate(20);
        }
    }
}

function finalizeDrag(e) {
    console.log('🏁 Finalizando drag');
    
    // Limpiar timeout si existe
    if (touchTimeout) {
        clearTimeout(touchTimeout);
        touchTimeout = null;
    }
    
    // Remover event listeners
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('touchend', finalizeDrag);
    document.removeEventListener('mouseup', finalizeDrag);
    
    if (draggedElement) {
        // Restaurar estilos
        draggedElement.style.transform = '';
        draggedElement.style.zIndex = '';
        
        // Remover clases de estado
        const handle = draggedElement.querySelector('.drag-handle');
        if (handle) {
            handle.classList.remove('pressing', 'drag-active');
        }
        draggedElement.classList.remove('dragging');
        
        // Vibración de confirmación (solo touch)
        if (e.type.includes('touch') && navigator.vibrate) {
            navigator.vibrate([30, 50, 30]);
        }
    }
    
    // Guardar cambios y actualizar UI
    if (isDragging) {
        saveToStorage();
        updateGoalsUI();
        console.log('✅ Cambios guardados');
    }
    
    // Reset variables
    draggedElement = null;
    isDragging = false;
    isLongPress = false;
    startY = 0;
    currentY = 0;
    initialIndex = -1;
}

function updateGoalsUIKeepDrag(keepDragId) {
    const container = document.getElementById('goals-container');
    
    // Guardar estado del elemento que se está arrastrando
    let draggedElementState = null;
    if (keepDragId) {
        const draggedEl = document.querySelector(`[data-goal-id="${keepDragId}"]`);
        if (draggedEl) {
            draggedElementState = {
                transform: draggedEl.style.transform,
                zIndex: draggedEl.style.zIndex,
                classes: Array.from(draggedEl.classList)
            };
        }
    }
    
    // Actualizar UI normal
    updateGoalsUI();
    
    // Restaurar estado del elemento arrastrado
    if (keepDragId && draggedElementState) {
        const newDraggedEl = document.querySelector(`[data-goal-id="${keepDragId}"]`);
        if (newDraggedEl) {
            newDraggedEl.style.transform = draggedElementState.transform;
            newDraggedEl.style.zIndex = draggedElementState.zIndex;
            newDraggedEl.className = draggedElementState.classes.join(' ');
        }
    }
}

function moveGoal(fromIndex, toIndex) {
    if (toIndex < 0 || toIndex >= goals.length || fromIndex === toIndex) {
        return;
    }
    
    console.log(`🔄 Moviendo meta de posición ${fromIndex} a ${toIndex}`);
    
    // Mover en el array
    const goal = goals.splice(fromIndex, 1)[0];
    goals.splice(toIndex, 0, goal);
    
    // Vibración de confirmación
    if (navigator.vibrate) {
        navigator.vibrate([30, 50, 30]);
    }
    
    // Guardar y actualizar
    saveToStorage();
    updateGoalsUI();
    
    console.log('✅ Meta movida exitosamente');
}

// Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

console.log('🎯 Script cargado correctamente - Versión LIMPIA');

// Función para obtener traducción
function t(key) {
    return translations[settings.language]?.[key] || translations.es[key] || key;
}

// Función para actualizar toda la interfaz con traducciones
function updateUILanguage() {
    // Actualizar título de la página
    document.title = t('app-title');
    
    // Header
    const headerTitle = document.querySelector('.header-left h1');
    if (headerTitle) headerTitle.textContent = t('total-savings');
    
    // Sección de totales
    const totalSavedTitle = document.querySelector('.totals-section h2');
    if (totalSavedTitle) totalSavedTitle.textContent = t('total-saved');
    
    const emptyTotals = document.querySelector('.empty-totals p');
    if (emptyTotals) emptyTotals.textContent = t('create-first-goal');
    
    // Sección de metas
    const myGoalsTitle = document.querySelector('.section-header h2');
    if (myGoalsTitle) myGoalsTitle.textContent = t('my-goals');
    
    // Modal de configuración
    updateSettingsModal();
    
    // Modal de nueva meta
    updateNewGoalModal();
    
    // Modal de detalle
    updateGoalDetailModal();
    
    // Modal de dinero
    updateMoneyModal();
    
    // Modal de editar
    updateEditGoalModal();
    
    // Modal de confirmación
    updateConfirmDeleteModal();
}

function updateSettingsModal() {
    const settingsTitle = document.querySelector('#settings-modal .modal-title');
    if (settingsTitle) settingsTitle.textContent = t('settings');
    
    const languageLabel = document.querySelector('#settings-modal h4');
    if (languageLabel) languageLabel.textContent = t('language');
    
    const currencyLabel = document.querySelectorAll('#settings-modal h4')[1];
    if (currencyLabel) currencyLabel.textContent = t('main-currency');
    
    const cancelBtn = document.querySelector('#settings-modal .btn-secondary');
    if (cancelBtn) cancelBtn.textContent = t('cancel');
    
    const saveBtn = document.querySelector('#settings-modal .btn-primary');
    if (saveBtn) saveBtn.textContent = t('save-changes');
}

function updateNewGoalModal() {
    const newGoalTitle = document.querySelector('#add-goal-modal .modal-title');
    if (newGoalTitle) newGoalTitle.textContent = t('new-goal');
    
    const goalNameLabel = document.querySelector('label[for="goal-name"]');
    if (goalNameLabel) goalNameLabel.textContent = t('goal-name');
    
    const goalNameInput = document.getElementById('goal-name');
    if (goalNameInput) goalNameInput.placeholder = t('goal-name-placeholder');
    
    const goalAmountLabel = document.querySelector('label[for="goal-amount"]');
    if (goalAmountLabel) goalAmountLabel.textContent = t('target-amount');
    
    const currencyLabel = document.querySelector('label[for="goal-currency"]');
    if (currencyLabel) currencyLabel.textContent = t('currency');
    
    const imageLabel = document.querySelector('#add-goal-modal .form-group:last-of-type label');
    if (imageLabel) imageLabel.textContent = t('image-optional');
    
    const uploadText = document.querySelector('#add-goal-modal .upload-placeholder span:last-child');
    if (uploadText) uploadText.textContent = t('tap-add-image');
    
    const cancelBtn = document.querySelector('#add-goal-modal .btn-secondary');
    if (cancelBtn) cancelBtn.textContent = t('cancel');
    
    const saveBtn = document.querySelector('#add-goal-modal .btn-primary');
    if (saveBtn) saveBtn.textContent = t('save-goal');
}

function updateGoalDetailModal() {
    const detailTitle = document.querySelector('#goal-detail-modal .modal-title');
    if (detailTitle) detailTitle.textContent = t('goal-detail');
    
    const savedLabel = document.querySelector('.amount-box .amount-label');
    if (savedLabel) savedLabel.textContent = t('saved');
    
    const targetLabel = document.querySelectorAll('.amount-box .amount-label')[1];
    if (targetLabel) targetLabel.textContent = t('target');
    
    const addBtn = document.querySelector('.btn-add');
    if (addBtn) addBtn.textContent = t('add');
    
    const removeBtn = document.querySelector('.btn-remove');
    if (removeBtn) removeBtn.textContent = t('remove');
    
    const editBtn = document.querySelector('.btn-edit');
    if (editBtn) editBtn.textContent = t('edit');
    
    const historyTitle = document.querySelector('.transactions-section h4');
    if (historyTitle) historyTitle.textContent = t('transaction-history');
}

function updateMoneyModal() {
    const amountLabel = document.querySelector('label[for="money-amount"]');
    if (amountLabel) amountLabel.textContent = t('amount');
    
    const noteLabel = document.querySelector('label[for="money-note"]');
    if (noteLabel) noteLabel.textContent = t('note-optional');
    
    const noteInput = document.getElementById('money-note');
    if (noteInput) noteInput.placeholder = t('note-placeholder');
    
    const cancelBtn = document.querySelector('#money-modal .btn-secondary');
    if (cancelBtn) cancelBtn.textContent = t('cancel');
    
    const confirmBtn = document.querySelector('#money-modal .btn-primary');
    if (confirmBtn) confirmBtn.textContent = t('confirm');
}

function updateEditGoalModal() {
    const editTitle = document.querySelector('#edit-goal-modal .modal-title');
    if (editTitle) editTitle.textContent = t('edit-goal');
    
    const nameLabel = document.querySelector('label[for="edit-goal-name"]');
    if (nameLabel) nameLabel.textContent = t('goal-name-edit');
    
    const amountLabel = document.querySelector('label[for="edit-goal-amount"]');
    if (amountLabel) amountLabel.textContent = t('target-amount-edit');
    
    const currencyLabel = document.querySelector('label[for="edit-goal-currency"]');
    if (currencyLabel) currencyLabel.textContent = t('currency');
    
    const imageLabel = document.querySelector('#edit-goal-modal .form-group:last-of-type label');
    if (imageLabel) imageLabel.textContent = t('image');
    
    const uploadText = document.querySelector('#edit-goal-modal .upload-placeholder span:last-child');
    if (uploadText) uploadText.textContent = t('tap-change-image');
    
    const cancelBtn = document.querySelector('#edit-goal-modal .btn-secondary');
    if (cancelBtn) cancelBtn.textContent = t('cancel');
    
    const saveBtn = document.querySelector('#edit-goal-modal .btn-primary');
    if (saveBtn) saveBtn.textContent = t('save');
}

function updateConfirmDeleteModal() {
    const deleteTitle = document.querySelector('#confirm-delete-modal .modal-title');
    if (deleteTitle) deleteTitle.textContent = t('confirm-delete');
    
    const confirmText = document.querySelector('#confirm-delete-modal p:first-of-type');
    if (confirmText) confirmText.textContent = t('delete-confirmation');
    
    const undoableText = document.querySelector('#confirm-delete-modal p:last-of-type strong');
    if (undoableText) undoableText.textContent = t('action-undoable');
    
    const cancelBtn = document.querySelector('#confirm-delete-modal .btn-secondary');
    if (cancelBtn) cancelBtn.textContent = t('cancel');
    
    const deleteBtn = document.querySelector('#confirm-delete-modal .btn-danger');
    if (deleteBtn) deleteBtn.textContent = t('delete');
}