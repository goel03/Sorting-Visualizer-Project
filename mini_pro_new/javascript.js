$(document).ready(function () {
    $('#1').click(function () {
        $(".d2 ").hide();
        $(".d3").hide();
        $(".d4 ").hide();
        $(".d5 ").hide();
        $(".d6 ").hide();
        $(".d1").show(); !important
    }
    )
    $('#2').click(function () {
        $(".d1").hide();
        $(".d3").hide();
        $(".d4 ").hide();
        $(".d5 ").hide();
        $(".d6 ").hide();
        $(".d2").show(); !important
    }
    )
    $('#3').click(function () {
        $(".d1").hide();
        $(".d2").hide();
        $(".d4 ").hide();
        $(".d5 ").hide();
        $(".d6 ").hide();
        $(".d3").show(); !important
    }
    )
    $('#4').click(function () {
        $(".d1").hide();
        $(".d3").hide();
        $(".d2 ").hide();
        $(".d5 ").hide();
        $(".d6 ").hide();
        $(".d4").show(); !important
    }
    )
    $('#5').click(function () {
        $(".d1").hide();
        $(".d3").hide();
        $(".d4 ").hide();
        $(".d2 ").hide();
        $(".d6 ").hide();
        $(".d5").show(); !important
    }
    )
    $('#6').click(function () {
        $(".d1").hide();
        $(".d3").hide();
        $(".d4 ").hide();
        $(".d5 ").hide();
        $(".d2 ").hide();
        $(".d6").show(); !important
    }
    )
});
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
