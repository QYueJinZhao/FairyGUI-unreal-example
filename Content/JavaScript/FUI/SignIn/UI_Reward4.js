"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Reward4 {
    m_c1;
    m_Bg;
    m_money;
    m_date;
    m_date2;
    m_AmountOfMoney;
    m_Received;
    static URL = "ui://h9dczuj89xrpo";
    static Package = "SignIn";
    static Component = "Reward4";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Reward4.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Reward4();
        if (component == null) {
            component = UI_Reward4.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_Bg = component.GetChild("Bg");
        this.m_money = component.GetChild("money");
        this.m_date = component.GetChild("date");
        this.m_date2 = component.GetChild("date2");
        this.m_AmountOfMoney = component.GetChild("AmountOfMoney");
        this.m_Received = component.GetChild("Received");
    }
}
exports.default = UI_Reward4;
//# sourceMappingURL=UI_Reward4.js.map