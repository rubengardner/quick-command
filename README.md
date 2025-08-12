# Quick-Command

**Your personal URL-launching shortcut engine**

Quick-Command is a sleek browser extension that lets you save your most-used URLs as quick-access commands. Think: GitHub, docs, dashboards—open them instantly via keyboard or command palette, saving you clicks and time.

<img width="2392" height="898" alt="image" src="https://github.com/user-attachments/assets/4c3f9ad7-b3d8-43ef-8827-663e5afc12bd" />

---

##  Why I Built This

 As a backend engineer constantly switching between dashboards, documentation, and tools, I wanted a way to open my go-to pages **without context switching**—no clicking bookmarks, no typing URLs. Inspiration struck: why not treat URLs like commands?  
 This led to the creation of Quick-Command—a tool that organizes your workflow into a lightning-fast, keyboard-driven experience.

---

##  Key Features

- Save any URL as a named command (e.g., `gh`, `jira`, `dashboard`)
- Trigger commands quickly via defined keyboard shortcuts or a popup command palette
- Lightweight—minimal dependencies, fast loading
- Built with modern extension APIs and easy to customize

---

##  How It Works

1. **Manifest**: Defines browser permissions, command configurations, and UI entry points (`manifest.json`)
2. **Command Manager**: Lets users assign names and URLs to commands
3. **Popup UI**: Type a command name to open its URL (autocomplete-enabled)
4. **Keyboard Shortcut**: Launch the command palette with one keystroke, then type and hit `Enter`
5. **Storage**: Uses browser `storage.sync` (or `storage.local`) to remember your defined commands across sessions

---

 ## How It Looks & Feels — Sleek, Minimal, and Fast

Quick-Command isn’t just functional — it’s designed to feel smooth, modern, and enjoyable to use.  
Every interaction is supported by subtle animations that make command execution feel instant and satisfying.

---

### **Landing Page**
<img width="1610" height="786" alt="image" src="https://github.com/user-attachments/assets/c30cdb18-601a-4712-9f7e-62f04797fbc9" />
The clean home screen gives you an at-a-glance view of your saved commands — easy to scan, easy to launch.

---

### **Command Menu**
<img width="962" height="676" alt="image" src="https://github.com/user-attachments/assets/e6a4c373-3473-4557-8d79-30510da7866d" />
Summon the command palette with a single shortcut and type to instantly find and execute any saved command.

---

### **Add Command Tab**
<img width="1040" height="1018" alt="image" src="https://github.com/user-attachments/assets/55c9d667-120d-4e3b-89d4-d2eb95d34caa" />
Adding a new command is effortless — give it a name, paste the URL, and it’s ready to use in seconds.

---

✨ **Bonus:** Quick-Command includes smooth animations for menu transitions and feedback, so using it feels as good as it looks.



## Quick Start — Get Up and Running in Minutes

1. **Clone this repository** to your local machine.  
2. **Open your browser’s Extensions page**  
   - Chrome: `chrome://extensions/`  
   - Edge: `edge://extensions/`  
   - (Firefox support coming soon!)
3. **Enable “Developer mode”** in the top-right corner.  
4. **Click “Load unpacked”** and select the project folder you just cloned.  
5. **Launch the popup** and start adding your favorite URLs as commands — you’ll be flying between sites in no time.

💬 If you’d like to try Quick-Command but run into setup issues, I’m happy to help! Just open an issue in this repo or reach out — I want to see more people using it.

---

##  Example Use Cases

| Command | URL                          | Use Case                           |
|---------|------------------------------|------------------------------------|
| `gh`    | `https://github.com`         | Jump to GitHub home instantly      |
| `nt`    | Internal docs link           | Fetch your docs in a flash         |

---

##  Why It Stands Out

- **Improves developer flow**—no more tab clutter or hunting through bookmarks.
- **Customization first**—you define commands that match *your* work style.
- **Easy to share**—include your command definitions in your dotfiles or team toolkits.

---

##  Future Enhancements

- Command aliases & lookup fuzzy search
- Categorization or tagging of commands
- Cross-browser support (Firefox, Edge, etc.)
- Command export/import for easy configuration sharing

---

##  Contribute

Love the idea? Want to add a feature or fix a bug? PRs are absolutely welcomed!  
Check the [issues](#) to see what's on the roadmap or let’s talk ideas.

---

##  License

MIT © Ruben David Gardner Cuesta — feel free to use and customize Quick-Command however you like!

