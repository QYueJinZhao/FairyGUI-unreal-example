/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Main {

	public m_n2:fgui.GTextField;
	public m_n3:fgui.GTextField;
	public static URL:string = "ui://k4ns6b0567za0";
	public static Package:string  = "TestPos";
	public static Component:string  = "Main";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Main.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Main {
		var obj = new UI_Main();
		if(component==null){component = UI_Main.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n2 = <fgui.GTextField>component.GetChild("n2");
		this.m_n3 = <fgui.GTextField>component.GetChild("n3");
	}
}