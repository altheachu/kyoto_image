const store = [
    {
        name: "Katsukura",
        intro: "Delicious pork cutlet rice made with Three-way-processing pork, barley and special yuzu dressing.",
        website: '<a href="https://www.katsukura.jp/cn/#particularities" target="_blank">https://www.katsukura.jp/cn/#particularities</a>',
        comments: 'The pork cutlet has a crispy outer layer and tender meat. ' + 
        'While waiting for your meal, you can grind the sesame paste and add it to the sauce. ' + 
        'The special yuzu sauce cabbage, a side dish, is crisp and refreshing. ' + 
        'In addition, the deep-fried yuba rolled vegetables cutlet set has a delightful and refreshing taste that would be popular among women.',
        mobile_intro: 'The pork cutlet has a crispy outer layer and tender meat. ' + 
        'You can add the sesame paste grinded to the sauce. ' + 
        'The special yuzu sauce cabbage, a side dish, is crisp and refreshing. ' + 
        'In addition, the deep-fried yuba rolled vegetables cutlet set has a delightful and refreshing taste.',
        searchName: "名代炸豬排 京都 Porta 店",
    },
    {
        name: "Kameyayoshinaga",
        intro: "Traditional candy house famous for 'Ubatama', features red bean paste wrapped in Okinawan black sugar skin.",
        website: '<a href="https://kameya-yoshinaga.com/" target="_blank">https://kameya-yoshinaga.com/</a>',
        comments: "Ubatama possesses a lacquer-like luster, with its design inspired by the fruit of the Iris domestica. " + 
        "Its flavor is exquisitely layered but quite sweet, so it's best enjoyed with tea. " + 
        "Another dessert, the thin slices of yokan on their own didn't impress me. " + 
        "I heard that the flavor becomes exponentially more delightful when heated yokan melts on toast.",
        mobile_intro:'The 200-year shop is famous for "Ubatama" — red bean paste wrapped in ' + 
        'Okinawan black sugar coating — and thin slices of yokan. ' + 
        'Ubatama, designed with a inspiration of the fruit of the Iris domestica, boasts a lacquer-like sheen. ' + 
        'The thin slices of yokan come to life only when melted on toast.',
        searchName: "龜屋良長 京都本店",
    },
    {
        name: "Satawarayayo",
        intro: "A 250-year-old royal purveyor shop offers seasonal limited edition amber sugar.",
        website: '<a href="https://kyogashi.co.jp/" target="_blank">https://kyogashi.co.jp/</a>',
        comments: 'This boxed lemon amber sugar consists of perfectly crafted hexagonal pieces, '+
        'with a pale yellow, crystal-clear appearance. When you bite into one, ' + 
        'you first experience the thin, crispy outer shell, followed by the chewy and slightly sticky sugar filling, ' + 
        'In addition, the most famous wagashi (Japanese confectionery) here is the "Unryu".',
        mobile_intro:'This box of lemon amber sugar in the shop consists of meticulously crafted hexagonal pieces, ' + 
        'with a pale yellow, crystal-clear appearance. The outer shell is thin and crispy, while the sugar filling ' + 
        'is delightfully chewy. The most famous snack here, "Unryu", is inspired by significant artist\'s painting.',
        searchName: "俵屋吉富　烏丸店",
    },
    {
        name: "Junsei",
        intro: "A renowned restaurant located near Nanzen-ji Temple features for its richly flavored tofu hot pot set meals.",
        website: '<a href="http://www.to-fu.co.jp/zh-hant/" target="_blank">http://www.to-fu.co.jp/zh-hant/</a>',
        comments: 'Shunsei is located nearby many temples. The area features a dining culture centered around ' +
        'tofu hot pot to meet the dietary needs of monks. In addition to the rich and aromatic tofu, ' + 
        'the meal includes various soy-based dishes such as my favorite "Dengaku-yaki" (miso-glazed grilled tofu)! ' + 
        "Inside the restaurant, there's a picturesque and historic garden.",
        mobile_intro: 'Shunsei is located in an area features a dining culture centered around tofu hot pot to meet ' + 
        'the dietary needs of monks. In addition to the rich and aromatic tofu, the meal includes various soy-based dishes ' + 
        'such as "Dengaku-yaki" (miso-glazed grilled tofu). Also, there is a picturesque garden  and historic there.',
        searchName: "南禪寺 順正",
    },
    {
        name: "Iduu",
        intro: "A century-old restaurant nearby Gion Yasaka Shrine which is famous for sabamackerel and pressed sushi.",
        website: '<a href="https://gion-izuju.com/" target="_blank">https://gion-izuju.com/</a>',
        comments: "Located in a landlocked basin, this gave rise to the easy-preserved delicacy " + 
        'known as "saba-zushi" (mackerel pressed sushi). "Saba-zushi" involves marinated mackerel ' + 
        'wrapped in kelp, rolled with white rice, and then sliced. Chewing the fish and rice together' + 
        'is the key to feel its wonderful flavor. The pressed sushi and beer here is also good.',
        mobile_intro:'Iduu is located in front of Gion Yasaka Shrine. '+ 
        'It is renowned for its century-old tradition of mackerel pressed sushi and Osaka-style pressed sushi. ' +
        '"Saba-zushi" involves marinated mackerel wrapped in kelp, rolled with white rice, and then sliced. ' + 
        'The pressed sushi and beer here is also good.',
        searchName: "Izuju Sushi",
    },
    {
        name: "Nakamuratokichi",
        intro: "A 100-year-old tea merchant in Uji offers a variety of delicious Western and Japanese matcha desserts.",
        website: '<a href="https://tokichi.jp/" target="_blank">https://tokichi.jp/</a>',
        comments: 'The highlight of the Matcha Parfait is its top layer, featuring matcha ice cream' + 
        'and white mochi balls, while the bottom layer contains matcha cake and matcha jelly. ' + 
        'The signature Matcha Buffet, in addition to the ingredients above, also adds a layer of nuts ' + 
        "to enhance the texture. On the top layer, the restaurant's appealing logo is drawn with matcha powder.",
        mobile_intro:'It offers Western and Japanese matcha desserts. ' + 
        "The Matcha Parfait's top layer featuring matcha ice cream and white mochi balls, " + 
        "while its' bottom layer contains matcha cake and matcha jelly. " + 
        'The Matcha Buffet, in addition to the ingredients above, also adds a layer of nuts to enhance the texture.',
        searchName: "中村藤吉本店 平等院店",
    },
    {
        name: "Ujikawamochi",
        intro: "Featuring traditional handcrafted matcha mochi, boasting a rich tea aroma and a unique texture.",
        website: '<a href="https://www.facebook.com/ujigawamochiootu/" target="_blank">https://www.facebook.com/ujigawamochiootu/</a>',
        comments: 'Despite the strong matcha flavor, there is no bitterness to be found in a whole, ' + 
        'thanks to the perfect harmony of sweetness in the mochi. The sweet yet not cloying taste, ' + 
        'coupled with the satisfying chewiness, is a delightful surprise. ' + 
        'I bought it as souvenirs for my colleagues and received rave reviews from everyone!',
        mobile_intro:'Despite the strong matcha flavor, there is no bitterness to be found, ' +
        'thanks to the perfect harmony of sweetness in the mochi. The sweet yet not cloying taste, ' + 
        'coupled with the satisfying chewiness, is a delightful surprise. ' +
        'I received rave reviews about it from lots of my colleagues!',
        searchName: "宇治川餅",
    },
    {
        name: "Yayoi-ken",
        intro: "This budget-friendly restaurant specializes in both delicious Japanese and Western-style set meals.",
        website: '<a href="https://www.yayoi.com.tw/jp/index.php" target="_blank">https://www.yayoi.com.tw/jp/index.php</a>',
        comments: 'Yayoi-ken in Japan offers more home-style dishes such as the Karaage ' + 
        '(Japanese fried chicken) set meal and the spicy noodle soup. ' + 
        'The Karaage was delicious for its crispy outside and juicy inside! ' + 
        'The spicy noodle soup, while spicy, was also remarkably smooth and appetizing. ' + 
        'Additionally, this restaurant has an impressive automatic rice dispenser.',
        mobile_intro:'Yayoi-ken in Japan offers more home-style dishes such as the Karaage ' +
        '(Japanese fried chicken) set meal and the spicy noodle soup. ' + 
        'The Karaage was delicious for its crispy outside and juicy inside! ' + 
        'The spicy noodle soup, while spicy, was also remarkably smooth and appetizing. ',
        searchName: "彌生軒 四條烏丸店",
    },
]


