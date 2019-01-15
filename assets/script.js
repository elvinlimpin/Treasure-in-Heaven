
$(document).ready(()=>{

    // Flags
    step = 0
    xFlag = false       // flag to reload


    // Fade in the Title Div in the beginning
    $("#back").click(()=>{ 
        $("#about-div").fadeOut(()=>{
            $("#title-div").fadeIn(600, "swing", ()=>
            $("#btn-div").fadeIn("fast", "swing"))
        })
    }).click()

    // Make the buttons bigger on hover
    hoverButtons()

    // when about is clicked
    $("#about").click(()=>
        $("#btn-div").fadeOut(()=>
            $("#title-div").fadeOut(()=>{
                $("#about-div").fadeIn(()=>{
                    $("#q1").fadeIn("slow")
                })
            })
        )
    )

    // when begin is clicked
    $("#begin").click(()=>{
        $("#btn-div").fadeOut(()=>
            $("#title-div").fadeOut(()=>{
                makeForm()
            })
        )
    })

        // when form submit is clicked
    $("#form-submit").click(()=>{

        // gets the day from the string in #form-select value
        let value = $("#form-select").val()
        if(value[1] === " ") value = value[0]
        else value = "" + value[0] + value[1]

        // initializes the prayer div
        $("#select-div").fadeOut("slow", ()=>{
            $("#prayer-div").fadeIn(()=>{
                $("#p-target").fadeIn()
                startPrayer(value)
            })
        })
    })
})

function makeForm(){

    // initializing prayer div
    $("#select-div").fadeIn()
    $("#q2").fadeIn(2000)
    $("#form-select").append("<option id=\"select-head\">Select Your Day</option>")

    // creates the dropdown from info in data.js
    for(let i = 0; i < 8; i++){
        let header = "<optgroup label=\"" + DATA.prefix["t" + i] + "\">"
        let days = []
        for(let j = 0; j < 5; j++){
            let currentDay = i*5 + j + 1
            days[j] =
                "<option>"
                + currentDay
                + " ("
                + DATA.scripture["day" + currentDay].reference
                + ")</option>"
        }
        $("#form-select").append(
            header, days[0], days[1], days[2], days[3], days[4]);
    }
        // disables the default selection on click
        $("#form-select").click(()=>{
            $("#form-submit").fadeIn()
            $("#select-head").attr("disabled",'')
        }
        )
}

/** Function for when any button is hovered on */
function hoverButtons(){
    let buttonArray = []
    $(".btn").each((index, e)=>{
        if(!$(e).hasClass("pass")) buttonArray.push(e.id)
    })
    for(let i = 0; i < buttonArray.length; i++){
        const target = $("#" + buttonArray[i])

        target.hover(   ()=> target.animate({fontSize: "2.0em"}, 250),
                        ()=> target.animate({fontSize: "1.5em"}, "fast"),
        )
    }
}

/** begins the prayers */
function startPrayer(value){
    const day = value
    const txt = $("#p-target")

    const initialText = "<h3>Pray each prayer slowly with an awareness of God\’s presence."
    + "<br> Allow the Holy Spirit to speak to your heart during your time of meditating on Scripture."
    + "<br> <p style=\"font-size: 0.5em\"><button id=\"b-target\" class=\"btn btn-default btn-lg pass\">"
    +  "Click/tap anywhere to continue.</button></p></h3>"
    txt.hide().fadeIn(()=>{
        xFlag = true
    }).append(initialText)

    const btn = $("#b-target")

    /** Method loads the next prayer */
    this.nxt = data =>{
        txt.promise().done(()=>{
            txt.text(data)
            for(let prayerName in DATA.prayers){
                if(data === DATA.prayers[prayerName]){
                    txt.prepend(toName(prayerName)+"<br>")
                }
            }
        })
    }


    /** Steps through the prayers */
    $(document).on("click", btn, ()=>{
        //console.log(step)
        txt.fadeOut(50).delay(100)
        switch(step){
            case 0:
               this.nxt(DATA.prompts.p0); break
            case 1:
               this.nxt(DATA.prompts.p1); break
            case 2:
                this.nxt(DATA.prayers.dailyOffering); break
            case 3:
               this.nxt(DATA.prayers.ourFather); break
            case 4:
                this.nxt(DATA.prayers.hailMary); break
            case 5:
                this.nxt(DATA.prayers.doxology); break
            case 6:
                this.nxt(DATA.prompts.p2); break
            case 7:
                this.nxt(DATA.prayers.actOfContrition); break
            case 8:
                this.nxt(
                    DATA.scripture["day"+ day].verse)
                    // loads both the passage and the reference
                txt.promise().done(()=>{
                    txt.append(
                        "<h3>" + DATA.scripture["day"+ day].reference + "</h3>")
                }); break
            case 9:
                this.nxt(DATA.prompts.p3); break
            case 10:
                this.nxt(DATA.prompts.p4); break
            case 11:
                this.nxt(DATA.prayers.freedomPrayer); break
            case 12:
                this.nxt(DATA.prayers.guardianAngel); break
            case 13:
                this.nxt(DATA.prayers.stMichael); break
            case 14:
                this.nxt(DATA.prompts.p0); break
            case 15:
                this.nxt(" ")
                txt.promise().done(()=>{
                    txt.append("<h3>Amen.</h3>")
                }); break
            default: location.reload()
            // reloads when steps are done
        }
        step++
        txt.promise().done(()=>txt.fadeIn())
    })
}

/** changes prayer code to HTML element version */
function toName(prayerName){
    switch(prayerName){
        case "dailyOffering":
            return "<h3>Daily Offering</h3>"
        case "actOfContrition":
            return "<h3>Act of Contrition</h3>"
        case "doxology":
            return "<h3>Doxology</h3>"
        case "freedomPrayer":
            return "<h3>Freedom Prayer</h3>"
        case "guardianAngel":
            return "<h3>Guardian Angel</h3>"
        case "hailMary":
            return "<h3>Hail Mary</h3>"
        case "ourFather":
            return "<h3>Our Father</h3>"
        case "stMichael":
            return "<h3>St Michael the Archangel Prayer</h3>"
    }
}

/** Additional feature where the initial page reloads on press "x" */
$(document).on("keypress", e=>{
    switch(e.which){
        case 88: case 120:
        if(xFlag) location.reload()
        break;
    }
})