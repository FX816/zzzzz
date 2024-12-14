// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
        }
    });
});

// Unit Circle Visualization
class UnitCircle {
    constructor() {
        this.canvas = document.getElementById('unitCircle');
        this.ctx = this.canvas.getContext('2d');
        this.currentAngle = 0;
        this.isPlaying = false;
        this.animationId = null;
        this.setupCanvas();
        this.setupControls();
        this.draw();
    }

    setupCanvas() {
        const resize = () => {
            const container = this.canvas.parentElement;
            const size = container.offsetWidth;
            this.canvas.width = size;
            this.canvas.height = size;
            this.draw();
        };

        window.addEventListener('resize', resize);
        resize();
    }

    setupControls() {
        document.getElementById('decreaseAngle').addEventListener('click', () => {
            this.currentAngle = (this.currentAngle - 5) % 360;
            this.updateAngleDisplay();
            this.draw();
        });

        document.getElementById('increaseAngle').addEventListener('click', () => {
            this.currentAngle = (this.currentAngle + 5) % 360;
            this.updateAngleDisplay();
            this.draw();
        });

        const playPauseBtn = document.getElementById('playPause');
        playPauseBtn.addEventListener('click', () => {
            this.isPlaying = !this.isPlaying;
            playPauseBtn.textContent = this.isPlaying ? '⏸' : '▶';
            
            if (this.isPlaying) {
                this.animate();
            } else {
                cancelAnimationFrame(this.animationId);
            }
        });
    }

    animate() {
        this.currentAngle = (this.currentAngle + 1) % 360;
        this.updateAngleDisplay();
        this.draw();
        
        if (this.isPlaying) {
            this.animationId = requestAnimationFrame(() => this.animate());
        }
    }

    updateAngleDisplay() {
        const radians = (this.currentAngle * Math.PI / 180).toFixed(2);
        document.getElementById('angleDegrees').textContent = `${this.currentAngle}°`;
        document.getElementById('angleRadians').textContent = `${radians} рад`;
    }

    draw() {
        const { width, height } = this.canvas;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 - 60;

        // Clear canvas
        this.ctx.clearRect(0, 0, width, height);

        // Draw coordinate system
        this.ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--text-color');
        this.ctx.lineWidth = 2;
        
        // Draw axes
        this.ctx.beginPath();
        this.ctx.moveTo(0, centerY);
        this.ctx.lineTo(width, centerY);
        this.ctx.moveTo(centerX, 0);
        this.ctx.lineTo(centerX, height);
        this.ctx.stroke();

        // Draw unit circle
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        // Draw current angle
        const angleRad = this.currentAngle * Math.PI / 180;
        const pointX = centerX + radius * Math.cos(angleRad);
        const pointY = centerY - radius * Math.sin(angleRad);
        
        // Draw angle line
        this.ctx.beginPath();
        this.ctx.moveTo(centerX, centerY);
        this.ctx.lineTo(pointX, pointY);
        this.ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
        this.ctx.lineWidth = 4;
        this.ctx.stroke();
        
        // Draw moving point
        this.ctx.beginPath();
        this.ctx.arc(pointX, pointY, 8, 0, 2 * Math.PI);
        this.ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
        this.ctx.fill();

        // Draw angle arc
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius * 0.2, 0, -angleRad, true);
        this.ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
    }
}

// Angle Converter
class AngleConverter {
    constructor() {
        this.degreesInput = document.getElementById('degrees');
        this.radiansInput = document.getElementById('radians');
        this.setupListeners();
    }

    setupListeners() {
        this.degreesInput.addEventListener('input', () => {
            const degrees = parseFloat(this.degreesInput.value) || 0;
            const radians = (degrees * Math.PI / 180).toFixed(4);
            this.radiansInput.value = radians;
        });

        this.radiansInput.addEventListener('input', () => {
            const radians = parseFloat(this.radiansInput.value) || 0;
            const degrees = (radians * 180 / Math.PI).toFixed(2);
            this.degreesInput.value = degrees;
        });
    }
}

