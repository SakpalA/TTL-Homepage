# TTL Homepage

## This project is a responsive, animated homepage built with React.js that includes modern UI/UX features like transitions, hover effects, and adaptive navigation. The homepage is structured using reusable components, styled with CSS and Tailwind CSS, with clean code organization for maintainability. Product data is centralized in a JSON file, ensuring seamless data sharing across components.

## [Link for assignment](https://sakpala.github.io/TTL-Homepage/)

## Setup Instruction

### Clone the Repository:
    git clone https://github.com/SakpalA/TTL-Homepage.git

### Navigate  to the Project Directory
    cd ttl-homepage

### Install Dependencies
    npm install

### Start the Development Server
    npm start


## Component Structure

### Purpose of this structure 
### Modularity: Each component is self-contained with its logic (.jsx) and styles (.css), making it easier to maintain and update.
### Scalability: The structure can accommodate additional components or features without becoming cluttered.
### Readability: Clear separation of concerns ensures that developers can easily navigate and understand the codebase.
### Reusability: Components can be reused across different parts of the application or in other projects.

### 1. src/ : 
        The main directory all the source code for the application.
### 2. Assests/ :
        Assests Folder is inside the src/ which contains all the static data for the application. 
        It containe Images folder which conatins all the images for the application.
### 3. Components/ :
        A folder housing all reusable UI components of the application. 
        Each component resides in its own subfolder for better organization and modularity.
        Each subfolder contains its own .jsx, .css file separatly.

### 4. App.jsx/ :
        The root component that combines all other components (Header, HeroSection, Products, Footer) into a single application layout. Manages the overall structure and flow of the homepage.


## Component Logic
### 1. Header Component
### Logic: 
    a. Toggles visibility on scroll using a scroll listener.
    b. Changes background color dynamically when scrolling.
    c. Includes an offcanvas menu using React-Bootstrap.
### CSS: 
    a .Styles for transitions and dynamic background color changes.
    b. Button hover animations.

## HeroSection Component
### Logic:
    a. Displays a visually appealing landing section with text animations and transitions.
### CSS:
    a. Keyframe animations for text.

## 3. Products Component
### Logic:
    a. Fetches product data from products.json.
    b. Dynamically renders product cards.
### CSS:
    a. Card hover effects and responsive styling.

## 4. Footer Component
### Logic:
    a. Contains social media links and company info.
### CSS:
    a. Responsive layout and hover effects for links.
    b. Add transition on hover for links.


## Features
### 1. Responsive Design: 
    a. Adjusts seamlessly to different screen sizes.

### 2. Animation & Transition:  
    a. Smooth text transitions and animations.
    b. Button hover effects.

### 3. Toggel header on scroll:
    a. A dynamic header that toggles visibility on scroll.
    b. Navbar changes it background color on scroll.

### 4. Offcanvas Navigation: 
    a. A vertical offcanvas menu for better accessilibity, implemented with React-Bootstrap.

### 5. Code Organization:
    a. Separate Component for each section.
    b. Seperate CSS files for styling each component.
    c. Created JSON file for managing product data.


## Key Libraries Used

### React: Component-based architecture.
### React-Bootstrap: For offcanvas navigation and responsive UI components.
### Tailwind CSS: Utility-first CSS framework for rapid styling.
### CSS: Component-specific styles for animations and detailed layouts.
