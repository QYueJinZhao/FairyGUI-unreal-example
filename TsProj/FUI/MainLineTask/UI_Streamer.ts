/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Streamer {

	public m_n0:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://eb5tqed8tvuv9";
	public static Package:string  = "MainLineTask";
	public static Component:string  = "Streamer";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Streamer.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Streamer {
		var obj = new UI_Streamer();
		if(component==null){component = UI_Streamer.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n0 = <fgui.GImage>component.GetChild("n0");
		this.m_t0 = component.GetTransition("t0");
	}
}