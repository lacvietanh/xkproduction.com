# 🎵 XKStudio — Customer Journey & Payment Flow Architecture

> **Document:** Customer Experience Design & Technical Advisory  
> **Created:** 01/05/2026  
> **Target Audience:** Customers, Technical Team, Business Strategy

---

## 📋 Executive Overview

Dựa trên tính chất của dịch vụ hoà âm, mix master, và cho thuê âm thanh, chúng tôi đề xuất một hệ thống khách hàng tích hợp với:
- **Đăng nhập/Quản lý tài khoản** → Theo dõi dự án
- **QR Code Payment** → Thanh toán nhanh (Mobile First)
- **Zalo Official Account** → Chat hỗ trợ 24/7
- **Booking Calendar** → Đặt lịch tự động

---

## 🎯 Customer Journey (3 Scenarios)

### **Scenario 1: Thu Âm Chuyên Nghiệp (Recording Service)**

```
1️⃣  Customer Browse Website
    ↓
    Views "Services" page → Rates (350K+)
    ↓
2️⃣  Click "Đặt Lịch Ngay" (Navbar CTA)
    ↓
3️⃣  Login / Sign Up (Email hoặc Social)
    ↓
4️⃣  Select Service (Thu âm vocal, beat, etc.)
    ↓
5️⃣  Choose Date/Time from Booking Calendar
    ↓
6️⃣  Add Notes/Files (Upload audio, reference)
    ↓
7️⃣  Preview Cost & Details
    ↓
8️⃣  Scan QR Code để thanh toán
    ↓
    Payment Options:
    - Momo/Zalopay
    - Bank Transfer
    - Cash on arrival
    ↓
9️⃣  Confirm Booking → Email + SMS confirmation
    ↓
🔟  Get "Project Link" để track progress
    ↓
📱 Receive Zalo message từ Team
    ↓
✅ Studio staff confirm + Send address
```

---

### **Scenario 2: Mix & Master Service**

```
1️⃣  Customer Upload Raw Audio/Stems
    ↓ (Tại Login Page)
2️⃣  Select Mix/Master Package
    ↓
    Options:
    - Mix only (từ 500K)
    - Master only (từ 200K)
    - Mix + Master (từ 750K)
    - Mixing + Mastering + Distribution (từ 1.2M)
    ↓
3️⃣  Add Notes (tone/style reference)
    ↓
4️⃣  Review & Pay via QR
    ↓
5️⃣  Wait for Processing
    ↓
    Team work on project (3-7 ngày)
    Customer can track status in "My Projects"
    ↓
6️⃣  Receive Preview/Draft via Zalo
    ↓
7️⃣  Request Revisions (up to 2-3 revisions included)
    ↓
8️⃣  Final Export + Download Link
```

---

### **Scenario 3: Sound & Lighting Rental (Sự Kiện)**

```
1️⃣  Corporate Client views "Live Band" page
    ↓
2️⃣  Click "Yêu Cầu Báo Giá"
    ↓
3️⃣  Fill Event Details Form:
    - Event date/location
    - Venue size
    - Equipment needed
    - Budget
    ↓
4️⃣  Team replies via Zalo (usually < 1 hour)
    ↓
5️⃣  Negotiate & Confirm
    ↓
6️⃣  Sign Contract (PDF)
    ↓
7️⃣  Deposit Payment (30% via QR)
    ↓
8️⃣  Remaining Payment on Event Day
    ↓
9️⃣  Setup & Delivery
```

---

## 🔐 Technical Implementation

### **1. User Authentication**

```typescript
// Recommendations:
- Email/Password (local database)
- Google OAuth (easy for young customers)
- Phone Number OTP (for SMEs)

Database Schema:
├── users
│   ├── id (UUID)
│   ├── email
│   ├── phone
│   ├── name
│   ├── avatar
│   ├── createdAt
│   └── tier (free/student/premium)
│
├── projects
│   ├── id
│   ├── userId
│   ├── type (recording/mix/master/event)
│   ├── status (pending/processing/completed)
│   ├── files (array of uploads)
│   ├── cost
│   ├── dueDate
│   └── notes
│
├── payments
│   ├── id
│   ├── projectId
│   ├── amount
│   ├── status (pending/confirmed/failed)
│   ├── method (qr/bank/cash)
│   └── transactionId
```

---

### **2. QR Code Payment Integration**

**Recommended Services:**

