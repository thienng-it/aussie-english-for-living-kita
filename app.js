document.addEventListener('DOMContentLoaded', () => {

    // --- (NEW) Passcode Configuration ---
    const CORRECT_PASSCODE = "251200"; // <-- CHANGE YOUR PASSCODE HERE

    
    // --- All Vocabulary Data (Loaded from data.js) ---
    
    // --- (NEW) Passcode & App Container DOM Elements ---
    const passcodeModal = document.getElementById('passcode-modal');
    const passcodeSubmitBtn = document.getElementById('passcode-submit-btn');
    const passcodeError = document.getElementById('passcode-error');
    const passcodeTntput = document.getElementById('passcode-input'); // Corrected typo
    const appContainer = document.getElementById('app-container');
    const levelButtonsContainer = document.getElementById('level-buttons');

    // --- (EXISTING) DOM Elements ---
    const topicButtonsContainer = document.getElementById('topic-buttons');
    const mainContent = document.getElementById('main-content');
    const currentTopicTitle = document.getElementById('current-topic-title');
    const controlsContainer = document.getElementById('controls-container');
    
    // View containers
    const wordListView = document.getElementById('word-list-view');
    const wordListContainer = document.getElementById('word-list-container');
    const quizView = document.getElementById('quiz-view');
    const flashcardView = document.getElementById('flashcard-view');

    // Load More elements (No longer used, but keeping reference)
    const loadMoreContainer = document.getElementById('load-more-container');
    // const loadMoreBtn = document.getElementById('load-more-btn'); // No longer used
    
    // Quiz elements
    const quizBackBtn = document.getElementById('quiz-back-btn');
    const quizQuestionContainer = document.getElementById('quiz-question-container');
    const quizDefinition = document.getElementById('quiz-definition');
    const quizOptions = document.getElementById('quiz-options');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizResults = document.getElementById('quiz-results');
    const quizScore = document.getElementById('quiz-score');
    const quizRestartBtn = document.getElementById('quiz-restart-btn');
    const quizResultsSummary = document.getElementById('quiz-results-summary'); 
    
    // Flashcard elements
    const flashcardBackBtn = document.getElementById('flashcard-back-btn');
    const flashcard = document.getElementById('flashcard');
    const flashcardFront = document.getElementById('flashcard-front').querySelector('span');
    const flashcardBackViet = document.getElementById('flashcard-back-viet');
    const flashcardBackPhonetic = document.getElementById('flashcard-back-phonetic');
    
    const flashcardCounter = document.getElementById('flashcard-counter');
    const flashcardPrevBtn = document.getElementById('flashcard-prev-btn');
    const flashcardNextBtn = document.getElementById('flashcard-next-btn');
    
    // Interactive Flashcard elements
    const flashcardContainer = document.getElementById('flashcard-container');
    const flashcardFeedbackBtns = document.getElementById('flashcard-feedback-btns');
    const flashcardReviewBtn = document.getElementById('flashcard-review-btn');
    const flashcardKnownBtn = document.getElementById('flashcard-known-btn');
    const flashcardSummaryView = document.getElementById('flashcard-summary-view');
    const flashcardKnownSummary = document.getElementById('flashcard-known-summary');
    const flashcardReviewSummary = document.getElementById('flashcard-review-summary');
    const flashcardRestartBtn = document.getElementById('flashcard-restart-btn');

    // Modal elements
    const detailsModal = document.getElementById('details-modal');
    const detailsModalContent = document.getElementById('details-modal-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalWord = document.getElementById('modal-word');
    const modalListenBtn = document.getElementById('modal-listen-btn');
    // (REMOVED) Old modal elements
    // const modalViet = document.getElementById('modal-viet');
    // const modalPhonetic = document.getElementById('modal-phonetic');
    // const modalSynonyms = document.getElementById('modal-synonyms');
    // const modalAntonyms = document.getElementById('modal-antonyms');


    // --- App State ---
    let currentLevel = null;
    let currentTopic = null; // Will be set after level is chosen
    let aussieVoice = null; // To store the Aussie voice
    let voiceLoaderPromise = null; // to manage loading voices

    // Word List Pagination state
    const wordsPerLoad = 20;
    let currentWordEntries = [];
    let currentWordsLoaded = 0;
    let isLoadingMore = false; // NEW: Flag for infinite scroll

    // Quiz state
    let currentQuizWords = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let quizResultsData = []; 

    // Flashcard state
    let currentFlashcardIndex = 0;
    let currentFlashcardWords = [];
    let flashcardKnownWords = []; 
    let flashcardReviewWords = []; 


    // --- Core Functions ---

    /**
     * Shuffles an array in place (Fisher-Yates shuffle)
     */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // --- (REMOVED) loadAussieVoice() function ---
    // The old function was removed to fix the Android audio issue.

    /**
     * (NEW) Helper function to find the best-matching voice
     * (This logic is extracted from the old playWord function)
     */
    function findBestVoice() {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length === 0) return null;

        let foundVoice = voices.find(voice => voice.lang === 'en-AU'); // Exact
        
        if (!foundVoice) {
            // Broader Australian search
            foundVoice = voices.find(voice => 
                voice.lang.startsWith('en-AU') || 
                voice.name.toLowerCase().includes('australia')
            );
        }
        if (!foundVoice) {
            // Fallback to UK English (often available)
            foundVoice = voices.find(voice => voice.lang === 'en-GB' || voice.lang.startsWith('en-GB'));
        }
        if (!foundVoice) {
             // Fallback to US English
            foundVoice = voices.find(voice => voice.lang === 'en-US' || voice.lang.startsWith('en-US'));
        }
        if (!foundVoice) {
            // Last resort: any default English
            foundVoice = voices.find(voice => voice.lang.startsWith('en-') && voice.default);
        }
        
        aussieVoice = foundVoice; // Cache it globally
        return aussieVoice;
    }

    /**
     * (NEW) Returns a promise that resolves when voices are loaded.
     * This fixes the Android WebView "lazy loading" issue.
     */
    function ensureVoicesLoaded() {
        // If loading is already in progress, return the existing promise
        if (voiceLoaderPromise) {
            return voiceLoaderPromise;
        }

        voiceLoaderPromise = new Promise((resolve) => {
            // Case 1: Voices are already cached
            if (aussieVoice) {
                return resolve(aussieVoice);
            }

            // Case 2: Voices are loaded now
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                return resolve(findBestVoice());
            }

            // Case 3: We must wait for the event (The Android/Messenger problem)
            if (window.speechSynthesis.onvoiceschanged !== undefined) {
                window.speechSynthesis.onvoiceschanged = () => {
                    resolve(findBestVoice());
                };
            } else {
                // Fallback for very old browsers
                resolve(null);
            }
        });
        
        return voiceLoaderPromise;
    }

    /**
     * Plays audio for a given word using the built-in Web Speech API.
     * (REPLACED for improved mobile/Android compatibility)
     */
    async function playWord(text) {
        if (!('speechSynthesis' in window)) {
            console.error("Sorry, your browser doesn't support text-to-speech.");
            return;
        }

        window.speechSynthesis.cancel(); // Stop any previous speech

        // --- (NEW) Wait for voices to be loaded ---
        // This will either resolve immediately (if cached)
        // or wait for onvoiceschanged (if on Android WebView)
        const voiceToUse = await ensureVoicesLoaded();

        const utterance = new SpeechSynthesisUtterance(text);
        
        utterance.lang = 'en-AU'; // Set language as a fallback
        utterance.rate = 0.9;
        
        if (voiceToUse) {
            utterance.voice = voiceToUse;
        }

        // --- Robust Voice Finding ---
        
        // 1. Check if we already found and stored the voice
        if (aussieVoice) {
            utterance.voice = aussieVoice;
            window.speechSynthesis.speak(utterance);
            return;
        }

        // 2. If not, get the list of voices *now*.
        // This is more reliable inside a click handler than at startup.
        const voices = window.speechSynthesis.getVoices();

        if (voices.length > 0) {
            // 3. Voices are available. Find the best match.
            let foundVoice = voices.find(voice => voice.lang === 'en-AU'); // Exact
            
            if (!foundVoice) {
                // Broader Australian search
                foundVoice = voices.find(voice => 
                    voice.lang.startsWith('en-AU') || 
                    voice.name.toLowerCase().includes('australia')
                );
            }
            if (!foundVoice) {
                // Fallback to UK English (often available)
                foundVoice = voices.find(voice => voice.lang === 'en-GB' || voice.lang.startsWith('en-GB'));
            }
            if (!foundVoice) {
                 // Fallback to US English
                foundVoice = voices.find(voice => voice.lang === 'en-US' || voice.lang.startsWith('en-US'));
            }
            if (!foundVoice) {
                // Last resort: any default English
                foundVoice = voices.find(voice => voice.lang.startsWith('en-') && voice.default);
            }

            if (foundVoice) {
                aussieVoice = foundVoice; // Store it globally for next time
                utterance.voice = aussieVoice;
            }
            // If no voice found, we'll just use the 'en-AU' lang fallback
        } 
        
        // 4. If voices.length is 0 (common on first click on Android):
        // We speak *without* setting .voice. The browser will use the .lang property.
        // This "wakes up" the synthesis engine.
        // We also set a listener so that 'aussieVoice' is populated for the *next* click.
        else if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = () => {
                const updatedVoices = window.speechSynthesis.getVoices();
                let foundVoice = updatedVoices.find(voice => voice.lang === 'en-AU');
                if (!foundVoice) {
                     foundVoice = updatedVoices.find(voice => 
                        voice.lang.startsWith('en-AU') || 
                        voice.name.toLowerCase().includes('australia') ||
                        voice.lang === 'en-GB'
                    );
                }
                aussieVoice = foundVoice; // Store it for the future
            };
        }
        
        // 5. Speak the utterance
        window.speechSynthesis.speak(utterance);
    }

    /**
     * (REPLACED) Re-draws the vocabulary list with pagination.
     * @param {boolean} reset - If true, clears the list and starts from the beginning.
     */
    function renderWordList(reset = false) {
        if (reset) {
            wordListContainer.innerHTML = ''; // Clear existing list
            
            if (!currentTopic || !allTopics[currentTopic]) {
                 console.error(`No words found for topic: ${currentTopic}`);
                 return;
            }
            const words = allTopics[currentTopic];

            currentWordEntries = Object.entries(words); // Store all entries
            currentWordsLoaded = 0;
            isLoadingMore = false; // NEW: Reset loading flag
        }

        const fragment = document.createDocumentFragment();
        
        const wordsToLoad = currentWordEntries.slice(currentWordsLoaded, currentWordsLoaded + wordsPerLoad);

        for (const [word, data] of wordsToLoad) {
            const div = document.createElement('div');
            div.className = 'word-item flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer';
            div.dataset.word = word; 
            
            // (CHANGED) Get the primary Vietnamese meaning
            let vietMeaning = 'N/A';
            if (data.meanings && data.meanings.length > 0) {
                vietMeaning = data.meanings[0].viet; // Get first meaning
            } else if (data.viet) {
                vietMeaning = data.viet; // Fallback to old structure
            }

            div.innerHTML = `
                <div>
                    <p class="text-lg font-semibold text-blue-700">${word}</p>
                    <p class="text-gray-600">${vietMeaning}</p>
                </div>
                <button data-word="${word}" class="listen-btn flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.728 1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            `;
            fragment.appendChild(div);
        }
        wordListContainer.appendChild(fragment);

        currentWordsLoaded += wordsToLoad.length;
        isLoadingMore = false; // NEW: Reset flag after loading

        // REMOVED: Logic to show/hide "Load More" button
        // if (currentWordsLoaded >= currentWordEntries.length) {
        //     loadMoreContainer.classList.add('hidden');
        // } else {
        //     loadMoreContainer.classList.remove('hidden');
        // }
    }
    
    /**
     * (REPLACED) Renders the topic buttons for the *currently selected level*.
     */
    function renderTopicButtons() {
        topicButtonsContainer.innerHTML = ''; // Clear old buttons
        mainContent.classList.add('hidden'); // Hide main content until ready

        if (!currentLevel || !levels[currentLevel]) {
            console.error("No level selected or level has no topics.");
            return;
        }

        const fragment = document.createDocumentFragment();
        const topicsForLevel = levels[currentLevel];

        // Get the first topic of this level to be the new default
        currentTopic = topicsForLevel[0]; 
        
        for (const topicName of topicsForLevel) {
            // Safety check: ensure this topic exists in our master allTopics list
            if (!allTopics[topicName]) {
                console.warn(`Topic "${topicName}" defined in levels but not found in allTopics.`);
                continue; 
            }

            const button = document.createElement('button');
            button.dataset.topic = topicName;
            button.textContent = topicName;
            button.className = `topic-btn px-4 py-2 rounded-lg font-medium shadow-sm transition-all ${
                topicName === currentTopic 
                ? 'bg-blue-600 text-white scale-105 shadow-lg' 
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`;
            fragment.appendChild(button);
        }
        topicButtonsContainer.appendChild(fragment);

        // Now that a level and topic are selected, render the list and controls
        currentTopicTitle.textContent = currentTopic;
        renderWordList(true); 
        renderControls();

        // And show the main content area
        mainContent.classList.remove('hidden');
    }
    
    /**
     * Renders the control buttons (Quiz, Flashcards) for the current topic.
     */
    function renderControls() {
        controlsContainer.innerHTML = ''; // Clear old controls
        
        const quizBtn = document.createElement('button');
        quizBtn.id = 'start-quiz-btn';
        quizBtn.textContent = 'Start Quiz';
        quizBtn.className = 'px-4 py-2 rounded-lg font-semibold bg-green-500 text-white hover:bg-green-600 shadow transition-colors';
        
        const flashcardBtn = document.createElement('button');
        flashcardBtn.id = 'start-flashcards-btn';
        flashcardBtn.textContent = 'Flashcards';
        flashcardBtn.className = 'px-4 py-2 rounded-lg font-semibold bg-purple-500 text-white hover:bg-purple-600 shadow transition-colors';
        
        controlsContainer.appendChild(quizBtn);
        controlsContainer.appendChild(flashcardBtn);
        
        document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
        document.getElementById('start-flashcards-btn').addEventListener('click', startFlashcards);
    }

    /**
     * (NEW) Renders the main level selection buttons.
     */
    function renderLevelButtons() {
        levelButtonsContainer.innerHTML = ''; // Clear old buttons
        const fragment = document.createDocumentFragment();
        
        // Use the new 'levels' object from data.js
        if (typeof levels === 'undefined') {
            console.error("levels data is not loaded. Check if data.js is included correctly.");
            return;
        }
        for (const levelName of Object.keys(levels)) {
            const button = document.createElement('button');
            button.dataset.level = levelName;
            button.textContent = levelName;
            // Added some extra styling for the main level buttons
            button.className = `level-btn px-6 py-3 rounded-lg font-bold text-lg shadow-lg transition-all 
                bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105`;
            fragment.appendChild(button);
        }
        levelButtonsContainer.appendChild(fragment);
    }

    /**
     * (NEW) Handles clicks on the level buttons.
     */
    function handleLevelClick(e) {
        const button = e.target.closest('.level-btn');
        if (!button) return;

        currentLevel = button.dataset.level;
        
        // Highlight selected level button
        document.querySelectorAll('.level-btn').forEach(btn => {
            if (btn.dataset.level === currentLevel) {
                btn.className = 'level-btn px-6 py-3 rounded-lg font-bold text-lg shadow-lg transition-all bg-blue-800 text-white scale-110';
            } else {
                btn.className = 'level-btn px-6 py-3 rounded-lg font-bold text-lg shadow-lg transition-all bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105';
            }
        });
        
        // Render the topics for the selected level
        renderTopicButtons(); 
        showView('list');
    }

    /**
     * Handles clicks on the topic buttons.
     */
    function handleTopicClick(e) {
        const button = e.target.closest('.topic-btn');
        if (!button) return;

        currentTopic = button.dataset.topic;
        
        document.querySelectorAll('.topic-btn').forEach(btn => {
            if (btn.dataset.topic === currentTopic) {
                btn.className = 'topic-btn px-4 py-2 rounded-lg font-medium shadow-sm transition-all bg-blue-600 text-white scale-105 shadow-lg';
            } else {
                btn.className = 'topic-btn px-4 py-2 rounded-lg font-medium shadow-sm transition-all bg-white text-blue-600 hover:bg-blue-50';
            }
        });

        currentTopicTitle.textContent = currentTopic;
        renderWordList(true); 
        showView('list');
    }

    /**
     * Handles clicks on the word list.
     */
    function handleListClick(e) {
        const listenBtn = e.target.closest('.listen-btn');
        if (listenBtn) {
            e.stopPropagation(); 
            const word = listenBtn.dataset.word;
            playWord(word);
            return;
        }

        const wordItem = e.target.closest('.word-item');
        if (wordItem) {
            const word = wordItem.dataset.word;
            showWordDetails(word);
        }
    }

    /**
     * NEW: Handles scrolling in the word list for infinite scroll.
     */
    function handleWordListScroll() {
        // Check if already loading or if no more words
        if (isLoadingMore || currentWordsLoaded >= currentWordEntries.length) {
            return;
        }

        const { scrollTop, scrollHeight, clientHeight } = wordListContainer;

        // Check if scrolled to near the bottom (e.g., within 100px)
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            isLoadingMore = true; // Set loading flag
            renderWordList(false); // Load more words
        }
    }

    /**
     * Switches between the 'list', 'quiz', and 'flashcard' views.
     */
    function showView(viewName) {
        wordListView.classList.add('hidden');
        quizView.classList.add('hidden');
        flashcardView.classList.add('hidden');
        
        if (viewName === 'list') {
            wordListView.classList.remove('hidden');
        } else if (viewName === 'quiz') {
            quizView.classList.remove('hidden');
        } else if (viewName === 'flashcards') {
            flashcardView.classList.remove('hidden');
        }
    }

    // --- Modal Functions ---

    /**
     * (REPLACED) Shows the details modal for a given word.
     */
    function showWordDetails(word) {
        const data = allTopics[currentTopic][word];
        if (!data) return;

        // (CHANGED) Get new modal elements
        const detailsContainer = document.getElementById('modal-details-container');
        const modalPhoneticDisplay = document.getElementById('modal-phonetic-display');
        
        // Clear old content
        detailsContainer.innerHTML = ''; 
        
        // Set top-level info
        modalWord.textContent = word;
        modalListenBtn.dataset.word = word;
        modalPhoneticDisplay.textContent = data.phonetic || ''; // Set new phonetic element

        const fragment = document.createDocumentFragment();

        // (NEW) Helper function to create a data row (e.g., "Synonyms: ...")
        const createRow = (label, content) => {
            if (!content || (Array.isArray(content) && content.length === 0)) {
                return ''; // Don't create a row if content is empty
            }
            const contentStr = Array.isArray(content) ? content.join(', ') : content;
            return `
                <div class="mt-3">
                    <h4 class="font-semibold text-gray-500 text-sm uppercase tracking-wider mb-1">${label}</h4>
                    <p class="text-gray-800">${contentStr}</p>
                </div>
            `;
        };

        // (NEW) Check if using NEW data structure (has 'meanings' array)
        if (data.meanings && Array.isArray(data.meanings)) {
            
            data.meanings.forEach(meaning => {
                const meaningBlock = document.createElement('div');
                meaningBlock.className = 'pb-4 border-b border-gray-200 last:border-b-0';
                
                meaningBlock.innerHTML = `
                    <h3 class="text-xl font-bold text-blue-700 italic">${meaning.type || 'meaning'}</h3>
                    ${createRow('Vietnamese', meaning.viet)}
                    ${createRow('Definition', meaning.definition)}
                    ${createRow('Synonyms', meaning.synonyms)}
                    ${createRow('Antonyms', meaning.antonyms)}
                `;
                fragment.appendChild(meaningBlock);
            });

        } 
        // (NEW) Fallback for OLD data structure
        else {
            const meaningBlock = document.createElement('div');
            meaningBlock.innerHTML = `
                ${createRow('Vietnamese', data.viet)}
                ${createRow('Synonyms', data.synonyms)}
                ${createRow('Antonyms', data.antonyms)}
            `;
            // Note: phonetic is already handled at the top
            fragment.appendChild(meaningBlock);
        }
        
        detailsContainer.appendChild(fragment);

        detailsModal.classList.remove('opacity-0', 'pointer-events-none');
        detailsModalContent.classList.remove('scale-95');
    }

    /**
     * Hides the details modal.
     */
    function hideWordDetails() {
        detailsModal.classList.add('opacity-0', 'pointer-events-none');
        detailsModalContent.classList.add('scale-95');
    }
    

    // --- Quiz Functions ---
    
    function startQuiz() {
        document.getElementById('notification-bar').textContent = '';
        
        if (!currentTopic || !allTopics[currentTopic]) {
             document.getElementById('notification-bar').textContent = "Please select a topic first.";
             return;
        }
        const words = allTopics[currentTopic];
        const entries = Object.entries(words);
        
        if (entries.length < 4) {
            document.getElementById('notification-bar').textContent = "You need at least 4 words in a topic to start a quiz.";
            return;
        }
        
        currentQuizWords = shuffleArray([...entries]);
        currentQuestionIndex = 0;
        score = 0;
        quizResultsData = []; 
        
        quizResults.classList.add('hidden');
        quizResultsSummary.innerHTML = ''; 
        quizQuestionContainer.classList.remove('hidden');
        quizFeedback.innerHTML = '';
        
        showView('quiz');
        loadQuizQuestion();
    }
    
    /**
     * (REPLACED) Loads the next quiz question.
     */
    function loadQuizQuestion() {
        if (currentQuestionIndex >= currentQuizWords.length) {
            showQuizResults();
            return;
        }
        
        quizFeedback.innerHTML = '';
        quizOptions.innerHTML = '';
        
        const [correctWord, correctData] = currentQuizWords[currentQuestionIndex];
        
        // (CHANGED) Get the primary Vietnamese meaning
        let vietMeaning = 'N/A';
        if (correctData.meanings && correctData.meanings.length > 0) {
            vietMeaning = correctData.meanings[0].viet; // Get first meaning
        } else if (correctData.viet) {
            vietMeaning = correctData.viet; // Fallback to old structure
        }
        
        quizDefinition.textContent = vietMeaning; // (CHANGED)
        
        const allWords = Object.keys(allTopics[currentTopic]);
        let wrongWords = allWords.filter(w => w !== correctWord);
        wrongWords = shuffleArray(wrongWords).slice(0, 3);
        
        const options = shuffleArray([correctWord, ...wrongWords]);
        
        options.forEach(word => {
            const button = document.createElement('button');
            button.textContent = word;
            button.dataset.word = word;
            button.className = 'quiz-option-btn w-full text-left p-4 rounded-lg border-2 border-gray-300 hover:bg-gray-100 transition-colors';
            button.addEventListener('click', handleQuizAnswer);
            quizOptions.appendChild(button);
        });
    }
    
    /**
     * (REPLACED) Handles the user's answer in the quiz.
     */
    function handleQuizAnswer(e) {
        const selectedWord = e.target.dataset.word;
        const [correctWord, correctData] = currentQuizWords[currentQuestionIndex];
        const isCorrect = selectedWord === correctWord;
        
        if (isCorrect) {
            score++;
            quizFeedback.innerHTML = `<p class="text-green-600 font-semibold">Correct!</p>`;
        } else {
            quizFeedback.innerHTML = `<p class="text-red-600 font-semibold">Wrong. The correct answer was: ${correctWord}</p>`;
        }

        // (CHANGED) Get the primary Vietnamese meaning for the results
        let vietMeaning = 'N/A';
        if (correctData.meanings && correctData.meanings.length > 0) {
            vietMeaning = correctData.meanings[0].viet; // Get first meaning
        } else if (correctData.viet) {
            vietMeaning = correctData.viet; // Fallback to old structure
        }

        quizResultsData.push({
            question: vietMeaning, // (CHANGED)
            selected: selectedWord,
            correct: correctWord,
            isCorrect: isCorrect
        });
        
        document.querySelectorAll('.quiz-option-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.word === correctWord) {
                btn.classList.add('bg-green-200', 'border-green-400');
            } else if (btn.dataset.word === selectedWord) {
                btn.classList.add('bg-red-200', 'border-red-400');
            }
        });
        
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuizQuestion();
        }, 1500);
    }
    
    function showQuizResults() {
        quizQuestionContainer.classList.add('hidden');
        quizFeedback.innerHTML = '';
        quizResults.classList.remove('hidden');
        quizScore.textContent = `Your final score is ${score} out of ${currentQuizWords.length}.`;

        quizResultsSummary.innerHTML = '';
        const fragment = document.createDocumentFragment();
        quizResultsData.forEach(result => {
            const div = document.createElement('div');
            div.className = 'p-4 border-b border-gray-200';
            div.innerHTML = `
                <p class="text-gray-600 mb-1"><strong>Definition:</strong> ${result.question}</p>
                <p class="font-semibold ${result.isCorrect ? 'text-green-600' : 'text-red-600'}">
                    <strong>Your Answer:</strong> ${result.selected}
                </p>
                ${!result.isCorrect ? `<p class="text-blue-600"><strong>Correct Answer:</strong> ${result.correct}</p>` : ''}
            `;
            fragment.appendChild(div);
        });
        quizResultsSummary.appendChild(fragment);
    }

    // --- Flashcard Functions (UPDATED) ---

    function startFlashcards() {
        document.getElementById('notification-bar').textContent = '';
        
        if (!currentTopic || !allTopics[currentTopic]) {
             document.getElementById('notification-bar').textContent = "Please select a topic first.";
             return;
        }
        const words = allTopics[currentTopic];
        const entries = Object.entries(words);
        
        if (entries.length === 0) {
            document.getElementById('notification-bar').textContent = "There are no words in this topic for flashcards.";
            return;
        }

        currentFlashcardWords = shuffleArray(entries);
        flashcardKnownWords = [];
        flashcardReviewWords = [];
        currentFlashcardIndex = 0;
        
        flashcardContainer.classList.remove('hidden');
        flashcardSummaryView.classList.add('hidden');
        
        loadFlashcard();
        showView('flashcards');
    }
    
    /**
     * (REPLACED) Loads the current flashcard.
     */
    function loadFlashcard() {
        if (currentFlashcardWords.length === 0) return;
        
        const [word, data] = currentFlashcardWords[currentFlashcardIndex];
        
        flashcard.classList.remove('is-flipped');
        
        // (CHANGED) Get the primary Vietnamese meaning
        let vietMeaning = 'N/A';
        if (data.meanings && data.meanings.length > 0) {
            vietMeaning = data.meanings[0].viet; // Get first meaning
        } else if (data.viet) {
            vietMeaning = data.viet; // Fallback to old structure
        }
        
        // (CHANGED) Set text (English on front, Viet + Phonetic on back)
        flashcardFront.textContent = word; // English word on front
        flashcardBackViet.textContent = vietMeaning; // Vietnamese on back
        flashcardBackPhonetic.textContent = data.phonetic || ''; // Phonetic on back (or empty string if N/A)
        
        flashcardCounter.textContent = `Card ${currentFlashcardIndex + 1} of ${currentFlashcardWords.length}`;
        
        flashcardPrevBtn.disabled = (currentFlashcardIndex === 0);
        flashcardNextBtn.disabled = (currentFlashcardIndex === currentFlashcardWords.length - 1);
    }
    
    function flipFlashcard() {
        flashcard.classList.toggle('is-flipped');
    }
    
    function nextFlashcard() {
        if (currentFlashcardIndex < currentFlashcardWords.length - 1) {
            currentFlashcardIndex++;
            loadFlashcard();
        } else {
            showFlashcardSummary();
        }
    }
    
    function prevFlashcard() {
        if (currentFlashcardIndex > 0) {
            currentFlashcardIndex--;
            loadFlashcard();
        }
    }

    function handleFlashcardKnown() {
        const [word, data] = currentFlashcardWords[currentFlashcardIndex];
        flashcardKnownWords.push(word);
        nextFlashcard(); 
    }

    function handleFlashcardReview() {
        const [word, data] = currentFlashcardWords[currentFlashcardIndex];
        flashcardReviewWords.push(word);
        nextFlashcard(); 
    }

    function showFlashcardSummary() {
        flashcardContainer.classList.add('hidden');
        flashcardSummaryView.classList.remove('hidden');
        
        flashcardKnownSummary.innerHTML = `You marked <strong>${flashcardKnownWords.length}</strong> as 'Known'.`;
        flashcardReviewSummary.innerHTML = `You marked <strong>${flashcardReviewWords.length}</strong> as 'Needs Review'.`;
    }


    // --- Event Listeners ---
    levelButtonsContainer.addEventListener('click', handleLevelClick); // NEW
    topicButtonsContainer.addEventListener('click', handleTopicClick);
    wordListContainer.addEventListener('click', handleListClick);
    // NEW: Added scroll listener for infinite scroll
    wordListContainer.addEventListener('scroll', handleWordListScroll);
    // REMOVED: "Load More" button click listener
    // loadMoreBtn.addEventListener('click', () => renderWordList(false)); 
    
    // Quiz listeners
    quizBackBtn.addEventListener('click', () => {
        showView('list');
        mainContent.classList.remove('hidden'); // Ensure main view is visible
    });
    quizRestartBtn.addEventListener('click', startQuiz);
    
    // Flashcard listeners
    flashcardBackBtn.addEventListener('click', () => {
        showView('list');
        mainContent.classList.remove('hidden'); // Ensure main view is visible
    });
    flashcard.addEventListener('click', flipFlashcard);
    flashcardPrevBtn.addEventListener('click', prevFlashcard);
    flashcardNextBtn.addEventListener('click', nextFlashcard);
    
    flashcardKnownBtn.addEventListener('click', handleFlashcardKnown);
    flashcardReviewBtn.addEventListener('click', handleFlashcardReview);
    flashcardRestartBtn.addEventListener('click', startFlashcards);

    // Modal Listeners
    modalCloseBtn.addEventListener('click', hideWordDetails);
    detailsModal.addEventListener('click', (e) => {
        if (e.target === detailsModal) {
            hideWordDetails();
        }
    });
    modalListenBtn.addEventListener('click', (e) => {
        const word = e.currentTarget.dataset.word;
        playWord(word);
    });


    // --- (NEW) App Initialization Function ---
    /**
     * Runs all the setup functions after passcode is entered.
     */
    function initializeApp() {
        // (REMOVED) loadAussieVoice(); 
        
        // NEW: Render level buttons first.
        // The topic buttons and word list will be rendered AFTER a level is clicked.
        renderLevelButtons();
        
        // (MOVED to renderTopicButtons)
        // renderTopicButtons();
        // currentTopicTitle.textContent = currentTopic; 
        // renderWordList(true); 
        // renderControls();
        
        // Show the main app
        appContainer.classList.remove('hidden');
        // Hide the passcode modal
        passcodeModal.classList.add('hidden');
    }

    // --- (NEW) Passcode Check Function ---
    function checkPasscode() {
        const inputPasscode = document.getElementById('passcode-input').value.trim();

        if (inputPasscode === CORRECT_PASSCODE) {
            // Correct passcode: Initialize the app
            initializeApp();
        } else {
            // Incorrect passcode: Show error
            passcodeError.textContent = 'Incorrect passcode. Please try again.';
            document.getElementById('passcode-input').value = ''; // Clear input
        }
    }
    
    // --- (MODIFIED) Initial Setup ---
    
    // Don't initialize the app right away.
    // Instead, set up the listeners for the passcode modal.
    
    passcodeSubmitBtn.addEventListener('click', checkPasscode);
    document.getElementById('passcode-input').addEventListener('keypress', (e) => {
        // Allow submission on 'Enter' key
        if (e.key === 'Enter') {
            checkPasscode();
        }
    });

    // (OLD Init code is now in initializeApp())
    // renderTopicButtons();
    // currentTopicTitle.textContent = currentTopic; 
    // renderWordList(true); 
    // renderControls();
});