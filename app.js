function myApp() {
  token_manager; //token manager object
  token_store; //database object
  settings_manager; //user object

  function update() {
    //Some code here to get user input, evaluate it etc

    token_manager.update();
    settings_manager.update();
    token_store.update();

    //Now that each back end module has done its work, update the UI so the user can see any changes
    interface.update();
  } // function that has the main backend code
}
