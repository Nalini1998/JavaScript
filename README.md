### **FRONT-END DEVELOPMENT**
# **Project: Film Finder**

We’ve caught up on our list of TV shows and movies and want to get recommendations for what to watch next, but we aren't sure where to look. 

In this project, we’ll use our knowledge of **HTTP requests and asynchronous JavaScript** to create a Movie Discovery App that will recommend Random Movies by genre. We’ll be able to choose from several genres, and like or dislike a movie to get another suggestion.

Before beginning, we'll need to create an account on **The Movie Database Website**. After we create our account and verify the email address by click on wer user icon at the top right corner and navigate to the **Settings** page.

Below is the **Screenshot of the Settings page** on the **Movie Database Website**

![Image](/22.%20Film%20Finder/TMDB-Settings.webp)

On the **Settings** page, navigate to the **API section** and click on the link to **Request an API Key** to register as a Developer.

We'll be asked to enter some personal information like our address and phone number. This is pretty common. Many APIs use this information to keep track of how  their data is being used. As a part of wer registration, we will also be asked to provide a URL for the site where we will be using this API. Check out these instructions if we need further assistance with registering for an API key.

After finishing this project, we can free to challenge ourselves to continue building it out. *For example*, we might recommend TV shows instead of movies, or change the information we present about the recommended movies. The possibilities are endless. Next time, we find ourselves needing new content recommendations, we’ll know where to turn!

<br>

# **Tasks**
## **Populate Drop-down Menu with Genres**

<br>

#### **1. Save the API key we obtained from the TMDB API to the tmdbKey variable**
We'll be making multiple calls to the TMDB API and will reference this key in the upcoming steps.

> ***Remember not to share this API key with others!***


<br>

#### **2. Save the API's base URL into the tmdbBaseUrl variable**
Check the **TMDB documentation** to find the **API's base URL**, and save it to the `tmdbBaseUrl` variable.

We will append specific endpoints to this **URL** for each of our requests to the **TMDB API**.

<br>

#### **3. Create and process the genreRequestEndpoint variable**
For the next several steps we'll be working inside the `getGenres()` function to `fetch` a list of `genres` from the API.

Check the **TMDB documentation** to find the **"Genres" API endpoint**. 

Create a variable called `genreRequestEndpoint` inside `getGenres()` and set it to the "Genres" API endpoint.

<br>

#### **4. Create and process the requestParams variable**

We will use query parameters to add more specificity to our request. Still inside the `getGenres()` function, create a variable called `requestParams` and set it to a query string where the key is `api_key` and the value is `tmdbKey`.

<br>

#### **5. Create and process the urlToFetch variable**

_Let's put together the URL where we'll send our `fetch` request._

Create a variable called `urlToFetch` and set it to a string that consists of `tmdbBaseUrl`, followed by `genreRequestEndpoint`, followed by `requestParams`.

<br>

#### **6. Turn getGenres() into an asynchronous function**
Turn `getGenres()` into an asynchronous function that returns a promise. We'll include our `fetch()` request in this function, and making it asynchronous will simplify handling the promise our API call returns.

<br>

#### **7. Add a try/catch inside the getGenres()**

We need a straightforward way to catch and handle errors if our `fetch()` request fails.

Underneath our variable declarations inside the `getGenres()` function, add a `try/catch` statement.

Leave the `try` block empty for now. In the `catch` block, log caught `errors` to the `console`.


<br>

#### **8. In the try block, use fetch() to send a GET request**

In the `try` block, use `fetch()` to send a **GET request** to `urlToFetch`, `await` the `response` and save it to a variable called `response`. We need to `await` the resolution of our `fetch()` call so that we can do something with the data we get back.

<br>

#### **9. Create a conditional statement inside the try block**
Still inside the `try` block, create a conditional statement that checks `if` the `.ok` property of the `response` object evaluates to a truthy value.

<br>

#### **10. Inside the if statement of our try block, we'll capture the data**

Inside the `if` statement of our `try` block, we'll capture the data that we need to populate our dropdown menu. 

To get the requested data, convert the `response` object to a `JSON` object, `await` the resolution of this method and save it to a variable called `jsonResponse`.

<br>

#### **11. Log jsonResponse to the console inside our if statement**
To make sure wer code is working, log `jsonResponse` to the `console` inside our `if` statement. we should see a single object with a single key, `genres.` 

The value of `genres` is an array that lists TMDB's genres.

Save the `genres` property of `jsonResponse` in a variable called `genres`. Log this variable to the `console` to confirm that it contains the correct information.

<br>

#### **12. Return genres as the very last line of the if statement**
Return `genres` as the very last line of the `if` statement inside our `try` block of the `getGenres()` function.

When we run our program, we should now be able to see the dropdown menu populated with genres!

<br>


## **Get a Random Movie**

<br>

#### **13. Save API endpoint to the discoverMovieEndpoint variable**

For the next several steps we'll be working inside `getMovies()` to `fetch` a list of `movies` based on the genre selected from the list of `genres` we returned in `getGenres()`.

Check the **TMDB documentation** to find the **"Movie Discover" API endpoint**. Below the `selectedGenre` variable declaration, save this endpoint to a variable called `discoverMovieEndpoint`.

<br>

#### **14. Create and process the requestParams and urlToFetch variables** 

Like we did for `getGenres()`, we'll create a variable called `requestParams`.

Set it equal to a query string with two parameters. The first will be our `api_key` with the value - `tmdbKey`. The second parameter will have the `with_genres` key with its value set to the `selectedGenre` variable.

