function token_manager() {
    
    token_store.js; //database object
    settings_manager; //token store specific settings object

    function display_toys() {
        
    }// displays toys in the interface
  
    function reserve_a_toy() {
      //Some code here to get user input, evaluate it etc
  
     
      settings_manager.update();
      token_store.update();
  
      return; //Now that each back end module has done its work, update the UI so the user can see any changes
      
    } // function that has some token store specific backend code
  }