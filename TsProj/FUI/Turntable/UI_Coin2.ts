/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Coin2 {

	public m_quota:fgui.GTextField;
	public m_icon:fgui.GLoader;
	public static URL:string = "ui://tgre8ndbpip11b";
	public static Package:string  = "Turntable";
	public static Component:string  = "Coin2";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Coin2.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Coin2 {
		var obj = new UI_Coin2();
		if(component==null){component = UI_Coin2.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_quota = <fgui.GTextField>component.GetChild("quota");
		this.m_icon = <fgui.GLoader>component.GetChild("icon");
	}
}