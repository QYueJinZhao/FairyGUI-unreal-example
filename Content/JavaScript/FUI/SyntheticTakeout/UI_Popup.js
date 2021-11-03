"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const UI_BtnInteraction_1 = require("./UI_BtnInteraction");
const fgui = require("ue");
class UI_Popup {
    m_BG;
    m_icon;
    m_text;
    m_closeButton;
    m_BtnAutocomplete;
    m_TextTitle;
    static URL = "ui://tqsc8htvpip14";
    static Package = "SyntheticTakeout";
    static Component = "Popup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Popup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Popup();
        if (component == null) {
            component = UI_Popup.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BG = component.GetChild("BG");
        this.m_icon = component.GetChild("icon");
        this.m_text = component.GetChild("text");
        this.m_closeButton = UI_x_1.default.createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_BtnAutocomplete = UI_BtnInteraction_1.default.createInstance(component.GetChild("BtnAutocomplete"), WorldContextObject);
        this.m_TextTitle = component.GetChild("TextTitle");
    }
}
exports.default = UI_Popup;
//# sourceMappingURL=UI_Popup.js.map