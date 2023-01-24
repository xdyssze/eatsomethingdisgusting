//import jQuery from '../js/jquery-3.6.3.min.js';
// variabler
// att göra, 
cookingJSON = {
    "methods": {
        "ingredientsPrep": ["Smält", "Skala och hacka", "Hacka", "Skala", "Tvätta", "Diska", "Dränk", "Skjut", "Skär", "Ät", "Drick", "Mata", "Dra i", "Ha samlag med", "Peta på", "Skaka", "sparka"],
        "ingredientsPour": ["blanda", "häll", "tvinga", "hota", "tryck", "misshandla", "lura", "blackmaila", "vispa"],
        "inForm": ["blanda", "skaka", "slå", "diska", "skrik på", "ge betyg till", "dunka", "runka", "klunka"],
        "cooking": ["stek", "koka", "mikra", "grilla", "soltorka", "värp"],
    
        "specialCooking": {
            "0": "Stoppa in i diskmaskinen och diska i 2-3 timmar på högsta värmen.",
            "1": "Stoppa in i tvättmaskinen och låt tvättas under normalprogram",
            "2": "Skrik på och bedöm ingredienserna i circa 2-3 minuter tills dem börjar gråta",
            "3": "Låt ingredienserna marinera i sitt egna svett i torkskåp under 3-4 månader"
        }  
    },
    "measurements": {
        "loose": ["g", "mg", "hg", "kg", "ton"],
        "liquids": ["badkar", "ml", "cl", "dl", "l", "kubikmeter"],
        "solids": ["st", "^2st", "^3st", "^4st"],
        "others": ["gay"],
        "time": ["milisekunder", "sekunder", "minuter", "timmar", "dagar", "veckor", "månader", "år", "decenium", "millenium", "måncyklar"],
        "container": ["en diskmaskin", "en tvättmaskin", "en bunke", "en kastrull", "en stekpanna", "en mikrovågsugn", "ett handfat", "ett fat", "ett oljefat", "en skål", "fågelholk"]
    },
    "ingredients": {
        "loose": ["mjöl", "havre", "kokos", "fiskfilé", "hår", "malet socker", "kakao", "choklad", "grus", "kokain", "amfetamin", "sand", "jord", "strösocker", "peppar", "salt", "curry", "kalksten"],
        "liquids": ["slajm", "urin", "diskvatten", "cum", "vatten", "lättmjölk", "mellanmjölk", "hårdmjölk", "grädde", "diskmedel", "bubbelvatten", "ica egna cola", "beundran", "sirap", "havsvatten", "grundvatten", "blod", "brännvin", "cement"],
        "solids": ["barn", "alvedon novum", "ägg", "medelålders pappor", "bussar", "bilar", "fabriker", "manliga könsorgan", "kvinliga könsorgan", "mikrovågsugn", "buljong", "kartong", "bensinmack", "skruv", "fågel", "sengångare"],
        "others": ["gay"]

    }
    
};
// är basen och höjden på en pyramid, vad är volymen? svaras i dl"
// funktionen som kallas vid fönsterladdningn
window.onload = (event) => {
    createRecept();
};
// skapa recept funktionen, kallas antingen manuellteller av fönstrets inladdning




function createRecept() {
    var ingredientList = new Ingredients;
    var instructionList = new Instructions(ingredientList);
    instructionList.writeInstructions();
}


// Klasser


class Ingredients {
    // randomizera mängden idgredienser, 
    am;
    ing = {};
    constructor() {
        this.am = Math.floor(Math.random() * 10);
        if(this.am == 0) {
            this.am = 1;
        }

        this.createIngredients();
        this.writeIngredientList();
    };
    // skapar idgredienser och stoppar i array
    createIngredients() {
        for(var i = 0; i < this.am; i++) {
            var ind = randomize("ingredients");
            if(!arrContains(this.ing, ind.item, true)) {
                this.ing[i] = ind;
            } else {
                i--;
            }
            
            //console.log(this.ing[i]);
        }
    }
    // get ingredient name
    getIngredient(ins) {
        return this.ing[ins].item;
    }
    // get ingredient type
    getType(ins) {
        return this.ing[ins].type;
    }
    // skriver ut ingredienser i listan på websidan
    writeIngredientList() {
        console.log(this.ing);
        for(var i = 0; i < this.am; i++) {
            var ingds = document.getElementById("indgs");
            var ing = document.createElement("li");
            ing.classList.add("ingredient");
            var iins = this.ing[i];
            //(console.log(iins);
            var matt = randomize("measurements", iins.type);
            var str = (Math.floor(Math.random() * 100) + " " + matt.item + " " +  iins.item);
            ing.textContent = str;
            ingds.appendChild(ing);
        }    
    }

    
    
};


