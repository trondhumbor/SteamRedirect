function getUrlVars() {
    var vars = {};

    //regexes are hard things to understand, but i think i've got this right
    //g = global match
    //i = ignore case

    //[\?&]+([^=&]+) match what follows ? or & untill we meet a = or &
    //([^&]*) match what follows = untill we meet a &


    var regex = /[\?&]+([^=&]+)=([^&]*)/gi;


    var parts = window.location.href.replace(regex,

        function(m, key, value) {
            vars[key] = value;
        }
    
    );
    return vars;
}

window.location = getUrlVars()["url"];