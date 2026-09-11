# Opportunity Radar 🎯

A simple, modern website to help students find internships, jobs, hackathons, scholarships, and contests without missing deadlines.

## Features

✨ **Clean & Modern Design** - Beautiful, responsive interface  
🚀 **Hero Section** - Eye-catching homepage with clear call-to-action  
🔍 **Search Functionality** - Find opportunities by title or organization  
📂 **Category Filters** - Filter by Internships, Jobs, Hackathons, Scholarships, Contests  
🔥 **Closing Soon Section** - See opportunities closing within 7 days  
📌 **Latest Opportunities** - Browse all available opportunities  
💾 **Save for Later** - Save opportunities to browser storage  
⏰ **Deadline Tracking** - See exactly how many days are left  
💰 **Reward Display** - View salary, stipend, or prizes  
📱 **Mobile Friendly** - Works perfectly on all devices  

## Demo Data

The website comes with 12 sample opportunities from top companies like:
- Google
- AWS
- Meta
- Microsoft
- Apple
- Netflix
- OpenAI
- Stripe
- And more!

## How to Run

### Option 1: Simple (Recommended)
1. Download or clone the repository
2. Open `index.html` in your web browser
3. Done! The website will load immediately

### Option 2: Using Python (if you have Python installed)
```bash
# Navigate to the project folder
cd opportunity-radar

# Start a simple HTTP server
python -m http.server 8000

# Open your browser and visit
http://localhost:8000
```

### Option 3: Using Node.js (if you have Node.js installed)
```bash
# Install a simple server
npm install -g http-server

# Start the server
http-server

# Open your browser and visit
http://localhost:8080
```

## File Structure

```
opportunity-radar/
├── index.html       # Main HTML file
├── style.css        # Styling and responsive design
├── script.js        # JavaScript with demo data and functionality
└── README.md        # This file
```

## Usage Guide

### Search
- Type in the search bar to find opportunities by title or company name
- Press Enter or click the Search button

### Filter by Category
- Click any category button at the top to filter opportunities
- Click "All" to see all opportunities again

### View Closing Soon
- Scroll to the "🔥 Closing Soon" section
- See opportunities with deadlines within 7 days

### Save Opportunities
- Click the 🔖 button on any opportunity card to save it
- The button turns ❤️ when saved
- Saved opportunities are stored in your browser

### Apply
- Click "Apply Now →" to apply for an opportunity
- (In this demo, it shows an alert. In a real version, this would link to the application page)

## Opportunity Card Details

Each opportunity card shows:
- **Title** - Name of the opportunity
- **Organization** - Company or institution offering it
- **Category** - Type of opportunity with emoji
- **Deadline** - Days remaining in color-coded badges:
  - 🔴 Red = Urgent (3 days or less)
  - 🟡 Yellow = Soon (4-7 days)
  - 🔵 Blue = Normal (more than 7 days)
- **Reward** - Salary, stipend, or prize amount
- **Save Button** - Save for later
- **Apply Button** - Apply now

## Technical Details

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables and Flexbox/Grid
- **Vanilla JavaScript** - No frameworks or dependencies
- **LocalStorage** - For persisting saved opportunities
- **Responsive Design** - Works on desktop, tablet, and mobile

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- User authentication & accounts
- Backend database
- Real API integration
- Email notifications for closing deadlines
- Saved opportunities page
- Advanced filtering (location, salary range, etc.)
- User profiles & resumes
- Employer posting system
- Community features

## Notes

- This is a frontend-only version with demo data
- Data is stored in `script.js` as a JavaScript array
- Saved opportunities are stored locally in browser (localStorage)
- No server or database is required to run this website

## Getting Started

1. Open `index.html` in your browser
2. Try searching for "Google" or "internship"
3. Click the category buttons to filter
4. Save some opportunities by clicking the 🔖 button
5. Check the "🔥 Closing Soon" section

That's it! You're ready to explore opportunities! 🚀

---

**Don't Miss Your Next Opportunity!**

Made with ❤️ for students