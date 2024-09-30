# EntertainmentWebApp

This project is a fully functional, responsive entertainment web application built with Angular. The app allows users to browse, search, and bookmark their favorite movies and TV series. It leverages **NgRx** for state management and **RxJS** for efficient data handling, providing a smooth and engaging user experience. The app matches the provided design closely, incorporating dynamic content rendering and user interaction.

[Live Demo: EntertainmentWebApp](https://amalimovieapp.netlify.app/home)

## Features

- **Browse Movies & TV Shows**: View movies and TV series dynamically rendered from the local JSON data.
- **Search Functionality**: Quickly filter through content using real-time search powered by RxJS.
- **Bookmarking**: Add or remove shows from bookmarks, and view them on a dedicated bookmarked page.
- **NgRx State Management**: Manage application state efficiently with actions, reducers, effects, and selectors.
- **Responsive Design**: Seamless experience across various devices with responsive layouts.
- **Hover Effects**: Interactive hover states that provide visual feedback for a polished user interface.

## Default users
  {
    "email": "test1@gmail.com",
    "password": "test111"
  },
  
  {
    "email": "test2@gmail.com",
    "password": "test222"
  },
  
  {
    "email": "test3@gmail.com",
    "password": "test333"
  }


## Project Setup

### Getting Started

1. Clone the repository:

    ```bash
    git clone git@github.com:ReconfortDev/entertainment-web-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd entertainment-web-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Serve the application locally:

    ```bash
    ng serve
    ```

5. Open your browser and navigate to `http://localhost:4200/`.

### Project Structure

- **src/app/**: Contains the core components, services, and NgRx files (actions, reducers, selectors).
- **assets/**: Includes the local `data.json` file, images, and other static assets.

### Key Technologies

- **Angular**: Frontend framework used to build the application.
- **NgRx**: State management library to handle application state.
- **RxJS**: Library for handling asynchronous data streams.
- **TailwindCSS**: CSS preprocessor used for styling.

## Available Commands

- **Development Server**: Run `ng serve` for a dev server. The application will reload if you change any source files.
- **Build**: Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment

The application is deployed on [Netlify](https://amalimovieapp.netlify.app/home). To deploy updates:

1. Build the application:

    ```bash
    ng build --prod
    ```

2. Push the build files to your hosting provider, or configure automatic deployments via GitHub.

## Contributions

Contributions are welcome! Feel free to fork this repository, create a new branch, and submit a pull request.
