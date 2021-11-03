/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BgTime {

	public m_img:fgui.GImage;
	public m_time:fgui.GTextField;
	public static URL:string = "ui://5eksxjp2hktbn";
	public static Package:string  = "OnlineDuration";
	public static Component:string  = "BgTime";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BgTime.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BgTime {
		var obj = new UI_BgTime();
		if(component==null){component = UI_BgTime.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_img = <fgui.GImage>component.GetChild("img");
		this.m_time = <fgui.GTextField>component.GetChild("time");
	}
}