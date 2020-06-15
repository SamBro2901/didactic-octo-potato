function calculate()
{
    //Constants
    var min_xp_gain_per_message = 15;
    var max_xp_gain_per_message = 25;

    //Input from user
    var current_level = document.getElementById("current-level").value;
    var current_xp = document.getElementById("current-xp").value;
    var desired_level = document.getElementById("desired-level").value;
    
    //Magical math functions
    var xp = 0;
    for(i = current_level; i<desired_level; i++){
        xp = xp + 5*Math.pow(i, 2) + 50*i + 100;
    }
    var xp_needed = xp-current_xp;

    //Minimum, average, and maximum messages needed to send in order to reach specified level
    var min_messages_needed_to_send = Math.ceil(xp_needed / max_xp_gain_per_message);
    var avg_messages_needed_to_send = Math.ceil(xp_needed / ((min_xp_gain_per_message + max_xp_gain_per_message) / 2));
    var max_messages_needed_to_send = Math.ceil(xp_needed / min_xp_gain_per_message);

    if(xp_needed<0 || current_level<0 || desired_level<0 || current_xp<0){
        min_messages_needed_to_send = "_";
        avg_messages_needed_to_send = "_";
        max_messages_needed_to_send = "_";
        xp_needed = "_";
        document.getElementById("error").innerHTML = "Please make sure the values you have entered are correct!"
    }else{
        document.getElementById("error").innerHTML = "";
    }

    //Display information to user
    document.getElementById("result-average").innerHTML = avg_messages_needed_to_send;
    document.getElementById("result-xp-needed").innerHTML = xp_needed;
    document.getElementById("result-minimum-messages-requirement").innerHTML = min_messages_needed_to_send;
    document.getElementById("result-maximum-messages-requirement").innerHTML = max_messages_needed_to_send;
}
