"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Revenue {
    m_button;
    m_Bottom;
    m_Revenue;
    m_x2;
    m_t0;
    static URL = "ui://tm2lcvzypip1l";
    static Package = "BUFF";
    static Component = "Revenue";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Revenue.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Revenue();
        if (component == null) {
            component = UI_Revenue.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_Bottom = component.GetChild("Bottom");
        this.m_Revenue = component.GetChild("Revenue");
        this.m_x2 = component.GetChild("x2");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_Revenue;
//# sourceMappingURL=UI_Revenue.js.map