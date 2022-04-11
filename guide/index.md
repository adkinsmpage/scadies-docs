---
title: Get Started
---

# Get Started

Using Scadies is very easy.It just needs you to do something.

## Have A Vercel Account

If you already has a vercel account,you can skip this step.

Visit the https://vercel.com first.Then sign in with GitHub/Gitlab/BitBucket.

## Build Scadies

Then import the Scadies repo.

Click the following buttons:

[![](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/uazira/scadies-frontend)Frontend

[![](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/uazira/scadies-backend)Backend

The first project needs a Environment Variables. It is `mongodbUri`.

Register a [MongoDB](https://www.mongodb.com/cloud/atlas/register) account.

Create a free(it looks like "shared") MongoDB databas.For region,you had better to choose `AWS / N. Virginia (us-east-1)`.

Click CONNECT at Clusters page，set the rule to allow all IP address.(Type 0.0.0.0)（[why？](https://vercel.com/support/articles/how-to-allowlist-deployment-ip-address)）

Add a user in your database，and remember the connect string.Replace the `<password>` to your database password.

The string after replacing is the `mongodbUri`

Then,the frontend of your blog is ready todo anything. It is time to build your backend.

The second button uses to build backend. It need three Environment Variables: `adminUserName` `password` and `mongodbUri`

The `mongodbUri` is also the connect string.You can copy and paste.

The `adminUserName` and `password` is username and password of your admin.You should use a strong password.

OK.Your Blog is good now.Enjoy!
