//- @codekit-prepend 'jquery.js'
//- @codekit-prepend 'MorphSVGPlugin.min.js'
//- @codekit-prepend 'TweenMax.min.js'
//- @codekit-prepend 'mousetrap.min.js'
//- @codekit-prepend 'jquery.touchSwipe.min.js'
//- @codekit-prepend 'svgReplace.js'
//- @codekit-prepend 'plyr.js'

$( document ).ready(function() {



  // startAnimations();

  // cycle through animations
  function startAnimations (){
    setTimeout(function(){ fkUpdatePosition(); }, 1000);
    setTimeout(function(){ fkUpdatePosition(); }, 1500);
    setTimeout(function(){ fkUpdatePosition(); }, 2000);
    setTimeout(function(){ fkUpdatePosition(); }, 2500);
    setTimeout(function(){ fkUpdatePosition(); }, 3000);
    setTimeout(function(){ fkUpdatePosition(); }, 3500);
    setTimeout(function(){ fkUpdatePosition(); }, 4000);
    setTimeout(function(){ fkUpdatePosition(); }, 4500);
    setTimeout(function(){ fkUpdatePosition(); }, 5000);
    setTimeout(function(){ fkUpdatePosition(); }, 5500);
    setTimeout(function(){ fkUpdatePosition(); }, 6000);
    setTimeout(function(){ fkYesPulse(); }, 6500);
  }

  // show / hide header bg on scroll
  var h = $("header");
  var pos = h.position();
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop();
    if (windowpos >= pos.top & windowpos >=20) {
      h.addClass("fk-header-scrolled");
    } else {
      h.removeClass("fk-header-scrolled");
    }
  });


  // video player

  $(".plyr__controls").addClass("is-hidden");
  
  player.on('play', event => {
    showVideoControls();
  });

  player.on('ready', event => {
    hideVideoControls();
  });
  
  // player.on('paused', event => {
  //   hideVideoControls();
  // });

  function showVideoControls() {
    $(".plyr__controls").removeClass("is-hidden");
    $(".plyr__controls").addClass("is-showing");
  }

  function hideVideoControls() {
    $(".plyr__controls").removeClass("is-showing");
    $(".plyr__controls").addClass("is-hidden");
  }

  // three-way video switch controls
  $(".fk-video-control-figma").on("click", function() {
      $(".fk-video-control-sketch.is-active").removeClass("is-active");
      $(".fk-video-control-xd.is-active").removeClass("is-active");
      $(this).addClass("is-active");

      // update source video
      player.source = {
        type: 'video',
        title: 'Figma',
        sources: [
            {
                src: 'assets/video/video-example-figma.mp4',
                type: 'video/mp4',
            },
        ],
        // poster: '/path/to/poster.jpg'
      };
  });

  $(".fk-video-control-sketch").on("click", function() {      
      $(".fk-video-control-figma.is-active").removeClass("is-active");
      $(".fk-video-control-xd.is-active").removeClass("is-active");
      $(this).addClass("is-active");

      // update source video
      player.source = {
        type: 'video',
        title: 'Sketch',
        sources: [
            {
                src: 'assets/video/video-example-sketch.mp4',
                type: 'video/mp4',
            },
        ],
        // poster: '/path/to/poster.jpg'
      };
  });

  $(".fk-video-control-xd").on("click", function() {      
      $(".fk-video-control-figma.is-active").removeClass("is-active");
      $(".fk-video-control-sketch.is-active").removeClass("is-active");
      $(this).addClass("is-active");

      // update source video
      player.source = {
        type: 'video',
        title: 'XD',
        sources: [
            {
                src: 'assets/video/video-example-xd.mp4',
                type: 'video/mp4',
            },
        ],
        // poster: '/path/to/poster.jpg'
      };
  });

  





  // for removing the grey box around pressed things in mobile safari
  document.addEventListener("touchstart", function(){}, true);

  // style 1 (for the arrow) there are 11 total
  function updateFkArrowNameStyle1(){
    window.mod1  = "";
    window.dir2  = "";
    window.mod2  = "";
    setFkArrowName();
  };

  // style 2
  function updateFkArrowNameStyle2(){
    if( window.dir1 == "right" ){
      window.mod1  = "curve";
      window.dir2  = "down";
    }
    if( window.dir1 == "down" ){
      window.mod1  = "curve";
      window.dir2  = "left";
    }
    if( window.dir1 == "left" ){
      window.mod1  = "curve";
      window.dir2  = "up";
    }
    if( window.dir1 == "up" ){
      window.mod1  = "curve";
      window.dir2  = "right";
    }
    window.mod2  = "";
    setFkArrowName();
  };

  // style 3
  function updateFkArrowNameStyle3(){
    if( window.dir1 == "right" ){
      window.mod1  = "curve";
      window.dir2  = "down";
      window.mod2  = "hook";
    }
    if( window.dir1 == "down" ){
      window.mod1  = "curve";
      window.dir2  = "left";
      window.mod2  = "hook";
    }
    if( window.dir1 == "left" ){
      window.mod1  = "curve";
      window.dir2  = "up";
      window.mod2  = "hook";
    }
    if( window.dir1 == "up" ){
      window.mod1  = "curve";
      window.dir2  = "right";
      window.mod2  = "hook";
    }
    setFkArrowName();
  };

  // style 4
  function updateFkArrowNameStyle4(){
    if( window.dir1 == "right" ){
      window.mod1  = "curve";
      window.dir2  = "down";
      window.mod2  = "u-turn";
    }
    if( window.dir1 == "down" ){
      window.mod1  = "curve";
      window.dir2  = "left";
      window.mod2  = "u-turn";
    }
    if( window.dir1 == "left" ){
      window.mod1  = "curve";
      window.dir2  = "up";
      window.mod2  = "u-turn";
    }
    if( window.dir1 == "up" ){
      window.mod1  = "curve";
      window.dir2  = "right";
      window.mod2  = "u-turn";
    }
    setFkArrowName();
  };

  // style 5
  function updateFkArrowNameStyle5(){
    if( window.dir1 == "right" ){
      window.mod1  = "curve";
      window.dir2  = "up";
    }
    if( window.dir1 == "down" ){
      window.mod1  = "curve";
      window.dir2  = "right";
    }
    if( window.dir1 == "left" ){
      window.mod1  = "curve";
      window.dir2  = "down";
    }
    if( window.dir1 == "up" ){
      window.mod1  = "curve";
      window.dir2  = "left";
    }
    window.mod2  = "";
    setFkArrowName();
  };

  // style 6
  function updateFkArrowNameStyle6(){
    if( window.dir1 == "right" ){
      window.mod1  = "curve";
      window.dir2  = "up";
      window.mod2  = "hook";
    }
    if( window.dir1 == "down" ){
      window.mod1  = "curve";
      window.dir2  = "right";
      window.mod2  = "hook";
    }
    if( window.dir1 == "left" ){
      window.mod1  = "curve";
      window.dir2  = "down";
      window.mod2  = "hook";
    }
    if( window.dir1 == "up" ){
      window.mod1  = "curve";
      window.dir2  = "left";
      window.mod2  = "hook";
    }
    setFkArrowName();
  };

  // style 7
  function updateFkArrowNameStyle7(){
    if( window.dir1 == "right" ){
      window.mod1  = "curve";
      window.dir2  = "up";
      window.mod2  = "u-turn";
    }
    if( window.dir1 == "down" ){
      window.mod1  = "curve";
      window.dir2  = "right";
      window.mod2  = "u-turn";
    }
    if( window.dir1 == "left" ){
      window.mod1  = "curve";
      window.dir2  = "down";
      window.mod2  = "u-turn";
    }
    if( window.dir1 == "up" ){
      window.mod1  = "curve";
      window.dir2  = "left";
      window.mod2  = "u-turn";
    }
    setFkArrowName();
  };

  // style 8
  function updateFkArrowNameStyle8(){
    if( window.dir1 == "right" ){
      window.mod1  = "snake";
      window.dir2  = "up";
    }
    if( window.dir1 == "down" ){
      window.mod1  = "snake";
      window.dir2  = "right";
    }
    if( window.dir1 == "left" ){
      window.mod1  = "snake";
      window.dir2  = "down";
    }
    if( window.dir1 == "up" ){
      window.mod1  = "snake";
      window.dir2  = "left";
    }
    window.mod2  = "";
    setFkArrowName();
  };

  // style 9
  function updateFkArrowNameStyle9(){
    if( window.dir1 == "right" ){
      window.mod1  = "snake";
      window.dir2  = "up";
      window.mod2  = "hook";
    }
    if( window.dir1 == "down" ){
      window.mod1  = "snake";
      window.dir2  = "right";
      window.mod2  = "hook";
    }
    if( window.dir1 == "left" ){
      window.mod1  = "snake";
      window.dir2  = "down";
      window.mod2  = "hook";
    }
    if( window.dir1 == "up" ){
      window.mod1  = "snake";
      window.dir2  = "left";
      window.mod2  = "hook";
    }
    setFkArrowName();
  };

  // style 10
  function updateFkArrowNameStyle10(){
    if( window.dir1 == "right" ){
      window.mod1  = "snake";
      window.dir2  = "down";
    }
    if( window.dir1 == "down" ){
      window.mod1  = "snake";
      window.dir2  = "left";
    }
    if( window.dir1 == "left" ){
      window.mod1  = "snake";
      window.dir2  = "up";
    }
    if( window.dir1 == "up" ){
      window.mod1  = "snake";
      window.dir2  = "right";
    }
    window.mod2  = "";
    setFkArrowName();
  };

  // style 11
  function updateFkArrowNameStyle11(){
    if( window.dir1 == "right" ){
      window.mod1  = "snake";
      window.dir2  = "down";
      window.mod2  = "hook";
    }
    if( window.dir1 == "down" ){
      window.mod1  = "snake";
      window.dir2  = "left";
      window.mod2  = "hook";
    }
    if( window.dir1 == "left" ){
      window.mod1  = "snake";
      window.dir2  = "up";
      window.mod2  = "hook";
    }
    if( window.dir1 == "up" ){
      window.mod1  = "snake";
      window.dir2  = "right";
      window.mod2  = "hook";
    }
    setFkArrowName();
  };

  // remove initial pulse animation from arrow
  function fkNoPulse(){
    $(".fk-arrow-container").removeClass("fk-arrow-is-pulsing");
  }

  // adds initial pulse animation to arrow
  function fkYesPulse(){
    $(".fk-arrow-container").addClass("fk-arrow-is-pulsing");
  }

  // for transforming all of the arrows FORWARD, used with fkUpdatePosition();
  var positions = {
    pos1: function (event) { fkAnimate1to2(); updateFkArrowNameStyle2(); },
    pos2: function (event) { fkAnimate2to3(); updateFkArrowNameStyle3(); },
    pos3: function (event) { fkAnimate3to4(); updateFkArrowNameStyle4(); },
    pos4: function (event) { fkAnimate4to5(); updateFkArrowNameStyle5(); },
    pos5: function (event) { fkAnimate5to6(); updateFkArrowNameStyle6(); },
    pos6: function (event) { fkAnimate6to7(); updateFkArrowNameStyle7(); },
    pos7: function (event) { fkAnimate7to8(); updateFkArrowNameStyle8(); },
    pos8: function (event) { fkAnimate8to9(); updateFkArrowNameStyle9(); },
    pos9: function (event) { fkAnimate9to10(); updateFkArrowNameStyle10(); },
    pos10: function (event) { fkAnimate10to11(); updateFkArrowNameStyle11(); },
    pos11: function (event) { fkAnimate11to1(); updateFkArrowNameStyle1(); }
  };

  // update number position of arrow
  function fkUpdateCurrent(number){
    $(".fk-current").text(number)
  }

  // main function for dynamically changing the arrows
  function fkUpdatePosition(){
    fkNoPulse();
    var link = $(".fk-arrow[data-pos]"),
        position = link.data("pos");

    // this prevents there being a default position. no need, so it's commented out.
    // event.preventDefault();

    // If there's a position with the given name, call it
    if( typeof positions[position] === "function" ) {
      positions[position].call(this, event);
    }
  };

  // for transforming all of the arrows FORWARD, used with fkUpdatePosition();
  var positionsReverse = {
    pos1: function (event) { fkAnimate1to11(); updateFkArrowNameStyle11(); },
    pos2: function (event) { fkAnimate2to1(); updateFkArrowNameStyle1(); },
    pos3: function (event) { fkAnimate3to2(); updateFkArrowNameStyle2(); },
    pos4: function (event) { fkAnimate4to3(); updateFkArrowNameStyle3(); },
    pos5: function (event) { fkAnimate5to4(); updateFkArrowNameStyle4(); },
    pos6: function (event) { fkAnimate6to5(); updateFkArrowNameStyle5(); },
    pos7: function (event) { fkAnimate7to6(); updateFkArrowNameStyle6(); },
    pos8: function (event) { fkAnimate8to7(); updateFkArrowNameStyle7(); },
    pos9: function (event) { fkAnimate9to8(); updateFkArrowNameStyle8(); },
    pos10: function (event) { fkAnimate10to9(); updateFkArrowNameStyle9(); },
    pos11: function (event) { fkAnimate11to10(); updateFkArrowNameStyle10(); }
  };

  // go backwards
  function fkUpdatePositionReverse(){
    fkNoPulse();
    var link = $(".fk-arrow[data-pos]"),
        position = link.data("pos");

    event.preventDefault();

    // If there's a position with the given name, call it
    if( typeof positionsReverse[position] === "function" ) {
      positionsReverse[position].call(this, event);
    }
  };

  // scale down on mouse down
  $('.fk-arrow').on("mousedown", function (event) {
    bounceDown();
  });

  // scale up on mouse up
  $('.fk-arrow').on("mouseup", function (event) {
    bounceUp();
  });

  function bounceDown(){
    $('.fk-arrow-container').removeClass("fk-arrow-bounce--up")
    $('.fk-arrow-container').addClass("fk-arrow-bounce--down")
    $('.fk-arrow-desc').removeClass("fk-bounce--up")
    $('.fk-arrow-desc').addClass("fk-bounce--down")
    $('.fk-label').removeClass("fk-bounce--up-right")
    $('.fk-label').addClass("fk-bounce--down-right")
  };

  function bounceUp(){
    $('.fk-arrow-container').removeClass("fk-arrow-bounce--down")
    $('.fk-arrow-container').addClass("fk-arrow-bounce--up")
    $('.fk-arrow-desc').removeClass("fk-bounce--down")
    $('.fk-arrow-desc').addClass("fk-bounce--up")
    $('.fk-label').addClass("fk-bounce--up-right")
    $('.fk-label').removeClass("fk-bounce--down-right")
  };

  // check position and animate accordingly
  $(".fk-arrow[data-pos]").on("click", function (event) {
    fkUpdatePosition();
  });

  // setup arrow name variables (set default)
  window.type  = "tap";
  window.dir1  = "right";
  window.mod1  = "";
  window.dir2  = "";
  window.mod2  = "";
  window.style = "";

  // set arrow name
  function setFkArrowName(){
    window.fkArrowName = window.type + " " + window.dir1 + " " + window.mod1 + " " + window.dir2 + " " + window.mod2 + " " + window.style;
    $('.fk-arrow-desc').html(window.fkArrowName);
  };

  // set initial arrow name
  setFkArrowName();


  // all of the path animations
  ////////////////////////////////////////////////////////////////////////////////////////////////

  var pathAnimationSpeed = ".3";
  var pathAnimationEasing = "Back.easeInOut : BackInOut"

  function fkAnimate1to2(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#2-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#2-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#2-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#2-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos2');
    fkUpdateCurrent(2);
  };

  function fkAnimate2to3(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#3-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#3-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#3-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#3-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos3');
    fkUpdateCurrent(3);
  };

  function fkAnimate3to4(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#4-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#4-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#4-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#4-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos4');
    fkUpdateCurrent(4);
  };

  function fkAnimate4to5(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#5-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#5-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#5-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#5-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos5');
    fkUpdateCurrent(5);
  };

  function fkAnimate5to6(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#6-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#6-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#6-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#6-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos6');
    fkUpdateCurrent(6);
  };

  function fkAnimate6to7(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#7-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#7-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#7-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#7-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos7');
    fkUpdateCurrent(7);
  };

  function fkAnimate7to8(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#8-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#8-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#8-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#8-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos8');
    fkUpdateCurrent(8);
  };

  function fkAnimate8to9(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#9-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#9-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#9-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#9-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos9');
    fkUpdateCurrent(9);
  };

  function fkAnimate9to10(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#10-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#10-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#10-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#10-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos10');
    fkUpdateCurrent(10);
  };

  function fkAnimate10to11(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#11-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#11-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#11-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#11-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos11');
    fkUpdateCurrent(11);
  };

  function fkAnimate11to1(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#1-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#1-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#1-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#1-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos1');
    fkUpdateCurrent(1);
  };

  // backwards animations
  ////////////////////////////////////////////////////////////////////////////////////////////////

  function fkAnimate1to11(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#11-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#11-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#11-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#11-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos11');
    fkUpdateCurrent(11);
  };

  function fkAnimate2to1(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#1-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#1-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#1-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#1-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos1');
    fkUpdateCurrent(1);
  };

  function fkAnimate3to2(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#2-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#2-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#2-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#2-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos2');
    fkUpdateCurrent(2);
  };

  function fkAnimate4to3(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#3-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#3-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#3-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#3-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos3');
    fkUpdateCurrent(3);
  };

  function fkAnimate5to4(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#4-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#4-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#4-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#4-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos4');
    fkUpdateCurrent(4);
  };

  function fkAnimate6to5(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#5-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#5-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#5-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#5-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos5');
    fkUpdateCurrent(5);
  };

  function fkAnimate7to6(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#6-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#6-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#6-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#6-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos6');
    fkUpdateCurrent(6);
  };

  function fkAnimate8to7(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#7-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#7-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#7-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#7-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos7');
    fkUpdateCurrent(7);
  };

  function fkAnimate9to8(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#8-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#8-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#8-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#8-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos8');
    fkUpdateCurrent(8);
  };

  function fkAnimate10to9(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#9-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#9-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#9-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#9-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos9');
    fkUpdateCurrent(9);
  };

  function fkAnimate11to10(){
    TweenMax.to("#1-path",       pathAnimationSpeed,   {morphSVG:"#10-path", pathAnimationEasing});
    TweenMax.to("#1-endpoint-a", pathAnimationSpeed,   {morphSVG:"#10-endpoint-a", pathAnimationEasing});
    TweenMax.to("#1-endpoint-b", pathAnimationSpeed,   {morphSVG:"#10-endpoint-b", pathAnimationEasing});
    TweenMax.to("#1-tap",        pathAnimationSpeed,   {morphSVG:"#10-tap", pathAnimationEasing});
    $('.fk-arrow').data('pos', 'pos10');
    fkUpdateCurrent(10);
  };


  // cycle controls (prev/next)
  ////////////////////////////////////////////////////////////////////////////////////
  $('.fk-cycle-next').on("mousedown", function (event) {
    bounceDown();
  });

  $('.fk-cycle-next').on("mouseup", function (event) {
    bounceUp();
  });

  $('.fk-cycle-next').on("click", function (event) {
    fkUpdatePosition();
    console.log("next clicked");
  });

  $('.fk-cycle-prev').on("click", function (event) {
    fkUpdatePositionReverse();
    console.log("prev clicked");
  });

  // arrow key keyboard controls
  ////////////////////////////////////////////////////////////////////////////////////
  $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
          bounceDown();
        break;

        case 39: // right
          bounceDown();
        break;

        case 38: // up
          if( window.dir1 == "right" ){
            fkAnimateDirectionUp();
            fkUpdatePositionReverse();
            console.log(window.dir1);
          } else {
            if( window.dir1 == "down" ){
              fkAnimateDirectionRight();
              fkUpdatePositionReverse();
              console.log(window.dir1);
            } else {
              if( window.dir1 == "left" ){
              fkAnimateDirectionDown();
              fkUpdatePositionReverse();
              console.log(window.dir1);
            } else {
              if( window.dir1 == "up" ){
                fkAnimateDirectionLeft();
                fkUpdatePositionReverse();
                console.log(window.dir1);
            }}}
          }

        break;

        case 40: // down
          if( window.dir1 == "right" ){
            fkAnimateDirectionDown();
            fkUpdatePosition();
            console.log(window.dir1);
          } else {
            if( window.dir1 == "down" ){
              fkAnimateDirectionLeft();
              fkUpdatePosition();
              console.log(window.dir1);
            } else {
            if( window.dir1 == "left" ){
              fkAnimateDirectionUp();
              fkUpdatePosition();
              console.log(window.dir1);
            } else {
            if( window.dir1 == "up" ){
              fkAnimateDirectionRight();
              fkUpdatePosition();
              console.log(window.dir1);
            }}}
          }
        break;

        default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  $(document).keyup(function(e) {
    switch(e.which) {
        case 37: // left
          fkUpdatePositionReverse();
          bounceUp();
        break;

        case 39: // right
          fkUpdatePosition();
          bounceUp();
        break;

        default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  Mousetrap.bind(['shift'], function(e) {
    if (window.style == ""){
      fkAnimateStyleDefaultToAlt();
    } else {
      fkAnimateStyleAltToDefault();
    }
  });

  Mousetrap.bind(['option'], function(e) {
    if (window.type == "tap"){
      fkAnimateTypeTaptoFlow();
    } else {
      fkAnimateTypeFlowtoTap();
    }
  });


  // swipe gestures for changing the arrow
  ////////////////////////////////////////////////////////////////////////////////////
  $(function() {
      //Keep track of how many swipes
      var count=0;
      //Enable swiping...
      $(".fk-arrow").swipe( {
        //Single swipe handler for left swipes
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
          console.log("You swiped " + direction + " " + ++count + " times " );
          fkUpdatePosition();
          setFkArrowName();
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
          console.log("You swiped " + direction + " " + ++count + " times " );
          fkUpdatePositionReverse();
          setFkArrowName();
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:0
      });
    });

  // path controls for type/direction/style
  ////////////////////////////////////////////////////////////////////////////////////

  // scale down on mouse down
  $('.fk-carousel-controls a').on("mousedown", function (event) {
    bounceDown();
    console.log("control clicked")
  });

  // scale up on mouse up
  $('.fk-carousel-controls a').on("mouseup", function (event) {
    bounceUp();
  });

  // toggle tap/flow
  $('.fk-controls-type a[data-type="flow"]').on("click", function (event) {
    fkAnimateTypeTaptoFlow();
  });
  $('.fk-controls-type a[data-type="tap"]').on("click", function (event) {
    fkAnimateTypeFlowtoTap();
  });

  // toggle default/alt
  $('.fk-controls-style a[data-style="alt"]').on("click", function (event) {
    fkAnimateStyleDefaultToAlt();
  });

  $('.fk-controls-style a[data-style="default"]').on("click", function (event) {
    fkAnimateStyleAltToDefault();
  });

  // toggle direction
  $('.fk-controls-direction a[data-direction="right"]').on("click", function (event) {
    window.dir1 = "right";
    fkAnimateDirectionRight();
    fkUpdatePosition();
    setFkArrowName();
  });
  $('.fk-controls-direction a[data-direction="down"]').on("click", function (event) {
    window.dir1 = "down"
    fkAnimateDirectionDown();
    fkUpdatePosition();
    setFkArrowName();
  });
  $('.fk-controls-direction a[data-direction="left"]').on("click", function (event) {
    window.dir1 = "left"
    fkAnimateDirectionLeft();
    fkUpdatePosition();
    setFkArrowName();
  });
  $('.fk-controls-direction a[data-direction="up"]').on("click", function (event) {
    window.dir1 = "up"
    fkAnimateDirectionUp();
    fkUpdatePosition();
    setFkArrowName();
  });

  // sets type to flow
  function fkAnimateTypeTaptoFlow(){
    window.type = "flow";
    setFkArrowName();
    $('.fk-arrow').removeClass("fk-arrow--tap-fadeIn");
    $('.fk-arrow').addClass("fk-arrow--tap-fadeOut");
    $('.fk-arrow').removeClass("fk-arrow--tap");
    $('.fk-arrow').addClass("fk-arrow--flow");
    // update active control class
    $('.fk-controls-type a[data-type="tap"]').removeClass("is-active");
    $('.fk-controls-type a[data-type="flow"]').addClass("is-active");
    console.log('flow');
  };

  // sets type to tap
  function fkAnimateTypeFlowtoTap(){
    window.type = "tap";
    setFkArrowName();
    $('.fk-arrow').removeClass("fk-arrow--tap-fadeOut");
    $('.fk-arrow').addClass("fk-arrow--tap-fadeIn");
    // update active control class
    $('.fk-controls-type a[data-type="flow"]').removeClass("is-active");
    $('.fk-controls-type a[data-type="tap"]').addClass("is-active");
    console.log('tap');
  };

  // sets alt style
  function fkAnimateStyleDefaultToAlt(){
    window.style = "dashed";
    setFkArrowName();
    $('.fk-arrow').addClass('fk-arrow--alt')
    $('#1-tap').addClass('fk-tap--alt');
    $('.fk-carousel').addClass('fk-carousel--alt');
    // update active control class
    $('.fk-controls-style a[data-style="default"]').removeClass("is-active");
    $('.fk-controls-style a[data-style="alt"]').addClass("is-active");
    console.log('alt');
  };

  // sets default style
  function fkAnimateStyleAltToDefault(){
    window.style = "";
    setFkArrowName();
    $('.fk-arrow').removeClass('fk-arrow--alt')
    $('#1-tap').removeClass('fk-tap--alt');
    $('.fk-carousel').removeClass('fk-carousel--alt');
    // update active control class
    $('.fk-controls-style a[data-style="alt"]').removeClass("is-active");
    $('.fk-controls-style a[data-style="default"]').addClass("is-active");
    console.log('default');
  };

  // sets direction right
  function fkAnimateDirectionRight(){
    window.dir1 = "right";
    $('.fk-arrow').addClass('fk-arrow--direction-right')
    $('.fk-arrow').removeClass('fk-arrow--direction-down')
    $('.fk-arrow').removeClass('fk-arrow--direction-left')
    $('.fk-arrow').removeClass('fk-arrow--direction-up')
    // update active control class
    $('.fk-controls-direction a[data-direction="right"]').addClass("is-active");
    $('.fk-controls-direction a[data-direction="left"]').removeClass("is-active");
    $('.fk-controls-direction a[data-direction="up"]').removeClass("is-active");
    $('.fk-controls-direction a[data-direction="down"]').removeClass("is-active");
  };

  // sets direction down
  function fkAnimateDirectionDown(){
    window.dir1 = "down";
    $('.fk-arrow').addClass('fk-arrow--direction-down')
    $('.fk-arrow').removeClass('fk-arrow--direction-up')
    $('.fk-arrow').removeClass('fk-arrow--direction-left')
    $('.fk-arrow').removeClass('fk-arrow--direction-right')
    // update active control class
    $('.fk-controls-direction a[data-direction="right"]').removeClass("is-active");
    $('.fk-controls-direction a[data-direction="left"]').removeClass("is-active");
    $('.fk-controls-direction a[data-direction="up"]').removeClass("is-active");
    $('.fk-controls-direction a[data-direction="down"]').addClass("is-active");
  };

  // sets direction left
  function fkAnimateDirectionLeft(){
    window.dir1 = "left";
    $('.fk-arrow').addClass('fk-arrow--direction-left')
    $('.fk-arrow').removeClass('fk-arrow--direction-up')
    $('.fk-arrow').removeClass('fk-arrow--direction-down')
    $('.fk-arrow').removeClass('fk-arrow--direction-right')
    // update active control class
    $('.fk-controls-direction a[data-direction="right"]').removeClass("is-active");
    $('.fk-controls-direction a[data-direction="left"]').addClass("is-active");
    $('.fk-controls-direction a[data-direction="up"]').removeClass("is-active");
    $('.fk-controls-direction a[data-direction="down"]').removeClass("is-active");
  };

  // sets direction up
  function fkAnimateDirectionUp(){
    window.dir1 = "up";
    $('.fk-arrow').addClass('fk-arrow--direction-up')
    $('.fk-arrow').removeClass('fk-arrow--direction-left')
    $('.fk-arrow').removeClass('fk-arrow--direction-down')
    $('.fk-arrow').removeClass('fk-arrow--direction-right')
    // update active control class
    $('.fk-controls-direction a[data-direction="right"]').removeClass("is-active");
    $('.fk-controls-direction a[data-direction="left"]').removeClass("is-active");
    $('.fk-controls-direction a[data-direction="up"]').addClass("is-active");
    $('.fk-controls-direction a[data-direction="down"]').removeClass("is-active");
  };


  // controls for the demo flow
  ////////////////////////////////////////////////////////////////////////////////////
  // close modal
  $('.fk-flow-demo-modal').on("click", function (e) {
    fkDismissModal();
  });

  // flow demo hit 1
  $('.fk-flow-demo-hit1').on("click", function (event) {
    // update values for modal
    $('.fk-value1').text('Circle');
    $('.fk-value2').text('None');
    // set proper active class
    $('.fk-flow-demo-hit1').addClass('fk-flow-demo-hit--is-active');
    $('.fk-flow-demo-hit2').removeClass('fk-flow-demo-hit--is-active');
    $('.fk-flow-demo-hit3').removeClass('fk-flow-demo-hit--is-active');
    // remove pulsing class
    $('.fk-flow-demo-hit1').removeClass('fk-is-pulsing');
    $('.fk-flow-demo-hit2').addClass('fk-is-pulsing');
    $('.fk-flow-demo-hit3').addClass('fk-is-pulsing');
    // fade other flow pieces
    $('.fk-flow-demo-flow1').removeClass('fk-faded');
    $('.fk-flow-demo-flow2').addClass('fk-faded');
    $('.fk-flow-demo-flow3').addClass('fk-faded');
    // fade out current position
    $('.fk-flow-demo-modal').removeClass('fk-flow-demo-modal--fade-in');
    $('.fk-flow-demo-modal').addClass('fk-flow-demo-modal--fade-out');
    // wait until fadeout is done then reposition
    setTimeout(function(){
      $('.fk-flow-demo-modal').addClass('fk-flow-demo-modal-pos1');
      $('.fk-flow-demo-modal').removeClass('fk-flow-demo-modal-pos2');
      $('.fk-flow-demo-modal').removeClass('fk-flow-demo-modal-pos3');
    }, 200);
    // after repositioned, fade in
    setTimeout(function(){
      $('.fk-flow-demo-modal').removeClass('fk-flow-demo-modal--fade-out');
      $('.fk-flow-demo-modal').addClass('fk-flow-demo-modal--fade-in');
    }, 400);
  });

  // flow demo hit 2
  $('.fk-flow-demo-hit2').on("click", function (event) {
    // update values for modal
    $('.fk-value1').text('None');
    $('.fk-value2').text('Arrow');
    // set proper active class
    $('.fk-flow-demo-hit1').removeClass('fk-flow-demo-hit--is-active');
    $('.fk-flow-demo-hit2').addClass('fk-flow-demo-hit--is-active');
    $('.fk-flow-demo-hit3').removeClass('fk-flow-demo-hit--is-active');
    // remove pulsing class
    $('.fk-flow-demo-hit1').addClass('fk-is-pulsing');
    $('.fk-flow-demo-hit2').removeClass('fk-is-pulsing');
    $('.fk-flow-demo-hit3').addClass('fk-is-pulsing');
    // fade other flow pieces
    $('.fk-flow-demo-flow1').addClass('fk-faded');
    $('.fk-flow-demo-flow2').removeClass('fk-faded');
    $('.fk-flow-demo-flow3').addClass('fk-faded');
    // fade out current position
    $('.fk-flow-demo-modal').removeClass('fk-flow-demo-modal--fade-in');
    $('.fk-flow-demo-modal').addClass('fk-flow-demo-modal--fade-out');
    // wait until fadeout is done then reposition
    setTimeout(function(){
      $('.fk-flow-demo-modal').removeClass('fk-flow-demo-modal-pos1');
      $('.fk-flow-demo-modal').addClass('fk-flow-demo-modal-pos2');
      $('.fk-flow-demo-modal').removeClass('fk-flow-demo-modal-pos3');
    }, 200);
    // after repositioned, fade in
    setTimeout(function(){
      $('.fk-flow-demo-modal').removeClass('fk-flow-demo-modal--fade-out');
      $('.fk-flow-demo-modal').addClass('fk-flow-demo-modal--fade-in');
    }, 400);

  });

  // flow demo hit 3
  $('.fk-flow-demo-hit3').on("click", function (event) {
    // update values for modal
    $('.fk-value1').text('Decision');
    $('.fk-value2').text('Arrow');
    // set proper active class
    $('.fk-flow-demo-hit1').removeClass('fk-flow-demo-hit--is-active');
    $('.fk-flow-demo-hit2').removeClass('fk-flow-demo-hit--is-active');
    $('.fk-flow-demo-hit3').addClass('fk-flow-demo-hit--is-active');
    // remove pulsing class
    $('.fk-flow-demo-hit1').addClass('fk-is-pulsing');
    $('.fk-flow-demo-hit2').addClass('fk-is-pulsing');
    $('.fk-flow-demo-hit3').removeClass('fk-is-pulsing');
    // fade other flow pieces
    $('.fk-flow-demo-flow1').addClass('fk-faded');
    $('.fk-flow-demo-flow2').addClass('fk-faded');
    $('.fk-flow-demo-flow3').removeClass('fk-faded');
    // fade out current position
    $('.fk-flow-demo-modal').removeClass('fk-flow-demo-modal--fade-in');
    $('.fk-flow-demo-modal').addClass('fk-flow-demo-modal--fade-out');
    // wait until fadeout is done then reposition
    setTimeout(function(){
      $('.fk-flow-demo-modal').removeClass('fk-flow-demo-modal-pos1');
      $('.fk-flow-demo-modal').removeClass('fk-flow-demo-modal-pos2');
      $('.fk-flow-demo-modal').addClass('fk-flow-demo-modal-pos3');
    }, 200);
    // after repositioned, fade in
    setTimeout(function(){
      $('.fk-flow-demo-modal').removeClass('fk-flow-demo-modal--fade-out');
      $('.fk-flow-demo-modal').addClass('fk-flow-demo-modal--fade-in');
    }, 400);
  });

  function fkDismissModal (){
    // set proper active class
    $('.fk-flow-demo-hit1').removeClass('fk-flow-demo-hit--is-active');
    $('.fk-flow-demo-hit2').removeClass('fk-flow-demo-hit--is-active');
    $('.fk-flow-demo-hit3').removeClass('fk-flow-demo-hit--is-active');
    // remove pulsing class
    $('.fk-flow-demo-hit1').addClass('fk-is-pulsing');
    $('.fk-flow-demo-hit2').addClass('fk-is-pulsing');
    $('.fk-flow-demo-hit3').addClass('fk-is-pulsing');
    // fade other flow pieces
    $('.fk-flow-demo-flow1').addClass('fk-faded');
    $('.fk-flow-demo-flow2').addClass('fk-faded');
    $('.fk-flow-demo-flow3').addClass('fk-faded');
    // fade out current position
    $('.fk-flow-demo-modal').removeClass('fk-flow-demo-modal--fade-in');
    $('.fk-flow-demo-modal').addClass('fk-flow-demo-modal--fade-out');
  };

  //Dynamic copyright in the footer
  var now = new Date();
  var year = now.getFullYear();
  $('.copyright').text('©'+year);


  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  newdate = day + " " + GetMonthName(month) + ", " + year;
  newdatePlusYear = day + " " + GetMonthName(month) + ", " + (year+1);

  function GetMonthName(monthNumber) {
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return months[monthNumber - 1];
  }

  $('.fk-license-date').text(newdate);
  $('.fk-license-date-plus-year').text(newdatePlusYear);


  ///////////////////////////////////////////////////////////////
  // Video Trailer
  ///////////////////////////////////////////////////////////////


  // Get Wistia's API
  window._wq = window._wq || [];
  _wq.push({ id: "tofi9zegwu", onReady: function(video) {

    console.log("_wq.push worked", video)

  }});


  ///////////////////////////////////////////////////////////////
  // Event Tracking
  ///////////////////////////////////////////////////////////////

  // CTA Events
  $('header .fk-cta-primary').click(function(){ _gs('event', 'Header Primary Clicked') });
  $('footer .fk-cta-primary').click(function(){ _gs('event', 'Footer Buy Clicked') });
  $('.fk-decision .fk-cta-primary').click(function(){ _gs('event', 'Large Decision Buy Clicked') });
  $('.fk-decision .fk-cta-secondary').click(function(){ _gs('event', 'Large Decision Preview Clicked') });
  // Flow Demo Events
  $('.fk-play-btn').click(function(){ _gs('event', 'Clicked Play Button') });
  $('.fk-flow-demo-hit1').click(function(){ _gs('event', 'Flow Demo 1') });
  $('.fk-flow-demo-hit2').click(function(){ _gs('event', 'Flow Demo 2') });
  $('.fk-flow-demo-hit3').click(function(){ _gs('event', 'Flow Demo 3') });
  // Carousel Events
  $('.fk-arrow').click(function(){ _gs('event', 'Carousel Arrow Clicked') });
  $('.fk-cycle-prev').click(function(){ _gs('event', 'Carousel Prev Clicked') });
  $('.fk-cycle-next').click(function(){ _gs('event', 'Carousel Next Clicked') });
  $('.fk-controls-type a').click(function(){ _gs('event', 'Carousel Type Changed') });
  $('.fk-controls-direction a').click(function(){ _gs('event', 'Carousel Direction Changed') });
  $('.fk-controls-style a').click(function(){ _gs('event', 'Carousel Style Changed') });

});
