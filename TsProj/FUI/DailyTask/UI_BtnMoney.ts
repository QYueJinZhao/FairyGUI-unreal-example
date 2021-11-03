/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnMoney {

	public m_button:fgui.GController;
	public m_c1:fgui.GController;
	public m_icon6:fgui.GImage;
	public m_money:fgui.GTextField;
	public m_n2:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://rr0e2yhyj17pn";
	public static Package:string  = "DailyTask";
	public static Component:string  = "BtnMoney";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnMoney.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnMoney {
		var obj = new UI_BtnMoney();
		if(component==null){component = UI_BtnMoney.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_c1 = component.GetController("c1");
		this.m_icon6 = <fgui.GImage>component.GetChild("icon6");
		this.m_money = <fgui.GTextField>component.GetChild("money");
		this.m_n2 = <fgui.GImage>component.GetChild("n2");
		this.m_t0 = component.GetTransition("t0");
	}
}