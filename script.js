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
        'total-savings': '💰 total ahorros',
        'total-saved': 'Total Ahorrado',
        'my-goals': 'Mis Metas',
        'start-saving-adventure': '¡Comienza tu aventura de ahorro!',
        'tap-plus-button': 'Toca el botón + para crear tu primera meta',
        'create-first-goal': 'Crea tu primera meta para ver tus ahorros',
        'no-limit': 'Sin límite',
        'goal-reached': '¡Meta alcanzada!',
        
        // Configuración
        'settings': 'Configuración',
        'language': 'Idioma',
        'main-currency': 'Moneda Principal',
        'cancel': 'Cancelar',
        'save-changes': 'Guardar Cambios',
        'settings-saved': '¡Configuración guardada!',
        
        // Nueva meta
        'new-goal': 'Nueva Meta',
        'goal-name': 'Nombre de la meta *',
        'goal-name-placeholder': 'Ej: Vacaciones, Auto nuevo...',
        'target-amount': 'Cantidad objetivo (opcional)',
        'currency': 'Moneda',
        'image-optional': 'Imagen (opcional)',
        'tap-add-image': 'Toca para agregar imagen',
        'save-goal': 'Guardar Meta',
        'enter-goal-name': 'Por favor ingresa un nombre para la meta',
        
        // Detalle de meta
        'goal-detail': 'Detalle de Meta',
        'saved': 'Ahorrado',
        'target': 'Objetivo',
        'add': 'Agregar',
        'remove': 'Quitar',
        'edit': 'Editar',
        'transaction-history': 'Historial de Transacciones',
        
        // Agregar/Quitar dinero
        'add-money': 'Agregar Dinero',
        'remove-money': 'Quitar Dinero',
        'amount': 'Cantidad',
        'note-optional': 'Nota (opcional)',
        'note-placeholder': 'Ej: Ahorro del mes, Regalo...',
        'confirm': 'Confirmar',
        
        // Editar meta
        'edit-goal': 'Editar Meta',
        'goal-name-edit': 'Nombre de la meta',
        'target-amount-edit': 'Cantidad objetivo',
        'image': 'Imagen',
        'tap-change-image': 'Toca para cambiar imagen',
        'save': 'Guardar',
        
        // Eliminar
        'confirm-delete': 'Confirmar Eliminación',
        'delete-confirmation': '¿Estás seguro de que quieres eliminar esta meta?',
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
        'start-saving-adventure': 'Start your savings adventure!',
        'tap-plus-button': 'Tap the + button to create your first goal',
        'create-first-goal': 'Create your first goal to see your savings',
        'no-limit': 'No limit',
        'goal-reached': 'Goal reached!',
        
        // Settings
        'settings': 'Settings',
        'language': 'Language',
        'main-currency': 'Main Currency',
        'cancel': 'Cancel',
        'save-changes': 'Save Changes',
        'settings-saved': 'Settings saved!',
        
        // New goal
        'new-goal': 'New Goal',
        'goal-name': 'Goal name *',
        'goal-name-placeholder': 'Ex: Vacation, New car...',
        'target-amount': 'Target amount (optional)',
        'currency': 'Currency',
        'image-optional': 'Image (optional)',
        'tap-add-image': 'Tap to add image',
        'save-goal': 'Save Goal',
        'enter-goal-name': 'Please enter a goal name',
        
        // Goal detail
        'goal-detail': 'Goal Detail',
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
        'note-placeholder': 'Ex: Monthly savings, Gift...',
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
        'app-title': 'MinhaEconomia - Suas Metas de Economia',
        'total-savings': '💰 total economias',
        'total-saved': 'Total Economizado',
        'my-goals': 'Minhas Metas',
        'start-saving-adventure': 'Comece sua aventura de economia!',
        'tap-plus-button': 'Toque no botão + para criar sua primeira meta',
        'create-first-goal': 'Crie sua primeira meta para ver suas economias',
        'no-limit': 'Sem limite',
        'goal-reached': 'Meta alcançada!',
        
        // Configurações
        'settings': 'Configurações',
        'language': 'Idioma',
        'main-currency': 'Moeda Principal',
        'cancel': 'Cancelar',
        'save-changes': 'Salvar Alterações',
        'settings-saved': 'Configurações salvas!',
        
        // Nova meta
        'new-goal': 'Nova Meta',
        'goal-name': 'Nome da meta *',
        'goal-name-placeholder': 'Ex: Férias, Carro novo...',
        'target-amount': 'Valor objetivo (opcional)',
        'currency': 'Moeda',
        'image-optional': 'Imagem (opcional)',
        'tap-add-image': 'Toque para adicionar imagem',
        'save-goal': 'Salvar Meta',
        'enter-goal-name': 'Por favor, insira um nome para a meta',
        
        // Detalhe da meta
        'goal-detail': 'Detalhe da Meta',
        'saved': 'Economizado',
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
        'note-placeholder': 'Ex: Economia do mês, Presente...',
        'confirm': 'Confirmar',
        
        // Editar meta
        'edit-goal': 'Editar Meta',
        'goal-name-edit': 'Nome da meta',
        'target-amount-edit': 'Valor objetivo',
        'image': 'Imagem',
        'tap-change-image': 'Toque para alterar imagem',
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
    
    if (nameInput) nameInput.value = "";
    if (amountInput) amountInput.value = "";
    if (currencySelect) currencySelect.value = settings.currency || "USD";
    if (imageInput) imageInput.value = "";
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
    const amount = parseFloat(amountInput.value) || 0;
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
    
    container.innerHTML = goals.map(goal => {
        const progress = goal.targetAmount > 0 ? Math.min((goal.currentAmount / goal.targetAmount) * 100, 100) : 0;
        const remaining = goal.targetAmount > 0 ? Math.max(goal.targetAmount - goal.currentAmount, 0) : 0;
        const t = translations[settings.language] || translations.es;
        
        return `
            <div class="goal-card" onclick="openGoalDetail(${goal.id})" ontouchstart="showDeleteOption(${goal.id}, event)" ontouchend="hideDeleteOption(${goal.id}, event)">
                <button class="delete-btn" onclick="event.stopPropagation(); confirmDeleteGoal(${goal.id});" title="Eliminar meta">
                    ✕
                </button>
                <div class="goal-content">
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
                <div class="delete-overlay" onclick="event.stopPropagation(); confirmDeleteGoal(${goal.id});">
                    <span>🗑️<br>${t['delete']}</span>
                </div>
            </div>
        `;
    }).join('');
    
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
    
    // Actualizar imagen
    const imageContainer = document.getElementById("detail-goal-image");
    if (imageContainer) {
        if (goal.image) {
            imageContainer.innerHTML = `<img src="${goal.image}" alt="${goal.name}">`;
        } else {
            imageContainer.innerHTML = `<div class="goal-icon">💰</div>`;
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
    
    const amount = parseFloat(amountInput.value);
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
    
    if (nameInput) nameInput.value = goal.name;
    if (amountInput) amountInput.value = goal.targetAmount;
    
    // Configurar select de monedas
    if (currencySelect) {
        currencySelect.innerHTML = Object.entries(currencyInfo).map(([code, info]) => 
            `<option value="${code}">${info.flag} ${code} - ${info.name}</option>`
        ).join('');
        currencySelect.value = goal.currency;
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
    const t = translations[settings.language] || translations.es;
    
    if (!nameInput) return;
    
    const name = nameInput.value.trim();
    const amount = amountInput ? parseFloat(amountInput.value) || 0 : 0;
    const currency = currencySelect ? currencySelect.value : goal.currency;
    
    if (!name) {
        alert(t['enter-goal-name']);
        return;
    }
    
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

// ===== EVENTOS GLOBALES =====
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    
    // Ocultar todas las opciones de eliminación al hacer clic en cualquier lugar
    hideAllDeleteOptions();
}

// Funciones para mostrar/ocultar opciones de eliminación
let deleteTimeout;

function showDeleteOption(goalId, event) {
    if (event) event.stopPropagation();
    
    // Limpiar timeout anterior
    if (deleteTimeout) {
        clearTimeout(deleteTimeout);
    }
    
    // Mostrar después de un toque prolongado (500ms)
    deleteTimeout = setTimeout(() => {
        const goalCard = event.target.closest('.goal-card');
        if (goalCard) {
            goalCard.classList.add('show-delete');
            
            // Vibración si está disponible
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        }
    }, 500);
}

function hideDeleteOption(goalId, event) {
    if (event) event.stopPropagation();
    
    // Limpiar timeout
    if (deleteTimeout) {
        clearTimeout(deleteTimeout);
        deleteTimeout = null;
    }
    
    // Ocultar después de un breve delay
    setTimeout(() => {
        const goalCard = event.target.closest('.goal-card');
        if (goalCard) {
            goalCard.classList.remove('show-delete');
        }
    }, 100);
}

// Función para ocultar todas las opciones de eliminación
function hideAllDeleteOptions() {
    const goalCards = document.querySelectorAll('.goal-card');
    goalCards.forEach(card => {
        card.classList.remove('show-delete');
    });
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando aplicación...');
    loadFromStorage();
    updateGoalsUI();
    updateTotals();
    updateUILanguage(); // Actualizar la interfaz con el idioma guardado
    
    // Agregar evento para ocultar opciones de eliminación al tocar fuera
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.goal-card')) {
            hideAllDeleteOptions();
        }
    });
    
    console.log('✅ Aplicación inicializada correctamente');
});

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