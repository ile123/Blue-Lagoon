# Blue Lagoon

Blue lagoon is a web shop that sells clothes for the summer season. The shop sells summer related apperal like t-shirts, tank tops, hats,...

The user can view all the available products, filter the products by collection and view additional information(like the diffrent sizes and colors) about the product in a dedicate page.

Blue Lagoon was built using:
- Tailwind CSS
- TypeScript
- Next.js
- JSON Server.

***Time spent:*** 3-4 hours

***The implementation that was most challenging:*** 

The most challenging implementation was the layout of the site. Making the elements fall into the right places and making them responsive was the biggest challenge.

***The implementation you are most proud of:*** 

The implementation I am most proud of is the overall layout and responsivnes of the web app. The result is a responsive web app with a good layout.

***Concise description of how you structured the project and any considerations you might have had:*** 

The project was structured according to Next.js specifications. Components and pages are located in the *app* directory. Database that was used with JSON Server is located under the *db* directory. Functions that were used to communicate with JSON Server are located in *lib*.

During the development of the web app, my goal was to follow react's core principles as much as possible, while also utilizing utilizing TypeScript's features(custom types are located in the *types* directory). My biggest consideration was to limit the amount of node packages, so the project wouldn't take unecessary space.

***How to run the project:***

In order to run the project, the following two commands need to be entered in seperate terminals:

- npm run dev
- npx json-server --watch db/db.json --port 3001

Both Next.js and JSON Server have to be running in order for the web app to work.