interface Env {
  TELEGRAM_BOT_TOKEN?: string;
  XKPROD_TELEBOT_APIKEY?: string;
  TELEGRAM_CHAT_ID?: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const data = await context.request.json() as {
      name?: string;
      phone?: string;
      email?: string;
      service?: string;
      message?: string;
      source?: string;
    };

    const { name, phone, email, service, message, source } = data;

    if (!name || !phone) {
      return new Response(JSON.stringify({ error: 'Missing name or phone' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const token = context.env.XKPROD_TELEBOT_APIKEY || context.env.TELEGRAM_BOT_TOKEN;
    const chatId = context.env.TELEGRAM_CHAT_ID || '8114595719';

    if (!token || !chatId) {
      return new Response(JSON.stringify({ error: 'Telegram configuration missing on server' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const serviceName = getServiceName(service);
    const origin = source === 'index' ? 'Form Đăng Ký Nhanh (Trang Chủ)' : 'Form Liên Hệ';

    // Format phone number to clean digits for zalo link
    const cleanPhone = phone.replace(/[\.\s\-]/g, '').trim();
    const zaloPhone = cleanPhone.startsWith('0') ? '84' + cleanPhone.substring(1) : cleanPhone;

    const text = `🔥 *YÊU CẦU MỚI TỪ WEBSITE* 🔥
---------------------------------
📍 *Nguồn:* ${origin}
👤 *Khách hàng:* ${name}
📞 *Số điện thoại:* \`${cleanPhone}\`
📧 *Email:* ${email || '(không điền)'}
🛠️ *Dịch vụ:* ${serviceName}
📝 *Lời nhắn:*
_${message || '(không điền)'}_
---------------------------------
💬 [Nhắn Zalo cho khách](https://zalo.me/${zaloPhone})
📞 [Gọi điện ngay](tel:${cleanPhone})`.trim();

    const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
        disable_web_page_preview: true
      })
    });

    if (!telegramRes.ok) {
      const errText = await telegramRes.text();
      return new Response(JSON.stringify({ error: `Telegram API error: ${errText}` }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

function getServiceName(service?: string): string {
  switch (service) {
    case 'thu-am': return 'Thu âm bài hát';
    case 'mixing-mastering': return 'Mixing & Mastering';
    case 'hoa-am': return 'Hoà âm phối khí';
    case 'mv-tvc': return 'Quay MV & TVC';
    case 'live-band': return 'Âm thanh ánh sáng / Live Band';
    case 'khoa-hoc': return 'Khoá học Music Producer';
    case 'other': return 'Khác';
    default: return service || 'Chưa chọn';
  }
}
