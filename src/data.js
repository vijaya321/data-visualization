// let data = ['AK','AL','AR','AZ','CA','CO','CT','DE','FL','GA','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD',
//     'ME','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','RI','SC','SD','TN',
//     'TX','UT','VA','VT','WA','WI','WV','WY']
// .reduce((res, item) => ({...res, ...{[item]: Array(22).fill(0).map(_ => Math.floor(20 * Math.random()))}}), {});

let data = {
    'AK': [146422.0833,170360.5,185302.1667,194693.3333,209195.75,778504.6667,998478.25,1011908.583,1031525.167,1037552.667,1035925.417,1030511.583,1040900.083,1024105.167,1084097.917,1119769.25,1145198,1164792.25,1181952.417,1122491.417,1255042.083,1278180.75,1407292.4],
    'AL': [894516.0833,1108399.583,1270301.583,1397698.417,1463513.667,1483563.25,1707152.417,1874550.75,1884214.583,1938453.083,2029757.167,2051665.417,2090173.667,2142052.167,2213799.833,2260599.25,2314734.417,2428653.833,2605746.917,2743551.75,2883182.833,3180093.583,3729332.8],
    'AR': [1312728.5,1367503.667,1401163.583,1460132.167,1554523.417,1683398.417,1809024.75,1802796.167,1839394.5,1772947.167,1758975.583,1725844.667,1742496,1804916.083,1827124.917,1863713.917,1919372.25,1995149.917,2077893.083,2117379.5,2208297.833,2448031.083,2868115.2],
    'AZ': [1040733.583,1100422.583,1253020.417,1370752.667,1491459.417,1868478.583,2347339,2373379.667,2230452.667,1904870.917,1717444.167,1536965,1541044.833,1753176.25,1898054.5,1942482.75,2093702.333,2173069.667,2368740.417,2509044.583,2678013.333,3239466.333,4078671.9],
    'CA': [4655460.833,6341182.667,7024045.917,8382198.167,10097287.67,12358295.17,13537622.25,13444418.83,11166205.83,9141567.833,8897977.25,8326438.5,8405321.583,9885705.083,11200565.5,11883562.5,12702710.67,13551308,14632843.25,14837663.33,15396980.33,18370679.5,20947108.9],
    'CO': [2477956.75,2692324.5,2821177.5,3079222.833,3278251.417,3369109.917,3689232.417,3989574.583,3903955,4253474.333,4216618.25,4068130.583,4107391.833,4170668.5,4601973.583,4863194.917,5380577,5753913.333,6120632.417,6642460.583,6750686.917,8024750.917,9857796.2],
    'CT': [933965.0833,1018392.25,1125899.083,1266308.75,1416942.25,1590833.417,1697460.083,1677216.75,1588479.417,1466461.083,1399450.083,1326287.25,1246942.833,1271457.5,1288044.417,1282994.5,1286415.583,1314708.167,1345668.667,1361067.5,1410604.25,1661859.167,1859943.4],
    'DE': [143185.6667,159863.5833,180043.75,208511.25,242865.0833,286260.6667,322805,318930.5833,296696.4167,379542.8333,464655.5833,434422.9167,416208,420900.25,429697.6667,439577.5833,447684.0833,456519.1667,476715.75,492589.25,515234.9167,595671.5833,697562],
    'FL': [2812082.25,3014208.25,3264665.5,3572117.583,4329965,5426781.667,6510282.167,6237358.833,5274189.333,4387721.667,4025626.917,3694767.75,3647712.917,3968488.5,4347276.75,4649348.25,4957359,5292914.333,5642237.583,6540581.833,6779568,7726807.917,10155708.8],
    'GA': [3088533.167,3285875.083,3402392.5,3494004.917,3481225,3613022.583,3960777.583,4161806,4154987.167,4307335.5,4074180.583,3782492.583,3641009.417,3816419.833,4066918.25,4176161.25,4435645.833,4708544.833,4945517.333,5190537.167,5420703.75,6078471.75,7303883.9],
    'HI': [709887.5,772991.8333,846197.4167,969205.9167,1143720.417,1528064.75,1790507.25,1829659.75,1716199.583,1604831.167,1555254.833,1536616.167,1525835.417,1593434.333,1559136.417,1967387.083,2097430.083,2206824,2303083.333,2276966.333,2404584.75,2745734.833,3406010],
    'IA': [405657.5,423804.8333,439797.5,455163.6667,472621.4167,448963.25,499956.9167,590539.75,634817.8333,2142982,2333182.583,2322143.167,2320920.333,2368415.75,2394333.583,2513401,2608569.083,2717409.333,2770804.083,2889337.333,2885878.75,3114023.917,3480537.7],
    'ID': [110860.75,271232.0833,279259.4167,287344,301570.1667,352880.8333,631811.1667,865902.9167,1002419.75,2299644.417,2383869.083,2168106.5,2178037.833,2367271.583,2600329.5,2731979.167,2915545.917,3149401.917,3485491.167,3743655.667,4074925.25,4712432.417,5904027.8],
    'IL': [691460.9167,799344.4167,906109.5833,976984.3333,1092247.583,1293715.5,1670016.333,1782518.917,1753976.917,2703770.25,2633741.917,2525377.583,2509824.75,2514462.417,2680566.333,2744793.583,2829772.083,2908707.417,2990082.083,3025864.5,3121789.833,3404034.5,3748595.6,],
    'IN': [522180.9167,748677.8333,941439,1132679.25,1348277.083,1427340,1513434.75,1640754.167,1804757.25,3015883.667,3193426.833,3182762,3741304.75,3719038.5,3848636,4026971.333,4166005.333,4372525.833,4656573.917,4889435.417,5098972.667,5528655,6667494.5],
    'KS': [87173.83333,91529.08333,171572,201121.5833,265410.75,452843.3333,517498.3333,535098.6667,553803.8333,879355.0833,1072598.833,1148030.75,1421357.833,1402194.25,1576866.5,1630354.417,1693261.667,1792920.25,2137768.5,2415720.5,2521293,2674549.75,3081369.2],
    'KY': [1479179,1549193.083,1582344.25,1680944.333,1783281.083,1816525.833,1920565.833,1961798.917,1930103.25,2015985.583,2087721.917,1966818,2089714.333,2119259.917,2122969.833,2222952.583,2298292.5,2441319.833,2557152.583,2669197.5,2623970.583,3088110.167,3513574.1],
    'LA': [390073.3333,411979.1667,529648.1667,621009.5,727264.3333,803064.3333,943891.9167,1126337.833,1269434.083,1476485.417,1531074.167,1588332.083,1728997.167,1765150.917,1863104.167,2100079.083,2179252.583,2309583.833,2454217.75,2427576.667,2492345,2689675.583,2961615.2],
    'MA': [1297918.917,1474933.167,1666450.75,1883662.667,2108968.917,2323422.5,2379196.333,2306112.333,2202131,2081776.667,2072586,2014936.417,1974395.5,2048513.833,2128717.25,2187777.417,2270905.5,2390161.167,2512826.167,2596325.25,2625855.5,3065782.167,3578517.3],
    'MD': [780568.9167,827796.0833,890722.75,939967.6667,1138490.583,1294799.583,1452465.583,1544779,1484403.5,1337560,1244521.25,1165360,1171382.083,1225035.5,1246973.417,1252915.917,1252589,1280756.25,1337417.75,1364728.583,1398214.333,1603808.583,1791303.8],
    'ME': [435786.1667,477257.1667,525123.1667,576222.3333,650917.3333,729289.25,759932.6667,762135.3333,748092.1667,705551.9167,683161,670583.8333,661404.0833,646312.3333,645055.1667,654999.8333,701408.5833,738940.75,785874.0833,819175.3333,887746.6667,1080478.333,1254461.3],
    'MI': [2519997.333,2671466.75,2767827.333,2930816.917,3093288.167,3193441.917,3229575,3140683.75,3124097.5,3044534,2970445.333,2991814.75,3143436.417,3359369.917,3593058.75,3780316.667,3942478.333,4189827.417,4464393.5,4726907.25,4902020.833,5606150.25,6392511.3],
    'MN': [430255.9167,718420,774692.6667,917835.1667,1373005.583,1790580.75,2039116.333,2005589.333,2039909.583,2283981.583,2175655.417,2276812,2695674.75,2972688.75,3238240.333,3375892.667,3558920.333,3754843.5,3963403.167,4112337.167,4339273.667,4784188.333,5398729.9],
    'MO': [345833.8333,399507.3333,419853.6667,455988.6667,628523.9167,721143.25,876971.5833,947234.75,1190928.667,1941003.5,2130484,2125095.417,2452970.25,2536514.833,2611863.833,2712930.833,2823659.167,3052145.667,3344998.583,3436302.167,3487166.167,3973288.667,4643813.1],
    'MS': [0,0,0,113127.1111,115721.5833,122094.5833,131370.5,135753.5,128784.75,431962,622606.5,678459.6667,1583713.333,1616308.333,1666191.25,1752070.25,1798042.75,1848271.5,1900701.167,2018629.833,2058112.917,2326945.75,2644554.1],
    'MT': [0,0,0,0,0,233222.0909,245126.4167,355530.8333,430369.0833,1260951.167,1279929.083,1267185.75,1404922.833,1479234.75,1558639.5,1622940.667,1682734.75,1765845.5,1872530.25,1984059.917,1995165.917,2561476.833,3204685.3],
    'NC': [2577376.083,2761155.917,2845967.083,3053718.25,3282033.417,3466002.75,4028919.417,4253196.75,4815372.333,5373461.583,5082223.25,4927988.583,4831521.833,4790935.667,4888278.583,5027385,5322859.083,5291905.25,5780825.333,6272301.667,6494108.083,7318524.75,9303508.8],
    'ND': [0,0,0,0,0,0,0,0,0,750244.5833,959179.3333,994683.6667,1071351.583,1187467,1284954.25,1423580.833,1613661.167,1647505.917,1652949.75,1678960.75,1709421,1781019.583,1884689.9],
    'NE': [328414.5833,340635.4167,351975.4167,461032.8333,651290.25,720726.9167,838025.3333,1099904.5,1158778.917,1398498.833,1378921,1402144.167,1392839.25,1470455.917,1507838.833,1626608,1706655.333,1819503.333,1933150.25,1930564.917,2022856.75,2250587.417,2585338.5],
    'NH': [701667.1667,788647.75,887227.75,1002418.25,1114614.917,1252104.583,1315827.167,1307437.917,1249987.25,1168611.583,1131471.333,1098060.917,1084691.667,1102073.25,1136861.417,1168465.167,1185064.25,1259524.833,1335222,1394126,1476421.167,1742749.667,2075704.6],
    'NJ': [561950.6667,614601.25,674247.5833,788067.25,927834,1098538.75,1239182,1227448.083,1165621,1065773.917,1013754.75,951720.75,913310.25,911095.4167,920047.5,911423.75,909699.5833,916903.9167,955266.6667,983106.0833,1040628.667,1252621.417,1481209.2],
    'NM': [0,0,480567.8889,560012.75,609394.3333,669193.0833,746197.75,801665.4167,802926.5833,1142159.917,1274795.5,1197618.583,1961370,2170314.833,2210785.833,2252065.417,2320146.25,2390704.583,2481603,2921337,3073373.667,3458074.833,3948106.6],
    'NV': [707129.1667,750757.8333,805681.5833,890171.8333,1040969.167,1399881.75,1495876.5,1572781.75,1354897.083,1510952.417,1326612.75,1184118.5,1174946.583,1401597.167,1623694,1945203.5,2122994.417,2360646.917,2665999.833,2830956,2926800.25,3413822.5,4062059.5],
    'NY': [2173795.833,2322115.167,2479066.667,2608894.5,2954824.833,3292002.417,3571847,3699084.5,3692722.167,3557350.75,3510086.5,3437164,3409994.5,3397082.25,3504774.167,3569133.667,3604268.583,3793032.5,3992320,4164650.75,4276934.333,4874466,5556311.8],
    'OH': [3311251.75,3547685,3686258.333,3833704.333,3986525.583,3968935.083,4223937.167,4189880,4094530.167,4717566.667,4735249.333,4652259.917,4605561.833,4626591.917,4789181.833,4997153.5,5203085.333,5461974.75,5795850.167,6046889.667,6223298,7007956.917,8105887.3],
    'OK': [1357623.417,1422285.333,1471176,1492456.333,1554364.333,1598852.667,1709845.917,1762873.083,1648989.833,1724308.5,1773526.083,1742077.25,1755494.167,1791504.333,1838384.917,1901031.083,1954614.417,2007086.583,2022134.75,2189368,2310007.333,2563083.083,2912020.2],
    'OR': [2014900.75,2123091,2171973,2387106.417,2730202.667,3294129.583,3891529.833,4115547.75,4298430.5,4286203.417,4061423.833,3780208.083,3672751.167,3971749.5,4263159.167,4512039.333,4939247.417,5225991.417,5596990.25,5963135.083,6240859.667,6928842.833,8650852.8],
    'PA': [1427344.583,1584451.25,1774687.5,1983237.917,2150104.667,2739933.75,3383274.167,3500709.917,3470840.75,4080285.833,4101078.333,4155884.75,4143951.833,4247174.25,4321633.667,4402259.167,4469059.833,4746884,4968100.167,5182572.75,5255013.917,5966407.75,6822662],
    'RI': [158812.9167,176587.0833,205764.8333,246130.1667,287563,321633.25,332270.25,316615.0833,292831.1667,260883.4167,256947.5,243457.4167,231369.25,240757.9167,251047.25,256080.9167,267242.1667,284193.5833,303611.5833,313078.1667,330180.0833,387301.3333,438324],
    'SC': [676310.8333,751033.8333,900845.4167,1027242.917,1164117.583,1337876,1566755.583,1625160.833,1612121,1674709.667,1722046.75,1717994.583,1807180.75,1899320.417,2018664.167,2095660.25,2193063.167,2245061.833,2406245.417,2471999.417,2602597.333,2946554.25,3596256.9],
    'SD': [0,0,0,0,0,0,160424.5,163822.6667,272484.9167,708807,778726.5833,779562.5,1142534.833,1315236.667,1355844.25,1467812.167,1659844.667,1852299.167,2008896,2097585.833,2167232.083,2062131.917,2748751.8],
    'TN': [2358015,2451502.333,2504679.75,2460384.75,2622693.917,2741549.667,2966275.75,3091871,3048190,2921763.833,2900610.333,2845178.417,2874806,2931218.083,3032642.333,3132717.333,3282150.25,3451806.167,3698033.417,3937314,4038586.5,4746942.083,5960145.3],
    'TX': [963588.0833,1063816.417,1078627.667,1105346.75,1143769.917,1410882.75,1680100.333,1867398.417,2017733.333,5715073.417,6296943.25,6262037.583,6639813.833,6951975.667,7468368.667,8001934.417,8418725.667,8926663.75,9411252.833,9553397.917,10118845.83,11073843.33,13696169.6],
    'UT': [496307.0833,580594.8333,584713.5833,582292.5833,589634.25,762224.4167,824063.0833,959782.6667,1000795.333,1814671.833,1751974.417,1620920.25,1635034.083,1797373.5,1902567.167,1992940.083,2145446.333,2315032.5,2527417.083,2708513.917,2882011.583,3196201.75,4247003.3],
    'VA': [1184584.417,1273945.583,1375678.333,1476544.5,1697706.417,2137447.25,2296076.5,2348093.167,2206226.5,2293245.5,2446726,2378441.417,2372811.167,2406368.333,2503456.5,2543360.75,2594567.5,2683809.417,2783327.75,2804507.417,2998848.417,3345104.833,3728731.2],
    'VT': [513232.0833,552632.6667,598495.5,576548.9167,720750.25,804675.9167,879892.75,916878.25,921711.8333,900092.9167,889326.1667,884319.5,878998.8333,878092.5833,877336.3333,884031.4167,890187.3333,898140.3333,949276.1667,974701.9167,1007043.5,1113855.5,1331336.9],
    'WA': [1171477.167,1476402.25,1612126.833,1632084.75,1870117.333,2059237.583,2771524.667,3356369.25,3644199.167,4300354.75,4066336.833,3832947.917,3739973.917,3912965.917,4142924.917,4352735.25,4828452.25,5078417.167,5800263.667,6221101,6701605.5,7996641.417,9505425.9],
    'WI': [538612.1667,671149.75,890671.4167,956148.5,1045560,1254010.167,1524130.5,1625466.167,1756110.083,2980704,3021783.5,2904073.833,2935215.833,2906908.417,3113769.667,3246686.667,3386854.5,3511278.917,3815954.833,4051188.25,4202427,4789473.833,5414197.1],
    'WV': [406211.5,427243.75,440963.0833,457384.1667,519954,581013.4167,636062.0833,602891,620504.5,644222.1667,635609.4167,636388.0833,630036.5833,661438.9167,666778.0833,692074.1667,749990.3333,827339.1667,844662.0833,883316.9167,831856.8333,935638.6667,1071163.8],
    'WY': [0,0,149220.4444,154417.75,165001.6667,176538.4167,184880.25,194076.3333,202152.2,1247782.667,1718238.167,1770886.583,2238558.833,2294750.167,2366075.25,2452822.25,2515748.75,2542700.833,2650442.167,2792837.667,2913860,3145426.083,3638631.8]
}

export default data