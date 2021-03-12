function es1() {
    var parola= prompt('Scrivi la parola da esaminare').toUpperCase();
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
    var scelta= prompt('pari o dispari');
    if(scelta=== 'pari') {
        scelta=true;
    }else if (scelta=== 'dispari') {
        scelta=false;
    }else{
        alert( 'Non hai scritto bene: riprova scrivendo <pari> o <dispari> minuscolo')
        return;
    } 
    console.log(scelta) 
    var numero= parseInt(prompt('Scegli un numero da 1 a 5'));
    if(Number.isFinite(numero)!= true){
        return alert( 'Non hai inserito un numero')
    } else if(numero>5){
        return alert( 'Non hai inserito un numero <5')
    }
    var nPC= Math.floor(Math.random()*5); 
    console.log (nPC);
    var nTot= nPC + numero;
    var vincitore;
    var vincitoreNome= '';
    if(nTot%2==0){
        vincitore=true;
    } else {
        vincitore=false;
    }
    if (vincitore===scelta){
        vincitoreNome='Hai vinto!'
    }else {
        vincitoreNome='Hai perso...'
    }
    console.log (vincitore);
    alert('La somme tra ' + numero + ' e ' + nPC + ' = ' + nTot + vincitoreNome);
}