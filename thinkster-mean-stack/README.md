# Thinkster MEAN Stack Tutorial

Unmodified version, exactly as the tutorial describes.

## Usage

If you don't have MongoDB yet, download and install MongoDB.

Create the following folders in the MongoDB directory (e.g., `C:\Program Files\MongoDB\`):
	* `data`
	* `data\db`
	* `log`

Go to the `bin` directory.
<br />(e.g., `C:\Program Files\MongoDB\Server\3.4\bin`)

Run `.\mongod --port 27017 --dbpath "[MongoDB directory]\data\db"`.
<br />(e.g., `.\mongod --port 27017 --dbpath "C:\Program Files\MongoDB\data\db"`)

Go to the `flapper-news` directory.

Install the required packages:

````
npm install
````

Start the app:

````
npm start
````

Your app should now be accessible at http://localhost:3000.

## Source
[Learn to Build Modern Web Apps with MEAN -- Thinkster](https://thinkster.io/tutorials/mean-stack)
<br />
<br />
[PDF version found here](https://www.academia.edu/11207426/AngularJS_Tutorial_Learn_to_Build_Modern_Web_Apps_with_MEAN_angulartutorial)