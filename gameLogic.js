// ============ BASE DE QUESTIONS ============
const QUESTIONS_DB = {
    easy: [
        { text: "Selon l'ODD 7, quelle est l'ambition pour 2030 concernant l'énergie ?", options: ["Énergie nucléaire pour tous", "Énergie propre, fiable et abordable pour tous", "Énergie gratuite pour tous", "Énergie fossile pour tous"], correct: 1, explanation: "🎯 L'ODD 7 vise une énergie propre, fiable et abordable pour tous d'ici 2030." },
        { text: "Qu'est-ce que l'hydrogène vert ?", options: ["Hydrogène produit à partir de charbon", "Hydrogène produit par électrolyse de l'eau via énergies renouvelables", "Hydrogène naturellement vert", "Hydrogène importé"], correct: 1, explanation: "💚 L'hydrogène vert est produit par électrolyse de l'eau en utilisant des énergies renouvelables." },
        { text: "Quel ODD correspond à 'Villes et communautés durables' ?", options: ["ODD 9", "ODD 11", "ODD 13", "ODD 15"], correct: 1, explanation: "🏙️ L'ODD 11 vise à rendre les villes inclusives, sûres, résilientes et durables." },
        { text: "Qu'est-ce que l'architecture biophilique ?", options: ["Bâtiments connectés à l'IA", "Intégration du vivant dans le bâti (murs végétaux, toits jardins)", "Bâtiments en béton", "Architecture souterraine"], correct: 1, explanation: "🌿 L'architecture biophilique intègre la nature dans les bâtiments : murs végétaux, toits végétalisés." },
        { text: "Quelle est la structure de l'EcoTech Museum ?", options: ["5 salles aléatoires", "3 salles thématiques alignées sur les ODD", "Une seule grande salle", "10 salles interactives"], correct: 1, explanation: "🏛️ L'EcoTech Museum propose 3 salles thématiques alignées sur les ODD de l'ONU." },
        { text: "Quel est l'ADN de l'EcoTech Museum ?", options: ["Art et Commerce", "L'alliance inédite de l'Art, de la Science et de l'Écologie", "Seulement la technologie", "Seulement l'écologie"], correct: 1, explanation: "🎨🔬🌍 L'EcoTech Museum allie Art, Science et Écologie de façon inédite." }
    ],
    medium: [
        { text: "Quel pourcentage de réchauffement moyen depuis l'ère préindustrielle ?", options: ["+0.5°C", "+1.1°C", "+2°C", "+3°C"], correct: 1, explanation: "🌡️ La température moyenne a augmenté de +1.1°C depuis l'ère préindustrielle." },
        { text: "Combien de gigatonnes de CO₂ sont émises par an dans le monde ?", options: ["10 gigatonnes", "25 gigatonnes", "37 gigatonnes", "50 gigatonnes"], correct: 2, explanation: "🏭 Les émissions mondiales de CO₂ atteignent 37 gigatonnes par an." },
        { text: "Combien d'espèces sont menacées d'extinction selon les données ?", options: ["100 000", "500 000", "1 million", "10 millions"], correct: 2, explanation: "🦋 1 million d'espèces sont menacées d'extinction selon les rapports scientifiques." },
        { text: "Combien de réfugiés climatiques sont prévus d'ici 2050 ?", options: ["50 millions", "100 millions", "150 millions", "200 millions"], correct: 2, explanation: "🌊 150 millions de réfugiés climatiques sont attendus d'ici 2050." },
        { text: "Quel est le rendement des nouveaux panneaux solaires pérovskites ?", options: ["+10%", "+20%", "+30%", "+50%"], correct: 2, explanation: "☀️ Les panneaux solaires pérovskites offrent un rendement supérieur de +30%." },
        { text: "Quelles sont les 4R de l'économie circulaire ?", options: ["Réduire, Réutiliser, Recycler, Régénérer", "Rejeter, Rompre, Remplacer, Rayer", "Ralentir, Renoncer, Rabaisser, Remplir", "Rêver, Rire, Ranger, Relire"], correct: 0, explanation: "🔄 Les 4R : Réduire, Réutiliser, Recycler, Régénérer pour une économie circulaire." },
        { text: "Que signifie l'acronyme ODD ?", options: ["Objectifs de Développement Durable", "Organisation pour la Défense Durable", "Observatoire des Données Durables", "Office du Développement Durable"], correct: 0, explanation: "🌍 ODD = Objectifs de Développement Durable de l'ONU (17 objectifs pour 2030)." }
    ],
    hard: [
        { text: "Selon la présentation EcoTech, que menace notre patrimoine culturel ?", options: ["La surpopulation", "La pollution industrielle, la dégradation des espaces physiques et la crise climatique", "La mondialisation", "Le tourisme de masse"], correct: 1, explanation: "⚠️ La pollution industrielle, la dégradation des espaces physiques et la crise climatique menacent notre patrimoine culturel." },
        { text: "Face à la menace du patrimoine culturel, que propose l'EcoTech Museum ?", options: ["La construction de nouveaux musées", "Le numérique comme refuge et outil de résistance", "L'abandon des sites culturels", "La privatisation des monuments"], correct: 1, explanation: "💻 Face aux menaces, le numérique s'impose comme refuge et outil de résistance." },
        { text: "Quelle est l'ambition de l'EcoTech Museum concernant l'accessibilité ?", options: ["Payant pour les experts", "Une expérience immersive ouverte à tous", "Réservé aux chercheurs", "Uniquement en présentiel"], correct: 1, explanation: "🌐 L'EcoTech Museum propose une expérience immersive ouverte à tous, 100% virtuel et engagé." },
        { text: "Qu'est-ce qu'un Smart Grid ?", options: ["Un réseau électrique intelligent qui optimise production, stockage et consommation", "Une grille de données", "Un autoroute connectée", "Un bâtiment autonome"], correct: 0, explanation: "⚡ Les Smart Grids sont des réseaux électriques intelligents qui optimisent l'énergie." },
        { text: "Quelle technologie permet la traçabilité des énergies renouvelables ?", options: ["L'IA", "La Blockchain", "Les capteurs", "Le cloud"], correct: 1, explanation: "🔗 La Blockchain permet la traçabilité des énergies renouvelables de façon transparente." },
        { text: "Selon la mission EcoTech, que représente 'COSMOS' ?", options: ["Un jeu vidéo", "L'immersion pour comprendre, le savoir pour décider, la culture pour sauver la planète", "Un laboratoire scientifique", "Un centre de recherche"], correct: 1, explanation: "🌌 COSMOS : Explorer (immersion pour comprendre), Apprendre (savoir pour décider), Agir (culture pour sauver la planète)." },
        { text: "L'EcoTech Museum se veut :", options: ["100% physique", "100% Virtuel, 100% Engagé", "50% virtuel", "Uniquement pour les écoles"], correct: 1, explanation: "🏛️ EcoTech Museum est 100% Virtuel et 100% Engagé pour la planète." },
        { text: "Quel est le message final de l'aventure EcoTech ?", options: ["La technologie avant tout", "Le changement commence par la prise de conscience", "L'écologie sans technologie", "Le profit d'abord"], correct: 1, explanation: "💚 Le message EcoTech : 'Le changement commence par la prise de conscience.'" }
    ]
};

