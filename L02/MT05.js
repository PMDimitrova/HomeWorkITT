let language = "de"; // ‘en’, ‘es’, ‘de’, ‘bg’, ‘缩写’
let greeting = "";

if (language === "en"){
    greeting = "Hello World!";
}else if (language === "es"){
    greeting = "Hola Mundo!";
}else if (language === "de"){
    greeting = "Hallo Welt!";
}else if (language === "bg"){
    greeting = "Здравей свят!";
}else if (language === "缩写"){
    greeting = "This might be just for fun!";
}

console.log(greeting);