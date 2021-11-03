/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Coin3 {

	public m_quota:fgui.GTextField;
	public m_icon:fgui.GLoader;
	public static URL:string = "ui://tgre8ndbpip11c";
	public static Package:string  = "Turntable";
	public static Component:string  = "Coin3";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Coin3.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Coin3 {
		var obj = new UI_Coin3();
		if(component==null){component = UI_Coin3.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_quota = <fgui.GTextField>component.GetChild("quota");
		this.m_icon = <fgui.GLoader>component.GetChild("icon");
	}
}