// Game state (synchronized via localStorage)
let gameState = {
    teams: [],
    currentTeamIndex: null,
    currentDifficulty: null,
    currentQuestion: null,
    waitingForDraw: true,
    gameActive: false,
    usedQuestions: { easy: [], medium: [], hard: [] },
    winner: null,
    gameStarted: false,
    answerLocked: false,
    answerProcessed: false,
    modalVisible: false,
    lastAnswer: {
        isCorrect: false,
        points: 0,
        teamName: "",
        teamEmoji: "",
        correctAnswer: "",
        explanation: "" // Only used by admin
    }
};

let currentMode = null; // 'admin' or 'player'
let playerTeamId = null;
let teamEmojis = ["🌿", "💡", "🌱", "☀️", "♻️", "🔋", "🚲", "🏆", "🌸", "⭐", "🦋", "🍃"];

// DOM Elements
const modeSelector = document.getElementById('modeSelector');
const adminPanel = document.getElementById('adminPanel');
const playerPanel = document.getElementById('playerPanel');
const teamsGrid = document.getElementById('teamsGrid');
const teamsGridPlayer = document.getElementById('teamsGridPlayer');
const currentTeamDisplay = document.getElementById('currentTeamDisplay');
const drawTeamBtn = document.getElementById('drawTeamBtn');
const difficultySelector = document.getElementById('difficultySelector');
const playerRegistration = document.getElementById('playerRegistration');
const playerGameInfo = document.getElementById('playerGameInfo');
const playerTeamNameInput = document.getElementById('playerTeamName');
const joinGameBtn = document.getElementById('joinGameBtn');
const playerWaitingMessage = document.getElementById('playerWaitingMessage');
const resetGameAdminBtn = document.getElementById('resetGameAdminBtn');

