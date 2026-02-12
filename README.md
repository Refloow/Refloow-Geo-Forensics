# 📍 Refloow™ Geo Forensics
### **Professional Open-Source OSINT & Digital Forensics Tool**

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2020.10.0-brightgreen)](https://nodejs.org/)
[![Version](https://img.shields.io/badge/version-1.0.0-orange)](https://github.com/Refloow/Refloow-Geo-Forensics)

**Refloow™ Geo Forensics** is a high-performance, open-source digital forensics tool designed for investigators, OSINT practitioners, and security analysts. It automates the extraction of EXIF metadata from batch image sets, visualizes geospatial data on interactive maps, and reconstructs chronological event timelines to uncover hidden connections in digital evidence.

[**Resources and socials**](https://linktr.ee/Refloow) | [**Report a Bug**](https://github.com/Refloow/Refloow-Geo-Forensics/issues) | [**Other Refloow Software**](https://refloow.com/open-source-software)

---

> [!IMPORTANT]
> Only official download place at the moment is releases tab of this repository: https://github.com/Refloow/Refloow-Geo-Forensics/releases
> If you find this tool useful leave a ⭐ to support my work (its free) and helps other discover the software

## 🚀 Key Features and Showcase

* **Batch EXIF Extraction:** Process hundreds of `.jpg` files simultaneously to pull deep metadata.
* **Geospatial Visualization:** Automatically plot GPS coordinates onto interactive maps for immediate situational awareness.
* **Timeline Reconstruction:** Generate a chronological flow of events based on image timestamps to track movement or verify alibis.
* **Privacy-First OSINT:** Run locally on your machine—no data is ever uploaded to external servers.
* **Lightweight & Fast:** Optimized for rapid analysis without heavy resource consumption.

---

<img width="2554" height="1350" alt="Screenshot 2026-02-12 103335" src="https://github.com/user-attachments/assets/709f0671-bfb6-43a7-80e1-d388a7750721" />
<img width="2535" height="1093" alt="Screenshot 2026-02-12 104237" src="https://github.com/user-attachments/assets/475f791d-a343-4f04-9611-9b8d841824ee" />
<img width="2556" height="1338" alt="Screenshot 2026-02-12 104035" src="https://github.com/user-attachments/assets/7e63a22b-4159-4488-9c55-d2e38d52c900" />

## 💻 System Requirements & Technical Specs

To ensure stable performance during batch processing, the following specifications are recommended:

### **Software Requirements**
* **Operating System:** Windows 10/11, macOS (Intel/Apple Silicon), or Linux (Ubuntu/Debian recommended).
* **Runtime:** Node.js **v20.10.0** or higher.
* **Framework:** Built with Electron for cross-platform desktop compatibility.
* **Primary Libraries:** `express`, `exif-parser`.

### **Hardware Requirements**
| Component | Minimum | Recommended |
| :--- | :--- | :--- |
| **Storage** | ~350 MB for installation | 500 MB+ |
| **RAM** | 2 GB | 4 GB+ (for large batch processing) |
| **Processor** | Dual-core 2.0GHz | Quad-core+ for faster parsing |


## 📖 Usage

1.  **Import:** Select a directory for batch analysis.
2.  **Analyze:** The tool will automatically parse EXIF headers for GPS, camera model, and timestamps.
3.  **Visualize:** Switch to the Map View to see geographical clusters of where photos were taken.

## 📜 License

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**. This ensures that the tool remains open-source and that any improvements made by the community are shared back with the public.

---

## 🤝 Contact & Support

* **Founder:** Veljko Vuckovic
* **Website:** [refloow.com](https://refloow.com)
* **All social links:** [linktree](https://linktr.ee/Refloow)
* **Official community telegram:** [link](https://t.me/+LC9l6d-Jhco2NTU0)
* **Official community discord:** [link](https://discord.com/invite/D8WCtDD)
---


## For contributors and developers

---

## 🛠️ Dev Installation

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/Refloow/Refloow-Geo-Forensics.git](https://github.com/Refloow/Refloow-Geo-Forensics.git)
    cd Refloow-Geo-Forensics
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run the Application**
    ```bash
    npm start
    ```

---
