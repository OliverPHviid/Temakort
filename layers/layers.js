var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Frededeomrderomridsafkommunekommuneplan_1 = new ol.format.GeoJSON();
var features_Frededeomrderomridsafkommunekommuneplan_1 = format_Frededeomrderomridsafkommunekommuneplan_1.readFeatures(json_Frededeomrderomridsafkommunekommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrderomridsafkommunekommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrderomridsafkommunekommuneplan_1.addFeatures(features_Frededeomrderomridsafkommunekommuneplan_1);
var lyr_Frededeomrderomridsafkommunekommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrderomridsafkommunekommuneplan_1, 
                style: style_Frededeomrderomridsafkommunekommuneplan_1,
                popuplayertitle: 'Fredede områder + omrids af kommune — kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/Frededeomrderomridsafkommunekommuneplan_1.png" /> Fredede områder + omrids af kommune — kommuneplan'
            });
var format_FrededeomrderomridsafkommuneFrededeomrder_2 = new ol.format.GeoJSON();
var features_FrededeomrderomridsafkommuneFrededeomrder_2 = format_FrededeomrderomridsafkommuneFrededeomrder_2.readFeatures(json_FrededeomrderomridsafkommuneFrededeomrder_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrededeomrderomridsafkommuneFrededeomrder_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrededeomrderomridsafkommuneFrededeomrder_2.addFeatures(features_FrededeomrderomridsafkommuneFrededeomrder_2);
var lyr_FrededeomrderomridsafkommuneFrededeomrder_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrededeomrderomridsafkommuneFrededeomrder_2, 
                style: style_FrededeomrderomridsafkommuneFrededeomrder_2,
                popuplayertitle: 'Fredede områder + omrids af kommune — Fredede områder',
                interactive: false,
    title: 'Fredede områder + omrids af kommune — Fredede områder<br />\
    <img src="styles/legend/FrededeomrderomridsafkommuneFrededeomrder_2_0.png" /> Damhuså<br />\
    <img src="styles/legend/FrededeomrderomridsafkommuneFrededeomrder_2_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/FrededeomrderomridsafkommuneFrededeomrder_2_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/FrededeomrderomridsafkommuneFrededeomrder_2_3.png" /> Vestvolden<br />\
    <img src="styles/legend/FrededeomrderomridsafkommuneFrededeomrder_2_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/FrededeomrderomridsafkommuneFrededeomrder_2_5.png" /> <br />' });
