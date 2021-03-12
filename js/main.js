function es1() {
    var parola= prompt('Scrivi la parola da esaminare');
    console.log(parola.length);
    var parolaArr=[];
    for (i=0;i<parola.length;i++) {
        parolaArr.push(parola.charAt(i));
    }
    var condizione= parolaArr.length / 2;
    console.log(condizione)

    for (i=0;i<condizione;i++) {
        if(parolaArr[i]!=parolaArr[(parolaArr.length-i)-1]){
            return alert('La parola non é palindroma')
        }else {
            console.log(parolaArr[i],parolaArr[(parolaArr.length-i)-1])
        }
    }
    return alert('La parola é palindroma')
    console.log(parola,parolaArr)
}
es1()