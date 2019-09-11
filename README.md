# IMDB Dashboard

The IMDB dashboard is a data set of 1,000 most popular movies on IMDB in the time period between the years 2006 - 2016. The data set contains
blockbuster movies such as The Guardians of galaxy Vol.1, La La Land, Fantastic Beasts and Where to Find Them, 	Deadpool and so much more! 

The data fields included in this data set are: Title, Genre, Description, Director, Actors, Year, Runtime, Rating, Votes, Revenue, Metascrore. 



# UX


##### The IMDB dashboard is for: 

* Movie fans
* Film critics
* Publications/Media outlets
* Curators
* Investors

##### Why would a user use the IMDB dashboard:

* A user can check the ratings of their favorite movie.
* A user can check which genre makes the most revenue.
* A user can compare ratings/gross of movies.
* A user can track multiple data sources using the charts.
* It meets specific needs of users interested in certain aspects of blockbuster movies such as revenue, genre, rating, year of production.

##### How does the IMDB dashboard help clients/users? 

* It provides a catalogue of movies between the period 2006 - 2016.
* The dashboard provides fans with ratings for movies.
* The dashboard serves as an information management tool that helps to visually track revenue of blockbuster movies. 
* The dashboard informs the users the average runtime of movies they watch. 

#### Wireframe