var format_lokalplaner_hvidovrelokalplaner_3 = new ol.format.GeoJSON();
var features_lokalplaner_hvidovrelokalplaner_3 = format_lokalplaner_hvidovrelokalplaner_3.readFeatures(json_lokalplaner_hvidovrelokalplaner_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lokalplaner_hvidovrelokalplaner_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lokalplaner_hvidovrelokalplaner_3.addFeatures(features_lokalplaner_hvidovrelokalplaner_3);
var lyr_lokalplaner_hvidovrelokalplaner_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lokalplaner_hvidovrelokalplaner_3, 
                style: style_lokalplaner_hvidovrelokalplaner_3,
                popuplayertitle: 'lokalplaner_hvidovre — lokalplaner',
                interactive: true,
    title: 'lokalplaner_hvidovre — lokalplaner<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_0.png" /> 1012930<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_1.png" /> 1024399<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_2.png" /> 1053515<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_3.png" /> 1054617<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_4.png" /> 1061002<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_5.png" /> 1061022<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_6.png" /> 1061038<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_7.png" /> 1061103<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_8.png" /> 1061140<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_9.png" /> 1061206<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_10.png" /> 1061209<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_11.png" /> 1061210<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_12.png" /> 1061704<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_13.png" /> 1061715<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_14.png" /> 1061718<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_15.png" /> 1061734<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_16.png" /> 1061739<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_17.png" /> 1061746<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_18.png" /> 1061753<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_19.png" /> 1061756<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_20.png" /> 1061757<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_21.png" /> 1061824<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_22.png" /> 1061828<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_23.png" /> 1061829<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_24.png" /> 1061833<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_25.png" /> 1062026<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_26.png" /> 1062080<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_27.png" /> 1062111<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_28.png" /> 1062117<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_29.png" /> 1062118<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_30.png" /> 1062121<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_31.png" /> 1070479<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_32.png" /> 1071381<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_33.png" /> 1074662<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_34.png" /> 1074664<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_35.png" /> 1074665<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_36.png" /> 1074675<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_37.png" /> 1075214<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_38.png" /> 1075219<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_39.png" /> 1075387<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_40.png" /> 1075393<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_41.png" /> 1075550<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_42.png" /> 1075552<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_43.png" /> 1075553<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_44.png" /> 1075577<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_45.png" /> 1075593<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_46.png" /> 1075598<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_47.png" /> 1075609<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_48.png" /> 1075667<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_49.png" /> 1075669<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_50.png" /> 1075682<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_51.png" /> 1075695<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_52.png" /> 1075708<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_53.png" /> 1075710<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_54.png" /> 1075718<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_55.png" /> 1075749<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_56.png" /> 1075751<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_57.png" /> 1075752<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_58.png" /> 1075779<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_59.png" /> 1075795<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_60.png" /> 1075800<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_61.png" /> 1075801<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_62.png" /> 1075815<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_63.png" /> 1075877<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_64.png" /> 1075891<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_65.png" /> 1075893<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_66.png" /> 1075897<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_67.png" /> 1075900<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_68.png" /> 1075902<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_69.png" /> 1075905<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_70.png" /> 1075906<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_71.png" /> 1075907<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_72.png" /> 1075908<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_73.png" /> 1076003<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_74.png" /> 1076004<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_75.png" /> 1076010<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_76.png" /> 1076019<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_77.png" /> 1076041<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_78.png" /> 1076064<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_79.png" /> 1076086<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_80.png" /> 1076094<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_81.png" /> 1076107<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_82.png" /> 1076114<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_83.png" /> 1076115<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_84.png" /> 1076126<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_85.png" /> 1076129<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_86.png" /> 1076287<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_87.png" /> 1076379<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_88.png" /> 1076865<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_89.png" /> 1076868<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_90.png" /> 1076874<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_91.png" /> 1076892<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_92.png" /> 1076901<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_93.png" /> 1076902<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_94.png" /> 1076905<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_95.png" /> 1076939<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_96.png" /> 1076943<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_97.png" /> 1076961<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_98.png" /> 1076968<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_99.png" /> 1077070<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_100.png" /> 1077082<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_101.png" /> 1077085<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_102.png" /> 1077086<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_103.png" /> 1077558<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_104.png" /> 1077565<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_105.png" /> 1077899<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_106.png" /> 1078061<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_107.png" /> 1078066<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_108.png" /> 1078074<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_109.png" /> 1078075<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_110.png" /> 1078077<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_111.png" /> 1078080<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_112.png" /> 1078184<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_113.png" /> 1078227<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_114.png" /> 1078229<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_115.png" /> 1078231<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_116.png" /> 1078248<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_117.png" /> 1078270<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_118.png" /> 1078272<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_119.png" /> 1078274<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_120.png" /> 1078275<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_121.png" /> 1078279<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_122.png" /> 1078282<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_123.png" /> 1078288<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_124.png" /> 1078289<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_125.png" /> 1078346<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_126.png" /> 1078447<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_127.png" /> 1078464<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_128.png" /> 1078465<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_129.png" /> 1078468<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_130.png" /> 1079122<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_131.png" /> 1079123<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_132.png" /> 1079666<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_133.png" /> 1079671<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_134.png" /> 1081381<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_135.png" /> 1084485<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_136.png" /> 1084491<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_137.png" /> 1084492<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_138.png" /> 1103656<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_139.png" /> 1103890<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_140.png" /> 1104764<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_141.png" /> 1109560<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_142.png" /> 1328884<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_143.png" /> 1359142<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_144.png" /> 1359145<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_145.png" /> 1369547<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_146.png" /> 1374739<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_147.png" /> 1792902<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_148.png" /> 1869505<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_149.png" /> 2136388<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_150.png" /> 2186492<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_151.png" /> 2269185<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_152.png" /> 2641209<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_153.png" /> 2702963<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_154.png" /> 2702964<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_155.png" /> 2702965<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_156.png" /> 2702968<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_157.png" /> 2702969<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_158.png" /> 2702993<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_159.png" /> 2702994<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_160.png" /> 2969850<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_161.png" /> 2978253<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_162.png" /> 3016098<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_163.png" /> 3016099<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_164.png" /> 3016102<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_165.png" /> 3016103<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_166.png" /> 3016105<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_167.png" /> 3186913<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_168.png" /> 3188617<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_169.png" /> 3188619<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_170.png" /> 3812280<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_171.png" /> 3964626<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_172.png" /> 3964627<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_173.png" /> 3964812<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_174.png" /> 9419556<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_175.png" /> 9431987<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_176.png" /> 9431989<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_177.png" /> 9431990<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_178.png" /> 9431991<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_179.png" /> 9431992<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_180.png" /> 9431993<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_181.png" /> 9431994<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_182.png" /> 9690454<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_183.png" /> 9717080<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_184.png" /> 9731022<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_185.png" /> 9732835<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_186.png" /> 9732862<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_187.png" /> 9753254<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_188.png" /> 10353005<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_189.png" /> 10456675<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_190.png" /> 10478656<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_191.png" /> 10840028<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_192.png" /> 10900534<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_193.png" /> 10906517<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_194.png" /> 10985743<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_195.png" /> 11021467<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_196.png" /> 11126774<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_197.png" /> 11159816<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_198.png" /> 11176926<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_199.png" /> 11185105<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_200.png" /> 11198619<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_201.png" /> 11228193<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_202.png" /> 11240317<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_203.png" /> 11252419<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_204.png" /> 11307736<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_205.png" /> 11307768<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_206.png" /> 11317442<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_207.png" /> 11347122<br />\
    <img src="styles/legend/lokalplaner_hvidovrelokalplaner_3_208.png" /> <br />' });
