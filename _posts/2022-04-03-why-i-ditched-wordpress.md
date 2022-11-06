---
layout: post
author: Toby
image: 20220403_why_i_ditched_wordpress.jpg
---

For the last several years, I have been running this website on wordpress. It was hosted on an ubuntu 18.04 digital ocean droplet, with an nginx proxy and mySQL database. Today, i migrated all my website content to plain HTML, and committed it to a github pages repository. I then clicked 'destroy' on the droplet. but, why?

Wordpress is overkill and technologically complicated for what I need. All I need is a plain and simple static website to serve my needs. The ease of editing my website in a text editor and typing `git push` meets all my needs. Simple is best.

Wordpress is renowned to be insecure. Because of its size and complexity, security issues crop up in it all the time. The wordpress plugin ecosystem is even worse. You need to constantly apply updates to it, in addition to the underlying host. By moving to plain HTML on GitHub pages, this burden is completely gone.

Last but not least, my website is now basically free, excluding the AWS route53 costs. At $10 p/m for the digital ocean VM, it was hardly breaking the bank. but now thats an extra $120 a year to put into savings. The small savings add up. 