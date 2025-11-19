import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const { name, email, tel, message } = await req.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '必須項目が未入力です' },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'メールアドレスの形式が正しくありません' },
        { status: 400 },
      );
    }

    const adminEmail = 'entm.neru@gmail.com';
    const fromEmail = 'info@maenokikaku.co.jp'; // SendGrid で認証済み

    // ---- 管理者へ通知メール ----
    await sgMail.send({
      to: adminEmail,
      from: fromEmail,
      subject: '【株式会社前野企画】お問い合わせがありました',
      text: `
【お問い合わせ内容が送信されました】

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
      `.trim(),
    });

    // ---- お客様へ自動返信 ----
    await sgMail.send({
      to: email,
      from: fromEmail,
      subject: '【株式会社前野企画】お問い合わせありがとうございます',
      text: `
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

-----------------------------------
前野企画株式会社
メール: info@maenokikaku.co.jp
-----------------------------------
      `.trim(),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: 'メール送信中にエラーが発生しました' },
      { status: 500 },
    );
  }
}
