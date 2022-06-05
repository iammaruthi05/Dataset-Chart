$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        

    });

    //bar chart starts here...

        new Chart("myChart1", {
            type: "bar",
            data: {
              labels: xValues,
              datasets: [{
                backgroundColor: barColors,
                data: yValues
              }]
            },
            
            options: {
              title: {
                display: true,
                text: "PM MODI Foreign Visits"
              }
            }
          });
    
          //values of bar chart
          var xValues = ["2014 ","","","","","","", "",//7
                         "2015 ","","","","","","","","","","","","","","","","","","","","","","","","","","", "",//26
                         "2016 ","","","","","","","","","","","","","","","","", "",//17
                         "2017 ","","","","","","","","","","","","","","", "",//14
                         "2018 ","","","","","","","","","","","","","","","","",""]; //18

          var yValues = [24527465, 203548000, 134758000, 190460000, 75288333, 75288333, 75288333, 0, 52841666, 52841666, 52841666,
                         104192667, 104192667, 104192667, 50514333, 50514333, 50514333, 19729875, 19729875, 19729875, 19729875, 
                         19729875, 19729875, 59066000, 30782500, 153912500, 46546500, 46546500, 35246500, 35246500, 68281000, 
                         27137000, 27137000, 27137000, 0, 39625500, 39625500, 39625500, 23194333, 23194333, 23194333, 23194333, 
                         23194333, 63278000, 32023500, 32023500, 32023500, 32023500, 32023500, 63594000, 47751000, 130586000, 0, 52404000,
                         41298750, 41298750, 41298750, 41298750, 56508000, 46093667, 46093667, 46093667, 56424000, 56424000, 69390000,
                         69390000, 101168000, 0, 132083000, 23991000, 23991000 ,23991000, 23991000, 35419000, 35419000, 35419000, 60746000,
                         16109298, 72638000, 34061333, 34061333, 34061333, 78356000, 47058667, 47058667, 47058667];

          var barColors = ["red","red","red","red","red","red","red","red",
                           "green","green","green","green","green","green","green","green","green","green","green","green","green",
                           "green","green","green","green","green","green","green","green","green","green","green","green","green","green",
                           "blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue",
                           "blue","blue","blue",
                           "orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange","orange",
                           "orange","orange","orange",
                           "brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown","brown",
                           "brown","brown","brown","brown","brown"];
    
          new Chart("myChart1", {
          type: "bar",
          data: {
          labels: xValues,
          datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      }
    });

   


    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    

});