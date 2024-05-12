function CheckEx1() {
    try {
        for (let i = 0; i < 2; i++)
            selects[i].style.backgroundColor = "white";

        if (selects[0].value == "Yes") {
            selects[0].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[0].style.backgroundColor = "#FF7F7F"

        if (selects[1].value == "Yes") {
            selects[1].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[1].style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }
}

function CheckEx2() {
    try {
        ex2 = document.querySelectorAll('input[name="checkbox1"]:checked')
        for (let i = 0; i < document.querySelectorAll('input[name="checkbox1"]').length; i++)
            document.querySelectorAll('input[name="checkbox1"]')[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        for (let i = 0; i < ex2.length; i++) {
            if (ex2[i].value == "Yes") {
                ex2[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1";
                resultValue += 1;
            }
            else {
                ex2[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F";
                resultValue -= 0.5;
            }
        }
    }
    catch {
        return
    }
}

function CheckEx3() {
    try {
        ex3 = document.querySelectorAll('input[name="checkbox2"]:checked')
        for (let i = 0; i < document.querySelectorAll('input[name="checkbox2"]').length; i++)
            document.querySelectorAll('input[name="checkbox2"]')[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        for (let i = 0; i < ex3.length; i++) {
            if (ex3[i].value == "Yes") {
                ex3[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
                resultValue += 1
            }
            else {
                ex3[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F"
                resultValue -= 0.25
            }
        }
    }
    catch {
        return
    }
}

function CheckEx4() {
    try {
        ex4 = document.querySelector('input[name="zadanie4"]');
        if (String(ex4.value).toLowerCase() == "jedwab motyla") {
            resultValue += 3
            ex4.style.backgroundColor = "#abf7b1"
        }
        else
            ex4.style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }
}

function CheckEx5() {
    try {
        ex5 = document.querySelector('input[name="radio1"]:checked')
        for (let i = 0; i < document.getElementsByName("radio1").length; i++)
            document.getElementsByName("radio1")[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        if (ex5.value == "Yes") {
            ex5.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
            resultValue += 3
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
        ex6 = document.querySelector('input[name="radio2"]:checked')
        for (let i = 0; i < document.getElementsByName("radio2").length; i++)
            document.getElementsByName("radio2")[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        if (ex6.value == "Yes") {
            ex6.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
            resultValue += 4
        }
        else
            ex6.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }
}

function CheckEx7() {
    try {
        for (let i = 2; i < 7; i++)
            selects[i].style.backgroundColor = "white";

        if (selects[2].value == "B") {
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

        if (selects[4].value == "A") {
            selects[4].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[4].style.backgroundColor = "#FF7F7F"

        if (selects[5].value == "E") {
            selects[5].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[5].style.backgroundColor = "#FF7F7F"

        if (selects[6].value == "D") {
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

function CheckEx8() {
    try {
        for (let i = 7; i < 13; i++)
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

        if (selects[12].value == "Yes") {
            selects[12].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[12].style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }
}

function CheckEx9() {
    try {
        ex9 = document.querySelectorAll('input[name="checkbox3"]:checked')
        for (let i = 0; i < document.querySelectorAll('input[name="checkbox3"]').length; i++)
            document.querySelectorAll('input[name="checkbox3"]')[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        for (let i = 0; i < ex9.length; i++) {
            if (ex9[i].value == "Yes") {
                ex9[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
                resultValue += 1
            }
            else {
                ex9[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F"
                resultValue -= 0.5
            }
        }
    }
    catch {
        return
    }
}

function CheckEx10() {
    try {
        ex10 = document.querySelector('input[name="radio3"]:checked')
        for (let i = 0; i < document.getElementsByName("radio3").length; i++)
            document.getElementsByName("radio3")[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        if (ex10.value == "Yes") {
            ex10.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
            resultValue += 8
        }
        else
            ex10.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F"
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

    resultValue = resultValue / 44
    resultValue = Math.round(resultValue * 100, 2)

    document.getElementById("resultTextPercent").innerHTML = `${resultValue}%`
    document.getElementById("resultProgressBar").value = resultValue
}

function getAnswer() {
    answer4 = document.getElementById("answer4");

    if (answer4.style.display == "none")
        answer4.style.display = "inline-block"
    else
        answer4.style.display = "none"
}