You can find the link to the wireframe here: 
[Wireframe](https://1drv.ms/w/s!AqARRU4jO5elrXUeXA6XbMjqSlMW?e=rWxEYi "Wireframe")

I also got inspiraion for the dashboard from these websites:

* [Canvasjs](https://canvasjs.com/samples/dashboards/ "Canvasjs")
* [Keen](https://keen.io/docs/visualize/how-to-create-a-dashboard/ "Keen")
* [CodeWall](https://www.codewall.co.uk/best-dashboard-examples-for-inspiration/ "CodeWall")



### User Stories

#### From the Fans perspective: 

* As as a movie fan, I want to know the revenue a movie generated.
* As as a movie fan, I would like to know the number of movies released per year.
* As a movie fan, I am interested in the average length of movie genre.  

#### From the Film critics/publication/curator perspective: 

* As a film critic, I am interested in the average runtime of the movie.
* As a curator, I am intersted in the average movie genre rating. 

#### From the Film investor perspective: 

* As an investor, I am interested in knowing which genre is most profitable. 
* As an investor, I am interested in how many movies are produced each year.


# Features

The dataset used in this project is explained in the table below: 

| Columns            | Description                                                                                                      | Variable            | 
|--------------------|------------------------------------------------------------------------------------------------------------------|---------------------| 
| Rank               | Movie rank order.                                                                                                | Numeric             | 
| Title              | The title of the film.                                                                                           | String              | 
| Genre              | A comma-separated list of genres used to classify the film.                                                      | String              |       
| Description        | Brief one-sentence movie summary.                                                                                | String              | 
| Director           | The name of the film's director.                                                                                 | String              | 
| Actors             | A comma-separated list of the main stars of the film.                                                            | String              | 
| Year               | The year that the film released as an integer.                                                                   | Numeric             | 
| Runtime (Minutes)  | The duration of the film in minutes.                                                                             | Numeric             | 
| Rating             | User rating for the movie 0-10.                                                                                  | Numeric             | 
| Votes              | Number of votes.                                                                                                 | Numeric             | 
| Revenue (Millions) | Movie revenue in millions.                                                                                       | Numeric             | 
| Metascore          | An aggregated average of critic scores. Values are between 0 and 100. Higher scores represent positive reviews.  | Numeric             | 


### Features Left to Implement

In the future:
 
* The nature of the database made it difficult to classify movies. Movies do not distinctly belong to one genre. A movie like "Guardian of Galaxy" 
isn't just Action; it is classified under other genres such as Adventure & Sci-Fi. This makes it very difficult when the developer is trying
to get data about some movies in a particular genre. 
Perhaps movie boards can make movie classification more cleare for data users. 

* Because of the scale of the project, I used a small database. For future references I would like to have information on plot, 
  budget per movie and cost to make the movie, how many months for movie production, salary per actor, most watched movies. 

* In future projects, I would like to create more graphs to visually track other indicators not shown in this dahboard. 


# Technologies Used

| Technologies       | Website                                                                                                                                                                                                              | Comments                                                                                                                |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| HTML               | [W3Schools](https://www.w3schools.com/ "W3Schools"),                                                                                                                                                                 |  I used these websites to check  for proper syntax for my project                                                       |
| CSS                | [W3Schools](https://www.w3schools.com/ "W3Schools"),                                                                                                                                                                 |  I used this website to check for different ways to style my CSS.                                                       |
| JQuery             | [JQuery](https://jquery.com/ "JQuery")                                                                                                                                                                               |  I used it to to simplify HTML DOM tree traversal, manipulation, as well as CSS animation.                              |
| Javascript         | [Javascript](https://www.javascript.com/ "Javascript")                                                                                                                                                               |  I used this programming language as it enables my page to be responsive and it is an essential part of web development.|
| Validation Service | [CSS Validation Service](https://jigsaw.w3.org/css-validator/#validate_by_input "CSS Validation Service"), [Markup Validation Service](https://validator.w3.org/#validate_by_input "Markup Validation Service")      |  I used both the HTML & CSS Validator to check the validity of my web documents.                                        |
| Bootstrap          | [Bootstrap](https://getbootstrap.com/ "Bootstrap")                                                                                                                                                                   |  I used this open source toolkit to develop my HTML,CSS and JS.                                                         |
| Tables Generator   | [Tables Generator](https://www.tablesgenerator.com/ "Tables Generator")                                                                                                                                              |  I used this website to generate tables for my README.md file.                                                          |
| Crossfilter        | [Crossfilter](https://www.tablesgenerator.com/ "Crossfilter")                                                                                                                                                        |  I used this library to explore my large dataset                                                                        |
| Chartjs            | [chartjs](https://www.chartjs.org/ "chartjs")                                                                                                                                                                        |  I used this library to customise my charts                                                                             |
| d3.js              | [d3.js](https://d3js.org/ "d3.js")                                                                                                                                                                                   |  D3.js is a JavaScript library for producing dynamic, interactive data visualizations in web browsers.                  |
| dc.js              | [dc.js](https://dc-js.github.io/dc.js/ "dc.js")                                                                                                                                                                      |  dc.js is a multi-dimensional charting library built to work natively with crossfilter and rendered using d3.js.        |


# Testing

First I had to test if the data downloaded (imdb.csv) from kaggle.com was okay. I opened the graph.js file to run some commands and thereafter,
I inspected the developers tool of the index.html file to see if the Array appeared in the console. Fortunately, it did and the data is actually
good to use. 

I then edited the database as Javascript is key sensitive. Columns such as Revenue (Millions), Runtime (Minutes) was changed to Revenue and
Runtime repectively.  

I used the following webistes to validate both my HTML and CSS files respectively.

Also, I had to check if the filepath in the html file worked properly. In a particular instance my css stylesheet was not properly linked and
all the changes I was making were not fully reflected on the html page. I had to write the correct file path for this to be corrected.

* [HTML-Validator](https://validator.w3.org/#validate_by_input "HTML-Validator")

The HTML validation service  helps check the validity of Web documents. When I used this service, it showed me errors about the section headers
which didn't have a corresponding heading tags. 

* [CSS-Validator](http://www.css-validator.org/ "CSS-Validator")

The CSS validation service helps check Cascading Style Sheets (CSS). When I used this service, it reported no error. The testing went well and
I am fully confident in the style sheet.

* [JSHint](https://jshint.com/ "JSHint")

I used JSHint to detect errors in my graph.js There were no errors found. 


### Testing user stories from the UX section 

1.  As as a movie fan, I want to know the average revenue a movie genre generated.
              1. When the movie fan arives on the dashboard, he/she can see several charts on the page.
              2. Within the page, the movie fan can scroll down to the stacked bar chart or the composite chart.

2. As as a movie fan, I would like to know the number of movies released per year.
              1. When the movie fan arives on the dashboard, he/she can see several charts on the page.
              2. The movie fan can then click on the year selector which provides the information.

3. As a movie fan, I am interested in the average length of movie genre. 
              1. When the movie fan arives on the dashboard, he/she can see several charts on the page.
              2. Within the page, the movie fan can scroll down to the pie chart (Average runtime oer Genre).
              
4. As a film critic, I am interested in the average runtime of the movie.
              1. When the movie fan arives on the dashboard, he/she can see several charts on the page.
              2. Within the page, the film critic can scroll down to the pie chart (Average runtime oer Genre). 

5. As a curator, I am intersted in the average movie genre rating. 
              1. When the curator arives on the dashboard, he/she can see several charts on the page.
              2. Within the page, the curator can scroll down to the pie chart (Average ratings per Genre).
            
6. As an investor, I am interested in knowing which genre is most profitable. 
              1. When the investor arives on the dashboard, he/she can see several charts on the page.
              2. Within the page, the investor can scroll down to the stacked bar chart (Revenue by Year per Genre).

7. As an investor, I am interested in how many movies are produced each year.
              1. When the investor arives on the dashboard, he/she can see several charts on the page.
              2. The investor can then click on the year selector which provides the number of blockbuster movies produced each year.



### Manual Testing

#####  Home Page:

1. Bar Chart 
              1. Go to the Home Page from a desktop.
              2. Inspect all links, icons, background and content in the navigation menu to ensure they are appearing correctly on the page.
              3. Move the cusor to the top-right section of the navigation bar, hover over each link and verify that the hover affects are working (i.e. background color changes to brown, font color to #964433).
              4. Change the screen size to mobile view to ensure that the navigation bar is responsive and all the in line links are packed into the toggler icon.
              5. Check that the toggler icon is properly styled and at the right position.
              6. To test the smooth scroll and also to verify that the links are working do the following:
                    1. Click on "Home" link and verify that it stays on the Home page
                    2. Click on "services" link and verify that it scrolls smoothly to the services section.
                    3. Click on "portfolio" link and verify that it scrolls smoothly to the portfolio section.
                    4. Click on "about" link and verify that it scrolls smoothly to the about section.
                    5. Click on "prices" link and verify that it scrolls smoothly to the prices section.
                    6. Click on "contact" link and verify that it scrolls smoothly to the contact section.
                    7. Repeat this same steps on a mobile view

2. Services section
              1. Scroll down to the services section or click on the services link in the navigation bar on a desktop view.
              2. check the services heading is bold and centrally alligned in the container
              3. Inspect the icons are properly placed within their columns and they are centrally alligned.
              4. Check that the text under the icon is properly placed.
              5. Ensure that the icons section occupies the full width of the container and not the services container.
              6. Check the padding of the Heading
              7. Repeat this same steps on a mobile view

3. Portfolio section
              1. Scroll down to the portfolio section or click on the services link in the navigation bar on a desktop view.
              2. check the portfolio heading is bold and centrally alligned in the container
              3. check the images are properly placed within their columns and they are properly alligned.
              4. Check the padding of the images
              5. Repeat this same steps on a mobile view

4. About section
              1. Scroll down to the about section or click on the about link in the navigation bar on a desktop view.
              2. check the about heading is bold and centrally alligned in the container
              3. check that the content in the about section are alligned properly
              4. Check the padding of the images
              5. Repeat this same steps on a mobile view

5. Prices section
              1. Scroll down to the prices section or click on the prices link in the navigation bar on a desktop view.
              2. check the prices heading is bold and centrally alligned in the container
              3. check that the table in the prices section is is in line with the theme of the website.
              4. Repeat this same steps on a mobile view

6. Reviews section
              1. Scroll down to the reviews section or click on the reviews link in the navigation bar on a desktop view.
              2. check the reviews heading is bold and centrally alligned in the container
              3. check that the content in the about section are alligned properly
              4. Repeat this same steps on a mobile view
7. Contact section
              1. Scroll down to the contact section or click on the contact link in the navigation bar on a desktop view.
              2. check the contact heading is bold and centrally alligned in the container
              3. Try to submit the empty form and verify that an error message about the required fields appears
              4. Try to submit the form with an invalid email address and verify that a relevant error message appears
              5. Repeat this same steps on a mobile view

8. Footer
              1. Scroll down to the footer section.
              2. check that the background color is in line with the theme of the website
              3. check that the content in the about section are alligned properly
              4. Check the padding of the of the contents
              5. Repeat this same steps on a mobile view

The website worked perfectly on other screen sizes and there was no issue with responsiveness.

#### Bugs

1. The labels for the charts are always overlapping the chart itself. I adjusted it in the css file. 
2. When reduced to mobile view the responsiveness a times doesn't work until when refreshed. I do not know what causes this to happen. 
3. When I test the stacked chart alone, data is available for all the years on the x-axis. but when I add other charts and run the 
crossfilter, some years are missing. I have tried adjusting this but to no avail. My mentor thinks it is because some data are missing. 

# Deployment

### How to deploy the  GitHub Pages from its GitHub repository

1. Log into GitHub.
2. Select the repository related to this project: ayotundeakinsola/first-milestone-project.
3. In the menu click on settings and scroll down to the GitHub Pages section.
4. From the "Source" dropdown menu, select "Master Branch" and click "Save" 
5. A pop-up message "Your site is ready to be published at https://username.github.io/Bootstrap/" will appear under Github Pages
6. The page will automatically refresh and the website is now deployed.
7. Once your website launches you can retest it to ensure that all the sections on the pages are working as stated in the testing section

### How to clone / run this project locally

1. On GitHub, navigate to the main page of the repository.
2. Under the repository name, click Clone or download.
3. In the Clone with HTTPs section, click  to copy the clone URL for the repository.
4. Open Git Bash.
5. Type git clone, and then paste the URL you copied in Step 2.
6. Press Enter. Your local clone will be created.




# Credits

### Content
* The text in the About section was provided by the Makeup Arstist.

* The text in the price section was gotten from: [judyartofmakeup](http://www.judyartofmakeup.nl/nl/ "judyartofmakeup")


### Media
* The image in the home section was provided by the make up artist. 

* The makeup icon in the services section was made by Surang from: [Flaticon](www.flaticon.com "Flaticon")



# Acknowledgements
* The dataset is gotten from Kaggle website: [Kaggle](https://www.kaggle.com/PromptCloudHQ/imdb-data "Kaggle")


