/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnIncreaseDuration {

	public m_button:fgui.GController;
	public m_IncreaseDuration:fgui.GImage;
	public static URL:string = "ui://5eksxjp2hktbd";
	public static Package:string  = "OnlineDuration";
	public static Component:string  = "BtnIncreaseDuration";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnIncreaseDuration.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnIncreaseDuration {
		var obj = new UI_BtnIncreaseDuration();
		if(component==null){component = UI_BtnIncreaseDuration.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_IncreaseDuration = <fgui.GImage>component.GetChild("IncreaseDuration");
	}
}