// Modal elements
const modal = document.getElementById('questionModal');
const modalTeamName = document.getElementById('modalTeamName');
const modalPoints = document.getElementById('modalPoints');
const modalQuestion = document.getElementById('modalQuestion');
const modalOptions = document.getElementById('modalOptions');
const modalFeedback = document.getElementById('modalFeedback');
const modalCloseBtn = document.getElementById('modalCloseBtn');

// Save game state to localStorage
function saveGameState() {
    localStorage.setItem('ecotech_game_state', JSON.stringify(gameState));
    window.dispatchEvent(new Event('storage'));
}

// Load game state from localStorage
function loadGameState() {
    const saved = localStorage.getItem('ecotech_game_state');
    if (saved) {
        const parsed = JSON.parse(saved);
        gameState = parsed;
        return true;
    }
    return false;
}

// Render teams for admin
function renderTeamsAdmin() {
    if (!gameState.teams) return;
    let html = '';
    gameState.teams.forEach((team, idx) => {
        const isWinner = gameState.winner && gameState.winner.id === team.id;
        html += `
            <div class="team-card ${isWinner ? 'winner' : ''}" data-team-id="${team.id}">
                <div class="team-emoji-big">${team.emoji}</div>
                <div class="team-name-card">${escapeHtml(team.name)}</div>
                <div class="team-score">${team.score} <span>points</span></div>
            </div>
        `;
    });
    teamsGrid.innerHTML = html;
    
    if (gameState.currentTeamIndex !== null && !gameState.winner && gameState.gameActive) {
        const cards = document.querySelectorAll('#teamsGrid .team-card');
        cards.forEach((card, i) => {
            if (i === gameState.currentTeamIndex) {
                card.classList.add('current-turn');
            } else {
                card.classList.remove('current-turn');
            }
        });
    }
}

