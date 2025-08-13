# Betting App

A React betting application built with Vite and Redux Toolkit. Users can view matches, add bets to a bet slip, adjust stakes, and calculate potential winnings.

## Tech Stack

- **React 18** with Vite (TypeScript setup, primarily using JSX)
- **Redux Toolkit** for state management
- **Vite** for build tooling
- **CSS Modules** for styling

*Note: Project was scaffolded with TypeScript but components are primarily written in JSX for faster development and reduced complexity with Redux integration.*

## Quick Start

1. **Extract the project**
   - Extract the zip file and navigate to the folder in Terminal:
   ```bash
   cd path/to/gig-developer-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once

## Project Structure

```
src/
├── components/          # React components
│   ├── matches/         # Match-related components
│   │   ├── MatchList.jsx       # List of all matches
│   │   ├── Match.jsx           # Individual match display
│   │   ├── MatchHeader.jsx     # Match info header
│   │   ├── ChoicesContainer.jsx # Container for bet choices
│   │   └── ChoiceButton.jsx    # Individual choice button
│   └── betting/         # Bet slip components
│       ├── BetSlip.jsx         # Main bet slip container
│       ├── BetItem.jsx         # Individual bet card
│       ├── BetHeader.jsx       # Bet card header
│       ├── BetChoice.jsx       # Bet choice display
│       ├── StakeControls.jsx   # Stake input controls
│       ├── PotentialGains.jsx  # Potential winnings display
│       └── BetSlipSummary.jsx  # Total calculations
├── features/
│   └── bettingSlice.js # Redux slice for betting state
├── test/               # Test files
│   ├── setup.js              # Test configuration
│   └── BetSlipSummary.test.jsx # Unit tests
├── App.tsx             # Main app component
└── store.ts            # Redux store configuration
```

## How to Use

1. Browse available matches in the left panel
2. Click on odds to add bets to your bet slip
3. Adjust stakes using +/- buttons or type directly
4. View real-time potential winnings calculations
5. Remove bets using the × button

## Features

- Match display with odds loaded from JSON data
- Add/remove bets with duplicate prevention  
- Real-time potential winnings calculations
- Stake controls with £0.50 minimum enforcement and input validation

## Development Time

**Estimated vs Actual**: While the assessment suggested 2-4 hours, this implementation took 6-8 hours due to implementing all non-mandatory features:

- Functional increase/decrease buttons with validation
- Direct stake input with edge case handling (non-numeric input, negative values, empty fields)  
- Real-time calculation updates
- Unit testing setup

## Testing

Built with Vitest and React Testing Library.

```bash
npm run test        # Watch mode
npm run test:run    # Single run
```

**Coverage**: Unit test for calculation logic (BetSlipSummary component)


## Design Decisions

- **No Submit Button**: While a submit button appears in the mockup, it was omitted as no functionality requirements were specified. This demo focuses on showcasing React/Redux skills and component architecture rather than backend integration. In a production app, this would connect to a betting API to process bets placed.
- **Component Architecture**: Chose to break down complex components (like BetItem) into smaller, focused components (BetHeader, BetChoice, etc.) for better maintainability.
- **JSX over TypeScript**: Started with TypeScript setup but switched to JSX for faster development and reduced complexity with Redux integration.
- **Styling Approach**: The provided mockup was more of a basic wireframe without detailed design, so I implemented a bet365-inspired design to create a more visually appealing UI.


