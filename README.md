# ⏱️ Daily Stand-up Time-Boxer

A lightweight, responsive web application designed for Scrum Masters, Agile Coachs, and Product Owners to keep Daily Stand-ups crisp, efficient, and strictly time-boxed. 

🔗 **Live Demo:** [https://kena-bit.github.io/agile-timer-app/](https://kena-bit.github.io/agile-timer-app/)

---

## 🚀 The Product "Why" (The Problem)
As a Product Owner, I noticed our Daily Stand-ups were occasionally straying away from its purpose of quick status updates on work in the sprint. To build deep technical empathy with engineering squads, I decided to step into the codebase and build a custom internal tool to solve this constraint.

## 🛠️ Tech Stack & Architecture
This application was built entirely from scratch with a focus on core frontend performance and clean component layout:
* **HTML5:** Semantic skeleton structures ensuring structural integrity and web compliance.
* **CSS3 (Flexbox):** Clean visual hierarchy using asymmetric row styling to emphasize the Primary CTA ("Start") over secondary functions ("Reset"). Fully mobile-responsive.
* **Asynchronous JavaScript:** Leveraged native browser clock cycles (`setInterval`) to handle dynamic state adjustments and UI text manipulation over time intervals.

## 🧠 Core Features & Logic Handled
1. **Shared State Manipulation:** Both the execution loop and reset parameters safely alter the same variable scope to prevent race conditions.
2. **Defensive Reset Flow:** Clears active standard intervals automatically upon re-trigger to avoid clock stacking bugs.
3. **UX Feedback:** Visual alerts trigger instantly when asynchronous timers breach zero thresholds (`timeLeft <= 0`).

---
*Created by Ken Alimi as part of a technical alignment and engineering empathy initiative.*
