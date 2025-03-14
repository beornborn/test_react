# Coding Challenge: Movie Search & Favorites App 🎬

[🚀 Try the live demo](https://beornborn.github.io/test_react/)

## Run locally

```bash
git clone https://github.com/beornborn/test_react.git
cd test_react
yarn install
echo "REACT_APP_OMDB_API_KEY=your_api_key_here" > .env
yarn start
```

The app will be available at `http://localhost:3000`

To test

```bash
yarn test
```

## Screenshots

| Search Page                                                                                                                                        | Favorites Page                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| ![Movie search interface showing search results in a grid layout](https://github.com/user-attachments/assets/79636491-41b6-4b83-b614-dcdfa8bafc4d) | ![Favorites page showing saved movies in a grid layout](https://github.com/user-attachments/assets/f3e85cea-6e6d-44cf-ad4e-016b76771ca9) |

## Objective

Build a small web application where users can **search for movies** and **manage a favorites list**.

## Requirements

- Fetch movie data from the **OMDb API**: [http://www.omdbapi.com/](http://www.omdbapi.com/)
- Display search results in a **user-friendly interface**.
- Allow users to **add and remove movies** from a favorites list.
- Ensure a **good user experience** across mobile and desktop.

## Considerations

- How will you **manage state** for search results and favorites?
- What **design choices** will ensure a **clean and responsive UI**?
- How will you **structure the application** to keep it **maintainable and scalable**?
- How can you make the application **accessible**?
- Would adding **one or two tests** help improve reliability?
- Implement **any additional features** that would improve the app.

## Solution

### Implementation Overview

Modern React application that meets all requirements while following best practices. The app features:

- Real-time movie search with debouncing
- Infinite scroll for search results
- Persistent favorites storage
- Responsive design for all devices
- Comprehensive accessibility features
- Unit tests for critical functionality

### Requirements Implementation

1. **OMDb API Integration**

   - Implemented using React Query for efficient data fetching and caching
   - Separate API client with error handling
   - Environment-based API key configuration
   - Caching with configurable stale times (5 minutes)

2. **User Interface**

   - Clean, modern design using styled-components
   - Responsive grid layout for movie cards
   - Loading states and error handling
   - Clear visual feedback for favorite status
   - Mobile-first approach with responsive breakpoints

3. **Favorites Management**

   - Persistent storage using localStorage
   - Dedicated favorites page with grid layout
   - Easy add/remove functionality with visual feedback

4. **Cross-device Experience**
   - Responsive design with mobile-first approach
   - Touch-friendly interface
   - Reduced motion support for accessibility

### Considerations Addressed

1. **State Management**

   - Used Zustand for global state management
   - Separate stores for search and favorites
   - Persistent storage for favorites

2. **Design Choices**

   - Clean, minimalist interface
   - Consistent color scheme and typography
   - Responsive grid system
   - Smooth animations and transitions

3. **Application Structure**

   - Feature-based folder organization
   - Custom hooks for business logic
   - Separation of concerns (API, state, UI)
   - Modular styling with styled-components

4. **Accessibility**

   - ARIA labels and roles
   - Keyboard navigation support
   - Screen reader friendly
   - Focus management
   - Reduced motion support
   - Semantic HTML structure
   - Clear error messages and status updates

5. **Testing**

   - Unit tests for critical components
   - Mock implementations for external dependencies
   - Test utilities for consistent testing environment
   - Coverage for user interactions

6. **Additional Features**

   - Debounced search for better performance
   - Infinite scroll for search results
   - Clear search functionality

### Technical Stack

- React with modern hooks
- Zustand for state management
- React Query for data fetching
- Styled-components for styling
- React Router for navigation
- Jest and React Testing Library for testing
- Axios for API requests
- LocalStorage for persistence

The solution provides a robust, maintainable, and user-friendly application that meets all requirements while following modern React best practices and accessibility guidelines.

## Future Improvements

### User Experience Enhancements

- Add detailed movie view with plot, cast
- Organize favorites into custom categories/collections
- Add advanced search filters (year, genre)
- Save recent searches
- User authentication and profiles

### Technical Improvements

- Implement virtual scrolling for large lists
- Add TypeScript for better type safety
- Implement stricter ESLint rules
- Add more comprehensive test coverage
- Add end-to-end tests with Cypress
- Implement proper error boundaries
- Implement proper state persistence strategy
- Add proper API error handling and retry logic
- Add Storybook for component documentation

These improvements would make the application more feature-rich and maintainable while providing a better user experience.
