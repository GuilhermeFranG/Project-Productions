document.write("<dl>")
day = new Date()
hr = day.getHours()

if ((hr == "1") || (hr == "2") || (hr == "3") || (hr == "4") || (hr == "5"))
    document.write("<span>😊</span><h3>Seja bem vindo!</br>Tenha um ótimo dia!</h3>")

if ((hr == "6") || (hr == "7") || (hr == "8") || (hr == "9") || (hr == "10") || (hr == "11"))
    document.write("<span>✋</span><h3>Bom dia!</br>Temos novidades!</h3>")

if ((hr == "12") || (hr == "13") || (hr == "14"))
    document.write("<span>🍽️</span><h3>Almoçar e informar-se!<br>Tenha uma ótima tarde.</h3>")

if ((hr == "15") || (hr == "16") || (hr == "17"))
    document.write("<span>🌅</span><h3>Muito Boa Tarde!!!</br>Vamos ver o que há de novo!</h3>")

if ((hr == "18") || (hr == "19") || (hr == "20") || (hr == "21") || (hr == "22"))
    document.write("<span>🌙</span><h3>Muito Boa Noite!!!!!</br>Como foi seu dia?</h3>")

if (hr == "23")
    document.write("<span>🥱</span><h3>Ainda acordado?</br>O que vamos ver?</h3>")

document.write("</dl>") 