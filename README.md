# StoryBook_Demo

This repository demonstrates the capabilities of the Storybook package, providing an interactive environment for viewing and testing UI components. It serves as a valuable tool for developers to select the most appropriate components for their use cases and assists QA/QC teams in thoroughly testing each component independently

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
  - [Development (`npm run dev`)](#development)
  - [Build (`npm run build`)](#build)
  - [Linting (`npm run lint`)](#linting)
  - [Preview (`npm run preview`)](#preview)
  - [Storybook (`npm run storybook`)](#storybook)
  - [Build Storybook (`npm run build-storybook`)](#build-storybook)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation

To get started with this project, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine.

    ```bash
    git clone git@github.com:IZO-420/StoryBook_Demo.git
    cd StoryBook_Demo
    ```

2. **Install Dependencies**: Install the required project dependencies.

    ```bash
    npm install
    ```

    This command will download and install all the necessary packages listed in `package.json`.

## Available Scripts

In the project directory, you can run the following scripts:

### Development

**`npm run dev`**

- **Purpose**: Starts the development server using Vite, which provides a fast and optimized environment for developing components.
- **Usage**: Use this command while actively developing your components. Vite will automatically watch your files for changes and reload the browser.

### Build

**`npm run build`**

- **Purpose**: Compiles TypeScript files and bundles the project using Vite for production.
- **Usage**: Run this command to create a production-ready build of your project. The compiled files will be output to the `dist` directory.

### Linting

**`npm run lint`**

- **Purpose**: Runs ESLint across your codebase to enforce consistent coding standards and catch potential errors.
- **Usage**: Use this command regularly during development to maintain code quality.

### Preview

**`npm run preview`**

- **Purpose**: Serves the production build locally using Vite.
- **Usage**: Run this command to test the production build of your project in a local environment before deploying it.

### Storybook

**`npm run storybook`**

- **Purpose**: Starts the Storybook development server on port 6006.
- **Usage**: Use this command to interactively explore and test your components in isolation within the Storybook interface at `http://localhost:6006`.

### Build Storybook

**`npm run build-storybook`**

- **Purpose**: Builds the Storybook static site for deployment.
- **Usage**: Run this command to generate static files for your Storybook documentation, which can be deployed as a standalone site or integrated into your CI/CD pipeline. The static files will be located in the `storybook-static` directory.

## Contributing

Contributions are welcome! Please submit a pull request if you have improvements or new features to add.

## Contact

For any inquiries or questions, please contact [azlarab.oujdad.izo@gmail.com](mailto:azlarab.oujdad.izo@gmail.com).
