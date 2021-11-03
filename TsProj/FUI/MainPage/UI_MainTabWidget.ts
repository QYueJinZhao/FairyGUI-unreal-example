/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Switch from "./UI_Switch";
import UI_LongDisplayButton from "./UI_LongDisplayButton";
import UI_BtnSwitchHRManagement from "./UI_BtnSwitchHRManagement";
import UI_BtnSwitchCompanyMangement from "./UI_BtnSwitchCompanyMangement";
import UI_BtnSwitchTownMangement from "./UI_BtnSwitchTownMangement";
import UI_DelvieryWindowframe from "./UI_DelvieryWindowframe";
import UI_CompanyRoomManage from "./UI_CompanyRoomManage";
import UI_TownBuildManage from "./UI_TownBuildManage";

import * as fgui from "ue"
export default class UI_MainTabWidget {

	public m_c1:fgui.GController;
	public m_Switch:UI_Switch;
	public m_LongDisplay:UI_LongDisplayButton;
	public m_EventList:fgui.GList;
	public m_BtnEntrance:fgui.GButton;
	public m_group:fgui.GList;
	public m_MainLine:fgui.GButton;
	public m_TransparentMask:fgui.GGraph;
	public m_BtnSwitchHRManagement:UI_BtnSwitchHRManagement;
	public m_BtnSwitchCompanyMangement:UI_BtnSwitchCompanyMangement;
	public m_BtnSwitchTownMangement:UI_BtnSwitchTownMangement;
	public m_DeliveryMenPersonal:UI_DelvieryWindowframe;
	public m_CompanyRoomManage:UI_CompanyRoomManage;
	public m_TownBuildManage:UI_TownBuildManage;
	public m_SyntheticInterface:fgui.GComponent;
	public m_TopNav:fgui.GComponent;
	public m_DynamicOverlay:fgui.GComponent;
	public m_DynamicOn:fgui.GComponent;
	public m_hr_open:fgui.Transition;
	public m_hr_close:fgui.Transition;
	public m_company_open:fgui.Transition;
	public m_town_open:fgui.Transition;
	public m_company_close:fgui.Transition;
	public m_town_close:fgui.Transition;
	public m_t6:fgui.Transition;
	public m_dynamic_hide:fgui.Transition;
	public m_dynamic_display:fgui.Transition;
	public static URL:string = "ui://sn18zihk8w3v0";
	public static Package:string  = "MainPage";
	public static Component:string  = "MainTabWidget";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_MainTabWidget.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_MainTabWidget {
		var obj = new UI_MainTabWidget();
		if(component==null){component = UI_MainTabWidget.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_Switch =  UI_Switch.createInstance(component.GetChild("Switch") as fgui.GComponent, WorldContextObject);
		this.m_LongDisplay =  UI_LongDisplayButton.createInstance(component.GetChild("LongDisplay") as fgui.GComponent, WorldContextObject);
		this.m_EventList = <fgui.GList>component.GetChild("EventList");
		this.m_BtnEntrance = <fgui.GButton>component.GetChild("BtnEntrance");
		this.m_group = <fgui.GList>component.GetChild("group");
		this.m_MainLine = <fgui.GButton>component.GetChild("MainLine");
		this.m_TransparentMask = <fgui.GGraph>component.GetChild("TransparentMask");
		this.m_BtnSwitchHRManagement =  UI_BtnSwitchHRManagement.createInstance(component.GetChild("BtnSwitchHRManagement") as fgui.GComponent, WorldContextObject);
		this.m_BtnSwitchCompanyMangement =  UI_BtnSwitchCompanyMangement.createInstance(component.GetChild("BtnSwitchCompanyMangement") as fgui.GComponent, WorldContextObject);
		this.m_BtnSwitchTownMangement =  UI_BtnSwitchTownMangement.createInstance(component.GetChild("BtnSwitchTownMangement") as fgui.GComponent, WorldContextObject);
		this.m_DeliveryMenPersonal =  UI_DelvieryWindowframe.createInstance(component.GetChild("DeliveryMenPersonal") as fgui.GComponent, WorldContextObject);
		this.m_CompanyRoomManage =  UI_CompanyRoomManage.createInstance(component.GetChild("CompanyRoomManage") as fgui.GComponent, WorldContextObject);
		this.m_TownBuildManage =  UI_TownBuildManage.createInstance(component.GetChild("TownBuildManage") as fgui.GComponent, WorldContextObject);
		this.m_SyntheticInterface = <fgui.GComponent>component.GetChild("SyntheticInterface");
		this.m_TopNav = <fgui.GComponent>component.GetChild("TopNav");
		this.m_DynamicOverlay = <fgui.GComponent>component.GetChild("DynamicOverlay");
		this.m_DynamicOn = <fgui.GComponent>component.GetChild("DynamicOn");
		this.m_hr_open = component.GetTransition("hr_open");
		this.m_hr_close = component.GetTransition("hr_close");
		this.m_company_open = component.GetTransition("company_open");
		this.m_town_open = component.GetTransition("town_open");
		this.m_company_close = component.GetTransition("company_close");
		this.m_town_close = component.GetTransition("town_close");
		this.m_t6 = component.GetTransition("t6");
		this.m_dynamic_hide = component.GetTransition("dynamic_hide");
		this.m_dynamic_display = component.GetTransition("dynamic_display");
	}
}