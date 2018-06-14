var bankDetails = {"American Express":[{"name":"Platinum Travel CreditCard","spendAmount":"2"},{"name":"Membership Rewards CreditCard","spendAmount":"2"},{"name":"JetAirways AmericanExpress Platinum CreditCard"},{"name":"Platinum Reserve CreditCard"},{"name":"GoldCard"},{"name":"MakeMyTrip CreditCard"},{"name":"American Express  Platinum Travel Credit Card"},{"name":"American Express Platinum Card"}],"IndusInd":[{"name":"Jet Airways IndusInd Voyage Visa Card"},{"name":"Indus IndBank Platinum Card"},{"name":"IndusInd Bank Signature Card"},{"name":"JetAirways IndusInd Bank Voyage American Express Card"},{"name":"Platinum Aura Edge Master Card"},{"name":"Chelsea FC Card"},{"name":"IndusInd Bank Legend Credit Card"}],"State Bank of India":[{"name":"SBI Simply Save Card"},{"name":"SBI Simply Click Card"},{"name":"Yatra SBI Card"},{"name":"IRCTC SBI Platinum Card"},{"name":"SBI Platinum Card"},{"name":"SBI Card ELITE"},{"name":"Mumbai Metro SBI Card"},{"name":"SBI Card Unnati"},{"name":"TATA STAR Platinum Card"},{"name":"Tata Platinum Card"},{"name":"TATA STAR Titanium Card"}],"HDFC":[{"name":"Diners Club Black Card"},{"name":"Regalia Card"},{"name":"Titanium Times Card"},{"name":"Money Back Card"},{"name":"Platinum Times Card"},{"name":"SnapDeal HDFC Bank Card"},{"name":"Teachers Platinum"},{"name":"Solitaire"},{"name":"Platinum Plus"}],"AXIS":[{"name":"Axis Bank Privilage CreditCard"},{"name":"Miles And More World Creditcard"},{"name":"Vistara Signature CreditCard"},{"name":"MyZone CreditCard"},{"name":"Vistara Creditcard"},{"name":"Neo Creditcard"},{"name":"Axis Bank SELECT Credit Card"},{"name":"Axis Bank Vistara Infinite Credit Card"},{"name":"Pride Platinum Credit Card"},{"name":"Pride Signature Credit Card"},{"name":"My Wings Credit Card"},{"name":"My Choice Credit Card"},{"name":"Titanium Smart Traveler Credit Card"}],"CITI":[{"name":"Rewards Card"},{"name":"Indianoil CITI Platinum Card"},{"name":"CITI Premier Miles Card"}],"Standard Chartered":[{"name":"Emirates Standard Chartered World CreditCard"},{"name":"Standard Chartered Manhattan Platinum Creditcard"},{"name":"Standard Chartered Super Value Titanium Creditcard"},{"name":"Standard Chartered Ultimate Card"},{"name":"Standard Chartered Platinum Rewards"},{"name":"Standard Chartered Priority Visa Infinite"}],"HSBC":[{"name":"HSBC Visa Platinum Card"},{"name":"HSBC Gold credit card"},{"name":"HSBC Classic Credit card"},{"name":"HSBC Premier credit card"}],"ICICI":[{"name":"Platinum Chip Creditcard"},{"name":"Instant Platinum Creditcard"}],"RBL":[{"name":"RBL Bank Platinum Maxima Card"},{"name":"RBL Bank Titanium Delight Card"},{"name":"RBL Bank Platinum Delight Card"},{"name":"RBL Bank Classic Reward Cards"},{"name":"RBL Bank Classic Shopper Cards"},{"name":"RBL Bank Classic Platinum Card"},{"name":"RBL Bank Icon Card"},{"name":"RBL Bank Blockbuster Credit Card"},{"name":"RBL Bank Movies & More Credit Card"},{"name":"RBL Bank Crossword Black Credit Card"},{"name":"RBl Bank HyperCITY Rewards Credit Card"},{"name":"RBL Bank Crossword Rewards Credit Card"},{"name":"RBL Bank MoneyTap Card"},{"name":"RBL Bank MoneyTap Black Card"},{"name":"RBL Bank Platinum Edge SuperCard"},{"name":"RBL Bank Platinum Prime SuperCard"},{"name":"RBL Bank Platinum Max SuperCard"},{"name":"RBL Bank Platinum Classic SuperCard"},{"name":"RBL Bank World Prime SuperCard"},{"name":"RBL Bank World Max SuperCard"},{"name":"RBL Bank Crownit Credit Card"},{"name":"RBL Bank India Startup Club Platinum Credit Card"},{"name":"RBL Bank India Startup World Credit Card"},{"name":"RBL Bank IGU NHS Golf World Card"},{"name":"RBL Bank Fun Credit Card"}]};

var bankNames = Object.keys(bankDetails);
window.onload = function(){
	var bankSelectionEl = document.getElementById("bankname");
	for(var bankIndex in bankNames){
		bankSelectionEl.options[bankSelectionEl.options.length] = new Option(bankNames[bankIndex], bankNames[bankIndex]);
	}	
};

function bankChanged(selectedBankName){
	var cardList = bankDetails[selectedBankName];
	var cardSelectionEl = document.getElementById("cardname");
	cardSelectionEl.options.length = 1;
	for(var cardIndex in cardList){
		cardSelectionEl.options[cardSelectionEl.options.length] = new Option(cardList[cardIndex].name, cardList[cardIndex].name);
	}	
}

