<script>
const apiKey = ""; 
let currentLanguage = 'th';

const translations = {
    th: {
        "nav-about": "เกี่ยวกับเรา", "nav-services": "บริการของเรา", "nav-portfolio": "ผลงานติดตั้ง", "nav-contact": "ติดต่อเรา",
        "hero-badge": "ตัวแทนจำหน่ายแอร์รายใหญ่บนเกาะพะงัน", "hero-title-1": "เย็นสบาย มั่นใจ", "hero-title-2": "ด้วยมืออาชีพกว่า 15 ปี",
        "hero-desc": "พีจีแอร์ อีควิพเม้นท์ ศูนย์บริการและจำหน่ายแอร์ อะไหล่ และอุปกรณ์ทำความเย็นทุกชนิดบนพื้นที่เกาะพะงัน มั่นใจในคุณภาพและบริการที่ไว้ใจได้ในทุกโครงการ",
        "hero-btn-book": "จองคิวรับบริการ", "btn-ai-consult": "ปรึกษา AI อัจฉริยะ",
        "stat-years": "ปีแห่งความเชี่ยวชาญ", "stat-customers": "ลูกค้าที่ไว้วางใจ", "stat-installs": "งานติดตั้งสำเร็จ", "stat-rating": "คะแนนความพึงพอใจ",
        "about-title": "เกี่ยวกับ พีจีแอร์ อีควิพเม้นท์", "about-mission": "เราคือผู้เชี่ยวชาญด้านระบบปรับอากาศและอุปกรณ์ทำความเย็นแบบครบวงจร ให้บริการตั้งแต่การจำหน่าย ติดตั้ง ไปจนถึงการบำรุงรักษา ทั้งในระดับครัวเรือนและอุตสาหกรรมบนพื้นที่เกาะพะงัน",
        "about-vision-head": "วิสัยทัศน์ของเรา", "about-vision-text": "เราจะเป็นร้านแอร์ที่ช่างและลูกค้าเลือก",
        "type-home": "ครัวเรือน", "type-home-desc-premium": "Residential Expert Solutions", 
        "type-industry": "อุตสาหกรรม", "type-industry-desc-premium": "Large Scale Industrial Systems",
        "partnership": "พร้อมเป็นพันธมิตรที่ไว้ใจได้ในทุกโครงการระบบทำความเย็นบนเกาะพะงัน",
        "services-title": "บริการของเรา", "s1-title": "จำหน่ายและติดตั้ง", "s1-desc": "ตัวแทนจำหน่ายแอร์หลากหลายแบรนด์ชั้นนำ พร้อมทีมติดตั้งมืออาชีพที่ใส่ใจในทุกรายละเอียด",
        "s2-title": "อะไหล่และอุปกรณ์", "s2-desc": "จำหน่ายอะไหล่แอร์และอุปกรณ์ทำความเย็นทุกชนิด สต็อกแน่น พร้อมเปลี่ยนทันที ไม่ต้องรอนาน",
        "s3-title": "บำรุงรักษาพรีเมียม", "s3-desc": "บริการล้างแอร์ฆ่าเชื้อด้วยน้ำยาเฉพาะทาง ตรวจเช็กระบบ 10 รายการ เพื่อประสิทธิภาพสูงสุด",
        "portfolio-title": "ผลงานการติดตั้งและบริการ", "portfolio-more": "สนใจผลงานติดต่อเรา",
        "p1-cat": "สำนักงาน", "p1-title": "ระบบแอร์ VRV สำหรับสำนักงาน",
        "p2-cat": "บ้านพักอาศัย", "p2-title": "ติดตั้งแอร์ Inverter บ้านพักอาศัย",
        "p3-cat": "การบำรุงรักษา", "p3-title": "ล้างแอร์พรีเมียมฆ่าเชื้อโรค 99.9%",
        "contact-title": "ติดต่อขอรับบริการ", "contact-desc": "พีจีแอร์ อีควิพเม้นท์ พร้อมเป็นพันธมิตรที่ไว้ใจได้ในทุกโครงการด้านความเย็นบนเกาะพะงัน",
        "form-label-service": "ประเภทบริการที่ต้องการ", "form-label-name": "ชื่อผู้ติดต่อ", "form-label-phone": "เบอร์โทรศัพท์", "form-label-area": "เขตพื้นที่/ที่อยู่ (เกาะพะงัน)",
        "p-name": "ระบุชื่อของคุณ", "p-area": "เช่น ท้องศาลา, หินกอง", "opt-parts": "สั่งซื้ออะไหล่แท้/อุปกรณ์", "footer-slogan": "ที่ไหนมีแอร์ ที่นั่นมีเรา นึกถึงแอร์ นึกถึงเรา พีจีแอร์ อีควิพเม้นท์",
        "ai-welcome": "สวัสดีครับ! ผมคือผู้ช่วย AI จาก PG AIR EQUIPMENT ปรึกษาเรื่องแอร์ได้เลยครับ",
        "ai-input-placeholder": "พิมพ์คำถามของคุณ...", "ai-online": "พร้อมให้คำปรึกษา 24 ชม."
    },
    en: {
        "nav-about": "About", "nav-services": "Services", "nav-portfolio": "Portfolio", "nav-contact": "Contact",
        "hero-badge": "Major AC Dealer on Koh Phangan", "hero-title-1": "Cool & Confident", "hero-title-2": "With 15+ Years Experience",
        "hero-desc": "PG Air Equipment: Authorized dealer and service center for ACs, parts, and cooling systems on Koh Phangan.",
        "hero-btn-book": "Book Now", "btn-ai-consult": "AI Support",
        "stat-years": "Years Expertise", "stat-customers": "Customers", "stat-installs": "Installs", "stat-rating": "Rating",
        "about-title": "About PG Air Equipment", "about-mission": "Specialists in comprehensive AC and cooling systems. From sales and installation to maintenance for residential and industrial sectors on Koh Phangan.",
        "about-vision-head": "Our Vision", "about-vision-text": "To be the choice of AC for both technicians and customers",
        "type-home": "Residential", "type-home-desc-premium": "Home Expert Solutions",
        "type-industry": "Industrial", "type-industry-desc-premium": "Large Scale Systems",
        "partnership": "Your trusted partner for all cooling projects on Koh Phangan",
        "services-title": "Our Services", "s1-title": "Sales & Installation", "s2-title": "Spare Parts", "s3-title": "Maintenance",
        "portfolio-title": "Installation Portfolio", "contact-title": "Contact Us", "contact-desc": "PG Air Equipment: Your expert cooling partner on Koh Phangan.",
        "form-label-service": "Service Type", "form-label-name": "Name", "form-label-phone": "Phone", "form-label-area": "Area (Koh Phangan)",
        "ai-welcome": "Hello! I am your AI assistant from PG AIR EQUIPMENT. How can I help you today?",
        "ai-input-placeholder": "Type your question...", "ai-online": "Online 24/7"
    },
    zh: {
        "nav-about": "关于我们", "nav-services": "我们的服务", "nav-portfolio": "工程案例", "nav-contact": "联系我们",
        "hero-badge": "帕岸岛大型空调经销商", "hero-title-1": "舒适清爽 信心保障", "hero-title-2": "15年以上专业经验",
        "hero-desc": "PG Air Equipment：帕岸岛授权的空调经销商和服务中心。提供配件和制冷系统服务。",
        "hero-btn-book": "立即预约", "btn-ai-consult": "AI 助手",
        "stat-years": "专业经验", "stat-customers": "信任客户", "stat-installs": "成功案例", "stat-rating": "满意评分",
        "about-title": "关于 PG Air Equipment", "about-mission": "我们是空调和制冷系统的专家。为帕岸岛的家庭和工业提供从销售、安装到维护的全方位服务。",
        "about-vision-head": "我们的愿景", "about-vision-text": "成为技师和客户的首选空调店",
        "type-home": "家庭住宅", "type-home-desc-premium": "家居专家方案",
        "type-industry": "工业领域", "type-industry-desc-premium": "大型系统工程",
        "partnership": "帕岸岛制冷项目的忠实合作伙伴",
        "services-title": "我们的服务", "s1-title": "销售与安装", "s2-title": "原厂配件", "s3-title": "专业维护",
        "portfolio-title": "项目工程展示", "contact-title": "联系我们", "contact-desc": "PG Air Equipment 愿成为您在帕岸岛的制冷专家伙伴。",
        "form-label-service": "服务类型", "form-label-name": "姓名", "form-label-phone": "电话", "form-label-area": "区域 (帕岸岛)",
        "ai-welcome": "您好！我是来自 PG AIR EQUIPMENT 的 AI 助手。有什么可以帮您的吗？",
        "ai-input-placeholder": "在此输入疑问...", "ai-online": "24小时在线"
    }
};

