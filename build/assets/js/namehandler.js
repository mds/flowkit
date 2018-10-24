$( document ).ready(function() {

  // setup arrow name variables (set default)
  window.type  = "tap";
  window.dir1  = "right";
  window.mod1  = "arrow";
  window.dir2  = "";
  window.mod2  = "";
  window.style = "";

  // set arrow name
  function setFkArrowName(){
    window.fkArrowName = window.type + " " + window.dir1 + " " + window.mod1 + " " + window.dir2 + " " + window.mod2 + " " + window.style;
    $('.fk-arrow-desc').html(window.fkArrowName);
  };

  // change arrow name
  // function updateFkArrowName(){

  //   // check first direction
  //   if( window.dir1 == "right" ){
  //     window.mod1  = "curve";
  //     window.dir2  = "down";
  //   };
  //   if( window.dir1 == "down" ){
  //     window.mod1  = "curve";
  //     window.dir2  = "left";
  //   };
  //   if( window.dir1 == "left" ){
  //     window.mod1  = "curve";
  //     window.dir2  = "up";
  //   };
  //   if( window.dir1 == "up" ){
  //     window.mod1  = "curve";
  //     window.dir2  = "right";
  //   };

  //   // after checking other variables set the name again
  //   setFkArrowName();
  // };

  // set initial arrow name
  setFkArrowName();

  // style 1
  function updateFkArrowNameStyle1(){
    window.dir1  = "right";
    window.mod1  = "arrow";
    window.dir2  = "";
    window.mod2  = "";
    setFKArrowName();
  };

  // style 2
  function updateFkArrowNameStyle2(){
    window.dir1  = "right";
    window.mod1  = "curve";
    window.dir2  = "down";
    window.mod2  = "";
  };

  // style 3
  function updateFkArrowNameStyle3(){
    window.dir1  = "right";
    window.mod1  = "curve";
    window.dir2  = "down";
    window.mod2  = "hook";
  };

  // style 4
  function updateFkArrowNameStyle4(){
    window.dir1  = "right";
    window.mod1  = "curve";
    window.dir2  = "down";
    window.mod2  = "u-turn";
  };

  // style 5
  function updateFkArrowNameStyle5(){
    window.dir1  = "right";
    window.mod1  = "curve";
    window.dir2  = "up";
    window.mod2  = "";
  };

  // style 6
  function updateFkArrowNameStyle6(){
    window.dir1  = "right";
    window.mod1  = "curve";
    window.dir2  = "up";
    window.mod2  = "hook";
  };

  // style 7
  function updateFkArrowNameStyle7(){
    window.dir1  = "right";
    window.mod1  = "curve";
    window.dir2  = "up";
    window.mod2  = "u-turn";
  };

  // style 8
  function updateFkArrowNameStyle8(){
    window.dir1  = "right";
    window.mod1  = "snake";
    window.dir2  = "up";
    window.mod2  = "";
  };

  // style 9
  function updateFkArrowNameStyle9(){
    window.dir1  = "right";
    window.mod1  = "snake";
    window.dir2  = "up";
    window.mod2  = "hook";
  };

  // style 10
  function updateFkArrowNameStyle10(){
    window.dir1  = "right";
    window.mod1  = "snake";
    window.dir2  = "down";
    window.mod2  = "";
  };

  // style 11
  function updateFkArrowNameStyle11(){
    window.dir1  = "right";
    window.mod1  = "snake";
    window.dir2  = "down";
    window.mod2  = "hook";
  };

});
