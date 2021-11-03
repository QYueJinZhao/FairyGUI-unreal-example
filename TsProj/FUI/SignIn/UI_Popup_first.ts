/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";
import UI_Button from "./UI_Button";
import UI_Reward1 from "./UI_Reward1";
import UI_Reward2_first from "./UI_Reward2_first";
import UI_Reward3 from "./UI_Reward3";
import UI_Reward4_first from "./UI_Reward4_first";
import UI_Reward5 from "./UI_Reward5";
import UI_Reward6 from "./UI_Reward6";
import UI_Reward7_first from "./UI_Reward7_first";

import * as fgui from "ue"
export default class UI_Popup_first {

	public m_BG:fgui.GImage;
	public m_closeButton:UI_x;
	public m_TextTitle:fgui.GTextField;
	public m_Button:UI_Button;
	public m_Reward1:UI_Reward1;
	public m_Reward2_first:UI_Reward2_first;
	public m_Reward3:UI_Reward3;
	public m_Reward4_first:UI_Reward4_first;
	public m_Reward5:UI_Reward5;
	public m_Reward6:UI_Reward6;
	public m_Reward7_first:UI_Reward7_first;
	public m_RewardGroup:fgui.GGroup;
	public static URL:string = "ui://h9dczuj8daci4c";
	public static Package:string  = "SignIn";
	public static Component:string  = "Popup_first";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Popup_first.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Popup_first {
		var obj = new UI_Popup_first();
		if(component==null){component = UI_Popup_first.CreateComponent(WorldContextObject);}
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
		this.m_Reward2_first =  UI_Reward2_first.createInstance(component.GetChild("Reward2_first") as fgui.GComponent, WorldContextObject);
		this.m_Reward3 =  UI_Reward3.createInstance(component.GetChild("Reward3") as fgui.GComponent, WorldContextObject);
		this.m_Reward4_first =  UI_Reward4_first.createInstance(component.GetChild("Reward4_first") as fgui.GComponent, WorldContextObject);
		this.m_Reward5 =  UI_Reward5.createInstance(component.GetChild("Reward5") as fgui.GComponent, WorldContextObject);
		this.m_Reward6 =  UI_Reward6.createInstance(component.GetChild("Reward6") as fgui.GComponent, WorldContextObject);
		this.m_Reward7_first =  UI_Reward7_first.createInstance(component.GetChild("Reward7_first") as fgui.GComponent, WorldContextObject);
		this.m_RewardGroup = <fgui.GGroup>component.GetChild("RewardGroup");
	}
}