"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnAdvertisement {
    m_button;
    m_Advertisement;
    static URL = "ui://tqsc8htvveax16";
    static Package = "SyntheticTakeout";
    static Component = "BtnAdvertisement";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnAdvertisement.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnAdvertisement();
        if (component == null) {
            component = UI_BtnAdvertisement.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Advertisement = component.GetChild("Advertisement");
    }
}
exports.default = UI_BtnAdvertisement;
//# sourceMappingURL=UI_BtnAdvertisement.js.map