document.getElementById('store_1').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[0].name;
    document.getElementById('store_intro').innerHTML = store[0].intro;
    document.getElementById('store_website').innerHTML = store[0].website;
    document.getElementById('comments').innerHTML = store[0].comments;
    getMap(store[0].searchName);
    
    console.log(Number(window.screen.availWidth))
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
        document.getElementById('modal_title').innerHTML = store[0].name;
        document.getElementById('modal_content').innerHTML = store[0].mobile_intro;
    }
});

document.getElementById('store_2').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[1].name;
    document.getElementById('store_intro').innerHTML = store[1].intro;
    document.getElementById('store_website').innerHTML = store[1].website;
    document.getElementById('comments').innerHTML = store[1].comments;
    getMap(store[1].searchName);

    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
        document.getElementById('modal_title').innerHTML = store[1].name;
        document.getElementById('modal_content').innerHTML = store[1].mobile_intro;
    }
});

document.getElementById('store_3').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[2].name;
    document.getElementById('store_intro').innerHTML = store[2].intro;
    document.getElementById('store_website').innerHTML = store[2].website;
    document.getElementById('comments').innerHTML = store[2].comments;
    getMap(store[2].searchName);
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
        document.getElementById('modal_title').innerHTML = store[2].name;
        document.getElementById('modal_content').innerHTML = store[2].mobile_intro;
    }
});