// Quiz Implementation
document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector(".start-button");
    const nextButton = document.querySelector(".next-button");
    const continueButton = document.querySelector(".continue-button");
    const questionContainer = document.querySelector(".question-container");
    const optionsContainer = document.querySelector(".options-container");
    const questionText = document.querySelector(".question-text");
    const scoreValue = document.querySelector(".score-value");
    const questionCounter = document.querySelector(".question-counter");
    const progressFill = document.querySelector(".progress-fill");

    // Quiz Data
    const quizData = [
        {
            question: "Сколько радиан в полном круге?",
            options: ["π радиан", "2π радиан", "3π радиан", "4π радиан"],
            correct: 1,
            explanation: "Полный круг составляет 2π радиан (360 градусов)."
        },
        {
            question: "Чему равен 1 радиан в градусах?",
            options: ["45°", "57.3°", "60°", "90°"],
            correct: 1,
            explanation: "1 радиан ≈ 57.3° (180°/π)"
        },
        {
            question: "Сколько градусов в π/2 радиан?",
            options: ["45°", "60°", "90°", "180°"],
            correct: 2,
            explanation: "π/2 радиан = 90° (четверть круга)"
        },
        {
            question: "Какой угол соответствует π/6 радиан?",
            options: ["20°", "30°", "45°", "60°"],
            correct: 1,
            explanation: "π/6 радиан = 30° (π/6 × 180°/π = 30°)"
        },
        {
            question: "Чему равен угол π/4 радиан?",
            options: ["30°", "45°", "60°", "90°"],
            correct: 1,
            explanation: "π/4 радиан = 45° (восьмая часть круга)"
        },
        {
            question: "Сколько радиан в 180 градусах?",
            options: ["π/2", "π", "3π/2", "2π"],
            correct: 1,
            explanation: "180° = π радиан (половина круга)"
        },
        {
            question: "Какой угол в радианах соответствует 270 градусам?",
            options: ["π", "3π/2", "2π", "5π/3"],
            correct: 1,
            explanation: "270° = 3π/2 радиан (три четверти круга)"
        },
        {
            question: "Чему равен угол 2π/3 радиан в градусах?",
            options: ["90°", "120°", "150°", "180°"],
            correct: 1,
            explanation: "2π/3 радиан = 120° (треть круга)"
        },
        {
            question: "Сколько градусов в 5π/6 радиан?",
            options: ["120°", "150°", "160°", "175°"],
            correct: 1,
            explanation: "5π/6 радиан = 150° (5/6 от 180°)"
        },
        {
            question: "Какой угол больше: π/3 радиан или 50 градусов?",
            options: ["π/3 радиан", "50 градусов", "Они равны", "Зависит от квадранта"],
            correct: 0,
            explanation: "π/3 радиан = 60°, что больше чем 50°"
        },
        {
            question: "Сколько радиан в 45 градусах?",
            options: ["π/6", "π/4", "π/3", "π/2"],
            correct: 1,
            explanation: "45° = π/4 радиан (восьмая часть круга)"
        },
        {
            question: "Какой угол меньше: 2π/3 радиан или 100 градусов?",
            options: ["2π/3 радиан", "100 градусов", "Они равны", "Зависит от направления"],
            correct: 1,
            explanation: "2π/3 радиан = 120°, что больше чем 100°"
        },
        {
            question: "Чему равен угол 3π/4 радиан в градусах?",
            options: ["115°", "125°", "135°", "145°"],
            correct: 2,
            explanation: "3π/4 радиан = 135° (три восьмых круга)"
        },
        {
            question: "Сколько радиан в 240 градусах?",
            options: ["4π/3", "3π/2", "5π/3", "7π/6"],
            correct: 0,
            explanation: "240° = 4π/3 радиан (две трети круга)"
        },
        {
            question: "Какой угол соответствует 5π/4 радиан?",
            options: ["205°", "215°", "225°", "235°"],
            correct: 2,
            explanation: "5π/4 радиан = 225° (пять восьмых круга)"
        },
        {
            question: "Сколько градусов в π/12 радиан?",
            options: ["15°", "20°", "25°", "30°"],
            correct: 0,
            explanation: "π/12 радиан = 15° (одна двенадцатая круга)"
        },
        {
            question: "Чему равен угол 7π/6 радиан в градусах?",
            options: ["190°", "200°", "210°", "220°"],
            correct: 2,
            explanation: "7π/6 радиан = 210° (семь шестых круга)"
        },
        {
            question: "Сколько радиан в 300 градусах?",
            options: ["5π/3", "7π/4", "11π/6", "23π/12"],
            correct: 0,
            explanation: "300° = 5π/3 радиан (пять третей круга)"
        },
        {
            question: "Какой угол соответствует 11π/6 радиан?",
            options: ["315°", "320°", "330°", "340°"],
            correct: 2,
            explanation: "11π/6 радиан = 330° (одиннадцать шестых круга)"
        },
        {
            question: "В каких единицах измеряется длина дуги окружности единичного радиуса?",
            options: ["В радианах", "В градусах", "В метрах", "В радианах и градусах"],
            correct: 0,
            explanation: "Длина дуги окружности единичного радиуса численно равна углу в радианах"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let isAnswered = false;

    // Start Quiz
    startButton.addEventListener("click", () => {
        startButton.style.display = "none";
        continueButton.style.display = "none";
        nextButton.style.display = "none";
        showQuestion();
    });

    // Next Question
    nextButton.addEventListener("click", () => {
        if (!isAnswered) return;
        
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            showResults();
        }
        isAnswered = false;
        nextButton.style.display = "none";
    });

    // Show Question
    function showQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";

        // Update progress
        const progress = ((currentQuestionIndex) / quizData.length) * 100;
        progressFill.style.width = `${progress}%`;

        // Create answer options
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.classList.add("option-button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(index));
            optionsContainer.appendChild(button);
        });

        questionCounter.textContent = `Вопрос ${currentQuestionIndex + 1} из ${quizData.length}`;
    }

    // Check Answer
    function checkAnswer(selectedIndex) {
        if (isAnswered) return;
        
        const currentQuestion = quizData[currentQuestionIndex];
        const buttons = optionsContainer.querySelectorAll(".option-button");
        
        buttons.forEach((button, index) => {
            button.disabled = true;
            if (index === currentQuestion.correct) {
                button.classList.add("correct");
            } else if (index === selectedIndex) {
                button.classList.add("wrong");
            }
        });

        if (selectedIndex === currentQuestion.correct) {
            score++;
            scoreValue.textContent = score;
        }

        isAnswered = true;
        nextButton.style.display = "block";
    }

    // Show Results
    function showResults() {
        questionText.textContent = `Тест завершен! Ваш результат: ${score} из ${quizData.length}`;
        optionsContainer.innerHTML = "";
        nextButton.style.display = "none";
        continueButton.style.display = "block";
        progressFill.style.width = "100%";
    }

    // Continue/Restart Quiz
    continueButton.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        isAnswered = false;
        scoreValue.textContent = "0";
        progressFill.style.width = "0%";
        continueButton.style.display = "none";
        showQuestion();
    });
});

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
    new UnitCircle();
    new AngleConverter();
});
