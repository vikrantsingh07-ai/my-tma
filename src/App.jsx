import { useState } from "react";

// ============================================================
// MOCK DATA — In real app this comes from your backend API
// ============================================================
const COURSE = {
  id: 1,
  title: "Build Your First SaaS",
  subtitle: "From idea to paying customers in 30 days",
  price: 50, // Telegram Stars
  author: "Amara Osei",
  duration: "5 lessons · ~45 min read",
  cover: "📦",
  description:
    "A practical, no-fluff guide to validating, building, and launching a SaaS product. Written for builders who want traction fast.",
  lessons: [
    {
      id: 1,
      title: "Why Most Ideas Die Before Launch",
      duration: "8 min",
      free: true,
      content: `Every week someone has a "million dollar idea." Most never ship it.

The reason isn't lack of skill or money. It's **validation paralysis** — the endless cycle of planning without testing.

## The 3-Day Rule

If you can't describe your customer's pain in one sentence within 3 days of having the idea, move on. Here's how to do it fast:

**Step 1: Write the problem sentence**
"[Target customer] struggle with [specific problem] because [root cause]."

Example: "Freelance designers struggle with chasing invoices because clients treat payment as optional."

**Step 2: Find 5 people with that problem**
Not friends. Not family. Real strangers from Twitter, Reddit, or Facebook groups. DM them. Ask: "Does this resonate with you?"

**Step 3: If 3 of 5 say yes — you have signal.**
That's enough to move to the next step. You're not looking for certainty. You're looking for signal.

## The Trap to Avoid

Don't ask "would you use this?" People lie. Instead ask: "How do you solve this today?" and "How much does that cost you in time or money?"

Their current workaround IS your competitor. Understanding it is your unfair advantage.`,
    },
    {
      id: 2,
      title: "The One-Page Business Model",
      duration: "7 min",
      free: false,
      content: `Before writing a single line of code, you need one page that answers four questions.

## The Four Questions

**1. Who has the problem?**
Be specific. Not "small businesses" — try "solo consultants billing under $10k/month."

**2. What do they do about it today?**
Spreadsheets? Hiring someone? Just ignoring it? This is your current competition.

**3. What's your unfair advantage?**
Speed? Domain expertise? A unique distribution channel? If you don't have one yet, find one before building.

**4. How do you make $1 from this?**
Not $1 million. One dollar. Describe the exact transaction. Who pays, what they get, how much.

## Why This Works

Most founders skip this and spend 6 months building before asking "will anyone pay?" This one page forces you to confront that question on day one.

Print it. Tape it to your wall. Every feature you consider building should answer to one of these four questions.`,
    },
    {
      id: 3,
      title: "Build the Ugly Version First",
      duration: "9 min",
      free: false,
      content: `Your first version should embarrass you slightly. That's the goal.

## What "Ugly Version" Means

Not buggy. Not broken. Just unpolished. No animations. Basic typography. Forms that work. Buttons that do things.

Think of it as a functional prototype that you charge real money for.

## The Speed Stack

For solo founders, this stack ships in under a week:

- **Frontend**: React + Tailwind (or just HTML/CSS)
- **Backend**: Supabase (auth + database for free)
- **Payments**: Stripe (set up in an afternoon)
- **Hosting**: Vercel (deploy in minutes)

That's it. No microservices. No Docker. No Kubernetes. Add complexity only when a real problem forces you to.

## The Rule of Three

Build only features that do one of three things:
1. Get users to sign up
2. Get users to pay
3. Get users to come back

If a feature doesn't serve one of these, cut it. You can always add it in v2 — if users ask for it.`,
    },
    {
      id: 4,
      title: "Getting Your First 10 Customers",
      duration: "10 min",
      free: false,
      content: `Ten customers changes everything. Here's the playbook.

## Don't Launch. Sell.

"Launching" on Product Hunt before you have 10 paying customers is a vanity exercise. Instead, do this:

**Week 1: Manual outreach**
Write 50 personalized DMs to people who match your ideal customer profile. Not copy-paste. Personalized. Reference something specific about them.

Conversion rate: ~2-4 people will reply. That's normal.

**Week 2: Offer to solve their problem for free**
Yes, free. Do it manually if you have to. Watch how they use your solution. Take notes obsessively.

**Week 3: Ask for money**
"I've been helping you with [X] manually. I've built a tool that does this automatically. It's $[price]/month. Want in?"

## Why This Feels Wrong (But Isn't)

This approach feels too slow, too manual, not scalable. Good. You're not trying to scale yet. You're trying to learn.

Every founder who skipped this step either failed or had to come back and do it anyway — but later, when fixing the mistakes cost more.

Your first 10 customers will tell you more than 1,000 survey responses.`,
    },
    {
      id: 5,
      title: "From $0 to $1,000 MRR: The Exact Steps",
      duration: "11 min",
      free: false,
      content: `$1,000 MRR is the first real milestone. Here's how it maps out.

## The Math

At $49/month: you need 21 customers.
At $99/month: you need 11 customers.
At $199/month: you need 6 customers.

Price higher than you think you should. Cheap pricing attracts bad customers and burns out founders.

## Month 1: The Foundation

- 10 customers via manual outreach (previous lesson)
- Weekly calls with each of them
- Fix the 3 most painful bugs they find
- Add the 1 feature 5+ of them ask for

## Month 2: The Flywheel

- Ask your 10 customers for referrals. Offer 1 free month for each referral that converts.
- Write one piece of content per week about the problem you solve
- Post it where your customers hang out (Reddit, LinkedIn, specific Slack groups)

## Month 3: The Crossing

- You now have enough signal to know what's working
- Double down on the acquisition channel that's converting best
- Cut everything else

## The Mindset Shift

At $1k MRR, the question changes from "will this work?" to "how do I make this 10x bigger?" That mindset shift is worth more than any tactic.

You've validated the hypothesis. Now you build.`,
    },
  ],
};

