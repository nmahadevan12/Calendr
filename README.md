This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🚀 Want to Try the Project on Your Own PC?

Follow these steps to get the project up and running locally with **Clerk** and **Google OAuth**:

---

### 1. Set Up Clerk

1. Visit [https://clerk.com](https://clerk.com) in your browser.
2. Create an account and sign in.
3. Create a new application and give it a name.
4. Under **Sign-In Options**, enable **Google** only.
5. Follow the instructions to install Clerk.
6. Add your **Clerk Public** and **Secret Keys** to your `.env` file.

---

### 2. Configure Google OAuth in Clerk

1. In the Clerk Dashboard, go to **Configure > SSO Connections**.
2. Edit the **Google OAuth** provider.
3. Toggle on **Use custom credentials**.
4. Copy the **Authorized Redirect URI** shown — you'll need it in the next step.

---

### 3. Set Up a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com).
2. Click **NEW PROJECT**, enter a name, and click **Create**.
3. Navigate to **APIs & Services > Credentials**.
4. Click **Configure Consent Screen** and then **Get Started**.
5. Choose **External**, then click **Next**.
6. Fill in the **App name**, **User support email**, and click **Next**.
7. On the next screen, provide a notification email address, then click **Next**.
8. Agree to the **Google API Services Terms**, then click **Create**.

---

### 4. Create OAuth Credentials

1. Click **Create Credentials > OAuth Client ID**.
2. Choose **Web application**.
3. Enter a recognizable name.
4. Paste the **Authorized Redirect URI** you copied from Clerk.
5. Click **Create**.
6. Copy your **Google Client ID** and **Google Client Secret**.
7. Paste both into your `.env` file.

---

### 5. Final Configuration

1. Return to your Clerk dashboard.
2. Paste the **Google Client ID** and **Secret** in the fields where the redirect URI was shown.
3. Back in the **Google Cloud Console**, go to **Data Access > Add or remove scopes**.
4. Select the following scopes:
   - `openid`
   - `https://www.googleapis.com/auth/userinfo.email`
   - `https://www.googleapis.com/auth/userinfo.profile`
   - `https://www.googleapis.com/auth/calendar.events`
5. Click **Update**.

---

### 6. Complete Branding Section (Minimum Required)

Fill in the following fields:
- **App name**
- **User support email**
- **Authorized domain** → `accounts.dev`
- **Developer contact information**

---

### ✅ You're Ready!

Start your development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
