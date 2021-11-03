/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnFire from "./UI_BtnFire";
import UI_BtnUpgrade from "./UI_BtnUpgrade";
import UI_Speed from "./UI_Speed";

import * as fgui from "ue"
export default class UI_DelvieryManCardPanel {

	public m_cFire:fgui.GController;
	public m_cUpgrade:fgui.GController;
	public m_BackGround:fgui.GLoader;
	public m_Profile:fgui.GLoader;
	public m_BtnFire:UI_BtnFire;
	public m_BtnUpgrade:UI_BtnUpgrade;
	public m_Level:fgui.GTextField;
	public m_Bar:UI_Speed;
	public m_Describe:fgui.GTextField;
	public m_Name:fgui.GTextField;
	public m_Quality:fgui.GTextField;
	public m_Title:fgui.GGroup;
	public m_working:fgui.GLoader;
	public m_RestDesc:fgui.GTextField;
	public m_isRest:fgui.GGroup;
	public m_Energy:fgui.GTextField;
	public m_EnergyValue:fgui.GTextField;
	public m_Carrier:fgui.GTextField;
	public m_CarrierName:fgui.GTextField;
	public static URL:string = "ui://sn18zihkhb0y2d";
	public static Package:string  = "MainPage";
	public static Component:string  = "DelvieryManCardPanel";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_DelvieryManCardPanel.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_DelvieryManCardPanel {
		var obj = new UI_DelvieryManCardPanel();
		if(component==null){component = UI_DelvieryManCardPanel.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_cFire = component.GetController("cFire");
		this.m_cUpgrade = component.GetController("cUpgrade");
		this.m_BackGround = <fgui.GLoader>component.GetChild("BackGround");
		this.m_Profile = <fgui.GLoader>component.GetChild("Profile");
		this.m_BtnFire =  UI_BtnFire.createInstance(component.GetChild("BtnFire") as fgui.GComponent, WorldContextObject);
		this.m_BtnUpgrade =  UI_BtnUpgrade.createInstance(component.GetChild("BtnUpgrade") as fgui.GComponent, WorldContextObject);
		this.m_Level = <fgui.GTextField>component.GetChild("Level");
		this.m_Bar =  UI_Speed.createInstance(component.GetChild("Bar") as fgui.GComponent, WorldContextObject);
		this.m_Describe = <fgui.GTextField>component.GetChild("Describe");
		this.m_Name = <fgui.GTextField>component.GetChild("Name");
		this.m_Quality = <fgui.GTextField>component.GetChild("Quality");
		this.m_Title = <fgui.GGroup>component.GetChild("Title");
		this.m_working = <fgui.GLoader>component.GetChild("working");
		this.m_RestDesc = <fgui.GTextField>component.GetChild("RestDesc");
		this.m_isRest = <fgui.GGroup>component.GetChild("isRest");
		this.m_Energy = <fgui.GTextField>component.GetChild("Energy");
		this.m_EnergyValue = <fgui.GTextField>component.GetChild("EnergyValue");
		this.m_Carrier = <fgui.GTextField>component.GetChild("Carrier");
		this.m_CarrierName = <fgui.GTextField>component.GetChild("CarrierName");
	}
}