| Service | Advantages | Cost |
|---------|-----------|------|
| **Momo QR** | Phổ biến, nhanh, có thể tự tạo | 0% + Network fee |
| **Zalopay** | Gen QR dynamic, intergrate với Zalo | ~1% |
| **NAPAS** | Bank transfers, chuyên nghiệp | ~0.5% per trans |
| **Stripe/PayPal** | International customers | ~2.9% + $0.30 |

**Recommended Stack:**
```javascript
// Option 1: Momo API (simplest)
- Generate QR code từ Momo dashboard
- Embed QR trong payment page
- Use Momo webhook để confirm payment

// Option 2: Zalopay (best for Zalo integration)
- Use ZaloPay API
- Generate dynamic QR
- Link directly to Zalo notification
- Auto-update project status

// Option 3: Combo (Momo + Bank transfer)
- Momo for individuals
- Direct bank for companies
- Manual confirmation fallback
```

**Implementation Example:**
```vue
<template>
  <div class="payment-section">
    <h2>Thanh Toán {{ totalAmount }}₫</h2>
    
    <!-- Option 1: QR Code -->
    <div class="qr-payment">
      <img :src="momoQrImage" alt="Momo QR" class="qr-code" />
      <p>Quét mã QR để thanh toán</p>
      <small>Hoặc nhập STK: {{ accountNumber }}</small>
    </div>
    
    <!-- Status polling -->
    <div v-if="paymentStatus === 'pending'" class="loading">
      ⏳ Đang xác nhận thanh toán...
    </div>
    <div v-if="paymentStatus === 'confirmed'" class="success">
      ✅ Thanh toán thành công! Project của bạn đã được tạo.
    </div>
  </div>
</template>

<script setup>
const totalAmount = ref(0)
const momoQrImage = ref('')
const paymentStatus = ref('pending')

onMounted(async () => {
  // Call API to generate Momo QR
  const qrData = await generateMomoQR(totalAmount.value)
  momoQrImage.value = qrData.qrImage
  
  // Poll for payment confirmation
  const checkPayment = setInterval(async () => {
    const result = await checkPaymentStatus(qrData.orderId)
    if (result.paid) {
      paymentStatus.value = 'confirmed'
      clearInterval(checkPayment)
      // Create project in database
      await createProject()
    }
  }, 3000) // Check every 3 seconds
})
</script>
```

---

### **3. Zalo Official Account Integration**

**Why Zalo?**
- ✅ Vietnamese market leader (80M users)
- ✅ Instant chat notifications
- ✅ Can send order confirmations
- ✅ Free tier available
- ✅ High response rates

**Setup Guide:**
```
1. Register Zalo Official Account
   → https://zalooa.zalo.me/

2. Get API Keys
   → Zalo Developer Portal → Create App

3. Setup Webhook
   → Receive messages → Send replies
   → Send notifications (order updates)

4. Integration Points:
   a) Payment Confirmation Message
      "Thanh toán thành công! Dự án của bạn đã được tạo."
   
   b) Project Status Update
      "Dự án của bạn đã vào quá trình xử lý. ETA: 5 ngày"
   
   c) Ready for Pickup
      "Tác phẩm của bạn đã hoàn thành! Tải tại: [link]"
   
   d) Customer Support Chat
      "Cần hỗ trợ? Chat với team XKStudio"
```

**Example Zalo Message Flow:**
```
Customer: "Tôi muốn mix master 3 bài hát"
         (via Zalo)
         ↓
Bot Auto-Reply: "Cảm ơn bạn! Tôi đã tạo dự án cho bạn.
                 Vui lòng thanh toán: [QR image]
                 Hoặc click: https://xkproduction.com/pay/order_123"
         ↓
Customer scans QR → Pay
         ↓
Webhook confirms payment
         ↓
Bot sends: "✅ Thanh toán xác nhận!
            Team chúng tôi sẽ bắt đầu work ngay.
            Status dự án: https://xkproduction.com/project/123"
         ↓
(3 days later)
Bot: "📬 Draft đã sẵn sàng!
      Nghe preview: [audio link]
      Feedback: reply tin nhắn này"
         ↓
Customer replies with revisions
         ↓
Bot: "🎵 Phiên bản final đã hoàn thành!
      Download: [download link]
      Cảm ơn bạn đã tin tưởng XKStudio!"
```

---

### **4. Booking Calendar (Lịch Đặt)**

**Recommended Solutions:**
- **Calendly** (embed free tier)
- **Cal.com** (open source, self-hosted)
- **Acuity Scheduling** (professional)

