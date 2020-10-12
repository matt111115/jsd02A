let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// retourne la première valeur du tableau en la supprimant du tableau
// numbers.shift();

function accumulator(numbers, acc = 0) {
    // Une condition d'arrêt et retourner la somme des valeurs du tableau
    // dans la fonction on ré-appelle la fonction elle-même
    // accumulator(numbers, 10);

    // Pour qu'une fonction recursive s'arrete il faut un stop
    if (numbers.length === 0) return acc;

    acc = acc + numbers.shift();

    // console.log(acc);

    return accumulator(numbers, acc); // stack overflow
}

console.log('resultat final', accumulator(numbers)); // doit retourner 55