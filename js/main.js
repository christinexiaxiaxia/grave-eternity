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

$('button').click(function(){

    // BYE BUTTON, BYE CURSOR

    $(this).css({'opacity':'0'});
    $('p.intro').css({'opacity':'0'});

    // ANIMATED SCROLL https://github.com/aamirafridi/jQuery.Marquee
    // https://stackoverflow.com/questions/16475198/jquery-scrolltop-animation

    setTimeout(function(){

        $('.wrapper').marquee({
            speed: 6,
            direction: 'up',
            duplicated: true,
            startVisible: true
        })

    },0)

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
        return text;

    })(); 


    // APPEND IMAGES AND TEXT

    for (var i = 0; i < 500; i++) {

        $('.wrapper').append('<div class="text-container">' + textArray[i] + '"</p></div>');

        $('.wrapper').append(
            $('<div class="img-container"><img src="' + img[i].url + '"></div>')
        )
    }


})







