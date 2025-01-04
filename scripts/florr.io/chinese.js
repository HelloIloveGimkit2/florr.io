// ==UserScript==
// @name            Florr.io 汉化
// @namespace       A florr.io userjs
// @description     全面汉化 Florr.io
// @version         1.1.2
// @author          -lexiyvv, flo修仙传, Tinhone, squid233, Lucker
// @license         GPL-3.0
// @match           ://florr.io/
// @grant           GM_setValue
// @grant           GM_getValue
// @compatible      firefox V50+
// @compatible      edge V50+
// @compatible      chrome V50+
// @icon            data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB2lBMVEUAAADTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbSvEbTvUbSvUbTvUbSvEbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbTvUbSvEbTvUbSvEbUvkfWwEjYwUnVv0fex03p0lXy21r331754V/y2lrp0lTdx03UvkbgyU/y21v95WL/6GP/52P95WHgyU7XwUns1Vfs1VbXwUjZwkrYwkn03mLm0mH85WLm0mL03mHfyU7742HYzZHU0cLhz2z/6GLj0m7W08TUyY3742DVvkfp1WHe28r8/f/Yz5f85GD85F/Rx4/8/P/j4NDu2WX85WHTvUb/6mTNu1erqqX7/P7c1rT332D13l6Ykm/n6Oru7ejl02/o0lTSvEbAr1A0MzBoaGp+eFvz3F/03WBUTzJPT1FvbmvHtlfx2lrOu1UsKyQaGx1eWDL54mFgWTQbHB4qKCLNu1T2313q1V1GQy0bHCCMgUH/6WSjlUhcVjPbx1j75WL03mDo0VT+6WT65GL+5mPdxk21pEaqmkL03V/75GLCsEuQgjj34GDjzliEeDNuYyuGeTSLfjZ2ay5zaC3Pu1D/6GT85mPgy1fDsUy+rErSvlL34WDr1Fb////IkFdGAAAAH3RSTlMAAAEHDAo0api0wQ9buO7+/j35BmjnefVpPua37Zf+dLW/BwAAAAFiS0dEnQa78rEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkAQgDJRPX3t0LAAACLUlEQVQ4y4VTB3cSQRC+pYYWDSkkgeQOkuMOCLdrLmAUxULU2Mt59t4LllhIuVQ1lth7y491mV1CAH3Oe/fm7cx3U78RhFWCbHaHw25Dwt8EIafL3eTxej1NbpcToQa3zx9oXiNK0agkrm0O+H21EGRrCQRjff1yXFHiaiIZCwZaVmdCrW3tqYG0hjGhgvE6eTDV3taKqv6OkD6kgZcJ1jLZUEcFgVBnaH2a1Ik8HOpkdSDU1a2ncT0Ay9nuLkAgXzg1xGwcxXUmFfahcgB/cEAD+4aNubLObdoMiFw+6KchkDMcYwm2bN22vUBIYWTHzl3wgzoadlKAK9LHAuzes3fffkIOHDx0+Aj8YSQjLgpwH+2Hp3ns+ImTpwg5febsufMFqOLCRTcF9IgyA1y6fOXqNYyv37h567YJMYtiDxLsHikOcPPO3Xv3xwgZe/Dw0WMGKEkeu+DwRhXW3PjE5JRFiDU1OTHOGlV0r6MKIGR6ZrYMmJ2Z5gYArKQgZG6e6fk5PjBIQYtUK3PGNYoXSdtMNCyCywK06YokDW7QnpSh1tNn7GkswqDoqNkgiPX8xUvLfLX0+k0lA4yaLmtQY5a3795/+Pjp8xcegC0L1p1hpq/fvv/4+eu3xV7LbN1AmCxPQizT5G6iSpwwQLlhub4DdYVyjLTZTA1pjWWpSlpO+7xqANnoZxTzNbTnhzOaTBRLilIqLiyKdYdTOb1eUdJ1SextPL3/H++/z/8P7nmbVKvpGgUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTItMzFUMjA6MDg6NTMtMDg6MDCgb7H/AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAxLTA4VDExOjM3OjE5LTA4OjAwqEgKbQAAAABJRU5ErkJggg==
// ==/UserScript==

