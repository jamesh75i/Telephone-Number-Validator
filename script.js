function telephoneCheck(str){
    let trueorfalse;
    //keep checking back on for the bracket check
    let processedNumber = str.replace(/-| /g, "");
    //where the word will be saved after bracket removal
    let word = "";


    for(let i = 0; i < processedNumber.length; i++)
    {
        //console.log(processedNumber[i]);
        if(processedNumber[i] === "(") 
        {
         //console.log("bracket Found!");
          if(processedNumber[0] === "1"){
            //console.log("Does Character 1 start with a 1?");
            if(processedNumber[1] === "("){
                console.log("If it does is there a bracket in the next place");
            }
            else{
              //Must be false if the bracket is at this location
              trueorfalse = false;
              break;
            }
          }
          else if(processedNumber[0] === "("){
            //console.log("Is the ( in the 0 position if so that is okay");
            if(processedNumber[4] === ")"){

            }
            else{
                //Set it false as the locations of the brackets are not right
                trueorfalse = false
                break;
            }
          }
          else{
            //Set it false as the locations of the brackets are not right
            trueorfalse = false
            break;
          }
        }
        //A )  Bracket has been found
        else if(processedNumber[i] === ")"){
            //console.log("FOUND A )");
            if(processedNumber[0] === "1")
            {
                //Is the left bracket here
                if(processedNumber[1] === "("){
                    //If so the right bracket will be here
                    if(processedNumber[5] === ")"){
                        //If so it won't be saved to the word
                    }
                    else{
                        trueorfalse = false;
                        break;
                    }
                }
                else{
                    //Set it false as the locations of the brackets are not right
                    trueorfalse = false;
                }
            }
            // The right bracket must be at postion 4
            //the left bracket at 0
            else if(processedNumber[4] === ")"){
                if(processedNumber[0] === "("){
                    //it will remove the bracket from the word
                }
                else{
                    trueorfalse = false;
                    break;
                }
            }
            else{
                trueorfalse = false;
                break;
            }
        }
        else
        {
            word += processedNumber[i];
        }
    }
   

   
    if(str[0] === "-"){
        //Work around for the dash
        return false;
    }
    else if(trueorfalse === false){
        //Failed the bracek test
        return false;
    }
    if(word.length === 10){
        //Length is 10 
        return true;
    }
    else if(word.length === 11 && word[0] === "1"){
        //11 and the first digit is 1
        return true;
    }
    else{
        //NO Good it is false
        return false;
    } 

}