var format_strandbeskyttedeomrderstrandbeskyttelse_4 = new ol.format.GeoJSON();
var features_strandbeskyttedeomrderstrandbeskyttelse_4 = format_strandbeskyttedeomrderstrandbeskyttelse_4.readFeatures(json_strandbeskyttedeomrderstrandbeskyttelse_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_strandbeskyttedeomrderstrandbeskyttelse_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_strandbeskyttedeomrderstrandbeskyttelse_4.addFeatures(features_strandbeskyttedeomrderstrandbeskyttelse_4);
var lyr_strandbeskyttedeomrderstrandbeskyttelse_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_strandbeskyttedeomrderstrandbeskyttelse_4, 
                style: style_strandbeskyttedeomrderstrandbeskyttelse_4,
                popuplayertitle: 'strandbeskyttede områder — strandbeskyttelse',
                interactive: true,
                title: '<img src="styles/legend/strandbeskyttedeomrderstrandbeskyttelse_4.png" /> strandbeskyttede områder — strandbeskyttelse'
            });
var format_EUDLgerHospitalRdhusEUDHvidovre_5 = new ol.format.GeoJSON();
var features_EUDLgerHospitalRdhusEUDHvidovre_5 = format_EUDLgerHospitalRdhusEUDHvidovre_5.readFeatures(json_EUDLgerHospitalRdhusEUDHvidovre_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUDLgerHospitalRdhusEUDHvidovre_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUDLgerHospitalRdhusEUDHvidovre_5.addFeatures(features_EUDLgerHospitalRdhusEUDHvidovre_5);
var lyr_EUDLgerHospitalRdhusEUDHvidovre_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUDLgerHospitalRdhusEUDHvidovre_5, 
                style: style_EUDLgerHospitalRdhusEUDHvidovre_5,
                popuplayertitle: 'EUD, Læger, Hospital, Rådhus — EUD Hvidovre',
                interactive: true,
                title: '<img src="styles/legend/EUDLgerHospitalRdhusEUDHvidovre_5.png" /> EUD, Læger, Hospital, Rådhus — EUD Hvidovre'
            });
var format_EUDLgerHospitalRdhusHospital_6 = new ol.format.GeoJSON();
var features_EUDLgerHospitalRdhusHospital_6 = format_EUDLgerHospitalRdhusHospital_6.readFeatures(json_EUDLgerHospitalRdhusHospital_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUDLgerHospitalRdhusHospital_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUDLgerHospitalRdhusHospital_6.addFeatures(features_EUDLgerHospitalRdhusHospital_6);
var lyr_EUDLgerHospitalRdhusHospital_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUDLgerHospitalRdhusHospital_6, 
                style: style_EUDLgerHospitalRdhusHospital_6,
                popuplayertitle: 'EUD, Læger, Hospital, Rådhus — Hospital',
                interactive: true,
                title: '<img src="styles/legend/EUDLgerHospitalRdhusHospital_6.png" /> EUD, Læger, Hospital, Rådhus — Hospital'
            });