`selectedGenre` stores the returned value from a helper function (the `getSelectedGenre()` function in `helpers.js`) that captures the user's selected genre.

Let's also put together the URL where we'll send our `fetch` request. Create a variable called `urlToFetch`. Set it to a string that consists of `tmdbBaseUrl`, followed by `discoverMovieEndpoint`, then `requestParams`.

<br>

#### **15. Turn getMovies() into an asynchronous function**

This will simplify handling the promise that our `fetch()` request will return.

Add `try/catch` blocks inside `getMovies()`, after our variable declarations.

In the `catch` block, log any `errors` to the `console`. In the `try` block, use `fetch()` to send a **GET request** to `urlToFetch`, `await` the response and save it to a variable called `response`.

<br>

#### **16. Create a conditional statement inside the try block**
Still inside the `try` block, create a conditional statement that checks `if` the `.ok` property of the `response` object evaluates to a truthy value.

Inside the `if` statement, convert the `response` object to a `JSON` object, `await` the resolution of this method and save it to a variable called `jsonResponse`.

<br>

#### **17. Store the results of jsonResponse in the movies variable**

Below our `jsonResponse` declaration in the `if` statement, store the `results` property of `jsonResponse` in a variable called `movies`. Log this variable to the `console` to confirm that it contains the correct information.

Return `movies` as the last line of the `if` statement. Later on, we'll use this list to select a random movie as a suggestion.

After we check what `movies` logs to the `console`, remove the `getMovies()` function call. Otherwise, it will automatically execute every time we run our program, causing unexpected behavior later.

<br>

## **Get Movie Info**

#### **18. Create and process in the movieId variable**

For the next several steps, we'll be working inside the `getMovieInfo()` function to `fetch` the details of a random movie from the list of `movies` we returned in `getMovies()`.

Modify `getMovieInfo()` by having it accept a parameter - `movie`. Then, inside the function, create a variable called `movieId` that is set to the `id` property of the `movie` parameter. We will be using the `id` property to make another call to the **TMDB API**.

<br>

#### **19. Save the movie "Details" endpoint into the movieEndpoint**

Reference the **TMDB documentation** to find the **movie “Details” endpoint**. 

Save it to a variable called `movieEndpoint` and replace `{movie_id}` in the endpoint with our `movieId` variable.

<br>

#### **20. Let's create query params and URL to send our fetch request**

Create a variable called `requestParams` and set it to be a query string with one parameter with `api_key` set to `tmdbKey`.

Create a variable called `urlToFetch`. Set it equal to a string that consists of `tmdbBaseUrl`, followed by `movieEndpoint`, then `requestParams`.

<br>

#### **21. Turn getMovieInfo() into an asynchronous function**

Add a `try/catch` block inside `getMovieInfo()`, after our variable declarations.

In the `catch` block, log any `errors` to the `console`. In the `try` block, use `fetch()` to send a **GET request** to `urlToFetch`, `await` the response and save it to a variable called `response`.

<br>

#### **22. Create a conditional statement inside the try block**

Create a conditional statement inside the try block**
Still inside the `try` block, create a conditional statement that checks `if` the `.ok` property of the `response` object evaluates to a truthy value.

Our `response` contains a single object with details about the given `movie`. Inside the `if` statement, convert this `response` to a `JSON` object, `await` the resolution of this method, and save it to a variable called `movieInfo`.

<br>

#### 23. Return movieInfo as the last line of the if block**

<br>

## **Display Movie**

<br>

#### **24. Turn showRandomMovie() into an async function and continue to process**

For this next set of tasks, we'll be working inside the `showRandomMovie()` function to piece together our functionality and render a random movie's info to the page.

Turn `showRandomMovie()` into an `async` function. Then, on the last line of the function, call `getMovies()`, `await` its return, and save it to a variable called `movies`. Since `getMovies()` returns a promise, we need to `await` its resolution so that we can do something with its return value in upcoming steps.

<br>

#### **25. Call getRandomMovie(), passing movies as the argument**

Below our `movies` declaration, call `getRandomMovie()`, passing `movies` as the argument.

Store the returned value in a variable called `randomMovie`.

<br>

#### **26. Call getMovieInfo(), passing randomMovie as the argument**

Below our `randomMovie` declaration, call `getMovieInfo()`, passing `randomMovie` as the argument.

Await the returned value and save it in a variable called `info`.

<br>

#### **27. Call displayMovie(), passing info**

Finally, as the last line of the `showRandomMovie()` function, call `displayMovie()`, passing `info` as the argument.

Run our program to see movie suggestions. Like or dislike each movie to be shown another random suggestion. Change genres to get different suggestions based on our interests.

<br>

#### **28. Extra Tasks**
_If we're looking for additional ways to challenge ourselves, consider the following:_

> Create a way to store a user's liked and disliked movies and display this list on the page.

> Our API call inside of `getMovies()` returns many pages of results, but currently our program only randomizes results from the first page. To randomize our results even more, update `getMovies()` so that movies contains results from a random page instead of the first page.

<br>

***Action:***

![Image](/22.%20Film%20Finder/Capture1.JPG)

***Documentary:***

![Image](/22.%20Film%20Finder/Capture2.JPG)

***Thriller:***

![Image](/22.%20Film%20Finder/Capture3.JPG)

***History:***

![Image](/22.%20Film%20Finder/Capture4.JPG)

<br>

### ***This Project was completed by [Nalini Vo](https://github.com/Nalini1998)***