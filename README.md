# Leanne's Collection Documentation

## Important Note  

This website is being built for a real client; Leanne, a professional face and body paint artist, who is also my sister. The current version uses example kits, placeholder product images, repeated tutorial videos, and generic descriptions that don’t yet reflect the final products. However, the linked social media accounts and email contact information are real and belong to the client.

The real kits, along with their custom video tutorials and detailed product descriptions, are still being created by the seller and will be uploaded before the public launch. That launch will also use the custom domain name the seller already owns. All current content, however, still belongs to the seller and reflects the types of products that will eventually be sold. In the final version, each kit will also include multiple images that users can click through.

The core site functionality; including cart creation, checkout, and admin order tracking has already been built using proxies for this assignment. These proxies are currently acting as placeholders to simulate the checkout process of a real eCommerce application. In future updates, these will be fully replaced by Shopify API integration, to handle real payments, inventory, and order processing. The admin dashboard will also be expanded to allow the seller to upload new products and tutorials, edit or remove existing ones, and manage more of the site independently as additional features are added.

---

## Links - Deployed Website, Github Repo, Presentation, & Trello Planning Board

-  ### Link to Deployed website - Customer Portal:

    [Leanne's Collection Website](https://leannescollection.netlify.app)  

---

-  ### Link to Deployed website - Admin Portal :

    [Leanne's Collection Website - Admin](https://leannescollection.netlify.app/login)

---


- ### Link to Github Repository:

    [LaylahDePaull_T3A2-B](https://github.com/LaylaD4/LaylahDePaull_T3A2-B)

---

- ### Link to Video Presentation:

    [My Power Point Presentation](https://youtu.be/UXcIIPlMOQs)

---

- ### Link to Kanban Style Trello Planning board
    [My Trello Board](https://trello.com/b/4fwy8Nat/leannes-collection-web-app)

---

## Quick Start - Run App Locally
If you’d like to quickly launch this app locally for exploration and/or testing, follow the steps below. For full setup instructions, including both local and remote deployment and detailed testing information, please refer to the frontend and backend `README.md` files in their respective folders.

---

#### 1. Clone the Repository

```bash
git clone https://github.com/LaylaD4/LaylahDePaull_T3A2-B.git
```

#### 2. Navigate to the Backend

```bash
cd src/backend
```

#### 3. Install Backend Dependencies

```bash
npm install
```

#### 4. Seed the Database with Products & Videos

```bash
npm run seed
```

#### 5. Start the Backend

```bash
npm run dev
```
- Your backend will likely run on http://localhost:5000  

#### 6. Run Backend Testing

```bash
npm run test            # Run all tests
npm run test-cc         # Run test with coverage in terminal
npm run test-ccc        # Run tests & generate HTML coverage report
```

#### 7. Navigate to the Frontend

```bash
cd ../frontend
```

#### 8. Install Frontend Dependencies

```bash
npm install
```

#### 9. Start the Frontend

```bash
npm run dev
```

- Your frontend will run on http://localhost:5173 (if available)

#### 10. Run Frontend Testing

```bash
npm run test             # Run all tests
npx vitest --coverage    # Run tests with code coverage & generate HTML report
```

---

## Information - Testing Documentation
All testing for this project is documented in the **frontend** and **backend** `README.md` files located in their respective folders.

### Frontend - Production Testing
The frontend README includes full details of production testing using React Testing Library and Vitest, along with a breakdown of the specific unit and integration tests performed on key components and pages. It also contains screenshots of code coverage reports and terminal outputs. In addition to automated testing, the frontend was tested live by both myself (the developer) and the client. Evidence of this includes screenshots from both desktop and mobile views, as well as PDF copies and screenshots of email correspondence between the client and me, showing both the testing request and the client’s feedback.

### Backend - Development Testing  
The backend README includes full details of automated testing using Jest for unit tests and Supertest for integration tests. It outlines exactly which backend logic was tested and includes screenshots of both terminal outputs and the generated HTML code coverage reports. In addition to automated testing, the backend was manually tested using Insomnia during development. Screenshots of this manual testing are included in the README and cover all API endpoints for products, videos, orders, and authentication routes requiring a valid JWT. These tests confirm that route logic, field validation, and middleware protected admin only access controls functioned correctly in the development environment.  

---  



# Full Stack App - Part A Documentation

## R1. Description of your website, including:

- PURPOSE  
  The website is an eCommerce platform named 'Leanne's Collection' designed to offer customers a seamless shopping experience for Face and Body Paint Kits. Unlike other platforms, it focuses on providing complete kits that include everything a buyer needs. It caters to a diverse range of users, including professional face painters seeking high-quality FDA approved products, beginners exploring face painting as a potential career or hobby, parents looking for simple kits to create fun designs for their children's birthday parties, and schools or preschools needing easy-to-use kits for various events. 

  What sets this website apart is its ability to eliminate the guesswork often associated with purchasing face painting supplies. For those unfamiliar with the field, assembling the right products can feel both overwhelming and expensive. Questions such as “What paints should I buy: solid colours, one-strokes or split-cakes?”, “What type of brushes do I need: angle, flat, or filbert?”, “Do I need sponges: half-round or petal?”, and “What other products are essential?” can discourage potential customers. This platform addresses these concerns by helping buyers select the kit that best suits their needs, while providing clear and detailed information about what each kit includes, what designs can be created (Video Tutorials), and the occasions it is most appropriate for. By simplifying this process, the site ensures that even complete beginners can make confident, and importantly cost-efficient purchases.

  In addition to serving customers, the website also acts as a direct-to-consumer marketplace for the business owner. It provides a platform to showcase their expertise, and sell the face and body paint products that they themselves have designed. This includes promoting their unique product lines such as: paint palettes, one-strokes, brushes, and stencils, enhancing their brand presence in the face and body paint market/industry, and integrating their social media accounts to expand their reach.

  For this assignment, I will focus on building proxies for cart creation, checkout, and order creation, allowing customers to shop as guests. The business owner (admin) will be able to login to a dashboard where she can view all orders, access individual order details, and use a toggle button to update the order status between "Fulfilled" and "Unfulfilled." No additional inventory or product management features will be included at this stage.

  I think it is also important to mention that Leanne is a real person who is a well-known face and body paint artist with an already established online career and business, designing many products used by face painters around the world. She is also my big sister, my first client, and I am building this website for her.

  As I mentioned above, for this assignment, I will focus on creating proxies for cart creation, order checkout, and allowing the business owner to login, view orders, and update thier status. However, in the future, I plan to integrate Shopify APIs for managing orders, inventory, and payments. These features won't be included now due to time constraints and the sensitive information required for their integration.

  Since I am completing this project on my own, all products, videos, and other content will be pre-existing on the site, with no ability to edit, add, or remove them at this stage. However, I will certainly implement these features before the site goes live under the domain my sister has already secured.

- FUNCTIONALITY/FEATURES 
  1. Shop for Kits  
  The website provides a straightforward and user-friendly shopping experience, allowing customers to browse and purchase face and body paint kits with ease. Each product page provides a detailed breakdown of the kit's contents, including its purpose, the designs it can create, and suitable occasions. Comprehensive descriptions, pricing, and high-quality images/videos ensure that both beginners and professionals can easily find the right kit. Customers upon checkout can review, and update their shopping cart before proceeding to checkout.

  2. Quick Video Tutorials  
  Each kit's detailed page includes a short video designed to demonstrate its use or showcase the designs that can be created with it. These videos serve as quick and engaging tutorials, helping customers understand the product and how to use it effectively. This feature ensures that even beginners feel confident in their purchase.

  3. Customer Checkout Options  
  The website allows customers to complete their purchases as guests, eliminating the need for account creation. This streamlines the checkout process and enhances user convenience. A shopping cart icon is prominently displayed in the top right corner of almost every page, enabling customers to easily access their cart and proceed to checkout from anywhere on the site.

  4. Landing Page  
  The homepage or landing page will serve as the main entry point for the website, providing an engaging and visually appealing experience that introduces all key elements of the site. The hero section will immediately capture users' attention with vibrant face paint imagery and a clear call-to-action directing them to shop for face paint kits. As users scroll, they will find information about the available products (kits), a brief introduction to the seller, and a selection of embedded video tutorials showcasing these kits in action. Each section features clear call-to-action buttons, directing users to shop more kits (Shop Page), learn more about the seller (About Page), and explore additional tutorials (Tutorials Page). Additionally, the page will feature links to the seller’s social media pages, allowing users to explore more content and stay updated. The seller’s contact details will also be included in the footer, ensuring easy access across most pages in the app.

  5. Order Management  
  The business owner will have access to all customer orders, enabling them to track purchases and manage fulfillment. Through the admin dashboard, they can view order details and update the status of each order using a toggle feature to mark orders as fulfilled or unfulfilled. This functionality ensures the seller can efficiently monitor and manage the ordering process, keeping track of completed and pending orders with ease.

  6. Website Accessibility & Management    
  The platform will ensure that both customers and the business owner can navigate and manage the website with ease. The interface is designed for a seamless shopping experience, allowing users to browse and purchase kits, while the business owner has a dedicated portal to login, view, and manage orders. The website is fully optimised for all devices, using Tailwind CSS breakpoints to provide a smooth experience across smartphones (640px), tablets (768px), and desktops (1024px), ensuring accessibility and usability on any screen size.

- TARGET AUDIENCE  
  1. Professional Face Painters  
  The website targets experienced face and body paint artists who require high-quality products for their work. It offers complete kits with all the essential products needed to create a variety of professional designs for different events. These artists may also be interested in tutorial videos to learn new face paint designs and gather ideas for creating new unique looks, as well as staying up to date with new paint releases from Leanne's Collection.

  2. Beginners & Hobbyists   
  The website would also target individuals exploring face painting as a hobby or potential career move. Beginners would highly benefit from purchasing a complete kit, eliminating all the guesswork of selecting individual products while being a more cost-effective option. Additionally, the detailed product descriptions and video tutorials would help them understand the kit’s capabilities and the range of designs they can create, guiding them toward a more informed purchase decision.

  3. Parents & Guardians  
  The website would also target parents and caregivers looking for simple, safe, and easy-to-use kits to create fun face paint designs for their children at home, or for their kids birthday parties. They too would also greatly benefit from the detailed product descriptions, and engaging video tutorial videos.

  4. Schools & Childcare Centres
  The website would also target schools and childcare centres that require face painting kits for themed events, plays, school fairs, or simply fun activities to entertain children. These organisations would benefit from well-organised kits that include all necessary supplies, catering to different themes and occasions (eg; easter, christmas or halloween). Schools may also seek larger kits with increased quantities of paint and supplies, offering a wider variety of options to accommodate larger groups and events.

  5. Aspiring Entrepreneurs  
  The website would also target people looking to start their own face painting business. For example, many university students or stay-at-home parents may seek more flexible work opportunities that would fit around their children or school commitments. The website would help provide a great starting point for launching a face painting business by offering access to comprehensive kits with all the professional products needed. They could also benefit from the sellers expert guidance on product selection, tutorial videos, and links to the seller's social media, helping them learn more about face painting trends and industry practices.

  6. Social Media Influencers 
  The website would also target social media influencers who create content around face and body painting. The seller would largely benefit from influencers showcasing their exclusive line of paints and new releases, helping to increase brand awareness in the industry. By using and reviewing these high-quality products, influencers can generate excitement among their followers, driving interest and sales. Additionally, links to the seller's social media allow influencers to stay updated on new product launches and industry trends, further amplifying the brand's reach.

- TECH STACK  
  1. Frontend: React.js  
  The frontend will be built using React.js to provide a dynamic and responsive user interface. React Context API will manage global state, while Fetch API will handle API requests. React Toastify will be integrated to display notifications, while styling will be managed using Tailwind CSS to create a visually appealing and striking design.

  2. Backend: Node.js & Express.js  
  The backend will be developed using Node.js and Express.js, with Node providing the runtime environment for executing backend logic and managing dependencies using npm. The Express.js framework will handle HTTP requests, define API routes, manage middleware, and interact with the database.

  3.  Database: MongoDB & Mongoose    
  The database will use MongoDB, a NoSQL database, along with Mongoose to define schemas (ODM) for storing all necessary data related to products, orders, video tutorials and admin authentication. MongoDB Atlas will be used for cloud-based database hosting, with AWS as the chosen cloud provider, ensuring site security, scalability when needed, and easy accessibility.

  4. Development & Deployment  
  The development environment will be managed using VS Code as the text editor. Git & GitHub will be used for version control, allowing feature branching and efficient tracking of changes. For deployment, the frontend will be hosted on Netlify, while the backend will be deployed on Render, which provides the necessary server for running the backend (business logic).

  5. Security & Authentication  
  The backend will implement security measures using bcrypt, JWT, CORS, and custom middleware for admin authentication. Bcrypt will be used to securely hash and verify the admins (seller's) password before storing it in the database. JWT will handle authentication by generating tokens to verify the admin, manage their session, and restrict access to protected routes. Customers will not need authentication, as they will shop and checkout as guests without requiring an account. CORS will be set up to allow the frontend (on Netlify) to communicate securely with the backend (on Render). This prevents the browser from blocking requests and ensures only the approved website can access the API.

  6. Icons & UI/UX Design  
  The website's design will be planned using Figma, ensuring a well-structured UI before development begins. Icons, such as those for social media links, will be sourced from Font Awesome, Heroicons, and Google Material Icons, as they are free and do not require attribution. A favicon will be generated using Favicon.io to represent the site's brand logo, enhancing brand identity. The Contact form will also use EmailJS to allow users to send messages directly to the seller via email, without needing to store form data in a database.

  7. E-Commerce & Payment Handling  
  For the assignment submission, proxies will be created to simulate cart creation, checkout, and payment functionality. Once the site goes live (after assignment submission/marking), the Shopify Admin API will be integrated to handle real eCommerce transactions, including cart creation, checkout, and payment processing.

  8. Testing: Jest, Supertest, Insomnia, Vitest, & React Testing Library  
  Testing will be conducted through both automated and manual methods. The backend will use Jest and Supertest to perform unit and integration tests, with code coverage reports generated to ensure a high level of testing being achieved. Insomnia will be used during development for manual testing of all backend API endpoints. The frontend will use React Testing Library and Vitest to carry out unit and integration testing. After deployment, the live production site will be user tested by both myself and the client, with feedback and screenshots collected as evidence.

  ## R2. Dataflow Diagram

### Dataflow Diagram (DFD) Legend

![Legend For Dataflow Diagram](./docs/dfd-legend.png)  

### Dataflow Diagram Legend - Explained  
- **Entity** (Rectangle): represents users or external systems interacting within my application.  
- **Process** (Rounded Rectangle): shows how data is processed, such as; handling a request or updating an order.
- **Data Store** (Open Rectangle): is where information is stored, such as products, orders, or user (seller - admin) details in the database.  
- **Data Flow** (Arrow): represents how data moves between different parts of the application.  
- **Error Response** (Red Text): illustrates an error, that is; when something goes wrong, like a failed order creation or login request.

  
1. Customer Browsing Product/s Dataflow Diagram  
![Customer Browsing Product/s Dataflow Diagram](./docs/customer-browsing-dataflow.png)

### Customer Browsing Product/s Dataflow Diagram - Explained  

- Customer Navigates to the Shop Page  
The customer opens their web browser and navigates to the Shop Page of the website, initiating the process of browsing products. This action triggers the frontend to request product data from the backend.

- Customer Sends a GET Request  
Once on the Shop Page, the web browser (client) automatically sends a GET request to the server to retrieve product information. This request is made through an API endpoint such as `/api/products` to fetch all available face paint kits, or `/api/products/:id` to retrieve details about a specific product. The request is initiated whenever a customer visits the Shop Page or selects a specific product for more details.

- Product Controller Receives the Request  
The server receives the GET request and processes it through the Product Controller. The controller determines whether the request is for all products or a specific product based on the API endpoint. It then calls the appropriate function (`getProducts()` or `getProduct(id)`) to retrieve the required data.  

- Product Controller Queries the Database  
The Product Controller queries the Products Collection in the database. If the request is for all products, it executes the `getProducts()` function to retrieve the full list of available kits. If the request is for a specific product, it calls the `getProduct(id)` function, using the provided product ID to fetch the corresponding product details.

- Database (Products Collection) Returns Data  
The database processes the query and returns the relevant data to the Product Controller. If the request was for all available products, it returns a JSON array containing all products. If the request included a specific product ID, it returns a JSON object with the details of that product. This ensures that the correct product information is retrieved and sent back to the controller for further processing.

- Product Controller Sends a Response to the Client  
The Product Controller formats the retrieved data into a structured JSON response using express.json() and sends it back to the web browser (client). If the request is successful, the response includes a 200 OK status and the requested product data. The frontend then processes this data and updates the Shop Page accordingly, displaying all products or the selected product’s details.  

- Product Data Displayed to the Customer  
Once the browser receives the product data, it dynamically updates the Shop Page to display the available products or the details of a selected product. The customer can now browse products, and/or view the product's description.

- Error Handling in Product Retrieval  
If an error occurs during the request (eg; an invalid product ID or database connection failure), the Product Controller catches the error and sends an error response back to the client. This response typically includes a 500 Internal Server Error status along with an error message. The frontend then displays an error message to the customer, informing them that the product data could not be retrieved.  

2. Seller Login Dataflow Diagram  
![Seller Login Dataflow Diagram](./docs/seller-login-dataflow.png)  

### Seller Login Dataflow Diagram - Explained  

- Seller Navigates to the Login Page  
The seller (admin) opens their web browser and navigates to the login portal. This page contains a form where they enter their email and password to gain access to the admin dashboard.

- Seller Sends a POST Request  
When the seller submits their login details, the web browser (client) sends a POST request to the server via the API endpoint `/api/seller/login`. This request contains the seller’s email and password in the request body. The request is then routed to the Seller Controller, which is responsible for processing the login attempt.

- Seller Controller Receives the Request  
The Seller Controller receives the POST request and processes the submitted login details (email & password). It extracts these credentials from the request body and calls the `verifySeller()` function, which is responsible for validating the provided details against the stored admin credentials stored in the database.

- Seller Controller Queries the Database  
The `verifySeller()` function queries the database (Sellers Collection) to check for a seller account with the provided email. If a matching email is found, the system retrieves the stored hashed password for comparison using bcrypt. If the credentials match, the seller is authenticated. If the email does not exist or the password is incorrect, an error response is sent back to the client, denying access.

- Database (Sellers Collection) Returns Data  
If the login details submitted are correct, the database confirms the seller’s identity and returns relevant details, such as the seller's ID and email, to the Seller Controller. These details are used to generate a JWT token, which will be required for authentication when accessing protected parts (routes) of the website.

- Seller Controller Generates a JWT  
The Seller Controller generates a JSON Web Token (JWT) using the seller’s ID and email. The token is configured with an expiration time for security. This token will be sent back to the client, allowing the seller to remain authenticated for the session and to access admin-only routes.

- Seller Controller Sends a Response to the Client   
If the login is successful, the Seller Controller sends back a JWT token along with a 200 OK status, enabling the seller to access the admin dashboard. The frontend then stores the token and redirects the seller to their dashboard. If the login attempt fails due to incorrect credentials, the Seller Controller sends a 401 Unauthorised response, and the frontend displays an error message to the user (Seller) informing them of the failed login attempt.     

3. Seller Viewing Orders Dataflow Diagram  
![Seller Viewing Orders Dataflow Diagram](./docs/seller-orders-dataflow.png)  

### Seller Viewing Orders Dataflow Diagram - Explained  

- Seller Navigates to the Orders Page  
The seller (admin) logs into their dashboard and navigates to the Orders Page. This page allows them to view all customer orders at a glance, with order numbers, statuses, total prices, dates, and customer names. They can also click on an order number to view more details about a specific order.

- Seller Sends a GET Request  
When the seller accesses the Orders Page, the browser (client) sends a GET request to the server to retrieve the order data. This request is sent via the API endpoint `/api/orders` to fetch all orders or `/api/orders/:id` to retrieve a single order's details. The request is initiated automatically when the Orders Page loads or when the seller clicks on a specific order number.

-  Order Controller Receives the Request  
The Order Controller receives the GET request and determines whether to fetch all orders or a single order based on the API endpoint. If the request is for all orders, it calls the `getOrders()` function. If the request is for a specific order, it calls the `getOrderById(id)` function, passing the requested order ID.

- Order Controller Queries the Database  
The `getOrders()` function queries the database (Orders Collection) to retrieve all stored order records, including order numbers, statuses, total prices, dates, and customer names. If a specific order is requested, the `getOrderById(id)` function filters the query to return only the details of that particular order, including shipping details, the ordered products, their quantities, and individual prices.

- Database (Orders Collection) Returns Data  
The database processes the request and sends back the relevant data to the Order Controller. If the request is for all orders, it returns a JSON array with all stored orders and their basic details. If the request is for a single order, it returns a JSON object containing the full details of that order, including the customer's shipping information and order summary.

- Seller Controller Sends a Response to the Client   
If the request is successful, the Order Controller formats the retrieved order data using express.json() and sends it back to the client with a 200 OK status. The response contains either a list of all orders or a detailed view of a specific order. If the request fails due to a database error or invalid query, the Order Controller returns a 500 Internal Server Error, and the frontend displays an error message to the user (Seller), informing them that the order data could not be retrieved. 

4. Customer Browsing/Watching Video Tutorials Dataflow Diagram
![Customer Browsing/Watching Video Tutorials Dataflow Diagram](./docs/customer-tutorials-dataflow.png)  

### Customer Browsing/Watching Video Tutorials Dataflow Diagram - Explained  

- Customer Navigates to the Tutorials Page  
When the customer visits the Tutorials page, the browser (client) automatically initiates a request to fetch available video tutorials. 

- Customer Sends a GET Request  
The browser sends a GET request to the server via the API endpoint `/api/tutorials`. This request prompts the server to retrieve and return a list of video tutorials (URLs) stored in the database.

-  Tutorials Controller Receives the Request  
The Tutorials Controller receives the GET request and processes it. It calls the `getTutorials()` function, which is responsible for retrieving the list of stored video tutorials from the database (Tutorials Collection).

- Tutorials Controller Queries the Database  
The `getTutorials()` function queries the database (Tutorials Collection) to retrieve all the stored video tutorial records. Each record contains metadata such as the video title and a YouTube URL, which will be used to embed the video on the website.

- Database (Tutorials Collection) Returns Data  
The database processes the query and responds with a JSON array containing the list of video tutorials, including their titles and YouTube URLs. If an error occurs (eg; a failed database connection), an error response is sent back to the controller instead.

- Tutorials Controller Sends a Response to the Client   
If the request is successful, the Tutorials Controller formats the retrieved data using express.json() and sends it to the client with a 200 OK status code. The frontend uses the returned video URLs to embed the videos using iframes, allowing customers to watch them directly on the website. If the query fails due to a database issue, the Tutorials Controller returns a 500 Internal Server Error response, and the website displays an error message, informing the user (customer) that the videos could not be retrieved.  

- Customer Selects and Watches a Video  
Once the video tutorials are displayed, the customer can click on a video to watch it. The browser fetches the video from YouTube via its URL, and YouTube streams the video directly to the client. If the video cannot load, an error message is displayed, preventing the video from being played.

5. Customer Updating Cart & Checking Out Order Dataflow Diagram
![Customer Updating & Checking Out Order Dataflow Diagram](./docs/customer-checkout-dataflow.png)  

### Customer Updating Cart & Checking Out Order Dataflow Diagram - Explained  

- Cart is Updated in the Local Browser  
As the customer shops, their selected products are stored in the frontend, either in React state or local storage. When they add, update, or remove items from the cart, these changes are reflected instantly on the website without requiring a request to the backend. The cart remains stored on the frontend until the customer proceeds to checkout.  

- Customer Sends a POST Request  
When the customer proceeds to checkout, they are redirected to the checkout page, where their cart items are displayed alongside a form to enter their name and shipping address. Once they complete the form and press the "Submit Payment" button, a POST request is sent to the server via the API endpoint `/api/orders`. This request includes the customer’s name, shipping address, and cart details (an array containing product IDs, quantities, and prices). The request is only processed if all required fields in the form are filled out.

-  Order Controller Receives the Request  
The Order Controller receives the POST request and begins processing the order. Since the cart data is managed on the frontend, the controller processes the cart details directly from the request body. It verifies that the provided cart details, customer information, and shipping address are valid. If any required fields are missing or if the cart data is invalid (eg; no items are in the cart), an error will be returned, preventing order creation.

- Order Controller Creates the Order  
If the request is valid, the Order Controller calls the `createOrder()` function, which generates a new order record in the database (Orders Collection). The order record includes the customer's name, shipping details, a list of ordered products with their quantities and prices, the total order price, and a unique order number.

- Database Returns Data to the Order Controller  
The database (Orders Collection) processes the request and stores the new order. If the order creation is successful, the database confirms the order has been stored and returns a success message along with the newly generated order number. If there is a database error, an error message will be returned instead.

- Order Controller Sends a Response to the Client   
If the order is successfully created, the Order Controller sends a response with a 201 Created status. The response includes a confirmation message informing the customer that their order was successful, along with the order number and shipping details. The checkout page updates to display this confirmation. If an error occurs at any stage, the Order Controller sends a 400 Bad Request response with an error message, and the checkout page informs the customer that the order could not be processed.



## R3. Application Architecture Diagram
For my application, Leanne's Collection, I plan to follow a 3-tier architecture, represented in the diagram below by the three distinct layers: frontend (client tier), backend (server tier), and database (data tier). Since this application is built using the MERN stack, the following technologies will be used:

The frontend (client tier) will be built with React.js and deployed on Netlify, providing a responsive and intuitive interface for customers to browse face paint kits, watch tutorials, and complete purchases as guests. The seller (admin) will have access to a separate admin portal, where they can log in to view all customer orders.  

The backend (server tier) will be developed with Node.js and Express.js, hosted on Render. It will handle all API requests and business logic, which will be managed inside the application's controllers. These controllers will process incoming HTTP requests, validate data, interact with the database using Mongoose, enforce security using JWT authentication for the admin, and send structured JSON responses back to the frontend. This ensures the frontend can efficiently display product listings, order details, and video tutorials.

The database (data tier) will be powered by MongoDB Atlas (hosted on AWS), storing all product (kit) details, customer orders, and video information. Data will be structured and managed using Mongoose models, ensuring consistency, validation, and efficient querying.

**Side note**: In the future, when I launch Leanne's Collection as a fully functional eCommerce website, I plan to integrate Shopify APIs (such as the Admin API) to handle cart creation, checkout, and payments. For this assignment, I will build proxies to simulate this functionality. Offloading payments and order management to Shopify will improve scalability by reducing backend processing. Therefore, the diagram below reflects the current architecture for this assignment and not the future version that will incorporate third-party Shopify APIs.

![Architecture Diagram](./docs/architecture-diagram.png) 

## R4. User Stories

### **Initial User Stories**  

USER STORIES FOR CUSTOMERS  
1. Shopping:  
  - As a customer, I want to easily browse a selection of face paint kits, that include detailed descriptions and video's to help me best decide the one that suits my needs.
  - As a customer, I want to add kits to my shopping cart, so I can clearly review my selected items before making a purchase.
  - As a customer, I want to remove items from my shopping cart, so I can update my decision about what I would like to purchase.
  - As a customer, I want to checkout without registering an account, so I can quickly make purchases without entering my details until only the necessary ones are required at checkout for shipping my order.

2. Viewing Pages:
  - As a customer, I want to view an "About" page with photos, videos, and details about the business owner, so I can learn more about the person behind the brand, their new product lines, events, and touring information.
  - As a customer, I want to view a contact page with the business owner’s details, so I can reach out with questions regarding my orders, face painting tips and guidance, or face painting service booking requests and masterclasses.
  - As a customer, I want to view the tutorials page with a variety of videos, so I can learn how to use the kits on offer, and pick up any face painting tips.
  - As a customer, I want to see detailed descriptions of what each face paint kit is used for, so I can make a more informed decision about choosing which kit is right for me.
  - As a customer, I want to easily access links to the business owner’s social media pages, such as YouTube, TikTok, Facebook, and Instagram, so I can see more seller content and tutorials about the paints on offer and how to use them.

USER STORIES FOR BUSINESS OWNER 
1. Seller Login & Order Management:
  - As a business owner, I want to log in securely using my email and password, so I can access my admin portal.
  - As a business owner, I want to be redirected to my dashboard after logging in, so I can immediately manage orders.
  - As a business owner, I want to view a list of all customer orders made, so I can track purchases made on my website.
  - As a business owner, I want each order in the list to display the order number, status (fulfilled/unfulfilled), order date, total price, and customer name, so I can quickly assess orders.
  -  As a business owner, I want to click on an order number, so I can view more details about that specific order.
  -  As a business owner, I want the order details page to show the customer's name, shipping address, and the products they ordered, including quantities and prices, so I can ensure correct fulfillment.
  -  As a business owner, I want to toggle the order status between fulfilled and unfulfilled, so I can keep track of which orders are completed.

2. Displaying Products for Customers:
  - As a business owner, I want my face paint kits to be displayed on the website, so customers can browse and purchase them.
  - As a business owner, I want each product listing to include an image, name, description, and price, so customers have the necessary details before making a purchase.
  - As a business owner, I want a dedicated "Shop" page where customers can browse all available kits in one place.
  - As a business owner, I want product to include an "Add to Cart" button, so customers can easily purchase items.

3. Providing Video Tutorials for Customers:
  - As a business owner, I want a dedicated "Video Tutorials" page, so customers can learn how to use my kits (products), and also pick up any handy face painting tips.
  - As a business owner, I want my tutorial videos to be embedded from my YouTube channel, so customers can watch them directly on my website.

4. Seller Information & Socials for Customers:
  - As a business owner, I want an "About" page that includes my bio and professional background, so customers can learn more about me.
  - As a business owner, I want my social media links: YouTube, Instagram, TikTok, Facebook to be displayed on my website, so customers can easily follow my content, and learn more about me.
  - As a business owner, I want my contact details like email, phone, and business enquiries available available from all pages, so customers can reach me about orders, face paint bookings, and masterclasses.
  - As a business owner, I want my social media links to also appear in the website footer, so customers can access them from any page.


### **Personas & Revised User Stories**
1. Professional Persona
![Professional Persona](./docs/professional-persona.png)  

### Professional Persona User Stories  
- As a professional face painter, I want to purchase complete face paint kits with high-quality, FDA-approved products  so that I can ensure safety and professional results for my clients.  
- As a returning customer, I want to easily find and buy kits suited for different event types such as: festivals, parties, corporate events so that I have the right products for any occasion.  
- As a professional face paint artist, I want to stay updated on new product releases, and trending designs so that I can keep my work fresh and relevant in the industry.  
- As a face painter always looking to improve my skills, I want to watch tutorial videos that demonstrate new techniques, and paint styles so that I can continue learning and honing my craft.
- As a busy professional, I want to find all essential face painting supplies in one place so that I don’t have to purchase items separately from multiple sources.
- As a cost-conscious business owner too, I want to purchase high-quality yet affordable face paints and brushes so that I can maintain my profit margins without compromising on quality.  
- As an artist engaged with the wider face painting community, I want to connect with other professionals through social media links on the website so that I can exchange ideas, get feedback, and stay connected with industry trends.  
- As a customer, I want to have a quick and easy checkout process so that I can quickly complete my purchase and receive my products without hassle.

2. Beginner & Hobbyist Persona
![Beginner Persona](./docs/beginner-persona.png)  

### Beginner & Hobbyist Persona User Stories  
-  As a beginner in face painting, I want to purchase a complete, beginner-friendly kit that includes all essential tools (brushes, sponges, stencils, and paints) so that I don’t feel overwhelmed by choosing individual products.  
-  As a student on a budget, I want to find cost-effective kits that still provide quality paint and tools that I can use to practice face painting without having to overspend.  
-  As someone new to face painting, I want to watch tutorial videos that explain basic and intermediate techniques so that I can build confidence, and improve my skills.  
-  As a face paint hobbyist, I want to understand what designs and styles I can create with each kit so that I know which one best suits my needs and present skill level.  
-  As a new customer, I want to browse through different kit options without confusion so that I can make an informed choice based on my experience level, and feel confident in my purchase decision.
-  As an aspiring part-time painter, I want to build confidence in my skills by learning from tutorials, and practicing with the right products so that I can eventually offer my services at events like kids' parties. 
-  As a new customer, I want to easily browse through different kit options without confusion, so that I can make an informed choice based on my experience level.  
-  As someone learning from online artists, I want to easily access links to the seller’s social media pages (YouTube, Instagram, TikTok, & FaceBook) so that I can find more tutorials, and design inspiration.  

3. Parent/Guardian Persona
![Parent Persona](./docs/parent-persona.png)  

### Parent/Guardian Persona User Stories  
- As a parent, I want to find an all-in-one face painting kit that is safe, easy to use, and budget-friendly so that I can create fun and memorable experiences for my kids without overspending.  
- As a caregiver, I want to purchase skin-safe, FDA-approved face paint products, so that I can be confident that they likely won't cause irritation or allergic reactions on my children’s skin.  
- As someone with no prior face painting experience, I want to watch simple step-by-step tutorials so that I can learn how to create basic designs for my kids at home.  
- As a busy parent, I want to be able to quickly find the right kit without having to research individual products, so that I don’t waste time trying to figure out what I really need or want.  
- As someone who wants convenience, I want to read clear product descriptions that list all included items and their uses so that I can easily decide which kit is best for me.  
- As someone concerned about mess, I want to buy water-washable, easy-to-clean face paints so that they won’t stain furniture or be difficult to remove after playtime with my kids.  
- As a parent who organises activities, I want to use face painting to make birthdays and holidays more fun, so that I can create special moments for my kids and their friends.  
- As a parent who values community advice, I want to read recommendations from other parents and caregivers so that I can feel reassured that I’m making the best choice for my children. 

4. School Teacher Persona
![Teacher Persona](./docs/teacher-persona.png)  

### School Teacher Persona User Stories  
- As a primary school teacher, I want to find a cost-effective, all-in-one face paint kit, so that I can create simple and engaging designs for school plays, performances, and events within a limited school budget.  
- As someone with little face painting experience, I want to access beginner-friendly designs and tutorials, so that I can quickly and confidently apply face paint to students without needing more advanced skills.  
- As an event organiser who is responsible minor school children, I want to ensure that all paints I use are non-toxic, hypoallergenic, and safe for children’s skin so that I can try to avoid skin irritations or allergies affecting my students.  
- As a teacher with limited time, I want to use face paints that are easy to apply and dry quickly, so that I can paint multiple children efficiently before an event starts.  
- As a teacher concerned about mess, I want to use water-washable and easy-to-clean face paints so that I don’t have to worry about stains on school uniforms, props, or any other school property.  
- As someone new to face painting, I want to watch simple, step-by-step video tutorials on how to create easy designs so that I can confidently apply paint for school performances without too much effort.
- As a busy teacher, I want to order face painting kits online with fast delivery timelines so that I can receive the products well before an upcoming school event.  
- As a teacher looking for recommendations, I want to connect with other educators in school forums and Facebook groups so that I can get advice on the best face painting products for school events.  


5. Aspirational Entrepreneur Persona
![Entrepreneur Persona](./docs/entrepreneur-persona.png)  

### Aspirational Entrepreneur User Stories  
- As an aspiring entrepreneur, I want to launch a full-time face painting business that provides a stable income while allowing me to work around my family commitments, so that I can have financial independence and flexibility.  
- As someone new to the industry, I want to invest in a complete professional-grade face painting kit so that I have all the essential tools to create high-quality face painting designs for my future clients.  
- As a beginner, I want to access detailed tutorials from expert face and body artists so that I can learn professional techniques and improve my painting skills.  
- As someone unfamiliar with the market, I want to understand which products and tools are necessary to start a professional face painting business so that I can make informed purchasing decisions.  
- As someone starting a business, I want to connect with other professional face painters in online communities so that I can gain insights, receive advice, and learn best practices for running a successful business.
- As someone entering a competitive field, I want to be able to stay updated on industry trends, best practices, and get business tips from professionals so that I can establish myself as a trusted and skilled face painter in the marketplace.  
- As a small business owner, I want to learn marketing strategies, especially how to attract clients through social media so that I can build a strong online presence and grow my business.
- As a parent balancing work and family, I want to have access to an easy-to-use face paint website that allows me to find and purchase everything I need in one place, so that I can quickly and efficiently set up, and continue my business without hassle.

6. Social Media Face Paint Influencer Persona
![Influencer Persona](./docs/influencer-persona.png)  

### Social Media Face Paint Influencer User Stories  
- As a social media influencer, I want to discover and showcase high-quality, professional-grade face paints so that I can create engaging content while maintaining my credibility in the industry.  
- As a content creator, I want to produce creative and visually stunning face paint tutorials, reviews, and demonstrations so that I can attract and retain my audience on Instagram, TikTok, and YouTube.  
- As an industry trendsetter, I want to stay updated on the latest face paint products, techniques, and trends so that I can remain relevant and ahead of my competition.  
- As a brand partner, I want to collaborate with trusted face paint companies so that I can secure sponsorships and exclusive promotions that align with my artistic style.  
- As a professional in the industry, I want to access innovative, unique face paint products so that I can create designs that set my work apart from others.  
- As a trusted influencer, I want to verify that the brands I promote are fresh, innovative, high-quality & FDA- approved, so that I can continue building credibility with my audience.  
- As a social media personality, I want to engage with my audience through tutorials, product unboxings, and trend-based videos so that I can grow my following and increase my engagement rates.  
- As an industry expert, I want to connect with other face and body painting professionals and communities so that I can exchange knowledge, collaborate, and expand my influence.  

7. Business Owner Persona
![Owner Persona](./docs/owner-persona.png)  

### Business Owner User Stories  
- As a business owner, I want to sell my own branded face paint products in kit bundles, through a dedicated website so that customers can easily find and purchase my own products, and the right kit for their needs.  
- As a product creator, I want to expand my product range with new face paint kits tailored to different demographics so that both beginners and professionals can find suitable products.  
- As an educator, I want to provide customers with video tutorials demonstrating how to use my products so that they can make more informed purchasing decisions and improve their skills.  
- As a seller, I want to provide detailed product descriptions that include all essential product information so that customers can confidently select the best kit for their needs.  
- As a customer-focused entrepreneur, I want to ensure my website includes clear and accessible contact information so that customers can easily inquire about orders, bookings, and masterclasses. 
- As a mentor, I want to help aspiring face painters by offering product kits that simplify the buying process so that they don’t feel overwhelmed when choosing supplies. 
- As a content creator, I want to maintain an active and engaging social media presence so that customers stay updated on new product releases and tutorials.  
- As a professional in the industry, I want to continue attending conventions and masterclasses so that I stay ahead of industry trends and bring new innovations to my new product releases.  
- As a business owner, I want to use the website as a platform to showcase my expertise and sell my own designed face and body paint products, so that I can promote my unique product lines, enhance my brand presence in the face and body paint industry, and integrate my social media accounts to expand my reach.
  

## R5. Wireframes for multiple standard screen sizes, created using industry standard software  

#### All wireframes for the website pages will be fully responsive across all devices, using Tailwind CSS breakpoint sizes: lg (1024px for desktop), md (768px for tablet), and sm (640px for mobile). This responsiveness is illustrated in the wireframe screenshots below.

1. Home Page  
![Home Page](./docs/home-page-wireframes.png)

2. Shop Page  
![Shop Page](./docs/shop-page-wireframes.png)

3. Tutorials Page  
![Video Tutorials Page](./docs/tutorials-page-wireframes.png)

4. About Page  
![About Page](./docs/about-page-wireframes.png)

5. Single Item Page  
![Single Item Page](./docs/shop-one-page-wireframes.png)

6. Shopping Cart Page  
![Shopping Cart Page](./docs/shopping-cart-wireframes.png)

7. Checkout Page  
![Checkout Page](./docs/checkout-page-wireframes.png)

8. Order Success Page  
![Order Success Page](./docs/order-success-wireframes.png)

9. Seller Login Page  
![Seller Login Page](./docs/login-page-wireframes.png)

10. Seller Orders Dashboard Page  
![Seller Orders Dashboard Page](./docs/orders-dashboard-wireframes.png)

11.  Seller Single Order Page  
![Seller Single Order Page](./docs/single-order-wireframes.png)  

12.  Style Guide  
![Style Guide 1](./docs/style-guide-one.png)  
![Style Guide 2](./docs/style-guide-two.png)  
![Style Guide 3](./docs/style-guide-three.png)  
![Style Guide 4](./docs/style-guide-four.png)  

13. Website Flow Diagram  
![Website Flow Diagram](./docs/website-flow.png)  

### Website Flow Diagram Explained  
For a customer navigating the website, the **Home** or landing page provides direct access to all pages and external seller's social media sites via the navbar and call-to-action buttons, except for the **Checkout** page. A single product or kit can be viewed by first navigating to the **Shop** page, and then selecting an individual item. When navigating to the **Tutorials** page, a customer can view and watch embedded YouTube tutorial videos, which are streamed directly from YouTube on the same page. Once on the product page (**Single Item**), the customer can still access all pages and external seller social media sites, again, except for **Checkout**. The **Cart** icon is displayed in the navbar on all pages except the **Checkout** page, which can only be accessed directly from the **Cart**. After an order is successfully submitted, the customer is only able to navigate back to the **Home** page.

For the business owner or seller, navigation to admin-only pages begins at the **Login** page. Upon successful login, the seller is redirected to the **Orders** page, where all customer orders are listed. Clicking on an order number allows the seller to view detailed order information (**Single Order**), including the product overview and customer shipping details. The seller can only navigate back to the **Orders** list page and has the option to logout from there. 

## R6. Screenshots of your Trello (or similar kanban system) board throughout the duration of the project

### Link to my Kanban style Trello board
[Trello Board](https://trello.com/b/4fwy8Nat/leannes-collection-web-app)

### Screenshots of my Kanban style Trello board

1. MY TRELLO KANBAN BOARD SCREENSHOT  

![My Trello Kanban Board](./docs/my-trello-board.png)

2. DESIGN TRELLO CARDS SCREENSHOT  

![Design Trello Cards](./docs/design-trello-cards.png)  

3. BACKEND TRELLO CARDS SCREENSHOT  

![Backend Trello Cards](./docs/backend-trello-cards.png)  

4. FRONTEND TRELLO CARDS SCREENSHOTS  

![Frontend Trello Cards](./docs/frontend-trello-cards.png)  
![Frontend Continued Trello Cards](./docs/frontend-cont-trello-cards.png)

5. TESTING & DEPLOYMENT TRELLO CARDS SCREENSHOT  

![Testing & Deployment Trello Cards](./docs/testing-deploy-trello-cards.png)  

6. BACKLOG TRELLO CARDS SCREENSHOT (Future features to be completed after assignment for real website launch) 

![Backlog Trello Cards](./docs/backlog-trello-cards.png)

  




