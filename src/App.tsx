import { useEffect, useRef, useState, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "back"
  | "camera"
  | "check"
  | "chevron"
  | "clock"
  | "document"
  | "flash"
  | "gallery"
  | "headphones"
  | "help"
  | "home"
  | "lock"
  | "menu"
  | "more"
  | "play"
  | "search"
  | "shield"
  | "translate"
  | "volume"
  | "upload";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    back: <path d="m15 18-6-6 6-6" />,
    camera: (
      <>
        <path d="M14.5 5 13 3h-2L9.5 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4.5Z" />
        <circle cx="12" cy="12" r="3.5" />
      </>
    ),
    chevron: <path d="m8 10 4 4 4-4" />,
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    document: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v5h4M9 12h6M9 16h6" />
      </>
    ),
    headphones: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 14a2 2 0 0 1 2-2h2v7H6a2 2 0 0 1-2-2zm16 0a2 2 0 0 0-2-2h-2v7h2a2 2 0 0 0 2-2z" />
      </>
    ),
    flash: <path d="m13 2-7 12h6l-1 8 7-12h-6z" />,
    gallery: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8" cy="9" r="1.5" />
        <path d="m4 17 5-5 4 4 2-2 5 4" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.8 9a2.3 2.3 0 1 1 3.3 2.1c-.7.4-1.1.8-1.1 1.9M12 17h.01" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="19" cy="12" r="1" fill="currentColor" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5z" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 2 4.5 5v6c0 5.2 3.2 8.5 7.5 11 4.3-2.5 7.5-5.8 7.5-11V5z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    translate: (
      <>
        <path d="M4 5h8M8 3v2m3 0c-.8 3.5-3 6.3-6 8" />
        <path d="M5 9c1.2 1.8 2.7 3.1 4.5 4M14 20l4-10 4 10m-6.8-3h5.6" />
      </>
    ),
    volume: (
      <>
        <path d="M5 10v4h4l5 4V6l-5 4z" />
        <path d="M17 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V4m-4 4 4-4 4 4" />
        <path d="M5 14v5h14v-5" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}

function Logo() {
  return (
    <a className="logo" href="#" aria-label="VoiceLaw home">
      <span className="logo-mark" aria-hidden="true">
        <span className="pillar pillar-one" />
        <span className="pillar pillar-two" />
        <span className="pillar pillar-three" />
      </span>
      <span className="logo-type">
        Voice<span>Law</span>
      </span>
    </a>
  );
}

