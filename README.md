# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

When we hit a URL like https://www.techtonicgroup.com/, the client we are utilizing attempts to access the server of the aforementioned website. The client we are utilizing will likely be a web browser such as Google Chrome or Microsoft Edge although the link can be followed through a variety of clients such as an email application or messenger application. If successful, following the URL will load the domain into your respective client.

## From start to finish how does that data reach you to be rendered in the browser?

By navigating to a particular webpage, you are basically asking another computer to access information for you. Thus your own computer becomes the client and the sever is the other computer you asking to retrieve data. If successful, your browser will display the webpage. The data is temporarily stored on your computer while you are accessing the webpage and the same communication will occur if you disconnect and reconnect to the webpage to ensure an up-to-date webpage and/or file.

## What code is rendered in the browser?

The code that is rendered into your browser is HTML. Each webpage is an HTML document whose source code is interpreted by your web browser.

## What is the server-side code’s main function?

Server-side processing (the utilization of server-side code) is used to interact with permanent storage like files and renders pages to the client. Server-side processing happens when a page is initially requested from the server and posted back to the server, such as navigating to other pages or saving files. This can be a slower process as the client has to wait for the server to process such requests and send the information back to the client.

## What is the client-side code’s main function?

Client-side processing (the utilization of client-side code) is similar to server-side code but instead of being located on the server, it is located on the client’s web page and processed in the client’s browser. Although this typically requires more work on a programmer's side, it leads to far faster processing times than server-side code.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

Per client, one instance is created of client-side assets. When a client accesses a server, typically server-side code will process the request and send back that request for the client to process. It can contain any amount of images/length of HTML/depth of CSS/etc. provided the server can process the request and the client can process the received information.

## How many instances of the server-side code are available at any given time?

Realistically, as many as a server can handle. If I were a single person using a client to access a database that was utilizing server-side code, it would create an instance for just my client to process. However, if thousands were to access the database with server-side code on their clients at the same time, the server would have to create multiple instances for each one of those clients to process.

## What is runtime?

Runtime is simply described as the length of time a program runs from when it is started/executed until it is closed/ended.

## How many instances of the the databases connected to the server application are created?

This can vary based on what the developer intends as a database instance describes a complete database environment which can include all sorts of functionalities. Developers and administrators might create multiple instances of the same database for different purposes thus there can be multiple instances connected to a server application.
