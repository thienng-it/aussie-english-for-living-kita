const levels = {
    "Beginner Level": [
        "Chapter I: Hello!",
        "Chapter II: My Home",
        "Chapter III: My Stuff",
        "Chapter IV: Habits",
        "Chapter V: Inside or Outside?",
        "Chapter VI: Food Around the World",
        "Chapter VII: Family and Friends",
        "Chapter VIII: Things We Can Do",
        "Chapter IX: Travel",
        "Chapter X: Staying Healthy",
        "Chapter XI: People from the Past",
        "Chapter XII: My Story"
    ],
    "Pre-Intermediate Level": [
        "Introduction", 
        "Australian Meat", 
        "Bank", 
        "Food", 
        "Travelling", 
        "Shopping", 
        "Aussie Slang"
    ]
};

const allTopics = {
    "Introduction": {
        "G'day": {
            "phonetic": "/ɡəˈdeɪ/",
            "meanings": [
                {
                    "type": "interjection",
                    "viet": "Chào (Dùng như Hello, Hi)",
                    "definition": "An informal Australian greeting, equivalent to 'Hello' or 'Hi'.",
                    "synonyms": ["Hello", "Hi", "Hey"],
                    "antonyms": ["Goodbye", "Bye"]
                }
            ]
        },
        "Mate": {
            "phonetic": "/məɪt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bạn, anh bạn, đồng nghiệp (Cách gọi thân mật)",
                    "definition": "A friend or companion. (Commonly used in Australia and the UK).",
                    "synonyms": ["friend", "buddy", "pal", "chum"],
                    "antonyms": ["enemy", "foe", "stranger"]
                },
                {
                    "type": "verb",
                    "viet": "Giao phối (động vật)",
                    "definition": "(Of animals) to come together for breeding.",
                    "synonyms": ["breed", "pair"],
                    "antonyms": []
                }
            ]
        },
        "How ya goin'?": {
            "phonetic": "/hæw jə ˈɡəʉwɪn/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Bạn khoẻ không? (Dùng như 'How are you?')",
                    "definition": "A common Australian greeting asking how someone is.",
                    "synonyms": ["How are you?", "How's it going?", "What's up?"],
                    "antonyms": []
                }
            ]
        },
        "Name": {
            "phonetic": "/neɪm/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Tên",
                    "definition": "A word or set of words by which a person or thing is known, addressed, or referred to.",
                    "synonyms": ["title", "denomination", "appellation"],
                    "antonyms": []
                },
                {
                    "type": "verb",
                    "viet": "Đặt tên, gọi tên",
                    "definition": "To give a name to someone or something.",
                    "synonyms": ["call", "label", "designate"],
                    "antonyms": []
                }
            ]
        },
        "From": {
            "phonetic": "/frɒm/",
            "meanings": [
                {
                    "type": "preposition",
                    "viet": "Đến từ, từ",
                    "definition": "Indicating the point in space at which a journey, motion, or action starts.",
                    "synonyms": ["originating in", "out of"],
                    "antonyms": ["to", "towards"]
                }
            ]
        },
        "Live": {
            "phonetic": "/lɪv/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Sống, cư trú",
                    "definition": "To make one's home in a particular place or with a particular person.",
                    "synonyms": ["reside", "dwell", "inhabit"],
                    "antonyms": ["leave", "depart"]
                },
                {
                    "type": "verb",
                    "viet": "Sống, tồn tại",
                    "definition": "To remain alive.",
                    "synonyms": ["exist", "survive"],
                    "antonyms": ["die", "perish"]
                }
            ]
        },
        "Job": {
            "phonetic": "/dʒɒb/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Công việc",
                    "definition": "A paid position of regular employment.",
                    "synonyms": ["work", "occupation", "profession", "post"],
                    "antonyms": ["unemployment", "hobby", "leisure"]
                }
            ]
        },
        "Work": {
            "phonetic": "/wɜːk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Công việc, công tác",
                    "definition": "Activity involving mental or physical effort done in order to achieve a purpose or result; a job.",
                    "synonyms": ["job", "occupation", "profession", "employment", "task"],
                    "antonyms": ["leisure", "rest", "idleness", "recreation"]
                },
                {
                    "type": "verb",
                    "viet": "Làm việc",
                    "definition": "To perform mental or physical effort in order to achieve a purpose or result.",
                    "synonyms": ["labor", "toil", "operate", "function"],
                    "antonyms": ["rest", "relax", "idle"]
                }
            ]
        },
        "New here": {
            "phonetic": "/njuː hɪər/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Mới đến đây",
                    "definition": "A phrase used to indicate that one has recently arrived in a place.",
                    "synonyms": ["recent arrival", "newcomer"],
                    "antonyms": ["long-timer", "native", "local"]
                }
            ]
        },
        "Bloke": {
            "phonetic": "/bləʉk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Gã đàn ông, anh chàng",
                    "definition": "A man; a fellow. (Informal, chiefly British and Australian).",
                    "synonyms": ["man", "guy", "fellow", "chap"],
                    "antonyms": ["woman", "sheila", "lass"]
                }
            ]
        },
        "Sheila": {
            "phonetic": "/ˈʃiːlə/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Cô gái, phụ nữ",
                    "definition": "A girl or woman. (Informal, Australian and New Zealand).",
                    "synonyms": ["woman", "girl", "lass", "female"],
                    "antonyms": ["bloke", "man", "guy"]
                }
            ]
        },
        "Ta": {
            "phonetic": "/tɑː/",
            "meanings": [
                {
                    "type": "interjection",
                    "viet": "Cảm ơn (Thanks)",
                    "definition": "An informal way of saying 'Thank you'. (Chiefly British and Australian).",
                    "synonyms": ["Thanks", "Cheers"],
                    "antonyms": []
                }
            ]
        },
        "No worries": {
            "phonetic": "/nəʉ ˈwʌɹiz/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Không vấn đề gì, không sao đâu (Rất phổ biến)",
                    "definition": "A common Australian phrase used to say 'You're welcome' or 'It's okay'.",
                    "synonyms": ["You're welcome", "No problem", "It's all good", "Too easy"],
                    "antonyms": []
                }
            ]
        }
    },
    "Australian Meat": {
        "PPE": {
            "phonetic": "/ˌpiː.piːˈiː/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Trang bị bảo hộ cá nhân",
                    "definition": "Abbreviation for Personal Protective Equipment: clothing and equipment designed to protect the wearer's body from injury or infection.",
                    "synonyms": ["safety gear", "protective clothing", "safety equipment"],
                    "antonyms": []
                }
            ]
        },
        "Hard hat": {
            "phonetic": "/ˈhɑːd ˌhæt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Mũ bảo hộ",
                    "definition": "A rigid protective helmet worn by factory and construction workers.",
                    "synonyms": ["safety helmet", "helmet"],
                    "antonyms": ["cap", "beanie"]
                }
            ]
        },
        "Earplugs": {
            "phonetic": "/ˈɪə.plʌɡz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Nút bịt tai",
                    "definition": "A pair of small pieces of soft material (like foam or silicone) inserted into the ear canal to block noise.",
                    "synonyms": ["ear defenders (larger)", "ear muffs (larger)"],
                    "antonyms": []
                }
            ]
        },
        "Safety glasses": {
            "phonetic": "/ˈseɪf.ti ˌɡlɑː.sɪz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Kính bảo hộ",
                    "definition": "Toughened glasses or goggles worn to protect the eyes in hazardous environments.",
                    "synonyms": ["goggles", "eye protection"],
                    "antonyms": ["sunglasses", "reading glasses"]
                }
            ]
        },
        "Steel-toed boots": {
            "phonetic": "/ˌstiːl.təʊd ˈbuːts/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Giày/Ủng mũi thép",
                    "definition": "Durable boots with a protective reinforcement in the toe, which protects the foot from falling objects or compression.",
                    "synonyms": ["safety boots", "work boots"],
                    "antonyms": ["sandals", "sneakers"]
                }
            ]
        },
        "Armguard": {
            "phonetic": "/ˈɑːm.ɡɑːd/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Dụng cụ bảo vệ cánh tay",
                    "definition": "A protective covering for the forearm, often made of mesh, plastic, or leather, to prevent cuts or impacts.",
                    "synonyms": ["bracer", "forearm protector"],
                    "antonyms": []
                }
            ]
        },
        "Mesh glove": {
            "phonetic": "/ˈmeʃ ˌɡlʌv/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Găng tay lưới (bảo hộ)",
                    "definition": "A glove made of metal or synthetic mesh, designed to protect the hands from cuts from sharp objects like knives.",
                    "synonyms": ["cut-resistant glove", "chainmail glove"],
                    "antonyms": ["latex glove", "winter glove"]
                }
            ]
        },
        "Boning room": {
            "phonetic": "/ˈbəʊ.nɪŋ ˌruːm/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Phòng lóc xương",
                    "definition": "A specific area or room in a meat processing plant where bones are removed from carcasses.",
                    "synonyms": ["deboning area"],
                    "antonyms": []
                }
            ]
        },
        "Forequarter": {
            "phonetic": "/ˈfɔːˌkwɔː.tər/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Phần tư thân trước (của con vật)",
                    "definition": "The front half of a side of a carcass, including the shoulder, arm, and brisket.",
                    "synonyms": ["front section"],
                    "antonyms": ["hindquarter"]
                }
            ]
        },
        "Seam": {
            "phonetic": "/siːm/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Đường liên kết (giữa các thớ thịt)",
                    "definition": "In butchery, the natural line or membrane separating different muscles.",
                    "synonyms": ["muscle seam", "connective tissue line"],
                    "antonyms": []
                }
            ]
        },
        "Brisket": {
            "phonetic": "/ˈbrɪs.kɪt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Ức, gầu (bò)",
                    "definition": "A cut of meat from the breast or lower chest of beef or veal.",
                    "synonyms": ["beef breast"],
                    "antonyms": []
                }
            ]
        },
        "Trim the fat": {
            "phonetic": "/ˌtrɪm ðə ˈfæt/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Lọc mỡ, lạng mỡ",
                    "definition": "To cut away and remove excess fat from a piece of meat.",
                    "synonyms": ["de-fat", "cut off fat"],
                    "antonyms": []
                }
            ]
        },
        "Quality Assurance (QA)": {
            "phonetic": "/ˈkwɒl.ə.ti əˌʃʊə.rəns/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Đảm bảo chất lượng",
                    "definition": "The maintenance of a desired level of quality in a service or product, especially by means of attention to every stage of the process.",
                    "synonyms": ["quality control", "QC"],
                    "antonyms": []
                }
            ]
        },
        "Spec sheet": {
            "phonetic": "/ˈspek ˌʃiːt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bảng thông số kỹ thuật (sản phẩm)",
                    "definition": "A document (specification sheet) that details the technical requirements and standards for a product.",
                    "synonyms": ["specification", "product specs"],
                    "antonyms": []
                }
            ]
        },
        "Rump": {
            "phonetic": "/rʌmp/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Thịt mông",
                    "definition": "A cut of beef from the upper part of the hindquarter.",
                    "synonyms": ["sirloin (near)", "round (near)"],
                    "antonyms": []
                }
            ]
        },
        "Knuckle": {
            "phonetic": "/ˈnʌk.əl/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Nạc đùi (lõi mông)",
                    "definition": "A cut of beef from the thick flank, part of the hindquarter. Also known as sirloin tip.",
                    "synonyms": ["sirloin tip", "thick flank"],
                    "antonyms": []
                }
            ]
        },
        "Re-worked": {
            "phonetic": "/ˌriːˈwɜːkt/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Bị làm lại, gia công lại",
                    "definition": "Describing a product that has been sent back for correction or reprocessing due to a defect.",
                    "synonyms": ["corrected", "reprocessed", "fixed"],
                    "antonyms": ["passed", "approved"]
                }
            ]
        },
        "Packing room": {
            "phonetic": "/ˈpæk.ɪŋ ˌruːm/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Phòng đóng gói",
                    "definition": "The area in a factory where finished products are packaged into boxes or cartons.",
                    "synonyms": ["packaging area", "dispatch"],
                    "antonyms": ["boning room", "production line"]
                }
            ]
        },
        "Striploin (Cube Roll)": {
            "phonetic": "/ˈstrɪp.lɔɪn/ /kjuːb ˈrəʊl/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Thăn ngoại",
                    "definition": "A cut of beef from the short loin. Cube roll is another name, often used in Australia/NZ for the rib-eye roll.",
                    "synonyms": ["New York strip", "sirloin", "rib-eye"],
                    "antonyms": []
                }
            ]
        },
        "Hind leg": {
            "phonetic": "/ˈhaɪnd ˌleɡ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Chân sau",
                    "definition": "One of the two back legs of a four-legged animal.",
                    "synonyms": ["back leg"],
                    "antonyms": ["foreleg", "front leg"]
                }
            ]
        },
        "Topside": {
            "phonetic": "/ˈtɒp.saɪd/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Nạc đùi (mông trên)",
                    "definition": "A cut of beef from the inner, upper part of the hind leg.",
                    "synonyms": ["inside round"],
                    "antonyms": []
                }
            ]
        },
        "Carton": {
            "phonetic": "/ˈkɑː.tən/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Thùng (giấy)",
                    "definition": "A box made of cardboard, used for packing and storing goods.",
                    "synonyms": ["box", "cardboard box", "case"],
                    "antonyms": []
                }
            ]
        },
        "Bandsaw": {
            "phonetic": "/ˈbænd.sɔː/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Máy cưa (xương)",
                    "definition": "A power saw with a long, sharp blade consisting of a continuous band of toothed metal, used in butchery to cut through bone and meat.",
                    "synonyms": ["meat saw"],
                    "antonyms": []
                }
            ]
        },
        "Lock Out, Tag Out": {
            "phonetic": "/lɒk aʊt tæɡ aʊt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Khóa và Treo thẻ (quy trình an toàn)",
                    "definition": "A safety procedure used to ensure that dangerous machines are properly shut off and not able to be started up again prior to maintenance.",
                    "synonyms": ["LOTO", "safety lockout"],
                    "antonyms": []
                }
            ]
        },
        "Isolator": {
            "phonetic": "/ˈaɪ.sə.leɪ.tər/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Cầu dao cách ly (ngắt điện)",
                    "definition": "A switch used to disconnect or isolate a part of an electrical circuit when it is not carrying current. Used for safety.",
                    "synonyms": ["disconnect switch", "circuit breaker"],
                    "antonyms": []
                }
            ]
        }
    },
    "Bank": {
        "Bank": {
            "phonetic": "/bæŋk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Ngân hàng",
                    "definition": "A financial institution licensed to receive deposits and make loans.",
                    "synonyms": ["financial institution", "credit union"],
                    "antonyms": []
                }
            ]
        },
        "Cash": {
            "phonetic": "/kæʃ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Tiền mặt",
                    "definition": "Money in coins or notes, as distinct from checks, money orders, or credit.",
                    "synonyms": ["hard cash", "ready money", "currency", "notes", "coins"],
                    "antonyms": ["credit", "check", "card"]
                }
            ]
        },
        "Cash machine": {
            "phonetic": "/kæʃ məˈʃiːn/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Máy rút tiền (ATM)",
                    "definition": "An automated teller machine (ATM).",
                    "synonyms": ["ATM", "cashpoint"],
                    "antonyms": []
                }
            ]
        },
        "Cheque": {
            "phonetic": "/tʃek/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Séc",
                    "definition": "An order to a bank to pay a stated sum from the drawer's account, written on a specially printed form. (Spelled 'check' in US English).",
                    "synonyms": ["bank draft", "check"],
                    "antonyms": ["cash"]
                }
            ]
        },
        "Credit card": {
            "phonetic": "/ˈkredɪt kɑːrd/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Thẻ tín dụng",
                    "definition": "A small plastic card issued by a bank, allowing the holder to purchase goods or services on credit.",
                    "synonyms": ["plastic"],
                    "antonyms": ["debit card", "cash"]
                }
            ]
        },
        "Currency": {
            "phonetic": "/ˈkɜːrənsi/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Tiền tệ",
                    "definition": "A system of money in general use in a particular country (e.g., AUD, USD, VND).",
                    "synonyms": ["money", "legal tender", "coinage"],
                    "antonyms": []
                }
            ]
        },
        "Debit card": {
            "phonetic": "/ˈdebɪt kɑːrd/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Thẻ ghi nợ",
                    "definition": "A card allowing the holder to transfer money electronically from their bank account when making a purchase.",
                    "synonyms": ["bank card"],
                    "antonyms": ["credit card"]
                }
            ]
        },
        "Money": {
            "phonetic": "/ˈmʌni/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Tiền",
                    "definition": "A current medium of exchange in the form of coins and banknotes.",
                    "synonyms": ["cash", "currency", "capital", "funds"],
                    "antonyms": ["debt"]
                }
            ]
        },
        "Pay": {
            "phonetic": "/peɪ/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Trả tiền, thanh toán",
                    "definition": "To give (someone) money that is due for work done, goods received, or a debt incurred.",
                    "synonyms": ["spend", "expend", "settle", "remit"],
                    "antonyms": ["receive", "earn", "charge"]
                }
            ]
        },
        "Price": {
            "phonetic": "/praɪs/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Giá cả",
                    "definition": "The amount of money expected, required, or given in payment for something.",
                    "synonyms": ["cost", "charge", "fee", "value"],
                    "antonyms": []
                }
            ]
        },
        "Tax": {
            "phonetic": "/tæks/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Thuế",
                    "definition": "A compulsory contribution to state revenue, levied by the government on workers' income and business profits or added to the cost of goods.",
                    "synonyms": ["duty", "levy", "tariff"],
                    "antonyms": ["refund", "rebate"]
                }
            ]
        },
        "Cancel a card": {
            "phonetic": "/ˈkænsəl ə kɑːrd/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Huỷ thẻ",
                    "definition": "To deactivate a credit or debit card, usually because it is lost, stolen, or no longer needed.",
                    "synonyms": ["deactivate card", "block card"],
                    "antonyms": ["activate a card"]
                }
            ]
        },
        "Replacement card": {
            "phonetic": "/rɪˈpleɪsmənt kɑːrd/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Thẻ thay thế",
                    "definition": "A new card issued to replace one that was lost, stolen, or expired.",
                    "synonyms": ["new card"],
                    "antonyms": ["old card", "expired card"]
                }
            ]
        },
        "Confirm": {
            "phonetic": "/kənˈfɜːrm/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Xác nhận",
                    "definition": "To state with assurance that a report or fact is true; to verify.",
                    "synonyms": ["verify", "validate", "approve", "corroborate"],
                    "antonyms": ["deny", "cancel", "reject"]
                }
            ]
        },
        "Bank statement": {
            "phonetic": "/ˈbæŋk ˈsteɪtmənt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Sao kê ngân hàng",
                    "definition": "A printed record of the balance in a bank account and the amounts that have been paid into it and withdrawn from it.",
                    "synonyms": ["statement of account", "transaction history"],
                    "antonyms": []
                }
            ]
        },
        "Transaction": {
            "phonetic": "/trænˈzækʃən/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Giao dịch",
                    "definition": "An instance of buying or selling something; a business deal. Any movement of money in or out of an account.",
                    "synonyms": ["dealing", "payment", "withdrawal", "deposit"],
                    "antonyms": []
                }
            ]
        },
        "Recurring payment / Automatic payment": {
            "phonetic": "/rɪˈkɜːrɪŋ ˈpeɪmənt/ /ˌɔːtəˈmætɪk ˈpeɪmənt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Thanh toán định kỳ/ Thanh toán tự động",
                    "definition": "A payment that is automatically processed at regular intervals (e.g., monthly for a bill).",
                    "synonyms": ["direct debit", "auto-pay", "standing order"],
                    "antonyms": ["one-time payment", "manual payment"]
                }
            ]
        },
        "Activate": {
            "phonetic": "/ˈæktɪveɪt/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Kích hoạt",
                    "definition": "To make (something, such as a new bank card) active or operative.",
                    "synonyms": ["enable", "turn on", "set up"],
                    "antonyms": ["deactivate", "cancel", "disable"]
                }
            ]
        },
        "PIN (Personal Identification Number)": {
            "phonetic": "/pɪn/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Mã PIN (Số nhận dạng cá nhân)",
                    "definition": "A secret numeric password shared between a user and a system that can be used to authenticate the user.",
                    "synonyms": ["passcode", "security code"],
                    "antonyms": []
                }
            ]
        },
        "ATM (Automated Teller Machine)": {
            "phonetic": "/ˌeɪ.tiːˈem/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Máy ATM (Máy rút tiền tự động)",
                    "definition": "A machine that dispenses cash or performs other banking services when an account holder inserts a bank card.",
                    "synonyms": ["cash machine", "cashpoint"],
                    "antonyms": ["bank teller", "bank counter"]
                }
            ]
        },
        "Withdraw": {
            "phonetic": "/wɪðˈdrɔː/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Rút tiền",
                    "definition": "To take money out of a bank account.",
                    "synonyms": ["take out", "extract"],
                    "antonyms": ["deposit", "put in", "lodge"]
                }
            ]
        },
        "Photo ID": {
            "phonetic": "/ˈfoʊtoʊ aɪ ˈdiː/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Giấy tờ tuỳ thân có ảnh",
                    "definition": "An identification document that includes a photograph of the holder (e.g., driver's license, passport).",
                    "synonyms": ["identification", "ID card", "driver's license", "passport"],
                    "antonyms": []
                }
            ]
        },
        "Daily limit": {
            "phonetic": "/ˈdeɪli ˈlɪmɪt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Hạn mức (giao dịch) hằng ngày",
                    "definition": "The maximum amount of money that can be withdrawn or spent from an account in a single day.",
                    "synonyms": ["daily allowance", "withdrawal limit"],
                    "antonyms": []
                }
            ]
        },
        "Notes": {
            "phonetic": "/noʊts/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Tiền giấy",
                    "definition": "Banknotes; paper money.",
                    "synonyms": ["banknotes", "bills", "paper money", "cash"],
                    "antonyms": ["coins", "change"]
                },
                {
                    "type": "noun",
                    "viet": "Ghi chú",
                    "definition": "A brief record of facts, topics, or thoughts, written down as an aid to memory.",
                    "synonyms": ["memo", "record", "comment"],
                    "antonyms": []
                }
            ]
        }
    },
    "Food": {
        "café": {
            "phonetic": "/'kæfeɪ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "quán cà phê",
                    "definition": "A small restaurant selling light meals and drinks, especially coffee.",
                    "synonyms": ["coffee shop", "bistro", "tea room"],
                    "antonyms": ["bar", "fine dining restaurant"]
                }
            ]
        },
        "restaurant": {
            "phonetic": "/'restrɒnt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "nhà hàng",
                    "definition": "A place where people pay to sit and eat meals that are cooked and served on the premises.",
                    "synonyms": ["eatery", "diner", "bistro"],
                    "antonyms": ["take-away", "home"]
                }
            ]
        },
        "bar": {
            "phonetic": "/baː/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "quán bar, quầy rượu",
                    "definition": "An establishment where alcoholic drinks are served.",
                    "synonyms": ["pub", "tavern", "lounge"],
                    "antonyms": ["café", "restaurant"]
                }
            ]
        },
        "pub": {
            "phonetic": "/pʌb/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "quán rượu",
                    "definition": "An establishment licensed to sell alcoholic drinks, typically also serving food. Short for 'public house'.",
                    "synonyms": ["bar", "tavern", "inn"],
                    "antonyms": ["café"]
                }
            ]
        },
        "fast food restaurant": {
            "phonetic": "/faːst fuːd 'restrɒnt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "nhà hàng thức ăn nhanh",
                    "definition": "A restaurant that serves food (such as hamburgers or fried chicken) quickly and at low prices.",
                    "synonyms": ["fast food joint", "take-away"],
                    "antonyms": ["fine dining", "sit-down restaurant"]
                }
            ]
        },
        "take-away": {
            "phonetic": "/teɪk ə'weɪ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "đồ ăn mang về",
                    "definition": "Food cooked and sold by a restaurant or shop to be eaten elsewhere. (Called 'takeout' in US English).",
                    "synonyms": ["takeout", "carry-out"],
                    "antonyms": ["dine-in", "eat-in"]
                }
            ]
        },
        "menu": {
            "phonetic": "/'menjuː/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "thực đơn",
                    "definition": "A list of dishes available in a restaurant.",
                    "synonyms": ["bill of fare", "price list"],
                    "antonyms": []
                }
            ]
        },
        "starter": {
            "phonetic": "/'staːtə/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "món khai vị",
                    "definition": "A small dish served before the main part of a meal. (Called 'appetizer' in US English).",
                    "synonyms": ["appetizer", "entrée (in some regions)"],
                    "antonyms": ["dessert", "main course"]
                }
            ]
        },
        "main course": {
            "phonetic": "/meɪn kɔːs/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "món chính",
                    "definition": "The most substantial course of a meal.",
                    "synonyms": ["entrée (in US)", "main dish"],
                    "antonyms": ["starter", "dessert"]
                }
            ]
        },
        "dessert": {
            "phonetic": "/dɪ'zɜːt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "món tráng miệng",
                    "definition": "The sweet course eaten at the end of a meal.",
                    "synonyms": ["sweets", "pudding"],
                    "antonyms": ["starter", "appetizer"]
                }
            ]
        },
        "soup of the day": {
            "phonetic": "/suːp ɒv ðə deɪ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "súp của ngày",
                    "definition": "A particular soup offered by a restaurant on a specific day, which may not be on the regular menu.",
                    "synonyms": ["daily special (soup)"],
                    "antonyms": []
                }
            ]
        },
        "mixed salad": {
            "phonetic": "/mɪkst 'sæləd/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "salad thập cẩm",
                    "definition": "A salad made with a variety of ingredients, typically including lettuce, tomatoes, and cucumbers.",
                    "synonyms": ["garden salad", "house salad"],
                    "antonyms": []
                }
            ]
        },
        "steak": {
            "phonetic": "/steɪk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "bít tết",
                    "definition": "A high-quality slice of meat (especially beef) cut from the fleshy part of a carcass, typically grilled or fried.",
                    "synonyms": ["beefsteak"],
                    "antonyms": []
                }
            ]
        },
        "fish and chips": {
            "phonetic": "/fɪʃ ənd tʃɪps/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "cá và khoai tây chiên",
                    "definition": "A popular hot dish consisting of fried battered fish and hot chips. A common take-away food.",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "vegetable curry": {
            "phonetic": "/'vedʒtəbəl 'kʌri/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "cà ri rau củ",
                    "definition": "A dish of vegetables cooked in a spicy sauce, originating in South Asian cuisine.",
                    "synonyms": ["veg curry"],
                    "antonyms": ["meat curry"]
                }
            ]
        },
        "salmon fillet": {
            "phonetic": "/'sæmən 'fɪlɪt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "phi lê cá hồi",
                    "definition": "A boneless slice of meat from the side of a salmon.",
                    "synonyms": ["salmon steak"],
                    "antonyms": []
                }
            ]
        },
        "burger": {
            "phonetic": "/'bɜːgə/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "bánh mì kẹp thịt",
                    "definition": "A dish consisting of a cooked patty of ground meat (usually beef) served in a sliced bun, often with salad.",
                    "synonyms": ["hamburger"],
                    "antonyms": []
                }
            ]
        },
        "chocolate ice cream": {
            "phonetic": "/'tʃɒklət aɪs kriːm/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "kem sô cô la",
                    "definition": "A frozen dessert made from cream or milk, sugar, and chocolate flavoring.",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "apple pie": {
            "phonetic": "/'æpəl paɪ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "bánh táo",
                    "definition": "A pie in which the principal filling is apple, often served with cream or ice cream.",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "fruit salad": {
            "phonetic": "/fruːt 'sæləd/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "salad trái cây",
                    "definition": "A dish consisting of various kinds of fruit, sometimes served in a liquid (syrup or juice).",
                    "synonyms": [],
                    "antonyms": ["vegetable salad"]
                }
            ]
        },
        "vegetarian (v)": {
            "phonetic": "/ˌvedʒ.ɪˈteə.ri.ən/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "chay (đồ ăn)",
                    "definition": "Containing no meat or fish. (Indicated by 'v' on menus).",
                    "synonyms": ["meat-free", "plant-based"],
                    "antonyms": ["non-vegetarian"]
                },
                {
                    "type": "noun",
                    "viet": "người ăn chay",
                    "definition": "A person who does not eat meat or fish.",
                    "synonyms": [],
                    "antonyms": ["carnivore", "meat-eater"]
                }
            ]
        },
        "chips": {
            "phonetic": "/tʃɪps/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "khoai tây chiên (kiểu Anh/Úc)",
                    "definition": "Strips of deep-fried potato. (Called 'French fries' in US English).",
                    "synonyms": ["French fries", "fries"],
                    "antonyms": ["crisps (UK/AU)", "potato chips (US)"]
                }
            ]
        },
        "new potatoes": {
            "phonetic": "/njuː pəˈteɪ.təʊz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "khoai tây non",
                    "definition": "Small, young potatoes which are harvested early, often boiled or steamed with their skins on.",
                    "synonyms": ["baby potatoes"],
                    "antonyms": ["maincrop potatoes"]
                }
            ]
        },
        "rare": {
            "phonetic": "/reər/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "tái (thịt)",
                    "definition": "(Of meat) cooked very lightly, so that the inside is still red and cool.",
                    "synonyms": ["underdone"],
                    "antonyms": ["well-done", "medium"]
                }
            ]
        },
        "medium": {
            "phonetic": "/ˈmiː.di.əm/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "chín vừa (thịt)",
                    "definition": "(Of meat) cooked so that the inside is pink.",
                    "synonyms": [],
                    "antonyms": ["rare", "well-done"]
                }
            ]
        },
        "well-done": {
            "phonetic": "/ˌwel ˈdʌn/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "chín kỹ (thịt)",
                    "definition": "(Of meat) cooked thoroughly, so that the inside is brown/grey.",
                    "synonyms": ["cooked through", "overcooked"],
                    "antonyms": ["rare", "medium"]
                }
            ]
        },
        "soft drinks": {
            "phonetic": "/sɒft drɪŋks/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "đồ uống không cồn",
                    "definition": "A non-alcoholic drink, especially a carbonated one.",
                    "synonyms": ["soda", "pop", "fizzy drink"],
                    "antonyms": ["alcoholic drink", "hard drink"]
                }
            ]
        },
        "coke": {
            "phonetic": "/kəʊk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "cô ca",
                    "definition": "A carbonated soft drink flavored with coca-cola. Often used as a generic term for any cola.",
                    "synonyms": ["Cola", "Coca-Cola"],
                    "antonyms": []
                }
            ]
        },
        "delicious": {
            "phonetic": "/dɪˈlɪʃəs/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Ngon",
                    "definition": "Highly pleasant to the taste.",
                    "synonyms": ["tasty", "yummy", "scrumptious", "appetizing"],
                    "antonyms": ["disgusting", "tasteless", "awful"]
                }
            ]
        },
        "Are you ready to order?": {
            "phonetic": "/ɑː(r) juː ˈred.i tuː ˈɔː.dər/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Bạn đã sẵn sàng gọi món chưa?",
                    "definition": "A question asked by a waiter or waitress to customers to see if they have decided what to eat.",
                    "synonyms": ["Can I take your order?"],
                    "antonyms": []
                }
            ]
        },
        "What would you like to drink?": {
            "phonetic": "/wɒt wʊd juː laɪk tuː drɪŋk/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Bạn muốn uống gì?",
                    "definition": "A question asked by serving staff to find out which beverage a customer wants.",
                    "synonyms": ["Anything to drink?"],
                    "antonyms": []
                }
            ]
        },
        "Is everything all right?": {
            "phonetic": "/ɪz ˈev.ri.θɪŋ ɔːl ˈraɪt/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Mọi thứ có ổn không?",
                    "definition": "A question asked by serving staff to check if customers are satisfied with their food and service.",
                    "synonyms": ["How is everything?"],
                    "antonyms": []
                }
            ]
        },
        "Could I have the bill, please?": {
            "phonetic": "/kʊd aɪ hæv ðə bɪl pliːz/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Làm ơn cho tôi xin hóa đơn.",
                    "definition": "A polite phrase used by a customer to ask for the check or bill at the end of a meal.",
                    "synonyms": ["Check, please."],
                    "antonyms": []
                }
            ]
        },
        "Waiter": {
            "phonetic": "/ˈweɪ.tər/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bồi bàn (nam)",
                    "definition": "A man whose job is to serve customers at their tables in a restaurant.",
                    "synonyms": ["server"],
                    "antonyms": ["waitress", "customer"]
                }
            ]
        },
        "To start you off": {
            "phonetic": "/tuː stɑːt juː ɒf/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Để bạn bắt đầu (với món nào đó)",
                    "definition": "A phrase used by a waiter, often to suggest drinks or appetizers before the main meal.",
                    "synonyms": ["To begin with"],
                    "antonyms": []
                }
            ]
        },
        "Drink": {
            "phonetic": "/drɪŋk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Đồ uống",
                    "definition": "A liquid for drinking.",
                    "synonyms": ["beverage", "refreshment"],
                    "antonyms": ["food"]
                },
                {
                    "type": "verb",
                    "viet": "Uống",
                    "definition": "To take (a liquid) into the mouth and swallow.",
                    "synonyms": ["sip", "gulp", "swallow"],
                    "antonyms": ["eat"]
                }
            ]
        },
        "Iced tea": {
            "phonetic": "/ˌaɪst ˈtiː/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Trà đá",
                    "definition": "Chilled tea, often sweetened and served with ice.",
                    "synonyms": ["ice tea"],
                    "antonyms": ["hot tea"]
                }
            ]
        },
        "Lemonade": {
            "phonetic": "/ˌlem.əˈneɪd/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Nước chanh (hoặc soda chanh)",
                    "definition": "In AU/UK, a clear, carbonated, sweet lemon-flavored drink. In US, a still drink of lemon juice, water, and sugar.",
                    "synonyms": ["Sprite (AU/UK)", "7 Up (AU/UK)"],
                    "antonyms": []
                }
            ]
        },
        "Order": {
            "phonetic": "/ˈɔː.dər/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Gọi món",
                    "definition": "To make a request for something to be made, supplied, or served.",
                    "synonyms": ["request", "book", "reserve"],
                    "antonyms": ["cancel"]
                },
                {
                    "type": "noun",
                    "viet": "Đơn hàng, món gọi",
                    "definition": "A customer's request to buy, sell, or be supplied with something.",
                    "synonyms": ["request", "purchase"],
                    "antonyms": []
                }
            ]
        },
        "To start": {
            "phonetic": "/tuː stɑːt/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "(Để) bắt đầu, khai vị",
                    "definition": "A phrase used to indicate the first course of a meal.",
                    "synonyms": ["For a starter", "To begin"],
                    "antonyms": ["For dessert"]
                }
            ]
        },
        "Starter": {
            "phonetic": "/ˈstɑː.tər/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Món khai vị",
                    "definition": "A small dish served before the main part of a meal. (Called 'appetizer' in US English).",
                    "synonyms": ["appetizer", "entrée (in some regions)"],
                    "antonyms": ["dessert", "main course"]
                }
            ]
        },
        "Tomato soup": {
            "phonetic": "/təˈmɑː.təʊ suːp/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Súp cà chua",
                    "definition": "A soup made primarily from tomatoes.",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Roast beef": {
            "phonetic": "/rəʊst biːf/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bò nướng/quay",
                    "definition": "Beef that has been cooked by roasting (in an oven).",
                    "synonyms": [],
                    "antonyms": ["boiled beef", "steak"]
                }
            ]
        },
        "Mashed potatoes": {
            "phonetic": "/ˌmæʃt pəˈteɪ.təʊz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Khoai tây nghiền",
                    "definition": "Potatoes that have been boiled and crushed into a soft mass, often with milk and butter.",
                    "synonyms": ["mash"],
                    "antonyms": ["roast potatoes", "chips"]
                }
            ]
        },
        "Peas": {
            "phonetic": "/piːz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Đậu Hà Lan",
                    "definition": "A small, round, green seed, cooked and eaten as a vegetable.",
                    "synonyms": ["green peas"],
                    "antonyms": ["beans"]
                }
            ]
        },
        "Beef": {
            "phonetic": "/biːf/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Thịt bò",
                    "definition": "The flesh of a cow, bull, or ox, used as food.",
                    "synonyms": [],
                    "antonyms": ["pork", "chicken", "lamb"]
                }
            ]
        },
        "Rare": {
            "phonetic": "/reər/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Tái",
                    "definition": "(Of meat) cooked very lightly, so that the inside is still red and cool.",
                    "synonyms": ["underdone"],
                    "antonyms": ["well-done", "medium"]
                }
            ]
        },
        "Medium": {
            "phonetic": "/ˈmiː.di.əm/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Chín vừa",
                    "definition": "(Of meat) cooked so that the inside is pink.",
                    "synonyms": [],
                    "antonyms": ["rare", "well-done"]
                }
            ]
        },
        "Well done": {
            "phonetic": "/ˌwel ˈdʌn/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Chín kỹ",
                    "definition": "(Of meat) cooked thoroughly, so that the inside is brown/grey.",
                    "synonyms": ["cooked through"],
                    "antonyms": ["rare", "medium"]
                }
            ]
        },
        "Fish": {
            "phonetic": "/fɪʃ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Cá",
                    "definition": "A limbless cold-blooded vertebrate animal with gills and fins living wholly in water. Also, its flesh used as food.",
                    "synonyms": ["seafood"],
                    "antonyms": ["meat", "poultry"]
                }
            ]
        },
        "Salad": {
            "phonetic": "/ˈsæl.əd/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Rau trộn, sa-lát",
                    "definition": "A cold dish of various mixtures of raw or cooked vegetables, usually seasoned with oil, vinegar, or other dressing.",
                    "synonyms": ["green salad", "mixed salad"],
                    "antonyms": []
                }
            ]
        },
        "Desserts": {
            "phonetic": "/dɪˈzɜːts/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Món tráng miệng",
                    "definition": "The sweet course eaten at the end of a meal (plural).",
                    "synonyms": ["sweets", "pudding"],
                    "antonyms": ["starters", "main courses"]
                }
            ]
        },
        "Baking": {
            "phonetic": "/ˈbeɪ.kɪŋ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Việc nướng (bánh)",
                    "definition": "The activity of cooking food (like bread, cakes, and cookies) using dry heat, typically in an oven.",
                    "synonyms": ["cooking"],
                    "antonyms": ["frying", "boiling"]
                }
            ]
        },
        "Cookies": {
            "phonetic": "/ˈkʊk.iz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bánh quy",
                    "definition": "A small sweet baked good. (Called 'biscuits' in UK/AU English).",
                    "synonyms": ["biscuits (UK/AU)"],
                    "antonyms": ["cake"]
                }
            ]
        },
        "Ingredients": {
            "phonetic": "/ɪnˈɡriː.di.ənts/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Nguyên liệu",
                    "definition": "Any of the foods or substances that are combined to make a particular dish.",
                    "synonyms": ["components", "elements", "parts"],
                    "antonyms": ["finished dish"]
                }
            ]
        },
        "Recipe": {
            "phonetic": "/ˈres.ɪ.pi/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Công thức (nấu ăn)",
                    "definition": "A set of instructions for preparing a particular dish, including a list of the ingredients required.",
                    "synonyms": ["instructions", "directions"],
                    "antonyms": []
                }
            ]
        },
        "Flour": {
            "phonetic": "/ˈflaʊ.ər/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bột mì",
                    "definition": "A powder obtained by grinding grain, typically wheat, and used to make bread, cakes, and pastry.",
                    "synonyms": ["meal"],
                    "antonyms": []
                }
            ]
        },
        "Sugar": {
            "phonetic": "/ˈʃʊɡ.ər/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Đường",
                    "definition": "A sweet crystalline substance obtained from various plants, especially sugar cane and sugar beet, used as a sweetener.",
                    "synonyms": ["sweetener"],
                    "antonyms": ["salt"]
                }
            ]
        },
        "Butter": {
            "phonetic": "/ˈbʌt.ər/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bơ",
                    "definition": "A pale yellow edible fatty substance made by churning cream and used as a spread or in cooking.",
                    "synonyms": [],
                    "antonyms": ["margarine"]
                }
            ]
        },
        "Eggs": {
            "phonetic": "/eɡz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Trứng",
                    "definition": "An oval object laid by female birds, reptiles, etc., and (in the case of birds) often eaten as food.",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Chocolate chips": {
            "phonetic": "/ˌtʃɒk.lət ˈtʃɪps/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Vụn sô-cô-la",
                    "definition": "Small drops of chocolate, used in baking (e.g., in cookies).",
                    "synonyms": ["choc chips"],
                    "antonyms": []
                }
            ]
        },
        "Coffee": {
            "phonetic": "/ˈkɒfi/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Cà phê",
                    "definition": "A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.",
                    "synonyms": ["java", "cuppa"],
                    "antonyms": ["tea"]
                }
            ]
        },
        "Restaurant": {
            "phonetic": "/ˈres.trɒnt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Nhà hàng",
                    "definition": "A place where people pay to sit and eat meals that are cooked and served on the premises.",
                    "synonyms": ["eatery", "diner", "bistro"],
                    "antonyms": ["take-away", "home"]
                }
            ]
        },
        "Order (v)": {
            "phonetic": "/ˈɔː.dər/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Gọi món",
                    "definition": "To make a request for something to be made, supplied, or served.",
                    "synonyms": ["request", "book", "reserve"],
                    "antonyms": ["cancel"]
                }
            ]
        },
        "Slice (n)": {
            "phonetic": "/slaɪs/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Lát, miếng",
                    "definition": "A thin, broad piece of food, such as bread, meat, or cake, cut from a larger portion.",
                    "synonyms": ["piece", "wedge", "sliver"],
                    "antonyms": ["loaf", "whole"]
                }
            ]
        },
        "Main dish": {
            "phonetic": "/meɪn dɪʃ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Món chính",
                    "definition": "The most substantial dish of a meal.",
                    "synonyms": ["main course", "entrée (US)"],
                    "antonyms": ["appetizer", "dessert"]
                }
            ]
        },
        "Spaghetti": {
            "phonetic": "/spəˈɡet.i/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Mì Ý",
                    "definition": "Pasta made in long, thin, solid strings.",
                    "synonyms": ["pasta"],
                    "antonyms": []
                }
            ]
        },
        "Tea": {
            "phonetic": "/tiː/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Trà",
                    "definition": "A hot drink made by infusing the dried, crushed leaves of the tea plant in boiling water.",
                    "synonyms": ["cuppa"],
                    "antonyms": ["coffee"]
                }
            ]
        },
        "Dessert": {
            "phonetic": "/dɪˈzɜːrt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Món tráng miệng",
                    "definition": "The sweet course eaten at the end of a meal.",
                    "synonyms": ["sweets", "pudding"],
                    "antonyms": ["starter", "appetizer"]
                }
            ]
        },
        "Soup": {
            "phonetic": "/suːp/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Súp, canh",
                    "definition": "A liquid dish, typically made by boiling meat, fish, or vegetables in stock or water.",
                    "synonyms": ["broth"],
                    "antonyms": []
                }
            ]
        },
        "Grilled fish": {
            "phonetic": "/ɡrɪld fɪʃ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Cá nướng",
                    "definition": "Fish cooked over high heat, either on a grill rack or in a grill pan.",
                    "synonyms": ["barbecued fish"],
                    "antonyms": ["fried fish", "battered fish"]
                }
            ]
        },
        "Broccoli": {
            "phonetic": "/ˈbrɒkəli/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bông cải xanh",
                    "definition": "A green vegetable with a dense head of small florets and a thick stalk.",
                    "synonyms": [],
                    "antonyms": ["cauliflower"]
                }
            ]
        },
        "Ice cream": {
            "phonetic": "/ˈaɪs kriːm/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Kem",
                    "definition": "A frozen dessert made from cream or milk, sugar, and flavoring.",
                    "synonyms": ["gelato", "sorbet (no dairy)"],
                    "antonyms": []
                }
            ]
        },
        "Beef stir-fry": {
            "phonetic": "/biːf ˈstɜːr fraɪ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bò xào",
                    "definition": "A dish made by frying strips of beef and vegetables quickly over high heat while stirring.",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Hamburger": {
            "phonetic": "/ˈhæmbɜːrɡər/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bánh hăm-bơ-gơ",
                    "definition": "A cooked patty of ground meat (usually beef) served in a sliced bun.",
                    "synonyms": ["burger"],
                    "antonyms": []
                }
            ]
        },
        "Fries": {
            "phonetic": "/fraɪz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Khoai tây chiên",
                    "definition": "Strips of deep-fried potato. (US term, but also understood in AU).",
                    "synonyms": ["chips (AU/UK)", "French fries"],
                    "antonyms": []
                }
            ]
        },
        "Cheesecake": {
            "phonetic": "/ˈtʃiːzkeɪk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bánh phô mai",
                    "definition": "A rich dessert cake made with cream and soft cheese on a biscuit base.",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Steak": {
            "phonetic": "/steɪk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bít tết",
                    "definition": "A high-quality slice of meat (especially beef) cut from the fleshy part of a carcass, typically grilled or fried.",
                    "synonyms": ["beefsteak"],
                    "antonyms": []
                }
            ]
        },
        "French fries": {
            "phonetic": "/frɛntʃ fraɪz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Khoai tây chiên",
                    "definition": "Strips of deep-fried potato. (US term).",
                    "synonyms": ["chips (AU/UK)", "fries"],
                    "antonyms": []
                }
            ]
        },
        "Fried chicken": {
            "phonetic": "/fraɪd ˈtʃɪkɪn/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Gà rán",
                    "definition": "Chicken pieces that have been coated in batter or flour and deep-fried.",
                    "synonyms": [],
                    "antonyms": ["roast chicken"]
                }
            ]
        },
        "Pizza": {
            "phonetic": "/ˈpiːtsə/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bánh pizza",
                    "definition": "A dish of Italian origin, consisting of a flat, round base of dough baked with a topping of tomato sauce and cheese, typically with added meat or vegetables.",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Cola": {
            "phonetic": "/ˈkoʊlə/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Nước ngọt cô-la",
                    "definition": "A carbonated soft drink flavored with coca-cola.",
                    "synonyms": ["coke"],
                    "antonyms": []
                }
            ]
        },
        "Spicy": {
            "phonetic": "/ˈspaɪsi/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Cay",
                    "definition": "Flavored with or containing spice; hot to the taste.",
                    "synonyms": ["hot", "piquant", "peppery"],
                    "antonyms": ["mild", "bland"]
                }
            ]
        },
        "Appetizer": {
            "phonetic": "/ˈæpɪtaɪzər/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Món khai vị",
                    "definition": "A small dish served before the main part of a meal. (US term).",
                    "synonyms": ["starter (AU/UK)", "entrée (in some regions)"],
                    "antonyms": ["dessert", "main course"]
                }
            ]
        },
        "Price": {
            "phonetic": "/praɪs/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Giá cả",
                    "definition": "The amount of money expected, required, or given in payment for something.",
                    "synonyms": ["cost", "charge", "fee", "value"],
                    "antonyms": []
                }
            ]
        },
        "On sale": {
            "phonetic": "/ɒn seɪl/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Đang giảm giá",
                    "definition": "Available for purchase at a reduced price.",
                    "synonyms": ["discounted", "on special"],
                    "antonyms": ["full price"]
                }
            ]
        },
        "How much?": {
            "phonetic": "/haʊ mʌtʃ/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Bao nhiêu tiền?",
                    "definition": "A question used to ask about the price or cost of something.",
                    "synonyms": ["What's the price?"],
                    "antonyms": []
                }
            ]
        },
        "Expensive": {
            "phonetic": "/ɪkˈspen.sɪv/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Đắt tiền",
                    "definition": "Costing a lot of money.",
                    "synonyms": ["costly", "pricy", "dear"],
                    "antonyms": ["cheap", "inexpensive", "affordable"]
                }
            ]
        },
        "Buy": {
            "phonetic": "/baɪ/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Mua",
                    "definition": "To obtain something in exchange for payment.",
                    "synonyms": ["purchase"],
                    "antonyms": ["sell", "vend"]
                }
            ]
        },
        "Change (n)": {
            "phonetic": "/tʃeɪndʒ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Tiền thối lại",
                    "definition": "The money returned to someone as the balance of the sum paid for something.",
                    "synonyms": ["balance"],
                    "antonyms": []
                },
                {
                    "type": "noun",
                    "viet": "Tiền lẻ (xu)",
                    "definition": "Money in the form of coins rather than notes.",
                    "synonyms": ["coins", "loose change"],
                    "antonyms": ["notes"]
                }
            ]
        },
        "Comes to": {
            "phonetic": "/kʌmz tuː/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "(Tổng cộng) là",
                    "definition": "A phrase used to state the total cost of a purchase.",
                    "synonyms": ["That will be", "The total is"],
                    "antonyms": []
                }
            ]
        },
        "Tax": {
            "phonetic": "/tæks/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Thuế",
                    "definition": "A compulsory contribution to state revenue, levied by the government (e.g., GST - Goods and Services Tax).",
                    "synonyms": ["duty", "levy", "GST"],
                    "antonyms": ["refund"]
                }
            ]
        },
        "Costs": {
            "phonetic": "/kɒsts/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Có giá là",
                    "definition": "(Of an item) to require the payment of (a specified sum) before it can be acquired.",
                    "synonyms": ["is priced at"],
                    "antonyms": []
                }
            ]
        },
        "Reasonable": {
            "phonetic": "/ˈriː.zən.ə.bəl/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Hợp lý, phải chăng",
                    "definition": "(Of a price) not too expensive; fair.",
                    "synonyms": ["fair", "affordable", "moderate"],
                    "antonyms": ["expensive", "unreasonable"]
                }
            ]
        },
        "Cheaper": {
            "phonetic": "/ˈtʃiː.pər/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Rẻ hơn",
                    "definition": "Costing less than something else (comparative of 'cheap').",
                    "synonyms": ["less expensive", "more affordable"],
                    "antonyms": ["more expensive", "dearer"]
                }
            ]
        },
        "Afford": {
            "phonetic": "/əˈfɔːd/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Có đủ khả năng chi trả",
                    "definition": "To have enough money to pay for.",
                    "synonyms": ["be able to buy"],
                    "antonyms": []
                }
            ]
        },
        "Shopping": {
            "phonetic": "/ˈʃɒp.ɪŋ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Mua sắm",
                    "definition": "The activity of buying goods from shops.",
                    "synonyms": ["going to the shops", "making purchases"],
                    "antonyms": []
                }
            ]
        },
        "Store": {
            "phonetic": "/stɔːr/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Cửa hàng",
                    "definition": "A place where items are kept for sale.",
                    "synonyms": ["shop", "retailer", "outlet"],
                    "antonyms": []
                }
            ]
        },
        "Department store": {
            "phonetic": "/dɪˈpɑːt.mənt ˌstɔːr/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Cửa hàng bách hóa",
                    "definition": "A large store stocking a wide variety of goods (e.g., clothes, furniture, electronics) in different departments.",
                    "synonyms": ["Myer (example)", "David Jones (example)"],
                    "antonyms": ["specialty store"]
                }
            ]
        },
        "Try on": {
            "phonetic": "/traɪ ɒn/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Thử (quần áo)",
                    "definition": "To put on an item of clothing to see if it fits or suits one.",
                    "synonyms": ["test", "check the fit"],
                    "antonyms": []
                }
            ]
        },
        "Look around": {
            "phonetic": "/lʊk əˈraʊnd/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Nhìn quanh, xem hàng",
                    "definition": "To browse or look at items in a shop without a specific purchase in mind.",
                    "synonyms": ["browse", "window-shop"],
                    "antonyms": ["purchase"]
                }
            ]
        },
        "Size": {
            "phonetic": "/saɪz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Kích cỡ",
                    "definition": "One of a range of classifications (e.g., small, medium, large) to which clothes or shoes are assigned.",
                    "synonyms": ["fit", "dimensions"],
                    "antonyms": []
                }
            ]
        },
        "Pair": {
            "phonetic": "/peər/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Đôi, cặp",
                    "definition": "A set of two things used together or regarded as a unit (e.g., a pair of shoes).",
                    "synonyms": ["set", "duo"],
                    "antonyms": ["single", "individual"]
                }
            ]
        },
        "Design": {
            "phonetic": "/dɪˈzaɪn/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Kiểu dáng, thiết kế",
                    "definition": "A plan or drawing produced to show the look and function of something before it is made; the style.",
                    "synonyms": ["style", "pattern", "look"],
                    "antonyms": []
                }
            ]
        },
        "Blouse": {
            "phonetic": "/blaʊz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Áo sơ mi nữ",
                    "definition": "A garment resembling a shirt, typically worn by women.",
                    "synonyms": ["top", "shirt"],
                    "antonyms": ["T-shirt"]
                }
            ]
        },
        "Shirt": {
            "phonetic": "/ʃɜːt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Áo sơ mi",
                    "definition": "A garment for the upper body with a collar and sleeves, and buttons down the front.",
                    "synonyms": ["button-up", "top"],
                    "antonyms": ["trousers"]
                }
            ]
        },
        "Watch": {
            "phonetic": "/wɒtʃ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Đồng hồ đeo tay",
                    "definition": "A small timepiece worn typically on a strap on one's wrist.",
                    "synonyms": ["timepiece"],
                    "antonyms": ["clock"]
                }
            ]
        },
        "Cotton": {
            "phonetic": "/ˈkɒt.ən/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Vải cotton, bông",
                    "definition": "A soft white fibrous substance that surrounds the seeds of the cotton plant and is made into textile fiber.",
                    "synonyms": [],
                    "antonyms": ["wool", "polyester", "silk"]
                }
            ]
        },
        "Fabric": {
            "phonetic": "/ˈfæb.rɪk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Chất liệu vải",
                    "definition": "Cloth or other material produced by weaving or knitting textile fibers.",
                    "synonyms": ["material", "textile"],
                    "antonyms": []
                }
            ]
        },
        "Silk": {
            "phonetic": "/sɪlk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Lụa, tơ",
                    "definition": "A fine, strong, soft, lustrous fiber produced by silkworms, used for fabric.",
                    "synonyms": [],
                    "antonyms": ["cotton", "wool"]
                }
            ]
        },
        "Dry-clean": {
            "phonetic": "/ˌdraɪˈkliːn/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Giặt khô",
                    "definition": "To clean (clothing) with an organic solvent, without using water.",
                    "synonyms": [],
                    "antonyms": ["machine wash", "hand wash"]
                }
            ]
        }
    },
    "Travelling": {
        "travel": {
            "phonetic": "/'trævəl/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "du lịch, đi lại",
                    "definition": "To make a journey, typically of some length.",
                    "synonyms": ["journey", "go", "trip", "tour"],
                    "antonyms": ["stay", "remain"]
                }
            ]
        },
        "travelling": {
            "phonetic": "/'trævəlın/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "việc đi lại, du lịch",
                    "definition": "The action of making a journey.",
                    "synonyms": ["journeying", "touring", "voyaging"],
                    "antonyms": ["staying", "remaining"]
                }
            ]
        },
        "journey": {
            "phonetic": "/'dʒɜːni/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "chuyến đi",
                    "definition": "An act of traveling from one place to another.",
                    "synonyms": ["trip", "expedition", "voyage", "tour"],
                    "antonyms": []
                }
            ]
        },
        "train": {
            "phonetic": "/trein/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "tàu hỏa",
                    "definition": "A series of railway carriages or wagons moved by a locomotive.",
                    "synonyms": ["locomotive", "railway train"],
                    "antonyms": ["car", "bus", "plane"]
                }
            ]
        },
        "train station": {
            "phonetic": "/trein 'steiʃən/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "ga tàu hỏa",
                    "definition": "A place where trains stop for passengers to get on or off.",
                    "synonyms": ["railway station", "depot"],
                    "antonyms": ["bus stop", "airport"]
                }
            ]
        },
        "railway station": {
            "phonetic": "/'reilwei 'steiʃən/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "ga xe lửa",
                    "definition": "A place where trains stop for passengers to get on or off.",
                    "synonyms": ["train station", "depot"],
                    "antonyms": ["bus stop", "airport"]
                }
            ]
        },
        "platform": {
            "phonetic": "/'plætfɔːm/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "sân ga",
                    "definition": "A raised level surface at a railway station, beside the track, for passengers to get on and off trains.",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "depart": {
            "phonetic": "/dɪ'paːt/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "khởi hành",
                    "definition": "To leave, especially in order to start a journey.",
                    "synonyms": ["leave", "go", "set off"],
                    "antonyms": ["arrive", "stay"]
                }
            ]
        },
        "arrive": {
            "phonetic": "/ə'raiv/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "đến nơi",
                    "definition": "To reach a place at the end of a journey.",
                    "synonyms": ["reach", "get to", "show up"],
                    "antonyms": ["depart", "leave"]
                }
            ]
        },
        "restaurant car": {
            "phonetic": "/'restrɒnt kaː/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "toa ăn (trên tàu)",
                    "definition": "A carriage on a train where meals are served.",
                    "synonyms": ["dining car"],
                    "antonyms": []
                }
            ]
        },
        "change trains": {
            "phonetic": "/tʃeindʒ treinz/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "đổi tàu",
                    "definition": "To get off one train and get on another in order to continue a journey.",
                    "synonyms": ["transfer (trains)"],
                    "antonyms": ["direct train"]
                }
            ]
        },
        "direct train": {
            "phonetic": "/dɪ'rekt trein/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "tàu chạy thẳng",
                    "definition": "A train that goes from one station to another without requiring a transfer.",
                    "synonyms": ["non-stop train (if it doesn't stop)"],
                    "antonyms": ["connecting train"]
                }
            ]
        },
        "plane": {
            "phonetic": "/plein/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "máy bay",
                    "definition": "A powered flying vehicle with fixed wings. Short for 'aeroplane'.",
                    "synonyms": ["aeroplane", "aircraft", "jet"],
                    "antonyms": ["train", "car", "boat"]
                }
            ]
        },
        "aeroplane": {
            "phonetic": "/'eərəplein/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "máy bay",
                    "definition": "A powered flying vehicle with fixed wings.",
                    "synonyms": ["plane", "aircraft", "jet"],
                    "antonyms": ["train", "car", "boat"]
                }
            ]
        },
        "flight": {
            "phonetic": "/flaɪt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "chuyến bay",
                    "definition": "A journey made by air, especially in a plane.",
                    "synonyms": ["air journey", "trip"],
                    "antonyms": ["drive", "train journey"]
                }
            ]
        },
        "airport": {
            "phonetic": "/'eəpɔːt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "sân bay",
                    "definition": "A complex of runways and buildings for the take-off, landing, and maintenance of aircraft, with facilities for passengers.",
                    "synonyms": ["airfield", "air terminal"],
                    "antonyms": ["train station", "bus station"]
                }
            ]
        },
        "take off": {
            "phonetic": "/teɪk ɒf/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "cất cánh (máy bay)",
                    "definition": "(Of an aircraft) to become airborne.",
                    "synonyms": ["lift off", "ascend", "depart"],
                    "antonyms": ["land", "touch down"]
                }
            ]
        },
        "land": {
            "phonetic": "/lænd/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "hạ cánh (máy bay)",
                    "definition": "(Of an aircraft) to come down from the air onto the ground.",
                    "synonyms": ["touch down", "arrive"],
                    "antonyms": ["take off", "depart"]
                }
            ]
        },
        "check in": {
            "phonetic": "/tʃek ɪn/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "làm thủ tục (ở sân bay, khách sạn)",
                    "definition": "To arrive and register at an airport or hotel.",
                    "synonyms": ["register", "sign in"],
                    "antonyms": ["check out", "depart"]
                }
            ]
        },
        "online check-in": {
            "phonetic": "/ɒn'lain tʃek ɪn/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "làm thủ tục trực tuyến",
                    "definition": "The process of registering for a flight via the internet.",
                    "synonyms": ["web check-in"],
                    "antonyms": ["airport check-in"]
                }
            ]
        },
        "boarding card": {
            "phonetic": "/'bɔːdɪŋ kaːd/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "thẻ lên máy bay",
                    "definition": "A card that a passenger must have to be allowed to get on an aircraft.",
                    "synonyms": ["boarding pass"],
                    "antonyms": ["ticket"]
                }
            ]
        },
        "flight attendant": {
            "phonetic": "/flaɪt ə'tendənt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "tiếp viên hàng không",
                    "definition": "A person whose job is to ensure the safety and comfort of passengers on an aircraft.",
                    "synonyms": ["air steward", "air hostess", "cabin crew"],
                    "antonyms": ["pilot"]
                }
            ]
        },
        "customs": {
            "phonetic": "/ˈkʌs·təmz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "hải quan",
                    "definition": "The official department that administers and collects the duties levied by a government on imported goods.",
                    "synonyms": ["border control", "immigration"],
                    "antonyms": []
                }
            ]
        },
        "map": {
            "phonetic": "/mæp/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "bản đồ",
                    "definition": "A diagrammatic representation of an area of land or sea showing physical features, cities, roads, etc.",
                    "synonyms": ["chart", "plan", "atlas"],
                    "antonyms": []
                }
            ]
        },
        "timetable": {
            "phonetic": "/ˈtaɪmˌteɪ·bəl/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "thời gian biểu (tàu, xe)",
                    "definition": "A schedule showing the departure and arrival times of trains, buses, or aircraft.",
                    "synonyms": ["schedule", "itinerary"],
                    "antonyms": []
                }
            ]
        },
        "ticket": {
            "phonetic": "/ˈtɪkɪt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "vé",
                    "definition": "A piece of paper or card that gives the holder a right to travel on public transport or attend an event.",
                    "synonyms": ["pass", "fare"],
                    "antonyms": []
                }
            ]
        },
        "single (ticket)": {
            "phonetic": "/ˈsɪŋ·ɡəl/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "vé một chiều",
                    "definition": "A ticket entitling a passenger to travel only to their destination, without returning. (Called 'one-way' in US English).",
                    "synonyms": ["one-way ticket"],
                    "antonyms": ["return ticket", "round-trip ticket"]
                }
            ]
        },
        "return (ticket)": {
            "phonetic": "/rɪˈtɜrn/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "vé khứ hồi",
                    "definition": "A ticket entitling a passenger to travel to their destination and back again. (Called 'round-trip' in US English).",
                    "synonyms": ["round-trip ticket"],
                    "antonyms": ["single ticket", "one-way ticket"]
                }
            ]
        },
        "book (a seat)": {
            "phonetic": "/bʊk/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "đặt (chỗ)",
                    "definition": "To reserve accommodation, a seat, etc., in advance.",
                    "synonyms": ["reserve", "pre-arrange"],
                    "antonyms": ["cancel"]
                }
            ]
        },
        "reserve (a seat)": {
            "phonetic": "/rɪˈzɜrv/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "đặt trước (chỗ)",
                    "definition": "To arrange for (a seat, room, etc.) to be kept for one's use.",
                    "synonyms": ["book", "pre-arrange"],
                    "antonyms": ["cancel"]
                }
            ]
        },
        "in advance": {
            "phonetic": "/ɪn ədˈvɑns/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "trước (thời gian)",
                    "definition": "Beforehand; ahead of time.",
                    "synonyms": ["beforehand", "early"],
                    "antonyms": ["last-minute", "at the time"]
                }
            ]
        },
        "hire a car": {
            "phonetic": "/ˈhaɪər ə kɑr/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "thuê xe ô tô",
                    "definition": "To pay money to borrow a car for a short time. (Called 'rent a car' in US English).",
                    "synonyms": ["rent a car"],
                    "antonyms": ["buy a car"]
                }
            ]
        },
        "fill it up with": {
            "phonetic": "/fɪl ɪt ʌp wɪð/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "đổ đầy (xăng)",
                    "definition": "To make (a car's fuel tank) full.",
                    "synonyms": ["fill the tank"],
                    "antonyms": []
                }
            ]
        },
        "petrol": {
            "phonetic": "/ˈpet·rəl/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "xăng",
                    "definition": "A liquid fuel used in cars. (Called 'gas' or 'gasoline' in US English).",
                    "synonyms": ["gasoline", "gas (US)", "fuel"],
                    "antonyms": ["diesel"]
                }
            ]
        },
        "give you a lift": {
            "phonetic": "/ɡɪv ju ə lɪft/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "cho đi nhờ xe",
                    "definition": "To give someone a free ride in your car.",
                    "synonyms": ["give a ride"],
                    "antonyms": []
                }
            ]
        },
        "luggage": {
            "phonetic": "/'lʌgɪdʒ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "hành lý",
                    "definition": "Suitcases or other bags in which to pack personal belongings for traveling.",
                    "synonyms": ["baggage"],
                    "antonyms": []
                }
            ]
        },
        "suitcase": {
            "phonetic": "/'suːtkeɪs/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "vali",
                    "definition": "A case with a handle and a hinged lid, used for carrying clothes and belongings when traveling.",
                    "synonyms": ["bag", "case"],
                    "antonyms": ["backpack"]
                }
            ]
        },
        "rucksack": {
            "phonetic": "/ˈrʌk·sæk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "ba lô",
                    "definition": "A bag carried on the back, typically used by hikers.",
                    "synonyms": ["backpack"],
                    "antonyms": ["suitcase"]
                }
            ]
        },
        "Map": {
            "phonetic": "/mæp/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bản đồ",
                    "definition": "A diagrammatic representation of an area of land or sea showing physical features, cities, roads, etc.",
                    "synonyms": ["chart", "plan", "atlas"],
                    "antonyms": []
                }
            ]
        },
        "Transportation": {
            "phonetic": "/ˌtrænspɔːrˈteɪʃən/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Giao thông, phương tiện đi lại",
                    "definition": "The system or means of conveying people or goods from place to place.",
                    "synonyms": ["transport", "transit", "vehicles"],
                    "antonyms": []
                }
            ]
        },
        "Taxi": {
            "phonetic": "/ˈtæksi/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Xe tắc-xi",
                    "definition": "A car licensed to transport passengers in return for payment of a fare.",
                    "synonyms": ["cab"],
                    "antonyms": ["bus", "train"]
                }
            ]
        },
        "Bus": {
            "phonetic": "/bʌs/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Xe buýt",
                    "definition": "A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route.",
                    "synonyms": ["coach (for long distance)"],
                    "antonyms": ["taxi", "car"]
                }
            ]
        },
        "Bus stop": {
            "phonetic": "/bʌs stɒp/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Trạm xe buýt",
                    "definition": "A designated place where buses stop for passengers to get on or off.",
                    "synonyms": ["bus station (larger)"],
                    "antonyms": ["train station"]
                }
            ]
        },
        "Rush hour": {
            "phonetic": "/ˈrʌʃ aʊər/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Giờ cao điểm",
                    "definition": "A time during each day when traffic is at its heaviest.",
                    "synonyms": ["peak hour", "peak time"],
                    "antonyms": ["off-peak"]
                }
            ]
        },
        "Traffic": {
            "phonetic": "/ˈtræfɪk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Giao thông, sự kẹt xe",
                    "definition": "Vehicles moving on a road or public highway. Can also mean heavy congestion.",
                    "synonyms": ["congestion", "traffic jam", "vehicles"],
                    "antonyms": ["clear roads"]
                }
            ]
        },
        "To catch (a bus/train)": {
            "phonetic": "/tuː kætʃ/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Bắt kịp (xe buýt/tàu)",
                    "definition": "To get on or be in time for (a train, bus, etc.).",
                    "synonyms": ["make", "get on"],
                    "antonyms": ["miss"]
                }
            ]
        },
        "To miss (a bus/train)": {
            "phonetic": "/tuː mɪs/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Lỡ (chuyến xe buýt/tàu)",
                    "definition": "To fail to catch (a train, bus, etc.).",
                    "synonyms": ["be late for"],
                    "antonyms": ["catch", "make"]
                }
            ]
        },
        "Vacation": {
            "phonetic": "/veɪˈkeɪʃən/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Kỳ nghỉ",
                    "definition": "A period spent away from home or work in travel or recreation. (Mainly US English).",
                    "synonyms": ["holiday (AU/UK)", "break", "leave"],
                    "antonyms": ["work"]
                }
            ]
        },
        "Traveling": {
            "phonetic": "/ˈtrævəlɪŋ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Việc đi du lịch",
                    "definition": "The activity of making journeys. (US spelling; 'travelling' in AU/UK).",
                    "synonyms": ["journeying", "touring"],
                    "antonyms": ["staying"]
                }
            ]
        },
        "Ticket": {
            "phonetic": "/ˈtɪkɪt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Vé",
                    "definition": "A piece of paper or card that gives the holder a right to travel on public transport or attend an event.",
                    "synonyms": ["pass", "fare"],
                    "antonyms": []
                }
            ]
        },
        "Red eye": {
            "phonetic": "/ˌred ˈaɪ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Chuyến bay đêm",
                    "definition": "A flight taken at night, on which passengers are likely to be tired and have red eyes.",
                    "synonyms": ["overnight flight"],
                    "antonyms": ["day flight"]
                }
            ]
        },
        "Plane": {
            "phonetic": "/pleɪn/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Máy bay",
                    "definition": "A powered flying vehicle with fixed wings. Short for 'aeroplane'.",
                    "synonyms": ["aeroplane", "aircraft", "jet"],
                    "antonyms": ["train", "car", "boat"]
                }
            ]
        },
        "Train": {
            "phonetic": "/treɪn/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Tàu hỏa",
                    "definition": "A series of railway carriages or wagons moved by a locomotive.",
                    "synonyms": ["locomotive", "railway train"],
                    "antonyms": ["car", "bus", "plane"]
                }
            ]
        },
        "To leave": {
            "phonetic": "/tuː liːv/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Rời đi, khởi hành",
                    "definition": "To go away from.",
                    "synonyms": ["depart", "go", "set off"],
                    "antonyms": ["arrive", "stay"]
                }
            ]
        },
        "Drive": {
            "phonetic": "/draɪv/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Lái xe",
                    "definition": "To operate and control the movement of a motor vehicle.",
                    "synonyms": ["steer", "operate (a car)"],
                    "antonyms": ["walk", "ride (as passenger)"]
                }
            ]
        },
        "Directions": {
            "phonetic": "/daɪˈrekʃənz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Hướng đi, chỉ dẫn",
                    "definition": "Instructions on how to reach a destination or perform a task.",
                    "synonyms": ["instructions", "guidance", "route"],
                    "antonyms": []
                }
            ]
        },
        "Post office": {
            "phonetic": "/pəʊst ˈɒfɪs/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bưu điện",
                    "definition": "The public department or corporation responsible for postal services. Also, the building where this service is located.",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Bank": {
            "phonetic": "/bæŋk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Ngân hàng",
                    "definition": "A financial institution licensed to receive deposits and make loans.",
                    "synonyms": ["financial institution"],
                    "antonyms": []
                }
            ]
        },
        "Hotel": {
            "phonetic": "/hoʊˈtɛl/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Khách sạn",
                    "definition": "An establishment providing accommodation, meals, and other services for travelers and tourists.",
                    "synonyms": ["inn", "motel", "accommodation"],
                    "antonyms": ["hostel"]
                }
            ]
        },
        "Bookstore": {
            "phonetic": "/ˈbʊkstɔːr/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Hiệu sách",
                    "definition": "A shop that sells books.",
                    "synonyms": ["bookshop"],
                    "antonyms": ["library"]
                }
            ]
        },
        "Supermarket": {
            "phonetic": "/ˈsuːpərmɑːkɪt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Siêu thị",
                    "definition": "A large self-service shop selling foods and household goods.",
                    "synonyms": ["grocery store"],
                    "antonyms": ["corner store", "market"]
                }
            ]
        },
        "Go straight": {
            "phonetic": "/ɡoʊ streɪt/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Đi thẳng",
                    "definition": "A direction to continue moving forward without turning.",
                    "synonyms": ["continue ahead", "keep going"],
                    "antonyms": ["turn left", "turn right"]
                }
            ]
        },
        "Turn left/right": {
            "phonetic": "/tɜːrn lɛft/raɪt/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Rẽ trái/phải",
                    "definition": "A direction to change one's course to the left or right side.",
                    "synonyms": ["make a left/right"],
                    "antonyms": ["go straight"]
                }
            ]
        },
        "On the left/right": {
            "phonetic": "/ɒn ðə lɛft/raɪt/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Ở bên trái/phải",
                    "definition": "A phrase indicating the location of something relative to one's position.",
                    "synonyms": ["to the left/right"],
                    "antonyms": []
                }
            ]
        },
        "Block": {
            "phonetic": "/blɒk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Dãy nhà, khu phố",
                    "definition": "A rectangular area in a city surrounded by streets.",
                    "synonyms": ["city block"],
                    "antonyms": []
                }
            ]
        },
        "Corner": {
            "phonetic": "/ˈkɔːrnər/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Góc đường",
                    "definition": "A place where two streets meet.",
                    "synonyms": ["intersection", "junction"],
                    "antonyms": []
                }
            ]
        },
        "Intersection": {
            "phonetic": "/ˌɪntərˈsɛkʃən/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Giao lộ, ngã tư",
                    "definition": "A point where two or more roads cross or meet.",
                    "synonyms": ["junction", "crossroads", "corner"],
                    "antonyms": []
                }
            ]
        },
        "Place": {
            "phonetic": "/pleɪs/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Nơi chốn, địa điểm",
                    "definition": "A particular position or point in space.",
                    "synonyms": ["location", "spot", "area"],
                    "antonyms": []
                }
            ]
        },
        "City": {
            "phonetic": "/ˈsɪti/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Thành phố",
                    "definition": "A large town.",
                    "synonyms": ["metropolis", "urban center"],
                    "antonyms": ["countryside", "town", "village"]
                }
            ]
        },
        "Polluted": {
            "phonetic": "/pəˈluːtɪd/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Bị ô nhiễm",
                    "definition": "Contaminated with harmful or poisonous substances.",
                    "synonyms": ["contaminated", "dirty", "tainted"],
                    "antonyms": ["clean", "pure", "pristine"]
                }
            ]
        },
        "Climate": {
            "phonetic": "/ˈklaɪmət/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Khí hậu",
                    "definition": "The general weather conditions prevailing in an area over a long period.",
                    "synonyms": ["weather patterns", "temperature"],
                    "antonyms": ["weather (short-term)"]
                }
            ]
        },
        "Safe": {
            "phonetic": "/seɪf/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "An toàn",
                    "definition": "Protected from or not exposed to danger or risk.",
                    "synonyms": ["secure", "protected", "out of harm's way"],
                    "antonyms": ["dangerous", "unsafe", "risky"]
                }
            ]
        },
        "Noisy": {
            "phonetic": "/ˈnɔɪzi/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Ồn ào",
                    "definition": "Making a lot of noise.",
                    "synonyms": ["loud", "rowdy", "cacophonous"],
                    "antonyms": ["quiet", "silent", "peaceful"]
                }
            ]
        },
        "Crowded": {
            "phonetic": "/ˈkraʊdɪd/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Đông đúc",
                    "definition": "(Of a space) full of people, leaving little room.",
                    "synonyms": ["packed", "congested", "full"],
                    "antonyms": ["empty", "spacious", "deserted"]
                }
            ]
        },
        "Transportation system": {
            "phonetic": "/ˌtrænspɔːrˈteɪʃən ˈsɪstəm/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Hệ thống giao thông",
                    "definition": "The network of infrastructure and vehicles used for transport (e.g., buses, trains, roads).",
                    "synonyms": ["transport network", "public transport"],
                    "antonyms": []
                }
            ]
        },
        "Friendly": {
            "phonetic": "/ˈfrɛndli/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Thân thiện",
                    "definition": "Kind and pleasant.",
                    "synonyms": ["welcoming", "amicable", "affable"],
                    "antonyms": ["unfriendly", "hostile", "cold"]
                }
            ]
        },
        "Scenic": {
            "phonetic": "/ˈsiːnɪk/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Có cảnh đẹp",
                    "definition": "Providing or relating to views of beautiful natural scenery.",
                    "synonyms": ["picturesque", "beautiful", "panoramic"],
                    "antonyms": ["ugly", "industrial", "plain"]
                }
            ]
        },
        "Beautiful": {
            "phonetic": "/ˈbjuːtɪfəl/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Xinh đẹp",
                    "definition": "Pleasing the senses or mind aesthetically.",
                    "synonyms": ["attractive", "lovely", "gorgeous", "scenic"],
                    "antonyms": ["ugly", "plain", "unattractive"]
                }
            ]
        },
        "Exciting": {
            "phonetic": "/ɪkˈsaɪtɪŋ/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Thú vị, náo nhiệt",
                    "definition": "Causing great enthusiasm and eagerness.",
                    "synonyms": ["thrilling", "exhilarating", "vibrant"],
                    "antonyms": ["boring", "dull", "calm"]
                }
            ]
        },
        "Relaxing": {
            "phonetic": "/rɪˈlæksɪŋ/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Thư giãn, thoải mái",
                    "definition": "Making one feel relaxed or calm.",
                    "synonyms": ["calming", "restful", "peaceful", "tranquil"],
                    "antonyms": ["stressful", "tense", "exciting"]
                }
            ]
        }
    },
    "Shopping": {
        "Aisle": {
            "phonetic": "/aɪl/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Lối đi (giữa các kệ hàng)",
                    "definition": "A passage between rows of shelves in a supermarket or other building.",
                    "synonyms": ["passageway", "corridor", "lane"],
                    "antonyms": ["shelf", "wall"]
                }
            ]
        },
        "Bag": {
            "phonetic": "/bæɡ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Túi, giỏ xách",
                    "definition": "A container made of flexible material with an opening at the top, used for carrying things.",
                    "synonyms": ["sack", "carrier bag", "handbag"],
                    "antonyms": ["box"]
                }
            ]
        },
        "Basket": {
            "phonetic": "/ˈbæskɪt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Cái rổ, cái giỏ",
                    "definition": "A container made of interwoven strips of cane or wire, used for carrying things (e.g., in a supermarket).",
                    "synonyms": ["shopping basket"],
                    "antonyms": ["trolley", "shopping cart"]
                }
            ]
        },
        "Bookshop": {
            "phonetic": "/ˈbʊkʃɑːp/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Hiệu sách",
                    "definition": "A shop that sells books.",
                    "synonyms": ["bookstore"],
                    "antonyms": ["library"]
                }
            ]
        },
        "Butcher's": {
            "phonetic": "/ˈbʊtʃərz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Hàng thịt",
                    "definition": "A shop where a butcher works, selling meat.",
                    "synonyms": ["meat shop"],
                    "antonyms": ["bakery", "greengrocer's"]
                }
            ]
        },
        "Change": {
            "phonetic": "/tʃeɪndʒ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Tiền thối lại",
                    "definition": "The money returned to someone as the balance of the sum paid for something.",
                    "synonyms": ["balance"],
                    "antonyms": []
                },
                {
                    "type": "noun",
                    "viet": "Tiền lẻ (xu)",
                    "definition": "Money in the form of coins rather than notes.",
                    "synonyms": ["coins", "loose change"],
                    "antonyms": ["notes", "bills"]
                }
            ]
        },
        "Checkout": {
            "phonetic": "/ˈtʃekaʊt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Quầy thanh toán",
                    "definition": "A point at which goods are paid for in a supermarket or other store.",
                    "synonyms": ["cash register", "till", "counter"],
                    "antonyms": ["entrance", "aisle"]
                }
            ]
        },
        "Chemist's": {
            "phonetic": "/ˈkemɪsts/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Hiệu thuốc",
                    "definition": "A shop where medicines are sold. (Mainly AU/UK).",
                    "synonyms": ["pharmacy", "drugstore (US)"],
                    "antonyms": []
                }
            ]
        },
        "Closed": {
            "phonetic": "/kloʊzd/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Đóng cửa",
                    "definition": "Not open for business.",
                    "synonyms": ["shut"],
                    "antonyms": ["open"]
                }
            ]
        },
        "Clothes": {
            "phonetic": "/kloʊðz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Quần áo",
                    "definition": "Items worn to cover the body.",
                    "synonyms": ["garments", "apparel", "attire", "clothing"],
                    "antonyms": []
                }
            ]
        },
        "Cost": {
            "phonetic": "/kɔːst/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Chi phí, giá tiền",
                    "definition": "The amount of money required as payment for something.",
                    "synonyms": ["price", "charge", "fee"],
                    "antonyms": ["profit", "income"]
                }
            ]
        },
        "Department store": {
            "phonetic": "/dɪˈpɑːrtmənt stɔːr/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Cửa hàng bách hóa",
                    "definition": "A large store stocking a wide variety of goods (e.g., clothes, furniture, electronics) in different departments.",
                    "synonyms": ["Myer (example)", "David Jones (example)"],
                    "antonyms": ["specialty store", "boutique"]
                }
            ]
        },
        "For sale": {
            "phonetic": "/fɔːr seɪl/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Để bán",
                    "definition": "Available to be bought.",
                    "synonyms": ["on the market"],
                    "antonyms": ["not for sale", "off the market"]
                }
            ]
        },
        "Gift shop": {
            "phonetic": "/ɡɪft ʃɑːp/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Cửa hàng lưu niệm",
                    "definition": "A shop that sells items suitable for giving as presents.",
                    "synonyms": ["souvenir shop"],
                    "antonyms": []
                }
            ]
        },
        "Ingredients": {
            "phonetic": "/ɪnˈɡriːdiənts/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Nguyên liệu",
                    "definition": "Any of the foods or substances that are combined to make a particular dish.",
                    "synonyms": ["components", "elements", "parts"],
                    "antonyms": ["finished dish"]
                }
            ]
        },
        "Newsagent's": {
            "phonetic": "/ˈnuːzeɪdʒənts/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Quầy báo",
                    "definition": "A shop that sells newspapers, magazines, sweets, and stationery.",
                    "synonyms": ["corner store (similar)"],
                    "antonyms": []
                }
            ]
        },
        "On sale": {
            "phonetic": "/ɒn seɪl/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Đang giảm giá",
                    "definition": "Available for purchase at a reduced price.",
                    "synonyms": ["discounted", "on special", "reduced"],
                    "antonyms": ["full price"]
                }
            ]
        },
        "Open": {
            "phonetic": "/ˈoʊpən/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Mở cửa",
                    "definition": "Available for business.",
                    "synonyms": ["trading"],
                    "antonyms": ["closed", "shut"]
                }
            ]
        },
        "Receipt": {
            "phonetic": "/rɪˈsiːt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Hóa đơn, biên lai",
                    "definition": "A piece of paper confirming that money or goods have been received.",
                    "synonyms": ["proof of purchase", "invoice (for services)", "bill"],
                    "antonyms": []
                }
            ]
        },
        "Shop": {
            "phonetic": "/ʃɑːp/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Cửa hàng",
                    "definition": "A building or part of a building where goods or services are sold.",
                    "synonyms": ["store", "retailer", "outlet"],
                    "antonyms": []
                }
            ]
        },
        "Shopping": {
            "phonetic": "/ˈʃɑːpɪŋ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Mua sắm",
                    "definition": "The activity of buying goods from shops.",
                    "synonyms": ["going to the shops", "making purchases"],
                    "antonyms": []
                }
            ]
        },
        "Shopping centre": {
            "phonetic": "/ˈʃɑːpɪŋ ˈsentər/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Trung tâm mua sắm",
                    "definition": "A large building or group of buildings containing many different stores. (Called 'mall' in US English).",
                    "synonyms": ["mall", "shopping plaza"],
                    "antonyms": ["high street"]
                }
            ]
        },
        "Size": {
            "phonetic": "/saɪz/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Kích cỡ",
                    "definition": "One of a range of classifications (e.g., small, medium, large) to which clothes or shoes are assigned.",
                    "synonyms": ["fit", "dimensions"],
                    "antonyms": []
                }
            ]
        },
        "Supermarket": {
            "phonetic": "/ˈsuːpərmɑːrkɪt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Siêu thị",
                    "definition": "A large self-service shop selling foods and household goods.",
                    "synonyms": ["grocery store", "Woolies (slang)", "Coles (slang)"],
                    "antonyms": ["corner store", "market"]
                }
            ]
        },
        "Try on": {
            "phonetic": "/traɪ ɒn/",
            "meanings": [
                {
                    "type": "verb",
                    "viet": "Mặc thử",
                    "definition": "To put on an item of clothing to see if it fits or suits one.",
                    "synonyms": ["test", "check the fit"],
                    "antonyms": []
                }
            ]
        }
    },
    "Aussie Slang": {
        "G'day": {
            "phonetic": "/ɡəˈdeɪ/",
            "meanings": [
                {
                    "type": "interjection",
                    "viet": "Chào (Dùng như Hello, Hi)",
                    "definition": "An informal Australian greeting, equivalent to 'Hello' or 'Hi'.",
                    "synonyms": ["Hello", "Hi", "Hey"],
                    "antonyms": ["Goodbye", "Hooroo"]
                }
            ]
        },
        "Mate": {
            "phonetic": "/məɪt/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bạn, anh bạn, đồng nghiệp (Cách gọi thân mật)",
                    "definition": "A friend or companion. Also used as a general form of address, even to strangers.",
                    "synonyms": ["friend", "buddy", "pal", "chum"],
                    "antonyms": ["enemy", "foe"]
                }
            ]
        },
        "How ya goin'?": {
            "phonetic": "/hæw jə ˈɡəʉwɪn/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Bạn khoẻ không? (Dùng như 'How are you?')",
                    "definition": "A common Australian greeting asking how someone is.",
                    "synonyms": ["How are you?", "How's it going?"],
                    "antonyms": []
                }
            ]
        },
        "Arvo": {
            "phonetic": "/ˈɑːvəʉ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Buổi chiều (Afternoon)",
                    "definition": "Slang for 'afternoon'.",
                    "synonyms": ["afternoon"],
                    "antonyms": ["morning", "evening"]
                }
            ]
        },
        "Smoko": {
            "phonetic": "/ˈsməʉkəʉ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Giờ giải lao ngắn (để hút thuốc, uống cà phê)",
                    "definition": "A short break from work.",
                    "synonyms": ["break", "tea break", "rest"],
                    "antonyms": ["work"]
                }
            ]
        },
        "Crib / Crib room": {
            "phonetic": "/kɹɪb/ /kɹɪb ɹuːm/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bữa ăn nhẹ / Phòng ăn trưa",
                    "definition": "'Crib' is a packed lunch. A 'Crib room' is the lunchroom or break room where workers eat it.",
                    "synonyms": ["lunch", "packed lunch", "break room", "lunchroom"],
                    "antonyms": []
                }
            ]
        },
        "Tucker": {
            "phonetic": "/ˈtʌkə/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Thức ăn",
                    "definition": "Slang for food.",
                    "synonyms": ["food", "grub", "eats", "tucker-bag (food bag)"],
                    "antonyms": ["drink"]
                }
            ]
        },
        "Brekky": {
            "phonetic": "/ˈbɹeki/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Bữa sáng (Breakfast)",
                    "definition": "Slang for 'breakfast'.",
                    "synonyms": ["breakfast"],
                    "antonyms": ["lunch", "dinner", "supper"]
                }
            ]
        },
        "Cuppa": {
            "phonetic": "/ˈkʌpə/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Một tách trà hoặc cà phê (A cup of...)",
                    "definition": "Slang for 'a cup of tea' or, less commonly, 'a cup of coffee'.",
                    "synonyms": ["cup of tea", "brew"],
                    "antonyms": []
                }
            ]
        },
        "Hard Yakka": {
            "phonetic": "/hɑːd ˈjækə/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Công việc vất vả, lao động nặng nhọc",
                    "definition": "Hard work; strenuous labor. (From the Yagara language).",
                    "synonyms": ["hard work", "toil", "labor", "graft"],
                    "antonyms": ["easy work", "leisure"]
                }
            ]
        },
        "The Works": {
            "phonetic": "/ðə ˈwɜːks/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Nhà máy, xí nghiệp (thường là xưởng mổ)",
                    "definition": "A factory, industrial plant, or processing facility (e.g., 'the meatworks').",
                    "synonyms": ["factory", "plant", "mill", "meatworks"],
                    "antonyms": ["office"]
                }
            ]
        },
        "Stuffed": {
            "phonetic": "/stʌft/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Rất mệt, kiệt sức",
                    "definition": "Extremely tired, exhausted.",
                    "synonyms": ["exhausted", "knackered", "worn out", "tired"],
                    "antonyms": ["energetic", "fresh", "rested"]
                }
            ]
        },
        "Knackered": {
            "phonetic": "/ˈnækəd/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Rất mệt, kiệt sức (Giống \"Stuffed\")",
                    "definition": "Extremely tired, exhausted.",
                    "synonyms": ["exhausted", "stuffed", "worn out", "shattered"],
                    "antonyms": ["energetic", "fresh", "rested"]
                }
            ]
        },
        "Ta": {
            "phonetic": "/tɑː/",
            "meanings": [
                {
                    "type": "interjection",
                    "viet": "Cảm ơn (Thanks)",
                    "definition": "An informal way of saying 'Thank you'.",
                    "synonyms": ["Thanks", "Cheers"],
                    "antonyms": []
                }
            ]
        },
        "No worries": {
            "phonetic": "/nəʉ ˈwʌɹiz/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Không vấn đề gì, không sao đâu (Rất phổ biến)",
                    "definition": "A common Australian phrase used to say 'You're welcome' or 'It's okay'.",
                    "synonyms": ["You're welcome", "No problem", "It's all good", "Too easy"],
                    "antonyms": []
                }
            ]
        },
        "Too easy": {
            "phonetic": "/tuː ˈiːzi/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Quá dễ, không vấn đề gì (Dùng như \"No worries\")",
                    "definition": "A phrase meaning 'Certainly', 'No problem', or 'You're welcome'.",
                    "synonyms": ["No worries", "No problem", "Of course"],
                    "antonyms": []
                }
            ]
        },
        "She'll be right": {
            "phonetic": "/ʃiːl biː ˈɹaɪt/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Mọi thứ sẽ ổn thôi (Đôi khi mang nghĩa chủ quan)",
                    "definition": "A phrase expressing the belief that everything will be fine or work out in the end.",
                    "synonyms": ["It will be okay", "Everything will be fine"],
                    "antonyms": []
                }
            ]
        },
        "Bloke": {
            "phonetic": "/bləʉk/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Gã đàn ông, anh chàng",
                    "definition": "A man; a fellow.",
                    "synonyms": ["man", "guy", "fellow", "chap"],
                    "antonyms": ["woman", "sheila", "lass"]
                }
            ]
        },
        "Sheila": {
            "phonetic": "/ˈʃiːlə/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Cô gái, phụ nữ",
                    "definition": "A girl or woman.",
                    "synonyms": ["woman", "girl", "lass", "female"],
                    "antonyms": ["bloke", "man", "guy"]
                }
            ]
        },
        "Boss": {
            "phonetic": "/bɒs/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Sếp, quản lý",
                    "definition": "A person who is in charge of a worker, group, or organization.",
                    "synonyms": ["manager", "supervisor", "foreman"],
                    "antonyms": ["employee", "worker", "subordinate"]
                }
            ]
        },
        "Gear": {
            "phonetic": "/ɡɪə/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Dụng cụ, đồ nghề, thiết bị",
                    "definition": "Equipment or apparatus that is used for a particular purpose (e.g., safety gear, work gear).",
                    "synonyms": ["equipment", "tools", "kit", "tackle", "paraphernalia"],
                    "antonyms": []
                }
            ]
        },
        "Crook": {
            "phonetic": "/kɹʊk/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Bị ốm, bị bệnh",
                    "definition": "Feeling ill or unwell.",
                    "synonyms": ["sick", "ill", "unwell"],
                    "antonyms": ["well", "healthy", "fine"]
                },
                {
                    "type": "noun",
                    "viet": "Tội phạm",
                    "definition": "A criminal or dishonest person.",
                    "synonyms": ["criminal", "thief", "scoundrel"],
                    "antonyms": ["police", "honest person"]
                }
            ]
        },
        "Chuck a sickie": {
            "phonetic": "/tʃʌk ə ˈsɪki/",
            "meanings": [
                {
                    "type": "phrase",
                    "viet": "Giả bệnh để nghỉ làm",
                    "definition": "To take a day off work pretending to be sick.",
                    "synonyms": ["play hooky (US)", "skive (UK)"],
                    "antonyms": ["go to work"]
                }
            ]
        },
        "Fair go": {
            "phonetic": "/feə ˈɡəʉ/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Cơ hội công bằng, đối xử công bằng",
                    "definition": "A reasonable chance; fair and equitable treatment.",
                    "synonyms": ["fair chance", "equity", "justice"],
                    "antonyms": ["unfairness", "injustice"]
                }
            ]
        },
        "True blue": {
            "phonetic": "/tɹuː ˈbluː/",
            "meanings": [
                {
                    "type": "adjective",
                    "viet": "Hàng thật, chính cống (chỉ người Úc đích thực)",
                    "definition": "Genuinely or authentically Australian; loyal and steadfast.",
                    "synonyms": ["genuine", "authentic", "real", "dinky-di"],
                    "antonyms": ["fake", "inauthentic", "foreign"]
                }
            ]
        },
        "Esky": {
            "phonetic": "/ˈeski/",
            "meanings": [
                {
                    "type": "noun",
                    "viet": "Thùng giữ lạnh (để đựng đồ ăn, thức uống)",
                    "definition": "A brand name for a portable insulated container. Used generically in Australia. (Called a 'cooler' in US English).",
                    "synonyms": ["cooler", "cool box", "chilly bin (NZ)"],
                    "antonyms": []
                }
            ]
        }
    },
    "Chapter I: Hello!": {
        "Argentina": {
            "phonetic": "/ˌɑːrdʒənˈtiːnə/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Nước Ác-hen-ti-na",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Brazilian": {
            "phonetic": "/brəˈzɪliən/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Người Bra-xin",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "China": {
            "phonetic": "/ˈtʃaɪnə/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Nước Trung Quốc",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "France": {
            "phonetic": "/fræns/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Nước Pháp",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "French": {
            "phonetic": "/frentʃ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Người Pháp",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Germany": {
            "phonetic": "/ˈdʒɜːrməni/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Nước Đức",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Japan": {
            "phonetic": "/dʒəˈpæn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Nước Nhật Bản",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "The UK": {
            "phonetic": "/ðə ˌjuːˈkeɪ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Vương quốc Anh",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "The US": {
            "phonetic": "/ðə ˌjuːˈes/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Nước Mỹ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "American": {
            "phonetic": "/əˈmerɪkən/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Người Mỹ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Peru": {
            "phonetic": "/pəˈruː/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Nước Pê-ru",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Morocco": {
            "phonetic": "/məˈrɑːkoʊ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Nước Ma-rốc",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Turkey": {
            "phonetic": "/ˈtɜːrki/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Nước Thổ Nhĩ Kỳ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Vietnam": {
            "phonetic": "/ˌvjɛtˈnɑːm/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Nước Việt Nam",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Vietnamese": {
            "phonetic": "/ˌvjɛtnəˈmiːz/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Người Việt Nam",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "zero": {
            "phonetic": "/ˈzɪroʊ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "số không",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "one": {
            "phonetic": "/wʌn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "số một",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "two": {
            "phonetic": "/tuː/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "số hai",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "three": {
            "phonetic": "/θriː/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "số ba",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "four": {
            "phonetic": "/fɔːr/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "số bốn",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "five": {
            "phonetic": "/faɪv/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "số năm",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "six": {
            "phonetic": "/sɪks/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "số sáu",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "seven": {
            "phonetic": "/ˈsevən/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "số bảy",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "eight": {
            "phonetic": "/eɪt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "số tám",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "nine": {
            "phonetic": "/naɪn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "số chín",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "ten": {
            "phonetic": "/ten/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "số mười",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "actor": {
            "phonetic": "/ˈæktər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "diễn viên (nam/nữ)",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "pilot": {
            "phonetic": "/ˈpaɪlət/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "phi công",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "teacher": {
            "phonetic": "/ˈtiːtʃər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "giáo viên",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "doctor": {
            "phonetic": "/ˈdɑːktər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bác sĩ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "scientist": {
            "phonetic": "/ˈsaɪəntɪst/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "nhà khoa học",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "writer": {
            "phonetic": "/ˈraɪtər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"nhà văn, tác giả\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "student": {
            "phonetic": "/ˈstuːdənt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"học sinh, sinh viên\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        }
    },
    "Chapter II: My Home": {
        "kitchen": {
            "phonetic": "/ˈkɪtʃɪn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "nhà bếp",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "dining room": {
            "phonetic": "/ˈdaɪnɪŋ ruːm/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "phòng ăn",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "bathroom": {
            "phonetic": "/ˈbæθruːm/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "phòng tắm",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "living room": {
            "phonetic": "/ˈlɪvɪŋ ruːm/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "phòng khách",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "bedroom": {
            "phonetic": "/ˈbedruːm/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "phòng ngủ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "park": {
            "phonetic": "/pɑːrk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "công viên",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "school": {
            "phonetic": "/skuːl/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "trường học",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "train station": {
            "phonetic": "/treɪn ˈsteɪʃən/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "ga tàu hỏa",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "library": {
            "phonetic": "/ˈlaɪbreri/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "thư viện",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "shopping centre": {
            "phonetic": "/ˈʃɑːpɪŋ ˈsentər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "trung tâm mua sắm",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "museum": {
            "phonetic": "/mjuˈziːəm/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "viện bảo tàng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "bus station": {
            "phonetic": "/bʌs ˈsteɪʃən/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bến xe buýt",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "restaurant": {
            "phonetic": "/ˈrestərɑːnt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "nhà hàng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "supermarket": {
            "phonetic": "/ˈsuːpərmɑːrkɪt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "siêu thị",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "cinema": {
            "phonetic": "/ˈsɪnəmə/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "rạp chiếu phim",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "in": {
            "phonetic": "/ɪn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "ở trong",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "on": {
            "phonetic": "/ɑːn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "ở trên",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "next to": {
            "phonetic": "/nekst tu/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "ở cạnh",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "under": {
            "phonetic": "/ˈʌndər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "ở dưới",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        }
    },
    "Chapter III: My Stuff": {
        "phone": {
            "phonetic": "/foʊn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "điện thoại",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "book": {
            "phonetic": "/bʊk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "sách",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "bag": {
            "phonetic": "/bæɡ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"túi, cặp\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "camera": {
            "phonetic": "/ˈkæmərə/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "máy ảnh",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "toothbrush": {
            "phonetic": "/ˈtuːθbrʌʃ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bàn chải đánh răng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "water bottle": {
            "phonetic": "/ˈwɔːtər ˈbɑːtəl/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "chai nước",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "bank cards": {
            "phonetic": "/bæŋk kɑːrdz/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "thẻ ngân hàng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "keys": {
            "phonetic": "/kiːz/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "chìa khóa",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "T-shirt": {
            "phonetic": "/ˈtiː ʃɜːrt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "áo phông",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "notepad": {
            "phonetic": "/ˈnoʊtpæd/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "sổ tay",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "dress": {
            "phonetic": "/dres/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"váy, đầm\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "passport": {
            "phonetic": "/ˈpæspɔːrt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "hộ chiếu",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "black": {
            "phonetic": "/blæk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "màu đen",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "blue": {
            "phonetic": "/bluː/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "màu xanh da trời",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "green": {
            "phonetic": "/ɡriːn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "màu xanh lá cây",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "orange": {
            "phonetic": "/ˈɔːrɪndʒ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "màu cam",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "purple": {
            "phonetic": "/ˈpɜːrpəl/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "màu tím",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "pink": {
            "phonetic": "/pɪŋk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "màu hồng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "red": {
            "phonetic": "/red/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "màu đỏ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "white": {
            "phonetic": "/waɪt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "màu trắng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "yellow": {
            "phonetic": "/ˈjeloʊ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "màu vàng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        }
    },
    "Chapter IV: Habits": {
        "eleven": {
            "phonetic": "/ɪˈlevən/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mười một",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "twelve": {
            "phonetic": "/twelv/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mười hai",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "thirteen": {
            "phonetic": "/ˌθɜːrˈtiːn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mười ba",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "fourteen": {
            "phonetic": "/ˌfɔːrˈtiːn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mười bốn",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "fifteen": {
            "phonetic": "/ˌfɪfˈtiːn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mười lăm",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "sixteen": {
            "phonetic": "/ˌsɪkˈstiːn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mười sáu",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "seventeen": {
            "phonetic": "/ˌsevənˈtiːn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mười bảy",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "eighteen": {
            "phonetic": "/ˌeɪˈtiːn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mười tám",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "nineteen": {
            "phonetic": "/ˌnaɪnˈtiːn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mười chín",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "twenty": {
            "phonetic": "/ˈtwenti/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "hai mươi",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "thirty": {
            "phonetic": "/ˈθɜːrti/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "ba mươi",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "forty": {
            "phonetic": "/ˈfɔːrti/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bốn mươi",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "fifty": {
            "phonetic": "/ˈfɪfti/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "năm mươi",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "sixty": {
            "phonetic": "/ˈsɪksti/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "sáu mươi",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "seventy": {
            "phonetic": "/ˈsevənti/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bảy mươi",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "eighty": {
            "phonetic": "/ˈeɪti/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "tám mươi",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "ninety": {
            "phonetic": "/ˈnaɪnti/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "chín mươi",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "one hundred": {
            "phonetic": "/wʌn ˈhʌndrəd/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "một trăm",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Monday": {
            "phonetic": "/ˈmʌndeɪ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Thứ Hai",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Tuesday": {
            "phonetic": "/ˈtuːzdeɪ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Thứ Ba",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Wednesday": {
            "phonetic": "/ˈwenzdeɪ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Thứ Tư",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Thursday": {
            "phonetic": "/ˈθɜːrzdeɪ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Thứ Năm",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Friday": {
            "phonetic": "/ˈfraɪdeɪ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Thứ Sáu",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Saturday": {
            "phonetic": "/ˈsætərdeɪ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Thứ Bảy",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "Sunday": {
            "phonetic": "/ˈsʌndeɪ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Chủ Nhật",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "go to bed": {
            "phonetic": "/ɡoʊ tu bed/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đi ngủ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "wake up": {
            "phonetic": "/weɪk ʌp/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "thức dậy",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "finish work": {
            "phonetic": "/ˈfɪnɪʃ wɜːrk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "tan làm",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "start work": {
            "phonetic": "/stɑːrt wɜːrk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bắt đầu làm việc",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "take a bus": {
            "phonetic": "/teɪk ə bʌs/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bắt xe buýt",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "wait": {
            "phonetic": "/weɪt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đợi",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "walk": {
            "phonetic": "/wɔːk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đi bộ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "get home": {
            "phonetic": "/ɡet hoʊm/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "về nhà",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        }
    },
    "Chapter V: Inside or Outside?": {
        "read a book": {
            "phonetic": "/riːd ə bʊk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đọc sách",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "watch TV": {
            "phonetic": "/wɑːtʃ ˌtiːˈviː/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "xem TV",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "listen to music": {
            "phonetic": "/ˈlɪsən tu ˈmjuːzɪk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "nghe nhạc",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "draw a picture": {
            "phonetic": "/drɔː ə ˈpɪktʃər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "vẽ một bức tranh",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "camping": {
            "phonetic": "/ˈkæmpɪŋ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "cắm trại",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "climbing": {
            "phonetic": "/ˈklaɪmɪŋ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"leo (núi, tường)\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "cycling": {
            "phonetic": "/ˈsaɪklɪŋ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đạp xe",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "doing yoga": {
            "phonetic": "/ˈduːɪŋ ˈjoʊɡə/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "tập yoga",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "running": {
            "phonetic": "/ˈrʌnɪŋ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "chạy bộ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "playing football": {
            "phonetic": "/ˈpleɪɪŋ ˈfʊtbɔːl/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "chơi bóng đá",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "swimming": {
            "phonetic": "/ˈswɪmɪŋ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bơi lội",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "January": {
            "phonetic": "/ˈdʒænjueri/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Tháng Một",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "February": {
            "phonetic": "/ˈfebrueri/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Tháng Hai",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "March": {
            "phonetic": "/mɑːrtʃ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Tháng Ba",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "April": {
            "phonetic": "/ˈeɪprəl/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Tháng Tư",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "May": {
            "phonetic": "/meɪ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Tháng Năm",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "June": {
            "phonetic": "/dʒuːn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Tháng Sáu",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "July": {
            "phonetic": "/dʒuˈlaɪ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Tháng Bảy",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "August": {
            "phonetic": "/ˈɔːɡəst/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Tháng Tám",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "September": {
            "phonetic": "/sepˈtembər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Tháng Chín",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "October": {
            "phonetic": "/ɑːkˈtoʊbər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Tháng Mười",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "November": {
            "phonetic": "/noʊˈvembər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Tháng Mười Một",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "December": {
            "phonetic": "/dɪˈsembər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "Tháng Mười Hai",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "spring": {
            "phonetic": "/sprɪŋ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mùa xuân",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "summer": {
            "phonetic": "/ˈsʌmər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mùa hè (mùa hạ)",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "autumn": {
            "phonetic": "/ˈɔːtəm/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mùa thu",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "winter": {
            "phonetic": "/ˈwɪntər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mùa đông",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "in the afternoon": {
            "phonetic": "/ɪn ði ˌæftərˈnuːn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "vào buổi chiều",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "in the evening": {
            "phonetic": "/ɪn ði ˈiːvnɪŋ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "vào buổi tối",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        }
    },
    "Chapter VI: Food Around the World": {
        "bread": {
            "phonetic": "/bred/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bánh mì",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "cheese": {
            "phonetic": "/tʃiːz/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "phô mai",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "eggs": {
            "phonetic": "/eɡz/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "trứng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "fruit": {
            "phonetic": "/fruːt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "trái cây",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "meat": {
            "phonetic": "/miːt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "thịt",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "milk": {
            "phonetic": "/mɪlk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "sữa",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "noodles": {
            "phonetic": "/ˈnuːdəlz/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mì",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "rice": {
            "phonetic": "/raɪs/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "cơm",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "vegetables": {
            "phonetic": "/ˈvedʒtəbəlz/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "rau củ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "coffee": {
            "phonetic": "/ˈkɔːfi/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "cà phê",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "fish": {
            "phonetic": "/fɪʃ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "cá",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "chilli": {
            "phonetic": "/ˈtʃɪli/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "ớt",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "onions": {
            "phonetic": "/ˈʌnjənz/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "hành tây",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "garlic": {
            "phonetic": "/ˈɡɑːrlɪk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "tỏi",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "peanuts": {
            "phonetic": "/ˈpiːnʌts/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đậu phộng (lạc)",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "sugar": {
            "phonetic": "/ˈʃʊɡər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đường",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "fish sauce": {
            "phonetic": "/fɪʃ sɔːs/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "nước mắm",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "spicy": {
            "phonetic": "/ˈspaɪsi/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "cay",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "how many": {
            "phonetic": "/haʊ ˈmeni/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bao nhiêu (danh từ đếm được)",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "how much": {
            "phonetic": "/haʊ mʌtʃ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bao nhiêu (danh từ không đếm được)",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "a little": {
            "phonetic": "/ə ˈlɪtəl/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "một ít",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "a lot of": {
            "phonetic": "/ə lɑːt əv/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "nhiều",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "market": {
            "phonetic": "/ˈmɑːrkɪt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "chợ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "supermarket": {
            "phonetic": "/ˈsuːpərmɑːrkɪt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "siêu thị",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        }
    },
    "Chapter VII: Family and Friends": {
        "son": {
            "phonetic": "/sʌn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "con trai",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "daughter": {
            "phonetic": "/ˈdɔːtər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "con gái",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "mother": {
            "phonetic": "/ˈmʌðər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mẹ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "father": {
            "phonetic": "/ˈfɑːðər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bố",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "brother": {
            "phonetic": "/ˈbrʌðər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "anh/em trai",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "sister": {
            "phonetic": "/ˈsɪstər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "chị/em gái",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "wife": {
            "phonetic": "/waɪf/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "vợ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "husband": {
            "phonetic": "/ˈhʌzbənd/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "chồng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "children": {
            "phonetic": "/ˈtʃɪldrən/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "con cái",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "parents": {
            "phonetic": "/ˈperənts/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bố mẹ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "grandfather": {
            "phonetic": "/ˈɡrænfɑːðər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "ông",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "grandmother": {
            "phonetic": "/ˈɡrænmʌðər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bà",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "tall": {
            "phonetic": "/tɔːl/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "cao",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "short": {
            "phonetic": "/ʃɔːrt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"thấp, lùn\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "dark (hair)": {
            "phonetic": "/dɑːrk (her)/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"(tóc) sẫm màu, đen\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "clever": {
            "phonetic": "/ˈklevər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"thông minh, lanh lợi\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "funny": {
            "phonetic": "/ˈfʌni/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"vui tính, hài hước\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "nice": {
            "phonetic": "/naɪs/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"tốt bụng, dễ mến\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        }
    },
    "Chapter VIII: Things We Can Do": {
        "drive": {
            "phonetic": "/draɪv/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "lái xe",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "ride a bike": {
            "phonetic": "/raɪd ə baɪk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đạp xe đạp",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "paint a picture": {
            "phonetic": "/peɪnt ə ˈpɪktʃər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "vẽ một bức tranh",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "cook": {
            "phonetic": "/kʊk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "nấu ăn",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "speak a language": {
            "phonetic": "/spiːk ə ˈlæŋɡwɪdʒ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "nói một ngôn ngữ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "remember": {
            "phonetic": "/rɪˈmembər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "nhớ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "forget": {
            "phonetic": "/fərˈɡet/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "quên",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "can": {
            "phonetic": "/kæn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "có thể",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "can't": {
            "phonetic": "/kænt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "không thể",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "and": {
            "phonetic": "/ænd/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "và",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "but": {
            "phonetic": "/bʌt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "nhưng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "because": {
            "phonetic": "/bɪˈkɔːz/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bởi vì",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "or": {
            "phonetic": "/ɔːr/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "hoặc",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "large": {
            "phonetic": "/lɑːrdʒ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"to, lớn\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "strong": {
            "phonetic": "/strɔːŋ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "khỏe",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "tiny": {
            "phonetic": "/ˈtaɪni/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "nhỏ xíu",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "fast": {
            "phonetic": "/fæst/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "nhanh",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "beautiful": {
            "phonetic": "/ˈbjuːtɪfəl/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đẹp",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "slow": {
            "phonetic": "/sloʊ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "chậm",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        }
    },
    "Chapter IX: Travel": {
        "travel": {
            "phonetic": "/ˈtrævəl/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"du lịch, đi lại\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "plane": {
            "phonetic": "/pleɪn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "máy bay",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "riding a bike": {
            "phonetic": "/ˈraɪdɪŋ ə baɪk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đạp xe đạp",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "take the bus": {
            "phonetic": "/teɪk ðə bʌs/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bắt xe buýt",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "take the train": {
            "phonetic": "/teɪk ðə treɪn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bắt tàu hỏa",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "weather": {
            "phonetic": "/ˈweðər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "thời tiết",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "sun": {
            "phonetic": "/sʌn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"mặt trời, nắng\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "windy": {
            "phonetic": "/ˈwɪndi/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "có gió",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "wind": {
            "phonetic": "/wɪnd/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "gió",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "rain": {
            "phonetic": "/reɪn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "mưa",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "snow": {
            "phonetic": "/snoʊ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "tuyết",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "warm": {
            "phonetic": "/wɔːrm/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "ấm áp",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "cold": {
            "phonetic": "/koʊld/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "lạnh",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "book a room": {
            "phonetic": "/bʊk ə ruːm/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đặt phòng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "night": {
            "phonetic": "/naɪt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đêm",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        }
    },
    "Chapter X: Staying Healthy": {
        "head": {
            "phonetic": "/hed/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "cái đầu",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "eye": {
            "phonetic": "/aɪ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "con mắt",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "arm": {
            "phonetic": "/ɑːrm/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "cánh tay",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "hand": {
            "phonetic": "/hænd/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bàn tay",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "leg": {
            "phonetic": "/leɡ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "cái chân",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "foot": {
            "phonetic": "/fʊt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bàn chân",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "go straight": {
            "phonetic": "/ɡoʊ streɪt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đi thẳng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "turn left": {
            "phonetic": "/tɜːrn left/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "rẽ trái",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "turn right": {
            "phonetic": "/tɜːrn raɪt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "rẽ phải",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "near": {
            "phonetic": "/nɪr/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "gần",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "on": {
            "phonetic": "/ɑːn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "trên (đường)",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "swim": {
            "phonetic": "/swɪm/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "bơi",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "exercising": {
            "phonetic": "/ˈeksərsaɪzɪŋ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đang tập thể dục",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "healthy": {
            "phonetic": "/ˈhelθi/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "khỏe mạnh",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "learning": {
            "phonetic": "/ˈlɜːrnɪŋ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đang học",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "practise": {
            "phonetic": "/ˈpræktɪs/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "luyện tập",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "preparing for": {
            "phonetic": "/prɪˈperɪŋ fɔːr/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đang chuẩn bị cho",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        }
    },
    "Chapter XI: People from the Past": {
        "(was/were) born": {
            "phonetic": "/bɔːrn/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "được sinh ra",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "lived": {
            "phonetic": "/lɪvd/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đã sống",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "famous": {
            "phonetic": "/ˈfeɪməs/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "nổi tiếng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "painter": {
            "phonetic": "/ˈpeɪntər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "họa sĩ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "yesterday": {
            "phonetic": "/ˈjestərdeɪ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "ngày hôm qua",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "last night": {
            "phonetic": "/læst naɪt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "tối hôm qua",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "last week": {
            "phonetic": "/læst wiːk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "tuần trước",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "last month": {
            "phonetic": "/læst mʌnθ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "tháng trước",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "last year": {
            "phonetic": "/læst jɪr/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "năm ngoái",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "amazing": {
            "phonetic": "/əˈmeɪzɪŋ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "\"tuyệt vời, đáng kinh ngạc\"",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "cheap": {
            "phonetic": "/tʃiːp/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "rẻ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "awful": {
            "phonetic": "/ˈɔːfəl/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "kinh khủng",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "terrible": {
            "phonetic": "/ˈterəbəl/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "tồi tệ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        }
    },
    "Chapter XII: My Story": {
        "a child": {
            "phonetic": "/ə tʃaɪld/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "một đứa trẻ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "a teenager": {
            "phonetic": "/ə ˈtiːneɪdʒər/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "một thiếu niên",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "an adult": {
            "phonetic": "/ən əˈdʌlt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "một người trưởng thành",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "sad": {
            "phonetic": "/sæd/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "buồn",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "happy": {
            "phonetic": "/ˈhæpi/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "vui vẻ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "great": {
            "phonetic": "/ɡreɪt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "tuyệt vời",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "terrible": {
            "phonetic": "/ˈterəbəl/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "tồi tệ",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "happened": {
            "phonetic": "/ˈhæpənd/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đã xảy ra",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "had": {
            "phonetic": "/hæd/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đã có",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "wanted": {
            "phonetic": "/ˈwɑːntɪd/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đã muốn",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "looked": {
            "phonetic": "/lʊkt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đã nhìn",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "told": {
            "phonetic": "/toʊld/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đã nói (với ai)",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "felt": {
            "phonetic": "/felt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đã cảm thấy",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "said": {
            "phonetic": "/sed/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đã nói",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "lifted": {
            "phonetic": "/ˈlɪftɪd/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đã nâng lên",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "slipped": {
            "phonetic": "/slɪpt/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đã trượt",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "fell": {
            "phonetic": "/fel/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đã ngã",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "laughed": {
            "phonetic": "/læft/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đã cười",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "spoke": {
            "phonetic": "/spoʊk/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đã nói (ngôn ngữ)",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "hiking": {
            "phonetic": "/ˈhaɪkɪŋ/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "đi bộ đường dài",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        },
        "hobbies": {
            "phonetic": "/ˈhɑːbiz/",
            "meanings": [
                {
                    "type": "vocabulary",
                    "viet": "sở thích",
                    "definition": "",
                    "synonyms": [],
                    "antonyms": []
                }
            ]
        }
    }
};