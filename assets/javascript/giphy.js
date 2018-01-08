// var movies = ["Wedding Crashers", "Titanic", "Anchorman", "Ironman"];


var movies = [];

$("button").on("click", function() {

	//function displayMovieTitle() {

		var movie = $(this).attr("movie-value");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=W4TOETnFJvMiouBC8WSd50JeUDWyzBNw&limit=10"

		$.ajax({
	          url: queryURL,
	          method: "GET"
	        }).done(function(response) {

	        var results = response.data;

		       for (var i = 0; i < results.length; i++) {

		       	var movieDiv = $("<div>");

		       	var rating = results[i].rating;

		       	var p = $("<p>").text("Rating: " + results[i].rating);

		       	var movieImage = $("<img>");

		       	movieImage.attr("src", results[i].images.fixed_height.url);
		       	movieDiv.append(p);
		       	movieDiv.append(movieImage);
		       	$("#gifs").prepend(movieDiv);


		       }

	       console.log(queryURL);
	       console.log(response.data);
	       console.log(movie);

    
	})



      // Function for displaying movie data
      function renderButtons() {

        // Deleting the movies prior to adding new movies
        $("#buttons-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {

          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("movie");
          // Adding a data-attribute
          a.attr("movie-value", movies[i]);
          // Providing the initial button text
          a.text(movies[i]);
          // Adding the button to the HTML
          $("#buttons-view").append(a);
        }
      }

      // This function handles events where one button is clicked
      $("#add-movie").on("click", function(event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        // grab the input from the textbox
        var newMovie = $("#movie-input").val().trim();


        movies.push(newMovie);

        renderButtons();

      });



});
