const cambio = (n) => {
    for(let i=1;i<7;i++){
        document.querySelector('#block'+i).className='block';
        document.querySelector('#item'+i).className='item'+i;  
    }
document.querySelector('#block'+n).classList.toggle('inblock');
document.querySelector('#item'+n).className='items';
}


function Scroll (){
    document.querySelector(".nav2").classList.toggle('nav1');
    document.querySelector(".transicion-on").classList.toggle('transicion-off');
}





$(document).ready(function () {
    $("#btn-pop-up").click(function () {
        $(".pop").fadeIn(300);
        positionPopup();
    });
    $("span").click(function () {
        $(".pop").fadeOut(300);
    });
  });


  $(document).ready(function () {
    $("#btn-pop-upmovimiento2").click(function () {
        $(".pop").fadeIn(300);
        positionPopup();
    });
    $("span").click(function () {
        $(".pop").fadeOut(300);
    });
  });
