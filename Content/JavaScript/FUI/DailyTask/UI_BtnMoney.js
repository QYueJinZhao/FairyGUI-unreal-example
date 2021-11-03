"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_BtnMoney {
    m_button;
    m_c1;
    m_icon6;
    m_money;
    m_n2;
    m_t0;
    static URL = "ui://rr0e2yhyj17pn";
    static Package = "DailyTask";
    static Component = "BtnMoney";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnMoney.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnMoney();
        if (component == null) {
            component = UI_BtnMoney.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_c1 = component.GetController("c1");
        this.m_icon6 = component.GetChild("icon6");
        this.m_money = component.GetChild("money");
        this.m_n2 = component.GetChild("n2");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_BtnMoney;
//# sourceMappingURL=UI_BtnMoney.js.map