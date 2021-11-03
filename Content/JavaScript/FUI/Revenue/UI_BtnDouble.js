"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnDouble {
    m_button;
    m_BtnDouble;
    static URL = "ui://tfx03j5ppip19";
    static Package = "Revenue";
    static Component = "BtnDouble";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnDouble.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnDouble();
        if (component == null) {
            component = UI_BtnDouble.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_BtnDouble = component.GetChild("BtnDouble");
    }
}
exports.default = UI_BtnDouble;
//# sourceMappingURL=UI_BtnDouble.js.map