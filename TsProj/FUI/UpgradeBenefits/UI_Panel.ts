/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";
import UI_BtnAds from "./UI_BtnAds";
import UI_BtnGot from "./UI_BtnGot";

import * as fgui from "ue"
export default class UI_Panel {

	public m_Panel:fgui.GImage;
	public m_closeButton:UI_x;
	public m_Coin:fgui.GImage;
	public m_InCome:fgui.GTextField;
	public m_LayoutGroup:fgui.GGroup;
	public m_Desc:fgui.GTextField;
	public m_TextTitle:fgui.GTextField;
	public m_BtnAds:UI_BtnAds;
	public m_BtnGot:UI_BtnGot;
	public m_BtnGroup:fgui.GGroup;
	public static URL:string = "ui://t8uh51qkpip1d";
	public static Package:string  = "UpgradeBenefits";
	public static Component:string  = "Panel";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Panel.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Panel {
		var obj = new UI_Panel();
		if(component==null){component = UI_Panel.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_Panel = <fgui.GImage>component.GetChild("Panel");
		this.m_closeButton =  UI_x.createInstance(component.GetChild("closeButton") as fgui.GComponent, WorldContextObject);
		this.m_Coin = <fgui.GImage>component.GetChild("Coin");
		this.m_InCome = <fgui.GTextField>component.GetChild("InCome");
		this.m_LayoutGroup = <fgui.GGroup>component.GetChild("LayoutGroup");
		this.m_Desc = <fgui.GTextField>component.GetChild("Desc");
		this.m_TextTitle = <fgui.GTextField>component.GetChild("TextTitle");
		this.m_BtnAds =  UI_BtnAds.createInstance(component.GetChild("BtnAds") as fgui.GComponent, WorldContextObject);
		this.m_BtnGot =  UI_BtnGot.createInstance(component.GetChild("BtnGot") as fgui.GComponent, WorldContextObject);
		this.m_BtnGroup = <fgui.GGroup>component.GetChild("BtnGroup");
	}
}