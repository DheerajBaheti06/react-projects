# Password Generator

A secure and customizable password generator built with React and Vite, featuring a clean UI and clipboard integration.

## Features

- **Customizable Length**: Generate passwords from 6 to 100 characters
- **Character Options**: Include/exclude numbers and special characters
- **One-Click Copy**: Copy generated password to clipboard instantly
- **Real-time Generation**: Password updates automatically when options change
- **Secure Algorithm**: Uses JavaScript's Math.random() for password generation
- **Responsive Design**: Modern UI with Tailwind CSS

## Tech Stack

- **React 18.2.0** - Frontend framework with Hooks
- **Vite 7.0.3** - Build tool and development server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## Key React Concepts Demonstrated

### Hooks Used

- `useState` - Managing password state and options
- `useEffect` - Triggering password generation on option changes
- `useCallback` - Optimizing password generation and copy functions
- `useRef` - Direct DOM manipulation for text selection

### Password Generation Logic

```javascript
const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  setPassword(pass);
}, [length, numberAllowed, charAllowed, setPassword]);
```

## Project Structure

```
password-generator/
├── src/
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Tailwind CSS imports
├── public/
├── index.html
└── package.json
```

## Getting Started

1. Clone the repository
2. Navigate to the password-generator directory
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

## Usage

1. **Adjust Length**: Use the slider to set password length (6-100 characters)
2. **Toggle Numbers**: Check/uncheck to include numbers (0-9)
3. **Toggle Characters**: Check/uncheck to include special characters
4. **Copy Password**: Click the "Copy" button to copy to clipboard
5. **Auto-Generation**: Password updates automatically when settings change

## Character Sets

- **Letters**: A-Z, a-z (always included)
- **Numbers**: 0-9 (optional)
- **Special Characters**: `!@#$%^&\*-\_+=[]{}~`` (optional)

## UI Features

- **Dark Theme**: Modern dark gray background with orange accents
- **Responsive Layout**: Centered design that works on all screen sizes
- **Interactive Elements**: Hover effects on buttons and smooth transitions
- **Visual Feedback**: Clear indication of current settings

## Security Notes

- Uses `Math.random()` for character selection
- Passwords are generated client-side only
- No password storage or transmission
- Suitable for general use, not cryptographic applications

## Future Enhancements

- Add password strength indicator
- Include more character sets (extended ASCII)
- Add password history (with clear option)
- Implement cryptographically secure random generation
- Add password policy templates
- Include pronounceable password option

---

_Part of the React Projects Collection by Dheeraj_
