(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(n){if(n.ep)return;n.ep=!0;const l=a(n);fetch(n.href,l)}})();const J=[{id:"1",name:"Huacachina",category:"Naturaleza",rating:4.9,reviews:342,safety:"safe",address:"Prolongación Ballestas s/n",image:"https://picsum.photos/seed/huacachina/600/400",images:["https://picsum.photos/seed/huaca1/600/400","https://picsum.photos/seed/huaca2/600/400","https://picsum.photos/seed/huaca3/600/400"],description:"Huacachina es un oasis ubicado en medio del desierto iqueño, conocido por sus imponentes dunas de arena y su laguna de aguas verde esmeralda. Es uno de los destinos turísticos más emblemáticos de Ica y de todo el Perú.",history:"La leyenda cuenta que una princesa inca lloraba por su amado, y sus lágrimas formaron la laguna. Al huir, su manto se convirtió en las dunas que rodean el oasis.",note:"El mejor momento para visitar es al atardecer, cuando el sol tiñe las dunas de dorado. No olvides llevar protector solar.",hours:"8:00 AM – 6:00 PM",bestTime:"Al atardecer",phone:"+51 956 123 456",price:"S/ 5 entrada",type:"Natural / Aventura",lat:-14.0875,lng:-75.7626,tags:["Laguna","Dunas","Sandboard","Foto perfecta","Atardecer"],hidden:!1,validated:!0,catColor:"green",safetyNote:"Zona segura con vigilancia turística. Se recomienda llevar agua.",safetyValidators:28},{id:"2",name:"Restaurante El Catador",category:"Gastronomía",rating:4.7,reviews:128,safety:"safe",address:"Av. La Cultura 123",image:"https://picsum.photos/seed/catador/600/400",images:["https://picsum.photos/seed/cata1/600/400","https://picsum.photos/seed/cata2/600/400","https://picsum.photos/seed/cata3/600/400"],description:"El Catador es un restaurante emblemático de Ica que combina la gastronomía tradicional iqueña con toques modernos. Famoso por su pisco sour artesanal y sus platos con productos locales.",history:"Fundado en 1985, El Catador empezó como una pequeña bodega familiar que poco a poco se transformó en uno de los restaurantes más reconocidos de la región.",note:"Prueba el menú degustación de piscos, es la mejor forma de conocer las variedades locales.",hours:"11:00 AM – 10:00 PM",bestTime:"Almuerzo",phone:"+51 956 234 567",price:"S/ 45 promedio",type:"Restaurante Criollo",lat:-14.045,lng:-75.733,tags:["Pisco","Criollo","Menú","Bodega","Vino"],hidden:!1,validated:!0,catColor:"orange",safetyNote:"Establecimiento seguro y reconocido.",safetyValidators:42,allowsReservation:!0,reservationType:"restaurant"},{id:"3",name:"Bodega Vista Alegre",category:"Experiencias",subType:"Cultura",rating:4.6,reviews:97,safety:"safe",address:"Km 3.5 Carretera a Guadalupe",image:"https://picsum.photos/seed/bodegav/600/400",images:["https://picsum.photos/seed/bode1/600/400","https://picsum.photos/seed/bode2/600/400","https://picsum.photos/seed/bode3/600/400"],description:"Una de las bodegas más antiguas de Ica, donde se produce pisco y vino artesanalmente desde la época colonial. Ofrece tours guiados y degustaciones.",hours:"9:00 AM – 5:00 PM",bestTime:"Mañana",phone:"+51 956 345 678",price:"S/ 15 entrada",type:"Cultural / Vino",lat:-14.05,lng:-75.74,tags:["Pisco","Vino","Tour","Historia","Degustación"],hidden:!1,validated:!0,catColor:"blue",safetyNote:"Lugar seguro con guías certificados.",safetyValidators:35,allowsReservation:!0,reservationType:"experience",duration:"Menos de 2h",difficulty:"Fácil",difficultyBars:1,hasSpanishGuide:!0,meetingPoint:"Puerta Principal de la Bodega",pricePerPerson:15,includes:["Guía bilingüe","Degustación de vinos y piscos"],bring:["Protector solar","Efectivo para compras"],schedules:[{date:"2023-10-20",slots:[{time:"09:00",capacity:15,booked:5},{time:"11:00",capacity:15,booked:14},{time:"15:00",capacity:15,booked:8}]}],extraServices:[{id:"ex31",name:"Botella de Pisco de regalo",price:45},{id:"ex32",name:"Transporte desde tu hotel",price:20}]},{id:"4",name:"Las Dunas de Ica",category:"Experiencias",subType:"Aventura",rating:4.8,reviews:289,safety:"safe",address:"Zona de Huacachina",image:"https://picsum.photos/seed/dunas/600/400",images:["https://picsum.photos/seed/duna1/600/400","https://picsum.photos/seed/duna2/600/400","https://picsum.photos/seed/duna3/600/400"],description:"Las imponentes dunas que rodean la laguna de Huacachina ofrecen experiencias de aventura únicas como el sandboarding y los paseos en buggy por el desierto.",hours:"6:00 AM – 6:00 PM",bestTime:"Tarde",phone:"+51 956 456 789",price:"S/ 80 buggy + sandboard",type:"Aventura / Deportes",lat:-14.085,lng:-75.765,tags:["Sandboard","Buggy","Desierto","Adrenalina","Extremo"],hidden:!1,validated:!0,catColor:"orange",safetyNote:"Actividad segura con operadores certificados. Usar protector solar.",safetyValidators:56,allowsReservation:!0,reservationType:"experience",duration:"2 a 4h",difficulty:"Moderado",difficultyBars:2,hasSpanishGuide:!0,meetingPoint:"Entrada a la laguna de Huacachina",pricePerPerson:80,includes:["Equipo completo","Guía bilingüe","Seguro de actividad","Transporte en buggy"],bring:["Protector solar","Ropa cómoda","Agua","Calzado cerrado"],schedules:[{date:"2023-10-20",slots:[{time:"08:00",capacity:12,booked:4},{time:"10:00",capacity:12,booked:11},{time:"14:00",capacity:12,booked:12},{time:"16:00",capacity:12,booked:2}]}],extraServices:[{id:"ex41",name:"Fotografía profesional del tour",price:30},{id:"ex42",name:"Transporte desde tu hotel",price:15},{id:"ex43",name:"Refrigerio especial para dietas",price:20}]},{id:"5",name:"Museo Regional de Ica",category:"Historia",rating:4.5,reviews:201,safety:"safe",address:"Av. Ayabaca s/n",image:"https://picsum.photos/seed/museo/600/400",images:["https://picsum.photos/seed/muse1/600/400","https://picsum.photos/seed/muse2/600/400","https://picsum.photos/seed/muse3/600/400"],description:"El museo regional alberga una impresionante colección de cerámicas Nazca y Paracas, así como réplicas de las famosas Líneas de Nazca. Una ventana al pasado precolombino de la región.",hours:"8:00 AM – 7:00 PM",bestTime:"Mañana",phone:"+51 956 567 890",price:"S/ 10 entrada",type:"Historia / Museo",lat:-14.072,lng:-75.73,tags:["Nazca","Paracas","Arqueología","Cultura","Museo"],hidden:!1,validated:!0,catColor:"blue",safetyNote:"Zona segura en el centro de la ciudad.",safetyValidators:31},{id:"6",name:"Mirador Cerro Blanco",category:"Naturaleza",rating:4.9,reviews:45,safety:"caution",address:"Km 14, Nazca",image:"https://picsum.photos/seed/cerro/600/400",images:["https://picsum.photos/seed/cerr1/600/400","https://picsum.photos/seed/cerr2/600/400","https://picsum.photos/seed/cerr3/600/400"],description:"El Cerro Blanco es la duna más alta del mundo con 2,078 metros sobre el nivel del mar. Ofrece vistas panorámicas espectaculares del desierto peruano.",hours:"Acceso libre",bestTime:"Amanecer",price:"Gratis",lat:-14.887,lng:-74.883,tags:["Duna gigante","Panorámica","Trekking","Aventura extrema"],hidden:!0,validated:!1,catColor:"green",safetyNote:"Terreno irregular. Se recomienda ir con guía y llevar agua suficiente.",safetyValidators:8},{id:"7",name:"Bar El Oasis",category:"Vida nocturna",rating:4.3,reviews:76,safety:"caution",address:"Jr. Lima 456",image:"https://picsum.photos/seed/oasis/600/400",images:["https://picsum.photos/seed/oasi1/600/400","https://picsum.photos/seed/oasi2/600/400","https://picsum.photos/seed/oasi3/600/400"],description:"Bar temático ambientado en un oasis del desierto, con cócteles artesanales y música en vivo los fines de semana.",hours:"6:00 PM – 2:00 AM",bestTime:"Noche",phone:"+51 956 678 901",price:"Consumo mínimo S/ 20",type:"Bar / Nocturno",lat:-14.065,lng:-75.728,tags:["Cócteles","Música en vivo","Nocturno","Terraza"],hidden:!1,validated:!0,catColor:"violet",safetyNote:"Zona céntrica pero se recomienda precaución de noche.",safetyValidators:15},{id:"8",name:"Hostal Las Palmeras",category:"Hospedaje",rating:4.4,reviews:112,safety:"safe",address:"Av. Municipalidad 89",image:"https://picsum.photos/seed/hostal/600/400",images:["https://picsum.photos/seed/host1/600/400","https://picsum.photos/seed/host2/600/400","https://picsum.photos/seed/host3/600/400"],description:"Hostal familiar con piscina, ubicado a pocos minutos de Huacachina. Ofrece habitaciones cómodas a precios accesibles.",hours:"Recepción 24h",phone:"+51 956 789 012",checkIn:"14:00",checkOut:"12:00",price:"Desde S/ 80/noche",type:"Hospedaje",basePrice:80,subType:"Hostal",stars:2,freeCancellation:!0,lat:-14.068,lng:-75.732,tags:["Piscina","WiFi","Familiar","Económico"],amenities:["Piscina","WiFi en todas las áreas","Estacionamiento gratuito","Lavandería"],rooms:[{id:"r1",name:"Habitación Simple",image:"https://picsum.photos/seed/room-simple/400/300",size:12,beds:1,features:["Ventilador","TV compartida","Baño compartido"],price:30},{id:"r2",name:"Habitación Doble",image:"https://picsum.photos/seed/room-doble/400/300",size:18,beds:2,features:["Ventilador","TV","Baño privado","Vista a la piscina"],price:80}],stayTypes:["Noches"],breakfasts:[{id:"b1",name:"Desayuno continental",price:15,image:"https://picsum.photos/seed/bk-cont/100/100"},{id:"b2",name:"Sin desayuno",price:0}],extraServices:[{id:"s1",name:"Servicio de lavandería",price:10}],hidden:!1,validated:!0,catColor:"blue",safetyNote:"Hospedaje seguro con recepción las 24 horas.",safetyValidators:22,allowsReservation:!0,reservationType:"hotel"},{id:"8a",name:"Hotel Dunas Doradas",category:"Hospedaje",rating:4.8,reviews:340,safety:"safe",address:"Residencial La Angostura, Ica",image:"https://picsum.photos/seed/hotelmain/600/400",images:["https://picsum.photos/seed/hotel1/600/400","https://picsum.photos/seed/hotel2/600/400","https://picsum.photos/seed/hotel3/600/400"],description:"Elegante hotel de 4 estrellas en la mejor zona de Ica. Disfruta de nuestras amplias piscinas, spa, canchas deportivas y restaurante de primer nivel.",hours:"Recepción 24h",phone:"+51 956 123 999",checkIn:"15:00",checkOut:"12:00",price:"Desde S/ 250/noche",type:"Hospedaje",basePrice:250,subType:"Hotel",stars:4,freeCancellation:!1,lat:-14.04,lng:-75.73,tags:["Piscina","Desayuno incluido","Spa","Restaurante","Jacuzzi"],amenities:["Piscina","Restaurant propio","Bar en la terraza","Sala de eventos","WiFi en todas las áreas","Estacionamiento gratuito","Servicio de habitaciones 24h","Caja de seguridad","Gimnasio","Spa"],rooms:[{id:"r1",name:"Habitación Matrimonial Clásica",image:"https://picsum.photos/seed/room-matri/400/300",size:25,beds:1,features:["Aire acondicionado","TV","Minibar","Vista al jardín"],price:250},{id:"r2",name:"Habitación Doble Superior",image:"https://picsum.photos/seed/room-superior/400/300",size:30,beds:2,features:["Aire acondicionado","TV","Minibar","Vista a la piscina","Balcón"],price:320},{id:"r3",name:"Suite Junior con Jacuzzi",image:"https://picsum.photos/seed/room-suite/400/300",size:45,beds:1,features:["Aire acondicionado",'Smart TV 55"',"Jacuzzi","Sala de estar","Vista panorámica"],price:450}],stayTypes:["Horas","Noches"],minHours:3,maxHours:8,pricePerHour:50,breakfasts:[{id:"b1",name:"Desayuno buffet libre",price:45,image:"https://picsum.photos/seed/bk-buffet/100/100"},{id:"b2",name:"Desayuno a la habitación",price:60,image:"https://picsum.photos/seed/bk-room/100/100"},{id:"b3",name:"Sin desayuno",price:0}],extraServices:[{id:"s1",name:"Traslado desde/hacia aeropuerto",price:80},{id:"s2",name:"Late check-out hasta las 2pm",price:100},{id:"s3",name:"Early check-in desde las 10am",price:80},{id:"s4",name:"Cuna para bebé",price:0},{id:"s5",name:"Decoración de habitación para ocasión especial",price:150},{id:"s6",name:"Servicio de lavandería",price:25}],hidden:!1,validated:!0,catColor:"blue",safetyNote:"Complejo hotelero cerrado con seguridad privada 24/7.",safetyValidators:65,allowsReservation:!0,reservationType:"hotel"},{id:"8b",name:"Oasis Eco Camping",category:"Hospedaje",rating:4.9,reviews:88,safety:"safe",address:"Desierto de Huacachina",image:"https://picsum.photos/seed/glamping/600/400",images:["https://picsum.photos/seed/glamp1/600/400","https://picsum.photos/seed/glamp2/600/400"],description:"Experimenta dormir bajo las estrellas en el desierto con todas las comodidades de un hotel de lujo. Tiendas tipo safari con baño privado y terrazas.",hours:"Recepción 8AM-8PM",phone:"+51 956 444 555",checkIn:"14:00",checkOut:"11:00",price:"Desde S/ 180/noche",type:"Hospedaje",basePrice:180,subType:"Glamping",stars:3,freeCancellation:!0,lat:-14.09,lng:-75.76,tags:["Naturaleza","Desierto","Fogata","Ecológico"],amenities:["Estacionamiento gratuito","Tour desk","Bar en la terraza"],rooms:[{id:"r1",name:"Tienda Safari Doble",image:"https://picsum.photos/seed/tent1/400/300",size:20,beds:2,features:["Ventilador","Baño privado","Terraza","Vista al desierto"],price:180},{id:"r2",name:"Tienda Safari Matrimonial Premium",image:"https://picsum.photos/seed/tent2/400/300",size:24,beds:1,features:["Ventilador","Baño privado","Zona de fogata privada","Vista panorámica"],price:250}],stayTypes:["Noches"],breakfasts:[{id:"b1",name:"Desayuno americano completo",price:25,image:"https://picsum.photos/seed/bk-amer/100/100"},{id:"b2",name:"Sin desayuno",price:0}],extraServices:[{id:"s1",name:"Tour en buggy privado",price:120},{id:"s2",name:"Cena romántica en las dunas",price:200}],hidden:!1,validated:!0,catColor:"blue",safetyNote:"Seguridad en campamento, recomendable reservar tours guiados.",safetyValidators:15,allowsReservation:!0,reservationType:"hotel"},{id:"9",name:"Cascada Escondida de Tingue",category:"Naturaleza",rating:4.2,reviews:12,safety:"caution",address:"Ruta a Tingue, km 8",image:"https://picsum.photos/seed/cascadatingue/600/400",images:["https://picsum.photos/seed/casc1/600/400","https://picsum.photos/seed/casc2/600/400"],description:"Una cascada oculta entre los cerros de Tingue, accesible solo a pie. Lugar perfecto para los que buscan naturaleza virgen y tranquilidad.",hours:"Acceso libre",bestTime:"Mañana",price:"Gratis",lat:-13.95,lng:-75.68,tags:["Cascada","Senderismo","Naturaleza virgen","Secreto"],hidden:!0,validated:!1,catColor:"green",safetyNote:"Camino sin señalizar. Ir con guía local.",safetyValidators:3,sharedBy:"María García",validationGoal:15,validationCount:3},{id:"10",name:"Mirador Secreto del Valle",category:"Naturaleza",rating:4.6,reviews:8,safety:"safe",address:"Cerro San Joaquín, Ica",image:"https://picsum.photos/seed/miradorsecreto/600/400",images:["https://picsum.photos/seed/mira1/600/400","https://picsum.photos/seed/mira2/600/400"],description:"Un punto panorámico poco conocido desde donde se ve todo el valle de Ica. Las vistas al atardecer son inigualables.",hours:"Acceso libre",bestTime:"Atardecer",price:"Gratis",lat:-14.035,lng:-75.71,tags:["Panorámica","Atardecer","Secreto","Fotografía"],hidden:!0,validated:!1,catColor:"green",safetyNote:"Zona tranquila pero ir acompañado.",safetyValidators:5,sharedBy:"María García",validationGoal:15,validationCount:5},{id:"11",name:"Cueva de los Cristales",category:"Aventura",rating:4.8,reviews:5,safety:"caution",address:"Quebrada seca, Nazca",image:"https://picsum.photos/seed/cuevacristales/600/400",images:["https://picsum.photos/seed/cuev1/600/400","https://picsum.photos/seed/cuev2/600/400"],description:"Una cueva natural con formaciones de cristales de yeso que brillan con la luz. Descubierta recientemente por exploradores locales.",hours:"Solo con guía",bestTime:"Mediodía",price:"Donación voluntaria",lat:-14.92,lng:-75.15,tags:["Cueva","Cristales","Exploración","Geología"],hidden:!0,validated:!1,catColor:"orange",safetyNote:"Terreno rocoso. Llevar linterna y casco.",safetyValidators:1,sharedBy:"María García",validationGoal:20,validationCount:1},{id:"12",name:"Pozo Encantado de Santiago",category:"Naturaleza",rating:4,reviews:3,safety:"caution",address:"Caserío Santiago, Santiago de Chocorvos",image:"https://picsum.photos/seed/pozoencantado/600/400",images:["https://picsum.photos/seed/pozo1/600/400","https://picsum.photos/seed/pozo2/600/400"],description:"Un pozo natural de aguas cristalinas escondido entre formaciones rocosas. Los lugareños cuentan leyendas sobre sus propiedades curativas.",hours:"Acceso libre",bestTime:"Mediodía",price:"Gratis",lat:-14.17,lng:-75.89,tags:["Pozo natural","Leyendas","Agua cristalina","Místico"],hidden:!0,validated:!1,catColor:"blue",safetyNote:"Acceso por camino de tierra. Llevar calzado adecuado.",safetyValidators:4,sharedBy:"Carlos Torres",validationGoal:15,validationCount:4},{id:"13",name:"Petroglifos de Chichictara",category:"Historia",rating:4.7,reviews:6,safety:"safe",address:"Palpa, camino a Chichictara",image:"https://picsum.photos/seed/petroglifos/600/400",images:["https://picsum.photos/seed/petro1/600/400","https://picsum.photos/seed/petro2/600/400"],description:"Grabados rupestres milenarios en piedra que representan figuras humanas y animales. Un sitio arqueológico poco conocido a las afueras de Palpa.",hours:"Acceso libre",bestTime:"Mañana",price:"Gratis",lat:-14.53,lng:-75.18,tags:["Petroglifos","Arqueología","Nazca","Precolombino"],hidden:!0,validated:!1,catColor:"blue",safetyNote:"Zona despejada y segura durante el día.",safetyValidators:6,sharedBy:"Lucía Flores",validationGoal:12,validationCount:6},{id:"14",name:"Laguna Morón",category:"Naturaleza",rating:4.5,reviews:9,safety:"caution",address:"Km 32 vía Los Aquijes - Pisco",image:"https://picsum.photos/seed/lagunamoron/600/400",images:["https://picsum.photos/seed/moron1/600/400","https://picsum.photos/seed/moron2/600/400"],description:"Un oasis desértico poco explorado, rodeado de dunas vírgenes y agua turquesa. Mucho más tranquilo que Huacachina y sin turismo masivo.",hours:"Acceso libre",bestTime:"Atardecer",price:"Gratis",lat:-14.11,lng:-75.82,tags:["Oasis","Dunas","Laguna","Tranquilidad","Fotografía"],hidden:!0,validated:!1,catColor:"green",safetyNote:"Camino de acceso complicado. Ir en grupo.",safetyValidators:7,sharedBy:"Pedro Quispe",validationGoal:18,validationCount:7},{id:"15",name:"Ruinas de Tambo Colorado",category:"Historia",rating:4.3,reviews:4,safety:"safe",address:"Humay, Pisco",image:"https://picsum.photos/seed/tambocolorado/600/400",images:["https://picsum.photos/seed/tambo1/600/400","https://picsum.photos/seed/tambo2/600/400"],description:"Complejo arquitectónico inca con paredes pintadas de rojo, blanco y amarillo. Uno de los palacios incas mejor conservados de la costa peruana.",hours:"8:00 AM – 5:00 PM",bestTime:"Mañana",price:"S/ 5",lat:-13.96,lng:-75.57,tags:["Inca","Ruinas","Patrimonio","Arquitectura","Colonial"],hidden:!0,validated:!1,catColor:"blue",safetyNote:"Sitio arqueológico protegido. Respetar señalización.",safetyValidators:2,sharedBy:"Ana Mendoza",validationGoal:15,validationCount:2},{id:"16",name:"Cañón de los Perdidos",category:"Aventura",rating:4.9,reviews:7,safety:"caution",address:"Desierto de Ocucaje, Ica",image:"https://picsum.photos/seed/canonperdidos/600/400",images:["https://picsum.photos/seed/canon1/600/400","https://picsum.photos/seed/canon2/600/400"],description:"Un impresionante cañón de formaciones rocosas esculpidas por el viento durante millones de años. Paisajes marcianos a solo 2 horas de Ica.",hours:"Acceso libre",bestTime:"Amanecer",price:"Gratis",lat:-14.38,lng:-75.62,tags:["Cañón","Desierto","Formaciones","Trekking","Fotografía"],hidden:!0,validated:!1,catColor:"orange",safetyNote:"Zona remota sin cobertura móvil. Ir con guía experimentado.",safetyValidators:5,sharedBy:"Roberto Díaz",validationGoal:25,validationCount:5},{id:"20",name:"Café del Desierto",category:"Gastronomía",rating:4.8,reviews:105,safety:"safe",address:"Av. El Sol 452",subType:"Cafetería",image:"https://picsum.photos/seed/cafedesierto/600/400",images:["https://picsum.photos/seed/cafe1/600/400","https://picsum.photos/seed/cafe2/600/400"],description:"El mejor café de especialidad de la ciudad. Pastelería casera y un ambiente relajado ideal para leer o trabajar.",hours:"8:00 AM – 8:00 PM",bestTime:"Tarde",phone:"+51 956 111 222",price:"S/ 20 promedio",type:"Cafetería / Postres",lat:-14.07,lng:-75.73,tags:["Café","Postres","Desayuno","Tranquilo","WiFi"],hidden:!1,validated:!0,catColor:"orange",safetyNote:"Ubicación muy transitada y segura.",safetyValidators:20,allowsReservation:!0,reservationType:"restaurant"},{id:"21",name:"Mar Pacífico Cevichería",category:"Gastronomía",rating:4.6,reviews:210,safety:"safe",address:"Jr. San Martín 880",subType:"Cevichería",image:"https://picsum.photos/seed/cevicheria/600/400",images:["https://picsum.photos/seed/cevi1/600/400","https://picsum.photos/seed/cevi2/600/400"],description:"Pescados y mariscos frescos del día. Especialidad en ceviche de corvina y jalea mixta marina. Porciones abundantes.",hours:"10:00 AM – 5:00 PM",bestTime:"Almuerzo",phone:"+51 956 333 444",price:"S/ 35 promedio",type:"Marina / Pescados",lat:-14.075,lng:-75.735,tags:["Ceviche","Mariscos","Fresco","Familiar","Almuerzo"],hidden:!1,validated:!0,catColor:"orange",safetyNote:"Establecimiento seguro.",safetyValidators:45,allowsReservation:!0,reservationType:"restaurant"},{id:"22",name:"La Olla Pallar",category:"Gastronomía",rating:4.7,reviews:145,safety:"safe",address:"Km 5 Antigua Panamericana Sur",subType:"Picantería",image:"https://picsum.photos/seed/picanteria/600/400",images:["https://picsum.photos/seed/pica1/600/400","https://picsum.photos/seed/pica2/600/400"],description:"Tradición y leña. Picantería tradicional con ollas de barro ofreciendo pallares regionales, carapulcra y la emblemática sopa seca.",hours:"11:00 AM – 6:00 PM",bestTime:"Almuerzo",phone:"+51 956 555 666",price:"S/ 25 promedio",type:"Criollo / Tradicional",lat:-14.085,lng:-75.745,tags:["Pallar","Carapulcra","Tradición","Leña","Criollo"],hidden:!1,validated:!0,catColor:"orange",safetyNote:"Restaurante campestre seguro.",safetyValidators:30,allowsReservation:!0,reservationType:"restaurant"},{id:"23",name:"Panadería San Antonio",category:"Gastronomía",rating:4.5,reviews:300,safety:"safe",address:"Plaza de Armas esq. Libertad",subType:"Panadería",image:"https://picsum.photos/seed/panaderia/600/400",images:["https://picsum.photos/seed/pana1/600/400","https://picsum.photos/seed/pana2/600/400"],description:"Pan horneado fresco todas las mañanas. Desde las tradicionales galletas de pacanas hasta los panes artesanales de masa madre y empanadas.",hours:"6:30 AM – 9:00 PM",bestTime:"Mañana",phone:"+51 956 777 888",price:"S/ 10 promedio",type:"Panadería / Desayunos",lat:-14.065,lng:-75.725,tags:["Pan","Desayuno","Empanadas","Tradicional","Café"],hidden:!1,validated:!0,catColor:"orange",safetyNote:"Ubicación muy céntrica y concurrida.",safetyValidators:80,allowsReservation:!1},{id:"24",name:"Gelatería El Choco",category:"Gastronomía",rating:4.9,reviews:180,safety:"safe",address:"Calle Bolívar 302",subType:"Heladería",image:"https://picsum.photos/seed/heladeria/600/400",images:["https://picsum.photos/seed/hela1/600/400","https://picsum.photos/seed/hela2/600/400"],description:"Helados artesanales de frutas de la pasión locales como el mango, maracuyá, y variedades de chocolate con leche. Opción ideal para el calor intenso.",hours:"11:00 AM – 10:00 PM",bestTime:"Tarde",phone:"+51 956 999 000",price:"S/ 12 promedio",type:"Heladería / Postres",lat:-14.072,lng:-75.732,tags:["Helado","Artesanal","Frutas","Dulce","Refrescante"],hidden:!1,validated:!0,catColor:"orange",safetyNote:"Local seguro y frecuentado por familias.",safetyValidators:50,allowsReservation:!1},{id:"25",name:"Burger Route",category:"Gastronomía",rating:4.4,reviews:90,safety:"safe",address:"Parque de la Cultura",subType:"Food truck",image:"https://picsum.photos/seed/foodtruck/600/400",images:["https://picsum.photos/seed/food1/600/400","https://picsum.photos/seed/food2/600/400"],description:"Hamburguesas smash jugosas estilo americano con un toque peruano. Food truck estacionado en un parque con mesas al aire libre.",hours:"6:00 PM – 12:00 AM",bestTime:"Noche",phone:"+51 956 222 333",price:"S/ 22 promedio",type:"Comida Rápida / Burgers",lat:-14.078,lng:-75.738,tags:["Hamburguesas","Urbano","Noche","Smash","Foodtruck"],hidden:!1,validated:!0,catColor:"orange",safetyNote:"Ambiente al aire libre seguro e iluminado.",safetyValidators:18,allowsReservation:!1},{id:"30",name:"Farmacia Inkafarma Ica Centro",category:"Servicios",subType:"Farmacia",rating:4.3,reviews:85,safety:"safe",address:"Av. Grau 240, Centro de Ica",image:"https://picsum.photos/seed/farmacia1/600/400",images:["https://picsum.photos/seed/farm1/600/400","https://picsum.photos/seed/farm2/600/400"],description:"Farmacia completa con atención las 24 horas, servicio de delivery de medicamentos y asesoría farmacéutica permanente.",hours:"24 horas",phone:"+51 956 400 100",lat:-14.066,lng:-75.729,tags:["Medicamentos","24 horas","Delivery","Genéricos"],hidden:!1,validated:!0,catColor:"green",isOpen:!0,acceptsCard:!0,hasParking:!1,is24h:!0,hasDelivery:!0,availableServices:["Venta con receta","Venta sin receta","Genéricos disponibles","Toma de presión gratuita","Inyectables a domicilio","Control de glucosa","Nebulizaciones","Asesoría farmacéutica"],sampleMeds:[{name:"Paracetamol 500mg",price:1.5,needsRx:!1,available:!0},{name:"Amoxicilina 500mg",price:3.2,needsRx:!0,available:!0},{name:"Ibuprofeno 400mg",price:2,needsRx:!1,available:!0},{name:"Omeprazol 20mg",price:1.8,needsRx:!1,available:!0},{name:"Loratadina 10mg",price:2.5,needsRx:!1,available:!1}]},{id:"31",name:"Clínica San Juan de Dios",category:"Servicios",subType:"Centro médico",rating:4.5,reviews:120,safety:"safe",address:"Calle Municipalidad 320, Ica",image:"https://picsum.photos/seed/clinica1/600/400",images:["https://picsum.photos/seed/clin1/600/400","https://picsum.photos/seed/clin2/600/400"],description:"Centro médico con atención de urgencias 24/7, múltiples especialidades y laboratorio clínico completo.",hours:"7:00 AM – 9:00 PM",phone:"+51 956 400 200",lat:-14.064,lng:-75.731,tags:["Urgencias","Especialidades","Laboratorio","Ambulancia"],hidden:!1,validated:!0,catColor:"green",isOpen:!0,acceptsCard:!0,hasParking:!0,emergencyPhone:"+51 956 400 911",hasAmbulance:!0,has24hEmergency:!0,specialties:[{name:"Medicina general",doctor:"Dr. Luis Mendoza",price:50},{name:"Traumatología",doctor:"Dr. Carlos Vega",price:80},{name:"Pediatría",doctor:"Dra. Ana Flores",price:60},{name:"Odontología",doctor:"Dr. Pedro Salazar",price:70},{name:"Dermatología",doctor:"Dra. María Quispe",price:80},{name:"Cardiología",doctor:"Dr. Jorge Ramírez",price:100},{name:"Psicología",doctor:"Lic. Rosa Torres",price:60}],supportServices:["Laboratorio clínico","Rayos X","Ecografía","Farmacia interna","Estacionamiento","WiFi en sala de espera"]},{id:"32",name:"Casa de Cambio El Sol",category:"Servicios",subType:"Cambio de moneda",rating:4.4,reviews:65,safety:"safe",address:"Jr. Lima 415, Centro de Ica",image:"https://picsum.photos/seed/cambio1/600/400",images:["https://picsum.photos/seed/camb1/600/400"],description:"Casa de cambio con las mejores tasas de Ica. Cambio de dólares, euros y soles. Servicio rápido y seguro.",hours:"8:00 AM – 7:00 PM",phone:"+51 956 400 300",lat:-14.067,lng:-75.728,tags:["Dólares","Euros","Soles","Tasa competitiva"],hidden:!1,validated:!0,catColor:"green",isOpen:!0,acceptsCard:!1,hasParking:!1,exchangeRates:{usdBuy:3.72,usdSell:3.78,eurBuy:4.01,eurSell:4.1},hasDelivery:!1},{id:"33",name:"Cajero BCP Plaza de Armas",category:"Servicios",subType:"Cajero ATM",rating:4,reviews:40,safety:"safe",address:"Plaza de Armas, Ica",image:"https://picsum.photos/seed/cajero1/600/400",images:["https://picsum.photos/seed/atm1/600/400"],description:"Cajero automático del BCP ubicado en la Plaza de Armas. Acepta Visa y Mastercard.",hours:"24 horas",phone:"",lat:-14.068,lng:-75.7286,tags:["BCP","Visa","Mastercard","24h"],hidden:!1,validated:!0,catColor:"green",isOpen:!0,acceptsCard:!0,hasParking:!1,bank:"BCP",networks:["Visa","Mastercard","AMEX"],dailyLimit:"S/ 2,500",chargesOtherBanks:!0,hasRamp:!0},{id:"34",name:"Lavandería Express Clean",category:"Servicios",subType:"Lavandería",rating:4.6,reviews:55,safety:"safe",address:"Calle Tacna 180, Ica",image:"https://picsum.photos/seed/lavanderia1/600/400",images:["https://picsum.photos/seed/lav1/600/400","https://picsum.photos/seed/lav2/600/400"],description:"Servicio de lavandería profesional con opciones express y recogida a domicilio. Ideales para turistas.",hours:"7:00 AM – 8:00 PM",phone:"+51 956 400 500",lat:-14.071,lng:-75.726,tags:["Lavado","Planchado","Express","Domicilio"],hidden:!1,validated:!0,catColor:"green",isOpen:!0,acceptsCard:!0,hasParking:!1,laundryServices:[{name:"Lavado y secado",unit:"por kg",price:6,deliveryTime:"24 horas"},{name:"Lavado y planchado",unit:"por kg",price:8,deliveryTime:"24 horas"},{name:"Lavado en seco",unit:"por prenda",price:15,deliveryTime:"48 horas"},{name:"Planchado individual",unit:"por prenda",price:3,deliveryTime:"6 horas"},{name:"Edredones y almohadas",unit:"por pieza",price:20,deliveryTime:"48 horas"},{name:"Lavado express",unit:"por kg",price:12,deliveryTime:"4 horas",surcharge:!0}],hasPickup:!0,pickupFee:5},{id:"35",name:"Barbería Don Julio",category:"Servicios",subType:"Barbería y salón",rating:4.7,reviews:90,safety:"safe",address:"Av. San Martín 560, Ica",image:"https://picsum.photos/seed/barberia1/600/400",images:["https://picsum.photos/seed/barb1/600/400","https://picsum.photos/seed/barb2/600/400"],description:"Barbería premium con cortes modernos y clásicos. Atención personalizada con cita previa.",hours:"9:00 AM – 8:00 PM",phone:"+51 956 400 600",lat:-14.069,lng:-75.73,tags:["Corte","Barba","Premium","Moderno"],hidden:!1,validated:!0,catColor:"green",isOpen:!0,acceptsCard:!0,hasParking:!1,salonServices:[{name:"Corte clásico",price:15,duration:"30 min",image:"https://picsum.photos/seed/corte1/200/200"},{name:"Corte moderno",price:20,duration:"40 min",image:"https://picsum.photos/seed/corte2/200/200"},{name:"Arreglo de barba",price:10,duration:"20 min",image:"https://picsum.photos/seed/barba1/200/200"},{name:"Afeitado con navaja",price:20,duration:"30 min",image:"https://picsum.photos/seed/afeitado/200/200"},{name:"Corte + barba",price:25,duration:"50 min",image:"https://picsum.photos/seed/cortebarba/200/200"},{name:"Tratamiento capilar",price:35,duration:"40 min",image:"https://picsum.photos/seed/capilar/200/200"}],barbers:["Julio","Marco","Diego"]},{id:"36",name:"Souvenirs El Oasis",category:"Servicios",subType:"Tienda de souvenirs",rating:4.5,reviews:70,safety:"safe",address:"Malecón de Huacachina s/n",image:"https://picsum.photos/seed/souvenirs1/600/400",images:["https://picsum.photos/seed/souv1/600/400","https://picsum.photos/seed/souv2/600/400","https://picsum.photos/seed/souv3/600/400"],description:"Tienda de recuerdos y artesanías locales junto al oasis de Huacachina. Artesanías, textiles, postales y más.",hours:"8:00 AM – 9:00 PM",phone:"+51 956 400 700",lat:-14.088,lng:-75.762,tags:["Artesanía","Recuerdos","Postales","Pisco"],hidden:!1,validated:!0,catColor:"green",isOpen:!0,acceptsCard:!0,hasParking:!1,productCategories:["Artesanías en cerámica","Tejidos y textiles","Réplicas arqueológicas","Pintura local","Postales","Productos del pisco","Bisutería de arena","Llaveros y magnetos","Dulces regionales"]},{id:"37",name:"Ica Rental Gear",category:"Servicios",subType:"Alquiler de equipos",rating:4.4,reviews:45,safety:"safe",address:"Av. Huacachina 200",image:"https://picsum.photos/seed/rental1/600/400",images:["https://picsum.photos/seed/rent1/600/400","https://picsum.photos/seed/rent2/600/400"],description:"Alquiler de equipos para aventura: tablas de sandboard, camping, trekking y más.",hours:"7:00 AM – 7:00 PM",phone:"+51 956 400 800",lat:-14.086,lng:-75.76,tags:["Sandboard","Camping","Trekking","Alquiler"],hidden:!1,validated:!0,catColor:"green",isOpen:!0,acceptsCard:!0,hasParking:!0,equipment:[{name:"Tabla de Sandboard",priceHour:10,priceDay:35,available:!0,image:"https://picsum.photos/seed/sandb/200/200"},{name:"Tienda de camping 2p",priceHour:null,priceDay:40,available:!0,image:"https://picsum.photos/seed/tent/200/200"},{name:"Sleeping bag",priceHour:null,priceDay:15,available:!0,image:"https://picsum.photos/seed/sleeping/200/200"},{name:"Mochila de trekking 50L",priceHour:null,priceDay:20,available:!1,image:"https://picsum.photos/seed/mochila/200/200"},{name:"Cámara subacuática",priceHour:15,priceDay:50,available:!0,image:"https://picsum.photos/seed/camara/200/200"}],packages:[{name:"Paquete Sandboard completo",items:["Tabla","Chaleco","Guantes"],price:30,discount:15},{name:"Paquete Camping básico",items:["Tienda 2p","Sleeping bag","Linterna"],price:50,discount:10}]},{id:"38",name:"Ica Tours & Travel",category:"Servicios",subType:"Agencia de viajes",rating:4.8,reviews:200,safety:"safe",address:"Jr. Cajamarca 102, Ica",image:"https://picsum.photos/seed/agencia1/600/400",images:["https://picsum.photos/seed/agen1/600/400","https://picsum.photos/seed/agen2/600/400","https://picsum.photos/seed/agen3/600/400"],description:"Agencia de viajes líder en Ica. Tours por bodegas, Líneas de Nazca, Huacachina, city tours y más.",hours:"8:00 AM – 7:00 PM",phone:"+51 956 400 900",lat:-14.0655,lng:-75.7275,tags:["Tours","Nazca","Huacachina","Bodegas"],hidden:!1,validated:!0,catColor:"green",isOpen:!0,acceptsCard:!0,hasParking:!1,tours:[{name:"Tour Bodegas Vitivinícolas",duration:"4h",price:65,difficulty:"Fácil",image:"https://picsum.photos/seed/tourbodega/600/300"},{name:"Sobrevuelo Líneas de Nazca",duration:"2h",price:280,difficulty:"Fácil",image:"https://picsum.photos/seed/tournazca/600/300"},{name:"Buggy + Sandboard Huacachina",duration:"2h",price:80,difficulty:"Moderado",image:"https://picsum.photos/seed/tourbuggy/600/300"},{name:"City Tour Centro Histórico",duration:"3h",price:40,difficulty:"Fácil",image:"https://picsum.photos/seed/tourcity/600/300"},{name:"Tour Gastronómico Local",duration:"5h",price:95,difficulty:"Fácil",image:"https://picsum.photos/seed/tourgastro/600/300"}]},{id:"39",name:"Foto Ica Studio",category:"Servicios",subType:"Fotografía turística",rating:4.9,reviews:35,safety:"safe",address:"Malecón de Huacachina 50",image:"https://picsum.photos/seed/foto1/600/400",images:["https://picsum.photos/seed/fot1/600/400","https://picsum.photos/seed/fot2/600/400","https://picsum.photos/seed/fot3/600/400"],description:"Fotógrafo profesional especializado en sesiones turísticas y de naturaleza en Ica y Huacachina.",hours:"7:00 AM – 6:00 PM",phone:"+51 956 401 000",lat:-14.087,lng:-75.7615,tags:["Fotografía","Retratos","Paisaje","Profesional"],hidden:!1,validated:!0,catColor:"green",isOpen:!0,acceptsCard:!0,hasParking:!1,photographer:"Alejandro Vásquez",specialty:"Fotografía de viajes y naturaleza",photoPackages:[{name:"Sesión rápida Huacachina",hours:1,photos:20,price:80},{name:"Sesión completa en dunas",hours:3,photos:60,price:200,locations:2},{name:"Cobertura de grupo",hours:8,photos:150,price:450},{name:"Video reel 60s",hours:2,photos:0,price:150,isVideo:!0}]},{id:"40",name:"Impresiones Rápidas Ica",category:"Servicios",subType:"Impresión y papelería",rating:4.2,reviews:30,safety:"safe",address:"Calle Libertad 220, Ica",image:"https://picsum.photos/seed/imprenta1/600/400",images:["https://picsum.photos/seed/imp1/600/400"],description:"Servicio de impresión, fotocopiado, escaneado y papelería general. Impresión de fotos y documentos.",hours:"8:00 AM – 7:00 PM",phone:"+51 956 401 100",lat:-14.0675,lng:-75.7265,tags:["Impresión","Fotocopiado","Fotos","Papelería"],hidden:!1,validated:!0,catColor:"green",isOpen:!0,acceptsCard:!1,hasParking:!1,printServices:[{name:"Impresión B/N",unit:"por hoja",price:.1},{name:"Impresión a color",unit:"por hoja",price:.5},{name:"Impresión de foto 10x15",unit:"por foto",price:2},{name:"Plastificado",unit:"por hoja",price:1.5},{name:"Anillado",unit:"por doc",price:5},{name:"Fotocopiado",unit:"por hoja",price:.05},{name:"Escaneo",unit:"por doc",price:1}]},{id:"41",name:"WiFi Plaza de Armas",category:"Servicios",subType:"Zona WiFi",rating:3.8,reviews:25,safety:"safe",address:"Plaza de Armas, Ica",image:"https://picsum.photos/seed/wifi1/600/400",images:["https://picsum.photos/seed/wif1/600/400"],description:"Zona WiFi pública gratuita en la Plaza de Armas de Ica. Velocidad moderada para navegación básica.",hours:"6:00 AM – 11:00 PM",phone:"",lat:-14.0678,lng:-75.7286,tags:["WiFi","Gratis","Plaza","Público"],hidden:!1,validated:!0,catColor:"green",isOpen:!0,acceptsCard:!1,hasParking:!1,networkName:"ICA_WiFi_Libre",speed:"10 Mbps",needsPassword:!1,amenities:["Tomacorrientes","Bancas","Iluminación nocturna","Seguridad municipal"]},{id:"50",name:"El Huarangal Bar",category:"Vida nocturna",subType:"Bar",rating:4.6,reviews:115,safety:"safe",address:"Av. Los Maestros 280, Ica",image:"https://picsum.photos/seed/bar1/600/400",images:["https://picsum.photos/seed/barr1/600/400","https://picsum.photos/seed/barr2/600/400","https://picsum.photos/seed/barr3/600/400"],description:"Bar con ambiente relajado y coctelería artesanal. Especialista en pisco sour y chilcanos de autor. Happy hour de 8pm a 10pm.",hours:"Jue–Sáb: 8:00 PM – 2:00 AM",phone:"+51 956 500 100",lat:-14.0665,lng:-75.7315,tags:["Pisco","Cócteles","Happy Hour","Live Music"],hidden:!1,validated:!0,catColor:"purple",isOpen:!0,entryPrice:0,musicType:"Variada",capacity:80,dressCode:"Casual elegante",openDays:["Jueves","Viernes","Sábado"],features:["Show en vivo los fines de semana","Happy hour 8pm-10pm","Reserva de mesa privada","Estacionamiento"],drinks:{house:[{name:"Pisco Sour Clásico",price:18,image:"https://picsum.photos/seed/piscosour/200/200",desc:"El auténtico pisco sour iqueño con pisco quebranta"},{name:"Chilcano de Maracuyá",price:16,image:"https://picsum.photos/seed/chilcano/200/200",desc:"Chilcano refrescante con jugo natural de maracuyá"},{name:"Capitán",price:20,image:"https://picsum.photos/seed/capitan/200/200",desc:"Pisco con vermouth dulce, clásico peruano"}],cocktails:[{name:"Mojito",price:22},{name:"Cuba Libre",price:18},{name:"Margarita",price:24},{name:"Gin Tonic",price:22}],beers:[{name:"Cusqueña Dorada",price:12},{name:"Pilsen Callao",price:10},{name:"Corona",price:15},{name:"Heineken",price:16}],nonAlcoholic:[{name:"Chicha Morada",price:8},{name:"Limonada frozen",price:10},{name:"Agua mineral",price:5}]},shows:[{artist:"Trio Acústico Los Iqueños",date:"Vie 20 Jun",time:"10:00 PM",image:"https://picsum.photos/seed/show1/300/200"},{artist:"DJ Sandstorm",date:"Sáb 21 Jun",time:"11:00 PM",image:"https://picsum.photos/seed/show2/300/200"}],zones:[{name:"Zona regular",tables:10,color:"#22c55e"},{name:"Zona VIP",tables:4,color:"#eab308",extraPrice:50},{name:"Barra",tables:0,color:"#3b82f6"}],extras:[{name:"Botella de bienvenida",price:80},{name:"Decoración para celebración",price:60},{name:"Lista de acceso sin cola",price:20}]},{id:"51",name:"La Noche Discoteca",category:"Vida nocturna",subType:"Discoteca",rating:4.3,reviews:200,safety:"safe",address:"Av. San Martín 900, Ica",image:"https://picsum.photos/seed/disco1/600/400",images:["https://picsum.photos/seed/disc1/600/400","https://picsum.photos/seed/disc2/600/400"],description:"La discoteca más grande de Ica con capacidad para 300 personas. Música electrónica, latina y reggaetón. Zona VIP exclusiva.",hours:"Vie–Sáb: 10:00 PM – 5:00 AM",phone:"+51 956 500 200",lat:-14.07,lng:-75.734,tags:["Discoteca","Electrónica","Reggaetón","VIP"],hidden:!1,validated:!0,catColor:"purple",isOpen:!0,entryPrice:30,musicType:"Electrónica / Latina",capacity:300,dressCode:"Elegante",openDays:["Viernes","Sábado"],features:["Pista de baile","Show en vivo los fines","Barra libre disponible","Zona VIP","Estacionamiento"],drinks:{house:[{name:"Noche Especial",price:25,image:"https://picsum.photos/seed/cocktail1/200/200",desc:"Cóctel de la casa con pisco, maracuyá y espuma"}],cocktails:[{name:"Vodka Tonic",price:20},{name:"Whisky Sour",price:28},{name:"Long Island",price:30}],beers:[{name:"Cusqueña",price:12},{name:"Budweiser",price:14}],nonAlcoholic:[{name:"Red Bull",price:15},{name:"Agua",price:5}]},shows:[{artist:"DJ Martinez",date:"Vie 20 Jun",time:"12:00 AM",image:"https://picsum.photos/seed/dj1/300/200"}],zones:[{name:"Zona regular",tables:15,color:"#22c55e"},{name:"Zona VIP",tables:6,color:"#eab308",extraPrice:100},{name:"Barra",tables:0,color:"#3b82f6"}],extras:[{name:"Botella de bienvenida",price:120},{name:"Decoración para celebración",price:80},{name:"Lista de acceso sin cola",price:30}]},{id:"52",name:"Peña Don Bosco",category:"Vida nocturna",subType:"Peña folklórica",rating:4.8,reviews:95,safety:"safe",address:"Jr. Ayacucho 340, Ica",image:"https://picsum.photos/seed/pena1/600/400",images:["https://picsum.photos/seed/pen1/600/400","https://picsum.photos/seed/pen2/600/400"],description:"Peña folklórica con música criolla en vivo, cajón peruano y danzas típicas de Ica. Ambiente auténtico y familiar.",hours:"Jue–Sáb: 7:00 PM – 1:00 AM",phone:"+51 956 500 300",lat:-14.065,lng:-75.727,tags:["Folklore","Criolla","Cajón","Danzas"],hidden:!1,validated:!0,catColor:"purple",isOpen:!0,entryPrice:15,musicType:"Criolla / Folklore",capacity:120,dressCode:"Casual",openDays:["Jueves","Viernes","Sábado"],features:["Show en vivo todas las noches","Pista de baile","Happy hour 7pm-9pm","Reserva de mesa privada"],drinks:{house:[{name:"Pisco Sour de la Casa",price:15,image:"https://picsum.photos/seed/piscopena/200/200",desc:"Receta tradicional con limón de Ica"}],cocktails:[{name:"Algarrobina",price:18},{name:"Chilcano",price:14}],beers:[{name:"Cusqueña Negra",price:12},{name:"Pilsen",price:10}],nonAlcoholic:[{name:"Chicha Morada",price:8},{name:"Emoliente",price:6}]},shows:[{artist:"Grupo Criollo Sol de Ica",date:"Vie 20 Jun",time:"9:00 PM",image:"https://picsum.photos/seed/criollo1/300/200"},{artist:"Ballet Folclórico Nazca",date:"Sáb 21 Jun",time:"9:30 PM",image:"https://picsum.photos/seed/ballet1/300/200"}],zones:[{name:"Zona regular",tables:12,color:"#22c55e"},{name:"Zona preferencial",tables:5,color:"#eab308",extraPrice:30}],extras:[{name:"Botella de pisco artesanal",price:65},{name:"Decoración para celebración",price:40}]},{id:"53",name:"Karaoke Star Ica",category:"Vida nocturna",subType:"Karaoke",rating:4.4,reviews:60,safety:"safe",address:"Calle Lima 420, Ica",image:"https://picsum.photos/seed/karaoke1/600/400",images:["https://picsum.photos/seed/kara1/600/400","https://picsum.photos/seed/kara2/600/400"],description:"Karaoke con salas privadas y públicas. Catálogo amplio de música en español e inglés. Perfecto para grupos.",hours:"Lun–Sáb: 6:00 PM – 2:00 AM",phone:"+51 956 500 400",lat:-14.0685,lng:-75.7305,tags:["Karaoke","Salas privadas","Grupos","Diversión"],hidden:!1,validated:!0,catColor:"purple",isOpen:!0,entryPrice:10,musicType:"Variada",capacity:60,dressCode:"Casual",openDays:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],features:["Salas privadas","Pantalla gigante","Happy hour 6pm-8pm","Estacionamiento"],drinks:{house:[],cocktails:[{name:"Pisco Sour",price:16},{name:"Mojito",price:18}],beers:[{name:"Cusqueña",price:10},{name:"Corona",price:14}],nonAlcoholic:[{name:"Gaseosa",price:6},{name:"Jugo natural",price:8}]},shows:[],zones:[{name:"Sala pública",tables:8,color:"#22c55e"},{name:"Sala privada",tables:5,color:"#eab308",extraPrice:40}],extras:[{name:"Botella de bienvenida",price:50}]},{id:"54",name:"Cinema Bajo las Estrellas",category:"Vida nocturna",subType:"Cine al aire libre",rating:4.7,reviews:45,safety:"safe",address:"Parque de la Cultura, Ica",image:"https://picsum.photos/seed/cine1/600/400",images:["https://picsum.photos/seed/cin1/600/400","https://picsum.photos/seed/cin2/600/400"],description:"Cine al aire libre con proyecciones de películas los fines de semana. Trae tu manta o alquila una butaca.",hours:"Vie–Dom: 7:30 PM – 11:00 PM",phone:"+51 956 500 500",lat:-14.072,lng:-75.731,tags:["Cine","Aire libre","Familiar","Noches"],hidden:!1,validated:!0,catColor:"purple",isOpen:!0,entryPrice:10,musicType:"N/A",capacity:150,dressCode:"Casual",openDays:["Viernes","Sábado","Domingo"],features:["Pantalla gigante","Snack bar","Alquiler de mantas","Estacionamiento cercano"],drinks:{house:[],cocktails:[],beers:[{name:"Cerveza artesanal",price:12}],nonAlcoholic:[{name:"Pop corn",price:8},{name:"Gaseosa",price:6},{name:"Chocolate caliente",price:10}]},shows:[{artist:"Película: Aventura en las Dunas",date:"Vie 20 Jun",time:"8:00 PM",image:"https://picsum.photos/seed/movie1/300/200"},{artist:"Película: Noche Estrellada",date:"Sáb 21 Jun",time:"8:00 PM",image:"https://picsum.photos/seed/movie2/300/200"}],zones:[{name:"General",tables:0,color:"#22c55e"},{name:"Butaca premium",tables:20,color:"#eab308",extraPrice:15}],extras:[{name:"Manta + almohada",price:10}]},{id:"55",name:"Casino Royal Ica",category:"Vida nocturna",subType:"Casino",rating:4.1,reviews:38,safety:"safe",address:"Av. Municipalidad 600, Ica",image:"https://picsum.photos/seed/casino1/600/400",images:["https://picsum.photos/seed/cas1/600/400","https://picsum.photos/seed/cas2/600/400"],description:"Casino con tragamonedas, mesas de juego y área de bar. Solo mayores de 18 años. Ambiente exclusivo.",hours:"Lun–Dom: 4:00 PM – 4:00 AM",phone:"+51 956 500 600",lat:-14.0695,lng:-75.7325,tags:["Casino","Tragamonedas","Poker","Exclusivo"],hidden:!1,validated:!0,catColor:"purple",isOpen:!0,entryPrice:0,musicType:"Ambiente",capacity:100,dressCode:"Elegante",openDays:["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],features:["Tragamonedas","Mesas de poker","Barra de tragos","Estacionamiento","Seguridad 24/7"],drinks:{house:[],cocktails:[{name:"Whisky",price:25},{name:"Martini",price:22}],beers:[{name:"Heineken",price:15}],nonAlcoholic:[{name:"Café",price:8},{name:"Agua mineral",price:5}]},shows:[],zones:[{name:"Tragamonedas",tables:0,color:"#22c55e"},{name:"Mesas de juego",tables:8,color:"#3b82f6"},{name:"VIP",tables:3,color:"#eab308",extraPrice:80}],extras:[]}],ze=[{id:"1",name:"Festival de la Vendimia",category:"Cultural",subType:"Festival",date:"Sáb 15 Jun",time:"6:00 PM",endTime:"11:00 PM",fullDate:"Sábado 15 de Junio, 2025",calDate:"2025-06-15",duration:"Un día",placeId:"3",placeName:"Bodega Vista Alegre",address:"Camino a la Tinguiña km 2.5, Ica",price:null,priceLabel:"GRATIS",free:!0,image:"https://picsum.photos/seed/vendimia/600/400",images:["https://picsum.photos/seed/vend1/600/400","https://picsum.photos/seed/vend2/600/400"],description:"El Festival de la Vendimia es la celebración más importante de Ica. Incluye la pisada de uvas, degustación de vinos y piscos, danzas folclóricas, y la elección de la Reina de la Vendimia.",requirements:["Llevar ropa cómoda","Protector solar recomendado","No se permite ingreso de mascotas"],attendees:380,maxAttendees:500,familyFriendly:!0,requiresSignup:!1,safety:"safe",organizer:{name:"Bodega Vista Alegre",type:"Negocio verificado",avatar:"BA",image:"https://picsum.photos/seed/orgba/100/100"},catColor:"purple",program:[{time:"6:00 PM",title:"Apertura y bienvenida",desc:"Ceremonia inaugural con autoridades locales"},{time:"6:30 PM",title:"Pisada de uvas",desc:"Participación del público en la pisada tradicional"},{time:"7:30 PM",title:"Degustación de piscos",desc:"5 variedades de pisco para degustar"},{time:"8:30 PM",title:"Danzas folclóricas",desc:"Grupo Ballet de Ica"},{time:"9:30 PM",title:"Elección de la Reina",desc:"Concurso de belleza con 8 candidatas"},{time:"10:30 PM",title:"Cierre musical",desc:"Grupo criollo en vivo"}],tickets:[]},{id:"2",name:"Campeonato de Sandboard",category:"Aventura",subType:"Deportivo",date:"Dom 16 Jun",time:"5:00 PM",endTime:"9:00 PM",fullDate:"Domingo 16 de Junio, 2025",calDate:"2025-06-16",duration:"Un día",placeId:"4",placeName:"Las Dunas de Ica",address:"Huacachina, Ica",price:45,priceLabel:"S/ 45",free:!1,image:"https://picsum.photos/seed/sandboard/600/400",images:["https://picsum.photos/seed/sand1/600/400","https://picsum.photos/seed/sand2/600/400"],description:"Competencia de sandboard con categorías amateur y profesional. Incluye equipo, transporte en buggy y premiación.",requirements:["Ropa deportiva","Zapatillas cerradas","Edad mínima: 12 años"],attendees:15,maxAttendees:30,familyFriendly:!1,requiresSignup:!0,safety:"safe",organizer:{name:"Ica Adventures",type:"Negocio verificado",avatar:"IA",image:"https://picsum.photos/seed/orgia/100/100"},catColor:"orange",program:[{time:"5:00 PM",title:"Registro y equipamiento",desc:"Entrega de tablas y equipo de seguridad"},{time:"5:30 PM",title:"Categoría Amateur",desc:"3 rondas de bajada cronometrada"},{time:"7:00 PM",title:"Categoría Pro",desc:"Circuito con obstáculos y saltos"},{time:"8:30 PM",title:"Premiación",desc:"Trofeos y premios en efectivo"}],tickets:[{type:"Participante",price:45,includes:["Equipo completo","Transporte buggy","Hidratación"],available:15,max:30},{type:"Espectador",price:15,includes:["Transporte buggy","Zona de observación"],available:50,max:80}]},{id:"3",name:"Feria Gastronómica Iqueña",category:"Gastronómico",subType:"Feria",date:"Vie 21 Jun",time:"12:00 PM",endTime:"10:00 PM",fullDate:"Viernes 21 de Junio, 2025",calDate:"2025-06-21",duration:"Un día",placeId:"2",placeName:"Plaza de Armas de Ica",address:"Plaza de Armas, Ica Centro",price:null,priceLabel:"GRATIS",free:!0,image:"https://picsum.photos/seed/feria/600/400",images:["https://picsum.photos/seed/fer1/600/400","https://picsum.photos/seed/fer2/600/400"],description:"Los mejores restaurantes y productores locales se reúnen para ofrecer una experiencia gastronómica inolvidable. Degustación de platos típicos, postres artesanales y bebidas tradicionales.",requirements:["Entrada libre","Consumo según stand"],attendees:120,maxAttendees:500,familyFriendly:!0,requiresSignup:!1,safety:"safe",organizer:{name:"Municipalidad de Ica",type:"Institución",avatar:"MI",image:"https://picsum.photos/seed/orgmi/100/100"},catColor:"orange",program:[{time:"12:00 PM",title:"Apertura de stands",desc:"Más de 30 stands de comida regional"},{time:"2:00 PM",title:"Show cooking",desc:"Demostración del Chef invitado"},{time:"4:00 PM",title:"Concurso de postres",desc:"Votación del público"},{time:"7:00 PM",title:"Música criolla en vivo",desc:"Grupo Los Iqueños"}],tickets:[]},{id:"4",name:"Cata de Vinos y Piscos",category:"Cultural",subType:"Cultural",date:"Sáb 22 Jun",time:"4:00 PM",endTime:"7:00 PM",fullDate:"Sábado 22 de Junio, 2025",calDate:"2025-06-22",duration:"Un día",placeId:"3",placeName:"Bodega Vista Alegre",address:"Camino a la Tinguiña km 2.5, Ica",price:60,priceLabel:"S/ 60",free:!1,image:"https://picsum.photos/seed/catavinos/600/400",images:["https://picsum.photos/seed/cata1/600/400","https://picsum.photos/seed/cata2/600/400"],description:"Recorre las instalaciones de la bodega y participa en una cata dirigida por sommelier experto. Aprende a distinguir las variedades de uva y los procesos de elaboración.",requirements:["Mayores de 18 años","Reserva anticipada"],attendees:22,maxAttendees:40,familyFriendly:!1,requiresSignup:!0,safety:"safe",organizer:{name:"Bodega Vista Alegre",type:"Negocio verificado",avatar:"BA",image:"https://picsum.photos/seed/orgba/100/100"},catColor:"purple",program:[{time:"4:00 PM",title:"Recorrido por la bodega",desc:"Guiado por el enólogo de la casa"},{time:"5:00 PM",title:"Cata de 6 variedades",desc:"Quebranta, Italia, Acholado y más"},{time:"6:00 PM",title:"Maridaje con quesos",desc:"Quesos artesanales de la región"},{time:"6:45 PM",title:"Compra directa",desc:"Descuentos especiales para asistentes"}],tickets:[{type:"Entrada general",price:60,includes:["Recorrido guiado","Cata de 6 variedades","Copa de cortesía"],available:18,max:40},{type:"Entrada VIP",price:120,includes:["Recorrido privado","Cata premium de 10 variedades","Maridaje exclusivo","Botella de regalo"],available:5,max:10}]},{id:"5",name:"Concierto: Noches de Jazz en el Desierto",category:"Musical",subType:"Concierto",date:"Vie 28 Jun",time:"8:00 PM",endTime:"1:00 AM",fullDate:"Viernes 28 de Junio, 2025",calDate:"2025-06-28",duration:"Un día",placeId:"7",placeName:"Explanada Huacachina",address:"Costanera de Huacachina, Ica",price:30,priceLabel:"S/ 30",free:!1,image:"https://picsum.photos/seed/jazz/600/400",images:["https://picsum.photos/seed/jazz1/600/400","https://picsum.photos/seed/jazz2/600/400"],description:"Una velada de jazz y blues en el ambiente único del desierto. Artistas locales e invitados interpretan clásicos y composiciones originales bajo las estrellas.",requirements:["Vestimenta smart casual","Reserva recomendada"],attendees:45,maxAttendees:200,familyFriendly:!0,requiresSignup:!1,safety:"safe",organizer:{name:"Ica Jazz Club",type:"Negocio verificado",avatar:"JC",image:"https://picsum.photos/seed/orgjc/100/100"},catColor:"violet",program:[{time:"8:00 PM",title:"Apertura de puertas",desc:"Zona de bienvenida con cóctel"},{time:"8:30 PM",title:"Trío de Jazz Iqueño",desc:"Set acústico de 45 min"},{time:"9:30 PM",title:"Saxofonista invitado",desc:"Marco Espinoza desde Lima"},{time:"10:30 PM",title:"Jazz Fusión",desc:"Mezcla de jazz con ritmos afroperuanos"},{time:"11:30 PM",title:"DJ Set",desc:"Nu-jazz y lounge"}],tickets:[{type:"Entrada general",price:30,includes:["Acceso general","Cóctel de bienvenida"],available:120,max:200},{type:"Entrada VIP",price:80,includes:["Zona exclusiva","Barra libre","Mesa reservada"],available:15,max:30},{type:"Entrada familiar",price:70,includes:["2 adultos + 2 menores","Zona familiar"],available:20,max:40}]},{id:"6",name:"Procesión del Señor de Luren",category:"Religioso",subType:"Religioso",date:"Lun 24 Jun",time:"5:00 AM",endTime:"2:00 PM",fullDate:"Lunes 24 de Junio, 2025",calDate:"2025-06-24",duration:"Un día",placeId:null,placeName:"Iglesia del Señor de Luren",address:"Av. San Martín, Ica Centro",price:null,priceLabel:"GRATIS",free:!0,image:"https://picsum.photos/seed/luren1/600/400",images:["https://picsum.photos/seed/luren2/600/400","https://picsum.photos/seed/luren3/600/400"],description:"La procesión del Señor de Luren es la manifestación religiosa más importante de Ica. Miles de devotos acompañan la imagen del Cristo Crucificado por las calles de la ciudad.",requirements:["Se recomienda ropa blanca o morada","Hidratación","Calzado cómodo para caminar"],attendees:2e3,maxAttendees:5e3,familyFriendly:!0,requiresSignup:!1,safety:"safe",organizer:{name:"Hermandad del Señor de Luren",type:"Institución",avatar:"SL",image:"https://picsum.photos/seed/orgsl/100/100"},catColor:"purple",program:[{time:"5:00 AM",title:"Misa solemne",desc:"En la Iglesia del Señor de Luren"},{time:"6:30 AM",title:"Salida de la procesión",desc:"Recorrido por las calles principales"},{time:"10:00 AM",title:"Parada en la Plaza de Armas",desc:"Bendición y oraciones"},{time:"1:00 PM",title:"Retorno al templo",desc:"Entrada solemne y cierre"}],tickets:[]},{id:"7",name:"Taller de Cerámica Nazca",category:"Cultural",subType:"Taller",date:"Sáb 29 Jun",time:"10:00 AM",endTime:"1:00 PM",fullDate:"Sábado 29 de Junio, 2025",calDate:"2025-06-29",duration:"Un día",placeId:null,placeName:"Centro Cultural de Ica",address:"Jr. Cajamarca 250, Ica",price:35,priceLabel:"S/ 35",free:!1,image:"https://picsum.photos/seed/taller1/600/400",images:["https://picsum.photos/seed/tal1/600/400","https://picsum.photos/seed/tal2/600/400"],description:"Aprende las técnicas ancestrales de cerámica Nazca. Crea tu propia pieza con los diseños icónicos de esta cultura preinca. Incluye todos los materiales.",requirements:["Ropa que pueda mancharse","No requiere experiencia previa"],attendees:8,maxAttendees:15,familyFriendly:!0,requiresSignup:!0,safety:"safe",organizer:{name:"Artesanos de Ica",type:"Negocio verificado",avatar:"AI",image:"https://picsum.photos/seed/orgai/100/100"},catColor:"green",program:[{time:"10:00 AM",title:"Introducción",desc:"Historia de la cerámica Nazca"},{time:"10:30 AM",title:"Modelado",desc:"Técnica de modelado a mano"},{time:"11:30 AM",title:"Pintura",desc:"Pigmentos naturales y diseños"},{time:"12:30 PM",title:"Horneado",desc:"Demostración del proceso y cierre"}],tickets:[{type:"Entrada general",price:35,includes:["Materiales completos","Pieza para llevar","Certificado"],available:7,max:15}]},{id:"8",name:"Festival del Pisco Weekend",category:"Gastronómico",subType:"Festival",date:"Vie 4 Jul",time:"4:00 PM",endTime:"Dom 6 Jul 10:00 PM",fullDate:"Viernes 4 a Domingo 6 de Julio, 2025",calDate:"2025-07-04",duration:"Varios días",placeId:null,placeName:"Complejo Ferial de Ica",address:"Av. Los Maestros, Ica",price:25,priceLabel:"S/ 25",free:!1,image:"https://picsum.photos/seed/piscofest/600/400",images:["https://picsum.photos/seed/pfest1/600/400","https://picsum.photos/seed/pfest2/600/400"],description:"Tres días dedicados al pisco: degustaciones, concursos de coctelería, shows en vivo y la mejor gastronomía iqueña. El evento pisquero más grande del sur.",requirements:["Mayores de 18 para degustación","Menores con acompañante"],attendees:800,maxAttendees:2e3,familyFriendly:!0,requiresSignup:!1,safety:"safe",organizer:{name:"CámComercio Ica",type:"Institución",avatar:"CC",image:"https://picsum.photos/seed/orgcc/100/100"},catColor:"gold",program:[{time:"Vie 4:00 PM",title:"Inauguración",desc:"Ceremonia de apertura y brindis"},{time:"Vie 6:00 PM",title:"Concurso de coctelería",desc:"Fase clasificatoria"},{time:"Sáb 12:00 PM",title:"Catas temáticas",desc:"Pisco Quebranta, Italia y Acholado"},{time:"Sáb 8:00 PM",title:"Concierto principal",desc:"Artista sorpresa"},{time:"Dom 12:00 PM",title:"Final de coctelería",desc:"Y premiación"},{time:"Dom 7:00 PM",title:"Clausura",desc:"Show de fuegos artificiales"}],tickets:[{type:"Entrada general",price:25,includes:["Acceso 1 día","Copa de degustación"],available:500,max:2e3},{type:"Entrada VIP",price:80,includes:["Acceso 1 día","Zona VIP","Degustación premium","Bebida incluida"],available:50,max:100},{type:"Abono 3 días",price:60,includes:["Acceso los 3 días","Copa de degustación","10% descuento en stands"],available:200,max:500},{type:"Entrada familiar",price:40,includes:["2 adultos + 2 menores","Acceso general"],available:100,max:200}]}],ot=[{id:"gastro",label:"Gastronomía",icon:'<i data-lucide="utensils"></i>',color:"#E8F5E9"},{id:"exp",label:"Experiencias",icon:'<i data-lucide="mountain"></i>',color:"#FFF3E0"},{id:"hosp",label:"Hospedaje",icon:'<i data-lucide="hotel"></i>',color:"#E3F2FD"},{id:"trans",label:"Transporte",icon:'<i data-lucide="bus"></i>',color:"#F5F5F5"},{id:"serv",label:"Servicios",icon:'<i data-lucide="wrench"></i>',color:"#EDE7F6"},{id:"night",label:"Vida nocturna",icon:'<i data-lucide="moon"></i>',color:"#F3E5F5"},{id:"events",label:"Eventos",icon:'<i data-lucide="calendar"></i>',color:"#FFEBEE"},{id:"comm",label:"Comunidad",icon:'<i data-lucide="users"></i>',color:"#E0F2F1"}],Le=[{id:"1",author:"Carlos Torres",initials:"CT",color:"#2E86AB",rating:5,date:"Hace 2 días",text:"¡Increíble lugar! Las dunas son espectaculares y la laguna al atardecer es mágica. Muy recomendado para familias.",photos:["https://picsum.photos/seed/comm1/200/200"],useful:12,replies:[{author:"Restaurante El Catador",text:"Gracias por tu visita, Carlos. ¡Nos alegra que hayas disfrutado!",isOwner:!0}]},{id:"2",author:"Lucía Flores",initials:"LF",color:"#F4A261",rating:4,date:"Hace 1 semana",text:"Muy bonito el lugar. La única crítica es que los precios de los snacks dentro del oasis son un poco altos. Mejor llevar tu propia comida.",photos:[],useful:8,replies:[]},{id:"3",author:"Roberto Díaz",initials:"RD",color:"#4CAF50",rating:5,date:"Hace 2 semanas",text:"Fui con mis amigos a hacer sandboard y fue una de las mejores experiencias de mi vida. El guía fue muy profesional y paciente.",photos:["https://picsum.photos/seed/comm2/200/200","https://picsum.photos/seed/comm3/200/200"],useful:21,replies:[]}],Ee=[{id:"r1",title:"Atardecer magico en el desierto de Huacachina",hashtags:"#Ica #Huacachina #Atardecer #Desierto",userId:"1",username:"maria.viajera",userIcon:"MG",userColor:"#1A6B3A",likes:1240,comments:85,shares:12,category:"Aventura",placeId:"1",placeName:"Oasis de Huacachina",image:"https://picsum.photos/seed/reel1/600/1000"},{id:"r2",title:"Probando el mejor pisco artesanal en la ruta de las bodegas",hashtags:"#Pisco #RutaDelVino #Ica #Gastronomia",userId:"2",username:"carlos.foodie",userIcon:"CT",userColor:"#2E86AB",likes:856,comments:42,shares:8,category:"Gastronomía",placeId:"3",placeName:"Bodega Vista Alegre",image:"https://picsum.photos/seed/reel2/600/1000"},{id:"r3",title:"Un oasis de paz y lujo en medio de las dunas",hashtags:"#Glamping #Ica #Lujo #Relax",userId:"5",username:"ana.lifestyle",userIcon:"AM",userColor:"#F44336",likes:2100,comments:124,shares:45,category:"Hospedaje",placeId:"h3",placeName:"Ica Glamping Experience",image:"https://picsum.photos/seed/reel3/600/1000"},{id:"r4",title:"Descubriendo los jeroglificos poco conocidos de Palpa",hashtags:"#Palpa #Cultura #SecretosLocales",userId:"3",username:"lucia_travel",userIcon:"LF",userColor:"#F4A261",likes:450,comments:28,shares:5,category:"Cultura",placeId:null,placeName:"Líneas de Palpa",image:"https://picsum.photos/seed/reel4/600/1000"},{id:"r5",title:"La carapulcra chinchana que no te puedes perder",hashtags:"#GastronomiaPeruana #Chincha #Comida",userId:"4",username:"pedro_adventurer",userIcon:"PQ",userColor:"#7C4DFF",likes:1540,comments:96,shares:85,category:"Gastronomía",placeId:"2",placeName:"Restaurante El Catador",image:"https://picsum.photos/seed/reel5/600/1000"},{id:"r6",title:"Nuestra escapada romantica de fin de semana",hashtags:"#EnPareja #Amor #Ica",userId:"1",username:"pareja.viajera",userIcon:"TU",userColor:"#94a3b8",likes:3200,comments:210,shares:120,category:"En pareja",placeId:"h1",placeName:"Hotel Viñas Queirolo",image:"https://picsum.photos/seed/reel6/600/1000"}],Te=[{id:"g1",title:"Ica en 3 Días: Aventura y Pisco",author:"Carlos Torres",authorRole:"Local Experto",authorAvatar:"CT",authorColor:"#2E86AB",placesCount:8,days:3,views:12500,saves:3400,image:"https://picsum.photos/seed/guide1/600/400",intro:"Esta es mi ruta ideal para quienes visitan Ica por primera vez. Combina la adrenalina del desierto con la tradición de nuestras bodegas.",places:[{id:"1",note:"Lleguen temprano, el alquiler de tubulares es más barato a las 10am."},{id:"2",note:"Para almorzar después de las dunas. Pidan la Sopa Seca."},{id:"h1",note:"Excelente lugar para relajar en la tarde, aunque solo vayan al bar."}],tips:["Lleven siempre agua helada","Lentes de sol oscuros son obligatorios para el buggy"]},{id:"g2",title:"Ruta Gastronómica Iqueña",author:"María García",authorRole:"Usuario Verificado",authorAvatar:"MG",authorColor:"#1A6B3A",placesCount:5,days:2,views:8200,saves:1900,image:"https://picsum.photos/seed/guide2/600/400",intro:"Un recorrido por los huariques y restaurantes más emblemáticos de toda la región. ¡Vayan con hambre!",places:[{id:"2",note:"La mejor sopa seca que probarán."},{id:"3",note:"Perfecto para maridar con vinos."}],tips:["Hagan reserva los fines de semana","Prueben el Pisco Acholado"]},{id:"g3",title:"Fin de Semana Romántico",author:"Lucía Flores",authorRole:"Validador",authorAvatar:"LF",authorColor:"#F4A261",placesCount:4,days:2,views:5400,saves:1200,image:"https://picsum.photos/seed/guide3/600/400",intro:"Lugares tranquilos, cenas íntimas y los mejores atardeceres para disfrutar en pareja.",places:[{id:"h1",note:"Hospédense aquí si buscan lujo."},{id:"1",note:"El atardecer en Huacachina es un must."}],tips:["Contraten el tour privado de picnic en el desierto"]}],st=[{id:"n1",type:"interaction",userId:"2",action:'guardó tu guía "Aventura en Dunas"',time:"Hace 10 min",read:!1,relatedImage:"https://picsum.photos/seed/guide1/100/100"},{id:"n2",type:"follow",userId:"3",action:"empezó a seguirte",time:"Hace 2 horas",read:!1,relatedImage:null},{id:"n3",type:"mention",userId:"5",action:'te mencionó en un comentario: "Deberíamos ir aquí @usuario!"',time:"Ayer",read:!0,relatedImage:"https://picsum.photos/seed/reel1/100/100"},{id:"n4",type:"community",userId:null,action:"¡El Restaurante El Catador subió al Top 3 del ranking!",time:"Hace 2 días",read:!0,relatedImage:"https://picsum.photos/seed/p2/100/100"}],nt=[{id:"1",user:"María García",initials:"MG",color:"#1A6B3A",date:"Dom 16 Jun",time:"8:00 PM",people:4,status:"pending",type:"Mesa"},{id:"2",user:"Carlos Torres",initials:"CT",color:"#2E86AB",date:"Dom 16 Jun",time:"9:00 PM",people:2,status:"confirmed",type:"Mesa"},{id:"3",user:"Lucía Flores",initials:"LF",color:"#F4A261",date:"Lun 17 Jun",time:"1:00 PM",people:6,status:"confirmed",type:"Mesa"},{id:"4",user:"Pedro Quispe",initials:"PQ",color:"#7C4DFF",date:"Mar 18 Jun",time:"7:30 PM",people:2,status:"cancelled",type:"Mesa"}],ke=[{id:"1",title:"20% en menú criollo",description:"Descuento en todo el menú criollo este mes",discount:"-20%",validUntil:"30 Jun",status:"active",image:"https://picsum.photos/seed/promo1/200/200",business:"Restaurante El Catador"},{id:"2",title:"Postre gratis con menú ejecutivo",description:"Postre de cortesía al ordenar cualquier menú ejecutivo",discount:"GRATIS",validUntil:"15 Jul",status:"active",image:"https://picsum.photos/seed/promo2/200/200",business:"Restaurante El Catador"}],Ce=[{id:"1",name:"María García",username:"@maria.viajera",email:"maria@ejemplo.com",role:"user",roleName:"Usuario Verificado",status:"active",initials:"MG",color:"#1A6B3A",avatar:"https://picsum.photos/seed/u1/100/100",followers:124,following:45,guidesPublished:2,placesPublished:5},{id:"2",name:"Carlos Torres",username:"@carlos.foodie",email:"carlos@ejemplo.com",role:"business",roleName:"Local Experto",status:"active",initials:"CT",color:"#2E86AB",avatar:"https://picsum.photos/seed/u2/100/100",followers:3400,following:120,guidesPublished:8,placesPublished:0},{id:"3",name:"Lucía Flores",username:"@lucia_travel",email:"lucia@ejemplo.com",role:"validator",roleName:"Validador",status:"active",initials:"LF",color:"#F4A261",avatar:"https://picsum.photos/seed/u3/100/100",followers:856,following:210,guidesPublished:4,placesPublished:12},{id:"4",name:"Pedro Quispe",username:"@pedro_adventurer",email:"pedro@ejemplo.com",role:"user",roleName:"Viajero Frecuente",status:"active",initials:"PQ",color:"#7C4DFF",avatar:"https://picsum.photos/seed/u4/100/100",followers:56,following:89,guidesPublished:0,placesPublished:2},{id:"5",name:"Ana Mendoza",username:"@ana.lifestyle",email:"ana@ejemplo.com",role:"admin",roleName:"Local Verificado",status:"active",initials:"AM",color:"#F44336",avatar:"https://picsum.photos/seed/u5/100/100",followers:15400,following:450,guidesPublished:15,placesPublished:40}],rt=[{id:"1",type:"Comentario ofensivo",priority:"alta",reporter:"María García",date:"Hace 45 min",content:"Comentario con lenguaje inapropiado en la reseña del Bar El Oasis",status:"pending"},{id:"2",type:"Lugar incorrecto",priority:"media",reporter:"Carlos Torres",date:"Hace 2 horas",content:"La dirección del restaurante está incorrecta según Google Maps",status:"pending"},{id:"3",type:"Evento falso",priority:"alta",reporter:"Lucía Flores",date:"Hace 3 horas",content:'El evento "Concierto en Dunas" no tiene organizador verificable',status:"pending"},{id:"4",type:"Contenido inapropiado",priority:"media",reporter:"Pedro Quispe",date:"Hace 5 horas",content:"Foto inapropiada en reel publicado",status:"pending"},{id:"5",type:"Perfil spam",priority:"baja",reporter:"Ana Mendoza",date:"Hace 1 día",content:"Usuario con nombre falso publicando spam en comentarios",status:"pending"}];function re(p){return J.find(i=>i.id===p)}function lt(p){return ze.find(i=>i.id===p)}function qe(p){return!p||p==="Todos"?J.filter(i=>!i.hidden):J.filter(i=>i.category===p&&!i.hidden)}function be(){return J.filter(p=>p.hidden)}function Ve(p){return Ce.find(i=>i.id===p)}const dt="modulepreload",ct=function(p){return"/"+p},He={},pt=function(i,a,t){let n=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),b=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=Promise.allSettled(a.map(r=>{if(r=ct(r),r in He)return;He[r]=!0;const s=r.endsWith(".css"),y=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${y}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":dt,s||(c.as="script"),c.crossOrigin="",c.href=r,b&&c.setAttribute("nonce",b),document.head.appendChild(c),s)return new Promise((x,C)=>{c.addEventListener("load",x),c.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${r}`)))})}))}function l(o){const b=new Event("vite:preloadError",{cancelable:!0});if(b.payload=o,window.dispatchEvent(b),!b.defaultPrevented)throw o}return n.then(o=>{for(const b of o||[])b.status==="rejected"&&l(b.reason);return i().catch(l)})},j={isLoggedIn:!1,currentUser:null,userRole:"user",profileType:null,favorites:new Set(["1","3"]),savedEvents:new Set(["1"]),routeStops:[],reservations:[],peopleCount:1};function xe(p="user"){j.isLoggedIn=!0,j.userRole=p,j.currentUser={name:"María García",email:"maria@ejemplo.com",username:"@maria_garcia",initials:"MG",points:350,bizCategory:"restaurante",stats:{visited:24,saved:18,routes:5,reels:12,validations:0}}}function Me(){j.isLoggedIn=!1,j.currentUser=null,j.userRole="user",j.profileType=null}function $e(p){return j.favorites.has(p)?(j.favorites.delete(p),!1):(j.favorites.add(p),!0)}function gt(p){return j.savedEvents.has(p)?(j.savedEvents.delete(p),!1):(j.savedEvents.add(p),!0)}function ut(p){if(p.pricePerPerson)return p.pricePerPerson;if(!p.price)return 15;const i=p.price.match(/\d+/);return i?parseInt(i[0]):15}function ne(p,i={}){if(!j.routeStops.find(a=>a.id===p.id)){const a=!!i.reservation;let t=0,n="per_person";a?(t=i.reservation.totalCost||0,n="fixed"):(t=ut(p),(p.category==="Hospedaje"||p.category==="Transporte")&&(n="fixed")),j.routeStops.push({...p,duration:i.duration||45,cost:t,costType:a?"confirmed":"estimated",calcMethod:n})}}function vt(p){j.routeStops=j.routeStops.filter(i=>i.id!==p)}function mt(){j.routeStops=[]}function xt(p){const i=j.routeStops.find(a=>a.id===p);i&&(i.excluded=!i.excluded)}function bt(p,i){if(p<0||p>=j.routeStops.length||i<0||i>=j.routeStops.length)return;const a=j.routeStops.splice(p,1)[0];j.routeStops.splice(i,0,a)}function f(p,i="success"){const a=document.getElementById("toast-container"),t=document.createElement("div");t.className=`toast ${i==="error"?"toast-error":""}`;const n=i==="error"?"alert-circle":"check-circle";t.innerHTML=`${e(n,20)} <span>${p}</span>`,a.appendChild(t),A(),setTimeout(()=>t.remove(),3e3)}function H(p){const i=document.getElementById("modal-overlay"),a=document.getElementById("bottom-sheet");i.classList.remove("hidden"),a.classList.remove("hidden"),a.innerHTML=`<div class="sheet-handle"></div>${p}`,a.offsetHeight,requestAnimationFrame(()=>a.classList.add("visible")),i.onclick=M}function M(){const p=document.getElementById("modal-overlay"),i=document.getElementById("bottom-sheet");i.classList.remove("visible"),setTimeout(()=>{p.classList.add("hidden"),i.classList.add("hidden"),i.innerHTML="",p.onclick=null},400)}function te(p,i,a){const t=document.getElementById("alert-root");t.innerHTML="";const n=document.createElement("div");n.className="alert-dialog",n.id="active-alert",n.innerHTML=`
    <div class="alert-content">
      <h3>${p}</h3>
      <p>${i}</p>
      <div class="alert-actions" id="alert-actions-container"></div>
    </div>
  `,n.addEventListener("click",o=>{o.target===n&&n.remove()}),t.appendChild(n);const l=n.querySelector("#alert-actions-container");a.forEach(o=>{const b=document.createElement("button");b.className=`btn ${o.class||"btn-outline"} btn-sm`,b.textContent=o.label,b.onclick=()=>{n.remove(),o.callback&&o.callback()},l.appendChild(b)})}function ge(p,i=14){let a="";for(let t=1;t<=5;t++)a+=`<span class="star ${t<=p?"filled":""}" style="font-size:${i}px">★</span>`;return a}function le(p){const i={safe:{class:"safety-safe",icon:"shield-check",label:"Seguro"},caution:{class:"safety-caution",icon:"alert-triangle",label:"Precaución"},danger:{class:"safety-danger",icon:"info",label:"Riesgo"}},a=i[p]||i.safe;return`<span class="safety-badge ${a.class}">${e(a.icon,14)} ${a.label}</span>`}function O(p,i,a=36){return`<div class="avatar" style="width:${a}px;height:${a}px;background:${i};font-size:${a*.38}px">${p}</div>`}const Fe={user:[{icon:"home",label:"Inicio",route:"/home"},{icon:"search",label:"Explorar",route:"/explore"},{icon:"map",label:"Recorrido",route:"/route-builder"},{icon:"play-circle",label:"Reels",route:"/reels"},{icon:"user",label:"Perfil",route:"/profile"}],business:[{icon:"layout-dashboard",label:"Dashboard",route:"/biz-dashboard"},{icon:"calendar",label:"Reservas",route:"/biz-reservations"},{icon:"plus-circle",label:"Crear",route:"#create"},{icon:"bar-chart-3",label:"Analíticas",route:"/biz-analytics"},{icon:"briefcase",label:"Mi negocio",route:"/biz-edit"}],admin:[{icon:"clipboard-list",label:"Panel",route:"/admin-dashboard"},{icon:"map-pin",label:"Lugares",route:"/admin-places"},{icon:"users",label:"Usuarios",route:"/admin-users"},{icon:"flag",label:"Reportes",route:"/admin-reports"},{icon:"settings",label:"Config",route:"/admin-config"}]};function W(p,i="user"){var n;const a=document.getElementById("global-nav");let t=Fe[i]||Fe.user;i==="business"&&((n=j==null?void 0:j.currentUser)==null?void 0:n.bizCategory)==="movilidad"&&(t=[...t],t[2]={icon:"navigation",label:"En vivo",route:"#live-map",color:"red"}),a.style.display="flex",a.innerHTML=t.map(l=>`<button class="nav-tab ${p===l.route?"active":""}" data-route="${l.route}">
      <span class="nav-icon" ${l.color?`style="color:var(--${l.color})"`:""}>${e(l.icon,22)}</span>
      <span class="nav-label" ${l.color?`style="color:var(--${l.color})"`:""}>${l.label}</span>
      ${l.route==="/admin-reports"?'<span class="badge" style="position:relative;top:-14px;right:6px">7</span>':""}
    </button>`).join(""),A(),a.querySelectorAll(".nav-tab").forEach(l=>{l.addEventListener("click",()=>{const o=l.dataset.route;o==="#create"?ht():o==="#live-map"?pt(()=>Promise.resolve().then(()=>Lt),void 0).then(b=>b.showToast("Abriendo mapa de calor de movilidad en tiempo real...")):window.location.hash=o})})}function G(){const p=document.getElementById("global-nav");p.style.display="none"}function yt(p,i="user"){return setTimeout(()=>W(p,i),0),""}function e(p,i=24,a=""){return`<i data-lucide="${p}" style="width: ${i}px; height: ${i}px;" class="${a}"></i>`}function A(){window.lucide&&window.lucide.createIcons()}function ft(){}function ht(){var l;const p=document.querySelector(".speed-dial");if(p){p.remove();return}const i=document.getElementById("phone-frame"),a=document.createElement("div");a.className="speed-dial";const t=((l=j==null?void 0:j.currentUser)==null?void 0:l.bizCategory)||"restaurante";let n=[];switch(t){case"restaurante":n=[{id:"sd-event",icon:"calendar",label:"Publicar evento",hash:"/biz-create-event"},{id:"sd-promo",icon:"tag",label:"Crear promoción",hash:"/biz-promotions"},{id:"sd-menu",icon:"coffee",label:"Actualizar menú del día",hash:"/biz-settings?section=menu"},{id:"sd-dish",icon:"star",label:"Anunciar plato especial",hash:"/biz-promotions"}];break;case"hospedaje":n=[{icon:"calendar",label:"Publicar evento",hash:"/biz-create-event"},{icon:"tag",label:"Crear promoción",hash:"/biz-promotions"},{icon:"package",label:"Añadir paquete especial",hash:"/biz-promotions"},{icon:"calendar-check",label:"Actualizar disponibilidad",hash:"/biz-settings?section=habitaciones"}];break;case"guia":n=[{icon:"map",label:"Publicar tour nuevo",hash:"/biz-settings?section=tours"},{icon:"calendar",label:"Publicar evento",hash:"/biz-create-event"},{icon:"tag",label:"Crear promoción",hash:"/biz-promotions"},{icon:"clock",label:"Actualizar disponibilidad",hash:"/biz-settings?section=tours"}];break;case"movilidad":n=[{icon:"navigation",label:"Publicar oferta de ruta",hash:"/biz-promotions"},{icon:"tag",label:"Crear promoción",hash:"/biz-promotions"},{icon:"truck",label:"Gestionar flota",hash:"/biz-settings?section=flota"}];break;case"entretenimiento":n=[{icon:"calendar",label:"Publicar evento",hash:"/biz-create-event"},{icon:"tag",label:"Crear promoción",hash:"/biz-promotions"},{icon:"music",label:"Anunciar show especial",hash:"/biz-settings?section=shows"},{icon:"coffee",label:"Actualizar carta",hash:"/biz-settings?section=menu"}];break;case"tienda":n=[{icon:"star",label:"Publicar novedad",hash:"/biz-promotions"},{icon:"tag",label:"Crear promoción",hash:"/biz-promotions"},{icon:"shopping-bag",label:"Gestionar catálogo",hash:"/biz-settings?section=catalogo"}];break;case"salud":n=[{icon:"activity",label:"Publicar comunicado",hash:"/biz-promotions"},{icon:"tag",label:"Crear promoción medicamentos",hash:"/biz-promotions"},{icon:"users",label:"Disponibilidad médicos",hash:"/biz-settings?section=medicos"}];break}a.innerHTML=n.map((o,b)=>`
    <div class="speed-dial-item" id="sd-${b}" style="display:flex;align-items:center;gap:8px" onclick="document.querySelector('.speed-dial').remove(); window.location.hash='${o.hash}'">
      ${e(o.icon,16)} ${o.label}
    </div>
  `).join(""),i.appendChild(a),setTimeout(()=>{document.addEventListener("click",function o(b){!b.target.closest(".speed-dial")&&!b.target.closest(".nav-tab")&&(a.remove(),document.removeEventListener("click",o))})},100)}function Pe(p=1e3){return new Promise(i=>setTimeout(i,p))}function we(p,i,a,t=15,n=""){const l=document.getElementById(p);if(!l||!window.L)return null;l.style.height||(l.style.height="200px");const o=L.map(p,{scrollWheelZoom:!1,zoomControl:!0,attributionControl:!1}).setView([i,a],t);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19}).addTo(o);const b=L.marker([i,a]).addTo(o);return n&&b.bindPopup(`<b>${n}</b>`).openPopup(),setTimeout(()=>o.invalidateSize(),200),o}function Ge(p){return p>=4.5?"#10b981":p>=4?"#eab308":p>=3?"#f97316":"#ef4444"}const Lt=Object.freeze(Object.defineProperty({__proto__:null,attachNavListeners:ft,closeBottomSheet:M,getIcon:e,getRatingColor:Ge,hideGlobalNav:G,initIcons:A,renderAvatar:O,renderBottomNav:yt,renderLeafletMap:we,renderSafetyBadge:le,renderStars:ge,showAlert:te,showBottomSheet:H,showToast:f,simulateLoading:Pe,updateGlobalNav:W},Symbol.toStringTag,{value:"Module"}));function Oe(){const p=document.getElementById("app");let i="Pendientes";function a(){p.innerHTML=`
      <div class="screen" style="padding-bottom:12px; background:var(--bg-body)">
        <div class="appbar" style="background:var(--surface);border-bottom:1px solid var(--border-light);position:sticky;top:0;z-index:10">
          <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
          <span class="appbar-title" style="font-weight:700">Centro de Reportes</span>
          <span class="badge" style="font-size:10px;background:var(--red);color:white">7</span>
        </div>
        <div class="filter-chips" style="padding:16px;background:var(--surface);border-bottom:1px solid var(--border-light)">
          ${["Pendientes","Prioridad alta","Resueltos","Todos"].map(t=>`<span class="chip ${t===i?"chip-active":"chip-outline"} chip-selectable" data-f="${t}">${t}</span>`).join("")}
        </div>
        <div class="screen-content" style="padding:16px;padding-bottom:80px">
          <div class="flex-col gap-16">
            ${rt.map((t,n)=>`
              <div class="card p-16 report-card" style="background:var(--surface);border:1px solid var(--border-light);border-radius:16px;box-shadow:0 2px 8px rgba(0,0,0,0.02);border-left:4px solid ${t.priority==="alta"?"var(--red)":t.priority==="media"?"var(--orange)":"var(--border-light)"}">
                <div class="flex-row" style="justify-content:space-between;margin-bottom:12px">
                  <span class="chip chip-${t.priority==="alta"?"red":t.priority==="media"?"orange":"default"}" style="font-size:10px;padding:2px 8px;font-weight:600;display:flex;align-items:center;gap:4px">
                    ${e(t.priority==="alta"?"alert-octagon":t.priority==="media"?"alert-triangle":"info",10)} 
                    ${t.priority==="alta"?"Alta":t.priority==="media"?"Media":"Baja"}
                  </span>
                  <small style="color:var(--text-secondary);display:flex;align-items:center;gap:4px">${e("clock",12)} ${t.date}</small>
                </div>
                <div style="font-weight:700;font-size:15px;color:var(--text-primary);margin-bottom:8px">${t.type}</div>
                <p style="font-size:13px;line-height:1.5;color:var(--text-secondary);margin-bottom:12px;background:var(--bg-body);padding:12px;border-radius:8px;border:1px solid var(--border-light)">
                  "${t.content}"
                </p>
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
                  ${e("user",14,"text-secondary")}
                  <small style="color:var(--text-secondary);font-weight:500">Reportado por: <span style="color:var(--text-primary)">${t.reporter}</span></small>
                </div>
                <div class="flex-row gap-8">
                  <button class="btn btn-primary btn-sm flex-1" style="font-size:12px;display:flex;gap:6px" data-resolve="${n}">
                    ${e("check-square",14)} Resolver
                  </button>
                  <button class="btn btn-outline btn-sm flex-1" style="font-size:12px;display:flex;gap:6px" data-detail="${n}">
                    ${e("external-link",14)} Detalles
                  </button>
                  <button class="appbar-btn" style="background:#ffebee;color:var(--red);border-radius:8px;width:36px;height:36px" data-dismiss="${n}" title="Descartar reporte">
                    ${e("trash-2",16)}
                  </button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `,W("/admin-reports","admin"),A(),document.getElementById("btn-back").onclick=()=>E("/admin-dashboard"),document.querySelectorAll("[data-f]").forEach(t=>{t.onclick=()=>{i=t.dataset.f,a()}}),document.querySelectorAll("[data-resolve]").forEach(t=>{t.onclick=()=>{H(`
          <div style="padding:24px 20px">
            <h3 style="margin-bottom:20px;font-size:18px;font-weight:700">Acción de Resolución</h3>
            <div class="flex-col gap-12">
              <div class="card-flat p-16 cursor-pointer" style="border:1px solid var(--border-light);background:var(--surface);border-radius:12px;display:flex;gap:16px;align-items:center" id="res-delete">
                <div style="background:#ffebee;color:var(--red);padding:10px;border-radius:10px">${e("trash-2",20)}</div>
                <div style="flex:1">
                  <div style="font-weight:700;font-size:14px;color:var(--text-primary)">Eliminar contenido</div>
                  <div style="font-size:12px;color:var(--text-secondary);margin-top:2px">Borrar el elemento y notificar al autor</div>
                </div>
              </div>
              <div class="card-flat p-16 cursor-pointer" style="border:1px solid var(--border-light);background:var(--surface);border-radius:12px;display:flex;gap:16px;align-items:center" id="res-warn">
                <div style="background:#fff3e0;color:var(--orange);padding:10px;border-radius:10px">${e("alert-triangle",20)}</div>
                <div style="flex:1">
                  <div style="font-weight:700;font-size:14px;color:var(--text-primary)">Enviar advertencia formal</div>
                  <div style="font-size:12px;color:var(--text-secondary);margin-top:2px">Aviso directo al usuario sin borrar contenido</div>
                </div>
              </div>
              <div class="card-flat p-16 cursor-pointer" style="border:1px solid var(--border-light);background:var(--surface);border-radius:12px;display:flex;gap:16px;align-items:center" id="res-suspend">
                <div style="background:#fce4ec;color:#c2185b;padding:10px;border-radius:10px">${e("slash",20)}</div>
                <div style="flex:1">
                  <div style="font-weight:700;font-size:14px;color:var(--text-primary)">Suspender cuenta</div>
                  <div style="font-size:12px;color:var(--text-secondary);margin-top:2px">Bloqueo temporal por infracción severa</div>
                </div>
              </div>
            </div>
          </div>
        `),A(),document.getElementById("res-delete").onclick=()=>{M(),f(e("check",16)+" Contenido eliminado y usuario notificado")},document.getElementById("res-warn").onclick=()=>{M(),f(e("alert-triangle",16)+" Advertencia enviada al usuario")},document.getElementById("res-suspend").onclick=()=>{M(),f(e("slash",16)+" Usuario suspendido")}}}),document.querySelectorAll("[data-dismiss]").forEach(t=>{t.onclick=()=>te("Descartar Reporte","¿Marcar este reporte como falso positivo o irrelevante?",[{label:"Cancelar",class:"btn-outline"},{label:"Descartar",class:"btn-danger",callback:()=>f(e("check",16)+" Reporte descartado")}])}),document.querySelectorAll("[data-detail]").forEach(t=>{t.onclick=()=>f("Abriendo detalles del reporte...")})}a()}function Ue(){const p=document.getElementById("app");let i="Todos";function a(){let t=J;i==="Publicados"&&(t=J.filter(n=>n.validated&&!n.hidden)),i==="Pendientes"&&(t=J.filter(n=>!n.validated&&!n.hidden)),i==="Ocultos"&&(t=J.filter(n=>n.hidden)),p.innerHTML=`
      <div class="screen" style="padding-bottom:12px; background:var(--bg-body)">
        <div class="appbar" style="background:var(--surface);border-bottom:1px solid var(--border-light);position:sticky;top:0;z-index:10">
          <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
          <span class="appbar-title" style="font-weight:700">Gestión de Lugares</span>
          <div style="width:36px"></div>
        </div>
        <div class="filter-chips" style="padding:12px 16px;background:var(--surface);border-bottom:1px solid var(--border-light)">
          ${["Todos","Publicados","Pendientes","Ocultos","Reportados"].map(n=>`
            <span class="chip ${n===i?n==="Ocultos"?"chip-gold":"chip-active":"chip-outline"} chip-selectable" data-f="${n}" style="${n==="Ocultos"&&i!=="Ocultos"?"border-color:var(--gold);color:var(--gold-dark)":""}">${n==="Ocultos"?e("eye-off",12)+" ":""}${n}</span>
          `).join("")}
        </div>
        <div class="screen-content" style="padding:16px;padding-bottom:80px">
          <div class="flex-col gap-12">
            ${t.map((n,l)=>`
              <div class="place-card-h" style="padding:12px;background:var(--surface);border:1px solid ${n.hidden?"var(--gold)":"var(--border-light)"};border-radius:16px;box-shadow:0 2px 8px rgba(0,0,0,0.02)">
                <img class="place-img" src="${n.image}" alt="${n.name}" style="width:64px;height:64px;border-radius:12px;object-fit:cover" />
                <div class="place-info" style="flex:1">
                  <span class="place-name" style="font-weight:600;font-size:14px;color:var(--text-primary)">${n.name}</span>
                  <div class="flex-row gap-6 mt-4 mb-4">
                    <span class="chip chip-${n.catColor||"green"}" style="font-size:10px;padding:2px 8px;font-weight:600">${n.category}</span>
                    ${n.validated?`<span class="chip chip-green" style="font-size:10px;padding:2px 8px;display:flex;align-items:center;gap:4px">${e("check",10)} Publicado</span>`:`<span class="chip chip-yellow" style="font-size:10px;padding:2px 8px;display:flex;align-items:center;gap:4px">${e("clock",10)} Pendiente</span>`}
                    ${n.hidden?`<span class="chip chip-gold" style="font-size:10px;padding:2px 8px;display:flex;align-items:center;gap:4px">${e("eye-off",10)} Oculto</span>`:""}
                  </div>
                  ${le(n.safety||"safe").replace("Shield",e("shield",12)).replace("✓","")}
                </div>
                <div class="flex-col gap-8" style="min-width:40px">
                  ${n.hidden&&!n.validated?`<button class="appbar-btn" style="color:var(--gold-dark);background:var(--gold-light);width:32px;height:32px;border-radius:8px" data-review-hidden="${n.id}" title="Revisar Secreto">${e("eye",16)}</button>`:`<button class="appbar-btn" style="color:var(--blue);background:#e3f2fd;width:32px;height:32px;border-radius:8px" onclick="window.location.hash='/place?id=${n.id}'" title="Ver">${e("eye",16)}</button>
                     ${n.validated?"":`<button class="appbar-btn" style="color:var(--green-primary);background:#e8f5e9;width:32px;height:32px;border-radius:8px" data-approve="${n.id}" title="Aprobar">${e("check-circle",16)}</button>`}`}
                  <button class="appbar-btn" style="color:var(--red);background:#ffebee;width:32px;height:32px;border-radius:8px" data-delete="${n.id}" title="Eliminar">${e("trash-2",16)}</button>
                </div>
              </div>
            `).join("")}
            ${t.length===0?'<div style="padding:40px 20px;text-align:center;color:var(--text-secondary)">No hay lugares en esta categoría</div>':""}
          </div>
        </div>
      </div>
    `,W("/admin-places","admin"),A(),document.getElementById("btn-back").onclick=()=>E("/admin-dashboard"),document.querySelectorAll("[data-f]").forEach(n=>{n.onclick=()=>{i=n.dataset.f,a()}}),document.querySelectorAll("[data-approve]").forEach(n=>{n.onclick=l=>{l.stopPropagation(),f(e("check",16)+" Lugar aprobado y publicado")}}),document.querySelectorAll("[data-delete]").forEach(n=>{n.onclick=l=>{l.stopPropagation(),te("Eliminar lugar","¿Estás seguro? Esta acción no se puede deshacer.",[{label:"Cancelar",class:"btn-outline"},{label:"Eliminar",class:"btn-danger",callback:()=>f(e("trash-2",16)+" Lugar eliminado correctamente")}])}}),document.querySelectorAll("[data-review-hidden]").forEach(n=>{n.onclick=l=>{l.stopPropagation();const o=n.dataset.reviewHidden,b=J.find(r=>r.id===o);b&&(H(`
          <div style="padding:24px;max-height:85vh;overflow-y:auto;background:var(--cream)">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px">
              <span class="chip chip-gold" style="font-size:11px;display:flex;align-items:center;gap:4px">${e("eye-off",12)} Revisión de Secreto</span>
              <span style="font-weight:700;font-size:16px">${b.name}</span>
            </div>
            
            <div class="flex-col gap-16 mb-24">
              <div style="background:white;padding:12px;border-radius:12px;border:1px solid var(--border-light)">
                <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px;font-weight:600">Por qué es especial</div>
                <div style="font-size:13px;line-height:1.4">${b.description||"Es un rincón mágico donde el atardecer se ve perfecto sin multitudes. Ideal para reconectar con la naturaleza."}</div>
              </div>
              
              <div style="background:white;padding:12px;border-radius:12px;border:1px solid var(--border-light)">
                <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px;font-weight:600">Instrucciones de acceso</div>
                <div style="font-size:13px;line-height:1.4">Camina 200m pasando el letrero verde, hay una roca azul que marca la entrada.</div>
              </div>
              
              <div style="display:flex;gap:12px">
                <div style="flex:1;background:white;padding:12px;border-radius:12px;border:1px solid var(--border-light)">
                  <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px;font-weight:600">Secretismo Estimado</div>
                  <div style="font-size:13px;font-weight:600;color:var(--gold-dark)">Muy escondido</div>
                </div>
                <div style="flex:1;background:white;padding:12px;border-radius:12px;border:1px solid var(--border-light)">
                  <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px;font-weight:600">Permiso</div>
                  <div style="font-size:13px;font-weight:600">No requiere</div>
                </div>
              </div>
            </div>

            <div class="flex-col gap-8">
              <button class="btn btn-primary" id="btn-approve-hidden" style="display:flex;align-items:center;justify-content:center;gap:8px">${e("check",16)} Aprobar y publicar</button>
              <button class="btn" id="btn-approve-crown" style="background:var(--gold);color:#1A1A1A;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:700">${e("award",18)} Aprobar como Destacado</button>
              <button class="btn btn-outline" id="btn-reject-hidden" style="border-color:var(--red);color:var(--red);display:flex;align-items:center;justify-content:center;gap:8px">${e("x",16)} Rechazar (pedir motivo)</button>
            </div>
          </div>
        `),setTimeout(()=>{document.getElementById("btn-approve-hidden").onclick=()=>{M(),f(e("check-circle",16)+" Secreto aprobado")},document.getElementById("btn-approve-crown").onclick=()=>{M(),f(e("award",16)+" Secreto destacado con corona")},document.getElementById("btn-reject-hidden").onclick=()=>{M(),setTimeout(()=>{te("Rechazar Lugar","Indica el motivo del rechazo para notificar al usuario",[{label:"Cancelar",class:"btn-outline"},{label:"Rechazar",class:"btn-danger",callback:()=>f(e("x",16)+" Lugar rechazado")}])},300)}},100))}})}a()}function _e(){const p=document.getElementById("app");let i="Todos";function a(){p.innerHTML=`
      <div class="screen" style="padding-bottom:12px; background:var(--bg-body)">
        <div class="appbar" style="background:var(--surface);border-bottom:1px solid var(--border-light);position:sticky;top:0;z-index:10">
          <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
          <span class="appbar-title" style="font-weight:700">Gestión de Usuarios</span>
          <div style="width:36px"></div>
        </div>
        <div class="admin-search" style="padding:16px;background:var(--surface)">
          <div style="position:relative">
            <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--text-secondary)">${e("search",16)}</span>
            <input class="input-field" placeholder="Buscar usuario por nombre o email..." style="width:100%;padding-left:36px;border-radius:12px;background:var(--bg-body);border:1px solid var(--border-light);height:44px" />
          </div>
        </div>
        <div class="filter-chips" style="padding:0 16px 12px;background:var(--surface);border-bottom:1px solid var(--border-light)">
          ${["Todos","Activos","Negocios","Validadores","Suspendidos"].map(t=>`<span class="chip ${t===i?"chip-active":"chip-outline"} chip-selectable" data-f="${t}">${t}</span>`).join("")}
        </div>
        <div class="screen-content" style="padding:16px;padding-bottom:80px">
          <div class="flex-col gap-12">
            ${Ce.map((t,n)=>`
              <div class="card p-16" style="display:flex;gap:16px;align-items:center;background:var(--surface);border:1px solid var(--border-light);border-radius:16px;box-shadow:0 2px 8px rgba(0,0,0,0.02)">
                ${O(t.initials,t.color,48)}
                <div class="flex-1">
                  <div style="font-weight:600;font-size:15px;color:var(--text-primary)">${t.name}</div>
                  <div style="font-size:12px;color:var(--text-secondary);margin-bottom:6px">${t.email}</div>
                  <div class="flex-row gap-6 mt-4">
                    <span class="chip ${t.role==="admin"?"chip-red":t.role==="business"?"chip-blue":t.role==="validator"?"chip-purple":"chip-green"}" style="font-size:10px;padding:2px 8px;display:flex;align-items:center;gap:4px">
                      ${e(t.role==="admin"?"shield":t.role==="business"?"briefcase":t.role==="validator"?"check-circle":"user",10)} 
                      ${t.role==="admin"?"Admin":t.role==="business"?"Negocio":t.role==="validator"?"Validador":"Usuario"}
                    </span>
                    <span class="chip ${t.status==="active"?"chip-green":"chip-red"}" style="font-size:10px;padding:2px 8px;display:flex;align-items:center;gap:4px">
                      ${t.status==="active"?e("check",10)+" Activo":e("slash",10)+" Suspendido"}
                    </span>
                  </div>
                </div>
                <button class="appbar-btn" style="background:#f5f5f5;border-radius:8px;width:32px;height:32px;color:var(--text-secondary)" data-user="${n}">${e("more-vertical",16)}</button>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `,W("/admin-users","admin"),A(),document.getElementById("btn-back").onclick=()=>E("/admin-dashboard"),document.querySelectorAll("[data-f]").forEach(t=>{t.onclick=()=>{i=t.dataset.f,a()}}),document.querySelectorAll("[data-user]").forEach(t=>{t.onclick=()=>{const n=Ce[parseInt(t.dataset.user)];H(`
          <div style="padding:24px 20px">
            <div class="flex-row gap-16" style="margin-bottom:24px;align-items:center">
              ${O(n.initials,n.color,56)}
              <div><div style="font-weight:700;font-size:16px">${n.name}</div><div style="color:var(--text-secondary);font-size:13px">${n.email}</div></div>
            </div>
            <div class="flex-col gap-4">
              <div class="flex-row gap-12 p-16 cursor-pointer" style="border-radius:12px;background:var(--bg-body);color:var(--text-primary);font-weight:500" id="sheet-profile">
                <span style="color:var(--text-secondary)">${e("user",18)}</span> Ver perfil completo
              </div>
              <div class="flex-row gap-12 p-16 cursor-pointer" style="border-radius:12px;background:var(--bg-body);color:var(--text-primary);font-weight:500" id="sheet-role">
                <span style="color:var(--text-secondary)">${e("edit-2",18)}</span> Cambiar rol
              </div>
              ${n.status==="active"?`<div class="flex-row gap-12 p-16 cursor-pointer" style="border-radius:12px;background:#fff3e0;color:var(--orange);font-weight:600" id="sheet-suspend">
                    ${e("slash",18)} Suspender usuario
                   </div>`:`<div class="flex-row gap-12 p-16 cursor-pointer" style="border-radius:12px;background:#e8f5e9;color:var(--green-primary);font-weight:600" id="sheet-reactivate">
                    ${e("check-circle",18)} Reactivar usuario
                   </div>`}
              <div class="flex-row gap-12 p-16 cursor-pointer" style="border-radius:12px;background:#ffebee;color:var(--red);font-weight:600" id="sheet-delete">
                ${e("trash-2",18)} Eliminar usuario
              </div>
            </div>
          </div>
        `),A(),document.getElementById("sheet-profile").onclick=()=>{M(),f(e("user",16)+" Abriendo perfil")},document.getElementById("sheet-role").onclick=()=>{M(),f(e("edit-2",16)+" Opción de cambiar rol")};const l=document.getElementById("sheet-suspend");l&&(l.onclick=()=>{M(),f(e("alert-triangle",16)+" Usuario suspendido")});const o=document.getElementById("sheet-reactivate");o&&(o.onclick=()=>{M(),f(e("check",16)+" Usuario reactivado")}),document.getElementById("sheet-delete").onclick=()=>{M(),te("Eliminar usuario","¿Estás seguro? Esta acción no se puede deshacer.",[{label:"Cancelar",class:"btn-outline"},{label:"Eliminar",class:"btn-danger",callback:()=>f(e("trash-2",16)+" Usuario eliminado")}])}}})}a()}function Je(){const p=document.getElementById("app");p.innerHTML=`
    <div class="screen">
      <div class="appbar">
        <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
        <div class="appbar-title">Promociones Activas</div>
        <button class="appbar-btn" id="btn-filter-promos">${e("filter",20)}</button>
      </div>
      
      <div class="screen-content" style="padding-bottom:100px;background:var(--bg-body)">
        
        <!-- Filter Tabs -->
        <div class="scroll-x" style="display:flex;gap:8px;padding:16px;background:white;position:sticky;top:0;z-index:10;border-bottom:1px solid var(--border-light)">
          <span class="chip chip-active chip-selectable" style="white-space:nowrap;display:flex;align-items:center;gap:6px" data-filter="all">${e("grid",14)} Todas</span>
          <span class="chip chip-outline chip-selectable" style="white-space:nowrap;display:flex;align-items:center;gap:6px;border-color:var(--orange);color:var(--orange)" data-filter="flash">${e("zap",14)} Ofertas Flash</span>
          <span class="chip chip-outline chip-selectable" style="white-space:nowrap;display:flex;align-items:center;gap:6px" data-filter="food">${e("coffee",14)} Comida</span>
          <span class="chip chip-outline chip-selectable" style="white-space:nowrap;display:flex;align-items:center;gap:6px" data-filter="drinks">${e("droplet",14)} Bebidas</span>
          <span class="chip chip-outline chip-selectable" style="white-space:nowrap;display:flex;align-items:center;gap:6px" data-filter="tours">${e("map",14)} Tours</span>
        </div>

        <div class="padding-16 flex-col gap-16" id="promo-feed" style="margin-top:8px">
          <!-- Promo 1: Flash -->
          <div class="card-flat promo-card" data-category="flash" style="overflow:hidden;border:2px solid var(--orange)">
            <div style="background:var(--orange);color:white;padding:8px 12px;font-size:12px;font-weight:700;display:flex;justify-content:space-between;align-items:center">
              <span style="display:flex;align-items:center;gap:4px">${e("zap",14)} OFERTA FLASH (Termina en 2h)</span>
              <span>15/50 canjeados</span>
            </div>
            <div style="padding:16px;display:flex;gap:16px">
              <img src="https://picsum.photos/seed/pisco/80/80" style="width:80px;height:80px;border-radius:12px;object-fit:cover" />
              <div style="flex:1">
                <div style="font-size:11px;color:var(--text-secondary);margin-bottom:2px">El Catador</div>
                <div style="font-size:15px;font-weight:700;margin-bottom:4px">2x1 en Pisco Sour</div>
                <p style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">Presenta este cupón en barra.</p>
                <button class="btn btn-sm btn-primary" style="width:100%;background:var(--orange);border:none" onclick="appShowToast('¡Cupón guardado!')">Canjear Ahora</button>
              </div>
            </div>
          </div>

          <!-- Promo 2: Food -->
          <div class="card-flat promo-card" data-category="food" style="overflow:hidden">
            <div style="padding:16px;display:flex;gap:16px">
              <img src="https://picsum.photos/seed/tacu/80/80" style="width:80px;height:80px;border-radius:12px;object-fit:cover" />
              <div style="flex:1">
                <div style="font-size:11px;color:var(--text-secondary);margin-bottom:2px;display:flex;justify-content:space-between">
                  <span>Olla de Juanita</span>
                  <span style="display:flex;align-items:center;gap:2px;color:var(--green-primary);font-weight:600">${e("clock",12)} Válido hoy</span>
                </div>
                <div style="font-size:15px;font-weight:700;margin-bottom:4px">-20% en Tacu Tacu</div>
                <p style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">Aplica de 12pm a 4pm.</p>
                <button class="btn btn-sm btn-outline" style="width:100%" onclick="appShowToast('¡Cupón guardado!')">Guardar Cupón</button>
              </div>
            </div>
          </div>

          <!-- Promo 3: Tours -->
          <div class="card-flat promo-card" data-category="tours" style="overflow:hidden">
            <div style="padding:16px;display:flex;gap:16px">
              <img src="https://picsum.photos/seed/tubular/80/80" style="width:80px;height:80px;border-radius:12px;object-fit:cover" />
              <div style="flex:1">
                <div style="font-size:11px;color:var(--text-secondary);margin-bottom:2px;display:flex;justify-content:space-between">
                  <span>Huacachina Tours S.A.</span>
                  <span style="display:flex;align-items:center;gap:2px;color:var(--text-secondary)">${e("calendar",12)} Hasta el domingo</span>
                </div>
                <div style="font-size:15px;font-weight:700;margin-bottom:4px">Tubulares Gratis para el 4to</div>
                <p style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">Reserva para 3 y el 4to no paga.</p>
                <button class="btn btn-sm btn-outline" style="width:100%" onclick="appShowToast('¡Cupón guardado!')">Guardar Cupón</button>
              </div>
            </div>
          </div>
          
          <!-- Promo 4: Drinks -->
          <div class="card-flat promo-card" data-category="drinks" style="overflow:hidden">
            <div style="padding:16px;display:flex;gap:16px">
              <img src="https://picsum.photos/seed/wine/80/80" style="width:80px;height:80px;border-radius:12px;object-fit:cover" />
              <div style="flex:1">
                <div style="font-size:11px;color:var(--text-secondary);margin-bottom:2px;display:flex;justify-content:space-between">
                  <span>Bodega Tacama</span>
                  <span style="display:flex;align-items:center;gap:2px;color:var(--text-secondary)">${e("calendar",12)} Todo el mes</span>
                </div>
                <div style="font-size:15px;font-weight:700;margin-bottom:4px">Catas a mitad de precio</div>
                <p style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">Válido mostrando la app.</p>
                <button class="btn btn-sm btn-outline" style="width:100%" onclick="appShowToast('¡Cupón guardado!')">Guardar Cupón</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `,G(),A(),window.appShowToast=t=>f(t),document.getElementById("btn-back").onclick=()=>E("/home");const i=document.querySelectorAll(".chip-selectable"),a=document.querySelectorAll(".promo-card");i.forEach(t=>{t.onclick=()=>{i.forEach(l=>{l.classList.remove("chip-active"),l.classList.add("chip-outline")}),t.classList.add("chip-active"),t.classList.remove("chip-outline");const n=t.getAttribute("data-filter");a.forEach(l=>{n==="all"||l.getAttribute("data-category")===n?l.style.display="block":l.style.display="none"})}})}function Ze(){const p=document.getElementById("app");p.innerHTML=`
    <div class="screen">
      <div class="appbar">
        <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
        <div class="appbar-title">Actividad Reciente</div>
        <div style="width:24px"></div>
      </div>
      <div class="screen-content" style="padding:16px;padding-bottom:100px;background:var(--bg-body)">
        
        <div class="card-flat" style="margin-bottom:16px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
            <h3 style="font-size:15px;display:flex;align-items:center;gap:6px">${e("activity",18)} Feed en Vivo</h3>
            <span class="chip chip-active" style="font-size:10px;padding:4px 8px;display:flex;align-items:center;gap:4px">
              <span style="width:6px;height:6px;background:white;border-radius:50%;display:inline-block;animation:pulse 2s infinite"></span> Ahora
            </span>
          </div>
          
          <div class="activity-timeline">
            <!-- Event 1 -->
            <div style="display:flex;gap:12px;margin-bottom:20px;position:relative">
              <div style="width:2px;background:var(--border-light);position:absolute;top:24px;bottom:-20px;left:15px"></div>
              <div style="width:32px;height:32px;border-radius:50%;background:var(--green-bg-light);color:var(--green-primary);display:flex;align-items:center;justify-content:center;flex-shrink:0;z-index:1;border:2px solid white">
                ${e("star",16)}
              </div>
              <div>
                <div style="font-size:13px;font-weight:600;margin-bottom:2px">Nueva reseña 5 estrellas</div>
                <p style="font-size:12px;color:var(--text-secondary);margin-bottom:4px">"Excelente pisco sour!" - Carlos M.</p>
                <div style="display:flex;gap:8px">
                  <span style="font-size:10px;color:var(--text-secondary)">Hace 2 min</span>
                  <button class="btn btn-outline btn-xs" style="padding:2px 8px;font-size:10px">Responder</button>
                </div>
              </div>
            </div>
            
            <!-- Event 2 -->
            <div style="display:flex;gap:12px;margin-bottom:20px;position:relative">
              <div style="width:2px;background:var(--border-light);position:absolute;top:24px;bottom:-20px;left:15px"></div>
              <div style="width:32px;height:32px;border-radius:50%;background:var(--blue-light);color:var(--blue);display:flex;align-items:center;justify-content:center;flex-shrink:0;z-index:1;border:2px solid white">
                ${e("user-plus",16)}
              </div>
              <div>
                <div style="font-size:13px;font-weight:600;margin-bottom:2px">Mesa X solicitó asistencia</div>
                <p style="font-size:12px;color:var(--text-secondary);margin-bottom:4px">A través del QR en la mesa</p>
                <div style="display:flex;gap:8px">
                  <span style="font-size:10px;color:var(--text-secondary)">Hace 15 min</span>
                  <span style="font-size:10px;color:var(--blue);font-weight:600">Atendido por Ana</span>
                </div>
              </div>
            </div>
            
            <!-- Event 3 -->
            <div style="display:flex;gap:12px;margin-bottom:20px;position:relative">
              <div style="width:2px;background:var(--border-light);position:absolute;top:24px;bottom:-20px;left:15px"></div>
              <div style="width:32px;height:32px;border-radius:50%;background:var(--orange-light);color:var(--orange);display:flex;align-items:center;justify-content:center;flex-shrink:0;z-index:1;border:2px solid white">
                ${e("tag",16)}
              </div>
              <div>
                <div style="font-size:13px;font-weight:600;margin-bottom:2px">Oferta Flash canjeada</div>
                <p style="font-size:12px;color:var(--text-secondary);margin-bottom:4px">Promoción 2x1 en Pisco</p>
                <span style="font-size:10px;color:var(--text-secondary)">Hace 45 min</span>
              </div>
            </div>

            <!-- Event 4 -->
            <div style="display:flex;gap:12px;margin-bottom:20px;position:relative">
              <div style="width:2px;background:var(--border-light);position:absolute;top:24px;bottom:-20px;left:15px"></div>
              <div style="width:32px;height:32px;border-radius:50%;background:var(--purple-light);color:var(--purple);display:flex;align-items:center;justify-content:center;flex-shrink:0;z-index:1;border:2px solid white">
                ${e("calendar",16)}
              </div>
              <div>
                <div style="font-size:13px;font-weight:600;margin-bottom:2px">Nueva Reserva</div>
                <p style="font-size:12px;color:var(--text-secondary);margin-bottom:4px">Mesa para 4 - 20:00 hrs</p>
                <span style="font-size:10px;color:var(--text-secondary)">Hace 1 hora</span>
              </div>
            </div>

            <!-- Event 5 -->
            <div style="display:flex;gap:12px;margin-bottom:0;position:relative">
              <div style="width:32px;height:32px;border-radius:50%;background:#f5f5f5;color:var(--text-secondary);display:flex;align-items:center;justify-content:center;flex-shrink:0;z-index:1;border:2px solid white">
                ${e("refresh-cw",16)}
              </div>
              <div style="display:flex;align-items:center">
                <div style="font-size:12px;color:var(--text-secondary)">Ayer</div>
              </div>
            </div>
          </div>
          <button class="btn btn-outline btn-sm" style="width:100%;margin-top:20px">Cargar más</button>
        </div>

        <div class="card-flat">
          <h3 style="font-size:15px;margin-bottom:12px;display:flex;align-items:center;gap:6px">${e("bar-chart-2",18)} Insights Rápidos</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div style="padding:12px;background:var(--green-bg-light);border-radius:12px;border:1px solid var(--green-light)">
              <div style="font-size:24px;font-weight:700;color:var(--green-primary);margin-bottom:4px">120</div>
              <div style="font-size:11px;color:var(--text-secondary)">Visitas hoy</div>
              <div style="font-size:10px;color:var(--green-primary);margin-top:4px;display:flex;align-items:center;gap:2px">${e("trending-up",12)} +12%</div>
            </div>
            <div style="padding:12px;background:var(--blue-light);border-radius:12px;border:1px solid #BBDEFB">
              <div style="font-size:24px;font-weight:700;color:var(--blue);margin-bottom:4px">S/ 4k</div>
              <div style="font-size:11px;color:var(--text-secondary)">Ventas Est.</div>
              <div style="font-size:10px;color:var(--blue);margin-top:4px;display:flex;align-items:center;gap:2px">${e("trending-up",12)} +5%</div>
            </div>
            <div style="padding:12px;background:var(--orange-light);border-radius:12px;border:1px solid #FFE0B2">
              <div style="font-size:24px;font-weight:700;color:var(--orange);margin-bottom:4px">4.8</div>
              <div style="font-size:11px;color:var(--text-secondary)">Calificación media</div>
              <div style="font-size:10px;color:var(--text-secondary);margin-top:4px;display:flex;align-items:center;gap:2px">${e("minus",12)} Igual</div>
            </div>
            <div style="padding:12px;background:#f5f5f5;border-radius:12px;border:1px solid var(--border-light)">
              <div style="font-size:24px;font-weight:700;color:var(--text-primary);margin-bottom:4px">18</div>
              <div style="font-size:11px;color:var(--text-secondary)">Mesas ocupadas</div>
              <div style="font-size:10px;color:var(--text-secondary);margin-top:4px">Capacidad: 25</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,G(),A(),document.getElementById("btn-back").onclick=()=>E("/biz-dashboard")}function Xe(){const p=document.getElementById("app");p.innerHTML=`
    <div class="screen">
      <div class="appbar">
        <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
        <div class="appbar-title">Estadísticas y Rendimiento</div>
        <div style="width:24px"></div>
      </div>
      <div class="screen-content" style="padding:16px;padding-bottom:100px;background:var(--bg-body)">
        <div class="card-flat" style="margin-bottom:16px">
          <h3 style="font-size:15px;margin-bottom:12px;display:flex;align-items:center;gap:6px">${e("pie-chart",18)} Resumen Operativo</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div style="padding:16px;background:var(--blue-light);border-radius:12px;border:1px solid #BBDEFB">
              <div style="font-size:24px;font-weight:700;color:var(--blue);margin-bottom:4px">152</div>
              <div style="font-size:12px;color:#1565C0">Nuevos Usuarios</div>
              <div style="font-size:10px;color:var(--blue);margin-top:4px;display:flex;align-items:center;gap:4px">${e("trending-up",12)} +12% vs ayer</div>
            </div>
            <div style="padding:16px;background:var(--green-bg-light);border-radius:12px;border:1px solid var(--green-light)">
              <div style="font-size:24px;font-weight:700;color:var(--green-primary);margin-bottom:4px">8</div>
              <div style="font-size:12px;color:var(--green-dark)">Negocios Alta</div>
              <div style="font-size:10px;color:var(--green-primary);margin-top:4px;display:flex;align-items:center;gap:4px">${e("trending-up",12)} +2 en revisón</div>
            </div>
            <div style="padding:16px;background:#FFF3E0;border-radius:12px;border:1px solid #FFE0B2">
              <div style="font-size:24px;font-weight:700;color:var(--orange);margin-bottom:4px">S/ 12k</div>
              <div style="font-size:12px;color:#E65100">Flujo Estimado</div>
              <div style="font-size:10px;color:var(--orange);margin-top:4px;display:flex;align-items:center;gap:4px">${e("trending-up",12)} En plataforma</div>
            </div>
            <div style="padding:16px;background:#FFEBEE;border-radius:12px;border:1px solid #FFCDD2">
              <div style="font-size:24px;font-weight:700;color:var(--red);margin-bottom:4px">3</div>
              <div style="font-size:12px;color:#C62828">Reportes Activos</div>
              <div style="font-size:10px;color:var(--red);margin-top:4px;display:flex;align-items:center;gap:4px">${e("alert-triangle",12)} Requiere acción</div>
            </div>
          </div>
        </div>
        
        <div class="card-flat" style="margin-bottom:16px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
            <h3 style="font-size:15px;display:flex;align-items:center;gap:6px">${e("bar-chart-2",18)} Actividad de usuarios (7 días)</h3>
          </div>
          <div style="height:150px;display:flex;align-items:flex-end;gap:8px;padding-top:20px;border-bottom:1px solid var(--border-light)">
            <div style="flex:1;background:var(--blue-light);height:40%;border-radius:4px 4px 0 0;position:relative"><span style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);font-size:10px;color:var(--text-secondary)">L</span></div>
            <div style="flex:1;background:var(--blue);height:60%;border-radius:4px 4px 0 0;position:relative"><span style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);font-size:10px;color:var(--text-secondary)">M</span></div>
            <div style="flex:1;background:var(--blue-light);height:45%;border-radius:4px 4px 0 0;position:relative"><span style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);font-size:10px;color:var(--text-secondary)">M</span></div>
            <div style="flex:1;background:var(--blue-light);height:50%;border-radius:4px 4px 0 0;position:relative"><span style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);font-size:10px;color:var(--text-secondary)">J</span></div>
            <div style="flex:1;background:var(--blue);height:80%;border-radius:4px 4px 0 0;position:relative"><span style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);font-size:10px;color:var(--text-secondary)">V</span></div>
            <div style="flex:1;background:var(--blue);height:100%;border-radius:4px 4px 0 0;position:relative"><span style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);font-size:10px;color:var(--text-secondary)">S</span></div>
            <div style="flex:1;background:var(--blue);height:90%;border-radius:4px 4px 0 0;position:relative"><span style="position:absolute;top:-20px;left:50%;transform:translateX(-50%);font-size:10px;color:var(--text-secondary)">D</span></div>
          </div>
        </div>
      </div>
    </div>
  `,G(),A(),document.getElementById("btn-back").onclick=()=>E("/admin-dashboard")}function We(){const p=document.getElementById("app");p.innerHTML=`
    <div class="screen">
      <div class="appbar">
        <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
        <div class="appbar-title">Registro de Auditoría</div>
        <div style="width:24px"></div>
      </div>
      <div class="screen-content" style="padding:16px;padding-bottom:100px;background:var(--bg-body)">
        <div class="card-flat">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
            <h3 style="font-size:15px;display:flex;align-items:center;gap:6px">${e("activity",18)} Eventos del Sistema</h3>
            <button class="btn btn-xs btn-outline">Filtrar</button>
          </div>
          
          <div class="audit-log flex-col gap-16">
            <div style="display:flex;gap:12px;border-bottom:1px solid var(--border-light);padding-bottom:12px">
              <div style="width:32px;height:32px;border-radius:50%;background:var(--blue-light);color:var(--blue);display:flex;align-items:center;justify-content:center;flex-shrink:0">${e("shield",16)}</div>
              <div>
                <div style="font-size:13px;font-weight:600">Admin_Maria aprobó "El Catador"</div>
                <div style="font-size:12px;color:var(--text-secondary)">Cambio de estado: Pendiente -> Activo</div>
                <div style="font-size:10px;color:var(--text-secondary);margin-top:2px">Hoy, 10:42 AM</div>
              </div>
            </div>
            <div style="display:flex;gap:12px;border-bottom:1px solid var(--border-light);padding-bottom:12px">
              <div style="width:32px;height:32px;border-radius:50%;background:#FFEBEE;color:var(--red);display:flex;align-items:center;justify-content:center;flex-shrink:0">${e("alert-octagon",16)}</div>
              <div>
                <div style="font-size:13px;font-weight:600">Sistema bloqueó cuenta sospechosa</div>
                <div style="font-size:12px;color:var(--text-secondary)">Usuario ID #4829 - Múltiples reportes SPAM</div>
                <div style="font-size:10px;color:var(--text-secondary);margin-top:2px">Hoy, 09:15 AM</div>
              </div>
            </div>
            <div style="display:flex;gap:12px;border-bottom:1px solid var(--border-light);padding-bottom:12px">
              <div style="width:32px;height:32px;border-radius:50%;background:var(--orange-light);color:var(--orange);display:flex;align-items:center;justify-content:center;flex-shrink:0">${e("settings",16)}</div>
              <div>
                <div style="font-size:13px;font-weight:600">Admin_Carlos modificó configuración CMS</div>
                <div style="font-size:12px;color:var(--text-secondary)">Actualizó Términos y Condiciones v2.1</div>
                <div style="font-size:10px;color:var(--text-secondary);margin-top:2px">Ayer, 18:30 PM</div>
              </div>
            </div>
          </div>
          <button class="btn btn-outline btn-sm" style="width:100%;margin-top:16px">Cargar más eventos</button>
        </div>
      </div>
    </div>
  `,G(),A(),document.getElementById("btn-back").onclick=()=>E("/admin-dashboard")}const Qe={"/admin-reports":Oe,"/admin-places":Ue,"/admin-users":_e,"/biz-activity":Ze,"/admin-stats":Xe,"/admin-audit":We,"/user-promotions":Je};let Ye="",Be="";function R(p,i){Qe[p]=i}function E(p){Be=Ye,window.location.hash=p}function De(){Be?E(Be):window.history.back()}function wt(){const p=()=>{const i=window.location.hash.slice(1)||"/splash",[a,...t]=i.split("?"),n={};t.length&&new URLSearchParams(t.join("?")).forEach((s,y)=>{n[y]=s}),Ye=a;const l=document.getElementById("modal-overlay"),o=document.getElementById("bottom-sheet");l&&l.classList.add("hidden"),o&&(o.classList.add("hidden"),o.classList.remove("visible"),o.innerHTML="");const b=document.querySelector(".speed-dial");b&&b.remove();const r=Qe[a];if(r){const s=document.getElementById("app");s.scrollTop=0,r(n)}else console.warn(`Route not found: ${a}`),E("/splash")};window.addEventListener("hashchange",p),p()}function $t(){const p=document.getElementById("app");p.innerHTML=`
    <div class="splash-screen screen no-scroll">
      <div class="splash-logo" style="display:flex;align-items:center;justify-content:center">${e("map-pin",64)}</div>
      <div class="splash-title">Turismo Ica</div>
      <div class="splash-subtitle">Descubre Ica como nunca antes</div>
    </div>
  `,G(),A(),setTimeout(()=>E("/welcome"),1500)}function kt(){const p=document.getElementById("app");p.innerHTML=`
    <div class="welcome-screen screen no-scroll">
      <div class="welcome-bg">
        <img src="https://picsum.photos/seed/huacachina-oasis/800/1600" alt="Huacachina" />
      </div>
      <div class="welcome-top">
        <div class="welcome-logo-text" style="display:flex;align-items:center;gap:8px">${e("map-pin",20)} Turismo Ica</div>
        <div class="welcome-chip" style="display:flex;align-items:center;gap:4px">Ica, Perú</div>
      </div>
      <div class="welcome-bottom">
        <h1>Descubre Ica como nunca antes</h1>
        <p>Explora, organiza recorridos y vive experiencias únicas en la ciudad de la vid y el sol</p>
        <button class="btn btn-primary" id="btn-login">Iniciar sesión</button>
        <div style="height:12px"></div>
        <button class="btn btn-secondary" id="btn-register">Crear cuenta</button>
        <div style="height:20px"></div>
        <div class="divider-text" style="color:rgba(255,255,255,0.5)">o</div>
        <div style="height:16px"></div>
        <button class="btn btn-white" id="btn-google">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="20" height="20" alt="Google" />
          Continuar con Google
        </button>
        <div class="welcome-legal">
          Al continuar aceptas nuestros <a href="javascript:void(0)">Términos</a> y <a href="javascript:void(0)">Políticas de privacidad</a>
        </div>
      </div>
    </div>
  `,G(),document.getElementById("btn-login").onclick=()=>E("/login"),document.getElementById("btn-register").onclick=()=>E("/register-1"),document.getElementById("btn-google").onclick=()=>{xe("user"),E("/home")}}function zt(){const p=document.getElementById("app");p.innerHTML=`
    <div class="screen auth-screen">
      <button class="appbar-btn" id="btn-back" style="margin:-8px 0 0 -8px">←</button>
      <div class="auth-header">
        <div class="auth-icon">${e("map-pin",32)}</div>
        <h2 style="font-size:24px;margin-bottom:4px">Bienvenido de vuelta</h2>
        <p>Ingresa tus datos para continuar</p>
      </div>
      <div class="flex-col gap-16">
        <div class="input-group">
          <label class="input-label">Correo electrónico</label>
          <div class="input-wrapper">
            <span class="input-icon" style="color:var(--text-secondary)">${e("mail",18)}</span>
            <input class="input-field" id="login-email" type="email" placeholder="tucorreo@ejemplo.com" />
          </div>
        </div>
        <div class="input-group">
          <label class="input-label">Contraseña</label>
          <div class="input-wrapper">
            <span class="input-icon" style="color:var(--text-secondary)">${e("lock",18)}</span>
            <input class="input-field" id="login-pass" type="password" placeholder="Mínimo 6 caracteres" />
            <span class="input-icon-right" id="toggle-pass" style="color:var(--text-secondary)">${e("eye",18)}</span>
          </div>
        </div>
        <div class="flex-row" style="justify-content:space-between">
          <label class="checkbox-row" id="remember-row">
            <div class="checkbox" id="remember-check"></div>
            <small>Recordar sesión</small>
          </label>
          <a href="javascript:void(0)" id="forgot-link" style="font-size:12px">¿Olvidaste tu contraseña?</a>
        </div>
        <div id="login-error" class="error-box hidden" style="display:flex;gap:8px;align-items:center">${e("alert-circle",16)} Correo o contraseña incorrectos. Intenta de nuevo.</div>
        <div style="height:12px"></div>
        <button class="btn btn-primary" id="btn-submit">Iniciar sesión</button>
        <div style="height:16px"></div>
        <div class="divider-text">o</div>
        <div style="height:16px"></div>
        <button class="btn btn-white" id="btn-google2">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="20" height="20" alt="Google" />
          Continuar con Google
        </button>
      </div>
      <div class="auth-footer">
        ¿No tienes cuenta? <a href="javascript:void(0)" id="goto-register">Crear cuenta</a>
      </div>
    </div>
  `,G(),document.getElementById("btn-back").onclick=()=>E("/welcome"),document.getElementById("forgot-link").onclick=i=>{i.preventDefault(),E("/password-recovery")},document.getElementById("goto-register").onclick=i=>{i.preventDefault(),E("/register-1")},document.getElementById("toggle-pass").onclick=()=>{const i=document.getElementById("login-pass");i.type=i.type==="password"?"text":"password"},document.getElementById("remember-row").onclick=()=>{document.getElementById("remember-check").classList.toggle("checked")},document.getElementById("btn-submit").onclick=async()=>{const i=document.getElementById("login-email").value,a=document.getElementById("login-pass").value,t=document.getElementById("login-error");if(!i||!a){t.classList.remove("hidden");return}t.classList.add("hidden");const n=document.getElementById("btn-submit");n.innerHTML='<div class="spinner"></div> Ingresando...',n.disabled=!0,await Pe(1e3),i.includes("admin")||i.includes("ana@")?(xe("admin"),E("/admin-dashboard")):i.includes("negocio")||i.includes("business")||i.includes("carlos@")?(xe("business"),E("/biz-dashboard")):(xe("user"),E("/home"))},document.getElementById("btn-google2").onclick=()=>{xe("user"),E("/home")}}function Et(){const p=document.getElementById("app");p.innerHTML=`
    <div class="screen auth-screen">
      <div class="appbar">
        <button class="appbar-btn" id="btn-back">←</button>
        <span class="appbar-title">Crear cuenta</span>
        <div style="width:36px"></div>
      </div>
      <div class="progress-steps">
        <div class="progress-step"><div class="progress-circle active">1</div><span class="progress-step-label">Cuenta</span></div>
        <div class="progress-line"></div>
        <div class="progress-step"><div class="progress-circle">2</div><span class="progress-step-label">Perfil</span></div>
        <div class="progress-line"></div>
        <div class="progress-step"><div class="progress-circle">3</div><span class="progress-step-label">Preferencias</span></div>
      </div>
      <div class="flex-col gap-16" style="padding:0 0 24px">
        <div class="input-group">
          <label class="input-label">Nombre completo</label>
          <div class="input-wrapper">
            <span class="input-icon" style="color:var(--text-secondary)">${e("user",18)}</span>
            <input class="input-field" id="reg-name" placeholder="Ej: María García" />
          </div>
        </div>
        <div class="input-group">
          <label class="input-label">Correo electrónico</label>
          <div class="input-wrapper">
            <span class="input-icon" style="color:var(--text-secondary)">${e("mail",18)}</span>
            <input class="input-field" id="reg-email" type="email" placeholder="tucorreo@ejemplo.com" />
          </div>
        </div>
        <div class="input-group">
          <label class="input-label">Contraseña</label>
          <div class="input-wrapper">
            <span class="input-icon" style="color:var(--text-secondary)">${e("lock",18)}</span>
            <input class="input-field" id="reg-pass" type="password" placeholder="Mínimo 6 caracteres" />
            <span class="input-icon-right" id="toggle-pass1" style="color:var(--text-secondary)">${e("eye",18)}</span>
          </div>
          <div class="strength-bar mt-8">
            <div class="strength-segment" id="str1"></div>
            <div class="strength-segment" id="str2"></div>
            <div class="strength-segment" id="str3"></div>
          </div>
          <small id="str-label" style="color:var(--text-secondary)"></small>
        </div>
        <div class="input-group">
          <label class="input-label">Confirmar contraseña</label>
          <div class="input-wrapper">
            <span class="input-icon" style="color:var(--text-secondary)">${e("lock",18)}</span>
            <input class="input-field" id="reg-pass2" type="password" placeholder="Repite la contraseña" />
          </div>
        </div>
        <div class="checkbox-row" id="terms-row" style="cursor:pointer">
          <div class="checkbox" id="terms-check"></div>
          <small>Acepto los <a href="javascript:void(0)" id="link-terms">Términos y Condiciones</a> y la <a href="javascript:void(0)" id="link-privacy">Política de Privacidad</a></small>
        </div>
        <div id="reg-error" class="error-box hidden">Debes aceptar los términos para continuar.</div>
        <div style="height:8px"></div>
        <button class="btn btn-primary" id="btn-continue">Continuar</button>
      </div>
      <div class="auth-footer">
        ¿Ya tienes cuenta? <a href="javascript:void(0)" id="goto-login">Iniciar sesión</a>
      </div>
    </div>
  `,G(),A(),document.getElementById("btn-back").onclick=()=>E("/welcome"),document.getElementById("goto-login").onclick=i=>{i.preventDefault(),E("/login")},document.getElementById("toggle-pass1").onclick=()=>{const i=document.getElementById("reg-pass");i.type=i.type==="password"?"text":"password"},document.getElementById("terms-row").onclick=i=>{i.target.tagName!=="A"&&document.getElementById("terms-check").classList.toggle("checked")},document.getElementById("reg-pass").addEventListener("input",i=>{const a=i.target.value.length,t=document.getElementById("str1"),n=document.getElementById("str2"),l=document.getElementById("str3"),o=document.getElementById("str-label");t.style.background=n.style.background=l.style.background="var(--border-light)",a>0&&(t.style.background="#F44336",o.textContent="Débil",o.style.color="#F44336"),a>=4&&(n.style.background="#FF9800",o.textContent="Media",o.style.color="#FF9800"),a>=8&&(l.style.background="#4CAF50",o.textContent="Fuerte",o.style.color="#4CAF50"),a===0&&(o.textContent="")}),document.getElementById("btn-continue").onclick=()=>{if(!document.getElementById("terms-check").classList.contains("checked")){document.getElementById("reg-error").classList.remove("hidden");return}document.getElementById("reg-error").classList.add("hidden"),E("/register-2")}}function Ct(){const p=document.getElementById("app");p.innerHTML=`
    <div class="screen">
      <div class="appbar">
        <button class="appbar-btn" id="btn-back">←</button>
        <span class="appbar-title"></span>
        <div style="width:36px"></div>
      </div>
      <div class="progress-steps">
        <div class="progress-step"><div class="progress-circle completed">${e("check",14)}</div><span class="progress-step-label">Cuenta</span></div>
        <div class="progress-line active"></div>
        <div class="progress-step"><div class="progress-circle active">2</div><span class="progress-step-label">Perfil</span></div>
        <div class="progress-line"></div>
        <div class="progress-step"><div class="progress-circle">3</div><span class="progress-step-label">Preferencias</span></div>
      </div>
      <div style="padding:0 24px 24px;text-align:center">
        <h2 style="font-size:24px;margin-bottom:8px">¿Cómo quieres usar la app?</h2>
        <p style="color:var(--text-secondary)">Desliza para elegir tu tipo de perfil. Podrás ajustarlo más adelante.</p>
      </div>

      <!-- Carousel Container -->
      <div class="profile-carousel scroll-x" style="display:flex;gap:16px;padding:0 24px 32px;scroll-snap-type:x mandatory;scroll-behavior:smooth">
        
        <!-- Explorer card -->
        <div class="selection-card carousel-card" id="card-explorer" style="position:relative;text-align:center;width:75vw;max-width:320px;scroll-snap-align:center;flex-shrink:0;background:rgba(255,255,255,0.7);backdrop-filter:blur(12px);border:2px solid transparent;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);padding:16px">
          <div class="check-mark" style="background:var(--green-primary);color:white">${e("check",14)}</div>
          <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg, var(--green-light), var(--green-primary));color:white;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 12px rgba(0,190,130,0.2)">
            ${e("compass",28)}
          </div>
          <h3 style="font-size:18px;margin-bottom:6px;font-weight:700">Explorador</h3>
          <p style="font-size:12px;margin-bottom:14px;color:var(--text-secondary);line-height:1.4">Descubre lugares únicos, asiste a eventos y comparte tus experiencias en Ica.</p>
          <div style="text-align:left;display:flex;flex-direction:column;gap:8px;margin-bottom:16px;background:var(--bg-body);padding:12px;border-radius:10px">
            <div class="flex-row gap-8" style="color:var(--text-primary)"><span style="color:var(--green-primary)">${e("map",16)}</span><span style="font-size:12px;font-weight:500">Explorar lugares y eventos</span></div>
            <div class="flex-row gap-8" style="color:var(--text-primary)"><span style="color:var(--red)">${e("heart",16)}</span><span style="font-size:12px;font-weight:500">Guardar favoritos</span></div>
            <div class="flex-row gap-8" style="color:var(--text-primary)"><span style="color:var(--orange)">${e("star",16)}</span><span style="font-size:12px;font-weight:500">Calificar y comentar</span></div>
            <div class="flex-row gap-8" style="color:var(--text-primary)"><span style="color:var(--purple)">${e("video",16)}</span><span style="font-size:12px;font-weight:500">Publicar reels</span></div>
          </div>
          <button class="btn btn-primary" style="width:100%;font-size:14px;padding:12px" data-type="explorer">Seleccionar Explorador</button>
        </div>

        <!-- Business card -->
        <div class="selection-card carousel-card" id="card-business" style="position:relative;text-align:center;width:75vw;max-width:320px;scroll-snap-align:center;flex-shrink:0;background:rgba(255,255,255,0.7);backdrop-filter:blur(12px);border:2px solid transparent;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);padding:16px">
          <div class="check-mark" style="background:var(--blue);color:white">${e("check",14)}</div>
          <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg, #42A5F5, var(--blue));color:white;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 12px rgba(25,118,210,0.2)">
            ${e("briefcase",28)}
          </div>
          <h3 style="font-size:18px;margin-bottom:6px;font-weight:700">Dueño de Negocio</h3>
          <p style="font-size:12px;margin-bottom:14px;color:var(--text-secondary);line-height:1.4">Registra tu negocio turístico, publica eventos y llega a más turistas.</p>
          <div style="text-align:left;display:flex;flex-direction:column;gap:8px;margin-bottom:16px;background:var(--bg-body);padding:12px;border-radius:10px">
            <div class="flex-row gap-8" style="color:var(--text-primary)"><span style="color:var(--blue)">${e("home",16)}</span><span style="font-size:12px;font-weight:500">Registrar mi negocio</span></div>
            <div class="flex-row gap-8" style="color:var(--text-primary)"><span style="color:var(--purple)">${e("calendar",16)}</span><span style="font-size:12px;font-weight:500">Publicar eventos</span></div>
            <div class="flex-row gap-8" style="color:var(--text-primary)"><span style="color:var(--orange)">${e("tag",16)}</span><span style="font-size:12px;font-weight:500">Crear promociones</span></div>
            <div class="flex-row gap-8" style="color:var(--text-primary)"><span style="color:var(--green-primary)">${e("pie-chart",16)}</span><span style="font-size:12px;font-weight:500">Ver estadísticas</span></div>
          </div>
          <button class="btn btn-outline" style="width:100%;font-size:14px;padding:12px;color:var(--blue);border-color:var(--blue)" data-type="business">Seleccionar Negocio</button>
        </div>

      </div>

      <div class="flex-row gap-8" style="justify-content:center;padding:8px 24px;text-align:center">
        <span style="color:var(--text-secondary)">${e("info",16)}</span>
        <small style="color:var(--text-secondary);line-height:1.4">El rol de Admin se asigna de manera interna y no está en el registro.</small>
      </div>
    </div>
  `,G(),A(),document.getElementById("btn-back").onclick=()=>E("/register-1");const i=document.getElementById("card-explorer"),a=document.getElementById("card-business");document.querySelector('[data-type="explorer"]').onclick=()=>{j.profileType="explorer",i.classList.add("selected"),i.style.transform="scale(1.02)",i.style.borderColor="var(--green-primary)",i.style.boxShadow="0 12px 24px rgba(0,0,0,0.1)",a.classList.remove("selected"),a.style.transform="scale(0.98)",a.style.opacity="0.6",a.style.borderColor="transparent",a.style.boxShadow="none",setTimeout(()=>E("/register-3a"),400)},document.querySelector('[data-type="business"]').onclick=()=>{j.profileType="business",a.classList.add("selected"),a.style.transform="scale(1.02)",a.style.borderColor="var(--blue)",a.style.boxShadow="0 12px 24px rgba(0,0,0,0.1)",i.classList.remove("selected"),i.style.transform="scale(0.98)",i.style.opacity="0.6",i.style.borderColor="transparent",i.style.boxShadow="none",setTimeout(()=>E("/register-3b"),400)}}function St(){const p=document.getElementById("app");p.innerHTML=`
    <div class="screen">
      <div class="appbar">
        <button class="appbar-btn" id="btn-back">←</button>
        <span class="appbar-title">Personaliza tu experiencia</span>
        <div style="width:36px"></div>
      </div>
      <div class="progress-steps">
        <div class="progress-step"><div class="progress-circle completed">✓</div><span class="progress-step-label">Cuenta</span></div>
        <div class="progress-line active"></div>
        <div class="progress-step"><div class="progress-circle completed">✓</div><span class="progress-step-label">Perfil</span></div>
        <div class="progress-line active"></div>
        <div class="progress-step"><div class="progress-circle active">3</div><span class="progress-step-label">Preferencias</span></div>
      </div>
      <div class="screen-content" style="padding-bottom:100px">
        <h2 style="font-size:22px;margin-bottom:4px">Cuéntanos sobre ti</h2>
        <p style="margin-bottom:24px">Esto nos permite recomendarte los mejores lugares de Ica</p>
        
        <!-- Q1 -->
        <div class="form-section">
          <div class="form-section-title">¿Qué te interesa explorar?</div>
          <small style="display:block;margin-bottom:10px">Puedes elegir varias opciones</small>
          <div style="display:flex;flex-wrap:wrap;gap:8px" id="interests">
            ${[{icon:"coffee",label:"Restaurantes"},{icon:"coffee",label:"Bares"},{icon:"map",label:"Aventura"},{icon:"sun",label:"Naturaleza"},{icon:"book",label:"Cultura"},{icon:"archive",label:"Historia"},{icon:"map-pin",label:"Lugares ocultos"},{icon:"calendar",label:"Eventos"}].map(i=>`<span class="chip chip-outline chip-selectable" data-sel="false" style="display:flex;align-items:center;gap:6px">${e(i.icon,14)} ${i.label}</span>`).join("")}
          </div>
        </div>

        <div style="height:28px"></div>

        <!-- Q2 -->
        <div class="form-section">
          <div class="form-section-title">¿Qué tipo de planes prefieres?</div>
          <small style="display:block;margin-bottom:10px">Selecciona una opción</small>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px" id="plan-type">
            ${[{icon:"user",label:"Solo"},{icon:"users",label:"Con amigos"},{icon:"heart",label:"En pareja"},{icon:"home",label:"Familiar"}].map(i=>`<div class="card-flat" style="padding:16px;text-align:center;cursor:pointer" data-plan="${i.label}">
                <div style="margin-bottom:6px;color:var(--text-primary)">${e(i.icon,24)}</div>
                <div style="font-size:13px;font-weight:600">${i.label}</div>
              </div>`).join("")}
          </div>
        </div>

        <div style="height:28px"></div>

        <!-- Q3 -->
        <div class="form-section">
          <div class="form-section-title">¿Cuál es tu presupuesto promedio por salida?</div>
          <div class="flex-col gap-8" id="budget">
            ${[{icon:"dollar-sign",label:"Económico",desc:"Menos de S/ 50 por salida"},{icon:"credit-card",label:"Medio",desc:"Entre S/ 50 y S/ 150"},{icon:"star",label:"Premium",desc:"Más de S/ 150"}].map(i=>`<div class="card-flat flex-row gap-12" style="padding:14px;cursor:pointer" data-budget="${i.label}">
                <span style="color:var(--green-primary)">${e(i.icon,20)}</span>
                <div class="flex-1"><div style="font-weight:600;font-size:14px">${i.label}</div><small>${i.desc}</small></div>
              </div>`).join("")}
          </div>
        </div>

        <div style="height:28px"></div>

        <!-- Q4 -->
        <div class="form-section">
          <div class="toggle-wrapper">
            <div>
              <div style="font-weight:600;font-size:14px">¿Te interesa descubrir lugares poco conocidos?</div>
              <small>Te mostraremos lugares únicos que pocos conocen en Ica</small>
            </div>
            <div class="toggle active" id="hidden-toggle"></div>
          </div>
        </div>

        <div style="height:32px"></div>
        <button class="btn btn-primary" id="btn-start">Empezar a explorar</button>
      </div>
    </div>
  `,G(),A(),document.getElementById("btn-back").onclick=()=>E("/register-2"),document.getElementById("interests").addEventListener("click",i=>{const a=i.target.closest(".chip");a&&a.classList.toggle("chip-active")}),document.getElementById("plan-type").addEventListener("click",i=>{const a=i.target.closest(".card-flat");a&&(document.querySelectorAll("#plan-type .card-flat").forEach(t=>{t.style.borderColor="var(--border)",t.style.background="var(--surface)"}),a.style.borderColor="var(--green-primary)",a.style.background="var(--green-bg-light)")}),document.getElementById("budget").addEventListener("click",i=>{const a=i.target.closest(".card-flat");a&&(document.querySelectorAll("#budget .card-flat").forEach(t=>{t.style.borderColor="var(--border)"}),a.style.borderColor="var(--green-primary)",a.style.borderWidth="2px")}),document.getElementById("hidden-toggle").onclick=function(){this.classList.toggle("active")},document.getElementById("btn-start").onclick=()=>E("/onboarding")}function It(){const p=document.getElementById("app"),i=["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"],a=[0,1,2,3,4,5];p.innerHTML=`
    <div class="screen">
      <div class="appbar">
        <button class="appbar-btn" id="btn-back">←</button>
        <span class="appbar-title">Registra tu negocio</span>
        <div style="width:36px"></div>
      </div>
      <div class="screen-content" style="padding-bottom:100px">
        <div class="info-box info-blue mb-16" style="display:flex;align-items:flex-start;gap:8px">
          <span style="color:var(--blue)">${e("info",18)}</span>
          <span style="font-size:13px;line-height:1.4">Tu negocio será revisado por nuestro equipo antes de aparecer en la app. El proceso toma 24–48 horas.</span>
        </div>

        <div class="form-section-title" style="display:flex;align-items:center;gap:6px">${e("clipboard",16)} Información básica</div>
        <div class="flex-col gap-12 mb-16">
          <div class="input-group">
            <label class="input-label">Nombre del negocio</label>
            <input class="input-field no-icon" id="biz-name" placeholder="Ej: Restaurante El Catador" />
          </div>
          <div class="input-group">
            <label class="input-label">Categoría</label>
            <select class="input-field no-icon" id="biz-category" style="padding-left:12px">
              <option value="">Seleccionar...</option>
              <option value="restaurante">Restaurante</option>
              <option value="hospedaje">Hotel</option>
              <option value="entretenimiento">Bar / Entretenimiento</option>
              <option value="guia">Agencia turística / Experiencia</option>
              <option value="movilidad">Transporte</option>
              <option value="salud">Clínica / Salud</option>
              <option value="tienda">Tienda / Otro</option>
            </select>
          </div>
          <div class="input-group">
            <label class="input-label">Descripción corta</label>
            <textarea class="input-field no-icon" maxlength="200" placeholder="Describe tu negocio en pocas palabras..." rows="3"></textarea>
            <small style="text-align:right;display:block">0/200</small>
          </div>
        </div>

        <div class="form-divider"><span>Contacto</span></div>
        <div class="flex-col gap-12 mb-16">
          <div class="input-group">
            <label class="input-label">WhatsApp / Teléfono</label>
            <div class="input-wrapper">
              <span class="input-icon" style="color:var(--text-secondary);font-size:12px;font-weight:700">PE</span>
              <input class="input-field" placeholder="+51 956 123 456" />
            </div>
          </div>
          <div class="input-group">
            <label class="input-label">Email del negocio</label>
            <input class="input-field no-icon" type="email" placeholder="info@negocio.pe" />
          </div>
          <div class="input-group">
            <label class="input-label">Sitio web <span style="color:var(--text-secondary)">(opcional)</span></label>
            <input class="input-field no-icon" placeholder="www.negocio.pe" />
          </div>
        </div>

        <div class="form-divider"><span>Ubicación</span></div>
        <div class="flex-col gap-12 mb-16">
          <div class="input-group">
            <label class="input-label">Dirección completa</label>
            <input class="input-field no-icon" placeholder="Av. La Cultura 123, Ica" />
          </div>
          <div class="map-container" style="position:relative">
            <img src="https://picsum.photos/seed/map-ica/400/200" alt="Mapa" style="width:100%;height:140px;object-fit:cover;border-radius:12px" />
            <div class="map-pin" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:var(--red)">${e("map-pin",32)}</div>
            <div style="position:absolute;top:8px;left:8px;font-size:11px;color:var(--text-primary);background:rgba(255,255,255,0.9);padding:4px 8px;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,0.1);font-weight:600">Toca el mapa para ajustar</div>
            <button class="btn btn-xs btn-white" style="position:absolute;bottom:8px;right:8px;display:flex;align-items:center;gap:4px;box-shadow:0 2px 5px rgba(0,0,0,0.1)">${e("crosshair",14)} Mi ubicación</button>
          </div>
        </div>

        <div class="form-divider"><span>Horarios</span></div>
        <div class="mb-16">
          <div class="scroll-x mb-12" style="gap:6px">
            ${i.map((t,n)=>`<span class="chip ${a.includes(n)?"chip-active":"chip-outline"} chip-selectable">${t}</span>`).join("")}
          </div>
          <div class="flex-row gap-12">
            <div class="input-group flex-1">
              <label class="input-label">Apertura</label>
              <div class="input-wrapper"><span class="input-icon" style="color:var(--text-secondary)">${e("clock",16)}</span><input class="input-field" value="09:00" type="time" /></div>
            </div>
            <div class="input-group flex-1">
              <label class="input-label">Cierre</label>
              <div class="input-wrapper"><span class="input-icon" style="color:var(--text-secondary)">${e("clock",16)}</span><input class="input-field" value="22:00" type="time" /></div>
            </div>
          </div>
        </div>

        <div class="form-divider"><span>Fotos</span></div>
        <div class="mb-16">
          <small class="mb-8" style="display:block">Agrega fotos atractivas para destacar tu negocio</small>
          <div class="photo-slot" style="width:100%;height:160px;margin-bottom:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px" id="cover-photo">
            <span style="color:var(--text-secondary)">${e("camera",24)}</span>
            <small>Foto principal del negocio</small>
          </div>
          <small class="mb-8" style="display:block;font-weight:600">Fotos del lugar (mínimo 3)</small>
          <div class="photo-grid" id="biz-photos" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
            <div class="photo-slot" style="display:flex;align-items:center;justify-content:center;color:var(--text-secondary)">${e("plus",20)}</div>
            <div class="photo-slot" style="display:flex;align-items:center;justify-content:center;color:var(--text-secondary)">${e("plus",20)}</div>
            <div class="photo-slot" style="display:flex;align-items:center;justify-content:center;color:var(--text-secondary)">${e("plus",20)}</div>
          </div>
        </div>

        <div class="form-divider"><span>Documento de validación</span></div>
        <div class="mb-16">
          <small class="mb-8" style="display:block">Sube tu RUC, licencia u otro documento oficial que acredite tu negocio.</small>
          <div class="photo-slot" style="width:100%;height:80px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px" id="doc-upload">
            <span style="color:var(--text-secondary)">${e("file",20)}</span>
            <small>Toca para subir PDF o imagen</small>
            <small style="font-size:10px;color:var(--disabled)">Formatos: PDF, JPG, PNG — Máx. 10MB</small>
          </div>
        </div>

        <button class="btn btn-primary" id="btn-submit">Enviar para revisión</button>
      </div>
    </div>
  `,G(),A(),document.getElementById("btn-back").onclick=()=>E("/register-2"),document.getElementById("cover-photo").onclick=function(){this.classList.add("filled"),this.innerHTML='<img src="https://picsum.photos/seed/bizcover/400/200" alt="Cover" /><button class="remove-photo">✕</button>'},document.querySelectorAll("#biz-photos .photo-slot").forEach((t,n)=>{t.onclick=function(){this.classList.add("filled"),this.innerHTML=`<img src="https://picsum.photos/seed/bizphoto${n}/200/200" alt="Photo" /><button class="remove-photo">✕</button>`}}),document.getElementById("doc-upload").onclick=function(){this.classList.add("filled"),this.style.borderColor="var(--green-primary)",this.innerHTML=`<div style="display:flex;align-items:center;gap:8px;padding:8px"><span style="color:var(--green-primary)">${e("file-text",24)}</span><div><div style="font-size:13px;font-weight:600">documento_ruc.pdf</div><small style="color:var(--green-primary);display:flex;align-items:center;gap:2px">${e("check",10)} Archivo cargado</small></div></div>`},document.querySelectorAll(".chip-selectable").forEach(t=>{t.addEventListener("click",()=>t.classList.toggle("chip-active"))}),document.getElementById("btn-submit").onclick=()=>{const t=document.getElementById("biz-category").value,n=document.getElementById("biz-name").value;if(!t){f("Por favor, selecciona una categoría para tu negocio.");return}xe("business"),j.currentUser&&(j.currentUser.bizCategory=t,j.currentUser.bizName=n||"Mi Negocio"),E("/onboarding")}}function At(){const p=document.getElementById("app");p.innerHTML=`
    <div class="screen">
      <div class="appbar">
        <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
        <span class="appbar-title">Recuperar contraseña</span>
        <div style="width:36px"></div>
      </div>
      <div id="recovery-form" class="recovery-center">
        <div class="recovery-icon" style="animation:pulse 2s ease infinite;display:flex;align-items:center;justify-content:center">${e("mail",40)}</div>
        <h2 style="font-size:22px">¿Olvidaste tu contraseña?</h2>
        <p>Ingresa tu correo y te enviaremos un enlace para crear una nueva contraseña.</p>
        <div style="height:16px"></div>
        <div class="input-group w-full">
          <div class="input-wrapper">
            <span class="input-icon">${e("mail",20)}</span>
            <input class="input-field" id="recovery-email" type="email" placeholder="tucorreo@ejemplo.com" />
          </div>
        </div>
        <div style="height:16px"></div>
        <button class="btn btn-primary" id="btn-send">Enviar enlace de recuperación</button>
      </div>
      <div id="recovery-success" class="recovery-center hidden">
        <div style="width:80px;height:80px;border-radius:50%;background:var(--green-bg);display:flex;align-items:center;justify-content:center;color:var(--green-primary);animation:bounceIn 0.5s ease">${e("check",40)}</div>
        <h2 style="font-size:22px">¡Correo enviado!</h2>
        <p>Revisa tu bandeja de entrada en <strong>maria@ejemplo.com</strong> y sigue las instrucciones.</p>
        <div style="height:16px"></div>
        <button class="btn btn-primary" id="btn-back-login">Volver al inicio</button>
      </div>
    </div>
  `,G(),A(),document.getElementById("btn-back").onclick=()=>E("/login"),document.getElementById("btn-send").onclick=async()=>{const i=document.getElementById("btn-send");i.innerHTML='<div class="spinner"></div>',i.disabled=!0,await Pe(1500),document.getElementById("recovery-form").classList.add("hidden"),document.getElementById("recovery-success").classList.remove("hidden")},document.getElementById("btn-back-login").onclick=()=>E("/login")}const Ae=[{bg:"linear-gradient(135deg, #0D4F28, #4CAF50)",image:e("map",120),title:"Descubre lugares únicos",desc:"Encuentra restaurantes, experiencias de aventura, lugares históricos y secretos locales que solo los iqueños conocen."},{bg:"linear-gradient(135deg, #1a4a7a, #2E86AB)",image:e("calendar",120),title:"Eventos en tiempo real",desc:"Entérate de festivales, conciertos, ferias gastronómicas y actividades culturales antes que nadie."},{bg:"linear-gradient(135deg, #c47a20, #F4A261)",image:e("camera",120),title:"Comparte tu experiencia",desc:"Publica reels de tus aventuras, califica los lugares que visitas y ayuda a la comunidad a descubrir Ica."}];function jt(){let p=0;const i=document.getElementById("app");function a(){const n=Ae[p],l=p===Ae.length-1;i.innerHTML=`
      <div class="onboarding-screen screen no-scroll" style="background:${n.bg}">
        ${l?"":'<button class="onboarding-skip" id="btn-skip">Saltar</button>'}
        <div class="onboarding-slide">
          <div style="filter:drop-shadow(0 4px 12px rgba(0,0,0,0.15));color:white">${n.image}</div>
          <h2>${n.title}</h2>
          <p>${n.desc}</p>
        </div>
        <div class="onboarding-nav">
          <div class="dots">
            ${Ae.map((s,y)=>`<div class="dot ${y===p?"active":""}"></div>`).join("")}
          </div>
          <button class="btn btn-primary" style="width:calc(100% - 64px)" id="btn-next">
            ${l?"Empezar a explorar":"Siguiente →"}
          </button>
        </div>
      </div>
    `,G(),A();const o=document.getElementById("btn-skip");o&&(o.onclick=t),document.getElementById("btn-next").onclick=()=>{l?t():(p++,a())};let b=0;const r=i.querySelector(".onboarding-screen");r.addEventListener("touchstart",s=>b=s.touches[0].clientX),r.addEventListener("touchend",s=>{const y=b-s.changedTouches[0].clientX;Math.abs(y)>50&&(y>0&&p<Ae.length-1?(p++,a()):y<0&&p>0&&(p--,a()))})}function t(){xe(j.profileType==="business"?"business":"user"),j.profileType==="business"?E("/biz-dashboard"):E("/home")}a()}function Tt(){const p=document.getElementById("app"),i=document.createElement("div");i.className="modal-overlay",i.id="region-modal";const a=["Amazonas","Áncash","Apurímac","Arequipa","Ayacucho","Cajamarca","Callao","Cusco","Huancavelica","Huánuco","Ica","Junín","La Libertad","Lambayeque","Lima","Loreto","Madre de Dios","Moquegua","Pasco","Piura","Puno","San Martín","Tacna","Tumbes","Ucayali"];i.innerHTML=`
    <div style="background:var(--surface);width:90%;max-width:800px;border-radius:var(--radius-xl);animation:bounceIn 0.3s cubic-bezier(0.175,0.885,0.32,1.275);position:relative;display:flex;flex-direction:column;height:85vh;overflow:hidden;">
      <button class="modal-close-btn" id="close-region-btn">${e("x",20)}</button>

      <div class="mDestinos">
        <div class="mapa-destinos">
          <span class="mapa-menu">
            <svg version="1.1" id="peru" viewBox="0 0 500 700" preserveAspectRatio="xMidYMid meet" style="enable-background:new 0 0 500 700; width: 100%; height: 100%; max-height: 100%;" xml:space="preserve">
<path class="dept-path" data-dept="Amazonas" d="M146.033,260.818L142.768,261.268L141.473,260.742L139.7,261.658L136.996,261.046L136.449,255.437L134.792,249.909L132.936,248.63L131.868,244.242L129.839,241.623L127.393,239.27L124.441,237.614L124.379,236.394L120.518,230.612L117.489,227.053L114.835,227.244L113.978,225.04L112.173,222.674L110.231,217.949L111.291,213.291L114.258,209.522L115.997,205.441L117.625,203.753L117.504,201.675L114.27,198.302L111.274,196.702L110.34,193.388L110.659,190.539L112.271,189.156L113.701,186.633L112.717,185.191L114.414,178.07L112.761,176.678L113.014,173.72L110.458,172.434L112.154,171.01L112.143,168.9L113.027,167.801L113.159,164.497L112.475,161.456L113.753,160.013L115.14,154.035L116.663,151.714L115.712,148.68L117.275,146.57L118.621,146.432L119.077,143.611L121.429,141.123L121.859,138.969L121.098,137.294L121.921,135.805L122.414,132.178L123.269,131.227L123.485,128.962L125.004,126.16L127.729,126.433L128.909,130.433L131.374,129.386L130.546,124.495L138.805,114.702L139.513,112.624L141.053,111.636L144.167,110.774L145.297,118.338L145.374,126.689L145.973,128.596L151.367,135.164L151.417,137.928L150.057,140.611L153.153,144.141L154.191,146.798L154.328,150.013L153.895,153.071L152.546,158.398L153.304,162.961L152.532,166.825L149.92,168.465L149.301,172.645L145.547,175.965L144.693,177.679L144.732,180.957L145.988,183.195L146.02,184.795L143.566,187.812L143.654,189.698L145.457,190.278L148.398,192.786L146.761,194.632L148.507,196.71L148.921,199.377L148.399,202.119L146.631,201.946L145.676,203.138L145.777,206.947L146.861,209.444L145.478,212.466L145.846,217.544L149.078,219.052L150.054,221.91L149.403,223.611L152.249,224.706L154.49,226.747L156.563,224.387L158.222,226.635L159.686,225.84L161.529,228.672L163.967,229.707L166.166,229.902L167.03,233.087L169.557,235.779L168.092,238.756L166.224,238.754L164.775,236.735L163.774,236.86L164.281,239.714L162.283,242.039L161.953,244.092L159.747,247.131L158.159,247.226L160.203,250.72L154.105,249.941L151.54,247.493L148.496,249.999L146.534,249.493L146.492,252.772L145.929,254.887L147.371,258.13Z" title="Amazonas"></path>
<path class="dept-path" data-dept="Áncash" d="M162.616,320.175L163.685,322.422L163.467,324.08L164.753,324.672L165.291,326.718L168.351,333.816L169.598,334.825L170.418,336.901L173.146,338.007L175.29,340.427L182.485,343.216L184.545,345.984L184.845,347.798L183.653,351.816L181.516,350.439L180.467,347.992L176.976,353.2L176.333,355.91L176.871,358.076L174.72,361.004L172.721,362.681L175.05,366.555L175.655,365.121L178.247,367.37L178.479,369.09L181.542,374.656L181.093,375.713L181.739,379.359L177.718,380.697L178.065,386.585L175.84,387.776L174.29,386.968L173.614,388.621L171.853,389.025L170.373,391.517L167.983,393.857L167.368,397.201L165.081,396.937L162.874,397.795L159.693,401.382L158.937,403.999L155.95,404.615L152.861,403.945L152.516,400.824L152.881,398.409L150.474,398.887L150.341,396.256L146.865,397.624L148.851,392.588L152.094,390.639L148.533,388.368L146.259,388.416L145.985,392.543L144.634,394.571L145.526,395.686L145.566,397.945L143.251,397.787L141.25,399.486L140.428,396.901L138.457,394.923L136.579,390.423L134.929,389.325L133.136,383.759L130.833,381.738L130.391,377.871L127.863,371.303L128.487,368.323L126.76,366.821L124.889,363.226L123.272,361.653L123.154,359.171L122.037,356.002L122.699,354.988L120.902,353.686L120.998,351.021L119.132,350.649L117.858,348.642L118.691,345.77L117.883,344.896L115.481,344.561L115.894,342.452L113.507,341.004L112.751,336.864L114.752,335.98L114.879,332.66L115.741,330.148L117.514,328.642L120.14,328.032L123.649,325.613L127.732,325.046L129.708,322.833L128.831,321.192L130.454,319.164L131.739,316.289L131.813,314.043L132.622,311.819L136.278,308.563L139.487,307.526L140.813,302.935L144.098,302.621L147.517,302.837L150.234,301.959L150.632,304.08L151.79,305.925L153.611,307.402L157.304,312.789L158.056,315.987L159.504,318.345Z" title="Áncash"></path>
<path class="dept-path" data-dept="Apurímac" d="M344.646,555.416L340.683,556.395L338.145,555.645L335.144,555.979L332.703,554.982L331.242,557.017L330.557,559.239L329.85,557.33L326.482,556.243L324.449,554.484L320.802,556.552L319.046,555.919L317.65,557.139L315.182,557.265L314.286,558.144L311.625,557.072L310.137,557.539L309.606,559.459L306.583,562.454L303.568,559.861L303.349,556.421L305.642,554.978L304.766,552.296L305.583,551.622L304.703,548.823L303.429,547.574L305.56,540.161L301.847,533.208L301.575,530.785L300.142,527.061L299.29,526.534L298.591,523.867L296.708,520.616L299.652,519.513L296.869,516.448L295.054,515.883L294.216,510.792L292.987,506.474L294.452,502.859L293.893,502.136L294.862,498.851L296.387,497.724L297.522,501.503L300.688,502.693L303.325,504.328L306.737,507.785L309.652,508.302L311.762,507.919L316.016,509.531L316.842,507.311L320.919,508.45L324.235,507.603L325.875,506.196L328.781,506.192L329.074,507.186L332.563,507.582L334.365,509.775L337.696,510.952L338.443,512.064L341.217,512.422L346.538,514.535L347.276,516.6L351.13,518.338L353.693,518.37L357.284,521.378L359.444,526.162L360.274,527.068L360.427,530.252L359.817,532.737L360.239,534.761L358.792,536.501L359.307,537.608L355.339,541.907L353.37,543.274L352.995,545.386L350.452,546.851L348.934,546.667L347.602,548.447L346.31,548.338L343.476,551.156L345.024,553.26Z" title="Apurímac"></path>
<path class="dept-path" data-dept="Arequipa" d="M246.918,585.818L247.808,585.489L249.527,581.427L250.867,580.227L251.932,576.59L254.534,574.458L256.588,574.001L258.602,572.388L260.243,573.852L264.474,574.351L266.482,574.018L270.28,575.421L272.26,575.634L272.667,578.372L271.856,580.58L275.603,582.545L274.9,583.794L275.964,587.2L279.96,587.717L281.556,585.265L283.687,583.833L285.837,586.33L284.047,591.611L284.659,593.107L289.268,587.668L292.186,585.163L291.938,582.394L292.495,581.267L294.451,581.195L296.296,583.571L299.095,585.606L300.325,584.779L303.864,584.48L308.165,582.435L310.071,584.096L313.739,583.846L314.1,580.052L315.564,579.708L318.246,580.507L320.414,577.245L320.642,575.815L323.016,573.801L324.643,571.068L325.304,566.867L323.621,564.688L324.698,561.382L326.954,559.456L330.557,559.239L331.242,557.017L332.703,554.982L335.144,555.979L338.145,555.645L340.683,556.395L344.646,555.416L344.106,557.402L344.677,559.82L347.098,561.852L350.518,562.116L352.891,560.942L356.932,559.934L357.533,561.989L360.597,563.717L361.081,561.266L360.795,556.697L362.822,554.312L364.576,556.345L363.922,558.003L365.223,560.403L366.498,560.445L367.924,564.223L369.97,564.53L371.911,566.236L371.103,568.983L369.77,571.197L374.841,572.149L376.04,573.987L377.86,573.46L378.497,570.955L380.71,571.664L381.681,570.873L380.885,567.652L383.749,568.5L385.933,571.651L388.076,573.251L390.157,571.566L392.163,571.37L394.539,573.264L393.156,574.901L393.91,576.658L392.351,578.125L393.72,579.816L394.255,582.74L393.384,585.098L397.238,586.065L398.469,584.346L400.16,586.282L399.363,587.62L399.626,590.536L403.014,593.65L403.684,596.317L402.332,599.154L405.82,604.559L406.687,606.716L406.974,609.667L405.314,609.759L404.626,611.254L405.422,616.999L401.547,619.619L400.448,619.679L400.863,623.681L401.701,625.593L400.216,626.96L396.993,625.498L394.692,626.141L390.705,625.824L390.737,629.09L389.446,631.661L389.073,635.999L387.628,637.011L386.055,635.733L383.949,636.556L383.242,639.068L383.38,641.444L385.485,647.566L387.182,647.591L388.579,650.424L383.368,656.631L381.496,657.94L373.999,655.068L369.422,653.98L367.712,652.98L365.274,650.175L360.903,647.418L359.507,647.568L354.422,642.905L351.539,641.838L351.27,639.96L348.871,637.478L345.568,635.117L341.963,634.101L335.732,633.106L333.371,632.17L327.947,627.92L325.297,627.805L322.799,626.707L318.824,623.985L316.351,623.705L313.353,622.412L313,620.805L307.851,618.558L301.515,616.554L298.531,616.187L297.46,615.191L292.145,612.856L291.393,611.832L285.995,608.263L285.192,605.781L280.957,603.684L278.162,602.819L276.9,601.326L274.92,601.648L272.463,600.89L270.736,599.533L269.852,596.878L262.397,594.002L259.076,591.956L256.031,590.662L253.055,588.514L249.416,586.485ZM392.961,622.617L396.055,623.546L396.31,621.277L392.519,621.518Z" title="Arequipa"></path>
<path class="dept-path" data-dept="Ayacucho" d="M274.242,459.336L275.147,461.49L277.076,461.85L280.19,464.743L282.676,465.482L283.543,463.61L287.972,461.983L288.52,465.591L291.49,468.243L293.744,473.081L294.707,476.232L296.693,477.95L297.554,477.297L301.3,482.084L302.609,485.138L305.131,487.265L305.206,490.781L306.848,492.383L307.942,495.299L308.954,496.245L311.716,502.645L314.008,505.49L316.842,507.311L316.016,509.531L311.762,507.919L309.652,508.302L306.737,507.785L303.325,504.328L300.688,502.693L297.522,501.503L296.387,497.724L294.862,498.851L293.893,502.136L294.452,502.859L292.987,506.474L294.216,510.792L295.054,515.883L296.869,516.448L299.652,519.513L296.708,520.616L298.591,523.867L299.29,526.534L300.142,527.061L301.575,530.785L301.847,533.208L305.56,540.161L303.429,547.574L304.703,548.823L305.583,551.622L304.766,552.296L305.642,554.978L303.349,556.421L303.568,559.861L306.583,562.454L309.606,559.459L310.137,557.539L311.625,557.072L314.286,558.144L315.182,557.265L317.65,557.139L319.046,555.919L320.802,556.552L324.449,554.484L326.482,556.243L329.85,557.33L330.557,559.239L326.954,559.456L324.698,561.382L323.621,564.688L325.304,566.867L324.643,571.068L323.016,573.801L320.642,575.815L320.414,577.245L318.246,580.507L315.564,579.708L314.1,580.052L313.739,583.846L310.071,584.096L308.165,582.435L303.864,584.48L300.325,584.779L299.095,585.606L296.296,583.571L294.451,581.195L292.495,581.267L291.938,582.394L292.186,585.163L289.268,587.668L284.659,593.107L284.047,591.611L285.837,586.33L283.687,583.833L281.556,585.265L279.96,587.717L275.964,587.2L274.9,583.794L275.603,582.545L271.856,580.58L272.667,578.372L272.26,575.634L270.28,575.421L266.482,574.018L264.474,574.351L260.243,573.852L258.602,572.388L262.285,570.313L262.315,564.994L261.174,562.282L259.205,562.492L258.838,559.678L257.084,558.941L255.467,557.225L255.203,553.491L253.601,550.901L251.216,553.283L247.423,553.911L247.077,550.197L245.986,548.573L245.869,546.56L244.487,545.841L246.144,541.876L248.171,540.537L246.262,538.107L247.454,534.792L248.578,532.559L251.838,533.439L255.631,532.615L258.302,533.25L257.791,530.429L258.389,528.942L257.715,527.016L258.675,523.251L258.122,522.18L258.899,519.479L257.894,516.162L258.261,514.551L257.202,512.27L254.85,509.732L253.35,509.14L253.515,506.392L254.603,505.025L258.543,504.311L260.962,505.165L263.021,501.714L265.789,498.262L266.785,498.83L270.016,498.469L271.444,497.292L271.911,493.811L272.729,492.27L274.245,492.136L275.579,493.438L277.089,492.125L276.098,488.634L274.929,488.379L274.855,484.825L276.254,484.386L276.374,481.815L274.136,480.059L274.934,478.859L274.435,477.057L271.644,471.523L271.368,469.774L268.322,469.951L265.406,465.446L266.497,463.703L272.782,462.984L272.63,460.064ZM296.998,578.925L297.041,580.558L299.074,581.582L300.757,579.938Z" title="Ayacucho"></path>
<path class="dept-path" data-dept="Cajamarca" d="M87.295,263.134L88.27,262.155L87.73,258.428L89.543,256.832L94.873,253.722L94.095,250.869L91.382,250.646L90.808,249.729L88.278,249.891L85.627,245.12L84.264,244.788L83.211,242.481L83.527,241.429L82.377,239.348L83.536,236.082L86.131,235.85L87.325,234.292L89.936,232.917L89.175,229.896L90.998,226.431L89.483,224.446L83.688,223.224L86.863,220.336L84.769,216.463L84.361,214.894L85.305,209.483L84.45,206.872L89.18,206.192L88.23,203.895L87.089,198.529L85.925,197.5L86.316,195.385L85.198,193.799L88.355,190.78L90.206,186.665L91.521,185.303L96.65,185.522L98.964,187.141L100.393,182.731L103.353,182.52L103.481,179.375L102.691,178.734L103.817,175.834L105.452,173.647L106.831,172.947L110.458,172.434L113.014,173.72L112.761,176.678L114.414,178.07L112.717,185.191L113.701,186.633L112.271,189.156L110.659,190.539L110.34,193.388L111.274,196.702L114.27,198.302L117.504,201.675L117.625,203.753L115.997,205.441L114.258,209.522L111.291,213.291L110.231,217.949L112.173,222.674L113.978,225.04L114.835,227.244L117.489,227.053L120.518,230.612L124.379,236.394L124.441,237.614L127.393,239.27L129.839,241.623L131.868,244.242L132.936,248.63L134.792,249.909L136.449,255.437L136.996,261.046L140.814,268.476L141.451,270.542L143.324,273.899L143.986,277.024L145.543,278.006L146.693,279.834L142.831,281.64L141.845,284.329L137.029,287.882L133.927,288.53L132.618,286.932L128.539,290.924L126.744,290.704L125.603,288.541L124.576,288.661L122.597,286.026L123.575,283.9L123.455,281.11L121.364,280.53L118.518,283.175L113.516,282.935L112.576,282.195L113.318,279.031L112.092,277.799L108.424,277.382L105.362,278.732L103.669,280.493L103.323,282.514L101.503,284.825L100.883,287.077L99.708,287.195L97.864,284.88L96.955,280.061L93.676,278.815L92.344,277.133L89.783,276.62L88.402,275.309L86.373,274.907L88.796,272.575L89.372,269.445L87.944,267.731Z" title="Cajamarca"></path>
<path class="dept-path" data-dept="Callao" d="M167.514,446.073L169.808,445.782L171.165,448.891L170.127,451.01L171.427,454.061L170.353,455.715L168.866,455.237L169.556,451.759L168.651,447.836Z" title="Callao"></path>
<path class="dept-path" data-dept="Cusco" d="M344.646,555.416L345.024,553.26L343.476,551.156L346.31,548.338L347.602,548.447L348.934,546.667L350.452,546.851L352.995,545.386L353.37,543.274L355.339,541.907L359.307,537.608L358.792,536.501L360.239,534.761L359.817,532.737L360.427,530.252L360.274,527.068L359.444,526.162L357.284,521.378L353.693,518.37L351.13,518.338L347.276,516.6L346.538,514.535L341.217,512.422L338.443,512.064L337.696,510.952L334.365,509.775L332.563,507.582L329.074,507.186L328.781,506.192L325.875,506.196L324.235,507.603L320.919,508.45L316.842,507.311L314.008,505.49L311.716,502.645L308.954,496.245L307.942,495.299L306.848,492.383L305.206,490.781L305.131,487.265L302.609,485.138L301.3,482.084L297.554,477.297L296.693,477.95L294.707,476.232L293.744,473.081L291.49,468.243L288.52,465.591L287.972,461.983L290.099,461.297L293.126,461.861L294.68,461.126L297.12,462.913L298.214,462.956L300.868,467.203L302.622,467.149L303.228,463.3L307.16,461.113L308.046,458.82L311.208,457.885L309.488,455.197L309.856,453.466L308.361,452.264L308.231,450.519L306.376,447.984L303.109,446.384L303.222,442.457L301.953,439.619L303.779,437.007L307.909,434.702L306.782,432.38L309.035,429.029L312.356,426.245L315.132,426.3L317.166,425.43L319.642,425.575L323.807,424.438L325.191,421.937L325.983,424.439L327.089,425.127L326.609,426.987L328.671,428.033L332.53,429.043L334.636,427.63L335.826,428.936L339.454,430.727L342.267,430.989L344.341,429.163L348.137,427.064L350.809,426.081L353.38,427.54L353.056,429.07L351.378,430.92L350.516,437.142L346.262,441.491L348.44,444.407L347.668,445.995L349.89,447.115L349.313,448.487L349.691,451.436L351.679,451.757L352.627,452.904L352.265,454.751L355.841,454.959L358.82,455.934L359.079,458.143L358.404,461.809L361.097,462.846L363.381,464.98L363.269,467.989L360.058,469.591L359.696,472.324L361.186,472.836L363.067,474.98L364.006,477.843L363.172,478.939L366.815,480.753L369.483,481.313L371.874,483.282L373.826,481.075L377.383,479.583L379.192,479.939L382.989,484.394L384.334,487.064L386.599,486.668L388.625,488.854L390.964,490.058L393.432,490.497L393.615,494.768L395.349,500.147L398.395,501.506L400.89,497.63L402.886,495.414L405.832,493.725L409.008,495.306L412.714,494.551L415.427,495.117L416.843,497.035L420.058,497.298L422.905,498.56L421.705,501.114L422.741,503.259L422.469,505.482L420.873,506.317L420.495,508.424L417.437,511.412L417.148,513.314L414.351,514.65L412.934,516.462L410.634,516.706L409.897,519.674L411.245,522.156L410.4,523.168L408.634,522.587L406.271,524.313L406.205,527.377L405.124,530.788L407.6,532.565L407.11,534.582L404.935,536.321L403.714,538.655L404.419,540.266L403.202,542.464L401.339,543.793L400.465,545.533L401.341,547.011L400.056,549.372L399.878,551.954L395.663,555.623L397.933,559.025L399.441,558.457L400.854,559.406L400.164,561.933L400.506,566.477L399.781,567.481L400.826,575.408L401.341,576.965L400.486,578.265L401.725,579.854L399.472,581.954L398.469,584.346L397.238,586.065L393.384,585.098L394.255,582.74L393.72,579.816L392.351,578.125L393.91,576.658L393.156,574.901L394.539,573.264L392.163,571.37L390.157,571.566L388.076,573.251L385.933,571.651L383.749,568.5L380.885,567.652L381.681,570.873L380.71,571.664L378.497,570.955L377.86,573.46L376.04,573.987L374.841,572.149L369.77,571.197L371.103,568.983L371.911,566.236L369.97,564.53L367.924,564.223L366.498,560.445L365.223,560.403L363.922,558.003L364.576,556.345L362.822,554.312L360.795,556.697L361.081,561.266L360.597,563.717L357.533,561.989L356.932,559.934L352.891,560.942L350.518,562.116L347.098,561.852L344.677,559.82L344.106,557.402ZM390.745,548.502L393.552,550.071L394.053,549.152L390.61,546.78Z" title="Cusco"></path>
<path class="dept-path" data-dept="Huancavelica" d="M247.454,534.792L245.584,531.046L243.449,532.581L239.961,531.444L240.945,529.957L237.155,530.392L233.376,526.44L229.181,525.495L228.509,523.614L229.956,522.725L229.33,521.315L230.293,518.026L231.459,516.27L230.364,514.961L231.743,511.421L232.176,507.815L230.781,505.259L229.428,506.767L227.693,506.677L223.78,508.106L222.92,507.208L219.396,506.629L219.989,504.354L223.134,502.261L223.139,498.343L223.611,496.828L222.672,495.372L223.566,494.024L226.059,493.34L226.593,489.788L225.777,487.909L226.642,486.013L229.723,484.288L230.608,482.552L228.015,480.164L228.944,478.866L227.9,477.328L229.435,476.566L231.234,477.576L233.976,476.846L236.059,473.406L239.216,470.645L241.577,470.475L241.587,467.837L244.405,465.809L246.982,461.699L247.857,459.206L246.87,454.972L247.905,453.106L252.288,453.54L255.782,455.382L259.116,454.253L260.307,454.944L262.478,452.5L263.791,452.093L270.125,453.952L271.478,456.264L274,458.338L274.242,459.336L272.63,460.064L272.782,462.984L266.497,463.703L265.406,465.446L268.322,469.951L271.368,469.774L271.644,471.523L274.435,477.057L274.934,478.859L274.136,480.059L276.374,481.815L276.254,484.386L274.855,484.825L274.929,488.379L276.098,488.634L277.089,492.125L275.579,493.438L274.245,492.136L272.729,492.27L271.911,493.811L271.444,497.292L270.016,498.469L266.785,498.83L265.789,498.262L263.021,501.714L260.962,505.165L258.543,504.311L254.603,505.025L253.515,506.392L253.35,509.14L254.85,509.732L257.202,512.27L258.261,514.551L257.894,516.162L258.899,519.479L258.122,522.18L258.675,523.251L257.715,527.016L258.389,528.942L257.791,530.429L258.302,533.25L255.631,532.615L251.838,533.439L248.578,532.559Z" title="Huancavelica"></path>
<path class="dept-path" data-dept="Huánuco" d="M162.616,320.175L164.623,317.797L166.871,318.487L169.515,316.752L171.204,318.378L171.1,319.675L172.672,321.07L177.687,321.695L180.28,320.796L180.869,319.663L185.915,320.261L188.655,319.484L191.722,319.399L194.596,321.679L195.431,318.604L196.451,316.882L199.581,316.352L199.93,319.947L201.647,321.973L202.09,324.92L203.462,330.288L205.855,328.773L207.753,325.016L207.208,317.785L208.833,312.837L212.673,312.277L214.137,315.266L213.426,317.197L213.373,322.526L212.868,324.197L214.146,327.242L215.051,329.7L215.214,333.442L216.828,336.903L216.771,338.85L219.378,342.655L219.842,345.2L222.184,348.393L224.473,353.128L228.544,353.262L231.101,352.393L232.69,349.324L237.316,349.336L239.052,349.823L239.818,348.321L241.795,346.782L241.761,344.088L240.748,342.095L242.873,341.115L244.001,339.506L244.29,336.976L246.128,335.079L247.961,334.391L250.467,336.21L252.146,335.38L251.9,332.63L255.286,328.791L255.432,325.155L257.279,324.034L264.029,320.881L266.685,322.242L267.503,328.503L267.246,329.522L264.364,331.198L263.034,334.945L262.769,339.889L261.765,341.611L263.169,342.544L263.212,344.108L265.095,349.57L261.907,353.045L261.802,354.334L259.902,355.92L259.044,358.001L259.621,359.833L256.921,364.172L257.019,365.82L255.332,366.524L253.517,366.098L251.81,367.012L249.694,369.961L247.423,369.246L245.601,370.259L243.658,370.019L240.629,367.955L238.288,367.871L239.311,370.392L238.856,371.175L235.798,371.196L234.81,372.84L231.802,375.128L229.063,375.496L227.497,374.309L226.811,376.994L224.32,377.918L223.26,381.197L223.228,384.008L220.162,385.752L218.113,385.977L217.502,387.636L214.947,389.71L214.919,391.647L213.016,394.419L209.942,393.878L209.146,392.688L207.206,392.525L203.729,390.43L201.923,390.285L200.488,391.604L199.494,387.048L194.347,389.012L193.665,390.583L187.796,391.967L185.932,393.012L184.871,394.663L183.181,393.864L181.743,391.12L179.937,390.521L178.065,386.585L177.718,380.697L181.739,379.359L181.093,375.713L181.542,374.656L178.479,369.09L178.247,367.37L175.655,365.121L175.05,366.555L172.721,362.681L174.72,361.004L176.871,358.076L176.333,355.91L176.976,353.2L180.467,347.992L181.516,350.439L183.653,351.816L184.845,347.798L184.545,345.984L182.485,343.216L175.29,340.427L173.146,338.007L170.418,336.901L169.598,334.825L168.351,333.816L165.291,326.718L164.753,324.672L163.467,324.08L163.685,322.422Z" title="Huánuco"></path>
<path class="dept-path" data-dept="Ica" d="M258.602,572.388L256.588,574.001L254.534,574.458L251.932,576.59L250.867,580.227L249.527,581.427L247.808,585.489L246.918,585.818L246.571,585.068L242.69,582.868L243.331,580.537L241.009,579.362L241.535,577.579L239.354,575.123L235.824,574.051L233.043,568.597L230.89,567.29L230.798,565.414L228.091,563.434L224.131,561.492L220.208,558.791L217.533,557.548L215.246,555.33L214.66,551.801L213.077,550.131L213.149,548.007L210.634,546.215L209.621,544.766L207.154,543.499L207.977,541.111L206.714,538.589L203.448,535.548L201.206,536.028L202.098,530.341L201.495,526.6L199.711,526.87L197.22,526.246L198.16,522.377L200.98,521.78L200.809,523.492L202.305,524.571L204.683,515.88L205.066,512.979L204.915,507.498L202.912,503.62L204.32,502.948L206.249,498.611L211.659,494.437L214.449,490.805L219.543,493.47L221.042,491.868L222.421,492.61L224.491,492.011L226.593,489.788L226.059,493.34L223.566,494.024L222.672,495.372L223.611,496.828L223.139,498.343L223.134,502.261L219.989,504.354L219.396,506.629L222.92,507.208L223.78,508.106L227.693,506.677L229.428,506.767L230.781,505.259L232.176,507.815L231.743,511.421L230.364,514.961L231.459,516.27L230.293,518.026L229.33,521.315L229.956,522.725L228.509,523.614L229.181,525.495L233.376,526.44L237.155,530.392L240.945,529.957L239.961,531.444L243.449,532.581L245.584,531.046L247.454,534.792L246.262,538.107L248.171,540.537L246.144,541.876L244.487,545.841L245.869,546.56L245.986,548.573L247.077,550.197L247.423,553.911L251.216,553.283L253.601,550.901L255.203,553.491L255.467,557.225L257.084,558.941L258.838,559.678L259.205,562.492L261.174,562.282L262.315,564.994L262.285,570.313Z" title="Ica"></path>
<path class="dept-path" data-dept="Junín" d="M265.713,410.983L268.14,412.425L268.452,414.174L270.506,414.513L273.201,416.49L277.605,415.024L279.669,415.079L283.79,413.822L287.031,414.066L288.036,417.007L288.054,418.944L292.448,419.898L292.25,415.756L292.718,412.601L293.871,411.307L294.217,406.672L296.358,404.225L298.65,405.645L301.873,408.457L303.756,408.994L303.335,412.723L304.421,416.142L306.674,416.824L307.895,422.931L307.519,425.917L306.618,426.554L309.035,429.029L306.782,432.38L307.909,434.702L303.779,437.007L301.953,439.619L303.222,442.457L303.109,446.384L306.376,447.984L308.231,450.519L308.361,452.264L309.856,453.466L309.488,455.197L311.208,457.885L308.046,458.82L307.16,461.113L303.228,463.3L302.622,467.149L300.868,467.203L298.214,462.956L297.12,462.913L294.68,461.126L293.126,461.861L290.099,461.297L287.972,461.983L283.543,463.61L282.676,465.482L280.19,464.743L277.076,461.85L275.147,461.49L274.242,459.336L274,458.338L271.478,456.264L270.125,453.952L263.791,452.093L262.478,452.5L260.307,454.944L259.116,454.253L255.782,455.382L252.288,453.54L247.905,453.106L246.87,454.972L247.857,459.206L246.982,461.699L244.405,465.809L241.587,467.837L241.577,470.475L239.216,470.645L236.059,473.406L233.976,476.846L231.234,477.576L229.435,476.566L227.9,477.328L228.192,474.348L229.53,472.547L228.734,470.212L228.482,465.585L224.725,460.117L225.715,457.048L223.591,454.302L220.911,454.952L218.716,453.265L214.888,452.059L211.572,452.06L210.132,450.674L210.18,448.524L206.963,444.253L204.507,442.223L204.411,439.595L205.056,437.035L203.704,435.883L201.334,436.975L198.146,433.677L197.853,431.32L195.889,427.559L194.163,425.565L193.623,421.574L192.634,418.77L193.655,417.75L197.186,417.227L200.159,417.835L200.541,419.405L202.23,420.053L203.048,416.666L201.632,411.398L202.347,411.321L202.791,411.77L202.785,411.979L203.211,412.714L205.484,416.019L207.81,418.518L210.994,417.664L211.66,416.088L209.44,413.41L207.49,412.897L208.676,410.752L210.437,409.717L212.383,407.478L215.01,409.856L217.432,409.271L218.179,409.977L220.147,407.615L222.161,407.027L223.624,407.984L227.522,407.093L228.117,404.649L231.256,405.025L232.41,406.139L231.613,408.58L232.197,410.544L234.407,408.823L237.753,409.107L239.817,407.643L240.505,405.412L242.497,403.453L245.172,404.008L246.881,401.545L249.047,401.978L250.452,404.645L251.307,404.106L253.681,405.496L256.01,405.93L257.494,407.866L258.675,407.636L260.644,408.899L262.847,409.241L264.169,410.678Z" title="Junín"></path>
<path class="dept-path" data-dept="La Libertad" d="M112.751,336.864L112.498,334.777L108.385,329.439L109.278,327.088L109.036,324.114L107.752,321.667L101.859,316.612L103.306,314.432L101.007,311.19L99.935,308.109L95.071,303.718L94.935,302.801L87.869,297.243L85.298,294.062L84.671,292.004L81.918,289.127L83.061,288.423L82.542,286.669L79.095,281.901L77.307,277.841L78.018,276.928L76.505,272.254L73.469,268.866L80.766,261.091L82.32,260.13L84.358,260.531L87.295,263.134L87.944,267.731L89.372,269.445L88.796,272.575L86.373,274.907L88.402,275.309L89.783,276.62L92.344,277.133L93.676,278.815L96.955,280.061L97.864,284.88L99.708,287.195L100.883,287.077L101.503,284.825L103.323,282.514L103.669,280.493L105.362,278.732L108.424,277.382L112.092,277.799L113.318,279.031L112.576,282.195L113.516,282.935L118.518,283.175L121.364,280.53L123.455,281.11L123.575,283.9L122.597,286.026L124.576,288.661L125.603,288.541L126.744,290.704L128.539,290.924L132.618,286.932L133.927,288.53L137.029,287.882L141.845,284.329L142.831,281.64L146.693,279.834L145.543,278.006L143.986,277.024L143.324,273.899L141.451,270.542L140.814,268.476L136.996,261.046L139.7,261.658L141.473,260.742L142.768,261.268L146.033,260.818L147.745,266.245L150.368,267.802L151.796,270.458L150.248,271.275L150.928,274.278L150.662,275.695L151.618,278.627L154.749,281.279L154.381,284.213L156.341,288.664L154.717,290.858L156.518,292.591L157.907,292.983L159.262,296.353L160.384,296.593L159.249,299.747L160.062,302.152L163.564,302.331L165.591,300.557L168.888,301.267L170.098,301.009L173.808,302.05L175.041,304.271L178.036,306.529L177.338,308.342L178.252,310.808L177.783,312.426L175.426,315.078L171.332,315.469L169.515,316.752L166.871,318.487L164.623,317.797L162.616,320.175L159.504,318.345L158.056,315.987L157.304,312.789L153.611,307.402L151.79,305.925L150.632,304.08L150.234,301.959L147.517,302.837L144.098,302.621L140.813,302.935L139.487,307.526L136.278,308.563L132.622,311.819L131.813,314.043L131.739,316.289L130.454,319.164L128.831,321.192L129.708,322.833L127.732,325.046L123.649,325.613L120.14,328.032L117.514,328.642L115.741,330.148L114.879,332.66L114.752,335.98Z" title="La Libertad"></path>
<path class="dept-path" data-dept="Lambayeque" d="M38.289,238.412L47.715,224.616L49.548,222.368L54.375,220.312L56.932,220.148L62.042,214.986L63.011,208.578L63.881,206.041L65.489,205.153L67.333,206.676L66.941,207.869L68.123,210.967L69.851,211.008L72.468,214.51L71.715,218.222L73.767,218.554L75.693,217.896L75.881,220.102L76.857,222.07L80.67,221.15L83.688,223.224L89.483,224.446L90.998,226.431L89.175,229.896L89.936,232.917L87.325,234.292L86.131,235.85L83.536,236.082L82.377,239.348L83.527,241.429L83.211,242.481L84.264,244.788L85.627,245.12L88.278,249.891L90.808,249.729L91.382,250.646L94.095,250.869L94.873,253.722L89.543,256.832L87.73,258.428L88.27,262.155L87.295,263.134L84.358,260.531L82.32,260.13L80.766,261.091L73.469,268.866L73.738,266.889L71.621,264.339L64.408,257.367L64.112,255.616L62.372,252.591L59.035,249.885L55.187,247.257L51.005,244.877Z" title="Lambayeque"></path>
<path class="dept-path" data-dept="Lima" d="M178.065,386.585L179.937,390.521L181.743,391.12L183.181,393.864L184.871,394.663L185.745,398.783L187.478,400.818L187.338,402.403L188.311,406.084L190.298,409.235L190.881,413.033L190.314,414.742L192.149,415.707L193.655,417.75L192.634,418.77L193.623,421.574L194.163,425.565L195.889,427.559L197.853,431.32L198.146,433.677L201.334,436.975L203.704,435.883L205.056,437.035L204.411,439.595L204.507,442.223L206.963,444.253L210.18,448.524L210.132,450.674L211.572,452.06L214.888,452.059L218.716,453.265L220.911,454.952L223.591,454.302L225.715,457.048L224.725,460.117L228.482,465.585L228.734,470.212L229.53,472.547L228.192,474.348L227.9,477.328L228.944,478.866L228.015,480.164L230.608,482.552L229.723,484.288L226.642,486.013L225.777,487.909L226.593,489.788L224.491,492.011L222.421,492.61L221.042,491.868L219.543,493.47L214.449,490.805L211.659,494.437L206.249,498.611L204.32,502.948L202.912,503.62L195.797,494.623L193.709,492.368L192.807,489.293L193.108,488.28L192.203,484.96L188.228,481.25L186.848,476.8L184.056,473.388L182.082,472.232L182.993,469.492L182.906,467.807L180.702,464.859L176.967,462.276L173.126,460.503L173.377,457.811L170.353,455.715L171.427,454.061L170.127,451.01L171.165,448.891L169.808,445.782L167.514,446.073L168.226,442.648L166.427,438.806L164.023,436.83L163.095,433.947L160.562,431.66L155.83,428.769L150.391,425.985L150.439,422.539L152.291,421.297L150.748,416.413L149.684,414.811L149.831,412.28L146.362,407.354L146.593,406.467L144.09,402.848L141.25,399.486L143.251,397.787L145.566,397.945L145.526,395.686L144.634,394.571L145.985,392.543L146.259,388.416L148.533,388.368L152.094,390.639L148.851,392.588L146.865,397.624L150.341,396.256L150.474,398.887L152.881,398.409L152.516,400.824L152.861,403.945L155.95,404.615L158.937,403.999L159.693,401.382L162.874,397.795L165.081,396.937L167.368,397.201L167.983,393.857L170.373,391.517L171.853,389.025L173.614,388.621L174.29,386.968L175.84,387.776Z" title="Lima"></path>
<path class="dept-path" data-dept="Loreto" d="M287.875,282.397L285.968,280.522L285.736,279.131L282.039,277.169L280.444,275.744L277.507,275.188L275.358,275.461L269.858,273.479L268.389,272.235L267.113,273.308L265.468,277.683L264.095,278.634L263.087,281.099L263.078,283.456L265.795,287.481L265.299,288.618L266.281,290.513L267.865,291.601L265.835,293.072L263.647,297.769L259.892,299.331L258.265,301.419L253.563,303.134L250.339,298.875L248.42,298.157L244.32,299.241L242.748,300.681L241.612,304.875L240.511,305.952L238.861,304.813L235.543,305.316L233.516,306.372L231.962,309.616L230.782,311.034L230.738,313.29L233.32,314.971L233.114,316.631L229.139,317.758L227.169,315.687L225.326,315.603L223.114,316.726L222.758,318.549L220.422,318.797L220.386,320.831L218.367,324.816L216.17,325.168L214.146,327.242L212.868,324.197L213.373,322.526L213.426,317.197L214.137,315.266L212.673,312.277L214.554,311.874L215.362,309.704L214.318,307.115L214.001,303.816L215.225,302.774L217.933,302.314L218.513,299.046L217.39,297.061L213.348,298.547L210.462,292.176L208.291,289.534L208.675,283.382L205.866,280.88L204.048,277.478L204.744,274.789L204.102,273.903L205.847,272.292L206.716,269.883L209.856,268.267L211.705,265.128L211.702,262.03L210.174,260.053L211.712,258.135L210.19,255.007L213.473,254.156L217.973,254.49L220.807,256.63L223.464,257.189L224.576,255.593L225.877,256.223L230.447,254.048L230.844,253.347L230.882,248.554L230.53,242.951L229.008,237.491L231.254,234.442L231.371,232.038L229.93,230.591L229.658,227.964L228.219,224.504L226.612,225.231L226.046,227.455L224.115,227.965L222.813,229.576L219.064,228.164L218.327,229.607L214.707,229.515L213.406,227.949L210.902,228.118L207.329,231.029L203.707,230.625L201.843,228.296L200.151,227.605L198.104,223.362L196.621,222.489L191.505,225.201L188.066,224.451L184.02,224.491L184.057,222.617L181.378,219.147L180.724,214.744L178.742,214.852L175.994,213.254L174.708,211.783L172.975,212.07L165.83,209.078L161.834,209.381L160.641,208.1L159.189,208.84L157.19,208.651L155.107,204.221L153.577,202.667L152.692,204.01L149.36,202.066L148.399,202.119L148.921,199.377L148.507,196.71L146.761,194.632L148.398,192.786L145.457,190.278L143.654,189.698L143.566,187.812L146.02,184.795L145.988,183.195L144.732,180.957L144.693,177.679L145.547,175.965L149.301,172.645L149.92,168.465L152.532,166.825L153.304,162.961L152.546,158.398L153.895,153.071L154.328,150.013L154.191,146.798L153.153,144.141L150.057,140.611L151.417,137.928L151.367,135.164L145.973,128.596L145.374,126.689L145.297,118.338L144.167,110.774L168.646,102.564L188.372,95.865L210.418,78.508L227.85,56.646L229.427,54.283L234.5,36.12L235.146,33.477L237.576,35.169L241.55,35.021L241.364,31.073L239.437,26.176L240.812,22.865L241.123,19.265L239.239,17.273L237.924,17.116L235.116,14.866L232.29,10.512L231.558,7.451L229.734,5.345L226.737,5.729L226.739,2.808L228.501,3.478L230.679,2.98L234.454,4.946L238.169,4.388L239.914,3.356L242.776,0L246.767,1.713L249.038,4.022L250.694,4.317L252.224,6.731L255.379,7.324L256.663,5.772L258.586,6.994L259.801,9.553L259.772,11.291L262.12,12.59L265.648,13.389L267.345,16.023L271.41,17.502L273.472,21.482L273.232,23.076L277.165,30.369L276.783,32.354L277.2,35.454L278.846,36.393L280.913,36.354L283.697,37.921L285.502,37.801L286.671,39.366L289.199,41.08L290.478,40.626L292.605,44.825L299.224,45.06L301.514,45.935L301.776,47.971L304.832,52.461L304.937,53.576L306.825,55.734L305.976,59.381L304.632,61.982L306.022,63.592L307.55,63.788L308.813,65.813L310.403,65.227L313.279,65.556L317.147,64.822L319.09,68.342L320.567,68.915L320.345,74.285L321.257,75.283L319.843,80.595L318.463,82.139L320.333,84.391L322.237,85.542L322.308,87.049L326.179,86.595L326.455,88.415L328.969,89.985L330.37,90.078L333.476,88.236L336.368,88.968L339.997,87.475L342.866,89.68L344.846,89.53L348.115,90.799L348.54,92.099L351.44,91.332L352.668,89.945L354.642,90.46L356.817,89.32L360.537,86.286L361.988,87.565L363.797,87.121L365.145,85.265L366.697,85.408L368.65,80.853L369.913,81.377L372.112,79.04L373.318,82.241L374.988,81.3L377.241,82.393L382.527,83.886L385.993,88.332L388.034,87.77L388.574,86.611L391.252,86.387L392.864,87.964L394.915,84.414L397.929,83.868L399.925,81.508L402.612,83.249L404.464,81.999L406.095,84.627L408.281,84.709L409.278,86.035L412.482,86.994L413.942,88.639L413.52,91.205L414.985,91.907L419.652,90.803L421.073,93.291L424.053,92.091L424.929,95.421L427.211,94.272L428.855,95.297L429.259,97.891L433.618,98.409L435.017,99.415L435.242,102.229L432.239,107.19L418.616,128.725L410.784,141.036L414.244,142.91L415.948,142.542L418.85,144.256L424.489,141.393L427.118,142.818L428.253,144.804L430.06,145.528L430.941,147.786L433.552,151.096L435.245,152.18L436.218,153.994L439.162,156.752L439.391,159.454L438.459,161.466L436.799,162.237L434.836,161.072L434.516,159.682L431.557,159.373L431.719,160.947L430.705,162.318L428.263,159.652L427.035,157.554L426.456,154.932L421.239,153.876L419.981,155.551L417.737,154.057L416.511,155.365L414.349,156.219L413.283,153.713L411.415,155.962L409.436,155.003L406.822,156.356L406.372,158.278L405.018,158.579L404.576,161.047L401.875,163.095L397.144,163.776L395.959,163.106L392.965,163.919L391.932,163.119L390.095,165.047L387.125,165.482L385.368,164.963L384.2,166.437L381.932,165.314L379.801,166.356L378.537,168.076L376.796,168.827L375.594,167.869L373.382,168.139L372.146,167.074L367.439,168.763L365.426,170.099L363.036,172.569L360.963,172.916L358.497,175.551L355.383,176.917L352.257,178.966L350.126,179.132L348.147,180.386L346.781,182.855L342.816,184.08L339.628,186.583L339.584,187.678L337.779,188.983L334.996,188.682L333.778,190.125L329.014,192.867L329.91,195.461L329.792,197.554L328.721,198.871L327.633,202.007L326.384,204.132L326.695,207.269L325.789,209.757L326.344,211.377L322.648,216.667L319.09,219.366L317.836,222.468L317.791,224.509L316.45,225.186L315.414,229.38L318.92,236.701L320.607,241.241L319.211,243.768L317.313,245.87L312.431,246.945L310.077,248.603L305.238,249.907L303.703,251.623L302.14,252.021L298.114,256.114L296.204,259.895L296.181,264.529L294.81,266.441L297.883,270.776L298.7,273.484L297.66,275.08L294.05,274.967L292.438,276.858L290.103,275.876L289.461,277.078L290.569,280.18L289.386,282.372Z" title="Loreto"></path>
<path class="dept-path" data-dept="Madre de Dios" d="M422.905,498.56L420.058,497.298L416.843,497.035L415.427,495.117L412.714,494.551L409.008,495.306L405.832,493.725L402.886,495.414L400.89,497.63L398.395,501.506L395.349,500.147L393.615,494.768L393.432,490.497L390.964,490.058L388.625,488.854L386.599,486.668L384.334,487.064L382.989,484.394L379.192,479.939L377.383,479.583L373.826,481.075L371.874,483.282L369.483,481.313L366.815,480.753L363.172,478.939L364.006,477.843L363.067,474.98L361.186,472.836L359.696,472.324L360.058,469.591L363.269,467.989L363.381,464.98L361.097,462.846L358.404,461.809L359.079,458.143L358.82,455.934L355.841,454.959L352.265,454.751L352.627,452.904L351.679,451.757L349.691,451.436L349.313,448.487L349.89,447.115L347.668,445.995L348.44,444.407L346.262,441.491L350.516,437.142L351.378,430.92L353.056,429.07L353.38,427.54L354.923,424.346L354.846,422.186L357.807,418.428L355.423,416.846L355.528,414.719L357.473,413.957L360.424,414.745L361.762,413.932L368.541,414.345L372.88,414.195L379.963,412.499L386.51,412.473L389.663,408.487L390.266,406.083L391.624,405.199L391.31,402.43L392.562,398.26L395.147,395.375L399.011,394.376L401.164,390.676L401.214,389.091L402.828,388.621L404.471,386.969L406.79,385.923L411.01,382.176L410.907,381.296L413.061,379.187L412.222,377.466L412.418,375.071L414.437,372.951L414.446,395.219L414.442,414.333L417.67,411.812L420.404,414.158L421.559,415.794L425.936,417.025L428.31,416.217L430.02,416.394L432.193,415.477L433.945,413.942L436.445,413.471L439.227,411.594L441.235,411.289L445.453,411.635L447.291,412.989L451.221,412.695L452.642,412.098L453.916,413.058L466.485,433.471L471.177,440.432L476.255,449.449L488.043,471.86L486.625,475.1L485.115,476.152L485.623,478.111L484.765,480.541L481.273,483.939L481.232,485.707L479.887,486.725L479.876,491.291L463.395,498.691L450.75,504.305L438.468,500.594L436.275,499.77L422.364,495.552Z" title="Madre de Dios"></path>
<path class="dept-path" data-dept="Moquegua" d="M394.695,679.078L392.208,676.993L385.95,673.565L387.12,671.801L386.477,669.903L385.937,665.434L385.11,662.038L381.496,657.94L383.368,656.631L388.579,650.424L387.182,647.591L385.485,647.566L383.38,641.444L383.242,639.068L383.949,636.556L386.055,635.733L387.628,637.011L389.073,635.999L389.446,631.661L390.737,629.09L390.705,625.824L394.692,626.141L396.993,625.498L400.216,626.96L401.701,625.593L400.863,623.681L400.448,619.679L401.547,619.619L405.422,616.999L404.626,611.254L405.314,609.759L406.974,609.667L406.687,606.716L408.624,608.214L410.999,608.799L413.331,607.156L416.453,607.1L417.736,608.602L422.104,610.542L422.399,613.384L424.005,615.715L424.772,620.182L423.144,622.616L424.973,623.653L426.184,626.286L428.908,627.36L430.898,629.501L431.16,631.417L434.198,633.206L435.733,632.137L437.442,633.258L437.664,636.129L435.587,637.458L434.076,639.36L433.956,642.453L431.99,644.33L428.212,644.869L427.766,642.889L429.775,639.203L425.942,637.827L420.909,640.502L420.04,644.603L420.609,649.93L419.021,650.327L417.671,653.351L414.584,655.167L411.795,655.579L410.604,657.494L409.234,661.701L409.866,662.514L404.454,668.58L403.22,673.788L400.196,673.462L396.058,676.466Z" title="Moquegua"></path>
<path class="dept-path" data-dept="Pasco" d="M201.632,411.398L203.048,416.666L202.23,420.053L200.541,419.405L200.159,417.835L197.186,417.227L193.655,417.75L192.149,415.707L190.314,414.742L190.881,413.033L190.298,409.235L188.311,406.084L187.338,402.403L187.478,400.818L185.745,398.783L184.871,394.663L185.932,393.012L187.796,391.967L193.665,390.583L194.347,389.012L199.494,387.048L200.488,391.604L201.923,390.285L203.729,390.43L207.206,392.525L209.146,392.688L209.942,393.878L213.016,394.419L214.919,391.647L214.947,389.71L217.502,387.636L218.113,385.977L220.162,385.752L223.228,384.008L223.26,381.197L224.32,377.918L226.811,376.994L227.497,374.309L229.063,375.496L231.802,375.128L234.81,372.84L235.798,371.196L238.856,371.175L239.311,370.392L238.288,367.871L240.629,367.955L243.658,370.019L245.601,370.259L247.423,369.246L249.694,369.961L251.81,367.012L253.517,366.098L255.332,366.524L257.019,365.82L256.921,364.172L259.621,359.833L259.044,358.001L259.902,355.92L261.802,354.334L265.279,356.897L265.617,359.749L268.577,360.62L268.998,364.768L270.424,367.731L270.326,371.173L271.665,372.388L271.309,375.719L272.189,378.812L273.453,380.429L274.926,380.305L275.82,382.364L278.535,383.182L278.81,386.777L276.843,390.399L277.652,393.394L279.021,393.38L280.409,395.363L282.254,399.218L281.041,400.5L278.603,400.387L276.677,401.891L275.318,403.873L273.178,405.074L272.75,407.126L269.022,408.07L268.078,409.749L265.713,410.983L264.169,410.678L262.847,409.241L260.644,408.899L258.675,407.636L257.494,407.866L256.01,405.93L253.681,405.496L251.307,404.106L250.452,404.645L249.047,401.978L246.881,401.545L245.172,404.008L242.497,403.453L240.505,405.412L239.817,407.643L237.753,409.107L234.407,408.823L232.197,410.544L231.613,408.58L232.41,406.139L231.256,405.025L228.117,404.649L227.522,407.093L223.624,407.984L222.161,407.027L220.147,407.615L218.179,409.977L217.432,409.271L215.01,409.856L212.383,407.478L210.437,409.717L208.676,410.752L207.49,412.897L204.936,412.808L204.227,411.226L203.705,411.075L202.751,411.44L202.381,411.268L202.123,411.272Z" title="Pasco"></path>
<path class="dept-path" data-dept="Piura" d="M91.521,185.303L90.206,186.665L88.355,190.78L85.198,193.799L86.316,195.385L85.925,197.5L87.089,198.529L88.23,203.895L89.18,206.192L84.45,206.872L85.305,209.483L84.361,214.894L84.769,216.463L86.863,220.336L83.688,223.224L80.67,221.15L76.857,222.07L75.881,220.102L75.693,217.896L73.767,218.554L71.715,218.222L72.468,214.51L69.851,211.008L68.123,210.967L66.941,207.869L67.333,206.676L65.489,205.153L63.881,206.041L63.011,208.578L62.042,214.986L56.932,220.148L54.375,220.312L49.548,222.368L47.715,224.616L38.289,238.412L31.874,235.271L27.546,231.553L20.843,227.451L18.676,223.644L18.675,220.169L20.622,218.241L21.711,216.262L23.468,217.954L26.418,218.525L28.359,217.171L29.495,214.899L29.822,210.589L28.13,205.908L25.842,202.573L22.292,199.098L20.22,198.485L19.094,196.556L16.974,194.614L19.28,189.264L20.877,189.696L22.021,188.095L21.036,185.382L17.648,181.16L11.957,174.621L12.651,173.865L13.672,168.716L12.877,167.135L14.247,165.282L14.918,162.296L14.491,160.641L15.378,158.373L17.95,156.858L20.503,153.788L22.727,152.229L25.36,153.719L25.983,155.464L28.684,156.193L31.671,155.559L35.54,156.005L38.436,157.661L40.78,155.511L42.151,152.977L43.541,152.063L44.969,153.649L45.534,156.311L47.9,156.372L49.495,157.336L48.055,159.555L45.818,161.609L44.801,163.457L45.364,166.125L47.214,167.243L50.953,165.304L54.528,161.978L55.135,160.373L57.932,159.891L62.157,163.244L64.827,163.456L66.68,164.488L67.864,166.546L69.59,167.502L72.788,166.692L74.79,165.286L75.817,165.472L78.249,168.304L80.708,168.566L81.404,170.512L81.072,172.514L84.668,180.266L87.366,182.347L89.532,185.432Z" title="Piura"></path>
<path class="dept-path" data-dept="Puno" d="M478.128,623.351L478.128,616.68L482.042,620.064L482.042,621.168ZM450.972,658.037L449.008,657.533L447.578,658.332L445.452,656.03L443.08,656.317L436.006,651.765L435.741,648.952L433.755,646.973L431.99,644.33L433.956,642.453L434.076,639.36L435.587,637.458L437.664,636.129L437.442,633.258L435.733,632.137L434.198,633.206L431.16,631.417L430.898,629.501L428.908,627.36L426.184,626.286L424.973,623.653L423.144,622.616L424.772,620.182L424.005,615.715L422.399,613.384L422.104,610.542L417.736,608.602L416.453,607.1L413.331,607.156L410.999,608.799L408.624,608.214L406.687,606.716L405.82,604.559L402.332,599.154L403.684,596.317L403.014,593.65L399.626,590.536L399.363,587.62L400.16,586.282L398.469,584.346L399.472,581.954L401.725,579.854L400.486,578.265L401.341,576.965L400.826,575.408L399.781,567.481L400.506,566.477L400.164,561.933L400.854,559.406L399.441,558.457L397.933,559.025L395.663,555.623L399.878,551.954L400.056,549.372L401.341,547.011L400.465,545.533L401.339,543.793L403.202,542.464L404.419,540.266L403.714,538.655L404.935,536.321L407.11,534.582L407.6,532.565L405.124,530.788L406.205,527.377L406.271,524.313L408.634,522.587L410.4,523.168L411.245,522.156L409.897,519.674L410.634,516.706L412.934,516.462L414.351,514.65L417.148,513.314L417.437,511.412L420.495,508.424L420.873,506.317L422.469,505.482L422.741,503.259L421.705,501.114L422.905,498.56L422.364,495.552L436.275,499.77L438.468,500.594L450.75,504.305L463.395,498.691L479.876,491.291L480.533,493.482L479.776,495.6L480.868,500.625L478.171,509.915L475.325,516.227L472.77,516.502L472.579,517.714L475.924,520.415L475.79,521.388L478.153,522.562L476.889,525.093L475.734,525.672L475.886,528.922L477.414,530.757L478.983,531.37L480.465,536.073L481.532,538.272L476.475,538.296L474.49,541.965L475.611,544.29L473.901,546.284L471.909,547.281L469.781,549.673L469.427,552.268L466.797,552.317L466.435,555.234L465.372,556.251L466.601,558.496L463.748,559.452L461.772,560.864L462.145,564.015L461.48,566.598L463.822,570.5L464.348,572.268L466.206,573.252L470.122,577.679L466.962,580.918L465.726,583.008L465.54,586.841L464.166,585.582L462.624,589.522L458.723,587.355L457.156,585.207L453.69,582.372L452.656,582.951L450.947,581.034L450.83,579.599L448.797,577.665L447.706,577.877L446.035,580.597L444.398,579.766L441.469,580.059L441.162,582.421L439.643,584.015L440.424,586.282L442.73,590.267L446.112,594.219L446.86,596.977L445.241,596.83L443.301,595.258L443.324,593.528L441.52,591.685L438.87,595.833L436.843,595.483L436.213,596.74L436.592,599.233L438.876,601.732L441.891,603.268L444.18,599.177L446.233,600.987L446.164,603.454L448.247,604.308L449.829,605.862L453.926,605.973L458.093,607.308L459.167,609.396L456.148,613.414L456.493,615.693L459.043,614.549L461.613,617.339L466.004,618.133L469.603,617.456L472.987,615.274L475.932,617.611L473.16,618.613L474.238,620.539L474.194,623.359L471.907,625.659L471.886,627.009L473.676,629.461L473.887,631.268L475.209,633.259L473.361,634.504L468.676,636.041L466.827,640.302L463.618,643.431L462.154,646.221L460.238,647.674L461.023,649.609L458.191,650.577L455.835,652.481L454.143,652.996ZM441.715,576.626L440.029,574.562L439.119,575.285L436.733,574.551L435.809,572.879L433.134,575.108L435.223,576.124L439.308,577.124Z" title="Puno"></path>
<path class="dept-path" data-dept="San Martín" d="M212.673,312.277L208.833,312.837L207.208,317.785L207.753,325.016L205.855,328.773L203.462,330.288L202.09,324.92L201.647,321.973L199.93,319.947L199.581,316.352L196.451,316.882L195.431,318.604L194.596,321.679L191.722,319.399L188.655,319.484L185.915,320.261L180.869,319.663L180.28,320.796L177.687,321.695L172.672,321.07L171.1,319.675L171.204,318.378L169.515,316.752L171.332,315.469L175.426,315.078L177.783,312.426L178.252,310.808L177.338,308.342L178.036,306.529L175.041,304.271L173.808,302.05L170.098,301.009L168.888,301.267L165.591,300.557L163.564,302.331L160.062,302.152L159.249,299.747L160.384,296.593L159.262,296.353L157.907,292.983L156.518,292.591L154.717,290.858L156.341,288.664L154.381,284.213L154.749,281.279L151.618,278.627L150.662,275.695L150.928,274.278L150.248,271.275L151.796,270.458L150.368,267.802L147.745,266.245L146.033,260.818L147.371,258.13L145.929,254.887L146.492,252.772L146.534,249.493L148.496,249.999L151.54,247.493L154.105,249.941L160.203,250.72L158.159,247.226L159.747,247.131L161.953,244.092L162.283,242.039L164.281,239.714L163.774,236.86L164.775,236.735L166.224,238.754L168.092,238.756L169.557,235.779L167.03,233.087L166.166,229.902L163.967,229.707L161.529,228.672L159.686,225.84L158.222,226.635L156.563,224.387L154.49,226.747L152.249,224.706L149.403,223.611L150.054,221.91L149.078,219.052L145.846,217.544L145.478,212.466L146.861,209.444L145.777,206.947L145.676,203.138L146.631,201.946L148.399,202.119L149.36,202.066L152.692,204.01L153.577,202.667L155.107,204.221L157.19,208.651L159.189,208.84L160.641,208.1L161.834,209.381L165.83,209.078L172.975,212.07L174.708,211.783L175.994,213.254L178.742,214.852L180.724,214.744L181.378,219.147L184.057,222.617L184.02,224.491L188.066,224.451L191.505,225.201L196.621,222.489L198.104,223.362L200.151,227.605L201.843,228.296L203.707,230.625L207.329,231.029L210.902,228.118L213.406,227.949L214.707,229.515L218.327,229.607L219.064,228.164L222.813,229.576L224.115,227.965L226.046,227.455L226.612,225.231L228.219,224.504L229.658,227.964L229.93,230.591L231.371,232.038L231.254,234.442L229.008,237.491L230.53,242.951L230.882,248.554L230.844,253.347L230.447,254.048L225.877,256.223L224.576,255.593L223.464,257.189L220.807,256.63L217.973,254.49L213.473,254.156L210.19,255.007L211.712,258.135L210.174,260.053L211.702,262.03L211.705,265.128L209.856,268.267L206.716,269.883L205.847,272.292L204.102,273.903L204.744,274.789L204.048,277.478L205.866,280.88L208.675,283.382L208.291,289.534L210.462,292.176L213.348,298.547L217.39,297.061L218.513,299.046L217.933,302.314L215.225,302.774L214.001,303.816L214.318,307.115L215.362,309.704L214.554,311.874Z" title="San Martín"></path>
<path class="dept-path" data-dept="Tacna" d="M450.972,658.037L453.455,658.239L457.508,661.424L457.471,666.568L450.067,672.705L445.161,672.166L444.214,673.748L445.009,676.744L445.172,680.687L446.995,683.911L446.833,685.556L444.519,690.648L442.971,692.659L438.98,696.516L435.593,696.75L431.876,698.711L426.724,698.305L423.347,700L419.418,696.933L412.007,692.521L406.952,687.724L404.471,686.708L403.853,684.682L399.519,681.259L396.295,680.902L394.695,679.078L396.058,676.466L400.196,673.462L403.22,673.788L404.454,668.58L409.866,662.514L409.234,661.701L410.604,657.494L411.795,655.579L414.584,655.167L417.671,653.351L419.021,650.327L420.609,649.93L420.04,644.603L420.909,640.502L425.942,637.827L429.775,639.203L427.766,642.889L428.212,644.869L431.99,644.33L433.755,646.973L435.741,648.952L436.006,651.765L443.08,656.317L445.452,656.03L447.578,658.332L449.008,657.533Z" title="Tacna"></path>
<path class="dept-path" data-dept="Tumbes" d="M43.541,152.063L42.151,152.977L40.78,155.511L38.436,157.661L35.54,156.005L31.671,155.559L28.684,156.193L25.983,155.464L25.36,153.719L22.727,152.229L24.756,148.394L25.915,147.283L30.532,144.254L31.998,139.903L33.539,138.321L39.948,135.236L41.381,133.486L42.882,130.446L45.561,129.727L47.546,129.838L50.865,126.677L53.564,127.996L52.842,129.273L54.103,131.408L54.757,133.795L55.056,139.089L55.821,141.492L55.892,144.03L56.579,145.655L52.824,147.284L50.65,149.582L48.226,148.298L45.686,148.537Z" title="Tumbes"></path>
<path class="dept-path" data-dept="Ucayali" d="M414.437,372.951L412.418,375.071L412.222,377.466L413.061,379.187L410.907,381.296L411.01,382.176L406.79,385.923L404.471,386.969L402.828,388.621L401.214,389.091L401.164,390.676L399.011,394.376L395.147,395.375L392.562,398.26L391.31,402.43L391.624,405.199L390.266,406.083L389.663,408.487L386.51,412.473L379.963,412.499L372.88,414.195L368.541,414.345L361.762,413.932L360.424,414.745L357.473,413.957L355.528,414.719L355.423,416.846L357.807,418.428L354.846,422.186L354.923,424.346L353.38,427.54L350.809,426.081L348.137,427.064L344.341,429.163L342.267,430.989L339.454,430.727L335.826,428.936L334.636,427.63L332.53,429.043L328.671,428.033L326.609,426.987L327.089,425.127L325.983,424.439L325.191,421.937L323.807,424.438L319.642,425.575L317.166,425.43L315.132,426.3L312.356,426.245L309.035,429.029L306.618,426.554L307.519,425.917L307.895,422.931L306.674,416.824L304.421,416.142L303.335,412.723L303.756,408.994L301.873,408.457L298.65,405.645L296.358,404.225L294.217,406.672L293.871,411.307L292.718,412.601L292.25,415.756L292.448,419.898L288.054,418.944L288.036,417.007L287.031,414.066L283.79,413.822L279.669,415.079L277.605,415.024L273.201,416.49L270.506,414.513L268.452,414.174L268.14,412.425L265.713,410.983L268.078,409.749L269.022,408.07L272.75,407.126L273.178,405.074L275.318,403.873L276.677,401.891L278.603,400.387L281.041,400.5L282.254,399.218L280.409,395.363L279.021,393.38L277.652,393.394L276.843,390.399L278.81,386.777L278.535,383.182L275.82,382.364L274.926,380.305L273.453,380.429L272.189,378.812L271.309,375.719L271.665,372.388L270.326,371.173L270.424,367.731L268.998,364.768L268.577,360.62L265.617,359.749L265.279,356.897L261.802,354.334L261.907,353.045L265.095,349.57L263.212,344.108L263.169,342.544L261.765,341.611L262.769,339.889L263.034,334.945L264.364,331.198L267.246,329.522L267.503,328.503L266.685,322.242L264.029,320.881L257.279,324.034L255.432,325.155L255.286,328.791L251.9,332.63L252.146,335.38L250.467,336.21L247.961,334.391L246.128,335.079L244.29,336.976L244.001,339.506L242.873,341.115L240.748,342.095L241.761,344.088L241.795,346.782L239.818,348.321L239.052,349.823L237.316,349.336L232.69,349.324L231.101,352.393L228.544,353.262L224.473,353.128L222.184,348.393L219.842,345.2L219.378,342.655L216.771,338.85L216.828,336.903L215.214,333.442L215.051,329.7L214.146,327.242L216.17,325.168L218.367,324.816L220.386,320.831L220.422,318.797L222.758,318.549L223.114,316.726L225.326,315.603L227.169,315.687L229.139,317.758L233.114,316.631L233.32,314.971L230.738,313.29L230.782,311.034L231.962,309.616L233.516,306.372L235.543,305.316L238.861,304.813L240.511,305.952L241.612,304.875L242.748,300.681L244.32,299.241L248.42,298.157L250.339,298.875L253.563,303.134L258.265,301.419L259.892,299.331L263.647,297.769L265.835,293.072L267.865,291.601L266.281,290.513L265.299,288.618L265.795,287.481L263.078,283.456L263.087,281.099L264.095,278.634L265.468,277.683L267.113,273.308L268.389,272.235L269.858,273.479L275.358,275.461L277.507,275.188L280.444,275.744L282.039,277.169L285.736,279.131L285.968,280.522L287.875,282.397L291.39,285.005L290.988,286.362L293.351,287.56L294.627,289.205L297.98,290.304L299.397,292.467L299.328,294.664L295.99,296.653L298.275,298.601L299.676,300.517L300.75,300.298L302.836,304.863L302.434,306.342L303.654,309.367L305.043,310.462L304.408,313.242L310.786,317.959L312.37,318.113L311.875,322.933L312.794,323.232L315.367,326.273L318.52,326.564L320.511,329.879L320.595,331.163L323.409,334.846L324.755,334.874L326.758,339.132L327.057,341.581L326.172,343.503L322.395,346.697L318.935,351.608L317.712,351.855L317.273,353.69L335.437,353.72L342.443,356.39L347.076,356.199L351.8,358.675L351.537,360.98L353.126,363.056L352.639,365.148L354.296,367.688L356.682,368.397L356.28,369.68L356.706,372.527L355.836,373.459L355.591,376.109L372.293,376.112L385.844,376.127L387.057,374.854L388.76,375.823L392.721,373.848L394.011,371.246L398.018,369.099L399.993,369.189L400.909,366.999L402.769,366.271L404.886,363.341L407.477,362.47L409.333,359.703L412.789,357.607L416.364,354.414L418.2,356.79L417.239,358.408L415.265,358.913L415.025,361.151L416.793,363.533L417.661,365.675L417.339,367.193L414.497,368.701Z" title="Ucayali"></path>
</svg>
          </span>
        </div>
        <div class="departamentos-destinos">
          <h2>
            <span>${e("compass",20)}</span>
            <span>Destinos de Perú</span>
          </h2>
          <ul id="dept-list">
            ${a.map(n=>`<li><a data-dept="${n}">${n}</a></li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `,p.appendChild(i),window.lucide&&window.lucide.createIcons(),i.querySelector("#close-region-btn").onclick=()=>i.remove(),i.onclick=n=>{n.target===i&&i.remove()};const t=n=>{document.getElementById("current-location-text").textContent=n+", Perú",i.remove()};i.querySelectorAll("[data-dept]").forEach(n=>{n.onclick=()=>{const l=n.getAttribute("data-dept");t(l)},n.onmouseenter=()=>{const l=n.getAttribute("data-dept");i.querySelectorAll(`path[data-dept="${l}"]`).forEach(o=>o.classList.add("active")),i.querySelectorAll(`a[data-dept="${l}"]`).forEach(o=>o.classList.add("active"))},n.onmouseleave=()=>{const l=n.getAttribute("data-dept");i.querySelectorAll(`path[data-dept="${l}"]`).forEach(o=>o.classList.remove("active")),i.querySelectorAll(`a[data-dept="${l}"]`).forEach(o=>o.classList.remove("active"))}})}function Mt(){const p=document.getElementById("app"),i=j.currentUser||{initials:"V"};p.innerHTML=`
    <div class="screen" style="padding-bottom:12px">
      <div class="home-appbar">
        <div class="home-location" id="btn-location" style="cursor:pointer">
          ${e("map-pin",20,"text-primary")}
          <div>
            <div class="loc-text" id="current-location-text">Ica, Perú</div>
            <div class="label" style="font-size:10px">Explora tu ciudad</div>
          </div>
        </div>
        <div class="home-actions">
          <button class="appbar-btn" id="btn-top-promos">${e("tag",20)}</button>
          <button class="appbar-btn" id="btn-top-events">${e("calendar",20)}</button>
          <button class="appbar-btn" id="btn-notif" style="position:relative">${e("bell",20)}<span class="badge">3</span></button>
          <div class="avatar" style="width:32px;height:32px;background:var(--green-primary);font-size:12px;cursor:pointer" id="btn-avatar">${i.initials}</div>
        </div>
      </div>

      <div style="display:flex; gap:12px; padding: 12px var(--pad-screen); align-items:stretch;">
        <div class="card-flat flex-1" style="display:flex; align-items:center; gap:16px; padding:12px; border-radius: var(--radius-card);">
          <div class="text-primary">${e("sun",28)}</div>
          <div>
            <div style="font-weight:700; font-size:18px; color: var(--text-primary);">26°C</div>
            <div class="label" style="font-size:10px">Soleado, Ica</div>
          </div>
        </div>
        <button class="btn btn-danger" style="width:auto; padding:0 20px; font-weight:700; gap:8px; border-radius: var(--radius-card);" id="btn-sos">
          ${e("alert-octagon",20)} SOS
        </button>
      </div>

      <div class="home-hero">
        <img src="https://picsum.photos/seed/hero-city/600/400" alt="Ica" />
        <div class="hero-gradient">
          <h2>Descubre lugares auténticos</h2>
          <p style="color: rgba(255,255,255,0.9)">Explora, organiza y vive Ica</p>
          <button class="btn btn-primary btn-sm" style="width:auto; background: white; color: var(--green-primary);" id="btn-create-route">
            ${e("map",18)} Crear recorrido
          </button>
        </div>
      </div>

      <div class="home-search" id="btn-search">
        <span class="search-icon">${e("search",18)}</span>
        <span class="search-text">Buscar lugares, eventos, personas...</span>
      </div>

      <div class="home-section"><div class="section-header"><h3>Explora por categoría</h3></div></div>
      <div class="categories-scroll scroll-x">
        ${ot.map(s=>`
          <div class="category-item" data-cat="${s.label}">
            <div class="category-circle" style="background:${s.color}">${s.icon}</div>
            <span class="cat-label">${s.label}</span>
          </div>
        `).join("")}
      </div>

      <div class="home-section">
        <div class="section-header"><h3>Experiencias recientes</h3><a id="link-reels" style="cursor:pointer">Ver todas</a></div>
      </div>
      <div class="scroll-x" style="padding-left:var(--pad-screen);margin-bottom:var(--gap-section)">
        ${Ee.map(s=>`
          <div class="reel-card" data-reel="${s.id}">
            <img src="${s.image}" alt="${s.title}" />
            <div class="reel-overlay">
              <div></div>
              <div class="play-icon">${e("play",24)}</div>
              <div class="reel-footer">
                <span style="font-size: 11px; font-weight: 600;">${s.username}</span>
                <span style="font-size: 10px; opacity: 0.9;">${e("eye",12)} ${s.views}</span>
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="home-section">
        <div class="section-header"><h3>Recomendado para ti</h3><a id="link-explore" style="cursor:pointer">Ver más</a></div>
      </div>
      <div class="scroll-x" style="padding-left:var(--pad-screen);margin-bottom:var(--gap-section)">
        ${J.filter(s=>!s.hidden).slice(0,5).map(s=>`
          <div class="card-flat" data-place="${s.id}" style="padding:0;border-radius:16px;overflow:hidden;cursor:pointer;min-width:240px;max-width:240px;flex-shrink:0">
            <div style="position:relative">
              <img src="${s.image}" alt="${s.name}" style="width:100%;height:140px;object-fit:cover" />
              <div style="position:absolute;top:8px;left:8px">
                <span class="chip chip-${s.catColor||"green"}" style="font-size:9px;padding:2px 8px;backdrop-filter:blur(4px)">${s.category}</span>
              </div>
              <div style="position:absolute;top:8px;right:8px">
                ${le(s.safety)}
              </div>
            </div>
            <div style="padding:10px 12px">
              <div style="font-weight:700;font-size:14px;margin-bottom:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${s.name}</div>
              <div style="display:flex;align-items:center;gap:4px;margin-bottom:4px">${ge(Math.round(s.rating))} <span style="font-size:10px;color:var(--text-secondary)">${s.rating}</span></div>
              <div style="font-size:10px;color:var(--text-secondary);display:flex;align-items:center;gap:3px;margin-bottom:3px">${e("map-pin",10)} ${s.address}</div>
              ${s.hours?`<div style="font-size:10px;color:var(--text-secondary);display:flex;align-items:center;gap:3px;margin-bottom:4px">${e("clock",10)} ${s.hours}</div>`:""}
              <div style="font-size:10px;color:var(--text-secondary);line-height:1.3;margin-bottom:6px">${s.description?s.description.substring(0,60)+"...":""}</div>
              <div style="display:flex;gap:3px;flex-wrap:wrap">
                ${(s.tags||[]).slice(0,2).map(y=>`<span class="chip chip-outline" style="font-size:8px;padding:1px 5px">${y}</span>`).join("")}
              </div>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="home-section">
        <div class="section-header"><h3>${e("calendar",18)} Próximos eventos</h3><a id="link-events" style="cursor:pointer">Ver todos</a></div>
        <div class="flex-col gap-12">
          ${ze.slice(0,3).map(s=>`
            <div class="event-card-h" data-event="${s.id}">
              <img class="event-img" src="${s.image}" alt="${s.name}" />
              <div class="event-info">
                <span class="chip chip-${s.catColor||"green"}" style="font-size:10px;padding:2px 8px;width:fit-content">${s.category}</span>
                <div class="event-name">${s.name}</div>
                <div class="event-meta">${e("calendar",12)} ${s.date} · ${s.time}</div>
                <div class="event-meta">${e("map-pin",12)} ${s.placeName}</div>
                <span class="chip ${s.free?"chip-green":"chip-blue"}" style="font-size:10px;padding:2px 8px;width:fit-content">${s.priceLabel}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="home-section" id="promo-section">
        <div class="section-header"><h3>Promociones</h3></div>
        <div class="scroll-x">
          ${ke.map((s,y)=>`
            <div class="promo-banner" data-promo="${y}" style="cursor:pointer">
              <div class="promo-img" style="position:relative">
                <img src="${s.image}" style="width:90px;height:100%;object-fit:cover" />
                <div class="promo-discount">${s.discount}</div>
              </div>
              <div class="promo-info">
                <strong style="font-size:13px">${s.title}</strong>
                <small>${s.description}</small>
                <small style="color:var(--green-primary); font-weight: 600;">${e("clock",12)} Hasta ${s.validUntil}</small>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- ═══ LUGARES OCULTOS — SECCIÓN DORADA ═══ -->
      <div class="hidden-section-hero">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
          ${e("eye-off",20,"color:var(--gold)")}
          <span style="font-size:13px;color:var(--gold-dark);font-weight:600">Lugares Ocultos de Ica</span>
        </div>
        <h2 style="font-size:22px;font-weight:700;color:var(--text-primary);margin-bottom:4px;max-width:85%">El Ica que pocos conocen</h2>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px;line-height:1.4">Lugares secretos descubiertos por la comunidad. Explora, valida y protege los rincones más especiales.</p>
        <div class="scroll-x" style="margin:0 -20px;padding:0 20px;margin-bottom:16px;gap:10px;display:flex">
          ${be().slice(0,3).map(s=>`
            <div class="hidden-preview-card" data-hidden-place="${s.id}">
              <img src="${s.image}" alt="${s.name}" />
              <div class="hp-overlay">
                <span style="color:var(--gold);display:flex;align-items:center">${e("eye",14,"color:var(--gold)")}</span>
                <span style="color:white;font-weight:700;font-size:12px;text-shadow:0 1px 3px rgba(0,0,0,0.5)">${s.name.length>18?s.name.substring(0,18)+"…":s.name}</span>
              </div>
            </div>
          `).join("")}
          ${be().length>3?`
            <div class="hidden-preview-card" style="background:var(--gold-light);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;border:1.5px dashed var(--gold)" id="btn-hidden-more">
              <span style="font-size:20px;font-weight:700;color:var(--gold)">${e("plus",24,"color:var(--gold)")}</span>
              <span style="font-size:11px;color:var(--gold-dark);font-weight:600;text-align:center;padding:0 8px">y ${be().length-3} más</span>
            </div>
          `:""}
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-outline flex-1" id="btn-explore-secrets" style="border-color:var(--gold);color:var(--gold-dark);font-size:12px;padding:10px 12px;border-radius:10px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:6px">${e("compass",14)} Explorar secretos</button>
          <button class="btn flex-1" id="btn-publish-secret" style="background:var(--gold);color:#1A1A1A;font-size:12px;padding:10px 12px;border-radius:10px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:6px">${e("plus",14)} Publicar lugar</button>
        </div>
      </div>
      <div style="height:8px"></div>
    </div>
  `,W("/home","user"),A(),document.getElementById("btn-avatar").onclick=()=>E("/profile"),document.getElementById("btn-create-route").onclick=()=>E("/route-builder");const a=document.getElementById("btn-publish-secret");a&&(a.onclick=()=>E("/publish-place")),document.getElementById("link-reels").onclick=()=>E("/reels"),document.getElementById("link-explore").onclick=()=>E("/explore"),document.getElementById("link-events").onclick=()=>E("/explore");const t=document.getElementById("btn-explore-secrets");t&&(t.onclick=()=>E("/explore-hidden"));const n=document.getElementById("btn-hidden-more");n&&(n.onclick=()=>E("/explore-hidden")),document.querySelectorAll("[data-hidden-place]").forEach(s=>{s.onclick=()=>E("/place?id="+s.dataset.hiddenPlace)}),document.getElementById("btn-notif").onclick=()=>Bt(),document.getElementById("btn-search").onclick=()=>Pt(),document.getElementById("btn-sos").onclick=()=>{const s=document.createElement("div");s.className="modal-overlay",s.innerHTML=`
      <div style="background:var(--surface);width:85%;max-width:320px;border-radius:var(--radius-xl);overflow:hidden;animation:bounceIn 0.3s cubic-bezier(0.175,0.885,0.32,1.275);box-shadow:0 8px 32px rgba(0,0,0,0.15)">
        <div style="background:var(--red);color:white;padding:24px;text-align:center">
          <div style="margin-bottom:12px">${e("alert-triangle",48)}</div>
          <h2 style="font-size:20px; color: white">Emergencia (SOS)</h2>
        </div>
        <div style="padding:24px 20px">
          <div style="display:flex;flex-direction:column;gap:12px">
            <button class="btn btn-outline" style="border-color:var(--text-primary);color:var(--text-primary); font-weight: 600;display:flex;align-items:center;justify-content:center;gap:8px" onclick="showToast('Llamando al 105...'); this.closest('.modal-overlay').remove();">${e("phone",16)} Policía (105)</button>
            <button class="btn btn-outline" style="border-color:var(--red);color:var(--red); font-weight: 600;display:flex;align-items:center;justify-content:center;gap:8px" onclick="showToast('Llamando al 116...'); this.closest('.modal-overlay').remove();">${e("alert-circle",16)} Bomberos (116)</button>
            <button class="btn btn-outline" style="border-color:var(--blue);color:var(--blue); font-weight: 600;display:flex;align-items:center;justify-content:center;gap:8px" onclick="showToast('Llamando al 106...'); this.closest('.modal-overlay').remove();">${e("heart",16)} SAMU (106)</button>
            <button class="btn btn-outline" style="border-color:var(--green-primary);color:var(--green-primary); font-weight: 600;display:flex;align-items:center;justify-content:center;gap:8px" onclick="showToast('Llamando Turismo...'); this.closest('.modal-overlay').remove();">${e("shield",16)} Policía de Turismo</button>
            <button class="btn btn-primary" style="margin-top:12px" onclick="this.closest('.modal-overlay').remove()">Cancelar</button>
          </div>
        </div>
      </div>
    `,document.getElementById("app").appendChild(s),A()},document.getElementById("btn-location").onclick=()=>Tt(),document.getElementById("btn-top-promos").onclick=()=>{E("/user-promotions")},document.getElementById("btn-top-events").onclick=()=>E("/explore"),document.querySelectorAll(".category-item").forEach(s=>{s.style.cursor="pointer",s.onclick=()=>{s.dataset.cat==="Gastronomía"?E("/gastronomia"):s.dataset.cat==="Hospedaje"?E("/hospedaje"):s.dataset.cat==="Experiencias"?E("/experiencias"):s.dataset.cat==="Transporte"?E("/transporte"):s.dataset.cat==="Servicios"?E("/servicios"):s.dataset.cat==="Vida nocturna"?E("/vida-nocturna"):s.dataset.cat==="Eventos"?E("/eventos"):E("/explore")}}),document.querySelectorAll("[data-place]").forEach(s=>{s.style.cursor="pointer",s.onclick=()=>{const y=re(s.dataset.place);y&&y.category==="Gastronomía"?E("/gastronomia-detail?id="+s.dataset.place):E("/place?id="+s.dataset.place)}}),document.querySelectorAll(".event-card-h").forEach(s=>{s.style.cursor="pointer",s.onclick=()=>E(`/event?id=${s.dataset.event}`)}),document.querySelectorAll(".reel-card").forEach(s=>{s.style.cursor="pointer",s.onclick=()=>E("/reels")}),document.querySelectorAll(".promo-banner[data-promo]").forEach(s=>{s.onclick=()=>{const y=parseInt(s.dataset.promo),c=ke[y];c&&(H(`
        <div style="padding:24px">
          <div style="display:flex;gap:16px;margin-bottom:16px">
            <img src="${c.image}" style="width:100px;height:100px;border-radius:12px;object-fit:cover" />
            <div>
              <h3 style="margin-bottom:4px">${c.title}</h3>
              <div style="font-size:22px;font-weight:700;color:var(--red);margin-bottom:4px">${c.discount}</div>
              <span class="chip chip-green" style="font-size:10px">Activa</span>
            </div>
          </div>
          <p style="font-size:13px;margin-bottom:16px;color:var(--text-secondary)">${c.description}</p>
          <div style="padding:12px;background:var(--bg-body);border:1px solid var(--border-light);border-radius:10px;margin-bottom:16px">
            <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="font-size:13px">Válida hasta</span><span style="font-weight:600">${c.validUntil}</span></div>
            <div style="display:flex;justify-content:space-between"><span style="font-size:13px">Descuento</span><span style="font-weight:600;color:var(--red)">${c.discount}</span></div>
          </div>
          <button class="btn btn-primary" id="bs-use-coupon" style="width:100%;display:flex;align-items:center;justify-content:center;gap:6px">${e("tag",16)} Usar cupón</button>
        </div>
      `),setTimeout(()=>{const x=document.getElementById("bs-use-coupon");x&&(x.onclick=()=>{M(),f(e("tag",16)+" Cupón activado. Mostralo al pagar.")})},100))}})}function Pt(){const p=document.getElementById("app"),i=document.createElement("div");i.className="search-overlay",i.innerHTML=`
    <div class="search-bar">
      <button class="appbar-btn" id="close-search">${e("arrow-left",20)}</button>
      <input class="search-input" autofocus placeholder="Buscar lugares, eventos..." id="search-input-field" />
    </div>
    <div class="search-results" id="search-results">
      <div style="padding:20px;text-align:center;color:var(--text-secondary)">
        <p style="font-size:14px">Búsquedas recientes</p>
        <div class="flex-col gap-8 mt-12">
          ${["Huacachina","Restaurantes en Ica","Eventos este fin de semana"].map(t=>`<div class="search-result-item">${e("clock",16,"text-secondary")}<span style="font-size:14px">${t}</span></div>`).join("")}
        </div>
      </div>
    </div>
  `,p.appendChild(i),A(),i.querySelector("#close-search").onclick=()=>i.remove();const a=i.querySelector("#search-input-field");a.focus(),a.addEventListener("input",()=>{const t=a.value.toLowerCase(),n=i.querySelector("#search-results");if(t.length<2){n.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-secondary)">Escribe al menos 2 caracteres</div>';return}const l=J.filter(o=>o.name.toLowerCase().includes(t)||o.category.toLowerCase().includes(t));n.innerHTML=l.length?l.map(o=>`
      <div class="search-result-item" data-sid="${o.id}">
        <img class="search-result-avatar" src="${o.image}" alt="${o.name}" />
        <div><div style="font-weight:600;font-size:14px">${o.name}</div><small>${o.category}</small></div>
      </div>
    `).join(""):'<div style="padding:40px;text-align:center;color:var(--text-secondary)">Sin resultados</div>',n.querySelectorAll("[data-sid]").forEach(o=>{o.onclick=()=>{i.remove(),E(`/place?id=${o.dataset.sid}`)}})})}function Bt(){const p=[{icon:e("calendar",24),title:"Reserva confirmada",desc:"Tu reserva en El Catador para 2 personas fue confirmada",time:"Hace 15 min",read:!1},{icon:e("star",24),title:"Nueva reseña",desc:"María G. dejó 5 estrellas en Huacachina",time:"Hace 1h",read:!1},{icon:e("tag",24),title:"Promoción activa",desc:"20% de descuento en Menú Criollo — válida hasta el 30 Jun",time:"Hace 3h",read:!1},{icon:e("user",24),title:"Nuevo seguidor",desc:"@carlos_viajero comenzó a seguirte",time:"Hace 5h",read:!0},{icon:e("award",24),title:"Evento próximo",desc:"Festival de la Vendimia comienza mañana",time:"Ayer",read:!0},{icon:e("message-circle",24),title:"Respuesta a tu reseña",desc:"El dueño de Vista Alegre respondió tu comentario",time:"Ayer",read:!0}];H(`
    <div style="padding:20px;max-height:75vh;overflow-y:auto">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <h3 style="display:flex;align-items:center;gap:6px">${e("bell",20)} Notificaciones</h3>
        <button class="btn btn-outline btn-xs" id="btn-mark-read">Marcar todo leído</button>
      </div>
      <div class="flex-col gap-4">
        ${p.map((i,a)=>`
          <div style="display:flex;gap:12px;padding:12px;border-radius:12px;background:${i.read?"transparent":"var(--green-bg-light)"};border-bottom:1px solid var(--border-light);cursor:pointer" class="notif-item" data-nidx="${a}">
            <span style="font-size:24px;flex-shrink:0">${i.icon}</span>
            <div style="flex:1;min-width:0">
              <div style="font-weight:${i.read?"500":"700"};font-size:14px;margin-bottom:2px">${i.title}</div>
              <div style="font-size:12px;color:var(--text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.desc}</div>
            </div>
            <div style="font-size:11px;color:var(--text-secondary);white-space:nowrap">${i.time}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `),document.getElementById("btn-mark-read").onclick=()=>{f(e("check",16)+" Notificaciones marcadas como leídas"),document.querySelectorAll(".notif-item").forEach(i=>i.style.background="transparent")},document.querySelectorAll(".notif-item").forEach(i=>{i.onclick=()=>{M(),f("Abriendo detalle...")}})}function Ne(p){return`
    <div class="card-flat" data-place="${p.id}" style="padding:0;margin-bottom:16px;border-radius:16px;overflow:hidden;cursor:pointer">
      <div style="position:relative">
        <img src="${p.image}" alt="${p.name}" style="width:100%;height:160px;object-fit:cover" />
        <div style="position:absolute;top:10px;left:10px;display:flex;gap:6px">
          <span class="chip chip-${p.catColor||"green"}" style="font-size:10px;padding:3px 10px;backdrop-filter:blur(4px)">${p.category}</span>
        </div>
        <div style="position:absolute;top:10px;right:10px">
          ${le(p.safety).replace("Shield",e("shield",12)).replace("✓","")}
        </div>
      </div>
      <div style="padding:14px 16px">
        <div style="font-weight:700;font-size:16px;margin-bottom:4px">${p.name}</div>
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
          ${ge(Math.round(p.rating)).replace(/★/g,e("star",12,"text-orange")).replace(/☆/g,e("star",12,"text-disabled"))}
          <span style="font-size:12px;color:var(--text-secondary);font-weight:500">${p.rating} (${p.reviews} op.)</span>
        </div>
        <div style="font-size:12px;color:var(--text-secondary);margin-bottom:4px;display:flex;align-items:center;gap:4px">${e("map-pin",12)} ${p.address}</div>
        ${p.hours?`<div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;display:flex;align-items:center;gap:4px">${e("clock",12)} ${p.hours}</div>`:""}
        <div style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;line-height:1.4">${p.description?p.description.substring(0,100)+"...":""}</div>
        <div style="display:flex;gap:4px;flex-wrap:wrap">
          ${(p.tags||[]).slice(0,4).map(i=>`<span class="chip chip-outline" style="font-size:9px;padding:2px 6px">${i}</span>`).join("")}
        </div>
      </div>
    </div>
  `}function Dt(){const p=document.getElementById("app");let i="Todos";function a(){const l=["Todos","Gastronomía","Experiencias","Hospedaje","Transporte","Servicios","Vida nocturna","Comunidad","Ocultos"],o=i==="Ocultos"?be():qe(i==="Todos"?null:i);p.innerHTML=`
      <div class="screen" style="padding-bottom:12px; background:var(--bg-body)">
        <div class="home-appbar" style="align-items:center;">
          <div class="search-bar" style="flex:1; display:flex; align-items:center; background:var(--surface); border-radius:var(--radius-xl); padding: 10px 16px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm);">
            ${e("search",20,"text-secondary")}
            <input type="text" id="explore-search-input" placeholder="Buscar destinos, eventos..." style="border:none; background:transparent; outline:none; font-size:15px; width:100%; margin-left:12px; color: var(--text-primary);" />
          </div>
          <div class="home-actions" style="margin-left: 12px;">
            <button class="appbar-btn" id="btn-filter" style="background:var(--surface);border:1px solid var(--border-light);box-shadow:var(--shadow-sm)">${e("sliders",20)}</button>
          </div>
        </div>

        <div class="explore-tabs mt-8" style="padding: 0 16px;">
          <button class="explore-tab active" data-tab="places" style="display:flex;align-items:center;gap:8px">
            ${e("map-pin",18)} Lugares
          </button>
          <button class="explore-tab" data-tab="events" style="display:flex;align-items:center;gap:8px">
            ${e("calendar",18)} Eventos
          </button>
        </div>

        <div id="explore-filter-chips" class="filter-chips" style="margin-top: 16px; padding: 4px 16px 16px; display: flex; gap: 8px; overflow-x: auto; -webkit-overflow-scrolling: touch;">
          ${l.map(r=>'<span class="chip '+(r===i?"chip-active":"chip-outline")+' chip-selectable" data-filter="'+r+'">'+r+"</span>").join("")}
        </div>

        <div class="explore-list" style="padding-bottom:16px;padding-left:16px;padding-right:16px;" id="explore-items-list">
          ${i==="Ocultos"?o.map(r=>`
            <div class="card-flat" data-place="${r.id}" style="padding:0;margin-bottom:16px;border-radius:16px;overflow:hidden;cursor:pointer">
              <div style="position:relative">
                <img src="${r.image}" alt="${r.name}" style="width:100%;height:160px;object-fit:cover" />
                <div style="position:absolute;top:10px;left:10px;display:flex;gap:6px">
                  <span class="chip chip-purple" style="font-size:10px;padding:3px 10px;backdrop-filter:blur(4px)">${e("eye-off",12)} Oculto</span>
                </div>
                <div style="position:absolute;top:10px;right:10px">
                  <span class="chip" style="background:rgba(0,0,0,0.5);color:white;font-size:10px;padding:3px 8px">${e("users",12)} ${r.safetyValidators||0} validaciones</span>
                </div>
              </div>
              <div style="padding:14px 16px">
                <div style="font-weight:700;font-size:16px;margin-bottom:4px">${r.name}</div>
                <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;display:flex;align-items:center;gap:4px">${e("map-pin",12)} ${r.address}</div>
                <div style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;line-height:1.4">${r.description.substring(0,100)}...</div>
                <div style="margin-bottom:12px">
                  <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-secondary);margin-bottom:4px">
                    <span>Progreso de validación</span>
                    <span style="font-weight:600">${r.validationCount||r.safetyValidators||0}/${r.validationGoal||15}</span>
                  </div>
                  <div style="height:6px;background:var(--border-light);border-radius:3px;overflow:hidden">
                    <div style="height:100%;background:var(--green-primary);border-radius:3px;width:${Math.min(100,(r.validationCount||r.safetyValidators||0)/(r.validationGoal||15)*100)}%;transition:width 0.3s"></div>
                  </div>
                </div>
                <div style="display:flex;gap:8px">
                  <button class="btn btn-primary btn-sm flex-1 btn-validate" data-validate="${r.id}" style="display:flex;align-items:center;justify-content:center;gap:6px">${e("check-circle",16)} Validar</button>
                  <button class="btn btn-outline btn-sm" style="width:auto;padding:0 12px" data-place="${r.id}">${e("info",16)}</button>
                </div>
              </div>
            </div>
            </div>
          `).join(""):o.map(r=>Ne(r)).join("")}
          ${o.length===0?'<div class="empty-state" id="empty-results">'+e("search",40,"text-secondary")+'<h3 style="margin-top:16px">Sin resultados</h3><p>Intenta con otra categoría</p></div>':""}
          <div class="empty-state" id="empty-search-results" style="display:none;padding:40px 20px">${e("search",40,"text-secondary")}<h3 style="margin-top:16px;font-size:18px">Sin coincidencias</h3><p style="color:var(--text-secondary)">No se encontraron lugares con ese término.</p></div>
        </div>
      </div>
    `,W("/explore","user"),A();const b=document.getElementById("explore-search-input");b&&(b.oninput=r=>{const s=r.target.value.toLowerCase();let y=0;document.querySelectorAll("#explore-items-list > div").forEach(x=>{if(x.id==="empty-results"||x.id==="empty-search-results")return;x.innerText.toLowerCase().includes(s)?(x.style.display="flex",y++):x.style.display="none"});const c=document.getElementById("empty-search-results");c&&(c.style.display=y===0&&s!==""?"block":"none")}),document.querySelectorAll("[data-tab]").forEach(r=>{r.onclick=()=>{r.dataset.tab==="events"&&E("/eventos")}}),document.querySelectorAll("[data-filter]").forEach(r=>{r.onclick=()=>{const s=r.dataset.filter;s==="Gastronomía"?E("/gastronomia"):s==="Hospedaje"?E("/hospedaje"):s==="Experiencias"?E("/experiencias"):s==="Transporte"?E("/transporte"):(i=s,t())}}),document.querySelectorAll("[data-place]").forEach(r=>{r.onclick=()=>{const s=re(r.dataset.place);s&&(s.category==="Gastronomía"?E("/gastronomia-detail?id="+r.dataset.place):s.category==="Hospedaje"?E("/hospedaje-detail?id="+r.dataset.place):s.category==="Experiencias"?E("/experiencias-detail?id="+r.dataset.place):E("/place?id="+r.dataset.place))}}),document.querySelectorAll("[data-event]").forEach(r=>{r.onclick=()=>E("/event?id="+r.dataset.event)}),document.getElementById("btn-filter").onclick=n,document.querySelectorAll("[data-validate]").forEach(r=>{r.onclick=s=>{s.stopPropagation(),f(e("check-circle",16)+" Validación registrada. Gracias por tu aporte!"),r.disabled=!0,r.innerHTML=e("check",16)+" Validado",r.style.opacity="0.6"}})}function t(){const l=["Todos","Gastronomía","Experiencias","Hospedaje","Transporte","Servicios","Vida nocturna","Eventos","Comunidad","Ocultos"],o=i==="Ocultos"?be():qe(i==="Todos"?null:i),b=document.getElementById("explore-filter-chips");b&&(b.innerHTML=l.map(s=>'<span class="chip '+(s===i?"chip-active":"chip-outline")+' chip-selectable" data-filter="'+s+'">'+s+"</span>").join(""),b.querySelectorAll("[data-filter]").forEach(s=>{s.onclick=()=>{const y=s.dataset.filter;y==="Gastronomía"?E("/gastronomia"):y==="Hospedaje"?E("/hospedaje"):y==="Experiencias"?E("/experiencias"):y==="Transporte"?E("/transporte"):(i=y,t())}}));const r=document.getElementById("explore-items-list");r&&(r.innerHTML=i==="Ocultos"?o.map(s=>`
        <div class="card-flat" data-place="${s.id}" style="padding:0;margin-bottom:16px;border-radius:16px;overflow:hidden;cursor:pointer">
          <div style="position:relative">
            <img src="${s.image}" alt="${s.name}" style="width:100%;height:160px;object-fit:cover" />
            <div style="position:absolute;top:10px;left:10px;display:flex;gap:6px">
              <span class="chip chip-purple" style="font-size:10px;padding:3px 10px;backdrop-filter:blur(4px)">${e("eye-off",12)} Oculto</span>
            </div>
            <div style="position:absolute;top:10px;right:10px">
              <span class="chip" style="background:rgba(0,0,0,0.5);color:white;font-size:10px;padding:3px 8px">${e("users",12)} ${s.safetyValidators||0} validaciones</span>
            </div>
          </div>
          <div style="padding:14px 16px">
            <div style="font-weight:700;font-size:16px;margin-bottom:4px">${s.name}</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;display:flex;align-items:center;gap:4px">${e("map-pin",12)} ${s.address}</div>
            <div style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;line-height:1.4">${s.description.substring(0,100)}...</div>
            <div style="margin-bottom:12px">
              <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-secondary);margin-bottom:4px">
                <span>Progreso de validación</span>
                <span style="font-weight:600">${s.validationCount||s.safetyValidators||0}/${s.validationGoal||15}</span>
              </div>
              <div style="height:6px;background:var(--border-light);border-radius:3px;overflow:hidden">
                <div style="height:100%;background:var(--green-primary);border-radius:3px;width:${Math.min(100,(s.validationCount||s.safetyValidators||0)/(s.validationGoal||15)*100)}%;transition:width 0.3s"></div>
              </div>
            </div>
            <div style="display:flex;gap:8px">
              <button class="btn btn-primary btn-sm flex-1 btn-validate" data-validate="${s.id}" style="display:flex;align-items:center;justify-content:center;gap:6px">${e("check-circle",16)} Validar</button>
              <button class="btn btn-outline btn-sm" style="width:auto;padding:0 12px" data-place="${s.id}">${e("info",16)}</button>
            </div>
          </div>
        </div>
      `).join(""):o.map(s=>Ne(s)).join("")+(o.length===0?'<div class="empty-state" id="empty-results">'+e("search",40,"text-secondary")+'<h3 style="margin-top:16px">Sin resultados</h3><p>Intenta con otra categoría</p></div>':"")+'<div class="empty-state" id="empty-search-results" style="display:none;padding:40px 20px">'+e("search",40,"text-secondary")+'<h3 style="margin-top:16px;font-size:18px">Sin coincidencias</h3><p style="color:var(--text-secondary)">No se encontraron lugares con ese término.</p></div>',A(),r.querySelectorAll("[data-place]").forEach(s=>{s.onclick=()=>{const y=re(s.dataset.place);y&&y.category==="Gastronomía"?E("/gastronomia-detail?id="+s.dataset.place):E("/place?id="+s.dataset.place)}}),r.querySelectorAll("[data-event]").forEach(s=>{s.onclick=()=>E("/event?id="+s.dataset.event)}),r.querySelectorAll("[data-validate]").forEach(s=>{s.onclick=y=>{y.stopPropagation(),f(e("check-circle",16)+" Validación registrada. Gracias por tu aporte!"),s.disabled=!0,s.innerHTML=e("check",16)+" Validado",s.style.opacity="0.6"}}))}function n(){H(`
      <div style="padding:24px 20px">
        <h2 style="margin-bottom:24px; font-size: 20px; font-weight: 700;">Filtros avanzados</h2>
        <div class="flex-col gap-24">
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Distancia máxima</label>
            <input type="range" min="1" max="50" value="25" style="width:100%;accent-color:var(--green-primary); margin: 12px 0;" />
            <div class="flex-row" style="justify-content:space-between;color:var(--text-secondary);font-weight:500"><small>1 km</small><small>50 km</small></div>
          </div>
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Calificación mínima</label>
            <div class="flex-row gap-8 mt-8 flex-wrap">
              ${[3,3.5,4,4.5].map(l=>'<span class="chip chip-outline chip-selectable" style="padding:8px 16px;font-size:13px;display:flex;gap:4px;font-weight:600">'+l+"+ "+e("star",14)+"</span>").join("")}
            </div>
          </div>
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Presupuesto</label>
            <div class="flex-row gap-8 mt-8 flex-wrap">
              ${["Gratis","Bajo","Medio","Alto"].map(l=>'<span class="chip chip-outline chip-selectable" style="padding:8px 16px;font-size:13px;font-weight:600">'+l+"</span>").join("")}
            </div>
          </div>
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Nivel de Seguridad</label>
            <div class="flex-row gap-8 mt-8 flex-wrap">
              <span class="chip chip-green chip-selectable chip-active" style="padding:8px 16px;font-size:13px;display:flex;gap:4px;font-weight:600">${e("shield-check",16)} Seguro</span>
              <span class="chip chip-yellow chip-selectable" style="padding:8px 16px;font-size:13px;display:flex;gap:4px;font-weight:600">${e("alert-triangle",16)} Precaución</span>
              <span class="chip chip-red chip-selectable" style="padding:8px 16px;font-size:13px;display:flex;gap:4px;font-weight:600">${e("alert-octagon",16)} Riesgo</span>
            </div>
          </div>
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Inclusividad y Facilidades</label>
            <div class="flex-row gap-8 mt-8 flex-wrap">
              <span class="chip chip-outline chip-selectable" style="padding:8px 16px;font-size:13px;display:flex;gap:6px;font-weight:600">${e("accessibility",16)} Accesible</span>
              <span class="chip chip-outline chip-selectable" style="padding:8px 16px;font-size:13px;display:flex;gap:6px;font-weight:600">${e("leaf",16)} Vegano</span>
              <span class="chip chip-outline chip-selectable" style="padding:8px 16px;font-size:13px;display:flex;gap:6px;font-weight:600">${e("github",16)} Pet Friendly</span>
            </div>
          </div>
          <div class="flex-row gap-12 mt-16 pb-12">
            <button class="btn btn-outline flex-1" style="font-weight:600" id="btn-reset-filters">Restablecer</button>
            <button class="btn btn-primary flex-1" style="font-weight:600;font-size:16px" id="btn-apply-filters">Aplicar filtros</button>
          </div>
        </div>
      </div>
    `),A(),document.getElementById("btn-reset-filters").onclick=()=>{M(),f("Filtros restablecidos")},document.getElementById("btn-apply-filters").onclick=()=>{M(),f("Filtros aplicados correctamente","success")},document.querySelectorAll("#bottom-sheet .chip-selectable").forEach(l=>{l.onclick=()=>{l.classList.contains("chip-active")?(l.classList.remove("chip-active"),l.classList.add("chip-outline")):(l.parentElement.children.length<5&&Array.from(l.parentElement.children).forEach(o=>{o.classList.remove("chip-active"),o.classList.add("chip-outline")}),l.classList.remove("chip-outline"),l.classList.add("chip-active"))}})}a()}function Rt(){const p=new URLSearchParams(window.location.hash.split("?")[1]),i=re(p.get("id")||"1");if(!i){E("/home");return}const a=document.getElementById("app");let t=0;const n=[i.image,...i.images||[]],l=j.favorites.has(i.id);a.innerHTML=`
    <div class="screen" style="padding-bottom:16px">
      <!-- Gallery -->
      <div class="detail-gallery" id="gallery">
        <img src="${n[0]}" alt="${i.name}" id="gallery-img" />
        <button class="float-btn" style="top:16px;left:16px;display:flex;align-items:center;justify-content:center" id="btn-back">${e("arrow-left",24)}</button>
        <button class="float-btn" style="top:16px;right:60px;display:flex;align-items:center;justify-content:center" id="btn-share">${e("share-2",20)}</button>
        <button class="float-btn" style="top:16px;right:16px;display:flex;align-items:center;justify-content:center;${l?"color:var(--red);background:rgba(255,0,0,0.1)":""}" id="btn-fav">${e("heart",20,l?"filled":"")}</button>
        <div class="gallery-dots dots">
          ${n.map((w,k)=>`<div class="dot ${k===0?"active":""}" data-dot="${k}"></div>`).join("")}
        </div>
        <div style="position:absolute;bottom:12px;right:12px;background:rgba(0,0,0,0.5);color:white;padding:2px 8px;border-radius:4px;font-size:11px" id="gallery-counter">1/${n.length}</div>
      </div>

      <!-- Detail Card -->
      <div class="detail-card">
        <div class="detail-chips">
          <span class="chip chip-${i.catColor||"green"}">${i.category}</span>
          ${le(i.safety)}
        </div>
        <h1 class="detail-title">${i.name}</h1>
        <div class="detail-rating-row">
          ${ge(Math.round(i.rating))} <span style="font-size:13px;color:var(--text-secondary)">${i.rating} (${i.reviews} reseñas)</span>
        </div>
        <div style="font-size:13px;color:var(--text-secondary);margin-top:4px;display:flex;align-items:center;gap:6px">${e("map-pin",14)} ${i.address}</div>

        <!-- Description -->
        <div class="detail-section">
          <p style="font-size:14px;line-height:1.6;color:var(--text-primary)">${i.description}</p>
        </div>

        <!-- History (collapsible) -->
        ${i.history?`
        <div class="detail-section">
          <div class="detail-section-header" id="toggle-history">
            <h3 style="display:flex;align-items:center;gap:6px">${e("book-open",16)} Historia</h3>
            <span id="arrow-history">${e("chevron-down",16)}</span>
          </div>
          <div id="content-history" class="hidden" style="padding-top:8px">
            <p style="font-size:13px;line-height:1.6">${i.history}</p>
          </div>
        </div>
        `:""}

        <!-- Practical Info -->
        <div class="detail-section">
          <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("info",16)} Información práctica</h3></div>
          <div class="info-grid mt-8">
            ${i.hours?`<div class="info-cell"><span class="info-icon">${e("clock",16)}</span><div><div class="info-label">Horario</div><div class="info-value">${i.hours}</div></div></div>`:""}
            ${i.price?`<div class="info-cell"><span class="info-icon">${e("dollar-sign",16)}</span><div><div class="info-label">Precio</div><div class="info-value">${i.price}</div></div></div>`:""}
            ${i.bestTime?`<div class="info-cell"><span class="info-icon">${e("star",16)}</span><div><div class="info-label">Mejor momento</div><div class="info-value">${i.bestTime}</div></div></div>`:""}
            ${i.phone?`<div class="info-cell"><span class="info-icon">${e("phone",16)}</span><div><div class="info-label">Teléfono</div><div class="info-value">${i.phone}</div></div></div>`:""}
          </div>
        </div>

        ${i.note?`<div class="info-box info-green mb-16"><span style="display:flex">${e("lightbulb",16)}</span><span style="flex:1">${i.note}</span></div>`:""}

        <!-- Map -->
        <div class="detail-section">
          <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("map-pin",16)} Ubicación</h3></div>
          <p style="font-size:13px;margin-bottom:8px;display:flex;align-items:center;gap:6px">${e("map-pin",14)} ${i.address}</p>
          <div id="place-map" style="height:200px;border-radius:12px;overflow:hidden;position:relative;z-index:1"></div>
          <div class="flex-row gap-8 mt-8">
            <button class="btn btn-outline btn-sm flex-1" id="btn-how-to-get" style="display:flex;align-items:center;justify-content:center;gap:6px">${e("navigation",14)} Cómo llegar</button>
            <button class="btn btn-outline btn-sm flex-1" id="btn-nearby" style="display:flex;align-items:center;justify-content:center;gap:6px">${e("map",14)} Lugares cercanos</button>
          </div>
        </div>

        <!-- Safety -->
        <div class="detail-section">
          <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("shield",16)} Seguridad</h3></div>
          <div class="safety-card mt-8" style="background:${i.safety==="safe"?"var(--green-bg)":i.safety==="caution"?"var(--yellow-light)":"var(--red-light)"};border-color:${i.safety==="safe"?"var(--green-primary)":i.safety==="caution"?"var(--yellow)":"var(--red)"}">
            <span style="display:flex;color:${i.safety==="safe"?"var(--green-primary)":i.safety==="caution"?"var(--yellow)":"var(--red)"}">${i.safety==="safe"?e("shield",28):i.safety==="caution"?e("alert-triangle",28):e("alert-octagon",28)}</span>
            <div>
              <div style="font-weight:600;font-size:15px;margin-bottom:4px">${le(i.safety)}</div>
              <p style="font-size:12px">${i.safetyNote||""}</p>
              ${i.safetyValidators?`<small style="color:var(--green-primary)">✓ ${i.safetyValidators} usuarios han validado esto</small>`:""}
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="detail-section">
          <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("zap",16)} Acciones</h3></div>
          <div class="detail-actions-grid mt-8">
            <button class="detail-action-btn" style="border-color:var(--green-primary);color:var(--green-primary);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-add-route">${e("map",16)} Agregar ruta</button>
            <button class="detail-action-btn" style="border-color:var(--blue);color:var(--blue);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-rate">${e("star",16)} Calificar</button>
            <button class="detail-action-btn" style="border-color:var(--purple);color:var(--purple);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-share-action">${e("share-2",16)} Compartir</button>
            <button class="detail-action-btn" style="border-color:var(--orange);color:var(--orange);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-report">${e("flag",16)} Reportar</button>
            ${i.hidden?`<button class="detail-action-btn" style="border-color:#004D40;color:#004D40;display:flex;align-items:center;justify-content:center;gap:6px;background:rgba(0,77,64,0.05)" id="btn-validate-place">${e("check-circle",16)} Validar</button>`:""}
          </div>
        </div>

        <!-- Reservation -->
        ${i.allowsReservation?`
        <div class="detail-section">
          <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("calendar",16)} Reservar</h3></div>
          <div class="card-flat p-16 mt-8">
            <div class="flex-col gap-12">
              <div class="flex-row gap-12">
                <div class="input-group flex-1"><label class="input-label">Fecha</label><input class="input-field no-icon" type="date" id="res-date" /></div>
                <div class="input-group flex-1"><label class="input-label">Hora</label><input class="input-field no-icon" type="time" value="19:00" id="res-time" /></div>
              </div>
              <div class="flex-row" style="justify-content:space-between">
                <span style="display:flex;align-items:center;gap:6px">${e("users",16)} Personas</span>
                <div class="stepper"><button class="stepper-btn" id="step-minus">−</button><span class="stepper-value" id="step-count">2</span><button class="stepper-btn" id="step-plus">+</button></div>
              </div>
              <button class="btn btn-primary" id="btn-reserve">Confirmar reserva</button>
            </div>
          </div>
        </div>
        `:""}

        <!-- Comments -->
        <div class="detail-section">
          <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("message-circle",16)} Reseñas (${Le.length})</h3></div>
          <div class="flex-col" id="comments-list">
            ${Le.map(w=>{var k,$;return`
              <div class="comment-item">
                ${O(w.initials,w.color,36)}
                <div class="comment-body">
                  <div class="comment-header">
                    <span class="comment-author">${w.author}</span>
                    <span class="comment-date">${w.date}</span>
                  </div>
                  <div class="flex-row gap-2 mb-4">${ge(w.rating,12)}</div>
                  <div class="comment-text">${w.text}</div>
                  ${(k=w.photos)!=null&&k.length?`<div class="flex-row gap-4 mt-4">${w.photos.map(m=>`<img src="${m}" style="width:48px;height:48px;border-radius:6px;object-fit:cover" />`).join("")}</div>`:""}
                  <div class="comment-actions mt-4">
                    <span style="display:flex;align-items:center;gap:4px;cursor:pointer">${e("thumbs-up",12)} ${w.useful} útil</span>
                    <span style="display:flex;align-items:center;gap:4px;cursor:pointer">${e("corner-down-right",12)} Responder</span>
                  </div>
                  ${($=w.replies)!=null&&$.length?w.replies.map(m=>`
                    <div style="margin-top:8px;padding:8px;background:var(--bg);border-radius:8px;font-size:12px">
                      <strong>${m.author}</strong> ${m.isOwner?'<span class="chip chip-blue" style="font-size:9px;padding:1px 6px">Dueño</span>':""}
                      <div style="margin-top:4px">${m.text}</div>
                    </div>
                  `).join(""):""}
                </div>
              </div>
            `}).join("")}
          </div>
          <div class="comment-input-row mt-8">
            ${O("MG","#1A6B3A",32)}
            <input class="input-field" placeholder="Escribe una reseña..." style="flex:1;height:40px;padding:0 12px;font-size:13px" id="comment-input" />
            <button class="btn btn-primary btn-xs" id="btn-send-comment">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  `,G(),A();const o=document.getElementById("gallery");let b=0;o.addEventListener("touchstart",w=>b=w.touches[0].clientX),o.addEventListener("touchend",w=>{const k=b-w.changedTouches[0].clientX;Math.abs(k)>50&&(k>0&&t<n.length-1?t++:k<0&&t>0&&t--,r())}),document.querySelectorAll("[data-dot]").forEach(w=>{w.onclick=()=>{t=parseInt(w.dataset.dot),r()}});function r(){document.getElementById("gallery-img").src=n[t],document.getElementById("gallery-counter").textContent=`${t+1}/${n.length}`,document.querySelectorAll("[data-dot]").forEach((w,k)=>w.classList.toggle("active",k===t))}document.getElementById("btn-back").onclick=()=>history.back(),document.getElementById("btn-share").onclick=()=>f("Enlace copiado"),document.getElementById("btn-fav").onclick=function(){const w=$e(i.id);this.innerHTML=e("heart",20,w?"filled":""),this.style.color=w?"var(--red)":"",this.style.background=w?"rgba(255,0,0,0.1)":"",f(w?"Agregado a favoritos":"Eliminado de favoritos")};const s=document.getElementById("toggle-history");s&&(s.onclick=()=>{const w=document.getElementById("content-history");w.classList.toggle("hidden"),document.getElementById("arrow-history").innerHTML=w.classList.contains("hidden")?e("chevron-down",16):e("chevron-up",16)});const y={1:[-14.0875,-75.7627],2:[-14.0755,-75.7325],3:[-14.065,-75.72],4:[-14.09,-75.765],5:[-14.063,-75.729],6:[-14.95,-75.12],7:[-14.068,-75.7295],8:[-14.078,-75.738]},[c,x]=y[i.id]||[-14.0875,-75.7627];setTimeout(()=>we("place-map",c,x,15,i.name),100),document.getElementById("btn-how-to-get").onclick=()=>f("Abriendo navegación..."),document.getElementById("btn-nearby").onclick=()=>E("/explore"),document.getElementById("btn-add-route").onclick=()=>{ne(i),f(e("check",16)+` ${i.name} agregado al recorrido`)},document.getElementById("btn-rate").onclick=h,document.getElementById("btn-share-action").onclick=()=>f("Enlace copiado"),document.getElementById("btn-report").onclick=S;const C=document.getElementById("btn-validate-place");C&&(C.onclick=()=>{f(e("check-circle",16)+" ¡Validación registrada! Gracias por verificar este lugar."),C.disabled=!0,C.innerHTML=e("check",16)+" Validado",C.style.opacity="0.6",C.style.pointerEvents="none"});const g=document.getElementById("step-minus"),d=document.getElementById("step-plus"),z=document.getElementById("step-count");g&&(g.onclick=()=>{let w=parseInt(z.textContent);w>1&&(z.textContent=w-1)},d.onclick=()=>{let w=parseInt(z.textContent);w<20&&(z.textContent=w+1)});const v=document.getElementById("btn-reserve");v&&(v.onclick=()=>{te("Confirmar reserva",`¿Reservar para ${(z==null?void 0:z.textContent)||2} personas?`,[{label:"Cancelar",class:"btn-outline"},{label:"Confirmar",class:"btn-primary",callback:()=>f(e("check",16)+" ¡Reserva confirmada! Te notificaremos.")}])}),document.getElementById("btn-send-comment").onclick=()=>{const w=document.getElementById("comment-input");w.value.trim()&&(f(e("check",16)+" Reseña publicada"),w.value="")};function h(){H(`
      <div style="padding:20px">
        <h3 style="margin-bottom:16px">Calificar ${i.name}</h3>
        <div class="flex-row gap-4" style="justify-content:center;margin-bottom:16px" id="rate-stars">
          ${[1,2,3,4,5].map(k=>`<span class="star" style="cursor:pointer;display:flex;color:#D0D0D0" data-rate="${k}">${e("star",36)}</span>`).join("")}
        </div>
        <textarea class="input-field no-icon" placeholder="Escribe tu opinión (opcional)..." rows="3" style="margin-bottom:12px"></textarea>
        <button class="btn btn-primary" id="btn-submit-rating">Enviar calificación</button>
      </div>
    `),A();let w=0;document.querySelectorAll("#rate-stars [data-rate]").forEach(k=>{k.onclick=()=>{w=parseInt(k.dataset.rate),document.querySelectorAll("#rate-stars [data-rate]").forEach(($,m)=>{$.classList.toggle("filled",m<w),$.style.color=m<w?"#FFB800":"#D0D0D0"})}}),document.getElementById("btn-submit-rating").onclick=()=>{w>0&&(M(),f(e("star",16)+` Calificaste con ${w} estrella${w>1?"s":""}`))}}function S(){H(`
      <div style="padding:20px">
        <h3 style="margin-bottom:16px;display:flex;align-items:center;gap:8px">${e("flag",20)} Reportar ${i.name}</h3>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">Selecciona el motivo del reporte y describe el problema.</p>
        <div style="font-weight:600;font-size:13px;margin-bottom:8px">Tipo de reporte</div>
        <div class="flex-col gap-8" id="report-types" style="margin-bottom:16px">
          ${[{id:"spam",icon:"alert-circle",label:"Spam o contenido falso"},{id:"safety",icon:"shield",label:"Problema de seguridad"},{id:"closed",icon:"x-circle",label:"Lugar cerrado o no existe"},{id:"offensive",icon:"slash",label:"Contenido ofensivo"},{id:"info",icon:"info",label:"Información incorrecta"},{id:"other",icon:"more-horizontal",label:"Otro"}].map(k=>`
            <div class="chip chip-outline chip-selectable report-type" data-report="${k.id}" style="padding:10px 14px;display:flex;align-items:center;gap:8px;width:100%;justify-content:flex-start;border-radius:10px">
              ${e(k.icon,16)} ${k.label}
            </div>
          `).join("")}
        </div>
        <div style="font-weight:600;font-size:13px;margin-bottom:8px">Descripción del problema</div>
        <textarea class="input-field no-icon" id="report-reason" placeholder="Describe el problema con más detalle..." rows="3" style="margin-bottom:16px"></textarea>
        <button class="btn btn-primary" id="btn-submit-report" disabled style="opacity:0.5">Enviar reporte</button>
      </div>
    `),A();let w=null;document.querySelectorAll(".report-type").forEach(k=>{k.onclick=()=>{document.querySelectorAll(".report-type").forEach(m=>{m.classList.remove("chip-active"),m.classList.add("chip-outline")}),k.classList.add("chip-active"),k.classList.remove("chip-outline"),w=k.dataset.report;const $=document.getElementById("btn-submit-report");$.disabled=!1,$.style.opacity="1"}}),document.getElementById("btn-submit-report").onclick=()=>{w&&(M(),f(e("check",16)+" Reporte enviado correctamente. Gracias por tu ayuda."))}}}function qt(){var x;const p=new URLSearchParams(window.location.hash.split("?")[1]),i=lt(p.get("id")||"1");if(!i){E("/home");return}const a=re(i.placeId),t=j.savedEvents.has(i.id),n=Math.round(i.attendees/i.maxAttendees*100),l=document.getElementById("app");l.innerHTML=`
    <div class="screen" style="padding-bottom:12px">
      <div class="detail-gallery">
        <img src="${i.image}" alt="${i.name}" />
        <button class="float-btn" style="top:16px;left:16px;display:flex;align-items:center;justify-content:center" id="btn-back">${e("arrow-left",24)}</button>
        <button class="float-btn" style="top:16px;right:60px;display:flex;align-items:center;justify-content:center" id="btn-share">${e("share-2",20)}</button>
        <button class="float-btn" style="top:16px;right:16px;display:flex;align-items:center;justify-content:center;${t?"color:var(--red);background:rgba(255,0,0,0.1)":""}" id="btn-save">${e("heart",20,t?"filled":"")}</button>
      </div>

      <div class="detail-card">
        <div class="detail-chips">
          <span class="chip chip-${i.catColor||"green"}">${i.category}</span>
          ${i.free?'<span class="chip chip-green">Gratis</span>':`<span class="chip chip-blue">${i.priceLabel}</span>`}
        </div>
        <h1 class="detail-title">${i.name}</h1>
        <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">${e("calendar",14)} ${i.date} · ${i.time}</div>
        <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">${e("map-pin",14)} ${i.placeName}</div>

        <!-- Occupancy -->
        <div class="detail-section" style="margin-top:16px">
          <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("users",16)} Asistencia</h3></div>
          <div style="margin-top:8px">
            <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px"><span>${i.attendees} asistentes</span><span>${i.maxAttendees} máx.</span></div>
            <div style="height:8px;background:var(--border-light);border-radius:4px;overflow:hidden">
              <div style="height:100%;width:${n}%;background:${n>80?"var(--orange)":"var(--green-primary)"};border-radius:4px;transition:width 0.5s"></div>
            </div>
          </div>
        </div>

        <p style="font-size:14px;line-height:1.6;margin-top:16px">${i.description}</p>

        <!-- Requirements -->
        ${(x=i.requirements)!=null&&x.length?`
        <div class="detail-section">
          <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("clipboard",16)} Requisitos</h3></div>
          <ul style="list-style:none;padding:0;margin-top:8px">
            ${i.requirements.map(C=>`<li style="padding:6px 0;font-size:13px;display:flex;gap:8px"><span style="color:var(--green-primary);display:flex">${e("check",16)}</span><span style="flex:1">${C}</span></li>`).join("")}
          </ul>
        </div>
        `:""}

        <!-- Organizer -->
        <div class="detail-section">
          <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("user",16)} Organizador</h3></div>
          <div class="card-flat p-16 mt-8" style="display:flex;gap:12px;align-items:center">
            ${O(i.organizer.avatar,"#1A6B3A",44)}
            <div class="flex-1">
              <div style="font-weight:600">${i.organizer.name}</div>
              <small>${i.organizer.type}</small>
            </div>
            <div class="flex-col gap-8">
              <button class="btn btn-outline btn-xs" id="btn-contact-org" style="display:flex;gap:6px;align-items:center">${e("message-circle",14)} Contactar</button>
              <button class="btn btn-outline btn-xs" id="btn-share-org" style="border-color:var(--purple);color:var(--purple);display:flex;gap:6px;align-items:center">${e("share-2",14)} Compartir</button>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="detail-section">
          <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("map-pin",16)} Ubicación</h3></div>
          <p style="font-size:13px;margin-bottom:8px;display:flex;align-items:center;gap:6px">${e("map-pin",14)} ${a?a.address:i.placeName}</p>
          <div id="event-map" style="height:180px;border-radius:12px;overflow:hidden;position:relative;z-index:1"></div>
          <button class="btn btn-outline btn-sm mt-8" id="btn-how-to-get" style="display:flex;align-items:center;gap:6px;width:fit-content">${e("navigation",14)} Cómo llegar</button>
        </div>

        <!-- Comments -->
        <div class="detail-section">
          <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("message-circle",16)} Comentarios</h3></div>
          <div class="flex-col">
            ${[{initials:"CT",color:"#2E86AB",name:"Carlos T.",text:"¡No me lo pierdo! Ya tengo mi entrada.",date:"Hace 2h"},{initials:"LF",color:"#F4A261",name:"Lucía F.",text:"El año pasado fue increíble",date:"Hace 5h"}].map(C=>`
              <div class="comment-item">
                ${O(C.initials,C.color,32)}
                <div class="comment-body">
                  <div class="comment-header"><span class="comment-author">${C.name}</span><span class="comment-date">${C.date}</span></div>
                  <div class="comment-text">${C.text}</div>
                </div>
              </div>
            `).join("")}
          </div>
          <div class="comment-input-row mt-8">
            ${O("MG","#1A6B3A",32)}
            <input class="input-field" placeholder="Comentar..." style="flex:1;height:36px;padding:0 12px;font-size:13px" />
            <button class="btn btn-primary btn-xs" id="btn-send-ev-comment">Enviar</button>
          </div>
        </div>

        <!-- CTA -->
        <div class="sticky-bottom mt-16" style="position:relative;border-top:none;padding:0">
          ${i.free?`<button class="btn btn-primary flex-1" id="btn-attend" style="display:flex;align-items:center;justify-content:center;gap:6px">${e("check",16)} Confirmar asistencia (${i.attendees+1}/${i.maxAttendees})</button>`:`<button class="btn btn-primary flex-1" id="btn-buy" style="display:flex;align-items:center;justify-content:center;gap:6px">${e("tag",16)} Comprar entrada — ${i.priceLabel}</button>`}
        </div>
      </div>
    </div>
  `,G(),document.getElementById("btn-back").onclick=()=>history.back(),document.getElementById("btn-share").onclick=()=>f("Enlace copiado"),document.getElementById("btn-save").onclick=function(){const C=gt(i.id);this.innerHTML=e("heart",20,C?"filled":""),this.style.color=C?"var(--red)":"",f(C?"Evento guardado":"Evento eliminado de guardados")},document.getElementById("btn-contact-org").onclick=()=>f("Abriendo chat con organizador");const o=document.getElementById("btn-share-org");o&&(o.onclick=()=>f("Enlace del evento copiado")),document.getElementById("btn-how-to-get").onclick=()=>f("Abriendo navegación..."),document.getElementById("btn-send-ev-comment").onclick=()=>f("Comentario enviado");const b={1:[-14.0875,-75.7627],2:[-14.0755,-75.7325],3:[-14.065,-75.72],4:[-14.09,-75.765],5:[-14.063,-75.729],7:[-14.068,-75.7295]},[r,s]=b[i.placeId]||[-14.0875,-75.7627];setTimeout(()=>we("event-map",r,s,15,i.placeName),100);const y=document.getElementById("btn-attend"),c=document.getElementById("btn-buy");y&&(y.onclick=()=>{te("Confirmar asistencia",`¿Confirmar asistencia a "${i.name}"?`,[{label:"Cancelar",class:"btn-outline"},{label:"Confirmar",class:"btn-primary",callback:()=>{y.innerHTML=e("check",16)+" Asistencia confirmada",y.classList.remove("btn-primary"),y.classList.add("btn-outline"),y.disabled=!0,f("¡Asistencia confirmada!")}}])}),c&&(c.onclick=()=>{H(`
        <div style="padding:20px">
          <h3 style="margin-bottom:16px">Comprar entrada</h3>
          <div class="flex-col gap-12">
            <div class="flex-row" style="justify-content:space-between"><span>Evento</span><strong>${i.name}</strong></div>
            <div class="flex-row" style="justify-content:space-between"><span>Precio</span><strong>${i.priceLabel}</strong></div>
            <div class="flex-row" style="justify-content:space-between"><span>Cantidad</span>
              <div class="stepper"><button class="stepper-btn" onclick="let v=this.nextElementSibling;v.textContent=Math.max(1,parseInt(v.textContent)-1)">−</button><span class="stepper-value">1</span><button class="stepper-btn" onclick="let v=this.previousElementSibling;v.textContent=Math.min(10,parseInt(v.textContent)+1)">+</button></div>
            </div>
            <div class="divider"></div>
            <div class="flex-row" style="justify-content:space-between;font-weight:700"><span>Total</span><span>${i.priceLabel}</span></div>
            <button class="btn btn-primary" id="btn-confirm-buy">Confirmar compra</button>
          </div>
        </div>
      `),document.getElementById("btn-confirm-buy").onclick=()=>{M(),f("¡Compra exitosa! Revisa tu correo.")}})}let me=null;window._toggleRouteStop=p=>{xt(p),Se()};window._dragStart=(p,i)=>{p.dataTransfer.setData("text/plain",i),p.target.classList.add("dragging")};window._dragEnd=p=>{p.target.classList.remove("dragging"),document.querySelectorAll(".stop-item").forEach(i=>i.style.borderTop="")};window._dragOver=p=>{p.preventDefault();const i=p.target.closest(".stop-item");i&&(document.querySelectorAll(".stop-item").forEach(a=>a.style.borderTop=""),i.style.borderTop="2px solid var(--green-primary)")};window._drop=(p,i)=>{p.preventDefault(),document.querySelectorAll(".stop-item").forEach(t=>t.style.borderTop="");const a=parseInt(p.dataTransfer.getData("text/plain"));a!==i&&(bt(a,i),Se())};function Se(){const p=document.getElementById("app"),i=j.routeStops||[];let a=0,t="safe",n=0;const l={Alimentación:{icon:e("coffee",14),amount:0},"Entradas y Actividades":{icon:e("ticket",14),amount:0},Transporte:{icon:e("truck",14),amount:0}},o=h=>{if(!h)return"Entradas y Actividades";const S=h.toLowerCase();return S.includes("gastro")||S.includes("aliment")||S.includes("restaurante")?"Alimentación":S.includes("transport")?"Transporte":"Entradas y Actividades"},b=(h,S,w,k)=>{const $=Math.PI/180,m=.5-Math.cos((w-h)*$)/2+Math.cos(h*$)*Math.cos(w*$)*(1-Math.cos((k-S)*$))/2;return 12742*Math.asin(Math.sqrt(m))},r=[];let s=1;i.forEach((h,S)=>{let w=h.cost||0;if(h.calcMethod==="per_person"&&(w*=j.peopleCount),h.excluded)r.push({...h,finalCost:w,isStop:!0,num:null,originalIndex:S});else{n++,a+=h.duration||60,h.safety==="caution"&&t==="safe"&&(t="caution"),h.safety==="danger"&&(t="danger");const k=o(h.category);l[k].amount+=w,r.push({...h,finalCost:w,isStop:!0,num:s++,originalIndex:S});const $=i.slice(S+1).find(m=>!m.excluded);if($&&h.lat&&h.lng&&$.lat&&$.lng&&h.category!=="Transporte"&&$.category!=="Transporte"){const m=b(h.lat,h.lng,$.lat,$.lng);if(m>.5){const u=Math.max(5,Math.round(m*2));a+=Math.round(m*5),l.Transporte.amount+=u,r.push({id:`trans-${S}`,isStop:!1,dist:m,finalCost:u,name:`Traslado: ${m.toFixed(1)} km`,costType:"estimated"})}}}});const y=Object.values(l).reduce((h,S)=>h+S.amount,0),c=Math.floor(a/60),x=a%60,C=c>0?`${c}h ${x}m`:`${x}m`,g={safe:"var(--green-primary)",caution:"var(--orange)",danger:"var(--red)"},d={safe:"shield",caution:"alert-triangle",danger:"alert-octagon"},z={safe:"Seguro",caution:"Precaución",danger:"Riesgo"};p.innerHTML=`
    <div class="screen route-builder" style="background:var(--bg-body)">
      <div class="appbar" style="background:var(--surface);border-bottom:1px solid var(--border-light)">
        <span class="appbar-title" style="margin-left:8px;display:flex;align-items:center;gap:8px">${e("map",20)} Constructor de Recorrido</span>
        <button class="appbar-btn" id="btn-clear-route" style="color:var(--red)" title="Limpiar todo">${e("trash-2",20)}</button>
      </div>
      
      <div class="screen-content" style="padding-bottom:120px">
        <!-- Contenedor del Mapa -->
        <div style="padding:16px">
          <div style="background:var(--surface);border:1px solid var(--border-light);border-radius:24px;overflow:hidden;box-shadow:var(--shadow-sm)">
            <div id="route-map" style="height:300px;width:100%;z-index:0"></div>
          </div>
        </div>

        <!-- Panel de Presupuesto Estimado -->
        ${i.length>0?`
        <div style="padding:0 16px 16px">
          <div style="background:var(--surface);border:1px solid var(--border-light);border-radius:16px;padding:16px;box-shadow:var(--shadow-sm)">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
              <span style="font-weight:700;font-size:14px;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px">Presupuesto Estimado</span>
              <span style="font-weight:800;font-size:20px;color:var(--text-primary)">S/ ${y}</span>
            </div>
            
            <div style="height:8px;border-radius:4px;background:var(--border-light);display:flex;overflow:hidden;margin-bottom:16px">
              ${y>0?Object.entries(l).map(([h,S])=>{const w=S.amount/y*100;let k="var(--text-secondary)";return h==="Alimentación"&&(k="var(--orange)"),h==="Entradas y Actividades"&&(k="var(--blue)"),h==="Transporte"&&(k="var(--purple)"),`<div style="width:${w}%;background:${k}"></div>`}).join(""):'<div style="width:100%;background:var(--border-light)"></div>'}
            </div>

            <div class="flex-col gap-8">
              ${Object.entries(l).map(([h,S])=>{let w="var(--text-secondary)";return h==="Alimentación"&&(w="var(--orange)"),h==="Entradas y Actividades"&&(w="var(--blue)"),h==="Transporte"&&(w="var(--purple)"),`
                <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px">
                  <div style="display:flex;align-items:center;gap:6px;color:var(--text-secondary)">
                    <span style="color:${w}">${S.icon}</span> ${h}
                  </div>
                  <div style="font-weight:600">S/ ${S.amount}</div>
                </div>
                `}).join("")}
            </div>
          </div>
        </div>
        `:""}

        <!-- Itinerario Drag-and-Drop -->
        <div style="padding:0 16px">
          ${i.length===0?`
            <div class="empty-state" style="padding:40px 20px;display:flex;flex-direction:column;align-items:center;text-align:center;background:white;border-radius:16px;border:2px dashed var(--border-light)">
              <div style="margin-bottom:16px;padding:16px;background:var(--bg-body);border-radius:50%;color:var(--text-secondary)">${e("map-pin",40)}</div>
              <h3 style="font-size:18px;margin-bottom:8px">No hay lugares en tu ruta</h3>
              <p style="color:var(--text-secondary);font-size:14px">Explora y añade destinos para armar tu recorrido ideal.</p>
              <button class="btn btn-primary mt-16" id="btn-go-explore" style="padding:12px 24px;display:flex;align-items:center;gap:8px">${e("search",18)} Buscar destinos</button>
            </div>
          `:`
            <h3 style="font-size:13px;text-transform:uppercase;letter-spacing:1px;color:var(--text-secondary);margin-bottom:12px;font-weight:700">Ajustar Recorrido</h3>
            <div style="display:flex;flex-direction:column;gap:8px">
              ${r.map((h,S)=>{if(!h.isStop)return`
                    <div style="display:flex;align-items:center;gap:16px;padding:4px 16px;opacity:0.6;margin-left:8px">
                      <div style="color:var(--text-secondary)">${e("corner-down-right",16)}</div>
                      <div style="flex:1;font-size:12px;color:var(--text-secondary)">${h.name}</div>
                      <div style="font-size:12px;font-weight:600">S/ ${h.finalCost}</div>
                    </div>
                  `;const w=h.excluded?"0.5":"1",k=h.excluded?"var(--border-light)":"var(--green-primary)",$=h.excluded?"var(--text-secondary)":"white";return`
                  <div class="stop-item" draggable="true" 
                       ondragstart="window._dragStart(event, ${h.originalIndex})" 
                       ondragend="window._dragEnd(event)" 
                       ondragover="window._dragOver(event)" 
                       ondrop="window._drop(event, ${h.originalIndex})"
                       style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:16px;box-shadow:var(--shadow-subtle);cursor:grab;opacity:${w};transition:all 0.2s">
                    <div style="cursor:grab;color:var(--border-light)" title="Arrastrar para reordenar">${e("menu",20)}</div>
                    <div style="background:${k};color:${$};width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0">
                      ${h.num||e("minus",14)}
                    </div>
                    <div class="stop-info" style="flex:1">
                      <div style="font-weight:700;font-size:14px;color:var(--text-primary);margin-bottom:2px">${h.name}</div>
                      <div style="font-size:11px;color:var(--text-secondary)">${h.category} • ${h.duration} min</div>
                    </div>
                    <div style="font-size:13px;font-weight:600;color:var(--text-primary)">S/ ${h.finalCost}</div>
                    <button class="appbar-btn stop-remove" data-stop-id="${h.id}" style="width:32px;height:32px;color:var(--red)" title="Quitar de la lista">${e("x",18)}</button>
                    ${h.excluded?`<div style="position:absolute;inset:0" onclick="window._toggleRouteStop('${h.id}')"></div>`:""}
                  </div>
                `}).join("")}
            </div>
            <p style="font-size:11px;color:var(--text-secondary);text-align:center;margin-top:16px">Toca un número en el mapa para agregarlo o quitarlo temporalmente del recorrido. Arrastra las tarjetas para cambiar el orden de visita.</p>
          `}
        </div>
      </div>
      
      <!-- Contenedor Sumario Inferior Fijo -->
      ${i.length>0?`
      <div style="position:fixed;bottom:56px;left:0;right:0;background:var(--surface);border-top:1px solid var(--border-light);padding:16px;box-shadow:0 -4px 20px rgba(0,0,0,0.08);z-index:100">
        <div style="display:flex;align-items:center;justify-content:space-between;max-width:600px;margin:0 auto;gap:8px">
          <div style="text-align:center;flex:1">
            <div style="color:var(--blue);margin-bottom:2px;display:flex;justify-content:center">${e("map-pin",18)}</div>
            <div style="font-size:11px;color:var(--text-secondary);margin-bottom:2px">Lugares</div>
            <div style="font-size:15px;font-weight:700">${n}</div>
          </div>
          <div style="width:1px;height:30px;background:var(--border-light)"></div>
          <div style="text-align:center;flex:1">
            <div style="color:var(--orange);margin-bottom:2px;display:flex;justify-content:center">${e("clock",18)}</div>
            <div style="font-size:11px;color:var(--text-secondary);margin-bottom:2px">Duración</div>
            <div style="font-size:15px;font-weight:700">${C}</div>
          </div>
          <div style="width:1px;height:30px;background:var(--border-light)"></div>
          <div style="text-align:center;flex:1">
            <div style="color:var(--green-primary);margin-bottom:2px;display:flex;justify-content:center">${e("dollar-sign",18)}</div>
            <div style="font-size:11px;color:var(--text-secondary);margin-bottom:2px">Total Est.</div>
            <div style="font-size:15px;font-weight:700">S/ ${y}</div>
          </div>
          <div style="width:1px;height:30px;background:var(--border-light)"></div>
          <div style="text-align:center;flex:1">
            <div style="color:${g[t]};margin-bottom:2px;display:flex;justify-content:center">${e(d[t],18)}</div>
            <div style="font-size:11px;color:var(--text-secondary);margin-bottom:2px">Seguridad</div>
            <div style="font-size:13px;font-weight:700;color:${g[t]}">${z[t]}</div>
          </div>
        </div>
      </div>
      `:""}
    </div>
    
    <style>
      .stop-item.dragging { opacity: 0.3 !important; transform: scale(0.98); }
    </style>
  `,W("/route-builder","user"),A(),document.getElementById("btn-go-explore")&&(document.getElementById("btn-go-explore").onclick=()=>E("/explore")),document.querySelectorAll(".stop-remove").forEach(h=>{h.onclick=S=>{S.stopPropagation(),vt(h.dataset.stopId),Se()}});const v=document.getElementById("btn-clear-route");v&&(v.onclick=()=>{i.length!==0&&te("Limpiar recorrido","¿Estás seguro de que quieres borrar todos los lugares de tu ruta?",[{label:"Cancelar",class:"btn-outline"},{label:"Borrar todo",class:"btn-danger",callback:()=>{mt(),Se(),f("Recorrido limpiado")}}])}),Ht(i)}function Ht(p){const i=document.getElementById("route-map");if(!i||!window.L)return;me&&(me.remove(),me=null);let a=[-14.06777,-75.72861],t=12;const n=p.filter(b=>b.lat&&b.lng);if(n.length>0&&(a=[n[0].lat,n[0].lng],t=13),me=L.map(i,{zoomControl:!1,attributionControl:!1}).setView(a,t),L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",{maxZoom:19}).addTo(me),p.length===0)return;const l=[];let o=1;if(p.forEach(b=>{if(b.lat&&b.lng){const r=[b.lat,b.lng];let s="";b.excluded?s=`<div onclick="window._toggleRouteStop('${b.id}')" style="background:var(--border-light);color:var(--text-secondary);border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-weight:bold;box-shadow:0 1px 3px rgba(0,0,0,0.2);border:2px solid white;cursor:pointer;font-size:10px;opacity:0.8;transition:transform 0.1s" title="${b.name} (excluido)" onmousedown="this.style.transform='scale(0.9)'" onmouseup="this.style.transform='scale(1)'">✕</div>`:(l.push(r),s=`<div onclick="window._toggleRouteStop('${b.id}')" style="background:var(--green-primary);color:white;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:bold;box-shadow:0 2px 6px rgba(0,0,0,0.3);border:2px solid white;cursor:pointer;font-size:12px;transition:transform 0.1s" onmousedown="this.style.transform='scale(0.9)'" onmouseup="this.style.transform='scale(1)'">${o++}</div>`);const y=L.divIcon({className:"custom-map-icon",html:s,iconSize:[26,26],iconAnchor:[13,13]});L.marker(r,{icon:y}).addTo(me).bindPopup(`<div style="text-align:center"><b>${b.name}</b><br/>${b.category}<br/><small style="color:var(--text-secondary)">${b.excluded?"Excluido (toca el pin para incluir)":"Incluido (toca el pin para excluir)"}</small></div>`)}}),l.length>1){const b=L.polyline(l,{color:"#2196F3",weight:4,opacity:.8,dashArray:"8, 8"}).addTo(me);me.fitBounds(b.getBounds(),{padding:[30,30]})}setTimeout(()=>me.invalidateSize(),300)}function Ft(){const p=document.getElementById("app");let i="reels";window._closeSheets=function(){const r=document.getElementById("place-sheet-com"),s=document.getElementById("options-sheet-com"),y=document.getElementById("sheet-overlay-com");r&&(r.style.transform="translateY(100%)"),s&&(s.style.transform="translateY(100%)"),y&&(y.style.opacity="0",y.style.pointerEvents="none")},window._openChat=function(r,s,y){const c=document.getElementById("options-sheet-com"),x=document.getElementById("sheet-overlay-com");!c||!x||(c.style.maxHeight="100%",c.style.height="100%",c.style.borderRadius="0",c.innerHTML=`
      <div style="display:flex;flex-direction:column;height:100%;box-sizing:border-box">
        <div style="display:flex;align-items:center;gap:10px;padding:16px 12px 12px;flex-shrink:0">
          <button onclick="window._closeSheets()" style="background:none;border:none;cursor:pointer;color:var(--text-primary);padding:0">${e("arrow-left",20)}</button>
          <div style="width:36px;height:36px;border-radius:50%;overflow:hidden;flex-shrink:0">
            ${O(s,y,36)}
          </div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:14px">${r}</div>
            <div style="font-size:11px;color:var(--green-primary)">En linea</div>
          </div>
          <button onclick="app.showToast('Llamar a ${r}')" style="background:none;border:none;cursor:pointer;color:var(--text-primary)">${e("phone",18)}</button>
        </div>
        <div style="height:1px;background:var(--border-light);flex-shrink:0"></div>
        <div style="flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px">
          <div style="align-self:flex-start;max-width:75%;background:#f1f5f9;padding:10px 14px;border-radius:16px 16px 16px 4px;font-size:13px;line-height:1.4">Hola! que tal tu viaje por Ica?</div>
          <div style="align-self:flex-end;max-width:75%;background:var(--green-primary);color:white;padding:10px 14px;border-radius:16px 16px 4px 16px;font-size:13px;line-height:1.4">Increible! Justo estuve en Huacachina</div>
          <div style="align-self:flex-start;max-width:75%;background:#f1f5f9;padding:10px 14px;border-radius:16px 16px 16px 4px;font-size:13px;line-height:1.4">Ese lugar es increible, deberias ir tambien a las bodegas!</div>
          <div style="align-self:flex-end;max-width:75%;background:var(--green-primary);color:white;padding:10px 14px;border-radius:16px 16px 4px 16px;font-size:13px;line-height:1.4">Si! Es mi siguiente parada</div>
          <div style="align-self:flex-start;max-width:75%;background:#f1f5f9;padding:10px 14px;border-radius:16px 16px 16px 4px;font-size:13px;line-height:1.4">Tienes que probar el pisco sour artesanal</div>
          <div style="align-self:flex-end;max-width:75%;background:var(--green-primary);color:white;padding:10px 14px;border-radius:16px 16px 4px 16px;font-size:13px;line-height:1.4">Lo voy a hacer! Alguna bodega favorita?</div>
        </div>
        <div style="display:flex;gap:8px;padding:12px;border-top:1px solid var(--border-light);flex-shrink:0">
          <button onclick="app.showToast('Camara')" style="background:none;border:none;cursor:pointer;color:var(--text-secondary)">${e("camera",20)}</button>
          <input type="text" id="chat-input-field" placeholder="Mensaje..." style="flex:1;border-radius:20px;padding:8px 14px;border:1px solid var(--border-light);font-size:13px;outline:none" />
          <button onclick="var inp=document.getElementById('chat-input-field');if(inp&&inp.value){app.showToast('Mensaje enviado');inp.value=''}" style="background:none;border:none;cursor:pointer;color:var(--green-primary);font-weight:700">${e("send",20)}</button>
        </div>
      </div>
    `,c.style.transform="translateY(0)",x.style.opacity="1",x.style.pointerEvents="auto",A())},window._openStory=function(r,s,y,c){const x=document.getElementById("options-sheet-com"),C=document.getElementById("sheet-overlay-com");!x||!C||(x.style.maxHeight="95vh",c?x.innerHTML=`
        <div style="width:36px;height:4px;background:#e2e8f0;border-radius:2px;margin:0 auto 16px"></div>
        <h3 style="text-align:center;font-weight:800;font-size:16px;margin-bottom:20px">Crear historia</h3>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;padding:0 8px;margin-bottom:24px">
          <div onclick="app.showToast('Abrir camara');window._closeSheets()" style="aspect-ratio:1;border-radius:16px;background:#f1f5f9;border:1px solid var(--border-light);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;cursor:pointer">
            ${e("camera",28)}
            <span style="font-size:12px;font-weight:600">Camara</span>
          </div>
          <div onclick="app.showToast('Abrir galeria');window._closeSheets()" style="aspect-ratio:1;border-radius:16px;background:#f1f5f9;border:1px solid var(--border-light);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;cursor:pointer">
            ${e("image",28)}
            <span style="font-size:12px;font-weight:600">Galeria</span>
          </div>
          <div onclick="app.showToast('Escribir texto');window._closeSheets()" style="aspect-ratio:1;border-radius:16px;background:#f1f5f9;border:1px solid var(--border-light);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;cursor:pointer">
            ${e("type",28)}
            <span style="font-size:12px;font-weight:600">Texto</span>
          </div>
        </div>
      `:x.innerHTML=`
        <div style="position:relative;background:#000;border-radius:0;overflow:hidden;height:calc(100% - 60px)">
          <img src="https://picsum.photos/seed/story-${r}/400/600" style="width:100%;height:100%;object-fit:cover;opacity:.85" />
          <div style="position:absolute;top:12px;left:12px;right:12px;display:flex;align-items:center;gap:8px">
            <div style="flex:1;height:2px;background:rgba(255,255,255,.5);border-radius:1px"><div style="width:60%;height:100%;background:white;border-radius:1px"></div></div>
          </div>
          <div style="position:absolute;top:24px;left:12px;display:flex;align-items:center;gap:8px">
            <div style="width:28px;height:28px;border-radius:50%;overflow:hidden;border:2px solid white">
              ${O(s,y,24)}
            </div>
            <span style="color:white;font-weight:700;font-size:13px">${r}</span>
            <span style="color:rgba(255,255,255,.7);font-size:11px">2h</span>
          </div>
          <button onclick="window._closeSheets()" style="position:absolute;top:24px;right:12px;background:none;border:none;color:white;cursor:pointer">${e("x",20)}</button>
        </div>
        <div style="display:flex;gap:8px;padding:12px 16px;background:white">
          <input type="text" placeholder="Responder a ${r}..." style="flex:1;border-radius:20px;padding:8px 14px;border:1px solid var(--border-light);font-size:13px;outline:none" />
          <button onclick="app.showToast('Respuesta enviada');window._closeSheets()" style="background:none;border:none;color:var(--green-primary);cursor:pointer;font-weight:700">${e("send",20)}</button>
        </div>
      `,x.style.transform="translateY(0)",C.style.opacity="1",C.style.pointerEvents="auto",A())},p.showToast=f;function a(){W("/reels");const r=i==="reels";p.innerHTML=`
      <div class="screen" style="
        background:${r?"#000":"var(--bg-body)"};
        height:100%; display:flex; flex-direction:column;
        position:relative; overflow:hidden;
      ">
        <!-- TAB BAR -->
        <div style="
          ${r?"position:absolute; top:0; left:0; right:0;":"position:relative;"}
          z-index:50; display:flex; justify-content:center; align-items:center;
          height:48px; flex-shrink:0;
          background:${r?"linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)":"white"};
          border-bottom:${r?"none":"1px solid var(--border-light)"};
        ">
          <div style="display:flex; gap:32px">
            ${["Reels","Blogs","Personas"].map(s=>{const y=s==="Blogs"?"guías":s.toLowerCase(),c=i===y;return`<button class="hub-tab" data-tab="${y}" style="
                background:none; border:none; cursor:pointer;
                border-bottom:2px solid ${c?r?"#fff":"var(--green-primary)":"transparent"};
                padding:12px 0 10px; font-size:15px;
                font-weight:${c?"800":"500"};
                color:${r?c?"#fff":"rgba(255,255,255,0.5)":c?"var(--text-primary)":"var(--text-secondary)"}; letter-spacing:0.3px;
              ">${s}</button>`}).join("")}
          </div>

          <!-- Top right: Crear Reel icon (Instagram style) -->
          <button onclick="window.location.hash='#/publish-reel'" style="
            position:absolute;right:16px;top:50%;transform:translateY(-50%);
            background:none;border:none;cursor:pointer;padding:4px;
            color:${r?"#fff":"var(--text-primary)"};
            filter:${r?"drop-shadow(0 1px 3px rgba(0,0,0,.5))":"none"};
          ">${e("clapperboard",22)}</button>
        </div>

        <!-- CONTENT -->
        <div style="flex:1; min-height:0; position:relative; overflow-y:${r?"hidden":"auto"}; overflow-x:hidden;">
          ${t()}
        </div>

        <!-- BOTTOM SHEETS (scoped to phone frame via absolute positioning) -->
        <div id="sheet-overlay-com" onclick="window._closeSheets()" style="position:absolute;inset:0;background:rgba(0,0,0,0.5);z-index:900;opacity:0;pointer-events:none;transition:opacity .3s"></div>
        <div id="place-sheet-com" style="position:absolute;bottom:0;left:0;right:0;max-height:70%;overflow-y:auto;background:#fff;border-radius:20px 20px 0 0;padding:20px 16px;z-index:910;transform:translateY(100%);transition:transform .3s cubic-bezier(.4,0,.2,1);box-shadow:0 -8px 30px rgba(0,0,0,.15)"></div>
        <div id="options-sheet-com" style="position:absolute;bottom:0;left:0;right:0;max-height:70%;overflow-y:auto;background:#fff;border-radius:20px 20px 0 0;padding:20px 16px;z-index:910;transform:translateY(100%);transition:transform .3s cubic-bezier(.4,0,.2,1);box-shadow:0 -8px 30px rgba(0,0,0,.15)"></div>
      </div>
    `,A(),b()}function t(){switch(i){case"reels":return n();case"guías":return l();case"personas":return o();default:return""}}function n(){return`
      <div style="position:absolute;inset:0;background:#000">
        <div id="reels-container" class="hide-scrollbar" style="height:100%;overflow-y:scroll;scroll-snap-type:y mandatory;-webkit-overflow-scrolling:touch">
          ${Ee.map(r=>`
            <div class="reel-item" style="height:100%;width:100%;scroll-snap-align:start;position:relative;overflow:hidden">
              <img src="${r.image}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover" />
              <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.65) 0%,transparent 45%,rgba(0,0,0,.25) 100%)"></div>

              <!-- RIGHT ACTIONS -->
              <div style="position:absolute;right:10px;bottom:24px;display:flex;flex-direction:column;gap:20px;align-items:center;z-index:10">
                <button class="action-btn btn-like" data-liked="0" style="background:none;border:none;color:#fff;display:flex;flex-direction:column;align-items:center;gap:3px;padding:2px;cursor:pointer;transition:transform .15s">
                  ${e("heart",26)}<span style="font-size:11px;font-weight:700">${r.likes}</span>
                </button>
                <button class="action-btn btn-comment" style="background:none;border:none;color:#fff;display:flex;flex-direction:column;align-items:center;gap:3px;padding:2px;cursor:pointer">
                  ${e("message-circle",26)}<span style="font-size:11px;font-weight:700">${r.comments}</span>
                </button>
                <button class="action-btn btn-share" style="background:none;border:none;color:#fff;display:flex;flex-direction:column;align-items:center;gap:3px;padding:2px;cursor:pointer">
                  ${e("send",24)}<span style="font-size:11px;font-weight:700">${r.shares||0}</span>
                </button>
                <button class="action-btn btn-more" style="background:none;border:none;color:#fff;padding:2px;cursor:pointer">
                  ${e("more-horizontal",24)}
                </button>
              </div>

              <!-- BOTTOM INFO -->
              <div style="position:absolute;bottom:24px;left:12px;right:56px;z-index:10;color:#fff">
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;cursor:pointer" onclick="window.location.hash='#/perfil-publico?id=${r.userId}'">
                  <div style="width:32px;height:32px;border-radius:50%;overflow:hidden;border:2px solid #fff;flex-shrink:0">
                    ${O(r.userIcon||r.username.substring(0,2).toUpperCase(),r.userColor||"#666",32)}
                  </div>
                  <span style="font-weight:700;font-size:13px">${r.username}</span>
                  <button class="btn-follow-r" onclick="event.stopPropagation();this.textContent=this.textContent.trim()==='Seguir'?'Siguiendo':'Seguir'" style="background:rgba(255,255,255,.15);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.4);color:#fff;height:24px;padding:0 10px;font-size:11px;border-radius:6px;font-weight:700;cursor:pointer;flex-shrink:0">Seguir</button>
                </div>
                <p style="font-size:13px;margin-bottom:6px;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${r.title}</p>
                <p style="font-size:12px;margin-bottom:10px;font-weight:600;opacity:.8">${r.hashtags}</p>
                ${r.placeId?`
                <div class="place-pin" data-placeid="${r.placeId}" style="display:inline-flex;align-items:center;gap:5px;padding:5px 10px;background:rgba(255,255,255,.2);backdrop-filter:blur(12px);border-radius:14px;cursor:pointer">
                  ${e("map-pin",13)}<span style="font-size:12px;font-weight:700">${r.placeName}</span>
                </div>`:""}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}function l(){return`
      <div style="padding:16px">
        <button onclick="window.location.hash='#/crear-guia'" style="
          width:100%;background:var(--green-primary);color:#fff;border:none;
          font-weight:700;margin-bottom:20px;height:44px;
          display:flex;align-items:center;justify-content:center;gap:8px;
          border-radius:12px;font-size:14px;cursor:pointer;
        ">${e("edit-3",18)} Escribir un blog</button>

        ${Te.map(r=>`
          <div onclick="window.location.hash='#/guia-detail?id=${r.id}'" style="
            background:var(--surface);border-radius:16px;overflow:hidden;
            margin-bottom:16px;cursor:pointer;
            border:1px solid var(--border-light);
            box-shadow:0 1px 4px rgba(0,0,0,.04);
          ">
            <img src="${r.image}" style="width:100%;height:140px;object-fit:cover" />
            <div style="padding:12px 14px 14px">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
                ${O(r.authorAvatar&&r.authorAvatar.length<3?r.authorAvatar:"AU",r.authorColor,28,r.authorAvatar&&r.authorAvatar.length>3?r.authorAvatar:null)}
                <span style="font-size:13px;font-weight:700;flex:1">${r.author}</span>
                <span style="font-size:11px;color:var(--text-secondary)">Hace 2d</span>
              </div>
              <h3 style="font-size:15px;font-weight:800;margin-bottom:8px;line-height:1.3">${r.title}</h3>
              <p style="font-size:13px;color:var(--text-secondary);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:1.5;margin-bottom:12px">${r.intro}</p>
              <div style="display:flex;align-items:center;gap:12px;color:var(--text-secondary);font-size:12px">
                <span style="display:flex;align-items:center;gap:3px">${e("map-pin",14)} ${r.placesCount} lugares</span>
                <span style="display:flex;align-items:center;gap:3px">${e("clock",14)} ${r.days} min</span>
                <span style="margin-left:auto">${e("bookmark",16)}</span>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `}function o(){const r=Ce.slice(0,6).map((c,x)=>({id:c.id,name:c.name.split(" ")[0],initials:c.initials,color:c.color,avatar:c.avatar,seen:x>2})),s=[{id:"1",name:"Maria Viajera",initials:"MV",color:"#1A6B3A",lastMsg:"Ese lugar es increible, deberias ir!",time:"2m",unread:2},{id:"2",name:"Carlos Foodie",initials:"CT",color:"#2E86AB",lastMsg:"Gracias por la recomendacion",time:"15m",unread:0},{id:"3",name:"Lucia Travel",initials:"LF",color:"#F4A261",lastMsg:"Nos vemos en Huacachina?",time:"1h",unread:1},{id:"4",name:"Pedro Explorer",initials:"PQ",color:"#7C4DFF",lastMsg:"Foto enviada",time:"3h",unread:0}],y=Ce.slice(0,5);return`
      <div style="padding:0">

        <!-- ─── STORIES ROW ─── -->
        <div style="padding:12px 0 12px 16px;border-bottom:1px solid var(--border-light)">
          <div style="display:flex;gap:14px;overflow-x:auto;padding-right:16px;-webkit-overflow-scrolling:touch" class="hide-scrollbar">
            <!-- Your Story (Add) -->
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex-shrink:0;cursor:pointer" onclick="window._openStory('', '', '', true)">
              <div style="width:58px;height:58px;border-radius:50%;background:var(--surface);border:2px dashed var(--border-light);display:flex;align-items:center;justify-content:center;color:var(--green-primary)">
                ${e("plus",24)}
              </div>
              <span style="font-size:11px;font-weight:600;color:var(--text-secondary)">Tu historia</span>
            </div>
            ${r.map(c=>`
              <div style="display:flex;flex-direction:column;align-items:center;gap:4px;flex-shrink:0;cursor:pointer" onclick="window._openStory('${c.name}', '${c.initials}', '${c.color}', false)">
                <div style="width:58px;height:58px;border-radius:50%;padding:2px;background:${c.seen?"var(--border-light)":"linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"};display:flex;align-items:center;justify-content:center">
                  <div style="width:52px;height:52px;border-radius:50%;overflow:hidden;border:2px solid white">
                    ${O(c.initials,c.color,48,c.avatar)}
                  </div>
                </div>
                <span style="font-size:11px;font-weight:${c.seen?"500":"700"};color:${c.seen?"var(--text-secondary)":"var(--text-primary)"};max-width:58px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center">${c.name}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- ─── CHATS SECTION ─── -->
        <div style="padding:16px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <h3 style="font-size:15px;font-weight:800">Mensajes</h3>
            <button onclick="app.showToast('Nuevo mensaje')" style="background:none;border:none;color:var(--green-primary);font-weight:700;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:4px">
              ${e("edit",16)} Nuevo
            </button>
          </div>
          ${s.map(c=>`
            <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border-light);cursor:pointer" onclick="window._openChat('${c.name}', '${c.initials}', '${c.color}')">
              <div style="width:48px;height:48px;border-radius:50%;overflow:hidden;flex-shrink:0">
                ${O(c.initials,c.color,48)}
              </div>
              <div style="flex:1;min-width:0">
                <div style="font-weight:700;font-size:14px;margin-bottom:2px">${c.name}</div>
                <div style="font-size:12px;color:${c.unread>0?"var(--text-primary)":"var(--text-secondary)"};font-weight:${c.unread>0?"600":"400"};overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.lastMsg} · ${c.time}</div>
              </div>
              ${c.unread>0?`
                <div style="width:20px;height:20px;border-radius:50%;background:var(--green-primary);color:white;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${c.unread}</div>
              `:`
                <div style="color:var(--text-secondary);flex-shrink:0">${e("camera",18)}</div>
              `}
            </div>
          `).join("")}
        </div>

        <!-- ─── SUGGESTED PEOPLE ─── -->
        <div style="padding:0 16px 24px">
          <h3 style="font-size:15px;font-weight:800;margin-bottom:14px">Personas que tal vez conozcas</h3>
          
          <!-- Horizontal scroll cards (Instagram Discovery style) -->
          <div style="display:flex;gap:12px;overflow-x:auto;padding-bottom:8px;-webkit-overflow-scrolling:touch" class="hide-scrollbar">
            ${y.map(c=>`
              <div style="
                width:150px;flex-shrink:0;background:var(--surface);
                border:1px solid var(--border-light);border-radius:16px;
                padding:16px 12px;text-align:center;
                box-shadow:0 1px 4px rgba(0,0,0,.04);
              ">
                <div style="width:64px;height:64px;border-radius:50%;overflow:hidden;margin:0 auto 10px;border:1px solid var(--border-light)" onclick="window.location.hash='#/perfil-publico?id=${c.id}'">
                  ${O(c.initials,c.color,64,c.avatar)}
                </div>
                <div style="font-weight:700;font-size:13px;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.name}</div>
                <div style="font-size:11px;color:var(--text-secondary);margin-bottom:10px">${c.roleName||"Explorador"}</div>
                <button onclick="event.stopPropagation();this.textContent=this.textContent.trim()==='Seguir'?'Siguiendo':'Seguir';this.style.background=this.textContent.trim()==='Siguiendo'?'var(--green-primary)':'var(--surface)';this.style.color=this.textContent.trim()==='Siguiendo'?'#fff':'var(--green-primary)';this.style.borderColor=this.textContent.trim()==='Siguiendo'?'var(--green-primary)':'var(--green-primary)'" style="
                  width:100%;height:30px;font-size:12px;font-weight:700;
                  border-radius:8px;border:1px solid var(--green-primary);
                  background:var(--surface);color:var(--green-primary);cursor:pointer;
                ">Seguir</button>
              </div>
            `).join("")}
          </div>
        </div>

      </div>
    `}function b(){document.querySelectorAll(".hub-tab").forEach(x=>{x.onclick=()=>{i=x.dataset.tab,a()}});const r=document.getElementById("place-sheet-com"),s=document.getElementById("options-sheet-com"),y=document.getElementById("sheet-overlay-com");function c(x,C){x.innerHTML=C,x.style.transform="translateY(0)",y.style.opacity="1",y.style.pointerEvents="auto",A()}document.querySelectorAll(".place-pin").forEach(x=>{x.onclick=C=>{C.stopPropagation();const g=re(x.dataset.placeid);g&&c(r,`
          <div style="width:36px;height:4px;background:#e2e8f0;border-radius:2px;margin:0 auto 16px"></div>
          <img src="${g.image}" style="width:100%;height:140px;object-fit:cover;border-radius:12px;margin-bottom:14px" />
          <h2 style="font-size:17px;font-weight:800;margin-bottom:4px">${g.name}</h2>
          <div style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;display:flex;align-items:center;gap:6px">
            ${g.category}
            <span style="display:flex;align-items:center;gap:3px;color:${Ge(g.rating)}">${e("star",13)} ${g.rating}</span>
          </div>
          <p style="font-size:13px;color:var(--text-primary);line-height:1.5;margin-bottom:16px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${g.description}</p>
          <div style="display:flex;gap:10px">
            <button onclick="window.location.hash='#/place?id=${g.id}'" style="flex:1;height:40px;background:transparent;border:1px solid var(--border-light);color:var(--text-primary);font-weight:700;font-size:13px;border-radius:10px;cursor:pointer">Ver lugar</button>
            <button onclick="window._closeSheets();app.showToast('Lugar guardado')" style="flex:1;height:40px;background:var(--green-primary);color:#fff;border:none;font-weight:700;font-size:13px;border-radius:10px;cursor:pointer">Guardar</button>
          </div>
        `)}}),document.querySelectorAll(".btn-like").forEach(x=>{x.onclick=C=>{C.stopPropagation();const g=x.querySelector("svg, i"),d=x.querySelector("span");x.dataset.liked==="1"?(x.dataset.liked="0",g&&(g.style.fill="none",g.style.color="#fff"),d.innerText=parseInt(d.innerText)-1):(x.dataset.liked="1",g&&(g.style.fill="#ef4444",g.style.color="#ef4444"),d.innerText=parseInt(d.innerText)+1,x.style.transform="scale(1.3)",setTimeout(()=>{x.style.transform="scale(1)"},200))}}),document.querySelectorAll(".btn-comment").forEach(x=>{x.onclick=C=>{C.stopPropagation(),c(s,`
          <div style="width:36px;height:4px;background:#e2e8f0;border-radius:2px;margin:0 auto 14px"></div>
          <h3 style="text-align:center;font-weight:800;font-size:15px;margin-bottom:16px">Comentarios</h3>
          <div style="height:120px;display:flex;align-items:center;justify-content:center;color:var(--text-secondary);font-size:13px">
            Se el primero en comentar
          </div>
          <div style="display:flex;gap:10px;border-top:1px solid var(--border-light);padding-top:12px">
            <input type="text" placeholder="Escribe un comentario..." style="flex:1;border-radius:20px;padding:8px 14px;border:1px solid var(--border-light);font-size:13px;outline:none" />
            <button onclick="window._closeSheets();app.showToast('Comentario enviado')" style="background:none;border:none;color:var(--green-primary);cursor:pointer;font-weight:700;font-size:13px">Enviar</button>
          </div>
        `)}}),document.querySelectorAll(".btn-share").forEach(x=>{x.onclick=C=>{C.stopPropagation(),c(s,`
          <div style="width:36px;height:4px;background:#e2e8f0;border-radius:2px;margin:0 auto 14px"></div>
          <h3 style="text-align:center;font-weight:800;font-size:15px;margin-bottom:16px">Compartir</h3>
          <div style="display:flex;justify-content:space-around;padding:8px 0 16px">
            ${[{icon:"plus-circle",label:"Tu historia",color:"var(--green-primary)"},{icon:"message-circle",label:"WhatsApp",color:"#25D366"},{icon:"link",label:"Copiar link",color:"var(--text-primary)"},{icon:"download",label:"Descargar",color:"var(--text-primary)"}].map(d=>`
              <div onclick="window._closeSheets();app.showToast('${d.label}')" style="display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer">
                <div style="width:50px;height:50px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;color:${d.color};border:1px solid var(--border-light)">
                  ${e(d.icon,22)}
                </div>
                <span style="font-size:11px;font-weight:600">${d.label}</span>
              </div>
            `).join("")}
          </div>
        `)}}),document.querySelectorAll(".btn-more").forEach(x=>{x.onclick=C=>{C.stopPropagation(),c(s,`
          <div style="width:36px;height:4px;background:#e2e8f0;border-radius:2px;margin:0 auto 14px"></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px">
            <button onclick="window._closeSheets();app.showToast('Reel guardado')" style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px;padding:14px 8px;display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;color:var(--text-primary)">
              ${e("bookmark",22)}
              <span style="font-size:12px;font-weight:700">Guardar</span>
            </button>
            <button onclick="window._closeSheets();app.showToast('Remix creado')" style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px;padding:14px 8px;display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;color:var(--text-primary)">
              ${e("film",22)}
              <span style="font-size:12px;font-weight:700">Remixar</span>
            </button>
            <button onclick="window._closeSheets();app.showToast('Enlace copiado')" style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px;padding:14px 8px;display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;color:var(--text-primary)">
              ${e("link",22)}
              <span style="font-size:12px;font-weight:700">Copiar enlace</span>
            </button>
            <button onclick="window.location.hash='#/publish-reel'" style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px;padding:14px 8px;display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;color:var(--green-primary)">
              ${e("plus-circle",22)}
              <span style="font-size:12px;font-weight:700">Crear reel</span>
            </button>
          </div>
          <div style="border-top:1px solid var(--border-light)">
            <div onclick="window._closeSheets();app.showToast('Oculto del feed')" style="display:flex;align-items:center;gap:12px;padding:14px 4px;cursor:pointer;color:var(--text-primary)">
              ${e("eye-off",18)}<span style="font-size:14px;font-weight:600">No me interesa</span>
            </div>
            <div onclick="window._closeSheets();app.showToast('Reel reportado')" style="display:flex;align-items:center;gap:12px;padding:14px 4px;cursor:pointer;color:#ef4444">
              ${e("flag",18)}<span style="font-size:14px;font-weight:600">Reportar</span>
            </div>
          </div>
        `)}})}a()}function Nt(){const p=document.getElementById("app");let i=!1;p.innerHTML=`
    <div class="screen" style="background:#111">
      <div class="appbar" style="background:#222;color:white">
        <button class="appbar-btn" id="btn-close" style="color:white;display:flex;align-items:center;justify-content:center">${e("x",24)}</button>
        <span class="appbar-title" style="color:white">Nuevo reel</span>
        <button class="btn btn-primary btn-xs disabled" id="btn-publish">Publicar</button>
      </div>
      <div id="media-select" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:300px;gap:20px">
        <div style="display:flex;gap:20px">
          <div class="photo-slot" style="width:120px;height:120px;border-color:rgba(255,255,255,0.3);color:rgba(255,255,255,0.5);display:flex;flex-direction:column;align-items:center;justify-content:center" id="btn-camera">
            ${e("camera",32)}<small style="color:rgba(255,255,255,0.5);margin-top:8px">Tomar foto</small>
          </div>
          <div class="photo-slot" style="width:120px;height:120px;border-color:rgba(255,255,255,0.3);color:rgba(255,255,255,0.5);display:flex;flex-direction:column;align-items:center;justify-content:center" id="btn-gallery">
            ${e("image",32)}<small style="color:rgba(255,255,255,0.5);margin-top:8px">Galería</small>
          </div>
        </div>
      </div>
      <div id="media-preview" class="hidden">
        <div style="height:300px;overflow:hidden;border-radius:12px;margin:0 16px">
          <img src="https://picsum.photos/seed/newreel/400/600" style="width:100%;height:100%;object-fit:cover" />
        </div>
      </div>
      <div style="padding:16px" id="form-fields">
        <div class="input-group mb-12">
          <input class="input-field no-icon" id="reel-title" placeholder="Escribe un título para tu reel..." maxlength="80" style="background:#222;color:white;border-color:#444" />
          <small style="text-align:right;color:#666">0/80</small>
        </div>
        <div class="input-group mb-12">
          <textarea class="input-field no-icon" id="reel-desc" placeholder="Describe tu experiencia..." maxlength="300" rows="2" style="background:#222;color:white;border-color:#444"></textarea>
          <small style="text-align:right;color:#666">0/300</small>
        </div>
        <div class="input-group mb-12">
          <input class="input-field no-icon" placeholder="#aventura #ica #huacachina" style="background:#222;color:white;border-color:#444" />
        </div>
        <div class="flex-row gap-8 cursor-pointer p-16" style="background:#222;border-radius:10px" id="link-place">
          <span style="display:flex;align-items:center">${e("map-pin",16)}</span>
          <span style="color:white;font-size:14px" id="link-text">Vincular un lugar (opcional)</span>
        </div>
      </div>
    </div>
  `,G(),A(),document.getElementById("btn-close").onclick=()=>E("/reels"),["btn-camera","btn-gallery"].forEach(t=>{document.getElementById(t).onclick=()=>{i=!0,document.getElementById("media-select").classList.add("hidden"),document.getElementById("media-preview").classList.remove("hidden"),a()}}),document.getElementById("reel-title").addEventListener("input",a);function a(){const t=document.getElementById("reel-title").value,n=document.getElementById("btn-publish");i&&t.length>0?(n.classList.remove("disabled"),n.onclick=async()=>{n.innerHTML='<div class="spinner" style="width:16px;height:16px;border-width:2px"></div>',await Pe(2e3),E("/reels"),setTimeout(()=>f(e("check",16)+" Tu reel fue publicado exitosamente"),300)}):(n.classList.add("disabled"),n.onclick=null)}document.getElementById("link-place").onclick=()=>{document.getElementById("link-text").innerHTML=`<span style="display:flex;align-items:center;gap:6px">${e("check",14)} Huacachina</span>`,document.getElementById("link-text").style.color="var(--green-light)"}}function Vt(){const p=document.getElementById("app"),i=j.currentUser||{name:"Mariana García",email:"mgarcia@ejemplo.com",username:"@mariana_garcia",initials:"MG",color:"#1A6B3A",points:450,stats:{visited:12,saved:8,routes:3,reels:5,validations:14}};let a="posts";const t=document.body.classList.contains("dark-theme");function n(){var z,v,h,S;J.filter(w=>j.favorites.has(w.id)),p.innerHTML=`
      <div class="screen" style="padding-bottom:12px">
        <!-- Header Background -->
        <div class="profile-header-bg">
          <button class="appbar-btn" id="btn-settings" style="position:absolute;top:16px;right:16px;background:rgba(255,255,255,0.2);color:white;border:none">
            ${e("settings",20)}
          </button>
          <button class="appbar-btn" id="btn-dark-toggle" style="position:absolute;top:16px;right:60px;background:rgba(255,255,255,0.2);color:white;border:none">
            ${e(t?"sun":"moon",20)}
          </button>
        </div>

        <!-- Avatar -->
        <div class="profile-avatar-wrapper">
          <div class="avatar profile-avatar" style="background:${i.color||"var(--green-primary)"}; font-size: 32px; border: 4px solid var(--surface); color: white; display: flex; align-items: center; justify-content: center;">${i.initials}</div>
          <div class="profile-edit-photo">${e("camera",14)}</div>
        </div>

        <!-- User Info -->
        <div class="profile-info">
          <h1 style="font-size:22px; margin-bottom:2px">${i.name}</h1>
          <p style="font-size:12px; color:var(--text-secondary)">${i.username||i.email}</p>
          <div style="margin-top:6px; display:flex; align-items:center; gap:6px; justify-content:center">
            <span class="chip chip-gold" style="font-size:10px; padding:2px 10px">${e("award",12)} ${i.points||450} pts</span>
            <span class="chip chip-green" style="font-size:10px; padding:2px 10px">Nivel Explorador</span>
          </div>
        </div>

        <!-- Stats -->
        <div class="profile-stats">
          <div class="profile-stat">
            <span class="stat-num">${((z=i.stats)==null?void 0:z.visited)||12}</span>
            <span class="label" style="font-size:10px">Visitados</span>
          </div>
          <div class="profile-stat">
            <span class="stat-num">${((v=i.stats)==null?void 0:v.saved)||8}</span>
            <span class="label" style="font-size:10px">Guardados</span>
          </div>
          <div class="profile-stat">
            <span class="stat-num">${((h=i.stats)==null?void 0:h.routes)||3}</span>
            <span class="label" style="font-size:10px">Rutas</span>
          </div>
          <div class="profile-stat">
            <span class="stat-num">${((S=i.stats)==null?void 0:S.reels)||5}</span>
            <span class="label" style="font-size:10px">Reels</span>
          </div>
        </div>

        <!-- Tabs -->
        <div class="profile-tabs" style="overflow-x:auto;flex-wrap:nowrap;gap:0;padding:0 var(--pad-screen);-webkit-overflow-scrolling:touch;scrollbar-width:none;-ms-overflow-style:none">
          <button class="profile-tab ${a==="posts"?"active":""}" data-ptab="posts" style="white-space:nowrap;flex-shrink:0;padding:10px 14px;font-size:12px">
            ${e("grid",14)} Publicaciones
          </button>
          <button class="profile-tab ${a==="favorites"?"active":""}" data-ptab="favorites" style="white-space:nowrap;flex-shrink:0;padding:10px 14px;font-size:12px">
            ${e("heart",14)} Favoritos
          </button>
          <button class="profile-tab ${a==="reservations"?"active":""}" data-ptab="reservations" style="white-space:nowrap;flex-shrink:0;padding:10px 14px;font-size:12px">
            ${e("calendar",14)} Reservados
          </button>
          <button class="profile-tab ${a==="achievements"?"active":""}" data-ptab="achievements" style="white-space:nowrap;flex-shrink:0;padding:10px 14px;font-size:12px">
            ${e("award",14)} Logros
          </button>
          <button class="profile-tab ${a==="history"?"active":""}" data-ptab="history" style="white-space:nowrap;flex-shrink:0;padding:10px 14px;font-size:12px">
            ${e("clock",14)} Historial
          </button>
          <button class="profile-tab ${a==="validations"?"active":""}" data-ptab="validations" style="white-space:nowrap;flex-shrink:0;padding:10px 14px;font-size:12px">
            ${e("shield-check",14)} Validaciones
          </button>
        </div>

        <!-- Tab Content -->
        <div id="profile-tab-content" style="padding: 16px var(--pad-screen)">
          ${l()}
        </div>
      </div>
    `,W("/profile","user"),A(),g()}function l(){return a==="posts"?o():a==="favorites"?b():a==="reservations"?r():a==="achievements"?s():a==="history"?y():a==="validations"?c():""}function o(){const z=Ee?Ee.slice(0,4):[];return`
      <div style="display:flex; gap:8px; margin-bottom:16px">
        <button class="chip chip-active chip-selectable" data-reel-tab="created" style="flex:1; justify-content:center">Mis Reels</button>
        <button class="chip chip-outline chip-selectable" data-reel-tab="saved" style="flex:1; justify-content:center">Guardados</button>
      </div>
      <div id="reels-content">
        ${z.length>0?`
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px">
            ${z.map(v=>`
              <div style="position:relative; border-radius:12px; overflow:hidden; aspect-ratio:9/16; cursor:pointer" data-reel-id="${v.id}">
                <img src="${v.thumbnail||v.image||"https://picsum.photos/seed/reel"+v.id+"/300/500"}" style="width:100%;height:100%;object-fit:cover" />
                <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,0.7));padding:8px;color:white">
                  <div style="font-size:11px;font-weight:600">${v.title||v.place||"Mi reel"}</div>
                  <div style="font-size:10px;opacity:0.8">${e("heart",10)} ${v.likes||0} · ${e("eye",10)} ${v.views||0}</div>
                </div>
              </div>
            `).join("")}
          </div>
        `:`
          <div class="empty-state" style="padding:32px 0">
            ${e("film",40,"text-secondary")}
            <h3>Sin publicaciones aún</h3>
            <p>Comparte tus experiencias de viaje</p>
            <button class="btn btn-primary btn-sm mt-12" id="btn-create-reel">${e("plus",16)} Crear reel</button>
          </div>
        `}
      </div>
    `}function b(){const z=J.filter(v=>j.favorites.has(v.id));return z.length>0?`
      <div class="flex-col gap-12">
        ${z.map(v=>`
          <div class="place-card-h" data-place="${v.id}" style="cursor:pointer">
            <img class="place-img" src="${v.image}" alt="${v.name}" />
            <div class="place-info">
              <span class="place-name">${v.name}</span>
              <div class="flex-row gap-4">${ge(Math.round(v.rating))} <span style="font-size:12px;color:var(--text-secondary)">(${v.reviews})</span></div>
              <div class="place-address">${e("map-pin",12)} ${v.address}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `:`
      <div class="empty-state" style="padding:32px 0">
        ${e("heart",40,"text-secondary")}
        <h3>Sin favoritos</h3>
        <p>Guarda lugares que te interesen</p>
        <button class="btn btn-primary btn-sm mt-12" id="btn-go-explore">${e("search",16)} Explorar</button>
      </div>
    `}function r(){const z=j.reservations||[];return z.length>0?`
      <div class="flex-col gap-12">
        <h3 style="font-size:16px; margin-bottom:8px">Próximas reservas</h3>
        ${z.map(v=>`
          <div style="background:var(--surface); border:1px solid var(--border-light); border-radius:12px; padding:16px; display:flex; gap:12px; box-shadow:var(--shadow-sm)">
            <div style="width:48px; height:48px; border-radius:50%; background:var(--green-light); color:var(--green-primary); display:flex; align-items:center; justify-content:center; flex-shrink:0">
              ${e("calendar",24)}
            </div>
            <div style="flex:1">
              <div style="font-weight:700; font-size:15px; margin-bottom:4px">${v.placeName}</div>
              <div style="font-size:13px; color:var(--text-secondary); display:flex; align-items:center; gap:4px; margin-bottom:2px">
                ${e("clock",12)} ${v.date} a las ${v.time}
              </div>
              <div style="font-size:13px; color:var(--text-secondary); display:flex; align-items:center; gap:4px">
                ${e("users",12)} ${v.people} personas — ${v.table}
              </div>
              <div style="margin-top:10px; display:flex; gap:8px">
                <button class="btn btn-outline btn-sm" style="flex:1; padding:6px 0">Modificar</button>
                <button class="btn btn-outline btn-sm" style="flex:1; padding:6px 0; color:var(--red); border-color:var(--red)">Cancelar</button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `:`
      <div class="empty-state" style="padding:40px 0; text-align:center">
        ${e("calendar",48,"text-secondary")}
        <h3 style="margin-top:16px; font-size:18px">Sin reservas activas</h3>
        <p style="color:var(--text-secondary); margin-top:8px">Tus reservas aparecerán aquí.</p>
        <button class="btn btn-primary btn-sm mt-16" onclick="window.location.hash='/home'">${e("search",16)} Explorar lugares</button>
      </div>
    `}function s(){const z=[{icon:"map-pin",title:"Primer Destino",desc:"Visitaste tu primer lugar",done:!0,color:"#004D40"},{icon:"star",title:"Crítico Exigente",desc:"Dejaste 5 reseñas",done:!0,color:"#F9A825"},{icon:"compass",title:"Explorador Nato",desc:"Visitaste 10 lugares",done:!0,color:"#1565C0"},{icon:"camera",title:"Fotógrafo Viajero",desc:"Publicaste 3 reels",done:!0,color:"#E65100"},{icon:"shield-check",title:"Guardián Local",desc:"Validaste 10 zonas seguras",done:!0,color:"#004D40"},{icon:"award",title:"Ruta Maestra",desc:"Completaste 5 recorridos",done:!1,color:"#BF8F00"},{icon:"heart",title:"Coleccionista",desc:"Guardaste 20 favoritos",done:!1,color:"#C62828"},{icon:"users",title:"Influencer Local",desc:"Conseguiste 100 seguidores",done:!1,color:"#4527A0"}];return`
      <div style="margin-bottom:12px; font-size:13px; color:var(--text-secondary)">
        ${e("award",14)} ${z.filter(v=>v.done).length}/${z.length} logros desbloqueados
      </div>
      <div class="flex-col gap-10">
        ${z.map(v=>`
          <div style="display:flex;gap:12px;align-items:center;padding:12px;background:var(--surface);border-radius:12px;border:1px solid var(--border-light);${v.done?"":"opacity:0.6"}">
            <div style="width:44px;height:44px;border-radius:50%;background:${v.done?v.color:"#E0E0E0"};display:flex;align-items:center;justify-content:center;color:white;flex-shrink:0">
               ${e(v.icon,22)}
            </div>
            <div style="flex:1">
              <div style="font-weight:600;font-size:14px">${v.title}</div>
              <div style="font-size:12px;color:var(--text-secondary)">${v.desc}</div>
            </div>
            ${v.done?'<span class="chip chip-green" style="font-size:10px;padding:2px 8px;display:flex;align-items:center;justify-content:center">'+e("check",12)+"</span>":'<span style="font-size:11px;color:var(--text-secondary);display:flex;align-items:center;justify-content:center">'+e("lock",14)+"</span>"}
          </div>
        `).join("")}
      </div>
    `}function y(){return`
      <div class="flex-col gap-10">
        ${[{place:"Huacachina",date:"Hoy, 3:45 PM",action:"Visitaste",icon:"map-pin",color:"#004D40"},{place:"Restaurante El Catador",date:"Ayer, 1:30 PM",action:"Reseña dejada",icon:"star",color:"#F9A825"},{place:"Las Dunas de Ica",date:"Hace 2 días",action:"Agregado a ruta",icon:"map",color:"#1565C0"},{place:"Bodega Vista Alegre",date:"Hace 3 días",action:"Favorito guardado",icon:"heart",color:"#C62828"},{place:"Museo Regional de Ica",date:"Hace 5 días",action:"Visitaste",icon:"map-pin",color:"#004D40"},{place:"Festival del Pisco",date:"Hace 1 semana",action:"Entrada comprada",icon:"ticket",color:"#4527A0"}].map(v=>`
          <div style="display:flex;gap:12px;align-items:center;padding:12px;background:var(--surface);border-radius:12px;border:1px solid var(--border-light)">
            <div style="width:40px;height:40px;border-radius:50%;background:${v.color}15;display:flex;align-items:center;justify-content:center;color:${v.color};flex-shrink:0">
              ${e(v.icon,18)}
            </div>
            <div style="flex:1">
              <div style="font-weight:600;font-size:13px">${v.place}</div>
              <div style="font-size:11px;color:var(--text-secondary)">${v.action}</div>
            </div>
            <div style="font-size:10px;color:var(--text-secondary);text-align:right">${v.date}</div>
          </div>
        `).join("")}
      </div>
    `}function c(){var h;const z=[{name:"Cascada Escondida de Tingue",date:"Hace 2 días",status:"valid",icon:"check-circle",color:"#004D40"},{name:"Mirador Secreto del Valle",date:"Hace 1 semana",status:"valid",icon:"check-circle",color:"#004D40"},{name:"Cueva de los Cristales",date:"Hace 2 semanas",status:"valid",icon:"check-circle",color:"#004D40"},{name:"Pozo Encantado de Santiago",date:"Hace 3 semanas",status:"pending",icon:"clock",color:"#F9A825"},{name:"Laguna Morón",date:"Hace 1 mes",status:"valid",icon:"check-circle",color:"#004D40"}],v=be().filter(S=>S.sharedBy==="María García");return`
      <div style="display:flex;gap:8px;margin-bottom:16px">
        <button class="chip chip-active chip-selectable" data-val-tab="validated" style="flex:1;justify-content:center">${e("check-circle",14)} Mis validaciones</button>
        <button class="chip chip-outline chip-selectable" data-val-tab="published" style="flex:1;justify-content:center">${e("eye-off",14)} Mis ocultos</button>
      </div>

      <!-- Stats Row -->
      <div style="display:flex;gap:8px;margin-bottom:16px">
        <div style="flex:1;padding:10px;background:var(--surface);border:1px solid var(--border-light);border-radius:10px;text-align:center">
          <div style="font-size:18px;font-weight:700;color:var(--green-primary)">${z.length}</div>
          <div style="font-size:10px;color:var(--text-secondary)">Validados</div>
        </div>
        <div style="flex:1;padding:10px;background:var(--surface);border:1px solid var(--border-light);border-radius:10px;text-align:center">
          <div style="font-size:18px;font-weight:700;color:var(--text-primary)">${v.length}</div>
          <div style="font-size:10px;color:var(--text-secondary)">Publicados</div>
        </div>
        <div style="flex:1;padding:10px;background:var(--surface);border:1px solid var(--border-light);border-radius:10px;text-align:center">
          <div style="font-size:18px;font-weight:700;color:#F9A825">${((h=i.stats)==null?void 0:h.validations)||14}</div>
          <div style="font-size:10px;color:var(--text-secondary)">Puntos ganados</div>
        </div>
      </div>

      <div id="validations-content">
        <!-- Mis validaciones list -->
        <div class="flex-col gap-10">
          ${z.map(S=>`
            <div style="display:flex;gap:12px;align-items:center;padding:12px;background:var(--surface);border-radius:12px;border:1px solid var(--border-light)">
              <div style="width:40px;height:40px;border-radius:50%;background:${S.color}15;display:flex;align-items:center;justify-content:center;color:${S.color};flex-shrink:0">
                ${e(S.icon,18)}
              </div>
              <div style="flex:1">
                <div style="font-weight:600;font-size:13px">${S.name}</div>
                <div style="font-size:11px;color:var(--text-secondary)">Validación ${S.status==="valid"?"aceptada":"pendiente"}</div>
              </div>
              <div style="text-align:right">
                <div style="font-size:10px;color:var(--text-secondary)">${S.date}</div>
                <span class="chip ${S.status==="valid"?"chip-green":"chip-yellow"}" style="font-size:9px;padding:1px 6px;margin-top:2px">${S.status==="valid"?"Válido":"Pendiente"}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}function x(){const z=be().filter(v=>v.sharedBy==="María García");return z.length>0?`
      <div class="flex-col gap-12">
        ${z.map(v=>{const h=Math.min(100,(v.validationCount||0)/(v.validationGoal||15)*100);return`
            <div style="background:var(--surface);border:1px solid var(--border-light);border-radius:14px;overflow:hidden">
              <div style="display:flex;gap:12px;padding:12px">
                <img src="${v.image}" alt="${v.name}" style="width:70px;height:70px;border-radius:10px;object-fit:cover" />
                <div style="flex:1;min-width:0">
                  <div style="font-weight:700;font-size:14px;margin-bottom:3px">${v.name}</div>
                  <div style="font-size:11px;color:var(--text-secondary);margin-bottom:6px;display:flex;align-items:center;gap:3px">${e("map-pin",10)} ${v.address}</div>
                  <div style="display:flex;gap:4px">
                    <span class="chip chip-purple" style="font-size:9px;padding:1px 6px">${e("eye-off",8)} Oculto</span>
                    <span class="chip chip-outline" style="font-size:9px;padding:1px 6px">${v.category}</span>
                  </div>
                </div>
              </div>
              <div style="padding:0 12px 12px">
                <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-secondary);margin-bottom:3px">
                  <span>${e("users",10)} ${v.validationCount||0} validadores</span>
                  <span style="font-weight:600">${v.validationCount||0}/${v.validationGoal||15} para publicar</span>
                </div>
                <div style="height:6px;background:var(--border-light);border-radius:3px;overflow:hidden">
                  <div style="height:100%;background:${h>=70?"#F9A825":"var(--green-primary)"};border-radius:3px;width:${h}%;transition:width 0.3s"></div>
                </div>
                ${h>=70?'<div style="font-size:10px;color:#F9A825;margin-top:4px">'+e("alert-circle",10)+" ¡Casi listo para publicarse!</div>":""}
              </div>
            </div>
          `}).join("")}
      </div>
    `:`
      <div class="empty-state" style="padding:32px 0">
        ${e("eye-off",40,"text-secondary")}
        <h3>Sin lugares ocultos publicados</h3>
        <p>Comparte un lugar secreto con la comunidad</p>
        <button class="btn btn-primary btn-sm mt-12" id="btn-publish-hidden-profile">${e("plus",16)} Publicar lugar</button>
      </div>
    `}function C(){document.querySelectorAll("[data-ptab]").forEach(v=>{v.classList.toggle("active",v.dataset.ptab===a)});const z=document.getElementById("profile-tab-content");if(z){z.innerHTML=l(),A(),document.querySelectorAll("[data-place]").forEach(w=>{w.onclick=()=>E("/place?id="+w.dataset.place)}),document.querySelectorAll("[data-reel-id]").forEach(w=>{w.onclick=()=>E("/reels")});const v=document.getElementById("btn-create-reel");v&&(v.onclick=()=>E("/publish-reel"));const h=document.getElementById("btn-go-explore");h&&(h.onclick=()=>E("/explore")),document.querySelectorAll("[data-reel-tab]").forEach(w=>{w.onclick=()=>{document.querySelectorAll("[data-reel-tab]").forEach($=>{$.classList.remove("chip-active"),$.classList.add("chip-outline")}),w.classList.add("chip-active"),w.classList.remove("chip-outline");const k=document.getElementById("reels-content");w.dataset.reelTab==="saved"?(k.innerHTML=`
              <div class="empty-state" style="padding:32px 0">
                ${e("bookmark",40,"text-secondary")}
                <h3>Sin reels guardados</h3>
                <p>Guarda reels que te gusten</p>
              </div>
            `,A()):C()}}),document.querySelectorAll("[data-val-tab]").forEach(w=>{w.onclick=()=>{document.querySelectorAll("[data-val-tab]").forEach($=>{$.classList.remove("chip-active"),$.classList.add("chip-outline")}),w.classList.add("chip-active"),w.classList.remove("chip-outline");const k=document.getElementById("validations-content");if(k)if(w.dataset.valTab==="published"){k.innerHTML=x(),A();const $=document.getElementById("btn-publish-hidden-profile");$&&($.onclick=()=>E("/publish-place"))}else C()}});const S=document.getElementById("btn-publish-hidden-profile");S&&(S.onclick=()=>E("/publish-place"))}}function g(){document.querySelectorAll("[data-ptab]").forEach(S=>{S.onclick=()=>{a=S.dataset.ptab,C()}}),document.querySelectorAll("[data-reel-tab]").forEach(S=>{S.onclick=()=>{document.querySelectorAll("[data-reel-tab]").forEach(k=>{k.classList.remove("chip-active"),k.classList.add("chip-outline")}),S.classList.add("chip-active"),S.classList.remove("chip-outline");const w=document.getElementById("reels-content");S.dataset.reelTab==="saved"?(w.innerHTML=`
            <div class="empty-state" style="padding:32px 0">
              ${e("bookmark",40,"text-secondary")}
              <h3>Sin reels guardados</h3>
              <p>Guarda reels que te gusten</p>
            </div>
          `,A()):n()}}),document.querySelectorAll("[data-place]").forEach(S=>{S.onclick=()=>E("/place?id="+S.dataset.place)}),document.querySelectorAll("[data-reel-id]").forEach(S=>{S.onclick=()=>E("/reels")});const z=document.getElementById("btn-create-reel");z&&(z.onclick=()=>E("/publish-reel"));const v=document.getElementById("btn-go-explore");v&&(v.onclick=()=>E("/explore"));const h=document.querySelector(".profile-edit-photo");h&&(h.onclick=()=>f("Abriendo galería para foto de perfil...")),document.getElementById("btn-settings").onclick=d,document.getElementById("btn-dark-toggle").onclick=()=>{document.body.classList.toggle("dark-theme"),f(document.body.classList.contains("dark-theme")?"Modo oscuro activado":"Modo claro activado"),n()}}function d(){const z=document.body.classList.contains("dark-theme"),v=(S,w,k,$="var(--text-primary)")=>`<button class="btn btn-outline" id="${k}" style="justify-content:flex-start;gap:12px;font-weight:600;border-radius:12px;color:${$}">${e(S,18)} ${w}</button>`;H(`
      <div style="padding:24px;max-height:80vh;overflow-y:auto">
        <h2 style="font-size:20px;margin-bottom:20px">${e("settings",22)} Configuración</h2>
        <div class="flex-col gap-12">

          <h3 style="font-size:13px;color:var(--text-secondary);margin-bottom:4px">Identidad y Seguridad</h3>
          ${v("user","Editar perfil","set-edit-profile")}
          ${v("shield-check","Verificación de identidad","set-identity")}
          ${v("lock","Seguridad y contraseña","set-security")}

          <h3 style="font-size:13px;color:var(--text-secondary);margin:8px 0 4px">Preferencias del Viajero</h3>
          ${v("sliders","Preferencias de contenido","set-preferences")}

          <div class="btn btn-outline" style="justify-content:space-between;gap:12px;font-weight:600;border-radius:12px;cursor:pointer" id="set-dark-mode">
            <span style="display:flex;align-items:center;gap:12px">${e("moon",18)} Modo oscuro</span>
            <div style="width:44px;height:24px;border-radius:12px;background:${z?"#004D40":"#DADCE0"};position:relative;transition:0.3s">
              <div style="width:20px;height:20px;border-radius:50%;background:white;position:absolute;top:2px;${z?"right:2px":"left:2px"};transition:0.3s;box-shadow:0 1px 3px rgba(0,0,0,0.2)"></div>
            </div>
          </div>

          <h3 style="font-size:13px;color:var(--text-secondary);margin:8px 0 4px">Pagos y Documentación</h3>
          ${v("wallet","Billetera / Wallet","set-wallet")}
          ${v("file-text","Documentos de viaje","set-documents")}
          ${v("building","Datos de facturación","set-billing")}

          <h3 style="font-size:13px;color:var(--text-secondary);margin:8px 0 4px">Notificaciones y Privacidad</h3>
          ${v("bell","Centro de notificaciones","set-notif")}
          ${v("eye-off","Privacidad y datos","set-privacy")}

          <h3 style="font-size:13px;color:var(--text-secondary);margin:8px 0 4px">Acciones Rápidas</h3>
          ${v("wifi-off","Modo Offline","set-offline")}
          ${v("phone-call","Contacto de emergencia","set-emergency")}
          ${v("help-circle","Centro de ayuda","set-help")}

          <h3 style="font-size:13px;color:var(--text-secondary);margin:8px 0 4px">Información</h3>
          ${v("info","Acerca de","set-about")}
          ${v("message-square","Enviar comentarios","set-feedback")}

          <button class="btn btn-outline" id="set-logout" style="justify-content:flex-start;gap:12px;color:#C62828;border-color:#C62828;font-weight:600;border-radius:12px;margin-top:8px">
            ${e("log-out",18)} Cerrar sesión
          </button>

          <div style="text-align:center;margin-top:8px">
            <small style="color:var(--text-secondary)">Descubre Ica v1.0.0</small>
          </div>
        </div>
      </div>
    `),A(),Object.entries({"set-edit-profile":"edit-profile","set-identity":"identity","set-security":"security","set-preferences":"preferences","set-wallet":"wallet","set-documents":"documents","set-billing":"billing","set-notif":"notifications","set-privacy":"privacy","set-offline":"offline","set-emergency":"emergency","set-help":"help"}).forEach(([S,w])=>{const k=document.getElementById(S);k&&(k.onclick=()=>{M(),E("/settings?type="+w)})}),document.getElementById("set-dark-mode").onclick=()=>{document.body.classList.toggle("dark-theme"),M(),f(document.body.classList.contains("dark-theme")?"Modo oscuro activado":"Modo claro activado"),n()},document.getElementById("set-about").onclick=()=>{M(),f("Descubre Ica v1.0.0 — Hecho con "+e("heart",14)+" en Ica")},document.getElementById("set-feedback").onclick=()=>{M(),f("Gracias por tus sugerencias")},document.getElementById("set-logout").onclick=()=>{M(),te("Cerrar sesión","¿Estás seguro de que quieres cerrar sesión?",[{label:"Cancelar",class:"btn-outline"},{label:"Cerrar sesión",class:"btn-primary",callback:()=>{Me(),E("/welcome")}}])}}n()}function Gt(){const p=document.getElementById("app");let i=!1;p.innerHTML=`
    <div class="screen" id="publish-main-screen">
      <div class="appbar">
        <button class="appbar-btn" id="btn-close" style="display:flex;align-items:center;justify-content:center">${e("x",24)}</button>
        <span class="appbar-title">Publicar lugar</span>
        <button class="btn btn-primary btn-xs disabled" id="btn-submit">Enviar</button>
      </div>
      <div class="screen-content" style="padding-bottom:100px">
        <div class="form-section">
          <div class="info-box info-green mb-12"><span style="display:flex">${e("camera",16)}</span><span style="flex:1">Agrega al menos 1 foto del lugar</span></div>
          <div class="photo-grid" id="place-photos">
            <div class="photo-slot" id="main-photo" style="display:flex;flex-direction:column;align-items:center;justify-content:center">${e("camera",24)}<small>Principal</small></div>
            <div class="photo-slot" style="display:flex;align-items:center;justify-content:center">${e("plus",24)}</div>
            <div class="photo-slot" style="display:flex;align-items:center;justify-content:center">${e("plus",24)}</div>
          </div>
        </div>
        
        <div class="form-divider"><span>Información básica</span></div>
        <div class="flex-col gap-12">
          <div class="input-group">
            <label class="input-label">Nombre del lugar *</label>
            <input class="input-field no-icon" id="place-name" placeholder="Ej: Mirador de las estrellas" />
          </div>
          <div class="input-group">
            <label class="input-label">Categoría</label>
            <select class="input-field no-icon" style="padding-left:12px">
              <option>Naturaleza</option><option>Gastronomía</option><option>Aventura</option>
              <option>Cultura</option><option>Historia</option><option>Hospedaje</option><option>Vida nocturna</option>
            </select>
          </div>
          <div class="input-group">
            <label class="input-label">Descripción *</label>
            <textarea class="input-field no-icon" placeholder="Describe el lugar (mínimo 50 caracteres)..." rows="3"></textarea>
            <small style="text-align:right">0/500</small>
          </div>
        </div>

        <div class="form-divider"><span>Ubicación</span></div>
        <div class="flex-col gap-12">
          <div class="input-group">
            <label class="input-label">Dirección</label>
            <input class="input-field no-icon" placeholder="Ej: Km 14, Carretera a Nazca" />
          </div>
          <div class="map-container">
            <img src="https://picsum.photos/seed/map-pub/400/200" alt="Mapa" />
            <div class="map-pin" style="display:flex;align-items:center;justify-content:center">${e("map-pin",32)}</div>
            <div style="position:absolute;top:8px;left:8px;font-size:11px;background:rgba(255,255,255,0.9);padding:2px 8px;border-radius:4px">Arrastra para posicionar</div>
          </div>
        </div>

        <div class="form-divider"><span>Info adicional</span></div>
        <div class="flex-col gap-12">
          <div class="input-group" id="regular-hours">
            <label class="input-label">Horario</label>
            <input class="input-field no-icon" placeholder="Ej: Lun–Dom 8am–6pm" />
          </div>
          <div class="toggle-wrapper" style="background:var(--cream);border:1px solid var(--gold);padding:12px;border-radius:12px">
            <div style="display:flex;align-items:center;gap:8px">
              ${e("eye-off",20,"color:var(--gold)")}
              <div style="flex:1">
                <div style="font-size:14px;font-weight:600;color:var(--gold-dark)">¿Es un Lugar Oculto?</div>
                <div style="font-size:11px;color:var(--text-secondary)">Marcálo si es un secreto poco conocido de Ica</div>
              </div>
              <div class="switch" id="toggle-hidden" style="border-color:var(--gold)"></div>
            </div>
          </div>
        </div>

        <!-- ═══ CAMPOS EXTENDIDOS LUGARES OCULTOS ═══ -->
        <div id="hidden-fields-container" style="display:none;margin-top:16px;animation:fadeIn 0.3s ease">
          <div class="form-divider"><span style="color:var(--gold-dark)"><span style="color:var(--gold)">✦</span> Detalles del Secreto</span></div>
          <div class="flex-col gap-16">
            <div class="input-group">
              <label class="input-label" style="color:var(--text-primary)">Por qué es especial este lugar *</label>
              <textarea class="input-field no-icon" placeholder="Cuenta qué hace que este lugar valga la pena descubrir. ¿Qué verás allí? ¿Qué sensación produce? ¿Qué historia tiene?" rows="4" style="border-color:rgba(201,168,76,0.5);background:var(--cream)"></textarea>
              <small style="text-align:right">0/600</small>
            </div>
            
            <div class="input-group">
              <label class="input-label" style="color:var(--text-primary)">Instrucciones de acceso *</label>
              <textarea class="input-field no-icon" placeholder="Explica cómo llegar sin mapas. ¿Hay referencias visuales? ¿Se necesita pedir permiso? ¿Hay algún horario recomendado?" rows="3" style="border-color:rgba(201,168,76,0.5);background:var(--cream)"></textarea>
              <small style="text-align:right">0/400</small>
            </div>

            <div>
              <label class="input-label">Nivel de secretismo estimado *</label>
              <div class="flex-col gap-8">
                <div class="secrecy-card active" data-slvl="poco">
                  <div style="font-weight:600;font-size:13px;margin-bottom:2px">Poco conocido</div>
                  <div style="font-size:11px;color:var(--text-secondary)">Algunos locales lo conocen pero rara vez se visita</div>
                </div>
                <div class="secrecy-card" data-slvl="muy">
                  <div style="font-weight:600;font-size:13px;margin-bottom:2px">Muy escondido</div>
                  <div style="font-size:11px;color:var(--text-secondary)">Casi nadie lo conoce, se necesita buscarlo activamente</div>
                </div>
                <div class="secrecy-card" data-slvl="solo">
                  <div style="font-weight:600;font-size:13px;margin-bottom:2px">Solo yo lo sé</div>
                  <div style="font-size:11px;color:var(--text-secondary)">Solo lo descubrí yo y nunca lo he visto en ninguna parte</div>
                </div>
              </div>
            </div>

            <div class="toggle-wrapper" style="padding:0">
              <span style="font-size:13px">Requiere permiso de acceso</span>
              <div class="switch" id="toggle-permiso"></div>
            </div>
            <div class="input-group" id="permiso-field" style="display:none">
              <input class="input-field no-icon" placeholder="A quién contactar para pedir permiso (ej: Sr. Juan Carlos)" />
              <small style="text-align:right">0/200</small>
            </div>

            <div class="toggle-wrapper" style="padding:0">
              <span style="font-size:13px">Acceso estacional (solo algunos meses)</span>
              <div class="switch" id="toggle-season"></div>
            </div>
            <div id="season-field" style="display:none">
              <div class="scroll-x" style="margin:0 -16px;padding:4px 16px;gap:6px">
                ${["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"].map(a=>`<span class="chip chip-outline chip-selectable chip-season" style="font-size:11px">${a}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>

        <div class="form-divider"><span>Seguridad</span></div>
        <div class="flex-row gap-8 mb-12">
          <span class="chip chip-green chip-selectable chip-active" data-safety="safe" style="display:flex;align-items:center;gap:6px">${e("shield",14)} Seguro</span>
          <span class="chip chip-yellow chip-selectable" data-safety="caution" style="display:flex;align-items:center;gap:6px">${e("alert-triangle",14)} Precaución</span>
          <span class="chip chip-red chip-selectable" data-safety="danger" style="display:flex;align-items:center;gap:6px">${e("alert-octagon",14)} Riesgo</span>
        </div>
        <div class="input-group">
          <textarea class="input-field no-icon" placeholder="Nota de seguridad..." rows="2"></textarea>
        </div>
        
        <div style="height:20px"></div>
        <button class="btn btn-primary" id="btn-submit-bottom">Enviar lugar</button>
      </div>
    </div>

    <!-- ═══ PANTALLA CONFIRMACIÓN DORADA ═══ -->
    <div class="screen" id="hidden-success-screen" style="display:none;background:var(--cream);align-items:center;justify-content:center;text-align:center;padding:32px">
      <div class="gold-pulse" style="width:80px;height:80px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;margin:0 auto 24px">
        ${e("eye",40,"color:white")}
      </div>
      <h2 style="font-size:22px;font-weight:700;color:var(--text-primary);margin-bottom:12px">¡Gracias por compartir tu secreto!</h2>
      <p style="font-size:14px;color:var(--text-secondary);line-height:1.5;margin-bottom:32px">Nuestro equipo revisará el lugar. Si es aprobado, serás el descubridor oficial y aparecerás en el detalle del lugar para siempre.</p>
      <button class="btn" id="btn-success-back" style="background:var(--gold);color:#1A1A1A;font-weight:600;width:100%">Volver al inicio</button>
    </div>

    <style>
      .secrecy-card {
        border: 1px solid var(--border-light);
        border-radius: 10px;
        padding: 12px;
        background: var(--surface);
        cursor: pointer;
        transition: all 0.2s;
      }
      .secrecy-card.active {
        border: 2px solid var(--gold);
        background: var(--gold-light);
      }
    </style>
  `,G(),A(),document.getElementById("btn-close").onclick=()=>E("/home"),document.getElementById("toggle-hidden").onclick=function(){this.classList.toggle("active"),i=this.classList.contains("active"),document.getElementById("hidden-fields-container").style.display=i?"block":"none";const a=document.getElementById("btn-submit-bottom");i?(a.innerHTML="Enviar para revisión",a.style.background="var(--gold)",a.style.color="#1A1A1A"):(a.innerHTML="Enviar lugar",a.style.background="var(--green-primary)",a.style.color="white")},document.querySelectorAll(".secrecy-card").forEach(a=>{a.onclick=()=>{document.querySelectorAll(".secrecy-card").forEach(t=>t.classList.remove("active")),a.classList.add("active")}}),document.getElementById("toggle-permiso").onclick=function(){this.classList.toggle("active"),document.getElementById("permiso-field").style.display=this.classList.contains("active")?"block":"none"},document.getElementById("toggle-season").onclick=function(){this.classList.toggle("active"),document.getElementById("season-field").style.display=this.classList.contains("active")?"block":"none"},document.querySelectorAll(".chip-season").forEach(a=>a.onclick=()=>a.classList.toggle("chip-active")),document.querySelectorAll("#place-photos .photo-slot").forEach((a,t)=>{a.onclick=function(){this.classList.add("filled"),this.innerHTML=`<img src="https://picsum.photos/seed/pub${t}/200/200" /><button class="remove-photo">✕</button>`}}),document.querySelectorAll("[data-safety]").forEach(a=>{a.onclick=()=>{document.querySelectorAll("[data-safety]").forEach(t=>t.classList.remove("chip-active")),a.classList.add("chip-active")}}),document.getElementById("btn-submit-bottom").onclick=()=>{i?(document.getElementById("publish-main-screen").style.display="none",document.getElementById("hidden-success-screen").style.display="flex",document.getElementById("hidden-success-screen").style.flexDirection="column"):(f(e("check",16)+" Lugar enviado. Será revisado antes de publicarse."),E("/home"))},document.getElementById("btn-success-back").onclick=()=>E("/home")}function Ke(){var s,y;const p=document.getElementById("app");j.currentUser||xe("business");const i=((s=j.currentUser)==null?void 0:s.bizCategory)||"restaurante",a=((y=j.currentUser)==null?void 0:y.bizName)||"Mi Negocio";let t="",n="",l=[];const o={restaurante:"Restaurante",hospedaje:"Hotel / Hospedaje",guia:"Guía Turístico",movilidad:"Transporte",entretenimiento:"Entretenimiento",tienda:"Tienda / Artesanías",salud:"Salud / Clínica"};switch(i){case"restaurante":t=`
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("layout",14,"color:var(--blue)")} Mesas Reservadas Hoy</div>
          <div style="font-size:22px;font-weight:700">12 <span style="font-size:12px;color:var(--text-secondary)">/ 20</span></div>
          <div style="width:100%;height:6px;background:var(--border-light);border-radius:4px;margin-top:8px;overflow:hidden"><div style="width:60%;height:100%;background:var(--green-primary);border-radius:4px"></div></div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">60% ocupación</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("users",14,"color:var(--green-primary)")} Comensales del Mes</div>
          <div style="font-size:22px;font-weight:700">850</div>
          <span class="chip chip-green" style="font-size:10px;margin-top:4px">+120 vs mes ant.</span>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("star",14,"color:var(--orange)")} Calificación Servicio</div>
          <div style="font-size:22px;font-weight:700;display:flex;align-items:center;gap:4px">4.8 ${e("star",14,"color:var(--orange)")}</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">Basada en 234 reseñas</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("award",14,"color:#7c3aed")} Plato Estrella</div>
          <div style="font-size:16px;font-weight:700">Lomo Saltado</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">32 menciones esta semana</div>
        </div>`,n=he([{icon:"layout",color:"blue",bg:"var(--blue-light)",label:"Plano en Vivo",desc:"Estado actual de mesas",link:"/biz-reservations"},{icon:"coffee",color:"orange",bg:"var(--orange-light)",label:"Menú del Día",desc:"Actualizar menú diario",link:"/biz-settings?section=menu"},{icon:"calendar",color:"green",bg:"var(--green-bg-light)",label:"Próximas Reservas",desc:"Reservas de hoy",link:"/biz-reservations"},{icon:"tag",color:"#7c3aed",bg:"#ede9fe",label:"Crear Promoción",desc:"Nueva oferta",action:"speeddial"}]),l=[{title:"Nueva reserva de mesa",desc:"Carlos M. — 4 personas, 8:00 PM",icon:"calendar",color:"blue"},{title:"Mesa confirmada — Llegó",desc:"Ana R. — Mesa 5 ocupada",icon:"check-circle",color:"green"},{title:"Nuevo comentario positivo",desc:'"Excelente sazón, el ceviche está…"',icon:"message-circle",color:"green"},{title:"Solicitud evento especial",desc:"Cumpleaños — 20 personas",icon:"gift",color:"orange"},{title:"Menú del día actualizado",desc:"Menú ejecutivo de lunes publicado",icon:"edit",color:"gray"}];break;case"hospedaje":t=`
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("home",14,"color:var(--blue)")} Hab. Ocupadas Hoy</div>
          <div style="font-size:22px;font-weight:700">18 <span style="font-size:12px;color:var(--text-secondary)">/ 20</span></div>
          <div style="width:100%;height:6px;background:var(--border-light);border-radius:4px;margin-top:8px;overflow:hidden"><div style="width:90%;height:100%;background:var(--orange);border-radius:4px"></div></div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">90% ocupación</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("log-in",14,"color:var(--green-primary)")} Check-ins Hoy</div>
          <div style="font-size:22px;font-weight:700">5</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">J. Pérez, M. López, A. Gómez</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("log-out",14,"color:var(--orange)")} Check-outs Hoy</div>
          <div style="font-size:22px;font-weight:700">3</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">R. Torres, S. Díaz, L. Vargas</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("star",14,"color:#7c3aed")} Comodidad</div>
          <div style="font-size:22px;font-weight:700;display:flex;align-items:center;gap:4px">4.9 ${e("star",14,"color:#7c3aed")}</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">Reseñas de hospedaje</div>
        </div>`,n=he([{icon:"calendar",color:"blue",bg:"var(--blue-light)",label:"Estado Establecimiento",desc:"Calendario Gantt",link:"/biz-reservations"},{icon:"log-in",color:"green",bg:"var(--green-bg-light)",label:"Check-ins de Hoy",desc:"5 llegadas esperadas",link:"/biz-reservations"},{icon:"home",color:"orange",bg:"var(--orange-light)",label:"Gestionar Habitaciones",desc:"Tipos y precios",link:"/biz-settings?section=habitaciones"},{icon:"tag",color:"#7c3aed",bg:"#ede9fe",label:"Promoción Temporada",desc:"Nueva oferta",action:"speeddial"}]),l=[{title:"Nueva reserva",desc:"J. Pérez — Suite Matrimonial, Mar 22-24",icon:"calendar",color:"blue"},{title:"Check-in completado",desc:"M. López — Habitación 204",icon:"check-circle",color:"green"},{title:"Check-out completado",desc:"R. Torres — 3 noches, S/ 540",icon:"log-out",color:"orange"},{title:"Nueva calificación estancia",desc:'★★★★★ "Excelente limpieza y…"',icon:"star",color:"green"},{title:"Habitación bloqueada",desc:"Suite Deluxe — Mantenimiento Mar 25-27",icon:"lock",color:"gray"}];break;case"guia":t=`
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("compass",14,"color:var(--green-primary)")} Tours Realizados Mes</div>
          <div style="font-size:22px;font-weight:700">14</div>
          <span class="chip chip-green" style="font-size:10px;margin-top:4px">+3 vs mes ant.</span>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("users",14,"color:var(--blue)")} Participantes Totales</div>
          <div style="font-size:22px;font-weight:700">89</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">Este mes</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("star",14,"color:var(--orange)")} Calificación de Guía</div>
          <div style="font-size:22px;font-weight:700;display:flex;align-items:center;gap:4px">4.7 ${e("star",14,"color:var(--orange)")}</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">Reseñas de experiencias</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("trending-up",14,"color:#7c3aed")} Tour Más Popular</div>
          <div style="font-size:16px;font-weight:700">Huacachina Extremo</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">28 reservas este mes</div>
        </div>`,n=he([{icon:"compass",color:"green",bg:"var(--green-bg-light)",label:"Mis Tours Activos",desc:"Catálogo de tours",link:"/biz-settings?section=tours"},{icon:"calendar",color:"blue",bg:"var(--blue-light)",label:"Próximas Salidas",desc:"Calendario del día",link:"/biz-reservations"},{icon:"plus-circle",color:"orange",bg:"var(--orange-light)",label:"Programar Salida",desc:"Nueva salida",link:"/biz-settings?section=tours"},{icon:"tag",color:"#7c3aed",bg:"#ede9fe",label:"Promoción de Tour",desc:"Nueva oferta",action:"speeddial"}]),l=[{title:"Nueva reserva de tour",desc:"L. Castro — Huacachina Extremo, Mar 25",icon:"calendar",color:"blue"},{title:"Salida completada",desc:"Líneas de Nazca — 12 participantes",icon:"check-circle",color:"green"},{title:"Nueva calificación",desc:'★★★★★ "Increíble experiencia, el guía…"',icon:"star",color:"orange"},{title:"Consulta de disponibilidad",desc:"Alguien vio Sandboarding VIP sin reservar",icon:"eye",color:"gray"},{title:"Nueva reserva de tour",desc:"P. Mendoza — Oasis Nocturno, Mar 28",icon:"calendar",color:"blue"}];break;case"movilidad":t=`
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("navigation",14,"color:var(--blue)")} Viajes Hoy</div>
          <div style="font-size:22px;font-weight:700">34</div>
          <span class="chip chip-green" style="font-size:10px;margin-top:4px">+8 vs ayer</span>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("radio",14,"color:var(--green-primary)")} Conductores Activos</div>
          <div style="font-size:22px;font-weight:700;display:flex;align-items:center;gap:6px">8 <span style="width:8px;height:8px;background:var(--green-primary);border-radius:50%;animation:pulse 1.5s infinite"></span></div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">En tiempo real</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("dollar-sign",14,"color:var(--orange)")} Ingresos del Día</div>
          <div style="font-size:22px;font-weight:700">S/ 1,240</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">Acumulado hoy</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("star",14,"color:#7c3aed")} Calificación Servicio</div>
          <div style="font-size:22px;font-weight:700;display:flex;align-items:center;gap:4px">4.6 ${e("star",14,"color:#7c3aed")}</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">Promedio conductores</div>
        </div>`,n=he([{icon:"radio",color:"green",bg:"var(--green-bg-light)",label:"Ver Flota en Vivo",desc:"Mapa en tiempo real",link:"/biz-live"},{icon:"list",color:"blue",bg:"var(--blue-light)",label:"Historial de Viajes",desc:"Viajes de hoy",link:"/biz-reservations"},{icon:"user-plus",color:"orange",bg:"var(--orange-light)",label:"Añadir Conductor",desc:"Nuevo registro",link:"/biz-settings?section=flota"},{icon:"dollar-sign",color:"#7c3aed",bg:"#ede9fe",label:"Actualizar Tarifas",desc:"Precios y rutas",link:"/biz-settings?section=tarifas"}]),l=[{title:"Nuevo viaje solicitado",desc:"Plaza de Armas → Huacachina",icon:"navigation",color:"blue"},{title:"Viaje completado",desc:"25 min — S/ 15.00",icon:"check-circle",color:"green"},{title:"Conductor conectado",desc:"Juan M. — Mototaxi ABC-123",icon:"radio",color:"green"},{title:"Conductor desconectado",desc:"Pedro R. — Fin de turno",icon:"wifi-off",color:"gray"},{title:"Nueva calificación",desc:"★★★★★ Conductor: Juan M.",icon:"star",color:"orange"}];break;case"entretenimiento":t=`
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("layout",14,"color:var(--blue)")} Reservas Esta Noche</div>
          <div style="font-size:22px;font-weight:700">24</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">65% aforo reservado</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("ticket",14,"color:var(--blue)")} Entradas Vendidas</div>
          <div style="font-size:22px;font-weight:700">156</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">DJ Noche Latina</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("star",14,"color:var(--orange)")} Calificación Ambiente</div>
          <div style="font-size:22px;font-weight:700;display:flex;align-items:center;gap:4px">4.5 ${e("star",14,"color:var(--orange)")}</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("award",14,"color:#7c3aed")} Bebida Popular</div>
          <div style="font-size:16px;font-weight:700">Pisco Sour Especial</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">Más pedida esta semana</div>
        </div>`,n=he([{icon:"layout",color:"red",bg:"var(--red-light)",label:"Plano del Local",desc:"En tiempo real",link:"/biz-reservations"},{icon:"music",color:"blue",bg:"var(--blue-light)",label:"Shows Esta Semana",desc:"Programación",link:"/biz-settings?section=shows"},{icon:"star",color:"#7c3aed",bg:"#ede9fe",label:"Lista VIP",desc:"Esta noche",link:"/biz-settings?section=lista-vip"},{icon:"calendar",color:"orange",bg:"var(--orange-light)",label:"Crear Evento",desc:"Nuevo show",action:"speeddial"}]),l=[{title:"Nueva reserva de mesa",desc:"Mesa VIP — 6 personas, 11:00 PM",icon:"calendar",color:"blue"},{title:"Venta de entrada",desc:"2x General — DJ Noche Latina",icon:"ticket",color:"green"},{title:"Show programado",desc:"DJ Remix — Sábado 11:00 PM",icon:"music",color:"orange"},{title:"Nueva calificación",desc:'★★★★ "Buen ambiente pero…"',icon:"star",color:"orange"},{title:"Solicitud Lista VIP",desc:"Contacto para mesa VIP sin cargo",icon:"star",color:"purple"}];break;case"tienda":t=`
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("eye",14,"color:var(--blue)")} Visitas al Perfil Hoy</div>
          <div style="font-size:22px;font-weight:700">145</div>
          <span class="chip chip-green" style="font-size:10px;margin-top:4px">+22 vs ayer</span>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("shopping-bag",14,"color:var(--green-primary)")} Productos Activos</div>
          <div style="font-size:22px;font-weight:700">48</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">En catálogo</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("package",14,"color:var(--orange)")} Pedidos Hoy</div>
          <div style="font-size:22px;font-weight:700">7</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">3 pendientes</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("trending-up",14,"color:#7c3aed")} Categoría Más Vista</div>
          <div style="font-size:14px;font-weight:700"><span class="chip chip-green" style="font-size:11px">Cerámica</span></div>
        </div>`,n=he([{icon:"shopping-bag",color:"green",bg:"var(--green-bg-light)",label:"Mi Catálogo",desc:"Productos y colecciones",link:"/biz-settings?section=catalogo"},{icon:"package",color:"orange",bg:"var(--orange-light)",label:"Pedidos Pendientes",desc:"3 por confirmar",link:"/biz-reservations"},{icon:"layers",color:"blue",bg:"var(--blue-light)",label:"Colecciones",desc:"Agrupar productos",link:"/biz-settings?section=catalogo"},{icon:"tag",color:"#7c3aed",bg:"#ede9fe",label:"Crear Promoción",desc:"Nueva oferta",action:"speeddial"}]),l=[{title:"Nueva visita al perfil",desc:"Un usuario exploró tu tienda",icon:"eye",color:"blue"},{title:"Nuevo pedido",desc:"3 productos — S/ 185.00",icon:"package",color:"green"},{title:"Nuevo comentario",desc:'"Las réplicas son hermosas…"',icon:"message-circle",color:"green"},{title:"Pieza única vendida",desc:"Vasija Nazca — Marcada como agotada",icon:"award",color:"orange"},{title:"Lugar guardado",desc:"Un usuario guardó tu tienda",icon:"bookmark",color:"gray"}];break;case"salud":t=`
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("calendar",14,"color:var(--blue)")} Citas Hoy</div>
          <div style="font-size:22px;font-weight:700">12</div>
          <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">Próxima: 10:30 AM</div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("clock",14,"color:var(--orange)")} Pendientes Confirmar</div>
          <div style="font-size:22px;font-weight:700;display:flex;align-items:center;gap:6px">3 <span style="width:8px;height:8px;background:var(--orange);border-radius:50%;animation:pulse 1.5s infinite"></span></div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("activity",14,"color:#7c3aed")} Mayor Demanda</div>
          <div style="font-size:14px;font-weight:700"><span class="chip chip-blue" style="font-size:11px">Dermatología</span></div>
        </div>
        <div class="card-flat" style="padding:16px;box-shadow:0 8px 16px rgba(0,0,0,0.05)">
          <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--text-secondary);margin-bottom:4px">${e("star",14,"color:var(--green-primary)")} Calificación Servicio</div>
          <div style="font-size:22px;font-weight:700;display:flex;align-items:center;gap:4px">4.8 ${e("star",14,"color:var(--green-primary)")}</div>
        </div>`,n=he([{icon:"users",color:"blue",bg:"var(--blue-light)",label:"Equipo Médico",desc:"Médicos y horarios",link:"/biz-settings?section=medicos"},{icon:"calendar",color:"green",bg:"var(--green-bg-light)",label:"Agenda de Hoy",desc:"Citas programadas",link:"/biz-reservations"},{icon:"package",color:"orange",bg:"var(--orange-light)",label:"Stock Farmacia",desc:"Inventario y recetas",link:"/biz-settings?section=stock-farmacia"},{icon:"tag",color:"#7c3aed",bg:"#ede9fe",label:"Crear Promoción",desc:"Nueva oferta",action:"speeddial"}]),l=[{title:"Nueva cita agendada",desc:"J. Ramos — Dermatología, 11:00 AM",icon:"calendar",color:"blue"},{title:"Cita confirmada",desc:"Atención 10:30 AM confirmada",icon:"check-circle",color:"green"},{title:"Cita cancelada",desc:'P. Soto — "Viaje imprevisto"',icon:"x-circle",color:"red"},{title:"Cita atendida",desc:"Dr. García — 25 min consulta",icon:"check",color:"green"},{title:"Consulta de medicamento",desc:"Búsqueda: Paracetamol 500mg",icon:"search",color:"gray"}];break}const b=l.map(c=>`
    <div style="display:flex;gap:12px;align-items:flex-start">
      <div style="width:36px;height:36px;border-radius:50%;background:var(--${c.color==="gray"?"border-light":c.color==="purple"?"":c.color+"-light"}, #f3f4f6);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--${c.color==="gray"?"text-secondary":c.color==="purple"?"":c.color}, #6b7280)">
        ${e(c.icon,16)}
      </div>
      <div style="flex:1;border-bottom:1px solid var(--border-light);padding-bottom:12px">
        <div style="font-weight:600;font-size:13px">${c.title}</div>
        <div style="font-size:12px;color:var(--text-secondary)">${c.desc}</div>
      </div>
    </div>
  `).join("");p.innerHTML=`
    <div class="screen">
      <div class="appbar">
        <div class="appbar-title" style="margin-left:8px;display:flex;align-items:center;gap:8px">
          ${e("briefcase",20)}
          <select id="dev-biz-switcher" style="padding:4px 8px;border-radius:12px;background:var(--surface);color:var(--text-primary);border:1px solid var(--border-light);font-size:14px;font-weight:600;outline:none;max-width:160px;-webkit-appearance:auto">
            <option value="restaurante" ${i==="restaurante"?"selected":""}>Restaurante</option>
            <option value="hospedaje" ${i==="hospedaje"?"selected":""}>Hotel</option>
            <option value="guia" ${i==="guia"?"selected":""}>Guía Turístico</option>
            <option value="movilidad" ${i==="movilidad"?"selected":""}>Transporte</option>
            <option value="entretenimiento" ${i==="entretenimiento"?"selected":""}>Entretenimiento</option>
            <option value="tienda" ${i==="tienda"?"selected":""}>Tienda</option>
            <option value="salud" ${i==="salud"?"selected":""}>Salud / Clínica</option>
          </select>
        </div>
        <div style="display:flex;gap:8px">
          <button class="appbar-btn" id="btn-biz-qr">${e("maximize",24)}</button>
          <button class="appbar-btn" id="btn-biz-notif" style="position:relative">
            ${e("bell",24)}
            <span style="position:absolute;top:4px;right:6px;width:10px;height:10px;background:var(--red);border-radius:50%;border:2px solid white"></span>
          </button>
        </div>
      </div>
      <div class="screen-content" style="padding-bottom:100px;background:var(--bg-body)">

        <!-- Top Profile Card -->
        <div style="position:relative;background:linear-gradient(135deg, var(--green-primary), var(--green-dark));padding:24px 16px 40px;color:white;border-radius:0 0 24px 24px;overflow:hidden">
          <div style="position:absolute;top:-40px;right:-40px;width:160px;height:160px;background:rgba(255,255,255,0.1);border-radius:50%"></div>
          <div style="display:flex;align-items:center;gap:16px">
            <div style="width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700">${a.charAt(0)}</div>
            <div>
              <div style="font-size:18px;font-weight:700">${a}</div>
              <div style="opacity:0.9;font-size:13px">${o[i]||i}</div>
              <div style="display:flex;gap:8px;margin-top:8px">
                <span style="background:rgba(255,255,255,0.2);padding:4px 12px;border-radius:20px;font-size:11px">Verificado ✓</span>
                <span style="background:rgba(255,255,255,0.2);padding:4px 12px;border-radius:20px;font-size:11px">Premium</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Metrics Grid -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:16px;margin-top:-20px;position:relative;z-index:2">
          ${t}
        </div>

        <!-- Timeline -->
        <div style="padding:0 16px 24px">
          <h3 style="font-size:16px;margin-bottom:16px;display:flex;align-items:center;gap:6px">${e("activity",18)} Actividad Reciente</h3>
          <div class="flex-col gap-12">${b}</div>
        </div>

        <!-- Hub -->
        <div style="padding:0 16px">
          <h3 style="font-size:16px;margin-bottom:16px;display:flex;align-items:center;gap:6px">${e("grid",18)} Acciones Rápidas</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px">
            ${n}

            <div class="card-flat hub-btn" onclick="window.location.hash='/biz-settings'" style="grid-column:span 2;padding:20px 16px;cursor:pointer;display:flex;align-items:center;gap:16px">
              <div style="width:48px;height:48px;border-radius:12px;background:#e2e8f0;color:var(--text-secondary);display:flex;align-items:center;justify-content:center;flex-shrink:0">${e("settings",24)}</div>
              <div style="flex:1">
                <div style="font-weight:600;font-size:14px;margin-bottom:4px">Mi Negocio (Configuración)</div>
                <div style="font-size:11px;color:var(--text-secondary)">Notificaciones, Horarios, Documentos y más...</div>
              </div>
              <div style="color:var(--text-secondary)">${e("chevron-right",20)}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `,W("/biz-dashboard","business"),A(),document.getElementById("btn-biz-qr").onclick=()=>f("Mostrando QR del negocio"),document.getElementById("btn-biz-notif").onclick=()=>f("No hay alertas críticas"),document.querySelectorAll('.hub-btn[data-action="speeddial"]').forEach(c=>{c.onclick=()=>f("Abriendo opciones de creación...")});const r=document.getElementById("dev-biz-switcher");r&&(r.onchange=c=>{const x=c.target.value;if(j.currentUser){j.currentUser.bizCategory=x;const C={restaurante:"Restaurante El Catador",hospedaje:"Hotel Las Dunas VIP",guia:"Ica Tours Xtreme",movilidad:"Transportes Expreso Ica",entretenimiento:"Discoteca El Templo",tienda:"Bodega Lazo Tradicional",salud:"Clínica San Juan"};j.currentUser.bizName=C[x]||"Mi Negocio",Ke()}})}function he(p){return p.map(i=>`
    <div class="card-flat hub-btn" ${i.action?'data-action="'+i.action+'"':`onclick="window.location.hash='`+i.link+`'"`} style="padding:20px 16px;text-align:center;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:12px">
      <div style="width:48px;height:48px;border-radius:12px;background:${i.bg};color:${typeof i.color=="string"&&i.color.startsWith("#")?i.color:"var(--"+i.color+")"};display:flex;align-items:center;justify-content:center">${e(i.icon,24)}</div>
      <div><div style="font-weight:600;font-size:14px">${i.label}</div><div style="font-size:11px;color:var(--text-secondary)">${i.desc}</div></div>
    </div>
  `).join("")}function Ot(){const p=document.getElementById("app");p.innerHTML=`
    <div class="screen" style="padding-bottom:12px">
      <div class="appbar">
        <button class="appbar-btn" id="btn-back">←</button>
        <span class="appbar-title">Editar negocio</span>
        <button class="btn btn-primary btn-xs" id="btn-save">Guardar</button>
      </div>
      <div class="screen-content" style="padding-bottom:12px">
        <div class="form-section-title" style="display:flex;align-items:center;gap:6px">${e("clipboard",16)} Información básica</div>
        <div class="flex-col gap-12 mb-16">
          <div class="input-group"><label class="input-label">Nombre</label><input class="input-field no-icon" value="Restaurante El Catador" /></div>
          <div class="input-group"><label class="input-label">Categoría</label><select class="input-field no-icon" style="padding-left:12px"><option selected>Restaurante</option><option>Hotel</option><option>Bar</option></select></div>
          <div class="input-group"><label class="input-label">Descripción</label><textarea class="input-field no-icon" rows="3">El Catador es un restaurante emblemático de Ica que combina la gastronomía tradicional iqueña con toques modernos.</textarea></div>
        </div>
        <div class="form-divider"><span>Contacto</span></div>
        <div class="flex-col gap-12 mb-16">
          <div class="input-group"><label class="input-label">WhatsApp</label><input class="input-field no-icon" value="+51 956 234 567" /></div>
          <div class="input-group"><label class="input-label">Email</label><input class="input-field no-icon" value="info@elcatador.pe" /></div>
          <div class="input-group"><label class="input-label">Web</label><input class="input-field no-icon" value="www.elcatador.pe" /></div>
        </div>
        <div class="form-divider"><span>Etiquetas</span></div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">
          ${["Familiar","Pet friendly","Terraza","Música en vivo","WiFi gratis","Estacionamiento","Aire acondicionado","Vista al paisaje","Reservas disponibles","Delivery"].map((a,t)=>`<span class="chip ${t<4?"chip-active":"chip-outline"} chip-selectable">${a}</span>`).join("")}
        </div>
        <div class="form-divider"><span>Seguridad</span></div>
        <div class="flex-row gap-8 mb-12">
          <span class="chip chip-green chip-selectable chip-active" style="display:flex;align-items:center;gap:4px">${e("shield-check",14)} Seguro</span>
          <span class="chip chip-yellow chip-selectable" style="display:flex;align-items:center;gap:4px">${e("alert-triangle",14)} Precaución</span>
          <span class="chip chip-red chip-selectable" style="display:flex;align-items:center;gap:4px">${e("alert-octagon",14)} Riesgo</span>
        </div>
        <textarea class="input-field no-icon" placeholder="Nota de seguridad..." rows="2">Establecimiento seguro y reconocido en la zona.</textarea>
        <div style="height:20px"></div>
        <button class="btn btn-primary" id="btn-save-bottom">Guardar cambios</button>
        <button class="btn btn-outline mt-12" style="color:var(--red);border-color:var(--red);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-logout-biz">${e("log-out",16)} Cerrar sesión</button>
      </div>
    </div>
  `,G(),A(),document.getElementById("btn-back").onclick=()=>E("/biz-dashboard"),document.querySelectorAll(".chip-selectable").forEach(a=>a.onclick=()=>a.classList.toggle("chip-active"));const i=()=>{f("Cambios guardados exitosamente"),E("/biz-dashboard")};document.getElementById("btn-save").onclick=i,document.getElementById("btn-save-bottom").onclick=i,document.getElementById("btn-logout-biz").onclick=()=>{te("Cerrar sesión","¿Estás seguro que deseas cerrar sesión?",[{label:"Cancelar",class:"btn-outline"},{label:"Cerrar sesión",class:"btn-danger",callback:()=>{Me(),E("/welcome")}}])}}function Ut(){var o;const p=document.getElementById("app"),i=((o=j==null?void 0:j.currentUser)==null?void 0:o.bizCategory)||"restaurante";let a="Hoy";const t=[...nt];let n="list";function l(){let b="Reservas",r=`${["Hoy","Mañana","Esta semana","Todas"].map(d=>`<span class="chip ${d===a?"chip-active":"chip-outline"} chip-selectable" data-f="${d}">${d}</span>`).join("")}`,s="",y="",c="";switch(i){case"restaurante":y=`<button class="appbar-btn" id="toggle-view">${e(n==="list"?"map":"list",24)}</button>`,n==="list"?s=`
            <div style="padding:16px;background:var(--surface);margin-bottom:12px;border-bottom:1px solid var(--border-light)">
               <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span>Ocupación actual</span><span style="font-weight:700">8 de 20 mesas (40%)</span></div>
               <div style="width:100%;height:6px;background:var(--border-light);border-radius:4px;overflow:hidden"><div style="width:40%;height:100%;background:var(--green-primary)"></div></div>
               <div style="margin-top:12px"><span class="chip chip-orange" style="font-size:11px">${e("clock",12)} Hora pico: 8:00 PM</span></div>
            </div>
            ${je(t)}
          `:s=`
            <div style="padding:16px;text-align:center">
              <h3 style="margin-bottom:16px">Plano en Tiempo Real</h3>
              <div style="aspect-ratio:1;background:var(--surface);border:2px solid var(--border-light);border-radius:12px;position:relative">
                 <div class="table-node" style="position:absolute;top:20px;left:20px;width:60px;height:60px;border-radius:50%;background:var(--green-bg-light);border:2px solid var(--green-primary);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--green-primary);cursor:pointer">M1<br>Libre</div>
                 <div class="table-node" style="position:absolute;top:20px;left:100px;width:80px;height:60px;border-radius:8px;background:var(--red-light);border:2px solid var(--red);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--red);cursor:pointer">M2<br>Ocup.</div>
                 <div class="table-node" style="position:absolute;top:100px;left:20px;width:60px;height:60px;border-radius:50%;background:var(--blue-light);border:2px solid var(--blue);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--blue);cursor:pointer;font-size:11px;text-align:center">M3<br>Res. 8PM</div>
              </div>
            </div>
          `;break;case"hospedaje":y=`
          <button class="appbar-btn" id="btn-view-list" style="${n==="list"?"color:var(--green-primary)":""}">${e("list",24)}</button>
          <button class="appbar-btn" id="btn-view-cal" style="${n==="cal"?"color:var(--green-primary)":""}">${e("calendar",24)}</button>
          <button class="appbar-btn" id="btn-view-occ" style="${n==="occ"?"color:var(--green-primary)":""}">${e("grid",24)}</button>
        `,n==="list"?s=je(t,!0):n==="cal"?s=`
            <div style="padding:16px;overflow-x:auto">
              <h3 style="margin-bottom:16px">Calendario Drag & Drop</h3>
              <div style="min-width:500px">
                <div style="display:flex;gap:4px;margin-bottom:8px">
                  <div style="width:80px"></div>
                  ${[1,2,3,4,5].map(d=>`<div style="flex:1;text-align:center;font-size:12px;font-weight:600">Mar ${d}</div>`).join("")}
                </div>
                <!-- Fila 1 -->
                <div style="display:flex;gap:4px;align-items:center;margin-bottom:8px">
                   <div style="width:80px;font-size:12px;font-weight:600">Suite 101</div>
                   <div style="flex:1;height:40px;background:var(--green-bg-light);border:1px solid var(--green-primary);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--green-primary);cursor:grab">Pérez</div>
                   <div style="flex:1;height:40px;background:var(--surface);border:1px solid var(--border-light);border-radius:6px"></div>
                   <div style="flex:2;height:40px;background:var(--blue-light);border:1px solid var(--blue);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--blue);cursor:grab">Gómez (2 Noches)</div>
                   <div style="flex:1;height:40px;background:var(--surface);border:1px solid var(--border-light);border-radius:6px"></div>
                </div>
                <!-- Fila 2 -->
                <div style="display:flex;gap:4px;align-items:center">
                   <div style="width:80px;font-size:12px;font-weight:600">Doble 201</div>
                   <div style="flex:1;height:40px;background:#eee;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#999">${e("lock",14)}</div>
                   <div style="flex:3;height:40px;background:var(--orange-light);border:1px solid var(--orange);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--orange);cursor:grab">Tour Escolar (3 Noches)</div>
                   <div style="flex:1;height:40px;background:var(--surface);border:1px solid var(--border-light);border-radius:6px"></div>
                </div>
              </div>
            </div>
          `:s=`
            <div style="padding:16px;overflow-x:auto">
              <h3 style="margin-bottom:16px">Ocupación (Semáforo)</h3>
              <table style="width:100%;text-align:center;border-collapse:collapse">
                <tr><th></th><th>Suite A</th><th>Suite B</th><th>Doble 1</th></tr>
                <tr><td style="font-size:12px;font-weight:600;padding:8px">Mar 1</td><td style="background:var(--red-light);color:var(--red);border:1px solid #fff">Ocup.</td><td style="background:var(--green-bg-light);color:var(--green-primary);border:1px solid #fff">Libre</td><td style="background:var(--green-bg-light);color:var(--green-primary);border:1px solid #fff">Libre</td></tr>
                <tr><td style="font-size:12px;font-weight:600;padding:8px">Mar 2</td><td style="background:var(--red-light);color:var(--red);border:1px solid #fff">Ocup.</td><td style="background:var(--yellow);color:#fff;border:1px solid #fff">Reserva</td><td style="background:var(--green-bg-light);color:var(--green-primary);border:1px solid #fff">Libre</td></tr>
              </table>
            </div>
          `;break;case"movilidad":b="Historial de Viajes",r=`${["Hoy","Esta semana","Por Conductor","Cancelados"].map(d=>`<span class="chip ${d===a?"chip-active":"chip-outline"} chip-selectable" data-f="${d}">${d}</span>`).join("")}`,s=`
          <div class="flex-col gap-12" style="padding:16px">
            ${[1,2,3].map(d=>`
              <div style="padding:14px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
                <div style="display:flex;justify-content:space-between;margin-bottom:8px">
                  <span style="font-size:12px;color:var(--text-secondary)">Hoy 10:3${d} AM</span>
                  <span style="font-weight:700;color:var(--green-primary)">S/ 1${d}.50</span>
                </div>
                <div style="font-weight:600;font-size:14px;display:flex;align-items:center;gap:6px">${e("map-pin",14)} Plaza de Armas ${e("arrow-right",14)} Huacachina</div>
                <div style="font-size:12px;color:var(--text-secondary);margin-top:4px">Cliente: Anónimo · Conductor: Juan Pérez</div>
                <div style="display:flex;align-items:center;gap:4px;margin-top:8px;font-size:12px">Calificación: 5 ${e("star",10,"text-green")}</div>
              </div>
            `).join("")}
          </div>
        `;break;case"entretenimiento":y=`<button class="appbar-btn" id="btn-vip" style="color:var(--orange)">${e("star",24)} Lista VIP</button>`,n==="vip"?(b="Lista VIP y Cortesía",s=`
             <div class="flex-col gap-12" style="padding:16px">
                <button class="btn btn-primary w-full" onclick="showToast('Abriendo formulario VIP')">${e("plus",16)} Añadir a Lista VIP</button>
                ${["Andrea M. +3 (Cortesía)","Carlos R. +1 (Sin cola)","Fiorella S. +0 (Consumo Mín. Reducido)"].map(d=>`
                  <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
                     <div style="font-weight:600;font-size:14px">${d}</div>
                     <button class="btn btn-outline btn-xs">Verificar</button>
                  </div>
                `).join("")}
             </div>
           `):s=je(t);break;case"tienda":b="Pedidos y Envíos",r=`${["Pendientes","Listos","Entregados"].map(d=>`<span class="chip ${d===a?"chip-active":"chip-outline"} chip-selectable" data-f="${d}">${d}</span>`).join("")}`,s=`
          <div class="flex-col gap-12" style="padding:16px">
            <div style="padding:14px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
               <div style="display:flex;justify-content:space-between;margin-bottom:8px">
                 <span style="font-weight:700">Pedido #P-4521</span>
                 <span class="chip chip-yellow" style="font-size:10px">Pendiente</span>
               </div>
               <div style="font-size:13px;color:var(--text-secondary)">Cliente: Ana Torres vía WhatsApp</div>
               <div style="margin:8px 0;padding:8px;background:var(--bg-body);border-radius:8px">
                  <div style="font-size:12px">1x Collar Piedras (S/ 25)</div>
                  <div style="font-size:12px">2x Pulsera Imán (S/ 30)</div>
               </div>
               <div style="display:flex;justify-content:space-between;align-items:center">
                 <div style="font-weight:700;color:var(--green-primary)">S/ 55.00</div>
                 <button class="btn btn-primary btn-xs">Marcar Listo</button>
               </div>
            </div>
          </div>
        `;break;case"salud":b="Agenda Médica",r=`${["Dra. Silva","Dr. Ramos","Todos"].map(d=>`<span class="chip ${d===a?"chip-active":"chip-outline"} chip-selectable" data-f="${d}">${d}</span>`).join("")}`,s=`
          <div style="padding:16px;overflow-x:auto">
            <h3 style="margin-bottom:16px">Calendario de Turnos - Hoy</h3>
            <table style="width:100%;text-align:left;border-collapse:collapse;min-width:400px">
              <tr><th style="width:60px"></th><th>Dra. Silva</th><th>Dr. Ramos</th></tr>
              <tr><td style="font-size:11px;color:#999;padding:8px">09:00</td><td style="background:var(--blue-light);border:1px solid #fff;border-radius:4px;padding:4px;font-size:11px;cursor:pointer">Ana L. (Control)</td><td style="background:#eee;border:1px solid #fff;border-radius:4px;padding:4px;font-size:11px;color:#999;text-align:center;cursor:pointer">+</td></tr>
              <tr><td style="font-size:11px;color:#999;padding:8px">09:30</td><td style="background:var(--surface);border:1px solid var(--border-light);border-radius:4px;padding:4px;font-size:11px;text-align:center;color:#999;cursor:pointer">+</td><td style="background:var(--green-bg-light);border:1px solid #fff;border-radius:4px;padding:4px;font-size:11px;cursor:pointer">Luis P. (Nuevo)</td></tr>
            </table>
          </div>
        `;break;case"guia":default:s=je(t);break}i!=="movilidad"&&i!=="tienda"&&(c=`<button class="fab" id="btn-qr-scan" style="bottom: 80px; background:var(--blue); right:16px;">
        <span style="color:white;display:flex;align-items:center">${e("camera",24)}</span>
      </button>`),p.innerHTML=`
      <div class="screen" style="padding-bottom:12px">
        <div class="appbar">
          <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
          <span class="appbar-title">${b}</span>
          <div style="display:flex;align-items:center;gap:8px">${y}</div>
        </div>
        <div class="filter-chips">
          ${r}
        </div>
        <div class="screen-content" style="padding-bottom:12px">
          ${s}
        </div>
        ${c}
      </div>
    `,W("/biz-reservations","business"),A(),document.getElementById("btn-back").onclick=()=>E("/biz-dashboard"),document.querySelectorAll("[data-f]").forEach(d=>{d.onclick=()=>{a=d.dataset.f,l()}});const x=document.getElementById("toggle-view");x&&(x.onclick=()=>{n=n==="list"?"map":"list",l()}),["list","cal","occ"].forEach(d=>{const z=document.getElementById("btn-view-"+d);z&&(z.onclick=()=>{n=d,l()})});const C=document.getElementById("btn-vip");C&&(C.onclick=()=>{n=n==="vip"?"list":"vip",l()}),document.querySelectorAll("[data-confirm]").forEach(d=>{d.onclick=()=>{const z=parseInt(d.dataset.confirm);t[z].status="confirmed",f("Reserva confirmada."),l()}}),document.querySelectorAll("[data-checkin]").forEach(d=>{d.onclick=()=>{te("Check-in Digital","¿Confirmar llegada de "+t[d.dataset.checkin].user+"?",[{label:"Cancelar",class:"btn-outline"},{label:"Confirmar Llegada",class:"btn-primary",callback:()=>{t[d.dataset.checkin].status="active",f("Huésped marcado en estancia"),l()}}])}}),document.querySelectorAll("[data-checkout]").forEach(d=>{d.onclick=()=>{t[d.dataset.checkout].status="completed",f("Check-out completado."),l()}}),document.querySelectorAll("[data-cancel]").forEach(d=>{d.onclick=()=>{const z=parseInt(d.dataset.cancel);te("Cancelar reserva","¿Confirmar cancelación?",[{label:"Volver",class:"btn-outline"},{label:"Confirmar",class:"btn-danger",callback:()=>{t[z].status="cancelled",f("Reserva cancelada"),l()}}])}});const g=document.getElementById("btn-qr-scan");g&&(g.onclick=()=>{f("Activando cámara..."),setTimeout(()=>{te("Código Escaneado",`Reserva #9842 (Lucía Flores)
Estado: Pendiente`,[{label:"Cerrar",class:"btn-outline"},{label:"Validar",class:"btn-primary",callback:()=>f("Validado.")}])},1e3)}),document.querySelectorAll(".table-node, td").forEach(d=>{d.onclick||(d.onclick=()=>{d.innerText==="+"?f("Abriendo formulario manual..."):d.innerText.includes("Libre")?f("Crear reserva para esta mesa..."):d.innerText.includes("Ocup")&&f("Viendo detalle de ocupación...")})})}l()}function je(p,i=!1){return`
    <div class="flex-col gap-12" style="padding:16px">
      ${p.map((a,t)=>`
        <div class="reservation-card" id="res-${t}">
          <div class="reservation-header">
            ${O(a.initials,a.color,38)}
            <div class="flex-1"><div style="font-weight:600;font-size:14px">${a.user}</div></div>
            <span class="chip ${a.status==="confirmed"?"chip-green":a.status==="pending"?"chip-yellow":a.status==="active"?"chip-blue":"chip-red"}" style="font-size:10px">${a.status==="confirmed"?"Confirmada":a.status==="pending"?"Pendiente":a.status==="active"?"En estancia":a.status==="completed"?"Completado":"Cancelada"}</span>
          </div>
          <div class="reservation-details">
            <span style="display:flex;align-items:center;gap:4px">${e("calendar",12)} ${a.date} · ${a.time}</span>
            <span style="display:flex;align-items:center;gap:4px">${e("users",12)} ${a.people} personas</span>
            <span style="display:flex;align-items:center;gap:4px">${e("coffee",12)} ${a.type}</span>
          </div>
          ${a.status!=="cancelled"?`
          <div class="reservation-actions">
            ${a.status==="pending"?`<button class="btn btn-primary btn-xs" style="display:flex;gap:4px;align-items:center" data-confirm="${t}">${e("check",12)} Confirmar</button>`:""}
            ${a.status==="pending"?`<button class="btn btn-danger btn-xs" style="display:flex;gap:4px;align-items:center" data-cancel="${t}">${e("slash",12)} Cancelar</button>`:""}
            
            ${i&&a.status==="confirmed"?`<button class="btn btn-primary btn-xs" style="display:flex;gap:4px;align-items:center" data-checkin="${t}">${e("log-in",12)} Check-in digital</button>`:""}
            ${i&&a.status==="active"?`<button class="btn btn-outline-blue btn-xs" style="display:flex;gap:4px;align-items:center" data-checkout="${t}">${e("log-out",12)} Check-out</button>`:""}

            ${a.status==="confirmed"&&!i?`<button class="btn btn-outline-blue btn-xs" style="display:flex;gap:4px;align-items:center" onclick="showToast('Contactando')">${e("message-circle",12)} Contactar</button>`:""}
            ${a.status==="confirmed"?`<button class="btn btn-danger btn-xs" style="display:flex;gap:4px;align-items:center" data-cancel="${t}">${e("slash",12)} Cancelar</button>`:""}
          </div>`:'<div style="font-size:12px;color:var(--text-secondary);font-style:italic">Reserva cancelada u obsoleta</div>'}
        </div>
      `).join("")}
    </div>
  `}function _t(){const p=document.getElementById("app");let i=!0;p.innerHTML=`
    <div class="screen" style="padding-bottom:12px">
      <div class="appbar">
        <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
        <span class="appbar-title">Crear evento</span>
        <button class="btn btn-primary btn-xs disabled" id="btn-publish">Publicar</button>
      </div>
      <div class="screen-content" style="padding-bottom:12px">
        <div class="flex-col gap-12">
          <div class="input-group"><label class="input-label">Título del evento *</label><input class="input-field no-icon" id="ev-title" placeholder="Ej: Noche de Jazz" /></div>
          <div class="form-section-title">Categoría</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px" id="ev-cats">
            ${["Cultural","Musical","Deportivo","Gastronómico","Tradicional","Naturaleza","Nocturno"].map(a=>`<span class="chip chip-outline chip-selectable">${a}</span>`).join("")}
          </div>
          <div class="input-group"><label class="input-label">Descripción *</label><textarea class="input-field no-icon" rows="3" placeholder="Describe el evento..."></textarea></div>
          <div class="flex-row gap-12">
            <div class="input-group flex-1"><label class="input-label">Fecha</label><input class="input-field no-icon" type="date" /></div>
            <div class="input-group flex-1"><label class="input-label">Hora</label><input class="input-field no-icon" type="time" value="19:00" /></div>
          </div>
          <div class="flex-row" style="justify-content:space-between">
            <span style="font-size:14px;font-weight:600">Cupos máximos</span>
            <div class="stepper"><button class="stepper-btn">−</button><span class="stepper-value" id="ev-cupos">50</span><button class="stepper-btn">+</button></div>
          </div>
          <div class="toggle-wrapper">
            <span style="font-size:14px;font-weight:600">Evento gratuito</span>
            <div class="toggle active" id="ev-free-toggle"></div>
          </div>
          <div id="price-field" class="hidden">
            <div class="input-group"><label class="input-label">Precio</label>
              <div class="input-wrapper"><span class="input-icon">S/</span><input class="input-field" type="number" placeholder="0" /></div>
            </div>
          </div>
          <div class="toggle-wrapper">
            <span style="font-size:14px">Usar dirección de mi negocio</span>
            <div class="toggle active"></div>
          </div>
          <div class="input-group"><label class="input-label">Requisitos <span style="color:var(--text-secondary)">(opcional)</span></label>
            <textarea class="input-field no-icon" rows="2" placeholder="Ej: Ropa deportiva, edad mínima..."></textarea>
          </div>
          <div class="photo-slot" style="width:100%;height:120px" id="ev-photo">${e("camera",24)}<small>Imagen del evento</small></div>
        </div>
        <div class="info-box info-yellow mt-16 mb-16"><span style="display:flex;align-items:center">${e("info",16)}</span><span style="flex:1">Tu evento será revisado por el equipo antes de ser publicado. Esto puede tomar hasta 24 horas.</span></div>
        <button class="btn btn-primary" id="btn-submit">Publicar evento</button>
      </div>
    </div>
  `,G(),document.getElementById("btn-back").onclick=()=>E("/biz-dashboard"),document.querySelectorAll("#ev-cats .chip").forEach(a=>a.onclick=()=>{document.querySelectorAll("#ev-cats .chip").forEach(t=>t.classList.remove("chip-active")),a.classList.add("chip-active")}),document.getElementById("ev-free-toggle").onclick=function(){this.classList.toggle("active"),i=this.classList.contains("active"),document.getElementById("price-field").classList.toggle("hidden",i)},document.getElementById("ev-photo").onclick=function(){this.classList.add("filled"),this.innerHTML='<img src="https://picsum.photos/seed/newevent/400/200" /><button class="remove-photo">✕</button>'},document.querySelectorAll(".stepper-btn").forEach(a=>{a.onclick=()=>{const t=document.getElementById("ev-cupos");let n=parseInt(t.textContent);a.textContent==="+"?n+=10:n=Math.max(10,n-10),t.textContent=n}}),document.getElementById("btn-submit").onclick=()=>{f(e("check",16)+" Evento enviado para revisión"),E("/biz-dashboard")},A()}function Jt(){const p=document.getElementById("app");p.innerHTML=`
    <div class="screen" style="padding-bottom:12px">
      <div class="appbar">
        <button class="appbar-btn" id="btn-back">←</button>
        <span class="appbar-title">Mis promociones</span>
        <div style="width:36px"></div>
      </div>
      <div class="screen-content" style="padding-bottom:48px">
        <div style="padding:16px;background:var(--orange-light);border-bottom:1px solid var(--border-light);margin-bottom:12px">
          <div style="font-weight:700;color:var(--orange);margin-bottom:4px;display:flex;align-items:center;gap:6px">${e("zap",18)} Oferta Relámpago (Flash Deal)</div>
          <p style="font-size:12px;margin-bottom:12px;color:var(--text-secondary)">Envía una notificación push a turistas cercanos ahora mismo.</p>
          <button class="btn btn-primary btn-sm" id="btn-flash-deal" style="background:var(--orange);border:none;display:flex;align-items:center;gap:6px">${e("bell",16)} Enviar alerta Flash</button>
        </div>
        <div class="flex-col gap-12" style="padding:0 var(--pad-screen)">
          ${ke.map((i,a)=>`
            <div class="card p-16 promo-card" data-idx="${a}" style="display:flex;gap:12px;position:relative;cursor:pointer">
              <div style="position:relative;flex-shrink:0"><img src="${i.image}" style="width:80px;height:80px;border-radius:10px;object-fit:cover" />
                <div style="position:absolute;top:4px;left:4px;background:var(--red);color:white;font-size:10px;font-weight:700;padding:2px 6px;border-radius:4px">${i.discount}</div>
              </div>
              <div class="flex-1">
                <div style="font-weight:600;font-size:14px;margin-bottom:2px">${i.title}</div>
                <p style="font-size:12px;margin-bottom:4px">${i.description}</p>
                <small style="color:var(--text-secondary);display:flex;align-items:center;gap:4px">${e("clock",12)} Válida hasta ${i.validUntil}</small>
                <div class="mt-4"><span class="chip chip-green" style="font-size:9px">Activa</span></div>
              </div>
              <button class="appbar-btn promo-menu-btn" data-idx="${a}" style="position:absolute;top:8px;right:8px;font-size:16px">${e("more-vertical",20)}</button>
            </div>
          `).join("")}
        </div>
      </div>
      <button class="fab" id="btn-new-promo" style="bottom: 24px;">+</button>
    </div>
  `,G(),document.getElementById("btn-back").onclick=()=>E("/biz-dashboard"),document.querySelectorAll(".promo-card").forEach(i=>{i.onclick=a=>{if(a.target.closest(".promo-menu-btn"))return;const t=parseInt(i.dataset.idx),n=ke[t];n&&(H(`
        <div style="padding:24px">
          <div style="display:flex;gap:16px;margin-bottom:16px">
            <img src="${n.image}" style="width:100px;height:100px;border-radius:12px;object-fit:cover" />
            <div>
              <h3 style="margin-bottom:4px">${n.title}</h3>
              <div style="font-size:22px;font-weight:700;color:var(--red);margin-bottom:4px">${n.discount}</div>
              <span class="chip chip-green" style="font-size:10px">Activa</span>
            </div>
          </div>
          <p style="font-size:13px;margin-bottom:12px;color:var(--text-secondary)">${n.description}</p>
          <div style="padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:10px;margin-bottom:16px">
            <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="font-size:13px">Válida hasta</span><span style="font-weight:600">${n.validUntil}</span></div>
            <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="font-size:13px">Usos totales</span><span style="font-weight:600">${Math.floor(Math.random()*50)+10}</span></div>
            <div style="display:flex;justify-content:space-between"><span style="font-size:13px">Conversión</span><span style="font-weight:600;color:var(--green-primary)">${Math.floor(Math.random()*30)+15}%</span></div>
          </div>
          <div style="display:flex;gap:8px">
            <button class="btn btn-outline btn-sm flex-1" id="bs-edit-promo" style="display:flex;gap:6px">${e("edit-2",14)} Editar</button>
            <button class="btn btn-outline btn-sm flex-1" id="bs-pause-promo" style="color:var(--orange);border-color:var(--orange);display:flex;gap:6px">${e("pause",14)} Pausar</button>
            <button class="btn btn-outline btn-sm flex-1" id="bs-share-promo" style="display:flex;gap:6px">${e("share-2",14)} Compartir</button>
          </div>
        </div>
      `),A(),document.getElementById("bs-edit-promo").onclick=()=>{M(),f("Abriendo editor de promoción...")},document.getElementById("bs-pause-promo").onclick=()=>{M(),f("Promoción pausada")},document.getElementById("bs-share-promo").onclick=()=>{M(),f("Enlace copiado al portapapeles")})}}),document.querySelectorAll(".promo-menu-btn").forEach(i=>{i.onclick=a=>{a.stopPropagation();const t=parseInt(i.dataset.idx),n=ke[t];n&&(H(`
        <div style="padding:20px">
          <h3 style="margin-bottom:16px">${n.title}</h3>
          <div class="flex-col gap-8">
            <button class="btn btn-outline btn-sm" id="pm-edit" style="width:100%;justify-content:flex-start;text-align:left;gap:8px">${e("edit-2",16)} Editar promoción</button>
            <button class="btn btn-outline btn-sm" id="pm-stats" style="width:100%;justify-content:flex-start;text-align:left;gap:8px">${e("bar-chart-2",16)} Ver estadísticas</button>
            <button class="btn btn-outline btn-sm" id="pm-pause" style="width:100%;justify-content:flex-start;text-align:left;gap:8px;color:var(--orange);border-color:var(--orange)">${e("pause",16)} Pausar promoción</button>
            <button class="btn btn-outline btn-sm" id="pm-share" style="width:100%;justify-content:flex-start;text-align:left;gap:8px">${e("share-2",16)} Compartir enlace</button>
            <button class="btn btn-outline btn-sm" id="pm-delete" style="width:100%;justify-content:flex-start;text-align:left;gap:8px;color:var(--red);border-color:var(--red)">${e("trash-2",16)} Eliminar</button>
          </div>
        </div>
      `),A(),document.getElementById("pm-edit").onclick=()=>{M(),f("Abriendo editor...")},document.getElementById("pm-stats").onclick=()=>{M(),f("Estadísticas: "+Math.floor(Math.random()*50+10)+" usos")},document.getElementById("pm-pause").onclick=()=>{M(),f("Promoción pausada")},document.getElementById("pm-share").onclick=()=>{M(),f("Enlace copiado")},document.getElementById("pm-delete").onclick=()=>{M(),te("Eliminar promoción",'¿Estás seguro de eliminar "'+n.title+'"? Esta acción no se puede deshacer.',[{label:"Cancelar",class:"btn-outline"},{label:"Eliminar",class:"btn-danger",callback:()=>f("Promoción eliminada")}])})}}),document.getElementById("btn-new-promo").onclick=()=>{H(`
      <div style="padding:20px;max-height:80vh;overflow-y:auto">
        <h3 style="margin-bottom:16px">Nueva Promoción Pro</h3>
        <div class="flex-col gap-12">
          <div class="input-group"><label class="input-label">Tipo de Promoción</label>
            <div class="flex-row gap-8 mt-4" style="flex-wrap:wrap">
              <span class="chip chip-active chip-selectable" style="cursor:pointer;display:flex;align-items:center;gap:4px">${e("zap",14)} Flash Sale</span>
              <span class="chip chip-outline chip-selectable" style="cursor:pointer;display:flex;align-items:center;gap:4px">${e("sun",14)} Early Bird</span>
              <span class="chip chip-outline chip-selectable" style="cursor:pointer;display:flex;align-items:center;gap:4px">${e("clock",14)} Happy Hour</span>
              <span class="chip chip-outline chip-selectable" style="cursor:pointer;display:flex;align-items:center;gap:4px">${e("gift",14)} Estándar</span>
            </div>
            <small style="color:var(--text-secondary);margin-top:4px;display:block">Flash Sale: Solo próximas 3h · Early Bird: 15 días antes · Happy Hour: Horas de baja afluencia</small>
          </div>
          <div class="input-group"><label class="input-label">Título</label><input class="input-field no-icon" placeholder="Ej: 2x1 en postres" /></div>
          <div class="input-group"><label class="input-label">Descripción</label><textarea class="input-field no-icon" rows="2" placeholder="Detalles de la oferta..."></textarea></div>
          <div class="input-group"><label class="input-label">Descuento</label><input class="input-field no-icon" placeholder="Ej: -20% o GRATIS" /></div>
          <div class="flex-row gap-12">
            <div class="input-group flex-1"><label class="input-label">Inicio</label><input class="input-field no-icon" type="date" /></div>
            <div class="input-group flex-1"><label class="input-label">Fin</label><input class="input-field no-icon" type="date" /></div>
          </div>
          <div class="input-group">
            <label class="input-label" style="display:flex;align-items:center;gap:6px">${e("target",16)} Segmentación de Audiencia</label>
            <select class="input-field no-icon" style="padding-left:12px">
              <option>Todos los usuarios</option>
              <option>Solo Turistas Extranjeros</option>
              <option>Solo Locales</option>
              <option>Clientes VIP (+3 visitas)</option>
              <option>Nuevos usuarios</option>
            </select>
          </div>
          <div class="input-group">
            <label class="input-label" style="display:flex;align-items:center;gap:6px">${e("hash",16)} Límites de Uso</label>
            <div class="flex-row gap-12">
              <input class="input-field no-icon" type="number" placeholder="Máx. cupones (ej: 50)" style="flex:1" />
              <input class="input-field no-icon" type="number" placeholder="Por usuario (ej: 1)" style="flex:1" />
            </div>
          </div>
          <button class="btn btn-primary" id="btn-submit-promo" style="display:flex;align-items:center;justify-content:center;gap:8px">${e("send",18)} Crear promoción</button>
        </div>
      </div>
    `),A(),document.querySelectorAll("#bottom-sheet .chip-selectable").forEach(i=>i.onclick=()=>{document.querySelectorAll("#bottom-sheet .chip-selectable").forEach(a=>{a.classList.remove("chip-active"),a.classList.add("chip-outline")}),i.classList.add("chip-active"),i.classList.remove("chip-outline")}),document.getElementById("btn-submit-promo").onclick=()=>{M(),f("Promoción creada exitosamente")}},document.getElementById("btn-flash-deal").onclick=()=>{H(`
      <div style="padding:20px">
        <div style="text-align:center;margin-bottom:12px;color:var(--orange)">${e("zap",48)}</div>
        <h3 style="text-align:center;margin-bottom:16px;color:var(--orange)">Enviar Oferta Flash</h3>
        <div class="flex-col gap-12">
          <div class="input-group"><label class="input-label">Mensaje Push</label><textarea class="input-field no-icon" rows="2" placeholder="Ej: ¡2x1 en Pisco Sour por las próximas 2 horas!"></textarea></div>
          <div class="input-group"><label class="input-label">Duración</label>
            <select class="input-field no-icon"><option>1 Hora</option><option>2 Horas</option><option>Hasta el cierre</option></select>
          </div>
          <div class="input-group"><label class="input-label">Alcance (Turistas cercanos)</label>
            <div class="flex-row" style="justify-content:space-between;align-items:center">
              <input type="range" min="1" max="10" value="3" style="width:100%;accent-color:var(--orange)" />
            </div>
            <div style="text-align:center"><small>Radio de 3 km (~140 turistas activos)</small></div>
          </div>
          <div style="height:12px"></div>
          <button class="btn btn-primary" id="btn-send-flash" style="background:var(--orange);border-color:var(--orange);display:flex;gap:8px;align-items:center;justify-content:center">${e("send",18)} Enviar Notificación a 140 personas</button>
        </div>
      </div>
    `),A(),document.getElementById("btn-send-flash").onclick=()=>{M(),f("Oferta Flash enviada a 140 turistas cercanos")}}}function Zt(){var b;const p=document.getElementById("app"),i=((b=j==null?void 0:j.currentUser)==null?void 0:b.bizCategory)||"restaurante",a=[45,72,58,92,68,120,95],t=[12,18,25,22,30,38],n=Math.max(...a),l=Math.max(...t);let o="";switch(i){case"restaurante":o=`
        <!-- Platos Mencionados -->
        <div class="chart-container mb-16">
          <div class="chart-title">${e("message-square",16)} Platos más mencionados en reseñas</div>
          <div class="flex-col gap-12 mt-12">
            ${[{name:"Lomo Saltado",count:45,emoji:"😊"},{name:"Ceviche Mixto",count:32,emoji:"😊"},{name:"Pisco Sour",count:28,emoji:"😐"},{name:"Causa Rellena",count:12,emoji:"☹️"}].map(r=>`
              <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:10px">
                <span style="font-weight:600">${r.name}</span>
                <div style="display:flex;align-items:center;gap:12px">
                  <span style="font-size:12px;color:var(--text-secondary)">${r.count} menciones</span>
                  <span style="font-size:20px">${r.emoji}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
        <!-- Nube de palabras -->
        <div class="chart-container mb-16">
          <div class="chart-title">${e("cloud",16)} Temas frecuentes en reseñas</div>
          <div style="padding:24px;background:var(--surface);border-radius:12px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center;align-items:center">
             <span style="font-size:24px;font-weight:700;color:var(--green-primary)">Sazón excelente</span>
             <span style="font-size:18px;font-weight:600;color:var(--red)">Demora en atención</span>
             <span style="font-size:20px;font-weight:600;color:var(--green-primary)">Porciones grandes</span>
             <span style="font-size:14px;font-weight:500;color:var(--green-primary)">Buen pisco</span>
             <span style="font-size:16px;font-weight:600;color:var(--red)">Música muy alta</span>
             <span style="font-size:22px;font-weight:700;color:var(--green-primary)">Lugar limpio</span>
          </div>
        </div>
      `;break;case"hospedaje":o=`
        <div class="chart-container mb-16">
          <div class="chart-title">${e("bar-chart-2",16)} Ocupación por Tipo de Habitación</div>
          <div class="h-bar-chart mt-12">
            ${[{name:"Suite Mat.",v:85},{name:"Doble",v:60},{name:"Individual",v:45}].map(r=>`
              <div class="h-bar-row">
                <span class="h-bar-label" style="width:80px;font-size:12px">${r.name}</span>
                <div class="h-bar-track"><div class="h-bar-fill" style="width:${r.v}%;background:var(--blue)"></div></div>
                <span class="h-bar-value">${r.v}%</span>
              </div>
            `).join("")}
          </div>
        </div>
        <div class="chart-container mb-16">
          <div class="chart-title">${e("trending-up",16)} Ingreso Promedio x Noche</div>
          <div style="padding:16px;background:var(--bg-body);border-radius:12px;position:relative;height:140px;margin-top:12px">
             <!-- Líneas simuladas -->
             <div style="position:absolute;bottom:0;left:10%;width:80%;height:100%;border-bottom:2px solid var(--border-light);border-left:2px solid var(--border-light)">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,80 L20,60 L40,70 L60,40 L80,50 L100,20" fill="none" stroke="var(--blue)" stroke-width="2"/>
                  <path d="M0,90 L20,80 L40,85 L60,75 L80,80 L100,60" fill="none" stroke="var(--orange)" stroke-width="2" stroke-dasharray="4"/>
                </svg>
             </div>
          </div>
          <div style="display:flex;justify-content:center;gap:16px;margin-top:12px;font-size:11px">
            <span style="display:flex;align-items:center;gap:4px"><div style="width:12px;height:3px;background:var(--blue)"></div> Fines de Semana (S/ 240)</span>
            <span style="display:flex;align-items:center;gap:4px"><div style="width:12px;height:3px;background:var(--orange)"></div> Días de Semana (S/ 160)</span>
          </div>
        </div>
        <div class="chart-container mb-16">
          <div class="chart-title">${e("map",16)} Procedencia de Huéspedes</div>
          <div style="display:flex;gap:16px;margin-top:12px;align-items:center">
             <div style="width:120px;height:160px;background:url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Peru_location_map.svg/1024px-Peru_location_map.svg.png') center/contain no-repeat;opacity:0.8"></div>
             <div style="flex:1" class="flex-col gap-8">
                ${[{l:"Lima",v:45},{l:"Arequipa",v:20},{l:"Cusco",v:15},{l:"Otros",v:20}].map(r=>`
                  <div style="display:flex;justify-content:space-between;font-size:12px">
                    <span style="font-weight:600">${r.l}</span><span>${r.v}%</span>
                  </div>
                  <div style="height:6px;background:var(--border-light);border-radius:4px"><div style="width:${r.v}%;height:100%;background:var(--green-primary);border-radius:4px"></div></div>
                `).join("")}
             </div>
          </div>
        </div>
      `;break;case"guia":o=`
        <div class="chart-container mb-16">
          <div class="chart-title">${e("bar-chart-2",16)} Reservas por Tour</div>
          <div class="h-bar-chart mt-12">
            ${[{name:"Ruta Pisco",v:85},{name:"Buggy",v:120},{name:"City Tour",v:45}].map(r=>`
              <div class="h-bar-row">
                <span class="h-bar-label" style="width:80px;font-size:12px">${r.name}</span>
                <div class="h-bar-track"><div class="h-bar-fill" style="width:${r.v/120*100}%;background:var(--blue)"></div></div>
                <span class="h-bar-value">${r.v}</span>
              </div>
            `).join("")}
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
          <div class="chart-container" style="text-align:center">
            <div class="chart-title">${e("users",16)} Ocupación Prom.</div>
            <div style="font-size:32px;font-weight:800;color:var(--green-primary);margin-top:16px">78%</div>
            <div style="font-size:11px;color:var(--text-secondary)">De cupos disponibles</div>
          </div>
          <div class="chart-container" style="text-align:center">
             <div class="chart-title">${e("pie-chart",16)} Origen</div>
             <div class="donut-container" style="margin-top:16px;justify-content:center">
                <div class="donut" style="width:80px;height:80px;background:conic-gradient(var(--green-primary) 0% 60%, var(--blue) 60% 80%, var(--orange) 80% 100%)"></div>
             </div>
             <div style="font-size:10px;margin-top:8px">60% Nac · 20% Ext · 20% Loc</div>
          </div>
        </div>
        <div class="chart-container mb-16">
          <div class="chart-title">${e("star",16)} Calificaciones Detalladas</div>
          <div class="h-bar-chart mt-12">
            ${[{name:"Conocimiento",v:4.9},{name:"Puntualidad",v:4.5},{name:"Organización",v:4.8},{name:"Calidad-Precio",v:4.6}].map(r=>`
              <div class="h-bar-row">
                <span class="h-bar-label" style="width:90px;font-size:12px">${r.name}</span>
                <div class="h-bar-track"><div class="h-bar-fill" style="width:${r.v/5*100}%;background:var(--orange)"></div></div>
                <span class="h-bar-value" style="font-weight:700">${r.v}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;break;case"movilidad":o=`
        <div class="chart-container mb-16">
          <div class="chart-title">${e("clock",16)} Viajes por Hora del Día</div>
          <div class="bar-chart mt-12">
            ${[5,12,35,20,15,40,65,50].map((r,s)=>`<div class="bar-col"><div class="bar" style="height:${r/65*100}%;background:var(--blue)"></div><span class="bar-label">${s*3}h</span></div>`).join("")}
          </div>
        </div>
        <div class="chart-container mb-16">
          <div class="chart-title">${e("map-pin",16)} Zonas de Alta Demanda</div>
          <div style="height:140px;background:#e8f5e9;border-radius:12px;margin-top:12px;position:relative;overflow:hidden">
             <div style="position:absolute;top:20%;left:30%;width:80px;height:80px;background:rgba(255,0,0,0.4);filter:blur(15px);border-radius:50%"></div>
             <div style="position:absolute;top:50%;left:60%;width:60px;height:60px;background:rgba(255,165,0,0.5);filter:blur(10px);border-radius:50%"></div>
             <div style="position:absolute;bottom:10px;left:10px;font-size:12px;font-weight:700;color:#333;text-shadow:0 0 4px #fff">Centro y Huacachina lideran</div>
          </div>
        </div>
        <div class="chart-container mb-16">
          <div class="chart-title">${e("award",16)} Ranking de Conductores</div>
          <div style="display:flex;overflow-x:auto;gap:12px;padding:12px 0">
             ${[{n:"Juan P.",v:120,s:4.9},{n:"Carlos M.",v:95,s:4.8},{n:"Luis R.",v:80,s:4.6}].map((r,s)=>`
               <div style="min-width:120px;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px;text-align:center">
                 <div style="font-size:16px;font-weight:700;color:var(--orange)">#${s+1}</div>
                 <div style="width:40px;height:40px;border-radius:50%;background:#ccc;margin:8px auto"></div>
                 <div style="font-weight:600;font-size:13px">${r.n}</div>
                 <div style="font-size:11px;color:var(--text-secondary)">${r.v} viajes</div>
                 <div style="font-size:11px;color:var(--text-secondary);display:flex;align-items:center;justify-content:center;gap:2px">${r.s} ${e("star",10,"text-green")}</div>
               </div>
             `).join("")}
          </div>
        </div>
      `;break;case"entretenimiento":o=`
        <div class="chart-container mb-16">
          <div class="chart-title">${e("bar-chart-2",16)} Asistencia por Noche</div>
          <div class="bar-chart mt-12">
            ${[85,120,60,90,110,180,200].map((r,s)=>`<div class="bar-col"><div class="bar" style="height:${r/200*100}%;background:${r>150?"var(--orange)":"var(--blue)"}" data-value="${r}"></div><span class="bar-label">${["L","M","X","J","V","S","D"][s]}</span></div>`).join("")}
          </div>
        </div>
        <div class="chart-container mb-16">
          <div class="chart-title">${e("trending-up",16)} Venta de Entradas por Evento</div>
          <div class="h-bar-chart mt-12">
            ${[{name:"DJ Noche Latina",v:156},{name:"Viernes Retro",v:120},{name:"Stand Up Comedy",v:89}].map(r=>`
              <div class="h-bar-row"><span class="h-bar-label" style="width:100px;font-size:12px">${r.name}</span><div class="h-bar-track"><div class="h-bar-fill" style="width:${r.v/156*100}%;background:var(--orange)"></div></div><span class="h-bar-value">${r.v}</span></div>
            `).join("")}
          </div>
        </div>
        <div class="chart-container mb-16">
          <div class="chart-title">${e("star",16)} Bebidas Más Pedidas</div>
          <div class="flex-col gap-8 mt-12">${[{name:"Pisco Sour Especial",count:89},{name:"Chilcano Maracuyá",count:67},{name:"Mojito Iqueño",count:54},{name:"Cerveza Artesanal",count:48}].map((r,s)=>`
            <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--surface);border:1px solid var(--border-light);border-radius:8px">
              <span style="font-weight:700;color:var(--orange);width:24px">#${s+1}</span><span style="flex:1;font-weight:600;font-size:13px">${r.name}</span><span style="font-size:12px;color:var(--text-secondary)">${r.count} pedidos</span>
            </div>
          `).join("")}</div>
        </div>
      `;break;case"tienda":o=`
        <div class="chart-container mb-16">
          <div class="chart-title">${e("eye",16)} Visitas al Perfil</div>
          <div class="line-chart">
            ${a.map(r=>`<div class="chart-point" data-value="${r}" style="height:${r/n*100}%;background:var(--green-primary);border-radius:3px"></div>`).join("")}
          </div>
          <div class="flex-row" style="justify-content:space-between;margin-top:4px">${["L","M","M","J","V","S","D"].map(r=>`<small style="flex:1;text-align:center;font-size:9px;color:var(--text-secondary)">${r}</small>`).join("")}</div>
        </div>
        <div class="chart-container mb-16">
          <div class="chart-title">${e("shopping-bag",16)} Categorías Más Vendidas</div>
          <div class="h-bar-chart mt-12">
            ${[{name:"Cerámica",v:32},{name:"Tejidos",v:24},{name:"Pisco",v:18},{name:"Réplicas",v:12}].map(r=>`
              <div class="h-bar-row"><span class="h-bar-label" style="width:80px;font-size:12px">${r.name}</span><div class="h-bar-track"><div class="h-bar-fill" style="width:${r.v/32*100}%;background:var(--green-primary)"></div></div><span class="h-bar-value">${r.v}</span></div>
            `).join("")}
          </div>
        </div>
        <div class="chart-container mb-16">
          <div class="chart-title">${e("package",16)} Pedidos Mensuales</div>
          <div class="bar-chart">
            ${t.map((r,s)=>`<div class="bar-col"><div class="bar" style="height:${r/l*100}%;background:var(--blue)" data-value="${r}"></div><span class="bar-label">${["Ene","Feb","Mar","Abr","May","Jun"][s]}</span></div>`).join("")}
          </div>
        </div>
        <div class="chart-container mb-16">
          <div class="chart-title">${e("award",16)} Productos Más Guardados</div>
          <div class="flex-col gap-8 mt-12">${[{name:"Vasija Nazca Ceremonial",saves:45},{name:"Textil Paracas Bordado",saves:38},{name:"Set de Pisco Artesanal",saves:29}].map((r,s)=>`
            <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--surface);border:1px solid var(--border-light);border-radius:8px">
              <span style="font-weight:700;color:var(--orange);width:24px">#${s+1}</span><span style="flex:1;font-weight:600;font-size:13px">${r.name}</span><span style="font-size:12px;color:var(--text-secondary)">${r.saves} guardados</span>
            </div>
          `).join("")}</div>
        </div>
      `;break;case"salud":o=`
        <div class="chart-container mb-16">
          <div class="chart-title">${e("calendar",16)} Citas por Día de la Semana</div>
          <div class="bar-chart mt-12">
            ${[18,22,20,24,16,8,4].map((r,s)=>`<div class="bar-col"><div class="bar" style="height:${r/24*100}%;background:var(--blue)" data-value="${r}"></div><span class="bar-label">${["L","M","X","J","V","S","D"][s]}</span></div>`).join("")}
          </div>
        </div>
        <div class="chart-container mb-16">
          <div class="chart-title">${e("activity",16)} Citas por Especialidad</div>
          <div class="h-bar-chart mt-12">
            ${[{name:"Dermatología",v:45},{name:"Pediatría",v:32},{name:"Medicina Gral.",v:28},{name:"Cardiología",v:15}].map(r=>`
              <div class="h-bar-row"><span class="h-bar-label" style="width:90px;font-size:12px">${r.name}</span><div class="h-bar-track"><div class="h-bar-fill" style="width:${r.v/45*100}%;background:var(--blue)"></div></div><span class="h-bar-value">${r.v}</span></div>
            `).join("")}
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
          <div class="chart-container" style="text-align:center">
            <div class="chart-title">${e("clock",16)} Tiempo Promedio</div>
            <div style="font-size:32px;font-weight:800;color:var(--blue);margin-top:16px">22min</div>
            <div style="font-size:11px;color:var(--text-secondary)">Por consulta</div>
          </div>
          <div class="chart-container" style="text-align:center">
            <div class="chart-title">${e("check-circle",16)} Tasa Asistencia</div>
            <div style="font-size:32px;font-weight:800;color:var(--green-primary);margin-top:16px">87%</div>
            <div style="font-size:11px;color:var(--text-secondary)">Pacientes que asisten</div>
          </div>
        </div>
        <div class="chart-container mb-16">
          <div class="chart-title">${e("search",16)} Medicamentos Más Buscados</div>
          <div class="flex-col gap-8 mt-12">${[{name:"Paracetamol 500mg",count:89},{name:"Ibuprofeno 400mg",count:56},{name:"Amoxicilina 500mg",count:34},{name:"Omeprazol 20mg",count:28}].map((r,s)=>`
            <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--surface);border:1px solid var(--border-light);border-radius:8px">
              <span style="font-weight:700;color:var(--blue);width:24px">#${s+1}</span><span style="flex:1;font-weight:600;font-size:13px">${r.name}</span><span style="font-size:12px;color:var(--text-secondary)">${r.count} búsquedas</span>
            </div>
          `).join("")}</div>
        </div>
      `;break;default:o=`
        <div class="chart-container mb-16">
          <div class="chart-title">Visitas al perfil</div>
          <div class="line-chart">
            ${a.map(r=>`<div class="chart-point" data-value="${r}" style="height:${r/n*100}%;background:var(--green-primary);border-radius:3px"></div>`).join("")}
          </div>
          <div class="flex-row" style="justify-content:space-between;margin-top:4px">${["L","M","M","J","V","S","D"].map(r=>`<small style="flex:1;text-align:center;font-size:9px;color:var(--text-secondary)">${r}</small>`).join("")}</div>
        </div>
      `;break}p.innerHTML=`
    <div class="screen" style="padding-bottom:12px">
      <div class="appbar">
        <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
        <span class="appbar-title">Analíticas</span>
        <div style="width:36px"></div>
      </div>
      <div class="filter-chips">
        ${["Última semana","Último mes","Últimos 3 meses","Este año"].map((r,s)=>`<span class="chip ${s===0?"chip-active":"chip-outline"} chip-selectable">${r}</span>`).join("")}
      </div>
      <div class="screen-content" style="padding-bottom:12px">

        <!-- ═══ CONVERSION FUNNEL (Global) ═══ -->
        <div class="chart-container mb-16">
          <div class="chart-title">${e("filter",16)} Embudo de Conversión</div>
          <div class="flex-col gap-8 mt-8">
            ${[{label:"Vieron el perfil",value:2840,pct:100,color:"#004D40"},{label:"Clic en fotos",value:1420,pct:50,color:"#00695C"},{label:"Interacción",value:568,pct:20,color:"#00796B"},{label:"Conversión final",value:284,pct:10,color:"#00897B"}].map(r=>`
              <div>
                <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
                  <span>${r.label}</span>
                  <span style="font-weight:700">${r.value.toLocaleString()} <small style="color:var(--text-secondary)">(${r.pct}%)</small></span>
                </div>
                <div style="height:24px;background:#eee;border-radius:6px;overflow:hidden">
                  <div style="height:100%;width:${r.pct}%;background:${r.color};border-radius:6px;display:flex;align-items:center;padding-left:8px;color:white;font-size:11px;font-weight:600"></div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- ═══ CUSTOM MÓDULOS DE CATEGORÍA ═══ -->
        ${o}

      </div>
    </div>
  `,W("/biz-analytics","business"),A(),document.getElementById("btn-back").onclick=()=>E("/biz-dashboard"),document.querySelectorAll(".chip-selectable").forEach(r=>r.onclick=()=>{document.querySelectorAll(".chip-selectable").forEach(s=>s.classList.remove("chip-active")),r.classList.add("chip-active")})}function Xt(){const p=document.getElementById("app");p.innerHTML=`
    <div class="screen">
      <div class="appbar" style="background:var(--blue);color:white">
        <div class="appbar-title" style="margin-left:8px;display:flex;align-items:center;gap:8px">${e("shield",20)} Administrador</div>
        <div style="display:flex;gap:8px">
          <button class="appbar-btn" id="btn-admin-search" style="color:white">${e("search",24)}</button>
        </div>
      </div>
      
      <div class="screen-content" style="padding-bottom:100px;background:var(--bg-body)">
        <div style="background:var(--blue);padding:24px 16px 40px;color:white;border-radius:0 0 24px 24px">
          <div style="font-size:24px;font-weight:800;margin-bottom:4px">Hola, Admin</div>
          <div style="font-size:14px;opacity:0.9">Todo está funcionando correctamente.</div>
        </div>

        <div style="padding:0 16px;margin-top:-20px;position:relative;z-index:2;margin-bottom:24px">
          <div class="card-flat" style="padding:16px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 8px 16px rgba(0,0,0,0.05);gap:16px;overflow-x:auto">
            <div style="flex:1;min-width:100px">
              <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px;white-space:nowrap">Reportes Pendientes</div>
              <div style="font-size:20px;font-weight:700;color:var(--red);display:flex;align-items:center;gap:6px">
                3
                <span class="chip" style="background:#FFEBEE;color:var(--red);font-size:9px;padding:2px 4px">Crítico</span>
              </div>
            </div>
            <div style="width:1px;height:40px;background:var(--border-light);flex-shrink:0"></div>
            <div style="flex:1;min-width:100px">
              <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px;white-space:nowrap">Negocios Nuevos</div>
              <div style="font-size:20px;font-weight:700;color:var(--green-primary);display:flex;align-items:center;gap:6px">
                8
                <span class="chip" style="background:var(--green-bg-light);color:var(--green-primary);font-size:9px;padding:2px 4px">Revisar</span>
              </div>
            </div>
            <div style="width:1px;height:40px;background:var(--border-light);flex-shrink:0"></div>
            <div style="flex:1;min-width:100px">
              <div style="font-size:11px;color:var(--text-secondary);margin-bottom:4px;white-space:nowrap">Secretos Activos</div>
              <div style="font-size:20px;font-weight:700;color:var(--gold-dark);display:flex;align-items:center;gap:6px">
                42
                <span class="chip chip-gold" style="font-size:9px;padding:2px 4px">${e("eye-off",10)}</span>
              </div>
            </div>
          </div>
        </div>

        <div style="padding:0 16px">
          <h3 style="font-size:16px;margin-bottom:16px;display:flex;align-items:center;gap:6px">${e("grid",18)} Panel Central</h3>
          
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
            <div class="card-flat hub-btn" id="btn-adm-places" style="padding:20px 16px;text-align:center;cursor:pointer;transition:transform 0.2s;display:flex;flex-direction:column;align-items:center;gap:12px">
              <div style="width:48px;height:48px;border-radius:12px;background:var(--green-bg-light);color:var(--green-primary);display:flex;align-items:center;justify-content:center">
                ${e("map",24)}
              </div>
              <div>
                <div style="font-weight:600;font-size:14px;margin-bottom:4px">Lugares y PDIs</div>
                <div style="font-size:11px;color:var(--text-secondary)">Gestión de negocios y atracciones</div>
              </div>
            </div>
            
            <div class="card-flat hub-btn" id="btn-adm-users" style="padding:20px 16px;text-align:center;cursor:pointer;transition:transform 0.2s;display:flex;flex-direction:column;align-items:center;gap:12px">
              <div style="width:48px;height:48px;border-radius:12px;background:var(--blue-light);color:var(--blue);display:flex;align-items:center;justify-content:center">
                ${e("users",24)}
              </div>
              <div>
                <div style="font-weight:600;font-size:14px;margin-bottom:4px">Usuarios</div>
                <div style="font-size:11px;color:var(--text-secondary)">Turistas y Creadores de Contenido</div>
              </div>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr;gap:12px;margin-bottom:24px">
             <div class="card-flat hub-btn" id="btn-adm-reports" style="padding:16px;cursor:pointer;transition:transform 0.2s;display:flex;align-items:center;gap:16px">
              <div style="width:40px;height:40px;border-radius:10px;background:#FFEBEE;color:var(--red);display:flex;align-items:center;justify-content:center;flex-shrink:0">
                ${e("alert-triangle",20)}
              </div>
              <div style="flex:1">
                <div style="font-weight:600;font-size:14px;margin-bottom:2px">Moderación y Reportes</div>
                <div style="font-size:11px;color:var(--text-secondary)">Reseñas marcadas, tickets y soporte</div>
              </div>
              <div style="color:var(--text-secondary)">${e("chevron-right",20)}</div>
            </div>
            
            <div class="card-flat hub-btn" id="btn-adm-stats" style="padding:16px;cursor:pointer;transition:transform 0.2s;display:flex;align-items:center;gap:16px">
              <div style="width:40px;height:40px;border-radius:10px;background:var(--orange-light);color:var(--orange);display:flex;align-items:center;justify-content:center;flex-shrink:0">
                ${e("pie-chart",20)}
              </div>
              <div style="flex:1">
                <div style="font-weight:600;font-size:14px;margin-bottom:2px">Métricas y Analíticas</div>
                <div style="font-size:11px;color:var(--text-secondary)">Crecimiento, ingresos y actividad</div>
              </div>
              <div style="color:var(--text-secondary)">${e("chevron-right",20)}</div>
            </div>

            <div class="card-flat hub-btn" id="btn-adm-audit" style="padding:16px;cursor:pointer;transition:transform 0.2s;display:flex;align-items:center;gap:16px">
              <div style="width:40px;height:40px;border-radius:10px;background:#E1BEE7;color:#8E24AA;display:flex;align-items:center;justify-content:center;flex-shrink:0">
                ${e("clipboard",20)}
              </div>
              <div style="flex:1">
                <div style="font-weight:600;font-size:14px;margin-bottom:2px">Registro de Auditoría</div>
                <div style="font-size:11px;color:var(--text-secondary)">Historial de acciones del sistema</div>
              </div>
              <div style="color:var(--text-secondary)">${e("chevron-right",20)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,W("/admin-dashboard","admin"),A(),document.getElementById("btn-admin-search").onclick=()=>f("Búsqueda global admin"),document.getElementById("btn-adm-places").onclick=()=>E("/admin-places"),document.getElementById("btn-adm-users").onclick=()=>E("/admin-users"),document.getElementById("btn-adm-reports").onclick=()=>E("/admin-reports"),document.getElementById("btn-adm-stats").onclick=()=>E("/admin-stats"),document.getElementById("btn-adm-audit").onclick=()=>E("/admin-audit")}function Wt(){const p=document.getElementById("app");p.innerHTML=`
    <div class="screen" style="padding-bottom:12px; background:var(--bg-body)">
      <div class="appbar" style="background:var(--surface);border-bottom:1px solid var(--border-light);position:sticky;top:0;z-index:10">
        <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
        <span class="appbar-title" style="font-weight:700">Ajustes del Sistema</span>
        <div style="width:36px"></div>
      </div>
      <div class="screen-content" style="padding:20px;padding-bottom:100px;max-width:800px;margin:0 auto">
        <!-- Categories -->
        <div class="form-section-title" style="display:flex;align-items:center;gap:8px;font-size:16px;color:var(--text-primary);margin-bottom:16px">
          ${e("map-pin",18,"text-blue")} Categorías de lugares
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:32px">
          ${["Gastronomía","Aventura","Naturaleza","Cultura","Historia","Hospedaje","Vida nocturna","Transporte","Servicios"].map(n=>`<span class="chip chip-active chip-selectable" style="padding:6px 32px 6px 16px;position:relative;background:#f0f4f8;border:1px solid var(--border-light);color:var(--text-primary)">
              ${n}
              <span style="position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer;color:var(--text-secondary)" onclick="this.parentElement.style.display='none'">
                ${e("x",14)}
              </span>
            </span>`).join("")}
          <span class="chip chip-outline cursor-pointer" id="btn-add-cat" style="padding:6px 16px;border-style:dashed;color:var(--text-secondary);display:flex;align-items:center;gap:6px">
            ${e("plus",14)} Agregar
          </span>
        </div>

        <!-- Event Categories -->
        <div class="form-section-title" style="display:flex;align-items:center;gap:8px;font-size:16px;color:var(--text-primary);margin-bottom:16px">
          ${e("calendar",18,"text-purple")} Categorías de eventos
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:32px">
          ${["Cultural","Musical","Deportivo","Gastronómico","Tradicional","Naturaleza","Nocturno"].map(n=>`<span class="chip chip-active chip-selectable" style="padding:6px 32px 6px 16px;position:relative;background:#f0f4f8;border:1px solid var(--border-light);color:var(--text-primary)">
              ${n}
              <span style="position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer;color:var(--text-secondary)" onclick="this.parentElement.style.display='none'">
                ${e("x",14)}
              </span>
            </span>`).join("")}
          <span class="chip chip-outline cursor-pointer" id="btn-add-cat-ev" style="padding:6px 16px;border-style:dashed;color:var(--text-secondary);display:flex;align-items:center;gap:6px">
            ${e("plus",14)} Agregar
          </span>
        </div>

        <!-- Platform Settings -->
        <div class="form-section-title" style="display:flex;align-items:center;gap:8px;font-size:16px;color:var(--text-primary);margin-bottom:16px">
          ${e("settings",18,"text-secondary")} Configuración general
        </div>
        <div class="flex-col gap-12 mb-32" style="background:var(--surface);padding:16px;border-radius:16px;border:1px solid var(--border-light);box-shadow:0 2px 8px rgba(0,0,0,0.02)">
          ${[{label:"Registro de usuarios",desc:"Permitir nuevos registros",active:!0},{label:"Registro de negocios",desc:"Permitir registro de negocios",active:!0},{label:"Publicación de reels",desc:"Usuarios pueden publicar reels",active:!0},{label:"Publicación de lugares",desc:"Usuarios pueden sugerir nuevos lugares",active:!0},{label:"Reservas",desc:"Habilitar sistema de reservas",active:!0},{label:"Validación comunitaria",desc:"Sistema de validación de seguridad por usuarios",active:!1},{label:"Modo mantenimiento",desc:"Desactivar acceso público a la app",active:!1}].map((n,l)=>`
            <div class="toggle-wrapper" style="padding:12px 0;border-bottom:1px solid var(--border-light)">
              <div><div style="font-weight:600;font-size:14px;color:var(--text-primary)">${n.label}</div><small style="color:var(--text-secondary);font-size:12px">${n.desc}</small></div>
              <div class="toggle ${n.active?"active":""}"></div>
            </div>
          `).join("")}
          <div style="padding:12px 0">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
              <div>
                <div style="font-weight:600;font-size:14px;color:var(--text-primary);display:flex;align-items:center;gap:6px">${e("eye-off",14,"color:var(--gold)")} Validaciones para Lugares Ocultos</div>
                <small style="color:var(--text-secondary);font-size:12px">Meta comunitaria para verificar un secreto</small>
              </div>
              <div style="font-weight:700;color:var(--gold-dark);font-size:16px" id="val-slider-value">15</div>
            </div>
            <input type="range" id="val-slider" min="10" max="50" value="15" style="width:100%;accent-color:var(--gold)" />
            <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-secondary);margin-top:4px">
              <span>10</span>
              <span>50</span>
            </div>
          </div>
        </div>

        <!-- Content Moderation -->
        <div class="form-section-title" style="display:flex;align-items:center;gap:8px;font-size:16px;color:var(--text-primary);margin-bottom:16px">
          ${e("shield",18,"text-green")} Moderación de contenido
        </div>
        <div class="flex-col gap-12 mb-32">
          <div class="card-flat p-16" style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div class="toggle-wrapper"><div><div style="font-weight:600;font-size:14px;color:var(--text-primary)">Aprobación manual de lugares</div><small style="color:var(--text-secondary);font-size:12px">Los lugares nuevos deben ser aprobados por un admin</small></div><div class="toggle active"></div></div>
          </div>
          <div class="card-flat p-16" style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div class="toggle-wrapper"><div><div style="font-weight:600;font-size:14px;color:var(--text-primary)">Aprobación manual de eventos</div><small style="color:var(--text-secondary);font-size:12px">Los eventos nuevos deben ser aprobados</small></div><div class="toggle active"></div></div>
          </div>
          <div class="card-flat p-16" style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div class="toggle-wrapper"><div><div style="font-weight:600;font-size:14px;color:var(--text-primary)">Filtro anti-spam y ofensas</div><small style="color:var(--text-secondary);font-size:12px">Detectar y ocultar comentarios ofensivos automáticamente</small></div><div class="toggle active"></div></div>
          </div>
        </div>

        <!-- Danger zone -->
        <div class="form-section-title" style="display:flex;align-items:center;gap:8px;font-size:16px;color:var(--red);margin-bottom:16px">
          ${e("alert-triangle",18)} Zona de peligro
        </div>
        <div class="card p-20" style="border:1px solid var(--red-light);background:#fffbfa">
          <div style="font-weight:700;font-size:15px;color:var(--red);margin-bottom:8px">Reiniciar base de datos</div>
          <small style="display:block;margin-bottom:16px;color:var(--text-secondary);line-height:1.4">Esta acción purgará todos los datos generados por usuarios y restaurará la base de datos a su estado inicial de demostración. Esta acción es irreversible y afectará a todos los usuarios activos actualmente en la aplicación.</small>
          <button class="btn btn-danger btn-sm" id="btn-reset" style="padding:10px 20px;display:inline-flex;align-items:center;gap:8px">
            ${e("refresh-cw",16)} Proceder con Reinicio
          </button>
        </div>

        <!-- Logout -->
        <div style="height:32px"></div>
        <button class="btn btn-outline" style="border-color:var(--border-light);color:var(--text-secondary);width:100%;padding:14px;font-weight:600;background:var(--surface);display:flex;justify-content:center;gap:8px" id="btn-logout">
          ${e("log-out",18)} Cerrar Sesión de Administrador
        </button>
      </div>
    </div>
  `,W("/admin-config","admin"),A(),document.getElementById("btn-back").onclick=()=>E("/admin-dashboard"),document.querySelectorAll(".toggle").forEach(n=>{n.onclick=function(){this.classList.toggle("active");const l=this.classList.contains("active")?"Activado":"Desactivado";f("Configuración actualizada: "+l)}}),document.getElementById("btn-reset").onclick=()=>{te("Purgar Base de Datos","¿Estás absolutamente seguro? Esta acción borrará todas las cuentas de usuario, lugares creados y reportes, restaurando el sistema a cero.",[{label:"Cancelar",class:"btn-outline"},{label:"Sí, Purgar",class:"btn-danger",callback:()=>f("Base de datos reiniciada con éxito")}])},document.getElementById("btn-logout").onclick=()=>{te("Cerrar sesión segura","¿Deseas cerrar la sesión administrativa actual?",[{label:"Cancelar",class:"btn-outline"},{label:"Cerrar sesión",class:"btn-danger",callback:()=>{Me(),E("/welcome")}}])},document.getElementById("btn-add-cat").onclick=()=>f("Añadir nueva categoría de lugar...");const i=document.getElementById("btn-add-cat-ev");i&&(i.onclick=()=>f("Añadir nueva categoría de evento..."));const a=document.getElementById("val-slider"),t=document.getElementById("val-slider-value");a&&t&&(a.oninput=n=>{t.textContent=n.target.value},a.onchange=n=>{f(e("check",16)+" Meta comunitaria actualizada a "+n.target.value)})}function Y(p,i,a=!1,t="#004D40"){return`
    <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid var(--border-light)">
      <span style="font-size:15px">${p}</span>
      <label style="position:relative;width:44px;height:24px;cursor:pointer">
        <input type="checkbox" id="${i}" ${a?"checked":""} style="opacity:0;width:0;height:0">
        <span style="position:absolute;inset:0;border-radius:12px;background:${a?t:"#DADCE0"};transition:0.3s"></span>
        <span style="position:absolute;top:2px;${a?"right:2px":"left:2px"};width:20px;height:20px;border-radius:50%;background:white;transition:0.3s;box-shadow:0 1px 3px rgba(0,0,0,0.2)"></span>
      </label>
    </div>`}function Z(p,i){return`<div style="display:flex;align-items:center;gap:8px;margin:24px 0 12px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text-secondary)">${e(p,16)} ${i}</div>`}function Qt(p,i=[]){return`<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px">${p.map((a,t)=>`<span class="chip ${i.includes(t)?"chip-active":"chip-outline"} chip-selectable" style="cursor:pointer">${a}</span>`).join("")}</div>`}function Yt(p){const i=document.getElementById("app"),a=p.type||"general",n={"edit-profile":{title:"Editar Perfil",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div style="text-align:center;margin-bottom:16px">
            <div style="background:var(--green-primary);width:90px;height:90px;border-radius:50%;margin:0 auto;display:flex;align-items:center;justify-content:center;color:white;font-size:36px;box-shadow:0 4px 12px rgba(0,100,60,0.3)">MG</div>
            <button class="btn btn-outline btn-sm mt-12" style="gap:6px">${e("camera",14)} Cambiar foto</button>
          </div>
          ${Z("user","Información personal")}
          <div class="input-group"><label class="label">Nombre completo</label><input type="text" class="input" value="Mariana García" /></div>
          <div class="input-group"><label class="label">Nombre de usuario</label><input type="text" class="input" value="@mariana_garcia" /></div>
          <div class="input-group"><label class="label">Biografía corta</label><textarea class="input" rows="2">Aventurera y amante de la naturaleza</textarea></div>
          <div class="input-group"><label class="label">Fecha de nacimiento</label><input type="date" class="input" value="1995-06-14" /></div>
          <div class="input-group">
            <label class="label">Número de teléfono</label>
            <div style="display:flex;gap:8px;align-items:center">
              <input type="tel" class="input" value="+51 956 789 012" style="flex:1" />
              <span class="chip chip-green" style="font-size:10px;white-space:nowrap">${e("check-circle",12)} Verificado</span>
            </div>
          </div>
          <button class="btn btn-primary" id="btn-save-profile">${e("save",16)} Guardar cambios</button>
        </div>`},identity:{title:"Verificación de Identidad",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div style="text-align:center;padding:32px 16px;background:var(--bg-body);border-radius:16px;border:1px solid var(--border-light)">
            <div style="width:64px;height:64px;border-radius:50%;background:#e8f5e9;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;color:var(--green-primary)">${e("shield-check",32)}</div>
            <h3 style="margin-bottom:4px">Cuenta Verificada</h3>
            <p style="font-size:13px;color:var(--text-secondary)">Tu identidad fue verificada el 10/01/2026</p>
          </div>
          ${Z("file-text","Documento de identidad")}
          <div style="padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px;display:flex;align-items:center;gap:12px">
            <div style="width:48px;height:48px;border-radius:8px;background:#e3f2fd;display:flex;align-items:center;justify-content:center;color:var(--blue)">${e("credit-card",24)}</div>
            <div style="flex:1"><div style="font-weight:600">DNI (Perú)</div><div style="font-size:12px;color:var(--text-secondary)">Subido el 10/01/2026</div></div>
            <span class="chip chip-green" style="font-size:10px">Aprobado</span>
          </div>
          <p style="font-size:12px;color:var(--text-secondary)">La verificación es necesaria para reservas de hoteles y alquiler de vehículos.</p>
          <button class="btn btn-outline">${e("upload",16)} Actualizar documento</button>
          ${Z("passport","Pasaporte (Opcional)")}
          <div style="padding:24px;border:2px dashed var(--border-light);border-radius:12px;text-align:center;color:var(--text-secondary)">
            <div style="margin-bottom:8px">${e("upload-cloud",32)}</div>
            <p style="font-size:13px">Arrastra o selecciona tu pasaporte</p>
            <button class="btn btn-outline btn-sm mt-12">${e("file-plus",14)} Subir archivo</button>
          </div>
        </div>`},security:{title:"Seguridad",html:`
        <div class="flex-col gap-4" style="padding:24px">
          ${Z("lock","Contraseña")}
          <div class="input-group"><label class="label">Contraseña actual</label><input type="password" class="input" value="••••••••" /></div>
          <div class="input-group"><label class="label">Nueva contraseña</label><input type="password" class="input" placeholder="Mínimo 8 caracteres" /></div>
          <div class="input-group"><label class="label">Confirmar contraseña</label><input type="password" class="input" placeholder="Repite tu nueva contraseña" /></div>
          <button class="btn btn-primary btn-sm mt-8" id="btn-change-pass">${e("key",14)} Cambiar contraseña</button>

          ${Z("fingerprint","Autenticación biométrica")}
          ${Y("FaceID / Reconocimiento facial","bio-face",!0)}
          ${Y("Huella dactilar al abrir la app","bio-finger",!0)}
          ${Y("Biométrica al realizar pagos","bio-pay",!1)}

          ${Z("smartphone","Dispositivos vinculados")}
          <div class="flex-col gap-8 mt-8">
            ${[{device:"iPhone 15 Pro",loc:"Ica, Perú",active:!0,icon:"smartphone"},{device:"MacBook Air M2",loc:"Lima, Perú",active:!1,icon:"laptop"},{device:"iPad Air",loc:"Arequipa, Perú",active:!1,icon:"tablet"}].map(c=>`
              <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
                <div style="width:40px;height:40px;border-radius:10px;background:#f5f5f5;display:flex;align-items:center;justify-content:center">${e(c.icon,20)}</div>
                <div style="flex:1"><div style="font-weight:600;font-size:14px">${c.device}</div><div style="font-size:12px;color:var(--text-secondary)">${c.loc} ${c.active?"· Sesión actual":""}</div></div>
                ${c.active?'<span class="chip chip-green" style="font-size:10px">Activo</span>':""}
              </div>
            `).join("")}
          </div>
          <button class="btn btn-outline mt-12" style="color:var(--red);border-color:var(--red)" id="btn-close-sessions">${e("log-out",14)} Cerrar todas las sesiones</button>
        </div>`},preferences:{title:"Preferencias",html:`
        <div class="flex-col gap-4" style="padding:24px">
          ${Z("heart","Preferencias de contenido")}
          <p style="font-size:13px;color:var(--text-secondary);margin-bottom:8px">Selecciona tus intereses para personalizar tus recomendaciones:</p>
          ${Qt(["Solo comida vegana","Turismo extremo","Pet-friendly","Cultura e Historia","Gastronomía","Vida nocturna","Familiar","Accesible","Instagrameable","Económico","Premium/Lujo","Playas y naturaleza"],[0,4,6,11])}

          ${Z("coins","Unidades y formatos")}
          <div class="input-group"><label class="label">Moneda preferida</label>
            <select class="input"><option selected>PEN (Sol peruano)</option><option>USD (Dólar)</option><option>EUR (Euro)</option></select>
          </div>
          <div class="input-group"><label class="label">Distancias</label>
            <div class="flex-row gap-8 mt-4">
              <span class="chip chip-active chip-selectable">Kilómetros</span>
              <span class="chip chip-outline chip-selectable">Millas</span>
            </div>
          </div>
          <div class="input-group"><label class="label">Temperatura</label>
            <div class="flex-row gap-8 mt-4">
              <span class="chip chip-active chip-selectable">°Celsius</span>
              <span class="chip chip-outline chip-selectable">°Fahrenheit</span>
            </div>
          </div>

          ${Z("globe","Idioma de la App")}
          <div class="input-group">
            <select class="input"><option selected>Español (Detección automática)</option><option>English</option><option>Português</option><option>Français</option></select>
          </div>

          ${Z("eye","Accesibilidad")}
          ${Y("Texto grande","acc-text",!1)}
          ${Y("Alto contraste","acc-contrast",!1)}
          ${Y("Comandos de voz","acc-voice",!1)}
          <button class="btn btn-primary mt-16" id="btn-save-prefs">${e("save",16)} Guardar preferencias</button>
        </div>`},wallet:{title:"Billetera (Wallet)",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div style="background:linear-gradient(135deg,#004D40,#00796B);border-radius:16px;padding:24px;color:white">
            <div style="font-size:12px;opacity:0.8;margin-bottom:4px">Saldo disponible</div>
            <div style="font-size:32px;font-weight:700">S/ 125.00</div>
            <div style="display:flex;gap:8px;margin-top:16px">
              <span style="background:rgba(255,255,255,0.2);padding:4px 12px;border-radius:20px;font-size:11px">${e("award",12)} 450 puntos</span>
              <span style="background:rgba(255,255,255,0.2);padding:4px 12px;border-radius:20px;font-size:11px">Nivel Explorador</span>
            </div>
          </div>

          ${Z("credit-card","Tarjetas guardadas")}
          ${[{type:"Visa",last:"4532",exp:"09/27",color:"#1A237E"},{type:"Mastercard",last:"8721",exp:"03/28",color:"#BF360C"}].map(c=>`
            <div style="display:flex;align-items:center;gap:12px;padding:14px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
              <div style="width:44px;height:30px;border-radius:6px;background:${c.color};display:flex;align-items:center;justify-content:center;color:white;font-size:10px;font-weight:700">${c.type}</div>
              <div style="flex:1"><div style="font-weight:600">•••• •••• •••• ${c.last}</div><div style="font-size:12px;color:var(--text-secondary)">Vence ${c.exp}</div></div>
              <button class="appbar-btn">${e("trash-2",16)}</button>
            </div>
          `).join("")}
          <button class="btn btn-outline">${e("plus",16)} Agregar tarjeta</button>

          ${Z("gift","Créditos y puntos de lealtad")}
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div style="padding:16px;background:#fff8e1;border-radius:12px;text-align:center"><div style="font-size:24px;font-weight:700;color:#F57F17">450</div><div style="font-size:11px;color:var(--text-secondary)">Puntos totales</div></div>
            <div style="padding:16px;background:#e8f5e9;border-radius:12px;text-align:center"><div style="font-size:24px;font-weight:700;color:var(--green-primary)">S/ 45</div><div style="font-size:11px;color:var(--text-secondary)">Valor canjeable</div></div>
          </div>
        </div>`},documents:{title:"Documentos de Viaje",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <p style="font-size:13px;color:var(--text-secondary)">Tu baúl digital seguro para guardar documentos importantes.</p>
          ${[{name:"Seguro de Viaje MAPFRE",type:"PDF",date:"15/02/2026",icon:"shield",color:"#1565C0"},{name:"Carnet de Vacunación",type:"PDF",date:"01/12/2025",icon:"heart",color:"#2E7D32"},{name:"Visa B1/B2 (USA)",type:"Imagen",date:"20/09/2025",icon:"globe",color:"#4527A0"}].map(c=>`
            <div style="display:flex;align-items:center;gap:12px;padding:14px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
              <div style="width:44px;height:44px;border-radius:10px;background:${c.color}15;display:flex;align-items:center;justify-content:center;color:${c.color}">${e(c.icon,22)}</div>
              <div style="flex:1"><div style="font-weight:600;font-size:14px">${c.name}</div><div style="font-size:12px;color:var(--text-secondary)">${c.type} · Subido ${c.date}</div></div>
              <button class="appbar-btn">${e("download",16)}</button>
            </div>
          `).join("")}
          <div style="padding:32px;border:2px dashed var(--border-light);border-radius:12px;text-align:center;color:var(--text-secondary)">
            ${e("upload-cloud",32)}<br>
            <p style="font-size:13px;margin-top:8px">Sube seguros, carnets, visas o cualquier documento</p>
            <button class="btn btn-outline btn-sm mt-12">${e("file-plus",14)} Subir documento</button>
          </div>
        </div>`},billing:{title:"Datos de Facturación",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <p style="font-size:13px;color:var(--text-secondary)">Para viajeros de negocios que necesitan facturas legales.</p>
          ${Z("building","Datos fiscales")}
          <div class="input-group"><label class="label">RUC / NIT / Tax ID</label><input type="text" class="input" placeholder="Ej: 20123456789" /></div>
          <div class="input-group"><label class="label">Razón social</label><input type="text" class="input" placeholder="Nombre de la empresa" /></div>
          <div class="input-group"><label class="label">Dirección fiscal</label><input type="text" class="input" placeholder="Dirección completa" /></div>
          <div class="input-group"><label class="label">Email para facturas</label><input type="email" class="input" placeholder="facturacion@empresa.com" /></div>
          <button class="btn btn-primary" id="btn-save-billing">${e("save",16)} Guardar datos fiscales</button>
        </div>`},notifications:{title:"Notificaciones",html:`
        <div class="flex-col gap-4" style="padding:24px">
          ${Z("plane","Transporte y vuelos")}
          ${Y("Alertas de vuelo/transporte","n-flight",!0)}
          ${Y("Cambios de horario en tiempo real","n-schedule",!0)}

          ${Z("tag","Ofertas y promociones")}
          ${Y("Ofertas de último minuto (geolocalizadas)","n-offers",!0)}
          ${Y("Promociones de negocios seguidos","n-promos",!1)}
          ${Y("Flash Sales cercanas","n-flash",!0)}

          ${Z("calendar","Reservas")}
          ${Y("Recordatorios de check-in","n-checkin",!0)}
          ${Y("Confirmaciones de reserva","n-confirm",!0)}
          ${Y("Cancellaciones y cambios","n-cancel",!0)}

          ${Z("users","Social")}
          ${Y("Nuevos seguidores","n-follow",!0)}
          ${Y("Me gusta en mis reels","n-likes",!1)}
          ${Y("Comentarios en mis publicaciones","n-comments",!0)}

          <button class="btn btn-primary mt-16" id="btn-save-notif">${e("save",16)} Guardar preferencias</button>
        </div>`},privacy:{title:"Privacidad y Datos",html:`
        <div class="flex-col gap-4" style="padding:24px">
          ${Z("map-pin","Permisos de ubicación")}
          <div class="input-group"><label class="label">Compartir ubicación</label>
            <select class="input"><option>Solo al usar la app</option><option>Siempre</option><option selected>Solo al usar la app</option><option>Nunca</option></select>
          </div>

          ${Z("eye-off","Modo incógnito")}
          ${Y("Navegar sin afectar recomendaciones","p-incog",!1)}
          <p style="font-size:12px;color:var(--text-secondary)">Cuando está activo, los destinos que visites no influirán en el algoritmo de sugerencias.</p>

          ${Z("lock","Cuenta")}
          ${Y("Cuenta privada","p-private",!1)}
          <p style="font-size:12px;color:var(--text-secondary)">Solo tus seguidores podrán ver tus publicaciones e historial.</p>

          ${Z("database","Tus datos")}
          <button class="btn btn-outline" id="btn-download-data">${e("download",16)} Descargar mis datos</button>
          <p style="font-size:12px;color:var(--text-secondary)">Obtén un archivo con toda tu actividad en la plataforma.</p>

          <div style="margin-top:24px;padding-top:24px;border-top:1px solid var(--border-light)">
            <button class="btn btn-outline" style="color:var(--red);border-color:var(--red);width:100%" id="btn-delete-account">${e("alert-triangle",16)} Eliminar cuenta permanentemente</button>
            <p style="font-size:11px;color:var(--text-secondary);text-align:center;margin-top:8px">Esta acción es irreversible. Se eliminarán todos tus datos.</p>
          </div>
        </div>`},offline:{title:"Modo Offline",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div style="text-align:center;padding:32px;background:var(--bg-body);border-radius:16px;border:1px solid var(--border-light)">
            <div style="width:80px;height:80px;border-radius:50%;background:#e3f2fd;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;color:var(--blue)">${e("wifi-off",40)}</div>
            <h3>Modo Offline</h3>
            <p style="font-size:13px;color:var(--text-secondary);margin-top:8px">Descarga automáticamente datos de tu próximo destino para usar sin conexión.</p>
          </div>
          ${Y("Activar descarga automática","offline-auto",!1,"#1565C0")}
          ${Z("download-cloud","Datos descargados")}
          <div style="padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="font-weight:600">Ica, Perú</span><span style="font-size:12px;color:var(--text-secondary)">45 MB</span></div>
            <div style="height:6px;background:#eee;border-radius:3px;overflow:hidden"><div style="height:100%;width:100%;background:var(--green-primary);border-radius:3px"></div></div>
            <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">Mapas, tickets, teléfonos de emergencia</div>
          </div>
          <button class="btn btn-outline">${e("refresh-cw",16)} Actualizar datos offline</button>
        </div>`},emergency:{title:"Contacto de Emergencia",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div style="text-align:center;padding:24px;background:#fce4ec;border-radius:16px;border:1px solid #f8bbd0">
            <div style="width:64px;height:64px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;color:white">${e("phone",32)}</div>
            <h3 style="color:var(--red)">Emergencia</h3>
            <p style="font-size:13px;color:var(--text-secondary);margin-top:4px">Configura un contacto que recibirá tu ubicación con un solo toque en caso de peligro.</p>
          </div>
          ${Z("user-plus","Contacto principal")}
          <div class="input-group"><label class="label">Nombre del contacto</label><input type="text" class="input" value="Papá García" /></div>
          <div class="input-group"><label class="label">Número de teléfono</label><input type="tel" class="input" value="+51 987 654 321" /></div>
          <div class="input-group"><label class="label">Relación</label>
            <select class="input"><option selected>Familiar</option><option>Amigo/a</option><option>Pareja</option><option>Otro</option></select>
          </div>
          ${Y("Enviar ubicación en tiempo real durante tours","emer-rt",!0,"#C62828")}
          <button class="btn btn-primary" id="btn-save-emergency">${e("save",16)} Guardar contacto</button>
          <div style="margin-top:16px;padding:16px;background:#fff3e0;border-radius:12px;border:1px solid #ffe0b2">
            <div style="font-weight:600;font-size:14px;margin-bottom:4px">${e("phone-call",16)} Números de emergencia en Ica</div>
            <div style="font-size:13px;color:var(--text-secondary)">
              Policía: 105 · Bomberos: 116 · SAMU: 106<br>Defensa Civil: (056) 21-2424
            </div>
          </div>
        </div>`},help:{title:"Centro de Ayuda",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div style="padding:20px;background:linear-gradient(135deg,#004D40,#00796B);border-radius:16px;color:white;display:flex;align-items:center;gap:16px;cursor:pointer" id="btn-chatbot">
            <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center">${e("message-circle",24)}</div>
            <div><div style="font-weight:700;font-size:16px">Chatbot de IA</div><div style="font-size:12px;opacity:0.8">Respuestas inmediatas 24/7</div></div>
            ${e("chevron-right",20)}
          </div>

          ${Z("help-circle","Preguntas frecuentes")}
          ${[{q:"¿Cómo ganar puntos?",a:"Comparte rutas, valida la seguridad de zonas y deja reseñas para acumular puntos."},{q:"¿Cómo ser negocio asociado?",a:"Contáctanos en hola@descubreica.com para conocer nuestros planes comerciales."},{q:"¿Cómo funciona el modo offline?",a:"Actívalo en Ajustes > Modo Offline. Se descargarán mapas y datos de tu próximo destino."},{q:"¿Puedo cancelar una reserva?",a:"Depende de la política de cada negocio. Revisa los términos antes de reservar."},{q:"¿Mis datos están seguros?",a:"Usamos encriptación de grado militar y cumplimos con GDPR y normativas locales."}].map(c=>`<details style="padding:12px 0;border-bottom:1px solid var(--border-light)"><summary style="font-weight:600;font-size:14px;cursor:pointer">${c.q}</summary><p style="padding-top:8px;font-size:13px;color:var(--text-secondary)">${c.a}</p></details>`).join("")}

          ${Z("mail","Soporte directo")}
          <button class="btn btn-outline" id="btn-ticket">${e("send",16)} Enviar ticket de soporte</button>
          <p style="font-size:12px;color:var(--text-secondary)">Tiempo promedio de respuesta: 2 horas</p>
        </div>`}}[a];if(!n){E("/profile");return}i.innerHTML=`
    <div class="screen bg-body" style="min-height:100vh">
      <div class="appbar" style="background:var(--surface);position:sticky;top:0;z-index:10;border-bottom:1px solid var(--border-light)">
        <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
        <div class="title" style="font-weight:600;font-size:18px">${n.title}</div>
        <div style="width:48px"></div>
      </div>
      <div style="overflow-y:auto">${n.html}</div>
    </div>
  `,A(),document.getElementById("btn-back").onclick=De,document.querySelectorAll(".chip-selectable").forEach(c=>{c.onclick=()=>c.classList.toggle("chip-active")}),["btn-save-profile","btn-save-prefs","btn-save-notif","btn-save-billing","btn-save-emergency"].forEach(c=>{const x=document.getElementById(c);x&&(x.onclick=()=>{f(e("check",16)+" Cambios guardados"),De()})});const l=document.getElementById("btn-change-pass");l&&(l.onclick=()=>f(e("check",16)+" Contraseña actualizada"));const o=document.getElementById("btn-close-sessions");o&&(o.onclick=()=>te("Cerrar sesiones","¿Cerrar sesión en todos los dispositivos excepto este?",[{label:"Cancelar",class:"btn-outline"},{label:"Cerrar todas",class:"btn-primary",callback:()=>f("Sesiones cerradas en otros dispositivos")}]));const b=document.getElementById("btn-download-data");b&&(b.onclick=()=>f(e("package",16)+" Preparando archivo... Te enviaremos un email."));const r=document.getElementById("btn-delete-account");r&&(r.onclick=()=>te(e("alert-triangle",16)+" Eliminar cuenta","Esta acción es PERMANENTE e IRREVERSIBLE. Se borrarán todos tus datos, reservas, puntos y documentos.",[{label:"Cancelar",class:"btn-outline"},{label:"Eliminar cuenta",class:"btn-primary",callback:()=>{Me(),E("/welcome")}}]));const s=document.getElementById("btn-chatbot");s&&(s.onclick=()=>f(e("message-square",16)+" Abriendo asistente virtual..."));const y=document.getElementById("btn-ticket");y&&(y.onclick=()=>f(e("mail",16)+" Formulario de soporte enviado"))}function Kt(p){const i=document.getElementById("app"),a=p.section||"reviews",n={menu:{title:"Gestor de Carta y Menú",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div style="display:flex;background:var(--surface);border-radius:12px;padding:4px;margin-bottom:16px">
            <button class="btn btn-primary" style="flex:1;border-radius:8px">Carta Fija</button>
            <button class="btn btn-outline" style="flex:1;border:none">Menú del Día</button>
            <button class="btn btn-outline" style="flex:1;border:none">Bebidas</button>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center">
             <h3 style="font-size:16px;font-weight:700">Entradas</h3>
             <button class="btn btn-primary btn-sm" onclick="showToast('Añadiendo plato')">${e("plus",14)} Añadir Plato</button>
          </div>
          <div style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px;padding:12px">
            <div style="display:flex;align-items:center;gap:12px">
               <div style="width:60px;height:60px;background:#eee;border-radius:8px;background-size:cover;background-image:url('https://images.unsplash.com/photo-1541529086526-db283c563270')"></div>
               <div style="flex:1">
                 <div style="font-weight:700">Causa Rellena <span style="font-size:12px;color:var(--green-primary);margin-left:8px">S/ 18.00</span></div>
                 <div style="font-size:12px;color:var(--text-secondary)">Papa amarilla, ají, pollo deshilachado.</div>
               </div>
               <div style="display:flex;flex-direction:column;gap:4px">
                  <div class="switch active"></div>
                  <div style="display:flex;gap:4px"><button class="appbar-btn">${e("edit-2",14)}</button><button class="appbar-btn" style="color:var(--red)">${e("trash-2",14)}</button></div>
               </div>
            </div>
          </div>
        </div>`},mesas:{title:"Plano de Mesas y Zonas",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <button class="btn btn-primary w-full">${e("plus",16)} Añadir Mesa al Plano</button>
          <button class="btn btn-outline w-full">${e("layout",16)} Dibujar Nueva Zona</button>
          <div style="aspect-ratio:1;background:var(--surface);border:2px dashed var(--border-light);border-radius:12px;position:relative;margin-top:16px">
             <div style="position:absolute;top:20px;left:20px;width:60px;height:60px;border-radius:50%;background:var(--green-bg-light);border:2px solid var(--green-primary);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--green-primary)">M1<br>4p</div>
             <div style="position:absolute;top:20px;left:100px;width:80px;height:60px;border-radius:8px;background:var(--blue-light);border:2px solid var(--blue);display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--blue)">M2<br>6p</div>
          </div>
        </div>`},habitaciones:{title:"Mis Habitaciones",html:`
        <div id="view-room-list" class="flex-col gap-16" style="padding:24px">
          <button class="btn btn-primary w-full" id="btn-add-room">${e("plus",16)} Añadir Tipo de Habitación</button>
          <div style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px;padding:12px;display:flex;align-items:flex-start;gap:12px">
             <div style="width:80px;height:80px;border-radius:8px;background-size:cover;background-image:url('https://images.unsplash.com/photo-1590490360182-c33d57733427')"></div>
             <div style="flex:1">
               <div style="font-weight:700;font-size:15px">Suite Matrimonial</div>
               <div style="font-size:12px;color:var(--text-secondary)">Capacidad: 2 Adultos</div>
               <div style="font-weight:700;color:var(--green-primary);margin-top:4px">S/ 180 / noche</div>
               <span class="chip chip-green" style="margin-top:8px">12 Disponibles</span>
             </div>
             <button class="appbar-btn">${e("edit-2",16)}</button>
          </div>
        </div>

        <div id="view-room-form" style="display:none;padding:24px;padding-bottom:100px">
          <h3 style="margin-bottom:16px">Detalles de la Habitación</h3>
          
          <div class="input-group"><label class="label">Nombre del tipo</label><input type="text" class="input" placeholder="Ej: Habitación Doble Estándar"></div>
          <div class="input-group"><label class="label">Descripción completa</label><textarea class="input" rows="3" placeholder="Describe los beneficios y el ambiente..."></textarea></div>
          
          <div style="display:flex;gap:12px;margin-bottom:16px">
            <div class="input-group flex-1"><label class="label">Precio x noche (S/)</label><input type="number" class="input" placeholder="150"></div>
            <div class="input-group flex-1"><label class="label">Precio x hora (S/) opcional</label><input type="number" class="input" placeholder="-"></div>
          </div>
          
          <div style="display:flex;gap:12px;margin-bottom:16px">
            <div class="input-group flex-1"><label class="label">Adultos max.</label>
              <div style="display:flex;align-items:center;gap:8px;background:var(--surface);border:1px solid var(--border-light);border-radius:8px;padding:4px"><button class="btn btn-xs btn-outline">-</button><span style="flex:1;text-align:center">2</span><button class="btn btn-xs btn-outline">+</button></div>
            </div>
            <div class="input-group flex-1"><label class="label">Niños max.</label>
              <div style="display:flex;align-items:center;gap:8px;background:var(--surface);border:1px solid var(--border-light);border-radius:8px;padding:4px"><button class="btn btn-xs btn-outline">-</button><span style="flex:1;text-align:center">1</span><button class="btn btn-xs btn-outline">+</button></div>
            </div>
          </div>

          <div style="display:flex;gap:12px;margin-bottom:16px">
            <div class="input-group flex-1"><label class="label">Unidades totales</label><input type="number" class="input" value="1"></div>
            <div class="input-group flex-1"><label class="label">Tamaño (m²)</label><input type="number" class="input" value="25"></div>
          </div>

          <div class="input-group">
            <label class="label">Tipo de Cama</label>
            <select class="input">
              <option>Una cama doble</option><option>Dos camas simples</option><option>Cama King size</option><option>Cama Queen size</option>
            </select>
          </div>

          <div class="form-divider" style="margin:24px 0 16px"><span>Fotos</span></div>
          <div class="photo-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:24px">
            <div class="photo-slot" style="aspect-ratio:1;display:flex;align-items:center;justify-content:center;color:var(--text-secondary);background:var(--surface);border:2px dashed var(--border-light);border-radius:8px">${e("plus",20)}</div>
            <div class="photo-slot" style="aspect-ratio:1;display:flex;align-items:center;justify-content:center;color:var(--text-secondary);background:var(--surface);border:2px dashed var(--border-light);border-radius:8px">${e("plus",20)}</div>
            <div class="photo-slot" style="aspect-ratio:1;display:flex;align-items:center;justify-content:center;color:var(--text-secondary);background:var(--surface);border:2px dashed var(--border-light);border-radius:8px">${e("plus",20)}</div>
          </div>

          <div class="form-divider" style="margin:24px 0 16px"><span>Características</span></div>
          <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:32px">
             ${["Aire acondicionado","Calefacción","TV con cable","Minibar","Caja de seguridad","Balcón","Vista a la ciudad","Vista a la piscina","Vista al jardín","Bañera","Jacuzzi","Escritorio de trabajo","Sofá"].map(o=>`<div class="amenity-toggle chip chip-outline chip-selectable" style="cursor:pointer">${o}</div>`).join("")}
          </div>

          <div style="display:flex;gap:12px">
            <button class="btn btn-outline flex-1" id="btn-cancel-room">Cancelar</button>
            <button class="btn btn-primary flex-1" id="btn-save-room">Guardar</button>
          </div>
        </div>`},servicios:{title:"Servicios y Desayunos",html:`
        <div class="flex-col gap-24" style="padding:24px">
          <!-- Desayunos -->
          <div>
            <h3 style="font-size:16px;font-weight:700;margin-bottom:12px">Opciones de Desayuno</h3>
            <div style="background:var(--surface);padding:16px;border-radius:12px;border:1px solid var(--border-light)">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
                <input type="text" class="input" value="Desayuno Americano" style="font-weight:700;border:none;padding:0;font-size:15px">
                <div class="switch active"></div>
              </div>
              <textarea class="input" rows="2" style="margin-bottom:12px;border:none;background:#f9f9f9">Huevos al gusto, tocino, pan tostado, jugo natural y café.</textarea>
              <div class="input-group" style="margin-bottom:12px"><label class="label">Precio adicional por persona (S/)</label><input type="number" class="input" value="25"></div>
              
              <label class="label">Disponibilidad por día:</label>
              <div style="display:flex;gap:6px;margin-top:6px;overflow-x:auto">
                ${["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"].map((o,b)=>`<span class="chip ${b<6?"chip-active":"chip-outline"} chip-selectable">${o}</span>`).join("")}
              </div>
            </div>
            <button class="btn btn-outline w-full mt-12">${e("plus",16)} Añadir Tipo de Desayuno</button>
          </div>

           <!-- Servicios Extras -->
          <div>
            <h3 style="font-size:16px;font-weight:700;margin-bottom:12px">Servicios Adicionales de Pago</h3>
            <div class="flex-col gap-12">
              <div style="background:var(--surface);padding:12px;border-radius:12px;border:1px solid var(--border-light);display:flex;align-items:center;gap:12px">
                 <div style="flex:1"><input type="text" class="input" value="Traslado al Aeropuerto" style="border:none;font-weight:600;padding:4px"><input type="number" class="input" value="80" style="border:none;color:var(--green-primary);font-weight:700;padding:4px"></div>
                 <div class="switch active"></div>
              </div>
              <div style="background:var(--surface);padding:12px;border-radius:12px;border:1px solid var(--border-light);display:flex;align-items:center;gap:12px">
                 <div style="flex:1"><input type="text" class="input" value="Masaje Relajante (45min)" style="border:none;font-weight:600;padding:4px"><input type="number" class="input" value="120" style="border:none;color:var(--green-primary);font-weight:700;padding:4px"></div>
                 <div class="switch"></div>
              </div>
            </div>
            <button class="btn btn-outline w-full mt-12">${e("plus",16)} Añadir Servicio</button>
          </div>
        </div>`},disponibilidad:{title:"Gestionar Disponibilidad",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div class="info-box info-blue">
            <span style="color:var(--blue)">${e("info",18)}</span>
            <span style="font-size:13px;line-height:1.4">Bloquea fechas específicas para mantenimiento, limpieza profunda o temporada cerrada. Los clientes no podrán reservar en estas fechas.</span>
          </div>
          
          <button class="btn btn-danger w-full mt-8" id="btn-block-dates">${e("lock",16)} Bloquear Fechas</button>

          <h3 style="font-size:16px;font-weight:700;margin-top:16px">Bloqueos Activos</h3>
          <div style="background:var(--surface);padding:16px;border-radius:12px;border:1px left solid var(--red)">
             <div style="display:flex;justify-content:space-between;margin-bottom:8px">
               <span style="font-weight:700">Suite Matrimonial</span>
               <span class="chip chip-red" style="font-size:10px">Mantenimiento</span>
             </div>
             <div style="font-size:13px;color:var(--text-secondary)">Del 15/04/2026 al 18/04/2026</div>
             <div style="display:flex;justify-content:flex-end;margin-top:8px"><button class="btn btn-xs btn-outline">Desbloquear</button></div>
          </div>
        </div>`},tours:{title:"Catálogo de Tours",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <button class="btn btn-primary w-full">${e("map",16)} Publicar Tour Nuevo</button>
          <div style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px;overflow:hidden">
             <div style="height:120px;background-size:cover;background-image:url('https://images.unsplash.com/photo-1549888834-3ec93abae044');position:relative">
               <span class="chip chip-green" style="position:absolute;top:10px;right:10px">S/ 85.00</span>
             </div>
             <div style="padding:16px">
               <div style="font-weight:700;font-size:16px">Ruta Buggy Huacachina</div>
               <div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px">Duración: 2h · Nivel: Moderado</div>
               <div style="display:flex;justify-content:space-between;align-items:center">
                 <span style="font-size:12px;color:var(--blue);font-weight:700">8 cupos prox. salida</span>
                 <div style="display:flex;gap:4px">
                   <button class="appbar-btn">${e("edit-2",16)}</button>
                   <button class="appbar-btn">${e("pause",16)}</button>
                 </div>
               </div>
             </div>
          </div>
        </div>`},"perfil-guia":{title:"Mi Perfil de Guía",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div style="text-align:center">
             <div style="width:80px;height:80px;border-radius:50%;background:#ccc;margin:0 auto 12px;background-size:cover;background-image:url('https://i.pravatar.cc/150?u=guide')"></div>
             <button class="btn btn-outline btn-sm">Cambiar Foto</button>
          </div>
          <div class="input-group"><label class="label">Años de Exp.</label><input class="input" type="number" value="5"></div>
          <div class="input-group"><label class="label">Idiomas</label><div class="flex-row gap-8"><span class="chip chip-active">Español</span><span class="chip chip-active">Inglés</span><span class="chip">Francés</span></div></div>
          <div class="input-group"><label class="label">Certificaciones</label><textarea class="input">Guía Oficial de Turismo MINCETUR</textarea></div>
          <button class="btn btn-primary w-full">${e("save",16)} Guardar Perfil</button>
        </div>`},flota:{title:"Gestión de Flota",html:`
        <div class="flex-col gap-16" style="padding:24px">
           <div style="background:#fff3e0;border-radius:12px;padding:12px;display:flex;gap:12px;align-items:center;font-size:12px;color:var(--orange)">
             ${e("alert-triangle",24)} <span>Nuevos conductores requieren aprobación administrativa antes de recibir viajes.</span>
           </div>
           <button class="btn btn-primary w-full">${e("user-plus",16)} Añadir Conductor</button>
           
           <div style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px;padding:12px;display:flex;align-items:center;gap:12px">
             <img src="https://i.pravatar.cc/150?u=juan" style="width:48px;height:48px;border-radius:50%">
             <div style="flex:1">
               <div style="font-weight:700">Juan Pérez</div>
               <div style="font-size:12px;color:var(--text-secondary)">Sedan Yaris · B8A-123</div>
             </div>
             <span style="width:12px;height:12px;border-radius:50%;background:var(--green-primary);animation:pulse 2s infinite"></span>
           </div>
        </div>`},tarifas:{title:"Mis Tarifas",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div class="input-group"><label class="label">Precio Base (Recogida)</label><input type="number" class="input" value="4.00"></div>
          <div class="input-group"><label class="label">Precio x Kilómetro</label><input type="number" class="input" value="1.50"></div>
          
          <h3 style="font-size:16px;font-weight:700;margin-top:16px">Rutas Frecuentes</h3>
          <div style="background:var(--surface);padding:12px;border-radius:12px;border:1px solid var(--border-light);display:flex;justify-content:space-between;align-items:center">
            <div><div style="font-weight:700">Ica Centro a Huacachina</div><div style="font-weight:700;color:var(--green-primary)">S/ 8.00 Fijo</div></div>
            <div class="switch active"></div>
          </div>
        </div>`},shows:{title:"Shows y Eventos Locales",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <button class="btn btn-primary w-full">${e("music",16)} Programar Show Interior</button>
          <div style="padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div style="font-weight:700;font-size:16px;margin-bottom:4px">DJ Diego Local Set</div>
            <div style="font-size:12px;color:var(--text-secondary)">Viernes 22 Mar · 10:00 PM</div>
            <span class="chip chip-blue" style="margin-top:8px">Música Electrónica</span>
          </div>
        </div>`},zonas:{title:"Zonas y Aforo",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div style="display:flex;justify-content:space-between;background:#fce4ec;padding:16px;border-radius:12px;align-items:center">
             <div><div style="font-weight:700;color:var(--red)">Modo Aforo Máximo</div><div style="font-size:11px;color:var(--text-secondary)">Bloquea nuevas reservas</div></div>
             <div class="switch"></div>
          </div>
          <div style="background:var(--surface);padding:16px;border-radius:12px;border:1px solid var(--border-light)">
            <div style="font-weight:700;font-size:16px;display:flex;justify-content:space-between">Zona VIP <span>S/ 100 extra</span></div>
            <div style="font-size:12px;color:var(--text-secondary)">Capacidad: 50 pax</div>
          </div>
        </div>`},catalogo:{title:"Gestor de Catálogo",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <button class="btn btn-primary w-full">${e("plus",16)} Añadir Producto</button>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px;overflow:hidden">
              <div style="aspect-ratio:1;background:#ccc;background-image:url('https://images.unsplash.com/photo-1610701596007-11502861dcfa');background-size:cover"></div>
              <div style="padding:12px">
                <span class="chip" style="font-size:10px;margin-bottom:4px">Cerámica</span>
                <div style="font-weight:700;font-size:14px;line-height:1.2;margin-bottom:4px">Vasija Nazca Réplica</div>
                <div style="font-weight:700;color:var(--green-primary)">S/ 45.00</div>
              </div>
            </div>
          </div>
        </div>`},medicos:{title:"Equipo Médico",html:`
        <div class="flex-col gap-16" style="padding:24px">
           <button class="btn btn-primary w-full">${e("user-plus",16)} Añadir Especialista</button>
           <div style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px;padding:12px;display:flex;align-items:center;gap:12px">
             <img src="https://i.pravatar.cc/150?u=doc" style="width:48px;height:48px;border-radius:50%">
             <div style="flex:1">
               <div style="font-weight:700">Dra. Mónica Silva</div>
               <span class="chip chip-blue" style="font-size:10px;margin-top:4px">Dermatología</span>
             </div>
             <div class="switch active"></div>
           </div>
        </div>`},"stock-farmacia":{title:"Stock de Farmacia",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div class="input-group">
            <div style="position:relative">
              ${e("search",16,"text-secondary")}
              <input type="text" class="input" placeholder="Buscar medicamento..." style="padding-left:36px">
            </div>
          </div>
          <div style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px;padding:12px;display:flex;justify-content:space-between;align-items:center">
            <div>
              <div style="font-weight:700">Paracetamol 500mg</div>
              <div style="font-size:12px;color:var(--text-secondary)">Blíster x10</div>
            </div>
            <div style="text-align:right">
              <div style="font-weight:700;color:var(--green-primary)">S/ 2.50</div>
              <div style="font-size:12px;color:var(--text-secondary)">Stock: 45</div>
            </div>
          </div>
        </div>`},notificaciones:{title:"Preferencias de Avisos",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <p style="font-size:13px;color:var(--text-secondary)">Elige qué notificaciones Push o SMS deseas recibir.</p>
          ${["Nuevas Reservas","Nuevas Calificaciones","Consultas de WhatsApp","Viajes Solicitados (Movilidad)"].map(o=>`
            <div style="display:flex;justify-content:space-between;padding:12px;background:var(--surface);border-radius:8px;border:1px solid var(--border-light)">
              <span style="font-weight:600;font-size:14px">${o}</span>
              <div class="switch active"></div>
            </div>
          `).join("")}
        </div>`},"horario-especial":{title:"Horario Especial",html:`
        <div class="flex-col gap-16" style="padding:24px">
           <div class="input-group"><label class="label">Motivo</label><input type="text" class="input" value="Feriado Patrio"></div>
           <div style="display:flex;gap:12px">
             <div class="input-group" style="flex:1"><label class="label">Desde</label><input type="date" class="input"></div>
             <div class="input-group" style="flex:1"><label class="label">Hasta</label><input type="date" class="input"></div>
           </div>
           <label style="display:flex;align-items:center;gap:8px;font-size:14px;font-weight:600"><input type="checkbox" checked style="accent-color:var(--green-primary)"> Cerrado por completo</label>
           <button class="btn btn-primary w-full">${e("save",16)} Guardar Horario</button>
        </div>`},documentos:{title:"Documentos Legales",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <p style="font-size:13px;color:var(--text-secondary)">Estos documentos son privados y solo visibles para la administración para verificación de tu negocio.</p>
          <div style="display:flex;align-items:center;gap:12px;padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
             <div style="width:40px;height:40px;border-radius:8px;background:var(--green-bg-light);color:var(--green-primary);display:flex;justify-content:center;align-items:center">${e("check",20)}</div>
             <div style="flex:1">
               <div style="font-weight:700">Licencia de Funcionamiento</div>
               <div style="font-size:12px;color:var(--text-secondary)">Verificado el 12/03/2026</div>
             </div>
          </div>
          <button class="btn btn-outline w-full">${e("upload",16)} Subir Nuevo Documento</button>
        </div>`},reviews:{title:"Reseñas y Reputación",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            <span class="chip chip-green" style="font-size:12px;padding:6px 14px;display:flex;align-items:center;gap:4px">${e("smile",14)} Positivos 80%</span>
            <span class="chip chip-yellow" style="font-size:12px;padding:6px 14px;display:flex;align-items:center;gap:4px">${e("meh",14)} Neutrales 15%</span>
            <span class="chip chip-red" style="font-size:12px;padding:6px 14px;display:flex;align-items:center;gap:4px">${e("frown",14)} Críticos 5%</span>
          </div>

          <div>
            <h3 style="font-size:15px;margin-bottom:12px">${e("tag",16)} Palabras Clave (IA)</h3>
            <div style="display:flex;flex-wrap:wrap;gap:6px">
              ${["Atención rápida","Buena comida","Precio justo","Ambiente agradable","Limpieza","Música alta","Porciones grandes","Vista bonita","Buen pisco","Estacionamiento fácil"].map((o,b)=>`<span style="padding:4px 12px;background:${b<5?"#e8f5e9":"#fff3e0"};border-radius:20px;font-size:12px;color:${b<5?"var(--green-primary)":"var(--orange)"}">${o}</span>`).join("")}
            </div>
          </div>

          <div>
            <h3 style="font-size:15px;margin-bottom:12px">${e("message-circle",16)} Plantillas de Respuesta</h3>
            <div class="flex-col gap-8">
              ${[{label:"Agradecer visita",icon:"heart",text:"¡Muchas gracias por visitarnos! Esperamos verte pronto."},{label:"Disculpa por retraso",icon:"clock",text:"Lamentamos la demora. Trabajamos para mejorar. Tu próxima visita tendrá un detalle especial."},{label:"Invitación a volver",icon:"gift",text:"¡Te esperamos de vuelta! Menciona este mensaje para un postre de cortesía."}].map(o=>`
                <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px;cursor:pointer" class="template-btn">
                  <div style="color:var(--text-secondary)">${e(o.icon,20)}</div>
                  <div style="flex:1"><div style="font-weight:600;font-size:13px">${o.label}</div><div style="font-size:12px;color:var(--text-secondary)">${o.text}</div></div>
                  <button class="appbar-btn">${e("copy",16)}</button>
                </div>
              `).join("")}
            </div>
          </div>

          <h3 style="font-size:15px;margin-bottom:8px">Últimas Reseñas</h3>
          ${[{name:"María G.",initials:"MG",color:"#1A6B3A",rating:5,text:"Excelente comida y atención. Vol veré pronto.",time:"Hace 2h"},{name:"Pedro L.",initials:"PL",color:"#E65100",rating:2,text:"La música estaba muy alta, no pudimos conversar.",time:"Hace 5h"}].map(o=>`
            <div style="padding:14px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px;margin-bottom:8px">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
                ${O(o.initials,o.color,32)}
                <div style="flex:1"><div style="font-weight:600;font-size:14px">${o.name}</div><div style="font-size:11px;color:var(--text-secondary)">${o.time}</div></div>
                <span style="display:flex">${e("star",12).repeat(o.rating)}</span>
              </div>
              <p style="font-size:13px;margin-bottom:8px">${o.text}</p>
              <div style="display:flex;gap:8px">
                <button class="btn btn-outline btn-xs" style="display:flex;gap:6px">${e("message-circle",12)} Responder</button>
                <button class="btn btn-outline btn-xs" style="color:var(--red);border-color:var(--red);display:flex;gap:6px">${e("flag",12)} Reportar</button>
              </div>
            </div>
          `).join("")}
        </div>`},staff:{title:"Gestión de Staff",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <h3 style="font-size:15px">${e("users",16)} Roles de Empleado</h3>
          ${[{name:"Ana López",role:"Recepcionista",perms:"Ver y confirmar reservas",color:"#1565C0",initials:"AL"},{name:"Juan Pérez",role:"Editor",perms:"Fotos, eventos (sin finanzas)",color:"#2E7D32",initials:"JP"},{name:"Carlos M.",role:"Validador",perms:"Solo escáner QR",color:"#E65100",initials:"CM"}].map(o=>`
            <div style="display:flex;align-items:center;gap:12px;padding:14px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
              ${O(o.initials,o.color,40)}
              <div style="flex:1"><div style="font-weight:600">${o.name}</div><div style="font-size:12px;color:var(--text-secondary)">${o.role} · ${o.perms}</div></div>
              <button class="appbar-btn">${e("edit-2",16)}</button>
            </div>
          `).join("")}
          <button class="btn btn-outline">${e("user-plus",16)} Agregar empleado</button>

          <h3 style="font-size:15px;margin-top:8px">${e("clipboard-list",16)} Registro de Actividad</h3>
          ${[{text:"Ana López confirmó la reserva de María García",time:"10:00 AM"},{text:"Juan Pérez actualizó las fotos del menú",time:"09:30 AM"},{text:"Carlos M. validó ingreso con QR #4521",time:"08:45 AM"}].map(o=>`
            <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border-light);font-size:13px">
              <span>${o.text}</span><span style="color:var(--text-secondary);white-space:nowrap;margin-left:8px">${o.time}</span>
            </div>
          `).join("")}
        </div>`},billing:{title:"Centro de Facturación",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <h3 style="font-size:15px">${e("credit-card",16)} Cuenta Bancaria</h3>
          <div style="padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div style="font-weight:600">BCP ···· 4521</div>
            <div style="font-size:12px;color:var(--text-secondary)">Cuenta corriente · Stripe Connect vinculado</div>
            <button class="btn btn-outline btn-sm mt-8">${e("edit-2",14)} Cambiar cuenta</button>
          </div>

          <h3 style="font-size:15px">${e("file-text",16)} Facturas de Comisiones</h3>
          ${[{month:"Mar 2026",amount:"S/ 245.00",status:"Pagada"},{month:"Feb 2026",amount:"S/ 312.00",status:"Pagada"},{month:"Ene 2026",amount:"S/ 198.00",status:"Pagada"}].map(o=>`
            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
              <div><div style="font-weight:600">${o.month}</div><div style="font-size:12px;color:var(--text-secondary)">${o.amount}</div></div>
              <div style="display:flex;align-items:center;gap:8px"><span class="chip chip-green" style="font-size:10px">${o.status}</span><button class="appbar-btn">${e("download",16)}</button></div>
            </div>
          `).join("")}
          <button class="btn btn-primary">${e("download",16)} Descargar reporte fiscal mensual</button>
        </div>`},trust:{title:"Confianza y Seguridad",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <h3 style="font-size:15px">${e("alert-octagon",16)} Lista Negra Privada</h3>
          <p style="font-size:13px;color:var(--text-secondary)">Marca usuarios problemáticos. Recibirás una alerta silenciosa si intentan reservar.</p>
          <div style="padding:14px;background:#fce4ec;border:1px solid #f8bbd0;border-radius:12px;display:flex;align-items:center;gap:12px">
            ${O("XR","#C62828",36)}
            <div style="flex:1"><div style="font-weight:600">Xavier R.</div><div style="font-size:12px;color:var(--text-secondary)">No se presentó 2 veces · Daño reportado</div></div>
            <button class="appbar-btn">${e("x",16)}</button>
          </div>
          <button class="btn btn-outline" style="color:var(--red);border-color:var(--red)">${e("user-x",16)} Agregar a lista negra</button>

          <h3 style="font-size:15px">${e("shield",16)} Seguro y Garantías</h3>
          <div style="padding:16px;background:#e8f5e9;border:1px solid #c8e6c9;border-radius:12px">
            <div style="font-weight:600;margin-bottom:4px">Póliza de Responsabilidad Civil</div>
            <div style="font-size:12px;color:var(--text-secondary)">MAPFRE · Vigente hasta 12/2026</div>
            <button class="btn btn-outline btn-sm mt-8">${e("upload",14)} Actualizar póliza</button>
          </div>
          <div style="display:flex;align-items:center;gap:8px;padding:12px;background:#fff3e0;border-radius:10px;font-size:13px">
            ${e("info",16)} <span>Activa el <strong>Seguro de Cancelación</strong> para recibir compensación si un turista cancela a última hora.</span>
          </div>

          <h3 style="font-size:15px">${e("phone-call",16)} Protocolos de Emergencia</h3>
          <div class="input-group"><label class="label">Contacto de ambulancia local</label><input type="tel" class="input" value="+51 (056) 21-2424" /></div>
          <div class="input-group"><label class="label">Protocolo en caso de accidente</label><textarea class="input" rows="2">1. Llamar al SAMU (106). 2. Notificar al gerente. 3. Registrar en la app.</textarea></div>
          <button class="btn btn-primary">${e("save",16)} Guardar protocolos</button>
        </div>`},crm:{title:"Gestión de Clientes (CRM)",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <h3 style="font-size:15px">${e("star",16)} Clientes Frecuentes (+3 visitas)</h3>
          ${[{name:"María García",visits:7,note:"Le gusta la mesa cerca de la ventana",initials:"MG",color:"#1A6B3A"},{name:"Carlos Torres",visits:5,note:"Alérgico a los frutos secos",initials:"CT",color:"#2E86AB"},{name:"Lucía Flores",visits:4,note:"Prefiere vino tinto local",initials:"LF",color:"#F4A261"}].map(o=>`
            <div style="padding:14px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
                ${O(o.initials,o.color,36)}
                <div style="flex:1"><div style="font-weight:600">${o.name}</div><div style="font-size:12px;color:var(--text-secondary)">${o.visits} visitas</div></div>
                <span class="chip chip-gold" style="font-size:10px">VIP</span>
              </div>
              <div style="padding:8px 12px;background:#fff8e1;border-radius:8px;font-size:12px;display:flex;align-items:center;gap:6px">
                ${e("sticky-note",14)} <em>${o.note}</em>
              </div>
            </div>
          `).join("")}

          <h3 style="font-size:15px">${e("mail",16)} Encuestas Post-visita</h3>
          <div style="padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div style="font-weight:600;margin-bottom:4px">Encuesta automática activa</div>
            <div style="font-size:12px;color:var(--text-secondary)">Se envía 2h después de la reserva: "¿Qué tal estuvo tu experiencia?"</div>
            <div style="display:flex;gap:8px;margin-top:8px"><span class="chip chip-green" style="font-size:10px">92% responde</span><span class="chip chip-blue" style="font-size:10px">4.6 promedio</span></div>
          </div>
          <button class="btn btn-outline">${e("edit-2",16)} Personalizar encuesta</button>
        </div>`},policies:{title:"Políticas de Operación",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <h3 style="font-size:15px">${e("file-text",16)} Política de Cancelación</h3>
          <div class="input-group">
            <select class="input">
              <option>Flexible — Reembolso total 24h antes</option>
              <option selected>Moderada — 50% de reembolso 24h antes</option>
              <option>Estricta — Sin reembolso</option>
            </select>
          </div>

          <h3 style="font-size:15px">${e("check-square",16)} Reglas de la Casa</h3>
          <p style="font-size:13px;color:var(--text-secondary)">Checklist obligatorio para el turista antes de reservar:</p>
          <div class="flex-col gap-8">
            ${["No se admiten mascotas en interior","Vestimenta casual elegante","Prohibido fumar","Niños bienvenidos con supervisión","Reserva máxima 2 horas","Se requiere depósito para grupos +8"].map((o,b)=>`
                <label style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--surface);border:1px solid var(--border-light);border-radius:10px;cursor:pointer">
                  <input type="checkbox" ${b<3?"checked":""} style="accent-color:var(--green-primary)">
                  <span style="font-size:14px">${o}</span>
                </label>
              `).join("")}
          </div>

          <h3 style="font-size:15px">${e("calendar",16)} Horarios Especiales</h3>
          <p style="font-size:13px;color:var(--text-secondary)">Marca días cerrados para bloquear reservas automáticamente.</p>
          <div class="flex-col gap-8">
            <div style="display:flex;justify-content:space-between;padding:12px;background:#fff3e0;border-radius:10px;align-items:center">
              <div><div style="font-weight:600;font-size:14px;display:flex;align-items:center;gap:6px">${e("gift",16)} Evento Privado</div><div style="font-size:12px;color:var(--text-secondary)">Sábado 22 Mar — Todo el día</div></div>
              <button class="appbar-btn">${e("x",16)}</button>
            </div>
            <div style="display:flex;justify-content:space-between;padding:12px;background:#fce4ec;border-radius:10px;align-items:center">
              <div><div style="font-weight:600;font-size:14px;display:flex;align-items:center;gap:6px">${e("sun",16)} Feriado Local</div><div style="font-size:12px;color:var(--text-secondary)">Lunes 7 Abr — Cerrado</div></div>
              <button class="appbar-btn">${e("x",16)}</button>
            </div>
          </div>
          <button class="btn btn-outline">${e("plus",16)} Agregar fecha especial</button>
          <button class="btn btn-primary mt-8">${e("save",16)} Guardar políticas</button>
        </div>`},comarketing:{title:"Co-Marketing y Alianzas",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <h3 style="font-size:15px">${e("link",16)} Combos con Otros Negocios</h3>
          <div style="padding:16px;background:linear-gradient(135deg,#e3f2fd,#bbdefb);border-radius:12px">
            <div style="font-weight:700;font-size:15px;margin-bottom:4px;display:flex;align-items:center;gap:6px">${e("coffee",16)} Combo Cata + Cena</div>
            <div style="font-size:13px;color:var(--text-secondary)">Tour Bodega Vista Alegre + Cena en El Catador</div>
            <div style="font-size:12px;margin-top:4px"><strong>10% de descuento</strong> al comprar el combo</div>
            <div style="display:flex;gap:8px;margin-top:8px"><span class="chip chip-green" style="font-size:10px">Activo</span><span style="font-size:11px;color:var(--text-secondary)">42 combos vendidos</span></div>
          </div>
          <button class="btn btn-outline">${e("plus",16)} Proponer nueva alianza</button>

          <h3 style="font-size:15px">${e("share-2",16)} Panel de Afiliados</h3>
          <div class="flex-col gap-8">
            ${[{name:"Guía Turístico Pedro",code:"PEDRO2026",referrals:28,earnings:"S/ 140"},{name:"Influencer @icatravel",code:"ICATRAVEL",referrals:65,earnings:"S/ 325"}].map(o=>`
              <div style="display:flex;align-items:center;gap:12px;padding:14px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
                <div style="flex:1"><div style="font-weight:600">${o.name}</div><div style="font-size:12px;color:var(--text-secondary)">Código: ${o.code} · ${o.referrals} referidos</div></div>
                <div style="text-align:right"><div style="font-weight:700;color:var(--green-primary)">${o.earnings}</div><div style="font-size:10px;color:var(--text-secondary)">ganancia</div></div>
              </div>
            `).join("")}
          </div>
        </div>`},finance:{title:"Finanzas y Conciliación",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div style="padding:20px;background:linear-gradient(135deg,#004D40,#00796B);border-radius:16px;color:white">
            <div style="font-size:12px;opacity:0.8">Próximo depósito</div>
            <div style="font-size:28px;font-weight:700;margin:4px 0">S/ 450.00</div>
            <div style="font-size:13px;opacity:0.9;display:flex;align-items:center;gap:6px">${e("calendar",14)} Martes 17 Mar · BCP ···· 4521</div>
          </div>

          <h3 style="font-size:15px">${e("calculator",16)} Calculadora de Comisiones</h3>
          <div style="padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border-light)"><span>Ingresos brutos (Mar)</span><span style="font-weight:700">S/ 2,450.00</span></div>
            <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border-light)"><span>Comisión plataforma (8%)</span><span style="font-weight:700;color:var(--red)">- S/ 196.00</span></div>
            <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border-light)"><span>Impuestos (18% IGV)</span><span style="font-weight:700;color:var(--red)">- S/ 35.28</span></div>
            <div style="display:flex;justify-content:space-between;padding:8px 0"><span style="font-weight:700">Ingreso neto</span><span style="font-weight:700;color:var(--green-primary)">S/ 2,218.72</span></div>
          </div>

          <h3 style="font-size:15px">${e("calendar",16)} Calendario de Pagos</h3>
          ${[{date:"Mar 17",amount:"S/ 450.00",status:"Pendiente"},{date:"Mar 3",amount:"S/ 380.00",status:"Depositado"},{date:"Feb 17",amount:"S/ 312.00",status:"Depositado"}].map(o=>`
            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:10px">
              <div><div style="font-weight:600">${o.date}</div></div>
              <div style="text-align:right"><div style="font-weight:700">${o.amount}</div><span class="chip ${o.status==="Depositado"?"chip-green":"chip-yellow"}" style="font-size:10px">${o.status}</span></div>
            </div>
          `).join("")}
          <button class="btn btn-outline">${e("download",16)} Descargar facturas automáticas</button>
        </div>`},branding:{title:"Presencia Digital",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <h3 style="font-size:15px">${e("image",16)} Galería Inteligente</h3>
          <p style="font-size:13px;color:var(--text-secondary)">Organiza tus fotos por categoría para mejorar la experiencia del turista.</p>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
            ${[{icon:"coffee",l:"Comida"},{icon:"moon",l:"Nocturno"},{icon:"users",l:"Accesible"},{icon:"home",l:"Interior"},{icon:"sun",l:"Exterior"},{icon:"plus",l:"Subir"}].map((o,b)=>`
              <div style="aspect-ratio:1;border-radius:12px;background:${b<5?"#f5f5f5":"var(--green-bg-light)"};display:flex;align-items:center;justify-content:center;cursor:pointer;border:${b===5?"2px dashed var(--green-primary)":"1px solid var(--border-light)"};flex-direction:column;gap:8px;color:${b===5?"var(--green-primary)":"var(--text-primary)"}">
                ${e(o.icon,b<5?24:20)}<span style="font-size:11px;font-weight:500">${o.l}</span>
              </div>
            `).join("")}
          </div>

          <h3 style="font-size:15px">${e("link-2",16)} Redes Sociales</h3>
          ${[{network:"Instagram",handle:"@elcatador_ica",icon:"instagram",connected:!0},{network:"TikTok",handle:"No conectado",icon:"video",connected:!1},{network:"Facebook",handle:"No conectado",icon:"facebook",connected:!1}].map(o=>`
            <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
              <span style="color:var(--text-secondary)">${e(o.icon,24)}</span>
              <div style="flex:1"><div style="font-weight:600">${o.network}</div><div style="font-size:12px;color:var(--text-secondary)">${o.handle}</div></div>
              <button class="btn ${o.connected?"btn-outline":"btn-primary"} btn-xs">${o.connected?"Desconectar":"Conectar"}</button>
            </div>
          `).join("")}

          <h3 style="font-size:15px">${e("eye",16)} Tour Virtual 360°</h3>
          <div class="input-group"><label class="label">Link de Matterport / Video 360°</label><input type="url" class="input" placeholder="https://my.matterport.com/..." /></div>
          <button class="btn btn-primary">${e("save",16)} Guardar cambios</button>
        </div>`},support:{title:"Soporte Prioritario Business",html:`
        <div class="flex-col gap-16" style="padding:24px">
          <div style="text-align:center;padding:32px;background:linear-gradient(135deg,#4527A0,#7E57C2);border-radius:16px;color:white">
            <div style="margin-bottom:12px;display:flex;justify-content:center">${e("headphones",48)}</div>
            <h2 style="font-size:20px;margin-bottom:4px">Línea de Vida Business</h2>
            <p style="font-size:13px;opacity:0.9">Agente humano disponible 24/7 para dueños de negocio</p>
            <button class="btn mt-16" id="btn-live-chat" style="background:white;color:#4527A0;font-weight:700;padding:12px 32px;border-radius:24px;font-size:15px">${e("message-circle",18)} Chat en vivo</button>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div style="padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px;text-align:center">
              <div style="font-size:24px;font-weight:700;color:var(--green-primary)">< 2 min</div>
              <div style="font-size:11px;color:var(--text-secondary)">Tiempo de respuesta</div>
            </div>
            <div style="padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px;text-align:center">
              <div style="font-size:24px;font-weight:700;color:var(--blue)">24/7</div>
              <div style="font-size:11px;color:var(--text-secondary)">Disponibilidad</div>
            </div>
          </div>
          <h3 style="font-size:15px">Historial de Tickets</h3>
          ${[{id:"#4521",subject:"Error en cobro de reserva",status:"Resuelto",date:"Mar 10"},{id:"#4498",subject:"Actualización de horarios no reflejada",status:"Resuelto",date:"Feb 28"}].map(o=>`
            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
              <div><div style="font-weight:600;font-size:13px">${o.id} — ${o.subject}</div><div style="font-size:11px;color:var(--text-secondary)">${o.date}</div></div>
              <span class="chip chip-green" style="font-size:10px">${o.status}</span>
            </div>
          `).join("")}
        </div>`},tours:{title:"Mi Catálogo de Tours",html:`<div class="flex-col gap-16" style="padding:24px">
        <button class="btn btn-primary w-full" id="btn-add-tour">${e("plus",16)} Crear Nuevo Tour</button>
        ${[{name:"Huacachina Extremo",dur:"4h",diff:"Moderado",diffColor:"orange",price:"S/ 85",img:"https://images.unsplash.com/photo-1531065208531-4036c0dba3ca",status:"Activo"},{name:"Líneas de Nazca Aéreo",dur:"2h",diff:"Fácil",diffColor:"green",price:"S/ 250",img:"https://images.unsplash.com/photo-1580619305218-8423a7ef79b4",status:"Activo"},{name:"Oasis Nocturno",dur:"3h",diff:"Fácil",diffColor:"green",price:"S/ 60",img:"https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",status:"Pausado"}].map(o=>`
          <div style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px;overflow:hidden">
            <div style="height:120px;background:url('${o.img}') center/cover;position:relative">
              <span class="chip ${o.status==="Activo"?"chip-green":"chip-orange"}" style="position:absolute;top:8px;right:8px;font-size:10px">${o.status}</span>
            </div>
            <div style="padding:12px">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <div style="font-weight:700;font-size:15px">${o.name}</div>
                <button class="appbar-btn">${e("more-vertical",16)}</button>
              </div>
              <div style="display:flex;gap:8px;margin-top:8px">
                <span class="chip chip-green" style="font-size:10px">${e("clock",10)} ${o.dur}</span>
                <span class="chip" style="font-size:10px;background:var(--${o.diffColor}-light);color:var(--${o.diffColor})">${o.diff}</span>
              </div>
              <div style="font-weight:700;color:var(--green-primary);margin-top:8px">${o.price} <span style="font-size:11px;color:var(--text-secondary);font-weight:400">/ persona</span></div>
            </div>
          </div>
        `).join("")}
      </div>`},"perfil-guia":{title:"Mi Perfil de Guía",html:`<div class="flex-col gap-16" style="padding:24px">
        <div style="text-align:center">
          <div style="width:100px;height:100px;border-radius:50%;background:var(--green-bg-light);border:3px solid var(--green-primary);margin:0 auto;display:flex;align-items:center;justify-content:center;position:relative">
            ${e("user",40,"color:var(--green-primary)")}
            <div style="position:absolute;bottom:0;right:0;width:28px;height:28px;background:var(--green-primary);border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid white">${e("camera",14,"color:white")}</div>
          </div>
        </div>
        <div class="input-group"><label class="label">Nombre completo / Agencia</label><input class="input" value="Ica Tours Xtreme"></div>
        <div class="input-group"><label class="label">Años de experiencia</label>
          <div style="display:flex;align-items:center;gap:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:8px;padding:8px"><button class="btn btn-xs btn-outline">-</button><span style="flex:1;text-align:center;font-weight:700">8</span><button class="btn btn-xs btn-outline">+</button></div>
        </div>
        <div class="input-group"><label class="label">Idiomas</label>
          <div style="display:flex;flex-wrap:wrap;gap:8px">${["Español","Inglés","Francés","Portugués"].map((o,b)=>`<span class="chip ${b<2?"chip-green":"chip-outline"} chip-selectable" style="cursor:pointer">${o}</span>`).join("")}</div>
        </div>
        <div class="input-group"><label class="label">Certificaciones</label>
          <div class="flex-col gap-8">
            <div style="padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:8px">Guía Oficial de Turismo - MINCETUR</div>
            <div style="padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:8px">Primeros Auxilios en Campo</div>
            <button class="btn btn-outline btn-sm">${e("plus",14)} Añadir certificación</button>
          </div>
        </div>
        <div class="input-group"><label class="label">Historia personal <span style="color:var(--text-secondary)">(0/500)</span></label><textarea class="input" rows="4" placeholder="Cuenta tu historia como guía..."></textarea></div>
        <button class="btn btn-primary w-full">Guardar Perfil</button>
      </div>`},"preguntas-frecuentes":{title:"Preguntas Frecuentes",html:`<div class="flex-col gap-16" style="padding:24px">
        <button class="btn btn-primary w-full">${e("plus",16)} Añadir Pregunta</button>
        ${[{q:"¿Qué incluye el tour?",a:"Transporte, guía bilingüe, equipo de sandboarding y seguro..."},{q:"¿Hay límite de edad?",a:"Los tours extremos requieren mínimo 12 años. Los paseos..."},{q:"¿Qué debo llevar?",a:"Ropa cómoda, bloqueador solar, lentes de sol y agua..."}].map(o=>`
          <div style="padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div style="display:flex;justify-content:space-between"><div style="font-weight:700;font-size:14px">${o.q}</div><button class="appbar-btn">${e("more-vertical",14)}</button></div>
            <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">${o.a}</div>
          </div>
        `).join("")}
      </div>`},flota:{title:"Gestión de Flota",html:`<div style="padding:16px">
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">
          ${["Todos","Activos","En viaje","Inactivos","Suspendidos"].map((o,b)=>`<span class="chip ${b===0?"chip-active":"chip-outline"} chip-selectable" style="font-size:11px">${o}</span>`).join("")}
        </div>
        ${[{name:"Juan Martínez",vehicle:"Mototaxi",plate:"ABC-123",rating:"4.8",trips:234,status:"Activo",color:"green"},{name:"Pedro Rojas",vehicle:"Auto Particular",plate:"XYZ-789",rating:"4.5",trips:189,status:"En viaje",color:"blue"},{name:"Carlos López",vehicle:"Taxi Formal",plate:"DEF-456",rating:"4.2",trips:156,status:"Inactivo",color:"gray"}].map(o=>`
          <div style="display:flex;gap:12px;padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px;margin-bottom:12px;cursor:pointer" onclick="showToast('Abriendo perfil de conductor')">
            <div style="width:52px;height:52px;border-radius:50%;background:var(--${o.color}-light, #f3f4f6);border:3px solid var(--${o.color}, #9ca3af);display:flex;align-items:center;justify-content:center">${e("user",24)}</div>
            <div style="flex:1">
              <div style="font-weight:700;font-size:15px">${o.name}</div>
              <div style="display:flex;gap:8px;margin-top:4px;align-items:center">
                <span style="font-size:12px;color:var(--text-secondary)">${e("navigation",10)} ${o.vehicle}</span>
                <span class="chip" style="font-size:10px;background:#f3f4f6">${o.plate}</span>
              </div>
              <div style="display:flex;gap:12px;margin-top:6px;align-items:center">
                <span style="font-size:12px">${"★".repeat(Math.floor(parseFloat(o.rating)))} ${o.rating}</span>
                <span style="font-size:11px;color:var(--text-secondary)">${o.trips} viajes</span>
                <span class="chip chip-${o.color}" style="font-size:10px">${o.status}</span>
              </div>
            </div>
          </div>
        `).join("")}
        <button class="btn btn-primary" style="position:fixed;bottom:80px;right:16px;border-radius:50%;width:56px;height:56px;padding:0;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.2)">${e("plus",24)}</button>
      </div>`},tarifas:{title:"Mis Tarifas",html:`<div class="flex-col gap-16" style="padding:24px">
        <h3 style="font-size:16px;font-weight:700">Tarifas Base</h3>
        ${[{label:"Precio recogida base",prefix:"S/",val:"3.00"},{label:"Precio por kilómetro",prefix:"S/km",val:"1.50"},{label:"Precio mínimo por viaje",prefix:"S/",val:"5.00"}].map(o=>`
          <div style="padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <label class="label">${o.label}</label>
            <div style="display:flex;align-items:center;gap:8px;margin-top:8px"><span style="font-weight:700;color:var(--green-primary)">${o.prefix}</span><input class="input" value="${o.val}" type="number" style="flex:1"></div>
          </div>
        `).join("")}
        <div style="padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
          <div style="display:flex;justify-content:space-between;align-items:center"><label class="label">Tarifa nocturna</label><div class="switch active"></div></div>
          <div style="display:flex;gap:12px;margin-top:12px">
            <div class="input-group flex-1"><label class="label" style="font-size:11px">Desde</label><input class="input" value="22:00" type="time"></div>
            <div class="input-group flex-1"><label class="label" style="font-size:11px">Recargo %</label><input class="input" value="30" type="number"></div>
          </div>
        </div>
        <button class="btn btn-primary w-full">Guardar Tarifas Base</button>
        <h3 style="font-size:16px;font-weight:700;margin-top:16px">Rutas Especiales (Precio Fijo)</h3>
        <button class="btn btn-outline w-full">${e("plus",14)} Añadir Ruta Especial</button>
        ${[{name:"Aeropuerto → Centro",price:"S/ 25.00"},{name:"Plaza de Armas → Huacachina",price:"S/ 15.00"}].map(o=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div><div style="font-weight:600">${o.name}</div><div style="font-size:13px;color:var(--green-primary);font-weight:700">${o.price}</div></div>
            <div class="switch active"></div>
          </div>
        `).join("")}
      </div>`},"carta-bebidas":{title:"Mi Carta de Bebidas",html:`<div style="padding:16px">
        <div style="display:flex;background:var(--surface);border-radius:12px;padding:4px;margin-bottom:16px;overflow-x:auto;gap:2px">
          ${["Cocteles","Internacional","Cervezas","Vinos","Sin Alcohol"].map((o,b)=>`<button class="btn ${b===0?"btn-primary":"btn-outline"}" style="flex:1;border:none;white-space:nowrap;font-size:12px;padding:8px 12px;border-radius:8px">${o}</button>`).join("")}
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <h3 style="font-size:16px;font-weight:700;color:var(--green-primary)">Cocteles de la Casa <span style="color:var(--text-secondary);font-weight:400">(5)</span></h3>
          <button class="btn btn-outline btn-sm">${e("plus",14)} Añadir</button>
        </div>
        ${[{name:"Pisco Sour Especial",price:"S/ 22",badge:!0,alcohol:!0},{name:"Chilcano de Maracuyá",price:"S/ 18",badge:!1,alcohol:!0},{name:"Mojito Iqueño",price:"S/ 20",badge:!0,alcohol:!0}].map(o=>`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px;margin-bottom:8px">
            <div style="width:52px;height:52px;background:#f3e8ff;border-radius:8px;display:flex;align-items:center;justify-content:center">${e("coffee",24,"color:#7c3aed")}</div>
            <div style="flex:1">
              <div style="font-weight:700;font-size:14px;display:flex;align-items:center;gap:6px">${o.name} ${o.badge?'<span style="background:linear-gradient(135deg,#f59e0b,#d97706);color:white;font-size:9px;padding:2px 6px;border-radius:4px">★ Especialidad</span>':""}</div>
              <div style="display:flex;gap:6px;margin-top:4px">${o.alcohol?'<span class="chip" style="font-size:9px;background:#fee2e2;color:#dc2626">18+</span>':""}<span class="chip" style="font-size:9px;background:#fef3c7;color:#d97706">Con alcohol</span></div>
            </div>
            <div style="font-weight:700;color:var(--green-primary)">${o.price}</div>
          </div>
        `).join("")}
      </div>`},"zonas-local":{title:"Zonas del Local",html:`<div class="flex-col gap-16" style="padding:24px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div><span style="font-weight:700">Modo Aforo Máximo</span><br><span style="font-size:12px;color:var(--text-secondary)">Bloquea reservas al alcanzar límite</span></div>
          <div class="switch active"></div>
        </div>
        <div style="padding:12px;background:var(--orange-light);border-radius:8px;text-align:center"><span style="font-weight:700;font-size:20px">156</span> <span style="color:var(--text-secondary)">/ 300 aforo</span>
          <div style="width:100%;height:8px;background:var(--border-light);border-radius:4px;margin-top:8px;overflow:hidden"><div style="width:52%;height:100%;background:var(--orange);border-radius:4px"></div></div>
        </div>
        <div style="aspect-ratio:1;background:#fafafa;border:2px dashed var(--border-light);border-radius:12px;position:relative">
          <div style="position:absolute;top:10px;left:10px;right:50%;bottom:50%;background:var(--orange-light);border-radius:8px;opacity:0.5;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--orange);font-weight:600">Barra</div>
          <div style="position:absolute;top:55%;left:10px;right:10px;bottom:10px;background:#ede9fe;border-radius:8px;opacity:0.5;display:flex;align-items:center;justify-content:center;font-size:11px;color:#7c3aed;font-weight:600">Zona VIP</div>
          <div style="position:absolute;top:10px;left:55%;right:10px;bottom:55%;background:var(--red-light);border-radius:8px;opacity:0.5;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--red);font-weight:600">Pista</div>
        </div>
        <div style="display:flex;gap:8px">
          <button class="btn btn-primary flex-1">${e("plus",14)} Mesa</button>
          <button class="btn btn-outline flex-1">${e("layout",14)} Zona</button>
          <button class="btn btn-outline flex-1">${e("eye",14)} Preview</button>
        </div>
      </div>`},shows:{title:"Shows y Eventos",html:`<div class="flex-col gap-16" style="padding:24px">
        <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center;font-size:11px;margin-bottom:8px">
          ${["L","M","X","J","V","S","D"].map(o=>`<div style="font-weight:600;color:var(--text-secondary)">${o}</div>`).join("")}
          ${Array.from({length:28},(o,b)=>`<div style="padding:8px 0;border-radius:8px;${[5,12,19,26].includes(b)?"background:var(--green-bg-light)":""}${[6,13].includes(b)?"background:var(--orange-light)":""};cursor:pointer;position:relative">${b+1}${[5,12,19,26].includes(b)?'<div style="width:4px;height:4px;background:var(--green-primary);border-radius:50%;margin:2px auto 0"></div>':""}${[6,13].includes(b)?'<div style="width:4px;height:4px;background:var(--orange);border-radius:50%;margin:2px auto 0"></div>':""}</div>`).join("")}
        </div>
        <h3 style="font-size:15px;font-weight:700">Próximos Shows</h3>
        ${[{artist:"DJ Noche Latina",type:"DJ set",date:"Sáb 22, 11:00 PM",typeColor:"blue"},{artist:"Los Trovadores de Ica",type:"Música en vivo",date:"Vie 28, 10:00 PM",typeColor:"green"},{artist:"Comedia Stand Up",type:"Stand up comedy",date:"Sáb 29, 9:00 PM",typeColor:"orange"}].map(o=>`
          <div style="display:flex;gap:12px;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div style="width:60px;height:60px;border-radius:50%;background:var(--${o.typeColor}-light);display:flex;align-items:center;justify-content:center">${e("music",24,"color:var(--"+o.typeColor+")")}</div>
            <div style="flex:1"><div style="font-weight:700">${o.artist}</div><span class="chip chip-${o.typeColor}" style="font-size:10px">${o.type}</span><div style="font-size:12px;color:var(--text-secondary);margin-top:4px">${o.date}</div></div>
          </div>
        `).join("")}
        <button class="btn btn-primary" style="position:fixed;bottom:80px;right:16px;border-radius:50%;width:56px;height:56px;padding:0;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.2)">${e("plus",24)}</button>
      </div>`},"lista-vip":{title:"Lista VIP y Cortesía",html:`<div class="flex-col gap-16" style="padding:24px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div><span style="font-size:13px;color:var(--text-secondary)">Esta noche</span><br><span style="font-weight:700">Sábado 22 de Marzo</span></div>
          <span class="chip chip-green">Lista Abierta</span>
        </div>
        <button class="btn btn-primary w-full">${e("plus",16)} Añadir a la Lista</button>
        ${[{name:"Alejandro M.",acomp:4,benefit:"Mesa reservada",benefitColor:"purple",status:"Pendiente",statusColor:"yellow"},{name:"Carla R.",acomp:2,benefit:"Entrada gratis",benefitColor:"green",status:"Ingresó 11:30 PM",statusColor:"green"},{name:"Diego F.",acomp:6,benefit:"Sin cola",benefitColor:"gray",status:"Pendiente",statusColor:"yellow"}].map(o=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div>
              <div style="font-weight:700">${o.name} <span style="font-size:12px;color:var(--text-secondary);font-weight:400">+${o.acomp}</span></div>
              <div style="display:flex;gap:6px;margin-top:4px"><span class="chip chip-${o.benefitColor}" style="font-size:10px">${o.benefit}</span></div>
            </div>
            <span class="chip chip-${o.statusColor}" style="font-size:10px">${o.status}</span>
          </div>
        `).join("")}
        <button class="btn btn-outline w-full" style="color:var(--red);border-color:var(--red)">Cerrar Lista de Esta Noche</button>
      </div>`},catalogo:{title:"Mi Catálogo de Productos",html:`<div style="padding:16px">
        <div style="display:flex;gap:8px;margin-bottom:12px"><input class="input" placeholder="Buscar en mi catálogo..." style="flex:1"><button class="btn btn-primary btn-sm">${e("plus",14)}</button></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">${["Todos","Cerámica","Tejidos","Réplicas","Pisco"].map((o,b)=>`<span class="chip ${b===0?"chip-active":"chip-outline"} chip-selectable" style="font-size:11px">${o}</span>`).join("")}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          ${[{name:"Vasija Nazca Ceremonial",price:"S/ 120",stock:3,unique:!0,img:"https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261"},{name:"Textil Paracas Bordado",price:"S/ 85",stock:8,unique:!1,img:"https://images.unsplash.com/photo-1558618666-fcd25c85f82e"},{name:"Pisco Artesanal 750ml",price:"S/ 45",stock:0,unique:!1,img:"https://images.unsplash.com/photo-1569529465841-dfecdab7503b"},{name:"Réplica Candelabro",price:"S/ 95",stock:5,unique:!1,img:"https://images.unsplash.com/photo-1513364776144-60967b0f800f"}].map(o=>`
            <div style="background:var(--surface);border:1px solid var(--border-light);border-radius:12px;overflow:hidden;position:relative">
              <div style="height:140px;background:url('${o.img}') center/cover"></div>
              ${o.unique?'<span style="position:absolute;top:8px;left:8px;background:linear-gradient(135deg,#f59e0b,#d97706);color:white;font-size:9px;padding:2px 8px;border-radius:4px;font-weight:600">Pieza Única</span>':""}
              ${o.stock===0?'<span style="position:absolute;top:8px;right:8px;background:var(--red);color:white;font-size:9px;padding:2px 8px;border-radius:4px">Agotado</span>':""}
              <div style="padding:10px">
                <div style="font-weight:700;font-size:13px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${o.name}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px">
                  <span style="font-weight:700;color:var(--green-primary);font-size:13px">${o.price}</span>
                  <span style="font-size:11px;color:var(--text-secondary)">Stock: ${o.stock}</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>`},medicos:{title:"Mi Equipo Médico",html:`<div class="flex-col gap-16" style="padding:24px">
        <button class="btn btn-primary w-full">${e("plus",16)} Añadir Médico</button>
        ${[{name:"Dr. Roberto García",spec:"Dermatología",price:"S/ 80",days:["L","M","X","J","V"],active:!0},{name:"Dra. Ana Mendoza",spec:"Pediatría",price:"S/ 70",days:["L","X","V"],active:!0},{name:"Dr. Luis Torres",spec:"Medicina General",price:"S/ 50",days:["L","M","X","J","V","S"],active:!1}].map(o=>`
          <div style="display:flex;gap:12px;padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px;${o.active?"":"opacity:0.6"}">
            <div style="width:52px;height:52px;border-radius:50%;background:var(--blue-light);border:3px solid var(--blue);display:flex;align-items:center;justify-content:center">${e("user",24,"color:var(--blue)")}</div>
            <div style="flex:1">
              <div style="font-weight:700;font-size:15px">${o.name}</div>
              <span class="chip chip-blue" style="font-size:10px">${o.spec}</span>
              <div style="display:flex;gap:4px;margin-top:8px">${["L","M","X","J","V","S","D"].map(b=>`<span style="width:24px;height:24px;border-radius:50%;font-size:10px;display:flex;align-items:center;justify-content:center;${o.days.includes(b)?"background:var(--green-bg-light);color:var(--green-primary);font-weight:700":"background:#f3f4f6;color:#9ca3af"}">${b}</span>`).join("")}</div>
              <div style="font-weight:700;color:var(--green-primary);margin-top:6px">${o.price}</div>
            </div>
            <div class="switch ${o.active?"active":""}"></div>
          </div>
        `).join("")}
      </div>`},"stock-farmacia":{title:"Stock de Farmacia",html:`<div style="padding:16px">
        <input class="input" placeholder="Buscar medicamento..." style="margin-bottom:16px">
        ${[{name:"Paracetamol 500mg",active:"Acetaminofén",pres:"Comprimidos",price:"S/ 2.50",stock:120,receta:!1},{name:"Amoxicilina 500mg",active:"Amoxicilina trihidrato",pres:"Cápsulas",price:"S/ 3.80",stock:8,receta:!0},{name:"Ibuprofeno 400mg",active:"Ibuprofeno",pres:"Comprimidos",price:"S/ 1.80",stock:0,receta:!1},{name:"Omeprazol 20mg",active:"Omeprazol",pres:"Cápsulas",price:"S/ 2.20",stock:45,receta:!1}].map(o=>`
          <div style="display:flex;gap:12px;align-items:center;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px;margin-bottom:8px">
            <div style="flex:1">
              <div style="font-weight:700;font-size:14px">${o.name}</div>
              <div style="font-size:12px;color:var(--text-secondary)">${o.active}</div>
              <div style="display:flex;gap:8px;margin-top:6px;align-items:center">
                <span style="font-size:12px;color:var(--text-secondary)">${o.pres}</span>
                <span style="font-weight:700;color:var(--green-primary)">${o.price}</span>
                ${o.receta?`<span class="chip" style="font-size:9px;background:#fee2e2;color:#dc2626">${e("file-text",10)} Receta</span>`:""}
              </div>
            </div>
            <div style="text-align:center;cursor:pointer" onclick="showToast('Ajustar stock')">
              <div style="font-size:18px;font-weight:700;padding:6px 12px;border-radius:8px;${o.stock>10?"background:var(--green-bg-light);color:var(--green-primary)":o.stock>0?"background:var(--orange-light);color:var(--orange)":"background:var(--red-light);color:var(--red)"}">${o.stock}</div>
              <div style="font-size:9px;color:var(--text-secondary)">stock</div>
            </div>
          </div>
        `).join("")}
        <button class="btn btn-primary" style="position:fixed;bottom:80px;right:16px;border-radius:50%;width:56px;height:56px;padding:0;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.2)">${e("plus",24)}</button>
      </div>`},"notificaciones-config":{title:"Configuración de Notificaciones",html:`<div class="flex-col gap-16" style="padding:24px">
        <h3 style="font-size:15px;font-weight:700">Notificaciones de Clientes</h3>
        ${["Nueva reserva o pedido","Nueva calificación o reseña","Nuevo comentario en mi perfil","Cliente contactó desde la app","Cliente guardó mi negocio","Consulta de disponibilidad"].map(o=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:8px"><span style="font-size:14px">${o}</span><div class="switch active"></div></div>
        `).join("")}
        <h3 style="font-size:15px;font-weight:700;margin-top:8px">Resúmenes</h3>
        ${["Resumen diario (8:00 PM)","Resumen semanal (Lunes)","Alertas de métricas (-20%)"].map(o=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:8px"><span style="font-size:14px">${o}</span><div class="switch active"></div></div>
        `).join("")}
        <h3 style="font-size:15px;font-weight:700;margin-top:8px">Sonido</h3>
        <div style="display:flex;gap:8px">${["Predeterminado","Tono suave","Sin sonido"].map((o,b)=>`<span class="chip ${b===0?"chip-active":"chip-outline"} chip-selectable">${o}</span>`).join("")}</div>
      </div>`},"horarios-especiales":{title:"Horarios Especiales",html:`<div class="flex-col gap-16" style="padding:24px">
        <button class="btn btn-primary w-full">${e("plus",16)} Añadir Horario Especial</button>
        ${[{dates:"Mar 28 - Mar 30",note:"Semana Santa: horario reducido",type:"8:00 AM - 2:00 PM"},{dates:"Abr 15",note:"Feriado regional",type:"Cerrado"}].map(o=>`
          <div style="padding:16px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div style="display:flex;justify-content:space-between"><span style="font-weight:700">${o.dates}</span><button class="appbar-btn" style="color:var(--red)">${e("trash-2",14)}</button></div>
            <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">${o.note}</div>
            <span class="chip ${o.type==="Cerrado"?"chip-red":"chip-orange"}" style="font-size:11px;margin-top:8px">${o.type}</span>
          </div>
        `).join("")}
      </div>`},contacto:{title:"Información de Contacto",html:`<div class="flex-col gap-16" style="padding:24px">
        <div class="input-group"><label class="label">${e("phone",14)} Teléfono principal</label><input class="input" value="+51 956 789 012"></div>
        <div class="input-group"><label class="label" style="color:#25D366">${e("message-circle",14)} WhatsApp</label><input class="input" value="+51 956 789 012"></div>
        <div class="input-group"><label class="label">${e("mail",14)} Email</label><input class="input" value="contacto@negocio.com"></div>
        <div class="input-group"><label class="label">${e("globe",14)} Sitio web</label><input class="input" value="www.negocio.com"></div>
        <h3 style="font-size:15px;font-weight:700">Redes Sociales</h3>
        <div class="input-group"><label class="label" style="color:#E4405F">${e("instagram",14)} Instagram</label><div style="display:flex;align-items:center;gap:4px"><span style="color:var(--text-secondary)">@</span><input class="input" value="mi_negocio_ica" style="flex:1"></div></div>
        <div class="input-group"><label class="label" style="color:#1877F2">${e("facebook",14)} Facebook</label><div style="display:flex;align-items:center;gap:4px"><span style="color:var(--text-secondary)">@</span><input class="input" value="MiNegocioIca" style="flex:1"></div></div>
        <div style="display:flex;justify-content:space-between;align-items:center;padding:16px;background:var(--green-bg-light);border-radius:12px;margin-top:8px">
          <div><span style="font-weight:700">Recibir consultas directas</span><br><span style="font-size:12px;color:var(--text-secondary)">Botón "Consultar" visible al cliente</span></div>
          <div class="switch active"></div>
        </div>
        <button class="btn btn-primary w-full">Guardar Contacto</button>
      </div>`},documentos:{title:"Documentos del Negocio",html:`<div class="flex-col gap-16" style="padding:24px">
        <button class="btn btn-primary w-full">${e("upload",16)} Subir Documento</button>
        ${[{name:"RUC - Ficha SUNAT",type:"pdf",date:"Ene 15, 2026",exp:null,status:null},{name:"Licencia de Funcionamiento",type:"pdf",date:"Feb 01, 2026",exp:"Dic 31, 2026",status:"ok"},{name:"Certificado de Salubridad",type:"img",date:"Mar 05, 2026",exp:"Abr 10, 2026",status:"pronto"},{name:"SOAT Vehículo",type:"pdf",date:"Ene 20, 2026",exp:"Ene 15, 2026",status:"vencido"}].map(o=>`
          <div style="display:flex;gap:12px;align-items:center;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div style="width:40px;height:40px;border-radius:8px;background:${o.type==="pdf"?"#fee2e2":"var(--blue-light)"};display:flex;align-items:center;justify-content:center">${e(o.type==="pdf"?"file-text":"image",20,o.type==="pdf"?"color:#dc2626":"color:var(--blue)")}</div>
            <div style="flex:1">
              <div style="font-weight:600;font-size:13px">${o.name}</div>
              <div style="font-size:11px;color:var(--text-secondary)">Subido: ${o.date}</div>
              ${o.exp?`<div style="font-size:11px;margin-top:2px">Vence: ${o.exp} ${o.status==="pronto"?'<span class="chip chip-orange" style="font-size:9px">Vence pronto</span>':o.status==="vencido"?'<span class="chip chip-red" style="font-size:9px">Vencido</span>':""}</div>`:""}
            </div>
          </div>
        `).join("")}
      </div>`},"historial-cambios":{title:"Historial de Cambios",html:`<div class="flex-col gap-12" style="padding:24px">
        ${[{text:"Cambió el precio de Suite Matrimonial de S/150 a S/180",date:"Mar 20, 2026 — 3:45 PM",status:"Aprobado"},{text:"Actualizó el menú del día",date:"Mar 19, 2026 — 11:00 AM",status:"Aprobado"},{text:"Cambió el nombre del negocio",date:"Mar 18, 2026 — 9:30 AM",status:"Pendiente"},{text:"Subió nuevo certificado de salubridad",date:"Mar 15, 2026 — 2:15 PM",status:"Aprobado"},{text:"Añadió nuevo tipo de habitación",date:"Mar 12, 2026 — 10:00 AM",status:"Aprobado"}].map(o=>`
          <div style="display:flex;gap:12px;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:12px">
            <div style="width:32px;height:32px;border-radius:8px;background:#f3f4f6;display:flex;align-items:center;justify-content:center;flex-shrink:0">${e("edit",14,"color:#9ca3af")}</div>
            <div style="flex:1">
              <div style="font-size:13px">${o.text}</div>
              <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">${o.date}</div>
            </div>
            <span class="chip chip-${o.status==="Aprobado"?"green":"orange"}" style="font-size:10px;flex-shrink:0">${o.status}</span>
          </div>
        `).join("")}
      </div>`}}[a];if(!n){E("/biz-dashboard");return}if(i.innerHTML=`
    <div class="screen bg-body" style="min-height:100vh">
      <div class="appbar" style="background:var(--surface);position:sticky;top:0;z-index:10;border-bottom:1px solid var(--border-light)">
        <button class="appbar-btn" id="btn-back">${e("arrow-left",24)}</button>
        <div class="title" style="font-weight:600;font-size:18px">${n.title}</div>
        <div style="width:48px"></div>
      </div>
      <div style="overflow-y:auto">${n.html}</div>
    </div>
  `,A(),document.getElementById("btn-back").onclick=De,a==="habitaciones"){const o=document.getElementById("btn-add-room"),b=document.getElementById("view-room-list"),r=document.getElementById("view-room-form"),s=document.getElementById("btn-cancel-room"),y=document.getElementById("btn-save-room");o&&(o.onclick=()=>{b.style.display="none",r.style.display="block"}),s&&(s.onclick=()=>{r.style.display="none",b.style.display="block"}),y&&(y.onclick=()=>{f("Tipo de habitación guardado"),r.style.display="none",b.style.display="block"})}if(a==="disponibilidad"){const o=document.getElementById("btn-block-dates");o&&(o.onclick=()=>f("Abriendo calendario de bloqueos..."))}document.querySelectorAll(".chip-selectable").forEach(o=>o.onclick=()=>o.classList.toggle("chip-active")),document.querySelectorAll(".template-btn").forEach(o=>o.onclick=()=>f(e("copy",16)+" Plantilla copiada al portapapeles"));const l=document.getElementById("btn-live-chat");l&&(l.onclick=()=>f(e("headphones",16)+" Conectando con agente de soporte...")),document.querySelectorAll(".btn-primary, .btn-outline").forEach(o=>{if(o.id==="btn-back"||o.id==="btn-live-chat"||o.onclick)return;const b=o.textContent.trim().toLowerCase();o.onclick||o.addEventListener("click",()=>{b.includes("guardar")||b.includes("save")?f(e("check",16)+" Cambios guardados correctamente"):b.includes("descargar")||b.includes("download")?f(e("download",16)+" Descargando archivo..."):b.includes("conectar")?f(e("link",16)+" Conectando red social..."):b.includes("desconectar")?f(e("link-2",16)+" Red social desconectada"):b.includes("agregar")||b.includes("proponer")||b.includes("personalizar")?f(e("plus",16)+" Funcionalidad disponible próximamente"):b.includes("responder")?f(e("message-circle",16)+" Abriendo área de respuesta..."):b.includes("reportar")?f(e("flag",16)+" Reporte enviado. Lo revisaremos pronto."):b.includes("cambiar")||b.includes("actualizar")?f(e("settings",16)+" Abriendo configuración..."):b.includes("eliminar")?te("Confirmar","¿Estás seguro de realizar esta acción?",[{label:"Cancelar",class:"btn-outline"},{label:"Confirmar",class:"btn-primary",callback:()=>f(e("check",16)+" Acción completada")}]):f(e("check",16)+" Acción realizada")})}),document.querySelectorAll('[style*="aspect-ratio:1"]').forEach(o=>{o.addEventListener("click",()=>f(e("camera",16)+" Abriendo galería..."))})}function ea(){const p=document.getElementById("app"),i=be();let a="list",t="Todos",n=null;const l=["Todos","Naturaleza","Gastronómico","Cultural","Mirador","Artístico","Histórico"],o=[{key:"poco",label:"Poco conocido",desc:"3–20 visitas"},{key:"muy",label:"Muy escondido",desc:"< 10 visitas"},{key:"solo",label:"Solo tú lo sabes",desc:"< 3 visitas"}],b=i.length,r=i.filter(g=>g.sharedBy==="María García").length,s=50;function y(){const g=i.filter(d=>!(t!=="Todos"&&d.category!==t));p.innerHTML=`
      <div class="screen" style="padding-bottom:12px;background:var(--cream)">
        <!-- AppBar dorada -->
        <div class="appbar" style="background:var(--cream);border-bottom:1px solid rgba(201,168,76,0.2)">
          <button class="appbar-btn" id="btn-back" style="color:var(--gold-dark)">${e("arrow-left",24)}</button>
          <div style="display:flex;align-items:center;gap:8px">
            <span style="color:var(--gold)">${e("eye-off",20)}</span>
            <span class="appbar-title" style="font-size:18px">Lugares Ocultos</span>
          </div>
          <div style="display:flex;gap:4px">
            <button class="appbar-btn" id="btn-toggle-view" style="color:${a==="map"?"var(--gold)":"var(--text-secondary)"}">${e(a==="list"?"map":"list",22)}</button>
            <button class="appbar-btn" id="btn-filters-adv" style="color:var(--text-secondary)">${e("sliders",22)}</button>
          </div>
        </div>

        <!-- Encabezado 160px -->
        <div style="min-height:160px;padding:20px;background:linear-gradient(180deg,var(--cream) 0%,var(--gold-light) 100%);background-image:radial-gradient(circle,var(--gold) 0.6px,transparent 0.6px);background-size:20px 20px;position:relative">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px">
            <div>
              <div style="font-size:32px;font-weight:700;color:var(--gold)">${b}</div>
              <div style="font-size:13px;color:var(--text-secondary)">lugares descubiertos en Ica</div>
            </div>
            <div style="text-align:right">
              ${r>0?`<div style="font-size:24px;font-weight:700;color:var(--green-primary)">${r}</div>
                   <div style="font-size:12px;color:var(--text-secondary)">que tú descubriste</div>`:'<div style="font-size:12px;color:var(--text-secondary);font-style:italic;max-width:140px">Sé el primero en compartir un secreto</div>'}
            </div>
          </div>
          <div>
            <div style="font-size:11px;color:var(--text-secondary);margin-bottom:6px">La comunidad ha revelado <strong>${b}</strong> de <strong>${s}</strong> lugares secretos estimados de Ica</div>
            <div style="height:8px;background:rgba(0,0,0,0.08);border-radius:4px;overflow:hidden">
              <div style="height:100%;width:${b/s*100}%;background:var(--gold);border-radius:4px;transition:width 0.5s"></div>
            </div>
          </div>
        </div>

        <!-- Filtros categoría -->
        <div class="filter-chips" style="background:var(--cream)">
          ${l.map(d=>`<span class="chip ${d===t?"chip-gold":"chip-outline"} chip-selectable" data-cat="${d}" style="white-space:nowrap;font-size:12px">${d}</span>`).join("")}
        </div>

        <!-- Filtros secretismo -->
        <div style="padding:0 16px 8px;display:flex;gap:6px;flex-wrap:wrap">
          <span style="font-size:11px;color:var(--text-secondary);display:flex;align-items:center;gap:4px;margin-right:4px">${e("lock",12)} Secretismo:</span>
          ${o.map(d=>`<span class="chip ${d.key===n?"chip-gold":"chip-outline"} chip-selectable" data-secrecy="${d.key}" style="font-size:10px">${d.label}</span>`).join("")}
        </div>

        <div class="screen-content" style="padding-bottom:12px">
          ${a==="list"?c(g):x(g)}
        </div>

        <!-- FAB publicar -->
        <button class="fab" id="btn-publish-hidden" style="bottom:80px;right:16px;background:var(--gold);color:#1A1A1A;box-shadow:0 4px 16px rgba(201,168,76,0.4)">
          ${e("plus",24)}
        </button>
      </div>
    `,W("/home","user"),A(),C()}function c(g){return g.length===0?`<div style="text-align:center;padding:60px 20px">
        <div style="color:var(--gold);margin-bottom:16px">${e("eye-off",48,"color:var(--gold)")}</div>
        <h3 style="font-size:18px;margin-bottom:8px">No hay secretos aún</h3>
        <p style="font-size:13px;color:var(--text-secondary)">Sé el primero en descubrir un lugar oculto en esta categoría</p>
      </div>`:`<div style="padding:0 16px">
      ${g.map(d=>{const z=d.validationCount||Math.floor(Math.random()*15)+1;return`
        <div class="hidden-full-card" data-hp="${d.id}">
          <img src="${d.image}" alt="${d.name}" />
          <div style="position:absolute;top:10px;left:10px">
            <span style="color:var(--gold);display:flex">${e("eye",18,"color:var(--gold)")}</span>
          </div>
          <div style="position:absolute;top:10px;right:10px">
            ${le(d.safety||"safe")}
          </div>
          <div class="hfc-gradient">
            <div style="font-weight:700;font-size:17px;color:white;margin-bottom:4px">${d.name}</div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
              <span class="chip" style="background:rgba(201,168,76,0.3);color:var(--gold-light);font-size:10px;border:1px solid rgba(201,168,76,0.5);padding:2px 8px">${d.category}</span>
              <span style="color:rgba(255,255,255,0.8);font-size:12px;display:flex;align-items:center;gap:3px">${e("eye",10,"color:rgba(255,255,255,0.7)")} ${z} visitas</span>
              <span style="color:#FFD54F;font-size:12px">${ge(Math.round(d.rating||4))}</span>
            </div>
            <div style="display:flex;align-items:center;gap:6px">
              <div style="width:24px;height:24px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-size:10px;color:white;font-weight:700;border:2px solid rgba(255,255,255,0.4)">${(d.sharedBy||"A")[0]}</div>
              <span style="color:rgba(255,255,255,0.7);font-size:12px">Descubierto por</span>
              <span style="color:white;font-size:12px;font-weight:700">${d.sharedBy||"Anónimo"}</span>
            </div>
          </div>
        </div>`}).join("")}
    </div>`}function x(g){return`<div style="padding:16px">
      <div style="height:400px;background:#e8f5e9;border-radius:16px;position:relative;overflow:hidden;border:2px solid var(--gold)">
        <img src="https://picsum.photos/seed/ica-map-hidden/600/400" style="width:100%;height:100%;object-fit:cover;opacity:0.6" />
        ${g.slice(0,5).map((d,z)=>{const v=15+z*18%70,h=10+z*23%75;return`<div class="gold-pulse" data-mhp="${d.id}" style="position:absolute;top:${v}%;left:${h}%;width:32px;height:32px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;cursor:pointer;border:2px solid white;z-index:${10+z}">${e("eye-off",14,"color:white")}</div>`}).join("")}
        <div style="position:absolute;bottom:12px;left:12px;right:12px;background:var(--cream);border:1.5px solid var(--gold);border-radius:12px;padding:10px 12px;display:none" id="map-popup">
          <div style="display:flex;gap:10px;align-items:center">
            <div style="width:60px;height:45px;border-radius:8px;background:#ddd;overflow:hidden"><img src="" id="popup-img" style="width:100%;height:100%;object-fit:cover" /></div>
            <div style="flex:1">
              <div style="font-weight:700;font-size:13px" id="popup-name"></div>
              <div style="font-size:11px;color:var(--text-secondary);font-style:italic">Toca para descubrir este lugar</div>
            </div>
            <button class="btn btn-sm" id="popup-btn" style="background:var(--gold);color:#1A1A1A;font-size:11px;padding:6px 12px;white-space:nowrap">Ver secreto</button>
          </div>
        </div>
      </div>
    </div>`}function C(){document.getElementById("btn-back").onclick=()=>E("/home"),document.getElementById("btn-toggle-view").onclick=()=>{a=a==="list"?"map":"list",y()},document.getElementById("btn-publish-hidden").onclick=()=>E("/publish-place"),document.getElementById("btn-filters-adv").onclick=()=>{H(`
        <div style="padding:24px">
          <h3 style="margin-bottom:16px;display:flex;align-items:center;gap:8px">${e("sliders",18)} Filtros Avanzados</h3>
          <div class="flex-col gap-16">
            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:10px">
              <span style="font-size:14px">Solo lugares que no he visitado</span>
              <div class="switch" id="sw-unvisited"></div>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:10px">
              <span style="font-size:14px">Publicados por personas que sigo</span>
              <div class="switch" id="sw-following"></div>
            </div>
            <div style="padding:12px;background:var(--surface);border:1px solid var(--border-light);border-radius:10px">
              <label class="label" style="margin-bottom:8px">Distancia máxima</label>
              <input type="range" min="1" max="50" value="25" style="width:100%" />
              <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-secondary)"><span>1 km</span><span>50 km</span></div>
            </div>
            <button class="btn btn-primary w-full" onclick="this.closest('.bottom-sheet-overlay')?.remove()">Aplicar Filtros</button>
          </div>
        </div>
      `)},document.querySelectorAll("[data-cat]").forEach(g=>{g.onclick=()=>{t=g.dataset.cat,y()}}),document.querySelectorAll("[data-secrecy]").forEach(g=>{g.onclick=()=>{n=n===g.dataset.secrecy?null:g.dataset.secrecy,y()}}),document.querySelectorAll("[data-hp]").forEach(g=>{g.onclick=()=>E("/place?id="+g.dataset.hp)}),document.querySelectorAll("[data-mhp]").forEach(g=>{g.onclick=()=>{const d=i.find(v=>v.id===g.dataset.mhp);if(!d)return;const z=document.getElementById("map-popup");z&&(z.style.display="block",document.getElementById("popup-img").src=d.image,document.getElementById("popup-name").textContent=d.name,document.getElementById("popup-btn").onclick=()=>E("/place?id="+d.id))}}),document.querySelectorAll(".switch").forEach(g=>{g.onclick=()=>g.classList.toggle("active")})}y()}function ta(){const p=document.getElementById("app");let i="Todos",a="Todos";const t=["Todos","Restaurante","Cafetería","Cevichería","Picantería","Panadería","Heladería","Food truck"],n=["Todos","Económico","Medio","Premium"];function l(){let r=J.filter(s=>s.category==="Gastronomía"&&!s.hidden);i!=="Todos"&&(r=r.filter(s=>s.tags&&s.tags.includes(i)||s.subType===i)),p.innerHTML=`
      <div class="screen" style="padding-bottom:12px; background:var(--bg-body)">
        <div class="appbar" style="background:var(--surface); box-shadow:var(--shadow-sm)">
          <button class="appbar-btn" id="btn-back">${e("arrow-left",20)}</button>
          <span class="appbar-title">Gastronomía</span>
          <button class="appbar-btn" id="btn-filter">${e("sliders",20)}</button>
        </div>

        <div style="padding: 16px;">
          <!-- Sub-type chips -->
          <div class="scroll-x" style="display:flex; gap:8px; margin-bottom:16px;">
            ${t.map(s=>`
              <button class="chip ${i===s?"chip-active":"chip-outline"} chip-selectable" data-subtype="${s}">
                ${s}
              </button>
            `).join("")}
          </div>

          <!-- Price toggles -->
          <div style="display:flex; gap:8px; margin-bottom:24px;">
            ${n.map(s=>`
              <button class="chip ${a===s?"chip-active":"chip-outline"} chip-selectable" style="flex:1; justify-content:center" data-price="${s}">
                ${s==="Todos"?s:s==="Económico"?"$":s==="Medio"?"$$":"$$$"}
              </button>
            `).join("")}
          </div>

          <!-- List View -->
          <div class="flex-col gap-16">
            ${r.length>0?r.map(s=>`
              <div class="card-flat" data-gastro="${s.id}" style="padding:0;border-radius:16px;overflow:hidden;cursor:pointer">
                <div style="position:relative">
                  <img src="${s.image}" alt="${s.name}" style="width:100%;height:160px;object-fit:cover" />
                  <div style="position:absolute;top:10px;left:10px;display:flex;gap:6px">
                    <span class="chip chip-${s.catColor||"green"}" style="font-size:10px;padding:3px 10px;backdrop-filter:blur(4px)">${s.category}</span>
                    ${s.subType?`<span class="chip" style="background:rgba(0,0,0,0.5);color:white;font-size:10px;padding:3px 10px;backdrop-filter:blur(4px)">${s.subType}</span>`:""}
                  </div>
                  <div style="position:absolute;top:10px;right:10px">
                     ${le(s.safety).replace("Shield",e("shield",12)).replace("✓","")}
                  </div>
                </div>
                <div style="padding:14px 16px">
                  <div style="font-weight:700;font-size:16px;margin-bottom:4px">${s.name}</div>
                  <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
                    ${ge(Math.round(s.rating)).replace(/★/g,e("star",12,"text-orange")).replace(/☆/g,e("star",12,"text-disabled"))}
                    <span style="font-size:12px;color:var(--text-secondary);font-weight:500">${s.rating} (${s.reviews} op.)</span>
                  </div>
                  <div style="font-size:12px;color:var(--text-secondary);margin-bottom:4px;display:flex;align-items:center;gap:4px">${e("map-pin",12)} ${s.address}</div>
                  ${s.hours?`<div style="font-size:12px;color:var(--text-secondary);margin-bottom:8px;display:flex;align-items:center;gap:4px">${e("clock",12)} ${s.hours}</div>`:""}
                  <div style="font-size:13px;color:var(--text-secondary);margin-bottom:12px;line-height:1.4">${s.description?s.description.substring(0,100)+"...":""}</div>
                  <div style="display:flex;gap:4px;flex-wrap:wrap">
                    ${(s.tags||[]).slice(0,4).map(y=>`<span class="chip chip-outline" style="font-size:9px;padding:2px 6px">${y}</span>`).join("")}
                  </div>
                </div>
              </div>
            `).join(""):`
              <div class="empty-state" style="padding:40px 0">
                ${e("search",40,"text-secondary")}
                <h3 style="margin-top:16px">Sin resultados</h3>
                <p>Intenta con otros filtros.</p>
              </div>
            `}
          </div>
        </div>
      </div>
    `,W("/explore","user"),A(),o()}function o(){document.getElementById("btn-back").onclick=()=>window.history.back(),document.getElementById("btn-filter").onclick=b,document.querySelectorAll("[data-subtype]").forEach(r=>{r.onclick=()=>{i=r.dataset.subtype,l()}}),document.querySelectorAll("[data-price]").forEach(r=>{r.onclick=()=>{a=r.dataset.price,l()}}),document.querySelectorAll("[data-gastro]").forEach(r=>{r.onclick=()=>E("/gastronomia-detail?id="+r.dataset.gastro)})}function b(){H(`
      <div style="padding:24px 20px">
        <h2 style="margin-bottom:24px; font-size: 20px; font-weight: 700;">Filtros de Gastronomía</h2>
        <div class="flex-col gap-24">
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Tipo de Cocina</label>
            <div class="flex-row gap-8 mt-8 flex-wrap">
               ${["Peruana","Criolla","Internacional","Fusión","Vegetariana","Mariscos"].map(y=>'<span class="chip chip-outline chip-selectable">'+y+"</span>").join("")}
            </div>
          </div>
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Rango de precio por persona</label>
            <input type="range" min="10" max="200" value="50" style="width:100%;accent-color:var(--green-primary); margin: 12px 0;" id="filter-price" />
            <div class="flex-row" style="justify-content:space-between;color:var(--green-primary);font-weight:600"><small>S/10</small><small id="price-val">Hasta S/50</small><small>S/200</small></div>
          </div>
          <div class="input-group">
            <div style="display:flex; justify-content:space-between; align-items:center;">
               <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:0">Abierto ahora</label>
               <input type="checkbox" style="width:20px;height:20px;accent-color:var(--green-primary)">
            </div>
          </div>
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Características</label>
            <div class="flex-row gap-8 mt-8 flex-wrap">
              <span class="chip chip-outline chip-selectable">Terraza</span>
              <span class="chip chip-outline chip-selectable">Música en vivo</span>
              <span class="chip chip-outline chip-selectable">WiFi</span>
              <span class="chip chip-outline chip-selectable">Estacionamiento</span>
              <span class="chip chip-outline chip-selectable">Pet friendly</span>
              <span class="chip chip-outline chip-selectable">Ideal fechas especiales</span>
            </div>
          </div>
          <div class="flex-row gap-12 mt-16 pb-12">
            <button class="btn btn-outline flex-1" style="font-weight:600" id="btn-reset-filters">Restablecer</button>
            <button class="btn btn-primary flex-1" style="font-weight:600;font-size:16px" id="btn-apply-filters">Aplicar filtros</button>
          </div>
        </div>
      </div>
    `);const r=document.getElementById("filter-price"),s=document.getElementById("price-val");r&&s&&(r.oninput=y=>s.innerText="Hasta S/"+y.target.value),document.querySelectorAll("#bottom-sheet .chip-selectable").forEach(y=>{y.onclick=()=>y.classList.toggle("chip-active")}),document.getElementById("btn-reset-filters").onclick=()=>{M(),f("Filtros restablecidos")},document.getElementById("btn-apply-filters").onclick=()=>{M(),f("Filtros aplicados","success"),l()}}l()}function aa(p){const i=document.getElementById("app"),a=p.id,t=J.find(h=>h.id===a)||J[0];let n="carta",l=0;const o=[t.image,...t.images||[]],b=j.favorites.has(t.id);function r(){G(),i.innerHTML=`
      <div class="screen" style="padding-bottom:100px; background:var(--bg-body)">
        <!-- Gallery with swipe -->
        <div class="detail-gallery" id="gallery">
          <img src="${o[0]}" alt="${t.name}" id="gallery-img" />
          <button class="float-btn" style="top:16px;left:16px;display:flex;align-items:center;justify-content:center;z-index:10" id="btn-back">${e("arrow-left",24)}</button>
          <button class="float-btn" style="top:16px;right:60px;display:flex;align-items:center;justify-content:center;z-index:10" id="btn-share-header">${e("share-2",20)}</button>
          <button class="float-btn" style="top:16px;right:16px;display:flex;align-items:center;justify-content:center;z-index:10;${b?"color:var(--red);background:rgba(255,0,0,0.1)":""}" id="btn-fav">${e("heart",20,b?"filled":"")}</button>
          <div class="gallery-dots dots" style="bottom:36px;z-index:10;display:flex;gap:6px">
            ${o.map((h,S)=>`<div class="dot ${S===0?"active":""}" data-dot="${S}"></div>`).join("")}
          </div>
          <div style="position:absolute;bottom:36px;right:16px;background:rgba(0,0,0,0.6);color:white;padding:4px 10px;border-radius:12px;font-size:12px;z-index:10;font-weight:600;backdrop-filter:blur(4px)" id="gallery-counter">1/${o.length}</div>
        </div>

        <div style="padding:20px 20px 0; background:var(--surface); border-radius:24px 24px 0 0; margin-top:-24px; position:relative; z-index:10; box-shadow:0 -4px 16px rgba(0,0,0,0.05)">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px">
            <div>
              <h1 style="font-size:24px; font-weight:800; margin-bottom:4px; font-family:var(--font-heading)">${t.name}</h1>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap">
                <span class="chip chip-${t.catColor||"green"}" style="font-size:11px; padding:2px 8px">${t.category}</span>
                <span style="font-size:14px; font-weight:600; color:var(--text-secondary)">· Peruana Contemporánea</span>
                <span style="font-size:14px; font-weight:600; color:var(--text-secondary)">· $$ (S/40 - S/120)</span>
              </div>
            </div>
          </div>

          <!-- Información práctica -->
          <div class="detail-section" style="margin-top:16px; padding-bottom:16px; border-bottom:1px solid var(--border-light)">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px;font-size:16px;font-weight:700;margin-bottom:12px">${e("info",16)} Información práctica</h3></div>
            <div class="info-grid">
              ${t.hours?`<div class="info-cell"><span class="info-icon">${e("clock",16)}</span><div><div class="info-label">Horario</div><div class="info-value">${t.hours}</div></div></div>`:""}
              ${t.price?`<div class="info-cell"><span class="info-icon">${e("dollar-sign",16)}</span><div><div class="info-label">Precio</div><div class="info-value">${t.price}</div></div></div>`:""}
              ${t.bestTime?`<div class="info-cell"><span class="info-icon">${e("star",16)}</span><div><div class="info-label">Mejor momento</div><div class="info-value">${t.bestTime}</div></div></div>`:""}
              ${t.phone?`<div class="info-cell"><span class="info-icon">${e("phone",16)}</span><div><div class="info-label">Teléfono</div><div class="info-value">${t.phone}</div></div></div>`:""}
            </div>
          </div>

          <!-- Beneficios -->
          <div class="mt-16 pb-16" style="border-bottom:1px solid var(--border-light)">
            <h3 style="font-size:16px; margin-bottom:12px; font-weight:700">Beneficios y características</h3>
            <div style="display:flex;flex-wrap:wrap;gap:8px">
              <span class="chip chip-green" style="font-size:11px;gap:4px">${e("wifi",12)} Wifi gratis</span>
              <span class="chip chip-green" style="font-size:11px;gap:4px">${e("sun",12)} Terraza con vista</span>
              <span class="chip chip-green" style="font-size:11px;gap:4px">${e("music",12)} Música en vivo (V-S)</span>
              <span class="chip chip-green" style="font-size:11px;gap:4px">${e("car",12)} Estacionamiento free</span>
              <span class="chip chip-green" style="font-size:11px;gap:4px">${e("book-open",12)} Carta EN/ES</span>
              <span class="chip chip-green" style="font-size:11px;gap:4px">${e("leaf",12)} Opción vegetariana</span>
            </div>
          </div>

          <!-- Map / Ubicación -->
          <div class="detail-section" style="margin-top:16px; padding-bottom:16px; border-bottom:1px solid var(--border-light)">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px;font-size:16px;font-weight:700;margin-bottom:12px">${e("map-pin",16)} Ubicación</h3></div>
            <p style="font-size:13px;margin-bottom:8px;display:flex;align-items:center;gap:6px">${e("map-pin",14)} ${t.address}</p>
            <div id="place-map" style="height:200px;border-radius:12px;overflow:hidden;position:relative;z-index:1"></div>
            <div class="flex-row gap-8 mt-8">
              <button class="btn btn-outline btn-sm flex-1" id="btn-how-to-get" style="display:flex;align-items:center;justify-content:center;gap:6px">${e("navigation",14)} Cómo llegar</button>
              <button class="btn btn-outline btn-sm flex-1" id="btn-nearby" style="display:flex;align-items:center;justify-content:center;gap:6px">${e("map",14)} Lugares cercanos</button>
            </div>
          </div>

          <!-- Seguridad -->
          <div class="detail-section" style="margin-top:16px; padding-bottom:16px; border-bottom:1px solid var(--border-light)">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px;font-size:16px;font-weight:700;margin-bottom:12px">${e("shield",16)} Seguridad</h3></div>
            <div class="safety-card mt-8" style="background:${t.safety==="safe"?"var(--green-bg)":t.safety==="caution"?"var(--yellow-light)":"var(--red-light)"};border-color:${t.safety==="safe"?"var(--green-primary)":t.safety==="caution"?"var(--yellow)":"var(--red)"}">
              <span style="display:flex;color:${t.safety==="safe"?"var(--green-primary)":t.safety==="caution"?"var(--yellow)":"var(--red)"}">${t.safety==="safe"?e("shield",28):t.safety==="caution"?e("alert-triangle",28):e("alert-octagon",28)}</span>
              <div>
                <div style="font-weight:600;font-size:15px;margin-bottom:4px">${le(t.safety||"safe")}</div>
                <p style="font-size:12px">${t.safetyNote||"Establecimiento seguro."}</p>
                ${t.safetyValidators?`<small style="color:var(--green-primary)">✓ ${t.safetyValidators} usuarios han validado esto</small>`:""}
              </div>
            </div>
          </div>

          <!-- Acciones -->
          <div class="detail-section" style="margin-top:16px; padding-bottom:16px; border-bottom:1px solid var(--border-light)">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px;font-size:16px;font-weight:700;margin-bottom:12px">${e("zap",16)} Acciones</h3></div>
            <div class="detail-actions-grid mt-8">
              <button class="detail-action-btn" style="border-color:var(--green-primary);color:var(--green-primary);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-add-route-action">${e("map",16)} Agregar ruta</button>
              <button class="detail-action-btn" style="border-color:var(--blue);color:var(--blue);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-rate">${e("star",16)} Calificar</button>
              <button class="detail-action-btn" style="border-color:var(--purple);color:var(--purple);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-share-action">${e("share-2",16)} Compartir</button>
              <button class="detail-action-btn" style="border-color:var(--orange);color:var(--orange);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-report">${e("flag",16)} Reportar</button>
              ${t.hidden?`<button class="detail-action-btn" style="border-color:#004D40;color:#004D40;display:flex;align-items:center;justify-content:center;gap:6px;background:rgba(0,77,64,0.05)" id="btn-validate-place">${e("check-circle",16)} Validar</button>`:""}
            </div>
          </div>

          <!-- Menu Component -->
          <div class="mt-16 pb-16" style="border-bottom:1px solid var(--border-light)">
            <h3 style="font-size:18px; margin-bottom:12px; font-weight:800; font-family:var(--font-heading)">El Menú</h3>
            <div class="profile-tabs" style="margin:0 0 16px 0">
               <button class="profile-tab ${n==="carta"?"active":""}" data-mtab="carta">Carta completa</button>
               <button class="profile-tab ${n==="dia"?"active":""}" data-mtab="dia">Menú del día</button>
               <button class="profile-tab ${n==="bebidas"?"active":""}" data-mtab="bebidas">Bebidas y Bar</button>
            </div>
            <div id="menu-content">
              ${s()}
            </div>
          </div>

          <!-- Reseñas y Experiencias Originales -->
          <div class="mt-16 pb-16">
            <h3 style="font-size:18px; margin-bottom:12px; font-weight:800; font-family:var(--font-heading)">Reseñas e Impresiones</h3>
            <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px">
              <div style="text-align:center">
                <div style="font-size:36px;font-weight:800;color:var(--text-primary);line-height:1">${t.rating}</div>
                <div style="color:var(--orange)">${e("star",14,"text-orange").repeat(4)}${e("star",14,"text-orange")}</div>
                <div style="font-size:11px;color:var(--text-secondary);margin-top:4px">${t.reviews} op.</div>
              </div>
              <div style="flex:1;font-size:12px;display:flex;flex-direction:column;gap:6px">
                <div style="display:flex;align-items:center;gap:8px"><span style="width:60px">Sabor</span>         <div style="flex:1;background:var(--border-light);height:4px;border-radius:2px"><div style="width:95%;height:100%;background:var(--green-primary);border-radius:2px"></div></div> <span style="font-weight:600">4.8</span></div>
                <div style="display:flex;align-items:center;gap:8px"><span style="width:60px">Servicio</span>      <div style="flex:1;background:var(--border-light);height:4px;border-radius:2px"><div style="width:90%;height:100%;background:var(--green-primary);border-radius:2px"></div></div> <span style="font-weight:600">4.5</span></div>
                <div style="display:flex;align-items:center;gap:8px"><span style="width:60px">Ambiente</span>      <div style="flex:1;background:var(--border-light);height:4px;border-radius:2px"><div style="width:95%;height:100%;background:var(--green-primary);border-radius:2px"></div></div> <span style="font-weight:600">4.8</span></div>
                <div style="display:flex;align-items:center;gap:8px"><span style="width:60px">Espera</span>        <div style="flex:1;background:var(--border-light);height:4px;border-radius:2px"><div style="width:80%;height:100%;background:var(--yellow);border-radius:2px"></div></div> <span style="font-weight:600">4.0</span></div>
              </div>
            </div>

            <div class="flex-col" id="comments-list">
              ${Le.map(h=>{var S;return`
                <div class="comment-item" style="border-bottom:1px solid var(--border-light); padding-bottom:12px; margin-bottom:12px">
                  ${O(h.initials,h.color,36)}
                  <div class="comment-body" style="margin-left:8px; flex:1">
                    <div class="comment-header" style="display:flex; justify-content:space-between">
                      <span class="comment-author" style="font-weight:700; font-size:14px">${h.author}</span>
                      <span class="comment-date" style="font-size:11px; color:var(--text-secondary)">${h.date}</span>
                    </div>
                    <div class="flex-row gap-2 mb-4 mt-4" style="color:var(--orange)">
                      ${e("star",12,"text-orange").repeat(h.rating)}
                    </div>
                    <div class="comment-text" style="font-size:13px; color:var(--text-primary); margin-top:4px">${h.text}</div>
                    ${(S=h.photos)!=null&&S.length?`<div class="flex-row gap-4 mt-8">${h.photos.map(w=>`<img src="${w}" style="width:48px;height:48px;border-radius:6px;object-fit:cover" />`).join("")}</div>`:""}
                    <div class="comment-actions mt-8" style="font-size:12px; color:var(--text-secondary); display:flex; gap:16px">
                      <span style="display:flex;align-items:center;gap:4px;cursor:pointer">${e("thumbs-up",12)} útil (${h.useful})</span>
                      <span style="display:flex;align-items:center;gap:4px;cursor:pointer">${e("corner-down-right",12)} Responder</span>
                    </div>
                  </div>
                </div>
              `}).join("")}
            </div>
            
            <div class="comment-input-row mt-16" style="display:flex; gap:8px; align-items:center">
              ${O("MG","#1A6B3A",32)}
              <input class="input-field" placeholder="Escribe una reseña..." style="flex:1;height:40px;padding:0 12px;font-size:13px; border-radius:20px; border:1px solid var(--border-light)" id="comment-input" />
              <button class="btn btn-primary btn-xs" id="btn-send-comment" style="border-radius:20px; padding:0 16px; height:40px">Enviar</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Sticky Bottom Actions -->
      <div style="position:sticky; bottom:0; padding:16px 20px; background:var(--surface); border-top:1px solid var(--border-light); display:flex; gap:12px; box-shadow:0 -4px 12px rgba(0,0,0,0.05); z-index:50">
         <button class="btn btn-primary" id="btn-reservar" style="flex:1; font-weight:700; font-size:16px">${e("calendar",20)} Reservar mesa</button>
         <button class="btn btn-outline" id="btn-add-route" style="width:auto; padding: 0 16px" title="Agregar al recorrido">${e("plus-circle",24)}</button>
      </div>
    `,A(),y()}function s(){if(n==="dia")return`
        <div style="background:var(--green-light); border-radius:12px; padding:16px; border:1px solid rgba(0,190,130,0.2)">
           <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:12px">
              <div>
                <h4 style="font-size:16px; font-weight:700; color:var(--text-primary); margin-bottom:4px">Menú Ejecutivo</h4>
                <div style="font-size:12px; color:var(--green-primary); font-weight:600">${e("calendar",12)} Lunes 24 de Octubre</div>
              </div>
              <div style="font-size:20px; font-weight:800; color:var(--text-primary)">S/ 25.00</div>
           </div>
           <hr style="border:none; border-top:1px dashed var(--green-primary); opacity:0.3; margin-bottom:12px" />
           <div class="flex-col gap-12">
             <div><strong style="font-size:13px;color:var(--text-secondary)">Entrada (elige 1)</strong><br/><span style="font-size:14px; font-weight:500">· Causa limeña de pollo<br/>· Tequeños con guacamole</span></div>
             <div><strong style="font-size:13px;color:var(--text-secondary)">Plato de fondo (elige 1)</strong><br/><span style="font-size:14px; font-weight:500">· Lomo saltado tradicional<br/>· Pescado a lo macho marino<br/>· Tallarines verdes con apanado</span></div>
             <div><strong style="font-size:13px;color:var(--text-secondary)">Bebida</strong><br/><span style="font-size:14px; font-weight:500">· Vaso de Chicha Morada o Limonada</span></div>
           </div>
        </div>
      `;if(n==="bebidas")return`
        <div class="flex-col gap-16">
          <h4 style="font-weight:700; font-size:16px; border-bottom:1px solid var(--border-light); padding-bottom:8px">Cocteles de Autor</h4>
          <div class="flex-col gap-12">
             <div style="display:flex;justify-content:space-between"><div><span style="font-weight:600;font-size:14px">Pisco Sour Clásico</span><p style="font-size:12px;color:var(--text-secondary)">Pisco Quebranta, limón, jarabe, clara.</p></div> <span style="font-weight:700">S/ 28</span></div>
             <div style="display:flex;justify-content:space-between"><div><span style="font-weight:600;font-size:14px">Chilcano de Maracuyá</span><p style="font-size:12px;color:var(--text-secondary)">Macerado especial con ginger ale.</p></div> <span style="font-weight:700">S/ 25</span></div>
          </div>
          <h4 style="font-weight:700; font-size:16px; border-bottom:1px solid var(--border-light); padding-bottom:8px; margin-top:8px">Sin Alcohol</h4>
          <div class="flex-col gap-12">
             <div style="display:flex;justify-content:space-between"><div><span style="font-weight:600;font-size:14px">Limonada Frozen</span></div> <span style="font-weight:700">S/ 12</span></div>
             <div style="display:flex;justify-content:space-between"><div><span style="font-weight:600;font-size:14px">Chicha Morada (Jarra)</span></div> <span style="font-weight:700">S/ 20</span></div>
          </div>
        </div>
      `;const h=(S,w,k)=>`
      <div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--border-light)">
        <img src="https://picsum.photos/seed/${S.replace(/ /g,"")}/100/100" style="width:60px;height:60px;border-radius:8px;object-fit:cover" />
        <div style="flex:1">
          <div style="font-weight:700;font-size:14px;margin-bottom:2px">${S}</div>
          <div style="font-size:12px;color:var(--text-secondary);margin-bottom:6px;line-height:1.2">${w}</div>
          <div style="font-size:14px;font-weight:800;color:var(--green-primary)">S/ ${k}</div>
        </div>
        <button class="icon-btn" style="width:32px;height:32px;border:1px solid var(--border-light);border-radius:8px;background:var(--surface)">${e("plus",16)}</button>
      </div>
    `;return`
      <!-- Accordion simulated -->
      <div class="menu-accordion">
         <details open>
           <summary style="font-weight:700; font-size:16px; padding:12px 0; cursor:pointer; list-style:none; border-bottom:2px solid var(--text-primary); display:flex; justify-content:space-between">Entradas ${e("chevron-down",16)}</summary>
           <div class="flex-col pb-16 pt-8">
             ${h("Ceviche Clásico","Pescado fresco del día, limón de chulucanas, ají limo, camote y choclo.","45.00")}
             ${h("Tiradito Bicolor","Finas láminas de pescado en crema de ají amarillo y rocoto.","48.00")}
             ${h("Causa Limeña","Papa amarilla prensada rellena de pulpa de cangrejo.","35.00")}
           </div>
         </details>
         <details>
           <summary style="font-weight:700; font-size:16px; padding:12px 0; cursor:pointer; list-style:none; border-bottom:2px solid var(--text-primary); display:flex; justify-content:space-between; margin-top:16px">Platos Principales ${e("chevron-down",16)}</summary>
           <div class="flex-col pb-16 pt-8">
             ${h("Lomo Saltado","Trozos de lomo fino flambeados al wok con cebolla, tomate y papas fritas.","65.00")}
             ${h("Arroz con Mariscos","Arroz arborio, mixtura de mariscos en salsa madre especial.","55.00")}
           </div>
         </details>
         <details>
           <summary style="font-weight:700; font-size:16px; padding:12px 0; cursor:pointer; list-style:none; border-bottom:2px solid var(--text-primary); display:flex; justify-content:space-between; margin-top:16px">Postres ${e("chevron-down",16)}</summary>
           <div class="flex-col pb-16 pt-8">
             ${h("Suspiro a la Limeña","Manjar blanco coronado con merengue al oporto.","22.00")}
           </div>
         </details>
      </div>
    `}function y(){document.getElementById("btn-back").onclick=()=>window.history.back(),document.querySelectorAll("[data-mtab]").forEach(u=>{u.onclick=()=>{n=u.dataset.mtab,r()}});const h=document.getElementById("gallery");if(h){let u=0;h.addEventListener("touchstart",I=>u=I.touches[0].clientX),h.addEventListener("touchend",I=>{const T=u-I.changedTouches[0].clientX;Math.abs(T)>50&&(T>0&&l<o.length-1?l++:T<0&&l>0&&l--,c())}),document.querySelectorAll("[data-dot]").forEach(I=>{I.onclick=()=>{l=parseInt(I.dataset.dot),c()}})}document.getElementById("btn-fav").onclick=function(){const u=$e(t.id);this.innerHTML=e("heart",20,u?"filled":""),this.style.color=u?"var(--red)":"",this.style.background=u?"rgba(255,0,0,0.1)":"",f(u?"Agregado a favoritos":"Eliminado de favoritos"),A()},document.getElementById("btn-share-header").onclick=()=>f("Enlace copiado"),document.getElementById("btn-add-route").onclick=()=>{H(`
        <div style="padding:24px 20px">
          <h2 style="font-size:20px; font-weight:800; margin-bottom:12px">Añadir al recorrido</h2>
          <p style="font-size:14px; color:var(--text-secondary); margin-bottom:24px">¿Cómo deseas agregar "${t.name}" a tu plan de viaje?</p>
          
          <div class="flex-col gap-12">
            <button class="btn btn-outline" id="bs-add-visit" style="justify-content:flex-start; height:auto; padding:16px; text-align:left; align-items:flex-start; gap:16px">
              <div style="background:var(--bg-body); padding:10px; border-radius:10px">${e("map-pin",20,"text-primary")}</div>
              <div>
                <div style="font-weight:700; font-size:15px; margin-bottom:4px">Solo como visita</div>
                <div style="font-size:12px; color:var(--text-secondary)">Se añadirá al mapa sin reserva de mesa.</div>
              </div>
            </button>
            <button class="btn btn-primary" id="bs-add-reserve" style="justify-content:flex-start; height:auto; padding:16px; text-align:left; align-items:flex-start; gap:16px">
              <div style="background:rgba(255,255,255,0.2); padding:10px; border-radius:10px">${e("calendar-check",20)}</div>
              <div>
                <div style="font-weight:700; font-size:15px; margin-bottom:4px">Con reserva incluida</div>
                <div style="font-size:12px; opacity:0.9">Reservaremos mesa y actualizaremos tu presupuesto.</div>
              </div>
            </button>
          </div>
        </div>
      `),A(),document.getElementById("bs-add-visit").onclick=()=>{ne(t),M(),f("Añadido al recorrido como visita","success")},document.getElementById("bs-add-reserve").onclick=()=>{M(),setTimeout(v,300)}},document.getElementById("btn-add-route-action").onclick=()=>{ne(t),f(e("check",16)+` ${t.name} agregado al recorrido`)},document.getElementById("btn-rate").onclick=x,document.getElementById("btn-share-action").onclick=()=>f("Enlace copiado"),document.getElementById("btn-report").onclick=C,document.getElementById("btn-validate-place")&&(document.getElementById("btn-validate-place").onclick=()=>{f(e("check-circle",16)+" ¡Validación registrada! Gracias por verificar este lugar.");const u=document.getElementById("btn-validate-place");u.disabled=!0,u.innerHTML=e("check",16)+" Validado",u.style.opacity="0.6",u.style.pointerEvents="none"}),document.getElementById("btn-send-comment").onclick=()=>{const u=document.getElementById("comment-input");u.value.trim()&&(f(e("check",16)+" Reseña publicada"),u.value="")};const S=document.getElementById("btn-nearby");S&&(S.onclick=()=>E("/explore"));const w={1:[-14.0875,-75.7627],2:[-14.0755,-75.7325],3:[-14.065,-75.72],4:[-14.09,-75.765],5:[-14.063,-75.729],6:[-14.95,-75.12],7:[-14.068,-75.7295],8:[-14.078,-75.738]},[k,$]=w[t.id]||[-14.0755,-75.7325];setTimeout(()=>we("place-map",k,$,15,t.name),100);const m=document.getElementById("btn-how-to-get");m&&(m.onclick=()=>f("Abriendo navegación...")),document.getElementById("btn-reservar").onclick=v}function c(){document.getElementById("gallery-img").src=o[l],document.getElementById("gallery-counter").textContent=`${l+1}/${o.length}`,document.querySelectorAll("[data-dot]").forEach((h,S)=>h.classList.toggle("active",S===l))}function x(){H(`
      <div style="padding:20px">
        <h3 style="margin-bottom:16px">Calificar ${t.name}</h3>
        <div class="flex-row gap-4" style="justify-content:center;margin-bottom:16px" id="rate-stars">
          ${[1,2,3,4,5].map(S=>`<span class="star" style="cursor:pointer;display:flex;color:#D0D0D0" data-rate="${S}">${e("star",36)}</span>`).join("")}
        </div>
        <textarea class="input-field no-icon" placeholder="Escribe tu opinión (opcional)..." rows="3" style="margin-bottom:12px"></textarea>
        <button class="btn btn-primary" id="btn-submit-rating">Enviar calificación</button>
      </div>
    `),A();let h=0;document.querySelectorAll("#rate-stars [data-rate]").forEach(S=>{S.onclick=()=>{h=parseInt(S.dataset.rate),document.querySelectorAll("#rate-stars [data-rate]").forEach((w,k)=>{w.classList.toggle("filled",k<h),w.style.color=k<h?"#FFB800":"#D0D0D0"})}}),document.getElementById("btn-submit-rating").onclick=()=>{h>0&&(M(),f(e("star",16)+` Calificaste con ${h} estrella${h>1?"s":""}`))}}function C(){H(`
      <div style="padding:20px">
        <h3 style="margin-bottom:16px;display:flex;align-items:center;gap:8px">${e("flag",20)} Reportar ${t.name}</h3>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">Selecciona el motivo del reporte y describe el problema.</p>
        <div style="font-weight:600;font-size:13px;margin-bottom:8px">Tipo de reporte</div>
        <div class="flex-col gap-8" id="report-types" style="margin-bottom:16px">
          ${[{id:"spam",icon:"alert-circle",label:"Spam o contenido falso"},{id:"safety",icon:"shield",label:"Problema de seguridad"},{id:"closed",icon:"x-circle",label:"Lugar cerrado o no existe"},{id:"offensive",icon:"slash",label:"Contenido ofensivo"},{id:"info",icon:"info",label:"Información incorrecta"},{id:"other",icon:"more-horizontal",label:"Otro"}].map(S=>`
            <div class="chip chip-outline chip-selectable report-type" data-report="${S.id}" style="padding:10px 14px;display:flex;align-items:center;gap:8px;width:100%;justify-content:flex-start;border-radius:10px">
              ${e(S.icon,16)} ${S.label}
            </div>
          `).join("")}
        </div>
        <div style="font-weight:600;font-size:13px;margin-bottom:8px">Descripción del problema</div>
        <textarea class="input-field no-icon" id="report-reason" placeholder="Describe el problema con más detalle..." rows="3" style="margin-bottom:16px"></textarea>
        <button class="btn btn-primary" id="btn-submit-report" disabled style="opacity:0.5">Enviar reporte</button>
      </div>
    `),A();let h=null;document.querySelectorAll(".report-type").forEach(S=>{S.onclick=()=>{document.querySelectorAll(".report-type").forEach(k=>{k.classList.remove("chip-active"),k.classList.add("chip-outline")}),S.classList.add("chip-active"),S.classList.remove("chip-outline"),h=S.dataset.report;const w=document.getElementById("btn-submit-report");w.disabled=!1,w.style.opacity="1"}}),document.getElementById("btn-submit-report").onclick=()=>{h&&(M(),f(e("check",16)+" Reporte enviado correctamente. Gracias por tu ayuda."))}}let g={step:1,date:"Hoy",time:"",people:2,table:"",pref:"",chair:!1};function d(){const h=document.getElementById("bottom-sheet");if(!h)return;let S="";const w=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px">
        <h2 style="font-size:20px; font-weight:800; font-family:var(--font-heading)">Reservar mesa</h2>
        <span style="font-size:14px; font-weight:600; color:var(--text-secondary)">Paso ${g.step} de 5</span>
      </div>
    `;if(g.step===1?S=`
        ${w}
        <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Fecha y hora</h3>
        <div class="scroll-x" style="display:flex;gap:8px;margin-bottom:20px">
          ${["Hoy","Mañana","Jueves 26","Viernes 27","Sábado 28"].map(m=>`
            <button class="chip ${g.date===m?"chip-active":"chip-outline"} res-date-btn" data-val="${m}">${m}</button>
          `).join("")}
        </div>
        <h4 style="font-size:14px; font-weight:600; margin-bottom:12px; color:var(--text-secondary)">Horarios disponibles (Tarde)</h4>
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:8px; margin-bottom:24px">
          ${["12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM(X)","3:00 PM(X)","3:30 PM"].map(m=>{const u=m.includes("(X)"),I=m.replace("(X)",""),T=g.time===I;return u?`<button class="btn btn-outline btn-sm" disabled style="opacity:0.4; text-decoration:line-through">${I}</button>`:`<button class="btn ${T?"btn-primary":"btn-outline"} btn-sm res-time-btn" data-val="${I}">${I}</button>`}).join("")}
        </div>
        <button class="btn btn-primary" id="res-next" style="width:100%" ${g.time?"":"disabled"}>Continuar</button>
      `:g.step===2?S=`
        ${w}
        <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Número de personas</h3>
        <div style="display:flex; align-items:center; justify-content:center; gap:24px; margin:32px 0">
           <button class="icon-btn res-ppl-btn" data-dir="-1" style="width:48px;height:48px;border-radius:50%;border:2px solid var(--border-light);background:var(--surface)">${e("minus",24)}</button>
           <span style="font-size:40px; font-weight:800; width:60px; text-align:center; font-family:var(--font-heading)">${g.people}</span>
           <button class="icon-btn res-ppl-btn" data-dir="1" style="width:48px;height:48px;border-radius:50%;border:2px solid var(--border-light);background:var(--surface)">${e("plus",24)}</button>
        </div>
        ${g.people>8?`<div style="padding:12px; background:var(--yellow-light); color:#B78103; font-size:13px; border-radius:8px; margin-bottom:24px; display:flex; gap:8px">${e("alert-triangle",16)} Grupos grandes requieren reserva telefónica adicional para asegurar disponibilidad entera.</div>`:""}
        <div style="display:flex;gap:12px;margin-top:32px">
          <button class="btn btn-outline res-prev">Atrás</button>
          <button class="btn btn-primary flex-1" id="res-next">Continuar</button>
        </div>
      `:g.step===3?S=`
        ${w}
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:16px">
          <h3 style="font-size:16px; font-weight:700">Selección de mesa</h3>
          <button class="btn btn-outline btn-xs" id="res-random-table">${e("shuffle",12)} Cualquiera</button>
        </div>
        <div style="background:var(--bg-body); border-radius:16px; padding:20px; position:relative; height:240px; border:2px solid var(--border-light); margin-bottom:24px; overflow:hidden">
           <!-- Legend -->
           <div style="display:flex; gap:12px; margin-bottom:16px; font-size:11px; justify-content:center">
             <div style="display:flex;align-items:center;gap:4px"><div style="width:12px;height:12px;background:var(--green-light);border-radius:2px"></div> Disponible</div>
             <div style="display:flex;align-items:center;gap:4px"><div style="width:12px;height:12px;background:#FFEBEE;border-radius:2px"></div> Ocupada</div>
             <div style="display:flex;align-items:center;gap:4px"><div style="width:12px;height:12px;background:var(--green-primary);border-radius:2px"></div> Seleccionada</div>
           </div>

           <!-- Zone Text -->
           <div style="position:absolute; top:50px; left:16px; font-size:12px; font-weight:700; color:var(--text-secondary); writing-mode:vertical-rl; transform:rotate(180deg)">ZONA TERRAZA</div>
           
           <!-- Simulated Tables Grid -->
           <div style="position:absolute; top:70px; left:50px; display:flex; gap:20px">
              ${[{id:"T1",cap:2,st:"avail"},{id:"T2",cap:4,st:"occ"},{id:"T3",cap:4,st:"avail"}].map(m=>z(m)).join("")}
           </div>
           
           <div style="position:absolute; top:150px; left:50px; display:flex; gap:20px">
              ${[{id:"M1",cap:2,st:"occ"},{id:"M2",cap:2,st:"avail"},{id:"M3",cap:6,st:"avail",shape:"circle"}].map(m=>z(m)).join("")}
           </div>
        </div>
        <div style="display:flex;gap:12px;margin-top:32px">
          <button class="btn btn-outline res-prev">Atrás</button>
          <button class="btn btn-primary flex-1" id="res-next" ${g.table?"":"disabled"}>Continuar</button>
        </div>
      `:g.step===4?S=`
        ${w}
        <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Preferencias especiales</h3>
        
        <div class="input-group" style="margin-bottom:20px">
           <label class="label" style="font-weight:600;margin-bottom:8px;display:block">Alergias, Ocasión o peticiones al chef</label>
           <textarea class="input" id="res-pref" rows="3" placeholder="Ej: Es un cumpleaños, soy alérgico a los mariscos...">${g.pref}</textarea>
        </div>

        <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:32px">
           <label style="display:flex;justify-content:space-between;align-items:center;font-weight:600;font-size:14px">
             <div style="display:flex;align-items:center;gap:8px">${e("smile",18,"text-secondary")} Silla de bebé necesaria
             </div>
             <input type="checkbox" id="res-chair" style="width:20px;height:20px;accent-color:var(--green-primary)" ${g.chair?"checked":""} />
           </label>
           <label style="display:flex;justify-content:space-between;align-items:center;font-weight:600;font-size:14px">
             <div style="display:flex;align-items:center;gap:8px">${e("accessibility",18,"text-secondary")} Acceso para silla de ruedas
             </div>
             <input type="checkbox" style="width:20px;height:20px;accent-color:var(--green-primary)" />
           </label>
        </div>

        <div style="display:flex;gap:12px">
          <button class="btn btn-outline res-prev">Atrás</button>
          <button class="btn btn-primary flex-1" id="res-next">Saltar / Continuar</button>
        </div>
      `:g.step===5&&(S=`
        ${w}
        <div style="background:var(--bg-body); border-radius:12px; border:1px solid var(--border-light); padding:16px; margin-bottom:24px">
           <h3 style="font-size:16px; font-weight:800; font-family:var(--font-heading); margin-bottom:16px; text-align:center">${t.name}</h3>
           
           <div style="display:flex; flex-direction:column; gap:12px; font-size:14px">
             <div style="display:flex;justify-content:space-between"><span class="text-secondary">Fecha y Hora</span> <span style="font-weight:600">${g.date}, ${g.time}</span></div>
             <div style="display:flex;justify-content:space-between"><span class="text-secondary">Personas</span> <span style="font-weight:600">${g.people}</span></div>
             <div style="display:flex;justify-content:space-between"><span class="text-secondary">Ubicación</span> <span style="font-weight:600">Mesa ${g.table}</span></div>
             ${g.pref?`<div style="display:flex;justify-content:space-between"><span class="text-secondary">Preferencias</span> <span style="font-weight:600;text-align:right">${g.pref}</span></div>`:""}
           </div>
        </div>

        <div class="input-group" style="margin-bottom:24px">
           <label class="label" style="font-weight:600;display:block;margin-bottom:8px">Nombre de reserva</label>
           <input type="text" class="input" id="res-name" value="${j.currentUser?j.currentUser.name:"Usuario"}" />
        </div>

        <button class="btn btn-primary" id="res-confirm" style="width:100%; font-size:16px; padding:16px">Confirmar reserva</button>
      `),h.innerHTML=`<div style="padding:24px 20px" id="res-container">${S}</div>`,A(),g.step===1)document.querySelectorAll(".res-date-btn").forEach(m=>{m.onclick=()=>{g.date=m.dataset.val,d()}}),document.querySelectorAll(".res-time-btn").forEach(m=>{m.onclick=()=>{g.time=m.dataset.val,d()}});else if(g.step===2)document.querySelectorAll(".res-ppl-btn").forEach(m=>{m.onclick=()=>{g.people+=parseInt(m.dataset.dir),g.people<1&&(g.people=1),g.people>20&&(g.people=20),d()}});else if(g.step===3)document.querySelectorAll(".res-table").forEach(m=>{m.onclick=()=>{if(m.dataset.st==="occ"){f("Mesa ocupada");return}g.table=m.dataset.tid,d()}}),document.getElementById("res-random-table").onclick=()=>{g.table="Aleatoria",d()};else if(g.step===4){const m=document.getElementById("res-pref");m.onchange=()=>{g.pref=m.value};const u=document.getElementById("res-chair");u.onchange=()=>{g.chair=u.checked}}else g.step===5&&(document.getElementById("res-confirm").onclick=()=>{const m={placeId:t.id,placeName:t.name,date:g.date,time:g.time,people:g.people,table:g.table};j.reservations||(j.reservations=[]),j.reservations.push(m);const u=t.price?t.price.match(/\\d+/):null,T=(u?parseInt(u[0]):30)*g.people;ne(t,{reservation:{totalCost:T}}),M(),f("¡Reserva agregada al itinerario con éxito!","success")});const k=document.getElementById("res-next");k&&(k.onclick=()=>{g.step++,d()});const $=document.querySelector(".res-prev");$&&($.onclick=()=>{g.step--,d()})}function z(h){const S=h.st==="avail",w=g.table===h.id;let k=S?"var(--green-light)":"#FFEBEE",$=S?"rgba(0,190,130,0.3)":"rgba(211,47,47,0.3)";w&&(k="var(--green-primary)",$="var(--green-primary)");const m=w?"white":S?"var(--green-primary)":"#c62828",u=h.shape==="circle"?"50%":"8px",I=h.shape==="circle"?"60px":h.cap>2?"80px":"40px";return`
      <div class="res-table" data-tid="${h.id}" data-st="${h.st}" style="width:${I}; height:40px; border-radius:${u}; background:${k}; border:2px solid ${$}; display:flex; align-items:center; justify-content:center; cursor:${S?"pointer":"not-allowed"}; flex-direction:column; color:${m}; transition:0.2s">
         <span style="font-weight:700; font-size:12px">${h.id}</span>
         <span style="font-size:9px">${e("users",10,"")} ${h.cap}</span>
      </div>
    `}function v(){g={step:1,date:"Hoy",time:"",people:2,table:"",pref:"",chair:!1},H(""),d()}r()}function ia(){const p=document.getElementById("app");let i="Todos",a={priceMax:800,stars:0,amenities:[],freeCancellation:!1};const t=["Todos","Hotel","Hostal","Cabaña","Casa de huéspedes","Glamping"];function n(){let r=J.filter(s=>s.category==="Hospedaje"&&!s.hidden);i!=="Todos"&&(r=r.filter(s=>s.subType===i)),r=r.filter(s=>!((s.basePrice||0)>a.priceMax||a.stars>0&&(s.stars||0)!==a.stars||a.amenities.length>0&&(!s.amenities||!a.amenities.every(x=>s.amenities.includes(x)))||a.freeCancellation&&!s.freeCancellation)),p.innerHTML=`
      <div class="screen" style="padding-bottom:12px; background:var(--bg-body)">
        <div class="appbar" style="background:var(--surface); box-shadow:var(--shadow-sm)">
          <button class="appbar-btn" id="btn-back">${e("arrow-left",20)}</button>
          <span class="appbar-title">Hospedaje</span>
          <button class="appbar-btn" id="btn-filter" style="${l()?"color:var(--green-primary)":""}">${e("sliders",20)}</button>
        </div>

        <div style="padding: 16px;">
          <!-- Sub-type chips -->
          <div class="scroll-x" style="display:flex; gap:8px; margin-bottom:16px;">
            ${t.map(s=>`
              <button class="chip ${i===s?"chip-active":"chip-outline"} chip-selectable" data-subtype="${s}">
                ${s}
              </button>
            `).join("")}
          </div>

          <!-- List View -->
          <div class="flex-col gap-16">
            ${r.length>0?r.map(s=>`
              <div class="card-flat" data-hospedaje="${s.id}" style="padding:0;border-radius:16px;overflow:hidden;cursor:pointer">
                <div style="position:relative">
                  <img src="${s.image}" alt="${s.name}" style="width:100%;height:160px;object-fit:cover" />
                  <div style="position:absolute;top:10px;left:10px;display:flex;gap:6px">
                    <span class="chip chip-${s.catColor||"blue"}" style="font-size:10px;padding:3px 10px;backdrop-filter:blur(4px)">${s.category}</span>
                    ${s.subType?`<span class="chip" style="background:rgba(0,0,0,0.5);color:white;font-size:10px;padding:3px 10px;backdrop-filter:blur(4px)">${s.subType}</span>`:""}
                  </div>
                  <div style="position:absolute;top:10px;right:10px;display:flex;gap:6px;flex-direction:column;align-items:flex-end">
                     ${le(s.safety).replace("Shield",e("shield",12)).replace("✓","")}
                     ${s.freeCancellation?'<span class="chip chip-green" style="font-size:10px;padding:3px 8px;box-shadow:0 2px 4px rgba(0,0,0,0.2)">Cancelación gratis</span>':""}
                  </div>
                </div>
                <div style="padding:14px 16px">
                  <div style="display:flex;justify-content:space-between;align-items:flex-start">
                    <div style="font-weight:700;font-size:16px;margin-bottom:4px;flex:1;padding-right:8px">${s.name}</div>
                    <div style="font-weight:800;color:var(--green-primary);font-size:15px;white-space:nowrap">${s.price}</div>
                  </div>
                  <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
                    ${s.stars?`<span style="color:#FFB800;font-size:12px;display:flex">${e("star",12,"text-orange").repeat(s.stars)}</span>`:""}
                    <span style="font-size:12px;color:var(--text-secondary);font-weight:500;margin-left:4px">${s.rating} (${s.reviews} op.)</span>
                  </div>
                  <div style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;display:flex;align-items:center;gap:4px">${e("map-pin",12)} ${s.address}</div>
                  <div style="display:flex;gap:4px;flex-wrap:wrap">
                    ${(s.tags||[]).slice(0,4).map(y=>`<span class="chip chip-outline" style="font-size:9px;padding:2px 6px">${y}</span>`).join("")}
                  </div>
                </div>
              </div>
            `).join(""):`
              <div class="empty-state" style="padding:40px 0">
                ${e("search",40,"text-secondary")}
                <h3 style="margin-top:16px">Sin resultados</h3>
                <p>Intenta ajustar tus filtros de búsqueda.</p>
                <button class="btn btn-outline btn-sm mt-16" id="btn-clear-empty">Limpiar filtros</button>
              </div>
            `}
          </div>
        </div>
      </div>
    `,W("/explore","user"),A(),o()}function l(){return a.priceMax<800||a.stars>0||a.amenities.length>0||a.freeCancellation}function o(){document.getElementById("btn-back").onclick=()=>window.history.back(),document.getElementById("btn-filter").onclick=b;const r=document.getElementById("btn-clear-empty");r&&(r.onclick=()=>{i="Todos",a={priceMax:800,stars:0,amenities:[],freeCancellation:!1},n()}),document.querySelectorAll("[data-subtype]").forEach(s=>{s.onclick=()=>{i=s.dataset.subtype,n()}}),document.querySelectorAll("[data-hospedaje]").forEach(s=>{s.onclick=()=>E("/hospedaje-detail?id="+s.dataset.hospedaje)})}function b(){H(`
      <div style="padding:24px 20px">
        <h2 style="margin-bottom:24px; font-size: 20px; font-weight: 700;">Filtros de Hospedaje</h2>
        <div class="flex-col gap-24">
          
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Precio máximo por noche</label>
            <input type="range" min="30" max="800" step="10" value="${a.priceMax}" style="width:100%;accent-color:var(--green-primary); margin: 12px 0;" id="filter-price" />
            <div class="flex-row" style="justify-content:space-between;color:var(--green-primary);font-weight:600"><small>S/30</small><small id="price-val">Hasta S/${a.priceMax}</small><small>S/800</small></div>
          </div>

          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Categoría (Estrellas)</label>
            <div class="flex-row gap-8 mt-8 flex-wrap" id="filter-stars-container">
               ${[1,2,3,4,5].map(x=>`
                 <span class="chip ${a.stars===x?"chip-active":"chip-outline"} chip-selectable" data-star="${x}" style="display:flex;align-items:center;gap:4px">
                   ${x} ${e("star",12,a.stars===x?"text-white":"text-orange")}
                 </span>
               `).join("")}
               <span class="chip ${a.stars===0?"chip-active":"chip-outline"} chip-selectable" data-star="0">Cualquiera</span>
            </div>
          </div>

          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Características</label>
            <div class="flex-row gap-8 mt-8 flex-wrap" id="filter-amenities-container">
              ${["Piscina","Desayuno incluido","WiFi","Estacionamiento","Aire acondicionado","Jacuzzi","Vista panorámica"].map(x=>`
                <span class="chip ${a.amenities.includes(x)?"chip-active":"chip-outline"} chip-selectable" data-amenity="${x}">${x}</span>
              `).join("")}
            </div>
          </div>

          <div class="input-group">
            <label style="display:flex;justify-content:space-between;align-items:center;font-weight:600;color:var(--text-primary);margin-bottom:0;cursor:pointer">
               <span>Cancelación gratuita disponible</span>
               <input type="checkbox" id="filter-cancellation" style="width:20px;height:20px;accent-color:var(--green-primary)" ${a.freeCancellation?"checked":""}>
            </label>
          </div>

          <div class="flex-row gap-12 mt-16 pb-12">
            <button class="btn btn-outline flex-1" style="font-weight:600" id="btn-reset-filters">Restablecer</button>
            <button class="btn btn-primary flex-1" style="font-weight:600;font-size:16px" id="btn-apply-filters">Aplicar filtros</button>
          </div>
        </div>
      </div>
    `),A();const r=document.getElementById("filter-price"),s=document.getElementById("price-val");r&&s&&(r.oninput=x=>s.innerText="Hasta S/"+x.target.value);let y=a.stars;document.querySelectorAll("#filter-stars-container .chip-selectable").forEach(x=>{x.onclick=()=>{document.querySelectorAll("#filter-stars-container .chip-selectable").forEach(g=>{g.classList.remove("chip-active"),g.classList.add("chip-outline");const d=g.querySelector(".lucide-star");d&&(d.classList.remove("text-white"),d.classList.add("text-orange"))}),x.classList.add("chip-active"),x.classList.remove("chip-outline");const C=x.querySelector(".lucide-star");C&&(C.classList.add("text-white"),C.classList.remove("text-orange")),y=parseInt(x.dataset.star)}});let c=[...a.amenities];document.querySelectorAll("#filter-amenities-container .chip-selectable").forEach(x=>{x.onclick=()=>{x.classList.toggle("chip-active"),x.classList.toggle("chip-outline");const C=x.dataset.amenity;c.includes(C)?c=c.filter(g=>g!==C):c.push(C)}}),document.getElementById("btn-reset-filters").onclick=()=>{a.priceMax=800,a.stars=0,a.amenities=[],a.freeCancellation=!1,M(),f("Filtros restablecidos"),n()},document.getElementById("btn-apply-filters").onclick=()=>{a.priceMax=parseInt(r.value),a.stars=y,a.amenities=c,a.freeCancellation=document.getElementById("filter-cancellation").checked,M(),f("Filtros aplicados","success"),n()}}n()}function oa(p){const i=p.id,a=re(i)||re("8")||re("1");if(!a){E("/home");return}const t=document.getElementById("app");let n=0;const l=[a.image,...a.images||[]],o=j.favorites.has(a.id);function b(k){return{Piscina:"waves","Restaurant propio":"utensils","Bar en la terraza":"wine","Sala de eventos":"users","WiFi en todas las áreas":"wifi","Estacionamiento gratuito":"car","Servicio de habitaciones 24h":"bell",Lavandería:"shirt","Caja de seguridad":"lock","Transporte al aeropuerto":"plane","Tour desk":"map","Cambio de moneda":"dollar-sign",Gimnasio:"dumbbell",Spa:"flower2"}[k]||"check-circle"}function r(k){return k.toLowerCase().includes("aire")?"wind":k.toLowerCase().includes("tv")||k.toLowerCase().includes("smart")?"tv":k.toLowerCase().includes("balcón")||k.toLowerCase().includes("terraza")?"sun":k.toLowerCase().includes("vista")?"image":k.toLowerCase().includes("jacuzzi")||k.toLowerCase().includes("baño")?"bath":k.toLowerCase().includes("ventilador")?"fan":"check"}function s(){G(),t.innerHTML=`
      <div class="screen" style="padding-bottom:16px; background:var(--bg-body)">
        <!-- Gallery -->
        <div class="detail-gallery" id="gallery">
          <img src="${l[0]}" alt="${a.name}" id="gallery-img" />
          <button class="float-btn" style="top:16px;left:16px;display:flex;align-items:center;justify-content:center;z-index:10" id="btn-back">${e("arrow-left",24)}</button>
          <button class="float-btn" style="top:16px;right:60px;display:flex;align-items:center;justify-content:center;z-index:10" id="btn-share-header">${e("share-2",20)}</button>
          <button class="float-btn" style="top:16px;right:16px;display:flex;align-items:center;justify-content:center;z-index:10;${o?"color:var(--red);background:rgba(255,0,0,0.1)":""}" id="btn-fav">${e("heart",20,o?"filled":"")}</button>
          <div class="gallery-dots dots" style="bottom:36px;z-index:10;display:flex;gap:6px">
            ${l.map((k,$)=>`<div class="dot ${$===0?"active":""}" data-dot="${$}"></div>`).join("")}
          </div>
          <div style="position:absolute;bottom:36px;right:16px;background:rgba(0,0,0,0.6);color:white;padding:4px 10px;border-radius:12px;font-size:12px;z-index:10;font-weight:600;backdrop-filter:blur(4px)" id="gallery-counter">1/${l.length}</div>
        </div>

        <!-- Detail Card -->
        <div class="detail-card">
          <div class="detail-chips">
            <span class="chip chip-${a.catColor||"blue"}">${a.category}</span>
            ${a.subType?`<span class="chip" style="background:rgba(0,0,0,0.5);color:white;font-size:10px;padding:3px 10px;backdrop-filter:blur(4px)">${a.subType}</span>`:""}
            ${le(a.safety)}
          </div>
          
          <h1 class="detail-title">${a.name}</h1>
          
          <div class="detail-rating-row" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            ${a.stars?`<span style="color:#FFB800;font-size:14px;display:flex">${e("star",14,"text-orange").repeat(a.stars)}</span>`:""}
            ${ge(Math.round(a.rating))}
            <span style="font-size:13px;color:var(--text-secondary)">${a.rating} (${a.reviews} reseñas)</span>
          </div>
          
          <div style="font-size:13px;color:var(--text-secondary);margin-top:4px;display:flex;align-items:center;gap:6px">${e("map-pin",14)} ${a.address}</div>

          <!-- Description -->
          <div class="detail-section">
            <p style="font-size:14px;line-height:1.6;color:var(--text-primary)">${a.description||a.name+" es un excelente lugar para hospedarse y vivir una experiencia única."}</p>
          </div>

          <!-- Información práctica de Horarios -->
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("clock",16)} Horarios e Información</h3></div>
            <div class="info-grid mt-8">
              <div class="info-cell"><span class="info-icon">${e("log-in",16)}</span><div><div class="info-label">Check-in</div><div class="info-value">${a.checkIn||"14:00"}</div></div></div>
              <div class="info-cell"><span class="info-icon">${e("log-out",16)}</span><div><div class="info-label">Check-out</div><div class="info-value">${a.checkOut||"12:00"}</div></div></div>
              ${a.phone?`<div class="info-cell"><span class="info-icon">${e("phone",16)}</span><div><div class="info-label">Teléfono</div><div class="info-value">${a.phone}</div></div></div>`:""}
            </div>
          </div>

          <!-- Beneficios (Amenities) -->
          ${a.amenities&&a.amenities.length>0?`
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("check-circle",16)} Beneficios y servicios</h3></div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:8px">
              ${a.amenities.map(k=>`
                <div style="display:flex; align-items:center; gap:12px">
                   ${e(b(k),20,"text-secondary")}
                   <span style="font-size:14px; color:var(--text-primary)">${k}</span>
                </div>
              `).join("")}
            </div>
          </div>`:""}

          <!-- Habitaciones -->
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("home",16)} Habitaciones</h3></div>
            <div class="flex-col gap-16 mt-8">
              ${a.rooms&&a.rooms.length>0?a.rooms.map(k=>`
                <div style="border:1px solid var(--border-light); border-radius:16px; overflow:hidden">
                  <img src="${k.image}" alt="${k.name}" style="width:100%; height:180px; object-fit:cover" />
                  <div style="padding:16px">
                    <h4 style="font-size:16px; font-weight:700; margin-bottom:8px">${k.name}</h4>
                    <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:12px">
                      <span style="font-size:13px; color:var(--text-secondary); display:flex; align-items:center; gap:4px">
                        ${e("maximize",14)} ${k.size} m²
                      </span>
                      <span style="font-size:13px; color:var(--text-secondary); display:flex; align-items:center; gap:4px">
                        ${e("bed",14)} ${k.beds} cama${k.beds>1?"s":""}
                      </span>
                      ${k.features.map($=>`
                        <span style="font-size:13px; color:var(--text-secondary); display:flex; align-items:center; gap:4px">
                          ${e(r($),14)} ${$}
                        </span>
                      `).join("")}
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:16px">
                      <div>
                        <div style="font-size:18px; font-weight:800; color:var(--green-primary)">S/ ${k.price}</div>
                        <div style="font-size:12px; color:var(--text-secondary)">precio por noche</div>
                      </div>
                      <button class="btn btn-primary btn-sm btn-select-room" data-room-id="${k.id}" style="font-weight:600">Seleccionar</button>
                    </div>
                  </div>
                </div>
              `).join(""):'<p style="font-size:14px;color:var(--text-secondary)">No hay habitaciones disponibles configuradas actualmente.</p>'}
            </div>
          </div>

          <!-- Map -->
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("map",16)} Ubicación</h3></div>
            <p style="font-size:13px;margin-bottom:8px;display:flex;align-items:center;gap:6px">${e("map-pin",14)} ${a.address}</p>
            <div id="place-map" style="height:200px;border-radius:12px;overflow:hidden;position:relative;z-index:1"></div>
            <div class="flex-row gap-8 mt-8">
              <button class="btn btn-outline btn-sm flex-1" id="btn-how-to-get" style="display:flex;align-items:center;justify-content:center;gap:6px">${e("navigation",14)} Cómo llegar</button>
              <button class="btn btn-outline btn-sm flex-1" id="btn-nearby" style="display:flex;align-items:center;justify-content:center;gap:6px">${e("map",14)} Lugares cercanos</button>
            </div>
          </div>

          <!-- Safety -->
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("shield",16)} Seguridad</h3></div>
            <div class="safety-card mt-8" style="background:${a.safety==="safe"?"var(--green-bg)":a.safety==="caution"?"var(--yellow-light)":"var(--red-light)"};border-color:${a.safety==="safe"?"var(--green-primary)":a.safety==="caution"?"var(--yellow)":"var(--red)"}">
              <span style="display:flex;color:${a.safety==="safe"?"var(--green-primary)":a.safety==="caution"?"var(--yellow)":"var(--red)"}">${a.safety==="safe"?e("shield",28):a.safety==="caution"?e("alert-triangle",28):e("alert-octagon",28)}</span>
              <div>
                <div style="font-weight:600;font-size:15px;margin-bottom:4px">${le(a.safety)}</div>
                <p style="font-size:12px">${a.safetyNote||"La zona en la que se ubica el establecimiento es segura de acuerdo a nuestros registros y la validación comunitaria."}</p>
                ${a.safetyValidators?`<small style="color:var(--green-primary)">✓ ${a.safetyValidators} usuarios han validado esto</small>`:""}
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("zap",16)} Acciones</h3></div>
            <div class="detail-actions-grid mt-8">
              <button class="detail-action-btn" style="border-color:var(--green-primary);color:var(--green-primary);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-add-route">${e("map",16)} Agregar ruta</button>
              <button class="detail-action-btn" style="border-color:var(--blue);color:var(--blue);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-rate">${e("star",16)} Calificar</button>
              <button class="detail-action-btn" style="border-color:var(--purple);color:var(--purple);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-share-action">${e("share-2",16)} Compartir</button>
              <button class="detail-action-btn" style="border-color:var(--orange);color:var(--orange);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-report">${e("flag",16)} Reportar</button>
              ${a.hidden?`<button class="detail-action-btn" style="border-color:#004D40;color:#004D40;display:flex;align-items:center;justify-content:center;gap:6px;background:rgba(0,77,64,0.05)" id="btn-validate-place">${e("check-circle",16)} Validar</button>`:""}
            </div>
          </div>

          <!-- Comments -->
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("message-circle",16)} Reseñas (${Le.length})</h3></div>
            <div class="flex-col" id="comments-list">
              ${Le.map(k=>{var $,m;return`
                <div class="comment-item">
                  ${O(k.initials,k.color,36)}
                  <div class="comment-body">
                    <div class="comment-header">
                      <span class="comment-author">${k.author}</span>
                      <span class="comment-date">${k.date}</span>
                    </div>
                    <div class="flex-row gap-2 mb-4">${ge(k.rating,12)}</div>
                    <div class="comment-text">${k.text}</div>
                    ${($=k.photos)!=null&&$.length?`<div class="flex-row gap-4 mt-4">${k.photos.map(u=>`<img src="${u}" style="width:48px;height:48px;border-radius:6px;object-fit:cover" />`).join("")}</div>`:""}
                    <div class="comment-actions mt-4">
                      <span style="display:flex;align-items:center;gap:4px;cursor:pointer">${e("thumbs-up",12)} ${k.useful} útil</span>
                      <span style="display:flex;align-items:center;gap:4px;cursor:pointer">${e("corner-down-right",12)} Responder</span>
                    </div>
                    ${(m=k.replies)!=null&&m.length?k.replies.map(u=>`
                      <div style="margin-top:8px;padding:8px;background:var(--bg);border-radius:8px;font-size:12px">
                        <strong>${u.author}</strong> ${u.isOwner?'<span class="chip chip-blue" style="font-size:9px;padding:1px 6px">Dueño</span>':""}
                        <div style="margin-top:4px">${u.text}</div>
                      </div>
                    `).join(""):""}
                  </div>
                </div>
              `}).join("")}
            </div>
            <div class="comment-input-row mt-8">
              ${O("MG","#1A6B3A",32)}
              <input class="input-field" placeholder="Escribe una reseña..." style="flex:1;height:40px;padding:0 12px;font-size:13px" id="comment-input" />
              <button class="btn btn-primary btn-xs" id="btn-send-comment">Enviar</button>
            </div>
          </div>

        </div> <!-- /.detail-card -->
      </div>
    `,A(),C(),y()}function y(){const k={1:[-14.0875,-75.7627],2:[-14.0755,-75.7325],3:[-14.065,-75.72],4:[-14.09,-75.765],5:[-14.063,-75.729],6:[-14.95,-75.12],7:[-14.068,-75.7295],8:[-14.078,-75.738],9:[-14.12,-75.72]},[$,m]=k[a.id]||[-14.0875,-75.7627];setTimeout(()=>we("place-map",$,m,15,a.name),100),document.getElementById("btn-how-to-get").onclick=()=>f("Abriendo navegación..."),document.getElementById("btn-nearby").onclick=()=>E("/explore"),document.getElementById("btn-add-route").onclick=()=>{ne(a),f(e("check",16)+` ${a.name} agregado al recorrido`)},document.getElementById("btn-rate").onclick=c,document.getElementById("btn-share-action").onclick=()=>f("Enlace copiado"),document.getElementById("btn-report").onclick=x;const u=document.getElementById("btn-validate-place");u&&(u.onclick=()=>{f(e("check-circle",16)+" ¡Validación registrada! Gracias por verificar este lugar.","success"),u.disabled=!0,u.innerHTML=e("check",16)+" Validado",u.style.opacity="0.6",u.style.pointerEvents="none"}),document.getElementById("btn-send-comment").onclick=()=>{const I=document.getElementById("comment-input");I.value.trim()&&(f(e("check",16)+" Reseña publicada"),I.value="")}}function c(){H(`
      <div style="padding:20px">
        <h3 style="margin-bottom:16px">Calificar ${a.name}</h3>
        <div class="flex-row gap-4" style="justify-content:center;margin-bottom:16px" id="rate-stars">
          ${[1,2,3,4,5].map($=>`<span class="star" style="cursor:pointer;display:flex;color:#D0D0D0" data-rate="${$}">${e("star",36)}</span>`).join("")}
        </div>
        <textarea class="input-field no-icon" placeholder="Escribe tu opinión (opcional)..." rows="3" style="margin-bottom:12px"></textarea>
        <button class="btn btn-primary" id="btn-submit-rating">Enviar calificación</button>
      </div>
    `),A();let k=0;document.querySelectorAll("#rate-stars [data-rate]").forEach($=>{$.onclick=()=>{k=parseInt($.dataset.rate),document.querySelectorAll("#rate-stars [data-rate]").forEach((m,u)=>{m.classList.toggle("filled",u<k),m.style.color=u<k?"#FFB800":"#D0D0D0"})}}),document.getElementById("btn-submit-rating").onclick=()=>{k>0&&(M(),f(e("star",16)+` Calificaste con ${k} estrella${k>1?"s":""}`))}}function x(){H(`
      <div style="padding:20px">
        <h3 style="margin-bottom:16px;display:flex;align-items:center;gap:8px">${e("flag",20)} Reportar ${a.name}</h3>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">Selecciona el motivo del reporte y describe el problema.</p>
        <div style="font-weight:600;font-size:13px;margin-bottom:8px">Tipo de reporte</div>
        <div class="flex-col gap-8" id="report-types" style="margin-bottom:16px">
          ${[{id:"spam",icon:"alert-circle",label:"Spam o contenido falso"},{id:"safety",icon:"shield",label:"Problema de seguridad"},{id:"closed",icon:"x-circle",label:"Lugar cerrado o no existe"},{id:"offensive",icon:"slash",label:"Contenido ofensivo"},{id:"info",icon:"info",label:"Información incorrecta"},{id:"other",icon:"more-horizontal",label:"Otro"}].map($=>`
            <div class="chip chip-outline chip-selectable report-type" data-report="${$.id}" style="padding:10px 14px;display:flex;align-items:center;gap:8px;width:100%;justify-content:flex-start;border-radius:10px">
              ${e($.icon,16)} ${$.label}
            </div>
          `).join("")}
        </div>
        <div style="font-weight:600;font-size:13px;margin-bottom:8px">Descripción del problema</div>
        <textarea class="input-field no-icon" id="report-reason" placeholder="Describe el problema con más detalle..." rows="3" style="margin-bottom:16px"></textarea>
        <button class="btn btn-primary" id="btn-submit-report" disabled style="opacity:0.5">Enviar reporte</button>
      </div>
    `),A();let k=null;document.querySelectorAll(".report-type").forEach($=>{$.onclick=()=>{document.querySelectorAll(".report-type").forEach(u=>{u.classList.remove("chip-active"),u.classList.add("chip-outline")}),$.classList.add("chip-active"),$.classList.remove("chip-outline"),k=$.dataset.report;const m=document.getElementById("btn-submit-report");m.disabled=!1,m.style.opacity="1"}}),document.getElementById("btn-submit-report").onclick=()=>{k&&(M(),f(e("check",16)+" Reporte enviado. Gracias.","success"))}}function C(){document.getElementById("btn-back").onclick=()=>window.history.back(),document.getElementById("btn-share-header").onclick=()=>f("Enlace copiado"),document.getElementById("btn-fav").onclick=function(){const $=$e(a.id);this.innerHTML=e("heart",20,$?"filled":""),this.style.color=$?"var(--red)":"",this.style.background=$?"rgba(255,0,0,0.1)":"",f($?"Agregado a favoritos":"Eliminado de favoritos")};const k=document.getElementById("gallery");if(k){let $=0;k.addEventListener("touchstart",m=>$=m.touches[0].clientX),k.addEventListener("touchend",m=>{const u=$-m.changedTouches[0].clientX;Math.abs(u)>50&&(u>0&&n<l.length-1?n++:u<0&&n>0&&n--,g())}),document.querySelectorAll("[data-dot]").forEach(m=>{m.onclick=()=>{n=parseInt(m.dataset.dot),g()}})}document.querySelectorAll(".btn-select-room").forEach($=>{$.onclick=()=>h($.dataset.roomId)})}function g(){document.getElementById("gallery-img").src=l[n],document.getElementById("gallery-counter").textContent=`${n+1}/${l.length}`,document.querySelectorAll("[data-dot]").forEach((k,$)=>k.classList.toggle("active",$===n))}let d={};const z=a.stayTypes||["Noches"],v=a.pricePerHour||0;function h(k){const $=a.rooms.find(m=>m.id===k);if(d={room:$,type:z[0],hours:a.minHours||3,nights:1,breakfastId:null,adults:2,children:0,extras:[],totalCost:$.price},a.breakfasts&&a.breakfasts.length>0){const m=a.breakfasts.find(u=>u.price===0);m&&(d.breakfastId=m.id)}H('<div id="res-flow-container" style="padding:20px;display:flex;flex-direction:column;min-height:75vh">Cargando...</div>'),w()}function S(){let k=d.type==="Horas"?d.hours*v:d.nights*d.room.price,$=0;if(d.breakfastId&&a.breakfasts){const m=a.breakfasts.find(u=>u.id===d.breakfastId);m&&($+=m.price*(d.adults+d.children)*(d.type==="Noches"?d.nights:1))}a.extraServices&&d.extras.forEach(m=>{const u=a.extraServices.find(I=>I.id===m);u&&($+=u.price)}),d.totalCost=k+$}function w(){const k=document.getElementById("res-flow-container");if(!k)return;S();let $=`
      <div style="flex:1;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px">
          <div>
            <h2 style="font-size:22px; font-weight:800; font-family:var(--font-heading)">Reservar estadía</h2>
            <p style="font-size:14px; color:var(--text-secondary)">${d.room.name}</p>
          </div>
        </div>
    `;z.length>1&&($+=`
        <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Tipo de reserva</h3>
        <div style="display:flex; gap:12px; margin-bottom:20px">
           ${z.map(u=>{const I=d.type===u;return`
               <div class="stay-type-card" data-type="${u}" style="flex:1; padding:16px; border-radius:12px; border:2px solid ${I?"var(--green-primary)":"var(--border-light)"}; background:${I?"var(--green-light)":"var(--surface)"}; text-align:center; cursor:pointer; transition:0.2s">
                 <div style="color:${I?"var(--green-primary)":"var(--text-secondary)"}; margin-bottom:8px">${e(u==="Horas"?"clock":"moon",24)}</div>
                 <div style="font-weight:700; font-size:15px; color:${I?"var(--green-primary)":"var(--text-primary)"}">Por ${u.toLowerCase()}</div>
               </div>
             `}).join("")}
        </div>
      `),d.type==="Horas"?$+=`
        <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Número de horas</h3>
        <div style="display:flex; align-items:center; justify-content:space-between; background:var(--bg-body); padding:16px; border-radius:12px; border:1px solid var(--border-light); margin-bottom:24px">
           <div style="font-weight:600; font-size:15px">S/ ${v} <span style="font-size:12px; color:var(--text-secondary); font-weight:400">por hora</span></div>
           <div style="display:flex; align-items:center; gap:16px">
              <button class="icon-btn pp-btn" data-field="hours" data-val="-1" ${d.hours<=(a.minHours||2)?'disabled style="opacity:0.3"':""} style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light)">${e("minus",16)}</button>
              <span style="font-weight:800; font-size:18px; width:20px; text-align:center">${d.hours}</span>
              <button class="icon-btn pp-btn" data-field="hours" data-val="1" ${d.hours>=(a.maxHours||12)?'disabled style="opacity:0.3"':""} style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light)">${e("plus",16)}</button>
           </div>
        </div>
      `:$+=`
        <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Fechas de estadía</h3>
        <!-- Calendario visual simulado -->
        <div style="background:var(--bg-body); padding:16px; border-radius:12px; border:1px solid var(--border-light); margin-bottom:24px; position:relative">
           <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-light); padding-bottom:12px; margin-bottom:12px">
             <div style="flex:1">
               <div style="font-size:12px; color:var(--text-secondary); font-weight:600">LLEGADA</div>
               <div style="font-weight:700; font-size:15px mt-4">Vie, 20 Oct</div>
             </div>
             <div style="width:1px; background:var(--border-light); margin:0 16px"></div>
             <div style="flex:1">
               <div style="font-size:12px; color:var(--text-secondary); font-weight:600">SALIDA</div>
               <div style="font-weight:700; font-size:15px mt-4">Dom, 22 Oct</div>
             </div>
           </div>
           
           <div style="display:flex; justify-content:center; align-items:center; gap:12px; margin-top:16px">
              <button class="icon-btn pp-btn" data-field="nights" data-val="-1" ${d.nights<=1?'disabled style="opacity:0.3"':""} style="width:32px;height:32px;border-radius:50%;border:1px solid var(--border-light)">${e("minus",16)}</button>
              <span style="font-size:14px; font-weight:600">${d.nights} noche${d.nights>1?"s":""}</span>
              <button class="icon-btn pp-btn" data-field="nights" data-val="1" style="width:32px;height:32px;border-radius:50%;border:1px solid var(--border-light)">${e("plus",16)}</button>
           </div>
        </div>
      `,a.breakfasts&&a.breakfasts.length>0&&($+=`
        <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Opciones de desayuno</h3>
        <div class="scroll-x" style="display:flex; gap:12px; margin-bottom:24px; padding-bottom:8px">
          ${a.breakfasts.map(u=>{const I=d.breakfastId===u.id;return`
              <div class="bk-card flex-col" data-bkid="${u.id}" style="min-width:140px; border-radius:12px; border:2px solid ${I?"var(--green-primary)":"var(--border-light)"}; overflow:hidden; cursor:pointer; position:relative">
                 ${u.image?`<img src="${u.image}" style="width:100%; height:80px; object-fit:cover" />`:'<div style="height:40px; background:var(--bg-body)"></div>'}
                 <div style="padding:10px">
                   <div style="font-size:13px; font-weight:700; margin-bottom:4px; line-height:1.2">${u.name}</div>
                   <div style="font-size:12px; font-weight:600; color:${u.price>0?"var(--text-primary)":"var(--green-primary)"}">${u.price>0?"+ S/ "+u.price:"Incluido"}</div>
                 </div>
                 ${I?`<div style="position:absolute; top:8px; right:8px; background:var(--green-primary); color:white; border-radius:50%; width:20px; height:20px; display:flex; align-items:center; justify-content:center">${e("check",12)}</div>`:""}
              </div>
            `}).join("")}
        </div>
      `),$+=`
      <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Huéspedes</h3>
      <div style="background:var(--bg-body); padding:16px; border-radius:12px; border:1px solid var(--border-light); margin-bottom:24px">
         <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px">
            <div>
              <div style="font-weight:600; font-size:15px">Adultos</div>
              <div style="font-size:12px; color:var(--text-secondary)">Mayores de 12 años</div>
            </div>
            <div style="display:flex; align-items:center; gap:16px">
              <button class="icon-btn pp-btn" data-field="adults" data-val="-1" ${d.adults<=1?'disabled style="opacity:0.3"':""} style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light)">${e("minus",16)}</button>
              <span style="font-weight:800; font-size:16px; width:20px; text-align:center">${d.adults}</span>
              <button class="icon-btn pp-btn" data-field="adults" data-val="1" ${d.adults+d.children>=d.room.beds*2?'disabled style="opacity:0.3"':""} style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light)">${e("plus",16)}</button>
            </div>
         </div>
         <div style="display:flex; justify-content:space-between; align-items:center">
            <div>
              <div style="font-weight:600; font-size:15px">Niños</div>
              <div style="font-size:12px; color:var(--text-secondary)">De 2 a 12 años</div>
            </div>
            <div style="display:flex; align-items:center; gap:16px">
              <button class="icon-btn pp-btn" data-field="children" data-val="-1" ${d.children<=0?'disabled style="opacity:0.3"':""} style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light)">${e("minus",16)}</button>
              <span style="font-weight:800; font-size:16px; width:20px; text-align:center">${d.children}</span>
              <button class="icon-btn pp-btn" data-field="children" data-val="1" ${d.adults+d.children>=d.room.beds*2?'disabled style="opacity:0.3"':""} style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light)">${e("plus",16)}</button>
            </div>
         </div>
      </div>
    `,a.extraServices&&a.extraServices.length>0&&($+=`
        <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Servicios adicionales</h3>
        <div class="flex-col gap-12" style="margin-bottom:32px">
           ${a.extraServices.map(u=>{const I=d.extras.includes(u.id);return`
               <label style="display:flex; justify-content:space-between; align-items:center; padding:12px 16px; border:1px solid var(--border-light); border-radius:12px; cursor:pointer">
                 <div style="flex:1; padding-right:12px">
                   <div style="font-weight:600; font-size:14px; margin-bottom:2px">${u.name}</div>
                   <div style="color:var(--text-secondary); font-size:13px">${u.price>0?"+ S/ "+u.price:"Sin costo adicional"}</div>
                 </div>
                 <input type="checkbox" class="xt-checkbox" data-xtid="${u.id}" style="width:22px; height:22px; accent-color:var(--green-primary)" ${I?"checked":""} />
               </label>
             `}).join("")}
        </div>
      `),$+=`
      </div>
      <div style="position:sticky; bottom:-20px; left:-20px; width:calc(100% + 40px); background:var(--surface); border-top:1px solid var(--border-light); padding:16px 20px 24px; margin-top:20px; display:flex; justify-content:space-between; align-items:center; z-index:100; box-shadow:0 -4px 16px rgba(0,0,0,0.05)">
         <div>
           <div style="font-size:12px; color:var(--text-secondary); margin-bottom:2px">Total a pagar</div>
           <div style="font-size:20px; font-weight:800; color:var(--green-primary)">S/ ${d.totalCost}</div>
         </div>
         <button class="btn btn-primary" id="btn-confirm-res" style="font-size:16px; padding:0 24px">Confirmar reserva</button>
      </div>
    `,k.innerHTML=$,A(),document.querySelectorAll(".stay-type-card").forEach(u=>{u.onclick=()=>{d.type=u.dataset.type,w()}}),document.querySelectorAll(".pp-btn").forEach(u=>{u.onclick=()=>{const I=u.dataset.field,T=parseInt(u.dataset.val);I==="hours"&&d.hours+T>=(a.minHours||2)&&d.hours+T<=(a.maxHours||12)&&(d.hours+=T),I==="nights"&&d.nights+T>=1&&(d.nights+=T),I==="adults"&&d.adults+T>=1&&(d.adults+=T),I==="children"&&d.children+T>=0&&(d.children+=T),w()}}),document.querySelectorAll(".bk-card").forEach(u=>{u.onclick=()=>{d.breakfastId=u.dataset.bkid,w()}}),document.querySelectorAll(".xt-checkbox").forEach(u=>{u.onchange=()=>{const I=u.dataset.xtid;u.checked&&!d.extras.includes(I)?d.extras.push(I):u.checked||(d.extras=d.extras.filter(T=>T!==I)),w()}});const m=document.getElementById("btn-confirm-res");m&&(m.onclick=()=>{ne(a,{reservation:{totalCost:d.totalCost}}),M(),f("¡Reserva confirmada! Se añadió al presupuesto.","success")})}s()}function sa(){const p=document.getElementById("app");let i="Todos",a={priceMax:300,durations:[],difficulties:[],spanishGuide:!1};const t=["Todos","Aventura","Cultura","Naturaleza","Deportes","Talleres","Tours guiados","Fotografía"],n=["Menos de 2h","2 a 4h","Medio día","Día completo"],l=["Fácil","Moderado","Difícil"];function o(){let y=J.filter(c=>c.category==="Experiencias"&&!c.hidden);i!=="Todos"&&(y=y.filter(c=>c.subType===i)),y=y.filter(c=>!((c.pricePerPerson||c.basePrice||0)>a.priceMax||a.durations.length>0&&(!c.duration||!a.durations.includes(c.duration))||a.difficulties.length>0&&(!c.difficulty||!a.difficulties.includes(c.difficulty))||a.spanishGuide&&!c.hasSpanishGuide)),p.innerHTML=`
      <div class="screen" style="padding-bottom:12px; background:var(--bg-body)">
        <div class="appbar" style="background:var(--surface); box-shadow:var(--shadow-sm)">
          <button class="appbar-btn" id="btn-back">${e("arrow-left",20)}</button>
          <span class="appbar-title">Experiencias</span>
          <button class="appbar-btn" id="btn-filter" style="${b()?"color:var(--green-primary)":""}">${e("sliders",20)}</button>
        </div>

        <div style="padding: 16px;">
          <!-- Sub-type chips -->
          <div class="scroll-x" style="display:flex; gap:8px; margin-bottom:16px;">
            ${t.map(c=>`
              <button class="chip ${i===c?"chip-active":"chip-outline"} chip-selectable" data-subtype="${c}">
                ${c}
              </button>
            `).join("")}
          </div>

          <!-- List View -->
          <div class="flex-col gap-16">
            ${y.length>0?y.map(c=>`
              <div class="card-flat" data-experiencia="${c.id}" style="padding:0;border-radius:16px;overflow:hidden;cursor:pointer">
                <div style="position:relative">
                  <img src="${c.image}" alt="${c.name}" style="width:100%;height:160px;object-fit:cover" />
                  <div style="position:absolute;top:10px;left:10px;display:flex;gap:6px">
                    <span class="chip chip-${c.catColor||"blue"}" style="font-size:10px;padding:3px 10px;backdrop-filter:blur(4px)">${c.category}</span>
                    ${c.subType?`<span class="chip" style="background:rgba(0,0,0,0.5);color:white;font-size:10px;padding:3px 10px;backdrop-filter:blur(4px)">${c.subType}</span>`:""}
                  </div>
                  <div style="position:absolute;top:10px;right:10px;display:flex;gap:6px;flex-direction:column;align-items:flex-end">
                     ${le(c.safety).replace("Shield",e("shield",12)).replace("✓","")}
                     ${c.hasSpanishGuide?'<span class="chip chip-green" style="font-size:10px;padding:3px 8px;box-shadow:0 2px 4px rgba(0,0,0,0.2)">Guía en español</span>':""}
                  </div>
                </div>
                <div style="padding:14px 16px">
                  <div style="display:flex;justify-content:space-between;align-items:flex-start">
                    <div style="font-weight:700;font-size:16px;margin-bottom:4px;flex:1;padding-right:8px">${c.name}</div>
                    <div style="font-weight:800;color:var(--green-primary);font-size:15px;white-space:nowrap">S/ ${c.pricePerPerson||c.basePrice||0}</div>
                  </div>
                  <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px">
                    ${e("star",12,"text-orange")}
                    <span style="font-size:12px;color:var(--text-secondary);font-weight:500;margin-left:2px">${c.rating} (${c.reviews} op.)</span>
                  </div>
                  <div style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;display:flex;align-items:center;gap:4px">
                    ${e("map-pin",12)} ${c.address} | ${e("clock",12)} ${c.duration||"Por definir"}
                  </div>
                  <div style="display:flex;gap:4px;flex-wrap:wrap">
                    ${(c.tags||[]).slice(0,4).map(x=>`<span class="chip chip-outline" style="font-size:9px;padding:2px 6px">${x}</span>`).join("")}
                  </div>
                </div>
              </div>
            `).join(""):`
              <div class="empty-state" style="padding:40px 0">
                ${e("search",40,"text-secondary")}
                <h3 style="margin-top:16px">Sin resultados</h3>
                <p>Intenta ajustar tus filtros de búsqueda.</p>
                <button class="btn btn-outline btn-sm mt-16" id="btn-clear-empty">Limpiar filtros</button>
              </div>
            `}
          </div>
        </div>
      </div>
    `,W("/explore","user"),A(),r()}function b(){return a.priceMax<300||a.durations.length>0||a.difficulties.length>0||a.spanishGuide}function r(){document.getElementById("btn-back").onclick=()=>window.history.back(),document.getElementById("btn-filter").onclick=s;const y=document.getElementById("btn-clear-empty");y&&(y.onclick=()=>{i="Todos",a={priceMax:300,durations:[],difficulties:[],spanishGuide:!1},o()}),document.querySelectorAll("[data-subtype]").forEach(c=>{c.onclick=()=>{i=c.dataset.subtype,o()}}),document.querySelectorAll("[data-experiencia]").forEach(c=>{c.onclick=()=>E("/experiencias-detail?id="+c.dataset.experiencia)})}function s(){H(`
      <div style="padding:24px 20px">
        <h2 style="margin-bottom:24px; font-size: 20px; font-weight: 700;">Filtros de Experiencias</h2>
        <div class="flex-col gap-24">
          
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Precio máximo por persona</label>
            <input type="range" min="10" max="300" step="10" value="${a.priceMax}" style="width:100%;accent-color:var(--green-primary); margin: 12px 0;" id="filter-price" />
            <div class="flex-row" style="justify-content:space-between;color:var(--green-primary);font-weight:600"><small>S/10</small><small id="price-val">Hasta S/${a.priceMax}</small><small>S/300</small></div>
          </div>

          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Duración estimada</label>
            <div class="flex-row gap-8 mt-8 flex-wrap" id="filter-duration-container">
               ${n.map(g=>`
                 <span class="chip ${a.durations.includes(g)?"chip-active":"chip-outline"} chip-selectable" data-duration="${g}">
                   ${g}
                 </span>
               `).join("")}
            </div>
          </div>

          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Nivel de dificultad</label>
            <div class="flex-row gap-8 mt-8 flex-wrap" id="filter-difficulty-container">
              ${l.map(g=>`
                <span class="chip ${a.difficulties.includes(g)?"chip-active":"chip-outline"} chip-selectable" data-difficulty="${g}">${g}</span>
              `).join("")}
            </div>
          </div>

          <div class="input-group">
            <label style="display:flex;justify-content:space-between;align-items:center;font-weight:600;color:var(--text-primary);margin-bottom:0;cursor:pointer">
               <span>Incluye guía en español</span>
               <input type="checkbox" id="filter-spanish-guide" style="width:20px;height:20px;accent-color:var(--green-primary)" ${a.spanishGuide?"checked":""}>
            </label>
          </div>

          <div class="flex-row gap-12 mt-16 pb-12">
            <button class="btn btn-outline flex-1" style="font-weight:600" id="btn-reset-filters">Restablecer</button>
            <button class="btn btn-primary flex-1" style="font-weight:600;font-size:16px" id="btn-apply-filters">Aplicar filtros</button>
          </div>
        </div>
      </div>
    `),A();const y=document.getElementById("filter-price"),c=document.getElementById("price-val");y&&c&&(y.oninput=g=>c.innerText="Hasta S/"+g.target.value);let x=[...a.durations];document.querySelectorAll("#filter-duration-container .chip-selectable").forEach(g=>{g.onclick=()=>{g.classList.toggle("chip-active"),g.classList.toggle("chip-outline");const d=g.dataset.duration;x.includes(d)?x=x.filter(z=>z!==d):x.push(d)}});let C=[...a.difficulties];document.querySelectorAll("#filter-difficulty-container .chip-selectable").forEach(g=>{g.onclick=()=>{g.classList.toggle("chip-active"),g.classList.toggle("chip-outline");const d=g.dataset.difficulty;C.includes(d)?C=C.filter(z=>z!==d):C.push(d)}}),document.getElementById("btn-reset-filters").onclick=()=>{a.priceMax=300,a.durations=[],a.difficulties=[],a.spanishGuide=!1,M(),f("Filtros restablecidos"),o()},document.getElementById("btn-apply-filters").onclick=()=>{a.priceMax=parseInt(y.value),a.durations=x,a.difficulties=C,a.spanishGuide=document.getElementById("filter-spanish-guide").checked,M(),f("Filtros aplicados","success"),o()}}o()}function na(p){const i=p.id,a=re(i)||re("4")||re("3");if(!a){E("/home");return}const t=document.getElementById("app");let n=0;const l=[a.image,...a.images||[]],o=j.favorites.has(a.id);function b($){const m=$.toLowerCase();return m.includes("agua")||m.includes("bebida")?"droplet":m.includes("sol")||m.includes("bloqueador")?"sun":m.includes("ropa")||m.includes("calzado")?"shirt":m.includes("guía")||m.includes("biling")?"user-check":m.includes("transporte")||m.includes("bus")?"bus":m.includes("seguro")||m.includes("médico")?"shield-plus":m.includes("foto")||m.includes("cámara")?"camera":m.includes("equipo")?"tool":m.includes("efectivo")||m.includes("dinero")?"banknote":"check"}function r($,m){let u="var(--green-primary)";return m===2&&(u="var(--orange)"),m===3&&(u="var(--red)"),`
      <div style="display:flex; align-items:flex-end; gap:2px; height:14px">
        <div style="width:4px; height:6px; background:${m>=1?u:"var(--border)"}; border-radius:1px"></div>
        <div style="width:4px; height:10px; background:${m>=2?u:"var(--border)"}; border-radius:1px"></div>
        <div style="width:4px; height:14px; background:${m>=3?u:"var(--border)"}; border-radius:1px"></div>
      </div>
      <span style="font-size:12px; font-weight:600; color:${u}">${$}</span>
    `}function s(){G(),t.innerHTML=`
      <div class="screen" style="padding-bottom:16px; background:var(--bg-body)">
        <!-- Gallery -->
        <div class="detail-gallery" id="gallery">
          <img src="${l[0]}" alt="${a.name}" id="gallery-img" style="width:100%;height:240px;object-fit:cover" />
          <button class="float-btn" style="top:16px;left:16px;display:flex;align-items:center;justify-content:center;z-index:10" id="btn-back">${e("arrow-left",24)}</button>
          <button class="float-btn" style="top:16px;right:60px;display:flex;align-items:center;justify-content:center;z-index:10" id="btn-share-header">${e("share-2",20)}</button>
          <button class="float-btn" style="top:16px;right:16px;display:flex;align-items:center;justify-content:center;z-index:10;${o?"color:var(--red);background:rgba(255,0,0,0.1)":""}" id="btn-fav">${e("heart",20,o?"filled":"")}</button>
          <div class="gallery-dots dots" style="bottom:36px;z-index:10;display:flex;gap:6px">
            ${l.map(($,m)=>`<div class="dot ${m===0?"active":""}" data-dot="${m}"></div>`).join("")}
          </div>
          <div style="position:absolute;bottom:36px;right:16px;background:rgba(0,0,0,0.6);color:white;padding:4px 10px;border-radius:12px;font-size:12px;z-index:10;font-weight:600;backdrop-filter:blur(4px)" id="gallery-counter">1/${l.length}</div>
        </div>

        <!-- Detail Card -->
        <div class="detail-card">
          <div class="detail-chips">
            <span class="chip chip-${a.catColor||"orange"}">${a.category}</span>
            ${a.subType?`<span class="chip" style="background:rgba(0,0,0,0.5);color:white;font-size:10px;padding:3px 10px;backdrop-filter:blur(4px)">${a.subType}</span>`:""}
            ${le(a.safety)}
          </div>
          
          <h1 class="detail-title">${a.name}</h1>
          
          <div class="detail-rating-row" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            ${ge(Math.round(a.rating))}
            <span style="font-size:13px;color:var(--text-secondary)">${a.rating} (${a.reviews} reseñas)</span>
          </div>
          
          <div style="font-size:13px;color:var(--text-secondary);margin-top:4px;display:flex;align-items:center;gap:6px">${e("map-pin",14)} ${a.address}</div>

          <!-- Description -->
          <div class="detail-section">
            <p style="font-size:14px;line-height:1.6;color:var(--text-primary)">${a.description||a.name+" es una experiencia inolvidable."}</p>
          </div>

          <!-- Información General -->
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("info",16)} Detalles de la Experiencia</h3></div>
            <div class="info-grid mt-8">
              <div class="info-cell"><span class="info-icon">${e("clock",16)}</span><div><div class="info-label">Duración</div><div class="info-value">${a.duration||"Medio día"}</div></div></div>
              <div class="info-cell"><span class="info-icon">${e("activity",16)}</span><div><div class="info-label">Dificultad</div><div class="info-value" style="display:flex;align-items:center;gap:4px">${r(a.difficulty||"Moderado",a.difficultyBars||2)}</div></div></div>
              <div class="info-cell"><span class="info-icon">${e("languages",16)}</span><div><div class="info-label">Idioma del guía</div><div class="info-value">${a.hasSpanishGuide?"Español e Inglés":"Solo Inglés"}</div></div></div>
              <div class="info-cell"><span class="info-icon">${e("map",16)}</span><div><div class="info-label">Punto de encuentro</div><div class="info-value" style="font-size:11px">${a.meetingPoint||a.address}</div></div></div>
            </div>
            <div style="margin-top:12px; padding:12px; background:var(--green-light); border:1px solid var(--green-primary); border-radius:12px; display:flex; justify-content:space-between; align-items:center">
              <div style="font-weight:700; color:var(--green-primary)">Precio por persona</div>
              <div style="font-size:18px; font-weight:800; color:var(--green-primary)">S/ ${a.pricePerPerson||a.basePrice||0}</div>
            </div>
          </div>

          <!-- Qué incluye -->
          ${a.includes&&a.includes.length>0?`
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("check-square",16)} Qué incluye</h3></div>
            <div style="display:flex; flex-direction:column; gap:8px; margin-top:8px">
              ${a.includes.map($=>`
                <div style="display:flex; align-items:center; gap:12px">
                   ${e(b($),16,"text-green")}
                   <span style="font-size:14px; color:var(--text-primary)">${$}</span>
                </div>
              `).join("")}
            </div>
          </div>`:""}

          <!-- Qué llevar -->
          ${a.bring&&a.bring.length>0?`
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("briefcase",16)} Qué llevar</h3></div>
            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:8px">
              ${a.bring.map($=>`
                <span class="chip chip-outline" style="font-size:12px; display:flex; align-items:center; gap:4px">
                  ${e(b($),12)} ${$}
                </span>
              `).join("")}
            </div>
          </div>`:""}

          <!-- Horarios Disponibles -->
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("calendar",16)} Horarios disponibles</h3></div>
            <div class="mt-8" id="schedules-container">
              <!-- Dates Scroll -->
              <div class="scroll-x" style="display:flex; gap:8px; padding-bottom:12px" id="dates-scroll">
                <!-- Rendered in JS -->
              </div>
              <!-- Time Slots -->
              <div id="slots-container" style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px">
                <!-- Rendered in JS -->
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("map",16)} Ubicación</h3></div>
            <p style="font-size:13px;margin-bottom:8px;display:flex;align-items:center;gap:6px">${e("map-pin",14)} ${a.address}</p>
            <div id="place-map" style="height:200px;border-radius:12px;overflow:hidden;position:relative;z-index:1"></div>
            <div class="flex-row gap-8 mt-8">
              <button class="btn btn-outline btn-sm flex-1" id="btn-how-to-get" style="display:flex;align-items:center;justify-content:center;gap:6px">${e("navigation",14)} Cómo llegar</button>
              <button class="btn btn-outline btn-sm flex-1" id="btn-nearby" style="display:flex;align-items:center;justify-content:center;gap:6px">${e("map",14)} Lugares cercanos</button>
            </div>
          </div>

          <!-- Safety -->
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("shield",16)} Seguridad</h3></div>
            <div class="safety-card mt-8" style="background:${a.safety==="safe"?"var(--green-bg)":a.safety==="caution"?"var(--yellow-light)":"var(--red-light)"};border-color:${a.safety==="safe"?"var(--green-primary)":a.safety==="caution"?"var(--yellow)":"var(--red)"}">
              <span style="display:flex;color:${a.safety==="safe"?"var(--green-primary)":a.safety==="caution"?"var(--yellow)":"var(--red)"}">${a.safety==="safe"?e("shield",28):a.safety==="caution"?e("alert-triangle",28):e("alert-octagon",28)}</span>
              <div>
                <div style="font-weight:600;font-size:15px;margin-bottom:4px">${le(a.safety)}</div>
                <p style="font-size:12px">${a.safetyNote||"La zona en la que se ubica la experiencia es segura."}</p>
                ${a.safetyValidators?`<small style="color:var(--green-primary)">✓ ${a.safetyValidators} usuarios han validado esto</small>`:""}
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("zap",16)} Acciones</h3></div>
            <div class="detail-actions-grid mt-8">
              <button class="detail-action-btn" style="border-color:var(--green-primary);color:var(--green-primary);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-add-route">${e("map",16)} Agregar ruta</button>
              <button class="detail-action-btn" style="border-color:var(--blue);color:var(--blue);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-rate">${e("star",16)} Calificar</button>
              <button class="detail-action-btn" style="border-color:var(--purple);color:var(--purple);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-share-action">${e("share-2",16)} Compartir</button>
              <button class="detail-action-btn" style="border-color:var(--orange);color:var(--orange);display:flex;align-items:center;justify-content:center;gap:6px" id="btn-report">${e("flag",16)} Reportar</button>
              ${a.hidden?`<button class="detail-action-btn" style="border-color:#004D40;color:#004D40;display:flex;align-items:center;justify-content:center;gap:6px;background:rgba(0,77,64,0.05)" id="btn-validate-place">${e("check-circle",16)} Validar</button>`:""}
            </div>
          </div>

          <!-- Comments -->
          <div class="detail-section">
            <div class="detail-section-header"><h3 style="display:flex;align-items:center;gap:6px">${e("message-circle",16)} Reseñas (${Le.length})</h3></div>
            <div class="flex-col" id="comments-list">
              ${Le.map($=>{var m,u;return`
                <div class="comment-item">
                  ${O($.initials,$.color,36)}
                  <div class="comment-body">
                    <div class="comment-header">
                      <span class="comment-author">${$.author}</span>
                      <span class="comment-date">${$.date}</span>
                    </div>
                    <div class="flex-row gap-2 mb-4">${ge($.rating,12)}</div>
                    <div class="comment-text">${$.text}</div>
                    ${(m=$.photos)!=null&&m.length?`<div class="flex-row gap-4 mt-4">${$.photos.map(I=>`<img src="${I}" style="width:48px;height:48px;border-radius:6px;object-fit:cover" />`).join("")}</div>`:""}
                    <div class="comment-actions mt-4">
                      <span style="display:flex;align-items:center;gap:4px;cursor:pointer">${e("thumbs-up",12)} ${$.useful} útil</span>
                      <span style="display:flex;align-items:center;gap:4px;cursor:pointer">${e("corner-down-right",12)} Responder</span>
                    </div>
                    ${(u=$.replies)!=null&&u.length?$.replies.map(I=>`
                      <div style="margin-top:8px;padding:8px;background:var(--bg);border-radius:8px;font-size:12px">
                        <strong>${I.author}</strong> ${I.isOwner?'<span class="chip chip-blue" style="font-size:9px;padding:1px 6px">Dueño</span>':""}
                        <div style="margin-top:4px">${I.text}</div>
                      </div>
                    `).join(""):""}
                  </div>
                </div>
              `}).join("")}
            </div>
            <div class="comment-input-row mt-8">
              ${O("MG","#1A6B3A",32)}
              <input class="input-field" placeholder="Escribe una reseña..." style="flex:1;height:40px;padding:0 12px;font-size:13px" id="comment-input" />
              <button class="btn btn-primary btn-xs" id="btn-send-comment">Enviar</button>
            </div>
          </div>

        </div> <!-- /.detail-card -->
      </div>
    `,A(),d(),x(),c()}let y=0;function c(){const $=document.getElementById("dates-scroll"),m=document.getElementById("slots-container");if(!$||!m)return;if(!a.schedules||a.schedules.length===0){m.innerHTML='<p style="font-size:13px; color:var(--text-secondary)">No hay horarios configurados.</p>';return}$.innerHTML=a.schedules.map((I,T)=>{const B=I.date.split("-"),D=B[2],U=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"][parseInt(B[1])-1],K=T===y;return`
        <div class="date-chip" data-idx="${T}" style="min-width:60px; padding:10px 4px; border-radius:12px; text-align:center; cursor:pointer; border:2px solid ${K?"var(--green-primary)":"var(--border-light)"}; background:${K?"var(--green-primary)":"var(--surface)"}; color:${K?"white":"var(--text-primary)"}; transition:0.2s">
          <div style="font-size:11px; font-weight:600; opacity:${K?"0.9":"0.6"}">${U}</div>
          <div style="font-size:20px; font-weight:800; line-height:1.2">${D}</div>
        </div>
      `}).join("");const u=a.schedules[y];!u||!u.slots||u.slots.length===0?m.innerHTML='<p style="font-size:13px; color:var(--text-secondary)">No hay horarios para este día.</p>':m.innerHTML=u.slots.map((I,T)=>{const B=I.capacity-I.booked;let D="var(--green-primary)",P="var(--green-light)",U=`${B} de ${I.capacity} lugares`,K=!0;return B===0?(D="var(--red)",P="var(--red-light)",U="Lleno",K=!1):B<=3&&(D="var(--orange)",P="var(--yellow-light)",U=`Últimos ${B} lugares`),`
          <div class="slot-card ${K?"slot-clickable":""}" data-slot-idx="${T}" style="border:1px solid ${D}; background:${P}; border-radius:12px; padding:12px; text-align:center; cursor:${K?"pointer":"not-allowed"}; opacity:${K?"1":"0.6"}">
             <div style="font-size:18px; font-weight:800; color:var(--text-primary); margin-bottom:4px">${I.time}</div>
             <div style="font-size:11px; font-weight:600; color:${D}">${U}</div>
          </div>
        `}).join(""),document.querySelectorAll(".date-chip").forEach(I=>{I.onclick=()=>{y=parseInt(I.dataset.idx),c()}}),document.querySelectorAll(".slot-clickable").forEach(I=>{I.onclick=()=>{const T=parseInt(I.dataset.slotIdx);h(y,T)}})}function x(){const $=a.lat||-14.0875,m=a.lng||-75.7627;setTimeout(()=>we("place-map",$,m,15,a.name),100),document.getElementById("btn-how-to-get").onclick=()=>f("Abriendo navegación..."),document.getElementById("btn-nearby").onclick=()=>E("/explore"),document.getElementById("btn-add-route").onclick=()=>{ne(a),f(e("check",16)+` ${a.name} agregado al recorrido`)},document.getElementById("btn-rate").onclick=C,document.getElementById("btn-share-action").onclick=()=>f("Enlace copiado"),document.getElementById("btn-report").onclick=g;const u=document.getElementById("btn-validate-place");u&&(u.onclick=()=>{f(e("check-circle",16)+" ¡Validación registrada! Gracias por verificar este lugar.","success"),u.disabled=!0,u.innerHTML=e("check",16)+" Validado",u.style.opacity="0.6",u.style.pointerEvents="none"}),document.getElementById("btn-send-comment").onclick=()=>{const I=document.getElementById("comment-input");I.value.trim()&&(f(e("check",16)+" Reseña publicada"),I.value="")}}function C(){H(`
      <div style="padding:20px">
        <h3 style="margin-bottom:16px">Calificar ${a.name}</h3>
        <div class="flex-row gap-4" style="justify-content:center;margin-bottom:16px" id="rate-stars">
          ${[1,2,3,4,5].map(m=>`<span class="star" style="cursor:pointer;display:flex;color:#D0D0D0" data-rate="${m}">${e("star",36)}</span>`).join("")}
        </div>
        <textarea class="input-field no-icon" placeholder="Escribe tu opinión (opcional)..." rows="3" style="margin-bottom:12px"></textarea>
        <button class="btn btn-primary" id="btn-submit-rating">Enviar calificación</button>
      </div>
    `),A();let $=0;document.querySelectorAll("#rate-stars [data-rate]").forEach(m=>{m.onclick=()=>{$=parseInt(m.dataset.rate),document.querySelectorAll("#rate-stars [data-rate]").forEach((u,I)=>{u.classList.toggle("filled",I<$),u.style.color=I<$?"#FFB800":"#D0D0D0"})}}),document.getElementById("btn-submit-rating").onclick=()=>{$>0&&(M(),f(e("star",16)+` Calificaste con ${$} estrella${$>1?"s":""}`))}}function g(){H(`
      <div style="padding:20px">
        <h3 style="margin-bottom:16px;display:flex;align-items:center;gap:8px">${e("flag",20)} Reportar ${a.name}</h3>
        <p style="font-size:13px;color:var(--text-secondary);margin-bottom:16px">Selecciona el motivo del reporte y describe el problema.</p>
        <div style="font-weight:600;font-size:13px;margin-bottom:8px">Tipo de reporte</div>
        <div class="flex-col gap-8" id="report-types" style="margin-bottom:16px">
          ${[{id:"spam",icon:"alert-circle",label:"Spam o contenido falso"},{id:"safety",icon:"shield",label:"Problema de seguridad"},{id:"closed",icon:"x-circle",label:"Lugar cerrado o no existe"},{id:"offensive",icon:"slash",label:"Contenido ofensivo"},{id:"info",icon:"info",label:"Información incorrecta"},{id:"other",icon:"more-horizontal",label:"Otro"}].map(m=>`
            <div class="chip chip-outline chip-selectable report-type" data-report="${m.id}" style="padding:10px 14px;display:flex;align-items:center;gap:8px;width:100%;justify-content:flex-start;border-radius:10px">
              ${e(m.icon,16)} ${m.label}
            </div>
          `).join("")}
        </div>
        <div style="font-weight:600;font-size:13px;margin-bottom:8px">Descripción del problema</div>
        <textarea class="input-field no-icon" id="report-reason" placeholder="Describe el problema con más detalle..." rows="3" style="margin-bottom:16px"></textarea>
        <button class="btn btn-primary" id="btn-submit-report" disabled style="opacity:0.5">Enviar reporte</button>
      </div>
    `),A();let $=null;document.querySelectorAll(".report-type").forEach(m=>{m.onclick=()=>{document.querySelectorAll(".report-type").forEach(I=>{I.classList.remove("chip-active"),I.classList.add("chip-outline")}),m.classList.add("chip-active"),m.classList.remove("chip-outline"),$=m.dataset.report;const u=document.getElementById("btn-submit-report");u.disabled=!1,u.style.opacity="1"}}),document.getElementById("btn-submit-report").onclick=()=>{$&&(M(),f(e("check",16)+" Reporte enviado. Gracias.","success"))}}function d(){document.getElementById("btn-back").onclick=()=>window.history.back(),document.getElementById("btn-share-header").onclick=()=>f("Enlace copiado"),document.getElementById("btn-fav").onclick=function(){const m=$e(a.id);this.innerHTML=e("heart",20,m?"filled":""),this.style.color=m?"var(--red)":"",this.style.background=m?"rgba(255,0,0,0.1)":"",f(m?"Agregado a favoritos":"Eliminado de favoritos")};const $=document.getElementById("gallery");if($){let m=0;$.addEventListener("touchstart",u=>m=u.touches[0].clientX),$.addEventListener("touchend",u=>{const I=m-u.changedTouches[0].clientX;Math.abs(I)>50&&(I>0&&n<l.length-1?n++:I<0&&n>0&&n--,z())}),document.querySelectorAll("[data-dot]").forEach(u=>{u.onclick=()=>{n=parseInt(u.dataset.dot),z()}})}}function z(){document.getElementById("gallery-img").src=l[n],document.getElementById("gallery-counter").textContent=`${n+1}/${l.length}`,document.querySelectorAll("[data-dot]").forEach(($,m)=>$.classList.toggle("active",m===n))}let v={};function h($,m){const u=a.schedules[$],I=u.slots[m];v={date:u.date,time:I.time,pricePerPerson:a.pricePerPerson||a.basePrice||0,adults:1,children:0,infants:0,extras:[],participants:[{name:"",age:"",medical:""}],totalCost:a.pricePerPerson||a.basePrice||0,available:I.capacity-I.booked},H('<div id="res-flow-container" style="padding:20px;display:flex;flex-direction:column;min-height:85vh">Cargando...</div>'),k()}function S(){const $=v.adults+v.children;for(;v.participants.length<$;)v.participants.push({name:"",age:"",medical:""});v.participants.length>$&&(v.participants=v.participants.slice(0,$))}function w(){let $=(v.adults+v.children)*v.pricePerPerson,m=0;a.extraServices&&v.extras.forEach(u=>{const I=a.extraServices.find(T=>T.id===u);I&&(m+=I.price)}),v.totalCost=$+m}function k(){const $=document.getElementById("res-flow-container");if(!$)return;S(),w();let m=`
      <div style="flex:1;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:24px">
          <div>
            <h2 style="font-size:22px; font-weight:800; font-family:var(--font-heading)">Reservar experiencia</h2>
            <p style="font-size:14px; color:var(--text-secondary)">${a.name}</p>
          </div>
        </div>

        <div style="background:var(--bg-body); padding:16px; border-radius:12px; border:1px solid var(--border-light); margin-bottom:24px; display:flex; align-items:center; gap:16px">
           <div style="width:48px;height:48px;border-radius:50%;background:var(--green-light);color:var(--green-primary);display:flex;align-items:center;justify-content:center">${e("calendar",24)}</div>
           <div>
             <div style="font-weight:700; font-size:15px">${v.date}</div>
             <div style="font-size:13px; color:var(--text-secondary)">Horario: ${v.time}</div>
           </div>
        </div>

        <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Participantes</h3>
        <p style="font-size:12px; color:var(--text-secondary); margin-bottom:16px">Disponibilidad máxima en este horario: ${v.available} lugares</p>
        
        <div style="background:var(--bg-body); padding:16px; border-radius:12px; border:1px solid var(--border-light); margin-bottom:24px">
           <!-- Adultos -->
           <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px">
              <div>
                <div style="font-weight:600; font-size:15px">Adultos</div>
                <div style="font-size:12px; color:var(--text-secondary)">Mayores de 12 años</div>
              </div>
              <div style="display:flex; align-items:center; gap:16px">
                <button class="icon-btn pp-btn" data-field="adults" data-val="-1" ${v.adults<=1?'disabled style="opacity:0.3"':""} style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light)">${e("minus",16)}</button>
                <span style="font-weight:800; font-size:16px; width:20px; text-align:center">${v.adults}</span>
                <button class="icon-btn pp-btn" data-field="adults" data-val="1" ${v.adults+v.children>=v.available?'disabled style="opacity:0.3"':""} style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light)">${e("plus",16)}</button>
              </div>
           </div>
           
           <!-- Niños -->
           <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px">
              <div>
                <div style="font-weight:600; font-size:15px">Niños (5 a 12 años)</div>
                <div style="font-size:12px; color:var(--text-secondary)">Pagan precio normal</div>
              </div>
              <div style="display:flex; align-items:center; gap:16px">
                <button class="icon-btn pp-btn" data-field="children" data-val="-1" ${v.children<=0?'disabled style="opacity:0.3"':""} style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light)">${e("minus",16)}</button>
                <span style="font-weight:800; font-size:16px; width:20px; text-align:center">${v.children}</span>
                <button class="icon-btn pp-btn" data-field="children" data-val="1" ${v.adults+v.children>=v.available?'disabled style="opacity:0.3"':""} style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light)">${e("plus",16)}</button>
              </div>
           </div>

           <!-- Menores de 5 -->
           <div style="display:flex; justify-content:space-between; align-items:center">
              <div>
                <div style="font-weight:600; font-size:15px">Infantes</div>
                <div style="font-size:12px; color:var(--green-primary); font-weight:600">Gratis (Menores de 5)</div>
              </div>
              <div style="display:flex; align-items:center; gap:16px">
                <button class="icon-btn pp-btn" data-field="infants" data-val="-1" ${v.infants<=0?'disabled style="opacity:0.3"':""} style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light)">${e("minus",16)}</button>
                <span style="font-weight:800; font-size:16px; width:20px; text-align:center">${v.infants}</span>
                <button class="icon-btn pp-btn" data-field="infants" data-val="1" style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light)">${e("plus",16)}</button>
              </div>
           </div>
        </div>
    `;a.extraServices&&a.extraServices.length>0&&(m+=`
        <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Servicios opcionales adicionales</h3>
        <div class="flex-col gap-12" style="margin-bottom:24px">
           ${a.extraServices.map(B=>{const D=v.extras.includes(B.id);return`
               <label style="display:flex; justify-content:space-between; align-items:center; padding:12px 16px; border:1px solid var(--border-light); border-radius:12px; cursor:pointer">
                 <div style="flex:1; padding-right:12px">
                   <div style="font-weight:600; font-size:14px; margin-bottom:2px">${B.name}</div>
                   <div style="color:var(--text-secondary); font-size:13px">${B.price>0?"+ S/ "+B.price:"Sin costo adicional"}</div>
                 </div>
                 <input type="checkbox" class="xt-checkbox" data-xtid="${B.id}" style="width:22px; height:22px; accent-color:var(--green-primary)" ${D?"checked":""} />
               </label>
             `}).join("")}
        </div>
      `),m+=`
        <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Información de los participantes</h3>
        <div class="flex-col gap-16" style="margin-bottom:24px">
          ${v.participants.map((B,D)=>`
            <div style="background:var(--bg); padding:16px; border-radius:12px">
               <div style="font-weight:700; font-size:13px; color:var(--text-secondary); margin-bottom:12px">PARTICIPANTE ${D+1}</div>
               <input type="text" class="input-field p-name" data-pidx="${D}" placeholder="Nombre completo" value="${B.name}" style="height:44px; margin-bottom:12px; font-size:14px" />
               <input type="number" class="input-field p-age" data-pidx="${D}" placeholder="Edad" value="${B.age}" style="height:44px; margin-bottom:12px; font-size:14px" />
               <input type="text" class="input-field p-med" data-pidx="${D}" placeholder="Condición médica (o poner 'Ninguna')" value="${B.medical}" style="height:44px; font-size:14px" />
            </div>
          `).join("")}
        </div>

      </div> <!-- End flex:1 main area -->
      
      <!-- Sticky footer -->
      <div style="position:sticky; bottom:-20px; left:-20px; width:calc(100% + 40px); background:var(--surface); border-top:1px solid var(--border-light); padding:16px 20px 24px; margin-top:20px; display:flex; justify-content:space-between; align-items:center; z-index:100; box-shadow:0 -4px 16px rgba(0,0,0,0.05)">
         <div>
           <div style="font-size:12px; color:var(--text-secondary); margin-bottom:2px">Total a pagar</div>
           <div style="font-size:20px; font-weight:800; color:var(--green-primary)">S/ ${v.totalCost}</div>
         </div>
         <button class="btn btn-primary" id="btn-confirm-res" style="font-size:16px; padding:0 24px">Confirmar reserva</button>
      </div>
    `,$.innerHTML=m,A(),document.querySelectorAll(".pp-btn").forEach(B=>{B.onclick=()=>{const D=B.dataset.field,P=parseInt(B.dataset.val);D==="adults"&&v.adults+P>=1&&v.adults+v.children+P<=v.available&&(v.adults+=P),D==="children"&&v.children+P>=0&&v.adults+v.children+P<=v.available&&(v.children+=P),D==="infants"&&v.infants+P>=0&&(v.infants+=P),k()}}),document.querySelectorAll(".xt-checkbox").forEach(B=>{B.onchange=()=>{const D=B.dataset.xtid;B.checked&&!v.extras.includes(D)?v.extras.push(D):B.checked||(v.extras=v.extras.filter(P=>P!==D)),k()}});const u=()=>{document.querySelectorAll(".p-name").forEach(B=>v.participants[B.dataset.pidx].name=B.value),document.querySelectorAll(".p-age").forEach(B=>v.participants[B.dataset.pidx].age=B.value),document.querySelectorAll(".p-med").forEach(B=>v.participants[B.dataset.pidx].medical=B.value)};$.querySelectorAll('input[type="text"], input[type="number"]').forEach(B=>B.onblur=u);const T=document.getElementById("btn-confirm-res");T&&(T.onclick=()=>{if(u(),v.participants.some(P=>!P.name.trim()||!P.age.toString().trim())){f("Por favor completa el nombre y edad de todos los asistentes.","error");return}ne(a);const D=j.routeItems[j.routeItems.length-1];D&&D.place.id===a.id&&(D.cost=v.totalCost,D.category="Actividades"),M(),f("¡Reserva confirmada! Se añadió a tus Actividades del viaje.","success")})}s()}function ra(){const p=document.getElementById("app");let i=null,a=[],t="con_agencia",n=null,l=null,o=null,b=null,r=null,s=null,y=0,c=null,x="SELECTING_POINTS";const C=[{id:"mototaxi",name:"Mototaxi",icon:"bike",maxPax:2,pricePerKm:1.5,minPrice:3,modes:["sin_agencia"]},{id:"auto",name:"Auto particular",icon:"car",maxPax:4,pricePerKm:2.5,minPrice:8,modes:["con_agencia","sin_agencia"]},{id:"taxi",name:"Taxi formal",icon:"taxi",maxPax:4,pricePerKm:3.5,minPrice:10,modes:["con_agencia"]},{id:"minibus",name:"Minibús",icon:"bus",maxPax:15,pricePerKm:6,minPrice:25,modes:["con_agencia","sin_agencia"]},{id:"buggy",name:"Buggy para dunas",icon:"mountain",maxPax:6,fixedPrice:80,modes:["con_agencia","sin_agencia"]},{id:"envios",name:"Pedidos y Envíos",icon:"package",maxPax:0,pricePerKm:2,minPrice:5,modes:["con_agencia","sin_agencia"]},{id:"otros",name:"Otros servicios",icon:"more-horizontal",modes:["con_agencia"]}];let g=0;function d(){G(),p.innerHTML=`
      <div class="screen" style="height:100%; overflow:hidden; position:relative; background:var(--bg-body); display:flex; flex-direction:column">
        <!-- The Map Container -->
        <div id="transport-map" style="position:absolute; inset:0; height:100%; width:100%; z-index:1"></div>
        
        <!-- Back Button over map -->
        <button style="position:absolute; top:16px; left:16px; z-index:10; display:flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:50%; background:white; border:none; box-shadow:0 2px 8px rgba(0,0,0,0.15); cursor:pointer" id="btn-back">
           ${e("arrow-left",22)}
        </button>

        <button style="position:absolute; top:16px; right:16px; z-index:10; display:flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:50%; background:white; border:none; box-shadow:0 2px 8px rgba(0,0,0,0.15); cursor:pointer" id="btn-recenter">
           ${e("navigation",20)}
        </button>

        <!-- Bottom Panel -->
        <div class="bottom-panel" id="transport-panel" style="position:absolute; bottom:0; left:0; right:0; height:290px; background:var(--surface); border-radius:24px 24px 0 0; box-shadow:0 -4px 20px rgba(0,0,0,0.1); z-index:10; display:flex; flex-direction:column; transition:height 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)">
           
           <div class="sheet-handle" style="margin: 12px auto; margin-bottom: 4px;"></div>
           
           <!-- Content container -->
           <div id="panel-content" style="flex:1; overflow-y:auto; padding:0 20px 20px">
              ${v()}
           </div>
        </div>
      </div>
    `,A(),u(),at()}function z(){return x==="SEARCHING_LOCATION"?"75%":x==="SELECTING_POINTS"?"290px":x==="WAITING_DRIVER"||x==="EN_RUTA"?"420px":x==="BUGGY_RESERVA"?"80%":"480px"}function v(){return x==="SEARCHING_LOCATION"?S():x==="SELECTING_POINTS"?h():x==="SELECTING_TYPE"?w():x==="WAITING_DRIVER"?k():x==="EN_RUTA"?$():x==="BUGGY_RESERVA"?m():""}function h(){return`
      <div style="margin-bottom:20px; display:flex; background:var(--bg-body); border-radius:12px; padding:4px">
         <button class="t-mode-btn ${t==="con_agencia"?"active":""}" data-mode="con_agencia" style="flex:1; padding:10px; border-radius:8px; font-weight:600; font-size:13px; border:none; background:${t==="con_agencia"?"var(--blue)":"transparent"}; color:${t==="con_agencia"?"white":"var(--text-secondary)"}; display:flex; align-items:center; justify-content:center; gap:6px; transition:0.2s">
            ${e("shield-check",16,t==="con_agencia"?"text-white":"")} Con agencia
         </button>
         <button class="t-mode-btn ${t==="sin_agencia"?"active":""}" data-mode="sin_agencia" style="flex:1; padding:10px; border-radius:8px; font-weight:600; font-size:13px; border:none; background:${t==="sin_agencia"?"var(--green-primary)":"transparent"}; color:${t==="sin_agencia"?"white":"var(--text-secondary)"}; display:flex; align-items:center; justify-content:center; gap:6px; transition:0.2s">
            ${e("user",16,t==="sin_agencia"?"text-white":"")} Sin agencia
         </button>
      </div>
      
      ${t==="con_agencia"?'<div style="font-size:11px; text-align:center; color:var(--blue); margin-top:-12px; margin-bottom:16px; font-weight:600;">Conductores verificados y registrados en empresas.</div>':'<div style="font-size:11px; text-align:center; color:var(--green-primary); margin-top:-12px; margin-bottom:16px; font-weight:600;">Conductores independientes validados.</div>'}

      <div style="position:relative; margin-bottom:20px">
         <div style="position:absolute; left:16px; top:20px; bottom:20px; width:2px; border-left:2px dotted var(--border); z-index:1"></div>
         
         <div class="input-group" style="position:relative; z-index:2; margin-bottom:12px">
            <div style="position:absolute; left:12px; top:50%; transform:translateY(-50%); width:10px; height:10px; border-radius:50%; background:var(--green-primary); border:2px solid var(--surface)"></div>
            <input type="text" readonly class="input-field t-input" id="inp-origin" placeholder="Toca el mapa o escribe el punto de recogida" value="${n?n.name:""}" style="padding-left:36px; background:var(--bg-body); cursor:pointer" />
         </div>
         
         <div class="input-group" style="position:relative; z-index:2; margin-bottom:0">
            <div style="position:absolute; left:12px; top:50%; transform:translateY(-50%); width:10px; height:10px; border-radius:0; background:var(--red); border:2px solid var(--surface)"></div>
            <input type="text" readonly class="input-field t-input" id="inp-dest" placeholder="¿A dónde vas?" value="${l?l.name:""}" style="padding-left:36px; background:var(--bg-body); cursor:pointer" />
         </div>
      </div>

      <div style="display:flex; justify-content:center; opacity:0.6">
        <span style="font-size:12px; font-weight:600; display:flex; align-items:center; gap:6px">${e("hand",14)} Toca el mapa para fijar pines visualmente</span>
      </div>
    `}function S(){return`
       <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px">
         <h3 style="font-size:16px; font-weight:800; font-family:var(--font-heading)">
           ${c==="origin"?"Punto de Recogida":"Destino"}
         </h3>
         <button class="btn btn-outline btn-xs" id="btn-close-search" style="border:none">${e("x",20)}</button>
       </div>

       <div class="input-group" style="margin-bottom:24px">
         <div class="input-wrapper">
           <div class="input-icon" style="top:15px">${e("search",20)}</div>
           <input type="text" class="input-field t-search-focus" placeholder="Escribe el nombre del lugar o calle..." autofocus style="background:var(--bg-body); padding-left:44px;" id="search-location-inp"/>
         </div>
       </div>

       <div style="font-weight:700; font-size:14px; margin-bottom:12px; color:var(--text-secondary)">Sugerencias Populares</div>
       <div class="flex-col gap-12" style="overflow-y:auto; flex:1">
          ${J.slice(0,5).map(q=>`
            <div class="loc-sug-item" data-id="${q.id}" style="display:flex; align-items:center; gap:12px; background:var(--bg-body); padding:14px 12px; border-radius:12px; cursor:pointer">
              <div style="width:36px; height:36px; border-radius:50%; background:var(--green-light); color:var(--green-primary); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                ${e(q.category==="Gastronomía"?"utensils":"map-pin",18)}
              </div>
              <div style="flex:1; min-width:0">
                 <div style="font-weight:600; font-size:14px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">${q.name}</div>
                 <div style="font-size:11px; color:var(--text-secondary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis">${q.address||q.category}</div>
              </div>
            </div>
          `).join("")}
       </div>
    `}function w(){C.filter(N=>N.modes.includes(t));let q=`
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px">
         <h3 style="font-size:16px; font-weight:800; font-family:var(--font-heading)">Opciones de viaje</h3>
         <button class="btn btn-outline btn-xs" id="btn-edit-points" style="padding:4px 8px; font-weight:600">Editar ruta</button>
      </div>
      <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:12px" id="service-type-list">
      </div>
    `;const F=C.find(N=>N.id===s);return F&&(F.id==="otros"?q+=`
         <div style="background:var(--bg-body); border-radius:12px; padding:16px; margin-bottom:16px">
            <div style="font-weight:700; font-size:13px; margin-bottom:12px">Sub-categorías disponibles:</div>
            <div style="display:flex; flex-direction:column; gap:8px">
               <label class="btn btn-white" style="justify-content:flex-start; padding:14px 16px; border-radius:12px; font-weight:600; font-size:13px; cursor:pointer; min-height:48px"><input type="radio" name="otros_svc" style="accent-color:var(--green-primary); margin-right:8px; width:18px; height:18px;"/> Transporte escolar / Universitario </label>
               <label class="btn btn-white" style="justify-content:flex-start; padding:14px 16px; border-radius:12px; font-weight:600; font-size:13px; cursor:pointer; min-height:48px"><input type="radio" name="otros_svc" style="accent-color:var(--green-primary); margin-right:8px; width:18px; height:18px;"/> Transporte médico (Citas/Traslados) </label>
               <label class="btn btn-white" style="justify-content:flex-start; padding:14px 16px; border-radius:12px; font-weight:600; font-size:13px; cursor:pointer; min-height:48px"><input type="radio" name="otros_svc" style="accent-color:var(--green-primary); margin-right:8px; width:18px; height:18px;"/> Transporte turístico (Circuitos) </label>
            </div>
         </div>
       `:t==="sin_agencia"&&F.id!=="envios"&&F.id!=="buggy"&&(q+=`
         <div style="background:var(--bg-body); border-radius:12px; padding:16px; margin-bottom:16px">
            <div style="font-weight:700; font-size:14px; margin-bottom:8px">Ofrece tu precio</div>
            <p style="font-size:11px; color:var(--text-secondary); margin-bottom:12px">Los conductores cercanos verán tu oferta y podrán aceptarla. A menor precio, puede tardar más.</p>
            <div style="display:flex; align-items:center; gap:12px">
               <button class="icon-btn btn-neg-price" data-val="-1" style="width:40px;height:40px;border-radius:50%;border:1px solid var(--border-light);background:var(--surface)">${e("minus",20)}</button>
               <div style="flex:1; text-align:center; font-size:24px; font-weight:800; color:var(--green-primary)">S/ <span id="lbl-proposed-price">${y}</span></div>
               <button class="icon-btn btn-neg-price" data-val="1" style="width:40px;height:40px;border-radius:50%;border:1px solid var(--border-light);background:var(--surface)">${e("plus",20)}</button>
            </div>
         </div>
       `),F.id==="envios"&&(q+=`
         <div class="input-group" style="margin-bottom:16px">
           <input type="text" class="input-field" placeholder="Descripción del paquete, peso estimado..." />
           <label style="display:flex; align-items:center; gap:8px; margin-top:8px; font-size:12px; font-weight:600; cursor:pointer; color:var(--text-secondary)">
             <input type="checkbox" style="accent-color:var(--green-primary); width:16px; height:16px" />
             Requiere manejo cuidadoso o es frágil
           </label>
         </div>
      `),F.id==="buggy"?q+=`
         <button class="btn btn-primary btn-block" id="btn-request-buggy" style="font-size:16px; padding:16px; height:auto; box-shadow:0 4px 12px rgba(var(--green-rgb), 0.3)">
           Reservar Buggy en Huacachina
         </button>
       `:q+=`
         <div style="display:flex; justify-content:center; margin-bottom:24px">
           <button class="btn btn-outline btn-sm" id="btn-extra-opts" style="border-radius:20px; font-weight:600; display:flex; align-items:center; gap:6px; padding:0 24px">
             ${e("sliders",14)} Opciones adicionales
           </button>
         </div>
         
         <button class="btn btn-primary btn-block" id="btn-request-ride" style="font-size:16px; padding:16px; height:auto; box-shadow:0 4px 12px rgba(var(--green-rgb), 0.3); margin-top:8px">
           ${F.id==="otros"?"Continuar reserva":t==="sin_agencia"?"Solicitar viaje por S/ "+y:"Solicitar viaje (Fijo: S/ "+y+")"}
         </button>
       `),q}function k(){return`
      <div style="display:flex; flex-direction:column; padding:12px 0; height:100%">
         <div style="text-align:center; padding:12px 20px">
           <h2 style="font-size:18px; font-weight:800; margin-bottom:4px">Ofertas de conductores</h2>
           <p style="font-size:12px; color:var(--text-secondary)">Selecciona un conductor de la lista</p>
         </div>

         <div style="display:flex; justify-content:space-between; align-items:center; padding:0 20px; margin-bottom:12px">
            <div class="chip chip-green" style="font-size:13px; font-weight:700">Tu oferta: S/ <span id="lbl-current-offer">${y}</span></div>
            <button class="btn btn-outline-green btn-xs" id="btn-increase-offer" style="height:28px; border-radius:14px; padding:0 12px; font-weight:700; background:var(--green-light); color:var(--green-dark); border:none">+ S/ 2</button>
         </div>

         <div id="driver-bids-list" style="flex:1; overflow-y:auto; padding:0 20px; display:flex; flex-direction:column; gap:12px">
            <div style="text-align:center; padding:20px; color:var(--text-secondary); display:flex; flex-direction:column; align-items:center">
               <div class="spinner spinner-green" style="width:36px;height:36px;margin-bottom:12px;border-width:3px"></div>
               <span style="font-size:12px; font-weight:600">Esperando respuestas del radar...</span>
            </div>
         </div>

         <div style="padding:16px 20px 0; display:flex; justify-content:center">
           <button class="btn btn-white btn-sm" id="btn-cancel-search" style="border-radius:20px; color:var(--red); font-weight:700">Cancelar petición</button>
         </div>
      </div>
    `}function $(){return`
      <div style="padding-top:8px">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:20px">
           <div style="display:flex; align-items:center; gap:12px">
             <div style="position:relative">
               <img src="https://picsum.photos/seed/driver1/100/100" style="width:64px; height:64px; border-radius:50%; border:3px solid ${t==="con_agencia"?"var(--blue)":"var(--green-primary)"}; box-shadow:var(--shadow-subtle)" />
               ${t==="con_agencia"?`<div style="position:absolute; bottom:-4px; right:-4px; background:var(--blue); color:white; border-radius:50%; padding:3px; border:2px solid var(--surface)">${e("shield-check",12)}</div>`:`<div style="position:absolute; bottom:-4px; right:-4px; background:var(--green-primary); color:white; border-radius:50%; padding:3px; border:2px solid var(--surface)">${e("check",12)}</div>`}
             </div>
             <div>
               <div style="font-size:18px; font-weight:800; line-height:1.2; font-family:var(--font-heading)">${window.activeDriverName||"Carlos Ruiz"}</div>
               <div style="display:flex; align-items:center; gap:4px; font-size:13px; color:var(--text-secondary); font-weight:600; margin-top:2px">
                 ${window.activeDriverRating||"4.9"} ${e("star",12,"text-orange")}
               </div>
               ${t==="con_agencia"?'<div style="font-size:10px; color:var(--blue); font-weight:700; margin-top:2px">Verificado por Turismo Ica</div>':'<div style="font-size:10px; color:var(--green-primary); font-weight:700; margin-top:2px">Conductor independiente</div>'}
             </div>
           </div>
           <div style="text-align:right">
             <div class="chip chip-outline" style="font-size:14px; font-weight:800; padding:4px 10px; background:var(--bg-body); border-width:2px; color:var(--text-primary); letter-spacing:1px">
               ${window.activeDriverPlate||"V9A-342"}
             </div>
             <div style="font-size:11px; color:var(--text-secondary); margin-top:6px; font-weight:600">${window.activeDriverCar||"Toyota Yaris Gris"}</div>
           </div>
        </div>

        <div style="background:var(--bg-body); border-radius:16px; padding:16px; margin-bottom:16px; border:1px solid var(--border)">
           <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px">
             <div style="font-weight:700; font-size:14px; display:flex; align-items:center; gap:6px">${e("navigation",14,"text-green-primary")} En camino a recogerte</div>
             <div style="font-weight:800; font-size:15px; color:var(--green-primary)">${window.activeDriverTime||"2 min"}</div>
           </div>
           <div style="height:8px; background:var(--border-light); border-radius:4px; overflow:hidden">
             <div style="height:100%; width:70%; background:linear-gradient(90deg, var(--green-light), var(--green-primary)); border-radius:4px; transition:width 1s; animation: shim 2s infinite"></div>
           </div>
        </div>

        <div style="display:flex; gap:12px; margin-bottom:20px">
           <button class="btn btn-outline flex-1 btn-call-driver" style="display:flex; align-items:center; justify-content:center; gap:8px; border-radius:12px; height:44px">${e("phone",18)} Llamar</button>
           <button class="btn btn-outline flex-1 btn-chat-driver" style="display:flex; align-items:center; justify-content:center; gap:8px; border-radius:12px; height:44px">${e("message-square",18)} Mensaje</button>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; margin-bottom:20px">
           <button class="btn btn-primary" id="btn-add-route-transport" style="border-radius:12px; font-size:13px; padding:0 8px">${e("map",16)} Add Recorrido</button>
           <button class="btn btn-primary" id="btn-add-gasto-transport" style="border-radius:12px; font-size:13px; padding:0 8px; background:var(--blue)">${e("dollar-sign",16)} Add Gastos</button>
           <button class="btn btn-white btn-block" id="btn-cancel-trip" style="grid-column: span 2; border-radius:12px; color:var(--red); font-weight:700; border:1px solid var(--red-light)">Cancelar Viaje Activo</button>
        </div>
      </div>
    `}function m(){return`
      <h3 style="font-size:18px; font-weight:800; font-family:var(--font-heading); margin-bottom:16px; display:flex; align-items:center; gap:8px">
         ${e("arrow-left",20,"text-secondary")}
         Reserva de Buggy
      </h3>
      <div style="font-size:13px; color:var(--text-secondary); margin-bottom:20px; margin-top:-8px; padding-left:32px">
        Agencias certificadas en Huacachina. Tour de 45 minutos.
      </div>

      <div class="flex-col gap-12" style="margin-bottom:24px">
         <div class="card-flat" style="padding:12px; display:flex; gap:12px; align-items:center; border:2px solid var(--green-primary); background:var(--green-bg)">
            <img src="https://picsum.photos/seed/buggiesica/80/80" style="width:60px; height:60px; border-radius:12px; object-fit:cover" />
            <div style="flex:1">
               <div style="font-weight:700; font-size:14px; margin-bottom:2px">Aventura Buggies Ica</div>
               <div style="font-size:11px; color:var(--text-secondary); margin-bottom:4px">4.8 ${e("star",10,"text-orange")} (120 res.)</div>
               <div style="font-weight:800; font-size:14px; color:var(--text-primary)">S/ 80 <small>por vehículo</small></div>
            </div>
            <div style="background:var(--blue); color:white; border-radius:50%; width:24px; height:24px; display:flex; align-items:center; justify-content:center">${e("check",14)}</div>
         </div>
         <div class="card-flat" style="padding:12px; display:flex; gap:12px; align-items:center">
            <img src="https://picsum.photos/seed/dunas/80/80" style="width:60px; height:60px; border-radius:12px; object-fit:cover" />
            <div style="flex:1">
               <div style="font-weight:700; font-size:14px; margin-bottom:2px">Dunas Tours SAC</div>
               <div style="font-size:11px; color:var(--text-secondary); margin-bottom:4px">4.6 ${e("star",10,"text-orange")} (85 res.)</div>
               <div style="font-weight:800; font-size:14px; color:var(--text-primary)">S/ 75 <small>por vehículo</small></div>
            </div>
         </div>
      </div>

      <div class="input-group" style="margin-bottom:16px">
         <label class="label">Fechas Cercanas</label>
         <div class="scroll-x" style="padding-bottom:4px">
           <div class="chip chip-active">Hoy</div>
           <div class="chip chip-outline">Mañana</div>
           <div class="chip chip-outline">24 Oct</div>
         </div>
      </div>

      <div class="input-group" style="margin-bottom:24px">
         <label class="label">Horario</label>
         <div class="scroll-x" style="padding-bottom:4px">
           <div class="chip chip-outline">15:00</div>
           <div class="chip chip-outline">16:00</div>
           <div class="chip chip-active" style="display:flex; flex-direction:column; align-items:center; padding:8px 16px">
             <span>17:00</span>
             <span style="font-size:9px; font-weight:normal; margin-top:2px; color:rgba(255,255,255,0.8)">Atardecer</span>
           </div>
           <div class="chip chip-outline">18:00</div>
         </div>
      </div>

      <button class="btn btn-primary btn-block" onclick="showToast('Reserva confirmada. Te esperamos en el oasis!', 'success')">Confirmar reserva por S/ 80</button>
    `}function u(){const q=[-14.0678,-75.7286];if(i=we("transport-map",q[0],q[1],14),!i){console.error("Leaflet map initialization failed.");return}i.on("click",function(F){if(x!=="SELECTING_POINTS")return;!n?(n={name:`Calle Aledaña (${F.latlng.lat.toFixed(3)})`,lat:F.latlng.lat,lng:F.latlng.lng},document.getElementById("inp-origin").value=n.name,I(F.latlng),U()):l||(l={name:`Punto final (${F.latlng.lat.toFixed(3)})`,lat:F.latlng.lat,lng:F.latlng.lng},document.getElementById("inp-dest").value=l.name,T(F.latlng),B(),U())}),P(t)}function I(q){o&&i.removeLayer(o);const N=window.L.divIcon({html:'<div style="width:20px;height:20px;background:var(--green-primary);border-radius:50%;border:3px solid white;box-shadow:0 4px 6px rgba(0,0,0,0.3);position:relative;z-index:100"><div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:6px;height:6px;background:white;border-radius:50%"></div></div>',className:"",iconSize:[20,20],iconAnchor:[10,10]});o=window.L.marker(q,{icon:N,draggable:!0,zIndexOffset:1e3}).addTo(i),o.on("dragend",function(X){n.lat=X.target.getLatLng().lat,n.lng=X.target.getLatLng().lng,l&&B(),K(),ae()})}function T(q){b&&i.removeLayer(b);const N=window.L.divIcon({html:'<div style="width:20px;height:20px;background:var(--red);border-radius:0;border:3px solid white;box-shadow:0 4px 6px rgba(0,0,0,0.3);transform:rotate(45deg);position:relative;z-index:100"><div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-45deg);width:6px;height:6px;background:white;border-radius:50%"></div></div>',className:"",iconSize:[20,20],iconAnchor:[10,10]});b=window.L.marker(q,{icon:N,draggable:!0,zIndexOffset:1e3}).addTo(i),b.on("dragend",function(X){l.lat=X.target.getLatLng().lat,l.lng=X.target.getLatLng().lng,n&&B(),K(),ae()})}function B(){if(r&&i.removeLayer(r),n&&l){r=window.L.polyline([[n.lat,n.lng],[l.lat,l.lng]],{color:"#1565C0",weight:4,dashArray:"8, 12",opacity:.8}).addTo(i),i.fitBounds(r.getBounds(),{paddingBottomRight:[0,480],paddingTopLeft:[20,20]});let q=i.distance([n.lat,n.lng],[l.lat,l.lng])/1e3;q=q*1.3,g=q*2.5,g<4&&(g=4),K()}}function D(){if(a.length>0&&i&&a.forEach(X=>i.removeLayer(X)),a=[],!i)return;const q=i.getCenter(),N=t==="con_agencia"?"#1565C0":"#009E1A";for(let X=0;X<8;X++){const de=q.lat+(Math.random()-.5)*.04,ue=q.lng+(Math.random()-.5)*.04,ie=`
         <div style="width:30px; height:30px; background:white; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.25); border:2.5px solid ${N}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${N}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H9.3a2 2 0 0 0-1.6.8L5 11l-5.16.86a1 1 0 0 0-.84.99V16h3m10 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0Zm-10 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0Z"/></svg>
         </div>
       `,ce=window.L.divIcon({html:ie,className:"",iconSize:[30,30],iconAnchor:[15,15]}),ve=window.L.marker([de,ue],{icon:ce}).addTo(i);a.push(ve)}A()}function P(q){if(t=q,D(),s){const F=C.find(N=>N.id===s);(!F||!F.modes.includes(t))&&(s=null)}ae()}function U(){n&&l&&x==="SELECTING_POINTS"&&(x="SELECTING_TYPE",s||(s=C.find(q=>q.modes.includes(t)).id),K(),ae())}function K(){const q=C.find(F=>F.id===s);q&&(y=q.fixedPrice||Math.max(q.minPrice||0,Math.round(g*(q.pricePerKm/2.5))))}let ye=null;function et(){const q=C.filter(N=>N.modes.includes(t)),F=document.getElementById("service-type-list");F&&(F.innerHTML="",q.forEach(N=>{let X=s===N.id,de=Math.max(N.minPrice||0,Math.round(g*(N.pricePerKm/2.5)));if(N.fixedPrice&&(de=N.fixedPrice),N.id==="buggy"&&!(n&&n.name.toLowerCase().includes("huacachina")||l&&l.name.toLowerCase().includes("huacachina")))return;const ue=Math.floor(Math.random()*5)+2,ie=document.createElement("div");ie.className="t-service-card"+(X?" selected":""),ie.dataset.type=N.id,ie.dataset.price=de,ie.style.cssText="display:flex; align-items:center; gap:12px; border:2px solid "+(X?"var(--green-primary)":"var(--border-light)")+"; border-radius:14px; padding:12px 14px; cursor:pointer; background:"+(X?"var(--green-bg)":"var(--surface)")+"; transition:all 0.2s";let ce="";N.maxPax>0?ce=e("users",10)+" 1-"+N.maxPax+" pers.":N.id==="envios"&&(ce=e("package",10)+" Objetos");let ve=N.id!=="otros"?'<span style="color:var(--green-primary)">'+e("clock",10)+" ~"+ue+" min</span>":"",V=N.id!=="otros"?'<div style="font-weight:800; font-size:16px; color:var(--text-primary)">S/ '+de+"</div>":'<div style="font-weight:700; font-size:12px; color:var(--green-primary)">Ver más &rarr;</div>';ie.innerHTML='<div style="width:44px; height:44px; border-radius:12px; background:'+(X?"var(--green-primary)":"var(--bg-body)")+"; display:flex; align-items:center; justify-content:center; flex-shrink:0; color:"+(X?"white":"var(--text-secondary)")+'; transition:all 0.2s">'+e(N.icon,22)+'</div><div style="flex:1; min-width:0"><div style="font-weight:700; font-size:14px; margin-bottom:2px">'+N.name+'</div><div style="font-size:11px; color:var(--text-secondary); display:flex; align-items:center; gap:8px">'+ce+ve+'</div></div><div style="text-align:right; flex-shrink:0">'+V+"</div>",ie.onclick=()=>{s=N.id,K(),ae()},F.appendChild(ie)}),A())}function ae(){const q=document.getElementById("transport-panel"),F=document.getElementById("panel-content");q&&(q.style.height=z()),F&&(F.innerHTML=v(),A(),et(),Re()),ye&&(clearInterval(ye),ye=null),x==="WAITING_DRIVER"&&tt()}function tt(){const q=document.getElementById("driver-bids-list");if(!q)return;let F=[];const N=["Carlos R.","Miguel A.","Jose Luis","Roberto P.","Julio C."],X=["Kia Río Gris","Toyota Yaris Blanco","Hyundai Accent Rojo","Nissan Versa Negro"];setTimeout(()=>{x==="WAITING_DRIVER"&&(q.innerHTML="")},1500),ye=setInterval(()=>{if(x!=="WAITING_DRIVER"||!q){clearInterval(ye);return}if(F.length>5)return;const de=t==="sin_agencia"?y+Math.floor(Math.random()*4)-1:y,ue=N[Math.floor(Math.random()*N.length)],ie=X[Math.floor(Math.random()*X.length)],ce=(4.5+Math.random()*.5).toFixed(1),ve=Math.floor(Math.random()*5)+2;F.push({name:ue,car:ie,rating:ce,price:de,time:ve});const V=document.createElement("div");V.className="card-flat",V.style.cssText="padding:12px; display:flex; justify-content:space-between; align-items:center; animation: screenSlideIn 0.3s forwards",V.innerHTML=`
           <div style="display:flex; gap:12px; align-items:center">
             <img src="https://picsum.photos/seed/${ue.replace(" ","")}/50/50" style="width:44px; height:44px; border-radius:50%; object-fit:cover" />
             <div>
               <div style="font-weight:700; font-size:14px; margin-bottom:2px">${ue}</div>
               <div style="font-size:11px; color:var(--text-secondary); display:flex; gap:6px"><span style="color:var(--orange)">${ce} ★</span> ${ie}</div>
               <div style="font-weight:700; font-size:12px; color:var(--green-primary); margin-top:4px">${ve} min de ti</div>
             </div>
           </div>
           <div style="text-align:right">
             <div style="font-weight:800; font-size:18px; color:var(--text-primary); margin-bottom:6px">S/ ${de}</div>
             <button class="btn btn-primary btn-xs btn-accept-bid" style="padding:6px 12px">Aceptar</button>
           </div>
        `,q.prepend(V),V.querySelector(".btn-accept-bid").onclick=()=>{window.activeDriverName=ue,window.activeDriverCar=ie,window.activeDriverRating=ce,window.activeDriverTime=ve+" min",window.activeDriverPlate="ABC-"+Math.floor(Math.random()*900+100),y=de,x="EN_RUTA",f("¡Conductor confirmado!","success"),ae(),a.forEach(pe=>i.removeLayer(pe)),a=[];const oe=`<div style="width:32px; height:32px; background:white; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.3); border:2px solid ${t==="con_agencia"?"var(--blue)":"var(--green-primary)"}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${t==="con_agencia"?"var(--blue)":"var(--green-primary)"}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H9.3a2 2 0 0 0-1.6.8L5 11l-5.16.86a1 1 0 0 0-.84.99V16h3m10 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0Zm-10 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0Z"/></svg></div>`,_=window.L.divIcon({html:oe,className:"",iconSize:[32,32],iconAnchor:[16,16]}),ee=window.L.latLng(n.lat+.002,n.lng+.002),Q=window.L.marker(ee,{icon:_}).addTo(i);a.push(Q)}},2200)}function at(){const q=document.getElementById("btn-back");q&&(q.onclick=()=>window.history.back());const F=document.getElementById("btn-recenter");F&&(F.onclick=()=>{i&&(r?i.fitBounds(r.getBounds(),{paddingBottomRight:[0,parseInt(z())||0],paddingTopLeft:[20,20]}):i.setView([-14.0678,-75.7286],14))}),Re()}function Re(){document.querySelectorAll(".t-mode-btn").forEach(V=>{V.onclick=()=>{x==="SELECTING_POINTS"&&P(V.dataset.mode)}}),document.querySelectorAll(".t-input").forEach(V=>{V.onclick=()=>{x="SEARCHING_LOCATION",c=V.id==="inp-origin"?"origin":"destination",ae()}});const q=document.getElementById("btn-close-search");q&&(q.onclick=()=>{x=n&&l?"SELECTING_TYPE":"SELECTING_POINTS",ae()}),document.querySelectorAll(".loc-sug-item").forEach(V=>{V.onclick=()=>{const oe=V.dataset.id,_=J.find(ee=>ee.id===oe);if(_){const ee=window.L.latLng(_.lat,_.lng);c==="origin"?(n={name:_.name,lat:_.lat,lng:_.lng},I(ee)):(l={name:_.name,lat:_.lat,lng:_.lng},T(ee)),x=n&&l?"SELECTING_TYPE":"SELECTING_POINTS",ae(),n&&l?(B(),U()):i.setView(ee,15)}}});const F=document.getElementById("btn-edit-points");F&&(F.onclick=()=>{x="SELECTING_POINTS",ae(),r&&i&&i.fitBounds(r.getBounds(),{paddingBottomRight:[0,380],paddingTopLeft:[20,20]})}),document.querySelectorAll(".t-service-card").forEach(V=>{V.onclick=()=>{s=V.dataset.type,K(),ae()}}),document.querySelectorAll(".btn-neg-price").forEach(V=>{V.onclick=()=>{let oe=parseInt(V.dataset.val);y+=oe;const _=3;y<_&&(y=_);const ee=document.getElementById("lbl-proposed-price");ee&&(ee.innerText=y);const Q=document.getElementById("btn-request-ride");Q&&(Q.innerHTML=`Solicitar viaje por S/ ${y}`)}});const N=document.getElementById("btn-request-buggy");N&&(N.onclick=()=>{x="BUGGY_RESERVA",ae()});const X=document.getElementById("btn-back-buggy");X&&(X.onclick=()=>{x="SELECTING_TYPE",ae()});const de=document.getElementById("btn-request-ride");de&&(de.onclick=()=>{if(s==="otros"){f("Aperturando formulario especializado...","success");return}x="WAITING_DRIVER",ae()});const ue=document.getElementById("btn-increase-offer");ue&&(ue.onclick=()=>{y+=2,document.getElementById("lbl-current-offer").innerText=y}),document.querySelectorAll("#btn-cancel-search, #btn-cancel-trip").forEach(V=>{V.onclick=()=>{confirm("¿Estás seguro de que deseas cancelar este viaje?")&&(x="SELECTING_POINTS",n=null,l=null,o&&i.removeLayer(o),b&&i.removeLayer(b),r&&i.removeLayer(r),ae(),P(t))}});const ie=document.querySelector(".btn-call-driver");ie&&(ie.onclick=()=>{const V=window.activeDriverName||"Conductor",oe=V.replace(/\s/g,"");H(`
             <div style="padding:0; text-align:center; min-height:70vh; display:flex; flex-direction:column; align-items:center; justify-content:center; background:linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); position:relative">
                <div style="position:absolute; top:16px; right:16px">
                   <button class="btn" style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.1);color:white;display:flex;align-items:center;justify-content:center;border:none" onclick="closeBottomSheet()">${e("x",20)}</button>
                </div>
                
                <div style="position:relative; margin-bottom:24px">
                   <div style="position:absolute; inset:-12px; border-radius:50%; border:2px solid rgba(255,255,255,0.15); animation: pulse 2s infinite"></div>
                   <div style="position:absolute; inset:-24px; border-radius:50%; border:1px solid rgba(255,255,255,0.08); animation: pulse 2s 0.5s infinite"></div>
                   <img src="https://picsum.photos/seed/${oe}/150/150" style="width:100px; height:100px; border-radius:50%; border:3px solid rgba(255,255,255,0.3); box-shadow:0 8px 32px rgba(0,0,0,0.4)"/>
                </div>
                
                <h2 style="font-size:22px; font-weight:800; font-family:var(--font-heading); color:white; margin-bottom:4px">${V}</h2>
                <div style="font-size:14px; color:rgba(255,255,255,0.6); margin-bottom:32px; font-weight:500" id="lbl-call-status">Llamando...</div>
                
                <div style="display:flex; gap:24px; margin-bottom:40px">
                   <button class="btn" style="width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,0.12);color:white;display:flex;align-items:center;justify-content:center;border:none;flex-direction:column;gap:4px" onclick="this.style.background='rgba(77,182,172,0.3)'">${e("volume-2",22)}<span style="font-size:9px;font-weight:600">Altavoz</span></button>
                   <button class="btn" style="width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,0.12);color:white;display:flex;align-items:center;justify-content:center;border:none;flex-direction:column;gap:4px" onclick="this.style.background='rgba(239,68,68,0.3)'">${e("mic-off",22)}<span style="font-size:9px;font-weight:600">Silenciar</span></button>
                </div>
                
                <button class="btn" style="width:64px;height:64px;border-radius:50%;background:var(--red);color:white;display:flex;align-items:center;justify-content:center;border:none;box-shadow:0 4px 20px rgba(239,68,68,0.4)" onclick="closeBottomSheet()">
                   ${e("phone-off",28)}
                </button>
             </div>
             <style>@keyframes pulse{0%{transform:scale(1);opacity:0.6}50%{transform:scale(1.15);opacity:0.2}100%{transform:scale(1);opacity:0.6}}</style>
          `);let _=0;const ee=setInterval(()=>{_++;const Q=document.getElementById("lbl-call-status");if(!Q){clearInterval(ee);return}if(_<3)Q.innerText="Llamando...";else{const pe=String(Math.floor((_-3)/60)).padStart(2,"0"),se=String((_-3)%60).padStart(2,"0");Q.innerText="En llamada - "+pe+":"+se,Q.style.color="rgba(77,182,172,0.9)"}},1e3)});const ce=document.querySelector(".btn-chat-driver");ce&&(ce.onclick=()=>{const V=window.activeDriverName||"Conductor",oe=V.replace(/\s/g,"");H(`
             <div style="height:75vh; display:flex; flex-direction:column; background:var(--bg-body); position:relative; border-radius:24px 24px 0 0; overflow:hidden">
                <div style="padding:14px 16px; border-bottom:1px solid var(--border); display:flex; align-items:center; gap:12px; background:var(--surface)">
                   <button class="icon-btn" onclick="closeBottomSheet()" style="background:none;border:none;cursor:pointer;padding:4px">${e("arrow-left",20)}</button>
                   <div style="position:relative">
                      <img src="https://picsum.photos/seed/${oe}/40/40" style="width:38px; height:38px; border-radius:50%; object-fit:cover"/>
                      <div style="position:absolute;bottom:0;right:0;width:10px;height:10px;border-radius:50%;background:#22c55e;border:2px solid var(--surface)"></div>
                   </div>
                   <div style="flex:1">
                      <div style="font-weight:700; font-size:15px">${V}</div>
                      <div style="font-size:11px; color:#22c55e; font-weight:600">En línea</div>
                   </div>
                   <button class="icon-btn" onclick="closeBottomSheet()" style="background:none;border:none;cursor:pointer;padding:4px">${e("phone",18)}</button>
                </div>
                <div id="chat-messages" style="flex:1; overflow-y:auto; padding:16px; display:flex; flex-direction:column; gap:10px; background:linear-gradient(180deg, #f0f2f5 0%, #e8ecf0 100%)">
                   <div style="text-align:center; margin-bottom:8px"><span style="background:rgba(0,0,0,0.06); padding:4px 12px; border-radius:12px; font-size:10px; font-weight:600; color:var(--text-secondary)">Hoy</span></div>
                   <div style="align-self:flex-start; background:white; padding:10px 14px; border-radius:4px 16px 16px 16px; max-width:78%; font-size:14px; box-shadow:0 1px 2px rgba(0,0,0,0.06); line-height:1.4">Hola, ya estoy en camino hacia tu ubicación. Llego en unos minutos. 🚗</div>
                   <div style="align-self:flex-start; font-size:10px; color:var(--text-secondary); padding-left:4px; margin-top:-6px">Hace 2 min</div>
                </div>
                <div style="padding:4px 8px; background:var(--surface); display:flex; gap:6px; overflow-x:auto; scrollbar-width:none" id="quick-replies">
                   <button class="chip chip-outline quick-reply-btn" style="font-size:12px; padding:6px 12px; white-space:nowrap; cursor:pointer; border-radius:16px">👍 Ok, te espero</button>
                   <button class="chip chip-outline quick-reply-btn" style="font-size:12px; padding:6px 12px; white-space:nowrap; cursor:pointer; border-radius:16px">📍 Te envío ubicación</button>
                   <button class="chip chip-outline quick-reply-btn" style="font-size:12px; padding:6px 12px; white-space:nowrap; cursor:pointer; border-radius:16px">⏰ ¿Cuánto falta?</button>
                </div>
                <div style="padding:12px 12px 16px; background:var(--surface); border-top:1px solid var(--border-light); display:flex; gap:10px; align-items:center">
                   <input type="text" id="inp-chat" class="input-field no-icon" placeholder="Escribe un mensaje..." style="flex:1; height:42px; border-radius:21px; padding:0 16px; font-size:14px; background:var(--bg-body)" />
                   <button class="btn btn-primary" id="btn-send-chat" style="width:42px; height:42px; border-radius:50%; padding:0; display:flex; align-items:center; justify-content:center; flex-shrink:0">${e("send",18)}</button>
                </div>
             </div>
          `),setTimeout(()=>{const _=se=>{const fe=document.getElementById("chat-messages");if(!fe)return;const Ie=new Date,it=Ie.getHours().toString().padStart(2,"0")+":"+Ie.getMinutes().toString().padStart(2,"0");fe.innerHTML+='<div style="align-self:flex-end; background:#DCF8C6; padding:10px 14px; border-radius:16px 4px 16px 16px; max-width:78%; font-size:14px; box-shadow:0 1px 2px rgba(0,0,0,0.05); line-height:1.4">'+se+'<div style="text-align:right; font-size:10px; color:rgba(0,0,0,0.35); margin-top:4px">'+it+" ✓✓</div></div>",fe.scrollTop=fe.scrollHeight},ee=()=>{const se=document.getElementById("chat-messages");if(!se)return;const fe=["Perfecto, ya estoy muy cerca 👍","De acuerdo, te aviso cuando llegue.","Estoy a 2 cuadras, ya casi llego!","Entendido, nos vemos pronto."],Ie=fe[Math.floor(Math.random()*fe.length)];setTimeout(()=>{se.innerHTML+='<div style="align-self:flex-start; background:white; padding:10px 14px; border-radius:4px 16px 16px 16px; max-width:78%; font-size:14px; box-shadow:0 1px 2px rgba(0,0,0,0.06); line-height:1.4">'+Ie+"</div>",se.scrollTop=se.scrollHeight},1500)},Q=document.getElementById("btn-send-chat"),pe=document.getElementById("inp-chat");Q&&pe&&(Q.onclick=()=>{pe.value.trim()&&(_(pe.value),pe.value="",ee())},pe.onkeydown=se=>{se.key==="Enter"&&Q.click()}),document.querySelectorAll(".quick-reply-btn").forEach(se=>{se.onclick=()=>{_(se.innerText),se.style.display="none",ee()}})},100)}),document.querySelectorAll("#btn-add-route-transport, #btn-add-gasto-transport").forEach(V=>{V.onclick=()=>{H(`
           <div style="padding:24px 20px">
              <h3 style="margin-bottom:16px; font-weight:800; font-family:var(--font-heading); font-size:18px">Añadir al Presupuesto Maestro</h3>
              <p style="font-size:13px; color:var(--text-secondary); margin-bottom:20px; line-height:1.5">Has acordado el precio de <strong>S/ ${y}</strong> por este trayecto. ¿Cómo deseas añadirlo a tu ruta planeada?</p>
              
              <button class="btn btn-primary btn-block mb-12" id="pop-add-confirm" style="height:auto; padding:14px; font-weight:700">
                 ${e("check-circle",18)} Añadir como Gasto Confirmado
              </button>
              <button class="btn btn-outline btn-block mb-12" id="pop-add-estim" style="height:auto; padding:14px; font-weight:600">
                 ${e("help-circle",18)} Añadir como Gasto Estimado
              </button>
           </div>
         `);const oe=_=>{var pe;const ee=((pe=C.find(se=>se.id===s))==null?void 0:pe.name)||"Transporte",Q={id:"tr-"+Date.now(),name:`Traslado en ${ee}: ${n.name} - ${l.name}`,category:"Transporte",price:`S/ ${y}`};_?ne(Q,{reservation:{totalCost:y}}):ne(Q),M(),f(e("check",16)+" Trayecto añadido a la ruta de viaje.","success"),x="SELECTING_POINTS",n=null,l=null,o&&i.removeLayer(o),b&&i.removeLayer(b),r&&i.removeLayer(r),ae(),P(t)};document.getElementById("pop-add-confirm").onclick=()=>oe(!0),document.getElementById("pop-add-estim").onclick=()=>oe(!1)}});const ve=document.getElementById("btn-extra-opts");ve&&(ve.onclick=()=>{H(`
           <div style="padding:28px 20px 32px">
             <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px">
               <h2 style="font-size:20px; font-weight:800; font-family:var(--font-heading)">Opciones Adicionales</h2>
               <button class="btn btn-outline btn-xs btn-close-opts" style="border:none">${e("x",20)}</button>
             </div>
             
             <div class="input-group" style="margin-bottom:20px; background:var(--bg-body); padding:16px; border-radius:16px; border:1px solid transparent; transition:border 0.3s">
               <label style="display:flex;justify-content:space-between;align-items:center;font-weight:700;font-size:15px;margin-bottom:0;cursor:pointer">
                  <span style="display:flex; align-items:center; gap:8px">${e("calendar",16,"text-green-primary")} Viaje Programado</span>
                  <input type="checkbox" style="width:20px;height:20px;accent-color:var(--green-primary)">
               </label>
               <div style="font-size:12px; color:var(--text-secondary); margin-top:8px">Programa este viaje para más tarde o mañana.</div>
             </div>

             <div class="input-group" style="margin-bottom:20px; background:var(--bg-body); padding:16px; border-radius:16px; border:1px solid transparent; transition:border 0.3s">
                <label style="display:flex;justify-content:space-between;align-items:center;font-weight:700;font-size:15px;margin-bottom:0;cursor:pointer">
                   <span style="display:flex; align-items:center; gap:8px">${e("users",16,"text-green-primary")} Pasajeros</span>
                </label>
                <div style="display:flex; align-items:center; gap:16px; margin-top:12px">
                  <button class="icon-btn" style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light);background:var(--surface);display:flex;align-items:center;justify-content:center" onclick="let c=document.getElementById('lbl-pax'); let v=parseInt(c.innerText); if(v>1){c.innerText=v-1;}">${e("minus",18)}</button>
                  <div style="font-size:22px; font-weight:800; min-width:32px; text-align:center" id="lbl-pax">1</div>
                  <button class="icon-btn" style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light);background:var(--surface);display:flex;align-items:center;justify-content:center" onclick="let c=document.getElementById('lbl-pax'); let v=parseInt(c.innerText); if(v<15){c.innerText=v+1;}">${e("plus",18)}</button>
                </div>
                <div style="font-size:11px; color:var(--text-secondary); margin-top:6px">Informa al conductor cuántos viajeros son.</div>
              </div>

              <div class="input-group" style="margin-bottom:20px; background:var(--bg-body); padding:16px; border-radius:16px; border:1px solid transparent; transition:border 0.3s">
                <label style="display:flex;justify-content:space-between;align-items:center;font-weight:700;font-size:15px;margin-bottom:0;cursor:pointer">
                   <span style="display:flex; align-items:center; gap:8px">${e("repeat",16,"text-blue")} Ida y vuelta</span>
                   <input type="checkbox" id="chk-ida-vuelta" style="width:20px;height:20px;accent-color:var(--green-primary)">
                </label>
                <div style="font-size:12px; color:var(--text-secondary); margin-top:8px">El conductor te esperará para regresar. Duplicará el costo automáticamente.</div>
              </div>

              <div class="input-group" style="margin-bottom:28px">
                <label class="label" style="font-weight:700; color:var(--text-primary)">Notas para el conductor</label>
                <input type="text" id="inp-notas-conductor" class="input-field no-icon" placeholder="Ej. Llevo paquete frágil o maleta..." style="background:var(--bg-body)" />
              </div>

             <button class="btn btn-primary btn-block btn-close-opts" id="btn-apply-opts" style="font-size:15px; font-weight:700; padding:16px; height:auto">Aplicar y Regresar</button>
           </div>
         `),setTimeout(()=>{document.querySelectorAll(".btn-close-opts").forEach(V=>V.onclick=()=>{const oe=document.getElementById("chk-ida-vuelta");if(oe&&oe.checked){y=y*2;const ee=document.getElementById("lbl-proposed-price");ee&&(ee.innerText=y);const Q=document.getElementById("btn-request-ride");Q&&t==="sin_agencia"?Q.innerHTML=`Solicitar viaje por S/ ${y}`:Q&&(Q.innerHTML=`Solicitar viaje (Fijo: S/ ${y})`),f("Ida y vuelta aplicado: tarifa ajustada.","success")}const _=document.getElementById("inp-notas-conductor");_&&_.value.trim().length>0&&f("Notas guardadas para el conductor.","success"),M()})},100)})}d()}function la(){const p=document.getElementById("app");let i="Todos";const a=["Todos","Farmacia","Centro médico","Cambio de moneda","Cajero ATM","Lavandería","Barbería y salón","Tienda de souvenirs","Alquiler de equipos","Agencia de viajes","Fotografía turística","Impresión y papelería","Zona WiFi"],t={Farmacia:"pill","Centro médico":"heart-pulse","Cambio de moneda":"banknote","Cajero ATM":"credit-card",Lavandería:"shirt","Barbería y salón":"scissors","Tienda de souvenirs":"gift","Alquiler de equipos":"bike","Agencia de viajes":"plane","Fotografía turística":"camera","Correos y mensajería":"mail","Impresión y papelería":"printer","Zona WiFi":"wifi","Servicios religiosos":"church"},n={Farmacia:"#10b981","Centro médico":"#ef4444","Cambio de moneda":"#3b82f6","Cajero ATM":"#6366f1",Lavandería:"#06b6d4","Barbería y salón":"#f97316","Tienda de souvenirs":"#ec4899","Alquiler de equipos":"#84cc16","Agencia de viajes":"#8b5cf6","Fotografía turística":"#f59e0b","Correos y mensajería":"#64748b","Impresión y papelería":"#475569","Zona WiFi":"#0ea5e9","Servicios religiosos":"#a78bfa"};function l(){let r=J.filter(s=>s.category==="Servicios"&&!s.hidden);i!=="Todos"&&(r=r.filter(s=>s.subType===i)),p.innerHTML=`
      <div class="screen" style="padding-bottom:12px; background:var(--bg-body)">
        <div class="appbar" style="background:var(--surface); box-shadow:var(--shadow-sm)">
          <button class="appbar-btn" id="btn-back">${e("arrow-left",20)}</button>
          <span class="appbar-title">Servicios</span>
          <button class="appbar-btn" id="btn-filter">${e("sliders",20)}</button>
        </div>

        <div style="padding: 16px;">
          <!-- Sub-type chips -->
          <div class="scroll-x" style="display:flex; gap:8px; margin-bottom:20px;">
            ${a.map(s=>`
              <button class="chip ${i===s?"chip-active":"chip-outline"} chip-selectable" data-subtype="${s}" style="white-space:nowrap; font-size:12px">
                ${s}
              </button>
            `).join("")}
          </div>

          <!-- List View - Compact cards -->
          <div class="flex-col gap-12">
            ${r.length>0?r.map(s=>{const y=t[s.subType]||"briefcase",c=n[s.subType]||"#64748b",x=(Math.random()*3+.2).toFixed(1);return`
              <div class="card-flat" data-svc="${s.id}" style="padding:14px;border-radius:14px;cursor:pointer;display:flex;gap:14px;align-items:center">
                <div style="width:52px; height:52px; border-radius:14px; background:${c}15; display:flex; align-items:center; justify-content:center; flex-shrink:0; color:${c}">
                  ${e(y,24)}
                </div>
                <div style="flex:1; min-width:0">
                  <div style="font-weight:700; font-size:14px; margin-bottom:3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">${s.name}</div>
                  <div style="font-size:11px; color:var(--text-secondary); margin-bottom:4px; display:flex; align-items:center; gap:6px">
                    ${e("clock",10)} ${s.hours}
                  </div>
                  <div style="display:flex; align-items:center; gap:8px">
                    <span style="font-size:11px; color:var(--text-secondary); display:flex; align-items:center; gap:3px">${e("map-pin",10)} ${x} km</span>
                    <span class="chip" style="font-size:9px; padding:2px 8px; border-radius:8px; background:${s.isOpen?"#dcfce7":"#fee2e2"}; color:${s.isOpen?"#16a34a":"#dc2626"}; font-weight:700">${s.isOpen?"Abierto":"Cerrado"}</span>
                  </div>
                </div>
                <div style="text-align:right; flex-shrink:0">
                  <div style="font-size:13px; font-weight:700; color:var(--text-primary); display:flex; align-items:center; gap:2px; justify-content:flex-end">${e("star",12,"text-orange")} ${s.rating}</div>
                  <div style="font-size:10px; color:var(--text-secondary)">${s.reviews} op.</div>
                </div>
              </div>
            `}).join(""):`
              <div class="empty-state" style="padding:40px 0">
                ${e("search",40,"text-secondary")}
                <h3 style="margin-top:16px">Sin resultados</h3>
                <p>Intenta con otros filtros.</p>
              </div>
            `}
          </div>
        </div>
      </div>
    `,W("/explore","user"),A(),o()}function o(){document.getElementById("btn-back").onclick=()=>window.history.back(),document.getElementById("btn-filter").onclick=b,document.querySelectorAll("[data-subtype]").forEach(r=>{r.onclick=()=>{i=r.dataset.subtype,l()}}),document.querySelectorAll("[data-svc]").forEach(r=>{r.onclick=()=>E("/servicios-detail?id="+r.dataset.svc)})}function b(){H(`
      <div style="padding:24px 20px">
        <h2 style="margin-bottom:24px; font-size:20px; font-weight:700">Filtros de Servicios</h2>
        <div class="flex-col gap-24">
          <div class="input-group">
            <div style="display:flex; justify-content:space-between; align-items:center;">
               <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:0">Abierto ahora</label>
               <input type="checkbox" style="width:20px;height:20px;accent-color:var(--green-primary)">
            </div>
          </div>
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Distancia máxima</label>
            <input type="range" min="0" max="5" value="3" step="0.5" style="width:100%;accent-color:var(--green-primary); margin:12px 0;" id="filter-dist" />
            <div class="flex-row" style="justify-content:space-between;color:var(--green-primary);font-weight:600"><small>0 km</small><small id="dist-val">Hasta 3 km</small><small>5 km</small></div>
          </div>
          <div class="input-group">
            <div style="display:flex; justify-content:space-between; align-items:center;">
               <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:0">Acepta tarjeta</label>
               <input type="checkbox" style="width:20px;height:20px;accent-color:var(--green-primary)">
            </div>
          </div>
          <div class="input-group">
            <div style="display:flex; justify-content:space-between; align-items:center;">
               <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:0">Tiene estacionamiento</label>
               <input type="checkbox" style="width:20px;height:20px;accent-color:var(--green-primary)">
            </div>
          </div>
          <div class="flex-row gap-12 mt-16 pb-12">
            <button class="btn btn-outline flex-1" style="font-weight:600" id="btn-reset-filters">Restablecer</button>
            <button class="btn btn-primary flex-1" style="font-weight:600;font-size:16px" id="btn-apply-filters">Aplicar filtros</button>
          </div>
        </div>
      </div>
    `);const r=document.getElementById("filter-dist"),s=document.getElementById("dist-val");r&&s&&(r.oninput=y=>s.innerText="Hasta "+y.target.value+" km"),document.getElementById("btn-reset-filters").onclick=()=>{M(),f("Filtros restablecidos")},document.getElementById("btn-apply-filters").onclick=()=>{M(),f("Filtros aplicados","success"),l()}}l()}function da(){const p=document.getElementById("app"),a=new URLSearchParams(window.location.hash.split("?")[1]||"").get("id"),t=J.find(m=>m.id===a);if(!t){p.innerHTML='<div class="screen" style="padding:40px;text-align:center"><h2>Servicio no encontrado</h2></div>';return}let n=[],l=0;const o=[t.image,...t.images||[]],b=j.favorites.has(t.id);function r(){p.innerHTML=`
      <div class="screen" style="padding-bottom:24px; background:var(--bg-body)">
        <!-- Gallery -->
        <div class="detail-gallery" id="gallery">
          <img src="${o[0]}" alt="${t.name}" id="gallery-img" style="width:100%;height:240px;object-fit:cover" />
          <button class="float-btn" style="top:16px;left:16px" id="btn-back">${e("arrow-left",24)}</button>
          <button class="float-btn" style="top:16px;right:60px" id="btn-share">${e("share-2",20)}</button>
          <button class="float-btn" style="top:16px;right:16px;${b?"color:var(--red);background:rgba(255,0,0,0.1)":""}" id="btn-fav">${e("heart",20,b?"filled":"")}</button>
          <div class="gallery-dots dots" style="bottom:36px;z-index:10;display:flex;gap:6px">
            ${o.map((m,u)=>`<div class="dot ${u===0?"active":""}" data-dot="${u}"></div>`).join("")}
          </div>
          <div style="position:absolute;bottom:36px;right:16px;background:rgba(0,0,0,0.6);color:white;padding:4px 10px;border-radius:12px;font-size:12px;z-index:10;font-weight:600;backdrop-filter:blur(4px)" id="gallery-counter">1/${o.length}</div>
        </div>

        <div style="padding:20px 20px 0; background:var(--surface); border-radius:24px 24px 0 0; margin-top:-24px; position:relative; z-index:10; box-shadow:0 -4px 16px rgba(0,0,0,0.05)">
          <!-- Name & Rating -->
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px">
            <h1 style="font-size:22px; font-weight:800; font-family:var(--font-heading); flex:1; line-height:1.2">${t.name}</h1>
            <span class="chip" style="font-size:10px; padding:3px 10px; border-radius:8px; background:${t.isOpen?"#dcfce7":"#fee2e2"}; color:${t.isOpen?"#16a34a":"#dc2626"}; font-weight:700; flex-shrink:0; margin-left:8px">${t.isOpen?"Abierto":"Cerrado"}</span>
          </div>
          <div style="display:flex; align-items:center; gap:6px; margin-bottom:6px">
            ${e("star",14,"text-orange")}
            <span style="font-weight:700; font-size:14px">${t.rating}</span>
            <span style="font-size:12px; color:var(--text-secondary)">(${t.reviews} opiniones)</span>
            <span class="chip chip-outline" style="font-size:9px; padding:2px 8px; margin-left:4px">${t.subType}</span>
          </div>

          <!-- Info -->
          <div class="flex-col gap-8" style="margin:16px 0 20px; padding:14px; background:var(--bg-body); border-radius:14px; border:1px solid var(--border-light)">
            <div style="font-size:13px; display:flex; align-items:center; gap:8px; color:var(--text-secondary)">${e("map-pin",14,"text-green-primary")} ${t.address}</div>
            <div style="font-size:13px; display:flex; align-items:center; gap:8px; color:var(--text-secondary)">${e("clock",14,"text-green-primary")} ${t.hours}</div>
            ${t.phone?`<div style="font-size:13px; display:flex; align-items:center; gap:8px; color:var(--text-secondary)">${e("phone",14,"text-green-primary")} ${t.phone}</div>`:""}
            <div style="display:flex; gap:6px; margin-top:4px">
              ${t.acceptsCard?`<span class="chip chip-outline" style="font-size:10px; padding:2px 8px">${e("credit-card",10)} Acepta tarjeta</span>`:""}
              ${t.hasParking?`<span class="chip chip-outline" style="font-size:10px; padding:2px 8px">${e("car",10)} Estacionamiento</span>`:""}
            </div>
          </div>

          <p style="font-size:14px; color:var(--text-secondary); line-height:1.5; margin-bottom:24px">${t.description}</p>

          <!-- Dynamic subType content -->
          <div id="subtype-content"></div>

          <!-- Action buttons -->
          <div style="display:flex; gap:10px; margin-top:24px; padding-bottom:16px">
            <button class="btn btn-primary flex-1" id="btn-save-location" style="height:auto; padding:14px; border-radius:14px; font-weight:700">${e("map-pin",16)} Guardar ubicación</button>
            <button class="btn btn-outline flex-1" id="btn-add-route" style="height:auto; padding:14px; border-radius:14px; font-weight:700">${e("route",16)} Añadir a ruta</button>
          </div>
        </div>
      </div>
    `,G(),A(),s(),$()}function s(){const m=document.getElementById("subtype-content");if(m){switch(t.subType){case"Farmacia":y(m);break;case"Centro médico":c(m);break;case"Cambio de moneda":x(m);break;case"Cajero ATM":C(m);break;case"Lavandería":g(m);break;case"Barbería y salón":d(m);break;case"Tienda de souvenirs":z(m);break;case"Alquiler de equipos":v(m);break;case"Agencia de viajes":h(m);break;case"Fotografía turística":S(m);break;case"Impresión y papelería":w(m);break;case"Zona WiFi":k(m);break;default:m.innerHTML='<p style="color:var(--text-secondary)">Detalle no disponible para este tipo de servicio.</p>'}A()}}function y(m){m.innerHTML=`
      <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">Servicios disponibles</h3>
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px">
        ${(t.availableServices||[]).map(B=>`<span class="chip chip-outline" style="font-size:11px; padding:6px 12px; display:flex; align-items:center; gap:4px">${e("check-circle",12,"text-green-primary")} ${B}</span>`).join("")}
      </div>

      <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">Consulta rápida de medicamentos</h3>
      <div class="input-group" style="margin-bottom:12px">
        <div class="input-wrapper">
          <div class="input-icon" style="top:14px">${e("search",18)}</div>
          <input type="text" class="input-field" id="inp-med-search" placeholder="Buscar medicamento..." style="padding-left:42px; background:var(--surface)"/>
        </div>
      </div>
      <div id="med-results" style="margin-bottom:24px"></div>

      ${t.hasDelivery?`
        <button class="btn btn-primary btn-block" id="btn-delivery-farm" style="height:auto; padding:14px; border-radius:14px; font-weight:700; margin-bottom:12px">
          ${e("truck",16)} Pedir delivery de medicamentos
        </button>
      `:""}
    `;const u=document.getElementById("inp-med-search"),I=document.getElementById("med-results");u&&I&&t.sampleMeds&&(u.oninput=()=>{const B=u.value.toLowerCase().trim();if(B.length<2){I.innerHTML="";return}const D=t.sampleMeds.filter(P=>P.name.toLowerCase().includes(B));I.innerHTML=D.length>0?D.map(P=>'<div class="card-flat" style="padding:12px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center"><div><div style="font-weight:700; font-size:14px">'+P.name+'</div><div style="font-size:11px; color:var(--text-secondary)">'+(P.needsRx?"Requiere receta":"Venta libre")+'</div></div><div style="text-align:right"><div style="font-weight:800; font-size:15px; color:var(--green-primary)">S/ '+P.price.toFixed(2)+'</div><span class="chip" style="font-size:9px; padding:2px 8px; background:'+(P.available?"#dcfce7":"#fee2e2")+"; color:"+(P.available?"#16a34a":"#dc2626")+'">'+(P.available?"Disponible":"Agotado")+"</span></div></div>").join(""):'<div style="padding:12px; text-align:center; color:var(--text-secondary); font-size:13px">No se encontraron resultados</div>'});const T=document.getElementById("btn-delivery-farm");T&&(T.onclick=()=>{H(`<div style="padding:24px 20px"><h3 style="font-weight:800; font-size:18px; margin-bottom:16px">Pedir Delivery</h3><div class="input-group" style="margin-bottom:16px"><label class="label">Dirección de entrega</label><input type="text" class="input-field no-icon" placeholder="Escribe tu dirección..." style="background:var(--bg-body)"/></div><div class="input-group" style="margin-bottom:16px"><label class="label">Medicamentos</label><textarea class="input-field no-icon" placeholder="Lista los medicamentos que necesitas..." rows="3" style="background:var(--bg-body);resize:none"></textarea></div><button class="btn btn-primary btn-block" onclick="showToast('Pedido enviado. Te contactaremos pronto.','success');closeBottomSheet()">Confirmar pedido</button></div>`)})}function c(m){m.innerHTML=`
      ${t.has24hEmergency?'<div style="background:#fef2f2; border:1px solid #fecaca; border-radius:12px; padding:12px 16px; margin-bottom:16px; display:flex; align-items:center; gap:10px; color:#dc2626; font-weight:700; font-size:14px">'+e("alert-triangle",18)+" Urgencias 24 horas disponible</div>":""}
      ${t.emergencyPhone?'<div style="font-size:13px; color:var(--text-secondary); margin-bottom:16px; display:flex; align-items:center; gap:6px">'+e("phone",14,"text-red")+" Emergencias: <strong>"+t.emergencyPhone+"</strong></div>":""}
      ${t.hasAmbulance?'<div style="font-size:12px; color:var(--text-secondary); margin-bottom:20px; display:flex; align-items:center; gap:6px">'+e("truck",14)+" Ambulancia disponible</div>":""}

      <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">Especialidades disponibles</h3>
      <div class="flex-col gap-8" style="margin-bottom:24px">
        ${(t.specialties||[]).map(I=>'<div class="card-flat" style="padding:12px; display:flex; justify-content:space-between; align-items:center"><div style="display:flex; align-items:center; gap:10px"><div style="width:36px;height:36px;border-radius:10px;background:#eff6ff;display:flex;align-items:center;justify-content:center;color:#3b82f6">'+e("stethoscope",16)+'</div><div><div style="font-weight:700; font-size:13px">'+I.name+'</div><div style="font-size:11px; color:var(--text-secondary)">'+I.doctor+'</div></div></div><div style="text-align:right"><div style="font-weight:800; font-size:14px; color:var(--text-primary); margin-bottom:4px">S/ '+I.price+'</div><button class="btn btn-primary btn-xs btn-agendar-esp" data-esp="'+I.name+'" data-doc="'+I.doctor+'" data-price="'+I.price+'" style="font-size:11px; padding:4px 12px">Agendar</button></div></div>').join("")}
      </div>

      <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">Servicios de apoyo</h3>
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px">
        ${(t.supportServices||[]).map(I=>'<span class="chip chip-outline" style="font-size:11px; padding:6px 12px">'+e("check",10,"text-green-primary")+" "+I+"</span>").join("")}
      </div>

      <button class="btn btn-block" id="btn-emergency-call" style="height:auto; padding:16px; border-radius:14px; font-weight:800; font-size:16px; background:#dc2626; color:white; border:none">
        ${e("phone",18)} Llamar al centro de urgencias
      </button>
    `,document.querySelectorAll(".btn-agendar-esp").forEach(I=>{I.onclick=()=>{H('<div style="padding:24px 20px"><h3 style="font-weight:800; font-size:18px; margin-bottom:4px">Agendar Cita</h3><p style="font-size:13px; color:var(--text-secondary); margin-bottom:20px">'+I.dataset.esp+" — "+I.dataset.doc+'</p><div class="input-group" style="margin-bottom:12px"><label class="label">Fecha</label><input type="date" class="input-field no-icon" style="background:var(--bg-body)"/></div><div class="input-group" style="margin-bottom:12px"><label class="label">Horario</label><div class="scroll-x" style="display:flex;gap:8px"><div class="chip chip-active">09:00</div><div class="chip chip-outline">10:00</div><div class="chip chip-outline">11:00</div><div class="chip chip-outline">15:00</div><div class="chip chip-outline">16:00</div></div></div><div class="input-group" style="margin-bottom:12px"><label class="label">Nombre completo</label><input type="text" class="input-field no-icon" placeholder="Tu nombre" style="background:var(--bg-body)"/></div><div class="input-group" style="margin-bottom:12px"><label class="label">DNI</label><input type="text" class="input-field no-icon" placeholder="Número de DNI" style="background:var(--bg-body)"/></div><div class="input-group" style="margin-bottom:12px"><label class="label">Motivo de consulta</label><textarea class="input-field no-icon" rows="2" placeholder="Breve descripción..." style="background:var(--bg-body);resize:none"></textarea></div><div class="input-group" style="margin-bottom:20px"><label class="label">Tipo de seguro</label><div class="scroll-x" style="display:flex;gap:8px"><div class="chip chip-outline chip-selectable">SIS</div><div class="chip chip-outline chip-selectable">EsSalud</div><div class="chip chip-active">Particular</div></div></div><div style="font-size:14px; font-weight:700; margin-bottom:16px; text-align:right">Consulta: <span style="color:var(--green-primary)">S/ '+I.dataset.price+`</span></div><button class="btn btn-primary btn-block" onclick="showToast('Cita confirmada exitosamente','success');closeBottomSheet()">Confirmar cita</button></div>`)}});const u=document.getElementById("btn-emergency-call");u&&(u.onclick=()=>f("Llamando al centro de urgencias...","success"))}function x(m){const u=t.exchangeRates||{};m.innerHTML=`
      <div style="background:linear-gradient(135deg, #eff6ff, #dbeafe); border-radius:16px; padding:20px; margin-bottom:24px; border:1px solid #bfdbfe">
        <div style="font-weight:800; font-size:16px; margin-bottom:16px; text-align:center; color:#1e40af">Tasas del día</div>
        <div style="display:flex; justify-content:space-between; margin-bottom:12px; padding:12px; background:white; border-radius:12px">
          <div><div style="font-weight:800; font-size:14px">Dólar USD</div><div style="font-size:11px; color:var(--text-secondary)">Moneda extranjera</div></div>
          <div style="text-align:right"><div style="font-size:12px; color:var(--text-secondary)">Compra <strong style="color:#16a34a; font-size:16px">S/ ${u.usdBuy||"—"}</strong></div><div style="font-size:12px; color:var(--text-secondary)">Venta <strong style="color:#dc2626; font-size:16px">S/ ${u.usdSell||"—"}</strong></div></div>
        </div>
        <div style="display:flex; justify-content:space-between; padding:12px; background:white; border-radius:12px">
          <div><div style="font-weight:800; font-size:14px">Euro EUR</div><div style="font-size:11px; color:var(--text-secondary)">Moneda extranjera</div></div>
          <div style="text-align:right"><div style="font-size:12px; color:var(--text-secondary)">Compra <strong style="color:#16a34a; font-size:16px">S/ ${u.eurBuy||"—"}</strong></div><div style="font-size:12px; color:var(--text-secondary)">Venta <strong style="color:#dc2626; font-size:16px">S/ ${u.eurSell||"—"}</strong></div></div>
        </div>
      </div>
      <button class="btn btn-primary btn-block" id="btn-calc-cambio" style="height:auto; padding:14px; border-radius:14px; font-weight:700">
        ${e("calculator",16)} Calcular cambio
      </button>
    `,document.getElementById("btn-calc-cambio").onclick=()=>{H('<div style="padding:24px 20px"><h3 style="font-weight:800; font-size:18px; margin-bottom:20px">Calculadora de Cambio</h3><div class="input-group" style="margin-bottom:12px"><label class="label">Monto en USD</label><input type="number" id="inp-usd" class="input-field no-icon" placeholder="0.00" style="background:var(--bg-body); font-size:20px; font-weight:700"/></div><div style="text-align:center; margin-bottom:12px; color:var(--text-secondary)">'+e("arrow-down",20)+'</div><div style="background:var(--green-bg); padding:16px; border-radius:12px; text-align:center; margin-bottom:20px"><div style="font-size:12px; color:var(--text-secondary); margin-bottom:4px">Recibirás aproximadamente</div><div style="font-size:28px; font-weight:800; color:var(--green-primary)" id="lbl-result">S/ 0.00</div></div><button class="btn btn-outline btn-block" onclick="closeBottomSheet()">Cerrar</button></div>'),setTimeout(()=>{const I=document.getElementById("inp-usd"),T=document.getElementById("lbl-result");I&&T&&(I.oninput=()=>{T.innerText="S/ "+(parseFloat(I.value||0)*(u.usdBuy||3.72)).toFixed(2)})},100)}}function C(m){m.innerHTML=`
      <div class="card-flat" style="padding:16px; margin-bottom:20px">
        <div style="font-weight:800; font-size:16px; margin-bottom:12px">${t.bank||"Cajero"}</div>
        <div style="display:flex; gap:8px; margin-bottom:12px">
          ${(t.networks||[]).map(u=>'<span class="chip chip-outline" style="font-size:12px; padding:6px 14px; font-weight:700">'+u+"</span>").join("")}
        </div>
        <div class="flex-col gap-8">
          <div style="display:flex; justify-content:space-between; font-size:13px"><span style="color:var(--text-secondary)">Límite diario</span><strong>${t.dailyLimit||"Sin info"}</strong></div>
          <div style="display:flex; justify-content:space-between; font-size:13px"><span style="color:var(--text-secondary)">Comisión otros bancos</span><strong style="color:${t.chargesOtherBanks?"#dc2626":"#16a34a"}">${t.chargesOtherBanks?"Sí cobra":"No cobra"}</strong></div>
          <div style="display:flex; justify-content:space-between; font-size:13px"><span style="color:var(--text-secondary)">Acceso silla de ruedas</span><strong style="color:${t.hasRamp?"#16a34a":"#dc2626"}">${t.hasRamp?"Sí":"No"}</strong></div>
        </div>
      </div>
      <button class="btn btn-primary btn-block" onclick="showToast('Abriendo navegación...','success')" style="height:auto; padding:14px; border-radius:14px; font-weight:700">${e("navigation",16)} Cómo llegar</button>
    `}function g(m){let u=-1,I=3;const T=t.laundryServices||[];function B(){m.innerHTML=`
        <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">Servicios y precios</h3>
        <div class="flex-col gap-8" style="margin-bottom:24px">
          ${T.map((P,U)=>'<div class="card-flat lav-svc" data-idx="'+U+'" style="padding:14px; cursor:pointer; border:2px solid '+(u===U?"var(--green-primary)":"transparent")+"; background:"+(u===U?"var(--green-bg)":"var(--surface)")+'; display:flex; justify-content:space-between; align-items:center"><div><div style="font-weight:700; font-size:14px">'+P.name+(P.surcharge?" ⚡":"")+'</div><div style="font-size:11px; color:var(--text-secondary)">Entrega: '+P.deliveryTime+'</div></div><div style="text-align:right"><div style="font-weight:800; font-size:15px; color:var(--green-primary)">S/ '+P.price+'</div><div style="font-size:10px; color:var(--text-secondary)">'+P.unit+"</div></div></div>").join("")}
        </div>
        ${u>=0?`
          <div class="input-group" style="margin-bottom:16px">
            <label class="label" style="font-weight:700">Peso estimado: <span id="lbl-weight">${I}</span> kg</label>
            <input type="range" min="1" max="15" value="${I}" id="slider-weight" style="width:100%;accent-color:var(--green-primary);margin-top:8px"/>
          </div>
          ${t.hasPickup?'<label style="display:flex; align-items:center; gap:8px; font-size:13px; font-weight:600; margin-bottom:16px; cursor:pointer"><input type="checkbox" id="chk-pickup" style="accent-color:var(--green-primary);width:18px;height:18px"/> Recogida a domicilio (+S/ '+t.pickupFee+")</label>":""}
          <div style="font-size:15px; font-weight:800; margin-bottom:16px; text-align:right">Total: <span style="color:var(--green-primary)" id="lav-total">S/ ${(T[u].price*I).toFixed(2)}</span></div>
          <button class="btn btn-primary btn-block" onclick="showToast('Servicio agendado exitosamente','success')" style="height:auto;padding:14px;border-radius:14px;font-weight:700">${e("check",16)} Agendar servicio</button>
        `:""}
      `,document.querySelectorAll(".lav-svc").forEach(P=>{P.onclick=()=>{u=parseInt(P.dataset.idx),B()}});const D=document.getElementById("slider-weight");D&&(D.oninput=()=>{I=parseInt(D.value),document.getElementById("lbl-weight").innerText=I;const P=document.getElementById("chk-pickup"),U=P&&P.checked?t.pickupFee:0;document.getElementById("lav-total").innerText="S/ "+(T[u].price*I+U).toFixed(2)}),A()}B()}function d(m){const u=t.salonServices||[];function I(){const T=n.reduce((D,P)=>D+u[P].price,0);m.innerHTML=`
        <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">Menú de servicios</h3>
        <div class="flex-col gap-10" style="margin-bottom:20px">
          ${u.map((D,P)=>{const U=n.includes(P);return'<div class="card-flat salon-svc" data-idx="'+P+'" style="padding:0; overflow:hidden; cursor:pointer; border:2px solid '+(U?"var(--green-primary)":"transparent")+'"><div style="display:flex"><img src="'+D.image+'" style="width:80px; height:80px; object-fit:cover; flex-shrink:0"/><div style="padding:12px; flex:1"><div style="font-weight:700; font-size:14px; margin-bottom:2px">'+D.name+'</div><div style="font-size:11px; color:var(--text-secondary); margin-bottom:4px">'+e("clock",10)+" "+D.duration+'</div><div style="font-weight:800; font-size:15px; color:var(--green-primary)">S/ '+D.price+"</div></div>"+(U?'<div style="display:flex;align-items:center;padding-right:12px;color:var(--green-primary)">'+e("check-circle",22)+"</div>":"")+"</div></div>"}).join("")}
        </div>
        ${T>0?`
          <div style="background:var(--green-bg); border-radius:14px; padding:16px; margin-bottom:16px; display:flex; justify-content:space-between; align-items:center">
            <div><div style="font-weight:700; font-size:14px">${n.length} servicio(s)</div><div style="font-size:12px; color:var(--text-secondary)">Seleccionados</div></div>
            <div style="font-weight:800; font-size:20px; color:var(--green-primary)">S/ ${T}</div>
          </div>
          <button class="btn btn-primary btn-block" id="btn-reservar-salon" style="height:auto;padding:14px;border-radius:14px;font-weight:700">${e("calendar",16)} Reservar cita</button>
        `:'<div style="text-align:center; font-size:13px; color:var(--text-secondary); padding:12px">Toca los servicios que deseas para seleccionarlos</div>'}
      `,document.querySelectorAll(".salon-svc").forEach(D=>{D.onclick=()=>{const P=parseInt(D.dataset.idx),U=n.indexOf(P);U>=0?n.splice(U,1):n.push(P),I()}});const B=document.getElementById("btn-reservar-salon");B&&(B.onclick=()=>{H('<div style="padding:24px 20px"><h3 style="font-weight:800; font-size:18px; margin-bottom:16px">Reservar Cita</h3><div class="input-group" style="margin-bottom:12px"><label class="label">Fecha</label><input type="date" class="input-field no-icon" style="background:var(--bg-body)"/></div><div class="input-group" style="margin-bottom:12px"><label class="label">Horario</label><div class="scroll-x" style="display:flex;gap:8px"><div class="chip chip-active">10:00</div><div class="chip chip-outline">11:00</div><div class="chip chip-outline">14:00</div><div class="chip chip-outline">16:00</div></div></div>'+(t.barbers?'<div class="input-group" style="margin-bottom:16px"><label class="label">Barbero</label><div class="scroll-x" style="display:flex;gap:8px">'+t.barbers.map((D,P)=>'<div class="chip '+(P===0?"chip-active":"chip-outline")+'">'+D+"</div>").join("")+"</div></div>":"")+'<div style="font-size:14px; font-weight:700; margin-bottom:16px; text-align:right">Total: <span style="color:var(--green-primary)">S/ '+T+`</span></div><button class="btn btn-primary btn-block" onclick="showToast('Cita reservada exitosamente','success');closeBottomSheet()">Confirmar reserva</button></div>`)}),A()}I()}function z(m){m.innerHTML=`
      <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">Categorías de productos</h3>
      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; margin-bottom:24px">
        ${(t.productCategories||[]).map(u=>{const I={"Artesanías en cerámica":"palette","Tejidos y textiles":"shirt","Réplicas arqueológicas":"landmark","Pintura local":"image",Postales:"mail","Productos del pisco":"wine","Bisutería de arena":"gem","Llaveros y magnetos":"key","Dulces regionales":"candy"};return'<div class="card-flat souv-cat" style="padding:14px; text-align:center; cursor:pointer" data-cat="'+u+'"><div style="font-size:24px; margin-bottom:6px">'+e(I[u]||"gift",24,"text-green-primary")+'</div><div style="font-size:11px; font-weight:600; line-height:1.2">'+u+"</div></div>"}).join("")}
      </div>
    `,document.querySelectorAll(".souv-cat").forEach(u=>{u.onclick=()=>f("Categoría: "+u.dataset.cat,"success")}),A()}function v(m){let u="equipos";function I(){m.innerHTML=`
        <div style="display:flex; background:var(--bg-body); border-radius:12px; padding:4px; margin-bottom:16px">
          <button class="alq-tab" data-tab="equipos" style="flex:1; padding:10px; border-radius:8px; font-weight:600; font-size:13px; border:none; background:${u==="equipos"?"var(--green-primary)":"transparent"}; color:${u==="equipos"?"white":"var(--text-secondary)"}; cursor:pointer">Equipos</button>
          <button class="alq-tab" data-tab="paquetes" style="flex:1; padding:10px; border-radius:8px; font-weight:600; font-size:13px; border:none; background:${u==="paquetes"?"var(--green-primary)":"transparent"}; color:${u==="paquetes"?"white":"var(--text-secondary)"}; cursor:pointer">Paquetes</button>
        </div>
        ${u==="equipos"?`
          <div class="flex-col gap-10">
            ${(t.equipment||[]).map(T=>'<div class="card-flat" style="padding:0; overflow:hidden; display:flex"><img src="'+T.image+'" style="width:80px; height:80px; object-fit:cover; flex-shrink:0"/><div style="padding:12px; flex:1"><div style="display:flex; justify-content:space-between; align-items:flex-start"><div style="font-weight:700; font-size:14px">'+T.name+'</div><span class="chip" style="font-size:9px; padding:2px 8px; background:'+(T.available?"#dcfce7":"#fee2e2")+"; color:"+(T.available?"#16a34a":"#dc2626")+'">'+(T.available?"Libre":"Ocupado")+'</span></div><div style="font-size:12px; color:var(--text-secondary); margin-top:4px">'+(T.priceHour?"S/ "+T.priceHour+"/hora · ":"")+"S/ "+T.priceDay+"/día</div></div></div>").join("")}
          </div>
        `:`
          <div class="flex-col gap-10">
            ${(t.packages||[]).map(T=>'<div class="card-flat" style="padding:16px"><div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px"><div style="font-weight:700; font-size:15px">'+T.name+'</div><span class="chip chip-green" style="font-size:10px">-'+T.discount+'%</span></div><div style="font-size:12px; color:var(--text-secondary); margin-bottom:8px">Incluye: '+T.items.join(", ")+'</div><div style="font-weight:800; font-size:16px; color:var(--green-primary)">S/ '+T.price+"</div></div>").join("")}
          </div>
        `}
      `,document.querySelectorAll(".alq-tab").forEach(T=>{T.onclick=()=>{u=T.dataset.tab,I()}})}I()}function h(m){m.innerHTML=`
      <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">Tours disponibles</h3>
      <div class="flex-col gap-12">
        ${(t.tours||[]).map(u=>'<div class="card-flat tour-card" data-tour="'+u.name+'" data-price="'+u.price+'" style="padding:0; overflow:hidden; border-radius:14px; cursor:pointer"><img src="'+u.image+'" style="width:100%; height:160px; object-fit:cover"/><div style="padding:14px"><div style="font-weight:700; font-size:15px; margin-bottom:6px">'+u.name+'</div><div style="display:flex; gap:8px; margin-bottom:8px"><span class="chip chip-outline" style="font-size:10px; padding:2px 8px">'+e("clock",10)+" "+u.duration+'</span><span class="chip chip-outline" style="font-size:10px; padding:2px 8px">'+u.difficulty+'</span></div><div style="font-weight:800; font-size:17px; color:var(--green-primary)">S/ '+u.price+' <small style="font-weight:400; color:var(--text-secondary)">por persona</small></div></div></div>').join("")}
      </div>
    `,document.querySelectorAll(".tour-card").forEach(u=>{u.onclick=()=>{H('<div style="padding:24px 20px"><h3 style="font-weight:800; font-size:18px; margin-bottom:16px">Reservar: '+u.dataset.tour+'</h3><div class="input-group" style="margin-bottom:12px"><label class="label">Fecha de salida</label><input type="date" class="input-field no-icon" style="background:var(--bg-body)"/></div><div style="display:flex; gap:16px; margin-bottom:16px"><div style="flex:1"><label class="label">Adultos</label><div style="display:flex;align-items:center;gap:12px;margin-top:6px"><button class="icon-btn" style="width:32px;height:32px;border-radius:50%;border:1px solid var(--border-light);background:var(--surface)" onclick="let c=this.nextElementSibling;let v=parseInt(c.innerText);if(v>1)c.innerText=v-1">'+e("minus",14)+'</button><span style="font-size:18px;font-weight:800;min-width:24px;text-align:center">2</span><button class="icon-btn" style="width:32px;height:32px;border-radius:50%;border:1px solid var(--border-light);background:var(--surface)" onclick="let c=this.previousElementSibling;let v=parseInt(c.innerText);c.innerText=v+1">'+e("plus",14)+'</button></div></div><div style="flex:1"><label class="label">Niños</label><div style="display:flex;align-items:center;gap:12px;margin-top:6px"><button class="icon-btn" style="width:32px;height:32px;border-radius:50%;border:1px solid var(--border-light);background:var(--surface)" onclick="let c=this.nextElementSibling;let v=parseInt(c.innerText);if(v>0)c.innerText=v-1">'+e("minus",14)+'</button><span style="font-size:18px;font-weight:800;min-width:24px;text-align:center">0</span><button class="icon-btn" style="width:32px;height:32px;border-radius:50%;border:1px solid var(--border-light);background:var(--surface)" onclick="let c=this.previousElementSibling;let v=parseInt(c.innerText);c.innerText=v+1">'+e("plus",14)+'</button></div></div></div><div style="font-size:15px; font-weight:700; margin-bottom:16px; text-align:right">Total: <span style="color:var(--green-primary)">S/ '+u.dataset.price+`</span></div><button class="btn btn-primary btn-block" onclick="showToast('Tour reservado exitosamente','success');closeBottomSheet()">Confirmar reserva</button></div>`)}}),A()}function S(m){m.innerHTML=`
      <div style="margin-bottom:20px"><div style="font-size:13px; color:var(--text-secondary); margin-bottom:4px">Fotógrafo</div><div style="font-weight:700; font-size:16px">${t.photographer||""}</div><div style="font-size:12px; color:var(--text-secondary)">${t.specialty||""}</div></div>
      <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">Paquetes</h3>
      <div class="flex-col gap-10">
        ${(t.photoPackages||[]).map(u=>'<div class="card-flat foto-pkg" data-name="'+u.name+'" data-price="'+u.price+'" style="padding:16px; cursor:pointer"><div style="font-weight:700; font-size:15px; margin-bottom:6px">'+u.name+'</div><div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:8px"><span class="chip chip-outline" style="font-size:10px; padding:2px 8px">'+u.hours+"h sesión</span>"+(u.photos>0?'<span class="chip chip-outline" style="font-size:10px; padding:2px 8px">'+u.photos+" fotos editadas</span>":'<span class="chip chip-outline" style="font-size:10px; padding:2px 8px">Video 60s</span>')+(u.locations?'<span class="chip chip-outline" style="font-size:10px; padding:2px 8px">'+u.locations+" locaciones</span>":"")+'</div><div style="font-weight:800; font-size:17px; color:var(--green-primary)">S/ '+u.price+"</div></div>").join("")}
      </div>
    `,document.querySelectorAll(".foto-pkg").forEach(u=>{u.onclick=()=>{H('<div style="padding:24px 20px"><h3 style="font-weight:800; font-size:18px; margin-bottom:16px">Reservar: '+u.dataset.name+`</h3><div class="input-group" style="margin-bottom:12px"><label class="label">Fecha</label><input type="date" class="input-field no-icon" style="background:var(--bg-body)"/></div><div class="input-group" style="margin-bottom:12px"><label class="label">Hora de inicio</label><div class="scroll-x" style="display:flex;gap:8px"><div class="chip chip-active">07:00</div><div class="chip chip-outline">09:00</div><div class="chip chip-outline">15:00</div><div class="chip chip-outline">17:00</div></div></div><div class="input-group" style="margin-bottom:12px"><label class="label">Personas en sesión</label><input type="number" class="input-field no-icon" value="2" min="1" style="background:var(--bg-body)"/></div><div class="input-group" style="margin-bottom:16px"><label class="label">Indicaciones de estilo</label><textarea class="input-field no-icon" rows="2" placeholder="Referencias, poses, locaciones preferidas..." style="background:var(--bg-body);resize:none"></textarea></div><button class="btn btn-primary btn-block" onclick="showToast('Sesión reservada. El fotógrafo te contactará.','success');closeBottomSheet()">Confirmar reserva</button></div>`)}})}function w(m){m.innerHTML=`
      <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">Servicios y precios</h3>
      <div class="flex-col gap-6" style="margin-bottom:24px">
        ${(t.printServices||[]).map(u=>'<div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid var(--border-light)"><span style="font-size:14px; font-weight:600">'+u.name+'</span><span style="font-size:14px; font-weight:700; color:var(--green-primary)">S/ '+u.price.toFixed(2)+' <small style="color:var(--text-secondary); font-weight:400">'+u.unit+"</small></span></div>").join("")}
      </div>
      <button class="btn btn-primary btn-block" id="btn-hacer-pedido" style="height:auto; padding:14px; border-radius:14px; font-weight:700">${e("file-text",16)} Hacer pedido</button>
    `,document.getElementById("btn-hacer-pedido").onclick=()=>{H(`<div style="padding:24px 20px"><h3 style="font-weight:800; font-size:18px; margin-bottom:16px">Hacer Pedido</h3><div class="input-group" style="margin-bottom:12px"><label class="label">¿Qué necesitas?</label><textarea class="input-field no-icon" rows="3" placeholder="Ej: 20 copias a color del archivo adjunto..." style="background:var(--bg-body);resize:none"></textarea></div><div class="input-group" style="margin-bottom:12px"><label class="label">Cantidad</label><input type="number" class="input-field no-icon" value="1" min="1" style="background:var(--bg-body)"/></div><button class="btn btn-outline btn-block" style="margin-bottom:16px" onclick="showToast('Función de adjuntar archivo próximamente')">📎 Adjuntar archivo</button><button class="btn btn-primary btn-block" onclick="showToast('Pedido enviado. Estarà listo cuando llegues.','success');closeBottomSheet()">Confirmar pedido</button></div>`)},A()}function k(m){m.innerHTML=`
      <div class="card-flat" style="padding:20px; margin-bottom:20px; text-align:center">
        <div style="margin-bottom:12px; color:var(--green-primary)">${e("wifi",48)}</div>
        <div style="font-weight:800; font-size:18px; margin-bottom:4px">${t.networkName||"WiFi Público"}</div>
        <div style="font-size:14px; color:var(--text-secondary); margin-bottom:8px">Velocidad: <strong>${t.speed||"N/D"}</strong></div>
        <div style="font-size:13px; color:var(--text-secondary)">${t.needsPassword?"Requiere contraseña (solicitar en el local)":"Sin contraseña — Conexión libre"}</div>
      </div>
      <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">Comodidades</h3>
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:20px">
        ${(t.amenities||[]).map(u=>'<span class="chip chip-outline" style="font-size:12px; padding:6px 14px">'+e("check",10,"text-green-primary")+" "+u+"</span>").join("")}
      </div>
    `,A()}function $(){document.getElementById("btn-back").onclick=()=>window.history.back();const m=document.getElementById("btn-share");m&&(m.onclick=()=>f("Enlace copiado al portapapeles","success"));const u=document.getElementById("btn-fav");u&&(u.onclick=function(){const D=$e(t.id);this.innerHTML=e("heart",20,D?"filled":""),this.style.color=D?"var(--red)":"",this.style.background=D?"rgba(255,0,0,0.1)":"",f(D?"Agregado a favoritos":"Eliminado de favoritos"),A()});const I=document.getElementById("gallery");if(I){let D=0;I.addEventListener("touchstart",P=>D=P.touches[0].clientX),I.addEventListener("touchend",P=>{const U=D-P.changedTouches[0].clientX;Math.abs(U)>50&&(U>0&&l<o.length-1?l++:U<0&&l>0&&l--,document.getElementById("gallery-img").src=o[l],document.getElementById("gallery-counter").textContent=`${l+1}/${o.length}`,document.querySelectorAll("[data-dot]").forEach((K,ye)=>K.classList.toggle("active",ye===l)))}),document.querySelectorAll("[data-dot]").forEach(P=>{P.onclick=()=>{l=parseInt(P.dataset.dot),document.getElementById("gallery-img").src=o[l],document.getElementById("gallery-counter").textContent=`${l+1}/${o.length}`,document.querySelectorAll("[data-dot]").forEach((U,K)=>U.classList.toggle("active",K===l))}})}const T=document.getElementById("btn-save-location");T&&(T.onclick=()=>{ne(t),f(e("check",14)+" Ubicación guardada en tu recorrido","success")});const B=document.getElementById("btn-add-route");B&&(B.onclick=()=>{ne(t),f(e("check",14)+" Añadido a la ruta de viaje","success")})}r()}function ca(){const p=document.getElementById("app");let i="Todos";const a=["Todos","Bar","Discoteca","Peña folklórica","Karaoke","Cine al aire libre","Casino"],t={Bar:"wine",Discoteca:"music","Peña folklórica":"guitar",Karaoke:"mic","Cine al aire libre":"film",Casino:"dice-5"};function n(){let b=J.filter(r=>r.category==="Vida nocturna"&&!r.hidden);i!=="Todos"&&(b=b.filter(r=>r.subType===i)),p.innerHTML=`
      <div class="screen" style="padding-bottom:12px; background:var(--bg-body)">
        <div class="appbar" style="background:linear-gradient(135deg, #1a1a2e, #16213e); box-shadow:var(--shadow-sm)">
          <button class="appbar-btn" id="btn-back" style="color:white">${e("arrow-left",20)}</button>
          <span class="appbar-title" style="color:white">Vida Nocturna</span>
          <button class="appbar-btn" id="btn-filter" style="color:white">${e("sliders",20)}</button>
        </div>

        <div style="padding: 16px;">
          <div class="scroll-x" style="display:flex; gap:8px; margin-bottom:20px;">
            ${a.map(r=>`
              <button class="chip ${i===r?"chip-active":"chip-outline"} chip-selectable" data-subtype="${r}" style="white-space:nowrap; font-size:12px">
                ${r!=="Todos"?e(t[r]||"star",12)+" ":""}${r}
              </button>
            `).join("")}
          </div>

          <div class="flex-col gap-12">
            ${b.length>0?b.map(r=>`
              <div class="card-flat" data-noc="${r.id}" style="padding:0; border-radius:16px; overflow:hidden; cursor:pointer">
                <div style="position:relative">
                  <img src="${r.image}" alt="${r.name}" style="width:100%; height:150px; object-fit:cover"/>
                  <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)"></div>
                  <div style="position:absolute; bottom:10px; left:12px; right:12px; color:white">
                    <div style="font-weight:800; font-size:16px; margin-bottom:2px; text-shadow:0 1px 3px rgba(0,0,0,0.5)">${r.name}</div>
                    <div style="display:flex; align-items:center; gap:6px; font-size:11px; opacity:0.9">
                      ${e("music",10)} ${r.musicType||""}
                      <span style="margin-left:auto">${e("star",10)} ${r.rating}</span>
                    </div>
                  </div>
                  <div style="position:absolute; top:10px; right:10px; display:flex; gap:6px">
                    <span class="chip" style="background:rgba(139,92,246,0.85); color:white; font-size:10px; padding:3px 10px; backdrop-filter:blur(4px)">${r.subType}</span>
                    ${r.entryPrice>0?'<span class="chip" style="background:rgba(0,0,0,0.6); color:white; font-size:10px; padding:3px 10px; backdrop-filter:blur(4px)">S/ '+r.entryPrice+"</span>":'<span class="chip" style="background:rgba(34,197,94,0.85); color:white; font-size:10px; padding:3px 10px">GRATIS</span>'}
                  </div>
                </div>
                <div style="padding:12px 14px; display:flex; justify-content:space-between; align-items:center">
                  <div style="font-size:12px; color:var(--text-secondary); display:flex; align-items:center; gap:6px">${e("clock",11)} ${r.hours}</div>
                  <div style="font-size:11px; color:var(--text-secondary)">${r.capacity} pers. máx.</div>
                </div>
              </div>
            `).join(""):`
              <div class="empty-state" style="padding:40px 0">
                ${e("search",40,"text-secondary")}
                <h3 style="margin-top:16px">Sin resultados</h3>
                <p>Intenta con otros filtros.</p>
              </div>
            `}
          </div>
        </div>
      </div>
    `,W("/explore","user"),A(),l()}function l(){document.getElementById("btn-back").onclick=()=>window.history.back(),document.getElementById("btn-filter").onclick=o,document.querySelectorAll("[data-subtype]").forEach(b=>{b.onclick=()=>{i=b.dataset.subtype,n()}}),document.querySelectorAll("[data-noc]").forEach(b=>{b.onclick=()=>E("/vida-nocturna-detail?id="+b.dataset.noc)})}function o(){H(`
      <div style="padding:24px 20px">
        <h2 style="margin-bottom:24px; font-size:20px; font-weight:700">Filtros de Vida Nocturna</h2>
        <div class="flex-col gap-24">
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Precio de entrada máximo</label>
            <input type="range" min="0" max="100" value="50" style="width:100%;accent-color:var(--green-primary); margin:12px 0;" id="filter-price" />
            <div class="flex-row" style="justify-content:space-between;color:var(--green-primary);font-weight:600"><small>Gratis</small><small id="price-val">Hasta S/50</small><small>S/100</small></div>
          </div>
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Horario de apertura</label>
            <div class="flex-row gap-8 flex-wrap">
              <span class="chip chip-outline chip-selectable">Desde las 6pm</span>
              <span class="chip chip-outline chip-selectable">Desde las 8pm</span>
              <span class="chip chip-active chip-selectable">Desde las 10pm</span>
              <span class="chip chip-outline chip-selectable">Madrugada</span>
            </div>
          </div>
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Tipo de música</label>
            <div class="flex-row gap-8 flex-wrap">
              ${["Electrónica","Latina","Salsa","Rock","Criolla","Variada"].map(s=>'<span class="chip chip-outline chip-selectable">'+s+"</span>").join("")}
            </div>
          </div>
          <div class="input-group">
            <div style="display:flex; justify-content:space-between; align-items:center">
               <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:0">Requiere reserva previa</label>
               <input type="checkbox" style="width:20px;height:20px;accent-color:var(--green-primary)">
            </div>
          </div>
          <div class="input-group">
            <div style="display:flex; justify-content:space-between; align-items:center">
               <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:0">Solo mayores de 18</label>
               <input type="checkbox" checked style="width:20px;height:20px;accent-color:var(--green-primary)">
            </div>
          </div>
          <div class="flex-row gap-12 mt-16 pb-12">
            <button class="btn btn-outline flex-1" style="font-weight:600" id="btn-reset-filters">Restablecer</button>
            <button class="btn btn-primary flex-1" style="font-weight:600;font-size:16px" id="btn-apply-filters">Aplicar filtros</button>
          </div>
        </div>
      </div>
    `);const b=document.getElementById("filter-price"),r=document.getElementById("price-val");b&&r&&(b.oninput=s=>r.innerText=s.target.value==="0"?"Gratis":"Hasta S/"+s.target.value),document.querySelectorAll("#bottom-sheet .chip-selectable").forEach(s=>{s.onclick=()=>s.classList.toggle("chip-active")}),document.getElementById("btn-reset-filters").onclick=()=>{M(),f("Filtros restablecidos")},document.getElementById("btn-apply-filters").onclick=()=>{M(),f("Filtros aplicados","success"),n()}}n()}function pa(){const p=document.getElementById("app"),a=new URLSearchParams(window.location.hash.split("?")[1]||"").get("id"),t=J.find(x=>x.id===a);if(!t){p.innerHTML='<div class="screen" style="padding:40px;text-align:center"><h2>Lugar no encontrado</h2></div>';return}let n=t.entryPrice||0,l=0;const o=[t.image,...t.images||[]],b=j.favorites.has(t.id);function r(){var x,C,g;p.innerHTML=`
      <div class="screen" style="padding-bottom:24px; background:var(--bg-body)">
        <!-- Gallery -->
        <div class="detail-gallery" id="gallery">
          <img src="${o[0]}" alt="${t.name}" id="gallery-img" style="width:100%;height:240px;object-fit:cover" />
          <button class="float-btn" style="top:16px;left:16px" id="btn-back">${e("arrow-left",24)}</button>
          <button class="float-btn" style="top:16px;right:60px" id="btn-share">${e("share-2",20)}</button>
          <button class="float-btn" style="top:16px;right:16px;${b?"color:var(--red);background:rgba(255,0,0,0.1)":""}" id="btn-fav">${e("heart",20,b?"filled":"")}</button>
          <div class="gallery-dots dots" style="bottom:36px;z-index:10;display:flex;gap:6px">
            ${o.map((d,z)=>`<div class="dot ${z===0?"active":""}" data-dot="${z}"></div>`).join("")}
          </div>
          <div style="position:absolute;bottom:36px;right:16px;background:rgba(0,0,0,0.6);color:white;padding:4px 10px;border-radius:12px;font-size:12px;z-index:10;font-weight:600;backdrop-filter:blur(4px)" id="gallery-counter">1/${o.length}</div>
        </div>

        <div style="padding:20px 20px 0; background:var(--surface); border-radius:24px 24px 0 0; margin-top:-24px; position:relative; z-index:10; box-shadow:0 -4px 16px rgba(0,0,0,0.05)">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:4px">
            <h1 style="font-size:24px; font-weight:800; font-family:var(--font-heading); line-height:1.2; flex:1">${t.name}</h1>
            <span class="chip" style="background:rgba(139,92,246,0.15); color:#8b5cf6; font-size:10px; padding:3px 10px; flex-shrink:0; margin-left:8px; font-weight:700">${t.subType}</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px; font-size:13px; margin-bottom:16px; color:var(--text-secondary)">
            ${e("star",14,"text-orange")} <strong style="color:var(--text-primary)">${t.rating}</strong> (${t.reviews} op.)
          </div>
          <!-- Main Info -->
          <div class="card-flat" style="padding:16px; margin-bottom:20px">
            <div class="flex-col gap-10">
              <div style="display:flex; align-items:center; gap:8px; font-size:13px">${e("clock",14,"text-purple")} <strong>${t.hours}</strong></div>
              <div style="display:flex; align-items:center; gap:8px; font-size:13px">${e("map-pin",14,"text-purple")} ${t.address}</div>
              ${t.phone?'<div style="display:flex; align-items:center; gap:8px; font-size:13px">'+e("phone",14,"text-purple")+" "+t.phone+"</div>":""}
              <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:4px">
                <span class="chip chip-outline" style="font-size:11px; padding:4px 10px">${e("music",10)} ${t.musicType}</span>
                <span class="chip chip-outline" style="font-size:11px; padding:4px 10px">${e("users",10)} ${t.capacity} pers.</span>
                ${t.dressCode?'<span class="chip chip-outline" style="font-size:11px; padding:4px 10px">'+e("shirt",10)+" "+t.dressCode+"</span>":""}
                ${t.entryPrice>0?'<span class="chip" style="font-size:11px; padding:4px 10px; background:#fef3c7; color:#d97706; font-weight:700">Entrada S/ '+t.entryPrice+"</span>":'<span class="chip" style="font-size:11px; padding:4px 10px; background:#dcfce7; color:#16a34a; font-weight:700">Entrada libre</span>'}
              </div>
              <div style="display:flex; flex-wrap:wrap; gap:4px; margin-top:4px">
                ${(t.openDays||[]).map(d=>'<span style="font-size:10px; color:var(--text-secondary); background:var(--bg-body); padding:3px 8px; border-radius:6px; font-weight:600">'+d+"</span>").join("")}
              </div>
            </div>
          </div>

          <p style="font-size:14px; color:var(--text-secondary); line-height:1.5; margin-bottom:24px">${t.description}</p>

          <!-- Features -->
          <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">Beneficios y características</h3>
          <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:28px">
            ${(t.features||[]).map(d=>'<span class="chip chip-outline" style="font-size:11px; padding:6px 12px; display:flex; align-items:center; gap:4px">'+e("check-circle",12,"text-green-primary")+" "+d+"</span>").join("")}
          </div>

          <!-- House Specialties -->
          ${t.drinks&&t.drinks.house&&t.drinks.house.length>0?`
            <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">🍸 Especialidades de la casa</h3>
            <div class="scroll-x" style="display:flex; gap:12px; margin-bottom:28px; padding-bottom:4px">
              ${t.drinks.house.map(d=>`
                <div class="card-flat" style="width:180px; flex-shrink:0; padding:0; overflow:hidden; border-radius:14px">
                  <img src="${d.image}" style="width:100%; height:120px; object-fit:cover"/>
                  <div style="padding:12px">
                    <div style="font-weight:700; font-size:14px; margin-bottom:4px">${d.name}</div>
                    <div style="font-size:11px; color:var(--text-secondary); line-height:1.3; margin-bottom:6px">${d.desc}</div>
                    <div style="font-weight:800; font-size:15px; color:#8b5cf6">S/ ${d.price}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          `:""}

          <!-- Drinks Menu -->
          <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">Carta de tragos</h3>
          <div style="margin-bottom:28px">
            ${s("Cócteles",(x=t.drinks)==null?void 0:x.cocktails)}
            ${s("Cervezas",(C=t.drinks)==null?void 0:C.beers)}
            ${s("Sin alcohol",(g=t.drinks)==null?void 0:g.nonAlcoholic)}
          </div>

          <!-- Shows -->
          ${t.shows&&t.shows.length>0?`
            <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">🎤 Shows programados</h3>
            <div class="scroll-x" style="display:flex; gap:12px; margin-bottom:28px; padding-bottom:4px">
              ${t.shows.map(d=>`
                <div class="card-flat" style="width:200px; flex-shrink:0; padding:0; overflow:hidden; border-radius:14px">
                  <img src="${d.image}" style="width:100%; height:110px; object-fit:cover"/>
                  <div style="padding:12px">
                    <div style="font-weight:700; font-size:14px; margin-bottom:4px">${d.artist}</div>
                    <div style="font-size:12px; color:var(--text-secondary); display:flex; align-items:center; gap:4px">${e("calendar",10)} ${d.date} · ${d.time}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          `:""}

          <!-- Reserve Button -->
          <button class="btn btn-primary btn-block" id="btn-reservar" style="height:auto; padding:16px; border-radius:14px; font-weight:800; font-size:16px; background:linear-gradient(135deg, #8b5cf6, #6d28d9)">
            ${e("calendar",18)} Reservar
          </button>
        </div>
      </div>
    `,G(),A(),y()}function s(x,C){return!C||C.length===0?"":'<div style="margin-bottom:12px"><div style="font-weight:700; font-size:13px; color:var(--text-secondary); margin-bottom:8px; text-transform:uppercase; letter-spacing:0.5px">'+x+"</div>"+C.map(g=>'<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border-light)"><span style="font-size:14px">'+g.name+'</span><span style="font-weight:700; font-size:14px; color:#8b5cf6">S/ '+g.price+"</span></div>").join("")+"</div>"}function y(){document.getElementById("btn-back").onclick=()=>window.history.back();const x=document.getElementById("btn-share");x&&(x.onclick=()=>f("Enlace copiado al portapapeles","success"));const C=document.getElementById("btn-fav");C&&(C.onclick=function(){const z=$e(t.id);this.innerHTML=e("heart",20,z?"filled":""),this.style.color=z?"var(--red)":"",this.style.background=z?"rgba(255,0,0,0.1)":"",f(z?"Agregado a favoritos":"Eliminado de favoritos"),A()});const g=document.getElementById("gallery");if(g){let z=0;g.addEventListener("touchstart",v=>z=v.touches[0].clientX),g.addEventListener("touchend",v=>{const h=z-v.changedTouches[0].clientX;Math.abs(h)>50&&(h>0&&l<o.length-1?l++:h<0&&l>0&&l--,document.getElementById("gallery-img").src=o[l],document.getElementById("gallery-counter").textContent=`${l+1}/${o.length}`,document.querySelectorAll("[data-dot]").forEach((S,w)=>S.classList.toggle("active",w===l)))}),document.querySelectorAll("[data-dot]").forEach(v=>{v.onclick=()=>{l=parseInt(v.dataset.dot),document.getElementById("gallery-img").src=o[l],document.getElementById("gallery-counter").textContent=`${l+1}/${o.length}`,document.querySelectorAll("[data-dot]").forEach((h,S)=>h.classList.toggle("active",S===l))}})}const d=document.getElementById("btn-reservar");d&&(d.onclick=c)}function c(){const x=t.zones||[],C=t.extras||[];let g='<div style="padding:24px 20px; max-height:85vh; overflow-y:auto">';g+='<h3 style="font-weight:800; font-size:20px; margin-bottom:20px; font-family:var(--font-heading)">Reservar en '+t.name+"</h3>",g+='<div class="input-group" style="margin-bottom:16px"><label class="label" style="font-weight:700">¿Cuándo irás?</label>',g+='<div style="display:flex; gap:8px; margin-top:8px"><button class="chip chip-active chip-selectable" data-when="tonight">Esta noche</button><button class="chip chip-outline chip-selectable" data-when="future">Otra fecha</button></div>',g+='<div id="date-picker" style="display:none; margin-top:12px"><input type="date" class="input-field no-icon" style="background:var(--bg-body)"/></div></div>',g+='<div class="input-group" style="margin-bottom:16px"><label class="label" style="font-weight:700">Número de personas</label>',g+='<div style="display:flex;align-items:center;gap:16px;margin-top:8px">',g+='<button class="icon-btn" style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light);background:var(--surface)" onclick="let c=this.nextElementSibling;let v=parseInt(c.innerText);if(v>1)c.innerText=v-1">'+e("minus",14)+"</button>",g+='<span style="font-size:22px;font-weight:800;min-width:30px;text-align:center" id="pax-count">2</span>',g+='<button class="icon-btn" style="width:36px;height:36px;border-radius:50%;border:1px solid var(--border-light);background:var(--surface)" onclick="let c=this.previousElementSibling;let v=parseInt(c.innerText);c.innerText=v+1">'+e("plus",14)+"</button></div></div>",x.length>0&&(g+='<div class="input-group" style="margin-bottom:16px"><label class="label" style="font-weight:700">Selecciona zona</label>',g+='<div style="background:var(--bg-body); border-radius:14px; padding:16px; margin-top:8px">',g+='<div style="display:flex; gap:8px; margin-bottom:12px">',x.forEach((d,z)=>{g+='<div style="flex:1; text-align:center; padding:12px 8px; border-radius:12px; background:'+d.color+"15; border:2px solid "+d.color+'; cursor:pointer; transition:all 0.2s" class="zone-select" data-zone="'+z+'">',g+='<div style="font-weight:700; font-size:12px; color:'+d.color+'">'+d.name+"</div>",g+=d.tables>0?'<div style="font-size:10px; color:var(--text-secondary)">'+d.tables+" mesas</div>":'<div style="font-size:10px; color:var(--text-secondary)">Sin mesa</div>',g+=d.extraPrice?'<div style="font-size:11px; font-weight:700; color:'+d.color+'; margin-top:4px">+S/ '+d.extraPrice+"</div>":"",g+="</div>"}),g+="</div></div></div>"),C.length>0&&(g+='<div class="input-group" style="margin-bottom:20px"><label class="label" style="font-weight:700">Servicios adicionales</label>',g+='<div class="flex-col gap-8" style="margin-top:8px">',C.forEach((d,z)=>{g+='<label style="display:flex; align-items:center; justify-content:space-between; padding:12px; background:var(--surface); border-radius:12px; cursor:pointer; border:1px solid var(--border-light)">',g+='<div style="display:flex; align-items:center; gap:10px"><input type="checkbox" class="extra-check" data-idx="'+z+'" data-price="'+d.price+'" style="accent-color:#8b5cf6; width:18px; height:18px"/>',g+='<span style="font-weight:600; font-size:14px">'+d.name+"</span></div>",g+='<span style="font-weight:700; font-size:14px; color:#8b5cf6">+S/ '+d.price+"</span></label>"}),g+="</div></div>"),g+='<div style="background:linear-gradient(135deg, #f5f3ff, #ede9fe); border-radius:14px; padding:16px; margin-bottom:16px">',g+='<div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:4px"><span>Entrada</span><span style="font-weight:700">'+(t.entryPrice>0?"S/ "+t.entryPrice:"Gratis")+"</span></div>",g+='<div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:4px"><span>Zona extra</span><span style="font-weight:700" id="lbl-zone-extra">S/ 0</span></div>',g+='<div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:8px"><span>Servicios adicionales</span><span style="font-weight:700" id="lbl-extras-total">S/ 0</span></div>',g+='<div style="border-top:1px solid var(--border); padding-top:8px; display:flex; justify-content:space-between"><span style="font-weight:800; font-size:16px">Total</span><span style="font-weight:800; font-size:18px; color:#8b5cf6" id="lbl-total">S/ '+(t.entryPrice||0)+"</span></div></div>",g+='<button class="btn btn-block" id="btn-confirm-res" style="height:auto; padding:16px; border-radius:14px; font-weight:800; font-size:16px; background:linear-gradient(135deg, #8b5cf6, #6d28d9); color:white; border:none">'+e("check",18)+" Confirmar reserva</button>",g+="</div>",H(g),A(),setTimeout(()=>{document.querySelectorAll("[data-when]").forEach(h=>{h.onclick=()=>{document.querySelectorAll("[data-when]").forEach(w=>{w.classList.remove("chip-active"),w.classList.add("chip-outline")}),h.classList.add("chip-active"),h.classList.remove("chip-outline");const S=document.getElementById("date-picker");S&&(S.style.display=h.dataset.when==="future"?"block":"none")}});let d=0;document.querySelectorAll(".zone-select").forEach(h=>{h.onclick=()=>{document.querySelectorAll(".zone-select").forEach(k=>k.style.transform="scale(1)"),h.style.transform="scale(1.05)";const S=parseInt(h.dataset.zone);d=x[S].extraPrice||0;const w=document.getElementById("lbl-zone-extra");w&&(w.innerText="S/ "+d),z(d)}});function z(h){let S=0;document.querySelectorAll(".extra-check").forEach($=>{$.checked&&(S+=parseInt($.dataset.price))});const w=document.getElementById("lbl-extras-total"),k=document.getElementById("lbl-total");w&&(w.innerText="S/ "+S),n=(t.entryPrice||0)+(h!==void 0?h:d)+S,k&&(k.innerText="S/ "+n)}document.querySelectorAll(".extra-check").forEach(h=>{h.onchange=()=>z()});const v=document.getElementById("btn-confirm-res");v&&(v.onclick=()=>{ne(t);const h=j.routeItems[j.routeItems.length-1];h&&(h.cost=n,h.category="Entretenimiento nocturno"),f("Reserva confirmada. Añadido al recorrido.","success"),M()})},100)}r()}function ga(){const p=document.getElementById("app");let i="Todos",a=null,t="",n=5,l=2025;const o=["Todos","Festival","Feria","Concierto","Deportivo","Cultural","Gastronómico","Religioso","Taller"],b={Festival:"party-popper",Feria:"store",Concierto:"music",Deportivo:"trophy",Cultural:"landmark",Gastronómico:"utensils",Religioso:"church",Taller:"palette"},r=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],s=["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];function y(){const d={};return ze.forEach(z=>{if(z.calDate){const v=z.calDate.split("-"),h=parseInt(v[2]),S=parseInt(v[1])-1,w=parseInt(v[0]);S===n&&w===l&&(d[h]||(d[h]=[]),d[h].push(z))}}),d}function c(){let d=[...ze];if(t){const z=t.toLowerCase();d=d.filter(v=>v.name.toLowerCase().includes(z)||v.placeName.toLowerCase().includes(z)||v.subType.toLowerCase().includes(z))}if(i!=="Todos"&&(d=d.filter(z=>z.subType===i)),a){const z=`${l}-${String(n+1).padStart(2,"0")}-${String(a).padStart(2,"0")}`;d=d.filter(v=>v.calDate===z)}return d}function x(){const d=y(),z=c(),v=new Date(l,n+1,0).getDate(),h=(new Date(l,n,1).getDay()+6)%7;p.innerHTML=`
      <div class="screen" style="padding-bottom:12px; background:var(--bg-body)">
        <div class="home-appbar" style="align-items:center;">
          <div class="search-bar" style="flex:1; display:flex; align-items:center; background:var(--surface); border-radius:var(--radius-xl); padding: 10px 16px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm);">
            ${e("search",20,"text-secondary")}
            <input type="text" id="eventos-search-input" placeholder="Buscar eventos, festivales..." style="border:none; background:transparent; outline:none; font-size:15px; width:100%; margin-left:12px; color: var(--text-primary);" />
          </div>
          <div class="home-actions" style="margin-left: 12px;">
            <button class="appbar-btn" id="btn-filter" style="background:var(--surface);border:1px solid var(--border-light);box-shadow:var(--shadow-sm)">${e("sliders",20)}</button>
          </div>
        </div>

        <div class="explore-tabs mt-8" style="padding: 0 16px;">
          <button class="explore-tab" data-tab="places" style="display:flex;align-items:center;gap:8px">
            ${e("map-pin",18)} Lugares
          </button>
          <button class="explore-tab active" data-tab="events" style="display:flex;align-items:center;gap:8px">
            ${e("calendar",18)} Eventos
          </button>
        </div>

        <!-- Calendar -->
        <div style="background:var(--surface); padding:16px; margin-top:16px; margin-bottom:8px; border-bottom:1px solid var(--border-light)">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px">
            <button class="icon-btn" id="btn-prev-month" style="width:32px;height:32px;border:none;background:var(--bg-body);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer">${e("chevron-left",16)}</button>
            <span style="font-weight:800; font-size:16px; font-family:var(--font-heading)">${r[n]} ${l}</span>
            <button class="icon-btn" id="btn-next-month" style="width:32px;height:32px;border:none;background:var(--bg-body);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer">${e("chevron-right",16)}</button>
          </div>
          <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:2px; text-align:center">
            ${s.map(w=>`<div style="font-size:10px; font-weight:700; color:var(--text-secondary); padding:4px 0">${w}</div>`).join("")}
            ${Array(h).fill("").map(()=>"<div></div>").join("")}
            ${Array.from({length:v},(w,k)=>{const $=k+1,m=d[$],u=a===$;return`<div class="cal-day" data-day="${$}" style="padding:6px 0; cursor:pointer; border-radius:10px; font-size:13px; font-weight:${u?"800":"500"}; background:${u?"#7c3aed":"transparent"}; color:${u?"white":"var(--text-primary)"}; position:relative; transition:all 0.15s">
                ${$}
                ${m?`<div style="position:absolute;bottom:2px;left:50%;transform:translateX(-50%);display:flex;gap:2px">${m.slice(0,3).map(()=>'<div style="width:4px;height:4px;border-radius:50%;background:#7c3aed"></div>').join("")}</div>`:""}
              </div>`}).join("")}
          </div>
          ${a?`<button id="btn-clear-day" style="margin-top:8px; font-size:12px; color:#7c3aed; background:none; border:none; cursor:pointer; font-weight:600">${e("x",12)} Quitar filtro de día</button>`:""}
        </div>

        <div style="padding:12px 16px">
          <!-- Sub-type chips -->
          <div class="scroll-x" style="display:flex; gap:8px; margin-bottom:16px">
            ${o.map(w=>`
              <button class="chip ${i===w?"chip-active":"chip-outline"} chip-selectable" data-subtype="${w}" style="white-space:nowrap; font-size:12px">
                ${w!=="Todos"?e(b[w]||"calendar",12)+" ":""}${w}
              </button>
            `).join("")}
          </div>

          <!-- Event count -->
          <div style="font-size:13px; color:var(--text-secondary); margin-bottom:12px; font-weight:600">${z.length} evento${z.length!==1?"s":""} ${a?"el día "+a:"próximos"}</div>

          <!-- Events list -->
          <div class="flex-col gap-12">
            ${z.length>0?z.map(w=>`
              <div class="card-flat" data-evt="${w.id}" style="padding:0; border-radius:16px; overflow:hidden; cursor:pointer">
                <div style="position:relative">
                  <img src="${w.image}" alt="${w.name}" style="width:100%; height:140px; object-fit:cover"/>
                  <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)"></div>
                  <div style="position:absolute; top:10px; left:10px; display:flex; gap:6px">
                    <span class="chip" style="background:rgba(124,58,237,0.85); color:white; font-size:10px; padding:3px 10px; backdrop-filter:blur(4px)">${w.subType||w.category}</span>
                    ${w.free?'<span class="chip" style="background:rgba(34,197,94,0.85); color:white; font-size:10px; padding:3px 10px">GRATIS</span>':`<span class="chip" style="background:rgba(0,0,0,0.6); color:white; font-size:10px; padding:3px 10px">${w.priceLabel}</span>`}
                  </div>
                  <div style="position:absolute; bottom:10px; left:12px; right:12px; color:white">
                    <div style="font-weight:800; font-size:15px; text-shadow:0 1px 3px rgba(0,0,0,0.5)">${w.name}</div>
                  </div>
                </div>
                <div style="padding:12px 14px">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px">
                    <div style="font-size:12px; color:var(--text-secondary); display:flex; align-items:center; gap:6px">${e("calendar",11)} ${w.date} · ${w.time}</div>
                    <div style="font-size:11px; color:var(--text-secondary)">${w.duration||""}</div>
                  </div>
                  <div style="display:flex; justify-content:space-between; align-items:center">
                    <div style="font-size:12px; color:var(--text-secondary); display:flex; align-items:center; gap:6px">${e("map-pin",11)} ${w.placeName}</div>
                    <div style="display:flex; align-items:center; gap:4px">
                      <div style="width:60px; height:4px; background:var(--border-light); border-radius:2px; overflow:hidden">
                        <div style="width:${Math.round(w.attendees/w.maxAttendees*100)}%; height:100%; background:${w.attendees/w.maxAttendees>.8?"#ef4444":"#7c3aed"}; border-radius:2px"></div>
                      </div>
                      <span style="font-size:10px; color:var(--text-secondary)">${w.attendees}/${w.maxAttendees}</span>
                    </div>
                  </div>
                </div>
              </div>
            `).join(""):`
              <div class="empty-state" style="padding:40px 0; text-align:center">
                ${e("calendar-off",40,"text-secondary")}
                <h3 style="margin-top:16px">Sin eventos</h3>
                <p style="color:var(--text-secondary)">No hay eventos para esta selección.</p>
              </div>
            `}
          </div>
        </div>
      </div>
    `,W("/explore","user"),A();const S=document.getElementById("eventos-search-input");S&&(S.value=t,S.oninput=w=>{t=w.target.value,x();const k=document.getElementById("eventos-search-input");k&&(k.focus(),k.setSelectionRange(t.length,t.length))}),C()}function C(){document.querySelectorAll("[data-tab]").forEach(z=>{z.onclick=()=>{z.dataset.tab==="places"&&E("/explore")}}),document.getElementById("btn-filter").onclick=g,document.getElementById("btn-prev-month").onclick=()=>{n--,n<0&&(n=11,l--),a=null,x()},document.getElementById("btn-next-month").onclick=()=>{n++,n>11&&(n=0,l++),a=null,x()};const d=document.getElementById("btn-clear-day");d&&(d.onclick=()=>{a=null,x()}),document.querySelectorAll(".cal-day").forEach(z=>{z.onclick=()=>{const v=parseInt(z.dataset.day);a=a===v?null:v,x()}}),document.querySelectorAll("[data-subtype]").forEach(z=>{z.onclick=()=>{i=z.dataset.subtype,x()}}),document.querySelectorAll("[data-evt]").forEach(z=>{z.onclick=()=>E("/eventos-detail?id="+z.dataset.evt)})}function g(){H(`
      <div style="padding:24px 20px">
        <h2 style="margin-bottom:24px; font-size:20px; font-weight:700">Filtros de Eventos</h2>
        <div class="flex-col gap-24">
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Precio</label>
            <div class="flex-row gap-8">
              <span class="chip chip-active chip-selectable">Todos</span>
              <span class="chip chip-outline chip-selectable">Gratis</span>
              <span class="chip chip-outline chip-selectable">Pagado</span>
            </div>
          </div>
          <div class="input-group">
            <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:8px;display:block">Duración</label>
            <div class="flex-row gap-8 flex-wrap">
              <span class="chip chip-outline chip-selectable">Un día</span>
              <span class="chip chip-outline chip-selectable">Un fin de semana</span>
              <span class="chip chip-outline chip-selectable">Varios días</span>
            </div>
          </div>
          <div class="input-group">
            <div style="display:flex; justify-content:space-between; align-items:center">
               <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:0">Apto para familias</label>
               <input type="checkbox" style="width:20px;height:20px;accent-color:#7c3aed">
            </div>
          </div>
          <div class="input-group">
            <div style="display:flex; justify-content:space-between; align-items:center">
               <label class="label" style="font-weight:600;color:var(--text-primary);margin-bottom:0">Requiere inscripción previa</label>
               <input type="checkbox" style="width:20px;height:20px;accent-color:#7c3aed">
            </div>
          </div>
          <div class="flex-row gap-12 mt-16 pb-12">
            <button class="btn btn-outline flex-1" id="btn-reset-f">Restablecer</button>
            <button class="btn flex-1" id="btn-apply-f" style="background:linear-gradient(135deg,#7c3aed,#5b21b6);color:white;border:none;font-weight:700;font-size:16px">Aplicar</button>
          </div>
        </div>
      </div>
    `),document.querySelectorAll("#bottom-sheet .chip-selectable").forEach(d=>{d.onclick=()=>d.classList.toggle("chip-active")}),document.getElementById("btn-reset-f").onclick=()=>{M(),f("Filtros restablecidos")},document.getElementById("btn-apply-f").onclick=()=>{M(),f("Filtros aplicados","success"),x()}}x()}function ua(){const p=document.getElementById("app"),a=new URLSearchParams(window.location.hash.split("?")[1]||"").get("id"),t=ze.find(c=>c.id===a);if(!t){p.innerHTML='<div class="screen" style="padding:40px;text-align:center"><h2>Evento no encontrado</h2></div>';return}let n=0;const l=[t.image,...t.images||[]],o=Math.round(t.attendees/t.maxAttendees*100),b=o>80?"#ef4444":o>50?"#f59e0b":"#7c3aed";function r(){p.innerHTML=`
      <div class="screen" style="padding-bottom:24px; background:var(--bg-body)">
        <!-- Gallery -->
        <div class="detail-gallery" id="gallery">
          <img src="${l[0]}" alt="${t.name}" id="gallery-img" style="width:100%;height:240px;object-fit:cover" />
          <button class="float-btn" style="top:16px;left:16px" id="btn-back">${e("arrow-left",24)}</button>
          <button class="float-btn" style="top:16px;right:16px" id="btn-share">${e("share-2",20)}</button>
          <div class="gallery-dots dots" style="bottom:36px;z-index:10;display:flex;gap:6px">
            ${l.map((c,x)=>`<div class="dot ${x===0?"active":""}" data-dot="${x}"></div>`).join("")}
          </div>
          <div style="position:absolute;bottom:36px;right:16px;background:rgba(0,0,0,0.6);color:white;padding:4px 10px;border-radius:12px;font-size:12px;z-index:10;font-weight:600;backdrop-filter:blur(4px)" id="gallery-counter">1/${l.length}</div>
        </div>

        <div style="padding:20px 20px 0; background:var(--surface); border-radius:24px 24px 0 0; margin-top:-24px; position:relative; z-index:10; box-shadow:0 -4px 16px rgba(0,0,0,0.05)">
          <!-- Header -->
          <div style="display:flex; gap:6px; margin-bottom:8px; flex-wrap:wrap">
            <span class="chip" style="background:rgba(124,58,237,0.15); color:#7c3aed; font-size:10px; padding:3px 10px; font-weight:700">${t.subType||t.category}</span>
            ${t.familyFriendly?'<span class="chip" style="background:#dcfce7; color:#16a34a; font-size:10px; padding:3px 10px; font-weight:700">Familiar</span>':""}
            ${t.requiresSignup?'<span class="chip" style="background:#fef3c7; color:#d97706; font-size:10px; padding:3px 10px; font-weight:700">Inscripción previa</span>':""}
          </div>
          <h1 style="font-size:24px; font-weight:800; font-family:var(--font-heading); line-height:1.2; margin-bottom:16px">${t.name}</h1>

          <!-- Key Info Card -->
          <div class="card-flat" style="padding:16px; margin-bottom:20px">
            <div class="flex-col gap-10">
              <div style="display:flex; align-items:center; gap:10px">
                <div style="width:40px;height:40px;border-radius:10px;background:#f5f3ff;display:flex;align-items:center;justify-content:center;color:#7c3aed;flex-shrink:0">${e("calendar",18)}</div>
                <div>
                  <div style="font-weight:700; font-size:14px">${t.fullDate}</div>
                  <div style="font-size:12px; color:var(--text-secondary)">${t.time}${t.endTime?" — "+t.endTime:""}</div>
                </div>
              </div>
              <div style="display:flex; align-items:center; gap:10px">
                <div style="width:40px;height:40px;border-radius:10px;background:#f5f3ff;display:flex;align-items:center;justify-content:center;color:#7c3aed;flex-shrink:0">${e("map-pin",18)}</div>
                <div>
                  <div style="font-weight:700; font-size:14px">${t.placeName}</div>
                  <div style="font-size:12px; color:var(--text-secondary)">${t.address||""}</div>
                </div>
              </div>
              <!-- Organizer -->
              <div style="display:flex; align-items:center; gap:10px">
                <img src="${t.organizer.image||"https://picsum.photos/seed/org/100/100"}" style="width:40px;height:40px;border-radius:10px;object-fit:cover;flex-shrink:0" />
                <div style="flex:1">
                  <div style="font-weight:700; font-size:14px">${t.organizer.name}</div>
                  <div style="font-size:11px; color:var(--text-secondary)">${t.organizer.type}</div>
                </div>
                ${t.organizer.type.includes("verificado")?'<span class="chip" style="font-size:9px; padding:2px 8px; background:#dcfce7; color:#16a34a; font-weight:700">'+e("check-circle",10)+" Verificado</span>":""}
              </div>
              <!-- Occupancy bar -->
              <div>
                <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px">
                  <span style="color:var(--text-secondary)">Ocupación actual</span>
                  <span style="font-weight:700; color:${b}">${t.attendees} / ${t.maxAttendees}</span>
                </div>
                <div style="height:6px; background:var(--border-light); border-radius:3px; overflow:hidden">
                  <div style="width:${o}%; height:100%; background:${b}; border-radius:3px; transition:width 0.5s"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Description -->
          <h3 style="font-size:16px; font-weight:800; margin-bottom:8px; font-family:var(--font-heading)">Sobre el evento</h3>
          <p style="font-size:14px; color:var(--text-secondary); line-height:1.6; margin-bottom:20px">${t.description}</p>

          <!-- Program -->
          ${t.program&&t.program.length>0?`
            <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">📋 Programa de actividades</h3>
            <div style="margin-bottom:24px; position:relative; padding-left:20px">
              <div style="position:absolute; left:7px; top:4px; bottom:4px; width:2px; background:var(--border-light)"></div>
              ${t.program.map(c=>`
                <div style="position:relative; margin-bottom:16px">
                  <div style="position:absolute; left:-17px; top:4px; width:10px; height:10px; border-radius:50%; background:#7c3aed; border:2px solid var(--surface)"></div>
                  <div style="font-weight:800; font-size:13px; color:#7c3aed; margin-bottom:2px">${c.time}</div>
                  <div style="font-weight:700; font-size:14px">${c.title}</div>
                  <div style="font-size:12px; color:var(--text-secondary)">${c.desc}</div>
                </div>
              `).join("")}
            </div>
          `:""}

          <!-- Requirements -->
          ${t.requirements&&t.requirements.length>0?`
            <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">⚠️ Restricciones y recomendaciones</h3>
            <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px">
              ${t.requirements.map(c=>'<span class="chip chip-outline" style="font-size:11px; padding:6px 12px">'+e("alert-circle",12,"text-orange")+" "+c+"</span>").join("")}
            </div>
          `:""}

          <!-- Tickets Section -->
          <h3 style="font-size:16px; font-weight:800; margin-bottom:12px; font-family:var(--font-heading)">🎫 Acceso y entradas</h3>
          ${t.free&&(!t.tickets||t.tickets.length===0)?`
            <div style="background:#f5f3ff; border:1px solid #ddd6fe; border-radius:14px; padding:20px; text-align:center; margin-bottom:24px">
              <div style="font-size:24px; margin-bottom:8px">${e("ticket",32,"text-purple")}</div>
              <div style="font-weight:800; font-size:16px; color:#7c3aed; margin-bottom:4px">Evento gratuito</div>
              <div style="font-size:13px; color:var(--text-secondary); margin-bottom:16px">No requiere entrada, solo confirma tu asistencia.</div>
              <button class="btn btn-block" id="btn-confirm-free" style="background:linear-gradient(135deg,#7c3aed,#5b21b6);color:white;border:none;font-weight:700;font-size:16px;padding:14px;border-radius:14px">
                ${e("check",18)} Confirmar asistencia
              </button>
            </div>
          `:`
            <div class="flex-col gap-12" style="margin-bottom:24px">
              ${(t.tickets||[]).map((c,x)=>{const C=Math.round((c.max-c.available)/c.max*100),g=C>80?"#ef4444":C>50?"#f59e0b":"#7c3aed";return`
                <div class="card-flat ticket-card" data-tidx="${x}" style="padding:16px; cursor:pointer; border:2px solid transparent; transition:all 0.2s">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px">
                    <div>
                      <div style="font-weight:800; font-size:15px">${c.type}</div>
                      <div style="font-weight:800; font-size:20px; color:#7c3aed; margin-top:4px">S/ ${c.price}</div>
                    </div>
                    <div style="text-align:right">
                      <div style="font-size:11px; color:var(--text-secondary)">${c.available} disponibles</div>
                      <div style="width:60px; height:4px; background:var(--border-light); border-radius:2px; overflow:hidden; margin-top:4px">
                        <div style="width:${C}%; height:100%; background:${g}; border-radius:2px"></div>
                      </div>
                    </div>
                  </div>
                  <div style="display:flex; flex-wrap:wrap; gap:4px">
                    ${c.includes.map(d=>'<span style="font-size:10px; color:var(--text-secondary); background:var(--bg-body); padding:3px 8px; border-radius:6px; display:inline-flex; align-items:center; gap:3px">'+e("check",8,"text-green-primary")+" "+d+"</span>").join("")}
                  </div>
                </div>`}).join("")}
            </div>
          `}
        </div>
      </div>
    `,G(),A(),s()}function s(){document.getElementById("btn-back").onclick=()=>window.history.back(),document.getElementById("btn-share").onclick=()=>f("Enlace copiado al portapapeles","success");const c=document.getElementById("gallery");if(c){let C=0;c.addEventListener("touchstart",g=>C=g.touches[0].clientX),c.addEventListener("touchend",g=>{const d=C-g.changedTouches[0].clientX;Math.abs(d)>50&&(d>0&&n<l.length-1?n++:d<0&&n>0&&n--,document.getElementById("gallery-img").src=l[n],document.getElementById("gallery-counter").textContent=`${n+1}/${l.length}`,document.querySelectorAll("[data-dot]").forEach((z,v)=>z.classList.toggle("active",v===n)))}),document.querySelectorAll("[data-dot]").forEach(g=>{g.onclick=()=>{n=parseInt(g.dataset.dot),document.getElementById("gallery-img").src=l[n],document.getElementById("gallery-counter").textContent=`${n+1}/${l.length}`,document.querySelectorAll("[data-dot]").forEach((d,z)=>d.classList.toggle("active",z===n))}})}const x=document.getElementById("btn-confirm-free");x&&(x.onclick=()=>{ne({id:"evt-"+t.id,name:t.name,image:t.image,address:t.address||t.placeName,category:"Eventos"}),f("¡Asistencia confirmada! Añadido al recorrido.","success"),x.innerHTML=e("check-circle",18)+" Asistencia confirmada",x.style.opacity="0.7",x.style.pointerEvents="none"}),document.querySelectorAll(".ticket-card").forEach(C=>{C.onclick=()=>{const g=parseInt(C.dataset.tidx);y(g)}})}function y(c){const x=t.tickets[c];let C=1;function g(){const d=C*x.price,z=C>=10;let v='<div style="padding:24px 20px; max-height:85vh; overflow-y:auto">';if(v+='<h3 style="font-weight:800; font-size:20px; margin-bottom:4px; font-family:var(--font-heading)">'+x.type+"</h3>",v+='<p style="font-size:13px; color:var(--text-secondary); margin-bottom:20px">'+t.name+"</p>",v+='<div style="background:#f5f3ff; border-radius:14px; padding:16px; margin-bottom:20px">',v+='<div style="font-weight:800; font-size:18px; color:#7c3aed; margin-bottom:8px">S/ '+x.price+' <span style="font-size:12px; color:var(--text-secondary); font-weight:400">por entrada</span></div>',v+='<div style="display:flex; flex-wrap:wrap; gap:4px">',x.includes.forEach(h=>{v+='<span style="font-size:11px; background:white; padding:4px 10px; border-radius:8px; display:inline-flex; align-items:center; gap:4px">'+e("check",10,"text-green-primary")+" "+h+"</span>"}),v+="</div></div>",v+='<div class="input-group" style="margin-bottom:16px"><label class="label" style="font-weight:700">Cantidad de entradas</label>',v+='<div style="display:flex; align-items:center; gap:16px; margin-top:8px">',v+='<button class="icon-btn" id="qty-minus" style="width:40px;height:40px;border-radius:50%;border:1px solid var(--border-light);background:var(--surface);display:flex;align-items:center;justify-content:center;cursor:pointer">'+e("minus",16)+"</button>",v+='<span style="font-size:28px; font-weight:800; min-width:40px; text-align:center" id="qty-val">'+C+"</span>",v+='<button class="icon-btn" id="qty-plus" style="width:40px;height:40px;border-radius:50%;border:1px solid var(--border-light);background:var(--surface);display:flex;align-items:center;justify-content:center;cursor:pointer">'+e("plus",16)+"</button>",v+="</div></div>",z&&(v+='<div style="background:#fef3c7; border:1px solid #fde68a; border-radius:12px; padding:12px 16px; margin-bottom:16px; display:flex; align-items:center; gap:10px">',v+='<div style="color:#d97706">'+e("tag",18)+"</div>",v+='<div><div style="font-weight:700; font-size:13px; color:#92400e">¡Descuento grupal disponible!</div>',v+='<div style="font-size:12px; color:#a16207">Grupos de 10+ personas obtienen 15% de descuento</div></div></div>',v+='<button class="btn btn-outline btn-block" id="btn-group-price" style="margin-bottom:16px; border-color:#d97706; color:#d97706; font-weight:700">'+e("users",14)+" Solicitar precio grupal</button>"),v+='<div style="background:linear-gradient(135deg, #f5f3ff, #ede9fe); border-radius:14px; padding:16px; margin-bottom:16px">',v+='<div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:4px"><span>'+C+"x "+x.type+'</span><span style="font-weight:700">S/ '+d+"</span></div>",z){const h=Math.round(d*.15);v+='<div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:4px; color:#16a34a"><span>Descuento grupal (15%)</span><span style="font-weight:700">-S/ '+h+"</span></div>",v+='<div style="border-top:1px solid var(--border); padding-top:8px; display:flex; justify-content:space-between"><span style="font-weight:800; font-size:16px">Total</span><span style="font-weight:800; font-size:18px; color:#7c3aed">S/ '+(d-h)+"</span></div>"}else v+='<div style="border-top:1px solid var(--border); padding-top:8px; display:flex; justify-content:space-between"><span style="font-weight:800; font-size:16px">Total</span><span style="font-weight:800; font-size:18px; color:#7c3aed">S/ '+d+"</span></div>";v+="</div>",v+='<button class="btn btn-block" id="btn-confirm-ticket" style="height:auto; padding:16px; border-radius:14px; font-weight:800; font-size:16px; background:linear-gradient(135deg,#7c3aed,#5b21b6); color:white; border:none">'+e("check",18)+" Confirmar compra</button>",v+="</div>",H(v),A(),setTimeout(()=>{const h=document.getElementById("qty-minus"),S=document.getElementById("qty-plus");h&&(h.onclick=()=>{C>1&&(C--,g())}),S&&(S.onclick=()=>{C<x.available&&(C++,g())});const w=document.getElementById("btn-group-price");w&&(w.onclick=()=>f("Solicitud enviada. Te contactaremos con el precio grupal.","success"));const k=document.getElementById("btn-confirm-ticket");k&&(k.onclick=()=>{const $=C>=10,m=C*x.price,u=$?Math.round(m*.85):m;ne({id:"evt-"+t.id,name:t.name,image:t.image,address:t.address||t.placeName,category:"Eventos"});const I=j.routeItems[j.routeItems.length-1];I&&(I.cost=u,I.category="Actividades"),M(),f("¡Entradas confirmadas! Añadido al recorrido.","success")})},100)}g()}r()}function va(){const p=document.getElementById("app"),a=new URLSearchParams(window.location.hash.split("?")[1]||"").get("id"),t=Te.find(y=>y.id===a);if(!t){p.innerHTML='<div class="screen" style="padding:40px;text-align:center"><h2>Guía no encontrada</h2></div>';return}const n=t.idealGroup||"Ideal para 2 personas",l=t.budget||"Medio",o=t.lang||"Español",b=t.days>1;p.innerHTML=`
    <div class="screen" style="background:var(--bg-body); padding-bottom:100px; min-height:100vh">
      <!-- Full Bleed Header Image -->
      <div style="position:relative; height:280px">
        <img src="${t.image}" style="width:100%; height:100%; object-fit:cover" />
        <div style="position:absolute; top:0; left:0; right:0; height:80px; background:linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)"></div>
        <button class="icon-btn float-btn" id="btn-back" style="top:16px; left:16px; background:rgba(255,255,255,0.8); backdrop-filter:blur(4px); color:black">${e("arrow-left",20)}</button>
        <div style="position:absolute; top:16px; right:16px; display:flex; gap:12px">
           <button class="icon-btn float-btn" id="btn-share-top" style="position:relative; background:rgba(255,255,255,0.8); backdrop-filter:blur(4px); color:black; inset:auto">${e("share-2",20)}</button>
           <button class="icon-btn float-btn" id="btn-save-top" style="position:relative; background:rgba(255,255,255,0.8); backdrop-filter:blur(4px); color:black; inset:auto">${e("bookmark",20)}</button>
        </div>
      </div>

      <!-- Main Content Block -->
      <div style="padding:24px 20px 0; background:var(--surface); border-radius:24px 24px 0 0; margin-top:-24px; position:relative; z-index:10; box-shadow:0 -4px 16px rgba(0,0,0,0.05)">
        <h1 style="font-size:22px; font-weight:800; font-family:var(--font-heading); margin-bottom:16px; line-height:1.2">${t.title}</h1>
        
        <!-- Author info -->
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px">
          ${O(t.authorAvatar,t.authorColor,40)}
          <div style="flex:1">
            <div style="font-weight:700; font-size:15px">${t.author}</div>
            <div style="font-size:12px; color:var(--green-primary); font-weight:600; display:flex; align-items:center; gap:4px">
              ${e("shield-check",14)} ${t.authorRole||"Viajero experto"}
            </div>
          </div>
          <button class="btn btn-outline btn-sm" id="btn-follow" style="padding:4px 16px; height:28px; border-radius:14px; font-size:12px; color:var(--green-primary); border-color:var(--green-primary)">Seguir</button>
        </div>

        <!-- Metrics Row -->
        <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px; padding-bottom:24px; border-bottom:1px solid var(--border-light)">
           <div class="chip" style="background:#f1f5f9; color:var(--text-primary); font-weight:600; border:none">${e("clock",14)} ${t.days} días</div>
           <div class="chip" style="background:#f1f5f9; color:var(--text-primary); font-weight:600; border:none">${e("map",14)} ${t.placesCount} lugares</div>
           <div class="chip" style="background:#f1f5f9; color:var(--text-primary); font-weight:600; border:none">${e("users",14)} ${n}</div>
           <div class="chip" style="background:#ecfdf5; color:var(--green-primary); font-weight:700; border:1px solid #a7f3d0">${l}</div>
           <div class="chip" style="background:#f1f5f9; color:var(--text-primary); font-weight:600; border:none">${e("globe",14)} ${o}</div>
        </div>

        <h3 style="font-size:16px; font-weight:800; font-family:var(--font-heading); margin-bottom:12px">Sobre esta guía</h3>
        <p style="font-size:14px; color:var(--text-primary); line-height:1.6; margin-bottom:32px">${t.intro}</p>

        <h3 style="font-size:16px; font-weight:800; font-family:var(--font-heading); margin-bottom:16px">Itinerario de la guía</h3>
        
        <div class="flex-col gap-24" style="margin-bottom:32px">
          ${r(t.places,b)}
        </div>

        ${t.tips&&t.tips.length>0?`
          <h3 style="font-size:16px; font-weight:800; font-family:var(--font-heading); margin-bottom:12px">${e("lightbulb",16)} Consejos del autor</h3>
          <ul style="padding-left:20px; color:var(--text-primary); font-size:14px; line-height:1.6; margin-bottom:24px">
            ${t.tips.map(y=>`<li style="margin-bottom:8px">${y}</li>`).join("")}
          </ul>
        `:""}

      </div>

      <!-- Sticky 3-Button Bar -->
      <div style="position:sticky; bottom:0; left:0; right:0; padding:10px 12px; background:white; border-top:1px solid var(--border-light); z-index:50; display:flex; gap:6px; box-shadow:0 -4px 16px rgba(0,0,0,0.05); width:100%; box-sizing:border-box">
        <button class="btn btn-outline" id="btn-copy-bottom" style="flex:1; min-width:0; padding:0; border-color:var(--border-light); color:var(--text-primary); font-size:11px; font-weight:700; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2px; height:44px; border-radius:10px">
          ${e("copy",16)} <span>Copiar</span>
        </button>
        <button class="btn btn-outline" id="btn-share-bottom" style="flex:1; min-width:0; padding:0; border-color:var(--border-light); color:var(--text-primary); font-size:11px; font-weight:700; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2px; height:44px; border-radius:10px">
          ${e("share-2",16)} <span>Compartir</span>
        </button>
        <button class="btn" id="btn-clone" style="flex:2; min-width:0; padding:0 8px; background:var(--green-primary); color:white; border:none; font-size:12px; font-weight:800; height:44px; display:flex; align-items:center; justify-content:center; gap:4px; border-radius:10px; white-space:nowrap">
          ${e("plus",16)} A recorrido
        </button>
      </div>

      <!-- Alert Dialog Overlay -->
      <div id="dialog-overlay" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:200; align-items:center; justify-content:center; padding:20px">
         <div style="background:white; border-radius:24px; padding:24px; width:100%; max-width:320px; text-align:center">
           <div style="width:56px; height:56px; border-radius:28px; background:#ecfdf5; color:var(--green-primary); display:flex; align-items:center; justify-content:center; margin:0 auto 16px">
             ${e("copy",28)}
           </div>
           <h3 style="font-size:18px; font-weight:800; margin-bottom:12px">¿Quieres importar estos lugares?</h3>
           <p style="font-size:14px; color:var(--text-secondary); margin-bottom:24px; line-height:1.5">
             Se importarán los ${t.placesCount} lugares de esta guía a tu recorrido actual en el mismo orden sugerido.
           </p>
           <div style="display:flex; flex-direction:column; gap:12px">
             <button class="btn btn-block" id="btn-confirm-clone" style="background:var(--green-primary); color:white; border:none">Sí, importar</button>
             <button class="btn btn-block btn-outline" id="btn-cancel-clone" style="border:none; color:var(--text-secondary)">Cancelar</button>
           </div>
         </div>
      </div>

    </div>
  `;function r(y,c){let x="",C=0;return x+=`<div style="position:relative">
             <div style="position:absolute; left:13px; top:24px; bottom:24px; width:2px; background:var(--green-primary); opacity:0.2"></div>`,y.forEach((g,d)=>{const z=re(g.id);z&&(c&&d%2===0&&(C++,x+=`
           <div style="margin:24px 0 16px; position:relative; z-index:2; display:flex; align-items:center; gap:8px">
             <div style="width:28px; height:28px; background:white; border:2px solid var(--green-primary); border-radius:14px; color:var(--green-primary); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:12px">D${C}</div>
             <h4 style="font-size:16px; font-weight:700; color:var(--green-primary)">Día ${C} · ${z.category} en ruta</h4>
           </div>
         `),x+=`
        <div style="display:flex; gap:16px; position:relative; margin-bottom:24px; z-index:2">
          <div style="width:28px; height:28px; border-radius:14px; background:var(--green-primary); color:white; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:13px; flex-shrink:0; margin-top:0">${d+1}</div>
          <div style="flex:1">
            <div style="display:flex; gap:12px; margin-bottom:12px">
              <img src="${z.image}" style="width:56px; height:56px; border-radius:12px; object-fit:cover; flex-shrink:0" />
              <div style="flex:1">
                 <div style="font-weight:800; font-size:15px; margin-bottom:2px">${z.name}</div>
                 <div style="font-size:13px; color:var(--text-secondary); margin-bottom:6px">${z.category}</div>
                 <div style="display:flex; gap:12px; font-size:12px; color:var(--text-primary); font-weight:600">
                    <span style="display:flex; align-items:center; gap:4px">${e("clock",14,"text-green-primary")} 9am - 12pm</span>
                    <span style="display:flex; align-items:center; gap:4px">${e("hourglass",14,"text-green-primary")} 2.5 h</span>
                 </div>
              </div>
            </div>
            
            ${g.note?`
              <div style="background:#f8fafc; border-left:4px solid var(--green-primary); border-radius:0 8px 8px 0; padding:12px; font-size:13px; color:var(--text-primary); font-style:italic; margin-bottom:12px">
                "${g.note}"
              </div>
            `:""}
            
            <button class="btn btn-sm" onclick="window.location.hash='#/place?id=${z.id}'" style="background:#ecfdf5; color:var(--green-primary); font-weight:700; padding:4px 12px; height:32px; font-size:12px; border:none; border-radius:16px; display:inline-flex; align-items:center; gap:6px">
              ${e("map-pin",14)} Ver lugar
            </button>
          </div>
        </div>
      `)}),x+="</div>",x}G(),A(),document.getElementById("btn-back").onclick=()=>window.history.back(),document.getElementById("btn-share-top").onclick=()=>f("Enlace copiado"),document.getElementById("btn-save-top").onclick=()=>f("Guía guardada en favoritos"),document.getElementById("btn-copy-bottom").onclick=()=>f("Ruta copiada al portapapeles"),document.getElementById("btn-share-bottom").onclick=()=>f("Abriendo opciones de compartir"),document.getElementById("btn-follow").onclick=function(){this.textContent=this.textContent==="Seguir"?"Siguiendo":"Seguir",this.style.background=this.textContent==="Siguiendo"?"var(--green-primary)":"transparent",this.style.color=this.textContent==="Siguiendo"?"white":"var(--green-primary)"};const s=document.getElementById("dialog-overlay");document.getElementById("btn-clone").onclick=()=>{s.style.display="flex"},document.getElementById("btn-cancel-clone").onclick=()=>{s.style.display="none"},document.getElementById("btn-confirm-clone").onclick=()=>{s.style.display="none";let y=0;t.places.forEach(c=>{const x=re(c.id);x&&!j.routeItems.find(C=>C.id===x.id)&&(ne({id:x.id,name:x.name,address:x.address,image:x.image,category:x.category}),y++)}),y>0?(f("Itinerario clonado exitosamente","success"),setTimeout(()=>E("/route-builder"),1e3)):f("Ya tienes estos lugares en tu ruta.")}}function ma(){const p=document.getElementById("app");let i=[],a=!1,t="",n="Pareja",l="Medio",o="Fin de semana",b="Mixta";function r(){p.innerHTML=`
      <div class="screen" style="background:#f8fafc; padding-bottom:100px; min-height:100vh">
        <!-- AppBar -->
        <div class="appbar" style="background:var(--surface); border-bottom:1px solid var(--border-light); z-index:10; position:sticky; top:0">
          <button class="appbar-btn" id="btn-back">${e("x",20)}</button>
          <span class="appbar-title">Crear guía</span>
          <button class="appbar-btn" id="btn-publish" style="color:${t&&a&&i.length>0?"var(--green-primary)":"var(--text-secondary)"}; font-weight:800; font-size:15px; width:auto; padding:0 16px; transition:color 0.2s">Publicar</button>
        </div>

        <div style="padding:20px">
          
          <!-- 1. Portada -->
          <div style="margin-bottom:24px">
            <h3 style="font-size:14px; font-weight:700; color:var(--text-secondary); margin-bottom:8px">1. PORTADA</h3>
            ${a?`
              <div style="position:relative; height:200px; border-radius:16px; overflow:hidden">
                <img src="https://picsum.photos/seed/newguide/600/400" style="width:100%; height:100%; object-fit:cover" />
                <button class="btn btn-sm" id="btn-change-cover" style="position:absolute; top:12px; right:12px; background:rgba(0,0,0,0.6); color:white; border:none; backdrop-filter:blur(4px)">Cambiar foto</button>
              </div>
            `:`
              <div id="btn-add-cover" style="height:200px; border:2px dashed #cbd5e1; border-radius:16px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--text-secondary); cursor:pointer; background:var(--surface)">
                 <div style="color:var(--text-secondary); margin-bottom:12px">${e("camera",32)}</div>
                 <span style="font-weight:700; font-size:15px">Añadir foto de portada</span>
              </div>
            `}
          </div>

          <!-- 2 & 3. Info General -->
          <div style="margin-bottom:24px">
            <h3 style="font-size:14px; font-weight:700; color:var(--text-secondary); margin-bottom:8px">2. INFORMACIÓN GENERAL</h3>
            <div style="background:var(--surface); border:1px solid var(--border-light); border-radius:16px; padding:16px">
              <input type="text" id="guide-title" value="${t}" placeholder="Título de la guía (Max 80)" maxlength="80" style="width:100%; border:none; border-bottom:1px solid var(--border-light); font-size:18px; font-weight:800; padding:8px 0; margin-bottom:4px; font-family:var(--font-heading)">
              <div style="text-align:right; font-size:11px; color:var(--text-secondary); margin-bottom:16px">${t.length}/80</div>
              
              <textarea id="guide-desc" placeholder="Introduce qué hace especial a este recorrido... (Max 500)" maxlength="500" style="width:100%; border:none; resize:none; font-size:14px; height:80px; font-family:inherit; color:var(--text-primary)"></textarea>
            </div>
          </div>

          <!-- 4. Selectores en Fila -->
          <div style="margin-bottom:24px">
            <h3 style="font-size:14px; font-weight:700; color:var(--text-secondary); margin-bottom:8px">3. DETALLES</h3>
            <div style="display:flex; gap:8px">
              <div style="flex:1; background:var(--surface); border:1px solid var(--border-light); border-radius:12px; padding:8px 12px; cursor:pointer" class="selector-btn">
                <div style="font-size:11px; color:var(--text-secondary)">Duración</div>
                <div style="font-size:13px; font-weight:700; display:flex; justify-content:space-between; align-items:center">${o} ${e("chevron-down",14)}</div>
              </div>
              <div style="flex:1; background:var(--surface); border:1px solid var(--border-light); border-radius:12px; padding:8px 12px; cursor:pointer" class="selector-btn">
                <div style="font-size:11px; color:var(--text-secondary)">Grupo</div>
                <div style="font-size:13px; font-weight:700; display:flex; justify-content:space-between; align-items:center">${n} ${e("chevron-down",14)}</div>
              </div>
              <div style="flex:1; background:var(--surface); border:1px solid var(--border-light); border-radius:12px; padding:8px 12px; cursor:pointer" class="selector-btn">
                <div style="font-size:11px; color:var(--text-secondary)">Presup.</div>
                <div style="font-size:13px; font-weight:700; display:flex; justify-content:space-between; align-items:center">${l} ${e("chevron-down",14)}</div>
              </div>
            </div>
          </div>

          <!-- 5. Categoría -->
          <div style="margin-bottom:32px">
            <h3 style="font-size:14px; font-weight:700; color:var(--text-secondary); margin-bottom:8px">4. CATEGORÍA PRINCIPAL</h3>
            <div class="scroll-x" style="display:flex; gap:8px">
              ${["Gastronomía","Aventura","Cultura","Naturaleza","Nocturna","Mixta"].map(y=>`
                <button class="chip cat-chip" data-cat="${y}" style="${b===y?"background:var(--green-primary); color:white; border-color:var(--green-primary)":"background:white"}">${y}</button>
              `).join("")}
            </div>
          </div>

          <!-- 6. Itinerario -->
          <div style="margin-bottom:32px">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px">
              <h3 style="font-size:14px; font-weight:700; color:var(--text-secondary)">5. LUGARES DEL ITINERARIO</h3>
            </div>
            
            <div class="flex-col gap-16" id="selected-list" style="margin-bottom:16px">
              ${i.map((y,c)=>`
                ${y.isDivider?`
                   <div style="display:flex; align-items:center; gap:12px; padding:8px 0">
                     <div style="flex:1; height:1px; background:var(--border-light)"></div>
                     <span style="font-weight:700; color:var(--green-primary); font-size:14px">${y.name}</span>
                     <div style="flex:1; height:1px; background:var(--border-light)"></div>
                     <button class="icon-btn btn-remove-divider" data-idx="${c}" style="color:var(--text-secondary)">${e("x",14)}</button>
                   </div>
                `:`
                  <div style="background:var(--surface); border:1px solid var(--border-light); border-radius:16px; display:flex; align-items:center; padding:12px; gap:12px">
                    <div style="color:#cbd5e1; cursor:grab">${e("grid",20)}</div>
                    <div style="width:24px; height:24px; border-radius:12px; background:var(--green-primary); color:white; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:12px">${c+1}</div>
                    <img src="${y.image}" style="width:48px; height:48px; border-radius:8px; object-fit:cover" />
                    <div style="flex:1; min-width:0">
                      <div style="font-weight:700; font-size:14px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis">${y.name}</div>
                      <div style="font-size:11px; color:var(--text-secondary)">${y.note?"Nota añadida":"Sin notas"}</div>
                    </div>
                    <!-- Lápiz que simula abrir bottom sheet -->
                    <button class="icon-btn btn-edit-note" data-idx="${c}" style="color:var(--green-primary); background:#ecfdf5; border-radius:16px; padding:6px">${e("edit-2",16)}</button>
                    <button class="icon-btn btn-remove" data-idx="${c}" style="color:#ef4444">${e("trash-2",16)}</button>
                  </div>
                `}
              `).join("")}
              ${i.length===0?`
                <div style="background:white; border:1px dashed #cbd5e1; border-radius:16px; padding:32px; text-align:center; color:var(--text-secondary)">
                  Aún no has añadido lugares al recorrido.
                </div>
              `:""}
            </div>

            <div style="display:flex; gap:12px">
              <button class="btn btn-outline" id="btn-add-search" style="flex:1; height:44px; border-color:var(--green-primary); color:var(--green-primary); font-weight:700; display:flex; align-items:center; justify-content:center; gap:6px">
                ${e("plus",16)} Añadir lugar
              </button>
              <button class="btn btn-outline" id="btn-add-divider" style="flex:1; height:44px; border-color:var(--border-light); color:var(--text-primary); font-weight:700; display:flex; align-items:center; justify-content:center; gap:6px">
                ${e("list",16)} Día nuevo
              </button>
            </div>
          </div>

          <!-- 7. Consejos -->
          <div style="margin-bottom:32px">
            <h3 style="font-size:14px; font-weight:700; color:var(--text-secondary); margin-bottom:8px">6. CONSEJOS GENERALES</h3>
            <div style="background:var(--surface); border:1px solid var(--border-light); border-radius:16px; padding:16px">
               <textarea placeholder="Ej. El transporte entre lugares sale más barato negociando directamente... (Max 1000)" maxlength="1000" style="width:100%; border:none; resize:none; font-size:14px; height:120px; font-family:inherit; color:var(--text-primary)"></textarea>
            </div>
          </div>

          <!-- 8. Toggles -->
          <div class="flex-col gap-16" style="margin-bottom:32px">
            <h3 style="font-size:14px; font-weight:700; color:var(--text-secondary)">7. PRIVACIDAD</h3>
            <div style="display:flex; justify-content:space-between; align-items:center; background:var(--surface); border:1px solid var(--border-light); border-radius:16px; padding:16px">
               <div>
                  <div style="font-weight:700; font-size:15px; margin-bottom:4px">Guía pública</div>
                  <div style="font-size:12px; color:var(--text-secondary)">Visible para la comunidad de Ica</div>
               </div>
               <div style="width:40px; height:24px; border-radius:12px; background:var(--green-primary); position:relative">
                 <div style="width:20px; height:20px; background:white; border-radius:10px; position:absolute; right:2px; top:2px"></div>
               </div>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; background:var(--surface); border:1px solid var(--border-light); border-radius:16px; padding:16px">
               <div>
                  <div style="font-weight:700; font-size:15px; margin-bottom:4px">Permitir clonado</div>
                  <div style="font-size:12px; color:var(--text-secondary)">Otros pueden iniciar sus rutas desde aquí</div>
               </div>
               <div style="width:40px; height:24px; border-radius:12px; background:var(--green-primary); position:relative">
                 <div style="width:20px; height:20px; background:white; border-radius:10px; position:absolute; right:2px; top:2px"></div>
               </div>
            </div>
          </div>

        </div>

        <!-- Search Overlay (Hidden) -->
        <div id="search-overlay" style="display:none; position:fixed; inset:0; background:var(--surface); z-index:100; flex-direction:column">
           <div class="appbar" style="border-bottom:1px solid var(--border-light)">
              <button class="appbar-btn" id="btn-close-search">${e("arrow-left",20)}</button>
              <div style="flex:1; position:relative; margin-right:16px">
                <input type="text" id="search-place-input" placeholder="Buscar lugares..." style="width:100%; border:none; background:#f1f5f9; border-radius:16px; height:36px; padding:0 16px; font-size:14px">
              </div>
           </div>
           <div id="search-results" style="flex:1; overflow-y:auto; padding:16px">
             <!-- Simulated pre-populated list based on places mock -->
             ${J.filter(y=>!y.hidden).slice(0,10).map(y=>`
                <div class="search-result" data-id="${y.id}" style="padding:12px; border-bottom:1px solid var(--border-light); display:flex; align-items:center; gap:12px; cursor:pointer">
                  <img src="${y.image}" style="width:40px; height:40px; border-radius:8px; object-fit:cover">
                  <div style="flex:1">
                    <div style="font-weight:700; font-size:14px">${y.name}</div>
                    <div style="font-size:12px; color:var(--text-secondary)">${y.category}</div>
                  </div>
                  <button class="btn btn-sm btn-outline" style="pointer-events:none; padding:4px 12px; height:28px; font-size:12px; border-radius:14px">${e("plus",14)}</button>
                </div>
             `).join("")}
           </div>
        </div>

        <!-- Fake Edit Note Bottom Sheet -->
        <div id="note-sheet" style="position:fixed; bottom:0; left:0; right:0; background:white; border-radius:24px 24px 0 0; padding:20px; z-index:100; transform:translateY(100%); transition:transform 0.3s; box-shadow:0 -10px 40px rgba(0,0,0,0.2)">
           <div style="width:40px; height:4px; background:var(--border-light); border-radius:2px; margin:0 auto 16px"></div>
           <h3 style="font-size:16px; font-weight:800; margin-bottom:16px">Editar detalles de parada</h3>
           <textarea placeholder="Tu consejo personal para este lugar (Opcional)..." style="width:100%; border:1px solid var(--border-light); border-radius:12px; padding:12px; height:80px; resize:none; margin-bottom:16px; font-family:inherit; font-size:14px"></textarea>
           <div style="display:flex; gap:12px; margin-bottom:24px">
              <input type="text" placeholder="Horario" style="flex:1; height:44px; border:1px solid var(--border-light); border-radius:12px; padding:0 12px">
              <input type="text" placeholder="Duración est." style="flex:1; height:44px; border:1px solid var(--border-light); border-radius:12px; padding:0 12px">
           </div>
           <button class="btn btn-block" id="btn-save-note" style="background:var(--green-primary); color:white; border:none; height:48px; font-weight:700">Guardar cambios</button>
        </div>
        <div id="sheet-overlay" style="position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:90; opacity:0; pointer-events:none; transition:opacity 0.3s"></div>

      </div>
    `,A(),s()}function s(){document.getElementById("btn-back").onclick=()=>window.history.back();const y=document.getElementById("btn-add-cover"),c=document.getElementById("btn-change-cover");y&&(y.onclick=()=>{a=!0,r()}),c&&(c.onclick=()=>{f("Abriendo galería...")}),document.getElementById("guide-title").oninput=g=>{t=g.target.value;const d=document.getElementById("btn-publish");d&&(d.style.color=t&&a&&i.length>0?"var(--green-primary)":"var(--text-secondary)")},document.querySelectorAll(".cat-chip").forEach(g=>{g.onclick=()=>{b=g.dataset.cat,r()}}),document.querySelectorAll(".selector-btn").forEach(g=>{g.onclick=()=>f("Abriendo opciones...")}),document.getElementById("btn-add-search").onclick=()=>{document.getElementById("search-overlay").style.display="flex"},document.getElementById("btn-close-search").onclick=()=>{document.getElementById("search-overlay").style.display="none"},document.querySelectorAll(".search-result").forEach(g=>{g.onclick=()=>{const d=J.find(z=>z.id===g.dataset.id);d&&(i.push({id:d.id,name:d.name,image:d.image,note:"",isDivider:!1}),document.getElementById("search-overlay").style.display="none",r())}}),document.getElementById("btn-add-divider").onclick=()=>{i.push({name:"Día Completo",isDivider:!0}),r()},document.querySelectorAll(".btn-remove").forEach(g=>{g.onclick=()=>{i.splice(parseInt(g.dataset.idx),1),r()}}),document.querySelectorAll(".btn-remove-divider").forEach(g=>{g.onclick=()=>{i.splice(parseInt(g.dataset.idx),1),r()}});const x=document.getElementById("note-sheet"),C=document.getElementById("sheet-overlay");document.querySelectorAll(".btn-edit-note").forEach(g=>{g.onclick=()=>{x.style.transform="translateY(0)",C.style.opacity="1",C.style.pointerEvents="auto"}}),document.getElementById("btn-save-note").onclick=()=>{x.style.transform="translateY(100%)",C.style.opacity="0",C.style.pointerEvents="none",f("Detalles guardados")},C.onclick=()=>{x.style.transform="translateY(100%)",C.style.opacity="0",C.style.pointerEvents="none"},document.getElementById("btn-publish").onclick=()=>{if(!t||!a||i.length===0){f("Completa título, portada y lugares.");return}const g=document.getElementById("btn-publish");g.innerHTML='<div style="width:16px; height:16px; border:2px solid var(--green-primary); border-top-color:transparent; border-radius:50%; animation:spin 1s linear infinite"></div>',setTimeout(()=>{Te.unshift({id:"g"+Date.now(),title:t,author:"Tu Nombre",authorRole:"Viajero",authorAvatar:"",authorColor:"#10b981",placesCount:i.filter(d=>!d.isDivider).length,days:1,views:0,saves:0,image:"https://picsum.photos/seed/newg/600/400",intro:document.getElementById("guide-desc").value||"",places:i.filter(d=>!d.isDivider).map(d=>({id:d.id,note:"Nota personal de este lugar."})),tips:[],idealGroup:n,budget:l,lang:"Español"}),f("Tu guía fue publicada y ya está disponible para la comunidad","success"),E("/reels")},1e3)}}r()}function xa(){const p=document.getElementById("app");let i=[...st];function a(){p.innerHTML=`
      <div class="screen" style="background:var(--bg-body); padding-bottom:20px; min-height:100vh">
        <div class="appbar" style="background:var(--surface); border-bottom:1px solid var(--border-light); position:sticky; top:0; z-index:50">
          <button class="appbar-btn" id="btn-back">${e("arrow-left",20)}</button>
          <span class="appbar-title">Notificaciones</span>
          <button class="appbar-btn" style="opacity:0; pointer-events:none">${e("arrow-left",20)}</button>
        </div>

        <div style="padding:16px; background:var(--surface); display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--border-light)">
          <span style="font-weight:700; font-size:16px">Recientes</span>
          <button class="btn btn-sm" id="btn-mark-read" style="background:transparent; color:var(--green-primary); font-weight:700; border:none; padding:4px 8px; font-size:13px">Marcar todas como leídas</button>
        </div>

        <div class="flex-col" style="background:var(--surface)">
          ${i.map(n=>{const l=n.userId?Ve(n.userId):{name:"Comunidad Ica",avatar:"https://picsum.photos/seed/icapp/100/100",color:"#7c3aed",initials:"CI"},o=!n.read;return`
              <div class="notif-item" data-id="${n.id}" style="padding:16px; display:flex; gap:12px; align-items:flex-start; border-bottom:1px solid var(--border-light); background:${o?"#f0fdf4":"var(--surface)"}; cursor:pointer; transition:background 0.2s">
                ${O(l.avatar?"":l.initials,l.color,48,l.avatar)}
                <div style="flex:1; display:flex; flex-direction:column; justify-content:center; min-height:48px">
                  <div style="font-size:14px; line-height:1.4; color:var(--text-primary)">
                    <span style="font-weight:700">${l.name}</span> <span style="color:var(--text-secondary)">${n.action}</span>
                  </div>
                  <div style="font-size:12px; color:var(--text-secondary); margin-top:4px">${n.time}</div>
                </div>
                ${n.relatedImage?`
                  <img src="${n.relatedImage}" style="width:48px; height:48px; border-radius:8px; object-fit:cover; flex-shrink:0; border:1px solid var(--border-light)" />
                `:""}
              </div>
            `}).join("")}
          ${i.length===0?`
            <div style="padding:40px 20px; text-align:center; color:var(--text-secondary)">
              ${e("bell-off",48,"text-secondary")}
              <h3 style="margin-top:16px; color:var(--text-primary)">No tienes notificaciones</h3>
              <p>Aquí aparecerá la actividad de la comunidad.</p>
            </div>
          `:""}
        </div>
      </div>
    `,A(),t()}function t(){document.getElementById("btn-back").onclick=()=>window.history.back(),document.getElementById("btn-mark-read").onclick=()=>{i.forEach(n=>n.read=!0),a()},document.querySelectorAll(".notif-item").forEach(n=>{n.onclick=()=>{const l=i.find(o=>o.id===n.dataset.id);l&&(l.read=!0,l.type==="follow"?E("/perfil-publico?id="+(l.userId||"1")):(l.type==="community"||l.type==="interaction")&&E("/reels"))}})}a()}function ba(){const p=document.getElementById("app"),a=new URLSearchParams(window.location.hash.split("?")[1]||"").get("id")||"1",t=Ve(a);if(!t){p.innerHTML='<div class="screen" style="padding:40px;text-align:center"><h2>Usuario no encontrado</h2><button onclick="window.history.back()">Volver</button></div>';return}let n="reels",l=!1;const o=Ee.filter(c=>c.username===t.username),b=Te.filter(c=>c.author===t.name);function r(){p.innerHTML=`
      <div class="screen" style="background:var(--bg-body); padding-bottom:40px; min-height:100vh">
        <div class="appbar" style="background:transparent; border:none; position:absolute; top:0; left:0; right:0; z-index:10">
          <button class="appbar-btn" id="btn-back" style="background:rgba(255,255,255,0.8); backdrop-filter:blur(4px); color:black; border-radius:20px">${e("arrow-left",20)}</button>
          <span class="appbar-title"></span>
          <button class="appbar-btn" id="btn-options" style="background:rgba(255,255,255,0.8); backdrop-filter:blur(4px); color:black; border-radius:20px">${e("more-vertical",20)}</button>
        </div>

        <!-- Profile Header -->
        <div style="padding:80px 20px 24px; background:var(--surface); display:flex; flex-direction:column; align-items:center; text-align:center; border-bottom:1px solid var(--border-light)">
          ${O(t.avatar?"":t.initials,t.color,88,t.avatar)}
          <h2 style="font-size:20px; font-weight:800; margin-top:16px; display:flex; align-items:center; justify-content:center; gap:6px">
            ${t.name}
            ${t.roleName?`<span style="color:var(--green-primary)" title="${t.roleName}">${e("shield-check",18)}</span>`:""}
          </h2>
          <div style="font-size:14px; color:var(--text-secondary); margin-top:4px">${t.username}</div>
          
          <div style="display:flex; justify-content:center; gap:32px; margin-top:20px; width:100%">
            <div style="display:flex; flex-direction:column; align-items:center">
              <span style="font-size:18px; font-weight:800">${t.followers}</span>
              <span style="font-size:12px; color:var(--text-secondary)">Seguidores</span>
            </div>
            <div style="display:flex; flex-direction:column; align-items:center">
              <span style="font-size:18px; font-weight:800">${t.following}</span>
              <span style="font-size:12px; color:var(--text-secondary)">Siguiendo</span>
            </div>
            <div style="display:flex; flex-direction:column; align-items:center">
              <span style="font-size:18px; font-weight:800">${t.guidesPublished+t.placesPublished}</span>
              <span style="font-size:12px; color:var(--text-secondary)">Aportes</span>
            </div>
          </div>

          <button id="btn-toggle-follow" class="btn btn-block" style="margin-top:24px; height:40px; font-size:14px; font-weight:700; ${l?"background:var(--bg-body); color:var(--text-primary); border:1px solid var(--border-light)":"background:var(--green-primary); color:white; border:none"}">
            ${l?"Siguiendo":"Seguir"}
          </button>
        </div>

        <!-- Tabs -->
        <div style="display:flex; background:var(--surface); border-bottom:1px solid var(--border-light); padding:0 16px; position:sticky; top:0; z-index:20">
          <button class="explore-tab ${n==="reels"?"active":""}" data-tab="reels" style="flex:1; text-align:center; padding:16px 0">Reels (${o.length})</button>
          <button class="explore-tab ${n==="guias"?"active":""}" data-tab="guias" style="flex:1; text-align:center; padding:16px 0">Guías (${b.length})</button>
          <button class="explore-tab ${n==="favoritos"?"active":""}" data-tab="favoritos" style="flex:1; text-align:center; padding:16px 0">Favoritos (5)</button>
        </div>

        <!-- Local Validado Recommendation Cards -->
        ${t.roleName==="Local Verificado"||t.roleName==="Local Experto"?`
          <div style="padding:20px 16px 0">
            <h3 style="font-size:15px; font-weight:800; margin-bottom:12px; display:flex; align-items:center; gap:6px; color:var(--text-primary)">
               ${e("award",16,"text-green-primary")} Recomendaciones del Experto
            </h3>
            <div class="scroll-x" style="display:flex; gap:12px; padding-bottom:12px">
              ${[1,2,4].map(c=>{const x=re(String(c));return x?`
                  <div class="card-flat" onclick="window.location.hash='#/place?id=${x.id}'" style="width:160px; flex-shrink:0; padding:0; border-radius:12px; overflow:hidden; border:1px solid var(--border-light); cursor:pointer">
                    <img src="${x.image}" style="width:100%; height:100px; object-fit:cover" />
                    <div style="padding:8px 12px">
                      <div style="font-size:13px; font-weight:700; color:var(--text-primary); white-space:nowrap; text-overflow:ellipsis; overflow:hidden">${x.name}</div>
                      <div style="font-size:11px; color:var(--text-secondary); margin-top:2px">${x.category}</div>
                    </div>
                  </div>
                `:""}).join("")}
            </div>
          </div>
        `:""}

        <!-- Tab Content -->
        <div style="padding:16px">
          ${s()}
        </div>
      </div>
    `,G(),A(),y()}function s(){if(n==="reels")return o.length===0?'<div style="text-align:center; padding:40px 20px; color:var(--text-secondary)">Aún no ha publicado reels.</div>':`
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:2px">
          ${o.map(c=>`
            <div style="aspect-ratio:9/16; background:var(--surface); position:relative; overflow:hidden; cursor:pointer" onclick="window.location.hash='#/reels'">
              <img src="${c.image}" style="width:100%; height:100%; object-fit:cover" />
              <div style="position:absolute; bottom:4px; left:4px; font-size:11px; color:white; font-weight:700; display:flex; align-items:center; gap:2px; text-shadow:0 1px 2px rgba(0,0,0,0.8)">
                ${e("play",10)} ${c.views||c.likes}
              </div>
            </div>
          `).join("")}
        </div>
      `;if(n==="guias")return b.length===0?'<div style="text-align:center; padding:40px 20px; color:var(--text-secondary)">Aún no ha publicado guías.</div>':`
        <div class="flex-col gap-16">
          ${b.map(c=>`
            <div class="card-flat" onclick="window.location.hash='#/guia-detail?id=${c.id}'" style="padding:0; border-radius:16px; overflow:hidden; border:1px solid var(--border-light); cursor:pointer">
              <img src="${c.image}" style="width:100%; height:120px; object-fit:cover" />
              <div style="padding:16px">
                <h3 style="font-size:15px; font-weight:800; margin-bottom:6px text-overflow:ellipsis">${c.title}</h3>
                <div style="font-size:12px; color:var(--text-secondary); display:flex; gap:12px">
                  <span>${c.placesCount} lugares</span>
                  <span>${c.days} días</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      `;if(n==="favoritos")return'<div style="text-align:center; padding:40px 20px; color:var(--text-secondary)">Los guardados de este usuario son privados.</div>'}function y(){document.getElementById("btn-back").onclick=()=>window.history.back(),document.getElementById("btn-toggle-follow").onclick=()=>{l=!l,t.followers+=l?1:-1,r(),f(l?"Ahora sigues a "+t.name:"Dejaste de seguir a "+t.name)},document.querySelectorAll("[data-tab]").forEach(c=>{c.onclick=()=>{n=c.dataset.tab,r()}}),document.getElementById("btn-options").onclick=()=>{f("Opciones de perfil: Bloquear, Reportar...")}}r()}R("/splash",$t);R("/welcome",kt);R("/login",zt);R("/register-1",Et);R("/register-2",Ct);R("/register-3a",St);R("/register-3b",It);R("/password-recovery",At);R("/onboarding",jt);R("/home",Mt);R("/explore",Dt);R("/place",Rt);R("/event",qt);R("/route-builder",Se);R("/reels",Ft);R("/publish-reel",Nt);R("/profile",Vt);R("/publish-place",Gt);R("/biz-dashboard",Ke);R("/biz-edit",Ot);R("/biz-reservations",Ut);R("/biz-create-event",_t);R("/biz-promotions",Jt);R("/biz-analytics",Zt);R("/biz-activity",Ze);R("/admin-dashboard",Xt);R("/admin-places",Ue);R("/admin-users",_e);R("/admin-reports",Oe);R("/admin-config",Wt);R("/admin-stats",Xe);R("/admin-audit",We);R("/settings",Yt);R("/biz-settings",Kt);R("/user-promotions",Je);R("/explore-hidden",ea);R("/gastronomia",ta);R("/gastronomia-detail",aa);R("/hospedaje",ia);R("/hospedaje-detail",oa);R("/experiencias",sa);R("/experiencias-detail",na);R("/transporte",ra);R("/servicios",la);R("/servicios-detail",da);R("/vida-nocturna",ca);R("/vida-nocturna-detail",pa);R("/eventos",ga);R("/eventos-detail",ua);R("/guia-detail",va);R("/crear-guia",ma);R("/comunidad-notificaciones",xa);R("/perfil-publico",ba);wt();
