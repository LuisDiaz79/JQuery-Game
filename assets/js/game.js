var char = {
    name : "",
    life : 0,
    power: 0,
    inc : 0
}
var enemies =[];

$(document).ready(function() {
    var $heroe = $(".heroe"); 
    var heroeSelected = "";
    $heroe.on("click", function(){
        heroeSelected = $(this).val();
        console.log("heroeSelected: " + heroeSelected);

        var $myheroe = $(".myheroe"); 

        $myheroe.each(function(index){
            if($(this).attr("value") != heroeSelected){
                $(this).css({"display": "none"});
                console.log($(this).attr("power"));
                var tmpEnemy ={
                    name : $(this).attr("value"),
                    life : $(this).attr("life"),
                    power : $(this).attr("power"),
                    inc : $(this).attr("inc")
                }
                enemies.push(tmpEnemy);
            }else{
                char.name = $(this).attr("valnameue");
                char.life = $(this).attr("life");
                char.power = $(this).attr("power");
                char.inc = $(this).attr("inc");
            }
        });

        var $enemy = $(".enemy"); 
        console.log("ENEMY");
        console.log($enemy);
        $enemy.each(function(index){
            console.log($(this).attr("value"));
            if($(this).attr("value") != heroeSelected){
                console.log(true);
                $(this).css("display", "inline");
                
            }else{
                console.log(false);
                $(this).css({"display": "none"});
            }
        });
        console.log(enemy);
    });

    var $attack = $(".attack");
    $attack.on("click", function(){
        
    });

});