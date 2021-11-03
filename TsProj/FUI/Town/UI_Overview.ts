/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Overview {

	public m_c1:fgui.GController;
	public m_img1_1:fgui.GImage;
	public m_img2_1:fgui.GImage;
	public m_img3_1:fgui.GImage;
	public m_TextScale1:fgui.GTextField;
	public m_TextInvestmentAdvice1:fgui.GTextField;
	public m_TextInvestmentAmount1:fgui.GTextField;
	public m_Coin1:fgui.GImage;
	public m_TextMoney1:fgui.GTextField;
	public m_Money1:fgui.GGroup;
	public m_TextResult1:fgui.GTextField;
	public static URL:string = "ui://7d8qawjuky5wy";
	public static Package:string  = "Town";
	public static Component:string  = "Overview";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Overview.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Overview {
		var obj = new UI_Overview();
		if(component==null){component = UI_Overview.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_img1_1 = <fgui.GImage>component.GetChild("img1-1");
		this.m_img2_1 = <fgui.GImage>component.GetChild("img2-1");
		this.m_img3_1 = <fgui.GImage>component.GetChild("img3-1");
		this.m_TextScale1 = <fgui.GTextField>component.GetChild("TextScale1");
		this.m_TextInvestmentAdvice1 = <fgui.GTextField>component.GetChild("TextInvestmentAdvice1");
		this.m_TextInvestmentAmount1 = <fgui.GTextField>component.GetChild("TextInvestmentAmount1");
		this.m_Coin1 = <fgui.GImage>component.GetChild("Coin1");
		this.m_TextMoney1 = <fgui.GTextField>component.GetChild("TextMoney1");
		this.m_Money1 = <fgui.GGroup>component.GetChild("Money1");
		this.m_TextResult1 = <fgui.GTextField>component.GetChild("TextResult1");
	}
}