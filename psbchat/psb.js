const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const output = document.querySelector("#outbox");
let userMessage = null;
const inputInitHeight = chatInput.scrollHeight;

// API configuration
//const API_KEY = "YOUR_API_KEY_HERE"; // Replace with a valid API key
//const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateMessage?key=${API_KEY}`;

// Function to create a chat <li> element
const createChatLi = (message, className) => {
  debugger
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  const chatContent =
    className === "outgoing"
      ? `<p> </p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};
// Function to handle chatbot logic for predefined responses
const chatbotLogic = (input) => {
  let output = "";
  input = input.toLowerCase();

  if (input.includes("Hello")) {
    output = "Hello! I'm PSB-BOT, Punjab and Sind Bank's chatbot. How can I assist you today?   You can start by typing your query or by clicking the buttons.";
  }
  else if (input.includes("Hello there")) {
    output = "Hello! I'm PSB-BOT, Punjab and Sind Bank's chatbot. How can I assist you today?   You can start by typing your query or by clicking the buttons.";
  }
  else if (input.includes("hi")) {
    output = "Hello! I'm PSB-BOT, Punjab and Sind Bank's chatbot. How can I assist you today?   You can start by typing your query or by clicking the buttons.";
  }
  else if (input.includes("hello")) {
    output = "Hello! I'm PSB-BOT, Punjab and Sind Bank's chatbot. How can I assist you today?   You can start by typing your query or by clicking the buttons.";
  }
  else if (input.includes("good morning")) {
    output =
      "Good morning! I'm PSB-BOT, Punjab and Sind Bank's chatbot. How can I assist you today? You can start by typing your query or clicking the buttons.";
  } else if (input.includes("good afternoon")) {
    output =
      "Good afternoon! I'm PSB-BOT, Punjab and Sind Bank's chatbot. How can I assist you today? You can start by typing your query or clicking the buttons.";
  } else if (input.includes("good evening")) {
    output =
      "Good evening! I'm PSB-BOT, Punjab and Sind Bank's chatbot. How can I assist you today? You can start by typing your query or clicking the buttons.";
  }
  else if (input.includes("quit")) {
    output = "Bye, have a nice time!";
  }
  else if (input.includes("exit")) {
    output = "Bye, have a nice time!";
  }
  else if (input.includes("bye")) {
    output = "Bye, have a nice time!";
  }
  else if (input.includes("Hi there")) {
    output = "Hello, I'm PSB-BOT-Punjab and Sind Bank's chatbot, How can i assist you today?    You can start by typing your query or by clicking the buttons.";
  }
  else if (input.includes("name")) {
    output = "Hello, I'm PSB-BOT-Punjab and Sind Bank's chatbot, How can i assist you today?";
  }
  else if (input.includes("Hey")) {
    output = "Hello! I'm PSB-BOT, Punjab and Sind Bank's chatbot. How can I assist you today?   You can start by typing your query or by clicking the buttons.";
  }
  else if (input.includes("name")) {
    output =
      "Hello! I'm PSB-BOT, Punjab and Sind Bank's chatbot. How can I assist you today?";
  }
  // Account opening response
  else if (input.includes("i want to open savings account")) {
    output = "Please go to the nearest PSB Bank branch.";
  }
  // Gold Card Scheme response
  //else if (input.includes("gold card scheme")) {
  //  output =
  //    "Exports play a crucial role in a developing economy like India, which attaches significant importance to export promotion.";
  //}
  // Loan response
  //else if (input.includes("loan")) {
  //output ="Sure! I can help you with loan-related queries. Please specify your question.";
  //}

  // Investment response
  else if (input.includes("investment")) {
    output = "An investment is an asset or item that is purchased with the hope that it will generate income or appreciate in value at some point in the future. It concerns the outlay of some asset today (time, money, effort, etc.) in hopes of a greater payoff in the future.";
  }
  // Current Account response
  else if (input.includes("current account")) {
    output = "A current account can be opened in most commercial banks. A current account, being a zero-interest account, is generally associated with huge transactions on a regular basis. Because of the fluidity these accounts offer, they don't earn any interest.";
  }
  // Savings Account response
  else if (input.includes("saving account")) {
    output = "A savings account is an interest-bearing deposit account held at a bank or other financial institution. These accounts typically pay a modest interest rate and are great for parking cash you want available for short-term needs.";
  }
  else if (input.includes("i want to know psb account minimum balance policy")) {
    output = "All small savings accounts are required to maintain a balance of Rs. 500 (in rural branches) and Rs 1,000 for all branches other than rural. Non-rural branches where cheque";
  }


  else if (input.includes("what is the minimum balance required in psb")) {
    output = "All small savings accounts are required to maintain a balance of Rs. 500 (in rural branches) and Rs 1,000 for all branches other than rural. Non-rural branches where cheque book is not issued can have minimum balance of Rs 500.";
  }
  else if (input.includes("how much minimum balance should I maintain in my account")) {
    output = "All small savings accounts are required to maintain a balance of Rs. 500 (in rural branches) and Rs 1,000 for all branches other than rural. Non-rural branches where cheque book is not issued can have minimum balance of Rs 500.";
  }
  else if (input.includes("how much is the minimum balance required in an account")) {
    output = "All small savings accounts are required to maintain a balance of Rs. 500 (in rural branches) and Rs 1,000 for all branches other than rural. Non-rural branches where cheque book is not issued can have minimum balance of Rs 500.";
  }
  else if (input.includes("what is the minimum balance required to be maintained in PSB")) {
    output = "All small savings accounts are required to maintain a balance of Rs. 500 (in rural branches) and Rs 1,000 for all branches other than rural. Non-rural branches where cheque book is not issued can have minimum balance of Rs 500.";
  }
  else if (input.includes("what is the balance on my account")) {
    output = "you can login to your internet/mobile banking account or give a missed call to <b>7039035156</b> (Toll Free) from your registered mobile number.<br>Customers can also connect on our IVR/Call center through <b>18004198300</b> to check your balance";
  }
  else if (input.includes("how to check balance on your account")) {
    output = "you can login to your internet/mobile banking account or give a missed call to <b>7039035156</b> (Toll Free) from your registered mobile number.<br>Customers can also connect on our IVR/Call center through <b>18004198300</b> to check your balance";
  }
  else if (input.includes("what is my account balance")) {
    output = "you can login to your internet/mobile banking account or give a missed call to <b>7039035156</b> (Toll Free) from your registered mobile number.<br>Customers can also connect on our IVR/Call center through <b>18004198300</b> to check your balance";
  } else if (input.includes("i want to know my account balance")) {
    output = "you can login to your internet/mobile banking account or give a missed call to <b>7039035156</b> (Toll Free) from your registered mobile number.<br>Customers can also connect on our IVR/Call center through <b>18004198300</b> to check your balance";
  } else if (input.includes("how to check current account balance")) {
    output = "you can login to your internet/mobile banking account or give a missed call to <b>7039035156</b> (Toll Free) from your registered mobile number.<br>Customers can also connect on our IVR/Call center through <b>18004198300</b> to check your balance";
  }
  else if (input.includes("issue me a new passbook")) {
    output = "You need to visit us and write an application to the bank stating that you need a new passbook.";
  }
  else if (input.includes("my passbook pages are all filled")) {
    output = "u need to visit us and write an application to the bank stating that you need a new passbook.";
  }
  else if (input.includes("my passbook ran out of pages")) {
    output = "You need to visit us and write an application to the bank stating that you need a new passbook.";
  }
  else if (input.includes("i want to get a new passbook issued")) {
    output = "You need to visit us and write an application to the bank stating that you need a new passbook.";
  }
  else if (input.includes("i have misplaced my passbook")) {
    output = "You need to visit us and write an application to the bank stating that you need a new passbook.";
  }
  else if (input.includes("my psb account number is not mentioned anywhere")) {
    output = "Login to your mobile banking or internet banking account to retrieve lost account number. The same is also mentioned in your bank is passbook.";
  }
  else if (input.includes("can i get my account number online")) {
    output = "Login to your mobile banking or internet banking account to retrieve lost account number. The same is also mentioned in your bank is passbook.";
  }
  else if (input.includes("where can i find my account number")) {
    output = "Login to your mobile banking or internet banking account to retrieve lost account number. The same is also mentioned in your bank is passbook.";
  }
  else if (input.includes("i cannot recall my account number")) {
    output = "Login to your mobile banking or internet banking account to retrieve lost account number. The same is also mentioned in your bank is passbook.";
  }
  else if (input.includes("how can I retrieve my account number")) {
    output = "Login to your mobile banking or internet banking account to retrieve lost account number. The same is also mentioned in your bank is passbook.";
  }
  else if (input.includes("i want to open an account in psb online")) {
    output = "you can walk in to your nearest PSB branch and contact our customer relations officer.";
  }
  else if (input.includes("can i open an account with psb")) {
    output = "you can walk in to your nearest PSB branch and contact our customer relations officer.";
  }
  else if (input.includes("i want to apply for an account")) {
    output = "you can walk in to your nearest PSB branch and contact our customer relations officer.";
  }
  else if (input.includes("i want to open a new psb account")) {
    output = "you can walk in to your nearest PSB branch and contact our customer relations officer.";
  }
  else if (input.includes("i want to open an account in psb")) {
    output = "you can walk in to your nearest PSB branch and contact our customer relations officer.";
  }
  else if (input.includes("is my card free for lifetime")) {
    output = "Not all credit cards have annual charges but are not free for lifetime either. The bank may waive off annual charges if you transact above a limit in given time. T&C apply";
  }
  else if (input.includes("what is the renewal fee per card")) {
    output = "Not all credit cards have annual charges but are not free for lifetime either. The bank may waive off annual charges if you transact above a limit in given time. T&C apply";
  }
  else if (input.includes("how much does credit card cost for a year")) {
    output = "Not all credit cards have annual charges but are not free for lifetime either. The bank may waive off annual charges if you transact above a limit in given time. T&C apply";
  }
  else if (input.includes("do i need to pay application fee for credit card")) {
    output = "Not all credit cards have annual charges but are not free for lifetime either. The bank may waive off annual charges if you transact above a limit in given time. T&C apply";
  }
  else if (input.includes("what are the annual charges on a credit card")) {
    output = "Not all credit cards have annual charges but are not free for lifetime either. The bank may waive off annual charges if you transact above a limit in given time. T&C apply";
  }
  else if (input.includes("is it possible to extend credit limit on a card")) {
    output = "Credit limits are extended solely on bank is recommendation and you cannot do so manually. We recommend you to contact our nearest branch for more information.";
  }
  else if (input.includes("can i extend credit limit on credit card")) {
    output = "Credit limits are extended solely on bank is recommendation and you cannot do so manually. We recommend you to contact our nearest branch for more information.";
  }
  else if (input.includes("i want to extend my credit limit")) {
    output = "Credit limits are extended solely on bank is recommendation and you cannot do so manually. We recommend you to contact our nearest branch for more information.";
  }
  else if (input.includes("extend my credit card limit")) {
    output = "Credit limits are extended solely on bank is recommendation and you cannot do so manually. We recommend you to contact our nearest branch for more information.";
  }
  else if (input.includes("how do I extend limit of my credit card")) {
    output = "Credit limits are extended solely on bank is recommendation and you cannot do so manually. We recommend you to contact our nearest branch for more information.";
  }
  else if (input.includes("i cannot find my credit card")) {
    output = "If your card is misplaced/stolen, it is important to block it at once. You should get your card hostlisted by calling us on 1800-419-8302.";
  }
  else if (input.includes("i have misplaced my card")) {
    output = "If your card is misplaced/stolen, it is important to block it at once. You should get your card hostlisted by calling us on 1800-419-8302.";
  }
  else if (input.includes("kindly block my credit card")) {
    output = "If your card is misplaced/stolen, it is important to block it at once. You should get your card hostlisted by calling us on 1800-419-8302.";
  }
  else if (input.includes("i want to block my credit card")) {
    output = "If your card is misplaced/stolen, it is important to block it at once. You should get your card hostlisted by calling us on 1800-419-8302.";
  }
  else if (input.includes("my credit card is lost")) {
    output = "If your card is misplaced/stolen, it is important to block it at once. You should get your card hostlisted by calling us on 1800-419-8302.";
  }
  else if (input.includes("how to apply for psba's credit cards")) {
    output = "You can apply for our cards from the service page or walk in to your home branch. You can also seek help by calling on our toll free number 1800-419-8304";
  }
  else if (input.includes("i want to apply for credit card online")) {
    output = "You can apply for our cards from the service page or walk in to your home branch. You can also seek help by calling on our toll free number 1800-419-8303";
  }
  else if (input.includes("i need help applying for credit card")) {
    output = "You can apply for our cards from the service page or walk in to your home branch. You can also seek help by calling on our toll free number 1800-419-8302";
  }
  else if (input.includes("how can i apply for credit card")) {
    output = "You can apply for our cards from the service page or walk in to your home branch. You can also seek help by calling on our toll free number 1800-419-8301";
  }
  else if (input.includes("i want to apply for credit card")) {
    output = "You can apply for our cards from the service page or walk in to your home branch. You can also seek help by calling on our toll free number 1800-419-8300";
  }
  else if (input.includes("i want to know whether i am eligible for credit cards")) {
    output = "Different credit card schemes shall have different eligibility criteria. Depending upon what card you choose, you may or may not be eligible.";
  }
  else if (input.includes("can unsalaried individuals apply for credit card")) {
    output = "Different credit card schemes shall have different eligibility criteria. Depending upon what card you choose, you may or may not be eligible.";
  }
  else if (input.includes("what is the minimum salary required for psb credit cards")) {
    output = "Different credit card schemes shall have different eligibility criteria. Depending upon what card you choose, you may or may not be eligible.";
  }
  else if (input.includes("who is eligible to apply for credit cards")) {
    output = "Different credit card schemes shall have different eligibility criteria. Depending upon what card you choose, you may or may not be eligible.";
  }
  else if (input.includes("i want to check my credit card eligibility")) {
    output = "Different credit card schemes shall have different eligibility criteria. Depending upon what card you choose, you may or may not be eligible.";
  }
  else if (input.includes("where can i apply for credit card")) {
    output = "PSB is running multiple credit card schemes namely Artisan Credit Card (ACC) Scheme and Kisan Credit Cards. Detailed information about application and how to apply is available in the credit scheme page";
  }
  else if (input.includes("what are the documents required for credit card")) {
    output = "PSB is running multiple credit card schemes namely Artisan Credit Card (ACC) Scheme and Kisan Credit Cards. Detailed information about application and how to apply is available in the credit scheme page";
  }
  else if (input.includes("what are the various credit cards offered by psb")) {
    output = "PSB is running multiple credit card schemes namely Artisan Credit Card (ACC) Scheme and Kisan Credit Cards. Detailed information about application and how to apply is available in the credit scheme page";
  }
  else if (input.includes("can i apply for credit card")) {
    output = "PSB is running multiple credit card schemes namely Artisan Credit Card (ACC) Scheme and Kisan Credit Cards. Detailed information about application and how to apply is available in the credit scheme page";
  }
  else if (input.includes("i need information on credit cards")) {
    output = "PSB is running multiple credit card schemes namely Artisan Credit Card (ACC) Scheme and Kisan Credit Cards. Detailed information about application and how to apply is available in the credit scheme page";
  }
  else if (input.includes("at what rate is interest levied on loans")) {
    output = "Interest rates vary from loan to loan and across applicants for the same loan. We recommend that you check the loan page to know what interest rates are applicable for your loan type";
  }
  else if (input.includes("how much interest will i be charged if i apply for loan")) {
    output = "Interest rates vary from loan to loan and across applicants for the same loan. We recommend that you check the loan page to know what interest rates are applicable for your";
  }
  else if (input.includes("i want to know about interest rates on loans")) {
    output = "Interest rates vary from loan to loan and across applicants for the same loan. We recommend that you check the loan page to know what interest rates are applicable for your loan type";
  }
  else if (input.includes("what is the rate of interest on various loans")) {
    output = "Interest rates vary from loan to loan and across applicants for the same loan. We recommend that you check the loan page to know what interest rates are applicable for your loan type";
  }
  else if (input.includes("what are the interest rates applicable on personal loan")) {
    output = "Interest rates vary from loan to loan and across applicants for the same loan. We recommend that you check the loan page to know what interest rates are applicable for your loan type";
  }
  /*else if (input.includes("debit card block")||input.includes("block my card")){
    output="Dear Customer, Punjab &amp; Sind Bank  is happy to announce you the launch of service for blocking your Debit Card by simple sending an SMS. To block your Debit Card, all you need is to type the following text and send an SMS to 9223815844 from your registered mobile number -  LOST &lt;space&gt; last 4 digits of your card number eg: LOST 1234LOST &lt;space&gt; your 14 digits account number eg: LOST 123456789XXXXX You will receive an acknowledgement on your registered mobile number confirming you the status of the request. Please note that this service is available only for PSB cardholders who have registered their mobile number with the Bank. Kindly register/update your mobile number with the Bank for more services and SMS alerts. For Blocking ATM/Debit Card Call 1800-419-8300 &nbsp;"
  }
  /*else if (input.includes("digital banking services")){
     <ul style='display:block;'> <li class=''><a href='https://punjabandsindbank.co.in/content/home-page1' target='_blank'>Retail Internet Banking </a></li> <li class=''><a href='https://punjabandsindbank.co.in/content/home-page2' target='_blank'>Corporate Internet Banking </a></li> <li class=''><a href='https://punjabandsindbank.co.in/content/mobile-banking' target='_blank'>Mobile Banking </a></li> <li class=''><a href='https://punjabandsindbank.co.in/content/imps-ussd' target='_blank'>IMPS/USSD </a></li> <li class=''><a href='https://play.google.com/store/apps/details?id=com.arcgis.esri.bankgis1' target='_blank'>Jan Dhan Darshak App <span class='text-animation'>New</span></a></li> <li class=''><a href='https://punjabandsindbank.co.in/content/rtgs-neft' target='_blank'>RTGS/NEFT </a></li> <li class=''><a href='https://punjabandsindbank.co.in/content/upi' target='_blank'>Unified Payment Interface(UPI) </a></li> <li class=''><a href='https://punjabandsindbank.co.in/content/bbps' target='_blank'>BBPS </a></li> <li class=''><a href='https://punjabandsindbank.co.in/content/pos' target='_blank'>POS (Point of Sale) </a></li> <li class=''><a href='https://punjabandsindbank.co.in/content/qr' target='_blank'>Bharat QR Code </a></li> <li class=''><a href='https://punjabandsindbank.co.in/content/bhim-aadhaar-pay' target='_blank'>BHIM/Aadhaar Pay </a></li> <li class=''><a href='https://punjabandsindbank.co.in/content/e-kyc' target='_blank'>Aadhaar Seeding </a></li> <li class=''><a href='https://punjabandsindbank.co.in/content/sms-banking-how-to-use' target='_blank'>SMS Banking </a></li> 
    </ul>
  }*/
  else if (input.includes("services")) {
    // Create a container for banking services
    var container = document.createElement('div');
    container.classList.add("extra")

    // Add a heading
    var heading = document.createElement('h2');
    heading.textContent = "Banking Services";
    container.appendChild(heading);

    // Create an unordered list
    var ul = document.createElement('ul');
    ul.style.display = 'block';
    ul.className = 'box';


    // Array of banking services
    var services = [
      { text: 'Corporate Internet Banking', href: 'https://punjabandsindbank.co.in/content/home-page2' },
      { text: 'Mobile Banking', href: 'https://punjabandsindbank.co.in/content/mobile-banking' },
      { text: 'IMPS/USSD', href: 'https://punjabandsindbank.co.in/content/imps-ussd' },
      { text: 'Jan Dhan Darshak App', href: 'https://play.google.com/store/apps/details?id=com.arcgis.esri.bankgis1', extra: 'New' },
      { text: 'RTGS/NEFT', href: 'https://punjabandsindbank.co.in/content/rtgs-neft' },
      { text: 'Unified Payment Interface (UPI)', href: 'https://punjabandsindbank.co.in/content/upi' },
      { text: 'BBPS', href: 'https://punjabandsindbank.co.in/content/bbps' },
      { text: 'POS (Point of Sale)', href: 'https://punjabandsindbank.co.in/content/pos' },
      { text: 'Bharat QR Code', href: 'https://punjabandsindbank.co.in/content/qr' },
      { text: 'BHIM/Aadhaar Pay', href: 'https://punjabandsindbank.co.in/content/bhim-aadhaar-pay' },
      { text: 'Aadhaar Seeding', href: 'https://punjabandsindbank.co.in/content/e-kyc' },
      { text: 'SMS Banking', href: 'https://punjabandsindbank.co.in/content/sms-banking-how-to-use' }
    ];

    // Add list items for each service
    services.forEach(function (service) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = service.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer'; // Security enhancement
      a.textContent = service.text;
      li.appendChild(a);

      // If there's extra text (e.g., "New"), add it
      /*if (service.extra) {
        var span = document.createElement('span');
        span.className = 'text-animation';
        span.textContent = ` ${service.extra}`;
        li.appendChild(span);
      }*/

      ul.appendChild(li);
    });

    // Append the list to the container
    container.appendChild(ul);
    // Append the container to the chatbox (assumes chatbox is a valid DOM element)
    //chatbox.appendChild(LIincoming);
    chatbox.appendChild(container)
  }



  ///Mobile banking 
  else if (input.includes("mobile banking")) {
    // Create a container for mobile banking services
    var container = document.createElement('div');
    container.classList.add("extra")

    // Add a heading
    var heading = document.createElement('h2');
    heading.textContent = "Mobile Banking Services - PSB mPay";
    container.appendChild(heading);

    // Add description
    var description = document.createElement('p');
    description.textContent = "PSB mPay is a user-friendly, safe, and easy-to-use mobile banking application which provides various services to the customers of Punjab and Sind Bank. It comes with the following features:";
    container.appendChild(description);

    // Create a list for services
    var ul = document.createElement('ul');
    ul.style.display = 'block';
    ul.className = 'box';

    // Array of services
    var services = [
      "Balance inquiry",
      "Mini statement",
      "Immediate payment service (IMPS)",
      "Intra-bank fund transfer",
      "Inter-bank fund transfer (through NEFT)",
      "Cheque status",
      "Stop cheque",
      "ATM/branch locator",
      "Bill payment facility",
      "Mobile recharge",
      "Temple donation",
      "DTH recharge"
    ];

    // Add services to the list
    services.forEach(function (service) {
      var li = document.createElement('li');
      li.textContent = service;
      ul.appendChild(li);
    });

    container.appendChild(ul);
    ul.className = 'box';

    // Add fund transfer limit
    var transferLimit = document.createElement('strong');
    transferLimit.textContent = "Fund Transfer Limit through Mobile App is Rs 25,000 per Transaction and Rs 50,000 per day.";
    container.appendChild(transferLimit);
    ul.className = 'box';
    // Add links
    var links = [
      { text: 'FAQ on Mobile Banking', href: "https://punjabandsindbank.co.in/content/faqmobilebanking" },
      { text: 'Application for Registration for Mobile Banking Services', href: "https://punjabandsindbank.co.in/document/digital-banking/Mobile_Banking_Form.pdf" },
      { text: 'Terms and Conditions for Mobile Banking Subscribers', href: "https://punjabandsindbank.co.in/document/digital-banking/Mobile_Banking_T_C.pdf" },
      { text: 'Application for Reissue of Application Password/mPIN/tPIN/Web Password', href: "https://punjabandsindbank.co.in/document/digital-banking/Mobile_Banking_Form_Reissue_PINs.pdf" }
    ];

    links.forEach(function (link) {
      var strong = document.createElement('strong');
      var a = document.createElement('a');
      a.className = 'readmore';
      a.href = link.href;
      a.target = '_blank';
      a.textContent = link.text;
      strong.appendChild(a);
      container.appendChild(strong);
      container.appendChild(document.createElement('br'));
    });

    // Append the container to the chatbox (assumes chatbox is a valid DOM element)
    chatbox.appendChild(container);
  }
  else if (input.includes("debit card block") || input.includes("block my card")) {
    // Create a container for the message
    var container = document.createElement('div');
    container.classList.add("extra")

    container.style.margin = '10px 0';

    // Add main message
    var mainMessage = document.createElement('strong');
    mainMessage.innerHTML = "Dear Customer,";
    container.appendChild(mainMessage);
    container.appendChild(document.createElement('br'));

    // Add announcement
    var announcement = document.createElement('strong');
    announcement.innerHTML = "Punjab &amp; Sind Bank is happy to announce the launch of a service for blocking your Debit Card via SMS.";
    container.appendChild(announcement);
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));

    // Instructions for blocking card
    var instructionText = `
          To block your Debit Card, send an SMS to <strong>9223815844</strong> from your registered mobile number with the following format:
          <ul>
              <li><strong>LOST &lt;space&gt; last 4 digits of your card number</strong> (e.g., LOST 1234)</li>
              <li><strong>OR LOST &lt;space&gt; your 14-digit account number</strong> (e.g., LOST 123456789XXXXX)</li>
          </ul>
          You will receive an acknowledgment on your registered mobile number confirming the status of your request.`;
    var instructions = document.createElement('p');
    instructions.innerHTML = instructionText;
    container.appendChild(instructions);

    // Note for registered mobile users
    var note = document.createElement('p');
    note.innerHTML =
      "This service is available only for PSB cardholders who have registered their mobile number with the Bank. Kindly register/update your mobile number with the Bank for more services and SMS alerts.";
    container.appendChild(note);

    // Emergency contact
    var emergency = document.createElement('span');
    emergency.style.color = "rgb(182, 48, 63)";
    emergency.style.fontFamily = "open_sansregular";
    emergency.style.fontSize = "14px";
    emergency.style.fontWeight = "700";
    emergency.style.backgroundColor = "rgb(254, 254, 254)";
    emergency.innerHTML =
      "For Blocking ATM/Debit Card Call <strong>1800-419-8300</strong>";
    container.appendChild(emergency);

    // Append the container to the chatbox (assumes chatbox is a valid DOM element)
    chatbox.appendChild(container);
  }

  else if (input.includes("apply for locker") || input.includes("locker online")) {
    // Create a container for the message
    var container = document.createElement('div');
    container.classList.add("extra")

    container.style.margin = '10px 0';

    // Add main message
    var mainMessage = document.createElement('strong');
    mainMessage.innerHTML = "Dear Customer,";
    container.appendChild(mainMessage);
    container.appendChild(document.createElement('br'));

    // Add announcement
    var announcement = document.createElement('strong');
    announcement.innerHTML = "Punjab &amp; Sind Bank is happy to announce that you can apply for a locker online!";
    container.appendChild(announcement);
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));

    // Add link for locker application
    var lockerLink = document.createElement('a');
    lockerLink.href = "https://punjabandsindbank.co.in/module/locker-list";
    lockerLink.target = "_blank";
    
    lockerLink.innerHTML = "Click here to apply now";
    lockerLink.style.color = "blue"; // Optional: Highlight the link in blue
    lockerLink.style.textDecoration = "underline"; // Optional: Underline the link for visibility
    container.appendChild(lockerLink);

    // Append the container to the chatbox (assumes chatbox is a valid DOM element)
    chatbox.appendChild(container);
  }




  ///------------------
  else if (input.includes("loan in 59 mins") || input.includes("apply loan") || input.includes("instant loan")) {
    // Create a container for the message
    var container = document.createElement('div');
    container.classList.add("extra")

   
    container.style.margin = '10px 0';

    // Add main message
    var mainMessage = document.createElement('strong');
    mainMessage.innerHTML = "Dear Customer,";
    container.appendChild(mainMessage);
    container.appendChild(document.createElement('br'));

    // Add announcement
    var announcement = document.createElement('strong');
    announcement.innerHTML = "Punjab &amp; Sind Bank is happy to announce that you can apply for a loan in just 59 minutes!";
    container.appendChild(announcement);
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));

    // Add link for loan application
    var loanLink = document.createElement('a');
    loanLink.href = "https://www.psbloansin59minutes.com/psb";
    loanLink.target = "_blank";
    loanLink.innerHTML = "Click here to apply now";
    loanLink.style.color = "blue"; // Optional: Highlight the link in blue
    loanLink.style.textDecoration = "underline"; // Optional: Underline the link for visibility
    container.appendChild(loanLink);

    // Append the container to the chatbox (assumes chatbox is a valid DOM element)
    chatbox.appendChild(container);
  }




  //---------------MSME Branch----------------  
  else if (input.includes("msme branches") || input.includes("msme branch")) {
    // Create a container for the message
    
    const container = document.createElement("div");
    container.classList.add("extra")
    
    // Add the text message
    const message = document.createTextNode("To get information about our Specialized MSME branches, please ");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/specialized-msme-branche";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = "Click Here";

    // Append the link to the container
    container.appendChild(link);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }

  else if (input.includes("door step banking") || input.includes("dsb") || input.includes("senior citizen") || input.includes("differently abled") || input.includes("door bankig")) {
    // Create a container for the message
    var container = document.createElement('div');
    container.classList.add("extra")

    container.style.margin = '10px 0';

    // Add eligibility details
    var eligibilityTitle = document.createElement('strong');
    eligibilityTitle.innerHTML = "Door Step Banking (DSB) For Senior Citizens & Differently Abled Customers";
    container.appendChild(eligibilityTitle);
    container.appendChild(document.createElement('br'));

    // Add eligibility points
    var eligibilityText = document.createElement('p');
    eligibilityText.innerHTML = "Eligibility: Senior Citizens of more than 70 years of age and differently abled persons. Fully KYC compliant account holders. Valid Mobile Number should be registered with the account. Customers having registered address within a radius of 10 KMs from the Home Branch.";
    container.appendChild(eligibilityText);
    container.appendChild(document.createElement('br'));

    // Add the link for more information
    var moreLink = document.createElement('a');
    moreLink.href = 'https://punjabandsindbank.co.in/content/doorstepbanking';
    moreLink.target = '_blank';
    moreLink.innerHTML = "Click Here for More Information";
    moreLink.style.color = "blue"; // Optional: Style for the link
    moreLink.style.textDecoration = "underline"; // Optional: Underline the link for visibility
    container.appendChild(moreLink);

    // Append the container to the chatbox (assumes chatbox is a valid DOM element)
    chatbox.appendChild(container);
  }

  else if (input.includes("specialized msme branches") || input.includes("msme branches") || input.includes("msme information")) {
    // Create a container for the message
    var container = document.createElement('div');
    container.classList.add("extra")

    container.style.margin = '10px 0';

    // Add the message content
    var messageTitle = document.createElement('strong');
    messageTitle.innerHTML = "To get information about our Specialized MSME branches, please ";
    container.appendChild(messageTitle);

    // Add the link
    var moreLink = document.createElement('a');
    moreLink.href = 'https://punjabandsindbank.co.in/content/specialized-msme-branche';
    moreLink.target = '_blank';
    moreLink.innerHTML = "Click Here";
    moreLink.style.color = "blue"; // Optional: Style for the link
    moreLink.style.textDecoration = "underline"; // Optional: Underline the link for visibility
    container.appendChild(moreLink);

    // Append the container to the chatbox (assumes chatbox is a valid DOM element)
    output = "chatbox.appendChild(container);;"

  }

  /* else if(input.includes("specialized msme branches") || input.includes("msme branches") || input.includes("msme information")) {
   // Create a container for the message
   var container = document.createElement('div');
   container.style.margin = '10px 0';

   // Add the message content
   var messageTitle = document.createElement('strong');
   messageTitle.innerHTML = "To get information about our Specialized MSME branches, please ";
   container.appendChild(messageTitle);

   // Add the link
   var moreLink = document.createElement('a');
   moreLink.href = 'https://punjabandsindbank.co.in/content/specialized-msme-branche';
   moreLink.target = '_blank';
   moreLink.innerHTML = "Click Here";
   moreLink.style.color = "blue"; // Optional: Style for the link
   moreLink.style.textDecoration = "underline"; // Optional: Underline the link for visibility
   container.appendChild(moreLink);

   // Append the container to the chatbox (assumes chatbox is a valid DOM element)
   chatbox.appendChild(container);
}
*/




  //interest rate for Non-Schematic MSME
  else if (input.includes("deposit interest rate") || input.includes("interest rate for deposit") || input.includes("i want know the interest rate of deposit")
    || input.includes("what is the interest rate of deposit") || input.includes("interest rate for saving") || input.includes("interest rate for sb")
    || input.includes("interest rate for fd") || input.includes("interest rate for rd")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the text message
    const message = document.createTextNode("Click ");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/interestdom";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = "here";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode(" for interest rate.");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }

  else if (input.includes("how to change pin of my atm card?") || input.includes("i want to change pin of atm card for security purpose") || input.includes("how to change pin, if atm card is lost?")
    || input.includes("tell me the steps to change pin of psb atm card") || input.includes("how to generate green pin for debit card at psb atm?")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")


    // Add the text message
    const message = document.createTextNode("Visit:");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/document/Debit_Card_Green_PIN_poster";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = " Click here";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode("pdf for information regarding Pin change/generation.");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }

  else if (input.includes("how to locate nearest atm?") || input.includes("i want to know nearest atm around me") || input.includes("nearest psb atm")
    || input.includes("please tell me nearest atm from my location") || input.includes("give me the list of psb atms in my city")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")


    // Add the text message
    const message = document.createTextNode("Visit:");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/module/atm-list";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = " Click here";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode(" to locate the ATM nearest to you");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }

  else if (input.includes("how to apply for psb debits card?") || input.includes("i want to know the steps of new card activation") || input.includes("tell me how to activate new psb debit card")
    || input.includes("i want to know the steps of new card activation") || input.includes("tell me how to activate new psb debit card") || input.includes("i need to know the procedure of new card activation")
    || input.includes("i want to activate my new psb debit card")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")


    // Add the text message
    const message = document.createTextNode("You can request debit cards from your nearest PSB branch.");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/module/atm-list";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = " Click here";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode("for information regarding the activation of your debit card.");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }

  else if (input.includes("i want to request for new card") || input.includes("how to request for new card?") || input.includes("i need new atm card")
    || input.includes("tell me the steps to request for psb atm card") || input.includes("how can i request/get new atm card?")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")
    // Add the text message
    const message = document.createTextNode("You can request debit cards from your nearest PSB branch.");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/module/atm-list";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = " Click here";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode("for information regarding the activation of your debit card.");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }


  else if (input.includes("what are the types of card, your bank provide?") || input.includes("card type")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")
    // Add the text message
    const message = document.createTextNode("We do provide cards primariliy of two types i.e; Personalized and Non-Personalized debit card. ");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = " Click here";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode("for more information.");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }


  else if (input.includes("Framework for Revival and Rehabilitation") || input.includes("ots")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the text message
    const message = document.createTextNode("  ");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = " Click here";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode(" for the information related to OTS scheme");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }

  else if (input.includes("ots scheme") || input.includes("ots")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the text message
    const message = document.createTextNode("  ");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/module/sme-loan-application";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = " Click here";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode("to know about the status of your application.");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }

  else if (input.includes("i want non-personalized psb atm card") || input.includes("non-personalized") || input.includes("i want personalized psb atm card")
    || input.includes("i want rupay classic debit card") || input.includes("i need master debit card for my saving accounts")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the text message
    const message = document.createTextNode("You can easily create a request for new debit card by following the directives of Punjab & Sind bank.");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = " Click here";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode("for more information.");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }

  else if (input.includes("how can i install the psb mobile application?") || input.includes("install mobile app")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the text message
    const message = document.createTextNode("You can downlaod PSB m-pay mobile application (free of cost) using Google playstore for Android handsets and Apple store for iPhones");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/mobile-banking";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = " Click here";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode("for more information.");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }

  else if (input.includes("do you have plans for vyapar laon?")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the text message
    const message = document.createTextNode("Yes, we do have plans for vyapar loan");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = " Click here";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode("for more information. Yes, we do have plans for vyapar loan");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }

  else if (input.includes("do you have plans under msme scheme?")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the text message
    const message = document.createTextNode("Yes, we do have plans under MSME scheme.");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = " Click here";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode("for more information. Terms & Conditions Apply*");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }

  else if (input.includes("i want to apply for vahan laon") || input.includes("I need loan under the scheme of PSB SME liquid plus")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the text message
    const message = document.createTextNode("You need to visit our website and scroll down to the loan section. From the loan section choose the type of loan you need. You can directly visit our loan portal by.");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = " Click this link";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode("");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }

  else if (input.includes("emi calculator") || input.includes("help me know the various installments plans") || input.includes("i want to calculate monthly installments")
    || input.includes("how much amount should I pay every month on loans")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      "You can use our easy-to-use EMI calculator to know how much installments you need to pay to settle your loan. "
    );
    container.appendChild(message);

    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/emi-calculator";
    link.target = "_blank"; // Opens the link in a new tab
    link.textContent = "Click here";

    // Append the link to the container
    container.appendChild(link);

    // Append the container to the chatbox or a relevant element

    chatbox.appendChild(container);

  }

  else if (input.includes("loan documents checklist") || input.includes("What documents are required to apply for loan")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      "Here is our checklist of papers/documents required to process loans. "
    );
    container.appendChild(message);

    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/check-list-loan";
    link.target = "_blank"; // Opens the link in a new tab
    link.textContent = "Click here";

    // Append the link to the container
    container.appendChild(link);

    // Append the container to the chatbox or relevant element
    chatbox.appendChild(container);

  }


  //Non-Schematic MSME interest rate
  else if (input.includes("non-schematic msme interest rate") || input.includes("interest rate for non-schematic msme") || input.includes("mnreâ€™s scheme for establishment of akshya urja shops interest rate")
    || input.includes("interest rate for mreâ€™s scheme for establishment of akshya urja shops") || input.includes("interest rate for scheme for financing solar heating system") || input.includes("scheme for financing solar heating system interest rate")
    || input.includes("interest rate for pmegp (other than agri)") || input.includes("pmegp (other than agri) interest rate") || input.includes("interest rate for day nulm") || input.includes("day nulm interest rate")
    || input.includes("interest rate for day nrlm") || input.includes("day nrlm interest rate") || input.includes("standap up india interest rate") || input.includes("interest rate for standap up india") || input.includes("interest rate for scheme for financing of e-rikshaws (eco-ride scheme)")
    || input.includes("scheme for financing of e-rikshaws (eco-ride scheme) interest rate") || input.includes("scheme for financing agri- seed processing units interest rate") || input.includes("interest rate for scheme for financing agri- seed processing units")
    || input.includes("interest rate for scheme for financing micro-finance institutions (mfis)") || input.includes("scheme for financing micro-finance institutions (mfis) interest rate") || input.includes("interest rate for cgssd") || input.includes("cgssd interest rate")
    || input.includes("contractor plus intrest rate") || input.includes("intrerest rate for contractor plus") || input.includes("guaranteed emergency credit line (psb gecl) for business enterprises scheme code â€“ ecltlgl interest rate") || input.includes("interest rate for doctor special loan scheme")
    || input.includes("doctor special loan scheme interest rate") || input.includes("interest rate for liquid plus scheme") || input.includes("liquid plus scheme interest loan") || input.includes("business loan interest rate") || input.includes("interest rate for business loan")
    || input.includes("interest rate for krishak mitra") || input.includes("krishak mitra interest rate") || input.includes("appls interest rate") || input.includes("interest rate for appls") || input.includes("interest rate for sfrs") || input.includes("sfrs interest rate")
    || input.includes("interest rate for scheme on financing rice shellers") || input.includes("scheme on financing rice shellers interest rate") || input.includes("sffapu interest rate") || input.includes("interest rate for sffapu") || input.includes("interest rate for scheme on financing food & agro processing units")
    || input.includes("scheme on financing food & agro processing units interest rate") || input.includes("interest rate for gold loan") || input.includes("gold loan interest rate") || input.includes("interest rate for kishan home loan") || input.includes("kishan home loan interest rate")
    || input.includes("mortgage interest rate") || input.includes("interest rate for mortgage") || input.includes("interest rate for skill loan") || input.includes("skill loan interest rate") || input.includes("interest rate for excellence education") || input.includes("excellence education interest rate")
    || input.includes("model education interest rate") || input.includes("intrerest rate for model education") || input.includes("interest rate for presonal loan") || input.includes("presonal loan interest rate") || input.includes("interest rate for sukh money")
    || input.includes("interest rate for sukh money") || input.includes("sukhmoney interest rate") || input.includes("interest rate for apna vahan") || input.includes("apna vahan interest rate") || input.includes("interest rate for apna ghar top-up") || input.includes("apna ghar top-up interest rate")
    || input.includes("apna ghar interest rate") || input.includes("home loan interest rate") || input.includes("interest rate for house loan") || input.includes("interest rate for home loan") || input.includes("interest rate for apna ghar") || input.includes("apna vahan sehaj interest rate")
    || input.includes("interest rate for apna vahan sehaj") || input.includes("interest rate for apna ghar sehaj") || input.includes("apna ghar sehaj interest rate")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the text message
    const message = document.createTextNode("Click ");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/loanintnew";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = "here";

    // Append the link to the container
    container.appendChild(link);

    // Add additional text
    const additionalText = document.createTextNode(" for loan interest rate.");
    container.appendChild(additionalText);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }

  else if (input.includes("loan portal")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      "You need to visit our website and scroll down to the loan section. From the loan section, choose the type of loan you need. " +
      "You can directly visit our loan portal by "
    );
    container.appendChild(message);

    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/domapplhp";
    link.target = "_blank"; // Opens the link in a new tab
    link.textContent = "clicking this link";

    // Append the link to the container
    container.appendChild(link);

    // Find the chatbox element and append the container

    chatbox.appendChild(container);
  }



  //forex_daily
  else if (input.includes("forex daily") || input.includes("Forex daily rate card")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")
    container.classList.add("extra")

    // Add the text message
    const message = document.createTextNode("For Detailed information");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/module/forex-daily-rate-card";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }


  else if (input.includes("Forex Interest Rates ") || input.includes("forex interest")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the text message
    const message = document.createTextNode("For Detailed information");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/interestforex";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }



  else if (input.includes("Forex Service Charges") || input.includes("forex service")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the text message
    const message = document.createTextNode("For Detailed information");
    container.appendChild(message);

    // Create the anchor element
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/system/uploads/document/2150_2019101010513480969.pdf";
    link.target = "_blank"; // Opens in a new tab
    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);

    // Append the container to the body (or a specific element)
    chatbox.appendChild(container);
  }


  else if (input.includes("ibds") || input.includes("I want to know about IBDs")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the message text
    const message = document.createTextNode("International Banking Divisions Branches (IBD). ");
    container.appendChild(message);

    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/ibds";
    link.target = "_blank"; // Opens the link in a new tab
    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);

    chatbox.appendChild(container);
  }


  else if (input.includes("swift branches")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the message text
    const message = document.createTextNode("For Detailed information ");
    container.appendChild(message);

    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/swift#";
    link.target = "_blank"; // Opens the link in a new tab
    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);

    chatbox.appendChild(container);
  }




  else if (input.includes("authorized dealer") || input.includes("Authorized Dealer Branches")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the message text
    const message = document.createTextNode("List of Foreign Exchange Authorised Branches. For further information ");
    container.appendChild(message);

    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/foreign-exchange-branch";
    link.target = "_blank"; // Opens the link in a new tab
    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);

    chatbox.appendChild(container);

  }


  else if (input.includes("contractor plus") || input.includes("psb contractor plus") || input.includes("contractor +") || input.includes("psb Contractor +")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      "Working capital: Fund Based & NFB facilities limits to meet day to day requirement / materials / labour payment / statutory payments." +
      "Term Loan: For purchase of Plant & Machinery / Equipment / Transport Vehicles to be used for the execution of contract work" +
      "Bank Guarantee: For bidding of tenders, mobilization of advance money, performance of the contract, guarantee in favour of Central / State Govt & its various departments and reputed Pvt. / Ltd. companies, guarantee for release of retention money."
    );
    container.appendChild(message);
    const list = document.createElement("ul");
    list.style.display = "block";
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/contractorplus";
    link.target = "_blank"; // Opens the link in a new tab
    link.textContent = "For more information, click here";

    // Append the link to the container
    container.appendChild(link);

    chatbox.appendChild(container);

  }



  else if (input.includes("forex treasury")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      "Punjab & Sind Bank has forex treasury in place to undertake the Forex treasury operations of AD branches as per their reporting on behalf of their customers. " +
      "The forex treasury is equipped with highly experienced and motivated staff with professional skills. The Forex Treasury deals in 12 major international currencies i.e. US Dollar, GBP, Euro, Yen as well as other currencies. " +
      "The Forex Treasury undertakes the following treasury related activities:"
    );
    container.appendChild(message);

    // Create a list for the treasury activities
    const list = document.createElement("ul");
    list.style.display = "block";
    //ul.className = 'box';
    // Add list items
    const activities = [
      "Forex Inter Bank Placements/ Borrowings",
      "Sale & Purchase of Foreign Exchange (e.g. Drafts/Cheques/TT/etc)",
      "Forward Cover Bookings",
      "Cross Currency Swaps",
      "Forex Money Market Operations"
    ];

    activities.forEach((activity) => {
      const listItem = document.createElement("li");
      listItem.textContent = activity;
      list.appendChild(listItem);
    });

    // Append the list to the container
    container.appendChild(list);

    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/forex-treasury";
    link.target = "_blank"; // Opens the link in a new tab
    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);
    // Find the chatbox element and append the container
    chatbox.appendChild(container);
  }



  else if (input.includes("export / import services")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      "The Facilities provided by the bank to exporters includes:Pre-shipment Finance: Pre-shipment finance also broadly known as Packing Credit is the advance provided by a bank to an exporter for financing the purchase, processing," +
      "manufacturing or packing of goods prior to shipment on production of confirmed order/Letter of Credit issued by an Overseas Buyers. Exporter must fulfill the following main criteria to be eligible for availing Packing Credit." +
      " Packing Credit can be availed in Indian Rupees / Foreign Currency. For further information"
    );
    container.appendChild(message);
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/exp-imp-services";
    link.target = "_blank"; // Opens the link in a new tab
    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);
    // Find the chatbox element and append the container
    chatbox.appendChild(container);
  }


  else if (input.includes("non fund based products")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      " Punjab & Sind Bank offers non fund based products to our clients as follows:- For further information"
    );
    container.appendChild(message);
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/non-fund-business-products";
    link.target = "_blank"; // Opens the link in a new tab
    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);
    // Find the chatbox element and append the container
    chatbox.appendChild(container);
  }

  else if (input.includes("facilities for residents")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      "Remittance by residents is allowed on the basis of self-declaration incorporating the basic details of the transaction for the following current account transaction up to amount mentioned against each:- For further information"
    );
    container.appendChild(message);
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/facilities-for-residents";
    link.target = "_blank"; // Opens the link in a new tab

    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);
    // Find the chatbox element and append the container
    chatbox.appendChild(container);
  }

  else if (input.includes("psb mortgage") || input.includes("Mortgage loan")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      "This is an all purpose credit facility i.e. to meet legitimate need based expenses viz- marriage /medical /educational expenses / repairs / renovation / extension to the residence / commercial property/ purchase of consumer durables or any unforeseen expenses,Ã¯Â¿Â½and alsoÃ¯Â¿Â½for investment in business, to meet credit needs of trade, commercial activities, other bona fide requirements of business/ profession. ");
    container.appendChild(message);
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/mortgage-loan";
    link.target = "_blank"; // Opens the link in a new tab

    link.textContent = "click here for more information.";

    // Append the link to the container
    container.appendChild(link);
    // Find the chatbox element and append the container
    chatbox.appendChild(container);
  }

  else if (input.includes("msme schemes") || input.includes("msme scheme")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      " for the information related to MSME Schemes");
    container.appendChild(message);
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/msme-schemmes";
    link.target = "_blank"; // Opens the link in a new tab

    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);
    // Find the chatbox element and append the container
    chatbox.appendChild(container);
  }

  else if (input.includes("products for msme") || input.includes("product for msme")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      " for the information related to MSME Schemes");
    container.appendChild(message);
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/msme-schemmes";
    link.target = "_blank"; // Opens the link in a new tab

    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);
    // Find the chatbox element and append the container
    chatbox.appendChild(container);
  }

 /* else if (input.includes("Commercial Vehicle") || input.includes("product for msme")) {
    // Create a container for the message
    const container = document.createElement("div");

    // Add the descriptive text
    const message = document.createTextNode(
      " for the information related to MSME Schemes");
    container.appendChild(message);
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/msme-schemmes";
    link.target = "_blank"; // Opens the link in a new tab

    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);
    // Find the chatbox element and append the container
    chatbox.appendChild(container);
  }*/

  else if (input.includes("framework for revival and rehabilitation") || input.includes("revival and rehabilitation")) {
    // Create a container for the loan information
    var container = document.createElement('div');
    container.classList.add("extra")

    // Add a heading
    var heading = document.createElement('strong');
    heading.textContent = "Framework for Revival and Rehabilitation of Micro, Small and Medium Enterprises. ";
    container.appendChild(heading);

    // Create the unordered list
    var ul = document.createElement('ul');
    ul.style.display = 'block';
    ul.className = 'box';

    // Array of loan types and their links
    var loans = [
      {
        text: "Apply Online MSME Loans up to Rs. 10 lakh",
        url: "https://punjabandsindbank.co.in/module/msme-application-upto-10lakh"
      },
      {
        text: "Apply Online MSME Loans from Rs. 10 lakh to Rs. 25 Cr",
        url: "https://punjabandsindbank.co.in/module/msme-application-above-10lakh"
      },
      {
        text: "Track your MSME application here",
        url: "https://punjabandsindbank.co.in/module/loans-tracking"
      }

    ];

    // Add list items for each loan
    loans.forEach(function (loan) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = loan.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer'; // For security
      a.textContent = loan.text;
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Append the list to the container
    container.appendChild(ul);

    // Append the container to the chatbox 
    chatbox.appendChild(container);
  }


  else if (input.includes("Specialized MSME branch") || input.includes("Special MSME branch")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      "for the information related to Specialized MSME branch");
    container.appendChild(message);
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/specialized-msme-branche";
    link.target = "_blank"; // Opens the link in a new tab

    link.textContent = "click here for more information.";

    // Append the link to the container
    container.appendChild(link);
    // Find the chatbox element and append the container
    chatbox.appendChild(container);
  }

  else if (input.includes("Doctor Loan") || input.includes("psb doctor special") || input.includes("doctor's special")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      "Eligibility: Medical Practitioners registered with statutory bodies like, MCI, DCI,CCIM, CCH etc." +
      " and having minimum qualification MBBS/BDS/BPT/BAMS or equivalent professional degree. For more information");
    container.appendChild(message);
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/doctor-loan";
    link.target = "_blank"; // Opens the link in a new tab

    link.textContent = "click here ";

    // Append the link to the container
    container.appendChild(link);
    // Find the chatbox element and append the container
    chatbox.appendChild(container);
  }

  else if (input.includes("psb vyapar") || input.includes("vyapar Loan") || input.includes("business loan") || input.includes("psb business")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      "For the working capital/any business purpose requirements of the business concern. And also, for the construction of shop in the pre-owned land or for purchase of ready built shop/ commercial space for business. For more information");
    container.appendChild(message);
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/vyapar-loan";
    link.target = "_blank"; // Opens the link in a new tab

    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);
    // Find the chatbox element and append the container
    chatbox.appendChild(container);
  }

  else if (input.includes("nri schemes")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      "Punjab & Sind bank is one of the public sector banks' having all the branches covered under Core Banking Solution (CBS) platform." +
      "    With a vast network of CBS branches having pan India presence, the bank facilitates anywhere banking across India. The bank established in year 1908 commenced foreign exchange business four decades back." +
      " Customer can approach any branch of the Bank for opening of NRE/FCNR/NRO account etc. Further, for any query, they can seek guidance from Authorized Dealer Branches (Forex Branches). The list of Authorized Dealer branches is provided in Annexure-II. For further information "
    );
    container.appendChild(message);
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/webnri#";
    link.target = "_blank"; // Opens the link in a new tab

    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);
    // Find the chatbox element and append the container
    chatbox.appendChild(container);
  }

  else if (input.includes("psb sme liquid plus") || input.includes("sme liquid +")) {
    // Create a container for the message
    const container = document.createElement("div");
    container.classList.add("extra")

    // Add the descriptive text
    const message = document.createTextNode(
      "To provide timely, hassle-free and adequate credit delivery to meet the liquidity mis-matches and expenses incurred on activities like R&D, Product Development, Marketing and Branding, stocking the seasonally available raw material etc. For detailed information visit");
    container.appendChild(message);
    // Create the anchor element for the link
    const link = document.createElement("a");
    link.href = "https://punjabandsindbank.co.in/content/sme-liquid-plus";
    link.target = "_blank"; // Opens the link in a new tab

    link.textContent = "click here";

    // Append the link to the container
    container.appendChild(link);
    // Find the chatbox element and append the container
    chatbox.appendChild(container);
  }

  else if (input.includes("msme schemes & codes") || input.includes("msme")) {
    // Create a container for the loan information
    var container = document.createElement('div');
    container.classList.add("extra")

    // Add a heading
    var heading = document.createElement('strong');
    heading.textContent = "MSME Schemes & Codes:";
    container.appendChild(heading);

    // Create the unordered list
    var ul = document.createElement('ul');
    ul.style.display = 'block';
    //ul.className = 'box';

    // Array of loan types and their links
    var loans = [
      { text: "OTS Scheme", href: "https://punjabandsindbank.co.in/document/MSME/9-OTS.pdf", isNew: false },
  { text: "Tracking Loan Application Status", href: "https://punjabandsindbank.co.in/module/sme-loan-application", isNew: false },
  { text: "Framework for Revival and Rehabilitation", href: "https://punjabandsindbank.co.in/content/msme-framework", isNew: false },
  { text: "Loan Application Forms for MUDRA & MSME", href: "https://punjabandsindbank.co.in/content/smeappforms", isNew: false },
  { text: "PSB Commercial Vehicle", href: "https://punjabandsindbank.co.in/content/commercial-vehicle", isNew: false },
  { text: "Products for MSME", href: "https://punjabandsindbank.co.in/content/msme-schemmes", isNew: false },
  { text: "MSME Specialized Branches", href: "https://punjabandsindbank.co.in/content/specialized-msme-branche", isNew: false },
  { text: "PSB Commercial Vehicle", href: "https://punjabandsindbank.co.in/content/commercial-vehicle", isNew: true },
  { text: "PSB Doctors Special", href: "https://punjabandsindbank.co.in/content/doctor-loan", isNew: true },
  { text: "PSB Mortgage", href: "https://punjabandsindbank.co.in/content/mortgage-loan", isNew: true },
  { text: "PSB Vyapar", href: "https://punjabandsindbank.co.in/content/vyapar-loan", isNew: true },
  { text: "PSB SME Liquid Plus", href: "https://punjabandsindbank.co.in/content/sme-liquid-plus", isNew: true },
  { text: "PSB Contractor Plus", href: "https://punjabandsindbank.co.in/content/contractorplus", isNew: true },
  { text: "PSB Gold Loan", href: "https://punjabandsindbank.co.in/content/goldloan", isNew: true }
];

  

    // Add list items for each loan
    loans.forEach(function (loan) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = loan.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer'; // For security
      a.textContent = loan.text;
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Append the list to the container
    container.appendChild(ul);

    // Append the container to the chatbox (assumes chatbox is a valid DOM element)
    chatbox.appendChild(container);
  }



  else if (input.includes("loan") || input.includes("home loan") || input.includes("car loan") || input.includes("Vehicle loan")) {
    // Create a container for the loan information
    var container = document.createElement('div');
    container.classList.add("extra")

    // Add a heading
    var heading = document.createElement('strong');
    heading.textContent = "PSB offers different types of Loans:";
    container.appendChild(heading);

    // Create the unordered list
    var ul = document.createElement('ul');
    ul.style.display = 'block';
    ul.className = 'box';

    // Array of loan types and their links
    var loans = [
      { text: 'Apply Retail Loan', href: 'https://punjabandsindbank.co.in/module/retail-loan-application' },
      { text: 'PSB Apna Ghar - सहज', href: 'https://punjabandsindbank.co.in/content/psbapnagharsehej' },
      { text: 'PSB Apna Vahan - सुगम', href: 'https://punjabandsindbank.co.in/content/psbapnavahan-sugam' },
      { text: 'PSB Apna Ghar', href: 'https://punjabandsindbank.co.in/content/housing' },
      { text: 'PSB Apna Ghar Top Up', href: 'https://punjabandsindbank.co.in/content/housing-loan-top-up-scheme' },
      { text: 'PSB Apna Vahan', href: 'https://punjabandsindbank.co.in/content/conveyance' },
      { text: 'PSB Education Loan', href: 'https://punjabandsindbank.co.in/content/education' },
      { text: 'PSB Excellence-Education Loan', href: 'https://punjabandsindbank.co.in/content/excellence-education-loan' },
      { text: 'PSB Skill Education Loan', href: 'https://punjabandsindbank.co.in/content/skill-loan-scheme' },
      { text: 'PSB Doctors Special', href: 'https://punjabandsindbank.co.in/content/doctor-loan' },
      { text: 'PSB Sukhmoney Scheme for Senior Citizens', href: 'https://punjabandsindbank.co.in/content/new-senior' },
      { text: 'PSB Mortgage', href: 'https://punjabandsindbank.co.in/content/mortgage-loan' },
      { text: 'PSB Vyapar', href: 'https://punjabandsindbank.co.in/content/vyapar-loan' },
      { text: 'PSB SME Liquid Plus', href: 'https://punjabandsindbank.co.in/content/sme-liquid-plus' },
      { text: 'PSB Kisan Home Loan', href: 'https://punjabandsindbank.co.in/content/psb-kisan-home-loan' },
      { text: 'PSB Contractor Plus', href: 'https://punjabandsindbank.co.in/content/contractorplus' },
      { text: 'PSB Gold Loan', href: 'https://punjabandsindbank.co.in/content/goldloan' },
      { text: 'PSB Commercial Vehicle', href: 'https://punjabandsindbank.co.in/content/commercial-vehicle' },
      { text: 'PSB Personal Loan', href: 'https://punjabandsindbank.co.in//content/psbpersonal-loan' }
    ];

    // Add list items for each loan
    loans.forEach(function (loan) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = loan.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer'; // For security
      a.textContent = loan.text;
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Append the list to the container
    container.appendChild(ul);

    // Append the container to the chatbox (assumes chatbox is a valid DOM element)
    chatbox.appendChild(container);
  }




  else if (input.includes("non-schematic msme")) {
    debugger
    var links = [
      {
        text: "for loan interest rate",
        href: "https://punjabandsindbank.co.in/content/loanintnew",
      },
    ];

    // Select or create a container element to hold the links
    var container = document.getElementById("link-container");
    if (!container) {
      container = document.createElement("div"); // Create a container if it doesn't exist
      container.classList.add("extra")

      container.id = "link-container";
      document.body.appendChild(container); // Append it to the body or desired container
    }

    // Iterate over the links and append them to the container
    links.forEach(function (link) {
      var a = document.createElement("a");
      a.href = link.href;
      a.target = "_blank"; // Open link in a new tab
      a.textContent = link.text;
      a.style.display = "block"; // Optional: Ensure links appear on separate lines
      container.appendChild(a); // Append the link to the container
    });
  }





  else if (input.includes("interest rates") || input.includes("i want to know interest rate") || input.includes("what is interest rate?") || input.includes("interest")) {
    // Create a container for the interest rates information
    var container = document.createElement('div');
    container.classList.add("extra")

    //container.className = 'listing';

    // Add an informational text
    var infoText = document.createElement('p');
    infoText.textContent = "Interest rates vary from loan to loan and across applicants for the same loan. We recommend that you check the loan page to know what interest rates are applicable for your loan type.";
    container.appendChild(infoText);

    // Create the unordered list
    var ul = document.createElement('ul');
    ul.style.display = 'block';
    //ul.className = 'box';
    // Array of interest rate links
    var interestRates = [
      { text: 'Deposit', href: 'https://punjabandsindbank.co.in/content/interestdom' },
      { text: 'NRE Term Deposit', href: 'https://punjabandsindbank.co.in/content/interestdom-cir' },
      { text: 'Interest Rates _ NRI', href: 'https://punjabandsindbank.co.in/content/interestforex' },
      { text: 'Forex Daily Rate Card', href: 'https://punjabandsindbank.co.in/module/forex-daily-rate-card' },
      { text: 'Loans & Advances', href: 'https://punjabandsindbank.co.in/content/loanint' },
      { text: 'Base Rate', href: 'https://punjabandsindbank.co.in/content/base-rate' },
      { text: 'BPLR', href: 'https://punjabandsindbank.co.in/content/base-rate' }
    ];

    // Add list items for each interest rate
    interestRates.forEach(function (rate) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = rate.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer'; // For security
      a.textContent = rate.text;
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Append the list to the container
    container.appendChild(ul);

    // Add a concluding statement with a link to the website
    var moreDetails = document.createElement('strong');
    moreDetails.innerHTML = "For more details, please visit the website: <a href='https://punjabandsindbank.co.in/content/interest-rates' target='_blank'>Interest Rates Page</a>";
    container.appendChild(moreDetails);

    // Append the container to the chatbox (assumes chatbox is a valid DOM element)
    chatbox.appendChild(container);
  }



  else if (input.includes("online payment") || input.includes("pay bills") || input.includes("recharge")) {
    // Create a container for the online payment options
    var container = document.createElement('div');
    container.classList.add("extra")

    // Add a heading
    var heading = document.createElement('h2');
    heading.textContent = "Online Payment";
    container.appendChild(heading);

    // Create an unordered list
    var ul = document.createElement('ul');
    ul.style.display = 'block';
    ul.className = 'box';
    // Array of online payment links
    var paymentLinks = [
      { text: 'Excise and Service Tax', href: 'https://punjabandsindbank.co.in/content/excise-service-tax' },
      { text: 'Direct tax/Income tax', href: 'https://punjabandsindbank.co.in/content/excise-service-tax' },
      { text: 'CST/DVAT Payment', href: 'https://punjabandsindbank.co.in/content/excise-service-tax' },
      { text: 'Commercial Taxes, Govt of Tamilnadu', href: 'https://punjabandsindbank.co.in/content/excise-service-tax' },
      { text: 'Bill Payment', href: 'https://punjabandsindbank.co.in/content/bbps' },
      { text: 'Donations', href: 'https://punjabandsindbank.co.in/content/donations' },
      { text: 'Debit Freeze Account', href: 'https://punjabandsindbank.co.in/content/debitfreezeaccount' }
    ];

    // Add list items for each payment link
    paymentLinks.forEach(function (link) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = link.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer'; // Security enhancement
      a.textContent = link.text;
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Append the list to the container
    container.appendChild(ul);

    // Append the container to the chatbox (assumes chatbox is a valid DOM element)
    chatbox.appendChild(container);
  }

  //----------
  else if (input.includes("balance") || input.includes("check balance")) {
    // Create a container for balance-related information
    var container = document.createElement('div');
    container.classList.add("extra")

    // Add a heading
    var heading = document.createElement('h2');
    heading.textContent = "Balance Inquiry";
    container.appendChild(heading);

    // Provide options for balance inquiry
    var description = document.createElement('p');
    description.textContent = "You can check your balance through the following methods:";
    container.appendChild(description);

    // Create an unordered list
    var ul = document.createElement('ul');
    ul.style.display = 'block';
    ul.className = 'box';

    // Array of balance inquiry options
    var balanceOptions = [
      { text: 'Check via Net Banking', href: 'https://punjabandsindbank.co.in/content/netbanking' },
      { text: 'Mobile Banking App', href: 'https://punjabandsindbank.co.in/content/mobilebanking' },
      { text: 'Missed Call Service', href: 'https://punjabandsindbank.co.in/content/missed-call-banking' },
      { text: 'Visit Nearest ATM', href: 'https://punjabandsindbank.co.in/content/atm-locator' },
      { text: 'Visit Nearest Branch', href: 'https://punjabandsindbank.co.in/content/branch-locator' }
    ];

    // Add list items for each balance inquiry option
    balanceOptions.forEach(function (option) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = option.href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer'; // Security enhancement
      a.textContent = option.text;
      li.appendChild(a);
      ul.appendChild(li);
    });

    // Append the list to the container
    container.appendChild(ul);

    // Append the container to the chatbox (assumes chatbox is a valid DOM element)
    chatbox.appendChild(container);
  }





  else {
    output = "I'm sorry, I didn't understand that. Can you try rephrasing your question?";
  }

  if(output == ""){
    document.querySelectorAll("li.chat.incoming")[document.querySelectorAll("li.chat.incoming").length -1].children[1].remove()
  }

  return output;
};

//Function to handle chatbot logic for predefined responses
const chatbotLogics = (input) => {
  let output = "";
  input = input.toLowerCase();

}
// Function to generate a response
const generateResponse = async (chatElement) => {
  const messageElement = chatElement.querySelector("p");

  // Use predefined chatbot logic for now
  const responseMessage = chatbotLogic(userMessage);

  // Update the response message
  messageElement.textContent = responseMessage;

  // Scroll to the latest message
  chatbox.scrollTo(0, chatbox.scrollHeight);
};

// Handle user chat input
const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  // Clear the input textarea and reset its height
  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  // Append user's message to the chatbox
  const outgoingChatLi = createChatLi(userMessage, "outgoing");
  chatbox.appendChild(outgoingChatLi);
  chatbox.scrollTo(0, chatbox.scrollHeight);

  // Display "Typing..." message while generating a response
  const incomingChatLi = createChatLi("Typing...", "incoming");
  chatbox.appendChild(incomingChatLi);
  chatbox.scrollTo(0, chatbox.scrollHeight);

  // Generate a response
  setTimeout(() => {
    generateResponse(incomingChatLi);
  }, 600);
};

// Adjust input height dynamically
chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

// Handle Enter key for sending messages
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

// Handle send button click
sendChatBtn.addEventListener("click", handleChat);

// Handle chatbot toggling
// chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
// closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
