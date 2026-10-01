<div align="center">

# 🎬 IMDB Clone

### Discover trending movies. Build your watchlist. Never forget what to watch next.

<p>
  <a href="https://imdb-clone-chi-woad.vercel.app/"><b>🌐 Live Demo</b></a>
  &nbsp;•&nbsp;
  <a href="#-features"><b>✨ Features</b></a>
  &nbsp;•&nbsp;
  <a href="#-getting-started"><b>🚀 Get Started</b></a>
  &nbsp;•&nbsp;
  <a href="#-what-i-learned"><b>🧠 What I Learned</b></a>
</p>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![TMDB](https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br/>

> 🍿 *My second frontend project with React + Vite, built to practice state, routing, and real API data.*

</div>

---


## ✨ Features

| | Feature | Description |
|---|---|---|
| 🎞️ | **Popular Movies** | Poster cards powered by live data from the TMDB API |
| 📄 | **Pagination** | Move one page at a time, or jump ⏩ 5 pages at once |
| ➕ | **One-click Watchlist** | Add or remove a movie straight from its poster |
| 💾 | **Saved in Your Browser** | Your watchlist survives refreshes thanks to `localStorage` |
| 🏷️ | **Genre Filter** | Filter your watchlist with genre chips built dynamically from your movies |
| 🔍 | **Live Search** | Find any saved movie by title as you type |
| ⬆️⬇️ | **Sorting** | Sort by rating ⭐ or popularity 🔥, ascending or descending |
| 📱 | **Responsive Banner** | Hero banner that adapts from mobile to desktop |

---

## 🛠️ Tech Stack

| Tool | Why I used it |
|---|---|
| ⚛️ **React** | Component-based UI and state management with hooks |
| ⚡ **Vite** | Lightning-fast dev server and builds |
| 🎨 **Tailwind CSS** | Utility-first styling without leaving the JSX |
| 🧭 **React Router** | Multi-page navigation (Movies ↔ Watchlist) |
| 📡 **Axios** | Clean API requests to TMDB |
| 🔣 **Font Awesome** | Pagination and sorting icons |
| 🎥 **TMDB API** | Movie data and poster images |

---

## 🗂️ Project Structure

```
📦 imdb-clone
├── 📁 src
│   ├── 📁 Components
│   │   ├── 🖼️  Banner.jsx        # Hero banner on the home page
│   │   ├── 🃏 MovieCard.jsx      # Poster card with add/remove button
│   │   ├── 🎬 Movies.jsx         # Fetches and lists popular movies
│   │   ├── 🧭 Navbar.jsx         # Top navigation bar
│   │   ├── 🔢 Pagination.jsx     # Page controls
│   │   └── 📋 Watchlist.jsx      # Table with search, filter and sort
│   ├── 📁 Utility
│   │   └── 🏷️  genre.js          # Genre ID → name mapping
│   ├── 📁 assets                 # Logo and static images
│   ├── 🧩 App.jsx                # Routes + watchlist state
│   ├── 🚪 main.jsx               # App entry point
│   └── 🎨 index.css              # Tailwind import
├── 📄 index.html
├── ⚙️  vite.config.js
└── 📦 package.json
```

---

## 🚀 Getting Started

### 📋 Prerequisites

- 🟢 [Node.js](https://nodejs.org/) 18 or later
- 🔑 A free [TMDB API key](https://www.themoviedb.org/settings/api)

### ⚙️ Installation

```bash
# 1️⃣ Clone the repo
git clone https://github.com/YOUR_USERNAME/imdb-clone.git

# 2️⃣ Go into the folder
cd imdb-clone

# 3️⃣ Install dependencies
npm install
```

### 🔐 Set up your API key

Create a `.env` file in the project root:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

Then use it in `Movies.jsx` instead of hardcoding the key:

```js
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

axios.get(
  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNo}`
);
```

> ⚠️ Make sure `.env` is listed in your `.gitignore` so your key never reaches GitHub.

### ▶️ Run it

```bash
npm run dev
```

Open the link shown in your terminal (usually `http://localhost:5173`) 🎉

### 📦 Build for production

```bash
npm run build      # creates the optimized /dist folder
npm run preview    # preview the production build locally
```

---

## 🎮 How to Use

1. 🏠 **Browse** popular movies on the home page.
2. ➕ Click the icon in the top-right corner of a poster to **add** it to your watchlist (❌ removes it).
3. 📋 Open the **Watchlist** page to see everything you saved.
4. 🔍 **Search**, 🏷️ **filter by genre**, or ⬆️⬇️ **sort** by rating and popularity.

---

## 🧠 What I Learned

This is my **second frontend project with Vite + React**, and it pushed me to learn:

- 🪝 **React Hooks**: `useState` and `useEffect` for state and side effects
- 🔼 **Lifting state up**: keeping the watchlist in `App.jsx` and passing it down as props
- 🌐 **Fetching API data** with Axios and re-fetching when the page changes
- 🧭 **Client-side routing** with React Router
- 💾 **Persisting data** with `localStorage`
- 🎨 **Styling fast** with Tailwind CSS utility classes
- 🚢 **Deploying** a project with GitHub and Vercel

---

## 🗺️ Roadmap

- [x] 🎞️ Popular movies with pagination
- [x] 📋 Watchlist with search, filter, and sorting
- [x] 💾 `localStorage` persistence
- [x] 🚀 Deploy on Vercel
- [ ] 🔎 Search movies across all of TMDB
- [ ] 🎥 Movie details page with trailer
- [ ] 🌙 Dark mode
- [ ] ⏳ Loading skeletons and error states
- [ ] 🔐 Move the API key to environment variables

---

## 🙏 Acknowledgements

- 🎬 Movie data and images from [TMDB](https://www.themoviedb.org/). This project is not endorsed or certified by TMDB and is not affiliated with IMDb.
- 🎨 Badges by [Shields.io](https://shields.io/)
- 🔣 Icons by [Font Awesome](https://fontawesome.com/)

---

<div align="center">

### 💙 Thanks for stopping by!

If you liked this project, drop a ⭐ on the repo.

**Made with ❤️ and lots of ☕ by [Apoorva K](https://github.com/Apoorva3105)**

</div>
