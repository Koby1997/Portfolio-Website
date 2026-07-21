# PROJECT CONTEXT: STOCK PORTFOLIO PATHFINDER (ANTIGRAVITY)

## 📌 READ THIS FIRST (For New AI Agents)
This file is the **Source of Truth** for the project. If you are starting a new session, read this to understand the system, data flow, and core logic immediately.

---

## 🚀 Project Overview
**Name**: Stock Calculator (aka Antigravity / Portfolio Pathfinder)
**Goal**: To mathematically identify the optimal "Seasonality Windows" (Buy Dates & Sell Dates) for stocks based on 20 years of historical data. The system generates a "Schedule" of non-overlapping trades to maximize capital efficiency.
**Core Philosophy**: "The Box" Strategy. Buying X days before a catalyst (Dividend/Earnings) and selling Y days before/after. We look for reliable, repetitive price anomalies.

---

## 🛠 Tech Stack
### Backend (Python)
*   **API**: FastAPI (`api.py`)
*   **Data Processing**: Pandas, NumPy
*   **Database Interface**: PyMongo (`db_setup.py`)
*   **Market Data**: `yfinance` (Yahoo Finance API)
*   **Logging**: Custom logger (`Logs/info.log`)

### Database (MongoDB)
*   **Collection**: `stocks` (Production Data)
*   **Structure**: Each document is a Stock object containing:
    *   Basic Info (Sector, Market Cap, Volume)
    *   `all_range_diffs`: A computed map of every possible Buy/Sell window (e.g., Buy 20 days before, Sell 5 days before).
    *   `best_buy`, `best_sell`: The single best window found.

### 🧹 Data Filters (How we clean the noise)
We apply strict filters in `FillDB.py` to ensure only quality data enters the system:
1.  **Active Payer**: Must have paid a dividend in the last **550 days** (approx 1.5 years).
2.  **Relevance Window**: We only analyze the last **20 years** of history.
3.  **Minimum Maturity**: Must have at least **10 payout events** in that 20-year window (prevents "lucky" new stocks).
4.  **Data Quality**: Days with missing price data (NaN) are skipped.

### Frontend (React + Vite)
*   **Path**: `/stock-visualizer`
*   **Styling**: Tailwind CSS (Dark Mode, Glassmorphism, Neon Green Accents).
*   **Core Components**:
    *   `App.jsx`: Main State Container (Filters, Data fetching).
    *   `Sidebar.jsx`: Robust filtering system (Sector, Size, Alpha, Holding Days, Max Order).
    *   `Rankings.jsx`: The "Top Stocks Leaderboard" with sortable columns and dynamic filtering.
    *   `StockLineGraph.jsx`: Visualizes the 20-year seasonality pattern.
*   **State**: Local React State (lifted to `App.jsx` for global filter access).

---

## 🔄 Data Pipeline & Workflow
1.  **Data Ingestion (`Main.py` / `FillDB.py`)**:
    *   Reads specifically formatted stock list (`Lists/StockList.txt`).
    *   Fetches 20 years of daily OHLC data via `yfinance`.
    *   Calculates **Range Diffs**: Iterates through every combination of Buy Days (e.g., 30 to 1) and Sell Days (e.g., 29 to -10) relative to Dividend Ex-Dates.
    *   Stores statistical results (Avg Return, Win Rate, EV) into MongoDB.
    *   *Note: This is a heavy overnight process.*

2.  **Optimization API (`api.py`)**:
    *   **Endpoint**: `/api/optimizer/optimize`
    *   Loads "Candidates" from MongoDB.
    *   Runs `PortfolioOptimizer.py`.
    *   **Algorithm**: "Iterative Greedy with Parallel Tracks".
        *   Sorts all opportunities by `Score` (Alpha * Reliability).
        *   Picks the best trade.
        *   Refreshes the pool to find the next best trade that *doesn't overlap* time-wise (or fits into Track 2, 3, etc.).
    *   **Backtesting**: After selecting trades, it performs a **Batch Fetch** to YFinance to get the *Realized* 2025 returns for "Expectation vs Reality" comparison.

3.  **Visualization (Frontend)**:
    *   Fetches optimized schedule from API.
    *   **Timeline Chart**: Shows the "Tetris-like" packing of trades across tracks.
    *   **Equity Curve**: Shows "Projected Growth" (Green) vs "Real World 2025 Result" (Orange).
    *   **Stock Table**: Detailed metrics for each trade.

---

## 🧠 Core Algorithms & Scores

### 1. The EV Score (Institutional Value)
*   **Formula**: `Safe Order Size * Alpha Score`
*   **Safe Order Size**: 1% of Daily Dollar Volume. (How much a fund can dump without crashing price).
*   **Alpha Score**: `Raw Excess Return * Reliability Factor (Win Rate ^ 3)`.
*   **Reliability Factor Logic**:
    *   We punish low win rates using a cubic formula.
    *   **90% WR**: `0.9 * 0.9 * 0.9` = **0.73** (High Score)
    *   **50% WR**: `0.5 * 0.5 * 0.5` = **0.12** (Score Destroyed)
