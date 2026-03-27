import fs from 'fs';
import * as d3 from 'd3-geo';

const geojson = JSON.parse(fs.readFileSync('peru.geojson', 'utf8'));

// Create a projection fitting Peru's bounds
const projection = d3.geoMercator().fitSize([500, 700], geojson);
const pathGenerator = d3.geoPath().projection(projection);

let svgPaths = '';

geojson.features.forEach(feature => {
  const name = feature.properties.NOMBDEP || feature.properties.name || 'Unknown';
  // Capitalize properly to match our JS logic:
  const formatName = name.charAt(0) + name.slice(1).toLowerCase();
  
  // Quick fix for accents to match our depts array: 
  const deptNameMap = {
    'Amazonas': 'Amazonas', 'Ancash': 'Áncash', 'Apurimac': 'Apurímac', 'Arequipa': 'Arequipa',
    'Ayacucho': 'Ayacucho', 'Cajamarca': 'Cajamarca', 'Callao': 'Callao', 'Cusco': 'Cusco',
    'Huancavelica': 'Huancavelica', 'Huanuco': 'Huánuco', 'Ica': 'Ica', 'Junin': 'Junín',
    'La libertad': 'La Libertad', 'Lambayeque': 'Lambayeque', 'Lima': 'Lima', 'Loreto': 'Loreto',
    'Madre de dios': 'Madre de Dios', 'Moquegua': 'Moquegua', 'Pasco': 'Pasco', 'Piura': 'Piura',
    'Puno': 'Puno', 'San martin': 'San Martín', 'Tacna': 'Tacna', 'Tumbes': 'Tumbes', 'Ucayali': 'Ucayali'
  };

  const cleanName = deptNameMap[formatName] || formatName;

  const d = pathGenerator(feature);
  svgPaths += `<path class="dept-path" data-dept="${cleanName}" d="${d}" title="${cleanName}"></path>\n`;
});

const regionMapCode = fs.readFileSync('src/components/RegionMap.js', 'utf8');

const newCode = regionMapCode.replace(
  /<svg version="1\.1" id="peru".*?<\/svg>/s,
  `<svg version="1.1" id="peru" viewBox="0 0 500 700" style="enable-background:new 0 0 500 700; width: 100%; height: auto;" xml:space="preserve">\n${svgPaths}</svg>`
);

fs.writeFileSync('src/components/RegionMap.js', newCode);
console.log('SVG replaced successfully.');
