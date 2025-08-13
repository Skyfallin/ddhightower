# Dimetrius Hightower | Portfolio Website

Welcome to [Dimetrius Hightower's Portfolio Website](https://www.ddhightower.com/). This is a personal portfolio showcasing Dimetrius Hightower's skills as a frontend developer. The site is built with modern technologies to provide a fast, responsive, and interactive user experience.

## 🚀 Tech Stack

- **Framework**: [React](https://reactjs.org/) & [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Chakra UI](https://chakra-ui.com/)
- **Backend**: [GraphQL](https://graphql.org/) API
- **CMS**: [Contentful](https://www.contentful.com/) (Headless CMS)
- **Search**: [Algolia](https://www.algolia.com/)

## 💡 Features

- **Interactive Design**: Responsive and optimized for all screen sizes.
- **Dynamic Content**: Powered by Contentful for easy content updates.
- **Fast Search**: Implemented with Algolia for instant and accurate results.
- **Modern UI**: Styled with Tailwind CSS and Chakra UI for a clean, user-friendly interface.
- **SEO Optimized**: Built with Next.js for server-side rendering and enhanced search engine performance.

## 📂 Project Structure

Here's an overview of the key directories and files in this project:

- `app/`  
  Next.js app router (Directory structure NextJS 13)
  - `components/`  
  Reusable UI components.
  - `theme/`  
  Global and Tailwind CSS styles.
  - `types/`  
  Reusable prop types.
  - `util/`  
  Utility functions.
- `lib/`  
  Utility functions and configurations.
- `public/`  
  Static assets (images, fonts, etc.).

## 📦 Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository**:

 ```bash
 git clone https://github.com/Skyfallin/ddhightower.git
 cd ddhightower
 ```

2. **Install dependencies**:

Run the following command to install all required dependencies:

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**:

Create a .env.local file in the root directory and add the following:

```Dotenv
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
ALGOLIA_APP_ID=your_algolia_app_id
ALGOLIA_SEARCH_API_KEY=your_algolia_search_api_key
NEXT_PUBLIC_ENABLE_HOME=true # set to false to disable home page
```

4. **Start the development server**:

```bash
npm run dev
# or
yarn dev
```

## 📜 License

This project is licensed under the MIT License. See the full license text below:

---

MIT License

Copyright (c) `2025` `Dimetrius Hightower`

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
