function getAnswer() {
    answer = document.getElementById("answer");
    if (answer.style.display == "none")
        answer.style.display = "inline";
    else
        answer.style.display = "none";
}

function CheckEx1() {
    try {
        for (let i = 0; i < 3; i++)
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

        if (selects[2].value == "Yes") {
            selects[2].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[2].style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }
}

function CheckEx2() {
    try {
        ex2 = document.querySelector('input[name="radio1"]:checked')
        for (let i = 0; i < document.querySelectorAll('input[name="radio1"]').length; i++)
            document.querySelectorAll('input[name="radio1"]')[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        if (ex2.value == "Yes") {
            ex2.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
            resultValue += 3
        }
        else {
            ex2.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F"
        }
    }
    catch {
        return
    }
}

function CheckEx3() {
    try {
        for (let i = 3; i < 6; i++)
            selects[i].style.backgroundColor = "white";

        if (selects[3].value == "Yes") {
            selects[3].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else
            selects[3].style.backgroundColor = "#FF7F7F"

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
    }
    catch {
        return
    }
}

function CheckEx4() {
    try {
        ex4 = document.querySelector('input[name="radio2"]:checked')
        for (let i = 0; i < document.querySelectorAll('input[name="radio2"]').length; i++)
            document.querySelectorAll('input[name="radio2"]')[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        if (ex4.value == "Yes") {
            ex4.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
            resultValue += 3
        }
        else {
            ex4.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F"
        }
    }
    catch {
        return
    }
}

function CheckEx5() {
    try {
        for (let i = 6; i < 8; i++)
            selects[i].style.backgroundColor = "white";

        if (selects[6].value == "Yes") {
            selects[6].style.backgroundColor = "#abf7b1"
            resultValue += 2
        }
        else {
            selects[6].style.backgroundColor = "#FF7F7F"
        }

        if (selects[7].value == "Yes") {
            selects[7].style.backgroundColor = "#abf7b1"
            resultValue += 2
        }
        else {
            selects[7].style.backgroundColor = "#FF7F7F"
        }
    }
    catch {
        return
    }
}

function CheckEx6() {
    try {
        ex6 = String(document.getElementById("zadanie").value)

        if (ex6.toLowerCase() == "glukoza" || ex6.toLowerCase() == "nc6h12o6" || ex6.toLowerCase() == "c6h12o6") {
            resultValue += 5
            document.getElementById("zadanie").style.backgroundColor = "#abf7b1"
        }
        else
            document.getElementById("zadanie").style.backgroundColor = "#FF7F7F"
    }
    catch {
        return
    }
}

function CheckEx7() {
    try {
        for (let i = 8; i < 14; i++)
            selects[i].style.backgroundColor = "white";

        if (selects[8].value == "Yes") {
            selects[8].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[8].style.backgroundColor = "#FF7F7F"
        }

        if (selects[9].value == "Yes") {
            selects[9].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[9].style.backgroundColor = "#FF7F7F"
        }

        if (selects[10].value == "Yes") {
            selects[10].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[10].style.backgroundColor = "#FF7F7F"
        }

        if (selects[11].value == "Yes") {
            selects[11].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[11].style.backgroundColor = "#FF7F7F"
        }

        if (selects[12].value == "Yes") {
            selects[12].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[12].style.backgroundColor = "#FF7F7F"
        }

        if (selects[13].value == "Yes") {
            selects[13].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[13].style.backgroundColor = "#FF7F7F"
        }
    }
    catch {
        return
    }
}

function CheckEx8() {
    try {
        for (let i = 14; i < 17; i++)
            selects[i].style.backgroundColor = "white";

        if (selects[14].value == "Yes") {
            selects[14].style.backgroundColor = "#abf7b1"
            resultValue += 2
        }
        else {
            selects[14].style.backgroundColor = "#FF7F7F"
        }

        if (selects[15].value == "Yes") {
            selects[15].style.backgroundColor = "#abf7b1"
            resultValue += 2
        }
        else {
            selects[15].style.backgroundColor = "#FF7F7F"
        }

        if (selects[16].value == "Yes") {
            selects[16].style.backgroundColor = "#abf7b1"
            resultValue += 2
        }
        else {
            selects[16].style.backgroundColor = "#FF7F7F"
        }
    }
    catch {
        return
    }
}

function CheckEx9() {
    try {
        for (let i = 17; i < 25; i++)
            selects[i].style.backgroundColor = "white";

        if (selects[17].value == "Yes") {
            selects[17].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[17].style.backgroundColor = "#FF7F7F"
        }

        if (selects[18].value == "Yes") {
            selects[18].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[18].style.backgroundColor = "#FF7F7F"
        }

        if (selects[19].value == "Yes") {
            selects[19].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[19].style.backgroundColor = "#FF7F7F"
        }

        if (selects[20].value == "Yes") {
            selects[20].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[20].style.backgroundColor = "#FF7F7F"
        }

        if (selects[21].value == "Yes") {
            selects[21].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[21].style.backgroundColor = "#FF7F7F"
        }

        if (selects[22].value == "Yes") {
            selects[22].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[22].style.backgroundColor = "#FF7F7F"
        }

        if (selects[23].value == "Yes") {
            selects[23].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[23].style.backgroundColor = "#FF7F7F"
        }

        if (selects[24].value == "Yes") {
            selects[24].style.backgroundColor = "#abf7b1"
            resultValue += 1
        }
        else {
            selects[24].style.backgroundColor = "#FF7F7F"
        }
    }
    catch {
        return
    }
}

function CheckEx10() {
    try {
        ex10 = document.querySelector('input[name="radio3"]:checked')
        for (let i = 0; i < document.querySelectorAll('input[name="radio3"]').length; i++)
            document.querySelectorAll('input[name="radio3"]')[i].parentElement.getElementsByTagName("span")[0].style.backgroundColor = "white";
        
        if (ex10.value == "Yes") {
            ex10.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#abf7b1"
            resultValue += 9
        }
        else {
            ex10.parentElement.getElementsByTagName("span")[0].style.backgroundColor = "#FF7F7F"
        }
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

    resultValue = resultValue / 50
    resultValue = Math.round(resultValue * 100, 2)

    document.getElementById("resultTextPercent").innerHTML = `${resultValue}%`
    document.getElementById("resultProgressBar").value = resultValue
}