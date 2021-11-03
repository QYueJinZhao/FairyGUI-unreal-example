/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";
import UI_BtnInternalOperationSelect from "./UI_BtnInternalOperationSelect";
import UI_BtnInternalOperationDefault from "./UI_BtnInternalOperationDefault";
import UI_BtnSocialInfluenceSelect from "./UI_BtnSocialInfluenceSelect";
import UI_BtnSocialInfluenceDefault from "./UI_BtnSocialInfluenceDefault";

import * as fgui from "ue"
export default class UI_CompanyWindowframe {

	public m_c1:fgui.GController;
	public m_BG:fgui.GImage;
	public m_TitmeImage:fgui.GImage;
	public m_Text:fgui.GTextField;
	public m_closeButton:UI_x;
	public m_BtnInternalOperationSelect:UI_BtnInternalOperationSelect;
	public m_BtnInternalOperationDefault:UI_BtnInternalOperationDefault;
	public m_BtnInside:fgui.GGroup;
	public m_BtnSocialInfluenceSelect:UI_BtnSocialInfluenceSelect;
	public m_BtnSocialInfluenceDefault:UI_BtnSocialInfluenceDefault;
	public m_BtnOutside:fgui.GGroup;
	public m_Content:fgui.GList;
	public m_RestContent:fgui.GList;
	public static URL:string = "ui://sn18zihkhb0y1o";
	public static Package:string  = "MainPage";
	public static Component:string  = "CompanyWindowframe";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_CompanyWindowframe.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_CompanyWindowframe {
		var obj = new UI_CompanyWindowframe();
		if(component==null){component = UI_CompanyWindowframe.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_BG = <fgui.GImage>component.GetChild("BG");
		this.m_TitmeImage = <fgui.GImage>component.GetChild("TitmeImage");
		this.m_Text = <fgui.GTextField>component.GetChild("Text");
		this.m_closeButton =  UI_x.createInstance(component.GetChild("closeButton") as fgui.GComponent, WorldContextObject);
		this.m_BtnInternalOperationSelect =  UI_BtnInternalOperationSelect.createInstance(component.GetChild("BtnInternalOperationSelect") as fgui.GComponent, WorldContextObject);
		this.m_BtnInternalOperationDefault =  UI_BtnInternalOperationDefault.createInstance(component.GetChild("BtnInternalOperationDefault") as fgui.GComponent, WorldContextObject);
		this.m_BtnInside = <fgui.GGroup>component.GetChild("BtnInside");
		this.m_BtnSocialInfluenceSelect =  UI_BtnSocialInfluenceSelect.createInstance(component.GetChild("BtnSocialInfluenceSelect") as fgui.GComponent, WorldContextObject);
		this.m_BtnSocialInfluenceDefault =  UI_BtnSocialInfluenceDefault.createInstance(component.GetChild("BtnSocialInfluenceDefault") as fgui.GComponent, WorldContextObject);
		this.m_BtnOutside = <fgui.GGroup>component.GetChild("BtnOutside");
		this.m_Content = <fgui.GList>component.GetChild("Content");
		this.m_RestContent = <fgui.GList>component.GetChild("RestContent");
	}
}