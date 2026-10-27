/* ---------- set language ---------- */
const translations = {
    "en": {
        "appTitle": "TranSifona LCD Tool",
        "undoHint": "Undo (Ctrl + Z)",
        "redoHint": "Redo (Ctrl + Y or Shift + Ctrl + Z)",
        "select": "Select",
        "selectHint": "Select an item on the canvas (V)",
        "shapes": "Shapes",
        "shapesHint": "Draw a shape",
        "image": "Image",
        "imageHint": "Insert an image",
        "text": "Text",
        "textHint": "Add text",
        "fileOptions": "File options",
        "rect": "Rectangle",
        "oval": "Oval",
        "fixedText": "Fixed content",
        "variableText": "Variable content",
        "lcdSize": "LCD size",
        "lcdSize2": "This setting will not be exported to JS",
        "lcdSize3": "exported to JS",
        "width": "Width",
        "height": "Height",
        "zoom": "Canvas zoom",
        "bg": "LCD background",
        "importLcd": "Import canvas from JSON",
        "exportLcd": "Export canvas as JSON",
        "goToRmg": "Go to RMG (Rail Map Generator)",
        "importRmg": "Import route map from RMG",
        "exportCode": "Export code",
        "clear": "Clear canvas",
        "exportTitle": "Export code options",
        "exportJsTitle": "JavaScript (for MTR mod)",
        "exportJs1": "Expot JS code (graphics only)",
        "exportJs2": "Expot JS code (base code + graphics)",
        "exportJs3": "Expot JS code (base code + graphics + read route data)",
        "exportBug": "May cause some bugs",
        "exportCppTitle": "C++ (for Arduino)",
        "exportCppDirection": "Pixel direction: ",
        "exportCppVert": "Vertical",
        "exportCppHori": "Horizontal",
        "exportCppOrder": "Pixel order: ",
        "exportCppLsb": "LSB",
        "exportCppMsb": "MSB",
        "exportCpp": "Export C++ code",
        "layerTitle": "Layers",
        "layerTitle2": "(JS code preview has been moved to right)",
        "layerBg": "LCD background",
        "gSettingsTitle": "Graphics settings",
        "paramTitle": "Parameters",
        "paramFill": "Fill colour",
        "paramOutline": "Outline colour",
        "paramOutlineW": "Outline width",
        "paramX": "X",
        "paramY": "Y",
        "paramTextSize": "Text size",
        "paramFont": "Font",
        "paramSans": "Sans serif",
        "paramSerif": "Serif",
        "previewTitle": "JS code preview",
        "previewTitle2": "(Export in File options for complete code)",
        "previewImage": "// Extra code is needed for image. Export full code in File options to see",
        "previewText": "// Extra code is needed for AlignText. Export full code in File options to see",
        "previewData": "// Extra code is needed to read game data. Export full code in File options to see",
        "previewImgCon": "Image constant",
        "previewStnNam": "Station name",
        "canvasTitle": "Screen visible area",
        "canvasHint1": "Select a shape from the top menu, then click anywhere on canvas to draw.",
        "canvasHint2": "Hint: resize a shape by dragging its corner, hold Shift to keep its width-height ratio.",
        "footer": "Version: 0.1.7",
        "alertWelcome": "**UPDATE v0.1.7**\n- Added multilingual support\n- Enabled mouse control on canvas moving & zooming\n\nWelcome to TranSifona LCD Tool!\nGot issues? Report at our Github repo or leave a comment on our YouTube channel.\n\nPart of this tool was made using generative AI,\nbut no AI will be called when you use the tool.\nThis tool runs at frontend only, we'll not gather your works.",
        "alertImage": "MTR mod JS only supports .png and .jpeg\n(not even .jpg)",
        "alertImportRmg": "Imported map is for preview only,\nroute colour and station names depend on MTR mod data in actual gaming.\n\nDoes not support branch lines;\nDoes not support moving the route map or changing its style, but one exception:\nyou can set the colour of all the station names by changing the text colour of the leftmost station on the route map.",
        "alertImportFailed": "Import failed! Make sure the file format is correct.",
        "confirmClear": "Your work might be gone forever, so make sure you've exported the canvas as .json.\nConfirm clearing the canvas now?",
        "confirmGoToRmg": "You're about to visit RMG, which is not a project by TranSifona\nPlease support the author of RMG - Chito Wong\nhttps://github.com/wongchito",
        "confirmExportJs": "**Notes**\n1. Move all images to the same folder as the exported file\n2. You might need to adjust the screen size and position. Visit our YouTube channel and wiki for tutorials",
        "confirmExportCpp": ""
    },
    "zht": {
        "appTitle": "仙全鐵螢幕工具",
        "undoHint": "撤銷（Ctrl + Z）",
        "redoHint": "重做（Ctrl + Y or Shift + Ctrl + Z）",
        "select": "選擇",
        "selectHint": "選擇畫板上的圖形（V）",
        "shapes": "形狀",
        "shapesHint": "畫形狀",
        "image": "圖片",
        "imageHint": "插入圖片",
        "text": "文字",
        "textHint": "添加文字",
        "fileOptions": "檔案設定",
        "rect": "長方形",
        "oval": "橢圓形",
        "fixedText": "文字内容固定",
        "variableText": "文字内容可變",
        "lcdSize": "螢幕尺寸",
        "lcdSize2": "暫不支持導出尺寸設定至JS，請自行修改導出之程式碼",
        "lcdSize3": "請自行修改導出之程式碼",
        "width": "闊",
        "height": "高",
        "zoom": "畫板縮放",
        "bg": "螢幕背景顔色",
        "importLcd": "導入畫板工程檔案json",
        "exportLcd": "導出畫板工程檔案json",
        "goToRmg": "前往RMG（路綫圖製作工具）",
        "importRmg": "導入RMG路綫圖json",
        "exportCode": "導出程式碼",
        "clear": "清除畫板",
        "exportTitle": "導出程式碼設定",
        "exportJsTitle": "JavaScript（用於MTR mod）",
        "exportJs1": "導出JS程式碼（僅圖形部分）",
        "exportJs2": "導出JS程式碼（基礎程式碼+圖形）",
        "exportJs3": "導出JS程式碼（基礎程式碼+圖形+讀取路綫資料）",
        "exportBug": "易引致bug",
        "exportCppTitle": "C++（用於Arduino）",
        "exportCppDirection": "像素渲染方向：",
        "exportCppVert": "縱向",
        "exportCppHori": "橫向",
        "exportCppOrder": "像素渲染次序：",
        "exportCppLsb": "LSB",
        "exportCppMsb": "MSB",
        "exportCpp": "導出C++程式碼",
        "layerTitle": "圖層",
        "layerTitle2": "（JS程式碼預覽已移至右側）",
        "layerBg": "螢幕背景",
        "gSettingsTitle": "圖形屬性",
        "paramTitle": "參數",
        "paramFill": "填充色",
        "paramOutline": "輪廓色",
        "paramOutlineW": "輪廓闊度",
        "paramX": "X坐標",
        "paramY": "Y坐標",
        "paramTextSize": "文字大小",
        "paramFont": "字體",
        "paramSans": "無襯綫",
        "paramSerif": "有襯綫",
        "previewTitle": "JS程式碼預覽",
        "previewTitle2": "（欲檢視完整程式碼，請到檔案設定導出）",
        "previewImage": "// 需要額外程式碼定義圖片常數，請於檔案設定導出完整程式碼查看",
        "previewText": "// 需要額外程式碼定義AlignText函數，請於檔案設定導出完整程式碼查看",
        "previewData": "// 需要額外程式碼讀取游戲資料，請於檔案設定導出完整程式碼查看",
        "previewImgCon": "圖片常數",
        "previewStnNam": "車站名稱",
        "canvasTitle": "螢幕可見範圍",
        "canvasHint1": "如何使用：先於頂部菜單選擇圖形，然後點擊畫板任意位置添加圖形。",
        "canvasHint2": "提示：點擊畫板上之圖形後，可拖動角落調校大小，調校時按Shift鍵可保持闊高比。",
        "footer": "版本：0.1.7",
        "alertWelcome": "【v0.1.7更新】\n- 新增語言切換選項\n- 現在可以用滑鼠移動及縮放畫板了\n\n歡迎試用《TranSifona仙全鐵螢幕工具》！\n如有疑問或建議，請於TranSifona之作品留下comment，或前往程式碼庫反饋～\n\n此工具於製作階段使用了生成式AI技術輔助，\n但閣下的所有操作都不會調用AI生成。\n此工具純前端運作，不會收集閣下的作品。",
        "alertImage": "MTR mod JS暫時只支援.png及.jpeg\n（後綴為.jpg不可以）",
        "alertImportRmg": "導入路綫圖只供效果預覽，\n實際游戲時之路綫色和站名取決於MTR mod資料。\n\n暫不能顯示支綫；\n暫不能修改路綫圖位置和外觀，以下除外：\n游戲內路綫圖站名顔色取決於畫板最左邊的站名顔色。",
        "alertImportFailed": "導入失敗！請確認檔案格式正確。",
        "confirmClear": "閣下的作品可能無法恢復，建議閣下先導出畫板工程檔案。\n確定現在就清除畫板？",
        "confirmGoToRmg": "閣下將會前往RMG，此工具并非TranSifona仙全鐵作品。\n請支持RMG原作者：Chito Wong\nhttps://github.com/wongchito",
        "confirmExportJs": "【注意】\n1. 請將所有圖片移至與導出檔案相同的目錄\n2. 請自行調校螢幕的尺寸和位置，可參閲我們的wiki或YouTube教學影片",
        "confirmExportCpp": ""
    },
    "zhs": {
        "appTitle": "仙全铁显示屏工具",
        "undoHint": "撤消（Ctrl + Z）",
        "redoHint": "重做（Ctrl + Y or Shift + Ctrl + Z）",
        "select": "选择",
        "selectHint": "选择画板上的图形（V）",
        "shapes": "形状",
        "shapesHint": "绘制形状",
        "image": "图片",
        "imageHint": "插入图片",
        "text": "文字",
        "textHint": "添加文字",
        "fileOptions": "文件设置",
        "rect": "长方形",
        "oval": "椭圆形",
        "fixedText": "文字内容不变",
        "variableText": "文字内容可变",
        "lcdSize": "显示屏尺寸",
        "lcdSize2": "暂不支持导出尺寸设置到JS，请自行修改导出的代码",
        "lcdSize3": "请自行修改导出的代码",
        "width": "宽",
        "height": "高",
        "zoom": "画板缩放",
        "bg": "显示屏背景色",
        "importLcd": "导入画板工程文件json",
        "exportLcd": "导出画板工程文件json",
        "goToRmg": "前往RMG（路线图制作工具）",
        "importRmg": "导入RMG路线图json",
        "exportCode": "导出代码",
        "clear": "清空画板",
        "exportTitle": "导出代码设置",
        "exportJsTitle": "JS（MTR模组用）",
        "exportJs1": "导出JS代码（仅图形部分）",
        "exportJs2": "导出JS代码（前置代码+图形）",
        "exportJs3": "导出JS代码（前置代码+图形+读取路线数据）",
        "exportBug": "容易触发bug",
        "exportCppTitle": "C++（Arduino用）",
        "exportCppDirection": "像素渲染方向：",
        "exportCppVert": "竖向",
        "exportCppHori": "横向",
        "exportCppOrder": "像素渲染顺序：",
        "exportCppLsb": "LSB",
        "exportCppMsb": "MSB",
        "exportCpp": "导出C++代码",
        "layerTitle": "图层",
        "layerTitle2": "（JS代码预览移到右侧栏了）",
        "layerBg": "显示屏背景",
        "gSettingsTitle": "图形属性",
        "paramTitle": "参数",
        "paramFill": "填充色",
        "paramOutline": "轮廓色",
        "paramOutlineW": "轮廓宽度",
        "paramX": "X坐标",
        "paramY": "Y坐标",
        "paramTextSize": "文字大小",
        "paramFont": "字体",
        "paramSans": "无衬线",
        "paramSerif": "有衬线",
        "previewTitle": "JS代码预览",
        "previewTitle2": "（完整代码请到文件设置导出）",
        "previewImage": "// 需要额外代码定义图片常数，请到文件设置导出完整代码查看",
        "previewText": "// 需要额外代码定义AlignText函数，请到文件设置导出完整代码查看",
        "previewData": "// 需要额外代码读取游戏数据，请到文件设置导出完整代码查看",
        "previewImgCon": "图片常数",
        "previewStnNam": "车站名称",
        "canvasTitle": "显示屏可见范围",
        "canvasHint1": "操作方法：先在顶部菜单选择图形，然后点击画板任意位置添加图形。",
        "canvasHint2": "提示：点击画板上的图形后，可以拖动角落调整大小，调整时按Shift键可以保持宽高比。",
        "footer": "版本：0.1.7",
        "alertWelcome": "【v0.1.7更新】\n- 新增语言切换选项\n- 现在可以移动画板视角并滚动缩放了\n\n欢迎试用《仙全铁显示屏工具》！\n如有疑问或建议，请在仙全铁作品评论区或Github代码库留言～\n\n此工具在制作阶段使用了生成式AI技术辅助，\n但您的所有操作都不会调用AI生成。\n本工具纯前端运行，不会收集您的作品。",
        "alertImage": "MTR模组JS暂时只支持.png和.jpeg\n（后缀为.jpg不行）",
        "alertImportRmg": "导入路线图仅供效果预览，\n实际游戏中的路线色和站名取决于MTR数据。\n\n暂不能显示支线；\n暂不能修改路线图位置和外观，以下除外：\n游戏内路线图站名颜色取决于画板最左边的站名颜色。",
        "alertImportFailed": "导入失败！请确认文件格式正确。",
        "confirmClear": "您的作品可能无法复原，建议您先导出画板工程文件。\n确定现在清空画板？",
        "confirmGoToRmg": "您即将前往RMG，该工具并非仙全铁作品。\n请支持RMG原作者：Chito Wong\nhttps://github.com/wongchito",
        "confirmExportJs": "【注意】\n1. 请将所有图片移动到与导出文件相同的目录\n2. 请自行调整显示屏的尺寸和位置，可参考Bilibili-仙全铁的教程",
        "confirmExportCpp": ""
    }
};

