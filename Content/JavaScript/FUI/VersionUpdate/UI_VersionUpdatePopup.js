"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnCancel_1 = require("./UI_BtnCancel");
const UI_BtnOK_1 = require("./UI_BtnOK");
const fgui = require("ue");
class UI_VersionUpdatePopup {
    m_Bottom;
    m_text;
    m_BtnCancel;
    m_BtnOK;
    m_t0;
    static URL = "ui://644171sttexdb";
    static Package = "VersionUpdate";
    static Component = "VersionUpdatePopup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_VersionUpdatePopup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_VersionUpdatePopup();
        if (component == null) {
            component = UI_VersionUpdatePopup.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_Bottom = component.GetChild("Bottom");
        this.m_text = component.GetChild("text");
        this.m_BtnCancel = UI_BtnCancel_1.default.createInstance(component.GetChild("BtnCancel"), WorldContextObject);
        this.m_BtnOK = UI_BtnOK_1.default.createInstance(component.GetChild("BtnOK"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_VersionUpdatePopup;
//# sourceMappingURL=UI_VersionUpdatePopup.js.map