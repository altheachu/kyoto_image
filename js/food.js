const store = [
    {
        name: "名代とんかつ かつくら",
        intro: "以三元豬、大麥飯、特製柚子沙拉醬等特選食材打造的美味豬排飯",
        website: '<a href="https://www.katsukura.jp/cn/#particularities" target="_blank">https://www.katsukura.jp/cn/#particularities</a>',
        comments: '豬排外衣酥脆、肉質鮮美，等待出餐的時候，需要自己研磨加入醬汁的芝麻醬，讓用餐的過程充滿互動性。' +
        '配餐的高麗菜絲清脆爽口，搭配特製柚子醬十分消暑。除了豬排，這次我們也有點腐竹套餐，將時蔬用腐皮包裹再油炸，滋味爽口宜人，' + 
        '應該很受女性的歡迎。'
    },
    {
        name: "京菓子司 亀屋良長",
        intro: "200餘年的京菓子老店，招牌為沖繩黑糖外皮包裹紅豆泥的「烏羽玉」及搭配吐司的薄片羊羹",
        website: '<a href="https://kameya-yoshinaga.com/" target="_blank">https://kameya-yoshinaga.com/</a>',
        comments: '烏羽玉擁有漆器般的光澤，外型靈感來自檜扇(植物名，台灣稱之為射干)的果實。風味層次細膩，但甜度相當高，' + 
        '搭配茶飲、慢慢品嘗，才能充分品味美味所在。因為旅遊途中購買吐司不便，所以單吃小倉紅豆跟肉桂奶油地瓜口味的薄片羊羹，' + 
        '覺得沒有好吃到令人驚豔的程度。但聽說放在吐司上加熱，待羊羹融化後，美味會倍增喔！',
    },
    {
        name: "京菓子司 俵屋吉富",
        intro: "250年皇室御用的老店，會因應時令推出季節限定琥珀糖",
        website: '<a href="https://kyogashi.co.jp/" target="_blank">https://kyogashi.co.jp/</a>',
        comments: '這次並沒有實地走訪這家電，只是覺得琥珀糖是日本夏季的美意識，所以在某個紀念品商店購入。' + 
        '這份盒裝的檸檬琥珀糖，每顆都是工整的正六邊形，淡黃色的外表晶瑩透亮。整顆放進口中咬下，首先感覺到的是外殼的薄脆，' + 
        '緊接著會品嘗到Q軟黏稠的糖餡，是爽口的糖果。此外，這家店最有名的和菓子是「雲龍」，以狩野洞春的〈雲龍圖〉為靈感製作，' + 
        '下次去京都一定要去品嘗看看。',
    },
    {
        name: "南禪寺 順正",
        intro: "位於南禪寺周邊的名店，以口味濃郁的湯豆腐套餐名聞遐邇",
        website: '<a href="http://www.to-fu.co.jp/zh-hant/" target="_blank">http://www.to-fu.co.jp/zh-hant/</a>',
        comments: '順正所處的地區因為寺廟眾多，因應僧人的飲食需求，發展出以湯豆腐為特色的飲食文化。' + 
        '穿越大門後，是一個古色古香的庭園，跟著接待阿姨東繞西轉，才終於進入用餐廂房。' + 
        '廂房的座位旁有一扇大窗子，可以眺望庭院景色，這大概就是「夕霧花園」裡反覆提到的借景吧。' +
        '套餐除了豆香濃郁的湯豆腐外，還包含許多特色黃豆製料理，其中我最喜歡的是「田樂燒」(味噌醬烤豆腐)！',
    },
    {
        name: "いづ重 壽司",
        intro: "衹園八阪神社對面的老店，以傳承百年的鯖姿壽司及壓壽司聞名",
        website: '<a href="https://gion-izuju.com/" target="_blank">https://gion-izuju.com/</a>',
        comments: '京都位於不臨海的盆地，因此外地的漁獲需要經過鹽漬方能保存，因此發展出鯖姿壽司這項特色美食。' + 
        '鯖姿壽司是以昆布包裹鯖魚與白飯捲起再切片，品嘗時要魚肉連白飯一起咀嚼，才能體會兩者相得益彰的滋味。' +
        '此外，這家店的箱壽司與啤酒也相當美味。這家店採用梯次出餐的方式，出餐時也會把同桌的餐點併成一盤，這種翻桌方式也讓我大開眼界。'
    },
    {
        name: "中村藤吉",
        intro: "位於宇治的百年茶商，擁有日式、西式各種美味的抹茶甜品",
        website: '<a href="https://tokichi.jp/" target="_blank">https://tokichi.jp/</a>',
        comments: '這家店雖然以販售抹茶茶葉起家，卻漸漸發展出各式高品質的抹茶食品與甜點。' + 
        '抹茶蕎麥麵口味其實一般，上面的豆皮倒是不錯。' + 
        '抹茶聖代的最上層是抹茶冰淇淋及白玉糰子，下層則包含抹茶蛋糕和抹茶果凍，每個部分都用甜味平衡了抹茶的苦澀，飄散著淡淡的抹茶香氣，真是絕品！' + 
        '招牌抹茶巴菲除了上述內料外，還多加了一層堅果增添口感，最上層則用抹茶粉畫出了中村藤吉的Logo，十分吸睛。',
    },
    {
        name: "宇治川餅",
        intro: "古法手作抹茶糰子，擁有濃厚茶香與獨特口感",
        website: '<a href="https://www.facebook.com/ujigawamochiootu/" target="_blank">https://www.facebook.com/ujigawamochiootu/</a>',
        comments: '在欣賞完三戶室寺盛開的繡球花後，在出口的攤販試吃抹茶糰子，一開始不抱任何期待，放入口中咀嚼一番後驚為天人！' + 
        '雖然抹茶的味道很重，卻不會感到任何苦澀，因為糰子的甜度跟抹茶調和地非常好。甜而不膩的滋味，配合充滿嚼勁的口感，真是意外的驚喜。' + 
        '因為實在美味，所以立刻購買當作給同事的土產，受到大家的好評呢！' + 
        '這種小零食的好處，除了可以讓自己開心之外，還可以跟別人分享後一起討論感想，這也是種樂趣！',
    },
    {
        name: "YAYOI 彌生軒",
        intro: "平價和洋定食的專賣店，採用自動點餐機、自動加飯機等新奇的設備",
        website: '<a href="https://www.yayoi.com.tw/jp/index.php" target="_blank">https://www.yayoi.com.tw/jp/index.php</a>',
        comments: '彌生軒是專賣定食的平價連鎖餐廳，在台灣也有分店，但是我覺得在台灣的市場定位偏輕奢華，但是京都的是家常料理，'+
        '像是我們這次點的唐揚炸雞定食及辣湯麵都是台灣沒有的品項：唐揚雞外脆內多汁，真的好好吃！定時內含的味噌湯也濃郁美味。' + 
        '辣湯麵的湯頭雖然辛辣卻又十分滑潤，會激起滿滿的食欲。另外這家店有個很厲害的「自動加飯機」，我是第一次見到這種機器！',
    },
]


