export const translations = {
    en: {
        languageSelector: {
            en: "English",
            ar: "Arabic (العربية)",
        },
        navigation: {
            next: "Next",
            back: "Back",
        },
        landing: {
            welcome: "Welcome, Dr. Nourah",
            choose: "Choose your language / اختر لغتك",
        },
        // Slide 1: Who We Are
        whoWeAre: {
            title: "We're Builders, Not Sellers",
            subtitle: "We build real software for real users.",
            description: "I'm the founder of Constant Labs. We build software—budget tools, Islamic apps, and AI-powered products like Mufakkir. We don't sell courses. We don't sell templates. We build custom apps and digital products.",
            bullets: [
                "Real products used by real people",
                "Professional-grade development",
                "Years of experience building shipping products",
            ],
            mufakkir: {
                caption: "Mufakkir — AI-powered transcription using Whisper tech.",
            }
        },
        // Slide 2: What We Noticed
        whatWeNoticed: {
            title: "Here's What We Noticed",
            p1: "You've built something rare: an engaged audience that trusts you in the dental education space. Your content is educational and highly valued.",
            p2: "But we noticed something else: There's no clear way for your audience to pay you for what they already want from you.",
            insight: "Right now, your audience could realistically generate $5,000–$20,000+ per month in recurring revenue. That money is currently leaking out.",
        },
        // Slide 3: Why Creators Don't Monetize
        roadblocks: {
            title: "Why Smart Creators Leave Money on the Table",
            subtitle: "It's not because they don't want to. It's because of these four roadblocks:",
            cards: [
                {
                    title: "You're Already Busy",
                    text: "You're juggling clinical work and content. Building apps feels like another full-time job.",
                },
                {
                    title: "You're Not a Developer",
                    text: "Building real software requires dev work. Templates look cheap and don't solve real problems.",
                },
                {
                    title: "Hiring Feels Risky",
                    text: "Developers are expensive and uncertain. You don't know if they'll deliver or if it will sell.",
                },
                {
                    title: "Brand Quality",
                    text: "Cheap solutions damage credibility. If you launch something, it needs to feel professional.",
                },
            ],
        },
        // Slide 4: The Solution (Partnership)
        partnership: {
            header1: "We're Not Selling You Software",
            header2: "We're Partnering With You",
            body: "Here's the deal: Zero upfront cost. We build custom apps tailored to your audience. You approve and promote. We split the revenue.",
            split: "Revenue Split: 70% to You, 30% to Us",
            policy: "If nothing sells, you don't pay. Your success is our success.",
            weHandle: ["All tech & design", "Hosting & maintenance", "User support", "Payment setup"],
            youHandle: ["Approval of ideas", "Promotion to audience", "Community feedback"],
            weHandleLabel: "We Handle",
            youHandleLabel: "You Handle",
        },
        // Slide 5: Product Ideas
        productIdeas: {
            title: "What We Can Build Together",
            subtitle: "These aren't random ideas. Each one is designed specifically for your dental education audience.",
            potentialRevenue: "Potential Revenue",
            whyThisWorks: "Why This Works For You",
            keyFeatures: "Key Features",
            categories: [
                {
                    title: "Tier 1: Quick Wins (Basic Ideas)",
                    items: [
                        {
                            title: "Oral Health Habit Tracker",
                            tag: "Patient-Facing",
                            desc: "A complete mobile habit system. Patients track morning/night brushing, flossing, mouthwash, and sugar intake. Includes AI-driven insights ('You missed flossing 3 days in a row!') and streak gamification. Users unlock badges for consistency and can upload 'Gum Health' progress photos.",
                            revenue: "$9.99/mo subscription",
                            details: {
                                features: ["Smart Logging: Tracks brushing time, flossing, and diet triggers.", "AI Coach: Automated tips from 'Dr. Noora' based on their habits.", "Progress Vault: Securely store before/after teeth photos."],
                                why: "Consistently is the #1 failure point for patients. This app automates accountability. It validates willingness to pay with a low-friction subscription.",
                            }
                        },
                        {
                            title: "30-Day Smile Challenge",
                            tag: "Gamified Community",
                            desc: "THE community event for oral health. You run a '30-Day Transformation' cohort. Users download the app to unlock ONE daily task (e.g., 'Day 5: Flossing Technique Masterclass'). They post video proof to social media (TikTok/IG) with your hashtag. Includes a leaderboard, badge unlocks, and—critical feature—Premium users get a personal 60-second video review from you at the end.",
                            revenue: "$27 ticket OR $9.99/mo",
                            details: {
                                features: ["Daily Unlock System: Content releases every 24h to keep retention high.", "Social Proof Engine: Built-in camera forces users to share progress online.", "Batch Feedback: Premium users submit a valid request, you record 20 videos in 30 mins.", "Education Library: Your best tips integrated into daily tasks."],
                                why: "This is unique because it combines 'Content' with 'Action'. It turns your passive followers into active participants. The viral potential from hundreds of users posting #SmileWithNoora is massive.",
                            }
                        },
                        {
                            title: "Kids' Dental Care App",
                            tag: "Gamified for Parents",
                            desc: "Solves the daily screaming match over brushing. An animated character (Dr. Rabbit?) guides kids through a 2-minute brushing session with music. Kids earn 'Sparkle Points' and digital stickers for streaks. Parents get a 'Silent Mode' dashboard to track if the kid actually brushed without hovering.",
                            revenue: "$14.99 one-time buy",
                            details: {
                                features: ["Interactive Timer: Animations change daily to keep kids bored-proof.", "Sticker Book: Digital collectibles for hitting 7/14/30 day streaks.", "Parent Reports: Weekly email summary of habits."],
                                why: "Parents will pay ANY amount to stop the bedtime fight. $14.99 is a 'no-brainer' impulse buy. Highly shareable among mom groups.",
                            }
                        }
                    ]
                },
                {
                    title: "Tier 2: Medium-Scale (Recurring Revenue)",
                    items: [
                        {
                            title: "Patient Education Platform",
                            tag: "Clinic Tool",
                            desc: "Clinics use this to send YOUR video explanations to patients. Dentist clicks 'Root Canal', and the patient receives a branded SMS with a friendly video from Dr. Noora explaining the procedure and post-op care. It professionalizes their clinic instantly.",
                            revenue: "$99-$199/mo per clinic",
                            details: {
                                features: ["One-Tap Sending: No login friction for busy dentists.", "White-Label Ready: Your content, their clinic branding.", "Read Receipts: Dentist knows if patient watched the video."],
                                why: "Dentists hate repeating themselves. Patients forget instructions. This solves both hurdles while positioning you as the industry standard for education.",
                            }
                        },
                        {
                            title: "Appointment Automation",
                            tag: "Clinic Tool",
                            desc: "A 'set-and-forget' system. It sends smart SMS reminders ('Tomorrow at 2 PM'), automated post-op check-ins ('How is the pain? Reply 1-10'), and the big money maker: RECALL reminders ('It's been 6 months, book your cleaning').",
                            revenue: "$79-$199/mo per clinic",
                            details: {
                                features: ["Smart Confirmations: 'Reply C to confirm' updates the calendar.", "Triage Bot: Alerts staff only if patient reports high pain.", "Recall Engine: Automatically fills empty chair slots."],
                                why: "It prints money for clinics. If it saves just ONE no-show ($200 value), the software is free. The ROI is obvious.",
                            }
                        }
                    ]
                },
                {
                    title: "Tier 3: Advanced Industry Solutions",
                    items: [
                        {
                            title: "Practice Management OS",
                            tag: "Complete SaaS",
                            desc: "The 'Linear' of dentistry. A complete, fluid, mobile-first operating system for clinics. Replaces clunky, 20-year-old server software (Dentrix). Handles Patient Records, Scheduling, Billing, and Claims in the cloud.",
                            revenue: "$149-$299/mo per clinic",
                            details: {
                                features: ["Zero-Training UI: Designed like a modern iPhone app, not Windows 95.", "Cloud Native: Access schedule from home/mobile.", "Smart Billing: Automated insurance claim scrubbing."],
                                why: "LEGACY SOFTWARE IS THE ENEMY. It costs $500/mo and sucks. We build the modern alternative. 2,000 clinics = $4.7M/year revenue. Exit potential to a major DSO is $10M-$50M+.",
                            }
                        },
                        {
                            title: "Dental Imaging AI",
                            tag: "AI Diagnosis",
                            desc: "An AI 'Second Opinion'. It scans X-rays and highlights cavities/bone loss with 95% accuracy. It doesn't replace the dentist; it backs them up and shows the patient VISUAL proof of why they need treatment.",
                            revenue: "$299/mo or per-scan",
                            details: {
                                features: ["Pathology Heatmaps: visually distinct highlights for cavities.", "Patient Mode: Simplified view to convince patients.", "Insurance Report: AI auto-generates documentation for claims."],
                                why: "Dentists miss 15% of cavities due to fatigue. This increases production immediately. Insurance companies want this to reduce fraud. Massive acquisition target.",
                            }
                        },
                        {
                            title: "White-Label Patient App",
                            tag: "B2B2C Platform",
                            desc: "We build ONE awesome app platform. Then we clone it for every clinic. 'SmileClinic' gets their own app icon and colors. 'HappyTeeth' gets theirs. They pay us monthly to have 'their own' app in the App Store without paying $50k for dev.",
                            revenue: "$199-$399/mo per clinic",
                            details: {
                                features: ["Instant Branding: Their Logo, Colors, Name in App Store.", "All-in-One: Booking, Payments, Chat, Care Plans.", "Loyalty: Points for keeping appointments."],
                                why: "Every clinic wants 'Their Own App' for ego and branding. We make it affordable ($299/mo) vs Impossible ($50k dev fee). We own the platform; they rent the prestige.",
                            }
                        }
                    ]
                }
            ],
        },
        // Slide 6: Validation System
        validation: {
            title: "We Don't Build Until We Know It'll Sell",
            subtitle: "Here's how we validate demand with your audience first.",
            steps: [
                { title: "Test Demand", desc: "2-week Instagram Stories campaign with polls to gauge interest." },
                { title: "Interpret Data", desc: "We look for buying signals. If interest is low, we pivot. No risk." },
                { title: "Beta Testing", desc: "We invite 20-50 engaged followers to test for free and give feedback." },
                { title: "Launch Momentum", desc: "Official launch with social proof and a limited-time offer." },
            ],
        },
        // Slide 7: Build Process
        process: {
            title: "From Idea to Launch in 6-8 Weeks",
            timeline: [
                { week: "Week 1-2", phase: "Validation", desc: "IG Stories Campaign" },
                { week: "Week 2-3", phase: "Design", desc: "Mockups & Approval" },
                { week: "Week 3-5", phase: "Development", desc: "We build the app" },
                { week: "Week 5-6", phase: "Beta Test", desc: "20-50 Users test" },
                { week: "Week 7+", phase: "Public Launch", desc: "Optimization & Growth" },
            ],
        },
        // Slide 8: Revenue Projections
        projections: {
            title: "Let's Talk Real Numbers",
            subtitle: "You don't need massive scale. Here is your potential 70% share.",
            scenarios: [
                { title: "Conservative", metric: "100 Users", revenue: "$699/mo", desc: "Easily achievable in weeks 1-4." },
                { title: "Moderate", metric: "500 Users", revenue: "$3,497/mo", desc: "Achievable within 3-6 months (~$42k/yr)." },
                { title: "Scale", metric: "2,000 Users", revenue: "$20,986/mo", desc: "Solid business. Potential acquisition target." },
            ],
            insight: "You don't need 100k followers to make $10k/mo. You just need a system.",
        },
        // Slide 9: Long Term
        longTerm: {
            title: "Why This Changes Everything",
            benefits: [
                { title: "Passive Income", text: "Earns while you sleep. Not trading hours for dollars." },
                { title: "Diversified", text: "No longer dependent on inconsistent brand deals." },
                { title: "Equity", text: "You own 70% of a real digital asset." },
                { title: "Freedom", text: "Less clinic hours. More time creating and living." },
            ],
            quote: "This isn't just about money. It's about building something you own.",
        },
        // Slide 10: Next Steps
        nextSteps: {
            title: "Let's Start Simple",
            subtitle: "No commitment, just exploration.",
            steps: [
                "Pick an idea (or we brainstorm)",
                "We validate it (Stories campaign)",
                "If they want it, we build it",
            ],
            cta: "Let's Talk",
            subCta: "No pitch. No pressure.",
        },
        footer: {
            text: "© 2026 Partnership Proposal for Dr. Nourah — Constant Labs",
        }
    },
    ar: {
        languageSelector: {
            en: "English (الإنجليزية)",
            ar: "العربية",
        },
        navigation: {
            next: "التالي",
            back: "السابق",
        },
        landing: {
            welcome: "مرحباً دكتورة نورة",
            choose: "اختاري اللغة للمتابعة",
        },
        whoWeAre: {
            title: "نحن نبني، لا نبيع",
            subtitle: "نبني تطبيقات حقيقية لمستخدمين حقيقيين.",
            description: "أنا مؤسس Constant Labs. نبني تطبيقات — أدوات للميزانية، تطبيقات إسلامية، ومنتجات ذكاء اصطناعي مثل 'مفكر'. لا نبيع كورسات. لا نبيع قوالب جاهزة. نبني تطبيقات ومنتجات رقمية مخصصة.",
            bullets: [
                "منتجات حقيقية يستخدمها ناس حقيقيون",
                "تطوير احترافي بجودة عالية",
                "سنوات خبرة في بناء وإطلاق المنتجات",
            ],
            mufakkir: {
                caption: "مفكر — تحويل صوتي بالذكاء الاصطناعي باستخدام تقنية Whisper.",
            }
        },
        whatWeNoticed: {
            title: "هذا ما لاحظناه",
            p1: "بنيتِ شيئاً نادراً: جمهور متفاعل يثق بكِ في مجال تثقيف الأسنان. محتواكِ تعليمي وقيمته عالية جداً.",
            p2: "لكن لاحظنا شيئاً آخر: لا توجد طريقة واضحة لجمهوركِ ليدفع مقابل ما يريده منكِ أصلاً.",
            insight: "حالياً، جمهوركِ يمكنه تحقيق 5,000$ - 20,000$+ شهرياً كدخل متكرر. هذه الأموال تضيع حالياً.",
        },
        roadblocks: {
            title: "لماذا صناع المحتوى لا يستثمرون جمهورهم؟",
            subtitle: "ليس لأنهم لا يريدون. بل بسبب هذه العوائق الأربعة:",
            cards: [
                {
                    title: "وقتكِ محدود",
                    text: "بين العيادة وصناعة المحتوى. بناء التطبيقات يحتاج تفرغ كامل.",
                },
                {
                    title: "لستِ مطورة",
                    text: "التطبيقات الحقيقية تحتاج برمجة. القوالب الجاهزة تبدو رخيصة ولا تحل المشكلة.",
                },
                {
                    title: "التعاقد مع مطور مخاطرة",
                    text: "المطورون مكلفون وغير مضمونين. لا ضمان للتسليم أو لنجاح المنتج.",
                },
                {
                    title: "الجودة مهمة",
                    text: "الحلول الرخيصة تضر بسمعتكِ. أي منتج تطلقينه يجب أن يكون احترافياً.",
                },
            ],
        },
        partnership: {
            header1: "لا نبيعكِ برنامجاً",
            header2: "نحن نشاركك",
            body: "الصفقة بسيطة: لا تكلفة مقدمة. نبني تطبيقات مخصصة لجمهوركِ. أنتِ توافقين وتروّجين. ونتقاسم الأرباح.",
            split: "توزيع الأرباح: 70% لكِ، 30% لنا",
            policy: "إذا لم يُباع شيء، لا تدفعين شيئاً. نجاحكِ هو نجاحنا.",
            weHandle: ["التقنية والتصميم", "الاستضافة والصيانة", "دعم المستخدمين", "إعداد بوابة الدفع"],
            youHandle: ["الموافقة على الأفكار", "الترويج لجمهوركِ", "التفاعل مع المجتمع"],
            weHandleLabel: "نحن نتولى",
            youHandleLabel: "أنتِ تتولين",
        },
        productIdeas: {
            title: "أفكار منتجات يمكننا بناؤها معاً",
            subtitle: "مصممة خصيصاً لجمهوركِ في مجال الأسنان. اضغطي على أي بطاقة للتفاصيل.",
            potentialRevenue: "الإيرادات المتوقعة",
            whyThisWorks: "لماذا هذا مناسب لكِ",
            keyFeatures: "الميزات الأساسية",
            categories: [
                {
                    title: "المستوى 1: مكاسب سريعة (أفكار بسيطة)",
                    items: [
                        {
                            title: "متتبع عادات صحة الفم",
                            tag: "للمرضى",
                            desc: "ليس مجرد تطبيق، بل نظام عادة متكامل للجوال. يتابع المريض تفريش الصباح/المساء، الخيط، الغسول، وتناول السكريات. يتضمن تنبيهات ذكية ('لقد نسيت الخيط 3 أيام متتالية!') ومكافآت للاستمرارية (Streaks). يفتح المستخدم أوسمة ويرفع صور 'تقدم صحة اللثة' لمتابعتها مع الوقت.",
                            revenue: "$9.99/اشتراك شهري",
                            details: {
                                features: ["سجل ذكي: يتابع وقت التفريش، نوع المعجون، ومحفزات التسوس.", "مدرب شخصي AI: نصائح آلية من 'د. نورة' بناءً على عاداتهم.", "خزنة الصور: حفظ آمن لصور الأسنان قبل وبعد التبييض أو العناية."],
                                why: "الاستمرارية هي مشكلة المريض رقم 1. هذا التطبيق يؤتمت التزامهم ومسؤوليتهم تجاهك، دون أن تحتاجي للتواجد معهم.",
                            }
                        },
                        {
                            title: "تحدي الابتسامة 30 يوم",
                            tag: "مجتمع وتلعيب",
                            desc: "الحدث المجتمعي الأضخم لصحة الفم. تديرين دفعة 'تحول خلال 30 يوم'. يحمل المشتركون التطبيق لفتح مهمة يومية واحدة ('اليوم 5: احتراف الخيط المائي'). يصورون فيديو ويرفعونه على تيك توك مع الهاشتاق الخاص بك. يتضمن لوحة صدارة، وميزة حاسمة: المشتركون الـ Premium يحصلون على فيديو مراجعة شخصي منك (60 ثانية) في النهاية.",
                            revenue: "$27 تذكرة أو $9.99/شهر",
                            details: {
                                features: ["نظام فتح المهام: محتوى جديد يفتح كل 24 ساعة لضمان عودتهم.", "محرك الإثبات الاجتماعي: الكاميرا مدمجة لتشجيعهم على نشر تقدمهم.", "مراجعات بالجملة: يرسل المشترك فيديو، وتردين بـ 20 فيديو في 30 دقيقة.", "مكتبة تعليمية: أفضل نصائحك مدمجة في المهام اليومية."],
                                why: "فريد لأنه يدمج 'المحتوى' مع 'الأكشن'. يحول المتابع الصامت إلى مشترك نشط. الانتشار الفيروسي لوسم #تحدي_ابتسامة_نورة سيكون ضخماً.",
                            }
                        },
                        {
                            title: "تطبيق أسنان للأطفال",
                            tag: "ممتع للأهل",
                            desc: "لحل 'معركة النوم' اليومية. تطبيق ممتع بشخصية كرتونية (د. أرنوب؟) توجه الطفل خلال دقيقتين من التفريش مع موسيقى. يجمع الطفل نقاط اللمعان وستيكرات رقمية. يحصل الأهل على لوحة تحكم 'وضع صامت' لمعرفة هل فرّش الطفل فعلاً دون مراقبته.",
                            revenue: "$14.99 مرة واحدة",
                            details: {
                                features: ["مؤقت تفاعلي: رسوم متحركة تتغير يومياً لمنع الملل.", "ألبوم الستيكرات: مقتنيات رقمية عند الالتزام بـ 7/14/30 يوم.", "تقرير للأهل: ملخص أسبوعي يصل للإيميل عن عادات طفلهم."],
                                why: "الأهل سيدفعون أي مبلغ لإيقاف صراخ قبل النوم. سعره ($14.99) يجعله قرار شراء فوري (Impulse Buy). قابل للمشاركة جداً بين الأمهات.",
                            }
                        }
                    ]
                },
                {
                    title: "المستوى 2: متوسط الحجم (دخل متكرر)",
                    items: [
                        {
                            title: "منصة تثقيف المرضى",
                            tag: "أداة للعيادات",
                            desc: "تستخدمه العيادات لإرسال شرحكِ للمريض. يضغط الطبيب زر 'علاج عصب'، ويصل للمريض فوراً SMS فيه فيديو ودود من د. نورة يشرح الإجراء وما بعده. يرفع احترافية العيادة فوراً.",
                            revenue: "$99-$199/عيادة شهرياً",
                            details: {
                                features: ["إرسال بلمسة واحدة: بدون تعقيد للأطباء المشغولين.", "جاهز للهوية (White-Label): محتواكِ، لكن بشعار العيادة.", "تأكيد المشاهدة: يعرف الطبيب أن المريض شاهد التعليمات."],
                                why: "الأطباء يكرهون تكرار الكلام. والمرضى ينسون التعليمات. هذا يحل المشكلتين ويجعلكِ المرجع الأول للتثقيف.",
                            }
                        },
                        {
                            title: "أتمتة المواعيد والمتابعة",
                            tag: "أداة للعيادات",
                            desc: "نظام 'اضبط وانسى'. يرسل تذكيرات SMS ذكية ('غداً الساعة 2')، ومتابعة آلية بعد العلاج ('كيف الألم؟ رد من 1-10')، والأهم: تذكيرات الاستدعاء (Recall) ('مرت 6 أشهر، احجز تنظيفك').",
                            revenue: "$79-$199/عيادة شهرياً",
                            details: {
                                features: ["تأكيد ذكي: 'رد بـ ن للتأكيد' يحديث التقويم فوراً.", "بوت الفرز: ينبه الموظفين فقط إذا كان ألم المريض مرتفعاً.", "محرك الاستدعاء: يملأ الفراغات في الجدول تلقائياً."],
                                why: "هذا النظام يطبع المال للعيادات. إذا أنقذ موعداً واحداً (قيمته $200) شهرياً، فقد أصبح مجانياً عليهم. العائد على الاستثمار واضح.",
                            }
                        }
                    ]
                },
                {
                    title: "المستوى 3: حلول قطاع متقدمة",
                    items: [
                        {
                            title: "نظام إدارة العيادات الشامل",
                            tag: "نظام SaaS متكامل",
                            desc: "نظام 'Linear' لطب الأسنان. نظام تشغيل حديث، سلس، ومتوافق مع الجوال للعيادات. يستبدل البرامج القديمة (Dentrix) التي عفا عليها الزمن. يدير الملفات، الجدولة، الفوترة، ومطالبات التأمين سحابياً.",
                            revenue: "$149-$299/عيادة شهرياً",
                            details: {
                                features: ["واجهة بلا تدريب: مصمم كأنه تطبيق آيفون، وليس ويندوز 95.", "سحابي بالكامل: الوصول للجدول من البيت أو الجوال.", "فوترة ذكية: تدقيق آلي لمطالبات التأمين قبل إرسالها."],
                                why: "البرامج القديمة هي العدو. تكلفتها $500/شهر وتصميمها سيء. نبني البديل الحديث. 2000 عيادة = $4.7 مليون/سنة. فرصة استحواذ هائلة ($10M-$50M).",
                            }
                        },
                        {
                            title: "تحليل الأشعة بالذكاء الاصطناعي",
                            tag: "تشخيص AI",
                            desc: "مساعد 'رأي ثاني'. يمسح الأشعة ويكتشف التسوس وذوبان العظم بدقة 95%. لا يستبدل الطبيب، بل يدعمه ويعطي المريض إثباتاً بصرياً (Visual Proof) لحاجته للعلاج.",
                            revenue: "$299/شهرياً أو بالمسحة",
                            details: {
                                features: ["خرائط حرارية: تظليل واضح لأماكن التسوس.", "وضع المريض: عرض مبسط لإقناع المريض بالعلاج.", "تقرير التأمين: تقرير موثق من الـ AI لتقليل رفض المطالبات."],
                                why: "الأطباء يفوتون 15% من التسوس بسبب الإرهاق. هذا يزيد دخل العيادة فوراً. شركات التأمين تريد هذا لتقليل الاحتيال. هدف استحواذ ضخم.",
                            }
                        },
                        {
                            title: "تطبيق العيادة (White-Label)",
                            tag: "منصة B2B2C",
                            desc: "نبني منصة تطبيقات رائعة واحدة. ثم ننسخها (Clone) لكل عيادة. 'عيادة الابتسامة' تحصل على أيقونتها وألوانها. يدفعون اشتراكاً شهرياً ليكون لديهم 'تطبيقهم الخاص' في الآب ستور دون دفع $50k للمطورين.",
                            revenue: "$199-$399/عيادة شهرياً",
                            details: {
                                features: ["هوية فورية: اللوجو والاسم والألوان في المتجر.", "الكل في واحد: حجز، دفع، شات، وخطط علاج.", "ولاء: نقاط ومكافآت عند الالتزام بالمواعيد."],
                                why: "كل عيادة تريد 'تطبيق خاص' للبرستيج. نجعله متاحاً بـ $299/شهر بدلاً من المستحيل ($50k). نحن نملك المنصة، وهم يستأجرون التقنية.",
                            }
                        }
                    ]
                }
            ],
        },
        validation: {
            title: "لا نبني إلا بعد التأكد من الطلب",
            subtitle: "هكذا نتحقق من رغبة جمهوركِ أولاً.",
            steps: [
                { title: "اختبار الطلب", desc: "حملة ستوريز على إنستغرام لمدة أسبوعين مع استطلاعات لقياس الاهتمام." },
                { title: "تحليل البيانات", desc: "نبحث عن مؤشرات الشراء. إذا كان الاهتمام ضعيفاً، نغيّر الفكرة. لا مخاطرة." },
                { title: "اختبار تجريبي", desc: "ندعو 20-50 متابعاً للتجربة مجاناً وإعطاء ملاحظاتهم." },
                { title: "الإطلاق الرسمي", desc: "إطلاق مع Social Proof وعرض لفترة محدودة." },
            ],
        },
        process: {
            title: "من الفكرة إلى الإطلاق في 6-8 أسابيع",
            timeline: [
                { week: "أسبوع 1-2", phase: "التحقق", desc: "حملة الستوريز" },
                { week: "أسبوع 2-3", phase: "التصميم", desc: "التصاميم والموافقة" },
                { week: "أسبوع 3-5", phase: "التطوير", desc: "نبني التطبيق" },
                { week: "أسبوع 5-6", phase: "بيتا", desc: "اختبار مع 50 مستخدم" },
                { week: "أسبوع 7+", phase: "الإطلاق", desc: "الإطلاق والتحسين" },
            ],
        },
        projections: {
            title: "لنتحدث بالأرقام",
            subtitle: "لا تحتاجين ملايين المتابعين. هذه حصتكِ المتوقعة (70%).",
            scenarios: [
                { title: "متحفظ", metric: "100 مشترك", revenue: "$699/شهرياً", desc: "يمكن تحقيقه خلال الأسابيع الأولى." },
                { title: "متوسط", metric: "500 مشترك", revenue: "$3,497/شهرياً", desc: "يمكن تحقيقه خلال 3-6 أشهر (~$42k سنوياً)." },
                { title: "توسع", metric: "2,000 مشترك", revenue: "$20,986/شهرياً", desc: "بزنس حقيقي. قد يجذب عروض استحواذ." },
            ],
            insight: "لا تحتاجين 100 ألف متابع لتحقيق $10k شهرياً. تحتاجين فقط نظاماً.",
        },
        longTerm: {
            title: "لماذا هذا يغير كل شيء",
            benefits: [
                { title: "دخل مستمر", text: "يعمل وأنتِ نائمة. لا تقايضين وقتكِ بالمال." },
                { title: "تنويع", text: "لا تعتمدين على صفقات البراندات غير المستقرة." },
                { title: "ملكية", text: "تملكين 70% من أصل رقمي حقيقي." },
                { title: "حرية", text: "وقت أقل في العيادة. وقت أكثر للإبداع والحياة." },
            ],
            quote: "هذا ليس مجرد دخل إضافي. هذا بناء شيء تملكينه.",
        },
        nextSteps: {
            title: "لنبدأ ببساطة",
            subtitle: "بدون التزام، مجرد استكشاف.",
            steps: [
                "نختار فكرة (أو نفكر سوياً)",
                "نختبرها (حملة ستوريز)",
                "إذا أرادها الجمهور، نبنيها",
            ],
            cta: "لنتحدث",
            subCta: "بدون ضغط. مجرد نقاش.",
        },
        footer: {
            text: "© 2026 عرض شراكة للدكتورة نورة — Constant Labs",
        }
    },
};
