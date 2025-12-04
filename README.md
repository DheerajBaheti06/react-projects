# 🌍 Currency Converter Pro

🔗 **Live Demo:** https://currency-converter-dheerajbaheti-projects.vercel.app/

A React-based currency converter with **real-time exchange rates, historical charts, and AI-generated travel insights**.

---

## ✨ Features

### 💱 Currency Conversion
- 🔄 Real-time exchange rates from Frankfurter API  
- 💱 One-click currency swap  
- 🌐 Country flag display  
- 📊 7 / 30 / 90-day historical rate charts  

### 🤖 AI Travel Insights (Google Gemini)
- 🛡️ Safety information  
- 🍽️ Must-eat foods  
- ☁️ Weather details  
- 💰 Local buying power  

### 🎨 UI & Experience
- 📱 Fully responsive design  
- 🎯 Floating AI panel  
- ⚡ Fast performance using Vite  
- 🎨 Styled with Tailwind CSS  

---

## 🚀 Setup Instructions

### Requirements
- Node.js 20.19+ or 22.12+
- NPM or Yarn

---

### Installation

```bash
git clone <repository-url>
cd currency-converter
npm install
```

---

### Environment Variable (Optional)

Create a `.env` file:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Get your API key from Google AI Studio.

---

### Run Project

```bash
npm run dev
```

Open in browser: http://localhost:5173

---

## 🛠️ Technologies Used

- React 18  
- Vite.js 7  
- Tailwind CSS 3  
- Chart.js 4  
- Frankfurter API  
- Google Gemini API  
- Flag CDN  
- Lucide React  

---

## 📂 Project Structure

```
currency-converter/
├── public/
│   └── vite.svg               # Vite favicon
├── src/
│   ├── components/
│   │   ├── CurrencyChart.jsx  # Historical rate charts
│   │   ├── DeveloperInfo.jsx  # Developer info bar
│   │   ├── GeminiInsights.jsx # AI travel insights
│   │   ├── InputBox.jsx       # Currency dropdown input
│   │   └── index.js           # Component exports
│   ├── hooks/
│   │   ├── getCurrencies.js       # Currency list
│   │   ├── useConvertCurrency.js  # Exact currency fetch & Conversion logic
│   │   └── useCurrencyInfo.js     # Fetch currency info
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 📌 Using the Floating AI Panel

Click the 🤖 button to view:
- Safety info  
- Food suggestions  
- Weather details  
- Buying power  

Close using outside click, × button, or toggle.

---

## 🔧 Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

---

## 🌐 APIs Used

- Frankfurter API  
- Google Gemini API  
- Flag CDN  

---

## 📄 License

MIT License

---

## 👨‍💻 Developer

**Dheeraj Baheti**

- GitHub: https://github.com/DheerajBaheti06  
- LinkedIn: https://linkedin.com/in/dheeraj-baheti1  

---

Built with React, Tailwind CSS, Chart.js & Google Gemini API.