*   **Purpose**: Measures the *Total Extractable Dollars* from a trade, favoring high-liquidity giants (Microsoft, NVIDIA) over volatile penny stocks.
*   *Note: Numbers are often in the Millions ($10M+). This is intentional.*

### 2. Multi-Track Optimization (`PortfolioOptimizer.py`)
*   Solves the "Knapsack Problem" for time.
*   Allows `N` parallel tracks (default 5).
*   Maximizes Total Score while ensuring no single track has overlapping dates.
*   Prioritizes "Velocity" (Money moving fast) over "Duration".
*   **Modes**:
    *   **Standard (Predicted)**: Uses historical "Avg Day of Year" to predict future Ex-Dates. Can generate "Ghost Trades" if dates aren't confirmed.
    *   **Strict (Known)**: Only uses **Confirmed 2025 Dates** found in the DB. Skips any stock without a verified schedule (eliminates prediction risk).

### 3. Metric Refinements
*   **Dynamic Capital Cap (EV Score)**: The EV Score calculation now caps "Investable Capital" at `min(UserCapital, SafeOrderSize)`. This prevents "Infinite Liquidity" bias where massive stocks (AAPL) drowned out quality mid-caps simply because they could theoretically absorb billions.
*   **Quality EV**: A hybrid metric focusing on Consistency + modest Liquidity.

### 4. Advanced Frontend Features
*   **Seasonal Consistency**: Visualizes the performance of specific periods (e.g., "Period 1: Mar 15"). Requires `Run FillDB` to calculate date averages.
*   **Dual-State Visualization**:
    *   **Clicking a Trade**: Shows the *exact* instance (specific 2025 date).
    *   **Zooming Out**: Shows the *recurring pattern* (all historical instances).
*   **Symbol Watermarks**: Large symbol indicators on Dashboard and Strategy Panel for clarity.

---

## 🛡 New Filters (The "Outlier Killers")
Implemented in `OpportunityGenerator` and `Sidebar`:
1.  **Min Duration**: Filters out trades that are too short (noise).
2.  **Min Sell Offset**: **Critical for Dividend Strategies**.
    *   **Setting**: `0` (Default).
    *   **Logic**: Forces the strategy to sell *Before or On* the Ex-Date.
    *   **Why**: Prevents "Lucky" trades where a stock tanks on Ex-Date but recovers weeks later due to unrelated news. Ensures the profit comes from the *Run-Up*, not random recovery.

---

## 🏃‍♂️ How To Run (Cheatsheet)
*   **Terminal 1 (Data)**: `python Main.py` (Only runs overnight updates).
*   **Terminal 2 (API)**: `python api.py`
*   **Terminal 3 (UI)**: `cd stock-visualizer && npm run dev`
*   **DB**: Ensure `mongod` is running.

---

### 3. Advanced Filtering Logic (Sidebar)
*   **Sector & Size**: Multi-select filters.
*   **Performance Metrics**: Min Return, Min Win Rate, Min Raw/Reliable CAGR.
*   **Safety Metrics**:
    *   **Min Alpha**: Ensures specific excess return over market.
    *   **Max Order**: Filters by "Safe Order Size" (1% of daily volume) to ensure liquidity.
    *   **Holding Days**: Filters by trade duration (e.g., "I only want trades < 20 days").
*   **UI/UX**: Custom numeric inputs with clear buttons ('X') and hidden spin-buttons for a clean look.

## 🔮 Future Goals / Roadmap
*   **Live Trading**: Connecting this schedule to a broker API for execution.
*   **Advanced Backtesting**: Testing across multiple past years (2020-2024), not just the most recent one.
*   **Machine Learning**: Replacing the "Fixed Window" logic with ML prediction for entry/exit.
*   **User Accounts**: Saving different portfolio strategies for different users.

### 5. Prediction Logic Updates (Feb 2026)
*   **Circular Statistics**: Now uses trigonometric mean to correctly average dates across the New Year boundary (e.g. Dec 31 & Jan 2 = Jan 1).
*   **Confidence Scores**: Every predicted date now includes a `confidence_score` (Standard Deviation in days) and a label (`High`, `Medium`, `Low`).
    *   **High**: < 7 days deviation.
    *   **Medium**: < 20 days deviation.
    *   **Low**: > 20 days (Likely "Unknown").
*   **Frequency Conflict Detection**:
    *   If a stock's recent dividend count (last 12 mos) is lower than its historical average (e.g. 1 vs 4), we flag it.
    *   **Gap Detection**: If the time since the last dividend > 2.5x the expected interval, we mark it as **Low Confidence** (Suspended Dividend).
*   *See `Notes/Future_Ideas.md` for the granular task list.*

---
**End of Context**
