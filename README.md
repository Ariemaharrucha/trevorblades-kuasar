# TrevoBlades

TrevoBlades is a responsive React application that provides users with country-specific information, travel recommendations, and translation features. The application integrates OpenAI's language model to deliver an AI-driven experience for geographical and travel-related inquiries.

## Project Overview

TrevoBlades allows users to:
- **Ask questions** about specific countries.
- **Get travel recommendations** for selected countries.
- **Translate country-specific information** into a user-friendly format.

The app uses a dynamic dropdown for country selection, React for its UI, and OpenAI's API to generate meaningful and engaging responses.

---

## Setup Instructions

To set up TrevoBlades locally, follow the steps below:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Ariemaharrucha/trevorblades-kuasar.git
    cd trevoblades
    ```

2. **Install dependencies**:
    ```bash
    pnpm install
    ```

3. **Configure the environment variables**:
    - Create a `.env` file in the root directory.
    - Add the following variables:
      ```env
        VITE_NVDIA_API_KEY=api_key_nvdia
        VITE_PROJECT_URL=public_url_supabase
        VITE_SUPABASE_API_KEY=apikey_supabase
        VITE_TREVOBLADES_API=TREVOBLADES_uri
      ```

4. **Run the development server**:
    ```bash
    pnpm run dev
    ```

5. **Access the application**:
    - Open your browser and navigate to `http://localhost:5173`.

---

## Available Features

1. **OAuth Integration**:
   - Secure user authentication using Supabase.

2. **Display Country Selection**:
   - Displays the selected country's name, flag, currency, and other detailed information.

3. **Interactive AI Chat**:
   - Users can ask questions, get travel recommendations, and translate information related to the selected country.

4. **Real-Time Response**:
   - Responses are dynamically displayed using OpenAI's chat completion API.

5. **AI Typing Indicator**:
   - Displays a loading message while the AI is processing the request.

6. **Message**:
   - All interactions are displayed in a chat-like interface.

7. **Country Validation**:
   - Action buttons are enabled only after selecting a country.

---

## Technical Decisions and Architecture

1. **Tech Stack**:
   - **Frontend**: React with TypeScript.
   - **UI Components**: `react-select` for dropdowns, `ReactMarkdown` for rendering AI responses and user `shadcn-ui` for components
   - **Backend Integration**: OpenAI API for generating AI responses and Supabase for authentication.
   - **Apollo Client**: for connecting to GraphQL

2. **State Management**:
   - Leveraged Zustand for global state management to handle authentication, country data user data.

3. **API Integration**:
   - API calls are abstracted into a utility function (`getInfoCountry`) to ensure clean separation of concerns.

4. **Responsive Design**:
   - The layout is optimized for both desktop and mobile users.

5. **Button Interaction Control**:
   - Buttons for AI actions are only clickable after a country is selected, ensuring logical user flow.

---

## Future Improvements

1. **Improved UI/UX**:
   - Implement animations and transitions for smoother interactions.
   - Provide better error feedback for invalid API calls or user inputs.
   - Improve the web design

2. **Multilingual Support**:
   - Expand translation capabilities to include support for multiple languages.

3. **Chat History Persistence**:
   - Save user chat interactions to Supabase for future retrieval and analysis.

4. **Performance Optimization**:
   - Cache API responses to reduce redundant requests and improve application speed.