// Render teams for players
function renderTeamsPlayer() {
    if (!gameState.teams) return;
    let html = '';
    gameState.teams.forEach((team, idx) => {
        const isWinner = gameState.winner && gameState.winner.id === team.id;
        const isMyTeam = (playerTeamId === team.id);
        html += `
            <div class="team-card ${isWinner ? 'winner' : ''} ${isMyTeam ? 'current-turn' : ''}" style="${isMyTeam ? 'border-color: #2196f3;' : ''}">
                <div class="team-emoji-big">${team.emoji}</div>
                <div class="team-name-card">${escapeHtml(team.name)} ${isMyTeam ? '👈 VOUS' : ''}</div>
                <div class="team-score">${team.score} <span>points</span></div>
            </div>
        `;
    });
    teamsGridPlayer.innerHTML = html;
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Admin functions
function getRandomTeam() {
    const availableTeams = gameState.teams.filter(t => t.score < 9);
    if (availableTeams.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableTeams.length);
    return gameState.teams.findIndex(t => t.id === availableTeams[randomIndex].id);
}

function drawTeamWithShuffle() {
    if (!gameState.gameActive || gameState.winner) {
        alert("La partie n'est pas active ou un gagnant existe déjà !");
        return;
    }
    
    drawTeamBtn.disabled = true;
    
    const availableTeamsNames = gameState.teams.filter(t => t.score < 7).map(t => ({ name: t.name, emoji: t.emoji }));
    
    if (availableTeamsNames.length === 0) {
        drawTeamBtn.disabled = false;
        return;
    }
    
    let shuffleCount = 0;
    const maxShuffles = 12;
    
    const shuffleInterval = setInterval(() => {
        const randomTeam = availableTeamsNames[Math.floor(Math.random() * availableTeamsNames.length)];
        currentTeamDisplay.innerHTML = `
            <div class="current-team-label">🎲 Tirage en cours...</div>
            <div class="current-team-name shuffle-animation">${randomTeam.emoji} ${randomTeam.name}</div>
        `;
        shuffleCount++;
        if (shuffleCount >= maxShuffles) {
            clearInterval(shuffleInterval);
            finalizeDraw();
        }
    }, 80);
    
    function finalizeDraw() {
        const newTeamIndex = getRandomTeam();
        if (newTeamIndex === null) {
            drawTeamBtn.disabled = false;
            return;
        }
        
        gameState.currentTeamIndex = newTeamIndex;
        gameState.waitingForDraw = false;
        gameState.currentDifficulty = null;
        gameState.answerLocked = false;
        gameState.answerProcessed = false;
        gameState.modalVisible = false;
        
        const team = gameState.teams[newTeamIndex];
        currentTeamDisplay.innerHTML = `
            <div class="current-team-label">🎲 Équipe qui va jouer</div>
            <div class="current-team-name">${team.emoji} ${escapeHtml(team.name)}</div>
        `;
        
        difficultySelector.style.display = 'block';
        document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('active'));
        
        renderTeamsAdmin();
        drawTeamBtn.disabled = false;
        saveGameState();
    }
}

function getRandomQuestion(difficulty) {
    const questions = QUESTIONS_DB[difficulty];
    const used = gameState.usedQuestions[difficulty];
    const available = questions.filter((_, idx) => !used.includes(idx));
    
    if (available.length === 0) {
        gameState.usedQuestions[difficulty] = [];
        return questions[Math.floor(Math.random() * questions.length)];
    }
    
    const randomAvailable = available[Math.floor(Math.random() * available.length)];
    const originalIndex = questions.findIndex(q => q === randomAvailable);
    gameState.usedQuestions[difficulty].push(originalIndex);
    return randomAvailable;
}

function selectDifficulty(difficulty, points) {
    if (gameState.waitingForDraw || gameState.currentDifficulty !== null) return;
    if (!gameState.gameActive) return;
    if (gameState.answerLocked) return;
    
    gameState.currentDifficulty = difficulty;
    const question = getRandomQuestion(difficulty);
    gameState.currentQuestion = { ...question, points };
    gameState.answerLocked = false;
    gameState.answerProcessed = false;
    gameState.modalVisible = true;
    saveGameState();
    
    // Show modal on current device
    showQuestionModal();
}

