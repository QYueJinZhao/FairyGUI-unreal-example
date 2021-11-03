/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnColorBomb {

	public m_button:fgui.GController;
	public m_BtnBg:fgui.GImage;
	public m_SameColor:fgui.GImage;
	public m_ColorBomb:fgui.GImage;
	public m_video:fgui.GImage;
	public m_n4:fgui.GTextField;
	public static URL:string = "ui://tqsc8htvj17p1s";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "BtnColorBomb";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnColorBomb.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnColorBomb {
		var obj = new UI_BtnColorBomb();
		if(component==null){component = UI_BtnColorBomb.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_BtnBg = <fgui.GImage>component.GetChild("BtnBg");
		this.m_SameColor = <fgui.GImage>component.GetChild("SameColor");
		this.m_ColorBomb = <fgui.GImage>component.GetChild("ColorBomb");
		this.m_video = <fgui.GImage>component.GetChild("video");
		this.m_n4 = <fgui.GTextField>component.GetChild("n4");
	}
}