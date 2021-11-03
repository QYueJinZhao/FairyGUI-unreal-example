/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_LongDisplayButton {

	public m_BtnSignInIcon:fgui.GButton;
	public m_BtnOnlineIcon:fgui.GButton;
	public m_BtnTurntableIcon:fgui.GButton;
	public m_BtnLandmark:fgui.GButton;
	public m_BtnDailyMission:fgui.GButton;
	public static URL:string = "ui://sn18zihk9xrpf";
	public static Package:string  = "MainPage";
	public static Component:string  = "LongDisplayButton";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_LongDisplayButton.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_LongDisplayButton {
		var obj = new UI_LongDisplayButton();
		if(component==null){component = UI_LongDisplayButton.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BtnSignInIcon = <fgui.GButton>component.GetChild("BtnSignInIcon");
		this.m_BtnOnlineIcon = <fgui.GButton>component.GetChild("BtnOnlineIcon");
		this.m_BtnTurntableIcon = <fgui.GButton>component.GetChild("BtnTurntableIcon");
		this.m_BtnLandmark = <fgui.GButton>component.GetChild("BtnLandmark");
		this.m_BtnDailyMission = <fgui.GButton>component.GetChild("BtnDailyMission");
	}
}