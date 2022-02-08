const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.setAttribute("style", "top: "+ (e.pageY-75) +"px; left:"+(e.pageX-320) + "px;");
});

// $('.social-links').hover(function(){
//     // $('.link').css('border-color', 'red');
//     // $(this).find('i').css('display', 'none');
// });