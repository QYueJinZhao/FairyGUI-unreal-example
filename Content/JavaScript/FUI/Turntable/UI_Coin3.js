"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Coin3 {
    m_quota;
    m_icon;
    static URL = "ui://tgre8ndbpip11c";
    static Package = "Turntable";
    static Component = "Coin3";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Coin3.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Coin3();
        if (component == null) {
            component = UI_Coin3.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_quota = component.GetChild("quota");
        this.m_icon = component.GetChild("icon");
    }
}
exports.default = UI_Coin3;
//# sourceMappingURL=UI_Coin3.js.map