const languageSelect = document.getElementById("language");

const browserLang = navigator.language;
//console.log(browserLang);
let currentLang = "en";
if (browserLang === "zh-TW" || browserLang === "zh-tw")
    currentLang = "zht";
else if (browserLang === "zh-CN" || browserLang === "zh-cn")
    currentLang = "zhs";

function t(key) {
    return translations[currentLang]?.[key] ?? key;
}

function getLanguageFromURL() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");

    if (!lang) return null;

    return lang.toLowerCase();
}

function isSupportedLanguage(lang) {
    return Boolean(lang && translations[lang]);
}

function updateURL(lang) {
    try {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", lang);
        window.history.replaceState({}, "", url);
    } catch (error) {
        console.warn("Could not update URL:", error);
    }
}

function setLanguage(lang) {
    if (!isSupportedLanguage(lang)) {
        lang = "en";
    }

    currentLang = lang;

    const strings = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.dataset.i18n;

        if (strings[key] !== undefined) {
            element.textContent = strings[key];
        }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (element) {
        const attrConfig = element.dataset.i18nAttr;

        attrConfig.split(",").forEach(function (pair) {
            const [attrName, key] = pair.split(":").map(function (item) {
                return item.trim();
            });

            if (attrName && strings[key] !== undefined) {
                element.setAttribute(attrName, strings[key]);
            }
        });
    });

    document.documentElement.lang = lang;

    languageSelect.value = lang;

    //localStorage.setItem("language", lang);

    updateURL(lang);
}

async function loadTranslations() {
    try {
        //const response = await fetch("lang.json");
        //translations = await response.json();

        const urlLanguage = getLanguageFromURL();
        //const savedLanguage = localStorage.getItem("language");

        let initialLanguage = currentLang;
        //console.log(initialLanguage);

        if (isSupportedLanguage(urlLanguage))
            initialLanguage = urlLanguage;
        //else if (isSupportedLanguage(savedLanguage))
        //    initialLanguage = savedLanguage;

        setLanguage(initialLanguage);
    } catch (error) {
        console.error("Failed to load translations:", error);
    }
}

languageSelect.addEventListener("change", function () {
    setLanguage(this.value);
});

loadTranslations();