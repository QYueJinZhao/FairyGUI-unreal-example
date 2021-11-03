"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnHelp_1 = require("./UI_BtnHelp");
const UI_warning_1 = require("./UI_warning");
const UI_BtnComplete_1 = require("./UI_BtnComplete");
const UI_BtnColorBomb_1 = require("./UI_BtnColorBomb");
const UI_BtnRange_1 = require("./UI_BtnRange");
const fgui = require("ue");
class UI_SyntheticInterface {
    m_icon;
    m_title;
    m_text;
    m_Title;
    m_BtnHelp;
    m_warning;
    m_BtnComplete;
    m_BtnColorBomb;
    m_BtnRange;
    static URL = "ui://tqsc8htvpip1f";
    static Package = "SyntheticTakeout";
    static Component = "SyntheticInterface";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_SyntheticInterface.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_SyntheticInterface();
        if (component == null) {
            component = UI_SyntheticInterface.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_icon = component.GetChild("icon");
        this.m_title = component.GetChild("title");
        this.m_text = component.GetChild("text");
        this.m_Title = component.GetChild("Title");
        this.m_BtnHelp = UI_BtnHelp_1.default.createInstance(component.GetChild("BtnHelp"), WorldContextObject);
        this.m_warning = UI_warning_1.default.createInstance(component.GetChild("warning"), WorldContextObject);
        this.m_BtnComplete = UI_BtnComplete_1.default.createInstance(component.GetChild("BtnComplete"), WorldContextObject);
        this.m_BtnColorBomb = UI_BtnColorBomb_1.default.createInstance(component.GetChild("BtnColorBomb"), WorldContextObject);
        this.m_BtnRange = UI_BtnRange_1.default.createInstance(component.GetChild("BtnRange"), WorldContextObject);
    }
}
exports.default = UI_SyntheticInterface;
//# sourceMappingURL=UI_SyntheticInterface.js.map