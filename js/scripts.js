var triangleTracker = function(side) {
  var truthValue = 0;

  if (side[0] > side[1] + side[2] || side[1] > side[0] + side[2] || side[2] > side[1] + side[0]) {
    return "not a triangle"
  }

  if (side[0] === side[1]) {
    truthValue = truthValue + 1;
  } if (side[1] === side[2]) {
    truthValue = truthValue + 1;
  } if (side[0] === side[2]) {
    truthValue = truthValue +1;
  }

  if (truthValue === 3) {
    return "equilateral";
  } else if (truthValue === 1) {
    return "isosceles";
  } else if (truthValue === 0) {
    return "scalene";
  } 
};


// $(document).ready(function() {
//   $("form#triangle").submit(function(event) {
//     var side1s = ($("input#side1").val());
//     var side2s = ($("input#side2").val());
//     var side3s = ($("input#side3").val());
//     var side1 = parseInt($("input#side1").val());
//     var side2 = parseInt($("input#side2").val());
//     var side3 = parseInt($("input#side3").val());
//     var sides_s = (side1s + ", " + side2s + ", " + side3s)
//     var sides = [side1, side2, side3];
//     var result = triangleTracker(sides);
//
//     $(".result").text(result);
//     $(".sides").text(sides_s);
//
//     $("#result").show();
//     event.preventDefault();
// });


// var leapYear = function(year) {
//   if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   } else if (year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// $(document).ready(function() {
//   $("form#triangle").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//     if (!result) {
//       $(".not").text("not");
//     }
//     else if (result) {
//       $(".not").hide();
//     }
//     $("#result").show();
//     event.preventDefault();
//   });
// });
