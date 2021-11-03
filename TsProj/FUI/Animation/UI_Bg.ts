/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Bg {

	public m_Bg:fgui.GImage;
	public m_TakeoutBox:fgui.GImage;
	public static URL:string = "ui://rqcz0xy9jl8x4t";
	public static Package:string  = "Animation";
	public static Component:string  = "Bg";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Bg.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Bg {
		var obj = new UI_Bg();
		if(component==null){component = UI_Bg.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_Bg = <fgui.GImage>component.GetChild("Bg");
		this.m_TakeoutBox = <fgui.GImage>component.GetChild("TakeoutBox");
	}
}