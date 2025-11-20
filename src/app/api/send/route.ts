import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// --- SendGrid API キー確認 ---
if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY が設定されていません');
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// --- バリデーション ---
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const errorResponse = (msg: string, status = 400) =>
  NextResponse.json({ ok: false, error: msg }, { status });

// --- メールテンプレート ---
// 管理者通知メール
const adminMailText = (
  name: string,
  email: string,
  tel: string,
  message: string,
) =>
  `
前野企画サイトより新しいお問い合わせがあります。

----------------------------------------
■ 会社名／寺院名
${name}

■ メールアドレス
${email}

■ 電話番号
${tel || '未入力'}

■ お問い合わせ内容
${message}
----------------------------------------

※ このメールはお問い合わせフォームから自動送信されています。
`.trim();

// お客様自動返信
const userMailText = (name: string, message: string) =>
  `
${name} 様

このたびは前野企画サイトのお問い合わせフォームよりご連絡いただき、
誠にありがとうございます。

以下の内容で受け付けいたしました。

-----------------------------
【お問い合わせ内容】
${message}
-----------------------------

担当者より追ってご連絡いたします。
今しばらくお待ちください。

※担当者からのご連絡は「maenokikaku@email.plala.or.jp」から届きます。
　受信設定等で受け取れるようご確認ください。

-----------------------------------
前野企画株式会社
mail: maenokikaku@email.plala.or.jp
-----------------------------------
`.trim();

export async function POST(req: Request) {
  try {
    const { name, email, tel = '', message } = await req.json();

    // --- バリデーション ---
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return errorResponse('必須項目が未入力です');
    }

    if (!isValidEmail(email)) {
      return errorResponse('メールアドレスの形式が正しくありません');
    }

    const fromEmail = 'info@maenokikaku.co.jp';
    const mainAdminEmail = 'maenokikaku@email.plala.or.jp';
    const bccAdminEmail = 'entm.neru@gmail.com';

    // --- 管理者へ ---
    await sgMail.send({
      to: mainAdminEmail,
      bcc: bccAdminEmail,
      from: fromEmail,
      subject: '【株式会社前野企画】お問い合わせがありました',
      text: adminMailText(name, email, tel, message),
    });

    // --- お客様へ自動返信 ---
    await sgMail.send({
      to: email,
      from: fromEmail,
      subject: '【株式会社前野企画】お問い合わせありがとうございます',
      text: userMailText(name, message),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error(e);
    return errorResponse('メール送信中にエラーが発生しました', 500);
  }
}