const translations = {
  English: {
    nav: ["How it works", "Privacy", "My documents", "Legal help"],
    chooseLanguage: "Choose language",
    menu: "Toggle menu",
    eyebrow: "Trusted legal clarity, in your language",
    title: "Understand every word.",
    titleAccent: "Know your rights.",
    intro:
      "Upload any court notice, police paper, or legal document. VoiceLaw explains it simply and speaks it aloud in the language you trust.",
    upload: "Upload document",
    photo: "Take a photo",
    drop: "Drop your legal document here",
    ready: "Ready to explain in plain language",
    browseHint: "or click to browse · PDF, JPG or PNG · Max 20 MB",
    choose: "Choose a document",
    chooseAnother: "Choose another file",
    security: "Your document is encrypted. Personal details are removed before AI analysis.",
    protection: "How we protect you",
    assurances: ["Indian law focused", "22 scheduled languages", "Private by design"],
    processKicker: "Simple by design",
    processTitle: "From legal paper to plain words",
    processIntro: "No legal knowledge needed. Get a clear explanation and next steps in under a minute.",
    steps: [
      ["Share your document", "Take a clear photo or upload a document from your device."],
      ["We read it securely", "Legal AI finds key clauses, deadlines, and risks without exposing your identity."],
      ["Listen and take action", "Hear a simple explanation, understand the risk, and know what to do next."],
    ],
    vault: "Your secure vault",
    recent: "Recent documents",
    viewAll: "View all",
    documents: [
      ["Rental Agreement", "Today, 10:32 AM", "Low risk"],
      ["Legal Notice", "Yesterday, 4:15 PM", "Review soon"],
      ["Land Sale Deed", "12 June, 2:08 PM", "Explained"],
    ],
    urgent: "When it matters most",
    expert: "Need a legal expert?",
    expertBody: "For complex or urgent matters, connect with verified legal aid through India’s Tele-Law service.",
    talk: "Talk to a legal advisor",
    official: "Official Government of India service",
    privacyKicker: "Privacy is your right",
    privacyTitle: "Your original document stays private.",
    privacyBody:
      "Before analysis, VoiceLaw removes names, Aadhaar numbers, and addresses. The AI sees only a safe, anonymized copy.",
    protected: "Protected",
    safe: "Safe for analysis",
    footer: "Legal papers made simple, secure, and spoken.",
    disclaimer: "VoiceLaw provides legal information, not legal advice.",
  },
  தமிழ்: {
    nav: ["இது எவ்வாறு செயல்படுகிறது", "தனியுரிமை", "எனது ஆவணங்கள்", "சட்ட உதவி"],
    chooseLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்",
    menu: "மெனுவைத் திறக்கவும்",
    eyebrow: "உங்கள் மொழியில் நம்பகமான சட்டத் தெளிவு",
    title: "ஒவ்வொரு சொல்லையும் புரிந்துகொள்ளுங்கள்.",
    titleAccent: "உங்கள் உரிமைகளை அறியுங்கள்.",
    intro:
      "நீதிமன்ற அறிவிப்பு, காவல் துறை ஆவணம் அல்லது சட்ட ஆவணத்தைப் பதிவேற்றுங்கள். VoiceLaw அதை எளிமையாக விளக்கி, நீங்கள் நம்பும் மொழியில் வாசித்துக் காட்டும்.",
    upload: "ஆவணத்தைப் பதிவேற்றவும்",
    photo: "புகைப்படம் எடுக்கவும்",
    drop: "உங்கள் சட்ட ஆவணத்தை இங்கே இடவும்",
    ready: "எளிய மொழியில் விளக்கத் தயார்",
    browseHint: "அல்லது தேர்வு செய்ய கிளிக் செய்யவும் · PDF, JPG அல்லது PNG · அதிகபட்சம் 20 MB",
    choose: "ஆவணத்தைத் தேர்ந்தெடுக்கவும்",
    chooseAnother: "வேறு கோப்பைத் தேர்ந்தெடுக்கவும்",
    security: "உங்கள் ஆவணம் குறியாக்கப்பட்டுள்ளது. AI ஆய்வுக்கு முன் தனிப்பட்ட விவரங்கள் நீக்கப்படும்.",
    protection: "நாங்கள் உங்களை எவ்வாறு பாதுகாக்கிறோம்",
    assurances: ["இந்திய சட்டத்தை மையமாகக் கொண்டது", "22 அட்டவணை மொழிகள்", "தனியுரிமை முதன்மை"],
    processKicker: "எளிமையாக வடிவமைக்கப்பட்டது",
    processTitle: "சட்ட ஆவணத்திலிருந்து எளிய வார்த்தைகளுக்கு",
    processIntro: "சட்ட அறிவு தேவையில்லை. ஒரு நிமிடத்திற்குள் தெளிவான விளக்கத்தையும் அடுத்த படிகளையும் பெறுங்கள்.",
    steps: [
      ["உங்கள் ஆவணத்தைப் பகிரவும்", "தெளிவான புகைப்படம் எடுக்கவும் அல்லது சாதனத்திலிருந்து ஆவணத்தைப் பதிவேற்றவும்."],
      ["நாங்கள் பாதுகாப்பாகப் படிக்கிறோம்", "உங்கள் அடையாளத்தை வெளிப்படுத்தாமல் முக்கிய விதிகள், காலக்கெடுக்கள் மற்றும் அபாயங்களை சட்ட AI கண்டறியும்."],
      ["கேட்டு நடவடிக்கை எடுங்கள்", "எளிய விளக்கத்தைக் கேட்டு, அபாயத்தைப் புரிந்து, அடுத்து என்ன செய்வது என்பதை அறியுங்கள்."],
    ],
    vault: "உங்கள் பாதுகாப்பான பெட்டகம்",
    recent: "சமீபத்திய ஆவணங்கள்",
    viewAll: "அனைத்தையும் காண்க",
    documents: [
      ["வாடகை ஒப்பந்தம்", "இன்று, காலை 10:32", "குறைந்த அபாயம்"],
      ["சட்ட அறிவிப்பு", "நேற்று, மாலை 4:15", "விரைவில் ஆய்வு"],
      ["நில விற்பனை பத்திரம்", "12 ஜூன், பிற்பகல் 2:08", "விளக்கப்பட்டது"],
    ],
    urgent: "மிகவும் முக்கியமான நேரத்தில்",
    expert: "சட்ட நிபுணர் தேவையா?",
    expertBody: "சிக்கலான அல்லது அவசரமான விஷயங்களுக்கு, இந்தியாவின் Tele-Law சேவை மூலம் சரிபார்க்கப்பட்ட சட்ட உதவியை அணுகுங்கள்.",
    talk: "சட்ட ஆலோசகரிடம் பேசுங்கள்",
    official: "இந்திய அரசின் அதிகாரப்பூர்வ சேவை",
    privacyKicker: "தனியுரிமை உங்கள் உரிமை",
    privacyTitle: "உங்கள் அசல் ஆவணம் தனிப்பட்டதாகவே இருக்கும்.",
    privacyBody: "ஆய்வுக்கு முன் பெயர்கள், ஆதார் எண்கள் மற்றும் முகவரிகளை VoiceLaw நீக்குகிறது. AI பாதுகாப்பான, அடையாளம் நீக்கப்பட்ட நகலை மட்டுமே பார்க்கும்.",
    protected: "பாதுகாக்கப்பட்டது",
    safe: "ஆய்வுக்குப் பாதுகாப்பானது",
    footer: "சட்ட ஆவணங்கள் எளிமையாக, பாதுகாப்பாக, குரல் வடிவில்.",
    disclaimer: "VoiceLaw சட்டத் தகவலை வழங்குகிறது; சட்ட ஆலோசனையை அல்ல.",
  },
  हिन्दी: {
    nav: ["यह कैसे काम करता है", "गोपनीयता", "मेरे दस्तावेज़", "कानूनी सहायता"],
    chooseLanguage: "भाषा चुनें",
    menu: "मेनू खोलें",
    eyebrow: "आपकी भाषा में भरोसेमंद कानूनी स्पष्टता",
    title: "हर शब्द को समझें।",
    titleAccent: "अपने अधिकार जानें।",
    intro:
      "कोई भी अदालती नोटिस, पुलिस पेपर या कानूनी दस्तावेज़ अपलोड करें। VoiceLaw इसे सरलता से समझाता है और आपकी भरोसेमंद भाषा में बोलकर सुनाता है।",
    upload: "दस्तावेज़ अपलोड करें",
    photo: "फ़ोटो लें",
    drop: "अपना कानूनी दस्तावेज़ यहाँ डालें",
    ready: "सरल भाषा में समझाने के लिए तैयार",
    browseHint: "या चुनने के लिए क्लिक करें · PDF, JPG या PNG · अधिकतम 20 MB",
    choose: "दस्तावेज़ चुनें",
    chooseAnother: "दूसरी फ़ाइल चुनें",
    security: "आपका दस्तावेज़ एन्क्रिप्टेड है। AI विश्लेषण से पहले निजी जानकारी हटा दी जाती है।",
    protection: "हम आपकी सुरक्षा कैसे करते हैं",
    assurances: ["भारतीय कानून पर केंद्रित", "22 अनुसूचित भाषाएँ", "गोपनीयता के लिए निर्मित"],
    processKicker: "सरलता से डिज़ाइन किया गया",
    processTitle: "कानूनी कागज़ से सरल शब्दों तक",
    processIntro: "कानूनी ज्ञान की आवश्यकता नहीं। एक मिनट से कम समय में स्पष्ट व्याख्या और अगले कदम पाएँ।",
    steps: [
      ["अपना दस्तावेज़ साझा करें", "साफ़ फ़ोटो लें या अपने डिवाइस से दस्तावेज़ अपलोड करें।"],
      ["हम इसे सुरक्षित रूप से पढ़ते हैं", "कानूनी AI आपकी पहचान बताए बिना मुख्य धाराएँ, समय-सीमाएँ और जोखिम खोजता है।"],
      ["सुनें और कार्रवाई करें", "सरल व्याख्या सुनें, जोखिम समझें और जानें कि आगे क्या करना है।"],
    ],
    vault: "आपकी सुरक्षित तिजोरी",
    recent: "हाल के दस्तावेज़",
    viewAll: "सभी देखें",
    documents: [
      ["किराया अनुबंध", "आज, सुबह 10:32", "कम जोखिम"],
      ["कानूनी नोटिस", "कल, शाम 4:15", "जल्द समीक्षा करें"],
      ["भूमि बिक्री विलेख", "12 जून, दोपहर 2:08", "समझाया गया"],
    ],
    urgent: "जब सबसे ज़्यादा ज़रूरत हो",
    expert: "कानूनी विशेषज्ञ चाहिए?",
    expertBody: "जटिल या अत्यावश्यक मामलों के लिए भारत की Tele-Law सेवा से सत्यापित कानूनी सहायता पाएँ।",
    talk: "कानूनी सलाहकार से बात करें",
    official: "भारत सरकार की आधिकारिक सेवा",
    privacyKicker: "गोपनीयता आपका अधिकार है",
    privacyTitle: "आपका मूल दस्तावेज़ निजी रहता है।",
    privacyBody: "विश्लेषण से पहले VoiceLaw नाम, आधार नंबर और पते हटा देता है। AI केवल सुरक्षित, पहचान-रहित प्रति देखता है।",
    protected: "सुरक्षित",
    safe: "विश्लेषण के लिए सुरक्षित",
    footer: "कानूनी कागज़ात—सरल, सुरक्षित और आवाज़ में।",
    disclaimer: "VoiceLaw कानूनी जानकारी देता है, कानूनी सलाह नहीं।",
  },
  മലയാളം: {
    nav: ["ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു", "സ്വകാര്യത", "എന്റെ രേഖകൾ", "നിയമ സഹായം"],
    chooseLanguage: "ഭാഷ തിരഞ്ഞെടുക്കുക",
    menu: "മെനു തുറക്കുക",
    eyebrow: "നിങ്ങളുടെ ഭാഷയിൽ വിശ്വസനീയമായ നിയമ വ്യക്തത",
    title: "ഓരോ വാക്കും മനസ്സിലാക്കൂ.",
    titleAccent: "നിങ്ങളുടെ അവകാശങ്ങൾ അറിയൂ.",
    intro:
      "കോടതി നോട്ടീസോ പോലീസ് രേഖയോ നിയമ രേഖയോ അപ്‌ലോഡ് ചെയ്യുക. VoiceLaw അത് ലളിതമായി വിശദീകരിക്കുകയും നിങ്ങൾ വിശ്വസിക്കുന്ന ഭാഷയിൽ വായിച്ചുകേൾപ്പിക്കുകയും ചെയ്യും.",
    upload: "രേഖ അപ്‌ലോഡ് ചെയ്യുക",
    photo: "ഫോട്ടോ എടുക്കുക",
    drop: "നിങ്ങളുടെ നിയമ രേഖ ഇവിടെ ഇടുക",
    ready: "ലളിതമായ ഭാഷയിൽ വിശദീകരിക്കാൻ തയ്യാർ",
    browseHint: "അല്ലെങ്കിൽ തിരഞ്ഞെടുക്കാൻ ക്ലിക്ക് ചെയ്യുക · PDF, JPG അല്ലെങ്കിൽ PNG · പരമാവധി 20 MB",
    choose: "ഒരു രേഖ തിരഞ്ഞെടുക്കുക",
    chooseAnother: "മറ്റൊരു ഫയൽ തിരഞ്ഞെടുക്കുക",
    security: "നിങ്ങളുടെ രേഖ എൻക്രിപ്റ്റ് ചെയ്തിരിക്കുന്നു. AI വിശകലനത്തിന് മുമ്പ് വ്യക്തിഗത വിവരങ്ങൾ നീക്കം ചെയ്യും.",
    protection: "ഞങ്ങൾ നിങ്ങളെ എങ്ങനെ സംരക്ഷിക്കുന്നു",
    assurances: ["ഇന്ത്യൻ നിയമത്തിൽ കേന്ദ്രീകരിച്ചത്", "22 പട്ടികഭാഷകൾ", "സ്വകാര്യതയ്ക്കായി രൂപകൽപ്പന ചെയ്തത്"],
    processKicker: "ലാളിത്യത്തിനായി രൂപകൽപ്പന ചെയ്തത്",
    processTitle: "നിയമ രേഖയിൽ നിന്ന് ലളിതമായ വാക്കുകളിലേക്ക്",
    processIntro: "നിയമ അറിവ് ആവശ്യമില്ല. ഒരു മിനിറ്റിനുള്ളിൽ വ്യക്തമായ വിശദീകരണവും അടുത്ത നടപടികളും നേടൂ.",
    steps: [
      ["നിങ്ങളുടെ രേഖ പങ്കിടുക", "വ്യക്തമായ ഫോട്ടോ എടുക്കുക അല്ലെങ്കിൽ ഉപകരണത്തിൽ നിന്ന് രേഖ അപ്‌ലോഡ് ചെയ്യുക."],
      ["ഞങ്ങൾ സുരക്ഷിതമായി വായിക്കുന്നു", "നിങ്ങളുടെ വ്യക്തിത്വം വെളിപ്പെടുത്താതെ പ്രധാന വ്യവസ്ഥകളും സമയപരിധികളും അപകടസാധ്യതകളും നിയമ AI കണ്ടെത്തും."],
      ["കേൾക്കൂ, നടപടിയെടുക്കൂ", "ലളിതമായ വിശദീകരണം കേട്ട് അപകടസാധ്യത മനസ്സിലാക്കി അടുത്തത് എന്തെന്ന് അറിയൂ."],
    ],
    vault: "നിങ്ങളുടെ സുരക്ഷിത നിലവറ",
    recent: "സമീപകാല രേഖകൾ",
    viewAll: "എല്ലാം കാണുക",
    documents: [
      ["വാടക കരാർ", "ഇന്ന്, രാവിലെ 10:32", "കുറഞ്ഞ അപകടം"],
      ["നിയമ നോട്ടീസ്", "ഇന്നലെ, വൈകിട്ട് 4:15", "ഉടൻ പരിശോധിക്കുക"],
      ["ഭൂമി വിൽപ്പന ആധാരം", "12 ജൂൺ, ഉച്ചയ്ക്ക് 2:08", "വിശദീകരിച്ചു"],
    ],
    urgent: "ഏറ്റവും ആവശ്യമുള്ളപ്പോൾ",
    expert: "നിയമ വിദഗ്ധനെ ആവശ്യമുണ്ടോ?",
    expertBody: "സങ്കീർണ്ണമോ അടിയന്തരമോ ആയ കാര്യങ്ങൾക്ക് ഇന്ത്യയുടെ Tele-Law സേവനത്തിലൂടെ പരിശോധിച്ചുറപ്പിച്ച നിയമ സഹായം നേടൂ.",
    talk: "നിയമ ഉപദേഷ്ടാവുമായി സംസാരിക്കുക",
    official: "ഇന്ത്യാ സർക്കാരിന്റെ ഔദ്യോഗിക സേവനം",
    privacyKicker: "സ്വകാര്യത നിങ്ങളുടെ അവകാശമാണ്",
    privacyTitle: "നിങ്ങളുടെ യഥാർത്ഥ രേഖ സ്വകാര്യമായി തുടരും.",
    privacyBody: "വിശകലനത്തിന് മുമ്പ് പേരുകൾ, ആധാർ നമ്പറുകൾ, വിലാസങ്ങൾ എന്നിവ VoiceLaw നീക്കം ചെയ്യും. AI സുരക്ഷിതവും പേരില്ലാത്തതുമായ പകർപ്പ് മാത്രം കാണും.",
    protected: "സംരക്ഷിതം",
    safe: "വിശകലനത്തിന് സുരക്ഷിതം",
    footer: "നിയമ രേഖകൾ ലളിതവും സുരക്ഷിതവും ശബ്ദരൂപത്തിലും.",
    disclaimer: "VoiceLaw നിയമ വിവരങ്ങൾ നൽകുന്നു; നിയമോപദേശം അല്ല.",
  },
  తెలుగు: {
    nav: ["ఇది ఎలా పనిచేస్తుంది", "గోప్యత", "నా పత్రాలు", "న్యాయ సహాయం"],
    chooseLanguage: "భాషను ఎంచుకోండి",
    menu: "మెనూను తెరవండి",
    eyebrow: "మీ భాషలో విశ్వసనీయమైన న్యాయ స్పష్టత",
    title: "ప్రతి పదాన్ని అర్థం చేసుకోండి.",
    titleAccent: "మీ హక్కులను తెలుసుకోండి.",
    intro:
      "ఏదైనా కోర్టు నోటీసు, పోలీసు పత్రం లేదా న్యాయ పత్రాన్ని అప్‌లోడ్ చేయండి. VoiceLaw దానిని సరళంగా వివరించి, మీరు నమ్మే భాషలో చదివి వినిపిస్తుంది.",
    upload: "పత్రాన్ని అప్‌లోడ్ చేయండి",
    photo: "ఫోటో తీయండి",
    drop: "మీ న్యాయ పత్రాన్ని ఇక్కడ ఉంచండి",
    ready: "సరళమైన భాషలో వివరించడానికి సిద్ధం",
    browseHint: "లేదా ఎంచుకోవడానికి క్లిక్ చేయండి · PDF, JPG లేదా PNG · గరిష్టం 20 MB",
    choose: "పత్రాన్ని ఎంచుకోండి",
    chooseAnother: "మరొక ఫైల్‌ను ఎంచుకోండి",
    security: "మీ పత్రం ఎన్‌క్రిప్ట్ చేయబడింది. AI విశ్లేషణకు ముందు వ్యక్తిగత వివరాలు తొలగించబడతాయి.",
    protection: "మేము మిమ్మల్ని ఎలా రక్షిస్తాము",
    assurances: ["భారతీయ చట్టంపై దృష్టి", "22 షెడ్యూల్డ్ భాషలు", "గోప్యత కోసం రూపొందించబడింది"],
    processKicker: "సరళత కోసం రూపొందించబడింది",
    processTitle: "న్యాయ పత్రం నుండి సరళమైన మాటల వరకు",
    processIntro: "న్యాయ పరిజ్ఞానం అవసరం లేదు. ఒక నిమిషంలో స్పష్టమైన వివరణ, తదుపరి చర్యలు పొందండి.",
    steps: [
      ["మీ పత్రాన్ని పంచుకోండి", "స్పష్టమైన ఫోటో తీయండి లేదా మీ పరికరం నుండి పత్రాన్ని అప్‌లోడ్ చేయండి."],
      ["మేము సురక్షితంగా చదువుతాము", "మీ గుర్తింపును వెల్లడించకుండా ముఖ్య నిబంధనలు, గడువులు, ప్రమాదాలను న్యాయ AI గుర్తిస్తుంది."],
      ["విని చర్య తీసుకోండి", "సరళమైన వివరణ విని, ప్రమాదాన్ని అర్థం చేసుకొని, తర్వాత ఏమి చేయాలో తెలుసుకోండి."],
    ],
    vault: "మీ సురక్షిత ఖజానా",
    recent: "ఇటీవలి పత్రాలు",
    viewAll: "అన్నీ చూడండి",
    documents: [
      ["అద్దె ఒప్పందం", "ఈరోజు, ఉదయం 10:32", "తక్కువ ప్రమాదం"],
      ["న్యాయ నోటీసు", "నిన్న, సాయంత్రం 4:15", "త్వరలో సమీక్షించండి"],
      ["భూమి అమ్మకపు దస్తావేజు", "12 జూన్, మధ్యాహ్నం 2:08", "వివరించబడింది"],
    ],
    urgent: "అత్యంత అవసరమైనప్పుడు",
    expert: "న్యాయ నిపుణుడు కావాలా?",
    expertBody: "సంక్లిష్టమైన లేదా అత్యవసర విషయాలకు భారతదేశ Tele-Law సేవ ద్వారా ధృవీకరించబడిన న్యాయ సహాయం పొందండి.",
    talk: "న్యాయ సలహాదారుతో మాట్లాడండి",
    official: "భారత ప్రభుత్వ అధికారిక సేవ",
    privacyKicker: "గోప్యత మీ హక్కు",
    privacyTitle: "మీ అసలు పత్రం గోప్యంగా ఉంటుంది.",
    privacyBody: "విశ్లేషణకు ముందు VoiceLaw పేర్లు, ఆధార్ నంబర్లు, చిరునామాలను తొలగిస్తుంది. AI సురక్షితమైన, గుర్తింపు లేని కాపీని మాత్రమే చూస్తుంది.",
    protected: "రక్షించబడింది",
    safe: "విశ్లేషణకు సురక్షితం",
    footer: "న్యాయ పత్రాలు సరళంగా, సురక్షితంగా, శబ్ద రూపంలో.",
    disclaimer: "VoiceLaw న్యాయ సమాచారాన్ని అందిస్తుంది; న్యాయ సలహాను కాదు.",
  },
} as const;