document.getElementById('store_1').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[0].name;
    document.getElementById('store_intro').innerHTML = store[0].intro;
    document.getElementById('store_website').innerHTML = store[0].website;
    document.getElementById('comments').innerHTML = store[0].comments;
    
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
    document.getElementById('comments').innerHTML = store[1].comments;

    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('store_3').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[2].name;
    document.getElementById('store_intro').innerHTML = store[2].intro;
    document.getElementById('store_website').innerHTML = store[2].website;
    document.getElementById('comments').innerHTML = store[2].comments;
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('store_4').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[3].name;
    document.getElementById('store_intro').innerHTML = store[3].intro;
    document.getElementById('store_website').innerHTML = store[3].website;
    document.getElementById('comments').innerHTML = store[3].comments;
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('store_5').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[4].name;
    document.getElementById('store_intro').innerHTML = store[4].intro;
    document.getElementById('store_website').innerHTML = store[4].website;
    document.getElementById('comments').innerHTML = store[4].comments;
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('store_6').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[5].name;
    document.getElementById('store_intro').innerHTML = store[5].intro;
    document.getElementById('store_website').innerHTML = store[5].website;
    document.getElementById('comments').innerHTML = store[5].comments;
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('store_7').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[6].name;
    document.getElementById('store_intro').innerHTML = store[6].intro;
    document.getElementById('store_website').innerHTML = store[6].website;
    document.getElementById('comments').innerHTML = store[6].comments;
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('store_8').addEventListener("click", function(){
    document.getElementById('store_name').innerHTML = store[7].name;
    document.getElementById('store_intro').innerHTML = store[7].intro;
    document.getElementById('store_website').innerHTML = store[7].website;
    document.getElementById('comments').innerHTML = store[7].comments;
    
    if (Number(window.screen.availWidth) < 821){
        document.getElementById('modal_container').style.display="inline-block";
        document.getElementById('modal').style.display="grid";
    }
});

document.getElementById('test').addEventListener("click", function(){
    document.getElementById('modal_container').style.display="none";
    document.getElementById('modal').style.display="none";
});