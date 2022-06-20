$(document).ready (funciton)({
                    $("#noticias a"). click(function(){
                        let direc=$(this).attr("href")
                    $("#contenidos_externos").load(direc + "#noticias");

                    });
                    return

});