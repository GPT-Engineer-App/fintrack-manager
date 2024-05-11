# fintrack-manager

# FinTrans Manager

This internal web application is designed for managing and executing CRUD (Create, Read, Update, Delete) actions on financial transactions within an organization. It aims to streamline processes and ensure security and accurate record-keeping.

## Pages

### Dashboard

- **Purpose:** Acts as the central hub for users to access different functionalities, view summary statistics or recent transactions, and initiate CRUD actions.

## Components

### Navigation Bar
Serves as the primary interface for accessing various sections of the application such as Transactions, Reports, Settings, and Help.

- **Behavior:** Fixed at the top, follows user scrolling for ready access.
- **Design:** Designed with a light background and text displayed in black for clarity, with active section highlighted in vibrant colors to maintain user orientation.

### Transaction Management Section
Main area where users can create new transactions, view existing ones, update details, or delete them.

- **Behavior:** Features a robust table displaying all transactions with options to filter, sort, and search by various parameters like date, amount, or category.
- **Design:** Ample whitespace ensures clarity and prevents visual clutter. Rows are highlighted on hover, and interactive elements like edit and delete icons use vibrant accent colors for visibility and ease of use.

### Transaction Form
Used for the creation and updating of transaction records.

- **Behavior:** Opens as a modal or a dedicated page where users can enter or edit information including transaction date, amount, category, and description.
  - **Design:** Fields are arranged clearly with mandatory fields marked. The CTA buttons to save or cancel are distinctly designed using vibrant standout colors.

### Reports Section
Allows users to generate reports based on transactions over a selected period.

- **Behavior:** Users can select parameters for reports such as date range and category, and view automatically generated graphs and summaries.
- **Design:** Continues the use of light tones with interactive elements like dropdowns and date pickers accented in vibrant colors to guide the user's workflow.

### Footer
Contains minimal but essential administrative and help links like Contact Us, FAQs, and Privacy Policy.

- **Behavior:** Static, always visible at the bottom of every page.
- **Design:** Echoes the minimalism of the navigation bar but with slightly darker background for subtle distinction from the main content area.

## Design Principles Applied

- **Light Base and Strategic Colors:** Utilizes a predominantly white background with strategic use of vibrant colors on buttons and icons to navigate the user’s actions effectively.

- **Typography and Hierarchy:** Employs varied font sizes and weights to establish a clear visual hierarchy, enabling users to identify the most important information swiftly.

- **Clear Navigation and Minimal Footer:** Ensures the navigation bar is simple and functional, with a minimalistic footer that provides only essential links, adhering to the clean design ethos.

- **Standout CTAs and Key Information:** Highlighted CTA buttons ensure that the actions for saving or altering transactions are prominent and easily accessible.


## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/fintrack-manager.git
cd fintrack-manager
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
