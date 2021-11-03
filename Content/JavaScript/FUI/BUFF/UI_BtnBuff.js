"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnBuff {
    m_button;
    m_Bottom;
    m_icon;
    m_text;
    m_t0;
    static URL = "ui://tm2lcvzypip1n";
    static Package = "BUFF";
    static Component = "BtnBuff";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnBuff.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnBuff();
        if (component == null) {
            component = UI_BtnBuff.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Bottom = component.GetChild("Bottom");
        this.m_icon = component.GetChild("icon");
        this.m_text = component.GetChild("text");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_BtnBuff;
//# sourceMappingURL=UI_BtnBuff.js.map