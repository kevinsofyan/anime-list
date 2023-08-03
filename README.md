# Anime List Application

This is an Anime List application built using TypeScript, React, SCSS, Ant Design UI, and Vite. The application allows users to browse and search for anime titles, view their details, and filter them based on anime types and NSFW content.

User authentication is implemented using bcrypt to securely compare passwords, and protected routes are set up to prevent unauthorized access.

## Prerequisites

To run the Anime List application, you need to have Node.js ver installed on your machine.

## Installation

To run tests, run the following command

```bash
git clone https://github.com/kevinsofyan/anime-list.git
cd anime-list
npm install
```

To run localy, run the following command

```bash
npm run dev

```

To build, run the following command

```bash
npm run build

```

## Test

Unit tests are included in the project and can be run using the following command:

```bash
npm test

```

## Features

-   Browse and search for anime titles
-   View detailed information for each anime
-   Filter anime based on anime types and NSFW content
-   List pagination with set limit by 10 items
-   User authentication with secure password comparison
-   Protected routes to prevent unauthorized access
-   Customizable Ant Design components with SCSS styling

## Project Structure

The project follows a well-organized structure to promote modularity and maintainability:

-   src/components: Contains all reusable components.
-   src/pages: Includes pages and features of the application.
-   src/service: Houses the reusable HTTP service using Axios.
-   src/model: Defines TypeScript interfaces and types.
-   src/router: Contains the router configuration.
-   src/utils: Contains reusable JavaScript/TypeScript helper functions.
-   src/assets: Contains assets like images, fonts, and SVG files.

## Customization

The Ant Design components are wrapped with custom SCSS, making it easier to customize the application's appearance. You can update the SCSS styles in the appropriate files within the src/components and src/assets folders to match your desired look and feel.

## Demo

Demo for the application can be accessed here
https://anime-lis.vercel.app/
