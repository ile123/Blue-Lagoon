# Blue Lagoon

Blue Lagoon is a web shop that sells clothes for the summer season. The shop offers summer-related apparel like t-shirts, tank tops, hats, and more.

Users can view all the available products, filter the products by collection, and view additional information (like the different sizes and colors) about the products on a dedicated page.

Blue Lagoon was built using:
- Tailwind CSS
- TypeScript
- Next.js
- JSON Server

## Time Spent

***Time spent:*** 3-4 hours

## The Most Challenging Implementation

The most challenging implementation was the layout of the site. Making the elements fall into the right places and ensuring they were responsive was the biggest challenge.

## The Implementation You Are Most Proud Of

The implementation I am most proud of is the overall layout and responsiveness of the web app. The result is a responsive web app with a good layout.

## Concise Description of How You Structured the Project and Any Considerations You Might Have Had

The project was structured according to Next.js specifications. Components and pages are located in the *app* directory. The database used with JSON Server is located under the *db* directory. Functions that communicate with JSON Server are located in the *lib* directory.

During the development of the web app, my goal was to follow React's core principles as much as possible while also utilizing TypeScript's features (custom types are located in the *types* directory). My biggest consideration was to limit the number of node packages so the project wouldn't take up unnecessary space.

## How to Run the Project

To run the project, the following two commands need to be entered in separate terminals:

1. `npm run dev`
2. `npx json-server --watch db/db.json --port 3001`

Both Next.js and JSON Server have to be running for the web app to work.
