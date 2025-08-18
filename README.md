# justboot — Software Installer Assistant

**justboot** is a web-based application designed for centralized software discovery and installation.  
The project runs directly in the browser and retrieves its software catalog from a GitHub repository.  

---

## Features
- Search for software by name or description.  
- Organized categories: **Browsers, Messengers, Games, Drivers, Music, Video, Utilities**.  
- Manage favorite applications (stored in `localStorage`).  
- Generate QR codes to quickly open the catalog on mobile devices.  
- Modern card-based interface with filtering and navigation.  

---

## Live Demo
[Open justboot on GitHub Pages](https://tool-xx.github.io/justboot.github.io/)  

---

## Project Structure
- **`index.html`** — main application file.  
- **`templ/base.txt`** — external catalog containing the software list.   

---

## Catalog Format
The catalog file `templ/base.txt` follows the structure:  

```
#Category 'Name' - 'Link'
```

---

## Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/Tool-xx/justboot.github.io.git
   ```
2. Open `index.html` in any modern browser.  
   No additional server or build process is required.  

---

## Technologies
- **HTML5**, **CSS3**, **Vanilla JavaScript**  
- **Font Awesome** — icons  
- **Google Fonts (Inter)** — typography  
- **qrcode-generator** — QR code generation  

---

## Roadmap
- Extend the catalog with additional categories.  
- Implement automatic catalog updates.  
- Add program-specific icons and detailed descriptions.  

---

© 2025 [justboot](https://github.com/Tool-xx/justboot.github.io) — Software Installer Assistant
