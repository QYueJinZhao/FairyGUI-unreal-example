"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnOK_1 = require("./UI_BtnOK");
const fgui = require("ue");
class UI_FireDialog {
    m_BackGround;
    m_closeButton;
    m_TextTitle;
    m_TextFire;
    m_BtnOK;
    static URL = "ui://n16w4m5pqb9d3b";
    static Package = "Popup";
    static Component = "FireDialog";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_FireDialog.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_FireDialog();
        if (component == null) {
            component = UI_FireDialog.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BackGround = component.GetChild("BackGround");
        this.m_closeButton = component.GetChild("closeButton");
        this.m_TextTitle = component.GetChild("TextTitle");
        this.m_TextFire = component.GetChild("TextFire");
        this.m_BtnOK = UI_BtnOK_1.default.createInstance(component.GetChild("BtnOK"), WorldContextObject);
    }
}
exports.default = UI_FireDialog;
//# sourceMappingURL=UI_FireDialog.js.map