/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_lock0 {

	public m_n0:fgui.GImage;
	public m_n1:fgui.GImage;
	public static URL:string = "ui://7d8qawjuae102t";
	public static Package:string  = "Town";
	public static Component:string  = "lock0";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_lock0.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_lock0 {
		var obj = new UI_lock0();
		if(component==null){component = UI_lock0.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n0 = <fgui.GImage>component.GetChild("n0");
		this.m_n1 = <fgui.GImage>component.GetChild("n1");
	}
}