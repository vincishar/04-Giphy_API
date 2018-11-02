$(".fighterz").on("click", function () {

    var character = $(this).attr("data-character");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      character + "&api_key=ZBQ4DcPWStP4kFTILa3rjPLTnLIxnH1o&limit=10";
    
    console.log( "character: " + character );
    
    $.ajax({
      url: queryURL,
      method: "GET"
      //
    })
      .then(function (response) {
        $("#images").html("")

        var results = response.data;

        for (var i = 0; i < results.length; i++) {  

           var characterDiv = $("<div>"); 


          //
          var characterImage = $('<img src="' + results[i].images.fixed_width_still.url + '" data-still="' + results[i].images.fixed_width_still.url + '" ' +
          'data-animate="' + results[i].images.fixed_width.url + '" data-state="still" />');

          //
          console.log(results[i].images.fixed_width.url)
          characterImage.attr("alt", "DBZ character");

          //
          $("#images").append(characterImage);   
          
          $( characterImage ).on("click", function() {
              // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
              var state = $(this).attr("data-state");
              // If the clicked image's state is still, update its src attribute to what its data-animate value is.
              // Then, set the image's data-state to animate
              // Else set src to the data-still value
              if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
              } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
              }
          });


        }
      });
  });


				
  






