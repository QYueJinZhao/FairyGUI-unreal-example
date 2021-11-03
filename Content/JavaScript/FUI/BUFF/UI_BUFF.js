"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnBuff_1 = require("./UI_BtnBuff");
const fgui = require("ue");
class UI_BUFF {
    m_BUFF;
    m_t0;
    static URL = "ui://tm2lcvzypip11p";
    static Package = "BUFF";
    static Component = "BUFF";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BUFF.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BUFF();
        if (component == null) {
            component = UI_BUFF.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BUFF = UI_BtnBuff_1.default.createInstance(component.GetChild("BUFF"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_BUFF;
//# sourceMappingURL=UI_BUFF.js.map