//hela instructions klassen hanterar att skapa och rita ut instruktioner på skärmen
class Instructions {
    // en array vilka idgredienser som är använda, en som är vilka är preppade, en för objekt vi har tillsatt, tex bunkar. While loop för så länge inte alla ingredienser har användts.
    // 
    running = true;
    ammout = 0;
    left = {};
    obj = "";
    instru = {};
    cooked = false;
    inForm = {};
    prepped = {};
    times = 0;
    lastUsed = 0;
    times2 = 0;
    constructor(iL) {
        this.ammout = iL.am;
        this.left = iL.ing;
        
        
        
        // när man tillsätter saker i bunken så försvinner sakerna från ingredienserna.
        while(this.running) {
            var str;
            var srex = Math.floor(Math.random() * 5 );
            this.times2++;
            
            switch(srex) {
                case 0: {
                    // preppa ingredienser
                    
                    if(defineLength(this.left) != 0 && this.lastUsed != 0) {
                        
                        var it = this.left[Math.floor(Math.random()*(defineLength(this.left)))];
                        if(!arrContains(this.prepped, it.item)) {
                            //console.log(" : " + it);
                            str = (randomize("methods", "ingredientsPrep").item + " " + it.item);
                            this.prepped[defineLength(this.prepped)] = it.item;
                        }
                    }
                    this.lastUsed = 0;
                    break;
                }
                case 1: {
                    //Hälla ingredienser ner i form
                    if(defineLength(this.left) != 0 && this.lastUsed != 1) {
                        var ss = Math.floor(Math.random() * (defineLength(this.left)));
                        var it = this.left[ss];
                        delete this.left[ss]
                        this.left = recreateArray(this.left);
                        var form;
                        this.inForm[defineLength(this.inForm)] = it;
                        if(this.obj != "") {
                            form = this.obj;
                        } else {
                            form = randomize("measurements", "container").item;
                            this.obj = form;
                        
                        }
                        str = (randomize("methods", "ingredientsPour").item + " ner " + it.item + " i " + form);
                    }
                    this.lastUsed = 1;
                    break;
                }
                case 2: {
                    // hälla innehållet av form ner i annan form
                    if(this.obj != "" && this.lastUsed != 2 && defineLength(this.left) == 0) {
                        var it = this.obj;
                        var form = randomize("measurements", "container").item;
                        var way = randomize("methods", "ingredientsPour").item;
                        this.obj = form;
                        str = ( way + " innehållet av " + it.split(" ")[1] + "en ner i " + form);
                    }
                    this.lastUsed = 2;
                    break;
                    
                }
                case 3: {
                    // Göra något i formen
                    if(this.obj != "" && this.lastUsed != 3) {
                        var dos = randomize("methods", "inForm").item;
                        str = (dos + " ingredienserna i " + this.obj.split(" ")[1] + "en");
                    }
                    this.lastUsed = 3;
                    break;
                }
                case 4: {
                    // LAga det som är i formen
                    console.log("left "  + defineLength(this.left));
                    if(defineLength(this.left) == 0 && this.lastUsed != 4) {
                        console.log("left "  + defineLength(this.left)) + "sex?";
                        if(Math.floor(Math.random() * 8) > 5) {
                            str = randomize("methods", "specialCooking").item;
                            this.cooked = true;
                        } else {
                            str = (randomize("methods", "cooking").item + " " + this.obj.split(" ")[1] + "en i " + Math.floor(Math.random() * 200) + " " + randomize("measurements", "time").item);
                            this.cooked = true;
                        }
                    }
                    this.lastUsed = 4;
                    break;
                }
                default: {
                    this.lastUsed = 5;
                    break;
                }
            }
            if(str != undefined) {
            this.instru[this.times] = (str);
            str = undefined;
            this.times++;
            }
            // avslut
            if(this.cooked && defineLength(this.left) == 0) {
                this.instru[this.times] = ("Servera den äckliga rätten");
                
                this.times++;
                this.running = false;
  
            } else if(this.times2 > 999) {
                this.running = false;
            }
            

        }
        

    }
    writeInstructions() {
        
        for(var i = 0; i < this.times; i++) {
            var ingds = document.getElementById("insts");
            var ing = document.createElement("li");
            ing.classList.add("instruction");
            var iins = this.instru[i];
            
            
            ing.textContent = iins;
            ingds.appendChild(ing);
        }  
    }

    
    
}
// en instruktion är baserad på instruktionen före, vad det är för ingredienser, vad man kan göra med idgredienserna samt grammatik, så att den är gramatiskt korrekt



// funktioner
// väljer olika grejor från en array
function randomize(primary, secondary) {
    var type;
    //console.log(primary + secondary)
    if(primary == "ingredients") {
        // retarded och kan ordnas bättre men funkar för nu
        switch(Math.floor(Math.random() * 3)) {
            case 0: {
                secondary = "loose";
                break;
            }
            case 1: {
                secondary = "liquids";               
                break;
            }
            case 2: {
                secondary = "solids";
                break;
            }
            case 3: {
                secondary = "others";
                break;
            }
        }
        type = secondary;

    }

    var sex = cookingJSON[primary][secondary];
    
    var num = Math.floor(Math.random() * defineLength(sex));
    if(num == defineLength(sex)) {
        num--;
    }
    var ret = {"item": sex[num], "type": type};
    return(ret);
}
function defineLength(sex) {
    var count = 0;
    for(var s in sex) {
        if(s != undefined) {
            count++;
        }
    }
    return(count);
}
function recreateArray(arr) {
    var count = 0;
    var newarr = {};
    for(var i = 0; i <= defineLength(arr); i++) {
        if(arr[i] != undefined) {
        newarr[count] = arr[i];
        count++;
        }
    }
    return(newarr);
}
function arrContains(arr, str, sex) {
    var c = false;
    if(!sex) {
        for(var s in arr) {
            if(s == str) {
                c = true;
                return(c);
            }
        }
    } else {
        for(var i = 0; i < defineLength(arr); i++) {
            if(arr.item == str) {
                c = true;
                return(c)
            }
        }
    }
    return(c);
}