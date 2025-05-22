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

## Want to try the project on your own PC?

Go to [https://clerk.com] with your browser, create an account, and sign in.

Create an application and type in a name. Make sure to only select Google as the sign in options.

Follow the instructions to install Clerk, and edit your .env file with your PUBLIC and SECRET keys.

Go back to Clerk and click on Configure. Then, click on SSO Connections. 

Edit the Google OAuth provider by toggling on Use custum credentials.

Copy your Authorized Redirect URI and sign into your Google Console page [https://console.cloud.google.com].

Click NEW PROJECT, add a name, and click create.

Navigate to APIs & Services, click on Credentials, click on Configure consent screen, and click Get started.

Add the App name and your email or another user support email and click Next.

Choose External and click Next.

Enter the email address you would like to recieve notifications if there are changes to your project and click Next.

Check that you agree to the Google API Services policy and click Create.

Click Create OAuth Client, choose Web application, enter a name you will recognize, add the Authorized redirect URI you copied earleir from Clerk, and click Create.

Copy the GOOGLE CLIENT ID and the GOOGLE CLIENT SECRET and paste it in the .env file.

Go back to your Clerk page and paste it in designated spots where you copied the Authorized redirect URI from.

Go back to your Google Console page and click on Data Access and then click on Add or remove scopes.

Check the first 3 items (/auth/userinfo.email, /auth/userinfo.profile, openid) and add this scope: https://www.googleapis.com/auth/calendar.events

Click Update and go to the Branding section. The bare mininum you need to fill to have the applicaiton working is the App name, User support email, Authorized domain which is accounts.dev, and the developer contact information.

Now, you can run run the development server and test your application: 

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
