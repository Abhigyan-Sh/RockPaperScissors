function stone_paper_scissors(yourChoice){
    console.log(yourChoice);
    console.log(yourChoice.src);

    var myChoice = yourChoice.id;
    console.log('your choice: '+myChoice);

    var botChoice = eventAssigner(numGenerator());
    console.log('computers choice: '+botChoice);

    var card = scoreCard(myChoice,botChoice);
    console.log(card);

    var finalStatement = conclusion(card);
 // var finalStatement = conclusion(scoreCard(myChoice,botChoice));
    console.log(finalStatement);

    afterClick(yourChoice.id,botChoice,finalStatement);
}
// message and finalStatement are same

function numGenerator(){
        return Math.floor(Math.random() * 3);
    }
function eventAssigner(num){
        return ['rock','scissors','paper'][num];
    }
function scoreCard(yourChoice,botChoice){
        var score = {
            'rock':{'rock':0.5 ,'scissors':1,'paper':0},
            'scissors':{'rock':0 ,'scissors':0.5 ,'paper':1},
            'paper':{'rock':1 , 'scissors':0 ,'paper':0.5} 
        }

        var myScore = score[yourChoice][botChoice];
        var botScore = score[botChoice][yourChoice];

        return [myScore, botScore];
    }
function conclusion([myScore, botScore]){
    if(myScore === 0){
        return {'message':'you have lost','color':'red'};
    }
    else if(myScore === 0.5){
        return {'message':'its a tie','color':'yellow'};
    }
    else{
        return {'message':'you have won','color':'seagreen'};
    }
}

function afterClick(humanImgChoice,botImgChoice,conclusion){
    var imgDatabase = {
        'rock': document.getElementById('rock').src,
        'scissors': document.getElementById('scissors').src,
        'paper': document.getElementById('paper').src
    }
    document.getElementById('rock').remove();
    document.getElementById('scissors').remove();
    document.getElementById('paper').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var finalStatementDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imgDatabase[humanImgChoice] +"' width=200 height=200 style='box-shadow: 0px 10px 50px purple;'>"
    finalStatementDiv.innerHTML = "<h1 style='color: " + conclusion['color'] + "; font-size: 60px; padding:30px; '>" + conclusion['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imgDatabase[botImgChoice] +"' width=200 height=200 style='box-shadow: 0px 10px 50px purple;'>"

    document.getElementById('withinContainer').appendChild(humanDiv);
    document.getElementById('withinContainer').appendChild(finalStatementDiv);
    document.getElementById('withinContainer').appendChild(botDiv);
}
