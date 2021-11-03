/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Details from "./UI_Details";

import * as fgui from "ue"
export default class UI_TitleCompanyGold {

	public m_BackGround:fgui.GImage;
	public m_coins3:fgui.GImage;
	public m_coins2:fgui.GImage;
	public m_coins1:fgui.GImage;
	public m_Coin:fgui.GImage;
	public m_Details:UI_Details;
	public m_TextGoldValue:fgui.GTextField;
	public m_TextAddGoldValue:fgui.GTextField;
	public m_t1:fgui.Transition;
	public static URL:string = "ui://p6ocxgya9526r";
	public static Package:string  = "Top";
	public static Component:string  = "TitleCompanyGold";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_TitleCompanyGold.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_TitleCompanyGold {
		var obj = new UI_TitleCompanyGold();
		if(component==null){component = UI_TitleCompanyGold.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BackGround = <fgui.GImage>component.GetChild("BackGround");
		this.m_coins3 = <fgui.GImage>component.GetChild("coins3");
		this.m_coins2 = <fgui.GImage>component.GetChild("coins2");
		this.m_coins1 = <fgui.GImage>component.GetChild("coins1");
		this.m_Coin = <fgui.GImage>component.GetChild("Coin");
		this.m_Details =  UI_Details.createInstance(component.GetChild("Details") as fgui.GComponent, WorldContextObject);
		this.m_TextGoldValue = <fgui.GTextField>component.GetChild("TextGoldValue");
		this.m_TextAddGoldValue = <fgui.GTextField>component.GetChild("TextAddGoldValue");
		this.m_t1 = component.GetTransition("t1");
	}
}