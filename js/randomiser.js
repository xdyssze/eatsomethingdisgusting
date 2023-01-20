//import jQuery from '../js/jquery-3.6.3.min.js';
// variabler
cookingJSON = {
    "methods": {
        "ingredientsPrep": ["smält", "skala och hacka", "hacka", "skala", "tvätta", "diska", "dränk", "skjut", "skär", "ät", "drick", "mata", "dra i", "ha samlag", "peta på", "skaka"],
        "ingredientsPour": ["blanda", "häll", "tvinga", "hota", "tryck", "misshandla", "lura", "blackmaila"],
        "inForm": ["blanda", "skaka", "slå", "diska", "skrik på", "ge betyg till"],
        "cooking": ["stek", "koka", "mikra", "grilla", "soltorka", "värp"],
    
        "specialCooking": {
            "0": "Stoppa in i diskmaskinen och diska i 2-3 timmar på högsta värmen.",
            "1": "Stoppa in i tvättmaskinen och låt tvättas under normalprogram",
            "2": "Skrik på och bedöm ingredienserna i circa 2-3 minuter tills dem börjar gråta"
        }  
    },
    "measurements": {
        "loose": ["g", "mg", "hg", "kg", "ton"],
        "liquids": ["badkar", "ml", "cl", "dl", "l", "kubikmeter", " är basen och höjden på en pyramid, vad är volymen? svaras i dl"],
        "solids": ["st", "^2st", "^3st", "^4st"],
        "others": ["gay"],
        "time": ["milisekunder", "sekunder", "minuter", "timmar", "dagar", "veckor", "månader", "år", "decenium", "millenium", "måncyklar"],
        "container": ["diskmaskin", "tvättmaskin", "mellanstor bunke", "liten bunke", "stor bunke", "kastrull", "stekpanna", "mikrovågsugn", "handfat", "fat", "oljefat", "skål"]
    },
    "ingredients": {
        "loose": ["mjöl", "havre", "kokos", "fiskfilé", "hår", "malet socker", "kakao", "choklad", "grus", "kokain", "amfetamin", "sand", "jord", "strösocker", "peppar", "salt", "curry"],
        "liquids": ["slajm", "urin", "diskvatten", "cum", "vatten", "lättmjölk", "mellanmjölk", "hårdmjölk", "grädde", "diskmedel", "bubbelvatten", "ica egna cola", "beundran", "sirap", "havsvatten", "grundvatten", "blod", "brännvin"],
        "solids": ["barn", "alvedon novum", "ägg", "medelålders pappor", "bussar", "bilar", "fabriker", "manliga könsorgan", "kvinliga könsorgan", "mikrovågsugn", "buljong", "kartong", "bensinmack"],
        "others": ["gay"]

    }
};
// funktionen som kallas vid fönsterladdningn
window.onload = (event) => {
    createRecept();
};
// skapa recept funktionen, kallas antingen manuellteller av fönstrets inladdning




function createRecept() {
    var ingredientList = new Ingredients;
    var instructionList = new Instructions(ingredientList);
}


// Två klasser för båda grejor, recept klass inheritar både ingredients och instructions.





class Ingredients {
    // randomizera mängden idgredienser, 
    am;
    in = {};
    constructor() {
        am = Math.floor(Math.random() * 10);
        this.createIngredients;
    };
    createIngredients() {
        for(var i = 0; i < this.am; i++) {
            this.in[i] = new Ingredient;
        }
    }
    getIngredient(ins) {
        return this.in[ins].inN;
    }
    getType(ins) {
        return this.in[ins].iT;
    }

    
    
};
// ingredient

class Ingredient extends Randomize {
    inN;
    iT;
    constructor() {
        this.nn = 
        
    };
    setType() {
    }
    
};
class Instructions {

    constructor(iL) {

    }
    
}

function randomize(primary, secondary) {
    cookingJSON[primary].

}


function writeListItems() {
    

}
