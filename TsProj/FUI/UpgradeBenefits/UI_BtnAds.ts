/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnAds {

	public m_button:fgui.GController;
	public m_n0:fgui.GImage;
	public m_Image:fgui.GImage;
	public m_TextIcon:fgui.GImage;
	public m_n4:fgui.GGroup;
	public static URL:string = "ui://t8uh51qkpip1c";
	public static Package:string  = "UpgradeBenefits";
	public static Component:string  = "BtnAds";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnAds.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnAds {
		var obj = new UI_BtnAds();
		if(component==null){component = UI_BtnAds.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_n0 = <fgui.GImage>component.GetChild("n0");
		this.m_Image = <fgui.GImage>component.GetChild("Image");
		this.m_TextIcon = <fgui.GImage>component.GetChild("TextIcon");
		this.m_n4 = <fgui.GGroup>component.GetChild("n4");
	}
}