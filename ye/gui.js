var IDE_Morph;
IDE_Morph.prototype = new Morph();
IDE_Morph.prototype.constructor = IDE_Morph;
IDE_Morph.uber = Morph.prototype;
IDE_Morph.prototype.setDefaultDesign = function () {
	MorphicPreferences.isFlat = false;
	SpriteMorph.prototype.paletteColor = new Color(55, 55, 55);
	SpriteMorph.prototype.paletteTextColor = new Color(230, 230, 230);
	StageMorph.prototype.paletteTextColor = SpriteMorph.prototype.paletteTextColor;
	SpriteMorph.prototype.sliderColor = SpriteMorph.prototype.paletteColor.lighter(30);
	IDE_Morph.prototype.backgroundColor = new Color(40, 40, 40);
	IDE_Morph.prototype.appModeColor = new Color();
	IDE_Morph.prototype.padding = 5;
	IDE_Morph.prototype.snapproject = '<project name="Transcend" app="Snap! 4.1, http://snap.berkeley.edu" version="1"><notes></notes><thumbnail>data:image/png;base64,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</thumbnail><stage name="Stage" width="480" height="360" costume="0" tempo="60" threadsafe="false" lines="round" ternary="true" codify="false" inheritance="false" sublistIDs="false" scheduled="false" id="1"><pentrails>data:image/png;base64,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</pentrails><costumes><list id="2"></list></costumes><sounds><list id="3"></list></sounds><variables></variables><blocks></blocks><scripts></scripts><sprites><sprite name="10by2" idx="2" x="-235" y="-15" heading="90" scale="1" rotation="1" draggable="false" costume="2" color="0,0,255" pen="middle" id="8"><costumes><list id="9"><item><costume name="10by10" center-x="3" center-y="3" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAE0lEQVQYV2P8z8DwnwELYBxICQD61Av7Q1vtnwAAAABJRU5ErkJggg==" id="10"/></item><item><costume name="10by2" center-x="3" center-y="3" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAE0lEQVQYV2NksP//nwELYBxICQBtLg11xuq7RgAAAABJRU5ErkJggg==" id="11"/></item></list></costumes><sounds><list id="12"><item><sound name="pop" sound="data:audio/x-wav;base64,UklGRigCAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQQCAADVAAMDvQdyDe8VUx08I5sk4iCrFnMGVfFf2mDEjbNpqZKo5bFHxUHh8wLtJtFHSmF9byNwCmHOROodKvMPyWqn/ZElje6YObXo3eIMnTpEYHB2tXmiaNhFZxdK5Gy1epLegWuGcZ+OyCH84jB9Xd955H83calNthyp50+4jJYDiWmRT6712VwMADxQX+9vF2lWTgokcfJZxWejtpN4mfiyaNqjCY42a1cpZqJfvEb1H8jyA8r1rc6iH6syxPHqwBSrOShR8VY0SU4rAwQs27667KgOqdG8jN28BjwugEsUWSdSXTmsExzqccWtrSmnurMb0LD2pR56P8hRylFrP30f5/nT1oG+H7ZVvqzVvPUqGIIz9UGEQCwvDBNX8p/Vs8P1v3TLnON6AnogiTaGP9I4OiTDBpLnG86GvwjAFc9R6WsIfiUgOghBtTiWI1MGL+hWzyrC6sJa0QXqSQeUItc10DzsNUojWglH7hvYd8sNy2bWb+qxApIZMyp4MKorPB30CGTzv+G41/bWrN8Q780BKRNcH6gjSB+rE68DUvNw5rrf2+Az6cz2JAbbE/IcSh+EGskPfAHk8jXnDeGG4XroZ/ShAiwQXxoQH4wdXhY9C3T+5/LK6pbnhOng7/n41AIIC0oQkhHZDjcJGQJ5+532lvTd9df5H/+OBJcIFwqKCFUEYf4=" id="13"/></item></list></sounds><blocks></blocks><variables></variables><scripts><script x="10" y="191"><block s="receiveGo"></block><block s="doSetVar"><l>stop</l><l>0</l></block><block s="doSwitchToCostume"><l>10by10</l></block><block s="gotoXY"><l>-235</l><l>-65</l></block></script><script x="10" y="308"><block s="receiveGo"></block><block s="doSetVar"><l>lastX</l><block s="xPosition"></block></block><block s="doSetVar"><l>lastY</l><block s="yPosition"></block></block><block s="doForever"><script><block s="doIf"><block s="reportEquals"><block s="getCostumeIdx"></block><l>1</l></block><script><block s="doIfElse"><block s="reportTouchingColor"><color>0,0,0,1</color></block><script><block s="doIf"><block s="reportNot"><block s="reportTouchingColor"><color>255,255,0,1</color></block></block><script><block s="doSetVar"><l>stop</l><l>1</l></block></script></block></script><script><block s="doSetVar"><l>stop</l><l>0</l></block></script></block></script></block><block s="doIf"><block s="reportEquals"><block s="getCostumeIdx"></block><l>2</l></block><script><block s="doIfElse"><block s="reportTouchingColor"><color>204,204,204,1</color></block><script><block s="doIf"><block s="reportNot"><block s="reportTouchingColor"><color>255,255,0,1</color></block></block><script><block s="doSetVar"><l>stop</l><l>1</l></block></script></block></script><script><block s="doSetVar"><l>stop</l><l>0</l></block></script></block></script></block></script></block></script><script x="291" y="10"><block s="receiveGo"></block><block s="doForever"><script><block s="doIfElse"><block s="reportEquals"><block var="stop"/><l>0</l></block><script><block s="doIf"><block s="reportKeyPressed"><l><option>right arrow</option></l></block><script><block s="doRepeat"><l>10</l><script><block s="doIf"><block s="reportEquals"><block var="stop"/><l>0</l></block><script><block s="changeXPosition"><l>1</l></block></script></block></script></block><block s="doBroadcast"><l>switch</l></block><block s="doIf"><block s="reportEquals"><block var="stop"/><l>0</l></block><script><block s="doChangeVar"><l>lastX</l><l>10</l></block><block s="gotoXY"><block var="lastX"/><block var="lastY"/></block></script></block></script></block><block s="doIf"><block s="reportKeyPressed"><l><option>left arrow</option></l></block><script><block s="doRepeat"><l>10</l><script><block s="doIf"><block s="reportEquals"><block var="stop"/><l>0</l></block><script><block s="changeXPosition"><l>-1</l></block></script></block></script></block><block s="doBroadcast"><l>switch</l></block><block s="doIf"><block s="reportEquals"><block var="stop"/><l>0</l></block><script><block s="doChangeVar"><l>lastX</l><l>-10</l></block><block s="gotoXY"><block var="lastX"/><block var="lastY"/></block></script></block></script></block><block s="doIf"><block s="reportKeyPressed"><l><option>up arrow</option></l></block><script><block s="doRepeat"><l>10</l><script><block s="doIf"><block s="reportEquals"><block var="stop"/><l>0</l></block><script><block s="changeYPosition"><l>1</l></block></script></block></script></block><block s="doBroadcast"><l>switch</l></block><block s="doIf"><block s="reportEquals"><block var="stop"/><l>0</l></block><script><block s="doChangeVar"><l>lastY</l><l>10</l></block><block s="gotoXY"><block var="lastX"/><block var="lastY"/></block></script></block></script></block><block s="doIf"><block s="reportKeyPressed"><l><option>down arrow</option></l></block><script><block s="doRepeat"><l>10</l><script><block s="doIf"><block s="reportEquals"><block var="stop"/><l>0</l></block><script><block s="changeYPosition"><l>-1</l></block></script></block></script></block><block s="doBroadcast"><l>switch</l></block><block s="doIf"><block s="reportEquals"><block var="stop"/><l>0</l></block><script><block s="doChangeVar"><l>lastY</l><l>-10</l></block><block s="gotoXY"><block var="lastX"/><block var="lastY"/></block></script></block></script></block></script><script><block s="gotoXY"><block var="lastX"/><block var="lastY"/></block></script></block></script></block></script><script x="641" y="65"><block s="receiveGo"></block><block s="doForever"><script><block s="doIf"><block s="reportEquals"><block s="getCostumeIdx"></block><l>1</l></block><script><block s="doIf"><block s="reportAnd"><block s="reportNot"><block s="reportTouchingColor"><color>204,204,204,1</color></block></block><block s="reportEquals"><block var="stop"/><l>1</l></block></block><script><block s="doSwitchToCostume"><l>10by2</l></block></script></block></script></block><block s="doIf"><block s="reportEquals"><block s="getCostumeIdx"></block><l>2</l></block><script><block s="doIf"><block s="reportAnd"><block s="reportNot"><block s="reportTouchingColor"><color>0,0,0,1</color></block></block><block s="reportEquals"><block var="stop"/><l>1</l></block></block><script><block s="doSwitchToCostume"><l>10by10</l></block></script></block></script></block></script></block></script><script x="676" y="424"><block s="receiveGo"></block><block s="doForever"><script><block s="doIf"><block s="reportEquals"><block s="xPosition"></block><l>235</l></block><script><block s="doBroadcast"><l>Progress</l></block><block s="gotoXY"><l>-235</l><block s="yPosition"></block></block></script></block></script></block></script><script x="658" y="641"><block s="receiveGo"></block><block s="doForever"><script><block s="doIf"><block s="reportTouchingColor"><color>255,255,0,1</color></block><script><block s="doWearNextCostume"></block><block s="doWaitUntil"><block s="reportNot"><block s="reportTouchingColor"><color>255,255,0,1</color></block></block></block></script></block></script></block></script></scripts></sprite><sprite name="10by10" idx="1" x="-235" y="-185" heading="90" scale="1" rotation="1" draggable="false" costume="2" color="0,0,255" pen="middle" id="337"><costumes><list id="338"><item><costume name="10by10" center-x="5" center-y="5" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQoU2NkYGD4z0AEYBxViC+UqB88AKk6CgERnGWPAAAAAElFTkSuQmCC" id="339"/></item><item><costume name="10by2" center-x="5" center-y="5" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGUlEQVQoU2M8c+bMfwYiAOOoQnyhRP3gAQCJgSHpiSFHlQAAAABJRU5ErkJggg==" id="340"/></item><item><costume name="10by3" center-x="5" center-y="5" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAANElEQVQoU2PctGnTfwYiACO6Ql9fP7C2zZs3oWinkUKYdbicCnIG2GqiFSKbRGfPEBHeDACy9zbdBeeHgwAAAABJRU5ErkJggg==" id="341"/></item></list></costumes><sounds><list id="342"><item><sound name="pop" sound="data:audio/x-wav;base64,UklGRigCAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQQCAADVAAMDvQdyDe8VUx08I5sk4iCrFnMGVfFf2mDEjbNpqZKo5bFHxUHh8wLtJtFHSmF9byNwCmHOROodKvMPyWqn/ZElje6YObXo3eIMnTpEYHB2tXmiaNhFZxdK5Gy1epLegWuGcZ+OyCH84jB9Xd955H83calNthyp50+4jJYDiWmRT6712VwMADxQX+9vF2lWTgokcfJZxWejtpN4mfiyaNqjCY42a1cpZqJfvEb1H8jyA8r1rc6iH6syxPHqwBSrOShR8VY0SU4rAwQs27667KgOqdG8jN28BjwugEsUWSdSXTmsExzqccWtrSmnurMb0LD2pR56P8hRylFrP30f5/nT1oG+H7ZVvqzVvPUqGIIz9UGEQCwvDBNX8p/Vs8P1v3TLnON6AnogiTaGP9I4OiTDBpLnG86GvwjAFc9R6WsIfiUgOghBtTiWI1MGL+hWzyrC6sJa0QXqSQeUItc10DzsNUojWglH7hvYd8sNy2bWb+qxApIZMyp4MKorPB30CGTzv+G41/bWrN8Q780BKRNcH6gjSB+rE68DUvNw5rrf2+Az6cz2JAbbE/IcSh+EGskPfAHk8jXnDeGG4XroZ/ShAiwQXxoQH4wdXhY9C3T+5/LK6pbnhOng7/n41AIIC0oQkhHZDjcJGQJ5+532lvTd9df5H/+OBJcIFwqKCFUEYf4=" id="343"/></item></list></sounds><blocks><block-definition s="ATSOL" type="command" category="other"><header></header><code></code><inputs></inputs><script><block s="doWarp"><script><block s="gotoXY"><l>-235</l><l>175</l></block><block s="doRepeat"><l>36</l><script><block s="doRepeat"><l>48</l><script><block s="doSetVar"><l>X</l><block s="reportModulus"><block s="reportSum"><block s="reportProduct"><block var="X"/><block var="A"/></block><block var="B"/></block><block var="M"/></block></block><block s="doIfElse"><block s="reportEquals"><block s="reportModulus"><block s="reportQuotient"><block var="X"/><l>2</l></block><l>1</l></block><l>0</l></block><script><block s="doIfElse"><block s="reportEquals"><block s="reportModulus"><block s="reportQuotient"><block var="X"/><l>8</l></block><l>1</l></block><l>0</l></block><script><block s="doSwitchToCostume"><l>10by3</l></block></script><script><block s="doSwitchToCostume"><l>10by2</l></block></script></block></script><script><block s="doSwitchToCostume"><l>10by10</l></block></script></block><block s="doStamp"></block><block s="changeXPosition"><l>10</l></block></script></block><block s="gotoXY"><l>-235</l><block s="reportDifference"><block s="yPosition"></block><l>10</l></block></block></script></block></script></block></script></block-definition></blocks><variables></variables><scripts><script x="115" y="155"><block s="receiveGo"></block><block s="gotoXY"><l>-235</l><l>175</l></block><block s="doSetVar"><l>M</l><l>9999999999</l></block><block s="doSetVar"><l>X</l><l>1</l></block><block s="doSetVar"><l>Level</l><l>235</l></block><block s="doSetVar"><l>A</l><l>124315212</l></block><block s="doSetVar"><l>B</l><l>53543255</l></block><custom-block s="ATSOL" scope="local"></custom-block></script><script x="64" y="369"><block s="receiveMessage"><l>Progress</l></block><block s="doChangeVar"><l>Level</l><l>1</l></block><block s="doSetVar"><l>X</l><block var="Level"/></block><custom-block s="ATSOL" scope="local"></custom-block></script></scripts></sprite><watcher var="stop" style="normal" x="10" y="10" color="243,118,29" hidden="true"/><watcher var="M" style="normal" x="10" y="31.000001999999995" color="243,118,29" hidden="true"/><watcher var="X" style="normal" x="10" y="52.00000399999999" color="243,118,29" hidden="true"/><watcher var="Level" style="normal" x="10" y="73.00000599999998" color="243,118,29" hidden="true"/><watcher var="A" style="normal" x="10" y="94.00000799999998" color="243,118,29" hidden="true"/><watcher var="B" style="normal" x="10" y="115.00000999999997" color="243,118,29" hidden="true"/><watcher var="lastX" style="normal" x="10" y="136.00001199999997" color="243,118,29" hidden="true"/><watcher var="lastY" style="normal" x="10" y="157.00001399999996" color="243,118,29" hidden="true"/></sprites></stage><hidden></hidden><headers></headers><code></code><blocks></blocks><variables><variable name="stop"><l>0</l></variable><variable name="M"><l>9999999999</l></variable><variable name="X"><l>1597848226</l></variable><variable name="Level"><l>235</l></variable><variable name="A"><l>124315212</l></variable><variable name="B"><l>53543255</l></variable><variable name="lastX"><l>-235</l></variable><variable name="lastY"><l>-15</l></variable></variables></project>'
IDE_Morph.prototype.setDefaultDesign();
function IDE_Morph(isAutoFill) {
	this.init(isAutoFill);
}

IDE_Morph.prototype.init = function (isAutoFill) {
	MorphicPreferences.globalFontFamily = 'Helvetica, Arial';
	this.applySavedSettings();
	this.serializer = new SnapSerializer();
	this.globalVariables = new VariableFrame();
	this.stage = null;
	this.isAutoFill = isAutoFill === undefined ? true : isAutoFill;
	this.isAppMode = false;
	this.isSmallStage = false;
	this.isAnimating = true;
	this.stageRatio = 1;
	this.shield = null;
	IDE_Morph.uber.init.call(this);
	this.color = this.backgroundColor;
};

IDE_Morph.prototype.buildPanes = function () {
	this.createStage();
};

IDE_Morph.prototype.createStage = function () {
	if (this.stage) {
		this.stage.destroy();
	}
	StageMorph.prototype.frameRate = 0;
	this.stage = new StageMorph(this.globalVariables);
	this.stage.setExtent(this.stage.dimensions);
	this.add(this.stage);
};

IDE_Morph.prototype.fixLayout = function (situation) {
	var padding = this.padding;
	Morph.prototype.trackChanges = false;
	if (situation !== 'refreshPalette') {
		if (this.isAppMode) {
			this.stage.setScale(Math.floor(Math.min((this.width() - padding * 2) / this.stage.dimensions.x, (this.height() - 2 - padding * 2) / this.stage.dimensions.y) * 10) / 10);
			this.stage.setCenter(this.center());
		}
		else {
			this.stage.setScale(this.isSmallStage ? this.stageRatio : 1);
			this.stage.setTop(padding);
			this.stage.setRight(this.right());
		}
	}
	Morph.prototype.trackChanges = true;
	this.changed();
};

IDE_Morph.prototype.setExtent = function (point) {
	var padding = new Point(430, 110),
		minExt,
		ext,
		maxWidth,
		minWidth,
		maxHeight,
		minRatio,
		maxRatio;
	if (this.isAppMode) {
		minExt = StageMorph.prototype.dimensions.add(10);
	}
	else {
		if (this.stageRatio > 1) {
			minExt = padding.add(StageMorph.prototype.dimensions);
		}
		else {
			minExt = padding.add(StageMorph.prototype.dimensions.multiplyBy(this.stageRatio));
		}
	}
	ext = point.max(minExt);
	maxWidth = ext.x - (this.left());
	minWidth = 3;
	maxHeight = (ext.y - 3.5);
	minRatio = minWidth / this.stage.dimensions.x;
	maxRatio = Math.min((maxWidth / this.stage.dimensions.x), (maxHeight / this.stage.dimensions.y));
	this.stageRatio = Math.min(maxRatio, Math.max(minRatio, this.stageRatio));
	IDE_Morph.uber.setExtent.call(this, ext);
	this.fixLayout();
};

IDE_Morph.prototype.reactToWorldResize = function (rect) {
	if (this.isAutoFill) {
		this.setPosition(rect.origin);
		this.setExtent(rect.extent());
	}
};

IDE_Morph.prototype.startFastTracking = function () {
	this.stage.isFastTracked = true;
	this.stage.fps = 0;
};

IDE_Morph.prototype.stopFastTracking = function () {
	this.stage.isFastTracked = false;
	this.stage.fps = this.stage.frameRate;
};

IDE_Morph.prototype.runScripts = function () {
	this.stage.fireGreenFlagEvent();
};

IDE_Morph.prototype.isPaused = function () {
	if (!this.stage) {
		return false;
	}
	return this.stage.threads.isPaused();
};

IDE_Morph.prototype.refreshIDE = function () {
	var projectData;
	SpriteMorph.prototype.initBlocks();
	this.buildPanes();
	this.fixLayout();
};

IDE_Morph.prototype.applySavedSettings = function () {
	var design = this.getSetting('design'),
		zoom = this.getSetting('zoom'),
		language = this.getSetting('language'),
		click = this.getSetting('click'),
		longform = this.getSetting('longform'),
		longurls = this.getSetting('longurls'),
		plainprototype = this.getSetting('plainprototype'),
		keyboard = this.getSetting('keyboard'),
		tables = this.getSetting('tables'),
		tableLines = this.getSetting('tableLines');
	if (!(design === 'flat')) {
		this.setDefaultDesign();
	}
	if (zoom) {
		SyntaxElementMorph.prototype.setScale(Math.min(zoom, 12));
		SpriteMorph.prototype.initBlocks();
	}
	if (click && !BlockMorph.prototype.snapSound) {
		BlockMorph.prototype.toggleSnapSound();
	}
	if (tables) {
		List.prototype.enableTables = true;
	}
	else {
		List.prototype.enableTables = false;
	}
	if (tableLines) {
		TableMorph.prototype.highContrast = true;
	}
	else {
		TableMorph.prototype.highContrast = false;
	}
};

IDE_Morph.prototype.getSetting = function (key) {
	return null;
};

IDE_Morph.prototype.rawOpenProjectString = function (str) {
	this.toggleAppMode(false);
	StageMorph.prototype.hiddenPrimitives = {};
	StageMorph.prototype.codeMappings = {};
	StageMorph.prototype.codeHeaders = {};
	StageMorph.prototype.enableCodeMapping = false;
	StageMorph.prototype.enableInheritance = false;
	if (Process.prototype.isCatchingErrors) {
		try {
			this.serializer.openProject(this.serializer.load(str, this), this);
		}
		catch (e) {

		}
	}
	else {
		this.serializer.openProject(this.serializer.load(str, this), this);
	}
	this.stopFastTracking();
};

IDE_Morph.prototype.toggleZebraColoring = function () {
	var scripts = [];
	if (!BlockMorph.prototype.zebraContrast) {
		BlockMorph.prototype.zebraContrast = 40;
	}
	else {
		BlockMorph.prototype.zebraContrast = 0;
	}
	this.stage.children.concat(this.stage).forEach(function (morph) {
		if (isSnapObject(morph)) {
			scripts = scripts.concat(morph.scripts.children.filter(function (morph) {
				return morph instanceof BlockMorph;
			}));
		}
	});
	scripts.forEach(function (topBlock) {
		topBlock.fixBlockColor(null, true);
	});
};

IDE_Morph.prototype.toggleAppMode = function (appMode) {
	var world = this.world();
	this.isAppMode = isNil(appMode) ? !this.isAppMode : appMode;
	Morph.prototype.trackChanges = false;
	if (this.isAppMode) {
		this.setColor(this.appModeColor);
		world.children.forEach(function (morph) {
			if (morph instanceof DialogBoxMorph) {
				morph.hide();
			}
		});
	}
	else {
		this.setColor(this.backgroundColor);
		this.stage.setScale(1);
		world.children.forEach(function (morph) {
			if (morph instanceof DialogBoxMorph) {
				morph.show();
			}
		});
		world.allChildren().filter(function (c) {
			return c instanceof ScrollFrameMorph;
		}).forEach(function (s) {
			s.adjustScrollBars();
		});
	}
	this.setExtent(this.world().extent());
};

IDE_Morph.prototype.openIn = function (world) {
	var hash,
		usr,
		myself = this,
		urlLanguage = null;
	this.buildPanes();
	world.add(this);
	world.userMenu = this.userMenu;
	this.reactToWorldResize(world.bounds);
	this.rawOpenProjectString(this.snapproject);
	this.toggleAppMode(true);
	var handle = setInterval(
		function () {
			var allSpritesDone = true;
			myself.stage.children.forEach(
				function (child) {
					var allCostumesLoaded = true;
					if (child.costumes) {
						child.costumes.contents.forEach(
							function (costume) {
								if (typeof costume.loaded === "function") allCostumesLoaded = false;
							}
						);
					}
					if (!allCostumesLoaded || (child.costumes && child.costumes.length > 0 && !child.costume)) {
						allSpritesDone = false;
					}
				}
			);
			if (allSpritesDone) {
				clearInterval(handle);
				myself.runScripts();
			}
		},
		100
	);
};