// Chinese florr.io not made by me ofc
// i copy pasted this so more people could find

(function () {
    'use strict';
    
    
    if (typeof (GM_getValue("customFont")) == "undefined") { //可在 储存 选项卡中更改字体与字重
        const defaultCustomFont = {
            fontFamily: '',
            fontWeight: 'Bold',
            fontSizeMin: 14
        }
        GM_setValue("customFont", defaultCustomFont)
    }
    const customFont = GM_getValue("customFont")
    if (typeof (GM_getValue("openCustomReloadAnimation")) == "undefined") { //可在 储存 选项卡中更改是否打开自定义再装填动画
        GM_setValue("openCustomReloadAnimation", true)
    }
    const openCustomReloadAnimation = GM_getValue("openCustomReloadAnimation")
    
    const size1 = 80;
    const size2 = 80;
    const size3 = (size2 - 30) / 2;
    const size4 = -(size2 - 30) / 2;
    const size1db2 = size1 / 2;
    const size2db2 = size2 / 2;
    const reloadMainImg = document.createElement('img');
    reloadMainImg.src = 'data\:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB8CAMAAAB+HD/1AAAAAXNSR0IArs4c6QAAAqZQTFRFAAAA///////////////M//8z//+2//////85/////+tO//////+q///f//AP//KG//////+////c//OX//////WF/+sU//+q/+5d///3//Bi//iV/+s8//Jz///g/+EA/+6A/+MG//q4/+9H/+QL/////+UQ/+AA//Bm//WH/+cd//GA/+gp//a3/+k1/+5o/+Y2//OA//MM///v/+tL//Bb//CD//QZ/+MA//////+Q/+9s//////af/+YP//CA//Sf//////GK/P8I/+pE/+IA//KG//rZ//Bv/+YK///9//WT/+QR/f8C//GB//jC//aa/+pE/+9s/+Yg//ad//SN/f8U/+1h/+UL//J7//Sk/+gx///s//////eN//B4/+5f/+9t//Wn/+QG/f8Q/+s9//e7//eW/+QZ//B5//iw/+EH/+kz//vW//F9/+UJ/+9F/+kr/P8A/+1K/+s///KL/+MD/+o7/+UV/+s0/+5k/+MA//ST/+k3/f8A/+ci//Nh/+kw/+o2/+gn/+ow/+1c/+o6/+QE/P9w/+YW/+tL/+ck/+o//+Ya/+QA//ul//GE/+ky/+cj/v9B/+QF/v8J/+xI/+ch/+s//+tH/+QE/+k0/+cg/+QA/+US/+xK/v9T/+YW/+QG/+YW+/8A/+ku/+ce//B1/+QG/+YW/f8E/+xT/+s+/+UP/+QA/+cf/+QG/+k1/+cV/+MF/+pA/+gs/+UK//Wj/+ci/+YW/+o2/+UP/+ku/+cU/+UE/f8E/+gr/+cj/+ch/+YW/+k2/+Yb/+YW/+MF//ho/f8A/+kv/+cf/+cm/+UT/+QG/v8C/+QE/+gk/+QI/+QA/+MD/f8A/+o9/+QC/+YW/+QC/+QF/+QA/+MB/f8A/vcA/vIA/+gA/+MAXQgXyQAAAN10Uk5TAAECBAUFBwgJCw0ODxARExQUFhYXGRkeHiAiJCYoKSssLi8vMDExMTIzNTg4OTo7PT4+P0FDRkhISUxOUFJTVlpcXmBhYmNlZWVmaGlqa21tbW9wcnJ0dHR2eHh5e3t7e3x9fYGBg4WGh4qKi46PkZOVlpibnJyfn6KjpKamp6erq66xs7W1tba2t7i6urq7u7u8vb2+v7/Bw8PG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';
    const reloadProcessBarImg = document.createElement("img");
    reloadProcessBarImg.src = 'data\:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAABlJREFUKFNj/Puf4T8DEYBxVCG+UKJ+8AAABz4d2ZbeQwkAAAAASUVORK5CYII=';
    
    let timestampForDebug = performance.timeOrigin + performance.now();
    
    const translate = {
    }
    
    
    
    
    
    //获取翻译
    function getTranslate(text) {
        if (typeof (translate[text]) == 'string') { return translate[text] }
        switch (true) {
            //1.2% success chance
            case (/\S+% success chance/.test(text)): {
                const probability = text.match(/\S+(?=% success chance)/);
                return `成功率 ${probability}%`;
            }
    
            //Store will change in 10 hours.
            case (/Store will change in [0-9][0-9]?[0-9]? \w\w\w\w\w?\w?\w?\./.test(text)): {
                const timeNum = text.match(/(?<=Store will change in )[0-9]?[0-9]?[0-9]?(?=\s\w\w\w\w\w?\w?\w?\.)/);
                const timeUnit = text.match(/(?<=Store will change in [0-9]?[0-9]?[0-9]?\s)\w\w\w\w\w?\w?\w?(?=\.)/);
                return `货架将在 ${timeNum} ${getTranslate(timeUnit)}后刷新`;
            }
    
            //The Super Termite Overmind was defeated by you!
            case (/The \w\w\w\w\w?\w?\w?\w?\w? .+ was defeated by .+!/.test(text)): {
                const mobLevel = text.match(/(?<=The\s)\w\w\w\w\w?\w?\w?\w?\w?(?=\s)/);
                const mobName = text.match(/(?<=The\s\w\w\w\w\w?\w?\w?\w?\w?\s).+(?=\swas)/);
                const playerName = text.match(/(?<=was defeated by ).+(?=!)/);
                return `${getTranslate(mobLevel)} ${getTranslate(mobName)} 已被 ${playerName} 击败！`;
            }
    
            //A Super Termite Overmind has spawned!
            case (/An? \w\w\w\w\w .+ has spawned!/.test(text)): {
                const mobLevel = text.match(/(?<=An?\s)\w\w\w\w\w(?=\s)/);
                const mobName = text.match(/(?<=An?\s\w\w\w\w\w\s).+(?= has spawned!)/);
                return `${getTranslate(mobLevel)} ${getTranslate(mobName)} 已在地图中生成！`;
            }
    
            //A Super Termite Overmind has spawned somewhere!
            case (/An? \w\w\w\w\w .+ has spawned somewhere!/.test(text)): {
                const mobLevel = text.match(/(?<=An?\s)\w\w\w\w\w(?=\s)/);
                const mobName = text.match(/(?<=An?\s\w\w\w\w\w\s).+(?= has spawned somewhere!)/);
                return `${getTranslate(mobLevel)} ${getTranslate(mobName)} 已在某个地图中生成！`;
            }
        }
        return text;
    }
    
    
    //获取可操作的 Canvas，避免出现浏览器不兼容情况
    function getCompatibleCanvas() {
        if (typeof (OffscreenCanvasRenderingContext2D) == 'undefined') { return [CanvasRenderingContext2D] }
        return [OffscreenCanvasRenderingContext2D, CanvasRenderingContext2D];
    }
    
    
    //普通的日志输出，但加入了防止过快输出的措施
    function consoleTextInfoLog(string) {
        if ((performance.timeOrigin + performance.now()) - timestampForDebug >= 2333) {
            timestampForDebug = performance.timeOrigin + performance.now();
            console.log(string);
        }
    }
    
    
    //当被查找的字符串中含有目标字符串，弹出警告
    function alertTargetStr(searchStr, targetStr) {
        if (searchStr.search(targetStr) > -1) {
            alert(searchStr);
        }
    }
    
    
    //获取模糊化的字体大小 | 主要用来避免花瓣上小字的字体大小会在小幅度内变动的情况，让它好看一点
    function getBlurFontSize(str) {
        return ~~((~~(str.match(/(?<!.)[0-9][0-9]?[0-9]?[0-9]?/)) + 3.5) / 5) * 5 - 1; //正则表达式需要注意存在小数情况
    }
    
    
    //获取可应用的字体字符串
    function getApplicableFontStr(fontSize) {
        return `${customFont.fontWeight} ${(fontSize > customFont.fontSizeMin ? fontSize : customFont.fontSizeMin)}px ${customFont.fontFamily}`;
    }
    
    
    //初始化
    for (const { prototype } of getCompatibleCanvas()) {
        if (prototype.fyu8d71gf6kv == undefined) {
            if (openCustomReloadAnimation) { prototype.rewriteArc = prototype.arc }
            prototype.fyu8d71gf6kv = prototype.strokeText;
            prototype.fyu8d71gf6kf = prototype.fillText;
            prototype.fyu8d71gf6kt = prototype.measureText;
        }
        else { break }
    }
    
    
    //函数重写
    for (const { prototype } of getCompatibleCanvas()) {
        if (openCustomReloadAnimation) {
            //重写绘制圆弧路径函数 | 将花瓣再装填动画改为自定义，这里貌似是 Phigros 中的打击效果
            prototype.arc = function (x, y, radius, startAngle, endAngle, anticlockwise) {
                if (x == 0 && y == -5 && radius == 120 && anticlockwise == false) {
                    y = y + 5;
                    const progress = ~~(Math.sqrt(startAngle / 35.81371) * 10000);
                    const size3tProgress = size3 * progress / 10000;
                    const size4tProgress = size4 * progress / 10000;
                    const XmSize2db2p15 = x - size2db2 + 15;
                    const XpSize2db2m15 = x + size2db2 - 15;
                    const YmSize2db2p11 = y - size1db2 + 11.25;
                    const YpSize2db2m11 = y + size1db2 - 11.25;
                    const originalGlobalAlpha = this.globalAlpha;
                    if (progress >= 9950) { this.globalAlpha = (50 - (progress - 9950)) / 50; } //最后的降低透明度动画 | 注意 js 小数运算精度问题
                    this.drawImage(reloadProcessBarImg, XmSize2db2p15, YmSize2db2p11, size3tProgress, 5);
                    this.drawImage(reloadProcessBarImg, XpSize2db2m15, YmSize2db2p11, size4tProgress, 5);
                    this.drawImage(reloadProcessBarImg, XmSize2db2p15, YpSize2db2m11, size3tProgress, -5);
                    this.drawImage(reloadProcessBarImg, XpSize2db2m15, YpSize2db2m11, size4tProgress, -5);
                    this.drawImage(reloadProcessBarImg, YmSize2db2p11, XmSize2db2p15, 5, size3tProgress);
                    this.drawImage(reloadProcessBarImg, YmSize2db2p11, XpSize2db2m15, 5, size4tProgress);
                    this.drawImage(reloadProcessBarImg, YpSize2db2m11, XmSize2db2p15, -5, size3tProgress);
                    this.drawImage(reloadProcessBarImg, YpSize2db2m11, XpSize2db2m15, -5, size4tProgress);
                    y = y - 5;
    
                    this.drawImage(reloadMainImg, x - size2db2, y - size1db2 + 5, size2, size1);
                    this.globalAlpha = originalGlobalAlpha
                    return;
                }
                return this.rewriteArc(x, y, radius, startAngle, endAngle, anticlockwise);
            }
        }
    
        //重写字符描边函数
        prototype.strokeText = function (text, x, y) {
            const newFontSize = getBlurFontSize(this.font);
            this.font = getApplicableFontStr(newFontSize);
            //alertTargetStr(text, "Flower Health");
            //consoleTextInfoLog(text, x, y);
            return this.fyu8d71gf6kv(getTranslate(text), x, y);
        }
    
        //重写字符填充函数 | 它会随着 strokeText 自适应填充，不需要更多设置
        prototype.fillText = function (text, x, y) {
            return this.fyu8d71gf6kf(getTranslate(text), x, y);
        }
    
        //重写字符尺寸度量函数
        prototype.measureText = function (text) {
            const newFontSize = getBlurFontSize(this.font);
            this.font = getApplicableFontStr(newFontSize);
            return this.fyu8d71gf6kt(getTranslate(text));
        }
    }
    })();
    