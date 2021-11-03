"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnPack {
    m_button;
    m_Pack;
    static URL = "ui://tqsc8htvveax15";
    static Package = "SyntheticTakeout";
    static Component = "BtnPack";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnPack.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnPack();
        if (component == null) {
            component = UI_BtnPack.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Pack = component.GetChild("Pack");
    }
}
exports.default = UI_BtnPack;
//# sourceMappingURL=UI_BtnPack.js.map