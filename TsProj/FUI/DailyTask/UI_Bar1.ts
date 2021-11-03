/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Bar1 {

	public m_n0:fgui.GImage;
	public m_bar:fgui.GImage;
	public m_title:fgui.GTextField;
	public static URL:string = "ui://rr0e2yhy9ab9j";
	public static Package:string  = "DailyTask";
	public static Component:string  = "Bar1";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Bar1.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Bar1 {
		var obj = new UI_Bar1();
		if(component==null){component = UI_Bar1.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n0 = <fgui.GImage>component.GetChild("n0");
		this.m_bar = <fgui.GImage>component.GetChild("bar");
		this.m_title = <fgui.GTextField>component.GetChild("title");
	}
}