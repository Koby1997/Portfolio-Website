  # Setup and Run Instructions

## Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js** (v22 or higher recommended. Verify with `node -v`)
- **Git**

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd portfolio-website
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

## Development

To start the local development server with hot-module reloading:

```bash
npm run dev
```

The site will be available at `http://localhost:4321/`.

### Viewing on Mobile during Development
Run the following command to expose the development server to your local network:
```bash
npm run dev -- --host
```
Access the provided Network IP on your mobile device (must be on the same WiFi network).

## Building for Production

To build the final static assets for production deployment:

```bash
npm run build
```

This will generate the optimized static files inside the `dist/` directory, which can be deployed to any static host like Cloudflare Pages or Vercel.
