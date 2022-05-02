---
title: Get Started
---

# Get Started

Using Scadies is very easy. It just needs you to do something.

## Register A Vercel Account

If you already has a vercel account,you can skip this step.

Visit the https://vercel.com first. Then sign in with GitHub/GitLab/BitBucket.

## Build Scadies

### Database

Register a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account.

Create a free(its text should be `shared`) MongoDB database. For region,you had better to choose `AWS / N. Virginia (us-east-1)`.

Set the rule to allow all IP address.(Type `0.0.0.0` in `Allow IP Addresses` input)（[why？](https://vercel.com/support/articles/how-to-allowlist-deployment-ip-address)）

Then add a user in your database，and add password for this user.

Then click `CONNECT` button at Clusters page and remember the connect string. Replace the `<password>` to your database password. It's your database connect link.

Then import the Scadies repo.

### Backend

Click the following button:

[![](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/uazira/scadies-restful)

Then click `Go To Dashboard` button:

![image-20220502135916777](https://adkinsm-img-bed.vercel.app/img/image-20220502135916777.png)

Remember The `Domain`, it's your backend URL:

![image-20220502140621310](https://adkinsm-img-bed.vercel.app/img/image-20220502140621310.png)

Then click `Settings` in header of the page.

In the left sidebar,there is a `Environment Variables` button and click it.

Add a Environment Variable,its name is `mongodbUri` and its value is your database connect link.

Then click `Overview` button.

![image-20220502141257928](https://adkinsm-img-bed.vercel.app/img/image-20220502141257928.png)

Then click `View Build Logs`.

![image-20220502141403108](https://adkinsm-img-bed.vercel.app/img/image-20220502141403108.png)

Then click the `...` button.

![image-20220502141517274](https://adkinsm-img-bed.vercel.app/img/image-20220502141517274.png)

Then click `Redeploy`.

![image-20220502141600821](https://adkinsm-img-bed.vercel.app/img/image-20220502141600821.png)

Then click `Redeploy`.

![image-20220502141702104](https://adkinsm-img-bed.vercel.app/img/image-20220502141702104.png)

### Frontend

Click the following button:

[![](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/uazira/scadies-frontend)

Then click `Go To Dashboard` button:

![image-20220502135916777](https://adkinsm-img-bed.vercel.app/img/image-20220502135916777.png)

Then click `Settings` in header of the page.

In the left sidebar,there is a `Environment Variables` button and click it.

Add a Environment Variable,its name is `SITEURL` and its value is your backend URL.

Then click `Overview` button.

![image-20220502141257928](https://adkinsm-img-bed.vercel.app/img/image-20220502141257928.png)

Then click `View Build Logs`.

![image-20220502141403108](https://adkinsm-img-bed.vercel.app/img/image-20220502141403108.png)

Then click the `...` button.

![image-20220502141517274](https://adkinsm-img-bed.vercel.app/img/image-20220502141517274.png)

Then click `Redeploy`.

![image-20220502141600821](https://adkinsm-img-bed.vercel.app/img/image-20220502141600821.png)

Then click `Redeploy`.

![image-20220502141702104](https://adkinsm-img-bed.vercel.app/img/image-20220502141702104.png)

### Admin

Click the following button:

[![](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/uazira/scadies-admin)

The second button uses to build Admin. It need three Environment Variables: `adminUserName` `password` and `mongodbUri`

The `mongodbUri` is also the database connect link. You can copy and paste.

The `adminUserName` and `password` is username and password of your admin. You should use a strong password.

Then click `Overview` button.

![image-20220502141257928](https://adkinsm-img-bed.vercel.app/img/image-20220502141257928.png)

Then click `View Build Logs`.

![image-20220502141403108](https://adkinsm-img-bed.vercel.app/img/image-20220502141403108.png)

Then click the `...` button.

![image-20220502141517274](https://adkinsm-img-bed.vercel.app/img/image-20220502141517274.png)

Then click `Redeploy`.

![image-20220502141600821](https://adkinsm-img-bed.vercel.app/img/image-20220502141600821.png)

Then click `Redeploy`.

![image-20220502141702104](https://adkinsm-img-bed.vercel.app/img/image-20220502141702104.png)

---

OK. Your Blog is good now(your blog's link is frontend's link). Enjoy!

