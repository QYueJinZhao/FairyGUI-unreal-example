/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnReceive {

	public m_button:fgui.GController;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://tfx03j5ppip1a";
	public static Package:string  = "Revenue";
	public static Component:string  = "BtnReceive";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnReceive.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnReceive {
		var obj = new UI_BtnReceive();
		if(component==null){component = UI_BtnReceive.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_n0 = <fgui.GImage>component.GetChild("n0");
	}
}