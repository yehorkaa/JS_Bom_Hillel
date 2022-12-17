
  console.log("width: ", screen.width);
  console.log("height: ", screen.height);

  const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


  const btn = document.querySelector("#btn");
  btn.addEventListener("click", function (event) {
  
    event.preventDefault();
    history.back();
  });


