var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Export_Output_1 = new ol.format.GeoJSON();
var features_Export_Output_1 = format_Export_Output_1.readFeatures(json_Export_Output_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_1.addFeatures(features_Export_Output_1);
var lyr_Export_Output_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_1, 
                style: style_Export_Output_1,
                interactive: true,
                title: '<img src="styles/legend/Export_Output_1.png" /> Export_Output'
            });
var format_SOLD_2 = new ol.format.GeoJSON();
var features_SOLD_2 = format_SOLD_2.readFeatures(json_SOLD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLD_2.addFeatures(features_SOLD_2);
var lyr_SOLD_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SOLD_2, 
                style: style_SOLD_2,
                interactive: true,
                title: '<img src="styles/legend/SOLD_2.png" /> SOLD'
            });
var format_Export_Output_2_3 = new ol.format.GeoJSON();
var features_Export_Output_2_3 = format_Export_Output_2_3.readFeatures(json_Export_Output_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_2_3.addFeatures(features_Export_Output_2_3);
var lyr_Export_Output_2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Export_Output_2_3, 
                style: style_Export_Output_2_3,
                interactive: true,
                title: '<img src="styles/legend/Export_Output_2_3.png" /> Export_Output_2'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Export_Output_1.setVisible(true);lyr_SOLD_2.setVisible(true);lyr_Export_Output_2_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Export_Output_1,lyr_SOLD_2,lyr_Export_Output_2_3];
lyr_Export_Output_1.set('fieldAliases', {'RefName': 'RefName', 'TxtMemo': 'TxtMemo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SOLD_2.set('fieldAliases', {'id': 'id', });
lyr_Export_Output_2_3.set('fieldAliases', {});
lyr_Export_Output_1.set('fieldImages', {'RefName': 'TextEdit', 'TxtMemo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SOLD_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Export_Output_2_3.set('fieldImages', {});
lyr_Export_Output_1.set('fieldLabels', {'RefName': 'header label', 'TxtMemo': 'header label', 'Shape_Leng': 'header label', 'Shape_Area': 'header label', });
lyr_SOLD_2.set('fieldLabels', {'id': 'no label', });
lyr_Export_Output_2_3.set('fieldLabels', {});
lyr_Export_Output_2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});