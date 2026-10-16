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
        "canvasTitle": "LCD visible area",
        "canvasHint1": "Select a shape from the top menu, then click anywhere on canvas to draw.",
        "canvasHint2": "Hint: resize a shape by dragging its corner, hold Shift to keep its width-height ratio.",
        "footer": "Version: 0.1.7 | Got issues? Report at our Github repo or leave a comment on YouTube.",
        "alertWelcome": "**MAJOR ISSUES**\n- If the generated code needs to read data from MTR mod, due to the difference of code proccessing in different mod versions, the exported code **may only work in some MTR mod versions**, this is a tricky problem and we're still fixing! If you can, try to edit the exported code by yourself;\n\n- This tool is designed for use on a computer screen. Using it on a phone may miss some features.\n\n**UPDATE v0.1.7**\n- Added multilingual support\n\nWelcome to TranSifona LCD Tool!\nGot issues? Report at our Github repo or leave a comment on our YouTube channel.\n\nPart of this tool was made using generative AI,\nbut no AI will be called when you use the tool.\nThis tool runs at frontend only, we'll not gather your works.",
        "alertImage": "MTR mod JS only supports .png and .jpeg\n(not even .jpg)",
        "alertImportRmg": "Imported map is for preview only,\nroute colour and station names depend on MTR mod data in actual gaming.\n\nDoes not support branch lines;\nDoes not support moving the route map or changing its style, but one exception:\nyou can set the colour of all the station names by changing the text colour of the leftmost station on the route map.",
        "alertImportFailed": "Import failed! Make sure the file format is correct.",
        "confirmClear": "Your work might be gone forever, so make sure you've exported the canvas as .json.\nConfirm clearing the canvas now?",
        "confirmGoToRmg": "You're about to visit RMG, which is not a project by TranSifona\nPlease support the author of RMG - Chito Wong\nhttps://github.com/wongchito",
        "confirmExportJs": "**IMPORTANT! After exporting, you need to: **\n1. Move all images to the path of main js file\n(depending on the script path in mtr_custom_resources.json)\n\n2. Rename the exported file from .txt to .js (Due to some system safety restrictions, we can't export .js for now)\n\n3. After renaming, replace the original js main file with the renamed file (if you only exported graphics code, copy the code to the original js file by yourself)\n\nThe exported screen size and position will follow the TranSifona Template Resource Pack.\nIf you want to modify those parameters, check out: ",
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
        "canvasTitle": "螢幕可見範圍",
        "canvasHint1": "如何使用：先於頂部菜單選擇圖形，然後點擊畫板任意位置添加圖形。",
        "canvasHint2": "提示：點擊畫板上之圖形後，可拖動角落調校大小，調校時按Shift鍵可保持闊高比。",
        "footer": "版本：0.1.7 | 遇到問題？請於TranSifona之作品留下comment，或前往Github程式碼庫",
        "alertWelcome": "【已知明顯問題】\n- 若閣下製作之螢幕需讀取MTR mod資料，由於mod版本不同使得讀取程式碼之流程不同，導出的程式碼**只適用於個別版本的MTR mod**，現時我們仍在排查問題！若有能力請自行修改導出後之程式碼\n\n- 在個別設備導出之程式碼，中文部份會變成亂碼\n\n- 此工具暫未兼容手機畫面，建議在電腦使用\n\n【v0.1.7更新】\n- 新增語言切換選項\n\n歡迎試用《TranSifona仙全鐵螢幕工具》！\n如有疑問或建議，請於TranSifona之作品留下comment，或前往程式碼庫反饋～\n\n此工具於製作階段使用了生成式AI技術輔助，\n但閣下的所有操作都不會調用AI生成。\n此工具純前端運作，不會收集閣下的作品。",
        "alertImage": "MTR mod JS暫時只支援.png及.jpeg\n（後綴為.jpg不可以）",
        "alertImportRmg": "導入路綫圖只供效果預覽，\n實際游戲時之路綫色和站名取決於MTR mod資料。\n\n暫不能顯示支綫；\n暫不能修改路綫圖位置和外觀，以下除外：\n游戲內路綫圖站名顔色取決於畫板最左邊的站名顔色。",
        "alertImportFailed": "導入失敗！請確認檔案格式正確。",
        "confirmClear": "閣下的作品可能無法恢復，建議閣下先導出畫板工程檔案。\n確定現在就清除畫板？",
        "confirmGoToRmg": "閣下將會前往RMG，此工具并非TranSifona仙全鐵作品。\n請支持RMG原作者：Chito Wong\nhttps://github.com/wongchito",
        "confirmExportJs": "【重要！導出程式碼後，閣下需要：】\n1. 將所有圖片移至與.js主檔案\n（取決於mtr_custom_resources.json內之script路徑）相同的目錄\n\n2. 將導出後之檔案的.txt改名為.js（受到個別系統安全限制，暫不能直接導出為.js）\n\n3. 改名後，將此檔案取替原有的.js主檔案（如果只導出圖形程式碼，請自行複製到原有的主檔案）\n\n程式碼內螢幕的尺寸和位置將與《TranSifona仙全鐵模板資源包》保持一致。\n如果閣下想調校尺寸及位置，請觀看",
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
        "canvasTitle": "显示屏可见范围",
        "canvasHint1": "操作方法：先在顶部菜单选择图形，然后点击画板任意位置添加图形。",
        "canvasHint2": "提示：点击画板上的图形后，可以拖动角落调整大小，调整时按Shift键可以保持宽高比。",
        "footer": "版本：0.1.6 | 遇到问题？请前往仙全铁作品评论区或",
        "alertWelcome": "【已知明显问题】\n- 若您制作的显示屏需读取MTR路线数据，由于模组版本不同会导致读取代码的流程不同，导出的代码**只适用于部分版本的MTR模组**，目前我们仍在排查问题！有能力的话请自行修改导出后的代码\n\n- 在一些设备导出的代码，中文部分会变成乱码\n\n- 此工具暂未适配手机版竖屏，建议在电脑横屏上使用\n\n【v0.1.6更新】\n- 增加了更多导出选项，避免读取路线数据的bug导致整个显示屏不可用\n\n欢迎试用《仙全铁显示屏工具》！\n如有疑问或建议，请在仙全铁作品评论区或Github代码库留言～\n\n此工具在制作阶段使用了生成式AI技术辅助，\n但您的所有操作都不会调用AI生成。\n本工具纯前端运行，不会收集您的作品。",
        "alertImage": "MTR模组JS暂时只支持.png和.jpeg\n（后缀为.jpg不行）",
        "alertImportRmg": "导入路线图仅供效果预览，\n实际游戏中的路线色和站名取决于MTR数据。\n\n暂不能显示支线；\n暂不能修改路线图位置和外观，以下除外：\n游戏内路线图站名颜色取决于画板最左边的站名颜色。",
        "alertImportFailed": "导入失败！请确认文件格式正确。",
        "confirmClear": "您的作品可能无法复原，建议您先导出画板工程文件。\n确定现在清空画板？",
        "confirmGoToRmg": "您即将前往RMG，该工具并非仙全铁作品。\n请支持RMG原作者：Chito Wong\nhttps://github.com/wongchito",
        "confirmExportJs": "【重要！导出代码后，您需要：】\n1. 将所有图片移动到与.js主文件\n（取决于mtr_custom_resources.json里的script路径）相同的目录\n\n2. 将导出后的文件的.txt改名为.js（受系统安全限制，暂无法直接导出为.js）\n\n3. 改名后，将此文件取代原有的.js主文件（如果仅导出图形代码，请自行复制到原有的主文件）\n\n代码内显示屏的尺寸和位置将与《仙全铁模板资源包》保持一致。\n如果您要调整尺寸和位置，请看《仙全铁MTR模组JS教程—第1集》和相关专栏。",
        "confirmExportCpp": ""

    }
};

const languageSelect = document.getElementById("language");

let currentLang = "zhs";

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
        lang = "zhs";
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

    localStorage.setItem("language", lang);

    updateURL(lang);
}

async function loadTranslations() {
    try {
        //const response = await fetch("lang.json");
        //translations = await response.json();

        const urlLanguage = getLanguageFromURL();
        const savedLanguage = localStorage.getItem("language");

        let initialLanguage = "zhs";

        if (isSupportedLanguage(urlLanguage)) {
            initialLanguage = urlLanguage;
        } else if (isSupportedLanguage(savedLanguage)) {
            initialLanguage = savedLanguage;
        }

        setLanguage(initialLanguage);
    } catch (error) {
        console.error("Failed to load translations:", error);
    }
}

languageSelect.addEventListener("change", function () {
    setLanguage(this.value);
});

loadTranslations();