var cardData = {};

var view_benefits = function() {
	if(!document.getElementById("benefits_form").checkValidity()){
		return false;
	} else{
		switch(document.getElementById("cardname").value) {
			case 'Platinum Travel CreditCard' :
			cardData.description = "Earn 1 Membership Rewards Point for every Rs. 50 spent except for expenses made on fuel, insurance, utilities and cash transactions.";
			cardData.points = 2;
			cardData.value = 100;
			cardData.card_class = 'bg-amex_Platinum_Travel_Credit_Card';
			cardData.card_link = 'https://www.americanexpress.com/in/content/all-cards/#in#american-express-platinum-reservesm-credit-card';
			break;
		case 'Membership Rewards CreditCard' :
		cardData.description = "Earn 1 Membership Rewards Point for every1 Rs. 50 spent except for expenses made on  Fuel, Insurance, Utilities and Cash Transactions";
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-amex_Membership_Rewards_Credit_Card';
		cardData.card_link = 'https://www.americanexpress.com/in/content/all-cards/?cpid=100287151&veid=sGJK3y5w1|dc_pcrid_238060901659_plid__kword_american%20express%20credit%20card%20offers_match_e_pgrid_36889535649_ptaid_kwd-372309327_slid_&siteid=googleppc&adunit=238060901659&campaign=American+Express_Offers&adgroup=American+Express_Offer_E&keyword=american%20express%20credit%20card%20offers_e&marketingagency=AEXPSearch_#in#american-express-membership-rewards-credit-card';
		break;

		case 'American Express  Platinum Travel Credit Card' :
		cardData.description = "Earn 1 Membership Rewards Point for every1 Rs. 50 spent except for expenses made on Fuel, Insurance, Utilities and Cash Transactions";
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-amex_Platinum_Travel';
		cardData.card_link = 'https://www.americanexpress.com/in/content/all-cards/?cpid=100287151&veid=sGJK3y5w1|dc_pcrid_238060901659_plid__kword_american%20express%20credit%20card%20offers_match_e_pgrid_36889535649_ptaid_kwd-372309327_slid_&siteid=googleppc&adunit=238060901659&campaign=American+Express_Offers&adgroup=American+Express_Offer_E&keyword=american%20express%20credit%20card%20offers_e&marketingagency=AEXPSearch_#in#american-express-platinum-travel-credit-card';
		break;

		case 'JetAirways AmericanExpress Platinum CreditCard' :
		cardData.description = "16 JPMiles/ 150 spent on Jet Airways8 JPMiles/ 150 spent on others3% cashback on fuel";
		cardData.points = 8;
		cardData.value = 150;
		cardData.card_class = 'bg-amex_Jet_Airways_American_Express_Platinum_Credit_Card';
		cardData.card_link = 'https://www.americanexpress.com/in/content/all-cards/?cpid=100287151&veid=sGJK3y5w1|dc_pcrid_238060901659_plid__kword_american%20express%20credit%20card%20offers_match_e_pgrid_36889535649_ptaid_kwd-372309327_slid_&siteid=googleppc&adunit=238060901659&campaign=American+Express_Offers&adgroup=American+Express_Offer_E&keyword=american%20express%20credit%20card%20offers_e&marketingagency=AEXPSearch_#in#jet-airways-american-express-platinum-credit-card';
		break;

		case 'Platinum Reserve CreditCard' :
		cardData.description = 'Upto 10,000 cashback on travel 1 MR point/ 50 spent 3% cashback on fuel';
		cardData.points = 1;
		cardData.value = 50;
		cardData.card_class = 'bg-amex_Platinum_Reserve_Credit_Card';
		cardData.card_link = 'http://www.americanexpressindia.co.in/credit-card-single-form/platinum-reserve-credit-card.aspx';
		break;

		case 'American Express Platinum Card' :
		cardData.description = '1 Membership Rewards Point1 for every Rs. 40 spent except for spend at Fuel, Utilities, Insurance and Cash Transactions.';
		cardData.points = 2.5;
		cardData.value = 50;
		cardData.card_class = 'bg-amex_Jet_Airways_American_Express_Platinum';
		cardData.card_link = 'https://www.americanexpress.com/in/content/all-cards/?cpid=100287151&veid=sGJK3y5w1|dc_pcrid_238060901659_plid__kword_american%20express%20credit%20card%20offers_match_e_pgrid_36889535649_ptaid_kwd-372309327_slid_&siteid=googleppc&adunit=238060901659&campaign=American+Express_Offers&adgroup=American+Express_Offer_E&keyword=american%20express%20credit%20card%20offers_e&marketingagency=AEXPSearch_#in#american-express-platinum-card';
		break;

		case 'GoldCard' :
		cardData.description = 'Earn 1 Membership Rewards Point for every1 Rs. 50 spent except for spend at Fuel, Insurance, Utilities and Cash Transactions';
		cardData.points = 1;
		cardData.value = 50;
		cardData.card_class = 'bg-amex_gold_card';
		cardData.card_link = 'https://www.americanexpress.com/in/content/all-cards/?cpid=100287151&veid=sGJK3y5w1|dc_pcrid_238060901659_plid__kword_american%20express%20credit%20card%20offers_match_e_pgrid_36889535649_ptaid_kwd-372309327_slid_&siteid=googleppc&adunit=238060901659&campaign=American+Express_Offers&adgroup=American+Express_Offer_E&keyword=american%20express%20credit%20card%20offers_e&marketingagency=AEXPSearch_#in#american-express-gold-card';
		break;

		case 'MakeMyTrip CreditCard' :
		cardData.description = '5% cashback on travel Up to 5 Payback points/ 100 spent on travel 2 Payback points/ 100 spent on others 3% cashback on fuel 70% cashback on hotel bookings';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-amex_MakeMyTrip_Credit_Card';
		cardData.card_link = 'http://www.americanexpressindia.co.in/credit-card-single-form/makemytrip-credit-card.aspx';
		break;

		case 'Jet Airways IndusInd Voyage Visa Card' :
		cardData.description = '3 points/ 100 spent during weekends 2 points/ 100 on all spends during weekdays 12 points/ 100 spent on Jet Airways during weekend 6 points/ 100 spent on others during weekend 1000 JPMiles on 1st transaction';
		cardData.points = 3;
		cardData.value = 100;
		cardData.card_class = 'bg-Jet_Airways_IndusInd__Bank_Voyage_Card';
		cardData.card_link = 'http://www.indusind.com/personal-banking/products/cards/credit-cards/jet-airways-indusInd-bank-voyage-credit-card.html';
		break;

		case 'Indus IndBank Platinum Card' :
		cardData.description = 'For every Rs. 150 spent on your IndusInd Bank Platinum Credit Card, you get 1.5 Reward Points.';
		cardData.points = 1;
		cardData.value = 150;
		cardData.card_class = 'bg-indusind_platinum_card';
		cardData.card_link = 'http://www.indusind.com/personal-banking/products/cards/credit-cards/platinum-credit-card.html';
		break;

		case 'IndusInd Bank Signature Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'For every Rs.100 spent on your IndusInd Bank Signature Credit Card, you get 1.5 Reward Points';
		cardData.points = 1.5;
		cardData.value = 100;
		cardData.card_class = 'bg-indusind_visa_signature_card';
		cardData.card_link = 'http://www.indusind.com/personal-banking/products/cards/credit-cards/signature-credit-card.html';
		console.log("IndusIndBankSignatureCard");
		break;

		case 'JetAirways IndusInd Bank Voyage American Express Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '6 points/ 100 spent on Jet Airways 3 points/ 100 spent on others 12 points/ 100 spent on Jet Airways during weekend 6 points/ 100 spent on others during weekend 1000 JPMiles on 1st transaction';
		cardData.points = 3;
		cardData.value = 100;
		cardData.card_class = 'bg-Jet_Airways_IndusInd__Bank_Voyage_Card';
		cardData.card_link = 'http://www.indusind.com/personal-banking/products/cards/credit-cards/jet-airways-indusInd-bank-voyage-credit-card.html';
		console.log("JetAirwaysIndusIndBankVoyageAmericanExpressCard");
		break;

		case 'Platinum Aura Edge Master Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'The Platinum Aura Edge Shop Plan manages your finances better and helps you save. Each time you spend IndusInd Bank Platinum Aura Edge Credit Card you earn savings points 0.5 savings points';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-indusind_platinum_aura_master__card';
		cardData.card_link = 'http://www.indusind.com/personal-banking/products/cards/credit-cards/platinum-aura-edge.html';
		console.log("PlatinumAuraEdgeMasterCard");
		break;

		case 'IndusInd Bank Legend Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'The Rewards program on your IndusInd Bank Legend Credit Card is designed for simplicity. The IndusInd Bank Legend Credit Card allows you to earn rewards faster and gives you two simple options to redeem them as per your convenience For Weekday spends INR 100 spent= 1 reward point For Weekend spends INR 100 spent= 2 rewardpoints';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-indus_Legend';
		cardData.card_link = 'https://www.indusind.com/content/home/personal-banking/products/cards/credit-cards/signature-legend.html';
		//console.log("ChelseaFCCard");
		break;

		case 'Chelsea FC Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 1 Reward Point on every Rs 100 spent on your Credit Card.In addition to the above, you can customize your plan and earn incremental Reward Points basis your spending pattern and the value of the transactions.';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-Chelsea_FC_Card';
		cardData.card_link = 'http://www.indusind.com/personal-banking/products/cards/credit-cards/chelsea-credit-card.html';
		//console.log("ChelseaFCCard");
		break;

		case 'SBI Simply Save Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'On all your other spends, earn 1 Reward Point per Rs 100 spent';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-SBI_simplysave_advantage_card';
		cardData.card_link = 'http://www.sbicard.com/en/personal/credit-cards/shopping/simplysave-sbi-card.page';
		console.log("SBISimplySaveCard");
		break;

		case 'SBI Simply Click Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'On all your other spends, earn 1 Reward Point per Rs 100 spent. e-voucher worth Rs.2,000 on annual online spends of Rs.1 Lakh e-voucher worth Rs.2,000 on annual online spends of Rs.2 Lakhs';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-SBI_Simplyclick_credit_card';
		cardData.card_link = 'https://www.sbicard.com/en/personal/credit-cards/shopping/simplyclick-sbi-card.page';
		console.log("SBISimplyClickCard");
		break;

		case 'Yatra SBI Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '1 point/ 100 spent excluding grocery and departmental expenses ';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-sbi_yatra_card_review';
		cardData.card_link = 'http://www.sbicard.com/en/personal/credit-cards/travel/yatra-sbi-card.page';
		console.log("YatraSBICard");
		break;

		case 'IRCTC SBI Platinum Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '350 points/ 500 spent within 45 days of card issuance 1 points/ 125 spent on all other spends';
		cardData.points = 1;
		cardData.value = 150;
		cardData.card_class = 'bg-SBI_irctc_platinum_card';
		cardData.card_link = 'http://www.sbicard.com/en/personal/credit-cards/travel/irctc-sbi-platinum-card.page';
		console.log("IRCTCSBIPlatinumCard");
		break;


		case 'SBI Platinum Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '10 points/ 100 spent on Dining, Departmental Store & International Spends 2 points/ 100 spent on others Free One Way Domestic Air Ticket or Apparel Vouchers worth 3,000';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-SBI_Platinum_Credit_Card';
		cardData.card_link = 'http://www.sbicard.com/en/personal/credit-cards/rewards/sbi-platinum-card.page';
		console.log("SBIPlatinumCard");
		break;

		case 'SBI Card ELITE' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '10 points/ 100 spent on dining, grocery, departmental and international spends 2 points/ 100 spent on others 2 Free movie tickets every month';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-SBI_elite_thumb_card';
		cardData.card_link = 'https://www.sbicard.com/en/personal/credit-cards/shopping/sbi-card-unnati.page';
		console.log("SBICardELITE");
		break;

		case 'SBI Card Unnati' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'SBI Card Unnati is free for first 4 years. Get 1 Reward Point per Rs 100 spent. 500 cashback on spends of Rs 50,000 or more in a year';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-sbi_unati';
		cardData.card_link = 'http://www.sbicard.com/en/personal/credit-cards/lifestyle/sbi-card-elite.page';
		console.log("SBICardELITE");
		break;

		case 'TATA STAR Platinum Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '1 Reward Point per Rs. 100 spent on other retail spends. STAR e- Gift Vouchers worth Rs. 3,000 on spends of Rs. 4 lakhs and Rs. 5 lakhs each The e- Gift Voucher code will be sent to your registered mobile number in 7 working days of receipt of request on a best effort basis';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-sbi_tata_star_platinum';
		cardData.card_link = 'https://www.tatacard.com/tata-en/personal/credit-cards/premium-cards/tata-star-platinum-card.page';
		console.log("SBICardELITE");
		break;

		case 'Tata Platinum Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Get spend rewards on annual spending of Rs. 4 lakhs and 5 lakhs, each';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-sbi_Tata_platinum';
		cardData.card_link = 'https://www.tatacard.com/tata-en/personal/credit-cards/premium-cards/tata-platinum-card.page';
		//console.log("SBICardELITE");
		break;

		case 'TATA STAR Titanium Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '1 Reward Point per Rs. 100 spent on other retail spends. Spend based fees reversal on spends of Rs. 90,000 & above annually';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-sbi_tata_star_titanium';
		cardData.card_link = 'https://www.tatacard.com/tata-en/personal/credit-cards/classic-cards/tata-star-titanium-card.page';
		//console.log("SBICardELITE");
		break;

		case 'Mumbai Metro SBI Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2000 points/ 2000 spent within first 60days 10 points/ 100 spent on groceries and departmental stores';
		cardData.points = 2000;
		cardData.value = 2000;
		cardData.card_class = 'bg-SBI_mumbai_metro_cardface';
		cardData.card_link = 'http://www.sbicard.com/en/personal/credit-cards/travel/mumbai-metro-card.page';
		console.log("MumbaiMetroSBICard");
		break;

		case 'Diners Club Black Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '20 points/ 200 spent on select retail and online partners 5 points/ 150 spent on all other spends';
		cardData.points = 5;
		cardData.value = 150;
		cardData.card_class = 'bg-HDFC_BANK_DinersClub_black_card';
		cardData.card_link = 'http://hdfcbankdinersclub.com/diners-club-black';
		console.log("DinersClubBlackCard");
		break;

		case 'Regalia Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '4 Reward Points for every Rs. 150 spent';
		cardData.points = 4;
		cardData.value = 150;
		cardData.card_class = 'bg-Regalia_HDFC_first_card';
		cardData.card_link = 'https://www.hdfcbank.com/personal/credit_card/business-regalia?_ga=2.72509459.180176303.1514889634-1102570055.1514889634';
		console.log("RegaliaCard");
		break;

		case 'Titanium Times Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '5 points/ 150 spent on dining during weekdays 2 points/ 150 on all other spends';
		cardData.points = 2;
		cardData.value = 150;
		cardData.card_class = 'bg-HDFC_Titanium_Edge_Credit_Card';
		cardData.card_link = 'http://www.hdfcbank.com/personal/credit_card/titanium-times-card';
		console.log("TitaniumTimesCard");
		break;

		case 'Money Back Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2 Reward Points for Rs 150 on other expenses. Renewal fee reversal, if you spend more than Rs. 50,000 in a year prior to renewal date';
		cardData.points = 2;
		cardData.value = 150;
		cardData.card_class = 'bg-HDFC_money_back_card';
		cardData.card_link = 'https://www.hdfcbank.com/personal/credit_card/business-moneyback?_ga=2.72509459.180176303.1514889634-1102570055.1514889634';
		console.log("MoneyBackCard");
		break;

		case 'Platinum Times Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '10 points/ 150 spent on dining during weekdays 3 points/ 150 on all other spends';
		cardData.points = 3;
		cardData.value = 150;
		cardData.card_class = 'bg-HDFC_Visa_PlatinumPlus_Card';
		cardData.card_link = 'http://www.hdfcbank.com/personal/credit_card/platinum-times-card';
		console.log("PlatinumTimesCard");
		break;

		case 'SnapDeal HDFC Bank Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '10X Reward Points (20 RP) per 150 on at snapdeal website 2 Reward Points per 150 spent';
		cardData.points = 2;
		cardData.value = 150;
		cardData.card_class = 'bg-HDFC_bank_snapdeal_card';
		cardData.card_link = 'http://www.hdfcbank.com/personal/credit_card/snapdeal-hdfc-bank';
		console.log("SnapDealHDFCBankCard");
		break;

		case 'Platinum Plus' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2 Reward Points on Rs. 150 spent.';
		cardData.points = 2;
		cardData.value = 150;
		cardData.card_class = 'bg-hdfc_Platinum_Plus';
		cardData.card_link = 'https://www.hdfcbank.com/personal/credit_card/platinum-plus';
		console.log("SnapDealHDFCBankCard");
		break;

		case 'Solitaire' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '3 Reward Points on Rs. 150 spent.';
		cardData.points = 3;
		cardData.value = 150;
		cardData.card_class = 'bg-hdfc_Solitaire';
		cardData.card_link = 'https://www.hdfcbank.com/personal/credit_card/solitaire';
		console.log("SnapDealHDFCBankCard");
		break;

		case 'Teachers Platinum' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2 Reward Points on Rs. 150 spent.';
		cardData.points = 2;
		cardData.value = 150;
		cardData.card_class = 'bg-hdfc_teachers_platinum';
		cardData.card_link = 'https://www.hdfcbank.com/personal/credit_card/teachers-platinum';
		console.log("SnapDealHDFCBankCard");
		break;

		case 'Axis Bank Privilage CreditCard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '10 points/200 spent on both domestic and international spends';
		cardData.points = 10;
		cardData.value = 200;
		cardData.card_class = 'bg-Axis_Bank_Privilege_Credit_Card_Review';
		cardData.card_link = 'http://www.axisbank.com/retail/cards/credit-card/privilege-credit-card-with-unlimited-travel-benefits-account';
		console.log("AxisBankPrivilageCreditCard");
		break;

		case 'Miles And More World Creditcard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '20 points/200 spent ov movie spends at PVR 4 points/200 spent on eligible spends';
		cardData.points = 4;
		cardData.value = 200;
		cardData.card_class = 'bg-AXIS_miles_more_world_credit_card';
		cardData.card_link = 'http://www.axisbank.com/retail/cards/credit-card/miles-more-credit-card';
		console.log("MilesAndMoreWorldCreditcard");
		break;

		case 'Vistara Signature CreditCard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 4 CV Points* for every INR 200 spent on the Axis Bank Vistara Signature Credit Card';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-axis_vistara_signature_credit_card';
		cardData.card_link = 'https://www.axisbank.com/retail/cards/credit-card/axis-bank-vistara-signature-credit-card';
		console.log("VistaraSignatureCreditCard");
		break;

		case 'MyZone CreditCard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'eDGE Loyalty Rewards points for transactions and 500+ rewards and offers to redeem points. Earn points for these transactions:4-40 points with every Rs. 200 spent through the credit card';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-axis_MY_Zone__Credit__Card';
		cardData.card_link = 'https://www.axisbank.com/retail/cards/credit-card/my-zone-credit-card';
		console.log("MyZoneCreditCard");
		break;

		case 'Vistara Creditcard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2 points/ 200 spent';
		cardData.points = 2;
		cardData.value = 200;
		cardData.card_class = 'bg-axis_vistara_credit_card';
		cardData.card_link = 'http://www.axisbank.com/retail/cards/credit-card/axis-bank-vistara-credit-card';
		console.log("VistaraCreditcard");
		break;

		case 'Neo Creditcard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2 points on every Rs. 200 spent on the credit card';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-axis_neo_credit_card';
		cardData.card_link = 'https://www.axisbank.com/retail/cards/credit-card/neo-credit-card';
		console.log("NeoCreditcard");
		break;

		case 'Rewards Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn Reward Points at rate of 1 point for every Rs125 on all purchases except apparel and department stores.';
		cardData.points = 0.8;
		cardData.value = 100;
		cardData.card_class = 'bg-citibank_rewards_card';
		cardData.card_link = 'http://www.online.citibank.co.in/portal/newgen/cards/rewards/citi-rewards-card.htm?eOfferCode=INCCCCBWAFCTRECA';
		console.log("RewardsCard");
		break;

		case 'Axis Bank SELECT Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 10 Axis eDGE reward points on every Rs. 200 spends.';
		cardData.points = 10;
		cardData.value = 200;
		cardData.card_class = 'bg-axis_select';
		cardData.card_link = 'https://www.axisbank.com/retail/cards/credit-card/axis-bank-select-credit-card';
		console.log("RewardsCard");
		break;

		case 'Axis Bank Vistara Infinite Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '3 points on every Rs. 100 spent on the credit card';
		cardData.points = 3;
		cardData.value = 100;
		cardData.card_class = 'bg-axis_Vistara_Infinite';
		cardData.card_link = 'https://www.axisbank.com/retail/cards/credit-card/axis-bank-vistara-infinite-credit-card';
		console.log("RewardsCard");
		break;

		case 'Pride Platinum Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2 points on every Rs. 200 spent on the credit card 100 bonus eDGE points every month';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-axis_pride_platinum';
		cardData.card_link = 'https://www.axisbank.com/retail/cards/credit-card/pride-platinum-credit-card';
		console.log("RewardsCard");
		break;

		case 'My Wings Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '4 points on every Rs. 200 spent on the credit card';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-axis_My_Wings';
		cardData.card_link = 'https://www.axisbank.com/retail/cards/credit-card/my-wings-credit-card';
		console.log("RewardsCard");
		break;

		case 'My Choice Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '4 points on every Rs. 200 spent on the credit card';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-axis_My_Choice';
		cardData.card_link = 'https://www.axisbank.com/retail/cards/credit-card/my-choice-credit-card';
		console.log("RewardsCard");
		break;

		case 'Titanium Smart Traveler Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2 points on every Rs. 200 spent on the credit card in India';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-axis_titanium_Smart_Traveler';
		cardData.card_link = 'https://www.axisbank.com/retail/cards/credit-card/titanium-smart-traveler-credit-card';
		console.log("RewardsCard");
		break;

		case 'Pride Signature Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '8 points for every Rs. 200 spent through your credit card 100 bonus eDGE points every month';
		cardData.points = 4;
		cardData.value = 100;
		cardData.card_class = 'bg-axis_Pride_Signature';
		cardData.card_link = 'https://www.axisbank.com/retail/cards/credit-card/pride-signature-credit-card';
		console.log("RewardsCard");
		break;

		case 'Indianoil CITI Platinum Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '4 points/150 spent at select e-stores and fuel 2 points/150 spent on grocery and supermarkets 1 point/ 150 spent on others 0.75% cashback on fuel purchases';
		cardData.points = 1;
		cardData.value = 150;
		cardData.card_class = 'bg-City_bank_IndianOil_Platinum_Credit_Card_review';
		cardData.card_link = 'http://www.online.citibank.co.in/portal/newgen/cards/tab/indianoil-platinumcard.htm?eOfferCode=INCCCCBWAFCTIOCP';
		console.log("IndianoilCITIPlatinumCard");
		break;

		case 'CITI Premier Miles Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '10 points/100 spent on airlines 4 points/100 spent on others 0.75% cashback on fuel purchases';
		cardData.points = 4;
		cardData.value = 100;
		cardData.card_class = 'bg-City_bank_premium_miles_card';
		cardData.card_link = 'http://www.online.citibank.co.in/portal/newgen/cards/tab/citi-premiermiles-card.htm?eOfferCode=INCCCCBWAFCTCPMC';
		console.log("CITIPremierMilesCard");
		break;

		case 'Emirates Standard Chartered World CreditCard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '6 Skywards Miles for INR 150 on international spends 4 Skywards Miles for INR 150 on domestic spends 5% cash back at duty free stores 20% cash back on all Uber rides upto a max of Rs.600 per month till 30th Sept,2017';
		cardData.points = 4;
		cardData.value = 150;
		cardData.card_class = 'bg-scb_estimated_platinum_v';
		cardData.card_link = 'http://www.sc.com/in/credit-cards/emirates-world/';
		console.log("EmiratesStandardCharteredWorldCreditCard");
		break;

		case 'Standard Chartered Manhattan Platinum Creditcard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Get 3x rewards when you use your credit card for all other expenses except supermarkets & department stores.';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-scb_mfc_card_logo1';
		cardData.card_link = 'http://www.sc.com/in/credit-cards/manhattan-platinum.html';
		console.log("StandardCharteredManhattenPlatinumCreditcard");
		break;

		case 'Standard Chartered Super Value Titanium Creditcard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Get 1 reward point for every INR 150 when you use your credit card for all other expenses except fuel, telephone & utility bills.';
		cardData.points = 1;
		cardData.value = 150;
		cardData.card_class = 'bg-scb_svt_credit_card';
		cardData.card_link = 'http://www.sc.com/in/credit-cards/super-value-titanium.html';
		console.log("StandardCharteredSuperValueTitaniumCreditcard");
		break;

		case 'Standard Chartered Ultimate Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 5 reward points on every INR 150 spent and get maximum benefit with 1 reward point equal to Re 1';
		cardData.points = 5;
		cardData.value = 150
		cardData.card_class = 'bg-Standard_Chartered_Ultimate_Card';
		cardData.card_link = 'https://www.sc.com/in/credit-cards/ultimate-card/';
		console.log("StandardCharteredSuperValueTitaniumCreditcard");
		break;

		case 'Standard Chartered Platinum Rewards' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 1 reward point for every INR 150 spent on all other categories except dining & fuel.';
		cardData.points = 1;
		cardData.value = 150
		cardData.card_class = 'bg-Standard_Chartered_Platinum_Rewards';
		cardData.card_link = 'https://www.sc.com/in/credit-cards/platinum-rewards/';
		//console.log("StandardCharteredSuperValueTitaniumCreditcard");
		break;

		case 'Standard Chartered Priority Visa Infinite' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 2x reward points for all other spends except overseas & retail fashion.';
		cardData.points = 1.33;
		cardData.value = 100
		cardData.card_class = 'bg-Standard_Chartered_Priority_Visa_Infinite';
		cardData.card_link = 'https://www.sc.com/in/credit-cards/priority-banking-visa-infinite/';
		//console.log("StandardCharteredSuperValueTitaniumCreditcard");
		break;

		case 'HSBC Visa Platinum Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Get 2 points per Rs. 150 spent.';
		cardData.points = 2;
		cardData.value = 150;
		cardData.card_class = 'bg-hsbc_visa_platinum';
		cardData.card_link = 'http://www.hsbc.co.in/1/2/personal/credit-cards/platinum-credit-card';
		console.log("HSBCVisaPlatinumCard");
		break;

		case 'HSBC Gold credit card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'HSBC Gold cardholders will earn 1 Reward point for every purchase of Rs. 100';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-HSBC_Gold_credit_card';
		cardData.card_link = 'https://www.hsbc.co.in/1/2/personal/credit-cards/rewards-programme';
		//console.log("HSBCVisaPlatinumCard");
		break;

		case 'HSBC Classic Credit card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'HSBC Classic cardholders will earn 1 Reward point for every purchase of Rs. 250.';
		cardData.points = 1;
		cardData.value = 250;
		cardData.card_class = 'bg-HSBC_Classic_Credit_card';
		cardData.card_link = 'https://www.hsbc.co.in/1/2/personal/credit-cards/rewards-programme';
		//console.log("HSBCVisaPlatinumCard");
		break;

		case 'HSBC Premier credit card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'HSBC Premier credit cardholders will earn 2 Reward points for every purchase of Rs. 100';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-HSBC_Premier';
		cardData.card_link = 'https://www.hsbc.co.in/1/2/personal/credit-cards/rewards-programme';
		//console.log("HSBCVisaPlatinumCard");
		break;

		case 'Platinum Chip Creditcard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 2 PAYBACK points on every Rs.100 spent except dining & petrol pumps.';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-icici_platinum_chip_card'; 
		cardData.card_link = 'https://www.icicibank.com/card/credit-cards/credit-card.page?';
		console.log("PlatinumChipCreditcard");
		break;

		case 'Instant Platinum Creditcard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2 PAYBACK Points per ₹ 100 points. ₹ 100 discount on up to 2 movie tickets per month Minimum 15% savings on dining';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-instanPlatinum_ICICI_bank';
		cardData.card_link = 'http://www.icicibank.com/Personal-Banking/cards/Consumer-Cards/Credit-Card/Platinum-credit-key-privileges.page?';
		console.log("InstantPlatinumCreditcard");
		break;

		case 'RBL Bank Platinum Maxima Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2 Reward points / Rs. 100 spent on all your purchases.10 Reward Points / Rs. 100 on dining, entertainment, Utility Bills, Fuel and all International purchases';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Platinum_Maxima_Card';
		cardData.card_link = 'https://www.rblbank.com/category/Credit-Cards';
		break;

		case 'RBL Bank Titanium Delight Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'You earn 1 reward point for every Rs. 100 spent on all your purchases like travel, groceries, dining and even your electricity bill';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Titanium_Delight_Card';
		cardData.card_link = 'https://www.rblbank.com/category/Credit-Cards';
		break;

		case 'RBL Bank Platinum Delight Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2 Reward points / Rs. 100 spent on Weekdays.  4 Reward points/ Rs. 100 spent on weekends';
		cardData.points = 4;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Platinum_Delight_Card';
		cardData.card_link = 'https://www.rblbank.com/category/Credit-Cards';
		break;

		case 'RBL Bank Classic Reward Cards' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 4 reward points for every Rs.100 spent in India. Earn 8 reward points for every  Rs.100 spent Internationally.';
		cardData.points = 4;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Classic_Reward_Cards';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/classic-reward-cards';
		break;

		case 'RBL Bank Classic Shopper Cards' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 2 reward points for every Rs.100 you spend on your card in India and abroad';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Classic_Shopper_Cards';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/classic-shopper-cards';
		break;

		case 'RBL Bank Classic Platinum Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 2 reward points for every Rs.100 spent in India. Earn 4 reward points for every Rs.100 spent Internationally';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Classic_Platinum_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/classic-platinum-card';
		break;

		case 'RBL Bank Classic Platinum Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 2 reward points for every Rs.100 spent in India. Earn 4 reward points for every Rs.100 spent Internationally';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Classic_Platinum_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/classic-platinum-card';
		break;

		case 'RBL Bank Icon Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2 Reward Points for every Rs.100 spent. 20 Reward Points for every Rs.100 spent on international and dining spends on weekends*';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Icon_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/rbl-bank-icon-card';
		break;

		case 'RBL Bank Blockbuster Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2 Reward Points per Rs. 100 spent on anything except fuel';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Blockbuster_Credit_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/blockbuster-credit-card';
		break;

		case 'RBL Bank Movies & More Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 1 reward point/ Rs.100 on all your other purchases except fuel';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Movies_and_More_Credit_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/movies-and-more-card';
		break;

		case 'RBL Bank Crossword Black Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 1 Reward Point on every Rs. 100 spent anywhere else except Crossword store';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Crossword_Black_Credit_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/crossword-black-credit-card';
		break;

		case 'RBl Bank HyperCITY Rewards Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '*5 Reward Points on every Rs.100 spent using your RBL Bank HyperCITY Rewards Credit Card.';
		cardData.points = 5;
		cardData.value = 100;
		cardData.card_class = 'bg-RBl_Bank_HyperCITY_Rewards_Credit_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/hypercity-rewards-credit-card';
		break;

		case 'RBL Bank Crossword Rewards Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 1 Reward Point on every Rs. 200 spent anywhere else except Crossword store';
		cardData.points = 0.5;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Crossword_Rewards_Credit_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/crossword-rewards-credit-card';
		break;

		case 'RBL Bank MoneyTap Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'You earn 1 reward point for every Rs. 100 spent on all your purchases like travel, groceries, dining and even your electricity bill';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_MoneyTap_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/moneytap-card';
		break;

		case 'RBL Bank MoneyTap Black Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'You earn 2 Reward Points for every Rs. 100 spent on all your purchases like travel, groceries, dining and even your electricity bill. Get 5X Reward Points i.e. 10 Reward Points for every Rs. 100 spent online, up to 500 Reward Points in a month';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_MoneyTap_Black_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/moneytap-black-card';
		break;

		case 'RBL Bank Platinum Edge SuperCard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Get 2 Reward Points for every Rs. 100 spent on all that you like';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Platinum';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/platinum-edge-supercard';
		break;

		case 'RBL Bank Platinum Prime SuperCard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Get 2 Reward Points for every Rs.100 spent on all that you like. Spend Rs. 1,50,000 in a year and get 10,000 Reward Points';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Platinum';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/platinum-prime-supercard';
		break;

		case 'RBL Bank Platinum Prime SuperCard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Get 2 Reward Points for every Rs.100 spent on all that you like. Spend Rs. 1,50,000 in a year and get 10,000 Reward Points';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Platinum';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/platinum-prime-supercard';
		break;

		case 'RBL Bank Platinum Max SuperCard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Get 2 Reward Points for every Rs. 100 spent on all that you like. Spend Rs.10,000 in a month and get 1,000 Reward Points. Reach spends milestone of Rs.15,000 in a month and get additional 500 Reward Points.';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Platinum';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/platinum-max-supercard';
		break;

		case 'RBL Bank Platinum Classic SuperCard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Get 1 Reward Point for every Rs. 100 you spend on all that you like. Spend Rs.10,000 in a month and get 1,000 Reward Points.';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-1RBL_Bank_Platinum_Classic_SuperCard';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/platinum-classic-supercard';
		break;

		case 'RBL Bank World Prime SuperCard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Get 2 Reward Points per Rs.100 you spend. Spend Rs.2,50,000 in a year and get 10,000 Reward Points. Cross spend level of Rs. 4,00,000 and Rs. 5,00,000 in a year and get additional 10,000 Reward Points on both occasions';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_World';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/world-prime-supercard';
		break;

		case 'RBL Bank World Max SuperCard' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Get 2 Reward Points per Rs.100 you spend on all that you like. Spend Rs. 25,000 once every month get 1,500 Reward Points. Reach spends milestone of Rs. 40,000 and Rs. 50,000 and get additional 1,000 Reward Points on both occasions';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_World';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/world-max-supercard';
		break;

		case 'RBL Bank Crownit Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Get rewarded with crowns on all spends- you earn 1 crown per Rs. 100 spent on weekdays. Get 1.5 crowns per Rs. 100 spent on weekends except fuel transactions.';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_Crownit_Credit_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/crownit-card';
		break;

		case 'RBL Bank India Startup Club Platinum Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = '2X Reward Points i.e. 4 Rewards Points per Rs. 100 on all online spends. 2 Reward Points per Rs.100 spent except fuel';
		cardData.points = 4;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_India_Startup_Club_Platinum_Credit_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/india-startup-club-platinum-credit-card';
		break;

		case 'RBL Bank India Startup World Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 5 Rewards per Rs.100 spent with your India Start-up Club World Credit Card except fuel purchases.';
		cardData.points = 5;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_India_Startup_World_Credit_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/india-startup-world-credit-card';
		break;

		case 'RBL Bank IGU NHS Golf World Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Now earn 2 reward points for every Rs.100 spent on your purchases.';
		cardData.points = 2;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_IGU_NHS_Golf_World_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/igu-nhs-golf-world-card';
		break;

		case 'RBL Bank Fun Credit Card' :
		//cardData.rent_amount = parseInt(cardlist.spendAmount);
		cardData.description = 'Earn 1 Reward point Rs.100 on all your purchases except fuel';
		cardData.points = 1;
		cardData.value = 100;
		cardData.card_class = 'bg-RBL_Bank_FunCredit_Card';
		cardData.card_link = 'https://www.rblbank.com/product/credit-cards/rbl-bank-fun+-credit-card';
		break;


		default :
			console.log("default");
			break;
		}
		document.getElementById("card-link").setAttribute("href", cardData.card_link);
		document.getElementById("card-link2").setAttribute("href", cardData.card_link);
		document.getElementById("card-image").setAttribute("class", cardData.card_class);
		document.getElementById("benefits_details").innerHTML = cardData.description;
		getAmount(cardData.points, cardData.value);
		document.getElementById("credit-card-left").style.display = "none";
		document.getElementById("credit-card-right2").style.display = "block";
		return false;
	}
}

var rentChanged = function(){
	getAmount(cardData.points, cardData.value);
}

var getAmount = function(points, value){
	var rent = document.getElementById("rent").value;
	document.getElementById("cost").innerHTML = (rent * points / value).toFixed();
}