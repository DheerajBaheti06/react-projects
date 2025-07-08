# Super Table - Advanced Table Component

A modern table application built with React, showcasing advanced UI components using Shadcn/ui and Radix UI primitives.

## Features

- **Modern UI Components**: Built with Shadcn/ui component library
- **Radix UI Primitives**: Accessible and customizable components
- **Tailwind CSS**: Utility-first styling with custom animations
- **TypeScript Support**: Type-safe development experience
- **Responsive Design**: Mobile-first approach
- **Form Integration**: Input components with validation support

## Tech Stack

- **React 18.2.0** - Frontend framework
- **Vite 4.2.1** - Build tool and development server
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **Shadcn/ui** - Modern component library
- **Radix UI** - Accessible component primitives
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Utility class merging
- **Lucide React** - Icon library

## Component Library

### UI Components Used

- **Button** - Customizable button with variants
- **Input** - Form input with validation
- **Table** - Advanced table with sorting and filtering
- **TableCaption** - Table caption component
- **TableHeader** - Table header row
- **TableBody** - Table body container
- **TableRow** - Table row component
- **TableCell** - Table cell component
- **TableHead** - Table header cell

## Project Structure

```
superTable/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.jsx        # Button component
│   │       ├── input.jsx         # Input component
│   │       └── table.jsx         # Table components
│   ├── lib/
│   │   └── utils.js              # Utility functions
│   ├── App.jsx                   # Main application
│   └── main.jsx                  # Entry point
├── components.json               # Shadcn/ui configuration
├── jsconfig.json                 # JavaScript configuration
└── package.json
```

## Getting Started

1. Clone the repository
2. Navigate to the superTable directory
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

## Component Configuration

### Shadcn/ui Setup

The project uses Shadcn/ui components configured in `components.json`:

```json
{
  "style": "default",
  "rsc": false,
  "tsx": false,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### Tailwind Configuration

Enhanced with additional utilities and animations:

- **CSS Variables**: For theming support
- **Tailwind Animate**: Additional animation utilities
- **Custom Colors**: Extended color palette
- **Responsive Design**: Mobile-first breakpoints

## Key Features Implementation

### Form Handling

- Input components with placeholder text
- Form validation support (commented out for future implementation)
- Accessible form controls

### Table Structure

- Responsive table layout
- Sortable columns (ready for implementation)
- Customizable table cells
- Caption support for accessibility

### Styling System

- Consistent design tokens
- Dark/light theme support
- Hover states and transitions
- Focus indicators for accessibility

## Current Implementation

The application currently includes:

- Three input fields (name, gender, age)
- Add button for form submission
- Table structure ready for data display
- Modern UI with proper spacing and typography

## Future Enhancements

### Planned Features

- **Data Management**: Connect form to table data
- **CRUD Operations**: Add, edit, delete table rows
- **Search & Filter**: Search functionality across table data
- **Sorting**: Column-based sorting
- **Pagination**: Handle large datasets
- **Export**: Export table data to CSV/PDF
- **Bulk Actions**: Select multiple rows for operations
- **Validation**: Form validation with error messages

### Advanced Features

- **Virtual Scrolling**: Performance optimization for large datasets
- **Column Resizing**: Draggable column widths
- **Row Selection**: Multi-select with checkboxes
- **Contextual Actions**: Right-click menu for row actions
- **Real-time Updates**: Live data synchronization
- **Accessibility**: Enhanced keyboard navigation
- **Mobile Optimization**: Touch-friendly interactions

## Development Notes

### Component Architecture

- Follows compound component pattern
- Utilizes Radix UI primitives for accessibility
- Implements proper TypeScript types
- Uses forwarded refs for component composition

### Styling Approach

- Utility-first CSS with Tailwind
- Component variants with CVA
- Consistent spacing and typography
- Responsive design patterns

### Performance Considerations

- Lazy loading components
- Optimized bundle size
- Efficient re-rendering patterns
- Memory management for large tables

## Learning Objectives

This project demonstrates:

- Modern React component patterns
- Advanced UI library integration
- TypeScript in React applications
- Accessibility best practices
- Performance optimization techniques
- Responsive design implementation
- Component composition patterns

---

_Part of the React Projects Collection by Dheeraj_