// ============================================================
// MOCK USER STATE — In real app this comes from Telegram SDK
// ============================================================
const MOCK_USER = {
  id: 123456789,
  name: "Alex",
  avatar: "🧑‍💻",
};

// ============================================================
// STYLES — Telegram-native feel with warm editorial aesthetic
// ============================================================
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0f0f0f;
    --surface: #1a1a1a;
    --surface2: #242424;
    --border: #2e2e2e;
    --gold: #e8c84a;
    --gold-dim: #c9a93a;
    --text: #f0ece4;
    --text-muted: #8a8480;
    --text-dim: #5a5652;
    --green: #4ade80;
    --red: #f87171;
    --radius: 14px;
    --radius-sm: 8px;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    max-width: 430px;
    margin: 0 auto;
    overflow-x: hidden;
  }

  .app { padding-bottom: 80px; }

  /* NAV */
  .bottom-nav {
    position: fixed;
    bottom: 0; left: 50%;
    transform: translateX(-50%);
    width: 100%; max-width: 430px;
    background: rgba(15,15,15,0.95);
    backdrop-filter: blur(20px);
    border-top: 1px solid var(--border);
    display: flex;
    z-index: 100;
    padding: 8px 0 12px;
  }
  .nav-item {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; gap: 4px;
    cursor: pointer; padding: 6px 0;
    background: none; border: none; color: var(--text-dim);
    font-family: 'DM Sans', sans-serif;
    font-size: 11px; font-weight: 500;
    transition: color 0.15s;
  }
  .nav-item.active { color: var(--gold); }
  .nav-icon { font-size: 20px; line-height: 1; }

  /* HOME SCREEN */
  .home-header {
    padding: 24px 20px 0;
    display: flex; justify-content: space-between; align-items: flex-start;
  }
  .greeting { font-size: 13px; color: var(--text-muted); font-weight: 400; }
  .greeting strong { display: block; font-size: 22px; color: var(--text); font-family: 'Lora', serif; font-weight: 700; margin-top: 2px; }
  .streak-badge {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 6px 12px;
    font-size: 12px; color: var(--text-muted);
    display: flex; align-items: center; gap: 5px;
  }

  .section-label {
    font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
    color: var(--text-dim); text-transform: uppercase;
    padding: 24px 20px 12px;
  }

  /* COURSE CARD */
  .course-card {
    margin: 0 20px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.15s, border-color 0.15s;
    active: scale(0.98);
  }
  .course-card:active { transform: scale(0.98); }
  .course-card-cover {
    background: linear-gradient(135deg, #1e1a0e 0%, #2a2210 50%, #1a1505 100%);
    border-bottom: 1px solid var(--border);
    padding: 32px 24px;
    display: flex; align-items: center; gap: 16px;
    position: relative; overflow: hidden;
  }
  .course-card-cover::before {
    content: '';
    position: absolute; top: -40px; right: -40px;
    width: 140px; height: 140px;
    background: radial-gradient(circle, rgba(232,200,74,0.15) 0%, transparent 70%);
    border-radius: 50%;
  }
  .course-emoji { font-size: 52px; line-height: 1; }
  .course-card-meta { flex: 1; }
  .course-tag {
    display: inline-block;
    background: rgba(232,200,74,0.15);
    color: var(--gold);
    border: 1px solid rgba(232,200,74,0.3);
    border-radius: 4px;
    font-size: 10px; font-weight: 600; letter-spacing: 0.06em;
    text-transform: uppercase; padding: 3px 8px; margin-bottom: 8px;
  }
  .course-card-title {
    font-family: 'Lora', serif;
    font-size: 18px; font-weight: 700;
    color: var(--text); line-height: 1.3;
  }
  .course-card-body { padding: 16px 20px 20px; }
  .course-desc { font-size: 13px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px; }
  .course-stats {
    display: flex; gap: 16px; margin-bottom: 16px;
  }
  .stat { font-size: 12px; color: var(--text-dim); display: flex; align-items: center; gap: 4px; }
  .course-footer { display: flex; align-items: center; justify-content: space-between; }
  .price-tag {
    display: flex; align-items: center; gap: 6px;
  }
  .price-star { font-size: 16px; }
  .price-amount { font-size: 22px; font-weight: 700; color: var(--gold); font-family: 'Lora', serif; }
  .price-label { font-size: 11px; color: var(--text-dim); }
  .btn-primary {
    background: var(--gold);
    color: #0f0f0f;
    border: none; border-radius: var(--radius-sm);
    font-family: 'DM Sans', sans-serif;
    font-size: 13px; font-weight: 600;
    padding: 10px 20px; cursor: pointer;
    transition: background 0.15s, transform 0.1s;
  }
  .btn-primary:active { transform: scale(0.96); background: var(--gold-dim); }
  .btn-outline {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    font-family: 'DM Sans', sans-serif;
    font-size: 13px; font-weight: 500;
    padding: 10px 20px; cursor: pointer;
    transition: border-color 0.15s, transform 0.1s;
  }
  .btn-outline:active { transform: scale(0.96); border-color: var(--gold); }

  /* FREE PREVIEW STRIP */
  .free-strip {
    margin: 16px 20px 0;
    background: rgba(74,222,128,0.08);
    border: 1px solid rgba(74,222,128,0.2);
    border-radius: var(--radius-sm);
    padding: 10px 14px;
    font-size: 12px; color: var(--green);
    display: flex; align-items: center; gap: 8px;
  }

  /* LESSONS SCREEN */
  .screen-header {
    padding: 20px 20px 16px;
    border-bottom: 1px solid var(--border);
  }
  .back-btn {
    background: none; border: none;
    color: var(--gold); font-family: 'DM Sans', sans-serif;
    font-size: 13px; font-weight: 500; cursor: pointer;
    padding: 0; display: flex; align-items: center; gap: 4px;
    margin-bottom: 12px;
  }
  .screen-title {
    font-family: 'Lora', serif;
    font-size: 20px; font-weight: 700; line-height: 1.3;
    margin-bottom: 4px;
  }
  .screen-subtitle { font-size: 13px; color: var(--text-muted); }

  /* PROGRESS BAR */
  .progress-wrap { padding: 16px 20px; border-bottom: 1px solid var(--border); }
  .progress-label { font-size: 12px; color: var(--text-muted); margin-bottom: 8px; display: flex; justify-content: space-between; }
  .progress-track { height: 4px; background: var(--surface2); border-radius: 2px; overflow: hidden; }
  .progress-fill { height: 100%; background: var(--gold); border-radius: 2px; transition: width 0.4s ease; }

  /* LESSON LIST */
  .lesson-list { padding: 8px 0; }
  .lesson-item {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 20px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.1s;
  }
  .lesson-item:active { background: var(--surface); }
  .lesson-item.locked { opacity: 0.5; cursor: default; }
  .lesson-num {
    width: 32px; height: 32px; border-radius: 50%;
    background: var(--surface2); border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 600; color: var(--text-muted);
    flex-shrink: 0;
  }
  .lesson-num.done { background: rgba(74,222,128,0.15); border-color: rgba(74,222,128,0.3); color: var(--green); }
  .lesson-num.active-num { background: rgba(232,200,74,0.15); border-color: rgba(232,200,74,0.3); color: var(--gold); }
  .lesson-info { flex: 1; }
  .lesson-title { font-size: 14px; font-weight: 500; color: var(--text); margin-bottom: 2px; }
  .lesson-dur { font-size: 11px; color: var(--text-dim); }
  .lesson-badge {
    font-size: 10px; font-weight: 600; letter-spacing: 0.04em;
    padding: 3px 7px; border-radius: 4px; flex-shrink: 0;
  }
  .badge-free { background: rgba(74,222,128,0.1); color: var(--green); border: 1px solid rgba(74,222,128,0.2); }
  .badge-lock { background: var(--surface2); color: var(--text-dim); border: 1px solid var(--border); font-size: 14px; }

  /* PAYWALL BANNER */
  .paywall-banner {
    margin: 16px 20px;
    background: linear-gradient(135deg, #1e1a0e, #2a2210);
    border: 1px solid rgba(232,200,74,0.25);
    border-radius: var(--radius);
    padding: 20px;
  }
  .paywall-title { font-family: 'Lora', serif; font-size: 17px; font-weight: 700; margin-bottom: 6px; }
  .paywall-desc { font-size: 13px; color: var(--text-muted); margin-bottom: 16px; line-height: 1.5; }
  .paywall-price { display: flex; align-items: baseline; gap: 6px; margin-bottom: 14px; }
  .paywall-amount { font-size: 28px; font-weight: 700; color: var(--gold); font-family: 'Lora', serif; }
  .paywall-currency { font-size: 13px; color: var(--text-muted); }

  /* LESSON READER */
  .reader-header {
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    display: flex; align-items: center; justify-content: space-between;
  }
  .reader-body { padding: 24px 20px; }
  .reader-title {
    font-family: 'Lora', serif;
    font-size: 22px; font-weight: 700;
    line-height: 1.35; margin-bottom: 20px;
    color: var(--text);
  }
  .reader-content { font-size: 15px; line-height: 1.75; color: #c8c4bc; }
  .reader-content p { margin-bottom: 16px; }
  .reader-content h2 {
    font-family: 'Lora', serif; font-size: 17px; font-weight: 700;
    color: var(--text); margin: 24px 0 10px;
  }
  .reader-content strong { color: var(--text); font-weight: 600; }
  .reader-content em { font-style: italic; color: var(--text-muted); }
  .reader-nav {
    display: flex; gap: 10px;
    padding: 16px 20px 24px;
    border-top: 1px solid var(--border);
  }
  .reader-nav button { flex: 1; }
  .done-chip {
    display: inline-flex; align-items: center; gap: 5px;
    background: rgba(74,222,128,0.1);
    border: 1px solid rgba(74,222,128,0.25);
    color: var(--green); font-size: 11px; font-weight: 600;
    padding: 4px 10px; border-radius: 20px;
  }

  /* PROFILE SCREEN */
  .profile-header {
    padding: 32px 20px 24px;
    display: flex; align-items: center; gap: 16px;
    border-bottom: 1px solid var(--border);
  }
  .avatar {
    width: 60px; height: 60px; border-radius: 50%;
    background: var(--surface2); border: 2px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-size: 28px;
  }
  .profile-name { font-family: 'Lora', serif; font-size: 20px; font-weight: 700; }
  .profile-sub { font-size: 12px; color: var(--text-muted); margin-top: 3px; }
  .stats-row {
    display: grid; grid-template-columns: 1fr 1fr 1fr;
    gap: 1px; background: var(--border);
    border-bottom: 1px solid var(--border);
  }
  .stat-box {
    background: var(--bg); padding: 18px 12px;
    text-align: center;
  }
  .stat-value { font-size: 22px; font-weight: 700; font-family: 'Lora', serif; color: var(--gold); }
  .stat-key { font-size: 11px; color: var(--text-dim); margin-top: 3px; }
  .enrolled-section { padding: 20px; }
  .enrolled-title { font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.06em; }
  .enrolled-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 14px 16px;
    display: flex; align-items: center; gap: 12px;
  }
  .enrolled-emoji { font-size: 28px; }
  .enrolled-info { flex: 1; }
  .enrolled-name { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
  .enrolled-prog { font-size: 12px; color: var(--text-muted); }
  .mini-progress { height: 3px; background: var(--surface2); border-radius: 2px; margin-top: 8px; overflow: hidden; }
  .mini-fill { height: 100%; background: var(--gold); border-radius: 2px; }
  .empty-state {
    text-align: center; padding: 40px 20px;
    color: var(--text-dim); font-size: 14px; line-height: 1.6;
  }
  .empty-state .empty-icon { font-size: 40px; margin-bottom: 12px; }

  /* PAYMENT MODAL */
  .modal-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(8px);
    display: flex; align-items: flex-end;
    z-index: 200;
    animation: fadeIn 0.2s ease;
  }
  @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
  .modal-sheet {
    background: var(--surface);
    border-top: 1px solid var(--border);
    border-radius: 20px 20px 0 0;
    width: 100%; padding: 24px 20px 40px;
    animation: slideUp 0.3s cubic-bezier(0.32, 0.72, 0, 1);
  }
  @keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
  .modal-handle { width: 36px; height: 4px; background: var(--border); border-radius: 2px; margin: 0 auto 24px; }
  .modal-title { font-family: 'Lora', serif; font-size: 20px; font-weight: 700; margin-bottom: 6px; }
  .modal-desc { font-size: 13px; color: var(--text-muted); margin-bottom: 24px; line-height: 1.5; }
  .modal-what {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 14px 16px; margin-bottom: 20px;
  }
  .modal-what-title { font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-dim); margin-bottom: 10px; }
  .modal-what-item { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--text-muted); margin-bottom: 6px; }
  .check { color: var(--green); font-size: 14px; }
  .modal-price-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
  .modal-price-label { font-size: 14px; color: var(--text-muted); }
  .modal-price-val { font-size: 24px; font-weight: 700; color: var(--gold); font-family: 'Lora', serif; }
  .btn-pay {
    width: 100%; background: var(--gold);
    color: #0f0f0f; border: none; border-radius: var(--radius-sm);
    font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 700;
    padding: 16px; cursor: pointer;
    transition: background 0.15s, transform 0.1s;
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
  .btn-pay:active { transform: scale(0.98); background: var(--gold-dim); }
  .btn-cancel {
    width: 100%; background: none; border: none;
    color: var(--text-muted); font-family: 'DM Sans', sans-serif;
    font-size: 14px; padding: 14px; cursor: pointer; margin-top: 4px;
  }
  .paying-state { text-align: center; padding: 20px 0; }
  .paying-spinner { font-size: 32px; animation: spin 1s linear infinite; display: inline-block; margin-bottom: 12px; }
  @keyframes spin { to { transform: rotate(360deg) } }
  .paying-text { font-size: 14px; color: var(--text-muted); }
  .success-state { text-align: center; padding: 20px 0; }
  .success-icon { font-size: 48px; margin-bottom: 12px; }
  .success-title { font-family: 'Lora', serif; font-size: 20px; font-weight: 700; margin-bottom: 8px; }
  .success-desc { font-size: 14px; color: var(--text-muted); margin-bottom: 24px; }
`;

// ============================================================
// RENDER MARKDOWN-LIKE CONTENT
// ============================================================
function renderContent(text) {
  return text.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return <h2 key={i}>{block.replace("## ", "")}</h2>;
    }
    const html = block
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>");
    return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

// ============================================================
// PAYMENT MODAL
// ============================================================
function PaymentModal({ course, onClose, onSuccess }) {
  const [state, setState] = useState("idle"); // idle | paying | success

  const handlePay = () => {
    setState("paying");
    // Simulate Telegram Stars payment (real: window.Telegram.WebApp.openInvoice)
    setTimeout(() => setState("success"), 2200);
  };

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-sheet">
        <div className="modal-handle" />
        {state === "idle" && (
          <>
            <div className="modal-title">Unlock Full Course</div>
            <div className="modal-desc">One-time payment. Yours forever.</div>
            <div className="modal-what">
              <div className="modal-what-title">What you get</div>
              {["5 in-depth lessons", "Practical frameworks & templates", "Lifetime access", "Future updates included"].map((item) => (
                <div key={item} className="modal-what-item">
                  <span className="check">✓</span> {item}
                </div>
              ))}
            </div>
            <div className="modal-price-row">
              <span className="modal-price-label">Total</span>
              <span className="modal-price-val">⭐ {course.price} Stars</span>
            </div>
            <button className="btn-pay" onClick={handlePay}>
              ⭐ Pay {course.price} Telegram Stars
            </button>
            <button className="btn-cancel" onClick={onClose}>Cancel</button>
          </>
        )}
        {state === "paying" && (
          <div className="paying-state">
            <div className="paying-spinner">⭐</div>
            <div className="paying-text">Processing your payment...</div>
          </div>
        )}
        {state === "success" && (
          <div className="success-state">
            <div className="success-icon">🎉</div>
            <div className="success-title">You're in!</div>
            <div className="success-desc">All lessons are now unlocked. Start learning.</div>
            <button className="btn-pay" onClick={onSuccess}>Start Learning →</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// SCREEN: HOME
// ============================================================
function HomeScreen({ user, enrolled, onViewCourse, onBuy }) {
  return (
    <div>
      <div className="home-header">
        <div className="greeting">
          Good morning,
          <strong>Hey {user.name} {user.avatar}</strong>
        </div>
        <div className="streak-badge">🔥 3 day streak</div>
      </div>

      <div className="section-label">Featured Course</div>

      <div className="course-card" onClick={() => onViewCourse()}>
        <div className="course-card-cover">
          <div className="course-emoji">{COURSE.cover}</div>
          <div className="course-card-meta">
            <div className="course-tag">Entrepreneurship</div>
            <div className="course-card-title">{COURSE.title}</div>
          </div>
        </div>
        <div className="course-card-body">
          <div className="course-desc">{COURSE.description}</div>
          <div className="course-stats">
            <div className="stat">📖 {COURSE.lessons.length} lessons</div>
            <div className="stat">⏱ ~45 min</div>
            <div className="stat">✍️ {COURSE.author}</div>
          </div>
          <div className="course-footer">
            <div className="price-tag">
              <span className="price-star">⭐</span>
              <div>
                <div className="price-amount">{COURSE.price}</div>
                <div className="price-label">Telegram Stars</div>
              </div>
            </div>
            {enrolled
              ? <button className="btn-outline" onClick={(e) => { e.stopPropagation(); onViewCourse(); }}>Continue →</button>
              : <button className="btn-primary" onClick={(e) => { e.stopPropagation(); onBuy(); }}>Buy Course</button>
            }
          </div>
        </div>
      </div>

      <div className="free-strip">
        <span>👁</span>
        <span>First lesson is free — no payment needed to preview</span>
      </div>
    </div>
  );
}

// ============================================================
// SCREEN: LESSON LIST
// ============================================================
function LessonListScreen({ enrolled, completedIds, onBack, onSelectLesson, onBuy }) {
  const completedCount = completedIds.length;
  const pct = Math.round((completedCount / COURSE.lessons.length) * 100);

  return (
    <div>
      <div className="screen-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <div className="screen-title">{COURSE.title}</div>
        <div className="screen-subtitle">{COURSE.author} · {COURSE.duration}</div>
      </div>

      {enrolled && (
        <div className="progress-wrap">
          <div className="progress-label">
            <span>Your progress</span>
            <span>{completedCount}/{COURSE.lessons.length} lessons</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
      )}

      {!enrolled && (
        <div className="paywall-banner">
          <div className="paywall-title">Unlock All 5 Lessons</div>
          <div className="paywall-desc">First lesson is free. Pay once to access everything — no subscription.</div>
          <div className="paywall-price">
            <span className="paywall-amount">⭐ {COURSE.price}</span>
            <span className="paywall-currency">Telegram Stars · one-time</span>
          </div>
          <button className="btn-primary" onClick={onBuy} style={{ width: "100%" }}>
            Buy Full Access
          </button>
        </div>
      )}

      <div className="lesson-list">
        {COURSE.lessons.map((lesson, idx) => {
          const isAccessible = lesson.free || enrolled;
          const isDone = completedIds.includes(lesson.id);
          return (
            <div
              key={lesson.id}
              className={`lesson-item ${!isAccessible ? "locked" : ""}`}
              onClick={() => isAccessible && onSelectLesson(lesson)}
            >
              <div className={`lesson-num ${isDone ? "done" : idx === completedCount && isAccessible ? "active-num" : ""}`}>
                {isDone ? "✓" : idx + 1}
              </div>
              <div className="lesson-info">
                <div className="lesson-title">{lesson.title}</div>
                <div className="lesson-dur">{lesson.duration}</div>
              </div>
              {lesson.free
                ? <span className="lesson-badge badge-free">FREE</span>
                : !enrolled && <span className="lesson-badge badge-lock">🔒</span>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// SCREEN: LESSON READER
// ============================================================
function LessonReaderScreen({ lesson, lessonIndex, completedIds, onBack, onMarkDone, onNext }) {
  const isDone = completedIds.includes(lesson.id);
  const hasNext = lessonIndex < COURSE.lessons.length - 1;

  return (
    <div>
      <div className="reader-header">
        <button className="back-btn" onClick={onBack}>← Lessons</button>
        {isDone && <span className="done-chip"><span>✓</span> Done</span>}
      </div>
      <div className="reader-body">
        <div className="reader-title">{lesson.title}</div>
        <div className="reader-content">{renderContent(lesson.content)}</div>
      </div>
      <div className="reader-nav">
        {!isDone ? (
          <button className="btn-primary" style={{ flex: 1 }} onClick={() => onMarkDone(lesson.id)}>
            ✓ Mark as Complete
          </button>
        ) : hasNext ? (
          <button className="btn-primary" style={{ flex: 1 }} onClick={onNext}>
            Next Lesson →
          </button>
        ) : (
          <button className="btn-primary" style={{ flex: 1 }} onClick={onBack}>
            🎉 Course Complete!
          </button>
        )}
      </div>
    </div>
  );
}

// ============================================================
// SCREEN: PROFILE
// ============================================================
function ProfileScreen({ user, enrolled, completedIds }) {
  const pct = enrolled ? Math.round((completedIds.length / COURSE.lessons.length) * 100) : 0;
  return (
    <div>
      <div className="profile-header">
        <div className="avatar">{user.avatar}</div>
        <div>
          <div className="profile-name">{user.name}</div>
          <div className="profile-sub">Telegram learner · joined today</div>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-box">
          <div className="stat-value">{enrolled ? 1 : 0}</div>
          <div className="stat-key">Enrolled</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">{completedIds.length}</div>
          <div className="stat-key">Lessons done</div>
        </div>
        <div className="stat-box">
          <div className="stat-value">{pct}%</div>
          <div className="stat-key">Progress</div>
        </div>
      </div>

      <div className="enrolled-section">
        <div className="enrolled-title">My Courses</div>
        {enrolled ? (
          <div className="enrolled-card">
            <div className="enrolled-emoji">{COURSE.cover}</div>
            <div className="enrolled-info">
              <div className="enrolled-name">{COURSE.title}</div>
              <div className="enrolled-prog">{completedIds.length} of {COURSE.lessons.length} lessons · {pct}%</div>
              <div className="mini-progress">
                <div className="mini-fill" style={{ width: `${pct}%` }} />
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📚</div>
            <div>No courses yet.<br />Buy a course to start learning.</div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// ROOT APP
// ============================================================
export default function App() {
  const [screen, setScreen] = useState("home"); // home | lessons | reader | profile
  const [enrolled, setEnrolled] = useState(false);
  const [completedIds, setCompletedIds] = useState([]);
  const [activeLesson, setActiveLesson] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const activeLessonIndex = activeLesson
    ? COURSE.lessons.findIndex((l) => l.id === activeLesson.id)
    : 0;

  const handleMarkDone = (id) => {
    if (!completedIds.includes(id)) setCompletedIds((p) => [...p, id]);
  };

  const handleNextLesson = () => {
    const next = COURSE.lessons[activeLessonIndex + 1];
    if (next) setActiveLesson(next);
  };

  const handlePaySuccess = () => {
    setEnrolled(true);
    setShowPayment(false);
    setScreen("lessons");
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        {screen === "home" && (
          <HomeScreen
            user={MOCK_USER}
            enrolled={enrolled}
            onViewCourse={() => setScreen("lessons")}
            onBuy={() => setShowPayment(true)}
          />
        )}
        {screen === "lessons" && (
          <LessonListScreen
            enrolled={enrolled}
            completedIds={completedIds}
            onBack={() => setScreen("home")}
            onSelectLesson={(lesson) => { setActiveLesson(lesson); setScreen("reader"); }}
            onBuy={() => setShowPayment(true)}
          />
        )}
        {screen === "reader" && activeLesson && (
          <LessonReaderScreen
            lesson={activeLesson}
            lessonIndex={activeLessonIndex}
            completedIds={completedIds}
            onBack={() => setScreen("lessons")}
            onMarkDone={handleMarkDone}
            onNext={handleNextLesson}
          />
        )}
        {screen === "profile" && (
          <ProfileScreen
            user={MOCK_USER}
            enrolled={enrolled}
            completedIds={completedIds}
          />
        )}
      </div>

      {/* BOTTOM NAV */}
      <nav className="bottom-nav">
        {[
          { id: "home", icon: "🏠", label: "Home" },
          { id: "lessons", icon: "📖", label: "Courses" },
          { id: "profile", icon: "👤", label: "Profile" },
        ].map((item) => (
          <button
            key={item.id}
            className={`nav-item ${screen === item.id || (screen === "reader" && item.id === "lessons") ? "active" : ""}`}
            onClick={() => setScreen(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {showPayment && (
        <PaymentModal
          course={COURSE}
          onClose={() => setShowPayment(false)}
          onSuccess={handlePaySuccess}
        />
      )}
    </>
  );
}