"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_LevelProgressBar {
    m_BG;
    m_bar;
    static URL = "ui://p6ocxgya9526p";
    static Package = "Top";
    static Component = "LevelProgressBar";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_LevelProgressBar.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_LevelProgressBar();
        if (component == null) {
            component = UI_LevelProgressBar.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BG = component.GetChild("BG");
        this.m_bar = component.GetChild("bar");
    }
}
exports.default = UI_LevelProgressBar;
//# sourceMappingURL=UI_LevelProgressBar.js.map