var format_EUDLgerHospitalRdhusLger_7 = new ol.format.GeoJSON();
var features_EUDLgerHospitalRdhusLger_7 = format_EUDLgerHospitalRdhusLger_7.readFeatures(json_EUDLgerHospitalRdhusLger_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUDLgerHospitalRdhusLger_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUDLgerHospitalRdhusLger_7.addFeatures(features_EUDLgerHospitalRdhusLger_7);
var lyr_EUDLgerHospitalRdhusLger_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUDLgerHospitalRdhusLger_7, 
                style: style_EUDLgerHospitalRdhusLger_7,
                popuplayertitle: 'EUD, Læger, Hospital, Rådhus — Læger',
                interactive: true,
                title: '<img src="styles/legend/EUDLgerHospitalRdhusLger_7.png" /> EUD, Læger, Hospital, Rådhus — Læger'
            });
var format_EUDLgerHospitalRdhusRdhus_8 = new ol.format.GeoJSON();
var features_EUDLgerHospitalRdhusRdhus_8 = format_EUDLgerHospitalRdhusRdhus_8.readFeatures(json_EUDLgerHospitalRdhusRdhus_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EUDLgerHospitalRdhusRdhus_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EUDLgerHospitalRdhusRdhus_8.addFeatures(features_EUDLgerHospitalRdhusRdhus_8);
var lyr_EUDLgerHospitalRdhusRdhus_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EUDLgerHospitalRdhusRdhus_8, 
                style: style_EUDLgerHospitalRdhusRdhus_8,
                popuplayertitle: 'EUD, Læger, Hospital, Rådhus — Rådhus',
                interactive: true,
                title: '<img src="styles/legend/EUDLgerHospitalRdhusRdhus_8.png" /> EUD, Læger, Hospital, Rådhus — Rådhus'
            });
var format_Hospitalfolkeskoler2_9 = new ol.format.GeoJSON();
var features_Hospitalfolkeskoler2_9 = format_Hospitalfolkeskoler2_9.readFeatures(json_Hospitalfolkeskoler2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitalfolkeskoler2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitalfolkeskoler2_9.addFeatures(features_Hospitalfolkeskoler2_9);
var lyr_Hospitalfolkeskoler2_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospitalfolkeskoler2_9, 
                style: style_Hospitalfolkeskoler2_9,
                popuplayertitle: 'Hospital — folkeskoler2',
                interactive: true,
                title: '<img src="styles/legend/Hospitalfolkeskoler2_9.png" /> Hospital — folkeskoler2'
            });
var format_Storcentre_10 = new ol.format.GeoJSON();
var features_Storcentre_10 = format_Storcentre_10.readFeatures(json_Storcentre_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Storcentre_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Storcentre_10.addFeatures(features_Storcentre_10);
var lyr_Storcentre_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Storcentre_10, 
                style: style_Storcentre_10,
                popuplayertitle: 'Storcentre',
                interactive: true,
                title: '<img src="styles/legend/Storcentre_10.png" /> Storcentre'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Frededeomrderomridsafkommunekommuneplan_1.setVisible(true);lyr_FrededeomrderomridsafkommuneFrededeomrder_2.setVisible(true);lyr_lokalplaner_hvidovrelokalplaner_3.setVisible(true);lyr_strandbeskyttedeomrderstrandbeskyttelse_4.setVisible(true);lyr_EUDLgerHospitalRdhusEUDHvidovre_5.setVisible(true);lyr_EUDLgerHospitalRdhusHospital_6.setVisible(true);lyr_EUDLgerHospitalRdhusLger_7.setVisible(true);lyr_EUDLgerHospitalRdhusRdhus_8.setVisible(true);lyr_Hospitalfolkeskoler2_9.setVisible(true);lyr_Storcentre_10.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Frededeomrderomridsafkommunekommuneplan_1,lyr_FrededeomrderomridsafkommuneFrededeomrder_2,lyr_lokalplaner_hvidovrelokalplaner_3,lyr_strandbeskyttedeomrderstrandbeskyttelse_4,lyr_EUDLgerHospitalRdhusEUDHvidovre_5,lyr_EUDLgerHospitalRdhusHospital_6,lyr_EUDLgerHospitalRdhusLger_7,lyr_EUDLgerHospitalRdhusRdhus_8,lyr_Hospitalfolkeskoler2_9,lyr_Storcentre_10];
lyr_Frededeomrderomridsafkommunekommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_FrededeomrderomridsafkommuneFrededeomrder_2.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_lokalplaner_hvidovrelokalplaner_3.set('fieldAliases', {'fid': 'fid', 'planid': 'planid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_strandbeskyttedeomrderstrandbeskyttelse_4.set('fieldAliases', {'fid': 'fid', 'forretningshaendelse': 'forretningshaendelse', 'senesteSagLokalId': 'senesteSagLokalId', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalId': 'id.lokalId', 'paataenktHandling': 'paataenktHandling', 'registreringFra': 'registreringFra', 'virkningFra': 'virkningFra', 'virkningsaktoer': 'virkningsaktoer', 'temaFladeID': 'temaFladeID', 'tematype': 'tematype', 'jordstykkeLokalId': 'jordstykkeLokalId', });
lyr_EUDLgerHospitalRdhusEUDHvidovre_5.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_EUDLgerHospitalRdhusHospital_6.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_EUDLgerHospitalRdhusLger_7.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_EUDLgerHospitalRdhusRdhus_8.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Hospitalfolkeskoler2_9.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Storcentre_10.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Frededeomrderomridsafkommunekommuneplan_1.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_FrededeomrderomridsafkommuneFrededeomrder_2.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_lokalplaner_hvidovrelokalplaner_3.set('fieldImages', {'fid': '', 'planid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_strandbeskyttedeomrderstrandbeskyttelse_4.set('fieldImages', {'fid': '', 'forretningshaendelse': '', 'senesteSagLokalId': '', 'forretningsproces': '', 'id.namespace': '', 'id.lokalId': '', 'paataenktHandling': '', 'registreringFra': '', 'virkningFra': '', 'virkningsaktoer': '', 'temaFladeID': '', 'tematype': '', 'jordstykkeLokalId': '', });
lyr_EUDLgerHospitalRdhusEUDHvidovre_5.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_EUDLgerHospitalRdhusHospital_6.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_EUDLgerHospitalRdhusLger_7.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_EUDLgerHospitalRdhusRdhus_8.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Hospitalfolkeskoler2_9.set('fieldImages', {'fid': '', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Storcentre_10.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Frededeomrderomridsafkommunekommuneplan_1.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'objektkode': 'no label', 'komnr': 'no label', 'plannavn': 'no label', 'doklink': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datoslut': 'no label', 'aktuel': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'status': 'no label', 'datostart': 'no label', 'glkomnr': 'no label', 'kommunenavn': 'no label', 'glkomnavn': 'no label', 'glkomnavn_besk': 'no label', });
lyr_FrededeomrderomridsafkommuneFrededeomrder_2.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_lokalplaner_hvidovrelokalplaner_3.set('fieldLabels', {'fid': 'no label', 'planid': 'inline label - always visible', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_strandbeskyttedeomrderstrandbeskyttelse_4.set('fieldLabels', {'fid': 'no label', 'forretningshaendelse': 'no label', 'senesteSagLokalId': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalId': 'no label', 'paataenktHandling': 'no label', 'registreringFra': 'no label', 'virkningFra': 'no label', 'virkningsaktoer': 'no label', 'temaFladeID': 'no label', 'tematype': 'no label', 'jordstykkeLokalId': 'no label', });
lyr_EUDLgerHospitalRdhusEUDHvidovre_5.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefonnum': 'no label', });
lyr_EUDLgerHospitalRdhusHospital_6.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefonnum': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_EUDLgerHospitalRdhusLger_7.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefonnum': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_EUDLgerHospitalRdhusRdhus_8.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'Telefonnum': 'no label', });
lyr_Hospitalfolkeskoler2_9.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Storcentre_10.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_Storcentre_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});