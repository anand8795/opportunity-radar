// Demo opportunities data
const opportunities = [
    {
        id: 1,
        title: "Frontend Engineer Internship",
        organization: "Google",
        deadline: "2024-09-25",
        reward: "$8,000/month",
        category: "internship"
    },
    {
        id: 2,
        title: "Cloud Infrastructure Engineer",
        organization: "AWS",
        deadline: "2024-09-30",
        reward: "$9,500/month",
        category: "job"
    },
    {
        id: 3,
        title: "HackTech 2024",
        organization: "Stanford University",
        deadline: "2024-09-20",
        reward: "$50,000 in prizes",
        category: "hackathon"
    },
    {
        id: 4,
        title: "AI/ML Engineering Fellowship",
        organization: "Meta",
        deadline: "2024-10-15",
        reward: "$10,000/month",
        category: "internship"
    },
    {
        id: 5,
        title: "Microsoft Learn Student Ambassador",
        organization: "Microsoft",
        deadline: "2024-09-28",
        reward: "Free cloud credits",
        category: "scholarship"
    },
    {
        id: 6,
        title: "Global Data Science Contest",
        organization: "Kaggle",
        deadline: "2024-09-22",
        reward: "$25,000 in prizes",
        category: "contest"
    },
    {
        id: 7,
        title: "Backend Developer - Full Time",
        organization: "Stripe",
        deadline: "2024-10-31",
        reward: "$150,000 - $200,000",
        category: "job"
    },
    {
        id: 8,
        title: "AI Research Scholarship",
        organization: "OpenAI",
        deadline: "2024-09-18",
        reward: "$50,000 for research",
        category: "scholarship"
    },
    {
        id: 9,
        title: "Summer Internship Program",
        organization: "Apple",
        deadline: "2024-10-10",
        reward: "$7,500/month",
        category: "internship"
    },
    {
        id: 10,
        title: "DevOps Engineer",
        organization: "Netflix",
        deadline: "2024-11-05",
        reward: "$180,000 - $220,000",
        category: "job"
    },
    {
        id: 11,
        title: "AI/ML Hackathon",
        organization: "TechCrunch",
        deadline: "2024-09-27",
        reward: "$100,000 in prizes",
        category: "hackathon"
    },
    {
        id: 12,
        title: "Cloud Native Development Contest",
        organization: "CNCF",
        deadline: "2024-10-05",
        reward: "$30,000 in prizes",
        category: "contest"
    }
];

// State management
let currentFilter = 'all';
let searchQuery = '';
let savedOpportunities = JSON.parse(localStorage.getItem('savedOpportunities')) || [];

// Get category display name
function getCategoryDisplay(category) {
    const categoryMap = {
        internship: '💼 Internship',
        job: '🏢 Job',
        hackathon: '🛠️ Hackathon',
        scholarship: '🎓 Scholarship',
        contest: '🏆 Contest'
    };
    return categoryMap[category] || category;
}

// Calculate days until deadline
function daysUntilDeadline(deadlineStr) {
    const deadline = new Date(deadlineStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    deadline.setHours(0, 0, 0, 0);
    const diff = deadline - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// Get deadline status
function getDeadlineStatus(days) {
    if (days <= 3) return 'urgent';
    if (days <= 7) return 'soon';
    return 'normal';
}

// Get deadline text
function getDeadlineText(days) {
    if (days < 0) return 'Expired';
    if (days === 0) return 'Today';
    if (days === 1) return 'Tomorrow';
    return `${days} days left`;
}

// Create opportunity card
function createOpportunityCard(opp) {
    const days = daysUntilDeadline(opp.deadline);
    const status = getDeadlineStatus(days);
    const deadlineText = getDeadlineText(days);
    const isSaved = savedOpportunities.includes(opp.id);

    const card = document.createElement('div');
    card.className = 'opportunity-card';
    card.innerHTML = `
        <div class="card-header">
            <div>
                <div class="card-title">${opp.title}</div>
                <div class="card-org">${opp.organization}</div>
            </div>
            <button class="save-btn ${isSaved ? 'saved' : ''}" data-id="${opp.id}" title="Save opportunity">
                ${isSaved ? '❤️' : '🔖'}
            </button>
        </div>
        <div class="card-body">
            <div class="card-category">${getCategoryDisplay(opp.category)}</div>
            <div class="card-info">
                <div class="info-row">
                    <span class="info-label">📅 Deadline</span>
                    <span class="deadline-badge deadline-${status}">${deadlineText}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">💰 Reward</span>
                    <span class="info-value">${opp.reward}</span>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <button class="apply-btn" data-id="${opp.id}">Apply Now →</button>
        </div>
    `;

    // Add event listeners
    const saveBtn = card.querySelector('.save-btn');
    const applyBtn = card.querySelector('.apply-btn');

    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleSave(opp.id, saveBtn);
    });

    applyBtn.addEventListener('click', () => {
        alert(`Redirecting to apply for "${opp.title}" at ${opp.organization}...`);
    });

    return card;
}

// Toggle save opportunity
function toggleSave(oppId, button) {
    const index = savedOpportunities.indexOf(oppId);
    if (index > -1) {
        savedOpportunities.splice(index, 1);
        button.classList.remove('saved');
        button.textContent = '🔖';
    } else {
        savedOpportunities.push(oppId);
        button.classList.add('saved');
        button.textContent = '❤️';
    }
    localStorage.setItem('savedOpportunities', JSON.stringify(savedOpportunities));
}

// Filter opportunities based on category and search
function getFilteredOpportunities() {
    return opportunities.filter(opp => {
        const matchesCategory = currentFilter === 'all' || opp.category === currentFilter;
        const matchesSearch = searchQuery === '' || 
                            opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            opp.organization.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
}

// Get closing soon opportunities (within 7 days)
function getClosingSoonOpportunities() {
    return opportunities
        .filter(opp => {
            const days = daysUntilDeadline(opp.deadline);
            return days >= 0 && days <= 7;
        })
        .sort((a, b) => daysUntilDeadline(a.deadline) - daysUntilDeadline(b.deadline));
}

// Render opportunities grid
function renderOpportunities() {
    const grid = document.getElementById('opportunitiesGrid');
    const filtered = getFilteredOpportunities();

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <div class="empty-state">
                    <div class="empty-state-icon">🔍</div>
                    <div class="empty-state-title">No opportunities found</div>
                    <p>Try adjusting your filters or search query</p>
                </div>
            </div>
        `;
        return;
    }

    grid.innerHTML = '';
    filtered.forEach(opp => {
        grid.appendChild(createOpportunityCard(opp));
    });
}

// Render closing soon section
function renderClosingSoon() {
    const grid = document.getElementById('closingSoon');
    const closing = getClosingSoonOpportunities();

    if (closing.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px;">
                <div class="empty-state">
                    <div class="empty-state-icon">✨</div>
                    <div class="empty-state-title">No opportunities closing soon</div>
                    <p>All current opportunities have more than a week left</p>
                </div>
            </div>
        `;
        return;
    }

    grid.innerHTML = '';
    closing.forEach(opp => {
        grid.appendChild(createOpportunityCard(opp));
    });
}

// Event listeners setup
function setupEventListeners() {
    // Category filter buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderOpportunities();
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', () => {
        searchQuery = searchInput.value;
        renderOpportunities();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchQuery = searchInput.value;
            renderOpportunities();
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    renderClosingSoon();
    renderOpportunities();
});