function changeLang(lang) {
    currentLanguage = lang;
     
    // อัปเดทข้อความ
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
   // อัปเดท placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    // ลบปุ่มแบบเก่า
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    
    // เพิ่มปุ่มแบบใหม่ (ทั้ง desktop และ mobile)
    const desktopBtn = document.getElementById(`btn-${lang}`);
    const mobileBtn = document.getElementById(`btn-${lang}-mobile`);
    
    if (desktopBtn) desktopBtn.classList.add('active');
    if (mobileBtn) mobileBtn.classList.add('active');
    
    // บันทึกค่า
    localStorage.setItem('preferredLang', lang);
}

function toggleAIChat() {
    document.getElementById('ai-chat-window').classList.toggle('active');
}

async function geminiCall(prompt, retries = 5, delay = 1000) {
    const systemPrompt = `You are a professional AC assistant for 'PG-Air Service Pro'. Language context: ${currentLanguage}. Respond in ${currentLanguage}.`;
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], systemInstruction: { parts: [{ text: systemPrompt }] } })
        });
        if (!response.ok && retries > 0) { await new Promise(r => setTimeout(r, delay)); return geminiCall(prompt, retries - 1, delay * 2); }
        const result = await response.json();
        return result.candidates?.[0]?.content?.parts?.[0]?.text || "Error";
    } catch (error) { return "Error"; }
}

function appendMessage(sender, text) {
    const chatArea = document.getElementById('ai-messages');
    const div = document.createElement('div');
    div.className = sender === 'user' ? 'flex justify-end' : 'flex gap-3 text-sm';
    div.innerHTML = sender === 'user' 
        ? `<div class="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[80%]">${text}</div>`
        : `<div class="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">✨</div>
           <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[80%]">${text}</div>`;
    chatArea.appendChild(div);
    chatArea.scrollTop = chatArea.scrollHeight;
}

async function sendAIMessage() {
    const input = document.getElementById('ai-input');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    appendMessage('user', text);
    const aiResponse = await geminiCall(text);
    appendMessage('ai', aiResponse);
}

window.onload = () => { 
    changeLang(localStorage.getItem('preferredLang') || 'th');
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on links
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // AI chat submit with Enter
    const aiInput = document.getElementById('ai-input');
    if (aiInput) {
        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendAIMessage();
            }
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            this.classList.add('opacity-30', 'pointer-events-none');
            const successMsg = document.getElementById('successMsg');
            if (successMsg) successMsg.classList.remove('hidden');
        });
    }
};
</script>