function showQuestionModal() {
    if (!gameState.currentQuestion || !gameState.modalVisible) return;
    
    const team = gameState.teams[gameState.currentTeamIndex];
    const points = gameState.currentQuestion.points;
    const question = gameState.currentQuestion;
    const isMyTurn = (currentMode === 'player' && playerTeamId === team.id);
    const isAdmin = (currentMode === 'admin');
    
    modalTeamName.textContent = `${team.emoji} ${team.name}`;
    modalPoints.textContent = `${points} point${points > 1 ? 's' : ''}`;
    modalQuestion.textContent = question.text;
    
    let optionsHtml = '';
    question.options.forEach((opt, idx) => {
        const letter = String.fromCharCode(65+idx);
        const enabledClass = ((isMyTurn || isAdmin) && !gameState.answerProcessed) ? 'enabled' : 'disabled';
        optionsHtml += `
            <div class="modal-option ${enabledClass}" data-opt-index="${idx}">
                <strong>${letter}.</strong> ${opt}
            </div>
        `;
    });
    modalOptions.innerHTML = optionsHtml;
    
    // Clear feedback
    if (!gameState.answerProcessed) {
        modalFeedback.innerHTML = '';
        modalCloseBtn.style.display = 'none';
    } else {
        // If answer already processed, show the appropriate feedback
        if (isAdmin) {
            // Admin gets full explanation
            modalFeedback.innerHTML = gameState.lastAnswer.adminFeedback;
        } else {
            // Players get simple feedback (no explanation)
            modalFeedback.innerHTML = gameState.lastAnswer.playerFeedback;
        }
        if (isAdmin) {
            modalCloseBtn.style.display = 'block';
        }
    }
    
    // Remove previous listeners and add new ones
    const newOptions = document.querySelectorAll('.modal-option');
    newOptions.forEach(opt => {
        opt.removeEventListener('click', handleAnswer);
        if (((currentMode === 'player' && playerTeamId === team.id) || currentMode === 'admin') && !gameState.answerProcessed) {
            opt.addEventListener('click', handleAnswer);
        }
    });
    
    modal.style.display = 'flex';
}

function handleAnswer(e) {
    if (gameState.answerProcessed) {
        modalFeedback.innerHTML = `<div class="modal-feedback">⏳ Cette question a déjà été répondue !</div>`;
        return;
    }
    
    const selectedIdx = parseInt(e.currentTarget.getAttribute('data-opt-index'));
    if (!gameState.currentQuestion) return;
    
    const team = gameState.teams[gameState.currentTeamIndex];
    const isAdmin = (currentMode === 'admin');
    const isMyTurn = (currentMode === 'player' && playerTeamId === team.id);
    
    // Only the selected team or admin can answer
    if (!isMyTurn && !isAdmin) {
        modalFeedback.innerHTML = `<div class="modal-feedback">⛔ Seule l'équipe ${team.emoji} ${team.name} peut répondre à cette question !</div>`;
        return;
    }
    
    gameState.answerProcessed = true;
    gameState.answerLocked = true;
    const isCorrect = (selectedIdx === gameState.currentQuestion.correct);
    const points = gameState.currentQuestion.points;
    const correctAnswerText = gameState.currentQuestion.options[gameState.currentQuestion.correct];
    const explanation = gameState.currentQuestion.explanation;
    
    const options = document.querySelectorAll('.modal-option');
    options.forEach(opt => { opt.style.pointerEvents = 'none'; });
    
    options.forEach((opt, idx) => {
        if (idx === gameState.currentQuestion.correct) opt.classList.add('correct');
        if (idx === selectedIdx && idx !== gameState.currentQuestion.correct) opt.classList.add('wrong');
    });
    
    // Store answer info for both admin and players
    gameState.lastAnswer = {
        isCorrect: isCorrect,
        points: points,
        teamName: team.name,
        teamEmoji: team.emoji,
        correctAnswer: correctAnswerText,
        explanation: explanation,
        // Admin feedback (with explanation)
        adminFeedback: isCorrect 
            ? `<div class="modal-feedback">✅ BRAVO ! +${points} point${points > 1 ? 's' : ''} pour ${escapeHtml(team.name)}<br>📚 ${explanation}</div>`
            : `<div class="modal-feedback">❌ Dommage ! La bonne réponse était : "${correctAnswerText}"<br>📚 ${explanation}<br><span style="color:#ff9800;">0 point pour cette question</span></div>`,
        // Player feedback (NO explanation - just result)
        playerFeedback: isCorrect 
            ? `<div class="modal-feedback">✅ BRAVO ! +${points} point${points > 1 ? 's' : ''} pour ${escapeHtml(team.name)}</div>`
            : `<div class="modal-feedback">❌ Dommage ! La bonne réponse était : "${correctAnswerText}"<br><span style="color:#ff9800;">0 point pour cette question</span></div>`
    };
    
    if (isCorrect) {
        team.score += points;
    }
    
    // Show appropriate feedback based on who is viewing
    if (currentMode === 'admin') {
        modalFeedback.innerHTML = gameState.lastAnswer.adminFeedback;
        renderTeamsAdmin();
        modalCloseBtn.style.display = 'block';
    } else {
        modalFeedback.innerHTML = gameState.lastAnswer.playerFeedback;
        renderTeamsPlayer();
        modalCloseBtn.style.display = 'none';
        modalFeedback.innerHTML += `<div class="waiting-for-answer">⏳ En attente...</div>`;
    }
    
    saveGameState();
}

