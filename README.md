# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Ukom University Application

## Overview

The Ukom University application is an innovative solution developed by the best team from Ukom University, a leading computer campus in Indonesia. Specifically designed to meet the needs of university profiles, this application provides users with ease in managing and displaying up-to-date information about the university.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Folder Structure](#folder-structure)
5. [Dependencies](#dependencies)
6. [Setup](#setup)
7. [Usage](#usage)
8. [Components](#components)
9. [Styling](#styling)
10. [API Integration](#api-integration)
11. [Contributing](#contributing)
12. [License](#license)

## Introduction

The Ukom University Application is crafted with a focus on user experience. This application is inherently user-friendly, allowing users to seamlessly access it on mobile devices, tablet devices, and computers alike..

## Features

- **User Authentication:** Secure user authentication to enable personalized experiences and interactions.
- **Explore Hot News:** Engaging UI to explore the latest hot news.
-

## Getting Started

To start using the MyFashion Frontend, follow these steps:

1. Clone the repository: `git clone https://github.com/Juaini742/university-front-end.git`
2. Install dependencies: `npm install`
3. Run the application: `npm run dev`

## Folder Structure

- `src/components/atoms`: Reusable React components.
- `src/components/pages`: Page Component File.
- `src/components/molecules`: Small Component of pages.
- `src/components/templates`: Template Component (navbar and footer).
- `src/router`: Router file.
- `src/utils`: Fetching Function.
- `src/middleware`: Authentication using useContext.

## Dependencies

- axios
- framer-motion
- react
- react-dom
- react-hook-form
- react-icons
- react-query
- react-router-dom
- sweetalert2
- swiper
- zod

## Usage

-

## Components

The components in the `src/components` folder are designed to be reusable and modular. Explore each component to understand its functionality and usage.

## Styling

The application utilizes Styled-components for styling, ensuring a consistent and visually appealing design. Check the `src/index.css` folder for styling files.

## API Integration

- http://localhost:8080/api/public/register
- http://localhost:8080/api/public/login
- http://localhost:8080/api/secured/nim
- http://localhost:8080/api/secured/nim
- http://localhost:8080/api/secured/logout
- http://localhost:8080/api/secured/user
- http://localhost:8080/api/secured/getAllCourse
- http://localhost:8080/api/secured/getOneCourse/${id}
- http://localhost:8080/api/secured/addMimberCourse/${id}

## Contributing

We welcome contributions! Feel free to submit pull requests or open issues for any enhancements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.
