"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Reward1 {
    m_c1;
    m_Bg;
    m_money;
    m_date;
    m_date2;
    m_AmountOfMoney;
    m_Received;
    static URL = "ui://h9dczuj89xrpl";
    static Package = "SignIn";
    static Component = "Reward1";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Reward1.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Reward1();
        if (component == null) {
            component = UI_Reward1.CreateComponent(WorldContextObject);
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
exports.default = UI_Reward1;
//# sourceMappingURL=UI_Reward1.js.map