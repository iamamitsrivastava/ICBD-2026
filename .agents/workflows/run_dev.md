---
description: Run development server and open site in Chrome
---

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the Next.js development server**
   ```bash
   npm run dev
   ```
   - The server will start on `http://localhost:3000` (or another available port if 3000 is occupied).

3. **Open the site in Chrome**
   - Navigate to the URL displayed in the terminal (e.g., `http://localhost:3000`).
   - Verify that the page loads without errors.

**Note**: If you encounter the error `Cannot find module 'next/dist/compiled/ws'`, run the following commands to clean and reinstall:
```bash
rm -rf node_modules .next
npm install
npm install ws
npm run dev
```
