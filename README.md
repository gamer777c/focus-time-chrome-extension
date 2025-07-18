COMPANY - CODTECH IT SOLUTIONS
NAME - VARUN SARKAR
INTERN ID- CT08DL619
DOMAIN - FULL STACK WEB DEVELOPMENT
MENTOR- NEELA SANTOSH
 Chrome Extension – Time Tracker & Productivity Analyzer

Welcome to the **Time Tracker & Productivity Analyzer Chrome Extension**, a lightweight and intuitive browser tool built to help users monitor their web activity, analyze productivity trends, and take control of their time spent online. This project is part of the **CodTech Full Stack Web Development Internship**, fulfilling the task to develop a **Chrome Extension** that demonstrates real-time data tracking, UI interaction, and background processing.

---

## 📌 Objective

The purpose of this extension is to:
- Monitor time spent on different websites.
- Classify sites into **productive** and **unproductive** categories.
- Display usage statistics in a user-friendly popup.
- Encourage conscious browsing habits and help reduce digital distractions.

---

## 🚀 Features

✅ Tracks time spent on each website in real-time  
✅ Displays total daily usage and time breakdown per site  
✅ Visual productivity score based on usage category  
✅ Reset timer button and auto-reset daily functionality  
✅ Persistent data storage using Chrome local storage  
✅ Background script runs even when popup is closed  
✅ Clean and responsive popup UI  
✅ Fully commented and modular code

---

## ⚙️ Technologies Used

- **HTML5** – for popup structure  
- **CSS3** – for popup styling and responsiveness  
- **JavaScript (ES6)** – for logic, storage, and DOM updates  
- **Chrome Extension APIs**:
  - `background.js` – tracks active tab & timestamps  
  - `manifest.json` – defines permissions and extension behavior  
  - `popup.js` – fetches and displays time tracking data  
  - `storage API` – stores time data locally

---

## 🗃️ File Structure

```
📁 time-tracker-extension/
│
├── 📄 manifest.json           # Extension configuration and permissions
├── 📄 background.js           # Background script to track tabs and time
├── 📄 popup.html              # HTML structure of the extension popup
├── 📄 popup.js                # JavaScript logic for displaying time data
├── 📄 style.css               # Styling for popup UI
├── 📄 icon.png                # Extension icon
├── 📄 README.md               # Project documentation (this file)
```

---

## 🔍 How It Works

1. The `background.js` script listens to tab updates and tracks how long a user stays on each domain.
2. Time data is stored in `chrome.storage.local` with timestamps and total seconds.
3. When the user clicks the extension icon, `popup.html` is shown.
4. `popup.js` calculates:
   - Today’s total time spent
   - Top visited sites
   - A productivity score
5. The UI updates accordingly with a breakdown of usage.

---

## ✅ Installation & Usage

1. Download or clone the repository.
2. Open Google Chrome and go to:  
   `chrome://extensions/`
3. Enable **Developer Mode** (top right).
4. Click **Load Unpacked** and select the extension folder.
5. Click the extension icon to view your tracked time.

---

## 📈 Use Cases

- Track daily internet habits
- Improve focus and minimize distractions
- Visualize productivity trends
- Great for students, developers, freelancers, remote workers

---

## 💼 Internship Submission

This Chrome Extension was developed for the **CodTech Internship (Chrome Extension Task)** to demonstrate skills in:
- Web APIs and event handling
- Chrome extension architecture
- Client-side storage
- UI/UX and frontend scripting

---

## 🙏 Credits

Built and documented by **[Your Name]**  
Icons from [flaticon.com]  
Extension tested on Chrome v100+  
Project licensed for educational and non-commercial use only

---

# ⏳ FocusTime - Chrome Productivity Tracker Extension

**FocusTime** is a lightweight and beautifully styled Chrome extension that helps users stay productive by tracking how much time they spend on active browser tabs. It provides real-time feedback through a clean, animated popup interface and works entirely offline using Chrome’s Extension APIs.

---

## 🚀 Features

- ⏱️ Track active tab usage time automatically
- 📊 View total time spent via a popup dashboard
- 💡 Clean UI with gradient background and smooth fade animations
- 💻 Built using HTML, CSS, and JavaScript with clear, commented code
- 🔒 No login or internet required — all data is stored locally

---

## 📷 Screenshots

> (Add a screenshot of the popup UI below)