function checkWinner() {
    for (let team of gameState.teams) {
        if (team.score >= 9) {
            gameState.winner = team;
            gameState.gameActive = false;
            gameState.modalVisible = false;
            showWinner(team);
            saveGameState();
            return true;
        }
    }
    return false;
}

function showWinner(team) {
    modal.style.display = 'none';
    const rouletteSection = document.querySelector('.roulette-section');
    if (rouletteSection) {
        rouletteSection.innerHTML = `
            <div class="winner-message">
                <div style="font-size:4rem;">🏆🎉🏆</div>
                <h2 style="color:#1b5e3f;">${team.emoji} ${escapeHtml(team.name)} a gagné !</h2>
                <p style="font-size:1.2rem; margin:15px 0;">Avec ${team.score} points, cette équipe maîtrise les enjeux des ODD !</p>
                <p>🌍 La technologie + l'écologie peuvent sauver notre planète. Bravo à tous !</p>
            </div>
        `;
    }
    drawTeamBtn.disabled = true;
    difficultySelector.style.display = 'none';
}

function closeModalAndNextTurn() {
    modal.style.display = 'none';
    gameState.modalVisible = false;
    gameState.currentQuestion = null;
    saveGameState();
    
    const hasWinner = checkWinner();
    if (!hasWinner) {
        nextTurn();
    }
}

function nextTurn() {
    gameState.currentTeamIndex = null;
    gameState.currentDifficulty = null;
    gameState.currentQuestion = null;
    gameState.waitingForDraw = true;
    gameState.answerLocked = false;
    gameState.answerProcessed = false;
    gameState.modalVisible = false;
    gameState.lastAnswer = {
        isCorrect: false,
        points: 0,
        teamName: "",
        teamEmoji: "",
        correctAnswer: "",
        explanation: "",
        adminFeedback: "",
        playerFeedback: ""
    };
    difficultySelector.style.display = 'none';
    drawTeamBtn.disabled = false;
    currentTeamDisplay.innerHTML = `
        <div class="current-team-label">🎲 Équipe qui va jouer</div>
        <div class="current-team-name">---</div>
    `;
    renderTeamsAdmin();
    saveGameState();
}

function resetGame() {
    gameState = {
        teams: [],
        currentTeamIndex: null,
        currentDifficulty: null,
        currentQuestion: null,
        waitingForDraw: true,
        gameActive: false,
        usedQuestions: { easy: [], medium: [], hard: [] },
        winner: null,
        gameStarted: false,
        answerLocked: false,
        answerProcessed: false,
        modalVisible: false,
        lastAnswer: {
            isCorrect: false,
            points: 0,
            teamName: "",
            teamEmoji: "",
            correctAnswer: "",
            explanation: "",
            adminFeedback: "",
            playerFeedback: ""
        }
    };
    saveGameState();
    renderTeamsAdmin();
    currentTeamDisplay.innerHTML = `
        <div class="current-team-label">🎲 Équipe qui va jouer</div>
        <div class="current-team-name">---</div>
    `;
    difficultySelector.style.display = 'none';
    drawTeamBtn.disabled = false;
    modal.style.display = 'none';
    alert("Jeu réinitialisé ! Les joueurs peuvent maintenant rejoindre.");
}

