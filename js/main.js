// CONTINUOUS LOOPING PAGE https://stackoverflow.com/questions/16993693/continuous-looping-page-not-infinite-scroll

// $('document').ready(function() {
// 	$(document).scroll(function(){
// 		if(document.documentElement.clientHeight + 
// 			$(document).scrollTop() >= document.body.offsetHeight 
// 		)$(document).scrollTop(0);
//     });
// }); 

// SPLIT ARRAY https://www.geeksforgeeks.org/javascript-string-prototype-split-function/
// SPLIT TEXT BUT KEEP DELIMITERS https://stackoverflow.com/questions/2206378/how-to-split-a-string-but-also-keep-the-delimiters

// SPLIT TEXT

const fileUrl = '../data/text.txt' // provide file location

fetch(fileUrl)
   .then( r => r.text() )
   .then( t => {
    textArray = t.split("</p>")    
    console.log(textArray.length)
})


// BUTTON CLICK STUFF

// $('button').click(function(){

    // BYE BUTTON, BYE CURSOR

    $(this).css({'opacity':'0','height':'0'});
    $('button img').css({'height':'0'});
    $('*').css({'cursor':'none'});
    $('p').css({'cursor':'none'});
    $('a').css({'cursor':'none'})


    // ANIMATED SCROLL https://github.com/aamirafridi/jQuery.Marquee
    // https://stackoverflow.com/questions/16475198/jquery-scrolltop-animation

    var body = $("html, body");

    // setTimeout(function(){

        $('.wrapper').marquee({
            speed: 1,
            // delayBeforeStart: 0, // not working...
            direction: 'up',
            duplicated: true,
            startVisible: true
        })

    // },7000)

    // LOAD DATA INTO VARIABLE https://stackoverflow.com/questions/2177548/load-json-into-variable

    var img = (function () {
        var img = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "../data/img.json",
            'dataType': "json",
            'success': function (data) {
                img = data;
            }
        });
        return img;


    })(); 

    var text = (function () {
        var text = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "../data/text-array.txt",
            'dataType': "text",
            'success': function (data) {
                text = data;
            }
        });
        // console.log(text)
        return text;

    })(); 

    // console.log('Image Data:', img[0].url)

    // console.log(text[2]);


    // APPEND IMAGES AND TEXT

    // $('.wrapper').append('<div class="text-container"><p src="' + text + '"></p></div>');

    for (var i = 0; i < 500; i++) {

        $('.wrapper').append('<div class="text-container">' + textArray[i] + '"</p></div>');

        $('.wrapper').append(
            $('<div class="img-container"><img src="' + img[i].url + '"></div>')
        )
    }


// })







