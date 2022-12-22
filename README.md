# Project Overview

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
The top tier of the MERN stack is React.js, Its a JavaScript framework for creating dynamic client-side applications in HTML.
React lets you build up complex interfaces through simple components, connect them to data on your back-end server, and render them as HTML.

React’s helps us handling stateful, data-driven interfaces, support for forms, error handling, events, lists, and more.

#### Express.js and Node.js server tier :
The next level down is the Express.js server-side framework, running inside a Node.js server. 
Express.js is considered as a “fast, unopinionated, minimalist web framework for Node.js,” . 
Express.js contains models for URL routing (matching an incoming URL with a server function), and handling HTTP requests and responses.

By making XML HTTP Requests (XHRs) or GETs or POSTs from your React.js front end, you can connect to Express.js functions that power your application. Those functions, in turn, use MongoDB’s Node.js drivers, either via callbacks or using promises, to access and update data in your MongoDB database.

#### MongoDB database tier :
MongoDB is a documet oriented NoSQL database which is used to store high volume data, It does have tables and columns like traditional databases. It uses JSON like documents with additional schema to store the data.The documents are stored in the key value pair format.

MongoDB is used for JSON documents which are created in your React.js front end can be sent to the Express.js server, where they can be processed and (assuming they’re valid) stored directly in MongoDB for later retrieval.



