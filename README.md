# CodeQuest

CodeQuest is a community-driven Q&A platform designed for developers to share knowledge, solve problems, and collaborate. Similar to Stack Overflow, it allows users to post their coding doubts and get solutions from the community.

The backend of this application is deployed on **Railway**, ensuring reliable performance and accessibility.

## 🚀 Live Demo
[Frontend Deployed on Vercel](https://codequest-app-frontend.vercel.app/)

## ✨ Features

- **Ask Questions**: Post your coding queries with detailed descriptions.
- **Get Answers**: Receive solutions and explanations from other users.
- **Community Interaction**: Vote on questions and answers to highlight the best content.
- **User Authentication**: Secure Login and Signup functionality.
- **Profile Management**: Update your user profile and track your contributions.
- **Responsive Design**: Optimized for a seamless experience across devices.

## 🛠️ Tech Stack

**Frontend:**
- **React.js**: For building the user interface.
- **Redux**: For efficient state management.
- **Material UI**: For a modern and responsive design system.
- **Axios**: For making HTTP requests to the backend.

**Backend:**
- **Node.js & Express**: (Assumed based on API structure)
- **Deployed on Railway**: Providing a robust hosting environment.

## ⚙️ Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- Node.js installed on your system.
- Git installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd codequest-frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and add your backend API URL:
    ```env
    REACT_APP_API_URL=https://codequest-app-backend-production.up.railway.app
    ```
    *(Note: The above URL is the public production URL. If you are running the backend locally, use your local address, e.g., http://localhost:5000)*

4.  **Run the application:**
    ```bash
    npm start
    ```

The application will launch in your browser at `http://localhost:3000`.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the platform.
