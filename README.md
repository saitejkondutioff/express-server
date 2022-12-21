# Project Overview

## Introduction to Node.js training 

### Understanding of Client Server Architecture

Client server architecture is a computing model in which the server hosts, delivers, and manages most of the resources and services requested by the client.   
It is also known as the networking computing model or client server network as all requests and services are delivered over a network.   
The client-server architecture or model has other systems connected over a network where resources are shared among the different computers.   
   
Client : They are the ones who sent Requests.     
Server : Server is the one who provides requested services.   

__Types of Client Server__:   
1) 1-tier architecture   
2) 2-tier architecture
3) 3-tier architecture
4) N-tier architecture


### Understanding of MERN Stack

MERN stands for MongoDB, Express, React, Node. 
The MERN architecture allows you to easily construct a three-tier architecture (front end, back end, database) entirely using JavaScript and JSON.

__MongoDB__ — document database
__Express(.js)__ — Node.js web framework
__React(.js)__ — a client-side JavaScript framework
__Node(.js)__ — the premier JavaScript web server

#### React.js front end :
The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML.
React lets you build up complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML.

React’s strong suit is handling stateful, data-driven interfaces with minimal code and minimal pain, 
and it has all the bells and whistles you’d expect from a modern web framework: great support for forms, error handling, events, lists, and more.

#### Express.js and Node.js server tier :
The next level down is the Express.js server-side framework, running inside a Node.js server. 
Express.js bills itself as a “fast, unopinionated, minimalist web framework for Node.js,” and that is indeed exactly what it is. Express.js has powerful models for URL routing (matching an incoming URL with a server function), and handling HTTP requests and responses.

By making XML HTTP Requests (XHRs) or GETs or POSTs from your React.js front end, you can connect to Express.js functions that power your application. Those functions, in turn, use MongoDB’s Node.js drivers, either via callbacks or using promises, to access and update data in your MongoDB database.

#### MongoDB database tier :
If your application stores any data (user profiles, content, comments, uploads, events, etc.), then you’re going to want a database that’s just as easy to work with as React, Express, and Node.

That’s where MongoDB comes in: JSON documents created in your React.js front end can be sent to the Express.js server, where they can be processed and (assuming they’re valid) stored directly in MongoDB for later retrieval.

