# Currency Converter

A responsive currency converter application built with React and Vite that provides real-time exchange rates.

## Features

- **Real-time Exchange Rates**: Fetches live currency data from API
- **Swap Functionality**: Quick currency swap with a single click
- **Responsive Design**: Built with Tailwind CSS for mobile-first design
- **Clean UI**: Modern glass-morphism design with background image
- **Multiple Currencies**: Support for various international currencies

## Tech Stack

- **React 18.2.0** - Frontend framework
- **Vite 5.2.0** - Build tool and development server
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **Custom Hooks** - useCurrencyInfo for API integration
- **ESLint** - Code linting and formatting

## Project Structure

```
currency-converter/
├── src/
│   ├── components/
│   │   ├── InputBox.jsx      # Reusable input component
│   │   └── index.js          # Components barrel export
│   ├── hooks/
│   │   └── useCurrencyInfo.js # Custom hook for currency API
│   ├── App.jsx               # Main application component
│   └── main.jsx              # Application entry point
├── public/
├── index.html
└── package.json
```

## API Integration

The app uses a custom hook `useCurrencyInfo` that fetches data from:

```
https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/{currency}.json
```

## Getting Started

1. Clone the repository
2. Navigate to the currency-converter directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Components

### InputBox Component

- Reusable input component for amount and currency selection
- Handles currency dropdown and amount input
- Includes styling for disabled state

### useCurrencyInfo Hook

- Custom React hook for fetching currency data
- Handles API calls and state management
- Returns currency options and exchange rates

## Usage

1. Enter the amount to convert
2. Select the source currency from dropdown
3. Select the target currency from dropdown
4. Click "Convert" to see the result
5. Use "Swap" to quickly exchange source and target currencies

## Future Enhancements

- Add more currency options
- Implement historical exchange rates
- Add currency trend charts
- Include offline support
- Add currency favorites

---

_Part of the React Projects Collection by Dheeraj_
