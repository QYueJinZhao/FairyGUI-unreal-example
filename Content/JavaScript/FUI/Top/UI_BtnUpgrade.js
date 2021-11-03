"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_LevelProgressBar_1 = require("./UI_LevelProgressBar");
const fgui = require("ue");
class UI_BtnUpgrade {
    m_button;
    m_light;
    m_LevelProgressBar;
    m_Grade;
    m_icon;
    static URL = "ui://p6ocxgyaqqq91r";
    static Package = "Top";
    static Component = "BtnUpgrade";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnUpgrade.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnUpgrade();
        if (component == null) {
            component = UI_BtnUpgrade.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_light = component.GetChild("light");
        this.m_LevelProgressBar = UI_LevelProgressBar_1.default.createInstance(component.GetChild("LevelProgressBar"), WorldContextObject);
        this.m_Grade = component.GetChild("Grade");
        this.m_icon = component.GetChild("icon");
    }
}
exports.default = UI_BtnUpgrade;
//# sourceMappingURL=UI_BtnUpgrade.js.map