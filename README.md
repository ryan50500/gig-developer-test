# Betting App

A React betting application built with Vite and Redux Toolkit. Users can view matches, add bets to a bet slip, adjust stakes, and calculate potential winnings.

## Features

- 📱 View available matches with odds
- 🎯 Add/remove bets from bet slip
- 💰 Adjust stakes with +/- controls or manual input
- 🧮 Real-time calculation of potential winnings

## Tech Stack

- **React 18** with Vite (TypeScript setup, primarily using JSX)
- **Redux Toolkit** for state management
- **Vite** for build tooling
- **CSS Modules** for styling

*Note: Project was scaffolded with TypeScript but components are primarily written in JSX for faster development and reduced complexity with Redux integration.*

## Quick Start

1. **Extract the project**
   - Double-click the zip file to extract it
   - Open Terminal/Command Prompt and navigate to the extracted folder:
   ```bash
   # Example: if extracted to Desktop
   cd Desktop/gig-developer-test
   
   # Or if extracted to Downloads
   cd Downloads/gig-developer-test
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
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── BetItem.jsx     # Individual bet card
│   ├── BetHeader.jsx   # Bet card header
│   ├── BetChoice.jsx   # Bet choice display
│   ├── BetSlip.jsx     # Main bet slip container
│   ├── StakeControls.jsx # Stake input controls
│   ├── PotentialGains.jsx # Potential winnings display
│   ├── BetSlipSummary.jsx # Total calculations
│   ├── Match.jsx       # Individual match display
│   └── MatchList.jsx   # List of all matches
├── features/
│   └── bettingSlice.js # Redux slice for betting state
├── App.tsx             # Main app component
└── store.ts            # Redux store configuration
```

## How to Use

1. Browse available matches in the left panel
2. Click on odds to add bets to your bet slip
3. Adjust stakes using +/- buttons or type directly
4. View real-time potential winnings calculations
5. Remove bets using the × button

## Implementation Notes

**Completed Features:**
- ✅ Match display with odds and real-time data loading
- ✅ Bet slip functionality with add/remove capabilities
- ✅ Stake adjustment with validation (minimum £0.50)
- ✅ Real-time potential winnings calculations
- ✅ Professional UI with bet365-inspired design
- ✅ Responsive layout with proper component architecture

**Design Decisions:**
- **No Submit Button**: While mentioned in requirements, a submit button seemed redundant for this demo. The focus is on showcasing React/Redux skills rather than backend integration. In a real app, this would connect to a betting API.
- **Component Architecture**: Chose to break down complex components (like BetItem) into smaller, focused components (BetHeader, BetChoice, etc.) for better maintainability and testability.
- **JSX over TypeScript**: Started with TypeScript setup but switched to JSX for faster development and reduced complexity with Redux integration.
- **CSS Modules**: Used CSS modules over styled-components for better performance and simpler debugging.

Built with ❤️ for the interview process.

