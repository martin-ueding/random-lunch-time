// Copyright © 2017 Martin Ueding <dev@martin-ueding.de>

myrand = function(start) {
    return (start * 137 + 27) % 2011;
}

now = new Date();

begin_of_week = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 1);
console.log(begin_of_week);

// https://stackoverflow.com/a/2998822
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

for (var idx = 0; idx < 5; ++idx) {

    seed = idx
        + begin_of_week.getFullYear() * 400
        + begin_of_week.getMonth() * 31
        + begin_of_week.getDate();
        ;

    console.log(idx);
    console.log(seed);

    rand = myrand(seed);
    rand = myrand(rand);
    rand = myrand(rand);

    shift = rand % 40 - 20;

    essen = new Date(2000, 0, 0, 13, shift);
    formatted = pad(essen.getHours(), 2) + ':' + pad(essen.getMinutes(), 2);

    elem = document.getElementById('day' + idx)
    elem.innerHTML = formatted;

    if (idx == now.getDay() - 1) {
        elem.style.fontWeight = 'bold';
        elem.style.color = 'blue';
    }
}
