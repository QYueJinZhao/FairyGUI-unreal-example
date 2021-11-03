/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnBuildAndUpgrade from "./UI_BtnBuildAndUpgrade";

import * as fgui from "ue"
export default class UI_RestUpgradeCard {

	public m_BG:fgui.GImage;
	public m_TextRestName:fgui.GTextField;
	public m_Image_rest:fgui.GLoader;
	public m_upgrade_1:fgui.GImage;
	public m_UpgradeRest:UI_BtnBuildAndUpgrade;
	public m_TextRestNum:fgui.GTextField;
	public m_title_1:fgui.GTextField;
	public m_Text__1:fgui.GTextField;
	public m_Image_merchant:fgui.GLoader;
	public m_Image_arrow:fgui.GImage;
	public m_SigMerchant:UI_BtnBuildAndUpgrade;
	public m_TextMerchantNum:fgui.GTextField;
	public m_title_2:fgui.GTextField;
	public m_Text__2:fgui.GTextField;
	public static URL:string = "ui://sn18zihkqb9d2o";
	public static Package:string  = "MainPage";
	public static Component:string  = "RestUpgradeCard";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_RestUpgradeCard.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_RestUpgradeCard {
		var obj = new UI_RestUpgradeCard();
		if(component==null){component = UI_RestUpgradeCard.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BG = <fgui.GImage>component.GetChild("BG");
		this.m_TextRestName = <fgui.GTextField>component.GetChild("TextRestName");
		this.m_Image_rest = <fgui.GLoader>component.GetChild("Image_rest");
		this.m_upgrade_1 = <fgui.GImage>component.GetChild("upgrade_1");
		this.m_UpgradeRest =  UI_BtnBuildAndUpgrade.createInstance(component.GetChild("UpgradeRest") as fgui.GComponent, WorldContextObject);
		this.m_TextRestNum = <fgui.GTextField>component.GetChild("TextRestNum");
		this.m_title_1 = <fgui.GTextField>component.GetChild("title_1");
		this.m_Text__1 = <fgui.GTextField>component.GetChild("Text _1");
		this.m_Image_merchant = <fgui.GLoader>component.GetChild("Image_merchant");
		this.m_Image_arrow = <fgui.GImage>component.GetChild("Image_arrow");
		this.m_SigMerchant =  UI_BtnBuildAndUpgrade.createInstance(component.GetChild("SigMerchant") as fgui.GComponent, WorldContextObject);
		this.m_TextMerchantNum = <fgui.GTextField>component.GetChild("TextMerchantNum");
		this.m_title_2 = <fgui.GTextField>component.GetChild("title_2");
		this.m_Text__2 = <fgui.GTextField>component.GetChild("Text _2");
	}
}