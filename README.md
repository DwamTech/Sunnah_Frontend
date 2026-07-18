# الهيئة العالمية للسنة النبوية

موقع عربي متجاوب للهيئة العالمية للسنة النبوية، مبني باستخدام Next.js وTypeScript.

## التقنيات

- Next.js 16
- React 19
- TypeScript
- CSS Modules
- React Icons

## التشغيل محليًا

```bash
npm install
npm run dev
```

ثم افتح:

```text
http://localhost:3000
```

## أوامر المشروع

```bash
npm run dev
npm run build
npm run start
```

## الصفحات

- `/` — الصفحة الرئيسية
- `/terms-and-conditions` — شروط الأحكام
- `/privacy-policy` — سياسة الخصوصية

## هيكل المشروع

```text
src/
├── app/
│   ├── page.tsx
│   ├── terms-and-conditions/page.tsx
│   └── privacy-policy/page.tsx
└── components/
    ├── Header/
    ├── Hero/
    ├── AuthorityNews/
    ├── PublicationsSection/
    ├── ReportsSection/
    ├── VisualsSection/
    ├── ArticlesResearchSection/
    ├── MemberOrganizationsSection/
    ├── AuthorityStatisticsSection/
    ├── LegalPage/
    └── Footer/
```

## التحقق قبل الرفع

```bash
npm install
npm run build
```

لا تُرفع مجلدات `node_modules` أو `.next` إلى المستودع.
