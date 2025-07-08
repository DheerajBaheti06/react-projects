# Mega Project - Blog Application

A full-stack blog application built with React, Redux Toolkit, and Appwrite backend services. This project demonstrates advanced React concepts and modern web development practices.

## Features

- **User Authentication**: Complete auth system with login/logout
- **Rich Text Editor**: TinyMCE integration for content creation
- **Post Management**: Create, read, update, and delete blog posts
- **File Upload**: Image upload and management with Appwrite Storage
- **State Management**: Redux Toolkit for global state management
- **Routing**: React Router for navigation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Protected Routes**: Authentication-based route protection

## Tech Stack

### Frontend

- **React 18.2.0** - Frontend framework
- **Redux Toolkit 2.2.3** - State management
- **React Router DOM 6.22.3** - Client-side routing
- **React Hook Form 7.51.2** - Form handling
- **TinyMCE React 5.0.1** - Rich text editor
- **HTML React Parser 5.1.10** - HTML parsing

### Backend & Services

- **Appwrite 14.0.0** - Backend as a Service
- **Appwrite Authentication** - User management
- **Appwrite Database** - Document storage
- **Appwrite Storage** - File management

### Development Tools

- **Vite 4.2.1** - Build tool
- **Tailwind CSS 3.4.3** - Styling
- **ESLint** - Code linting

## Project Structure

```
mega-project/
├── src/
│   ├── appwrite/
│   │   ├── auth.js           # Authentication service
│   │   └── config.js         # Database and storage config
│   ├── components/
│   │   ├── Header/           # Navigation components
│   │   ├── Footer/           # Footer component
│   │   ├── Container/        # Layout wrapper
│   │   ├── PostForm/         # Post creation/editing form
│   │   ├── AuthLayout.jsx    # Authentication wrapper
│   │   ├── Button.jsx        # Reusable button component
│   │   ├── Input.jsx         # Form input component
│   │   ├── Login.jsx         # Login component
│   │   ├── SignUp.jsx        # Registration component
│   │   ├── PostCard.jsx      # Post preview component
│   │   ├── RTE.jsx           # Rich text editor wrapper
│   │   └── Select.jsx        # Select dropdown component
│   ├── pages/
│   │   ├── Home.jsx          # Homepage
│   │   ├── Login.jsx         # Login page
│   │   ├── SignUp.jsx        # Registration page
│   │   ├── AllPosts.jsx      # Posts listing
│   │   ├── AddPost.jsx       # Post creation page
│   │   ├── EditPosts.jsx     # Post editing page
│   │   └── Post.jsx          # Individual post view
│   ├── store/
│   │   ├── store.js          # Redux store configuration
│   │   └── authSlice.js      # Authentication slice
│   ├── conf/
│   │   └── conf.js           # Environment configuration
│   └── App.jsx               # Main application component
```

## Key Features Implementation

### Authentication System

- User registration and login
- JWT-based authentication
- Protected routes with AuthLayout
- Automatic session management

### Rich Text Editor

- TinyMCE integration for blog post creation
- Image upload support
- HTML content parsing and rendering
- WYSIWYG editing experience

### State Management

- Redux Toolkit for efficient state management
- Authentication state handling
- Async actions for API calls
- Centralized store configuration

### Database Operations

- CRUD operations for blog posts
- User-specific post management
- File upload and storage
- Query optimization with Appwrite

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Appwrite account and project setup

### Installation

1. Clone the repository
2. Navigate to the mega-project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

### Running the Application

```bash
npm run dev
```

Open your browser to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Services

### Authentication Service (`auth.js`)

- `createAccount()` - User registration
- `login()` - User authentication
- `getCurrentUser()` - Get current user session
- `logout()` - End user session

### Database Service (`config.js`)

- `createPost()` - Create new blog post
- `updatePost()` - Update existing post
- `deletePost()` - Delete post
- `getPost()` - Get single post
- `getPosts()` - Get all posts
- `uploadFile()` - Upload file to storage
- `deleteFile()` - Delete file from storage

## Redux Store Structure

```javascript
// Auth Slice
{
  status: boolean,     // Authentication status
  userData: object     // User information
}
```

## Component Architecture

### Reusable Components

- **Button**: Customizable button with variants
- **Input**: Form input with validation
- **Select**: Dropdown component
- **Container**: Layout wrapper
- **AuthLayout**: Authentication wrapper

### Page Components

- **Home**: Landing page with recent posts
- **AllPosts**: Posts listing with pagination
- **AddPost**: Post creation form
- **EditPosts**: Post editing interface
- **Post**: Individual post view

## Future Enhancements

- **Search Functionality**: Search posts by title/content
- **Categories**: Post categorization system
- **Comments**: User comments on posts
- **User Profiles**: Extended user profile management
- **Social Features**: Like, share, and follow functionality
- **Admin Panel**: Admin dashboard for content management
- **SEO Optimization**: Meta tags and structured data
- **Performance**: Image optimization and lazy loading

## Learning Objectives

This project demonstrates:

- Advanced React hooks and patterns
- Redux Toolkit for state management
- Integration with Backend-as-a-Service (Appwrite)
- Form handling with React Hook Form
- Rich text editing implementation
- Authentication flow in React applications
- File upload and management
- Responsive design with Tailwind CSS

---

_Part of the React Projects Collection by Dheeraj_