type Language = keyof typeof translations;
const languageOptions: Language[] = ["English", "தமிழ்", "हिन्दी", "മലയാളം", "తెలుగు"];
const languageCodes: Record<Language, string> = {
  English: "en",
  தமிழ்: "ta",
  हिन्दी: "hi",
  മലയാളം: "ml",
  తెలుగు: "te",
};
const documentTones = ["safe", "watch", "neutral"];

const appCopy = {
  English: {
    edition: "The citizen’s legal companion",
    editionNo: "Morning edition · Chennai",
    scanPrompt: "Tap the camera to scan a legal document",
    featureTitle: ["22 Languages", "Private by design", "Real legal help"],
    featureBody: ["Spoken out loud", "Personal details removed", "Connect through Tele-Law"],
    home: "Home",
    vault: "My papers",
    help: "Legal help",
    scanTitle: "Scan your document",
    scanHint: "Place the full page inside the frame",
    holdSteady: "Hold steady · Good lighting",
    analyzing: "Reading your document",
    analyzeNote: "Removing personal details and finding the law",
    analyzeSteps: ["Text captured", "Identity protected", "Checking legal risk"],
    resultKicker: "Plain-language report",
    resultTitle: "Legal notice explained",
    risk: "Review soon",
    riskBody: "This notice asks for a reply within 15 days. It does not order an immediate arrest.",
    listen: "Listen in your language",
    summary: "What this means",
    summaryBody: "The sender claims an unpaid amount and is asking you to respond. Keep proof of payments and do not ignore the deadline.",
    deadline: "Reply by 28 June",
    next: "What to do next",
    actions: ["Save payment receipts", "Do not sign a new agreement", "Speak to a legal advisor"],
    allDocuments: "Your legal papers",
    search: "Search documents",
    chooseLanguage: "Choose your language",
    languageNote: "The full app and voice explanation will use this language.",
    done: "Done",
    back: "Back",
  },
  தமிழ்: {
    edition: "குடிமக்களின் சட்டத் துணை",
    editionNo: "காலைப் பதிப்பு · சென்னை",
    scanPrompt: "சட்ட ஆவணத்தை ஸ்கேன் செய்ய கேமராவைத் தட்டவும்",
    featureTitle: ["22 மொழிகள்", "தனியுரிமை முதன்மை", "உண்மையான சட்ட உதவி"],
    featureBody: ["குரலில் கேளுங்கள்", "தனிப்பட்ட விவரங்கள் நீக்கப்படும்", "Tele-Law மூலம் இணையுங்கள்"],
    home: "முகப்பு",
    vault: "என் ஆவணங்கள்",
    help: "சட்ட உதவி",
    scanTitle: "உங்கள் ஆவணத்தை ஸ்கேன் செய்யவும்",
    scanHint: "முழுப் பக்கத்தையும் சட்டகத்திற்குள் வைக்கவும்",
    holdSteady: "அசையாமல் பிடிக்கவும் · நல்ல வெளிச்சம்",
    analyzing: "உங்கள் ஆவணம் படிக்கப்படுகிறது",
    analyzeNote: "தனிப்பட்ட விவரங்களை நீக்கி சட்டத்தை கண்டறிகிறது",
    analyzeSteps: ["உரை பதிவு செய்யப்பட்டது", "அடையாளம் பாதுகாக்கப்பட்டது", "சட்ட அபாயம் சரிபார்க்கப்படுகிறது"],
    resultKicker: "எளிய மொழி அறிக்கை",
    resultTitle: "சட்ட அறிவிப்பு விளக்கம்",
    risk: "விரைவில் ஆய்வு செய்யவும்",
    riskBody: "இந்த அறிவிப்பு 15 நாட்களுக்குள் பதில் கேட்கிறது. உடனடி கைது உத்தரவு இதில் இல்லை.",
    listen: "உங்கள் மொழியில் கேளுங்கள்",
    summary: "இதன் பொருள்",
    summaryBody: "அனுப்புநர் செலுத்தப்படாத தொகையைக் கோரி பதில் கேட்கிறார். பணம் செலுத்திய ஆதாரங்களை வைத்திருந்து காலக்கெடுவைத் தவறவிடாதீர்கள்.",
    deadline: "ஜூன் 28க்குள் பதிலளிக்கவும்",
    next: "அடுத்து செய்ய வேண்டியது",
    actions: ["கட்டண ரசீதுகளைச் சேமிக்கவும்", "புதிய ஒப்பந்தத்தில் கையெழுத்திட வேண்டாம்", "சட்ட ஆலோசகரிடம் பேசவும்"],
    allDocuments: "உங்கள் சட்ட ஆவணங்கள்",
    search: "ஆவணங்களைத் தேடவும்",
    chooseLanguage: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
    languageNote: "முழு செயலியும் குரல் விளக்கமும் இந்த மொழியைப் பயன்படுத்தும்.",
    done: "முடிந்தது",
    back: "பின்செல்",
  },
  हिन्दी: {
    edition: "नागरिकों का कानूनी साथी",
    editionNo: "सुबह का संस्करण · चेन्नई",
    scanPrompt: "कानूनी दस्तावेज़ स्कैन करने के लिए कैमरा दबाएँ",
    featureTitle: ["22 भाषाएँ", "गोपनीयता के लिए निर्मित", "वास्तविक कानूनी सहायता"],
    featureBody: ["आवाज़ में सुनें", "निजी विवरण हटाए जाते हैं", "Tele-Law से जुड़ें"],
    home: "होम",
    vault: "मेरे कागज़",
    help: "कानूनी सहायता",
    scanTitle: "अपना दस्तावेज़ स्कैन करें",
    scanHint: "पूरा पृष्ठ फ्रेम के अंदर रखें",
    holdSteady: "स्थिर रखें · अच्छी रोशनी",
    analyzing: "आपका दस्तावेज़ पढ़ा जा रहा है",
    analyzeNote: "निजी जानकारी हटाकर संबंधित कानून खोजा जा रहा है",
    analyzeSteps: ["टेक्स्ट पढ़ लिया गया", "पहचान सुरक्षित है", "कानूनी जोखिम जाँचा जा रहा है"],
    resultKicker: "सरल भाषा रिपोर्ट",
    resultTitle: "कानूनी नोटिस की व्याख्या",
    risk: "जल्द समीक्षा करें",
    riskBody: "यह नोटिस 15 दिनों के अंदर जवाब माँगता है। इसमें तत्काल गिरफ्तारी का आदेश नहीं है।",
    listen: "अपनी भाषा में सुनें",
    summary: "इसका क्या मतलब है",
    summaryBody: "भेजने वाला बकाया राशि का दावा कर जवाब माँग रहा है। भुगतान के प्रमाण रखें और समय-सीमा न चूकें।",
    deadline: "28 जून तक जवाब दें",
    next: "अब क्या करें",
    actions: ["भुगतान रसीदें सुरक्षित रखें", "नए समझौते पर हस्ताक्षर न करें", "कानूनी सलाहकार से बात करें"],
    allDocuments: "आपके कानूनी कागज़",
    search: "दस्तावेज़ खोजें",
    chooseLanguage: "अपनी भाषा चुनें",
    languageNote: "पूरा ऐप और आवाज़ की व्याख्या इसी भाषा में होगी।",
    done: "पूर्ण",
    back: "वापस",
  },
  മലയാളം: {
    edition: "പൗരന്റെ നിയമ സഹായി",
    editionNo: "പ്രഭാത പതിപ്പ് · ചെന്നൈ",
    scanPrompt: "നിയമ രേഖ സ്കാൻ ചെയ്യാൻ ക്യാമറ അമർത്തുക",
    featureTitle: ["22 ഭാഷകൾ", "സ്വകാര്യതയ്ക്കായി നിർമ്മിച്ചത്", "യഥാർത്ഥ നിയമ സഹായം"],
    featureBody: ["ശബ്ദത്തിൽ കേൾക്കൂ", "വ്യക്തിഗത വിവരങ്ങൾ നീക്കം ചെയ്യും", "Tele-Law വഴി ബന്ധപ്പെടൂ"],
    home: "ഹോം",
    vault: "എന്റെ രേഖകൾ",
    help: "നിയമ സഹായം",
    scanTitle: "നിങ്ങളുടെ രേഖ സ്കാൻ ചെയ്യുക",
    scanHint: "പൂർണ്ണ പേജ് ഫ്രെയിമിനുള്ളിൽ വയ്ക്കുക",
    holdSteady: "അനക്കാതെ പിടിക്കുക · നല്ല വെളിച്ചം",
    analyzing: "നിങ്ങളുടെ രേഖ വായിക്കുന്നു",
    analyzeNote: "വ്യക്തിഗത വിവരങ്ങൾ നീക്കി നിയമം കണ്ടെത്തുന്നു",
    analyzeSteps: ["ടെക്സ്റ്റ് പകർത്തി", "തിരിച്ചറിയൽ സംരക്ഷിച്ചു", "നിയമ അപകടസാധ്യത പരിശോധിക്കുന്നു"],
    resultKicker: "ലളിതഭാഷാ റിപ്പോർട്ട്",
    resultTitle: "നിയമ നോട്ടീസ് വിശദീകരിച്ചു",
    risk: "ഉടൻ പരിശോധിക്കുക",
    riskBody: "ഈ നോട്ടീസ് 15 ദിവസത്തിനുള്ളിൽ മറുപടി ആവശ്യപ്പെടുന്നു. ഉടൻ അറസ്റ്റ് ചെയ്യാനുള്ള ഉത്തരവ് ഇതിലില്ല.",
    listen: "നിങ്ങളുടെ ഭാഷയിൽ കേൾക്കൂ",
    summary: "ഇതിന്റെ അർത്ഥം",
    summaryBody: "അയച്ചയാൾ കുടിശ്ശിക തുക അവകാശപ്പെട്ട് മറുപടി ആവശ്യപ്പെടുന്നു. പണമടച്ചതിന്റെ തെളിവുകൾ സൂക്ഷിച്ച് സമയപരിധി പാലിക്കൂ.",
    deadline: "ജൂൺ 28നകം മറുപടി നൽകുക",
    next: "അടുത്തതായി ചെയ്യേണ്ടത്",
    actions: ["പണമടച്ച രസീതുകൾ സൂക്ഷിക്കുക", "പുതിയ കരാറിൽ ഒപ്പിടരുത്", "നിയമ ഉപദേഷ്ടാവുമായി സംസാരിക്കുക"],
    allDocuments: "നിങ്ങളുടെ നിയമ രേഖകൾ",
    search: "രേഖകൾ തിരയുക",
    chooseLanguage: "നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
    languageNote: "മുഴുവൻ ആപ്പും ശബ്ദ വിശദീകരണവും ഈ ഭാഷ ഉപയോഗിക്കും.",
    done: "പൂർത്തിയായി",
    back: "തിരികെ",
  },
  తెలుగు: {
    edition: "పౌరుల న్యాయ సహచరుడు",
    editionNo: "ఉదయ సంచిక · చెన్నై",
    scanPrompt: "న్యాయ పత్రాన్ని స్కాన్ చేయడానికి కెమెరాను నొక్కండి",
    featureTitle: ["22 భాషలు", "గోప్యత కోసం రూపొందించబడింది", "నిజమైన న్యాయ సహాయం"],
    featureBody: ["శబ్దంలో వినండి", "వ్యక్తిగత వివరాలు తొలగించబడతాయి", "Tele-Law ద్వారా సంప్రదించండి"],
    home: "హోమ్",
    vault: "నా పత్రాలు",
    help: "న్యాయ సహాయం",
    scanTitle: "మీ పత్రాన్ని స్కాన్ చేయండి",
    scanHint: "పూర్తి పేజీని ఫ్రేమ్‌లో ఉంచండి",
    holdSteady: "కదలకుండా ఉంచండి · మంచి వెలుతురు",
    analyzing: "మీ పత్రాన్ని చదువుతోంది",
    analyzeNote: "వ్యక్తిగత వివరాలను తొలగించి చట్టాన్ని కనుగొంటోంది",
    analyzeSteps: ["వచనం సేకరించబడింది", "గుర్తింపు రక్షించబడింది", "న్యాయ ప్రమాదం తనిఖీ అవుతోంది"],
    resultKicker: "సరళ భాషా నివేదిక",
    resultTitle: "న్యాయ నోటీసు వివరణ",
    risk: "త్వరలో సమీక్షించండి",
    riskBody: "ఈ నోటీసు 15 రోజుల్లో సమాధానం కోరుతోంది. తక్షణ అరెస్టుకు ఆదేశం లేదు.",
    listen: "మీ భాషలో వినండి",
    summary: "దీని అర్థం",
    summaryBody: "పంపినవారు చెల్లించని మొత్తాన్ని కోరుతూ సమాధానం అడుగుతున్నారు. చెల్లింపు ఆధారాలను ఉంచి గడువును విస్మరించవద్దు.",
    deadline: "జూన్ 28లోపు సమాధానం ఇవ్వండి",
    next: "తర్వాత చేయాల్సింది",
    actions: ["చెల్లింపు రసీదులను భద్రపరచండి", "కొత్త ఒప్పందంపై సంతకం చేయవద్దు", "న్యాయ సలహాదారుతో మాట్లాడండి"],
    allDocuments: "మీ న్యాయ పత్రాలు",
    search: "పత్రాలను వెతకండి",
    chooseLanguage: "మీ భాషను ఎంచుకోండి",
    languageNote: "పూర్తి యాప్ మరియు శబ్ద వివరణ ఈ భాషలో ఉంటాయి.",
    done: "పూర్తయింది",
    back: "వెనుకకు",
  },
} as const;

