# IMDB Dashboard

The IMDB dashboard is a data set of 1,000 most popular movies on IMDB in the time period between the years 2006 - 2016. The data set contains
blockbuster movies such as The Guardians of galaxy Vol.1, La La Land, Fantastic Beasts and Where to Find Them, 	Deadpool and so much more! 

The data fields included in this data set are: Title, Genre, Description, Director, Actors, Year, Runtime, Rating, Votes, Revenue, Metascrore



# UX


##### The dashboard is for: 

* Movie fans
* Film critics
* Publications/Media outlets
* Curators
* Investors

##### Why would a user use the dashboard:

* Movie fans can check the ratings of their favorite movie
* Check for recommended movies as a result of ratings
* Check what critics say about a movie

##### How does my dashboard help clients/users? 

* It provides a catalogue of movies between the period 2006 - 2016
* The dashboard provides fans with ratings for movies
* The dashboard also serves as a guide on movie selection as a result of the movie critics and ratings

#### Wireframe
You can find the link to the wireframe here: 
[Wireframe](https://1drv.ms/w/s!AqARRU4jO5elrXUeXA6XbMjqSlMW?e=rWxEYi "Wireframe")

### User Stories

#### From the Fans perspective: 

* As a fan, I want to get an in-depth review from critics and fellow fans on movies released.

* As as a fan, I want to know the revenue a movie generated.

* As a fan, I am interested in knowing the name of the actors in the movie.  

* As a fan, I would like to know what year the movie was released.

* As a fan, I would like to know the director of my movie selection. 

* As a fan, I am interested in the length of the movie.  

#### From the Film critics/publication/curator perspective: 

* As a film critic,  I would love to give goodd recommendation to the fans.

* As a film critic, I am interested in the runtime of the movie.

* As a film critic, I am interested in the number of user votes for movies.

* As a publication, I am interested in the metascore of critics.
 
* As a curator, I am intersted in the movie rating. 

#### From the Film investor perspective: 

* As an investor, I am interested in knowing which genre is most profitable and which genres cost less to produce 



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
 
* The images in the portfolio section should be animated

* Because of the scale of the project, I used a small database. For future references I would like to have information on plot, 
  budget per movie and cost to make the movie, how many months for movie production, salary per actor, most watched movies. 



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



# Testing

First I had to test if the data I downloaded (imdb.csv) was okay. I opened the graph.js file to run some commands and thereafter,
I inspected the developers tool of the index.html file to see if the Array appeared in the console. Fortunately, it did and the data is actually
good to use. 

I used the following webistes to validate both my HTML and CSS files respectively.

* [HTML-Validator](https://validator.w3.org/#validate_by_input "HTML-Validator")

* [CSS-validator](https://jigsaw.w3.org/css-validator/#validate_by_input "CSS-validator")

The HTML validation service  helps check the validity of Web documents. When I used this service, it only brought out error messages for the form 
in the contact section. I have tried correcting the bugs but it doesn't seem to work. On the front end, the codes for the forms seems to be working
very fine but on the other hand, the code seems to be working fine. Perhaps in future testing, I would find a way to solve it. 

Also, the CSS validation service helps check Cascading Style Sheets (CSS). When I used this service, it reported no error. The testing went well and
I am fully confident in the style sheet.


### Testing user stories from the UX section 

1. As a customer I want to be able to view a selection of various make up services.
              1. When the customer arives on the webpage, he/she can see the navigation bar with several links.
              2. Within the navigation link you can click on the services link and it will smoothly scrool to the services section on the page.

2. As as customer I would want to contact the makeup artist.
              1. When the customer arives on the webpage, he/she can see the navigation bar with several links.
              2.  Within the navigation link you can click on the contact link and it will smoothly scrool to the contact section on the page.
              3.  The customer can fill the form and submit it. 

3. As a potential customer and paying customer I want to see the address of the shop. 
              1. When the customer arives on the webpage, the customer can scroll down to the footer section.
              2. In the footer section the customer can clearly see  the address.
              
4. As a potential customer and paying customer I want to see the telephone contact of the shop.
              1. When the customer arives on the webpage, the customer can scroll down to the footer section.
              2. In the footer section the customer can clearly see  the telephone number of the makeup artist. 

5. As a potential customer, I want to know the price of the services rendered. 
              1. When the customer arives on the webpage, he/she can see the navigation bar with several links.
              2. Within the navigation link you can click on the prices link and it will smoothly scrool to the price section on the page.
              3. Here you see a table of prices for the different services rendered.
            
6. As a potential customer, I would want to see a portfolio of  make up services . 
              1. When the customer arives on the webpage, he/she can see the navigation bar with several links.
              2. Within the navigation link you can click on the portfolio link and it will smoothly scrool to the portfolio section on the page.

7. As a potential customer, I would love to read about the reviews of some customers who have used R'beauty services. 
              1. When the customer arives on the webpage, he/she can see the navigation bar with several links.
              2. Within the navigation link you can click on the reviews link and it will smoothly scrool to the reviews section on the page.
              3. Here you can see 3 specially picked out reviews from previous customers.

8. As a potential customer, I want to know more about the makeup artist 
              1. When the customer arives on the webpage, he/she can see the navigation bar with several links.
              2. Within the navigation link you can click on the about link and it will smoothly scrool to the about section on the page.
              3. Here the interested client can read more about the makeup artist.

9. As the make up artist, I want to provide my social media links so that customers can follow my updates 
              1. When the makeup artist arives on the webpage, the makeup artist can scroll down to the footer section.
              2. In the footer section the makeup artist will see the social media links for the business.

10. As the makeup artist, I want my logo on to be visible on my website 
              1. When the makeup artist arives on the webpage, the makeup artist lookout for the navigation menu
              2. In the navigation menu the makeup artist will see the logo for the business.


### Manual Testing

#####  Home Page:

1. Navigation bar 
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

1. The background image in the mobile view is too big. I have tried changing it but there not enough time to find a solution
2. When reduced to mobile view the responsiveness a times doesn't work until when refreshed. I do not know what causes this to happen. 

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
The dataset is gotten from Kaggle website: [Kaggle](https://www.kaggle.com/PromptCloudHQ/imdb-data "Kaggle")
I received inspiration for this project from this website: [judyartofmakeup](http://www.judyartofmakeup.nl/nl/ "judyartofmakeup")