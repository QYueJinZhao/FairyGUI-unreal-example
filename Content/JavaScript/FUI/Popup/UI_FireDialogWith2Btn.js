"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnCancel_1 = require("./UI_BtnCancel");
const UI_BtnOK_1 = require("./UI_BtnOK");
const fgui = require("ue");
class UI_FireDialogWith2Btn {
    m_BackGround;
    m_closeButton;
    m_TextTitle;
    m_TextFire;
    m_BtnCancel;
    m_BtnOK;
    static URL = "ui://n16w4m5pqb9d35";
    static Package = "Popup";
    static Component = "FireDialogWith2Btn";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_FireDialogWith2Btn.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_FireDialogWith2Btn();
        if (component == null) {
            component = UI_FireDialogWith2Btn.CreateComponent(WorldContextObject);
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
        this.m_BtnCancel = UI_BtnCancel_1.default.createInstance(component.GetChild("BtnCancel"), WorldContextObject);
        this.m_BtnOK = UI_BtnOK_1.default.createInstance(component.GetChild("BtnOK"), WorldContextObject);
    }
}
exports.default = UI_FireDialogWith2Btn;
//# sourceMappingURL=UI_FireDialogWith2Btn.js.map