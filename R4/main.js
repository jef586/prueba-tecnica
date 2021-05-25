


function clima(){

let ciudad = document.getElementById('ciudad').innerText;
let numero = document.getElementById('id').innerText;

const baires = "http://api.weatherstack.com/current?access_key=475b7b6aa460c573688c8131bf4d1825&query=Buenos_Aires&units=m";
const montevideo = "http://api.weatherstack.com/current?access_key=475b7b6aa460c573688c8131bf4d1825&query=Montevideo&units=m";
const lima = "http://api.weatherstack.com/current?access_key=475b7b6aa460c573688c8131bf4d1825&query=Lima&units=m";
const caracas = "http://api.weatherstack.com/current?access_key=475b7b6aa460c573688c8131bf4d1825&query=caracas&units=m";
const newyork = "http://api.weatherstack.com/current?access_key=475b7b6aa460c573688c8131bf4d1825&query=New_York&units=m";
const tokio = "http://api.weatherstack.com/current?access_key=475b7b6aa460c573688c8131bf4d1825&query=Tokio&units=m";
const moscu = "http://api.weatherstack.com/current?access_key=475b7b6aa460c573688c8131bf4d1825&query=Moscu&units=m";
const london = "http://api.weatherstack.com/current?access_key=475b7b6aa460c573688c8131bf4d1825&query=London&units=m";
const roma = "http://api.weatherstack.com/current?access_key=475b7b6aa460c573688c8131bf4d1825&query=Roma&units=m";
const pekin = "http://api.weatherstack.com/current?access_key=475b7b6aa460c573688c8131bf4d1825&query=Pekin&units=m";

const temperatura = document.getElementById('temperatura');
const humedad = document.getElementById('humedad');
const visibilidad = document.getElementById('visibilidad');
const presion = document.getElementById('presion');
const indiceuv = document.getElementById('indiceuv');

const temperatura1 = document.getElementById('temperatura1');
const humedad1 = document.getElementById('humedad1');
const visibilidad1 = document.getElementById('visibilidad1');
const presion1 = document.getElementById('presion1');
const indiceuv1 = document.getElementById('indiceuv1');

const temperatura2 = document.getElementById('temperatura2');
const humedad2 = document.getElementById('humedad2');
const visibilidad2 = document.getElementById('visibilidad2');
const presion2 = document.getElementById('presion2');
const indiceuv2 = document.getElementById('indiceuv2');

const temperatura3 = document.getElementById('temperatura3');
const humedad3 = document.getElementById('humedad3');
const visibilidad3 = document.getElementById('visibilidad3');
const presion3 = document.getElementById('presion3');
const indiceuv3 = document.getElementById('indiceuv3');

const temperatura4 = document.getElementById('temperatura4');
const humedad4 = document.getElementById('humedad4');
const visibilidad4 = document.getElementById('visibilidad4');
const presion4 = document.getElementById('presion4');
const indiceuv4 = document.getElementById('indiceuv4');

const temperatura5 = document.getElementById('temperatura5');
const humedad5 = document.getElementById('humedad5');
const visibilidad5 = document.getElementById('visibilidad5');
const presion5 = document.getElementById('presion5');
const indiceuv5 = document.getElementById('indiceuv5');

const temperatura6 = document.getElementById('temperatura6');
const humedad6 = document.getElementById('humedad6');
const visibilidad6 = document.getElementById('visibilidad6');
const presion6 = document.getElementById('presion6');
const indiceuv6 = document.getElementById('indiceuv6');

const temperatura7 = document.getElementById('temperatura7');
const humedad7 = document.getElementById('humedad7');
const visibilidad7 = document.getElementById('visibilidad7');
const presion7 = document.getElementById('presion7');
const indiceuv7 = document.getElementById('indiceuv7');

const temperatura8 = document.getElementById('temperatura8');
const humedad8 = document.getElementById('humedad8');
const visibilidad8 = document.getElementById('visibilidad8');
const presion8 = document.getElementById('presion8');
const indiceuv8 = document.getElementById('indiceuv8');

const temperatura9 = document.getElementById('temperatura9');
const humedad9 = document.getElementById('humedad9');
const visibilidad9 = document.getElementById('visibilidad9');
const presion9 = document.getElementById('presion9');
const indiceuv9 = document.getElementById('indiceuv9');


fetch(baires)
    .then(a => a.json())
    .then(response => {
        
        
        temperatura.innerHTML = response.current.temperature;
        humedad.innerHTML = response.current.humidity;
        visibilidad.innerHTML = response.current.visibility;    
        presion.innerHTML = response.current.pressure;
        indiceuv.innerHTML = response.current.uv_index;
    
       
        
    
    })
    fetch(montevideo)
    .then(a => a.json())
    .then(response => {
        
        
        temperatura1.innerHTML = response.current.temperature;
        humedad1.innerHTML = response.current.humidity;
        visibilidad1.innerHTML = response.current.visibility;    
        presion1.innerHTML = response.current.pressure;
        indiceuv1.innerHTML = response.current.uv_index;
    
       
        
    
    })

    fetch(lima)
    .then(a => a.json())
    .then(response => {
        
        
        temperatura2.innerHTML = response.current.temperature;
        humedad2.innerHTML = response.current.humidity;
        visibilidad2.innerHTML = response.current.visibility;    
        presion2.innerHTML = response.current.pressure;
        indiceuv2.innerHTML = response.current.uv_index;
    
       
        
    
    })

    fetch(caracas)
    .then(a => a.json())
    .then(response => {
        
        
        temperatura3.innerHTML = response.current.temperature;
        humedad3.innerHTML = response.current.humidity;
        visibilidad3.innerHTML = response.current.visibility;    
        presion3.innerHTML = response.current.pressure;
        indiceuv3.innerHTML = response.current.uv_index;
    
       
        
    
    })
    fetch(newyork)
    .then(a => a.json())
    .then(response => {
        
        
        temperatura4.innerHTML = response.current.temperature;
        humedad4.innerHTML = response.current.humidity;
        visibilidad4.innerHTML = response.current.visibility;    
        presion4.innerHTML = response.current.pressure;
        indiceuv4.innerHTML = response.current.uv_index;
    
       
        
    
    })
    fetch(tokio)
    .then(a => a.json())
    .then(response => {
        
        
        temperatura5.innerHTML = response.current.temperature;
        humedad5.innerHTML = response.current.humidity;
        visibilidad5.innerHTML = response.current.visibility;    
        presion5.innerHTML = response.current.pressure;
        indiceuv5.innerHTML = response.current.uv_index;
    
       
        
    
    })
    fetch(moscu)
    .then(a => a.json())
    .then(response => {
        
        
        temperatura6.innerHTML = response.current.temperature;
        humedad6.innerHTML = response.current.humidity;
        visibilidad6.innerHTML = response.current.visibility;    
        presion6.innerHTML = response.current.pressure;
        indiceuv6.innerHTML = response.current.uv_index;
    
       
        
    
    })
    fetch(london)
    .then(a => a.json())
    .then(response => {
        
        
        temperatura7.innerHTML = response.current.temperature;
        humedad7.innerHTML = response.current.humidity;
        visibilidad7.innerHTML = response.current.visibility;    
        presion7.innerHTML = response.current.pressure;
        indiceuv7.innerHTML = response.current.uv_index;
    
       
        
    
    })
    fetch(roma)
    .then(a => a.json())
    .then(response => {
        
        
        temperatura8.innerHTML = response.current.temperature;
        humedad8.innerHTML = response.current.humidity;
        visibilidad8.innerHTML = response.current.visibility;    
        presion8.innerHTML = response.current.pressure;
        indiceuv8.innerHTML = response.current.uv_index;
    
       
        
    
    })
    fetch(pekin)
    .then(a => a.json())
    .then(response => {
        
        
        temperatura9.innerHTML = response.current.temperature;
        humedad9.innerHTML = response.current.humidity;
        visibilidad9.innerHTML = response.current.visibility;    
        presion9.innerHTML = response.current.pressure;
        indiceuv9.innerHTML = response.current.uv_index;
    
       
        
    
    })
    
    }
    

    
    

   

    