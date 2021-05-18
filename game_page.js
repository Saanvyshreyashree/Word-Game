p1_name=localStorage.getItem("player1_name");
p2_name=localStorage.getItem("player2_name");

p1_score=0;
p2_score=0;

document.getElementById("player1_name").innerHTML=p1_name+" : ";
document.getElementById("player2_name").innerHTML=p2_name+" : ";

document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;

document.getElementById("player_question").innerHTML="question turn - "+ p1_name;
document.getElementById("player_answer").innerHTML="answer turn - "+ p2_name;

function send()
{
    get_word=document.getElementById("word").value;

    word=get_word.toLowerCase();

    c1=word.charAt(1);

    m=Math.floor(word.length/2);

    c2=word.charAt(m);

    l=word.length-1;

    c3=word.charAt(l);

    remove_c1=word.replace(c1,"_");

    remove_c2=remove_c1.replace(c2,"_");

    remove_c3=remove_c2.replace(c3,"_");

    question="<h4 id='word_display'> Q. "+ remove_c3+ "</h4>";

    input_box="<br> Answer : <input type='text' id='input_check_box'>";

    check_button="<br> <br> <button class='btn btn-info' onclick='check()'> check </button>";

    row=question+input_box+check_button;

    document.getElementById("output").innerHTML=row;

    document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";
function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();

    if (answer==word)
    {
        if (answer_turn=="player1")
        {
            p1_score=p1_score+1;
            document.getElementById("player1_score").innerHTML=p1_score;

        }
        else
        {
            p2_score=p2_score+1;
            document.getElementById("player2_score").innerHTML=p2_score;
        }

    }

    if (question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="question turn- "+p2_name;
    } 
    else
    {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="question turn- "+p1_name;
    }

    if (answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="answer turn- "+p2_name;
    } 
    else
    {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="answer turn- "+p1_name;
    }
    document.getElementById("output").innerHTML="";
}