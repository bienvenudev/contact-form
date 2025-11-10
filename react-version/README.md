# React Contact Form

A modern, responsive contact form built with React and Vite featuring smooth animations and a professional design.

## Features

- **Responsive Navbar**: Fixed navigation with mobile hamburger menu
- **Dynamic Contact Form**: Toggle between "Say Hi" and "Get Quote" modes
- **Smooth Animations**: CSS transitions for dropdown sections
- **Custom Radio Buttons**: Styled radio buttons matching the green theme
- **Modern Styling**: Green gradient theme with Poppins font
- **Form Validation**: Built-in form state management with React hooks
- **Mobile Responsive**: Optimized for all screen sizes

## Components

- `Navbar`: Fixed navigation component with mobile responsiveness
- `ContactForm`: Main form component with conditional field display
- Smooth CSS transitions for enhanced user experience

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Usage

The form automatically adapts based on the selected option:

- **Say Hi**: Simple contact form with name, email, and message
- **Get Quote**: Extended form with additional service selection and budget fields

## Technologies Used

- React 18
- Vite
- CSS3 with custom animations
- Poppins Google Font

## Development

The project uses modern React practices:

- Functional components with hooks
- CSS modules for styling
- Responsive design principles
- Clean component architecture

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
