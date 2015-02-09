
var app = angular.module("MyApp",['ngRoute','ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/estates', {
        templateUrl: 'partials/estate-codes.html',
        controller: 'EstateCodesCtrl'
      }).
      when('/countries', {
        templateUrl: 'partials/country-codes.html',
        controller: 'CountryCodesCtrl'
      }).
      when('/plates', {
        templateUrl: 'partials/plates.html',
        controller: 'PlatesCtrl'
      }).
      otherwise({
        redirectTo: '/estates'
      });
  }]);

app.controller("MainCtrl",['$scope', function($scope) {
    $scope.$on('$routeChangeStart', function(event,next, current) { 
       path = next.originalPath;
       href = "#"+path;
       $('.active').removeClass('active');
       $("ul.navbar-right li a[href$='"+href+"']").parent('li').addClass('active');

    });
}]);

app.controller("EstateCodesCtrl",['$scope','CodeSrv', function($scope,CodeSrv) {
    $scope.estateCodes = CodeSrv.getEstateCodes();    
    $scope.filterFunction = function(element) {
            return element.name.match(/^Ma/) ? true : false;
        }
}]);

app.controller("CountryCodesCtrl",['$scope','CodeSrv', function($scope,CodeSrv) {
    $scope.countryCodes = CodeSrv.getCountryCodes();
    $scope.filterFunction = function(element) {
            return element.name.match(/^Ma/) ? true : false;
        }
}]);

app.controller("PlatesCtrl",['$scope','CodeSrv', function($scope,CodeSrv) {
    $scope.plates = CodeSrv.getPlates();  
    $scope.filterFunction = function(element) {
            return element.name.match(/^Ma/) ? true : false;
        }
}]);

