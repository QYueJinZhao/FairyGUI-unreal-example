/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";
import UI_Button from "./UI_Button";
import UI_Reward1 from "./UI_Reward1";
import UI_Reward2 from "./UI_Reward2";
import UI_Reward3 from "./UI_Reward3";
import UI_Reward4 from "./UI_Reward4";
import UI_Reward5 from "./UI_Reward5";
import UI_Reward6 from "./UI_Reward6";
import UI_Reward7 from "./UI_Reward7";

import * as fgui from "ue"
export default class UI_Popup {

	public m_BG:fgui.GImage;
	public m_closeButton:UI_x;
	public m_TextTitle:fgui.GTextField;
	public m_Button:UI_Button;
	public m_Reward1:UI_Reward1;
	public m_Reward2:UI_Reward2;
	public m_Reward3:UI_Reward3;
	public m_Reward4:UI_Reward4;
	public m_Reward5:UI_Reward5;
	public m_Reward6:UI_Reward6;
	public m_Reward7:UI_Reward7;
	public m_RewardGroup:fgui.GGroup;
	public static URL:string = "ui://h9dczuj89xrpk";
	public static Package:string  = "SignIn";
	public static Component:string  = "Popup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Popup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Popup {
		var obj = new UI_Popup();
		if(component==null){component = UI_Popup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BG = <fgui.GImage>component.GetChild("BG");
		this.m_closeButton =  UI_x.createInstance(component.GetChild("closeButton") as fgui.GComponent, WorldContextObject);
		this.m_TextTitle = <fgui.GTextField>component.GetChild("TextTitle");
		this.m_Button =  UI_Button.createInstance(component.GetChild("Button") as fgui.GComponent, WorldContextObject);
		this.m_Reward1 =  UI_Reward1.createInstance(component.GetChild("Reward1") as fgui.GComponent, WorldContextObject);
		this.m_Reward2 =  UI_Reward2.createInstance(component.GetChild("Reward2") as fgui.GComponent, WorldContextObject);
		this.m_Reward3 =  UI_Reward3.createInstance(component.GetChild("Reward3") as fgui.GComponent, WorldContextObject);
		this.m_Reward4 =  UI_Reward4.createInstance(component.GetChild("Reward4") as fgui.GComponent, WorldContextObject);
		this.m_Reward5 =  UI_Reward5.createInstance(component.GetChild("Reward5") as fgui.GComponent, WorldContextObject);
		this.m_Reward6 =  UI_Reward6.createInstance(component.GetChild("Reward6") as fgui.GComponent, WorldContextObject);
		this.m_Reward7 =  UI_Reward7.createInstance(component.GetChild("Reward7") as fgui.GComponent, WorldContextObject);
		this.m_RewardGroup = <fgui.GGroup>component.GetChild("RewardGroup");
	}
}