**What customer should see:**
```
[ Chọn Ngày ]
Mon 01  ✓ (3 slots)
Tue 02  ✓ (2 slots)
Wed 03  ✗ (Full)
Thu 04  ✓ (4 slots)

[ Chọn Giờ ]
09:00 - 12:00  ✓
12:00 - 15:00  ✓
15:00 - 18:00  ✗ (founder unavailable)
18:00 - 21:00  ✓

[ Booking Details ]
Service: Thu Âm Vocal
Duration: 3 hours
Price: 500,000₫
Staff: Nguyễn Xuân Kiệt (hoặc có AI matching)
```

---

## 🌍 Geographic & SEO Strategy

### **Current Situation:**
- Based: Bình Phước (Đồng Nai cũ)
- Moving: TP. HCM (in 3 months)

### **SEO Recommendations:**

```markdown
## Phase 1: NOW (Bình Phước Focus)
- Keyword focus: "Phòng thu âm Bình Phước", "mix master Bình Phước"
- Local SEO: Google Business Profile
  - Address: [Current Studio Address in Bình Phước]
  - Service area: Bình Phước, Đồng Nai, TP.HCM
- Content: "Why choose studio in Bình Phước?"
  - Advantage: Quieter, cheap, quality equal to HCM

## Phase 2: TRANSITION (Month 2-3)
- Prepare content for HCM move
- Keyword prep: "Phòng thu âm Hồ Chí Minh", "Studio gần Q1/Q3"
- New address ready

## Phase 3: POST-MOVE (HCM Launch)
- Update all business locations
- New Google Business Profile (HCM address)
- New content: "Why XKStudio moved to HCM"
- Local SEO for HCM (Q1/Q3 targeting)
```

### **Geo-targeted Content Plan:**

```
Blog Articles:
1. "Chuyên gia âm nhạc ở Bình Phước: Câu chuyện XKStudio"
2. "Mix Master chuẩn quốc tế: Không cần đi TP.HCM"
3. "Studio ở Đồng Nai: Tại sao chất lượng = HCM?"
4. (Month 3) "XKStudio chính thức mở tại TP.HCM"
5. (Month 3) "Phòng thu âm Hồ Chí Minh: Dễ tiếp cận"
```

### **Local SEO Checklist:**

- [ ] Google Business Profile (Bình Phước address)
- [ ] Google Business Profile (prepare HCM address)
- [ ] Bing Places listing
- [ ] Apple Maps listing
- [ ] Local keywords in page content
- [ ] City-specific schema markup
- [ ] Cửa hàng Google Shopping (optional)
- [ ] Local link building (partner studios, music schools)

---

## 📊 Expected Metrics & Timeline

### **Phase 1: Web Enhancement (Month 1)**
- [ ] Login/Signup system live
- [ ] QR payment integration
- [ ] Zalo chatbot setup
- [ ] Booking calendar embed
- **Expected**: +20% inquiries

### **Phase 2: SEO Boost (Month 2)**
- [ ] Blog content (3+ articles)
- [ ] Local SEO optimization
- [ ] Schema markup improvements
- **Expected**: +50% organic traffic

### **Phase 3: HCM Move Execution (Month 3)**
- [ ] Update all business locations
- [ ] Launch HCM-specific campaign
- [ ] Local backlinks
- **Expected**: +100% visibility in HCM

---

## 🎁 Bonus: Additional Revenue Streams

Once payment system is live, consider:

1. **Online Courses** - Mixing/Mastering tutorials (499K-2M)
2. **Producer Packs** - Sample libraries, presets (99K-299K)
3. **Consultation Service** - 1-on-1 coaching (1K/min)
4. **Merchandise** - Branded gear (limited edition)
5. **Affiliate Program** - Recommend gear, earn 10%

---

## 💡 Final Recommendations

### **Quick Wins (Week 1-2)**
1. ✅ Improve Navbar (DONE - see Navbar updates)
2. ✅ Update SEO descriptions (DONE)
3. ⚠️ Add "Login" button to Navbar
4. ⚠️ Create /auth/login page
5. ⚠️ Integrate Calendly widget

### **Medium Term (Month 1)**
6. Setup Momo QR or Zalopay
7. Build project dashboard
8. Zalo Official Account setup

### **Long Term (Month 2-3)**
9. Full payment system
10. HCM transition
11. Advanced analytics

---

**Questions? Contact:** xkstudio29@gmail.com  
**Timeline:** 3 months to full system  
**Budget Estimate:** 5-15 triệu VND (depending on custom work)

---

*Document Version: 1.0 | Last Updated: 01/05/2026*