document.getElementById('store_4').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[3].name;
    document.getElementById('store_intro').innerHTML = store[3].intro;
    document.getElementById('store_website').innerHTML = store[3].website;
    document.getElementById('comments').innerHTML = store[3].comments;
    getMap(store[3].searchName);
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
        document.getElementById('modal_title').innerHTML = store[3].name;
        document.getElementById('modal_content').innerHTML = store[3].mobile_intro;
    }
});

document.getElementById('store_5').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[4].name;
    document.getElementById('store_intro').innerHTML = store[4].intro;
    document.getElementById('store_website').innerHTML = store[4].website;
    document.getElementById('comments').innerHTML = store[4].comments;
    getMap(store[4].searchName);
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
        document.getElementById('modal_title').innerHTML = store[4].name;
        document.getElementById('modal_content').innerHTML = store[4].mobile_intro;
    }
});

document.getElementById('store_6').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[5].name;
    document.getElementById('store_intro').innerHTML = store[5].intro;
    document.getElementById('store_website').innerHTML = store[5].website;
    document.getElementById('comments').innerHTML = store[5].comments;
    getMap(store[5].searchName);
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
        document.getElementById('modal_title').innerHTML = store[5].name;
        document.getElementById('modal_content').innerHTML = store[5].mobile_intro;
    }
});

document.getElementById('store_7').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[6].name;
    document.getElementById('store_intro').innerHTML = store[6].intro;
    document.getElementById('store_website').innerHTML = store[6].website;
    document.getElementById('comments').innerHTML = store[6].comments;
    getMap(store[6].searchName);
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
        document.getElementById('modal_title').innerHTML = store[6].name;
        document.getElementById('modal_content').innerHTML = store[6].mobile_intro;
    }
});

document.getElementById('store_8').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[7].name;
    document.getElementById('store_intro').innerHTML = store[7].intro;
    document.getElementById('store_website').innerHTML = store[7].website;
    document.getElementById('comments').innerHTML = store[7].comments;
    getMap(store[7].searchName);
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
        document.getElementById('modal_title').innerHTML = store[7].name;
        document.getElementById('modal_content').innerHTML = store[7].mobile_intro;
    }
});

document.getElementById('modal_button').addEventListener("click", function(){
    document.getElementById('modal_container').style.display="none";
    document.getElementById('modal').style.display="none";
});

let map;
let service;
let queryLocation = "kyoto";
let placeId;
let place;
let nowDate = new Date();

async function initMap() {

  const kyoto = new google.maps.LatLng(35.0042, 135.4605);
  map = new google.maps.Map(document.getElementById("largemap"), {
    center: kyoto,
    zoom: 15,
  });

  const request = {
    query: queryLocation,
    fields: ["name", "geometry", "place_id"],
  };

  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {   
        createMarker(results[i]);
        if(results[i].place_id){
            getPlaceDetails(service, results[i].place_id);
        }
      }
      map.setCenter(results[0].geometry.location);
    }
  });

}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });
}

window.initMap = initMap;

async function getMap(searchName) {
    queryLocation = searchName;
    await initMap();
    document.getElementsByClassName('google_map')[0].style.display = 'block';
    document.getElementsByClassName('google_basic_info')[0].style.display = 'grid';
}

function getPlaceDetails(service, placeId) {
    service.getDetails({ placeId: placeId }, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            if(place.types.includes("food", "restaurant")){

                let weekday = handleWeekDay(nowDate.getDay());
                let openingStr = getOpeningStr(weekday, place);
                let priceStr = getPriceStr(place);

                document.getElementById('openinghours').innerHTML = openingStr;
                document.getElementById('rating').innerHTML = place.rating + " / 5";
                document.getElementById('pricelevel').innerHTML = priceStr;
            }
        }
    });
}

function handleWeekDay(weekDay) {
    if (weekDay == 0){
        return 6;
    } else{
        return weekDay - 1;
    }
}

function getOpeningStr(weekday, place) {
    let basicPeriods = place.opening_hours.periods[weekday];
    let openingStr = "";
    if(basicPeriods){
        let additionPeriods = "";
        openingStr += basicPeriods.open.time + " ~ " + basicPeriods.close.time;
        if(weekday===6){
            weekday = 0;
            additionPeriods = place.opening_hours.periods[1];
        } else {
            additionPeriods = place.opening_hours.periods[weekday + 1];
        }
        if (additionPeriods && additionPeriods.open.day === weekday) {
            openingStr += " ; " + additionPeriods.open.time + " ~ " + additionPeriods.close.time;
        }
    } else{
        openingStr += "Closed";
    }
    return openingStr;
}

function getPriceStr(place) {
    let priceStr = "";
    if(place.price_level){
        for(let i = 0; i < place.price_level; i++){
            priceStr += "$";
        }
    } else {
        priceStr += "No Information";
    }
    return priceStr;
}