/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnSetting {

	public m_button:fgui.GController;
	public m_BG:fgui.GImage;
	public m_Image:fgui.GImage;
	public static URL:string = "ui://p6ocxgya9526q";
	public static Package:string  = "Top";
	public static Component:string  = "BtnSetting";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnSetting.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnSetting {
		var obj = new UI_BtnSetting();
		if(component==null){component = UI_BtnSetting.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_BG = <fgui.GImage>component.GetChild("BG");
		this.m_Image = <fgui.GImage>component.GetChild("Image");
	}
}