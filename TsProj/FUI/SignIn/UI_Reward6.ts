/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Reward6 {

	public m_c1:fgui.GController;
	public m_Bg:fgui.GImage;
	public m_money:fgui.GLoader;
	public m_date:fgui.GTextField;
	public m_date2:fgui.GTextField;
	public m_AmountOfMoney:fgui.GTextField;
	public m_Received:fgui.GImage;
	public static URL:string = "ui://h9dczuj89xrpq";
	public static Package:string  = "SignIn";
	public static Component:string  = "Reward6";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Reward6.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Reward6 {
		var obj = new UI_Reward6();
		if(component==null){component = UI_Reward6.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_Bg = <fgui.GImage>component.GetChild("Bg");
		this.m_money = <fgui.GLoader>component.GetChild("money");
		this.m_date = <fgui.GTextField>component.GetChild("date");
		this.m_date2 = <fgui.GTextField>component.GetChild("date2");
		this.m_AmountOfMoney = <fgui.GTextField>component.GetChild("AmountOfMoney");
		this.m_Received = <fgui.GImage>component.GetChild("Received");
	}
}