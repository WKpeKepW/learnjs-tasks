let User = prompt("Логин");
if(User == undefined || User == '')
    alert("Отменено");
else if (User != "Админ")
    alert("Я вас не знаю");
else
{
    let pass = prompt("Пароль");
    pass == "Я главный" ? alert("Здравствуйте!") : (pass == undefined || pass == '') ? alert("Отменено") : alert("Неверный пароль");   
}
