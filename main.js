
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (location) => {
      const long = location.coords.longitude;
      const lat = location.coords.latitude;
      getweatherdata(long, lat);
    },
    () => {
    }
  );
}

async function getweatherdata(long, lat) {
  try {
    const datameteto = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&lang=fr&mode=json&units=metric&exclude=minutely&APPID=85d1dab5f0bd7fc524618d224d8dc61d`
    );

    https: if (!datameteto.ok) {
      throw new Error(`Erreur : ${datameteto.status}`);
    }
    const data1 = await datameteto.json();
    console.log(data1);
    list = data1.list;

    const name1 = data1.city.name
    const name = document.getElementById("name");
    name.innerHTML = name1;
    
    const temp1 = list[0].main.temp;
    const tempe = document.getElementById("tempe");
    tempe.innerHTML = temp1 + '°'; 

    const img1 = list[0].weather[0].icon;

    const degre12 = list[0].main.temp;
    const degre122 = document.getElementById("degre122");
    degre122.innerHTML = degre12 + "°"; 

    const degre13 = list[1].main.temp;
    const degre133 = document.getElementById("degre133");
    degre133.innerHTML = degre13 + "°"; 
  
    const degre14 = list[2].main.temp;
    const degre144 = document.getElementById("degre144");
    degre144.innerHTML = degre14 + "°"; 
    
    const degre15 = list[3].main.temp;
    const degre155 = document.getElementById("degre155");
    degre155.innerHTML = degre15 + "°"; 
  
    const degre16 = list[4].main.temp;
    const degre166 = document.getElementById("degre166");
    degre166.innerHTML = degre16 + "°"; 

    const degre17 = list[5].main.temp;
    const degre177 = document.getElementById("degre177");
    degre177.innerHTML = degre17 + "°"; 

    const degre18 = list[6].main.temp;
    const degre188 = document.getElementById("degre188");
    degre188.innerHTML = degre18 + "°"; 

    const degre19 = list[7].main.temp;
    const degre199 = document.getElementById("degre199");
    degre199.innerHTML = degre19 + "°"; 

    image1 = new Image();
    image1.src = '' +img1+'.svg';
    var aTag = document.getElementById("imgsrc");
    aTag.appendChild(image1);
    i.appendChild(aTag);
  } catch (e) {
  }
  
    const datameteto = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&mode=json&units=metric&APPID=85d1dab5f0bd7fc524618d224d8dc61d`
    );

    const data1 = await datameteto.json();
    const templive1 = data1.main.temp;
    const templive = document.getElementById("live");
    templive.innerHTML = templive1;
    console.log(templive1);
}

