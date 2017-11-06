# Thinkster MEAN Stack Tutorial

Unmodified version, exactly as the tutorial describes.

## Usage

If you don't have MongoDB yet:
1. Download and install MongoDB.
2. Create the following folders in the MongoDB directory (e.g., `C:\Program Files\MongoDB\`):
	* `data`,
	* `data\db`
	* `log`
3. Go to the `bin` directory.
<br />(e.g., `C:\Program Files\MongoDB\Server\3.4\bin`)
4. Run `.\mongod --port 27017 --dbpath "[MongoDB directory]\data\db"`.
<br />(e.g., `.\mongod --port 27017 --dbpath "C:\Program Files\MongoDB\data\db"`)

Install the required packages:

````
npm install
````

Start the app:

````
cd flapper-news
npm start
````

Your app should now be accessible at http://localhost:3000.

## Source
[Learn to Build Modern Web Apps with MEAN -- Thinkster](https://thinkster.io/tutorials/mean-stack)