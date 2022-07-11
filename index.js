function generate_dice()
{
    if( typeof generate_dice.c1 == 'undefined' && typeof generate_dice.p1 == 'undefined') 
    {
        generate_dice.c1 = 0;
        generate_dice.p1 = 0;
    }
   
    if( typeof generate_dice.c2 == 'undefined' &&  typeof generate_dice.p2 == 'undefined') 
    {
        generate_dice.c2 = 0;
        generate_dice.p2 = 0;
    }
    var no1 =  Math.floor(Math.random()*6)+1;
    var rand_dice1 = "images/dice" + no1 + ".png";
    document.querySelector(".dice1").getAttribute;
    document.querySelector(".dice1").setAttribute("src", rand_dice1);

    var no2 =  Math.floor(Math.random()*6)+1;
    var rand_dice2 = "images/dice" + no2 + ".png";
    document.querySelector(".dice2").getAttribute;
    document.querySelector(".dice2").setAttribute("src", rand_dice2);

    generate_dice.p1+=no1
    generate_dice.p2+=no2;  
    
    if(no1===no2)
    {
        document.querySelector("h1").innerHTML = "✌️Draw✌️";
        document.querySelectorAll(".dice")[0].classList.add("winner");
        document.querySelectorAll(".dice")[1].classList.add("winner");
        ++generate_dice.c1;
        ++generate_dice.c2;
    }
    else if(no1>no2)
    {
        document.querySelector("h1").innerHTML = "✌️player 1 won";
        document.querySelectorAll(".dice")[0].classList.add("winner");
        document.querySelectorAll(".dice")[1].classList.remove("winner");
        ++generate_dice.c1;
    }
    else
    {
        document.querySelector("h1").innerHTML = "player 2 won✌️";
        document.querySelectorAll(".dice")[0].classList.remove("winner");
        document.querySelectorAll(".dice")[1].classList.add("winner");
        ++generate_dice.c2;
    }

    var score = "score: " +generate_dice.c1+ " - " +generate_dice.c2;
    document.querySelector("h2.score").innerHTML = score;

    var points = "points: " +generate_dice.p1+ " - " +generate_dice.p2;
    document.querySelector("h2.points").innerHTML = points;
}
