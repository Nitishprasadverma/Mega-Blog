# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





💡 DocEng – A Blogging Platform for Doctors & Engineers
DocEng is a full-stack blogging platform built to bridge the knowledge-sharing gap between doctors and engineers. Whether it’s healthcare innovation or cutting-edge tech, this platform lets professionals create, share, and engage.

🛠 Tech Stack
Layer	Tech Used
Frontend	React.js (Vite), Tailwind CSS, Redux Toolkit
Backend (BaaS)	Appwrite (Auth, DB, File Storage)
Routing	React Router DOM
State Management	Redux + Redux Toolkit
Deployment	[Add Vercel/Netlify if deploying]
🔑 Core Functionalities
🔐 User Authentication
Sign Up, Login, Logout via Appwrite Auth

Redux-powered global user state

📝 Post Management
Create Post with title, content, featured image, status

Edit and Delete Post (if logged in and authorized)

Preview Image before upload (via Appwrite file preview)

🧭 Routes Implemented
/ → Homepage

/all-posts → Shows all active published posts

/my-posts → Shows only current user’s posts

/add-post → Add new post (protected route)

/edit-post/:slug → Edit existing post

🧠 Smart Features
Appwrite Query.equal() to filter posts by userId

Dynamic navigation bar based on auth status

Error handling for file/image upload and database actions

Friendly messages when no posts exist

🔒 Security & Access
Protected routes for add/edit

Real-time auth state management

Slug-based document editing to avoid ID leaks

🌟 Future Add-ons (recommended)
 Commenting system

 Post likes/bookmarks

 Rich Text Editor (like TipTap or Quill)

 Email verification

 Admin Dashboard

 Tag-based filtering / search bar

📌 Installation (Dev Mode)
bash
Copy
Edit
git clone https://github.com/your-username/doceng-blog.git
cd doceng-blog
npm install
npm run dev
Note: Create .env file and add Appwrite credentials (VITE_APPWRITE_PROJECT_ID, etc.)

💬 Final Thoughts
A simple yet powerful blog engine to give professionals a voice.
Built with ❤️ for learners, hackers, and visionaries like you.
