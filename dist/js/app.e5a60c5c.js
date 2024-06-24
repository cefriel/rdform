(function(){var e={836:function(e,t,a){"use strict";var n=a(5471),i=a(5668),o=a(5322),r=function(){var e=this,t=e._self._c;return t(i.A,{attrs:{id:"inspire"}},[t("Topbar"),t(o.A,[t("router-view")],1),t("Footer")],1)},s=[],c=a(3698),d=a(2938),l=a(8143),m=function(){var e=this,t=e._self._c;return t(l.A,{attrs:{padless:""}},[t(c.A,{staticClass:"flex",attrs:{flat:"",tile:"",color:"#f5f5f5"}},[t(d.OQ,{staticClass:"text-center"},[e._v(" "+e._s((new Date).getFullYear())+" — "),t("strong",[t("a",{attrs:{href:"https://www.cefriel.com"}},[e._v("Cefriel")])]),e._v(" - "),t("strong",[t("a",{attrs:{href:"https://www.cefriel.com/privacy-policy/"}},[e._v("Privacy")])])])],1)],1)},u=[],p={name:"Footer"},h=p,f=a(845),y=(0,f.A)(h,m,u,!1,null,null,null),g=y.exports,_=a(301),b=a(5420),v=a(2367),w=function(){var e=this,t=e._self._c;return t(_.A,{attrs:{app:"",flat:"","clipped-left":""}},[t("router-link",{attrs:{to:"/"}},[t(b.A,{staticClass:"mx-2",attrs:{src:e.app_logo,"max-height":"40","max-width":"40",contain:""}})],1),t(v.sw,[e._v(e._s(e.app_name))])],1)},A=[],T={name:"App",data(){return{app_name:"Cefriel RDF Metadata Generator",app_logo:a(9467),path_items:[]}}},k=T,C=(0,f.A)(k,w,A,!1,null,null,null),S=C.exports,x={name:"App",components:{Footer:g,Topbar:S},data(){return{app_name:"Cefriel RDF Metadata Generator",app_logo:a(3153),path_items:[],username:window.localStorage.getItem("auth-user")}},methods:{}},U=x,j=(0,f.A)(U,r,s,!1,null,null,null),D=j.exports,N=a(9335);n.Ay.use(N.A);var O=new N.A({theme:{themes:{light:{primary:"#757575"}}}}),R=a(173),P=a(3740),L=a(4414),I=a(3449),q=a(174),E=a(2756),M=function(){var e=this,t=e._self._c;return t("div",[t("PageTitle",{attrs:{title:e.asset_type,show_breadcrumbs:!0}}),t(E.A,{staticClass:"px-10 my-2"},[t(L.A,{staticClass:"py-2",attrs:{cols:"8"}},[t("p",[e._v("Fill the form with all the metadata and download the RDF representation using "),t("a",{attrs:{href:"https://w3id.org/mobilitydcat-ap/"}},[e._v("mobilityDCAT-AP")]),e._v("."),t("br"),e._v(" Test and experiment with different metadata to learn how different information are described according to the moilityDCAT-AP specification. The form is compliant with the minimum profile required by mobilityDCAT-AP."),t("br"),e._v(" The page is client-side only so all the information inserted are not collected/stored but can not be retrieved if the page is reloaded."),t("br"),t("br"),e._v(" The output RDF can be converted to different serialization using online converters such as "),t("a",{attrs:{href:"https://rdfshape.weso.es/dataConvert"}},[e._v("RDFShape")]),e._v(".")])]),t(L.A,{staticClass:"text-right py-2",attrs:{cols:"4"}},[t("img",{staticStyle:{"max-height":"100px"},attrs:{src:a(3153),alt:"Company Logo"}})])],1),e._l(e.alert_messages,(function(e,a){return t("Alert",{key:a,attrs:{message:e.message,alert_type:e.alert_type}})})),t(I.A,[t(E.A,[t(L.A,{attrs:{cols:"6"}},[t(q.A,{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("JsonForm",{key:"formKey",attrs:{schema:e.asset_schema,options:e.options},on:{"update:model":e.set_asset_value}})],1),t(P.A,{on:{click:e.create_object}},[e._v("Submit")])],1),t(L.A,{attrs:{cols:"6"}},[e.saved_asset_rdf?t("div",{staticClass:"rdf-container"},[t(P.A,{staticClass:"mb-2",attrs:{color:"primary"},on:{click:e.downloadRDF}},[e._v("Download RDF")]),t("pre",{staticClass:"language-turtle",attrs:{id:"rdf-text"}},[e._v("                        "),t("p",{staticClass:"language-turtle",domProps:{innerHTML:e._s(e.saved_asset_rdf)}}),e._v("\n                    ")])],1):t("div",{staticClass:"text-center"},[t("img",{staticStyle:{"max-width":"60%",height:"auto","margin-top":"200px"},attrs:{src:a(6906),alt:"No Data Available"}}),t("p",[e._v("Your RDF model will appear here!")])])])],1)],1)],2)},F=[],B=(a(4114),a(4603),a(7566),a(8721),function(){var e=this,t=e._self._c;return t(I.A,[t(q.A,{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("v-jsf",{attrs:{schema:e.schema,options:e.options},on:{input:function(t){return e.$emit("update:model",t)}},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1)],1)}),G=[],K=a(9678),z=(a(6213),{name:"JsonForm",components:{VJsf:K.A},props:{schema:Object,options:Object},emits:["update:model"],data(){return{valid:!1,model:{}}},watch:{},methods:{}}),H=z,Y=(0,f.A)(H,B,G,!1,null,null,null),Q=Y.exports,W=a(1965),J=function(){var e=this,t=e._self._c;return t(I.A,[t(W.A,{staticClass:"text-center",attrs:{value:!!e.message,type:e.alert_type,dismissible:""}},[e._v(" "+e._s(e.message)+" ")])],1)},V=[],$={name:"Alert",props:{message:String,alert_type:String}},X=$,Z=(0,f.A)(X,J,V,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e._self._c;return t(I.A,{staticClass:"page-top py-4 mb-8",attrs:{fluid:""}},[t(E.A,[t(L.A,{attrs:{cols:"9"}},[t(E.A,{staticClass:"ml-4"},[t(L.A,[t("h1",{staticClass:"text-capitalize"},[e._v(e._s(e.title||e.remove_underscore))])])],1),null!=e.subtitle?t(E.A,{staticClass:"ml-4"},[t(L.A,[t("h2",{staticClass:"text-capitalize"},[e._v(e._s(e.subtitle||e.remove_underscore))])])],1):e._e(),null!=e.third_line?t(E.A,{staticClass:"ml-4"},[t(L.A,[t("h3",[e._v(" "+e._s(e.third_line||e.remove_underscore)+" ")])])],1):e._e()],1),t(L.A,{attrs:{cols:"3"}},[null!=e.image?t(E.A,[t(b.A,{attrs:{"max-height":"160px",position:"bottom center",src:e.image,contain:""}})],1):e._e()],1)],1)],1)},ae=[],ne={name:"PageTitle",components:{},props:{title:{type:String,required:!0},subtitle:{type:String,required:!1},third_line:{type:String,required:!1},freetext:{type:String,required:!1},image:{type:String,required:!1},show_breadcrumbs:{type:Boolean,required:!0}}},ie=ne,oe=(0,f.A)(ie,te,ae,!1,null,"46f3abe2",null),re=oe.exports,se=a(8019),ce=a.n(se),de='{%- set prefix="https://knowledge.c-innovationhub.com/cefriel/data/" -%}\r\n{%- set dcat_content = obj.header -%}\r\n{%- set json_content = obj.content -%}\r\n{%- set asset_name = slugify(dcat_content.name) -%}\r\n{%- set asset_type = dcat_content.type -%}\r\n{%- set asset_id = \'<\' + prefix + asset_type + \'#\' + asset_name + \'>\' -%}\r\n{%- set catalogue_id= \'<\' + prefix + \'CefrielDataCatalogue#\' + asset_type + \'>\' -%}\r\n{%- set catalogue_record_id = \'<\' + prefix + \'CefrielDataCatalogueRecord/\' + asset_type + \'#\' + asset_name + \'>\' -%}\r\n{%- set asset_type_url = data_platform_url + \'/assets/\' + asset_name -%}\r\n\r\n@prefix dct: <http://purl.org/dc/terms/> .\r\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\r\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\r\n@prefix dcat: <https://www.w3.org/ns/dcat#> .\r\n@prefix vcard: <http://www.w3.org/2006/vcard/> .\r\n@prefix foaf: <http://xmlns.com/foaf/0.1/> .\r\n@prefix owl: <http://www.w3.org/2002/07/owl#> .\r\n@prefix mobilitydcatap: <https://w3id.org/mobilitydcat-ap#> .\r\n@prefix mdata: <https://w3id.org/mobilitydcat-ap/mobility-data-standard/> .\r\n@prefix mtheme: <https://w3id.org/mobilitydcat-ap/mobility-theme/> .\r\n\r\n{{catalogue_id | safe}} rdf:type dcat:Catalog;\r\n\tdct:title "Cefriel Data Catalogue for {{asset_type}}";\r\n\tdct:description "Catalogue of TANGENT data sources for {{asset_type}}"@en;\r\n\tdct:publisher [\r\n\t    rdf:type foaf:Agent;\r\n\t    foaf:name "Cefriel Data Publisher";\r\n\t    foaf:mbox "info@cefriel.com";\r\n\t];\r\n\tdct:dataset {{asset_id | safe}};\r\n\tdcat:record {{catalogue_record_id | safe}};\r\n\tfoaf:homepage <{{asset_type_url}}>.\r\n\r\n{{catalogue_record_id | safe}} rdf:type dcat:CatalogRecord ;\r\n\tdct:modified "{{dcat_content.last_updated}}"^^xsd:dateTime ;\r\n\tdct:created "{{dcat_content.creation_time}}"^^xsd:dateTime ;\r\n\tfoaf:primaryTopic {{asset_id  | safe}} .\r\n\r\n{{asset_id | safe}} rdf:type dcat:Dataset;\r\n    dct:identifier """{{dcat_content.identifier}}""";\r\n    dct:title "{{dcat_content.name}}";\r\n    dct:description """{{dcat_content.description}}""";\r\n    {%if dcat_content.publisher.publisher_name or dcat_content.publisher.publisher_email %}\r\n    dct:publisher [\r\n\t    rdf:type foaf:Agent;\r\n      {%if dcat_content.publisher.publisher_name %}\r\n\t    foaf:name "{{dcat_content.publisher.publisher_name}}";\r\n      {%endif%}\r\n      {%if dcat_content.publisher.publisher_email %}\r\n\t    foaf:mbox "{{dcat_content.publisher.publisher_email}}";\r\n      {%endif%}\r\n    ];\r\n    {%endif%}\r\n\r\n    {%if json_content.mobility_themes%}\r\n    {%- for mtheme in json_content.mobility_themes -%}\r\n\t  mobilitydcatap:mobilityTheme mtheme:{{mtheme | lower | replace(" ", "-") | replace("," , "")}};\r\n    {%- endfor -%}\r\n    {%endif%}\r\n    {%if \'://\' in json_content.spatial_coverage %}\r\n    dcat:spatial <{{json_content.spatial_coverage}}>;\r\n    {%else%}\r\n    dcat:spatial """{{json_content.spatial_coverage}}""";\r\n    {%endif%}\r\n    {%if json_content.spatial_aggregation%}\r\n    dcat:spatialResolutionInMeters """{{json_content.spatial_aggregation}}""";\r\n    {%endif%}\r\n\r\n    {%if json_content.temporal_coverage_start or json_content.temporal_coverage_end%}\r\n    dcat:temporal [ a dct:PeriodOfTime;\r\n      {%if json_content.temporal_coverage_start%}\r\n\t    dcat:startDate """{{json_content.temporal_coverage_start}}""";\r\n      {%endif%}\r\n      {%if json_content.temporal_coverage_end%}\r\n\t    dcat:endDate """{{json_content.temporal_coverage_end}}""";\r\n      {%endif%}\r\n    ];\r\n    {%endif%}\r\n\r\n    {%if json_content.temporal_aggregation%}\r\n    dcat:temporalResolution """{{json_content.temporal_aggregation}}""";\r\n    {%endif%}\r\n\r\n    {%-if json_content.source_asset.id-%}\r\n    dct:source <{{json_content.source_asset.id}}>;\r\n    {%-endif-%}\r\n\r\n    {%- set accrual_periodicity = json_content.accrual_periodicity -%}\r\n    dcat:accrualPeriodicity <{{ freq_iri[accrual_periodicity] }}>.\r\n\r\n  {%if json_content.distributions %}\r\n  {%- for distribution in json_content.distributions -%}\r\n  {%- set distribution_id = \'<\' + prefix + asset_type + \'/Distribution#\' + asset_name + \'-\' + loop.index + \'>\' -%}\r\n  {{distribution_id | safe}} rdf:type dcat:Distribution;\r\n\t  mobilitydcatap:mobilityDataStandard mdata:{{distribution.data_schema | lower | replace(" ", "-")}} ;\r\n    {% if \'://\' in json_content.spatial_coverage %}\r\n    dct:format <{{distribution.format}}>;\r\n    {%else%}\r\n    dct:format "{{distribution.format}}";\r\n    {%endif%}\r\n\t  {%-if json_content.data_sample -%}\r\n    {%- for sample in json_content.data_sample -%}\r\n    adms:sample [\r\n      rdf:type dcat:Distribution;\r\n      dcat:downloadURL <{{sample.url}}>;\r\n      {%-if sample.sample_description -%}\r\n      dct:description """{{sample.sample_description}}"""\r\n      {%- endif -%}\r\n    ];\r\n    {%- endfor -%}\r\n\t  {%- endif -%}\r\n\tdcat:accessURL <{{distribution.access_url}}> .\r\n  {%- endfor -%}\r\n  {%- endif -%}\r\n',le=a(8848),me=a.n(le),ue=(a(9434),a(4526));const pe=new(ce());var he={name:"AssetCreate",components:{JsonForm:Q,PageTitle:re,Alert:ee},props:{asset_type:String},data(){return{template_engine:null,template:null,valid:null,saved_asset_rdf:null,asset_schema:{},initial_asset:{},asset:{},saved_asset:{},alert_messages:[],options:{ajv:pe,context:{languages:a(7932)}}}},mounted(){this.asset_schema=a(3858),this.template_engine=a(1326),this.template=this.template_engine.compile(de)},methods:{downloadRDF(){if(!this.saved_asset_rdf)return;const e=document.getElementById("rdf-text");if(e){let t=e.textContent||e.innerText;t=t.replace(/^\s*\n/gm,"").trim();const a=new Blob([t],{type:"text/plain;charset=utf-8"}),n=window.URL.createObjectURL(a),i=document.createElement("a");i.href=n,i.setAttribute("download","rdf-data.ttl"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(n)}},set_asset_value:function(e){this.asset=e},create_object:function(){function e(e){return String(e).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}this.$refs.form.validate(),this.valid?this.alert_messages=[]:this.alert_messages.push({message:"Validation error",alert_type:"error"}),this.asset.header.creation_time=(new Date).toISOString(),this.asset.header.last_updated=(new Date).toISOString(),this.asset.header.type="Dataset",this.asset.header.id=(0,ue.A)();let t={Continuously:"http://publications.europa.eu/resource/authority/frequency/UPDATE_CONT","Never (one-time provision)":"http://publications.europa.eu/resource/authority/frequency/NEVER","On occurrence / irregularly":"http://publications.europa.eu/resource/authority/frequency/IRREG","Up to 1min":"https://w3id.org/mobilitydcat-ap/update-frequency/1min","Up to 5min":"https://w3id.org/mobilitydcat-ap/update-frequency/5min","Up to 10 min":"https://w3id.org/mobilitydcat-ap/update-frequency/10min","Up to 15 min":"https://w3id.org/mobilitydcat-ap/update-frequency/15min","Up to 30 min":"https://w3id.org/mobilitydcat-ap/update-frequency/30min","Up to 1h":"http://publications.europa.eu/resource/authority/frequency/HOURLY","Up to 2h":"http://publications.europa.eu/resource/authority/frequency/BIHOURLY","Up to 3h":"http://publications.europa.eu/resource/authority/frequency/TRIHOURLY","Up to 12h":"https://w3id.org/mobilitydcat-ap/update-frequency/12h","Up to 24h":"https://w3id.org/mobilitydcat-ap/update-frequency/24h","Up to Weekly":"http://publications.europa.eu/resource/authority/frequency/WEEKLY","Up to Monthly":"http://publications.europa.eu/resource/authority/frequency/MONTHLY","Up to every 2 months":"http://publications.europa.eu/resource/authority/frequency/BIMONTHLY","Up to every 3 months":"http://publications.europa.eu/resource/authority/frequency/QUARTERLY","Up to every 6 months":"https://w3id.org/mobilitydcat-ap/update-frequency/6-months","Up to Annual":"http://publications.europa.eu/resource/authority/frequency/ANNUAL","Up to Biennial":"http://publications.europa.eu/resource/authority/frequency/BIENNIAL","Up to Triennial":"http://publications.europa.eu/resource/authority/frequency/TRIENNIAL","Up to Quadrennial":"http://publications.europa.eu/resource/authority/frequency/QUADRENNIAL","Up to Quinquennial":"http://publications.europa.eu/resource/authority/frequency/QUINQUENNIAL","Up to Decennial":"http://publications.europa.eu/resource/authority/frequency/DECENNIAL","Up to Bidecennial":"http://publications.europa.eu/resource/authority/frequency/BIDECENNIAL","Up to Tridecennial":"http://publications.europa.eu/resource/authority/frequency/TRIDECENNIAL",Unknown:"http://publications.europa.eu/resource/authority/frequency/UNKNOWN"};try{this.saved_asset=this.template.render({obj:this.asset,data_platform_url:"https://kcong.cefriel.com/",freq_iri:t,slugify:e})}catch(a){console.log(a)}this.saved_asset=this.saved_asset.replace(/^\s*\n/gm,""),this.saved_asset_rdf=me().highlight(this.saved_asset,me().languages.turtle,"turtle")}}},fe=he,ye=(0,f.A)(fe,M,F,!1,null,"228ed2d9",null),ge=ye.exports;n.Ay.use(R.Ay);const _e=new R.Ay({mode:"history",routes:[{path:"/",name:"asset_create",component:ge,props:{asset_type:"mobilityDCAT-AP"},meta:{title:"Cefriel RDF Metadata Generator"}}]});var be=_e,ve=a(5993),we=a(6017);n.Ay.config.productionTip=!1,n.Ay.use(ve.Ay),be.beforeEach(((e,t,a)=>{const{title:n}=e.meta;document.title="function"===typeof n?n(e):n,a()})),n.Ay.filter("formatDate",(function(e){if(e)return(0,we.A)(String(e)).format("MM/DD/YYYY hh:mm")})),n.Ay.filter("remove_underscore",(function(e){return e?(e=e.toString(),e.replaceAll("_"," ")):""})),new n.Ay({vuetify:O,router:be,render:e=>e(D)}).$mount("#app")},9467:function(e,t,a){"use strict";e.exports=a.p+"img/cefriel_clogo.e1c6dc50.png"},3153:function(e,t,a){"use strict";e.exports=a.p+"img/logo.8c51896c.png"},6906:function(e,t,a){"use strict";e.exports=a.p+"img/no_data.fb465a2b.png"},2801:function(){},7932:function(e){"use strict";e.exports=JSON.parse('[{"code":"ab","name":"Abkhaz"},{"code":"aa","name":"Afar"},{"code":"af","name":"Afrikaans"},{"code":"ak","name":"Akan"},{"code":"sq","name":"Albanian"},{"code":"am","name":"Amharic"},{"code":"ar","name":"Arabic"},{"code":"an","name":"Aragonese"},{"code":"hy","name":"Armenian"},{"code":"as","name":"Assamese"},{"code":"av","name":"Avaric"},{"code":"ae","name":"Avestan"},{"code":"ay","name":"Aymara"},{"code":"az","name":"Azerbaijani"},{"code":"bm","name":"Bambara"},{"code":"ba","name":"Bashkir"},{"code":"eu","name":"Basque"},{"code":"be","name":"Belarusian"},{"code":"bn","name":"Bengali; Bangla"},{"code":"bh","name":"Bihari"},{"code":"bi","name":"Bislama"},{"code":"bs","name":"Bosnian"},{"code":"br","name":"Breton"},{"code":"bg","name":"Bulgarian"},{"code":"my","name":"Burmese"},{"code":"ca","name":"Catalan; Valencian"},{"code":"ch","name":"Chamorro"},{"code":"ce","name":"Chechen"},{"code":"ny","name":"Chichewa; Chewa; Nyanja"},{"code":"zh","name":"Chinese"},{"code":"cv","name":"Chuvash"},{"code":"kw","name":"Cornish"},{"code":"co","name":"Corsican"},{"code":"cr","name":"Cree"},{"code":"hr","name":"Croatian"},{"code":"cs","name":"Czech"},{"code":"da","name":"Danish"},{"code":"dv","name":"Divehi; Dhivehi; Maldivian;"},{"code":"nl","name":"Dutch"},{"code":"dz","name":"Dzongkha"},{"code":"en","name":"English"},{"code":"eo","name":"Esperanto"},{"code":"et","name":"Estonian"},{"code":"ee","name":"Ewe"},{"code":"fo","name":"Faroese"},{"code":"fj","name":"Fijian"},{"code":"fi","name":"Finnish"},{"code":"fr","name":"French"},{"code":"ff","name":"Fula; Fulah; Pulaar; Pular"},{"code":"gl","name":"Galician"},{"code":"ka","name":"Georgian"},{"code":"de","name":"German"},{"code":"el","name":"Greek, Modern"},{"code":"gn","name":"GuaranÃ­"},{"code":"gu","name":"Gujarati"},{"code":"ht","name":"Haitian; Haitian Creole"},{"code":"ha","name":"Hausa"},{"code":"he","name":"Hebrew (modern)"},{"code":"hz","name":"Herero"},{"code":"hi","name":"Hindi"},{"code":"ho","name":"Hiri Motu"},{"code":"hu","name":"Hungarian"},{"code":"ia","name":"Interlingua"},{"code":"id","name":"Indonesian"},{"code":"ie","name":"Interlingue"},{"code":"ga","name":"Irish"},{"code":"ig","name":"Igbo"},{"code":"ik","name":"Inupiaq"},{"code":"io","name":"Ido"},{"code":"is","name":"Icelandic"},{"code":"it","name":"Italian"},{"code":"iu","name":"Inuktitut"},{"code":"ja","name":"Japanese"},{"code":"jv","name":"Javanese"},{"code":"kl","name":"Kalaallisut, Greenlandic"},{"code":"kn","name":"Kannada"},{"code":"kr","name":"Kanuri"},{"code":"ks","name":"Kashmiri"},{"code":"kk","name":"Kazakh"},{"code":"km","name":"Khmer"},{"code":"ki","name":"Kikuyu, Gikuyu"},{"code":"rw","name":"Kinyarwanda"},{"code":"ky","name":"Kyrgyz"},{"code":"kv","name":"Komi"},{"code":"kg","name":"Kongo"},{"code":"ko","name":"Korean"},{"code":"ku","name":"Kurdish"},{"code":"kj","name":"Kwanyama, Kuanyama"},{"code":"la","name":"Latin"},{"code":"lb","name":"Luxembourgish, Letzeburgesch"},{"code":"lg","name":"Ganda"},{"code":"li","name":"Limburgish, Limburgan, Limburger"},{"code":"ln","name":"Lingala"},{"code":"lo","name":"Lao"},{"code":"lt","name":"Lithuanian"},{"code":"lu","name":"Luba-Katanga"},{"code":"lv","name":"Latvian"},{"code":"gv","name":"Manx"},{"code":"mk","name":"Macedonian"},{"code":"mg","name":"Malagasy"},{"code":"ms","name":"Malay"},{"code":"ml","name":"Malayalam"},{"code":"mt","name":"Maltese"},{"code":"mi","name":"MÄori"},{"code":"mr","name":"Marathi (MarÄá¹­hÄ«)"},{"code":"mh","name":"Marshallese"},{"code":"mn","name":"Mongolian"},{"code":"na","name":"Nauru"},{"code":"nv","name":"Navajo, Navaho"},{"code":"nb","name":"Norwegian BokmÃ¥l"},{"code":"nd","name":"North Ndebele"},{"code":"ne","name":"Nepali"},{"code":"ng","name":"Ndonga"},{"code":"nn","name":"Norwegian Nynorsk"},{"code":"no","name":"Norwegian"},{"code":"ii","name":"Nuosu"},{"code":"nr","name":"South Ndebele"},{"code":"oc","name":"Occitan"},{"code":"oj","name":"Ojibwe, Ojibwa"},{"code":"cu","name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic"},{"code":"om","name":"Oromo"},{"code":"or","name":"Oriya"},{"code":"os","name":"Ossetian, Ossetic"},{"code":"pa","name":"Panjabi, Punjabi"},{"code":"pi","name":"PÄli"},{"code":"fa","name":"Persian (Farsi)"},{"code":"pl","name":"Polish"},{"code":"ps","name":"Pashto, Pushto"},{"code":"pt","name":"Portuguese"},{"code":"qu","name":"Quechua"},{"code":"rm","name":"Romansh"},{"code":"rn","name":"Kirundi"},{"code":"ro","name":"Romanian, [])"},{"code":"ru","name":"Russian"},{"code":"sa","name":"Sanskrit (Saá¹ská¹›ta)"},{"code":"sc","name":"Sardinian"},{"code":"sd","name":"Sindhi"},{"code":"se","name":"Northern Sami"},{"code":"sm","name":"Samoan"},{"code":"sg","name":"Sango"},{"code":"sr","name":"Serbian"},{"code":"gd","name":"Scottish Gaelic; Gaelic"},{"code":"sn","name":"Shona"},{"code":"si","name":"Sinhala, Sinhalese"},{"code":"sk","name":"Slovak"},{"code":"sl","name":"Slovene"},{"code":"so","name":"Somali"},{"code":"st","name":"Southern Sotho"},{"code":"es","name":"Spanish; Castilian"},{"code":"su","name":"Sundanese"},{"code":"sw","name":"Swahili"},{"code":"ss","name":"Swati"},{"code":"sv","name":"Swedish"},{"code":"ta","name":"Tamil"},{"code":"te","name":"Telugu"},{"code":"tg","name":"Tajik"},{"code":"th","name":"Thai"},{"code":"ti","name":"Tigrinya"},{"code":"bo","name":"Tibetan Standard, Tibetan, Central"},{"code":"tk","name":"Turkmen"},{"code":"tl","name":"Tagalog"},{"code":"tn","name":"Tswana"},{"code":"to","name":"Tonga (Tonga Islands)"},{"code":"tr","name":"Turkish"},{"code":"ts","name":"Tsonga"},{"code":"tt","name":"Tatar"},{"code":"tw","name":"Twi"},{"code":"ty","name":"Tahitian"},{"code":"ug","name":"Uyghur, Uighur"},{"code":"uk","name":"Ukrainian"},{"code":"ur","name":"Urdu"},{"code":"uz","name":"Uzbek"},{"code":"ve","name":"Venda"},{"code":"vi","name":"Vietnamese"},{"code":"vo","name":"VolapÃ¼k"},{"code":"wa","name":"Walloon"},{"code":"cy","name":"Welsh"},{"code":"wo","name":"Wolof"},{"code":"fy","name":"Western Frisian"},{"code":"xh","name":"Xhosa"},{"code":"yi","name":"Yiddish"},{"code":"yo","name":"Yoruba"},{"code":"za","name":"Zhuang, Chuang"},{"code":"zu","name":"Zulu"}]')},3858:function(e){"use strict";e.exports=JSON.parse('{"type":"object","properties":{"header":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"identifier":{"type":"string","title":"Identifier","description":"Identifier of the data source.","default":"MY_DATASOURCE"},"name":{"type":"string","title":"Name","description":"Name of the data source","default":"My Data Source"},"description":{"type":"string","title":"Description","description":"Description of the data contained in the data source","default":"My Data Source contains mobility data about mobility things."},"publisher":{"title":"Publisher","description":"The entity that provides the data source","type":"array","items":{"type":"object","properties":{"publisher_name":{"type":"string","title":"Publisher name","description":"Name of the entity providing the data source","default":"Cefriel Data Publisher"},"publisher_email":{"title":"Publisher email","type":"string","description":"Email of the entity providing the data source","default":"info@cefriel.com"}}}},"access_url":{"type":"string","title":"Access URL","x-display":"hidden"},"creation_time":{"type":"string","title":"Creation date","x-display":"hidden"},"last_updated":{"type":"string","title":"Modification time","x-display":"hidden"},"type":{"type":"string","title":"Type","x-display":"hidden"},"id":{"type":"string","title":"Identifier","x-display":"hidden"}}},"content":{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","properties":{"mobility_themes":{"title":"Mobility themes","description":"Categories describing the data in the data source. The first level of categories defined by the mobilitydcatap:mobilityTheme vocabulary can be selected. This field is recommended.","type":"array","items":{"type":"string","enum":["Static road network data","Geometry","Road width","Number of lanes","Gradients","Junctions","Road classification","Cycle network data","Network geometry and lane character","Network detailed attributes","Network closures/diversions","Pedestrian network data","Pedestrian network geometry","Pedestrian accessibility facilities","Static traffic signs and regulations","Tunnel access conditions","Bridge access conditions","Speed limits","Other static traffic signs","Permanent access restrictions","Other traffic regulations","Traffic circulation plans","Toll information","Location of tolling stations","Identification of tolled roads","Applicable road user charges and payment methods","Payment methods for tolls","Parking, service and rest area information","Car parking locations and conditions","Car parking availability","Service and rest area locations and conditions","Service and rest area availability","Truck parking locations and conditions","Truck parking availability","Park and Ride stops","Bike-parking locations","Filling and charging stations","Location and conditions of charging points","Location and conditions of filling stations","Availability of charging points for electric vehicles","Availability of filling stations","Freight and logistics","Freight delivery regulations","Location of delivery areas","Availability of delivery areas","Dynamic traffic signs and regulations","Road closures and access conditions","Lane closures and access conditions","Bridge closures and access conditions","Tunnel closures and access conditions","Other access restrictions and traffic regulations","Dynamic overtaking bans on heavy goods vehicles","Dynamic speed limits","Direction of travel on reversible lanes","Other temporary traffic management measures or plans","Road work information","Long-term road works","Short-term road works","Road events and conditions","Accidents and incidents","Poor road conditions","Road weather conditions","Real-time traffic data","Traffic volume","Speed","Location and length of queues","Current travel times","Predicted travel times","Expected delays","Waiting time at border crossings to non-EU Member States","Traffic data at border crossings to third countries","General information for trip-planning","Address identifiers","Topographic places","Points of interest","Parameters needed to calculate environmental factors","Parameters needed to calculate costs","Public transport scheduled transport","Stop facilities location and features","Stop facilities geometry and map layout","Stop facilities status of features","Stop facilities accessibility and paths within facility","Operational Calendar","Connection links","Network topology and routes/lines","Transport operators","Timetables static","Real-time estimated departure and arrival times","Planned interchanges between scheduled services","Hours of operation","Vehicle details","Environmental standards for vehicles","Disruptions, delays, cancellations","Basic common standard fares","Passenger classes","Common fare products","Special Fare Products","Basic commercial conditions","Purchase information","Public transport non-scheduled transport","Provider data","Service areas and service times","Locations and stations","Fares","Reservation and purchase options","Accesibility information for vehicles","Environmental standards for vehicles","Sharing and Hiring Services","Bike-sharing Locations and stations","Car-sharing Locations and stations","Bike-hiring Stations","Car-sharing Stations","E-scooter-sharing Locations and stations","Car-sharing Availability","Bike sharing Availability","Car-hiring Availability","Bike-hiring Availability","E-scooter-sharing Availability","Payment methods","Environmental standards for vehicles","Air and space travel","Waterways and water bodies","Other"]}},"distributions":{"title":"Distributions","description":"A specific representation of a Dataset.","type":"array","items":{"type":"object","properties":{"data_schema":{"description":"The data schema/model adopted to represent the data in the distribution. The data schema/model should be selected from the list defined in the mobilitydcatap:mobility-data-standard vocabulary or defined as TANGENT Reference Conceptual Model.","title":"Data schema/model","type":"string","default":"Other","enum":["DATEX II","OCIT-C","C-ITS","TN-ITS","INSPIRE","GML","NeTEx","SIRI","GTFS","GTFS-RT","GBFS","tpegML","DINO","Other"]},"format":{"type":"string","description":"The format used to encode the data in the distribution. The vocabulary http://publications.europa.eu/resource/dataset/file-type is recommended to serialise the admissible values ","title":"Resource format","default":"http://publications.europa.eu/resource/authority/file-type/CSV"},"access_url":{"type":"string","title":"Access URL.","description":"URL redirecting to a webpage or an endpoint to access the data.","default":"http://www.cefriel.com/data/my_data_source"}}}},"accrual_periodicity":{"description":"Describes how often the content of the data source is updated. The usage of the vocabularies http://publications.europa.eu/resource/authority/frequency and https://w3id.org/mobilitydcat-ap/update-frequency is recommended.","title":"Accrual periodicity","type":"string","enum":["Continuously","Never (one-time provision)","On occurrence / irregularly","Up to 1min","Up to 5min","Up to 10 min","Up to 15 min","Up to 30 min","Up to 1h","Up to 2h","Up to 3h","Up to 12h","Up to 24h","Up to Weekly","Up to Monthly","Up to every 2 months","Up to every 3 months","Up to every 6 months","Up to Annual","Up to Biennial","Up to Triennial","Up to Quadrennial","Up to Quinquennial","Up to Decennial","Up to Bidecennial","Up to Tridecennial","Unknown"],"default":"Unknown"},"spatial_coverage":{"type":"string","default":"http://publications.europa.eu/resource/authority/country/ITA","description":"The geographical coverage of the data in the data source.","title":"Area covered"},"temporal_coverage_start":{"type":"string","format":"date","description":"The starting timestamp for the timeframe covered by the data source. This field is recommended.","title":"Timeframe start"},"temporal_coverage_end":{"type":"string","format":"date","description":"The ending timestamp for the timeframe covered by the data source. This field is recommended.","title":"Timeframe end"}}}}}')}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,o){if(!n){var r=1/0;for(l=0;l<e.length;l++){n=e[l][0],i=e[l][1],o=e[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(s=!1,o<r&&(r=o));if(s){e.splice(l--,1);var d=i();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,i,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,r=n[0],s=n[1],c=n[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(c)var l=c(a)}for(t&&t(n);d<r.length;d++)o=r[d],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},n=self["webpackChunkmobilitydcatap_ui"]=self["webpackChunkmobilitydcatap_ui"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(836)}));n=a.O(n)})();
//# sourceMappingURL=app.e5a60c5c.js.map