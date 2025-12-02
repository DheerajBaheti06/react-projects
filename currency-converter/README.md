# 🌍 Currency Converter Pro

A professional React-based currency converter application with AI-powered travel insights, real-time exchange rates, and interactive visualizations.

## ✨ Features

- **🔄 Real-time Exchange Rates**: Live currency data from Frankfurter API (35+ currencies)
- **🤖 Floating AI Travel Insights**: Google Gemini 2.5 Flash powered local buying power analysis with floating modal interface
- **📊 Interactive Charts**: 30-day historical exchange rate visualization with Chart.js
- **🚀 Modern UI/UX**: Glass morphism design with smooth animations and transitions
- **📱 Mobile-First Responsive**: Optimized for all screen sizes with Tailwind CSS
- **🔄 Smart Currency Swap**: One-click currency pair swapping
- **💱 Multi-Currency Quick Reference**: Popular currency pairs at a glance
- **🌐 Flag Integration**: Visual country flags for currency identification
- **🎯 Space-Efficient Design**: Floating AI panel keeps main interface clutter-free
- **👨‍💻 Developer Branding**: Personal GitHub and LinkedIn integration

## 🚀 Quick Start

### Prerequisites

- Node.js 20.19+ or 22.12+ (recommended)
- Package manager (NPM or Yarn)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd currency-converter
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment (Optional for AI features)**

   Create a `.env` file in the root directory:

   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

   Get your Gemini API key from [Google AI Studio](https://ai.google.dev/)

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Tech Stack

- **React 18.2.0** - Frontend framework with hooks
- **Vite.js 7.2.4** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **Chart.js 4.5.1** - Interactive charting library
- **Lucide React 0.555.0** - Modern icon system
- **Axios 1.13.2** - HTTP client for API requests
- **Google Gemini 2.5 Flash** - AI-powered travel insights

## 📂 Project Architecture

```txt
src/
├── components/
│   ├── InputBox.jsx          # Currency input with dropdown
│   ├── GeminiInsights.jsx    # AI-powered travel insights
│   ├── CurrencyChart.jsx     # Historical rate charts
│   ├── DeveloperInfo.jsx     # Developer profile component
│   └── index.js              # Component exports
├── hooks/
│   └── useCurrencyInfo.js    # Currency data fetching hook
├── App.jsx                   # Main application container
└── main.jsx                  # Application entry point
```

## 🔧 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint checks
```

## 🌐 API Integration

The application integrates with multiple APIs:

- **Frankfurter API**: Real-time exchange rates
- **Flag CDN**: Country flag images
- **Google Gemini AI**: Travel insights and local buying power

## 📱 Component Overview

### InputBox Component

- Currency amount input with validation
- Flag-integrated currency dropdown
- Loading states and error handling
- Mobile-optimized touch interactions

### Floating AI Component

- **🤖 Smart Floating Button**: Robot icon (🤖) when closed, close icon (×) when opened
- **🎯 Modal Interface**: Click-to-open floating panel that doesn't clutter the main interface
- **🎨 Multiple Close Options**: Close via button, outside click, or floating button toggle
- **📱 Mobile Optimized**: Touch-friendly interactions with proper z-index layering
- **♿ Accessibility**: ARIA labels and keyboard navigation support

### GeminiInsights Component

- AI-powered local buying power analysis
- Travel tips and cultural insights
- Retry logic with graceful fallbacks
- Now integrated as floating modal for better UX

### CurrencyChart Component

- Interactive historical rate visualization
- Customizable time periods (7, 30, 90 days)
- Responsive chart scaling
- Hover interactions and tooltips

## 🎯 Using the Floating AI Feature

### Opening Travel Insights

1. Look for the **🤖 robot icon** floating button in the bottom-right corner
2. Click the floating button to open the AI travel insights modal
3. Get instant local buying power analysis for your currency conversion

### Closing the Modal

- **Method 1**: Click the **× close button** in the top-right corner of the modal
- **Method 2**: Click anywhere **outside the modal** on the backdrop
- **Method 3**: Click the **floating button again** (it shows × when open)

### AI Insights Features

- **Smart Analysis**: Get context about what your converted amount can buy locally
- **Travel Tips**: Cultural money advice and local insights
- **Real-time Processing**: Powered by Google Gemini 2.5 Flash API
- **Fallback Handling**: Graceful error handling with retry logic

## 🎨 Design Features

- **Glass Morphism UI**: Modern frosted glass aesthetic
- **Gradient Backgrounds**: Dynamic colour transitions
- **Smooth Animations**: CSS transitions and transforms
- **Mobile-First**: Responsive design for all devices
- **Accessibility**: ARIA labels and keyboard navigation

## 🔐 Environment Variables

| Variable              | Description              | Required |
| --------------------- | ------------------------ | -------- |
| `VITE_GEMINI_API_KEY` | Google Gemini AI API key | Optional |

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder contains the production-ready application.

### Deploy to Platform

```bash
npx vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload dist folder to Netlify
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Dheeraj Baheti** - Full Stack Developer

- GitHub: [@DheerajBaheti06](https://github.com/DheerajBaheti06)
- LinkedIn: [Dheeraj Baheti](https://linkedin.com/in/dheeraj-baheti1)

---

## Built With ❤️

Using React and modern web technologies
