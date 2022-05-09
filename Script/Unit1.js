function ClickCard()
{
if (KeywordTests.GroupOrder.Variables.OrderTable.ColumnName("F1") == 2)
{ 
  Aliases.browser.pageWebOrders2.formAspnetform.radiobuttonAmericanExpress.ClickButton();
}

if (KeywordTests.GroupOrder.Variables.OrderTable.ColumnName("F1") == 1)
{ 
  Aliases.browser.pageWebOrders2.formAspnetform.radiobuttonMastercard.ClickButton();
}

if (KeywordTests.GroupOrder.Variables.OrderTable.ColumnName("F1") == 0)
{ 
  Aliases.browser.pageProcess.formAspnetform.radiobuttonVisa.ClickButton();
}
}