app.factory("CodeSrv",function(){

    var estateCodes = [
        { name:  "آذربایجان شرقی ۰۴۱", eng: "Azerbaijan East 041"}, 
        { name:  "آذربایجان غربی ۰۴۴", eng: "Azerbaijan West 044"}, 
        { name:  "اردبیل ۰۴۵", eng: "Ardabil 045"}, 
        { name:  "اصفهان ۰۳۱", eng: "Isfahan 031"}, 
        { name:  "البرز ۰۲۶", eng: "Alborz 026"}, 
        { name:  "ایلام ۰۸۴", eng: "Ilam 084"}, 
        { name:  "بوشهر ۰۷۷", eng: "Bushehr 077"}, 
        { name:  "تهران ۰۲۱", eng: "Tehran 021"}, 
        { name:  "چهارمحال و بختیاری ۰۳۸", eng: "Chahar-Mahaal-Bakhtiari 038"}, 
        { name:  "خراسان جنوبی ۰۵۶", eng: "Khorasan South 056"}, 
        { name:  "خراسان رضوی ۰۵۱", eng: "Khorasan Razavi 051"}, 
        { name:  "خراسان شمالی ۰۵۸", eng: "Khorasan North 058"}, 
        { name:  "خوزستان ۰۶۱", eng: "Khuzestan 061"}, 
        { name:  "زنجان ۰۲۴", eng: "Zanjan 024"}, 
        { name:  "سمنان ۰۲۳", eng: "Semnan 023"}, 
        { name:  "سیستان و بلوچستان ۰۵۴", eng: "Sistan-Baluchestan 054"}, 
        { name:  "فارس ۰۷۱", eng: "Fars 071"}, 
        { name:  "قزوین ۰۲۸", eng: "Qazvin 028"}, 
        { name:  "قم ۰۲۵", eng: "Qom 025"}, 
        { name:  "کردستان ۰۸۷", eng: "Kurdistan 087"}, 
        { name:  "کرمان ۰۳۴", eng: "Kerman 034"}, 
        { name:  "کرمانشاه ۰۸۳", eng: "Kermanshah 083"}, 
        { name:  "کهگیلویه و بویراحمد ۰۷۴", eng: "Kohgiluyeh-Boyer-Ahmad 074"}, 
        { name:  "گلستان ۰۱۷", eng: "Golestan 017"}, 
        { name:  "گیلان ۰۱۳", eng: "Gilan 013"}, 
        { name:  "لرستان ۰۶۶", eng: "Lorestan 066"}, 
        { name:  "مازندران ۰۱۱", eng: "Mazandaran 011"}, 
        { name:  "مرکزی ۰۸۶", eng: "Markazi 086"}, 
        { name:  "هرمزگان ۰۷۶", eng: "Hormozgan 076"}, 
        { name:  "همدان ۰۸۱", eng: "Hamadan 081"}, 
        { name:  "یزد ۰۳۵", eng: "Yazd 035"}
    ];

    var countryCodes = [
      { name:"افغانستان ۰۰۹۳", eng: "Afghanistan 0093"},
      { name:"آلبانی ۰۰۳۵۵", eng: "Albania 00355"},
      { name:"الجزایر ۰۰۲۱۳", eng: "Algeria 00213"},
      { name:"ساموآ آمریکا ۰۰۱۶۸۴ ", eng: "American Samoa 001684"},
      { name:"آندورا ۰۰۳۷۶", eng: "Andorra 00376"},
      { name:"آنگولا ۰۰۲۴۴", eng: "Angola 00244"},
      { name:"آنگویلا  ۰۰۱۲۶۴", eng: "Anguilla 001264"},
      { name:"قطب جنوب ۰۰۶۷۲", eng: "Antarctica 00672"},
      { name:"آنتیگوا و باربودا ۰۰۱۲۶۸ ", eng: "Antigua and Barbuda 00168"},
      { name:"آرژانتین ۰۰۵۴", eng: "Argentina 0054"},
      { name:"ارمنستان ۰۰۳۷۴", eng: "Armenia 00374"},
      { name:"آروبا ۰۰۲۹۷", eng: "Aruba 00297"},
      { name:"استرالیا ۰۰۶۱", eng: "Australia 0061"},
      { name:"اتریش ۰۰۴۳", eng: "Austria 0043"},
      { name:"آذربایجان ۰۰۹۹۴", eng: "Azerbaijan 00994"},
      { name:"باهاما  ۰۰۱۲۴۲", eng: "Bahamas 001242"},
      { name:"بحرین ۰۰۹۷۳", eng: "Bahrain 00973"},
      { name:"بنگلادش ۰۰۸۸۰", eng: "Bangladesh 00880"},
      { name:"باربادوس  ۰۰۱۲۴۶", eng: "Barbados 001246"},
      { name:"بلاروس ۰۰۳۷۵", eng: "Belarus 00375"},
      { name:"بلژیک ۰۰۳۲", eng: "Belgium 0032"},
      { name:"بلیز ۰۰۵۰۱", eng: "Belize 00501"},
      { name:"بنین ۰۰۲۲۹", eng: "Benin 00229"},
      { name:"برمودا  ۰۰۱۴۴۱", eng: "Bermuda 001441"},
      { name:"بوتان ۰۰۹۷۵", eng: "Bhutan 00975"},
      { name:"بولیوی ۰۰۵۹۱", eng: "Bolivia 00591"},
      { name:"بوسنی و هرزگوین ۰۰۳۸۷", eng: "Bosnia and Herzegovina 00387"},
      { name:"بوتسوانا ۰۰۲۶۷", eng: "Botswana 00267"},
      { name:"برزیل ۰۰۵۵", eng: "Brazil 0055"},
      { name:"جزایر ویرجین بریتانیا  ۰۰۱۲۸۴", eng: "British Virgin Islands 001284"},
      { name:"برونئی ۰۰۶۷۳", eng: "Brunei 00673"},
      { name:"بلغارستان ۰۰۳۵۹", eng: "Bulgaria 00359"},
      { name:"بورکینافاسو ۰۰۲۲۶", eng: "Burkina Faso 00226"},
      { name:"میانمار ۰۰۹۵", eng: "Burma (Myanmar) 0095"},
      { name:"بروندی ۰۰۲۵۷", eng: "Burundi 00257"},
      { name:"کامبوج ۰۰۸۵۵", eng: "Cambodia 00855"},
      { name:"کامرون ۰۰۲۳۷", eng: "Cameroon 00237"},
      { name:"کانادا ۰۰۱", eng: "Canada 001"},
      { name:"کیپ ورد ۰۰۲۳۸", eng: "Cape Verde 00238"},
      { name:"جزایر کیمن  ۰۰۱۳۴۵", eng: "Cayman Islands 001345"},
      { name:"آفریقای مرکزی ۰۰۲۳۶", eng: "Central African Republic 00236"},
      { name:"چاد ۰۰۲۳۵", eng: "Chad 00235"},
      { name:"شیلی ۰۰۵۶", eng: "Chile 0056"},
      { name:"چین ۰۰۸۶", eng: "China 0086"},
      { name:"جزیره کریسمس ۰۰۶۱", eng: "Christmas Island 0061"},
      { name:"جزایر کوکوس ۰۰۶۱", eng: "Cocos (Keeling) Islands 0061"},
      { name:"کلمبیا", eng: "Colombia 0057"},
      { name:"کومور ۰۰۲۶۹", eng: "Comoros 00269"},
      { name:"جزایر کوک ۰۰۶۸۲", eng: "Cook Islands 00682"},
      { name:"کاستاریکا ۰۰۵۰۶", eng: "Costa Rica 00506"},
      { name:"کرواسی ۰۰۳۸۵", eng: "Croatia 00385"},
      { name:"کوبا ۰۰۵۳", eng: "Cuba 0053"},
      { name:"قبرس ۰۰۳۵۷", eng: "Cyprus 00357"},
      { name:"جمهوری چک ۰۰۴۲۰", eng: "Czech Republic 00420"},
      { name:"کنگو ۰۰۲۴۳", eng: "Democratic Republic of the Congo 00243"},
      { name:"دانمارک ۰۰۴۵", eng: "Denmark 0045"},
      { name:"جیبوتی ۰۰۲۵۳", eng: "Djibouti 00253"},
      { name:"دومینیکا  ۰۰۱۷۶۷", eng: "Dominica 001767"},
      { name:"جمهوری دومینیکن  ۰۰۱۸۰۹", eng: "Dominican Republic 001809"},
      { name:"اکوادور ۰۰۵۹۳", eng: "Ecuador 00593"},
      { name:"مصر ۰۰۲۰", eng: "Egypt 0020"},
      { name:"ال سالوادور ۰۰۵۰۳", eng: "El Salvador 00503"},
      { name:"گینه استوایی ۰۰۲۴۰", eng: "Equatorial Guinea 00240"},
      { name:"اریتره ۰۰۲۹۱", eng: "Eritrea 00291"},
      { name:"استونی ۰۰۳۷۲", eng: "Estonia 00372"},
      { name:"اتیوپی ۰۰۲۵۱", eng: "Ethiopia 00251"},
      { name:"جزایر فالکلند ۰۰۵۰۰", eng: "Falkland Islands 00500"},
      { name:"جزایر فارو ۰۰۲۹۸", eng: "Faroe Islands 00298"},
      { name:"فیجی ۰۰۶۷۹", eng: "Fiji 00679"},
      { name:"فنلاند ۰۰۳۵۸", eng: "Finland 00358"},
      { name:"فرانسه ۰۰۳۳", eng: "France 0033"},
      { name:"پلینزی فرانسه ۰۰۶۸۹", eng: "French Polynesia 00689"},
      { name:"گابن ۰۰۲۴۱", eng: "Gabon 00241"},
      { name:"گامبیا ۰۰۲۲۰", eng: "Gambia 00220"},
      { name:"نوار غزه ۰۰۹۷۰", eng: "Gaza Strip 00970"},
      { name:"گرجستان ۰۰۹۹۵", eng: "Georgia 00995"},
      { name:"آلمان ۰۰۴۹", eng: "Germany 0049"},
      { name:"غنا ۰۰۲۳۳", eng: "Ghana 00233"},
      { name:"جبل الطارق ۰۰۳۵۰", eng: "Gibraltar 00350"},
      { name:"یونان ۰۰۳۰", eng: "Greece 0030"},
      { name:"گرینلند ۰۰۲۹۹", eng: "Greenland 00299"},
      { name:"گرانادا  ۰۰۱۴۷۳", eng: "Grenada 001473"},
      { name:"گوام  ۰۰۱۶۷۱", eng: "Guam 001671"},
      { name:"گواتمالا ۰۰۵۰۲", eng: "Guatemala 00502"},
      { name:"گینه ۰۰۲۲۴", eng: "Guinea 00224"},
      { name:"گینه بیسائو ۰۰۲۴۵", eng: "Guinea-Bissau 00245"},
      { name:"گویان ۰۰۵۹۲", eng: "Guyana 00592"},
      { name:"هائیتی ۰۰۵۰۹", eng: "Haiti 00509"},
      { name:"واتیکان ۰۰۳۹", eng: "Holy See (Vatican City) 0039"},
      { name:"هندوراس ۰۰۵۰۴", eng: "Honduras 00504"},
      { name:"هنگ کنگ ۰۰۸۵۲", eng: "Hong Kong 00852"},
      { name:"مجارستان ۰۰۳۶", eng: "Hungary 0036"},
      { name:"ایسلند ۰۰۳۵۴", eng: "Iceland 00354"},
      { name:"هند ۰۰۹۱", eng: "India 0091"},
      { name:"اندونزی ۰۰۶۲", eng: "Indonesia 0062"},
      { name:"ایران ۰۰۹۸", eng: "Iran 0098"},
      { name:"عراق ۰۰۹۶۴", eng: "Iraq 00964"},
      { name:"ایرلند ۰۰۳۵۳", eng: "Ireland 00353"},
      { name:"جزیره من ۰۰۴۴", eng: "Isle of Man 0044"},
      { name:"اسرلئیل ۰۰۹۷۲", eng: "Israel 00972"},
      { name:"ایتالیا ۰۰۳۹", eng: "Italy 0039"},
      { name:"ساحل عاج ۰۰۲۲۵", eng: "Ivory Coast 00225"},
      { name:"جامايیکا  ۰۰۱۸۷۶", eng: "Jamaica 001876"},
      { name:"ژاپن ۰۰۸۱", eng: "Japan 0081"},
      { name:"اردن ۰۰۹۶۲", eng: "Jordan 00962"},
      { name:"قزاقستان ۰۰۷", eng: "Kazakhstan 007"},
      { name:"کنیا ۰۰۲۵۴", eng: "Kenya 00254"},
      { name:"کریباتی ۰۰۶۸۶", eng: "Kiribati 00686"},
      { name:"کوزوو ۰۰۳۸۱", eng: "Kosovo 00381"},
      { name:"کویت ۰۰۹۶۵", eng: "Kuwait 00965"},
      { name:"قرقیزستان ۰۰۹۹۶", eng: "Kyrgyzstan 00996"},
      { name:"لائوس ۰۰۸۵۶", eng: "Laos 00856"},
      { name:"لتونی ۰۰۳۷۱", eng: "Latvia 00371"},
      { name:"لبنان ۰۰۹۶۱", eng: "Lebanon 00961"},
      { name:"لسوتو ۰۰۲۶۶", eng: "Lesotho 00266"},
      { name:"لیبریا ۰۰۲۳۱", eng: "Liberia 00231"},
      { name:"لیبی ۰۰۲۱۸", eng: "Libya 00218"},
      { name:"لیختنشتاین ۰۰۴۲۳", eng: "Liechtenstein 00423"},
      { name:"لیتوانی ۰۰۳۷۰", eng: "Lithuania 00370"},
      { name:"لوگزامبورگ ۰۰۳۵۲", eng: "Luxembourg 00352"},
      { name:"ماکلائو ۰۰۸۵۳", eng: "Macau 00853"},
      { name:"مقدونیه ۰۰۳۸۹", eng: "Macedonia 00389"},
      { name:"ماداگاسکار ۰۰۲۶۱", eng: "Madagascar 00261"},
      { name:"مالایو ۰۰۲۶۵", eng: "Malawi 00265"},
      { name:"مالزی ۰۰۶۰", eng: "Malaysia 0060"},
      { name:"مالدیو ۰۰۹۶۰", eng: "Maldives 00960"},
      { name:"مالی ۰۰۲۲۳", eng: "Mali 00223"},
      { name:"مالت ۰۰۳۵۶", eng: "Malta 00356"},
      { name:"جزایر مارشال ۰۰۶۹۲", eng: "Marshall Islands 00692"},
      { name:"موریتانی ۰۰۲۲۲", eng: "Mauritania 00222"},
      { name:"موریس ۰۰۲۳۰", eng: "Mauritius 00230"},
      { name:"مایوت ۰۰۲۶۲", eng: "Mayotte 00262"},
      { name:"مکزیک ۰۰۵۲", eng: "Mexico 0052"},
      { name:"میکرونزی ۰۰۶۹۱", eng: "Micronesia 00691"},
      { name:"مولداوی ۰۰۳۷۳", eng: "Moldova 00373"},
      { name:"موناکو ۰۰۳۷۷", eng: "Monaco 00377"},
      { name:"مغولستان ۰۰۹۷۶", eng: "Mongolia 00976"},
      { name:"مونتنگرو ۰۰۳۸۲", eng: "Montenegro 00382"},
      { name:"مونتسرات  ۰۰۱۶۶۴", eng: "Montserrat 001664"},
      { name:"مراکش ۰۰۲۱۲", eng: "Morocco 00212"},
      { name:"موزامبیک ۰۰۲۵۸", eng: "Mozambique 00258"},
      { name:"نامیبیا ۰۰۲۶۴", eng: "Namibia 00264"},
      { name:"نائورو ۰۰۶۷۴", eng: "Nauru 00674"},
      { name:"نپال ۰۰۹۷۷", eng: "Nepal 00977"},
      { name:"هلند ۰۰۳۱", eng: "Netherlands 0031"},
      { name:"آنتیل هلند ۰۰۵۹۹", eng: "Netherlands Antilles 00599"},
      { name:"کالدونیای جدید ۰۰۶۸۷", eng: "New Caledonia 00687"},
      { name:"نیوزلند ۰۰۶۴", eng: "New Zealand 0064"},
      { name:"نیکاراگوئه ۰۰۵۰۵", eng: "Nicaragua 00505"},
      { name:"نیجر ۰۰۲۲۷", eng: "Niger 00227"},
      { name:"نیجریه ۰۰۲۳۴", eng: "Nigeria 00234"},
      { name:"نیوئه ۰۰۶۸۳", eng: "Niue 00683"},
      { name:"جزیره نورفولک ۰۰۶۷۲", eng: "Norfolk Island 00672"},
      { name:"کره شمالی ۰۰۸۵۰", eng: "North Korea 00850"},
      { name:"جزایر ماریانای شمالی  ۰۰۱۶۷۰", eng: "Northern Mariana Islands 001670"},
      { name:"نروژ ۰۰۴۷", eng: "Norway 0047"},
      { name:"عمان ۰۰۹۸۶", eng: "Oman 00968"},
      { name:"پاکستان ۰۰۹۲", eng: "Pakistan 0092"},
      { name:"پالائو ۰۰۶۸۰", eng: "Palau 00680"},
      { name:"پاناما ۰۰۵۰۷", eng: "Panama 00507"},
      { name:"پاپوآ گینه نو ۰۰۶۷۵", eng: "Papua New Guinea 00675"},
      { name:"پاراگوئه ۰۰۵۹۵", eng: "Paraguay 00595"},
      { name:"پرو ۰۰۵۱", eng: "Peru 0051"},
      { name:"فیلیپین ۰۰۶۳", eng: "Philippines 0063"},
      { name:"جزایر پیت کرن ۰۰۸۷۰", eng: "Pitcairn Islands 00870"},
      { name:"لهستان ۰۰۴۸", eng: "Poland 0048"},
      { name:"پرتقال ۰۰۳۵۱", eng: "Portugal 00351"},
      { name:"پورتوریکو ۰۰۱", eng: "Puerto Rico 001"},
      { name:"قطر ۰۰۹۷۴", eng: "Qatar 00974"},
      { name:"جمهوری کنگو ۰۰۲۴۲", eng: "Republic of the Congo 00242"},
      { name:"رومانی ۰۰۴۰", eng: "Romania 0040"},
      { name:"روسیه ۰۰۷", eng: "Russia 007"},
      { name:"رواندا ۰۰۲۵۰", eng: "Rwanda 00250"},
      { name:"سنت بارتلمی ۰۰۵۹۰", eng: "Saint Barthelemy 00590"},
      { name:"سنت هلن ۰۰۲۹۰", eng: "Saint Helena 00290"},
      { name:"سنت کیتس و نویس  ۰۰۱۸۶۹", eng: "Saint Kitts and Nevis 001869"},
      { name:"سنت لوسیا  ۰۰۱۷۵۸", eng: "Saint Lucia 0Saint Martin 01758"},
      { name:"سنت مارتین  ۰۰۱۵۹۹", eng: " 001599"},
      { name:"سنت پیر و میکلون ۰۰۵۰۸", eng: "Saint Pierre and Miquelon 00508"},
      { name:"سنت وینسنت و گرنادین 001 784", eng: "Saint Vincent and the Grenadines 001 784"},
      { name:"ساموآ ۰۰۶۸۵", eng: "Samoa 00685"},
      { name:"سن مارین ۰۰۳۷۸", eng: "San Marino 00378"},
      { name:"سائوتومه و پرنسیپ ۰۰۲۳۹", eng: "Sao Tome and Principe 00239"},
      { name:"عربستان ۰۰۹۶۶", eng: "Saudi Arabia 00966"},
      { name:"سنگال ۰۰۲۲۱", eng: "Senegal 00221"},
      { name:"صربستان ۰۰۳۸۱", eng: "Serbia 00381"},
      { name:"سیشل ۰۰۲۴۸", eng: "Seychelles 00248"},
      { name:"سیرالئون ۰۰۲۳۲", eng: "Sierra Leone 00232"},
      { name:"سنگاپور ۰۰۶۵", eng: "Singapore 0065"},
      { name:"اسلواکی ۰۰۴۲۱", eng: "Slovakia 00421"},
      { name:"اسلونی ۰۰۳۸۶", eng: "Slovenia 00386"},
      { name:"جزایر سلیمان ۰۰۶۷۷", eng: "Solomon Islands 00677"},
      { name:"سومالی ۰۰۲۵۲", eng: "Somalia 00252"},
      { name:"آفریقای جنوبی ۰۰۲۷", eng: "South Africa 0027"},
      { name:"کره جنوبی ۰۰۸۲", eng: "South Korea 0082"},
      { name:"اسپانیا ۰۰۳۴", eng: "Spain 0034"},
      { name:"سریلانکا ۰۰۹۴", eng: "Sri Lanka 0094"},
      { name:"سودان ۰۰۲۴۹", eng: "Sudan 00249"},
      { name:"سورینام ۰۰۵۹۷", eng: "Suriname 00597"},
      { name:"سوازیلند ۰۰۲۶۸", eng: "Swaziland 00268"},
      { name:"سوئد ۰۰۴۶", eng: "Sweden 0046"},
      { name:"سویس ۰۰۴۱", eng: "Switzerland 0041"},
      { name:"سوریه ۰۰۹۶۳", eng: "Syria 00963"},
      { name:"تایوان ۰۰۸۸۶", eng: "Taiwan 00886"},
      { name:"تاجیکستان ۰۰۹۹۲", eng: "Tajikistan 00992"},
      { name:"تانزانیا ۰۰۲۵۵", eng: "Tanzania 00255"},
      { name:"تایلند ۰۰۶۶", eng: "Thailand 0066"},
      { name:"تیمور شرق ۰۰۶۷۰", eng: "Timor-Leste 00670"},
      { name:"توگو ۰۰۲۲۸", eng: "Togo 00228"},
      { name:"توکلائو ۰۰۶۹۰", eng: "Tokelau 00690"},
      { name:"تونگا ۰۰۶۷۶", eng: "Tonga 00676"},
      { name:"ترینیداد و توباگو  ۰۰۱۸۶۸", eng: "Trinidad and Tobago 001868"},
      { name:"تونس ۰۰۲۱۶", eng: "Tunisia 00216"},
      { name:"ترکیه ۰۰۹۰", eng: "Turkey 0090"},
      { name:"ترکمنستان ۰۰۹۹۳", eng: "Turkmenistan 00993"},
      { name:"جزایر ترکس و کیاکوس  ۰۰۱۶۴۹", eng: "Turks and Caicos Islands 001649"},
      { name:"تووالو ۰۰۶۸۸", eng: "Tuvalu 00688"},
      { name:"اوگاندا ۰۰۲۵۶", eng: "Uganda 00256"},
      { name:"اوکراین ۰۰۳۸۰", eng: "Ukraine 00380"},
      { name:"امارات متحده عربی ۰۰۹۷۱", eng: "United Arab Emirates 00971", slang:"dubai, دوبی, دبی"},
      { name:"انگلستان ۰۰۴۴", eng: "United Kingdom 0044", slang:"uk, انگلیس"},
      { name:"ایالات متحده آمریکا ۰۰۱", eng: "United States 001" , slang:"us , usa, امریکا"},
      { name:"اروگوئه ۰۰۵۹۸", eng: "Uruguay 00598"},
      { name:"جزایر ویرجین ایالات متحده  ۰۰۱۳۴۰", eng: "US Virgin Islands 001340"},
      { name:"ازبکستان ۰۰۹۹۸", eng: "Uzbekistan 00998"},
      { name:"وانواتو ۰۰۶۷۸", eng: "Vanuatu 00678"},
      { name:"ونزوئلا ۰۰۵۸", eng: "Venezuela 0058"},
      { name:"ویتنام ۰۰۸۴", eng: "Vietnam 0084"},
      { name:"والیس و فوتونا ۰۰۶۸۱", eng: "Wallis and Futuna 00681"},
      { name:"بانک غرب ۰۰۹۷۰", eng: "West Bank 00970"},
      { name:"یمن ۰۰۹۶۷", eng: "Yemen 00967"},
      { name:"زامبیا ۰۰۲۶۰", eng: "Zambia 00260"},
      { name:"زیمباوه ۰۰۲۶۳", eng: "Zimbabwe 00263"}
    ];

    var mobileCodes = [
    	{name: "۰۹۱۱ همراه اول استان گلستان، گیلان، مازندران", eng: "0911"},
    	{name: "۰۹۱۲ همراه اول استان تهران، البرز، زنجان، سمنان، قزوین، قم", eng: "0912"},
    	{name: "۰۹۱۳ همراه اول استان اصفهان، کرمان، یزد، چهارمحال و بختیاری", eng: "0913"},
    	{name: "۰۹۱۴ همراه اول استان آذربایجان شرقی، غربی، اردبیل", eng: "0914"},
    	{name: "۰۹۱۵ همراه اول استان خراسان شمالی، رضوی، جنوبی، سیستان و بلوچستان", eng: "0915"},
    	{name: "۰۹۱۶ همراه اول استان خوزستان، لرستان", eng: "0916"},
    	{name: "۰۹۱۷ همراه اول استان فارس، کهگیلویه و بویر احمد، هرمزگان، بوشهر", eng: "0917"},
    	{name: "۰۹۱۸ همراه اول استان همدان، ایلام، مرکزی، کردستان، کرمانشاه", eng: "0918"},
    	{name: "تالیا ۰۹۳۲", eng: "Taliya 0932"},
    	{name: "۰۹۳۱ اسپادان", eng: "Spadan 0931"},
    	{name: "۰۹۳۴ شبکه مستقل تلفن همراه کیش", eng: "TKC 0934"},
    	{name: "۰۹۱۰ ، ۰۹۱۹ اپراتور اول ، همراه اول", eng: "0910 0919 MCI"},
    	{name: "۰۹۰۱ ، ۰۹۰۲ ، ۰۹۳۰ ، ۰۹۳۳ ، ۰۹۳۵ ، ۰۹۳۶ ، ۰۹۳۷ ، ۰۹۳۸ ، ۰۹۳۹ ایرانسل", eng: "Irancell 0901 0902 0930 0933 0935 0936 0937 0938 0939"},
    	{name: "۰۹۲۰ ، ۰۹۲۱ رایتل ، تامین تلکام", eng: "0920, 0921 Rightel"}
   ];

   var plates = [
        { name:  "آذربایجان شرقی ۱۵،۲۵،۳۵", eng: "Azerbaijan East 15,25,35"}, 
        { name:  "آذربایجان غربی ۱۷،۲۷،۳۷", eng: "Azerbaijan West 17,27,37"}, 
        { name:  "اردبیل ۹۱", eng: "Ardabil 91"}, 
        { name:  "اصفهان ۱۳،۲۳،۴۳،۵۳", eng: "Isfahan 13,23,43,53"}, 
        { name:  "البرز ۲۱،۶۸،۷۸", eng: "Alborz 21,68,78"}, 
        { name:  "ایلام ۹۸", eng: "Ilam 98"}, 
        { name:  "بوشهر ۴۸،۵۸", eng: "Bushehr 48,58"}, 
        { name:  "تهران ۱۱،۲۲،۳۳،۴۴،۵۵،۶۶،۷۷،۸۸،۹۹،۱۰،۲۰،۳۰،۴۰،۵۰،۶۰،۷۰،۸۰،۹۰", eng: "Tehran 11,22,33,44,55,66,77,88,99,10,20,30,40,50,60,70,80,90"}, 
        { name:  "چهارمحال و بختیاری ۷۱،۸۱", eng: "Chahar-Mahaal-Bakhtiari 71,81"}, 
        { name:  "خراسان جنوبی ۱۲،۳۲،۴۲،۵۲", eng: "Khorasan 12,32,42,52"}, 
        { name:  "خوزستان ۱۴،۲۴،۳۴", eng: "Khuzestan 14,24,34"}, 
        { name:  "زنجان ۸۷،۹۷", eng: "Zanjan 87,97"}, 
        { name:  "سمنان ۸۶،۹۶", eng: "Semnan 86,96"}, 
        { name:  "سیستان و بلوچستان ۸۵،۹۵", eng: "Sistan-Baluchestan 85,95"}, 
        { name:  "فارس ۶۳،۷۳،۸۳،۹۳", eng: "Fars 63,73,83,93"}, 
        { name:  "قزوین ۷۹،۸۹", eng: "Qazvin 79,89"}, 
        { name:  "قم ۱۶،۲۶،۳۶", eng: "Qom 16,26,36"}, 
        { name:  "کردستان ۵۱،۶۱", eng: "Kurdistan 51,61"}, 
        { name:  "کرمان ۴۵،۶۵،۷۵", eng: "Kerman 45,65,75"}, 
        { name:  "کرمانشاه ۱۹،۲۹،۳۹", eng: "Kermanshah 19,29,39"}, 
        { name:  "کهگیلویه و بویراحمد ۴۹", eng: "Kohgiluyeh-Boyer-Ahmad 49"}, 
        { name:  "گلستان ۵۹،۶۹", eng: "Golestan 59,69"}, 
        { name:  "گیلان ۴۶،۵۶،۷۶", eng: "Gilan 46,56,76"}, 
        { name:  "لرستان ۳۱،۴۱", eng: "Lorestan 31,41"}, 
        { name:  "مازندران ۶۲،۷۲،۸۲،۹۲", eng: "Mazandaran 62,72,82,92"}, 
        { name:  "مرکزی ۴۷،۵۷،۶۷", eng: "Markazi 47,57,67"}, 
        { name:  "هرمزگان ۸۴،۹۴", eng: "Hormozgan 84,94"}, 
        { name:  "همدان ۱۸،۲۸،۳۸", eng: "Hamadan 18,28,38"}, 
        { name:  "یزد ۵۴،۶۴،۷۴", eng: "Yazd 54,64,74"}
    ];

    return {
        getEstateCodes : function(){
            return estateCodes.concat(mobileCodes);
        },
        getCountryCodes : function(){
            return countryCodes;
        },
        getPlates : function(){
            return plates;
        }
    }

});
