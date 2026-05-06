# Contributing to Refloow Geo Forensics

First off, thank you for considering contributing to Refloow Geo Forensics! Open source thrives on community collaboration, and your interest in improving this tool helps the entire OSINT and digital forensics community.

Whether you are fixing a bug, proposing a new feature, or improving our documentation, this guide will help you understand our development process and standards.

---

## ⚖️ Intellectual Property & Copyright Assignment (CLA)

To protect the integrity of the project, ensure it remains a reliable tool for investigators, and allow us to legally defend the codebase, Refloow Geo Forensics requires all contributors to assign the copyright of their contributions to the project owner (Veljko Vuckovic / Refloow). 

**Why do we do this?**
By submitting a Pull Request, you agree to transfer the copyright of your contributed code to Refloow. This is a standard legal practice used by major open-source organizations (like the Free Software Foundation, Canonical, and SAP). It prevents the codebase from becoming fragmented across dozens of copyright holders, allowing us to manage the license effectively and protect the software's future. 

**The License Back:**
Don't worry—you still own your ideas. By signing the agreement, Refloow grants you a non-exclusive, perpetual license back to your own code. You are free to use, modify, and distribute the code you wrote however you see fit.

🔗 **[Read the full Contributor License Agreement (CLA) here](https://gist.github.com/Refloow/5ad996a927f8dda94911b29c84bb51e1)**

*Note: You do not need to sign anything manually. Upon opening your first Pull Request, an automated bot (CLA Assistant) will prompt you to review and sign the agreement directly via your GitHub account.*

---

## 🛠️ Local Development Setup

To get the project running locally on your machine for development:

1. **Prerequisites:** Ensure you have [Node.js](https://nodejs.org/) installed. Ofiical development version is v20.10.0
2. **Clone your fork:** `git clone https://github.com/Refloow/Refloow-Geo-Forensics.git`
3. **Navigate to the directory:** `cd Refloow-Geo-Forensics/src`
4. **Install dependencies:** `npm install`
5. **Run the application:** `npm start`

---

## 💻 Code Standards & Expectations

To keep the codebase clean and maintainable, please adhere to the following guidelines:
* **UI/UX Consistency:** We take pride in our native-feeling interface. Ensure any new buttons, modals, or toggles fully support both **Dark Mode** and **Light Mode** CSS classes.
* **Non-Blocking Logic:** The forensic scanning engine (Node.js backend) must remain asynchronous. Do not introduce synchronous file-reading operations that could freeze the Electron main thread during large directory scans.
* **Comment Your Code:** Leave clear, concise comments explaining the *why* behind complex logic, especially when dealing with EXIF data extraction or map rendering.

---

### 🚀 How to Contribute: Step-by-Step

Ready to write some code? Follow this standard GitHub flow:

1. **Fork the repository**  
   Fork the official Refloow Geo Forensics repository to your GitHub account.

2. **Create a new branch**  
   Create a feature branch from `main` for your work:

    ```git checkout -b feature/your-amazing-feature```

   Use `bugfix/` or `docs/` prefixes if applicable.

3. **Make changes and commit**  
   Stage and commit your changes with a clear, descriptive message:

    ```git add .```
    ```git commit -m "Add support for analyzing .CR3 RAW image formats"```

4. **Push your branch**  
   Push the branch to your fork:
`
    ```git push origin feature/your-amazing-feature```

5. **Open a Pull Request**  
   Open a Pull Request against the `main` branch of the official Refloow Geo Forensics repository. In your PR description include:
   - **What** you changed
   - **Why** the change is needed
   - **How** to test the change
   - Any relevant screenshots or sample data

6. **Sign the CLA**  
   Sign the Contributor License Agreement when prompted by the bot on your PR.

7. **Engage in the review process**  
   Respond to review comments, make requested changes, and update your PR as needed. A maintainer will review your code and may suggest tweaks before merging.
