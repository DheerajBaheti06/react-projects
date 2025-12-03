## 🔗 Live Demo (https://react-projects-dheerajbaheti-projects.vercel.app/)


# 🌍 Currency Converter Pro



A professional React-based currency converter with **real-time exchange rates**, **interactive charts**, and **AI-powered travel insights**.

---

## ✨ Key Features

* **🔄 Real-time Exchange Rates** – Live currency data via Frankfurter API (35+ currencies)
* **🤖 AI Travel Insights** – Local buying power, safety, and tips powered by Google Gemini 2.5 Flash
* **📊 Historical Charts** – 7/30/90-day exchange rate visualization
* **📱 Mobile-First UI** – Tailwind CSS, fully responsive
* **💱 Quick Currency Swap** – One-click currency pair swap
* **🌐 Flag Integration** – Visual country flags for clarity
* **🎯 Clean Design** – Floating AI panel for minimal UI clutter

---

## 🚀 Quick Start

### Prerequisites

* Node.js 20.19+ or 22.12+
* NPM or Yarn

### Installation

```bash
git clone <repository-url>
cd currency-converter
npm install
```

### Environment Variables (Optional)

Create a `.env` file:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

> Get your Gemini API key from [Google AI Studio](https://ai.google.com/studio)

### Run Project

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Tech Stack

* **React 18**
* **Vite.js 7**
* **Tailwind CSS 3**
* **Chart.js 4**
* **Lucide React**
* **Google Gemini API**

---

## 📂 Project Structure

```
currency-converter/
├── public/
│   └── vite.svg               # Vite favicon
├── src/
│   ├── components/
│   │   ├── CurrencyChart.jsx  # Historical rate charts
│   │   ├── DeveloperInfo.jsx  # Developer information bar
│   │   ├── GeminiInsights.jsx # AI-powered travel insights
│   │   ├── InputBox.jsx       # Currency input with dropdown
│   │   └── index.js           # Component exports
│   ├── hooks/
│   │   ├── getCurrencies.js       # Currency list
│   │   ├── useConvertCurrency.js  # Conversion logic
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

* Click the **🤖 button** (bottom-right)
* Access **local buying power**, **safety**, **food**, and travel **tips**
* Close via **× button**, outside click, or toggle button

---

## 🔧 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build
npm run lint     # ESLint check
```

---

## 🌐 APIs Used

* **Frankfurter API** – Real-time currency rates
* **Flag CDN** – Country flags
* **Google Gemini AI** – Travel insights

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push: `git push origin feature-name`
5. Open a Pull Request

---

## 📄 License

MIT License

---

## 👨‍💻 Developer

**Dheeraj Baheti**

* GitHub: [@DheerajBaheti06](https://github.com/DheerajBaheti06)
* LinkedIn: [Dheeraj Baheti](https://linkedin.com/in/dheeraj-baheti1)

---

Built with **React**, **Tailwind CSS**, **Chart.js**, and **Google Gemini API**.

---
