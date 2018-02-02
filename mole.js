(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.位图1 = function() {
	this.initialize(img.位图1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,502,319);


(lib.位图2 = function() {
	this.initialize(img.位图2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,425,319);


(lib.位图3 = function() {
	this.initialize(img.位图3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,449,324);


(lib.位图6 = function() {
	this.initialize(img.位图6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,934,396);


(lib.位图7 = function() {
	this.initialize(img.位图7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,496,81);


(lib.位图8 = function() {
	this.initialize(img.位图8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,603,412);


(lib.位图9 = function() {
	this.initialize(img.位图9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,555,459);


(lib.點陣圖10 = function() {
	this.initialize(img.點陣圖10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,735,554);


(lib.點陣圖12 = function() {
	this.initialize(img.點陣圖12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.點陣圖14 = function() {
	this.initialize(img.點陣圖14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1536,1152);


(lib.點陣圖15 = function() {
	this.initialize(img.點陣圖15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,267);


(lib.點陣圖4 = function() {
	this.initialize(img.點陣圖4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,753,546);


(lib.點陣圖7 = function() {
	this.initialize(img.點陣圖7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,747,557);


(lib.點陣圖8 = function() {
	this.initialize(img.點陣圖8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,760,555);


(lib.點陣圖9 = function() {
	this.initialize(img.點陣圖9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,745,561);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol327 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.5,0,3.6,0).s().p("AgiAtIASg0IgNABIgDgwIBEAAQgUAygUA7g");
	this.shape.setTransform(17.7,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-4.3,0,4.3,0).s().p("AgqAKIAXgEIgCgWIgPABIgDgcIBCAAIACAZIgPAAIABAQIARgFIALAgQgiAOgrAFg");
	this.shape_1.setTransform(10.4,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.4,0,3.5,0).s().p("AgIACIgagHIAVgxIAqAAIgFAMIALBdIglAEg");
	this.shape_2.setTransform(31.6,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.4,0,3.5,0).s().p("AgYAZQgIgFgBgKQAAgXAIgRIAfAGQgGAPAAAJIAAABIAGABIAWgEIAGAbIggAGQgRAAgJgGg");
	this.shape_3.setTransform(22.7,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-1.9,0,2,0).s().p("AgSAPIAFgjIAgAAIgFApg");
	this.shape_4.setTransform(23.7,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-7,0,7.1,0).s().p("AACA3QgdAAgUgMQgWgPAAgbQAAgYALgfIAHAAIAgAHQgMAXAAASQAAAOAKAHQAJAIAUAAIA3gIIAHAgIg6AIg");
	this.shape_5.setTransform(58.1,20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-6.8,0,6.9,0).s().p("AhAAQIAqgCIgDgXIgrgEIAGgiIAhACIAAgFIAkAAIABAIIAwAFIgDAjIgpgDIADARIAygFIAEAiIiBAKg");
	this.shape_6.setTransform(41.5,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-2.2,0,2.3,0).s().p("AgWgkIAlAAIAHBFIgjAEg");
	this.shape_7.setTransform(66.6,18.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-2.8,0,2.9,0).s().p("AgbgHIAPgQIARAAQAOALAJAMIgYAYg");
	this.shape_8.setTransform(60.7,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-10,0,10.1,0).s().p("AA6AiIg3AMIglADIgHAAQgRAAgLgJQgLgIAAgRQAAgMAEgNIgUAEIgDgjIBQgKIAAgCIBsAAIADAeIgmABQAcAWASAdIgZAZgAgjgPIgFATQAAAMAMAAIAegEIAdgHIgLgKIAQgQg");
	this.shape_9.setTransform(83.7,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AFFAsIgDgdIhCgGIAFgiIA5AEIgCgMIAngEIADAUIBCAHIgGAiIg4gGIADAZIBFgDIAAAEgACYAsIgCgYIg/AGIgEgiIA/gHIgCgXIAlgEIADAZIAaAAIAEAiIgbABIADAagABmAsIAIgIIALAIgAAeAsIABgCIAGACgAhpAsIgCgQIAlgDIACATgAi9AsIAOgdIgagCIAFghIAmABIANgYIAmALIgIAQIBrAHIgEAiIh5gIIgMAbgAkLAsIAAgSIgCgaQgDgEgFAAQgVABgRALIADAjIAKgZIAfAJIgHARIhFAAIgFhGIAjgEIAAAFQAWgLAXAAQASAAALAMQAKAQAAAUIAAAJIgBAXgAmrAsIAAgGIAPgCIgCgWIgTgCIAGgiIBKAIIgHAiIgSgCIACARIAQAAIABAJgAAXAXIALghQAZADARAGIgKAjQgWgHgVgEg");
	this.shape_10.setTransform(49.1,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#10285F").ss(4,1,1).p("AFAgLIgEgdIhCgFIAFgjIA5AEIgBgNIAngEIADAVIBCAHIgHAjIg4gGIAEAYIBEgDIAAAEIADAdIglABQAbAWATAeIgZAZIgRgUIg3AMIglADIgIAAQgRAAgLgJQgLgIAAgRQAAgMAEgOIgUAEIgDgjIBQgJIAAgCIBsAAAFzAwIgLgMIAQgQIhIAGIgGAUQAAAMANAAIAfgEgACTgLIgDgYIg/AGIgEgjIA/gGIgCgYIAlgDIADAZIAbgBIADAkIgbAAIADAaIAIBFIglAEIgIhJIAlAAABggLIgPAPIAhAgIAYgXQgKgNgNgLIgTAAIAIgHIALAHABGg4IgKAjQgWgHgUgDIAKgiQAZADARAGgAhvgLIgCgPIAlgDIACASIABAIIAwAEIgDAjIgpgDIADASIAygFIAEAiIiCAKIgEgjIArgCIgEgYIgrgEIAGghIAhACIAAgFIAlAAAAfgLIgGgBIgBABIAHAAIAgAHQgLAWAAASQAAAPAKAHQAJAIAVAAQAYAAAfgIIAHAgQgfAIgcAAIgKAAQgdAAgUgMQgXgPAAgbQAAgZALgeAjCgLIANgdIgagCIAFgiIAmACIANgYIAmALIgIAPIBrAHIgEAkIh5gIIgMAaIgGALIALBfIgmAEIgGg1IgZgIIAVgxIArAAAjwgLIABgXIAAgIQAAgWgKgQQgLgLgSAAQgXAAgWAKIAAgEIgjADIAGBHIBEAAIAHgRIgegIIgLAYIgDgiQARgMAVgCQAFAAADAGIACAZIAAASIAhAAIgFApIgigGIAGgjAkPA9IACACIAFAAIAXgFIAGAcIggAHQgSAAgJgHQgJgFgBgKQAAgYAJgRIAgAGQgIAPAAAKgAmxgLIAAgGIAPgBIgCgXIgTgBIAGgkIBKAIIgHAjIgSgCIACARIAQAAIABAJIACAYIgQABIACAQIARgFIALAhQgjANgrAGIgJgiIAXgFIgCgXIgPACIgDgcIBEAAAkcgLQgUAygUA8IgfgLIASg1IgMABIgDgv");
	this.shape_11.setTransform(49.7,16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.5,0,3.6,0).s().p("AgjAtIASg0IgMABIgDgwIBEAAQgVAygTA7g");
	this.shape_12.setTransform(17.7,20.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-4.3,0,4.3,0).s().p("AgqAKIAXgEIgCgWIgPABIgDgcIBCAAIACAZIgPAAIABAQIARgFIALAgQgiAOgrAFg");
	this.shape_13.setTransform(10.4,19.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.4,0,3.5,0).s().p("AgIACIgagHIAVgxIAqAAIgFAMIALBdIglAEg");
	this.shape_14.setTransform(31.6,20.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.4,0,3.5,0).s().p("AgYAZQgIgFgBgKQAAgXAIgRIAfAGQgGAPAAAJIAAABIAGABIAWgEIAGAbIggAGQgQAAgKgGg");
	this.shape_15.setTransform(22.7,22.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-1.9,0,2,0).s().p("AgSAPIAFgjIAgAAIgFApg");
	this.shape_16.setTransform(23.7,17);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-7,0,7.1,0).s().p("AACA3QgcAAgVgMQgWgPAAgbQAAgYALgfIAHAAIAgAHQgMAXAAASQAAAOAKAHQAJAIAUAAQAYAAAfgIIAHAgQgeAIgcAAg");
	this.shape_17.setTransform(58.1,20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-6.9,0,6.8,0).s().p("AhAAQIArgCIgEgXIgrgEIAGgiIAhACIAAgFIAkAAIAAAIIAxAFIgEAjIgogDIADARIAxgFIAFAiIiCAKg");
	this.shape_18.setTransform(41.6,20);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-2.2,0,2.3,0).s().p("AgVgkIAkAAIAIBFIglAEg");
	this.shape_19.setTransform(66.7,18.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-2.8,0,2.9,0).s().p("AgbgHIAPgQIARAAQAOALAJAMIgYAYg");
	this.shape_20.setTransform(60.7,17.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-10,0,10.1,0).s().p("AA6AiIg3AMIgkADIgIAAQgRAAgLgJQgLgIAAgRQAAgMAEgNIgUAEIgDgjIBQgKIAAgCIBsAAIADAeIgmABQAcAWASAdIgZAZgAgjgPIgFATQAAAMAMAAIAegEIAdgHIgLgKIAQgQg");
	this.shape_21.setTransform(83.7,20.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AFFAsIgDgdIhCgGIAFgiIA5AEIgCgMIAngEIADAUIBDAHIgHAiIg4gGIADAZIBFgDIAAAEgACZAsIgDgYIg/AGIgEgiIA/gHIgCgXIAlgEIADAZIAaAAIAEAiIgbABIADAagABmAsIAIgIIALAIgAAeAsIABgCIAGACgAhpAsIgCgQIAlgDIACATgAi8AsIANgdIgagCIAFghIAmABIANgYIAmALIgIAQIBrAHIgEAiIh5gIIgMAbgAkLAsIAAgSIgCgaQgDgEgFAAQgVABgRALIADAjIALgZIAeAJIgHARIhEAAIgGhGIAjgEIAAAFQAWgLAXAAQASAAALAMQAKAQAAAUIAAAJIgBAXgAmrAsIAAgGIAPgCIgCgWIgTgCIAGgiIBKAIIgHAiIgSgCIACARIAQAAIABAJgAAXAXIALghQAZADARAGIgKAjQgWgHgVgEg");
	this.shape_22.setTransform(49.1,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 3
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AH0gJIAABUQAABQhIAAItXAAQhIAAAAhQIAAhUIAAhBQAAhQBIAAINXAAQBIAAAABQg");
	this.shape_23.setTransform(50.1,15.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#0171D5","#2B9BE6"],[0.004,1],0,-4.2,0,6.3).s().p("AmrBSQhIAAAAhPIAAhVQIEBFHjhFIAABVQAABPhIAAg");
	this.shape_24.setTransform(50.1,22.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#09AAEE","#66FFFF"],[0.004,1],0,8.1,0,-10.4).s().p("AnzA3IAAhAQAAhQBIAAINXAAQBIAAAABQIAABAQjxAjj6AAQj5AAkDgjg");
	this.shape_25.setTransform(50.1,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// Layer 4
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0171D5").s().p("AGsCvItXAAQhcABAAhlIAAiVQAAhlBcABINXAAQBcgBAABlIAACVQAABkhaAAIgCAAgAnfhKIAACVQAAA7A0ABINXAAQA0gBAAg7IAAiVQAAg7g0gBItXAAQg0ABAAA7g");
	this.shape_26.setTransform(50,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,104,35);


(lib.Symbol326 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.9,0,3.9,0).s().p("AgmAxIAUg5IgOABIgDg1IBKAAQgXA4gVBBg");
	this.shape.setTransform(14.5,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-4.7,0,4.8,0).s().p("AgvALIAagFIgCgYIgRACIgDggIBJAAIACAcIgRAAIADASIASgGIAMAkQgmAPgvAGg");
	this.shape_1.setTransform(6.4,20.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.8,0,3.9,0).s().p("AgJACIgcgIIAXg2IAvAAIgHANIAMBnIgoAFg");
	this.shape_2.setTransform(29.7,21.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-2.1,0,2.2,0).s().p("AgVAQIAHgmIAkAAIgGAtg");
	this.shape_3.setTransform(21.1,17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.7,0,3.8,0).s().p("AgaAcQgJgGgCgLQAAgaAKgSIAiAHQgHAQAAAKIABACIAGABIAZgGIAGAfIgjAHQgTAAgKgHg");
	this.shape_4.setTransform(19.9,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-7.7,0,7.8,0).s().p("AACA8QgfAAgXgNQgYgRAAgdQAAgaAMgiIAIAAIAjAHQgNAZAAAUQAAAQALAIQAKAIAWAAIA8gJIAIAjQghAJgfAAg");
	this.shape_5.setTransform(58.9,21.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-7.5,0,7.6,0).s().p("AhHASIAvgCIgEgaIgvgEIAGgmIAlADIgBgGIAoAAIABAJIA1AGIgDAmIgtgEIADATIA3gGIAFAmIiPALg");
	this.shape_6.setTransform(40.7,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-2.4,0,2.5,0).s().p("AgYgoIApAAIAIBMIgoAEg");
	this.shape_7.setTransform(68.3,19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.1,0,3.1,0).s().p("AgegIIAQgRIAUAAQAPAMAKAOIgbAZQgOgRgUgRg");
	this.shape_8.setTransform(61.8,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-11.1,0,11,0).s().p("ABAAlIg9ANIgoAEIgIAAQgTABgMgLQgMgJABgTQAAgNADgOIgWAEIgEgmIBZgLIAAgCIB3AAIADAhIgpABQAdAXAVAiIgbAagAgmgQIgGAUQAAANAMAAIAigDIAhgIIgOgLIASgSg");
	this.shape_9.setTransform(87.1,21.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AFmAwIgEggIhIgGIAGglIA+AEIgCgOIArgEIADAXIBJAHIgHAmIg9gHIADAbIBLgDIABAEgACoAwIgDgaIhFAGIgEglIBFgHIgDgaIApgEIADAcIAegBIADAmIgdABIADAcgABxAwIAIgIIAMAIgAAiAwIAAgBIAHABgAh0AwIgCgRIApgDIACAUgAjPAwIAOggIgcgCIAFgkIArABIAOgaIApAMIgIARIB1AIIgEAmIiFgJIgNAdgAkmAwIABgUIgDgcQgDgFgGAAQgXACgSAMIADAmIALgbIAiAKIgIASIhLAAIgGhNIAmgEIABAFQAXgLAaAAQATAAANAMQALASAAAXIAAAJIgBAZgAnVAwIgBgGIARgCIgCgZIgWgBIAHgmIBSAIIgIAmIgTgCIABASIASAAIABAKgAAaAaIAMglQAbAEATAGIgMAmQgXgHgXgEg");
	this.shape_10.setTransform(49,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#10285F").ss(4,1,1).p("AFfgMIgEggIhIgGIAGgmIA+AEIgCgOIAsgEIACAWIBKAIIgIAnIg9gHIADAbIBMgDIAAAEIAEAgIgpABQAdAYAVAhIgcAcIgTgXIg8ANIgpAFIgJAAQgSAAgMgLQgMgJAAgSQAAgOAEgPIgXAEIgDglIBYgLIAAgCIB4AAAFVA/IAjgDIAggIIgNgMIASgRIhOAGIgHAWQAAAMANAAgAChgMIgCgaIhGAGIgEgmIBGgHIgDgaIAogEIAEAbIAdAAIAEAnIgdAAIACAdIAJBLIgpAFIgJhQIApAAABqgMIgRAQIAkAjIAbgaIgagZIgUAAIAIgIIAMAIABOg+IgMAnQgYgIgXgEIAMglQAbADAUAHgAh6gMIgCgRIAogDIACAUIABAJIA2AEIgEAnIgtgEIADAUIA3gFIAFAlIiQALIgDgmIAugDIgDgZIgvgFIAGglIAkACIAAgFIAoAAAAjgMIgIgCIAAACIAIAAIAjAIQgNAXAAAUQAAARALAIQAKAJAXAAQAbAAAhgKIAIAkIhAAJIgLAAQggAAgXgNQgYgRAAgeQAAgbAMghAjWgMIAPggIgdgCIAGgmIAqACIAOgaIAqAMIgJARIB2AIIgEAnIiGgJIgNAdIgGANIAMBnIgqAFIgHg6IgcgKIAXg1IAwAAAkIgMIABgZIAAgKQAAgXgLgSQgMgNgUAAQgZAAgYAMIgBgFIglAEIAFBOIAEA0IANgBIgTA6IAhAMQAWhCAXg3IAIgTIgigJIgMAbIgDgmQASgNAXgCQAGAAAEAGIACAcIAAAUIAkAAIgGAtIglgHIAHgmAkJA/IAGAgIgjAGQgTAAgLgGQgJgGgBgLQAAgbAJgSIAkAHQgJAQAAALIACABIAGACgAncgMIgBgHIARgBIgCgZIgVgCIAGgnIBSAJIgHAnIgUgDIACATIARAAIABAKIADAaIgRACIABARIATgFIAMAjQgmAPgwAHIgJgmIAZgFIgCgZIgRABIgDgeIBKAAAmEgMIBMAA");
	this.shape_11.setTransform(49.7,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.9,0,3.9,0).s().p("AgmAxIAUg5IgOABIgDg1IBKAAQgXA4gVBBg");
	this.shape_12.setTransform(14.5,21.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-4.8,0,4.7,0).s().p("AgvALIAZgFIgBgYIgRACIgDggIBJAAIACAcIgRABIACARIATgFIAMAjQgmAPgvAGg");
	this.shape_13.setTransform(6.4,20.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.8,0,3.9,0).s().p("AgJADIgcgJIAXg2IAuAAIgGAOIAMBmIgpAFg");
	this.shape_14.setTransform(29.7,21.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-2.1,0,2.2,0).s().p("AgVARIAHgnIAkAAIgHAtg");
	this.shape_15.setTransform(21.1,18.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.7,0,3.8,0).s().p("AgaAcQgKgGgBgLQAAgaAKgSIAiAHQgHAQAAAKIAAABIAHABIAYgFIAHAfIgjAGQgTAAgKgGg");
	this.shape_16.setTransform(19.9,23.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-7.7,0,7.8,0).s().p("AACA8QgfAAgXgNQgYgQAAgeQAAgaAMgiIAIAAIAjAIQgNAYAAAUQAAAQALAIQAKAIAWAAQAbAAAhgJIAIAkIhAAIg");
	this.shape_17.setTransform(58.9,21.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-7.6,0,7.5,0).s().p("AhGASIAugDIgDgYIgwgFIAGgmIAlACIgBgFIAoAAIABAJIA2AFIgFAnIgsgEIADATIA3gFIAEAmIiOAKg");
	this.shape_18.setTransform(40.7,21.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-2.4,0,2.5,0).s().p("AgYgoIAoAAIAJBMIgoAFg");
	this.shape_19.setTransform(68.3,19.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.1,0,3.2,0).s().p("AgegIIARgRIATAAIAZAZIgaAag");
	this.shape_20.setTransform(61.7,18.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-11.1,0,11,0).s().p("ABAAlIg9ANIgoAEIgIAAQgTAAgMgKQgLgJAAgTQAAgNADgOIgWAEIgEgmIBYgLIAAgCIB4AAIADAhIgpABQAdAYAVAgIgbAbgAgmgQIgGAUQAAANAMAAIAigDIAhgIIgOgLIASgSg");
	this.shape_21.setTransform(87.1,21.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AFmAwIgEggIhJgGIAHglIA9AEIgBgOIArgEIADAXIBJAIIgHAlIg+gHIAEAbIBLgDIABAEgACoAwIgDgaIhFAGIgFglIBGgHIgDgaIApgEIADAcIAdgBIAEAmIgdAAIADAdgABxAwIAIgIIAMAIgAAhAwIABgCIAHACgAh0AwIgCgRIApgDIACAUgAjPAwIAOggIgcgCIAFgkIAqACIAPgbIApAMIgIARIB1AIIgEAmIiFgJIgOAdgAkmAwIABgUIgDgcQgDgEgGAAQgXABgSAMIADAmIALgbIAiAJIgIATIhLAAIgGhNIAmgEIAAAFQAYgLAZAAQAUAAAMAMQAMASAAAXIAAAJIgBAZgAnVAwIgBgGIARgCIgCgZIgWgBIAHgnIBSAJIgIAmIgTgDIABATIASAAIABAKgAAaAaIALgkQAcADATAGIgMAmQgXgIgXgDg");
	this.shape_22.setTransform(49,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 3
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AImgKIAAhIQAAhYhPAAIutAAQhPAAAABYIAABIIAABcQAABZBPAAIOtAAQBPAAAAhZg");
	this.shape_23.setTransform(50.1,16.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#0171D5","#2B9BE6"],[0.004,1],0,-4.7,0,6.8).s().p("AnWBbQhPAAAAhYIAAhdQI4BLIThLIAABdQAABYhPAAg");
	this.shape_24.setTransform(50.1,24.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#09AAEE","#66FFFF"],[0.004,1],0,8.8,0,-11.5).s().p("AolA9IAAhGQAAhZBPABIOtAAQBPgBAABZIAABGQkKAmkSAAQkSAAkdgmg");
	this.shape_25.setTransform(50.1,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// Layer 4
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0171D5").s().p("AHXDAIutAAQhlABAAhuIAAikQAAhwBlABIOtAAQBlgBAABwIAACkQAABuhjAAIgCgBgAoPhRIAACkQAABBA5AAIOtAAQA5AAAAhBIAAikQAAhCg5gBIutAAQg5ABAABCg");
	this.shape_26.setTransform(50,16.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-2.8,114.4,38.5);


(lib.Symbol325 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.5,0,3.6,0).s().p("AgiAtIASg0IgNABIgDgwIBEAAQgUAygUA7g");
	this.shape.setTransform(17.7,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-4.3,0,4.3,0).s().p("AgqAKIAXgEIgCgWIgPABIgDgcIBCAAIACAZIgPAAIABAQIARgFIALAgQgiAOgrAFg");
	this.shape_1.setTransform(10.4,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.4,0,3.5,0).s().p("AgIACIgagHIAVgxIAqAAIgFAMIALBdIglAEg");
	this.shape_2.setTransform(31.6,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.4,0,3.5,0).s().p("AgYAZQgIgFgBgKQAAgXAIgRIAfAGQgGAPAAAJIAAABIAGABIAWgEIAGAbIggAGQgRAAgJgGg");
	this.shape_3.setTransform(22.7,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-1.9,0,2,0).s().p("AgSAPIAFgjIAgAAIgFApg");
	this.shape_4.setTransform(23.7,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-7,0,7.1,0).s().p("AACA3QgdAAgUgMQgWgPAAgbQAAgYALgfIAHAAIAgAHQgMAXAAASQAAAOAKAHQAJAIAUAAIA3gIIAHAgIg6AIg");
	this.shape_5.setTransform(58.1,20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-6.8,0,6.9,0).s().p("AhAAQIAqgCIgDgXIgrgEIAGgiIAhACIAAgFIAkAAIABAIIAwAFIgDAjIgpgDIADARIAygFIAEAiIiBAKg");
	this.shape_6.setTransform(41.5,19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-2.8,0,2.9,0).s().p("AgbgHIAPgQIARAAQAOALAJAMIgYAYg");
	this.shape_7.setTransform(60.7,17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-2.2,0,2.3,0).s().p("AgWgkIAlAAIAHBFIgjAEg");
	this.shape_8.setTransform(66.6,18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-10,0,10.1,0).s().p("AA6AiIg3AMIglADIgHAAQgRAAgLgJQgLgIAAgRQAAgMAEgNIgUAEIgDgjIBQgKIAAgCIBsAAIADAeIgmABQAcAWASAdIgZAZgAgjgPIgFATQAAAMAMAAIAegEIAdgHIgLgKIAQgQg");
	this.shape_9.setTransform(83.7,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AFFAsIgDgdIhCgGIAFgiIA5AEIgCgMIAngEIADAUIBCAHIgGAiIg4gGIADAZIBFgDIAAAEgACYAsIgCgYIg/AGIgEgiIA/gHIgCgXIAlgEIADAZIAaAAIAEAiIgbABIADAagABmAsIAIgIIALAIgAAeAsIABgCIAGACgAhpAsIgCgQIAlgDIACATgAi9AsIAOgdIgagCIAFghIAmABIANgYIAmALIgIAQIBrAHIgEAiIh5gIIgMAbgAkLAsIAAgSIgCgaQgDgEgFAAQgVABgRALIADAjIAKgZIAfAJIgHARIhFAAIgFhGIAjgEIAAAFQAWgLAXAAQASAAALAMQAKAQAAAUIAAAJIgBAXgAmrAsIAAgGIAPgCIgCgWIgTgCIAGgiIBKAIIgHAiIgSgCIACARIAQAAIABAJgAAXAXIALghQAZADARAGIgKAjQgWgHgVgEg");
	this.shape_10.setTransform(49.1,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#10285F").ss(4,1,1).p("AFAgLIgEgdIhCgFIAFgjIA5AEIgBgNIAngEIADAVIBCAHIgHAjIg4gGIAEAYIBEgDIAAAEIADAdIglABQAbAWATAeIgZAZIgRgUIg3AMIglADIgIAAQgRAAgLgJQgLgIAAgRQAAgMAEgOIgUAEIgDgjIBQgJIAAgCIBsAAAFzAwIgLgMIAQgQIhIAGIgGAUQAAAMANAAIAfgEgACTgLIgDgYIg/AGIgEgjIA/gGIgCgYIAlgDIADAZIAbgBIADAkIgbAAIADAaIAIBFIglAEIgIhJIAlAAABggLIgPAPIAhAgIAYgXQgKgNgNgLIgTAAIAIgHIALAHABGg4IgKAjQgWgHgUgDIAKgiQAZADARAGgAhvgLIgCgPIAlgDIACASIABAIIAwAEIgDAjIgpgDIADASIAygFIAEAiIiCAKIgEgjIArgCIgEgYIgrgEIAGghIAhACIAAgFIAlAAAAYgLIAHAAIgGgBIgBABQgLAeAAAZQAAAbAXAPQAUAMAdAAIAKAAQAcAAAfgIIgHggQgfAIgYAAQgVAAgJgIQgKgHAAgPQAAgSALgWIgggHAjCgLIANgdIgagCIAFgiIAmACIANgYIAmALIgIAPIBrAHIgEAkIh5gIIgMAaIgGALIALBfIgmAEIgGg1IgZgIIAVgxIArAAAjwgLIABgXIAAgIQAAgWgKgQQgLgLgSAAQgXAAgWAKIAAgEIgjADIAGBHIADAvIAMgBIgSA1IAfALQAUg8AUgyIAHgRIgegIIgLAYIgDgiQARgMAVgCQAFAAADAGIACAZIAAASIAhAAIgFApIgigGIAGgjAkPA9IACACIAFAAIAXgFIAGAcIggAHQgSAAgJgHQgJgFgBgKQAAgYAJgRIAgAGQgIAPAAAKgAmxgLIAAgGIAPgBIgCgXIgTgBIAGgkIBKAIIgHAjIgSgCIACARIAQAAIABAJIACAYIgQABIACAQIARgFIALAhQgjANgrAGIgJgiIAXgFIgCgXIgPACIgDgcIBEAAAlggLIBEAA");
	this.shape_11.setTransform(49.7,16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.5,0,3.6,0).s().p("AgjAtIASg0IgMABIgDgwIBEAAQgVAygTA7g");
	this.shape_12.setTransform(17.7,20.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-4.3,0,4.3,0).s().p("AgqAKIAXgEIgCgWIgPABIgDgcIBCAAIACAZIgPAAIABAQIARgFIALAgQgiAOgrAFg");
	this.shape_13.setTransform(10.4,19.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.4,0,3.5,0).s().p("AgIACIgagHIAVgxIAqAAIgFAMIALBdIglAEg");
	this.shape_14.setTransform(31.6,20.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-3.4,0,3.5,0).s().p("AgYAZQgIgFgBgKQAAgXAIgRIAfAGQgGAPAAAJIAAABIAGABIAWgEIAGAbIggAGQgQAAgKgGg");
	this.shape_15.setTransform(22.7,22.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-1.9,0,2,0).s().p("AgSAPIAFgjIAgAAIgFApg");
	this.shape_16.setTransform(23.7,17);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-7,0,7.1,0).s().p("AACA3QgcAAgVgMQgWgPAAgbQAAgYALgfIAHAAIAgAHQgMAXAAASQAAAOAKAHQAJAIAUAAQAYAAAfgIIAHAgQgeAIgcAAg");
	this.shape_17.setTransform(58.1,20.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-6.9,0,6.8,0).s().p("AhAAQIArgCIgEgXIgrgEIAGgiIAhACIAAgFIAkAAIAAAIIAxAFIgEAjIgogDIADARIAxgFIAFAiIiCAKg");
	this.shape_18.setTransform(41.6,20);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-2.8,0,2.9,0).s().p("AgbgHIAPgQIARAAQAOALAJAMIgYAYg");
	this.shape_19.setTransform(60.7,17.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-2.2,0,2.3,0).s().p("AgVgkIAkAAIAIBFIglAEg");
	this.shape_20.setTransform(66.7,18.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#4D94C2","#D9F7FF"],[0.004,1],-10,0,10.1,0).s().p("AA6AiIg3AMIgkADIgIAAQgRAAgLgJQgLgIAAgRQAAgMAEgNIgUAEIgDgjIBQgKIAAgCIBsAAIADAeIgmABQAcAWASAdIgZAZgAgjgPIgFATQAAAMAMAAIAegEIAdgHIgLgKIAQgQg");
	this.shape_21.setTransform(83.7,20.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AFFAsIgDgdIhCgGIAFgiIA5AEIgCgMIAngEIADAUIBDAHIgHAiIg4gGIADAZIBFgDIAAAEgACZAsIgDgYIg/AGIgEgiIA/gHIgCgXIAlgEIADAZIAaAAIAEAiIgbABIADAagABmAsIAIgIIALAIgAAeAsIABgCIAGACgAhpAsIgCgQIAlgDIACATgAi8AsIANgdIgagCIAFghIAmABIANgYIAmALIgIAQIBrAHIgEAiIh5gIIgMAbgAkLAsIAAgSIgCgaQgDgEgFAAQgVABgRALIADAjIALgZIAeAJIgHARIhEAAIgGhGIAjgEIAAAFQAWgLAXAAQASAAALAMQAKAQAAAUIAAAJIgBAXgAmrAsIAAgGIAPgCIgCgWIgTgCIAGgiIBKAIIgHAiIgSgCIACARIAQAAIABAJgAAXAXIALghQAZADARAGIgKAjQgWgHgVgEg");
	this.shape_22.setTransform(49.1,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// Layer 3
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(1,1,1).p("AH0gJIAABUQAABQhIAAItXAAQhIAAAAhQIAAhUIAAhBQAAhQBIAAINXAAQBIAAAABQg");
	this.shape_23.setTransform(50.1,15.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#0171D5","#2B9BE6"],[0.004,1],0,-4.2,0,6.3).s().p("AmrBSQhIAAAAhPIAAhVQIEBFHjhFIAABVQAABPhIAAg");
	this.shape_24.setTransform(50.1,22.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#09AAEE","#66FFFF"],[0.004,1],0,8.1,0,-10.4).s().p("AnzA3IAAhAQAAhQBIAAINXAAQBIAAAABQIAABAQjxAjj6AAQj5AAkDgjg");
	this.shape_25.setTransform(50.1,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]}).wait(1));

	// Layer 4
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0171D5").s().p("AGsCvItXAAQhcABAAhlIAAiVQAAhlBcABINXAAQBcgBAABlIAACVQAABkhaAAIgCAAgAnfhKIAACVQAAA7A0ABINXAAQA0gBAAg7IAAiVQAAg7g0gBItXAAQg0ABAAA7g");
	this.shape_26.setTransform(50,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,104,35);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("摩尔活动抢先报", "16px 'SimHei'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 116;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0000FF"},0).wait(1).to({x:2.5,y:2.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,20);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("心情树叶", "16px 'SimHei'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 116;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0000FF"},0).wait(1).to({x:2.5,y:2.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,20);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("快乐生活全纪录", "16px 'SimHei'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 116;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0000FF"},0).wait(1).to({x:2.5,y:2.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,20);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("娱乐小天地", "16px 'SimHei'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 116;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0000FF"},0).wait(1).to({x:2.5,y:2.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,20);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("秘密大家来发现", "16px 'SimHei'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 116;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0000FF"},0).wait(1).to({x:2.5,y:2.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,20);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("庄园大事件", "16px 'SimHei'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 116;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#0000FF"},0).wait(1).to({x:2.5,y:2.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,20);


(lib.Symbol226 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(55,55,55,0.502)").ss(1,1,1,3,true).p("EAAJgp9IgFIKMgAMBLx");
	this.shape.setTransform(27,235.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7B7B7B").ss(1,1,1).p("AAAgLIAAANIAAAK");
	this.shape_1.setTransform(27.9,-35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.102)").s().p("EABTAn/UgA0gkBABAghVIAAgHQAJmABEltQAegMAqgMIhcO2MgAXA5nIBQKPQgvgCgmAeIgKAIgEgB7ApbQgmgegvADIBPqQMgAWg5nIhcu1IBJAYQBDFsAJGAIAAAHUABBAhVgA1AkCIgfBug");
	this.shape_2.setTransform(26,219.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("EAAOgg5IAFoKIAAgDIAAgKIACABIAAAIIBahIQAVgPAogQQhEFtgJGAIAAAHUgBAAhVAA0AkBIAfBuQgnAfgMAQQgaAggNAaQgPAfgIAmgEgAHAqUIgQgqQgNgagaghQgMgQgngeIAfhuUAA1gkCgBBghVIAAgHQgJmAhDlsQAnAPAiAIQAhAHBKBFIgGOIIgILbMAAAA1rIAEE1g");
	this.shape_3.setTransform(26,229.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(252,252,252,0)","rgba(225,225,225,0.102)","rgba(102,102,102,0.502)","rgba(255,255,255,0.102)","rgba(255,255,255,0)"],[0.008,0.227,0.51,0.8,1],-47.6,-267.8,45.1,-267.8).s().p("EgAMApqIAGAbIgDk1MAAAg1rIAJrbIAEuIIAAgQIAJAGIAAANIAAALIAAADIgEIKMgANBLxIgJABg");
	this.shape_4.setTransform(26.5,233.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,-47.5,48.9,552.3);


(lib.Symbol165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(2,1,0,3).p("Aigh0IgCAAIgBAAIABAAAgDBhIAAABIAAgBIgEgDQg+gygwgUQgxgUgXgGIgrgCAjPgoIAUAFQA0ANAoAaQAoAaApAqIgFgPQgnhmhugZACjh0IACAAIgCAAIgCAAADpgEIgqACQgXAGgyAUQgxAUhAA1IgBABIAAgDIADgPQACgCADAAIABgDAAPBIQApgqApgaQAogaA0gNIATgFACdh0QgVAFgwApQg5AwgKBPIgGAPIgJATAich0QAWAFAvApQA5AwALBPAgMBLIABADQAEAAABACIADAPAgEBbIgKgTAAVA5QAnhmBtgZ");
	this.shape.setTransform(379.7,494.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("EhApgAQMA9IAAAIBLAGIAZAGQAYAHAUALEBAqgANMg9HAAAQhUgCg9Ag");
	this.shape_1.setTransform(381.3,-8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#330000").ss(2,2,0,3).p("EAxwgApQAEAhAYAXQAcAcAoAAQAoAAAdgcQAYgXADghEA29gApQADAhAZAXQAcAcAoAAQAoAAAcgcQAZgXADghEg58gApQAEAhAYAXQAcAcAoAAQAoAAAcgcQAZgXADghEg0vgApQADAhAZAXQAcAcAoAAQAoAAAcgcQAYgXAEghA0UgpQAEAhAYAXQAcAcAoAAQAoAAAdgcQAYgXAEghAuXgpQAEAhAYAXQAdAcAoAAQAoAAAcgcQAYgXADghAoggpQAEAhAYAXQAdAcAoAAQAoAAAcgcQAYgXADghAFhgpQADAhAZAXQAcAcAoAAQAoAAAcgcQAYgXAEghALYgpQADAhAZAXQAcAcAoAAQAoAAAcgcQAZgXADghARVgpQAEAhAYAXQAcAcAoAAQAoAAAcgcQAZgXADgh");
	this.shape_2.setTransform(379.7,-42.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#330000").ss(2,1,1).p("EA0wgq8ICNAAEA59gq8IJgAAIgGByIAAABQguPVgLPJQgTZgBSZBQuogDuwgBQxggBxtAEIgKAAIgMABIgCAAIgCAAIgBAAIAAAAIAAAAIgBAAIABgBIAAABIABgBIgBAAIABgBIAAABIAAgBIAAAAEBDjgpJIBgAEIAGAOIgIB5IBdAAIgGBgIBaAKUgCwAqEAArAlYQuZgEucgIQymgJypgPEg28gq8ICNAAEgRTgq8IC8AAEgxvgq8IdbAAEgFggq8QB4g1D+CoIAAAHQC8imCPAsEAAPgo9IAHgFEAIhgq8IC3AAEAOYgq8IC9AAEgLXgq8IC3AAEgCdAn1IAAABIABAAgEgCdAn1IAAAAIAAAAIAAAAEgCdAn1IAAAAIAAgBEgCbAn2IAAAAIgBAAIABAAIgBAAIgBAAIgCAAIgOgBEgCdAn0IABABIABABIgBAAIgBgBEgCiAn1IgLAAIgJAAUggpgAHgf9AAIUAB8gl6gBrgnFIgLkAIAAgBIgGhyIJgAAEACdAn2IAAAAEACeAn1IAAABIgBAAEACeAn0IAAABIAAAAEAChAn1IgDABEACjAn1IALAAEgAEArEIABAGEAAGArEIgCAGEADQApBMAklAAIIc/ACUgBEgmnACogoCEAUVgq8IdbAAEBFBgm+UgCrAqjAB2Ak7MhBZAAAEhFAgm+IgIh5IAGgOIBggEEhGXgleIgGhgIBdAAUACrAqjgB2Ak7MBBaAAAEgDoApkUghKAAagg6AAKUAArglYgCwgqEIBagKEgDPApBUgg6AAKggqAAAUABEgmngCogoC");
	this.shape_3.setTransform(379.7,228.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FCF8F1","#F8F3ED","#ECE3D7"],[0.008,0.525,1],-3,-82,0,-3,-82,530.2).s().p("EAABAlaIADFmIgHAKgEAAEArAIACgEIgCAMgEgALAq3QAEABABACIADAOgEAAHAq6IADgCIgEAEgEAANAqzIAAACIgBACIgCABgEgALAq3IgBgCIABACIAAAAgEgCdAn0IABABQAWAEAvApQA5AxALBQIAHASgEAAUAqjQALhQA5gxQAvgpAWgEIAAgBIABAAIAAABIiRC+QADgJAEgHgEAmFAnyQxhgBxtAEIgJAAIgLAAIABgBIgBAAIAGgCIgHACMANxhNAMAwnAAAMgwnAAAIBClwQADAgAYAYQAdAdAoAAQAoAAAcgdQAZgYADggIdbAAQADAgAZAYQAcAdAoAAQAoAAAdgdQAYgYADggICNAAQADAgAZAYQAcAdAoAAQAoAAAcgdQAYgYAEggIJfAAIgFByIAAABQguPVgMPJQgTZgBSZBQungDuwgBgAUaECIAFgIIADgBIgNgVQAAAfAFgBgAPDDaIgBABIgBABIAUAKIgSgMgAcDp7QgDAMAKAKIgBgkgAV9reIAGAoIgEgpIgBAAgAPlxNIAYAjQAAgegEgCQgJACgHgIgEhDLglJIgLkAIAAgBIgGhyIJgAAQAEAgAYAYQAcAdAoAAQAoAAAcgdQAZgYADggICNAAQADAgAZAYQAcAdAoAAQAoAAAcgdQAYgYAEggIdbAAQADAgAZAYQAdAdAnAAQAoAAAdgdQAYgYAEggIC8AAQAEAgAYAYQAcAdAoAAQAoAAAdgdQAYgYADggIC3AAQAEAgAYAYQAcAdAoAAQApAAAcgdQAYgYAEggQB3g1D9CoIAAAHIgGAFIADEzIADk4QC8imCPAsQAEAgAYAYQAdAdAoAAQAoAAAcgdQAYgYAEggIC3AAQADAgAZAYQAcAdAnAAQAoAAAdgdQAYgYAEggIC9AAIhZFwIsJAAIgFAAIAAAAIgFgBIAAAAIAAAAQhJABg3AbIgDABIgDACIADgCIADgBQA3gbBJgBIAAAAIAAAAIAFABIAAAAIAFAAIMJAAMgSdBNAIgCgBIACABIAAAAIgCAAIABABIgLAAIgKAAUggngAHgf+AAIUAB8gl6gBrgnFgAEtBuIAAAAIgUgKgEgDRglPIBMAGIAYAGQAYAHAVAMQgVgMgYgHIgYgGIhMgGMg9HAAAgEgCgAn0IABABgEgChAn0IABAAgEAP8glMIAXAAg");
	this.shape_4.setTransform(379.7,228.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E3D9B5").s().p("EAAEAqKIAkgxQAdgZAcgTQAogaA0gOIATgEIgWgCIADAGQg0AOgoAaQgcATgdAZIBKhiQAZgNAegHQgeAHgZANIAwhBIAMgBIAJAAQRtgERhABQOwABOnADQhS5BAT5gQAMvJAuvVIALAAIBhAEIAFAOIgHB5IBdAAIgHBgIBbAKUgCwAqEAAqAlYQuYgEudgIQylgJypgPIgrADQgWAGgyAVQgyAUhAA0gEBEzAoLQgTrKAArSQAA7vB38eQh3ceAAbvQAALSATLKI8+gCMgklgAIMAklAAIIc+ACIAAAAgEBEMAngQgxvFAAwAQAB3NBl5MQhlZMgBXNQAAQAAxPFMhBZAAAgEACgAm9IAAgBIAAAAgEAAGAqEIAJgSIgLAYgEgB0ApCQgygVgXgGIgrgDUghKAAagg6AAKUAArglYgCwgqEIBagKIgFhgIBcAAQBmZMAAXNQAAQAgxPFMBBZAAAMhBZAAAQAxvFAAwAQAA3Nhm5MIgIh5IAGgOIBhgEIALAAIALEAUABrAnFgB8Al6UAf+gAIAgnAAHIAKAAIAOABIACAAIABAAIAAAAIAAAAIABAAIgBAAIAAgBQAWAEAvApQA5AxALBQIAFAPQgpgqgpgbQgngag0gOIACgGIgWACIh8AAIgCAAIAAAAIhmABIhKAAIgPAAQ86AJ8uAAIgBAAIAAAAIhfAAIheAAQATrKAArSQAA7vh48eQB4ceAAbvQAALSgTLKIBeAAIBfAAIAAAAIABAAQcuAAc6gJIAPAAIBKAAIBmgBIAAAAIACAAIB8AAIAUAEQA0AOAnAaQApAbApAqIAJASIgCADQg+gygvgTgEgATApjQgnhohugYQBuAYAnBogEgCfAm9IAAgBIAAAAgEAAoApZIgZAZIAZgZgEAAUApjQALhQA5gxQAvgpAWgEIgBABIABAAIgBAAIABAAIAAAAIADAAIg0BEQg9AigbBHQAbhHA9giIhdB4gEBEzAoLgEgC7AoFIAAAAgEABsAn6IAGgDIgGADg");
	this.shape_5.setTransform(379.7,234.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#DCCBA3","#FFFFFF","#A98A45"],[0.008,0.49,1],-229.2,-257.7,0,-229.2,-257.7,345.4).s().p("AABADIgCgDIABgCIACAEIAAABg");
	this.shape_6.setTransform(379.1,504.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EACgAofIAAAAIAAABgEgCfAofIAAAAIAAABgEACcAoZIABAAIAAAAIAAAAIAAAAIAAAAgEgCcAoZIgBAAIABAAIgBgBIABABIgBgBIABABIgBAAIAAgBIAAAAIAAgBIABABIAAABIAAAAIAAAAgEACiAoYIABAAIgBAAIABgBIABAAIgBABIALAAIgMABgEACdAoZIADAAgEACdAoZgEACdAoZIAEgBIgEABgEACdAoZIAAgBIAAABgEACdAoZIAAgBIAAABgEACdAoZIAAgBIAAABgEACcAoZIABAAgEgCcAoZgEgCgAoZIgCgBIACABIgNgBIALAAIgBgBIACAAIACACgEgCgAoZIAAAAgEgCdAoYIAAAAgEAChAoYIABAAgEACiAoXIgCABgEACdAoYIABAAgEACeAoYIgBAAIABgBIAAABgEACdAoYIAAAAgEACdAoYIAAgBIABAAIgBABgEACdAoYIAAgBIAAABgEgCdAoYIAAAAgEgCdAoYIAAAAgEgCdAoXIAAABgEgCdAoYgEgCdAoYgEACeAoXgEAAPgoZIAGgGIgDE5g");
	this.shape_7.setTransform(379.7,224.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AC6gCIAWACIgTADgAjPAAIAWgCIgCAFg");
	this.shape_8.setTransform(379.7,490.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("ACaABIAAABIAAAAIgBAAgAifACIABAAIAAAAgAilABIACABgACfAAIAHgBIgGABIgDABgAijAAIACABgAikAAIABAAgAijAAIgCAAIACAAg");
	this.shape_9.setTransform(379.9,483);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol165, new cjs.Rectangle(-80.7,-48.9,920.8,555.9), null);


(lib.Symbol161 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("AlmHIIIZuTICzNrQnFAsi0AAQg1AAgegEg");
	this.shape.setTransform(7.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-35.4,71.7,92);


(lib.Symbol160 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(2,1,1).p("AhkE5QCjkVAmlc");
	this.shape.setTransform(15.2,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330000").ss(2,1,1).p("ADblfQi5Evj8A5QCNARBDB7QAjBIgJA2QgMA1hIAY");
	this.shape_1.setTransform(3.4,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#BBA066"],[0,1],37.8,34.3,-34.4,18.9).s().p("AhuETQCjkVAmldQBCGTAoEJQiHAdkCAFQBJgXANg1g");
	this.shape_2.setTransform(16.2,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKC7QhCh6iOgRQD7g5C6kvQgnFbikEWQAJg2gjhIg");
	this.shape_3.setTransform(3.4,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-17.1,55.4,72.3);


(lib.Symbol159 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(2,1,1).p("AhkE5QCjkVAmlc");
	this.shape.setTransform(15.2,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330000").ss(2,1,1).p("ADblfQi5Evj8A5QCNARBDB7QAjBIgJA2QgMA1hIAY");
	this.shape_1.setTransform(3.4,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#BBA066"],[0,1],11.7,32.7,-9.9,24.5).s().p("AhvETQCjkVAmldIBsKdQiOAZj9AIQBKgXAMg1g");
	this.shape_2.setTransform(16.3,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKC7QhCh6iOgRQD7g5C6kvQgnFbikEWQAJg2gjhIg");
	this.shape_3.setTransform(3.4,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,-17.1,55.5,72.3);


(lib.Symbol158 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(2,1,1).p("AgWEoQAXgXALgXQAOgdgEghIgCgJQgIgpgUghQgUgfgfgTQgPgJgSgGIgogLIgdgFQBCgOA8gcQA0gbAqgqQApgnAYg2IAWg2IAQg9");
	this.shape.setTransform(11.5,24.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#660000").ss(2,1,1).p("AhLEVIAdg8IAag/IAWhAIAVhFIARhFIAOhJIAMhMIAJhP");
	this.shape_1.setTransform(20.1,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#BBA066"],[0,1],6.3,27.6,-5.7,23).s().p("AhhD6IgBAIIAcg8IAag/IAYhAIAUhFIARhFIAOhJIAMhMIAJhPQATEJA+EUIkJAyQAYgXALgXg");
	this.shape_2.setTransform(22.5,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMENIAIhHQgIgpgUghQgUgfgfgTQgQgJgRgGIgogLIgdgFQBCgOA8gdQA0gaAqgqQAognAZg2IAWg2IAQg9IgJBPIgMBMIgOBJIgSBFIgUBFIgXBAIgbA/IgcA8g");
	this.shape_3.setTransform(11.5,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-5.7,41.5,61.2);


(lib.Symbol156 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("Ak5H6IJzwcIAARGg");
	this.shape.setTransform(-5.4,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AioIJQAmgFAUgWQDEmdBTpyIAARDg");
	this.shape_1.setTransform(9.1,1.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.8,-52.7,62.9,109.5);


(lib.Symbol155 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#993300").ss(6,1,1).p("ABnhxIhnByIBoBxAhnBxIBnhwIhihv");
	this.shape.setTransform(45.9,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiLhxQgBARALANIBLBTIhPBVQgMAMABARQAAARANAMQANAMARgBQARAAAMgNIBJhPIBIBQQAMAMARABQARABANgLQAMgMABgSQABgRgLgNIhOhUIBNhWQALgNgBgRQgBgRgNgMQgNgLgRABQgSABgLANIhGBPIhEhOQgLgMgSgBQgRgBgNALQgMAMgBARg");
	this.shape_1.setTransform(45.8,-23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABmCbQgRgBgMgMIhIhQIhJBPQgMANgRAAQgRABgNgMQgNgMAAgRQgBgRAMgNIBPhUIhLhTQgLgNABgRQABgRAMgMQANgLARABQASABALAMIBEBOIBGhPQALgNASgBQARgBANAMQANALABARQABARgLANIhNBVIBOBVQALANgBASQgBAQgMAMQgMALgQAAIgCAAg");
	this.shape_2.setTransform(45.8,-23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.3,-39.9,31.1,33);


(lib.Symbol154 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(2,1,1).p("Ag3HSQBFgMAOhGQAEgUgJgUQglhThkgLIiqAGQBxhVBfhlQBGhIA7hPIA1hGIAwhKIAfgzIAPgaIAPgaIAOgbIAPgbIAOgbIAOgcIANgc");
	this.shape.setTransform(-2.2,7.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#660000").ss(2,1,1).p("Ah7GpIAVgtIAVguIAUguIASgwIATgxIARgyIAQgzIAPg1IAPg1IAWhSIAUhWIAMg6IALg7IAKg9IAKg+");
	this.shape_1.setTransform(13.6,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(254,254,254,0)","rgba(0,0,0,0.302)"],[0,0.671,1],31,16.9,5.3,9.8).s().p("AijHSQANgFAMgIQAlgcAGgrIAVgtIAUguIAUguIATgwIARgxIASgyIAQgzIAQg0IAPg2IAWhSIAThWIAMg6IALg7IALg9IAJg+IANOgQhyAHhpAAQg3AAg1gCg");
	this.shape_2.setTransform(10.9,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALFdQgegigugOQgqgNgsgCIhiAGIgjAFQBxhVBfhkQBGhKA7hNIA0hHIAxhJIAeg0IAQgZIAPgbIAOgaIAPgcIAOgbIAOgbIANgdIgKA+IgKA9IgLA7IgMA6IgUBWIgWBSIgPA1IgPA1IgQAzIgSAyIgSAxIgTAwIgUAuIgVAuIgUAtQAEgrgfghg");
	this.shape_3.setTransform(-2.5,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-39.7,59,95.2);


(lib.Symbol153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(6,1,1).p("AByh/IhyCAIB0B/AhzB/IBzh+Ihuh9");
	this.shape.setTransform(45.9,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("Aich/QgBAUAMAOIBUBeIhYBeQgNAOAAATQABATAOAOQAOANAUgBQATAAANgOIBShZIBRBZQANAOATABQATABAPgNQAOgNABgTQABgTgNgOIhXhgIBWhgQAMgPgBgTQgBgTgOgNQgPgNgTABQgUABgMAPIhPBZIhMhXQgNgPgTgBQgTgBgPANQgOANgBATg");
	this.shape_1.setTransform(45.8,-23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AByCuQgTgBgNgOIhRhZIhSBZQgNAOgTAAQgUABgOgNQgOgOgBgTQAAgUANgOIBYheIhUhdQgMgPABgSQABgUAOgNQAPgNATABQATABANAPIBMBXIBPhZQAMgPAUgBQATgBAPANQAOANABATQABATgMAPIhWBgIBXBgQANAOgBASQgBAUgOANQgOAMgRAAIgDAAg");
	this.shape_2.setTransform(45.8,-23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.5,-41.8,34.6,36.8);


(lib.Symbol152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AijHGQAQgBANgOQAohJAkhSIAFgMQCGk6AzmbQgdGjA9HmQhLAChqAAIiSAAg");
	this.shape.setTransform(11.5,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,-36.8,32.9,90.9);


(lib.Symbol151 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(2,1,1).p("ACVkJQg6DcjvBoQCeAVg8C6");
	this.shape.setTransform(10.9,28.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#660000").ss(2,1,1).p("ABgj3QgSBsgeBeQg0CohbB9");
	this.shape_1.setTransform(15.1,30.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#BA5E01").ss(1,1,1).p("AgGASIANgk");
	this.shape_2.setTransform(25.3,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(254,254,254,0)","rgba(0,0,0,0.2)"],[0,0.671,1],-1.8,62.5,-16.1,58.3).s().p("AhmEVQBbh8A0ioQAeheARhsIAPglIAAIVgAg2DlIACAAIAJgNgABhj+IAGgYIAAAYIgPAlgABnj+g");
	this.shape_3.setTransform(15.8,27.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgEAGIAJgLIgHALg");
	this.shape_4.setTransform(10.8,49.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiTA7QDuhoA6jcIgJAlQgSBsgdBeQg1CohaB8QA8i6idgVg");
	this.shape_5.setTransform(10.6,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.5,32,56.7);


(lib.Symbol150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(6,1,1).p("ABjhtIhiBuIBkBtAhfhsIBgBtIhlBt");
	this.shape.setTransform(45.8,-23.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah9hRIBIBRIhNBSQgLAMABARQAAARANALQAMALARAAQAQAAAMgNIBHhNIBGBOQALAMARABQARABAMgLQAMgMABgRQABgQgLgNIhMhSIBLhUQALgNgBgQQgBgRgNgLQgMgLgRABQgRABgLANIhEBNIhChMQgLgMgRgBQgRgBgMALQgNALgBARQgBARAMAMg");
	this.shape_1.setTransform(45.8,-23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABjCXQgRgBgLgMIhGhOIhHBNQgMANgQAAQgRAAgMgLQgNgLAAgRQgBgRALgMIBNhSIhIhRQgMgMABgRQABgRANgLQAMgLARABQARABALAMIBCBMIBEhNQALgNARgBQARgBAMALQANALABARQABAQgLANIhLBUIBMBSQALANgBAQQgBARgMAMQgLAKgPAAIgDAAg");
	this.shape_2.setTransform(45.8,-23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.7,-39.5,30.3,32.2);


(lib.Symbol149 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEA966").s().p("AAQBdIABgGIgBgMIACgBIAAAAIAAgBIABABIAKgBIAIgDIACAFIADAPIgBADgAAAACIAAgCIgEgCIgEgBIAAAAIAAgBIgEgCIAAAAIgdgLIABAAIACgCIANAGIALACIADAAIALABIAAAAIARgBIgBAHIAAACIgBABIgCADIgBAAIgJAIIAAAAgAAAhJQgKAAgHgHIAGgDIALgFIAIgDIAJgBIACAAIADABIgEAIIgKAJIgCAAIgGABgAARhZIgDAEIgGAGIgCACIAAABIACAAIAIgGIADgIIgBgBg");
	this.shape.setTransform(113.9,495.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEB187").s().p("AgTA1IABgVIAFACQAVAFAKAGIAAABIgEAAIgagEIgBABIAAABIAAAAIABABIAaAEIAtgFIADAAIAFgBIABAAIAAgBIgBgBIAAAAIgFAAIgDAAIgTACIgEABIgQABIAAAAIAAgBIgDgMIAAgBIgBgHIABABIAqAEIABgCIgBgBIAAAAIgqgCIAAAAIgBAAIgBgGIABgOIABABIABAAIAYADIAAAAIALAEIADAAIAAgDQgDgCgLgBIgYgDIAAgBIgBAAIgBABIABgNIAJAAIAYAGIABgBIAAgBIgBgBIgXgFIgBAAIgIAAIgBAAIAFgLQADgFAEgDQAIgIAIgBIAEAAIAHAAIAHABIADABIABADIABAEIABADIAAABIAAABIgBAAIAAAAQgFACgEADIAAAAIAAABIgFAFIgCAHIACAGIAEACIAIABIACAAIgDACQgFAEAAAHIAAABIADAGIAIADIABAAQgCACAAADIAEAFIAGACIADAAIAAAMIAAAFgAAbgdIAAABIABABIAeAFIABgBIAAgBIgBAAIgdgFIgBAAgAgTAeIgBAAIgogJIgPgFIAAgBIgDAAIgCgBIgCAAIABgCIAOgEIABAAIAAAAIAtAMIALABIAHACIAEABIABAAIABAAIAAgBIgBgBIgMgEIgLgBIgpgKIAXgHIAlAIIABAAIAAgBIAAgBIgBgBIgegGIAHgBIAIAAIAHgCIAKACIAAAAIABgBIgBgBIgJgCIABgBQgCgJACgHIAQAEIABABIABgBIAAgBIgBAAIgRgGIAGgKIAQAGIAAAAIABgBIAAgBIgBgBIgOgFIAFgEIAEgDIANAEIABAAIAAgCIAAgBIgLgDQAJgEAKgCIAXAKIgKABQgHAAgKAJIgDACQgKAIgCAGQgDAFgBAJIAAAZIADANIgJABg");
	this.shape_1.setTransform(107,499.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0DDA0C").s().p("AA6BJIAAgCIgCgQIgDgFIAEgCIAHgGIAEgHIAHgQIAAACIAHAOIADAUIgCANIgEAFgAAlAuQAAgGgGAAIgCAAIAAAAIADgFIABgGQABgIgGgCIgGgBIACgBIAAAAIAFABQAMAAAHgLIADgPIgCgNIgIgMIABAAIALgEIAGAEIAAAAIAFAFIADAHQAHAOAAALIAAAHIgBADIAAACIgGATIgFAGIgGAFIgFADIgIADIgJAAgAgfglIAAgBIgggJIgFgBIgDgBIgGgCIgDgGIgEgQIACABIAAAAIAGAEIAMAEIANABIACAAIACADIAKAOIADABIAHAGIgCACIAAAAg");
	this.shape_2.setTransform(112.5,497.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DF2020").s().p("AAEAcIgLgBIgSgHIgDgDQgDgEgCgGIAAgBQgCgIAEgHIAEgIQAEgGAGgCIAAgBIABAAIAIgBIADAAIANACIABABIAFACIAAAAIADACIAIAIIAIAMIABAHIAAAAIAAABIgBABIAAAAIgGAKIgBAAIgFAFIAAABIgEABIgJACgAgWgRQgDACAAADIABADIABAAQABADAFAAIAIgDIABAAIABgDQAAgEgDgCIgGgBg");
	this.shape_3.setTransform(106.9,488);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2BBB47").s().p("ABDAiIACgMQAAgDgGgDQgFgEgLgEIgSgFIAAgBIABgCIAZAJQAFACAHAEQAFAEAAAFIAAACIgCAFIgBAEIgBAAgAgvAKIACgEIAAgLIgBgLQgCgGgFAAIgEACIgCACIAAABIgCAJIABAMIgDAAIgBgBIgHgBIABgLIADgIIAHgQIAAgBIADAAIABAAQAKABAFAHQAFAIABAHIAAACIAAABIAAAAIAAAGIgBALIAAACIgDAHgAg6gfIAAABIAEABQAJAAAEALIADALIgCAQIgCACIACACIADgEIABgQIAAgGIgDgIIgGgHIgIgFIgDAAg");
	this.shape_4.setTransform(113.6,484.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF91").s().p("AA1AFQgagVgZAAQgYAAgPAHQgRAGgKAOIgDAAIAFgHIAMgKQAOgJAVgDIAQgBQAeAAAVATIAIAJIAIALg");
	this.shape_5.setTransform(114.5,479.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAQAOIAAAAIAAgBIgBgBIAAAAIgBgNQAAgIADgEQACgEAEABIABAAQAEAAABAGIAAgBIACAMIgCANQgDAGgEAAQgDAAgDgGgAAUgLQgDACAAAFIAAADIACACQADAAAAgHQAAgFgBAAIgBAAgAgRANIgBAAIgEgBIgEgDIgCgBIgBgBIgBgMIACgJIAAgBIACgCIAEgCQAFAAACAGIABALIgBALIgBAEgAgbgHIAAADIABAEIABAAIABgDIABgDIgCgGIgBAAg");
	this.shape_6.setTransform(110.5,484.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAwBuIgFgCIgDgDIADgEIACgCIAAAAIABAAIACgBIABAAIABABIAEgBQAEABgBAEIgBAEIgBACIAAgBIgDABIAAABgAAnBhIgGgCIgDgEIAAgBQAAgFAFgEQADgDADAAIABgBIAAAAIAIABQAEABAAAGIgBAGIgCADIgFADIgBAAIAAAAgAAbBKIgDgCIgCgEIACgHIAEgFQADgDAFgBIAAAAIADgBIACAAIADABIADABIAAABIABABIABABIABABIACAFIgEAHIgDADIgEACIAAAAIgBAAIgGABgAArgnIAAgBIACgCIAGgGIADgEIABgCIABABIgDAIIgIAGgAg4gvIgBAAIgBgDQAAgDADgCIAGgCIAGABQADACAAADIgBAEIgBAAIgIADQgFAAgBgDgAgIg7IABgDIACgQIgDgMQgDgLgJAAIgFgBIAAgBIACgCIAEABIAHAEIAGAHIAEAIIAAAHIgCAQIgDAEgAA3g/IABgKIgDgRQgDgJgFgEIgLgDIgHABQgJADgGAKQgDAJAAAMIgBACQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIAAgDQAAgPAIgKIAMgJIAGgBIACAAIAIACIACABIAGAFQAHAKAAASQAAALgCAAgAg0hCIgBAAIgCABIAAgBIAAgBIAAAAIgBgDQAAgIADgFQADgCAEAAIABAAIgBAHIACAJIAAABIgGACIgBABgAAUhMIgBgCQAAgGADgBQADgCAAAGQgBAIgCAAgAgYhLIgBgDIAAgEIABgFIABAAIADAGIgBAEIgCADg");
	this.shape_7.setTransform(110.2,491.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#076806").s().p("AAfCJIAAgBIAAgBIAZAAIABgDIgCgOIgCgGIgIAEIgKAAIgBAAIAAAAIAAAAIgEABIgBABIgCAAIgHgCIgDgGQAAgDACgCIgBAAIgIgDIgDgFIAAgCQAAgGAEgFIAEgBIgDAAIgIgCIgDgCIgBgGIABgIIAEgFIAAgBIAAAAQAEgDAFgBIABAAIABAAIAAgBIABAAIACgBIAAgBIAJgHIAAgBIACgEIABgBIAAgBIABgIIgRABIgBAAIgLgBIgCAAIgKgCIgOgGIgCACIgCgBIACgCIgIgFIgCgCIgKgNIgCgCIgDAAIgMgCIgMgEIgGgDIAAAAIgCgBQgGgFgBgJIgBgBQgBgKAEgIIADgIIAHgGIgBAAIgHADIgCACQgDADgDAEIgEAKIAAAIIAAADQABANAEAJIACAEIABABIAEAGIAAABIgCgBIgEgFIgCgCIgBgCQgFgLAAgNIAAgLIAEgMQADgGAFgCIABgCIAHgCIAAgBIgBgDQAAgKAEgFQAEgDAEAAIABAAIABgCIAAgBIAAgBIADgFIAEgFQAEgEAFgCIABAAIAAAAIAHgKIAMgLQAQgKATgCIASgBQAfgBAVAWIALAMQAHAJAEAJIACAIIACAhIgCAJIgIAWIAAAAIgHAMIgJAJIgHAGIgFAFIgEABIAAAAIgCACIAGAEIAAABIACACIAGAJQAGAPAAAMIAAAKIgBACIAAABIABAAIAAABIACADIAGAOQADAHAAAOIgCAMIgEAIIAAAAgABGBhIgFAGIgHAHIgDABIACAGIACAPIAAADIAWAAIADgGIACgMIgDgUIgHgOIAAgCgAAXBoIgCACIgCAEIACADIAGACIADAAIAAAAIADgCIAAABIACgCIABgEQAAgEgEgBIgEABIAAgBIgBAAIgCABIgCAAgAAmBsIgCAGIAJgBIAIgDIAEgCIAHgGIAEgGIAGgTIAAgCIABgCIAAgIQAAgMgHgOIgDgGIgEgFIAAAAIgGgFIgLAFIgBAAIgIACIgBAIIAAACIgCABIgCAFIAAAAIgBAAIAAAAQgFADgEAFIADABIAEACIACACIADAGIAAACIgEAIIgCAEIgDABIAGABQAGABAAAJIgBAGIgEAEIAAAAIACAAQAHABgBAGgAATBTQgCABgEACQgEAEAAAFIAAABIACAEIAHACIAFAAIAAAAIABAAIAFgCIACgEIABgFQAAgHgEgBIgIAAIAAAAgAAHA9IgFAFIgBAHIABAEIADACIAHABIAHAAIAAAAIAAgBIAEgCIAEgDIADgHIgCgEIAAgCIgBgBIgBgBIAAgBIgEgBIgDgBIgBAAIgDABIgBAAQgEABgDADgAgQARIANAKIAEABIABAAIAMABIATgBIABAAIAPgFIABgBIAAAAIABgBIAGgJIAGgKIACgKIAAgCIAAgOIAAgBIgBgCQgCgIgHgHQgIgFgIgCIgDAKQgFAHgIACIgCABIgHABQgKAAgIgIQgHAFgFAGIgBADIgBAAIgHALIAAAAIgHAFIAAAAQADALANAMgAhHg6QgHACgDAGIgFAIQgDAHACAJIAAABQABAGAEAEIADADIASAHIALABIAFAAIAJgCIADgBIAAgBIAGgFIABAAIAGgKIAAAAIABgBIAAgBIAAAAIgCgIIgHgMIgIgIIgEgCIAAAAIgEgCIgBgBIgPgCIgCAAIgIABIgBAAgAAogzQAJACAHAGQAIAGACAKIACAHIAHgHIACgDQgBgCABgDIABgIQAAgCgEgDIgQgHIgRgFgAApg/IAAABIASAEQALAEAFAEQAGAEAAADIgCALIABABIABAAIABgDIACgGIAAgCQAAgFgFgEQgHgEgFgCIgZgIgAAXgxIgJADIgLAFIgEAEQAGAGAJAAIAAAAIAHgBIACAAIALgJIADgIIgCgBIgDAAgAAOhpIAJABIAJAHQAIAIABANIABAJIAaAIIAMAHQAFADABAFQAGgNAAgNIgCgYIgIgLIgJgJQgUgUgeAAIgSABQgTADgOAJIgMALIgFAHIADAAQAJABAGAIQAGAJAAAIIAEABQACgKAEgIQAGgKAKgCgAgwhkIAAABIgHAPIgDAIIgBANIAHABIABABIADAAIABABIACAAIAEADIAFACIABAAIAAAAIAIAHIADgGIAAgDIABgMIAAgFIAAgBIAAgBIAAgCQgBgHgFgIQgFgHgKAAIgBAAgAAAhTQgEAEAAAJIABANIAAABIABABIAAABIABAAQABAGADgBQAEABADgGIACgOIgBgMIAAABQgCgHgEAAIgBAAIgBAAQgDAAAAADgAAXhhQAFADADAJIAEARIgBAKIABABQACAAAAgLQAAgRgIgLIgGgEIgCgCIgIgCIgCAAIgGABIgLAJQgIAKAAAPIAAADQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIABgCQAAgMAEgJQAFgKAIgCIAHgBgAhJg8IABAAIABAAIAFgCIAAgBIgCgKIABgHIgBAAQgDAAgDACQgEAFAAAJIABADIAAgBIAAACIAAAAIACAAgAg5heIgDADIgDAGIAAABIgBAAIAAACIACABIACACIAAAAIAFgMIAEgIgAhIALIgIgCIAEABIAGABIAAAAIgCABg");
	this.shape_8.setTransform(112.4,491.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8AFF3C").s().p("AAdBpIAAAAIADgEIADgIIAAgCIgCgGIgDgCIgEgCIgDgBQAEgFAGgDIAAAAIAAAAIABAAIACgFIABgBIAAgCIABgIIAIgCIAIALIACAOIgEAPQgGAMgNAAgAhNAjIgEAAIgBgBIgEgGIgBgBIgCgFQgEgJgBgNIAAgCIABgIIAEgKQACgEADgDIADgCIAGgDIABAAIgGAHIgEAHQgEAIABAKIABAAQABAJAGAFIAEAPIACAHgABGgBQgDgKgIgGQgHgGgJgCIACgJIARAFIAPAHQAEADAAACIgBAIQgBADACACIgDADIgHAGgABTgaIgLgHIgbgIIAAgJQgCgNgHgHIgKgIIgJgBIgJgBQgJACgHAKQgEAIgCAKIgDgBQgBgIgGgJQgGgIgJgBQAKgPARgGQAOgHAZAAQAZAAAaAWIAPAPIACAYQAAANgFANQgCgFgFgDg");
	this.shape_9.setTransform(112,488.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3D99C").s().p("AgOBQIAJgBIgDgNIAAgZQABgKADgFQACgGAJgIIADgCIgHAJQgGANAAAeIADAZgAhjAwIAEABIAMADIgBABIgOADgAhkAfIgBAAIAAABIAAgHQAAgWANgMQAPgOAaAAIAYADIAfAKIAAAAIAFABIAAABIABAAQgKABgIAFIgzgRIgDAAIAAABIgBABIABABIADAAIAvAPIABAAIgEACIgGAEIg+gSIgBABIABABIAAAAIA8ASIgGAKIgYgFQgPgEgagJIgCAAIgBABIAAAAIACAAQAbAKAPAEIADABIAVAFQgCAHACAJIgBABIhIgVIgBAAIAAABIAAABIABABIADAAIBEAUIgHADIgIAAIgHABgAAmgIIgBAAIgEgBIgOgLQgNgMgCgLIAAAAIAGgFIABAAIAGgLIABAAIACgDQAFgGAHgFQAIAHALAAIAHAAIACgBQAHgCAFgHIAEgKQAIACAHAFQAHAGADAJIABACIAAABIAAAOIAAABIgDAMIgFAKIgHAJIAAABIAAAAIgBABIgQAEIAAABIgTABg");
	this.shape_10.setTransform(108.7,495);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A7692E").s().p("AgRBBIABgYIgLgCIgCAAIgigIIgKgEIgCgBIgBgBIgBAAIgCgBIgBAAIAAAAIgCgDIgDgIIAAgDQgFgMAAgKQABgNAFgKIAAgBIAFgIIAFgEQAGgGAJgFIADgCIAAAAIASgDIAFAAIADAAIADABIAEABIAIACIAAABIACgBIABAAIACABIAGABIAeAJIABABIACAAIAAAAIADAAIgBABIAcAKIAAABIAFABIAAACIAAAAIAEABIADACIACADIADAIIgCABIgBAAIAAgBIgBgDIgBgEIgCgDIgCgBIgHgBIgIAAIgDAAQgIABgJAIQgEADgCAFIgFALIABAAIAIAAIABAAIAXAEIABABIAAABIgBABIgYgFIgJAAIgBANIABgBIABAAIAAABIAYADQALABACACIAAADIgCAAIgLgEIAAAAIgYgDIgBAAIgBgBIgBAOIABAGIABAAIAAAAIAqACIAAAAIABABIgBACIgqgEIgBgBIABAHIAAABIADAMIAAABIgBAAIARgBIAEgBIATgCIADAAIAEAAIABAAIABABIgBABIAAAAIgFABIgDAAIgtAFIgagEIgBgBIgBAAIABgBIABgBIAaAEIAEAAIAAgBQgKgGgWgFIgEgCIgBAVIBlAAIABgFIgBgMIABgBIAEgBIgDABIABANIAAAFIAAABIgBACgAhNAVIgBACIACAAIABABIADAAIAAABIAPAFIApAJIABAAIAUAGIAQAGIgFgYQAAgdAIgNIAHgJQAJgJAIAAIAKgBIgXgKIgCAAIAAAAIgEgBIAAgBIgfgKIgYgCQgaAAgPANQgNAOAAAVIAAAHIAAAAIABAAIAyAKIAeAHIABABIAAABIAAABIgBAAIgkgJIgXAIIApAKIALABIALAEIABABIAAABIAAAAIgBAAIgFgBIgGgCIgMgBIgsgMIAAAAIgNgDIgDgBgAADAGIgJgCIhFgTIgCAAIgBgBIAAgBIAAgBIABAAIBIAUIAJACIABABIgBABgAAMgKIgQgEIgVgGIgEAAQgPgEgagKIgCAAIgBgBIABgBIADAAQAZAJAPAFIAZAFIARAFIABABIAAABIgBABgAAggSIgBgBIAAgBIABAAIABAAIAcAFIABAAIABABIgBABgAARgVIgQgGIg7gTIAAgBIgBgBIABAAIA9ATIAPAFIABABIAAABIgBABgAANgkIgBAAIgugPIgDAAIgBgCIAAgBIABAAIADAAIAyAQIAKADIABABIAAACIgBAAg");
	this.shape_11.setTransform(106.6,498.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ah2AlQgFAKAAANIAAAAIAEAWIAFAPIABAAIADAAIABABIACABIAQAGIApAJIgBAXIAAAAICcAAIABAAIAEgHIABgOIgCgUIgHgPIgCgDIAAAAIAAgBIAAgBIABgDIAAgIQAAgNgHgNIgGgKIgCgDIAAAAIgFgEIARgOIAKgJIAGgMIABAAIAHgXIACgIQACgKgEgVIAAgCIgCgIIgKgSIgLgNQgVgUggAAIgRABQgVACgOALIgMALIgHAJIgCAAIgIAGIgEAEIgDAHIAAAAIgBABIAAACIgBgBQgFAAgDAEQgFAFAAAKIABADIAAAAIAAABIgGACIAAAAIgCACIgHAJIgFALIAAALQAAANAFALIAEAFIADAEIAAAAIgCAAIgGAAIgSACIgDACQgJAFgGAGIgFAFIgFAHgAglhbIADgDIAHgFIgHAPIgCAFIAAABIgBgBIgEgDIABgBIAAgCg");
	this.shape_12.setTransform(110,491.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CC99CC").s().p("AgzCJIAAAAIABgXIgpgJIgQgGIgCgBIgBgBIgDAAIgBAAIgFgPIgEgWIAAAAQAAgNAFgKIAAgCIAFgHIAFgFQAGgGAJgFIADgCIASgCIAGAAIACAAIAAAAIgDgEIgEgFQgFgLAAgNIAAgLIAFgLIAHgJIACgCIAAAAIAGgCIAAgBIAAAAIgBgDQAAgKAFgFQADgEAFAAIABABIAAgCIABgBIAAAAIADgHIAEgEIAIgGIACAAIAHgJIAMgLQAOgLAVgCIARgBQAgAAAVAUIALANIAKASIACAIIAAACQAEAVgCAKIgCAIIgHAXIgBAAIgGAMIgKAJIgRAOIAFAEIAAAAIACADIAGAKQAHANAAANIAAAIIgBADIAAABIAAABIAAAAIACADIAHAPIACAUIgBAOIgEAHIgBAAgAgiheIgDADIgDAGIAAACIgBABIAEADIABABIAAgBIACgFIAHgPg");
	this.shape_13.setTransform(110,491.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// Layer 3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#663300").ss(1,1,1).p("AhRgfIgDgBIgGgBQgMAAgIAOIgCAFQgFAKAAALQAAAQAJAOIAFAGQACgHAIAAIAGABIACAAAhRgfIgHANIgDAKIgCAHQgBAKACAKIAAAAIAAAAIACAFIABAFIAEAIAgpgPIADgQIAAgBIACgHQAFgQAKgOIAHgIIAAAAIAHgHQAQgOAUAAQAZAAASASIAJALQAVAdAAApQAAApgVAeIgHAHQgTAWgaAAIgHAAIgDgBQgWgEgSgYQgKgOgFgRIgCgHIgDgRIAAggIAAAAAgWBiIAOALQAQALAVAAQAlAAAagkQAagjAAgxQAAgwgagkQgagjglAAQgdAAgXAWIgFAFIAAACIgGAGQgPAVgHAaQgEARAAAUIAAACIAAAKQACAVAGATQAHASALAOIAMAOIgtgnIgFgKIgFgIIgBgBIgHgDAAWAiQgKAAgHgKIgCgCQgFgJAAgNQAAgJADgIIAEgFQAHgKAKAAIgngDIgLACIgKACAhRgfIAKgOIAlgnAAWAiQAKAAAIgKQAHgKAAgOQAAgMgHgKQgGgIgHgCIgCAAIAAAAIgDAAAgmAiIAaAEIAIAAIAagEAhDA7IgCgCIAAAAIAAADIgGAiIAAACIgDAHIABgEQAAgFgJgCIgNgDIgJADIgEACIAJgzAhOBnQgDAFgHAAIgMgCQgIgCgCgDIgCgFIAAgC");
	this.shape_14.setTransform(110.5,344);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#996699").s().p("AgQgKIgFgKIgGgIIAaALQAGARALAPIALAOg");
	this.shape_15.setTransform(105.5,350.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC6600").s().p("AABAbIgBgCQgGgJAAgNQAAgJAEgHIADgGQAHgKAKAAIADAAIAAAAIACABQAHABAGAIQAHAKAAAMQAAAOgHAKQgIAKgKAAQgKAAgHgKgAgcgiIgEAEIgKACQAVgMgHAGg");
	this.shape_16.setTransform(110.9,343.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("AgBAlIgbgEIgDgRIAYADIACAAIATACIABACQAHAKAKAAIgbAEgAgegQIgBgBIANgRIALgCIAnACQgKAAgHALIgEAFIgHgBIgiADg");
	this.shape_17.setTransform(109.5,344.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF99").s().p("AgGATIgLgDIABgIIAJgGIAAgBIAZgUQgEARAAAUIAAACIgNAAg");
	this.shape_18.setTransform(103,342.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC66").s().p("AgYAcIAHgNIAKgOIAkgmQgQAVgGAZIgZAWIgBABIgIAGg");
	this.shape_19.setTransform(104.2,339.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF33").s().p("AgHBaIgDAAQgXgFgRgYQgLgOgFgQIgCgHIAbAEIAHAAIAbgEQAKAAAHgKQAHgKAAgNQAAgOgHgJQgGgIgGgBIgCgBIAAAAIgDgBIgogCIgLACIAFgEQAGgGgUAMIAJgCIgNARIADgPIAAAAIABAAIAUgUQATgNAUgHQAegJAKAAIAKAAIAJALQAVAeAAApQAAAogVAdIgGAIQgUAWgZAAg");
	this.shape_20.setTransform(113.5,345);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF9999").s().p("AAHAZIgBgBIgGgDIgDgHIgCgFIgBgFIAAgBIgBAAIgBgKIABgKIALAEIAIABIAMgBIABAKQABAUAHATgAgWACIgKgKQAAgMAFgKIACgBIARgEIAGABIgEAKIgBAHIgBAKIABAKIABAAIAAABIABAFQgJgBgIgGg");
	this.shape_21.setTransform(102,345.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	// Layer 4
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(4,1,1).p("AhygPIACgFQAJgPANAAIAGABIACABIAKgNIADgEIAAAAIAAAAIAngqIABgBIAFgFQAXgXAeAAQAmAAAbAkQAaAkAAAxQAAAygaAkQgbAkgmAAQgVAAgRgLIgIgGIgzgsIgFAiIAAABIgBAAIgDAIIAAAAQgEAGgIAAIgNgDIgKgFIgCgGIAAgCIAJgzIgEgFQgKgOAAgRQAAgLAFgLgAglgmIAAgBIAAAAgAAWghIACABIgCAAg");
	this.shape_22.setTransform(110.6,343.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CC99CC").s().p("AAdADIAAAAIACAAgAgegCIABAAIgBAAg");
	this.shape_23.setTransform(109.8,340.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22}]}).wait(1));

	// Layer 5
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#663300").s().p("AgNARQgDgHACgHIAAgCIADgFQAIgOAOABQAGAGgCAJIgFALIgFAFQgFAEgFAAIgIgBg");
	this.shape_24.setTransform(119.9,381.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BC7E21").s().p("AgkgUIAAgBQgCgHACgGIBKA3IgBABQgBAGABAHg");
	this.shape_25.setTransform(114.6,379.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC9933").s().p("AgxgWIAEgHIAGgDIACAAIAKADIBNArIgDAAQgQADgGAPIAAABg");
	this.shape_26.setTransform(115.9,378.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag2AOQgTgOAAgYIABACQAKATAVAJIACABQATAMAWgBQAYgBASgNIADgCIgBADIgCAFIACALIgDABQgTAKgUAAIgEABQgeAAgYgTgAgfALIAeAEIAJgBIAPgDIAKgCQgPAIgSAAQgRAAgOgGgAA4gEIACgDIAAAAQAMgLADgOIABAKQAAALgFAJg");
	this.shape_27.setTransform(106.2,375.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#99BBDD").s().p("AAAASQgQgCgNgKQgLgHgFgJIAEgHIACgBQAEAAADAEIAOALQAVAKAXgCIAFAAQAKgBAEAIQgOAHgTAAg");
	this.shape_28.setTransform(104.9,373.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AAGAwQATAAAPgHIAJgGQANgKADgNIABgBQACgMgGgLQAKANgGAPQgFAOgNAIQgNAJgOACgAhCAOQgEgWAQgRQAPgRAYgGQgPAFgNAJQgMAJgGAPQgGANADALIAFAPQgFgHgCgIg");
	this.shape_29.setTransform(105.5,370.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6699CC").s().p("AATAaIgFAAQgWACgWgLIgNgLQgEgEgEAAIgCABIgDAHIgCgGQAHgVAVgIQAWgJAWAEIgCABIgBAEQACAHAIgDQAGgCgDgFIAFACQAXAIAHAWQgDANgNAKIgJAGQgFgIgKABgAAagQIACAEQAIAHADAJIABAAIABgBQAFgMgLgJQgDgCgCAAQgCAAgCAEg");
	this.shape_30.setTransform(106.1,371.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E5E5E5").s().p("AAMASQgDgKgIgHIgBgDQACgHAGAFQALAIgFANIgBABgAgPgLIABgEIACgBQAFgCAEAEIABAAQACAFgFACIgEABQgEAAgCgFg");
	this.shape_31.setTransform(108.8,370.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#330000").s().p("ABRBZIhKg4QgTAKgTABQgUACgVgKQgWgJgMgSQgJgMACgRQgEgNAEgOQAGgQAOgKQASgOAXgCIANgBQARABAQAFQAWAJAIAPQAJAOACALIAAAUIgCAOIgCAGIBPArQAHAIgBALIgFAOIgJAGIgMAEgABVBBIgCAFIgBADQgCAHADAGQALAEAJgGIAEgFIAGgMQABgJgFgHIgBAAQgPAAgIAOgAARAEIgGADIgEAHQgCAGACAHIAAABIBKA5QgCgIACgGIABgBIAAgBQAGgPAQgEIADAAIhOgsIgKgCgAhdAWQAZATAhgBQAVAAARgKIADgBIgBgLIABgFIABgEIgDADQgRANgYAAQgXACgTgMIgCgBQgVgKgJgSIgBgDQAAAXATAQgAgoAYQATABAPgJIgKACIAKgDIAGgCIAAAAIADgCIAAgBIAFgDIAAAAIABgBIAAAAIABAAIABgBIABAAIABgBIAAAAIANgQQAKgRgGgSQgFgNgMgKQgZgVgiACIgOADIgBAAIgBAAQgYAGgPAQQgQASAEAXQACAIAFAHIAAABIAIAIQAKAJAMAFIAYAGQALABAKgBIgJACIgfgFQAOAHARgBgAATAAIAAAAIgDADIANACQAFgJAAgKIgBgKQgDAOgLAKg");
	this.shape_32.setTransform(110.2,374.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgMA3IgYgGQgLgGgKgIIgIgJIgBgBIgEgPQgDgKAGgPQAFgPANgJQAMgIAPgFIACgBIABAAIANgCQAhgCAbAVQAMAJAEAOQAGARgJARIgNAQIAAABIgBAAIgCABIgBABIAAAAIAAAAIgBABIgBAAIgEADIgBAAIgDADIgBAAIgFACIgKADIgQADIgIABIgMgBgAgrgVQgOALgCARIACAGQAFAKAKAIQAOAJARADIALAAIAPABQAOgCAMgIQANgJAGgOQAFgNgKgOQAGAKgCANQAAgTgRgKQgTgNgXAAQgYAAgTAOg");
	this.shape_33.setTransform(106.1,371.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1A4355").s().p("AAdgIIgGgCIAAAAQgEgEgFACQgWgEgWAJQgVAHgHAWQACgSAOgKQASgPAYAAQAXAAATANQARAKAAATIAAABQgIgWgWgIg");
	this.shape_34.setTransform(106.1,369.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(1));

	// Layer 6
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(4,1,1).p("AAjgjIABAUIgDAOIgCAFIBPAsQAHAIgBAKQgCALgDAEIgJAHIgMADIgJgCIhKg4QgSAKgUABQgTACgWgKQgWgJgMgSQgJgMACgRQgEgNAEgOQAGgQAOgKQASgOAXgCIANgBQARAAARAHQAVAIAJAPQAIAOACALg");
	this.shape_35.setTransform(110.2,374.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CC99CC").s().p("ABRBZIhKg4QgSAKgUABQgTACgWgKQgWgJgMgSQgJgMACgRQgEgNAEgOQAGgQAOgKQASgOAXgCIANgBQARABARAFQAVAJAJAPQAIAOACALIABAUIgDAOIgCAGIBPArQAHAIgBALQgCAKgDAEIgJAGIgMAEg");
	this.shape_36.setTransform(110.2,374.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Layer 7
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009900").s().p("AgFAvIgMgRQgBAAgCARQgDASgKgEQgLgEgEgbQgFgbgJAAIgKAJQgDAAgCgGQABgNAKgSIAAgBIgFAUIADgJIADgEIAHgQIAEgHQAAgBABAAQAAAAAAAAQABAAAAAAQABABAAABIASAbIADADIgEATQgDAPABAIIABAQIAAgEQABgcAIgQIABgEIAUAPQABAEAIACQgMgMgNgbIAAAAQAagKAAgFQAAgGgGgDQgGgDgIAAIgMADQgJACgGgFIgCgCIAGgFQAKgHALAAQAuAAAiA/IAPAaIgGAHQgKANgLAAQgIAAgNgJIgEgEQgKgGAAAIIAAABQAAAHAHAHQAHAIgCAGIgHACQgQAAgKgSgAgfAnQAAAJACADIAAgDIAFgvQgHARAAAVg");
	this.shape_37.setTransform(112.7,462.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#33CC00").s().p("AAUAkIgdglIAIgDIAagIIgDAAIgiAGIgKgOIAAgCIgBAAIgIgPIAFgEQADAJAGAGIABABQAGAGAJgCIAMgEQAIAAAGAEQAGADAAAGQAAAFgbAIIAAABQANAcANAMQgJgDgBgDgAgDgOQgGACgBACIABABIAdgHIABABIAAgBIgHgBg");
	this.shape_38.setTransform(110.1,460.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#39B000").s().p("AgdBQQgYgIgPgSQgKgMgGgQIgBgEQACgWAHgVQAFgQAIgPIAHgOIABAAIAFAIIgCADIgIAWIAAABQgKASgBAOQACAFACAAIALgIQAJAAAFAaQAEAbAKAEQALAEADgSQABgRABAAIAMARQALASAQAAIAGgCQADgGgHgIQgHgHAAgHIAdAZQALAIANABQgjAYgjAAQgQAAgSgGgAgoBHQAUAKAVAAQAUACAUgKIgdAFIgggDQgSgFgRgLgAA0AzIgegXIAAgBQAAgIAJAGIAFAEQAMAJAJAAQALAAAKgNIAGgHIgPgaQgig/gvAAQgKAAgKAHIgGAFQgGgFgDgKQAIgFASgGIAoADQAWAIAUAdIAZAoIgCAZIgFAQQgHAPAFAHQgOgBgLgGg");
	this.shape_39.setTransform(112.2,463.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#33CC33").s().p("AAAgBIAAgBIABAFg");
	this.shape_40.setTransform(109.3,453.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AglgCQAHgRAIgDIABAAQgKAMgIAWIgEAMQAAgMAGgOgAALADQACgDAGgBIASgCIAHABIAAAAIgBAAIgfAGg");
	this.shape_41.setTransform(107.8,458.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CCFF66").s().p("AgEACIgEgTQAAgHAHAMIAKAZIAAAHIgCABQgGAAgFgTg");
	this.shape_42.setTransform(104.5,449.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#669900").s().p("AAJAhQgLgGgHgJIgFgJQgMgWAOgWIAGAAIAGAHIALAeIAJAiQgGgBgFgCgAgIgbIAEATQAFASAGAAIACgBIAAgHIgKgYQgEgIgCAAQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAABg");
	this.shape_43.setTransform(104.4,450.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#336600").s().p("AgtB1QgWgSgEgJIgNggQgPg1ApgtQgxgoAMggQgBgFAKgMQALgMASAgQAKAcAFAcQAzgkAqAkQApAkAFAmIABAPIAAAHIgBAPIgFATQgFANACAEQACAHAHgBIgWAQQgPAKgiAHIgDAAQgvAAgWgQgAhQAAQgGAYAEAXIAEARIACAFQAFAQAKAMQAPARAYAJQA0ASA1glQgOAAgLgJIgdgZIAeAXQALAHAPABQgGgIAIgPIAEgQIACgZIAAgMQgBgjgrgkQgXgUgZACIgWAFIAAAAIgTALIgFAHQgCAFABADIACAGIAIAOIABABIAAABIAKAOIAigGIACABIgaAGIgHAEIAdAmIgTgRIgBAEQgIARgBAcIAAAFIgBgRQgBgIADgPIAEgUIgDgDIgSgaQAAgBgBAAQAAgBgBAAQAAAAgBABQAAAAAAABIgEAGIgHAPIgDAFIgDAIIAFgUIAIgVIACgCIgFgJIgFgLQgTAPgIAUgAhUhMIAFAIQAHAKAMAFQAFADAGABIgJgjIgMgfIgGgGIgGgBQgOAXAMAXgAAigsQgWgOgVAGQgWAFgIAIQAJgKALgFQAKgFALgBQAYAAAQAQIAPASQgKgKgNgIg");
	this.shape_44.setTransform(111.4,459.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#66FF33").s().p("AADBeQgUAAgUgKIgPgMQAQALATAFIAfADIAegFQgQAJgSAAIgHgBgAgWAtQAAgVAGgRIgFAvIAAADQgBgDAAgJgAhXASQgDgWAFgYQAJgWASgPIAGAMIgBAAIgHAOQgIAPgFAQQgHAUgCAXIgFgRgAhOgjQgGAPAAALIAEgLQAIgXAKgMIAAgBQgJAEgHARgABAggQgUgdgXgIIgngDQgSAGgIAFIgEAEIgCgFQgCgEADgFIAFgHIASgKIACAEQgKAFgJAKQAIgIAWgFQAVgFAWANQANAJAJAJIgPgRQgQgQgXAAQgMAAgKAFIgBgFIAXgFQAXgBAYAUQAqAkABAkIABAKgAgYhUg");
	this.shape_45.setTransform(111.9,462.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).wait(1));

	// Layer 8
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(4,1,1).p("AhWiBQgKAMABAFQgMAgAyAoQgqAtAPA1IANAgQAEAJAWASQAXARAygBQAhgHAPgKIAWgQQgHABgCgHQgCgEAFgNIAFgTIABgPIgBgWQgFgmgpgkQgqgkgzAkQgFgcgKgbQgSghgLAMg");
	this.shape_46.setTransform(111.4,459.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CC99CC").s().p("AgtB1QgWgSgEgJIgNggQgPg1AqgtQgygoAMggQgBgFAKgMQALgMASAhQAKAbAFAcQAzgkAqAkQApAkAFAmIABAWIgBAPIgFATQgFANACAEQACAHAHgBIgWAQQgPAKghAHIgGAAQguAAgVgQg");
	this.shape_47.setTransform(111.4,459.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46}]}).wait(1));

	// Layer 9
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F1C98D").s().p("AgcAjIgHgDIgJgFIACgEIAMABIABABIAFAAIAWgEIAKgEIADAGIgKAHIgDACIgUAFgAgKASIAWgNIAMgIIAMgOIACgDIAFgKIACgGIgFAQIgEAJIgEAFIgPAPIgTAKIgGACIgRACg");
	this.shape_48.setTransform(113.6,401.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0D7DC1").s().p("AAxBTIgDAAQgJgDgGgIIgBgQQgBgIAEgIQADgIAGgHIAQgJQAJgBAHAEIAHAHQAFAGABAJIAAAPIgFAKIgMALQgHAFgIABgAgMBFQgKgCgHgGIgBgNIAKAFIANACIARgCIABAAQAHgCAGgGQAAAKACAJIgOAFgAg5gIIgGgCIglgTQgKgGgEgLIADgDIAEAFIAMAJIAUALIAeAIIgEAKgAAigbIAAgBIACAAIAEAAIARgEIAcgQIAKgJIAKgMIAFgNIAFABIgCAOIgIAQIgMALIgLAIIgBAAIgqATg");
	this.shape_49.setTransform(112.3,406.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFCC00").s().p("AgVASQgDgHAAgIQAAgGADgGQAEgIAHgEQAIgFAIABQAGAAAFAEQAGAFACAJIgDgEIgLgIQgIgFgIAFQgFAAgDADQgDADAAAFQgEAGAAAGQAAAJADAHIADAHg");
	this.shape_50.setTransform(111.4,394.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F7DFBB").s().p("AgIBWIgMgFIgDgCIgDgMIACgDIgDgLIABgEIAMgiIAGADIAGACIAUgFIADgCIAKgHIAHATIAGAYIgCADQgGAHgCAIIgCAKIgMAHIgCABIgDABIgMABIgLgBgAgTAEIgIgDIgLgEQgGgCgFgFIgKgLQgEgHgBgJIAAgHIACgOQADgJAIgGQAHgEAJAAIAIAEIAFAMQAFAHAHADIAEABIAGAAIAKgDIALgKIAEgKQACgKAKgCQAIgCAHAFQAHAGADAJIACAHIABAFIAAACIgCAGIgFAKIgCADIgLAOIgMAJIgXAMIgOAFgAgagrIAAAAIADACIAFAAIAEAVIAFAMIAHAGIAJAAIAGgHIADgLIACgQIAAgBIABgHIACABIAGgBIACgBIABgDIgCAAIgBABIgFACIgEgBIgFgCIgHAAIgXAFIgBAAIgHgBIgBAAg");
	this.shape_51.setTransform(111.6,403.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFEFD").s().p("AAIA5IgBgBQADgRAGgQIAEgHIAJAFIgNAjIAAADIADALIgDADgAgXgbIgFgKIABgNQgBgIAGgFIAJgHIARgCIAEABQgIAAgHAEQgIAGgEAJIgCAOIABAHQAAAJAFAHg");
	this.shape_52.setTransform(107.2,402.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C82918").s().p("AgCAzIgHgJQgGgOgCgPIAHgCIAAAGIACAEIADABIALgBIAFgEIAAgIIAFABIgEAfIgEAHIgGAEgAgHACQgFAAgFgDIgDgHQgDgHAAgJQAAgHAEgGIADAFQAHAAADgFIAEgEQAAgBAAAAQABgBAAAAQAAgBgBgBQAAAAAAgBQgCgCgEAAQAIgFAIAFIALAIIAEAEIABANIgCAJIgEAIIgJAGQgFACgGAAIgFAAg");
	this.shape_53.setTransform(111.7,397.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#47B3F3").s().p("AAdBlIgBgIQACgMAIgMQAMgSANAAQAGAAAJAEIAEADIABACIAHAOIABANIgCAOIAAgPQgBgIgFgHIgHgHQgHgEgJABIgQAJQgGAHgDAJQgEAHABAIIABAQQgDgHgBgJgAAjAmIgKgcIAOgKIAJgKIAJgQIAFgQIAggXIAEACIAIgFIABABQgDADAAAEIABAEIACABIAIABIABADIgGAEQgCAEACADIACADIgFANIgKAMIgKAKIgcAOIgRAEIgEAAIgCAAIAAABIAJAlIgFAEgAgoAqQADgQAEgLIAEABIgJAXIgEAPgAhJAUIgUgLIgMgJIgEgEIAAgBIAAgDIgCgEIgEgDIAAgDIAEgBIACgCQADgGgGgEIACgEIAFAEIAEgCIAFgEIAHgBIAKAFIAAACQADAJAFAHIAIALIAMAJIAOAJIgGAOgAA1hDQgHgJgKgBIgIACIgHAFIAAgCIgCgLIgFgJQgFgHgHgBIgOABIgEABIgKAIQgJALACAPIgJgFIgRAAQgJADgFAGIABgFIAFgRIAIgMIALgLQAGgEAHgCIAPgEIAQgCIAPACIAMAEIAMAGIALAJIAHALQAGAMACANIAAAJQgCgIgGgIgAguhkQgFAFABAHIACABIABgHQADgGAGAAQAFADACAGIACABIgBgEIgDgFIgBgBIgEgCQgEAAgEACgAAbhnIACADIACAEIABACIABgDQgCgIgIgCQgFABgEADQgDADABAEIAHgJg");
	this.shape_54.setTransform(112.1,402);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#AAEEFF").s().p("AhgBkIAAgRQABgIAEgHQAEgHAGgDQAEgDAFAAIAPACQAIADAGAGIgNgGIgJgCIgLACQgIADgCADQgJALAAAMIABARIACAJgAAhBcQABgHADgGIAKgNIADgCIABgBQAHgEAHgCQAHgBAGAEQAEACADAEIgEgCQgJgEgFAAQgOAAgLARQgIAMgCANgAgtA+IALgoIAEACQgEAKgCAQIgCANIgBAFgAhVgeIgHABIgBgGIAKAAIACACIAGAJgAhIhFIAGgLIAJgMIAGgGQAIgHALgEIAOgEIAOgBIAUADIAHADIANAIIAOANIgLgJIgMgGIgNgEIgPgCIgQACIgPADQgGADgGAEIgMAKIgIANIgFAQIgBAGQgFAHAAAJIAAAFQgEgUAHgTgABBglIABgBIAAgGQAGgIAJgGQAHgEAHgCIABAFIABACIggAYg");
	this.shape_55.setTransform(111.8,401.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag8CEQgOgCgKgKIgKgNQgFgHgCgJQgDgOADgOIAEgLQAFgIAJgEIATgBQAHACAGAFIAEgLIgMgDIgogTQgLgHgFgLIgIABIgHgCIgCgBQgEgEACgFIACgDIAFgBQAFgCAFACIAAgDIgGAAIgGgBQgFgBgBgFQgBgFAEgDIAGgDIALADIADgDQgGgHgCgJIAAgGIACgFQABgEADgBIAEgBIAGAGIAGARIANABIADACQgCgRAGgRQAEgMAIgKIALgLIAJgGQAVgMAYADQANABAMAHIAVARIAJAOIAEAJIACAJIACAMIAIgIQAJgJAMgCIABgEIADgJQADgJAJgEIAEACIADADQACAGgCAHQgBAHgGAGIABABIALgIIAGgCIAEABIAEADIADAFIAAAFIgBADIgIAGIgKACIAAACIAKgBIAHADIACAFQAAAEgEACQgGAEgHgBIgBAJIgDAJQgEALgHAHIgMAKIgOAIIgkAPIAEATQAIgGAKAAQAJAAAGAFIAEAFQAFAHADAJQADALgCAMIgEANIgFAHIgNAKQgKAGgLgBIgEgBIgGgDQgIgFgDgKQgGAEgIABIgCABIgTAAQgMgCgJgGIgBAIIgJAMIgFAEQgGAEgIAAIgDAAgAA9ArQgHACgHAEIgBABIgDACIgKANQgDAGgBAHIgBAKIAAAIQABAJAEAHQAFAIAJADIADAAIAHAAQAIgBAHgFIALgLIAFgKIADgPIgCgMIgGgOIgCgDQgDgEgEgCQgEgDgFAAIgEAAgAgcBlQAHAGAKACIAYAAIAPgFQgDgJABgKQgGAGgIACIAAAAIgSACIgNgCIgJgFgAhgBlIgCgJIgBgRQAAgMAJgLQACgDAIgDIALgCIAJACIANAGQgGgGgIgDIgPgCQgFAAgEADQgGADgEAHQgEAHgBAIIAAARIAEAPgAgdAQIgDAHQgHAQgCARIAAABIAJAQIADAMIADACIAMAFQAMACALgCIADgBIACgBIAMgHIACgKQACgIAGgHIACgDIgGgYIgHgTIgDgGIgKAEIgWAEIgFAAIgBgBIgLgBgAgxAwIAGAGIABgFIAEgPIAJgXIgFgBIgEgCIgOgIIgLgJIgJgLQgFgHgCgJIAAgCIgGgJIgCgCIgKAAIABAGIgFAFIgEACIgGgEIgBADQAGAEgDAHIgDACIgDABIAAADIADADIADAEIgBADIAAABIgDADQAFAKAJAGIAlATIAHACIAIACIADgKIAGgPgABNhIQgJAGgGAIIAAAGIgBABIAAAEIgFAQIgIAQIgKALIgOAJIALAcIAFAUIAFgEIgKglIAGAOIAqgTIAAAAIAMgHIALgLIAIgQIADgOIgGgBIgCgDQgBgEABgDIAGgEIAAgDIgJgBIgBgCIgBgDQAAgFADgCIgBgBIgIAFIgFgDIgBgCIgBgFQgHACgHAEgAg/hGIgJAGQgFAGAAAIIAAANIAEAKIAIAMIAKALQAFAEAGACIALAFIAIADIAPACIAPgCIAHgCIATgJIAQgQIADgFIAFgJIAEgQIAAgCIgBgFIgCgHQgDgJgHgGQgHgFgIACQgKACgCAKIgEAKIgLAKIgJADIgHAAIgEgBQgHgDgFgHIgFgMIgIgEIgDgBgAiEgPIAAADIABADQADAEAGgBIAJgDIABgCQABgEgEgCIgQgBgAiCglIgCACQgCADACADIACACIALADIAHgCIACgDQAAgEgFgDIgFgCgAh0hFQgDAFABAGIAFAMIAFAGIAFABIAFgEIgIgYIgDgDIgDgBgABvgzIAAACQgBAEAEACIANgBIAGgCIAAgFIgBgCIgFgDIgCAAQgHAAgHAFgAgWh/IgOAEQgLAEgIAHIgGAGIgJAMIgGALQgHATAEAUIAAgFQAAgJAFgHQAGgGAIgDIASAAIAIAEQgBgOAJgLIAKgIIADgBIAOgBQAHABAGAGIAEAJIACAMIAAACIAHgGIAIgBQALABAGAJQAGAHACAJIAAgJQgBgNgHgMIgGgLIgOgNIgNgIIgHgDIgUgDgAgShkQgHAFgEAIQgDAGAAAHQAAAHADAHIAHAJQAFAEAFABQAJABAHgEIAIgHIAFgIIABgIIgBgOQgCgIgGgGQgFgDgFgBIgCAAQgIAAgHAEgABshHQgDADACAFIABABIADABIARgDQAGgCAAgFIgBgGIgFgFIgFAAgABghdQgDAIAAAJIACADIADADIADgBIAEgFIAHgMIABgJQAAgGgGgBQgIADgDAIgAgPgCIgFgMIgEgVIgFAAIgDgCIAAAAIAAgBIABAAIAHABIABAAIAXgFIAHAAIAFACIAEABIAFgCIABgBIACAAIgBADIgCABIgGABIgCgBIgBAHIAAABIgCAQIgDALIgGAGIgJAAgAgWgjQACAPAFAOIAIAIIAFAAIAFgCIAEgIIAEgeIgFgBIAAAHIgFAFIgLAAIgDgBIgCgDIAAgGgAgNgmQgBAEACAEIADACIAMgDIAAgBIABgIIgDAAgAgzhdQAAgHAFgFQADgCAEgBIAEADIACABIADAEIAAAEIgCAAQgBgHgGgCQgGAAgCAFIgCAIgAAfhlIgCgEIgDgDIgHgCIgIAJQAAgEADgDQAEgEAEAAQAJABABAJIgBADg");
	this.shape_56.setTransform(112.2,402.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EDEDED").s().p("AiDAtIgCgDIABgDIABgCIAPAAQAFADgBAEIgCACIgJADIgBAAQgFAAgCgEgAiCAcIgCgCQgCgDACgEIACgCIAKAAIAFACQAEACABAFIgCACIgHACgAgMAZQgDgEACgEIAOgDIADABIgBAHIgBACIgLACgAhsAPIgGgHIgEgLQgBgGACgFIAFgBIADAAIACADIAIAXIgEAFgABuAFIABgCQAHgEAIABIAGABIABACIAAAFIgHADIgMAAQgEgCAAgEgABsgGIgCgCQgCgEAEgDIAPgLIAFAAIAFAEIABAGQAAAGgGACIgRADgABfgRIgCgDQAAgJADgJQACgIAIgCQAGAAABAHIgBAIIgHANIgFAEIgDABgAgZgfQAAgFAEgDQADgDAFAAQADAAACACQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAIgDAEQgEAFgGAAg");
	this.shape_57.setTransform(112.2,397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).wait(1));

	// Layer 10
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(4,1,1).p("AhxhJIADgBIAHAGIAGARIAMABIADACQgCgRAGgRQAEgMAIgKIAMgLQAEgDAFgDQAVgMAYADQAMABAMAHQAMAHAJAKIAJAOIAEAJIADAJIABAMIAIgIQAJgJAMgCIAEgNQADgJAJgEIAFACIACADQACAGgBAHIgHANIABABIAKgIIAGgCQACAAACABIAEADIADAFIAAAFIAAADIgJAGIgKACIABACIAKAAIAGACIACAFIgDAGIgOADIgEASQgDALgIAHIgMAKIgJAGIgEACQgSAJgTAGIAFATQAIgGAKAAQAIAAAGAFIAEAFIAIAQQAEALgCAMIgFANIgFAHIgMAKQgKAGgMAAIgEgCIgGgDQgIgFgDgKQgGAFgIAAIgCABIgTAAQgLgBgJgHIgCAIIgEAHIgEAFIgFAEIgSAEQgOgCgJgKIgLgNIgHgQQgDgOADgOQABgGADgFQAGgIAJgDIASgCQAIACAGAFIADgLIgMgDIgYgKIgPgJQgLgHgFgLIgIABIgIgCIgCgBQgDgEABgEIADgDQACgCACAAQAFgCAFACIAAgDIgGAAIgFgBQgFgBgCgFQgBgFAEgDQADgDADAAIAMADIACgDQgGgHgBgJIAAgGIABgFQABgEAEgBg");
	this.shape_58.setTransform(112.2,402.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CC99CC").s().p("AhTB4IgLgNIgHgQQgDgOADgOQABgGADgFQAGgIAJgDIASgCQAIACAGAFIADgLIgMgDIgYgKIgPgJQgLgHgFgLIgIABIgIgCIgCgBQgDgEABgEIADgDIAEgCQAFgCAFACIAAgDIgGAAIgFgBQgFgBgCgFQgBgFAEgDQADgDADAAIAMADIACgDQgGgHgBgJIAAgGIABgFQABgEAEgBIADgBIAHAGIAGARIAMABIADACQgCgRAGgRQAEgMAIgKIAMgLIAJgGQAVgMAYADQAMABAMAHQAMAHAJAKIAJAOIAEAJIADAJIABAMIAIgIQAJgJAMgCIAEgNQADgJAJgEIAFACIACADQACAGgBAHIgHANIABABIAKgIIAGgCIAEABIAEADIADAFIAAAFIAAADIgJAGIgKACIABACIAKAAIAGACIACAFIgDAGIgOADIgEASQgDALgIAHIgMAKIgJAGIgEACQgSAJgTAGIAFATQAIgGAKAAQAIAAAGAFIAEAFIAIAQQAEALgCAMIgFANIgFAHIgMAKQgKAGgMAAIgEgCIgGgDQgIgFgDgKQgGAFgIAAIgCABIgTAAQgLgBgJgHIgCAIIgEAHIgEAFIgFAEIgSAEQgOgCgJgKg");
	this.shape_59.setTransform(112.2,402.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58}]}).wait(1));

	// Layer 11
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#663300").ss(1,1,1).p("AAmgUIACgCIABgGIgBgGIgCgEQgCgDgEgBIgCgBIgEAAIgDAAAAVgoIAAgBIACgCIgCADIgBADIg0A4IAAACIgFALIgBAGIgCAGIAAABIALgFIAKgGAAUglIAAABIAAAGIAFAHIACABQADACAEACIAEgCAAigSQABAAABAAIACgCAggAVQgBAGACADQACADAFABIAFAAIABAAIA2g0");
	this.shape_60.setTransform(121.3,427.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CC99CC").s().p("AgYAcIgFAAIAzg3IAGADIACAAIg1A0g");
	this.shape_61.setTransform(121.9,428.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF6666").s().p("AgcAdIAyg8IABgBIAEAHIACACIgyA4QgGgBgBgDg");
	this.shape_62.setTransform(121.1,427.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CC9966").s().p("AgoAsIACgHIABgFIAFgMQgBAHADADQABADAGABIAEAAIgKAGIgLAEgAAigTIAFgBIgDACIgCgBgAAbgVIgCgDIgEgGIgBgGIAAgBIABgDIADgDIACgBIAFABIABAAQAEACADADIACADIAAAHIAAAGIgCACIgFABIgHgCgAAngUg");
	this.shape_63.setTransform(121.3,427.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]}).wait(1));

	// Layer 12
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#663300").ss(1,1,1).p("ACMAzIgJhdIgDgBQgagSgcgGIgNgCQgVgDgWADIgKACIgIABAABBHQBFgeA9AaIAEgJIAEgFACMAzIABACIgCAAAABA1QAjgPAhgCQAZAAAYAIQALADAKAGIABgCAiMA1IALANIANgEQA3gSA+AbAgBA1IABh3IgHgBQgkgGgeAGQgQAEgOAGIgbAPIgGA6IgEAlIAAAAQAJgEAJgDQAagKAbAAQAhABAjAQIABASIABAA");
	this.shape_64.setTransform(111.9,434.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#996633").s().p("AhPgDQAbgCAZAHIg0gCQgXAAgUAKQAUgNAXAAgAhSgJIA0AEIgngCQgZgBgVAJIgLAHQASgQAagBgABRABQgagDgaAHIAGgEIAJgBIAbgCIAAAAQAPAAAOACQAOACANAFg");
	this.shape_65.setTransform(111.7,439.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CC9966").s().p("AguAIIgNAFIgLgNIASgHQAagKAaABQAhAAAjAQIACARIABABQg/gag2AQgAgLgFQgYAAgTANQAUgLAXAAIAyADQgTgGgUAAIgLABgAg7AFIAMgGQAVgJAZABIAmABIgzgEQgaACgTAPg");
	this.shape_66.setTransform(104.9,439.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCC00").s().p("AAAABIAAgBIABABg");
	this.shape_67.setTransform(125.9,439.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AA0AMQgIgFgJgCIglgFIgLABIghgBQgLAAABgEIAEgIQAWgDAVADIAMACQAdAGAaARIgCACg");
	this.shape_68.setTransform(119,428.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC99").s().p("AAAg6IAIgCIAAAcIACASIADAgIAEAOIAiADQALADAHAGQghABgjAQgAiLA8IADgkIABACQAEAQACAAIADgKQABALAEAKIgSAIgAB2A0IALg9IAAgZIACAAIAKBcIgBACQgLgFgLgDg");
	this.shape_69.setTransform(111.9,433.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFCC").s().p("Ah7AlIgDAKQgCAAgEgQIgBgCIAHg6IAagPQAOgHAQgDQAfgHAjAHIAAAAIgDAsIgBABIAAAPQgEAlgUAAIgMgBIgBAAIgFAAIgNACIgNAEQgGACANgDIAEACQgbAAgaAJQgEgKgBgLgABIAxQgHgGgLgCIgigEIgEgOIgDggIgCgSIAAgbIAKgCIgEAIQgBAFALAAIAhABIALgBIAmAEQAJACAIAGIAEACIACgBIACABIgCABIAAAYIgLA9QgYgIgZAAg");
	this.shape_70.setTransform(111.6,433);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]}).wait(1));

	// Layer 13
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(4,1,1).p("ACAhbIAAAAIgCgBIAAAAIgFAAIgEABIgCADIgkAnIgSgDQgUgDgXADIgSADIgHgBIABAAQgkgHgfAHQgQADgPAHQgMAFgLAIIAAABIgEACIgBABIAAAAIgKBeIAAABIAAABIACABIAKANIABABIABAAIANgFQA2gRA9AbIAAAAIACAAIAAAAQBEgeA8AZIACAAIABAAIAAgCIAFgIIABgCIABgCIABAAIACgBIAAgBIAAgDIgKhcIgBgBIgCgCIgWgMIAdgeIABgHIgBgHIgCgEg");
	this.shape_71.setTransform(111.9,432.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CC99CC").s().p("AAABdIAAgBQg9gag2ARIgNAFIgBAAIgBgBIgKgNIgCgBIAAgBIAAAAIAKhfIABAAIAAgBIAEgCIAAAAQALgIAMgGQAPgGAQgEQAegHAlAHIgBAAIAHABIASgDQAWgDAVADIASADIAjgnIACgDIAFgBIAEAAIABABIABAAIABABIAHAEIACAFIABAGIgBAHIgeAdIAXAOIACABIABABIAKBdIAAACIgBABIgBABIgBAAIgBACIgBABIgFAJIgBACIAAABIgCgBQg8gZhEAdIgBABg");
	this.shape_72.setTransform(111.9,432.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72},{t:this.shape_71}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95.6,329.8,32.6,177.2);


(lib.Symbol114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("ADlAPQACgkAigCQAWAAAJARIAFANIAAAOIgyAAQAAATAOgBQAKABADgKIAUAAQgDAXgeAAIgBABQgjAAAAgngAEWAGQAAgOgNAAQgMAAgBAOIAaAAIAAAAgAGpAPQACgkAlgCQAkACABAkQgBAlglABQgkgBgCglgAG/APQAAAYAQAAQAPAAABgYQABgXgQAAQgQAAgBAXgAFeAPQADgjAegDQAfABACAaIgWAAQgBgMgKAAQgIAAgCAUIAAACIAAADQABAWAJAAQALAAAAgOIAWAAQgCAcgfAAQgfgBgCglgABjAPQADgkAkgCQAkACACAkQgCAlgkABQglgBgCglgAB6APQABAYAPAAQAPAAAAgYQACgXgRAAQgPAAgBAXgAjJAbIAVAAQACALALABQANgBABgUQAAgRgNgBQgJAAgEALIgWAAIADg7IA+AAIAAAPIgrAAIgBAbQAHgJAMAAQAeACABAhQgDAfgiACQgiAAAAgagAJmA0IAAgsQAAgQgNAAQgMABgBAPIAAAsIgWAAIAAgsQAAgQgNAAQgNABAAAPIAAAsIgXAAIABhJIAVAAIAAAJIABAAQAIgLAOAAQASACAGAMQAJgOAQAAQAQACAIAMIABARIAAAsgAE7A0IAAgUIATAAIAAAUgADAA0IAAhpIAWAAIAABpgAA9A0IABgsQAAgQgNAAQgMABgCAPIAAAsIgVAAIAAgsQgBgQgMAAQgMABAAAPIgBAsIgWAAIABhJIAVAAIAAAJIABAAQAHgLAOAAQARACAHAMQAJgOAQAAQAQACAHAMIADARIgBAsgAhXA0IABhOQgLAIgOAEIAAgTIAagPIAUAAIAABkgAjsA0IAAgUIATAAIAAAUgAkpA0IgOg2IgBAAIgPA2IgZAAIgXhJIAWAAIAOA3IABAAIAPg3IAYAAIAPA3IABAAIAOg3IAWAAIgaBJgAmrA0IgOg2IgBAAIgQA2IgXAAIgZhJIAYAAIANA3IAAAAIAQg3IAYAAIAOA3IABAAIAPg3IAWAAIgbBJgAotA0IgOg2IgBAAIgPA2IgZAAIgXhJIAWAAIAOA3IABAAIAPg3IAYAAIAPA3IABAAIAOg3IAWAAIgbBJg");
	this.shape.setTransform(781.6,81.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AGbA8QAEg3gBg+IAMAAIAAADIgBADIAWgDQAVAAABASQgBAYgVACIgNgCIABgLIAMADQAIgCABgNQABgJgLAAQgLABgKAEQgDAwABAzgAl+A5QAGgfABgtQACgSgTACIgUADIgDgKIAbgDQAZgCgBAWQgBAwgGAlgAm2gcIAKgBQABAtACArIgLABgACKA7IABhQIgOAZIgJgEQARgZAOghIAJAEIgJATIAsACIgBAJIgogBIgBAZIAngFIAAAKIgnADIAAAYIAqgFIAAAKIgqAFIAAARgApHAeIgUALIgGgJIAZgNIgCgTIgaADIgCgKIADAAIAYgDIgCgQIgOADIgEgJIAkgLIADAKIgJADIABATIAXgEIgPgnIAMgDIAOAnIAegFIACALIgdAEIAHAQIAJgIIAJAHIgFADIgJAKIANAhIgLAEIgLgdIgOAQIgJgIIATgSIgIgZIgaAFIAAAQIAPgJIAFAKIgTAKIAEAgIgLACgAJHgCIgaADIgCAZQAAATAIAAQAIABALgOIAIAHQgOARgOAAQgSAAAAgfQABgfAGggIgCAAIgCABIgBgKIA6gIIABAKIgSACIAFAdIAWgEIABAKIgWAEQAJAnALASIgKAFQgMgVgIgngAIygoIgEAfIAXgDIgFgegAAhA5IAEhtIAMAAIgFBugAgZASIgOADIACAfIgLABIgBgkIgBgJIAKAAIAAACIAPgCIAAgLIgYABIAAgMIAYAAIAAgNIgPgBIgDAHIgEAHIgJgFIASghIAJAFIgGAKIAJAAIAAgRIALAAIAAASIASAAIgBAKIgRgBIAAANIAWgBIAAAMIgWAAIgBAKIAGAAQASgCgBAUIgEAaIgJgBIADgZQABgJgKABIgCAAIgCAAIABAoIgLABgAEjA4IAAgLIANADQAIABAEgNQAGgQABgaQAAgVgOABIgTADIgIAPIgJgEIAXguIAKAFIgJARIANgBQAZgBgBAdIgGAuQgFAUgTAAgAnSgVIgFADIgIAGIgGgJIAmgcIAHAJIgPALQAAA3ADAfIgMAAgAHDAqIgTAMIgHgIIARgMIgOgNIAIgGIAOAMQAIgJAAgHQABgHgIABQgJgBgLAHIgFgJQAOgGAMgBQASABAAAOQAAALgNAOIARAPIgIAGgAlDAYQABgZAMgcIALAEIAAABQARgGAQAAQAagBAAAhQgBA2grAAQgnAAAAgggAkcAuQAgAAABgrQAAgYgQABQgSABgTAKIgBgCIAAACIgBACIApAHIgEAKIgogHIgDAMIArAHIgDALIgogHQAAAUAcAAgAF1A3IAAgKQAOADgBgUIAAgOIgUAMIgFgKIAZgNIgCgXIgTgBIABgLIASACIgDgYIAMAAIAAABIACAYIAQAAIAAALIgQgBIABARIAFgEIAFgCIAFAIIgPAIIABAWQACAagWAAIgEgBgABigXIgLAIIgHgJIApgcIAGAJIgSANIAEBUIgLAAgAi2AbQAAgTAFgRIAIACIAeACQAcACgCgXQgBgLgNAAQgfgBgUAIIgDgLQAVgHAfAAQAbAAABAWQABAfgnAAIgdgCQgDAJAAAPQABAPAaABQAcgBARgIIAGAKQgZAKgYgBQgoAAAAgagADcATQABgSAIgTIAFADQAKgFAKAAQAWAAAAAcQAAAsgdABQgbAAAAgigADnAUQAAAWAPABQATgBAAghQABgUgOACQgHAAgJAFIgEAMIAcACIgBALIgcgCgAH4AsQANgGAVgPIAGAJIgiAUgAAMggIALAAIAEA/IgLABQAAgdgEgjgAEdABIAIgEIAPAVIgJAHgAH1AIQABgHAIgIQgIgGgBgGQgBgTAigQIAFAKQgcANABALQAAADAFAFIASgMIAFAKQgYALgFAKQAAAEAFgBQAIAAALgJIAGAHQgQAMgKAAQgNgBgBgLgAoegmIAFgIIAVALIgGAJgADegkIAugRIADALQgVAFgZALgAk9gsIA9gPIACAMIg8AOgAm2gyIAIgGIAMARIgJAGg");
	this.shape_1.setTransform(157.5,82.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96,76.5,749.2,11.9);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("ABOFZQgRhBg8gMQgagGAEgFQgCgPAbABQCJAWgWg/IAAlMIiGAAIgiADIAACgQAABTAHBfQADAggUALQgOAIgvADQgeAGAAgYIAAgzIhFAAIAAA2QAAAbgZAGQgZAMggADQgkAIAHg0QAJhOAAh3IAAi+QAAhQgGhFQgFgeAcAKQAmAIA1AVIALAJIAvAAQAfgwAHAAQA6AYAfAtQADAMgOAJQgKADAAAUIAAAtIAwAAIB4AAIAAhBQAAhagIggQgIgeAeADIBnASQAUAJgPAYQgQAIACAPIAABmQAOgbAIAAQAYADA4BBIADAHIAAADIAAAFQgDAGgIAAIheAAIAAB1QAACuAFBgQAGA6gkAPQgnAXgvAOQgIADgHAAQgUAAgDgZgAjbCwIBFAAIAAjKIhFAAgAjbjeIAACwIBFAAIAAjCIg/AAQgGAHAAALgAAEAwQAAg1gZg2QgEgMACgDQACgCAMACQBPAZAbA3QAWBBgvAeQgPAFgMAAQgmAAgDg6g");
	this.shape.setTransform(515.3,50.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmbEFQgJgsgrgLQgWgEAFgFQgDgIAWACQBRAGgHg4IAAiYQAAhBgGgYQgEgNAEgDQACgDANAAQAhAAA0AOQAYALgUASQgLAIAAAJIAACiQAABPADAYQAEA5hXALIgKABQgTAAgCgOgAuuECQgIgggfgJQgTgHAEgGQgEgFAXAAQBAALgGgcIAAgfIiBAAQghAAgUAHIgGAAQgWAsgwAwIgKACQgDgCADgFQAth4AAimIAAhOQAAhCgHgfQgGgaAYAFQAjAIAgAQQALABAAAMIB/AAIgDgHIgBgFQgFgegWgRQgHgCAAgFQADgEAHAAQBOgHARAhQAJAWgNAWIBtAAQAhguALgCQAYACAtApQAJAOgNAGIh0AAQADAIgHAKQgJAGAAAHIAAAVIAhAAQAVggAKAAQAVAEAcAfQAFAGgCAFQAAADgJAAIhgAAQAoA1BBAPQAHAAABAHQACAEgGAEQgfASgLAXQgCANgMgHQgugXgShFIAAAKIAAAUIACAlIADAAQAPgGAHAIQAaAaALATQAGAHgFAEQgGAHgGgCIgXgDIhQAFQAAAGgGACQgHADAAANIAAALIAnAAQAYglALAAQATACAiAjQAEABAAAFIACAAQAWAFAlAiQAGAHgCAEQAAAGgJAAIi7AAIAAA3QACApgWAHQgYALgeAJIgJABQgUAAgCgRgAtFCGIBgAAQAEgJAOgRIADgFIh1AAgAwuAZQgJA9gRAuIBGACIBrAAIAAgfIhdAAIggAFQgGAFgDgKIgLgOQgCgHAHACIA7AFIBRAAIAAgfIgLAAQhgAEgWgCQgJAAgCgGQAAgHAJAAIAegEIAPgCQgNgDAFgTIAAgNIABggQgZAdghAWgAuvATIgKAMIAwgKIA9gNIADgpQgjAihDASgAuvAGQATgPARgTQgTAAgEgYQgDgQgKgNgAwsAAQAagwAWhEIgCAAIgnAFIgDAAQAAA9gEAygAuvhpQAiAAAYAUQAHAHACAIQAPgZAEgVIhWAAgAtdiFIAWAAIAAg0IheAAQADAIgHAFQgGACAAALIAAAaIANAAQAMgYALgIQAPAEAfAcgAwoiqIAAAlIAwAAIAEAAIAAg0IgxAAQgDAHAAAIgANoDmIACgiIAEiUIAAinIhIAAIAABMIAWgEIAagFQANgCAFAHQAAAGgLAHIg3AkIAAAEIACBbIAABcQAFAsgdANQgRALgfAEQgbAHgFgWQgGglgfgJQgUgEAFgHQgCgKAYADQA2ALgFgpIAAhmIgIAGIgQAGQgGADgIAJIgOALQgEAAgGgNQgLgUgMgpIAAgNQADgFAJgBIAggHIApgIIAAhgIgZAAIgiACQgIAAgCgFIgJgMQgBgBAAgBQAAgBAAAAQAAgBAAAAQAAgBABAAIAFgCIA7AFIAOAAIAAgZQAAhDgGgYQgHgYAYACQAuAHAhAIQALACACAJQAAAJgJAGQgLAJAAALIAABGQASgjANgEQALAAAeAYIAAgQQgEg7gEgNQgFgNAFgEQAEgEANACQAtALAiAPQAGACACAEIBMAAQAFAAANgTQALgPACAAQAyARAgAiQADAMgPAEQgJAHgCALIgFAwQgEBBhMAFQghADAAgRQAAghgngMQgLgFAAgFQACgGANADQBGAOgCgtIAEgyIhgAAQgEAEAAAHIAAAEIAAChIBiAAQAUgcAKAAQAbAFAtAkQAUASgWAIQgNAEgGATQgUA5gYAnQAlAfAtARQAOAEAAAHQACAJgQAEQgYALgOAeQgQAYgRgPIg/g8QgmAegtAVQACAhg9AJQgHACgEAAQgXAAAGgsgAO/DRQAggeAYgqQgjhIgGhYIgPAAgAQUBBQALgnAGgxIhDAAQATAyAfAmgApfDMQBRhnAahwQAHgTARAGQAiAHAoARQAPAKgPANQgNAAgJAPQhDB6htA1IgJACQgCgFAEgGgAjGCeQgRhXhFhEQgHgFACgEQAFgFALAFQBxAlAyBLQAFANAAAMIAAAOQgDAegcAQQgLACgIAAQgiAAgJgjgApjAbQgFgCAHgIQBViAAUiOQACgaAWAJQAjAJA4ATQAUAQgWANQgQAEgBAJIgbAyIDUAAQAZgsALADQAbADA0A6IADAEQAKAQgEAIIgGAFQgHAFgQAAQg0gIgfAlIgOAJQgHgFAEgNIAQg9IjpAAQgzBVhoBLQgFACgCAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_1.setTransform(485.5,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#330000").ss(1,1,0,3).p("Eg+9AB8MB97AAAEg+9gB7MB9xAAA");
	this.shape_2.setTransform(496.4,102.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#330000").ss(2,2,0,3).p("EA66gArQgEAggYAYQgcAcgoAAQgoAAgdgcQgYgYgDggEA1tgArQgDAggZAYQgcAcgoAAQgoAAgcgcQgZgYgDggAVSgrQgEAggYAYQgcAcgoAAQgoAAgcgcQgZgYgDggAPVgrQgEAggYAYQgcAcgoAAQgoAAgdgcQgYgYgDggAJegrQgEAggYAYQgcAcgoAAQgoAAgdgcQgYgYgEggAmcgnQgEAggYAYQgcAcgoAAQgoAAgdgcQgYgYgDggArpgnQgDAggZAYQgcAcgoAAQgoAAgcgcQgZgYgDggEgsEgAnQgEAggYAYQgcAcgoAAQgoAAgcgcQgZgYgDggEgyBgAnQgEAggYAYQgcAcgoAAQgoAAgdgcQgYgYgDggEg34gAnQgEAggYAYQgcAcgoAAQgoAAgdgcQgYgYgEgg");
	this.shape_3.setTransform(473.5,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#330000").ss(2,1,1).p("EA+8AoTQgzvvgMv8QgIrAALrGQANtfAqtpIAAgBIAFhvIAAgDIpfAAEA/CgomIBhADIAGAPIgIB5IBcAAIgGBgIBbAKQguK/ggKqQgmMmgTMHQgaQ3AMP9I/0gHIqjAIMgrAAAAEAydgqZIiNAAEBAhgmbQgyMcgZL+QgZLtgBLOQgCQlAyPwEBB3gk7QgvLPgcLIQgfL+gJL2QgNQXAdQHEAM1gqZIi9AAEAG4gqZIi3AAEABAgqZIjFAAEgO5gqVIiNAAEgCagqVIpfAAEg6egqVIi3AAEhAWgqVIi7AAEg0hgqVIi9AAEgUGgqVI9bAAEAtQgqZI9bAAEgBmApPMBBMAAAEgQMAp1MBQfAAA");
	this.shape_4.setTransform(508.4,276);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FFCC66","#FFCCCC","#FFCC00"],[0,0.463,1],-473.5,-232,-473.5,329.9).s().p("AABAAIAAAAIAAAAIAAAAIAAABIgHACgAABAAIABABIgBAAgAACABIAFgDIgFADg");
	this.shape_5.setTransform(703.8,272.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFF99","#FFCCCC","#FFCC00"],[0,0.463,1],-473.2,-230.1,-473.2,331.8).s().p("AgBAAIACAAIgBACg");
	this.shape_6.setTransform(703.5,270.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FAF3EB","#FFFFFF","#EFE4DC"],[0.008,0.49,1],212.4,7.9,0,212.4,7.9,337.4).s().p("EhBFApZQAfuYAKtlQAJrVgGrQIgKrgIgDi2QgMozgUozIAAAAIAAgRIAAgCIAAAAIAAgCIC7AAQAEAgAYAYQAdAcAoAAQAoAAAcgcQAYgYAEggIC3AAQADAgAYAYQAdAcAoAAQAoAAAcgcQAYgYAEggIC9AAQADAgAZAYQAcAcAoAAQAoAAAcgcQAYgYAEggIdbAAQADAgAZAYQAcAcAoAAQAoAAAcgcQAZgYADggICNAAQADAgAYAYQAdAcAoAAQAoAAAcgcQAYgYAEggIJfAAIAUgBIAAgEIDGAAQAEAgAYAZQAdAdAoAAQAoAAAcgdQAYgZAEggIC3AAQADAgAYAZQAdAdAoAAQAoAAAcgdQAYgZAEggIC9AAQADAgAZAZQAcAdAoAAQAoAAAcgdQAYgZAEggIdbAAQADAgAZAZQAcAdAoAAQAoAAAcgdQAZgZADggICNAAQADAgAYAZQAdAdAoAAQAoAAAcgdQAYgZAEggIJfAAIAAAEIgFBvIAAABQgqNpgNNfQgLLGAIK/QAMP9AzPvIgBgCQgDgCgEAAMhAwAAKIAGAAIgQAAIhiAAIAFAAIgPAAMg/eAALgEAglAAWIAJgCIAAgCgEAguAAUIABAAIAEgEgEAgoAAAIABACIABAAIABgCgAUZxzIAHADIgGgEgAZDx3IAIgIIgBgBgEA/QgYNMh96AAAgEA/GgcFMh9wAAAg");
	this.shape_7.setTransform(494.5,270.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFC4C4","#FF99CC","#EE8011"],[0,0.463,1],-473.4,-231.1,-473.4,330.8).s().p("AACAKIAAgBIAAACgAgBgHIABgDIAAADg");
	this.shape_8.setTransform(703.7,271.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#330000").s().p("Eg/hAqiIgDgDIhDhDIACACIgJgJIgPgQIACACIgJgJIgEgEIgNgNIAQnJQAQnfAKtmQAJrVgGrPIgKrgIgDi2QgMo0gUoyIAAgQIAAgIQABgEADgCQADgDAFABQADABADADIACAGIAAACIAAAAIAAADIAAAQIAAABQAUIyAMI0IADC1IAKLhQAGLPgJLVQgKNmgfOXIAAAHMA/egAMIAPABIgFgBIBiABIAQAAIgGgBMBAwgAKQAEAAADADIABABIAHgCQAGgBgDAJQgDAJgPABMhArAAKIAAAAIgGAAIgJABMhA5AALIANANIAJAAMBA4gABQATgBgEAEQgFADAAAEIgDAHQAAABAAAAQAAAAAAABQABAAABAAQABAAABABMhA5AABIASASIAJgBMAxuAAAQARAAgDADQgEADAAAEQAAAEAGADQAFADgVAAMgxkAAAIARASIAKgBMAs7AAAQAUAAgFADQgFADAAAEIAGAHQAGADgWAAgEg/WAqSIAAgBIAAAAg");
	this.shape_9.setTransform(494,276.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ECE0C6").s().p("EgUjAphQAAgEAFgDQAFgDgUAAMgs7AAAIgKAAIgRgSMAxkAAAQAVAAgFgDQgGgDAAgEMBQfAAAMhQfAAAQAAgEAEgDQADgDgRAAMgxuAAAIgJABIgSgSMBA6gABQgBAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAAAIADgHQAAgEAFgEQAEgDgTABMhA5AAAIgJABIgNgOMBA6gALIAJAAIAGgBIAAABMBAqgALQAPAAADgJQADgKgGACIgHACQgzvwgMv8QgIq/ALrGQANtgAqtpIALAAIBhAEIAGAOIgIB5IBcAAIgGBhIBbAJQguLAggKqQgmMmgTMGQgaQ4AMP8I/0gGIqjAIgEBALAo0QgUrFAArMQAAlGAElHQAJr1Afr+QAcrIAvrPQgvLPgcLIQgfL+gJL1QgEFHAAFGQAALMAULFgEA/jAoWQgwvJAAv5IAAhTQABrPAZrsQAZr+AysdQgyMdgZL+QgZLsgBLPIAABTQAAP5AwPJgEA/dAoWMhBMAAAgEgQVAo7g");
	this.shape_10.setTransform(509.3,281.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75.8,3.5,864.3,545);


(lib.Symbol328 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABkgnIh/AAQhIAAAABP");
	this.shape.setTransform(10,4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	// Layer 4
	this.instance = new lib.Symbol325("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol326("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.Symbol327("synched",0);
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,104,35);


(lib.Symbol162 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol158();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	// Layer 2
	this.instance_1 = new lib.Symbol159("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.Symbol160("synched",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.Symbol161("synched",0);
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.7,-5.7,41.5,61.2);


(lib.Symbol157 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol154("synched",0);
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

	// Layer 2
	this.instance_1 = new lib.Symbol151("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(3));

	// Layer 3
	this.instance_2 = new lib.Symbol153("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-15.5,56,0.62,0.62);

	this.instance_3 = new lib.Symbol155("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-15.5,56,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// Layer 4
	this.instance_4 = new lib.Symbol150("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,57,0.496,0.496);

	this.instance_5 = new lib.Symbol156("synched",0);
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[]},1).to({state:[{t:this.instance_5}]},2).wait(1));

	// Layer 5
	this.instance_6 = new lib.Symbol152("synched",0);
	this.instance_6.parent = this;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-0.5,32,56.7);


// stage content:
(lib.无标题3 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.next_btn.addEventListener("click", (function () {
			this.gotoAndStop(1);
		}).bind(this));
	}
	this.frame_1 = function() {
		this.next_btn.addEventListener("click", (function () {
			this.gotoAndStop(2);
		}).bind(this));
		this.prev_btn.addEventListener("click", (function () {
			this.gotoAndStop(0);
		}).bind(this));
	}
	this.frame_2 = function() {
		this.next_btn.addEventListener("click", (function () {
			this.gotoAndStop(3);
		}).bind(this));
		this.prev_btn.addEventListener("click", (function () {
			this.gotoAndStop(1);
		}).bind(this));
	}
	this.frame_3 = function() {
		this.next_btn.addEventListener("click", (function () {
			this.gotoAndStop(4);
		}).bind(this));
		this.prev_btn.addEventListener("click", (function () {
			this.gotoAndStop(2);
		}).bind(this));
	}
	this.frame_4 = function() {
		this.next_btn.addEventListener("click", (function () {
			this.gotoAndStop(5);
		}).bind(this));
		this.prev_btn.addEventListener("click", (function () {
			this.gotoAndStop(3);
		}).bind(this));
	}
	this.frame_5 = function() {
		this.next_btn.addEventListener("click", (function () {
			this.gotoAndStop(6);
		}).bind(this));
		this.prev_btn.addEventListener("click", (function () {
			this.gotoAndStop(4);
		}).bind(this));
	}
	this.frame_6 = function() {
		this.next_btn.addEventListener("click", (function () {
			//this.gotoAndStop(7);
		}).bind(this));
		this.prev_btn.addEventListener("click", (function () {
			this.gotoAndStop(5);
		}).bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(9));

	// 内容
	this.text = new cjs.Text("详见A2", "21px 'SimHei'", "#662200");
	this.text.lineHeight = 23;
	this.text.lineWidth = 67;
	this.text.parent = this;
	this.text.setTransform(945,644.5);
	this.text.shadow = new cjs.Shadow("rgba(255,255,255,1)",1,1,2);

	this.instance = new lib.位图7();
	this.instance.parent = this;
	this.instance.setTransform(362,391);

	this.instance_1 = new lib.位图6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(362,391,0.698,0.698);

	this.text_1 = new cjs.Text("详见A8", "21px 'SimHei'", "#662200");
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 67;
	this.text_1.parent = this;
	this.text_1.setTransform(1046,346.4);
	this.text_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",1,1,2);

	this.text_2 = new cjs.Text("第一届庄园才艺秀\n约定你的参加！", "26px 'SimHei'", "#662200");
	this.text_2.lineHeight = 28;
	this.text_2.lineWidth = 311;
	this.text_2.parent = this;
	this.text_2.setTransform(801.9,171);
	this.text_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",1,1,2);

	this.text_3 = new cjs.Text("详见A6", "21px 'SimHei'", "#662200");
	this.text_3.lineHeight = 23;
	this.text_3.lineWidth = 67;
	this.text_3.parent = this;
	this.text_3.setTransform(709,346.4);
	this.text_3.shadow = new cjs.Shadow("rgba(255,255,255,1)",1,1,2);

	this.text_4 = new cjs.Text("一封来自庄园的邀请函", "26px 'SimHei'", "#662200");
	this.text_4.lineHeight = 28;
	this.text_4.lineWidth = 311;
	this.text_4.parent = this;
	this.text_4.setTransform(465,171);
	this.text_4.shadow = new cjs.Shadow("rgba(255,255,255,1)",1,1,2);

	this.text_5 = new cjs.Text("详见A4", "21px 'SimHei'", "#662200");
	this.text_5.lineHeight = 23;
	this.text_5.lineWidth = 67;
	this.text_5.parent = this;
	this.text_5.setTransform(372.1,346.4);
	this.text_5.shadow = new cjs.Shadow("rgba(255,255,255,1)",1,1,2);

	this.text_6 = new cjs.Text("庆祝时报第四十期诞生！", "26px 'SimHei'", "#662200");
	this.text_6.lineHeight = 28;
	this.text_6.lineWidth = 311;
	this.text_6.parent = this;
	this.text_6.setTransform(128,171);
	this.text_6.shadow = new cjs.Shadow("rgba(255,255,255,1)",1,1,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmZB5QASAAAGgCQAFgCABgJIAAgMIhWAAIAAAvIgWAAIABhNIgBhEICDAAIgBAsIAABLQAAATgMADQgMAEgQADQgEgPgIgKgAnRBOIBWAAIAAgZIhWAAgAnRAkIBWAAIAAgWIhWAAgAGxB8QAggGAXgRQAYgSAGgRIgfAAIgyABIAAgXQAXACAbAAIAlAAIAFgsQACgWAAgRQALAEAPABQgEAOgCAUQgCAVgEAXIAfAAIAzgCIAAAXIgygBIgjAAQgKAZgRAPQgQAPgSAJQgSAJgNAFIgRgUgACqByQAgAAAGgDQAFgEAAgKIAAgzIiLAAIg2ABIAAgXQAZACAcAAICMAAIgBgcIAbAAIgBAcIAZAAIAtgCIAAAXIgtgBIgZAAIAAA3QAAAWgMAIQgNAHggAGQgEgQgHgOgAo+CQIACgwIAAhQQgLAcgYAiIgTgQQANgOAMgXQAOgXAIgcIgoABIAAgWQASABAdAAIAAhAQAAgVgCgMIAaAAIgBAjIAAA+QATAAARgBIAAAWIgkgBIAAB6IABAwgAIfBiQAJgLAEgJQAuAeAUAPQgJAJgIALQgWgVgogYgAiWB6QAcgKAdgVQAegWAdgkQAKAKAQANQgSALgZAVQgYAVg2AiQgJgOgMgHgAjdCPQABgZAAgZIAAgyQgaAygmAmQgHgJgPgGQAlghAjg+IgRAAIgrABIAAgYIArABIAfAAIgBgfIAZAAIgBAfIAXAAQAXAAAUgBIAAAYIgpgBIgZAAIAABIIABAygAFtBvQAMgJACgLIAAh6IgnABIAAgWIAoABIAXAAIgBAuIAABSIAVgZQAEAKAIALIgdAfIgVAZQgHgKgNgIgABBBHQALgHAIgKQATAWATAeIgWAPQgOgZgVgZgAjDAzIASgSQAdAaAWAZIgUATQgXgegagWgAojAIQAKgGAIgHIAgArIgTAOQgNgZgSgTgAiGAbQAcgOAYgVQAXgXARgVIAZATQgMAHgVAVQgVAVgsAfQgIgNgLgHgAGzAMQAHgJAFgJIAxAcIgOAUQgfgXgQgHgAHKgXIALgTIAxAfIgNATQgZgUgWgLgAJDgQIANgfIhoAAIg1ABIAAgVQAbABA3AAIAAgaQgtAAgbABIAAgVQARABA3AAQAAgRgCgRIAaAAIgBAiQA0AAAWgBIAAAVQgTgBg3AAIAAAaIBUAAIgXA7IgWgJgABXgIQgdAAAAgeIAAhIQAAgQgDgQIDNAAQgCAMAAAZQAAAYACAQIixAAIAAASQAAARAXAAICFAAQATAAAFgFQAHgFABgWQAMAKAQAFQgLAdgGAFQgHAFgSAAgABThWICYAAIAAgkIiYAAgAl9gRIhLAAIgwABIAAgUIAvABIAYAAIAAgVIgTAAIgjABIAAgUIAeACIAYAAIAAgYIgVAAIgqABIAAgUIAqABIAVAAIgCgcIAZAAIgBAcIAbAAIAmgBIAAAUQgSgBgUAAIgbAAIAAAYIARAAQAUAAATgCIAAAUIgngBIgRAAIAAAVIAeAAIAxgBIAAAUIgxgBgAkhhNIAVgKQATAgAFARIgWALQgIgXgPgbgAi1goQAOgUAQgqQAOAHANAFQgUAcgQAfQgLgGgKgDgAjnhdIAXgFQAIAbAFAZQgLABgLAFQgFgZgJgcgAiBg+QAXgPAagYQAagYAKgPQALANAMAHQgOAKgbAZQgbAYgSASQgMgNgKgGgAojg/QAMgbAJgZIAXAJIgYAyQgKgFgKgCgApuhmIATgLQAMASAOAbIgTALQgKgUgQgZgAFlh9QALgHAIgIQAVAXAPAVQgKAGgKAJQgRgagSgSgAkkh6QAhAAAtgGQAsgHAXgIQAHARAJAKQgbABgpAHIhTAMQgEgPgGgLg");
	this.shape.setTransform(225.3,405.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330000").ss(2,1,1).p("EhPTAAAMCenAAA");
	this.shape_1.setTransform(625.6,381.1);

	this.instance_2 = new lib.元件6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(187.3,635);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.元件6(), 3);

	this.instance_3 = new lib.元件5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(187.3,597.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.元件5(), 3);

	this.instance_4 = new lib.元件4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(187.3,560);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.元件4(), 3);

	this.instance_5 = new lib.元件3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(187.3,522.5);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.元件3(), 3);

	this.instance_6 = new lib.元件2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(187.3,485);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.元件2(), 3);

	this.instance_7 = new lib.元件1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(247.3,457.5,1,1,0,0,0,60,10);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.元件1(), 3);

	this.instance_8 = new lib.Symbol149("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(23,21.7,1.266,1.266);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#330000").ss(2,1,1).p("ArJz1IWTAAQC1AAAAC1MAAAAiBQAAC1i1AAI2TAAQi1AAAAi1MAAAgiBQAAi1C1AAg");
	this.shape_2.setTransform(225.5,552);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ArJT2Qi1AAAAi1MAAAgiBQAAi1C1AAIWTAAQC1AAAAC1MAAAAiBQAAC1i1AAg");
	this.shape_3.setTransform(225.5,552);

	this.instance_9 = new lib.位图9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(658,126,0.821,0.821);

	this.instance_10 = new lib.位图8();
	this.instance_10.parent = this;
	this.instance_10.setTransform(138,191,0.757,0.757);

	this.instance_11 = new lib.點陣圖10();
	this.instance_11.parent = this;
	this.instance_11.setTransform(263,345,0.3,0.3);

	this.instance_12 = new lib.點陣圖9();
	this.instance_12.parent = this;
	this.instance_12.setTransform(386,457,0.3,0.3);

	this.instance_13 = new lib.點陣圖8();
	this.instance_13.parent = this;
	this.instance_13.setTransform(137,455,0.3,0.3);

	this.instance_14 = new lib.點陣圖7();
	this.instance_14.parent = this;
	this.instance_14.setTransform(386,249,0.3,0.3);

	this.instance_15 = new lib.點陣圖4();
	this.instance_15.parent = this;
	this.instance_15.setTransform(139,252,0.3,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AJLIwQtbNbinu/QuPirJ8sGQACigAWh8QA5lWDHhRQB7gyCxAyQDfA/E3DgQVPmLqTRzQHXN4otgzQingPkEhlgArpO+QisCsghjAQi2giB/ibQADjyDcCeQEPhPiDDkQB6DnjhhXgAyHSaQgFAEgEAFQhOBIgQhbQhbgRBAhOQABh5BuBPQAFgBAFgBQB7ghg/BuQA9Bzhwgrg");
	this.shape_4.setTransform(466.9,392.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#330000").ss(2,1,1).p("Aom6yIAANaIAANYIAANaIAANZMApJAAAEggigayIX8AAMApJAAAEggigNYIX8AAMApJAAAEggiAazIX8AAEggiANaIX8AAMApJAAAEggiAAAIX8AAMApJAAA");
	this.shape_5.setTransform(889.3,443.3);

	this.instance_16 = new lib.點陣圖12();
	this.instance_16.parent = this;
	this.instance_16.setTransform(131,452);

	this.text_7 = new cjs.Text("项目", "48px 'SimHei'");
	this.text_7.lineHeight = 50;
	this.text_7.lineWidth = 102;
	this.text_7.parent = this;
	this.text_7.setTransform(697.4,291);

	this.text_8 = new cjs.Text("电脑技术get！\n能根据各自负责的版块内容上传合适的时报内容，能巧妙的和三者联合起来。", "18px 'SimSun'");
	this.text_8.lineHeight = 20;
	this.text_8.lineWidth = 223;
	this.text_8.parent = this;
	this.text_8.setTransform(869.2,358.6);

	this.text_9 = new cjs.Text("    Hey，小摩尔，你想和我们一起制作时报，讨论活动，宣传我们的群吗？快来加入我们一起，为了摩尔，不断地努力吧！", "28px 'SimSun'");
	this.text_9.lineHeight = 34;
	this.text_9.lineWidth = 984;
	this.text_9.parent = this;
	this.text_9.setTransform(128.1,167.2);

	this.text_10 = new cjs.Text("来自庄园的一封邀请函", "40px 'SimHei'");
	this.text_10.lineHeight = 42;
	this.text_10.lineWidth = 648;
	this.text_10.parent = this;
	this.text_10.setTransform(130.6,106.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("ASISaQAFAEAEAFQBOBIAQhbQBbgRhAhOQgBh5huBPQgFgBgFgBQh7ghA/BuQg9BzBwgrgApKIwQNbNbCnu/QOPirp8sGQgCiggWh8Qg5lWjHhRQh7gyixAyQjfA/k3DgQ1PmLKTRzQnXN4ItgzQCngPEEhlgALqO+QCsCsAhjAQC2gih/ibQgDjyjcCeQkPhPCDDkQh6DnDhhXg");
	this.shape_6.setTransform(526.2,383.9);

	this.instance_17 = new lib.點陣圖14();
	this.instance_17.parent = this;
	this.instance_17.setTransform(644,286,0.3,0.3);

	this.instance_18 = new lib.點陣圖15();
	this.instance_18.parent = this;
	this.instance_18.setTransform(148,342);

	this.btn_gotoText1 = new lib.Symbol328();
	this.btn_gotoText1.parent = this;
	this.btn_gotoText1.setTransform(923.5,532.8,2,2);
	new cjs.ButtonHelper(this.btn_gotoText1, 0, 1, 2, false, new lib.Symbol328(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_1},{t:this.shape},{t:this.text_6,p:{x:128,y:171,text:"庆祝时报第四十期诞生！",font:"26px 'SimHei'",color:"#662200",lineHeight:28,lineWidth:311}},{t:this.text_5,p:{x:372.1,y:346.4,text:"详见A4",font:"21px 'SimHei'",color:"#662200",lineHeight:23,lineWidth:67}},{t:this.text_4,p:{x:465,y:171,text:"一封来自庄园的邀请函",font:"26px 'SimHei'",color:"#662200",lineHeight:28,lineWidth:311}},{t:this.text_3,p:{x:709,y:346.4,text:"详见A6",font:"21px 'SimHei'",color:"#662200",lineHeight:23,lineWidth:67}},{t:this.text_2,p:{x:801.9,y:171,text:"第一届庄园才艺秀\n约定你的参加！",font:"26px 'SimHei'",color:"#662200",lineHeight:28,lineWidth:311}},{t:this.text_1,p:{x:1046,y:346.4,text:"详见A8",font:"21px 'SimHei'",color:"#662200",lineHeight:23,lineWidth:67,scaleX:1}},{t:this.instance_1},{t:this.instance,p:{x:362,y:391}},{t:this.text,p:{x:945,y:644.5,text:"详见A2",font:"21px 'SimHei'",color:"#662200",textAlign:"",lineHeight:23,lineWidth:67}}]}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance,p:{x:126,y:100}},{t:this.text,p:{x:625.3,y:534.5,text:"经过两个月的训练，小摩尔们终于掌握了海妖骑士的能力。\n可是，深海深处又岂是如此简单而可以闯下的吗？\n瑞琪和RK的出现，难道海底世界也存在着黑魔法师？！\n海妖骑士们，拿起武器，拯救海妖王国！",font:"27px 'SimSun'",color:"#000000",textAlign:"center",lineHeight:33,lineWidth:969}}]},1).to({state:[{t:this.text_2,p:{x:128.1,y:108.5,text:"庆祝时报第四十期诞生！",font:"40px 'SimHei'",color:"#000000",lineHeight:42.05,lineWidth:446}},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.text_1,p:{x:139,y:167.8,text:"　　从2015年9月26日直到今天，我们制作的时报也经过了多次改变，也在long和飞翔的帮助下成功将PPT变成了软件设置的时报。感谢你们一路的陪伴。",font:"24px 'SimHei'",color:"#000000",lineHeight:32.05,lineWidth:986,scaleX:1}},{t:this.text,p:{x:656,y:254.6,text:"    或许未来，时报还会发生更多的变化。\n或许未来，摩尔的复兴将不仅仅是一个幻梦。\n\n    或许未来，摩尔复原之时，我们还有着制作时报，举办活动时的欢乐。\n世界一直在变，唯有爱永不停息。\nLoves never failed。\n——————by 忆~【小摩尔】\n\n2018.1.24",font:"24px 'SimHei'",color:"#000000",textAlign:"",lineHeight:32.05,lineWidth:469}}]},1).to({state:[{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6,p:{x:869.2,y:291,text:"条件",font:"48px 'SimHei'",color:"#000000",lineHeight:50,lineWidth:102}},{t:this.text_5,p:{x:705.5,y:380.7,text:"时报",font:"41px 'SimHei'",color:"#000000",lineHeight:43,lineWidth:86}},{t:this.text_4,p:{x:868.9,y:459.3,text:"绘画技能get！\n来画幅海报吧！\n还要有招人的经验哦！",font:"18px 'SimSun'",color:"#000000",lineHeight:20,lineWidth:223}},{t:this.text_3,p:{x:869.2,y:543.3,text:"有组织活动的经验，能根据实际情况提供好的活动方案。",font:"18px 'SimSun'",color:"#000000",lineHeight:20,lineWidth:223}},{t:this.text_2,p:{x:414.5,y:332.7,text:"  第三名管理员即将开始选举！大家都快来报名吧！",font:"24px 'SimSun'",color:"#000000",lineHeight:26.05,lineWidth:156}},{t:this.instance_16},{t:this.text_1,p:{x:705.5,y:467.3,text:"宣传",font:"41px 'SimHei'",color:"#000000",lineHeight:43,lineWidth:86,scaleX:1}},{t:this.text,p:{x:705.5,y:551.2,text:"活动",font:"41px 'SimHei'",color:"#000000",textAlign:"",lineHeight:43,lineWidth:86}},{t:this.shape_5},{t:this.shape_4,p:{x:466.9,y:392.2}}]},1).to({state:[{t:this.instance_17},{t:this.text_3,p:{x:128.1,y:111.4,text:"第一届庄园才艺比拼开始！",font:"40px 'SimHei'",color:"#000000",lineHeight:42.05,lineWidth:491}},{t:this.text_2,p:{x:128.1,y:602.5,text:"时间：2018.1.26——2018.2.2【报名】",font:"20px 'Arial'",color:"#FF0000",lineHeight:22,lineWidth:465}},{t:this.text_1,p:{x:423.1,y:333.3,text:"大家快来报名参加才艺比拼大赛哦！将我们的春节过得活跃快乐！",font:"21px 'SimHei'",color:"#000000",lineHeight:23,lineWidth:171,scaleX:1}},{t:this.text,p:{x:128.4,y:173.3,text:"    为了迎接即将到来的春节！我们即将举行庄园第一届才艺比拼！只要你有才艺，拥有勇气和力量，那么就来报名吧！",font:"24px 'SimSun'",color:"#000000",textAlign:"",lineHeight:30.05,lineWidth:974}},{t:this.shape_6}]},1).to({state:[{t:this.instance_18},{t:this.text_3,p:{x:150.1,y:140.6,text:"大脑加油站",font:"40px 'SimHei'",color:"#000000",lineHeight:42.05,lineWidth:225}},{t:this.text_2,p:{x:390,y:253,text:"Hello，小摩尔们，大脑加油站全心出发！让我们参与每日问答，每周问答，获取春节碎片吧！",font:"20px 'Arial'",color:"#000000",lineHeight:22,lineWidth:194}},{t:this.shape_4,p:{x:453.9,y:322.3}},{t:this.text_1,p:{x:649.4,y:115.7,text:"大脑加油站规则：【敲黑板，注意了！】\n①大脑加油站新栏目：每日一题，可在群作业中完成，回答正确可获得一个春节碎片。\n②大脑加油站每日答对后，可有机会登上脑力问答前三名的位置！前三名分别可获得3,2,1个春节碎片哦！\n③连续回答七天，可再次获得一个春节碎片！",font:"24px 'FangSong'",color:"#000000",lineHeight:30.05,lineWidth:482,scaleX:1.001}},{t:this.text,p:{x:649.6,y:429.5,text:"上一期大脑加油站前三名：\n第一名：【轮空】\n第二名：【轮空】\n第三名：【轮空】\n恭喜以上三位获得春节碎片，不知道有没有你呢？",font:"24px 'FangSong'",color:"#000000",textAlign:"",lineHeight:30.05,lineWidth:482}}]},1).to({state:[{t:this.text_2,p:{x:156.5,y:126.3,text:"摩尔小说绘",font:"40px 'SimHei'",color:"#000000",lineHeight:42.05,lineWidth:225}},{t:this.text_1,p:{x:156.5,y:204.2,text:"　　RK以绝世怪盗扬名摩尔世界，喜欢偷盗珠宝、古董、钻石……一切稀世珍宝！事实上，他更沉迷于揭示罕见瑰宝背后隐藏的阴谋和不为人知的真相。这是一部讲述游走于光明与黑暗之间的RK的故事，喜欢摩尔庄园和RK的小读者千万不要错过！\n\n　　摩尔庄园里来了一位神志不清的老太太，她总是唱着同一首歌。不久之后，老太太遭到袭击，昏迷不醒，她随身携带的宝石也不翼而飞。有目击证人指证，凶手就是RK！",font:"24px 'SimHei'",color:"#000000",lineHeight:32.05,lineWidth:446,scaleX:1}},{t:this.text,p:{x:668.3,y:204.2,text:"　　原来老太太所唱的歌词中隐藏着一个谜题，据说只要找到四颗宝石，就能开启传说中的宝藏。RK辗转四个王国，可总有一个神秘的摩尔以他的名义抢先一步，盗走宝石！\n\n　　到底谁才是那个可恶的冒牌货？在追查的过程中，RK一步步走近真相，最后一颗宝石竟然是……",font:"24px 'SimHei'",color:"#000000",textAlign:"",lineHeight:32.05,lineWidth:457}},{t:this.btn_gotoText1}]},1).to({state:[]},1).wait(8));

	// 页眉
	this.instance_19 = new lib.位图3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(800,169,0.701,0.619);

	this.instance_20 = new lib.位图2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(463,169,0.741,0.628);

	this.instance_21 = new lib.位图1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(126,169,0.627,0.628);

	this.text_11 = new cjs.Text("庄园大事件 A3", "21px 'SimSun'");
	this.text_11.lineHeight = 23;
	this.text_11.lineWidth = 170;
	this.text_11.parent = this;
	this.text_11.setTransform(959.3,65.1);

	this.text_12 = new cjs.Text("栏目编辑：忆", "21px 'SimSun'");
	this.text_12.lineHeight = 23;
	this.text_12.lineWidth = 170;
	this.text_12.parent = this;
	this.text_12.setTransform(442.2,65.1);

	this.text_13 = new cjs.Text("庄园大事件 A2", "21px 'SimSun'");
	this.text_13.lineHeight = 23;
	this.text_13.lineWidth = 170;
	this.text_13.parent = this;
	this.text_13.setTransform(128.1,65.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]}).to({state:[{t:this.text_13,p:{text:"庄园大事件 A2"}},{t:this.text_12},{t:this.text_11,p:{text:"庄园大事件 A3"}}]},1).to({state:[{t:this.text_13,p:{text:"庄园大事件 A4"}},{t:this.text_12},{t:this.text_11,p:{text:"庄园大事件 A5"}}]},1).to({state:[{t:this.text_13,p:{text:"庄园大事件 A6"}},{t:this.text_12},{t:this.text_11,p:{text:"庄园大事件 A7"}}]},1).to({state:[{t:this.text_13,p:{text:"庄园大事件 A8"}},{t:this.text_12},{t:this.text_11,p:{text:"庄园大事件 A9"}}]},1).to({state:[{t:this.text_13,p:{text:"娱乐小天地 C1"}},{t:this.text_12},{t:this.text_11,p:{text:"娱乐小天地 C2"}}]},1).to({state:[{t:this.text_13,p:{text:"娱乐小天地 C3"}},{t:this.text_12},{t:this.text_11,p:{text:"娱乐小天地 C4"}}]},1).to({state:[{t:this.text_13,p:{text:"娱乐小天地 C3"}},{t:this.text_12},{t:this.text_11,p:{text:"娱乐小天地 C4"}}]},1).wait(8));

	// 上一页
	this.prev_btn = new lib.Symbol162();
	this.prev_btn.parent = this;
	this.prev_btn.setTransform(153.4,597,1.636,1.636,0,-9,171);
	this.prev_btn._off = true;
	new cjs.ButtonHelper(this.prev_btn, 0, 1, 2, false, new lib.Symbol162(), 3);

	this.timeline.addTween(cjs.Tween.get(this.prev_btn).wait(1).to({_off:false},0).wait(14));

	// 下一页
	this.next_btn = new lib.Symbol162();
	this.next_btn.parent = this;
	this.next_btn.setTransform(1101.8,597.5,1.636,1.636,9);
	new cjs.ButtonHelper(this.next_btn, 0, 1, 2, false, new lib.Symbol162(), 3);

	this.timeline.addTween(cjs.Tween.get(this.next_btn).to({_off:true},14).wait(1));

	// 报纸
	this.text_14 = new cjs.Text("實際是2017年12月12日發佈", "12px 'SimSun'", "#FF0000");
	this.text_14.lineHeight = 14;
	this.text_14.lineWidth = 223;
	this.text_14.parent = this;
	this.text_14.setTransform(911.6,64.2,1.001,1);

	this.text_15 = new cjs.Text("2017年12月2日 第38期", "12px 'SimSun'");
	this.text_15.lineHeight = 14;
	this.text_15.lineWidth = 175;
	this.text_15.parent = this;
	this.text_15.setTransform(912.3,44.5,1.266,1.266);

	this.text_16 = new cjs.Text("下期出版时间：2017年12月30日", "12px 'SimSun'");
	this.text_16.lineHeight = 14;
	this.text_16.lineWidth = 175;
	this.text_16.parent = this;
	this.text_16.setTransform(912.2,80.8,1.268,1.266);

	this.instance_22 = new lib.Symbol114("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(4.2,1.7,1.266,1.266);

	this.close_btn = new lib.Symbol157();
	this.close_btn.parent = this;
	this.close_btn.setTransform(1103.2,111,1.71,1.71,0,180,0);
	new cjs.ButtonHelper(this.close_btn, 0, 1, 2, false, new lib.Symbol157(), 3);

	this.instance_23 = new lib.Symbol49("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-2.4,11.3,1.266,1.266);

	this.instance_24 = new lib.Symbol226("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(596.7,101.4,1.214,1.214);

	this.instance_25 = new lib.Symbol165();
	this.instance_25.parent = this;
	this.instance_25.setTransform(166.5,101.5,1.214,1.214);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.close_btn},{t:this.instance_22},{t:this.text_16},{t:this.text_15},{t:this.text_14}]}).to({state:[{t:this.instance_25},{t:this.instance_24}]},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(733.6,375,1094.6,714);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/位图1.png", id:"位图1"},
		{src:"images/位图2.png", id:"位图2"},
		{src:"images/位图3.png", id:"位图3"},
		{src:"images/位图6.png", id:"位图6"},
		{src:"images/位图7.png", id:"位图7"},
		{src:"images/位图8.jpg", id:"位图8"},
		{src:"images/位图9.jpg", id:"位图9"},
		{src:"images/點陣圖10.jpg", id:"點陣圖10"},
		{src:"images/點陣圖12.jpg", id:"點陣圖12"},
		{src:"images/點陣圖14.jpg", id:"點陣圖14"},
		{src:"images/點陣圖15.jpg", id:"點陣圖15"},
		{src:"images/點陣圖4.jpg", id:"點陣圖4"},
		{src:"images/點陣圖7.jpg", id:"點陣圖7"},
		{src:"images/點陣圖8.jpg", id:"點陣圖8"},
		{src:"images/點陣圖9.jpg", id:"點陣圖9"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;