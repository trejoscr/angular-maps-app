# Angular - Maps APP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

Here is a brief list of the fundamental topics applied in this project:

  * Handling Libraries Written in JavaScript in TypeScript
  * Using Maps Based on Mapbox (the API is similar to Google Maps)
  * Markers
  * Events
  * FlyTo
  * Geographic Coordinates
  * Components for Map Reusability
  * Persisting Objects
  * @types
  * Zoom
  * Range
  * Standalone

## How to Set Up the Project Locally

### Prerequisites

- Node.js - v^18.19.1 or newer
- npm (Node Package Manager, usually comes with Node.js)
- Text editor - Recommend Visual Studio Code
- Terminal - Required for running Angular CLI commands
- API Key for Mapbox - You can get one for free at [Mapbox](https://www.mapbox.com/)

### Step-by-Step Instructions

#### Clone the Repository

Open your terminal and run the following command to clone the project:

```bash
git clone https://github.com/trejoscr/angular-maps-app.git
```

#### Navigate to the Project Directory

After cloning the repository, go to the project folder:

```bash
cd angular-maps-app
```

#### Install Dependencies

Run the following command to install the required Node modules and dependencies:

```bash
npm install
```

#### Configure .env
Clone the .env.template and rename it to .env.
Fill in the environment variables with the Mapbox key.

#### Development server
Do not use directly in Angular CLI (unless environment variables are created), as the environment variables are based on the .env file.

```bash
npm run start
```

This will compile the project and start a local server. By default, it runs at http://localhost:4200/. Open this URL in your web browser to see the app.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
