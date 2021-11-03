"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Revenue_1 = require("./UI_Revenue");
const fgui = require("ue");
class UI_DoubleRevenue {
    m_n1;
    m_t0;
    static URL = "ui://tm2lcvzypip1b";
    static Package = "BUFF";
    static Component = "DoubleRevenue";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_DoubleRevenue.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_DoubleRevenue();
        if (component == null) {
            component = UI_DoubleRevenue.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n1 = UI_Revenue_1.default.createInstance(component.GetChild("n1"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_DoubleRevenue;
//# sourceMappingURL=UI_DoubleRevenue.js.map