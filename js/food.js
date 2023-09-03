const store = [
    {
        name: "名代とんかつ かつくら",
        intro: "以三元豬、大麥飯、特製柚子沙拉醬等特選食材打造的美味豬排飯",
        website: '<a href="https://www.katsukura.jp/cn/#particularities" target="_blank">https://www.katsukura.jp/cn/#particularities</a>'
    },
    {
        name: "京菓子司 亀屋良長",
        intro: "200餘年的京菓子老店，招牌為紅豆泥包裹黑糖的「烏羽玉」及搭配吐司的薄片羊羹",
        website: '<a href="https://kameya-yoshinaga.com/" target="_blank">https://kameya-yoshinaga.com/</a>'
    },
    {
        name: "京菓子司 俵屋吉富",
        intro: "250年皇室御用的老店，會因應時令推出季節限定琥珀糖",
        website: '<a href="https://kyogashi.co.jp/" target="_blank">https://kyogashi.co.jp/</a>'
    },
    {
        name: "南禪寺 順正",
        intro: "位於南禪寺周邊的名店，以口味濃郁的湯豆腐套餐名聞遐邇",
        website: '<a href="http://www.to-fu.co.jp/zh-hant/" target="_blank">http://www.to-fu.co.jp/zh-hant/</a>'
    },
    {
        name: "いづ重 壽司",
        intro: "八阪神社對面的老店，以傳承百年的鯖姿壽司及壓壽司聞名",
        website: '<a href="https://gion-izuju.com/" target="_blank">https://gion-izuju.com/</a>'
    },
    {
        name: "中村藤吉",
        intro: "位於宇治的百年茶商，擁有日式、西式各種美味的抹茶甜品",
        website: '<a href="https://tokichi.jp/" target="_blank">https://tokichi.jp/</a>'
    },
    {
        name: "宇治川餅",
        intro: "古法手作抹茶糰子，擁有濃厚茶香與獨特口感",
        website: '<a href="https://www.facebook.com/ujigawamochiootu/" target="_blank">https://www.facebook.com/ujigawamochiootu/</a>'
    },
    {
        name: "YAYOI 彌生軒",
        intro: "平價和洋定食的專賣店，採用自動點餐機、自動加飯機等新奇的設備",
        website: '<a href="https://www.yayoi.com.tw/jp/index.php" target="_blank">https://www.yayoi.com.tw/jp/index.php</a>'
    },
]


document.getElementById('store_1').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[0].name;
    document.getElementById('store_intro').innerHTML = store[0].intro;
    document.getElementById('store_website').innerHTML = store[0].website;
    
    console.log(Number(window.screen.availWidth))
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
    // modal
    //https://uu9924079.medium.com/%E9%81%8B%E7%94%A8-js-%E6%88%96%E7%B4%94-css-%E8%A3%BD%E4%BD%9C%E7%B0%A1%E6%98%93-modal-a4c05d028902
});

document.getElementById('store_2').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[1].name;
    document.getElementById('store_intro').innerHTML = store[1].intro;
    document.getElementById('store_website').innerHTML = store[1].website;
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('store_3').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[2].name;
    document.getElementById('store_intro').innerHTML = store[2].intro;
    document.getElementById('store_website').innerHTML = store[2].website;
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('store_4').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[3].name;
    document.getElementById('store_intro').innerHTML = store[3].intro;
    document.getElementById('store_website').innerHTML = store[3].website;
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('store_5').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[4].name;
    document.getElementById('store_intro').innerHTML = store[4].intro;
    document.getElementById('store_website').innerHTML = store[4].website;
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('store_6').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[5].name;
    document.getElementById('store_intro').innerHTML = store[5].intro;
    document.getElementById('store_website').innerHTML = store[5].website;
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('store_7').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[6].name;
    document.getElementById('store_intro').innerHTML = store[6].intro;
    document.getElementById('store_website').innerHTML = store[6].website;
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('store_8').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[7].name;
    document.getElementById('store_intro').innerHTML = store[7].intro;
    document.getElementById('store_website').innerHTML = store[7].website;
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('test').addEventListener("click", function(){
    document.getElementById('modal_container').style.display="none";
    document.getElementById('modal').style.display="none";
});