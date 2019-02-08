// Descomponer en factore primos

var n = prompt('numero');//preguta el numero que se desea descomponer

var v = new Array();//Acumula un factor sin residuo en cada ronda

for (i=0;i<=n;i++){	//Repite el proceso al numero y luego a cada maximo comun divisor
	for (s=2;s<=n;s++){	//Repite el proceso de buscar el minimo comun multiplo

		if (n%s==0){	//Evalua que el residuo sea 0
			v.push(s);	//Guarda el numero primo encontrado
			n=n/s;	//Cambia el valor del numero por el multiplo menor siguiente 
			break;	//Al encontrar un numero cuyo residuo sea 0 retorna para evaluar una vez mas desde numero 2
		}
	}
}
console.log(v.join(" - "));	//Muestra el resultado en pantalla
