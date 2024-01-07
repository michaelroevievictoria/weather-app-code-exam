Absolutely! Here's an extension to the README that details how to obtain an API key from OpenWeatherMap:

```markdown
# Weather App

### Developed by: Michael Roevie Victoria

This is a [Next.js](https://nextjs.org/) project bootstrapped with `create-next-app`.

## Getting Started

### Environmental Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/michaelroevievictoria/weather-app-code-exam
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create a `.env` file in the root directory.**

4. **Add the following environment variables:**

   ```bash
   NEXT_PUBLIC_GITHUB_CLIENT_ID=YOUR_GITHUB_CLIENT_ID
   NEXT_PUBLIC_GITHUB_CLIENT_SECRET=YOUR_GITHUB_CLIENT_SECRET
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Authentication with GitHub

For GitHub authentication, follow these steps:

1. Create an OAuth App in your GitHub account settings.
2. Set the Authorization callback URL to `http://localhost:3000/api/auth/callback/github`.
3. Copy the generated Client ID and Client Secret.
4. Add these values to your `.env` file:

   ```bash
   NEXT_PUBLIC_GITHUB_CLIENT_ID=YOUR_GITHUB_CLIENT_ID
   NEXT_PUBLIC_GITHUB_CLIENT_SECRET=YOUR_GITHUB_CLIENT_SECRET
   ```

5. Restart the development server if it's running.

### Using OpenWeatherMap API

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. Follow these steps to get an API key:

1. Register on [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and create an account.
2. Once logged in, go to the [API keys section](https://home.openweathermap.org/api_keys) and generate a new API key.
3. Copy the generated API key.
4. Add the API key to your `.env` file:

   ```bash
   NEXT_PUBLIC_WEATHER_API=YOUR_API_KEY
   ```

## Libraries Used

- [MUI (Material-UI)](https://mui.com/)
- [Moment.js](https://momentjs.com/)
- [Lodash](https://lodash.com/)
- [React-Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [NextAuth](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js/)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
```