# lenakujath.dev

This repo contains the source code to my personal website.

It is built with Elventy, a static stite generator. 
I made myself familiar with it just recently and the limited experience I have with it has been remarkably positive.

If you want to check it out yourself, the documentation is very good: https://www.11ty.dev/docs.

I was hugely inspired to finally create my own space on the web by [Sophie Koonin](https://github.com/sophiekoonin) among others, whose articles I appreciate very much 
and who has also a fun website. Besides running an informative blog, you can switch between different themes and check out 
some of her projects at https://localghost.dev.
Her [repo](https://github.com/sophiekoonin/localghost) also helped me a lot to figure out the basics of this SSG.

## How to run locally

```
npm install
npx @11ty/eleventy --serve
```

As a default your port will be at `8080`, so browse to http://localhost:8080/. Should this port be taken, a new one will be used. You can see the port you should navigate to when you run the `--serve` command, use that one.
