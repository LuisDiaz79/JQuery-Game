var heroeSelected = "";
var gameFinished = false;

$(document).ready(function() {
    var $heroe = $(".heroe"); 
    
    $heroe.on("click", function(){
        heroeSelected = $(this).val();
        $(this).css({"display": "none"});
        console.log("heroeSelected: " + heroeSelected);

        var $myheroe = $(".myheroe"); 

        $myheroe.each(function(index){
            if($(this).attr("value") != heroeSelected){
                $(this).remove()
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
                $(this).remove();
            }
        });
    });

    
    var $attack = $(".attack");
    $attack.on("click", function(){
        if(!gameFinished){
            var enemyAtt = $(this).attr("value");
            console.log(enemyAtt);
            
            var enemyLife = $('#'+enemyAtt+'_life');
            var enemyPow=$('#'+enemyAtt+'_power');
            console.log(enemyLife);
    
            var myLife =  $('#'+heroeSelected+'_life');
            var myPow = $('#'+heroeSelected+'_power');
            var myInc = $('#'+heroeSelected+'_inc');
            console.log(myLife);
            var newLife = parseInt(myLife.text()) - parseInt(enemyPow.text());
            if(newLife <0){
                newLife = 0;
            }
            if(!parseInt(enemyLife.text())<=0){
                var newEneLife = parseInt(enemyLife.text()) - parseInt(myPow.text());
                if(newEneLife < 0){
                    newEneLife =0;
                }
                var newpow = myInc.text().split("-");
                console.log(newpow);
                console.log();
                newpow =  Math.floor(Math.random() * parseInt(newpow[1])) + parseInt(newpow[0]);
                console.log(newpow);
                newpow += parseInt(myPow.text())
        
                console.log(newLife);
                myLife.text(newLife);
                myPow.text(newpow);
                enemyLife.text(newEneLife);
        
        
                var $enemy = $(".enemy"); 
                var totalLife = 0;
                $enemy.each(function(index){
                    var thisEnemy = $(this).attr("value");
                    console.log('>>enemy'+thisEnemy);
                    totalLife += parseInt($('#'+thisEnemy+'_life').text());
                });
        
                if(newLife <= 0 && totalLife <= 0){
                    myLife.text(0);
                    enemyLife.text(0);
                    alert('TIE');
                }else if(totalLife <= 0 ){
                    enemyLife.text(0);
                    gameFinished=true;
                    alert('WIN');
                }else if(newLife <= 0){
                    myLife.text(0);
                    gameFinished=true;
                    alert('LOSE');
                }
            }
            
        }
        
    });


});