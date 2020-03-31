$(document).ready(function(){
    
    


    $("form").submit(function(event){
        event.preventDefault();
        var input = ($("#input").val());
        var newSentence = input.split("");
        var finalSentence = [];
        var vowels = ["a", "e", "i", "o", "u" ,"y"]
        $("#form").hide()

        newSentence.forEach(function(letter){
            if (vowels.includes(letter)){
                letter = "-";
                finalSentence.push(letter)
            }else {
                finalSentence.push(letter);
            }

        })

        console.log(finalSentence);
        finalSentence.forEach(function(finalFinalSentence){
           $(finalFinalSentence).text("#result");
        })




    })
















})