# Quick-Command

**Your personal URL-launching shortcut engine**

Quick-Command is a sleek browser extension that lets you save your most-used URLs as quick-access commands. Think: GitHub, docs, dashboards—open them instantly via keyboard or command palette, saving you clicks and time.

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

##  Quick Start

1. Clone the repo
2. Go to your browser's Extensions page
3. Enable “Developer mode”
4. Load the unpacked extension from the project directory
5. Open the popup and start adding your fave URLs!

---

##  Example Use Cases

| Command | URL                          | Use Case                           |
|---------|------------------------------|------------------------------------|
| `gh`    | `https://github.com`         | Jump to GitHub home instantly      |
| `ci`    | `https://circleci.com`       | Open build status with one command |
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

MIT © Your Name — feel free to use and customize Quick-Command however you like!

