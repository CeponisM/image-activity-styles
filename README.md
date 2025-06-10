# Image Activity Styles

A dynamic React application that applies visually engaging image effects using SVG filters and CSS animations. Users can toggle between multiple preset effects (e.g., Mirror World, Fractal Echo, Time Slip) to transform a background image with creative overlays, animations, and blend modes.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Available Presets](#available-presets)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dynamic Presets**: Choose from 10 unique visual presets (e.g., Mirror World, Fractal Echo, Quantum Mirror) to apply different effects to a background image
- **SVG Filters**: Utilizes SVG filters like turbulence and displacement maps for advanced visual effects
- **Responsive Design**: Optimized for various screen sizes, aspect ratios, and devices, including touch and high-DPI screens
- **Smooth Animations**: CSS animations with performance optimizations (e.g., `will-change`, `translateZ(0)`) for smooth transitions
- **Accessibility**: Supports reduced motion preferences, high-contrast mode, and focus styles for better usability
- **Dark Mode Support**: Adapts to the user's preferred color scheme
- **Mobile Optimization**: Larger touch targets and slower animations for mobile devices

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CeponisM/image-activity-styles.git
   cd image-activity-styles
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add a background image:**
   
   Place a background image named `background-img.jpg` in the `src` directory (or update the SCSS in `App.scss` to point to your image).

4. **Start the development server:**
   ```bash
   npm start
   ```
   
   The app will be available at `http://localhost:3000`.

5. **Build for production (optional):**
   ```bash
   npm run build
   ```

## Usage

1. Open the app in your browser
2. Use the navigation bar at the top to select a preset (e.g., "Mirror World", "Fractal Echo")
3. Each preset applies unique visual effects to the background image, such as mirroring, color shifts, or fractal distortions
4. The effects are animated and responsive, adapting to your device's screen size and preferences (e.g., reduced motion or dark mode)

**💡 Tip:** To customize the background image, replace `background-img.jpg` in the `src` directory or update the `background-image` property in `App.scss`.

## Available Presets

The application includes **10 unique presets**, each with distinct visual effects:

| Preset | Description |
|--------|-------------|
| **Mirror World** | Flipped image layers with hue rotation and screen blending |
| **Fractal Echo** | Scaled and rotated layers with difference and screen blending |
| **Time Slip** | Color channel splitting with animated translations |
| **Reality Merge** | Scaling and rotation with contrast and hue effects |
| **Dimension Split** | Ripple filter with skewed animations and exclusion blending |
| **Neural Echo** | Turbulence filter with pulsing brightness and hard-light blending |
| **Quantum Mirror** | Shifting and scaling with difference and screen blending |
| **Phase Shift** | Saturated hue rotation with color-dodge blending |
| **Dream Cascade** | Smooth scaling and rotation with soft-light blending |
| **Mind Melt** | High-contrast rotation with difference blending |

## Technologies

- **React** `^19.0.0` - Frontend framework
- **React DOM** `^19.0.0` - DOM rendering
- **SCSS/Sass** `^1.83.0` - Enhanced CSS with variables and nesting
- **Create React App** `5.0.1` - Build toolchain
- **SVG Filters** - Advanced visual effects like turbulence and displacement maps
- **CSS Animations** - Smooth transitions and effects
- **Node.js** - Development and build processes

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes and commit**
   ```bash
   git commit -m "Add your feature description"
   ```
4. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a pull request**

Please ensure your code follows the project's ESLint configuration and includes appropriate tests.

### Development Guidelines

- Follow React best practices
- Use meaningful commit messages
- Test your changes across different devices and browsers
- Ensure accessibility standards are maintained

## License

This project is licensed under the **MIT License**.

---

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/CeponisM/image-activity-styles/issues) on GitHub.

⭐ **Don't forget to star this repository if you found it helpful!**
