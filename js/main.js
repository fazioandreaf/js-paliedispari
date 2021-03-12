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
function es2() {
    // var numero= parseInt(prompt('Scegli un numero da 1 a 6'));
    // var nPC= Math.floor(Math.random()*6); 
    // console.log (nPC);
    // var nTot= nPC + numero;
    // alert('La somme tra ' + numero + ' e ' + nPC + ' = ' + nTot);
    var scelta= prompt('pari o dispari');
    if(scelta=== 'pari') {
        scelta=true;
        console.log(scelta)
    }else if (scelta=== 'dispari') {
        scelta=false;
        console.log(scelta)
    }else{
        alert( 'non hai scritto bene: riprova scrivendo <pari> o <dispari> minuscolo')
    } 
    console.log(scelta)
    var sceltaPC= Boolean(Math.random()>0.5)
    console.log(sceltaPC,scelta)


}