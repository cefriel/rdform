(self["webpackChunkrapid_triples"]=self["webpackChunkrapid_triples"]||[]).push([[978],{9978:function(e,t,r){const i=r(76063),s=r(47328),{c1:n,namedNode:o,$_PREFIX_CACHE:u}=i,a=/[&"<>']/g,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"},l=/^xml/i,_=e=>e.replace(a,(e=>h[e])),p=/([A-Za-z_][A-Za-z_.0-9-]*)$/,f=/([A-Za-z_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}][A-Za-z_.0-9\-\u00b7\u203f-\u2040\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}]*$)/u;function c(e,t,r,i){if(i.isNamedNode)r+=' rdf:resource="'+_(i.value)+'"/>';else if(i.isLiteral)i.isLanguaged?r+=' xml:lang="'+i.language+'"':i.isDatatyped&&(r+=' rdf:datatype="'+_(i.datatype.value)+'"'),r+=">"+_(i.value)+"</"+t+">";else{if(!i.isBlankNode)throw new Error(`Not allowed to serialize term type '${i.termType}' as object in XML serializer.`);r+=' rdf:nodeID="'+_(i.value)+'"/>'}return r}function d(e,t){let r,i,s,n,o=e._h_prefixes,a=t.value;{let e=p.exec(a);if(e)r=a.slice(0,e.index),i=e[1];else{if(e=f.exec(a),!e)throw new Error(`Cannot serialize predicate <${a}> into an XML qname`);r=a.slice(0,e.index),i=e[1]}}e:for(;;){t:for(;;){if(o[u]){let e=o[u]._h_inverse;if(r in e){let t=e[r];s=(t?t+":":"")+i,n="<"+s;break e}break}for(let e in o){let t=o[e];if(t===r){s=(e?e+":":"")+i,n="<"+s;break t}}break}let t="__g"+e._c_prefixes_tmp++;s=t+":"+i,n="<"+s+" xmlns:"+t+'="'+r+'"';break}return[s,n]}class m extends s{constructor(e={}){let t=e.prefixes;delete e.prefixes,super(e),this._b_prefixes_open=!0,this._c_prefixes_tmp=0,this._kt_subject=null;let r='<?xml version="1.0" encoding="utf-8"?>\n<rdf:RDF\n\txmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"';this._update_prefixes({rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#"}),t?this.push(r+this._serialize_prefixes(t)):this.push(r)}_serialize_prefixes(e,t=!1){if(!this._b_prefixes_open)return;let r=this._h_prefixes,i="";for(let s in e)if(s in r){if(e[s]!==r[s]||t)throw new Error(`Cannot change prefixes in RDF/XML serializer. Attempted to modify '${s}' from <${r[s]}> to <${e[s]}>`)}else{if(l.test(s))throw new Error(`Cannot serialize prefix '${s}' since it is reserved under the blanket XML namespace.`);i+=`\n\txmlns${s?":"+s:""}="${o(e[s]).value}"`}return i&&this._update_prefixes(e,!0),i}_serialize_c3r(e){let t="";this._b_prefixes_open&&(t+=">",this._b_prefixes_open=!1);let r=this._h_prefixes;null!==this._kt_subject&&(t+="\n\t</rdf:Description>",this._kt_subject=null);for(let i in e){let s="",o=n(i,r);if(!o.termType)continue;if(!o.isNamedNode&&!o.isBlankNode)throw new Error(`Cannot use ${o.termType} term type in subject position`);if(o.isNamedNode)s+='\n\n\t<rdf:Description rdf:about="'+_(o.value)+'">';else{if(!o.isBlankNode)throw new Error(`Not allowed to serialize term type '${o.termType}' as subject in XML serializer.`);s+='\n\n\t<rdf:Description rdf:nodeID="'+_(o.value)+'">'}let u=!1,a=e[i];for(let e in a){let t=n(e,r);if(!t.termType)continue;if(!t.isNamedNode)throw new Error(`Cannot use ${t.termType} term type in subject position`);let[i,o]=d(this,t),h="";for(let s of a[e]){let e=n(s,r);e.termType&&(h+="\n\t\t"+c(this,i,o,e))}h&&(s+=h,u=!0)}u&&(t+=s+"\n\t</rdf:Description>")}return t}_serialize_quad(e){let t=i.from.quad(e);this._b_prefixes_open&&(this._s_push+=">",this._b_prefixes_open=!1);let{subject:r,predicate:s,object:n}=t,[o,u]=d(this,s),a="\n\t\t"+c(this,o,u,n);if(r.equals(this._kt_subject))this._s_push+=a;else{if(!r.isNamedNode&&!r.isBlankNode)throw new Error(`Cannot use ${r.termType} term type in subject position`);let e;if(r.isNamedNode)e='\n\n\t<rdf:Description rdf:about="'+_(r.value)+'">'+a;else{if(!r.isBlankNode)throw new Error(`Not allowed to serialize term type '${r.termType}' as subject in XML serializer.`);e='\n\n\t<rdf:Description rdf:nodeID="'+_(r.value)+'">'+a}this._kt_subject?this._s_push+="\n\t</rdf:Description>"+e:this._s_push+=e,this._kt_subject=r}}_flush(){m._flush_buffer(this),this._b_prefixes_open&&(this.push(">"),this._b_prefixes_open=!1),this._kt_subject?this.push("\n\t</rdf:Description>\n</rdf:RDF>\n"):this.push("\n</rdf:RDF>\n"),this.push(null)}}Object.assign(m,{_serialize_comment:s.prototype._serialize_hash_comment}),e.exports=function(e){return new m(e)}},47328:function(e,t,r){if("function"!==typeof queueMicrotask){let e=Promise.resolve();try{queueMicrotask=t=>e.then(t).catch((e=>setTimeout((()=>{throw e}),0)))}catch(u){}}const i=r(76063),s=r(41476),n=32768;class o extends s.Transform{static _flush_buffer(e){e._s_push&&(e.push(e._s_push),e._s_push="")}constructor(e={}){super({writableObjectMode:!0,readableObjectMode:!1});let{prefixes:t={}}=e;this._s_push="",this._n_max_buffer=e.max_buffer||e.maxBuffer||n,this._h_prefixes=i.cache_prefixes(t||{}),this.on("pipe",(e=>{e.on("prefix",((e,t)=>{this.write({type:"prefixes",value:{[e]:t}})})),e.on("comment",(e=>{this.write({type:"comment",value:e})}))})),e.close&&this.once("close",e.close),e.drain&&this.on("drain",e.drain),e.error&&this.on("error",e.error),e.finish&&this.once("finish",e.finish),e.data&&this.on("data",e.data),e.end&&this.once("end",e.end),e.warning&&this.on("warning",e.warning)}_serialize_hash_comment(e){return"# "+e.replace(/\n/g,"\n# ")+"\n"}_serialize_newlines(e=1){return"\n".repeat(e)}_serialize_c4r(e){let t=this._h_prefixes,r=[],s="";for(let i in e)"*"!==i&&r.push(i),s+=this._serialize_c3r(e[i]);if(r.length){let e=`Destination format does not support quads; an implicit union into the default graph was performed on the quads contained in graphs: ${r.map((e=>i.c1(e,t).verbose())).join(", ")}`;this.emit("warning",e)||console.warn(e)}return s}_serialize_c3(){throw new Error(`Write event type 'c3' not supported by ${this.constructor.name}`)}_serialize_c4(){throw new Error(`Write event type 'c4' not supported by ${this.constructor.name}`)}_serialize_c3r(){throw new Error(`Write event type 'c3r' should have been implemented by subclass ${this.constructor.name}`)}_serialize_quad(){throw new Error(`Write event type 'quad' should have been implemented by subclass ${this.constructor.name}`)}_serialize_comment(){}_update_prefixes(e,t=!1){let r={...this._h_prefixes,...e};this._h_prefixes=i.cachePrefixes(r||{},t)}_transform(e,t,r){let i;try{i=this.serialize(e)}catch(s){return r(s),s}if(i)o._flush_buffer(this),this.push(i);else{let e=this._s_push.length;e>this._n_max_buffer?o._flush_buffer(this):e&&queueMicrotask((()=>o._flush_buffer(this)))}r()}_queue(e){this._s_push+=e,this._s_push.length>this._n_max_buffer?o._flush_buffer(this):queueMicrotask((()=>o._flush_buffer(this)))}serialize(e){switch(e.type){case void 0:return this._serialize_quad(e);case"c3r":return this._serialize_c3r(e.value);case"c4r":return this._serialize_c4r(e.value);case"array":{let t="";for(let r of e.value){let e=this.serialize(r);e?t+=e:this._s_push&&(t+=this._s_push,this._s_push="")}return t}case"quad":return this._serialize_quad(e.value);case"c3":return this._serialize_c3(e.value);case"c4":return this._serialize_c4(e.value);case"prefixes":return this._serialize_prefixes(e.value);case"comment":return this._serialize_comment(e.value);case"newline":case"newlines":return this._serialize_newlines(e.value);default:throw new Error(`no such writable data event type for RDF stream: '${e.type}'`)}}rinse(){this._reset(),o._flush_buffer(this)}_flush(){o._flush_buffer(this),this.push(null)}}Object.assign(o.prototype,{isGraphyWritable:!0,_serialize_prefixes:o.prototype._update_prefixes}),e.exports=o},41476:function(e,t,r){var i=r(48287)["Buffer"],s=r(65606);const n=r(28399);class o extends n.Readable{constructor(e={}){if(super(e),e.iterator)throw new Error("readable stream iterator shortcut not yet implemented")}until(e,t){return new Promise(((r,i)=>{this.on("error",(e=>{i(e)})),t?this.once(e,((...e)=>{r(this,...e)})):this.once(e,r)}))}bucket(e="utf8"){let t=this._readableState;return t.objectMode?new Promise(((e,t)=>{let r=[];this.pipe(new n.Writable({write(e,t,i){r.push(e),i()},writev(e,t){r.push(...e),t()}})).on("error",(e=>{t(e)})).on("finish",(()=>{e(r)}))})):"utf8"===e||"utf-8"===e?new Promise(((t,r)=>{let i="";this.setEncoding(e),this.pipe(new n.Writable({decodeStrings:!1,write(e,t,r){i+=e,r()},writev(e,t){i+=e.join(""),t()}})).on("error",(e=>{r(e)})).on("finish",(()=>{t(i)}))})):"buffer"===e?new Promise(((e,t)=>{let r=i.from([]);this.pipe(new n.Writable({decodeStrings:!0,write(e,t,s){r=i.concat([r,e],r.length+e.length),s()}})).on("error",(e=>{t(e)})).on("finish",(()=>{e(r)}))})):void 0}}class u extends n.Writable{until(e,t){return new Promise(((r,i)=>{this.on("error",(e=>{i(e)})),t?this.once(e,((...e)=>{r(this,...e)})):this.once(e,r)}))}import(e){return e.on("data",(e=>this.write(e))).on("end",(()=>this.end())).on("error",(e=>this.emit("error",e))),this}}class a extends n.Duplex{until(e,t){return new Promise(((r,i)=>{this.on("error",(e=>{i(e)})),t?this.once(e,((...e)=>{r(this,...e)})):this.once(e,r)}))}bucket(e="utf8"){let t=this._readableState;return t.objectMode?new Promise(((e,t)=>{let r=[];this.pipe(new n.Writable({write(e,t,i){r.push(e),i()},writev(e,t){r.push(...e),t()}})).on("error",(e=>{t(e)})).on("finish",(()=>{e(r)}))})):"utf8"===e||"utf-8"===e?new Promise(((t,r)=>{let i="";this.setEncoding(e),this.pipe(new n.Writable({decodeStrings:!1,write(e,t,r){i+=e,r()},writev(e,t){i+=e.join(""),t()}})).on("error",(e=>{r(e)})).on("finish",(()=>{t(i)}))})):"buffer"===e?new Promise(((e,t)=>{let r=i.from([]);this.pipe(new n.Writable({decodeStrings:!0,write(e,t,s){r=i.concat([r,e],r.length+e.length),s()}})).on("error",(e=>{t(e)})).on("finish",(()=>{e(r)}))})):void 0}}class h extends n.Transform{until(e,t){return new Promise(((r,i)=>{this.on("error",(e=>{i(e)})),t?this.once(e,((...e)=>{r(this,...e)})):this.once(e,r)}))}bucket(e="utf8"){let t=this._readableState;return t.objectMode?new Promise(((e,t)=>{let r=[];this.pipe(new n.Writable({write(e,t,i){r.push(e),i()},writev(e,t){r.push(...e),t()}})).on("error",(e=>{t(e)})).on("finish",(()=>{e(r)}))})):"utf8"===e||"utf-8"===e?new Promise(((t,r)=>{let i="";this.setEncoding(e),this.pipe(new n.Writable({decodeStrings:!1,write(e,t,r){i+=e,r()},writev(e,t){i+=e.join(""),t()}})).on("error",(e=>{r(e)})).on("finish",(()=>{t(i)}))})):"buffer"===e?new Promise(((e,t)=>{let r=i.from([]);this.pipe(new n.Writable({decodeStrings:!0,write(e,t,s){r=i.concat([r,e],r.length+e.length),s()}})).on("error",(e=>{t(e)})).on("finish",(()=>{e(r)}))})):void 0}import(e){return e.on("data",(e=>this.write(e))).on("end",(()=>this.end())).on("error",(e=>this.emit("error",e))),this}demolish(e){if(this.push=e=>{if(null!==e)throw new Error("[ERR_STREAM_DESTROYED]: Cannot push after stream was destroyed")},this.emit=function(e,...t){"end"!==e&&Object.getPrototypeOf(this).emit.apply(this,[e,...t])},e)return n.Transform.prototype.destroy.call(this,e)}}const l=new Function("try {return this===global;}catch(e){return false;}")(),[_,p]=(()=>"undefined"===typeof s?[!0,!1]:s.browser?[!0,!0]:"undefined"===s.versions||"undefined"===s.versions.node?[!0,!1]:[!1,!1])();(p||l&&+/^v(\d+)/.exec(s.version)[1]<10)&&(h.prototype.destroy=a.prototype.destroy=function(e,t){this._readableState.destroyed=!0,this._writableState.destroyed=!0;let r=()=>{this._writableState.emitClose&&this._readableState.emitClose&&this.emit("close")};return this._destroy(e||null,(e=>{!t&&e?(s.nextTick((()=>{this.emit("error",e),r()})),this._writableState.errorEmitted=!0):(s.nextTick(r),t&&t(e))})),this},h.prototype._destroy=a.prototype._destroy=(e,t)=>t(e));class f extends h{constructor(e={}){super({...e,writableObjectMode:!0,readableObjectMode:!0}),this._as_inputs=new Set,this.on("pipe",(e=>{this._as_inputs.add(e),e.on("prefix",((...e)=>{this.emit("prefix",...e)})).on("comment",((...e)=>{this.emit("comment",...e)}))})),this.on("unpipe",(e=>{this._as_inputs.delete(e)}))}_destroy(){for(let e of this._as_inputs)e.destroy()}}class c extends f{_transform(e,t,r){r(null,JSON.stringify(e.isolate())+"\n")}}class d extends f{_transform(e,t,r){r(null,{type:"quad",value:e})}}h.QuadsToOther=f,e.exports={...n,Readable:o,Writable:u,Duplex:a,Transform:h,QuadsToOther:f,quads_to_json(){return new c},quads_to_writable(){return new d},source(e,t=null){return t||"string"!==typeof e||(t="utf8"),new o({objectMode:!t&&"string"!==typeof e&&!i.isBuffer(e),read(){this.push(e,t),this.push(null)}})}}}}]);
//# sourceMappingURL=978.e4631de6.js.map