/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnPack {

	public m_button:fgui.GController;
	public m_Pack:fgui.GImage;
	public static URL:string = "ui://tqsc8htvveax15";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "BtnPack";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnPack.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnPack {
		var obj = new UI_BtnPack();
		if(component==null){component = UI_BtnPack.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_Pack = <fgui.GImage>component.GetChild("Pack");
	}
}