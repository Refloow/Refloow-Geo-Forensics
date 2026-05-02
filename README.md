# 📍 Refloow™ Geo Forensics Official Github Repository
### **Professional Open-Source OSINT & Digital Forensics Tool**

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2020.10.0-brightgreen)](https://nodejs.org/)
[![Version](https://img.shields.io/badge/version-1.2.1-orange)](https://github.com/Refloow/Refloow-Geo-Forensics)
[![Dark Web Informer](https://img.shields.io/badge/Featured_in-Dark_Web_Informer-CC0000?style=flat-square)](https://darkwebinformer.com/refloow-geo-forensics-a-free-batch-image-geolocation-and-exif-forensics-tool-for-osint/)

**Refloow™ Geo Forensics** is a high-performance, open-source digital forensics tool designed for investigators, OSINT practitioners, and security analysts. It automates the extraction of EXIF metadata from batch image sets, visualizes geospatial data on interactive maps, and reconstructs chronological event timelines to uncover hidden connections in digital evidence. Fully private & local, no data collection, no logins required.

[**Resources and socials**](https://linktr.ee/Refloow) | [**Report a Bug/Request feature**](https://github.com/Refloow/Refloow-Geo-Forensics/issues) | [**Other Refloow Software**](https://refloow.com/open-source-software)

---

> [!IMPORTANT]
> Only official download place at the moment is releases tab of this repository: https://github.com/Refloow/Refloow-Geo-Forensics/releases
> 
> If you find this tool useful leave a ⭐ to support my work (its free) and helps others discover the software

## 🚀 Key Features and Showcase

* **Batch EXIF Extraction:** Process hundreds of `.jpg` or `.jpeg` files simultaneously to pull deep metadata.
* **Geospatial Visualization:** Automatically plot GPS coordinates onto interactive maps for immediate situational awareness. Variety of mapping layers are available: (Forensic Dark, Forensic Light, Satelite Imagery, Topographic Terrain, Humanitarian (Rural) & Standard Street).
* **Timeline Reconstruction:** Generate a chronological flow of events based on image timestamps to track movement or verify alibis.
* **Privacy-First OSINT:** Run locally on your machine—no data is ever uploaded to external servers.
* **Lightweight & Fast:** Optimized for rapid analysis without heavy resource consumption.
* **Dark & Light mode:** Operate under any conditions, easilly toggle mode you chose via settings panel
* **Image Preview:** Preview images in the sidebar or directly by clicking on the map (toggle on & off via settings panel)
* **Multi system support:** Available on Windows, Linux & MacOS

<img src="https://github.com/user-attachments/assets/d6d5fc02-8327-4804-8abb-1e82ba206837" alt="Previews enabled satellite map layer" />

---
| App UI - Previews Enabled (Satellite Map) | App UI - Previews Disabled (Max Performance) |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/d6d5fc02-8327-4804-8abb-1e82ba206837" alt="Previews enabled satellite map layer" /> | <img src="https://github.com/user-attachments/assets/58530242-98de-448e-ab0f-963a130766c9" alt="Previews disabled max performance" /> |
| **App UI - Previews & Light Mode Enabled** | **App UI - Light Mode (Standard Street Map)** |
| <img src="https://github.com/user-attachments/assets/c20a86df-30b6-456d-bcf9-4989a58677d0" alt="Previews & light mode enabled" /> | <img src="https://github.com/user-attachments/assets/4c01d326-40c8-4841-9b83-ba6e8535cfcc" alt="Previews disabled & light mode enabled standard street map" /> |
* not all mapping options are shown here there is 6 layer modes


## 💻 System Requirements & Technical Specs

To ensure stable performance during batch processing, the following specifications are recommended:

### **Software Requirements**
* **Operating System:** Windows 10/11, macOS (Intel/Apple Silicon), or Linux (Ubuntu/Debian recommended).
* **Runtime:** Node.js **v20.10.0** or higher.
* **Framework:** Built with Electron for cross-platform desktop compatibility.
* **Primary Libraries:** `express`, `exif-parser` & `electron`.

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

## ☕ Support the Project

Refloow Geo Forensics is completely free, open-source. If this tool has saved you time during an investigation or helped your workflow, consider supporting future updates!

**Cryptocurrency Addresses:**

* **Bitcoin (BTC):**
    ```text
    bc1qay2l04mmqhztq8mj7usjlff22ay6a37x9pl9uk
    ```
* **Ethereum, Polygon & Arbitrum (ETH, POL, ARB or Any Stablecoins):**
    ```text
    0xFD531dc8e3E78C57212F303f684f5A2aD312f7ca
    ```
* **Solana (SOL or Stables):**
    ```text
    8LFVByQUKJVGnBBoAso9KqCbUnFtm875gMkumMRNnEZ2
    ```
* **Tron (TRX or Stables):**
    ```text
    TMEeyojQaC6HXBww7FGQKkF1ZcDeUr3esW
    ```
* **Kaspa (KAS):**
    ```text
    kaspa:qrzd6vvd9h32cxr776l5vx3q94uyyp9wp7fjs36qjx3hltldxz0kwh9qy9hak
    ```
* **Monero (XMR):**
    ```text
    46Aff9taPnbDqdkbSJ8rAzWqAyuKugt3b87irbcUcbLiSkgPff1YFRW3SRoLJtaA4sQhFTbdy7VFa97LpN4yhXRp3vz9vnj
    ```
* **Litecoin (LTC):**
    ```text
    ltc1qvrhhgvyhl7f08r9pmchnzzfhgffuzwzqfpr3hm
    ```
* **Bitcoin Cash (BCH):**
    ```text
    qqe99z466a8wdknxvxkcw60p72ddhkg2lvfuh9jqzz
    ```

## For contributors and developers

---

## 🛠️ Dev Installation

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/Refloow/Refloow-Geo-Forensics.git](https://github.com/Refloow/Refloow-Geo-Forensics.git)
    cd Refloow-Geo-Forensics/src
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

---

## 📰 Featured In

**Refloow Geo Forensics** has been recognized by the cybersecurity community.

> "Refloow Geo Forensics fills a niche for investigators and OSINT practitioners who need a quick, visual way to process batches of geotagged images without uploading anything to the cloud. [...] For the specific use case of 'I have a folder of JPGs and I need to see where and when they were taken,' this tool gets the job done with minimal friction."
>
> — **[Dark Web Informer](https://darkwebinformer.com/refloow-geo-forensics-a-free-batch-image-geolocation-and-exif-forensics-tool-for-osint/)** (Feb 2026)

<div align="center">
  <a href="https://darkwebinformer.com/refloow-geo-forensics-a-free-batch-image-geolocation-and-exif-forensics-tool-for-osint/">
    <img src="https://img.shields.io/badge/Read_Full_Review-Dark_Web_Informer-CC0000?style=for-the-badge&logo=security&logoColor=white" alt="Read Review on Dark Web Informer">
  </a>
</div>

> Refloow Geo Forensics: A Free Batch Image Geolocation and EXIF Forensics Tool for OSINT
> 
> — **[osintteam.blog curated list of tools](https://osintteam.blog/osint-related-articles-20260216-10fa2f9b4a31)** (Feb 2026)

> 🔎 OSINT Tool: Refloow Geo Forensics: Extract Hidden Data from Images
> 
> — **[CyberSudo](https://www.youtube.com/post/Ugkx4Fi73qxY4QYuQoJE07ZXFs4nTmS-EQ1h)** (Mar 2026)

> OSINTech's Timeline #157
> 
> — **[OSINTech](https://osintech.substack.com/p/osintechs-timeline-157-09042026)** (Apr 2026)

> Refloow Geo Forensics: Free batch image geolocation and digital forensics tool
> 
> — **[EsGeeks](https://x.com/EsGeeks/status/2042762254660096432)** (Apr 2026)

> Featured OSINT Tools
> 
> — **[The OSINT Vault](https://theosintvault.io/)** (Apr 2026)
