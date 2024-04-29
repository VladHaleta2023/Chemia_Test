function CheckEx1() {
    try {
        ex1 = document.querySelector('input[name="radio1"]:checked')
        for (let i = 0; i < document.getElementsByName("radio1").length; i++)
            document.getElementsByName("radio1")[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        if (ex1.value == "Yes") {
            ex1.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            ex1.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }
}

function CheckEx2() {
    try {
        for (let i = 0; i < 4; i++)
            selects[i].style.backgroundColor = "white";

        if (selects[0].value == "D") {
            selects[0].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[0].style.backgroundColor = "#FF7F7F"

        if (selects[1].value == "B") {
            selects[1].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[1].style.backgroundColor = "#FF7F7F"

        if (selects[2].value == "A") {
            selects[2].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[2].style.backgroundColor = "#FF7F7F"

        if (selects[3].value == "C") {
            selects[3].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[3].style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }

}

function CheckEx3() {
    try {
        for (let i = 4; i < 7; i++)
            selects[i].style.backgroundColor = "white";

        if (selects[4].value == "Yes") {
            selects[4].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[4].style.backgroundColor = "#FF7F7F"

        if (selects[5].value == "Yes") {
            selects[5].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[5].style.backgroundColor = "#FF7F7F"

        if (selects[6].value == "Yes") {
            selects[6].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[6].style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }
}

function CheckEx4() {
    try {
        ex4 = document.querySelectorAll('input[name="checkbox1"]:checked')
        for (let i = 0; i < document.querySelectorAll('input[name="checkbox1"]').length; i++)
            document.querySelectorAll('input[name="checkbox1"]')[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        for (let i = 0; i < ex4.length; i++) {
            if (ex4[i].value == "Yes") {
                ex4[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
                resultValue += 1
            }
            else {
                ex4[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F"
                resultValue -= 0.25
            }
        }
    }
    catch {
        return
    }
}

function CheckEx5() {
    try {
        ex5 = document.querySelector('input[name="radio2"]:checked')
        for (let i = 0; i < document.getElementsByName("radio2").length; i++)
            document.getElementsByName("radio2")[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        if (ex5.value == "Yes") {
            ex5.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            ex5.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }
}

function CheckEx6() {
    try {
        for (let i = 7; i < 12; i++)
            selects[i].style.backgroundColor = "white";

        if (selects[7].value == "Yes") {
            selects[7].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[7].style.backgroundColor = "#FF7F7F"

        if (selects[8].value == "Yes") {
            selects[8].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[8].style.backgroundColor = "#FF7F7F"

        if (selects[9].value == "Yes") {
            selects[9].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[9].style.backgroundColor = "#FF7F7F"

        if (selects[10].value == "Yes") {
            selects[10].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[10].style.backgroundColor = "#FF7F7F"

        if (selects[11].value == "Yes") {
            selects[11].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[11].style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }
}

function CheckEx7() {
    try {
        ex5 = document.querySelectorAll('input[name="checkbox2"]:checked')
        for (let i = 0; i < document.querySelectorAll('input[name="checkbox2"]').length; i++)
            document.querySelectorAll('input[name="checkbox2"]')[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        for (let i = 0; i < ex5.length; i++) {
            if (ex5[i].value == "Yes") {
                ex5[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
                resultValue += 1
            }
            else {
                ex5[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F"
                resultValue -= 0.25
            }
        }
    }
    catch {
        return
    }
}

function CheckEx8() {
    try {
        ex8 = document.querySelector('input[name="radio3"]:checked')
        for (let i = 0; i < document.getElementsByName("radio3").length; i++)
            document.getElementsByName("radio3")[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        if (ex8.value == "Yes") {
            ex8.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
            resultValue += 3
        }
        else
            ex8.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }
}

function CheckEx9() {
    try {
        ex9 = document.querySelector('input[name="radio4"]:checked')
        for (let i = 0; i < document.getElementsByName("radio4").length; i++)
            document.getElementsByName("radio4")[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        if (ex9.value == "Yes") {
            ex9.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
            resultValue += 4
        }
        else
            ex9.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }
}

function CheckEx10() {
    try {
        ex10 = String(document.getElementById("zadanie").value)

        if (ex10.toLowerCase() == "4ch3ch(oh)cooh") {
            resultValue += 8
            document.getElementById("zadanie").style.backgroundColor = "#abf7b1"
        }
        else
            document.getElementById("zadanie").style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }
}

function getResult() {
    resultValue = 0
    selects = document.querySelectorAll("select");
    document.getElementById("ResultBlog").style.display = "block";
    window.scrollTo({ top: 0, behavior: 'smooth' })

    CheckEx1()
    CheckEx2()
    CheckEx3()
    CheckEx4()
    CheckEx5()
    CheckEx6()
    CheckEx7()
    CheckEx8()
    CheckEx9()
    CheckEx10()

    resultValue = resultValue / 35
    resultValue = Math.round(resultValue * 100, 2)

    document.getElementById("resultTextPercent").innerHTML = `${resultValue}%`
    document.getElementById("resultProgressBar").value = resultValue
}

function getAnswer() {
    if (document.getElementById("answer10").style.display == "inline-block") {
        document.getElementById("answer10").style.display = "none";
    }
    else {
        document.getElementById("answer10").style.display = "inline-block";
    }
}