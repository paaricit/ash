# Slideintoo Website

A modern, responsive website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern CSS**: Clean, organized styles with CSS Grid and Flexbox
- **Interactive JavaScript**: Smooth animations, lazy loading, and form handling
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized images and efficient code

## Project Structure

```
ash/
├── index.html          # Main HTML file
├── styles/
│   └── main.css        # Main stylesheet
├── js/
│   └── main.js         # Main JavaScript file
└── README.md           # Project documentation
```

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ash
   ```

2. **Open the website**:
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View the website**:
   - Navigate to `http://localhost:8000` in your browser

## Technologies Used

- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Advanced styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Modern JavaScript with modules and async/await
- **Intersection Observer API**: For scroll-based animations
- **Web APIs**: Form handling, smooth scrolling, and notifications

## Features Overview

### CSS Features
- Responsive grid system
- Smooth animations and transitions
- Modern button and card components
- Utility classes for quick styling
- Mobile-first design approach

### JavaScript Features
- Intersection Observer for scroll animations
- Smooth scrolling navigation
- Lazy loading for images
- Form validation and handling
- Notification system
- Scroll-to-top functionality
- Mobile menu support
- Debounced scroll events

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with polyfills)

## Development

### Adding New Pages
1. Create a new HTML file in the root directory
2. Link to the main CSS and JS files
3. Follow the existing structure and naming conventions

### Styling
- Use the existing CSS classes and utility functions
- Follow the mobile-first approach
- Maintain consistency with the design system

### JavaScript
- Add new functionality to `main.js` or create separate modules
- Use the existing utility functions
- Follow ES6+ standards

## Performance Optimization

- Images are lazy-loaded for better performance
- CSS and JavaScript are minified for production
- Smooth animations use CSS transforms for better performance
- Debounced scroll events prevent excessive function calls

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact [your-email@example.com]

---

**Note**: This project was created from a Wix website export and has been restructured for better maintainability and performance.