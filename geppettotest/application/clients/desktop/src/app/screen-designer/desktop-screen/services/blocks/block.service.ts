import { Injectable } from '@angular/core';
import { TraitsService } from '../traits/traits.service';
import { LargeTextCellEditor } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  // test: String = 'test';
  constructor(
    private traitService: TraitsService
  ) { }

  addCKeditor5(editor) {
    // working fine
    editor.BlockManager.add('ckeditor', {
      id: 'ckeditor',
      label: `<svg width="443px" height="70px" viewBox="0 0 150 100"
       version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path d="M184.403,53.349 C184.105999,51.9959932 183.619253,50.7832554 182.94275,49.71075 C182.266247,
        48.6382446 181.441255,47.7390036 180.46775,47.013 C179.494245,46.2869964 178.421756,45.7342519 177.25025,
        45.35475 C176.078744,44.9752481 174.849506,44.7855 173.5625,44.7855 C171.219488,44.7855 169.206508,45.2309955 167.5235,
        46.122 C165.840492,47.0130045 164.462755,48.1927427 163.39025,49.66125 C162.317745,51.1297573 161.525753,52.7879908 161.01425,
        54.636 C160.502747,56.4840092 160.247,58.3814903 160.247,60.3285 C160.247,62.2425096 160.502747,64.1317407 161.01425,
        65.99625 C161.525753,67.8607593 162.317745,69.5272427 163.39025,70.99575 C164.462755,72.4642573 165.840492,
        73.6439955 167.5235,74.535 C169.206508,75.4260045 171.219488,75.8715 173.5625,75.8715 C175.212508,75.8715 176.697493,
        75.574503 178.0175,74.9805 C179.337507,74.386497 180.475995,73.5780051 181.433,72.555 C182.390005,71.5319949 183.165497,
        70.3357568 183.7595,68.96625 C184.353503,67.5967432 184.732999,66.1200079 184.898,64.536 L188.264,64.536 C188.032999,
        66.7140109 187.521504,68.6774913 186.7295,70.4265 C185.937496,72.1755087 184.914506,73.6604939 183.6605,74.8815 C182.406494,
        76.1025061 180.929758,77.0429967 179.23025,77.703 C177.530742,78.3630033 175.64151,78.693 173.5625,78.693 C170.790486,
        78.693 168.35676,78.189755 166.26125,77.18325 C164.16574,76.176745 162.425007,74.8320084 161.039,73.149 C159.652993,
        71.4659916 158.613503,69.5190111 157.9205,67.308 C157.227497,65.0969889 156.881,62.7705122 156.881,60.3285 C156.881,
        57.8864878 157.227497,55.5600111 157.9205,53.349 C158.613503,51.1379889 159.652993,49.1827585 161.039,47.48325 C162.425007,
        45.7837415 164.16574,44.430755 166.26125,43.42425 C168.35676,42.417745 170.790486,41.9145 173.5625,41.9145 C175.245508,
        41.9145 176.887242,42.1619975 178.48775,42.657 C180.088258,43.1520025 181.540243,43.8862451 182.84375,44.85975 C184.147257,45.8332549 185.236246,47.0294929 186.11075,48.4485 C186.985254,49.8675071 187.537999,51.5009908 187.769,53.349 L184.403,53.349 Z M193.562,42.657 L196.928,42.657 L196.928,61.665 L217.4705,42.657 L222.0245,42.657 L206.234,57.2595 L222.767,78 L218.411,78 L203.7095,59.586 L196.928,65.8725 L196.928,78 L193.562,78 L193.562,42.657 Z M225.788,42.657 L250.1915,42.657 L250.1915,45.528 L229.154,45.528 L229.154,58.299 L248.855,58.299 L248.855,61.17 L229.154,61.17 L229.154,75.129 L250.439,75.129 L250.439,78 L225.788,78 L225.788,42.657 Z M277.1705,78 L274.2995,78 L274.2995,73.149 L274.2005,73.149 C273.870498,73.9740041 273.383753,74.7329965 272.74025,75.426 C272.096747,76.1190035 271.362504,76.7047476 270.5375,77.18325 C269.712496,77.6617524 268.829755,78.0329987 267.88925,78.297 C266.948745,78.5610013 266.016505,78.693 265.0925,78.693 C263.14549,78.693 261.454257,78.3382535 260.01875,77.62875 C258.583243,76.9192465 257.387005,75.9457562 256.43,74.70825 C255.472995,73.4707438 254.763502,72.0352582 254.3015,70.40175 C253.839498,68.7682418 253.6085,67.0440091 253.6085,65.229 C253.6085,63.4139909 253.839498,61.6897582 254.3015,60.05625 C254.763502,58.4227418 255.472995,56.9872562 256.43,55.74975 C257.387005,54.5122438 258.583243,53.5305036 260.01875,52.8045 C261.454257,52.0784964 263.14549,51.7155 265.0925,51.7155 C266.049505,51.7155 266.981745,51.8309988 267.88925,52.062 C268.796755,52.2930012 269.646496,52.6477476 270.4385,53.12625 C271.230504,53.6047524 271.931747,54.1904965 272.54225,54.8835 C273.152753,55.5765035 273.622998,56.3849954 273.953,57.309 L274.052,57.309 L274.052,42.657 L277.1705,42.657 L277.1705,78 Z M256.727,65.229 C256.727,66.5490066 256.883748,67.8607435 257.19725,69.16425 C257.510752,70.4677565 258.005747,71.6309949 258.68225,72.654 C259.358753,73.6770051 260.224995,74.5102468 261.281,75.15375 C262.337005,75.7972532 263.607493,76.119 265.0925,76.119 C266.742508,76.119 268.136744,75.7972532 269.27525,75.15375 C270.413756,74.5102468 271.337746,73.6770051 272.04725,72.654 C272.756754,71.6309949 273.268248,70.4677565 273.58175,69.16425 C273.895252,67.8607435 274.052,66.5490066 274.052,65.229 C274.052,63.9089934 273.895252,62.5972565 273.58175,61.29375 C273.268248,59.9902435 272.756754,58.8270051 272.04725,57.804 C271.337746,56.7809949 270.413756,55.9477532 269.27525,55.30425 C268.136744,54.6607468 266.742508,54.339 265.0925,54.339 C263.607493,54.339 262.337005,54.6607468 261.281,55.30425 C260.224995,55.9477532 259.358753,56.7809949 258.68225,57.804 C258.005747,58.8270051 257.510752,59.9902435 257.19725,61.29375 C256.883748,62.5972565 256.727,63.9089934 256.727,65.229 Z M283.31,42.657 L286.4285,42.657 L286.4285,47.6565 L283.31,47.6565 L283.31,42.657 Z M283.31,52.458 L286.4285,52.458 L286.4285,78 L283.31,78 L283.31,52.458 Z M297.518,52.458 L302.7155,52.458 L302.7155,55.0815 L297.518,55.0815 L297.518,72.3075 C297.518,73.3305051 297.658249,74.1307471 297.93875,74.70825 C298.219251,75.2857529 298.920494,75.6074997 300.0425,75.6735 C300.933504,75.6735 301.824496,75.6240005 302.7155,75.525 L302.7155,78.1485 C302.253498,78.1485 301.791502,78.1649998 301.3295,78.198 C300.867498,78.2310002 300.405502,78.2475 299.9435,78.2475 C297.86449,78.2475 296.412504,77.843254 295.5875,77.03475 C294.762496,76.226246 294.3665,74.7330109 294.3995,72.555 L294.3995,55.0815 L289.9445,55.0815 L289.9445,52.458 L294.3995,52.458 L294.3995,44.7855 L297.518,44.7855 L297.518,52.458 Z M318.161,54.339 C316.675993,54.339 315.372506,54.6524969 314.2505,55.2795 C313.128494,55.9065031 312.196254,56.7314949 311.45375,57.7545 C310.711246,58.7775051 310.150252,59.9407435 309.77075,61.24425 C309.391248,62.5477565 309.2015,63.8759932 309.2015,65.229 C309.2015,66.5820068 309.391248,67.9102435 309.77075,69.21375 C310.150252,70.5172565 310.711246,71.6804949 311.45375,72.7035 C312.196254,73.7265051 313.128494,74.5514969 314.2505,75.1785 C315.372506,75.8055031 316.675993,76.119 318.161,76.119 C319.646007,76.119 320.949494,75.8055031 322.0715,75.1785 C323.193506,74.5514969 324.125746,73.7265051 324.86825,72.7035 C325.610754,71.6804949 326.171748,70.5172565 326.55125,69.21375 C326.930752,67.9102435 327.1205,66.5820068 327.1205,65.229 C327.1205,63.8759932 326.930752,62.5477565 326.55125,61.24425 C326.171748,59.9407435 325.610754,58.7775051 324.86825,57.7545 C324.125746,56.7314949 323.193506,55.9065031 322.0715,55.2795 C320.949494,54.6524969 319.646007,54.339 318.161,54.339 Z M318.161,51.7155 C320.10801,51.7155 321.832243,52.0784964 323.33375,52.8045 C324.835258,53.5305036 326.097495,54.5039939 327.1205,55.725 C328.143505,56.9460061 328.918997,58.3732418 329.447,60.00675 C329.975003,61.6402582 330.239,63.3809908 330.239,65.229 C330.239,67.0770092 329.975003,68.8177418 329.447,70.45125 C328.918997,72.0847582 328.143505,73.5119939 327.1205,74.733 C326.097495,75.9540061 324.835258,76.9192465 323.33375,77.62875 C321.832243,78.3382535 320.10801,78.693 318.161,78.693 C316.21399,78.693 314.489758,78.3382535 312.98825,77.62875 C311.486743,76.9192465 310.224505,75.9540061 309.2015,74.733 C308.178495,73.5119939 307.403003,72.0847582 306.875,70.45125 C306.346997,68.8177418 306.083,67.0770092 306.083,65.229 C306.083,63.3809908 306.346997,61.6402582 306.875,60.00675 C307.403003,58.3732418 308.178495,56.9460061 309.2015,55.725 C310.224505,54.5039939 311.486743,53.5305036 312.98825,52.8045 C314.489758,52.0784964 316.21399,51.7155 318.161,51.7155 Z M335.042,52.458 L337.913,52.458 L337.913,58.4475 L338.012,58.4475 C338.804004,56.3684896 340.033242,54.7680056 341.69975,53.646 C343.366258,52.5239944 345.354488,52.0124995 347.6645,52.1115 L347.6645,55.23 C346.245493,55.1639997 344.958506,55.3537478 343.8035,55.79925 C342.648494,56.2447522 341.650254,56.8799959 340.80875,57.705 C339.967246,58.5300041 339.315502,59.5117443 338.8535,60.65025 C338.391498,61.7887557 338.1605,63.0344932 338.1605,64.3875 L338.1605,78 L335.042,78 L335.042,52.458 Z M366.626,68.1 C366.659,69.2880059 366.898248,70.3769951 367.34375,71.367 C367.789252,72.357005 368.391496,73.2067465 369.1505,73.91625 C369.909504,74.6257535 370.800495,75.1702481 371.8235,75.54975 C372.846505,75.9292519 373.951994,76.119 375.14,76.119 C376.493007,76.119 377.697495,75.8632526 378.7535,75.35175 C379.809505,74.8402474 380.716996,74.1472544 381.476,73.27275 C382.235004,72.3982456 382.812498,71.3917557 383.2085,70.25325 C383.604502,69.1147443 383.8025,67.9185063 383.8025,66.6645 C383.8025,65.3774936 383.579752,64.1895054 383.13425,63.1005 C382.688748,62.0114946 382.078254,61.062754 381.30275,60.25425 C380.527246,59.445746 379.595005,58.8105023 378.506,58.3485 C377.416995,57.8864977 376.229006,57.6555 374.942,57.6555 C373.357992,57.6555 371.889507,58.0102465 370.5365,58.71975 C369.183493,59.4292535 368.078004,60.4439934 367.22,61.764 L364.547,61.764 L367.913,43.7955 L385.238,43.7955 L385.238,46.6665 L370.091,46.6665 L367.8635,58.1505 L367.9625,58.2495 C368.820504,57.2264949 369.909493,56.4345028 371.2295,55.8735 C372.549507,55.3124972 373.902493,55.032 375.2885,55.032 C377.070509,55.032 378.679243,55.328997 380.11475,55.923 C381.550257,56.517003 382.771245,57.3419947 383.77775,58.398 C384.784255,59.4540053 385.559747,60.7162427 386.10425,62.18475 C386.648753,63.6532573 386.921,65.2619913 386.921,67.011 C386.921,68.6940084 386.607503,70.2532428 385.9805,71.68875 C385.353497,73.1242572 384.495505,74.3617448 383.4065,75.40125 C382.317495,76.4407552 381.038757,77.2492471 379.57025,77.82675 C378.101743,78.4042529 376.542508,78.693 374.8925,78.693 C373.275492,78.693 371.782257,78.4537524 370.41275,77.97525 C369.043243,77.4967476 367.855255,76.8037545 366.84875,75.89625 C365.842245,74.9887455 365.042003,73.8750066 364.448,72.555 C363.853997,71.2349934 363.5405,69.7500083 363.5075,68.1 L366.626,68.1 Z" id="ckeditor-5-txt" fill="#32373C"></path>
            <path d="M91.3990305,18.4275908 C89.708134,21.8370406 88.7575758,25.6787251 88.7575758,29.7424242 C88.7575758,43.8256854 100.174315,55.2424242 114.257576,55.2424242 C114.439555,55.2424242 114.62109,55.240518 114.80216,55.2367244 L114.80216,90.9505846 C114.80216,95.2377717 112.514973,99.199296 108.80216,101.342889 L63.6969697,127.384383 C59.9841568,129.527977 55.4097826,129.527977 51.6969697,127.384383 L6.59177944,101.342889 C2.87896651,99.199296 0.591779435,95.2377717 0.591779435,90.9505846 L0.591779435,38.8675972 C0.591779435,34.5804101 2.87896651,30.6188859 6.59177944,28.4752923 L51.6969697,2.43379858 C55.4097826,0.290205045 59.9841568,0.290205045 63.6969697,2.43379858 L91.3990305,18.4275908 Z M32.8787879,42.2424242 C31.2219336,42.2424242 29.8787879,43.58557 29.8787879,45.2424242 L29.8787879,46.6741182 C29.8787879,48.3309725 31.2219336,49.6741182 32.8787879,49.6741182 L83.5454545,49.6741182 C85.2023088,49.6741182 86.5454545,48.3309725 86.5454545,46.6741182 L86.5454545,45.2424242 C86.5454545,43.58557 85.2023088,42.2424242 83.5454545,42.2424242 L32.8787879,42.2424242 Z M32.8787879,60.7203179 C31.2219336,60.7203179 29.8787879,62.0634637 29.8787879,63.7203179 L29.8787879,65.1520119 C29.8787879,66.8088662 31.2219336,68.1520119 32.8787879,68.1520119 L69.6110283,68.1520119 C71.2678826,68.1520119 72.6110283,66.8088662 72.6110283,65.1520119 L72.6110283,63.7203179 C72.6110283,62.0634637 71.2678826,60.7203179 69.6110283,60.7203179 L32.8787879,60.7203179 Z M32.8787879,79.1982116 C31.2219336,79.1982116 29.8787879,80.5413574 29.8787879,82.1982116 L29.8787879,83.6299056 C29.8787879,85.2867599 31.2219336,86.6299056 32.8787879,86.6299056 L83.5454545,86.6299056 C85.2023088,86.6299056 86.5454545,85.2867599 86.5454545,83.6299056 L86.5454545,82.1982116 C86.5454545,80.5413574 85.2023088,79.1982116 83.5454545,79.1982116 L32.8787879,79.1982116 Z M114.757576,50.2424242 C103.159596,50.2424242 93.7575758,40.840404 93.7575758,29.2424242 C93.7575758,17.6444445 103.159596,8.24242424 114.757576,8.24242424 C126.355556,8.24242424 135.757576,17.6444445 135.757576,29.2424242 C135.757576,40.840404 126.355556,50.2424242 114.757576,50.2424242 Z M121.56,32.8587458 C121.56,31.9247189 121.393212,31.1074577 121.059631,30.4069376 C120.72605,29.7064174 120.271553,29.1184897 119.696126,28.6431368 C119.120699,28.1677838 118.441037,27.8133593 117.657122,27.5798526 C116.873207,27.3463459 116.039267,27.2295943 115.155277,27.2295943 C114.888412,27.2295943 114.592363,27.2421034 114.267122,27.267122 C113.94188,27.2921405 113.645832,27.3380072 113.378967,27.4047234 L113.529078,24.6026569 L120.659336,24.6026569 L120.659336,21 L109.801328,21 L109.376015,31.1324726 C110.009819,30.8989659 110.731177,30.7113294 111.540111,30.5695575 C112.349045,30.4277856 113.070403,30.3569007 113.704207,30.3569007 C114.137862,30.3569007 114.571511,30.3985977 115.005166,30.4819929 C115.438822,30.5653882 115.826604,30.7113277 116.168524,30.9198158 C116.510445,31.1283039 116.789815,31.4076738 117.006642,31.7579339 C117.22347,32.108194 117.331882,32.5418428 117.331882,33.0588934 C117.331882,33.9095249 117.069191,34.5516588 116.543801,34.9853141 C116.018411,35.4189694 115.397126,35.6357938 114.679926,35.6357938 C113.979406,35.6357938 113.3748,35.4356482 112.866089,35.035351 C112.357378,34.6350538 112.011293,34.1263504 111.827823,33.5092255 L108,34.6850927 C108.200149,35.3856128 108.512876,36.0152375 108.938192,36.5739857 C109.363508,37.1327339 109.872211,37.60391 110.464317,37.9875282 C111.056424,38.3711464 111.715236,38.6671951 112.440775,38.8756832 C113.166314,39.0841713 113.929369,39.1884138 114.729963,39.1884138 C115.597274,39.1884138 116.439553,39.0591531 117.256827,38.8006279 C118.0741,38.5421026 118.803798,38.1543205 119.445941,37.6372699 C120.088085,37.1202193 120.600958,36.4655764 120.984576,35.6733215 C121.368194,34.8810666 121.56,33.942884 121.56,32.8587458 Z" id="ckeditor-5" fill="#1EBC61"></path>
            <div>CKeditor5</div>
            </svg>
`,
      category: 'Basic',
      content: `
      <div style="padding-top: 10px;padding-right: 2px;padding-left: 2px;padding-bottom: 10px">
      <span id="ckeditorspan" style="display: unset;" data-gjs-type="ckeditor5">
      <textarea name="content" id="ckeditortextarea">This is some sample content.</textarea>
      </span>
      </div>
      `,
      draggable: true,
      removable: true
    });
    this.traitService.addCKEditorTraits(editor, 'ckeditor5');
  }

  addAgGrid($this) {
    // editor ag-grid custom blocks added
    $this.editor.BlockManager.add('agGrid', {
      id: 'agGrid',
      label: 'agGrid',
      category: 'Basic',
      attributes: {
        class: 'fa fa-table'
      },
      content: `<div data-gjs-type="grid-type" style="padding-top: 10px;padding-right: 2px;padding-left: 2px;padding-bottom: 10px">
      <div id="myGrid" style="width: auto; height: 32%"></div>
  </div>`,
      draggable: true,
      removable: true
    });
    this.traitService.addGridTraits($this, 'grid-type');
  }

  addUpload(editor) {
    // editor upload custom blocks added
    editor.BlockManager.add('upload', {
      id: 'upload',
      label: 'upload',
      category: 'Basic',
      attributes: {
        class: 'fa fa-paperclip'
      },
      content: `<div style="color:#d983a6;
      display:inline-block;
      vertical-align:top;
      padding:10px;
      max-width:100%;">
      <button data-gjs-type="upload"><i class="fa fa-paperclip" aria-hidden="true"></i>
      </button>
</div>`,
      draggable: true,
      removable: true
    });
    this.traitService.addUpload(editor, 'upload');
  }

  addDownload(editor) {
    // editor upload custom blocks added
    editor.BlockManager.add('download', {
      id: 'download',
      label: 'download',
      category: 'Basic',
      attributes: {
        class: 'fa fa-download'
      },
      content: `<div style="color:#d983a6;
      display:inline-block;
      vertical-align:top;
      padding:10px;
      max-width:100%;">
      <button data-gjs-type="download"><i class="fa fa-download" aria-hidden="true"></i>
      </button>
</div>`,
      draggable: true,
      removable: true
    });
    this.traitService.addDownload(editor, 'download');
  }

  addPopupModal(editor) {
    editor.BlockManager.add('popupModal', {
      id: 'modal',
      label: '<svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,\n' +
        '15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero">\n' +
        '</path>\n        <rect class="gjs-block-svg-path" x="4" y="11.5" width="16" height="1"></rect>\n\n' +
        ' </svg>\n      <div class="gjs-block-label"> Modal </div>',
      category: 'special',
      content: `
      <div style="padding-top: 10px;padding-right: 2px;padding-left: 2px;padding-bottom: 10px">
      <button data-gjs-type="popupModal-type">Modal
      </button>
      </div>
      `,
      draggable: true,
      removable: true
    });
    this.traitService.addPopupModalTraits(editor, 'popupModal-type');
  }


  addSpecialDropdown(editor) {
    editor.BlockManager.add('specialDropdown', {
      id: 'specialDropdown',
      label: `\n      <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n
              <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,
              16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero">
              </path>\n
             <polygon class="gjs-block-svg-path" transform="translate(18.500000, 12.000000) scale(1, -1) translate(-18.500000, -12.000000) "
              points="18.5 11 20 13 17 13"> </polygon>\n
            <rect class="gjs-block-svg-path" x="4" y="11.5" width="11" height="1"></rect>\n
                 </svg>\n      <div class="gjs-block-label"> special dropdown </div>`,
      category: 'special',
      content: {
        type: 'specialdropdown-type'
      },
      draggable: true,
      removable: true
    });
    this.traitService.addSpecialDropdownTraits(editor, 'specialdropdown-type');
  }

  dynamicDropdown(editor) {

    editor.BlockManager.add('dynamicDropdown', {
      id: 'dynamicDropdown',
      label: `\n  <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n
      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,
      16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero">
      </path> \n
      <polygon class="gjs-block-svg-path" transform="translate(18.500000,12.000000) scale(1, -1) translate(-18.500000, -12.000000)"
      points = "18.5 11 20 13 17 13"> </polygon>\n
      <rect class="gjs-block-svg-path" x="4" y="11.5" width ="11" height="1"></rect>\n
         </svg>\n  <div class="gjs-block-label"> Dynamic Dropdown </div>`,
      category: 'special',
      // tslint:disable-next-line:max-line-length
      content: `<div  style="padding-top:10px; padding-right: 2px; padding-left: 2px; padding-bottom: 10px">
      <select data-gjs-type="dynamicdropdown-type">
      <option value="1">1</option>
      </select>
      </div>`,
      draggable: true,
      removable: true
    });
    this.traitService.dynamicDropdownTraits(editor, 'dynamicdropdown-type');

  }

  addSpecialCharts(editor) {
    editor.BlockManager.add('highcharts', {
      id: 'highcharts',
      // tslint:disable-next-line:max-line-length
      label: `<svg width="443px" height="70px" viewBox="0 0 256 243" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
      <g>
        <path d="M178.6,119.7 L176.8,116.6 L116.5,96.9 L114.8,98.9 L112.2,99.5 L58.6,224.7 L59.3,228.5 L188.4,174 L189.5,171.8
         L180.5,121.8 L178.6,119.7 Z" fill="#78758C">
        </path>
        <path d="M59.3,228.5 L114.8,98.9 L0.8,61.7 L59.3,228.5 Z" fill="#A3EDBA"></path>
        <path d="M157.1,0.3 L114.8,98.9 L178.6,119.7 L178.9,118.9 L157.5,1.2 L157.1,0.3 Z" fill="#8087E8"></path>
        <path d="M178.6,119.7 L188.4,174 L192.9,173.9 L254,147.4 L256.7,145.1 L253.5,142.4
         L181.6,118.2 L178.6,119.7 Z" fill="#30426B"></path>
        <path d="M188.4,174 L200.9,243.4 L256.7,145.1 L188.4,174 Z" fill="#6699A1"></path>
        <path d="M157.1,0.3 L178.6,119.7 L256.7,145.1 L157.1,0.3 Z" fill="#6699A1"></path>
      </g>
    </svg>    <div class="gjs-block-label"> high charts </div>`,
      category: 'Extra',
      content: `<div style="padding-top: 10px;padding-right: 2px;padding-left: 2px;padding-bottom: 10px">
      <div id="highchart4" data-gjs-type="highcharts-type" style="width:100%; height:400px;"></div>
      </div>`,
      draggable: true,
      removable: true
    });
    this.traitService.addHighChartTraits(editor, 'highcharts-type');
  }


}