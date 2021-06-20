

// var x = 'https://caodang.fpt.edu.vn/tuyen-sinh-cao-dang-xet-tuyen?utm_source=FGS&utm_medium=CDF_exact&utm_campaign=poly.edu&gclid=Cj0KCQjw38-DBhDpARIsADJ3kjnngDlw7xfpjzIMNz7MYqMYp70w7HJNl7FrGBWwcIGf9jDXQxtZRvUaAh-CEALw_wcB';
var x = window.location.search
var pairs = x.substring(1).split("&"),
    obj = {},
    pair,
    i;

for (i in pairs) {
    if (pairs[i] === "") continue;

    pair = pairs[i].split("=");
    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
}
console.log('bình ', obj);
console.log('thành phần tùng', obj.tung);
console.log('thành phần duy', obj.campaign);


