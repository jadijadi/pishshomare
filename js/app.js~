var app = angular.module("MyApp",['ngAnimate']);

app.controller("MyCtrl", ['$scope','CodeSrv',function($scope,CodeSrv) {
  $scope.friends = CodeSrv.getCodes();

  $scope.filterFunction = function(element) {
    return element.name.match(/^Ma/) ? true : false;
  };

}]);

app.factory("CodeSrv",function(){

    var codes = [
        { name:  "آذربایجان شرقی ۰۴۱", eng: "Azarbaijan Sharghi 041"}, 
        { name:  "آذربایجان غربی ۰۴۴", eng: "Azarbaijan Gharbi 044"}, 
        { name:  "اردبیل ۰۴۵", eng: "Ardebil 045"}, 
        { name:  "اصفهان ۰۳۱", eng: "Isfahan 031"}, 
        { name:  "البرز ۰۲۶", eng: "Alborz 026"}, 
        { name:  "ایلام ۰۸۴", eng: "Ilam 084"}, 
        { name:  "بوشهر ۰۷۷", eng: "Boushehr 077"}, 
        { name:  "تهران ۰۲۱", eng: "Tehran 021"}, 
        { name:  "چهارمحال و بختیاری ۰۳۸", eng: "Charmahal Bakhtiari 038"}, 
        { name:  "خراسان جنوبی ۰۵۶", eng: "Khorasan Jonoobi 056"}, 
        { name:  "خراسان رضوی ۰۵۱", eng: "Khorasan Razavi 051"}, 
        { name:  "خراسان شمالی ۰۵۸", eng: "Khorasan Shomali 058"}, 
        { name:  "خوزستان ۰۶۱", eng: "Khoozestan 061"}, 
        { name:  "زنجان ۰۲۴", eng: "Zanjan 024"}, 
        { name:  "سمنان ۰۲۳", eng: "Semnan 023"}, 
        { name:  "سیستان و بلوچستان ۰۵۴", eng: "Sistan Baloochestan 054"}, 
        { name:  "فارس ۰۷۱", eng: "Fars 071"}, 
        { name:  "قزوین ۰۲۸", eng: "Ghazvin 028"}, 
        { name:  "قم ۰۲۵", eng: "Ghom 025"}, 
        { name:  "کردستان ۰۸۷", eng: "Kordestan 087"}, 
        { name:  "کرمان ۰۳۴", eng: "Kerman 034"}, 
        { name:  "کرمانشاه ۰۸۳", eng: "Kermanshah 083"}, 
        { name:  "کهگیلویه و بویراحمد ۰۷۴", eng: "Kohkilooye Booyerahmad 074"}, 
        { name:  "گلستان ۰۱۷", eng: "Golestan 017"}, 
        { name:  "گیلان ۰۱۳", eng: "Gilan 013"}, 
        { name:  "لرستان ۰۶۶", eng: "Lorestan 066"}, 
        { name:  "مازندران ۰۱۱", eng: "Mazandaran 011"}, 
        { name:  "مرکزی ۰۸۶", eng: "Markazi 086"}, 
        { name:  "هرمزگان ۰۷۶", eng: "Hormozgan 076"}, 
        { name:  "همدان ۰۸۱", eng: "Hamedan 081"}, 
        { name:  "یزد ۰۳۵", eng: "Yazd 035"}
    ];

    return {
        getCodes : function(){
            return codes;
        }
    }

});
