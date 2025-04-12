# Test Assignment

This project is a test assignment built with [Next.js](https://nextjs.org), [React](https://reactjs.org), and [TypeScript](https://www.typescriptlang.org). It includes ESLint and Prettier integration along with Husky and lint-staged to ensure code quality through pre-commit hooks.

## 🔧 Technologies & Tools

- **Next.js** for server-side rendering and routing
- **React** for building user interfaces
- **TypeScript** for type safety
- **ESLint** with Next.js rules for consistent code quality
- **Prettier** for code formatting
- **Husky** & **lint-staged** for pre-commit checks
- **Axios** for HTTP requests
- **SWR** for data fetching and caching

## 🚀 Getting Started

### 1. Install Dependencies

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/test-assignment.git
cd test-assignment
npm install
```

### 2. Run the Development Server

Start the development server (note the custom port configured):

```bash
npm run dev
```

Open [http://localhost:3850](http://localhost:3850) in your browser to see the project in action.

### 3. Build and Start

To build the project for production:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## 🔍 Code Quality & Formatting

This project uses ESLint and Prettier for maintaining code quality and consistency.

- **ESLint** will check your code for errors and enforce code style rules.
- **Prettier** formats your code automatically.

### Pre-commit Hook

Before every commit, Husky runs a pre-commit hook which executes lint-staged to automatically fix linting issues with ESLint and format your code using Prettier:

```json
// In package.json -> lint-staged section:
"lint-staged": {
  "**/*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write --ignore-unknown"
  ]
}
```

> **Note:** Make sure ESLint runs before Prettier to avoid conflicts.