type Screen = "home" | "scan" | "analyzing" | "result" | "vault";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [language, setLanguage] = useState<Language>("English");
  const [screen, setScreen] = useState<Screen>("home");
  const [feature, setFeature] = useState(0);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const t = translations[language];
  const a = appCopy[language];

  useEffect(() => {
    if (screen !== "analyzing") return;
    const timer = window.setTimeout(() => setScreen("result"), 3200);
    return () => window.clearTimeout(timer);
  }, [screen]);

  const goHome = () => setScreen("home");

  return (
    <div className="mobile-stage" lang={languageCodes[language]}>
      <main className={`phone-app screen-${screen}`}>
        <div className="paper-grain" />
        <div className="status-bar"><strong>12:34</strong><span>•••  5G  ◒  44%</span></div>

        {screen === "home" && (
          <section className="mobile-screen home-screen">
            <header className="mobile-masthead">
              <Logo />
              <button onClick={() => setLanguageOpen(true)} aria-label={t.chooseLanguage}><Icon name="translate" size={25} /></button>
            </header>
            <div className="edition-line"><span>{a.edition}</span><span>{a.editionNo}</span></div>
            <div className="lead-story">
              <span className="overline">VoiceLaw · Public edition</span>
              <h1><span>{t.title}</span><em>{t.titleAccent}</em></h1>
              <p>{t.footer}</p>
            </div>
            <button className="feature-card" onClick={() => setFeature((feature + 1) % 3)}>
              <span className="feature-number">0{feature + 1}</span>
              <span className="feature-icon"><Icon name={feature === 0 ? "volume" : feature === 1 ? "shield" : "help"} /></span>
              <span className="feature-copy"><strong>{a.featureTitle[feature]}</strong><small>{a.featureBody[feature]}</small></span>
              <Icon name="arrow" size={19} />
            </button>
            <div className="carousel-dots">
              {[0, 1, 2].map((item) => <button className={feature === item ? "active" : ""} key={item} onClick={() => setFeature(item)} aria-label={`Feature ${item + 1}`} />)}
            </div>
            <p className="scan-prompt">{a.scanPrompt}</p>
            <button className="camera-button" onClick={() => setScreen("scan")} aria-label={a.scanTitle}>
              <span><Icon name="camera" size={28} /></span>
            </button>
            <BottomNav active="home" onHome={goHome} onVault={() => setScreen("vault")} labels={a} />
          </section>
        )}

        {screen === "scan" && (
          <section className="mobile-screen scan-screen">
            <header className="screen-header dark">
              <button onClick={goHome} aria-label={a.back}><Icon name="back" /></button>
              <div><strong>{a.scanTitle}</strong><small>{a.holdSteady}</small></div>
              <button><Icon name="flash" /></button>
            </header>
            <div className="camera-view">
              <div className="scan-document">
                <span className="doc-seal">LEGAL NOTICE</span>
                <i /><i /><i className="short" /><i /><i className="redacted" /><i /><i className="short" />
              </div>
              <div className="scan-corner top-left" /><div className="scan-corner top-right" />
              <div className="scan-corner bottom-left" /><div className="scan-corner bottom-right" />
              <p>{a.scanHint}</p>
            </div>
            <div className="camera-controls">
              <button className="gallery-button" onClick={() => inputRef.current?.click()}><Icon name="gallery" /></button>
              <input ref={inputRef} type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={() => setScreen("analyzing")} />
              <button className="shutter" onClick={() => setScreen("analyzing")}><span /></button>
              <button className="camera-more"><Icon name="more" /></button>
            </div>
          </section>
        )}

        {screen === "analyzing" && (
          <section className="mobile-screen analyzing-screen">
            <header className="minimal-masthead"><Logo /></header>
            <div className="analysis-copy"><span>{t.processKicker}</span><h1>{a.analyzing}</h1><p>{a.analyzeNote}</p></div>
            <div className="analysis-paper">
              <div className="analysis-scan-line" />
              <span className="paper-title" />
              <span /><span /><span className="short" /><span className="redacted" /><span /><span /><span className="short" />
              <div className="analysis-shield"><Icon name="shield" size={21} /></div>
            </div>
            <div className="analysis-steps">
              {a.analyzeSteps.map((step, index) => <div style={{ animationDelay: `${index * 0.75}s` }} key={step}><span><Icon name="check" size={13} /></span>{step}</div>)}
            </div>
          </section>
        )}

        {screen === "result" && (
          <section className="mobile-screen result-screen">
            <header className="screen-header">
              <button onClick={goHome} aria-label={a.back}><Icon name="back" /></button>
              <Logo />
              <button><Icon name="more" /></button>
            </header>
            <div className="result-edition"><span>{a.resultKicker}</span><span>28 · 06 · 2026</span></div>
            <article className="result-article">
              <span className="risk-label">{a.risk}</span>
              <h1>{a.resultTitle}</h1>
              <p className="risk-deck">{a.riskBody}</p>
              <button className={playing ? "audio-player playing" : "audio-player"} onClick={() => setPlaying(!playing)}>
                <span className="audio-play"><Icon name={playing ? "volume" : "play"} size={19} /></span>
                <span><strong>{a.listen}</strong><small>{language} · 1:24</small></span>
                <span className="waveform">{[1,2,3,4,5,6,7,8].map((bar) => <i key={bar} />)}</span>
              </button>
              <section className="summary-block"><span className="article-number">01</span><div><h2>{a.summary}</h2><p>{a.summaryBody}</p></div></section>
              <div className="deadline-card"><Icon name="clock" /><div><small>{t.documents[1][0]}</small><strong>{a.deadline}</strong></div></div>
              <section className="action-list"><h2>{a.next}</h2>{a.actions.map((action, index) => <div key={action}><span>{index + 1}</span><p>{action}</p>{index < 2 && <Icon name="check" size={16} />}</div>)}</section>
              <a className="legal-aid-button" href="https://tele-law.in/" target="_blank" rel="noreferrer"><Icon name="help" />{t.talk}<Icon name="arrow" /></a>
              <p className="legal-note">{t.disclaimer}</p>
            </article>
            <BottomNav active="home" onHome={goHome} onVault={() => setScreen("vault")} labels={a} />
          </section>
        )}

        {screen === "vault" && (
          <section className="mobile-screen vault-screen">
            <header className="screen-header"><button onClick={goHome}><Icon name="back" /></button><Logo /><button onClick={() => setLanguageOpen(true)}><Icon name="translate" /></button></header>
            <div className="vault-heading"><span>{t.vault}</span><h1>{a.allDocuments}</h1><p>{t.security}</p></div>
            <label className="search-box"><Icon name="search" size={18} /><input placeholder={a.search} /></label>
            <div className="vault-list">
              {t.documents.map((document, index) => (
                <button key={document[0]} onClick={() => setScreen("result")}>
                  <span className="file-number">0{index + 1}</span>
                  <span className="file-icon"><Icon name="document" /></span>
                  <span className="file-copy"><strong>{document[0]}</strong><small>{document[1]}</small></span>
                  <span className={`file-status ${documentTones[index]}`}>{document[2]}</span>
                </button>
              ))}
            </div>
            <button className="vault-scan" onClick={() => setScreen("scan")}><Icon name="camera" />{t.photo}</button>
            <BottomNav active="vault" onHome={goHome} onVault={() => setScreen("vault")} labels={a} />
          </section>
        )}

        {languageOpen && (
          <div className="sheet-backdrop" onClick={() => setLanguageOpen(false)}>
            <section className="language-sheet" onClick={(event) => event.stopPropagation()}>
              <span className="sheet-handle" />
              <div className="sheet-heading"><span><Icon name="translate" /></span><div><h2>{a.chooseLanguage}</h2><p>{a.languageNote}</p></div></div>
              <div className="language-list">
                {languageOptions.map((option) => <button className={language === option ? "selected" : ""} onClick={() => setLanguage(option)} key={option}><span>{option}</span>{language === option && <Icon name="check" />}</button>)}
              </div>
              <button className="done-button" onClick={() => setLanguageOpen(false)}>{a.done}</button>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

function BottomNav({
  active,
  onHome,
  onVault,
  labels,
}: {
  active: "home" | "vault";
  onHome: () => void;
  onVault: () => void;
  labels: (typeof appCopy)[Language];
}) {
  return (
    <nav className="bottom-nav">
      <button className={active === "home" ? "active" : ""} onClick={onHome}><Icon name="home" /><span>{labels.home}</span></button>
      <button className={active === "vault" ? "active" : ""} onClick={onVault}><Icon name="document" /><span>{labels.vault}</span></button>
      <a href="https://tele-law.in/" target="_blank" rel="noreferrer"><Icon name="help" /><span>{labels.help}</span></a>
    </nav>
  );
}
