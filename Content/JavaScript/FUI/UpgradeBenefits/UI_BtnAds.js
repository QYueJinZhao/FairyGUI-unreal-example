"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnAds {
    m_button;
    m_n0;
    m_Image;
    m_TextIcon;
    m_n4;
    static URL = "ui://t8uh51qkpip1c";
    static Package = "UpgradeBenefits";
    static Component = "BtnAds";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnAds.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnAds();
        if (component == null) {
            component = UI_BtnAds.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_n0 = component.GetChild("n0");
        this.m_Image = component.GetChild("Image");
        this.m_TextIcon = component.GetChild("TextIcon");
        this.m_n4 = component.GetChild("n4");
    }
}
exports.default = UI_BtnAds;
//# sourceMappingURL=UI_BtnAds.js.map