// Player functions
function joinGame() {
    const teamName = playerTeamNameInput.value.trim();
    if (!teamName) {
        alert("Veuillez entrer un nom pour votre équipe !");
        return;
    }
    
    if (gameState.teams.some(t => t.name.toLowerCase() === teamName.toLowerCase())) {
        alert("Ce nom d'équipe existe déjà ! Choisissez un autre nom.");
        return;
    }
    
    const newTeam = {
        id: Date.now(),
        name: teamName,
        score: 0,
        emoji: teamEmojis[gameState.teams.length % teamEmojis.length]
    };
    
    gameState.teams.push(newTeam);
    playerTeamId = newTeam.id;
    saveGameState();
    
    playerRegistration.style.display = 'none';
    playerGameInfo.style.display = 'block';
    
    renderTeamsPlayer();
    
    if (gameState.gameActive) {
        playerWaitingMessage.style.display = 'none';
    } else {
        playerWaitingMessage.style.display = 'block';
        playerWaitingMessage.innerHTML = '⏳ En attente...';
    }
}

// Listen for storage changes (sync between devices)
window.addEventListener('storage', (e) => {
    if (e.key === 'ecotech_game_state') {
        loadGameState();
        
        if (currentMode === 'admin') {
            renderTeamsAdmin();
            
            // Update current team display
            if (gameState.currentTeamIndex !== null && !gameState.winner && gameState.gameActive) {
                const team = gameState.teams[gameState.currentTeamIndex];
                currentTeamDisplay.innerHTML = `
                    <div class="current-team-label">🎲 Équipe qui va jouer</div>
                    <div class="current-team-name">${team.emoji} ${escapeHtml(team.name)}</div>
                `;
                if (gameState.currentDifficulty === null && !gameState.waitingForDraw) {
                    difficultySelector.style.display = 'block';
                }
            }
            
            // Handle modal visibility
            if (gameState.modalVisible && gameState.currentQuestion && !gameState.winner) {
                if (modal.style.display !== 'flex') {
                    showQuestionModal();
                } else {
                    updateModalContent();
                }
            } else if (!gameState.modalVisible && modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
            
        } else if (currentMode === 'player' && playerTeamId) {
            renderTeamsPlayer();
            
            if (gameState.gameActive) {
                playerWaitingMessage.style.display = 'none';
            } else {
                playerWaitingMessage.style.display = 'block';
            }
            
            // Handle modal visibility for players
            if (gameState.modalVisible && gameState.currentQuestion && !gameState.winner) {
                if (modal.style.display !== 'flex') {
                    showQuestionModal();
                } else {
                    updateModalContent();
                }
            } else if (!gameState.modalVisible && modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
        }
    }
});

function updateModalContent() {
    if (!gameState.currentQuestion) return;
    
    const team = gameState.teams[gameState.currentTeamIndex];
    const isAdmin = (currentMode === 'admin');
    
    modalTeamName.textContent = `${team.emoji} ${team.name}`;
    modalPoints.textContent = `${gameState.currentQuestion.points} point${gameState.currentQuestion.points > 1 ? 's' : ''}`;
    modalQuestion.textContent = gameState.currentQuestion.text;
    
    // If answer has been processed, show the appropriate feedback
    if (gameState.answerProcessed) {
        if (isAdmin) {
            modalFeedback.innerHTML = gameState.lastAnswer.adminFeedback;
            modalCloseBtn.style.display = 'block';
        } else {
            modalFeedback.innerHTML = gameState.lastAnswer.playerFeedback;
            if (!modalFeedback.innerHTML.includes('En attente')) {
                modalFeedback.innerHTML += `<div class="waiting-for-answer">⏳ En attente...</div>`;
            }
            modalCloseBtn.style.display = 'none';
        }
        
        // Disable all options
        const options = document.querySelectorAll('.modal-option');
        options.forEach(opt => {
            opt.style.pointerEvents = 'none';
            opt.classList.add('disabled');
        });
    } else {
        // Update options if not answered yet
        const isMyTurn = (currentMode === 'player' && playerTeamId === team.id);
        let optionsHtml = '';
        gameState.currentQuestion.options.forEach((opt, idx) => {
            const letter = String.fromCharCode(65+idx);
            const enabledClass = ((isMyTurn || isAdmin) && !gameState.answerProcessed) ? 'enabled' : 'disabled';
            optionsHtml += `
                <div class="modal-option ${enabledClass}" data-opt-index="${idx}">
                    <strong>${letter}.</strong> ${opt}
                </div>
            `;
        });
        modalOptions.innerHTML = optionsHtml;
        
        // Re-attach event listeners
        const newOptions = document.querySelectorAll('.modal-option');
        newOptions.forEach(opt => {
            opt.removeEventListener('click', handleAnswer);
            if (((currentMode === 'player' && playerTeamId === team.id) || currentMode === 'admin') && !gameState.answerProcessed) {
                opt.addEventListener('click', handleAnswer);
            }
        });
    }
}

// ============ ADMIN ACCESS CODE ============
let adminAccessGranted = false;
const ADMIN_CODE = "ECOTECH2024";

// Get the admin access div elements
const adminAccessDiv = document.getElementById('adminAccess');
const adminCodeInput = document.getElementById('adminCode');
const verifyAdminBtn = document.getElementById('verifyAdminBtn');

// Admin mode button click - show the code input instead of directly entering
document.getElementById('adminModeBtn').addEventListener('click', () => {
    adminAccessDiv.style.display = 'flex';
    adminCodeInput.value = '';
    adminCodeInput.focus();
});

// Verify button click
verifyAdminBtn.addEventListener('click', () => {
    const enteredCode = adminCodeInput.value;
    if (enteredCode === ADMIN_CODE) {
        adminAccessGranted = true;
        adminAccessDiv.style.display = 'none';
        enterAdminMode();
    } else {
        alert("❌ Code d'accès incorrect !");
        adminCodeInput.value = '';
        adminCodeInput.focus();
    }
});

// Allow Enter key to submit
adminCodeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        verifyAdminBtn.click();
    }
});

