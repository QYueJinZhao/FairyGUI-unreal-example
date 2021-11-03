/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnRange {

	public m_button:fgui.GController;
	public m_BtnBg:fgui.GImage;
	public m_Range:fgui.GImage;
	public m_OrdinaryBomb:fgui.GImage;
	public m_video:fgui.GImage;
	public m_n4:fgui.GTextField;
	public static URL:string = "ui://tqsc8htvj17p1q";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "BtnRange";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnRange.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnRange {
		var obj = new UI_BtnRange();
		if(component==null){component = UI_BtnRange.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_BtnBg = <fgui.GImage>component.GetChild("BtnBg");
		this.m_Range = <fgui.GImage>component.GetChild("Range");
		this.m_OrdinaryBomb = <fgui.GImage>component.GetChild("OrdinaryBomb");
		this.m_video = <fgui.GImage>component.GetChild("video");
		this.m_n4 = <fgui.GTextField>component.GetChild("n4");
	}
}