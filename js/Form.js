class Form {
    constructor(){

    
    }
    /*hideForm(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
    
    }*/
    
    display(){
   var title = createElement("h2");
   var input = createInput("name");
   var button = createButton("play");
   var greeting = createElement("h2");

    title.html("Bow And Arrow");
    title.position(800,50);
    input.position(800,200);
    button.position(1000,200);
    
   button.mousePressed(function(){
      input.hide();
      button.hide();

      var name  = input.value();
      
     // playerCount+=1;
      //player.update(name)
      //player.updateCount(playerCount);
      var greeting = createElement('h3');
      greeting.html("Hello " + name);
      greeting.position(800, 200);
    }); 
    }
    
    }