function enterAdminMode() {
    currentMode = 'admin';
    modeSelector.style.display = 'none';
    adminPanel.style.display = 'block';
    playerPanel.style.display = 'none';
    loadGameState();
    renderTeamsAdmin();
    
    if (gameState.gameActive) {
        drawTeamBtn.disabled = false;
        if (gameState.currentTeamIndex !== null && !gameState.winner) {
            const team = gameState.teams[gameState.currentTeamIndex];
            currentTeamDisplay.innerHTML = `
                <div class="current-team-label">🎲 Équipe qui va jouer</div>
                <div class="current-team-name">${team.emoji} ${escapeHtml(team.name)}</div>
            `;
            if (gameState.currentDifficulty === null && !gameState.waitingForDraw) {
                difficultySelector.style.display = 'block';
            }
        }
    } else {
        drawTeamBtn.disabled = true;
    }
    
    // Show modal if needed
    if (gameState.modalVisible && gameState.currentQuestion && !gameState.winner) {
        showQuestionModal();
    }
}

// Player mode (no code needed)
document.getElementById('playerModeBtn').addEventListener('click', () => {
    currentMode = 'player';
    modeSelector.style.display = 'none';
    adminPanel.style.display = 'none';
    playerPanel.style.display = 'block';
    loadGameState();
    renderTeamsPlayer();
    
    // Show modal if needed
    if (gameState.modalVisible && gameState.currentQuestion && !gameState.winner) {
        showQuestionModal();
    }
});

// Admin controls
drawTeamBtn.addEventListener('click', () => {
    if (!gameState.gameActive) {
        gameState.gameActive = true;
        gameState.gameStarted = true;
        saveGameState();
    }
    drawTeamWithShuffle();
});

document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const diff = btn.getAttribute('data-diff');
        let points = diff === 'easy' ? 1 : (diff === 'medium' ? 2 : 3);
        selectDifficulty(diff, points);
        btn.classList.add('active');
    });
});

resetGameAdminBtn.addEventListener('click', resetGame);
joinGameBtn.addEventListener('click', joinGame);

// Admin close button for modal
modalCloseBtn.addEventListener('click', () => {
    closeModalAndNextTurn();
});

// Close modal on outside click (admin only)
window.addEventListener('click', (e) => {
    if (e.target === modal && currentMode === 'admin' && gameState.answerProcessed) {
        closeModalAndNextTurn();
    }
});

// Initial load
loadGameState();