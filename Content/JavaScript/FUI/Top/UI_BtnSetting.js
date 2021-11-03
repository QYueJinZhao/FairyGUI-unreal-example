"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnSetting {
    m_button;
    m_BG;
    m_Image;
    static URL = "ui://p6ocxgya9526q";
    static Package = "Top";
    static Component = "BtnSetting";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnSetting.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnSetting();
        if (component == null) {
            component = UI_BtnSetting.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_BG = component.GetChild("BG");
        this.m_Image = component.GetChild("Image");
    }
}
exports.default = UI_BtnSetting;
//# sourceMappingURL=UI_BtnSetting.js.map