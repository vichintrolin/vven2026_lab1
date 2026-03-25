var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_casa_UTM8418S_1 = new ol.format.GeoJSON();
var features_casa_UTM8418S_1 = format_casa_UTM8418S_1.readFeatures(json_casa_UTM8418S_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_casa_UTM8418S_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_casa_UTM8418S_1.addFeatures(features_casa_UTM8418S_1);
cluster_casa_UTM8418S_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_casa_UTM8418S_1
});
var lyr_casa_UTM8418S_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_casa_UTM8418S_1, 
                style: style_casa_UTM8418S_1,
                popuplayertitle: 'casa_UTM8418S',
                interactive: true,
                title: '<img src="styles/legend/casa_UTM8418S_1.png" /> casa_UTM8418S'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_casa_UTM8418S_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_casa_UTM8418S_1];
lyr_casa_UTM8418S_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'T_pregunt': 'T_pregunt', 'N°_preg_i': 'N°_preg_i', 'N°_preg_c': 'N°_preg_c', 'VIDEO': 'VIDEO', });
lyr_casa_UTM8418S_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'T_pregunt': 'TextEdit', 'N°_preg_i': 'TextEdit', 'N°_preg_c': 'TextEdit', 'VIDEO': 'TextEdit', });
lyr_casa_UTM8418S_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'T_pregunt': 'no label', 'N°_preg_i': 'no label', 'N°_preg_c': 'no label', 'VIDEO': 'no label', });
lyr_casa_UTM8418S_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});