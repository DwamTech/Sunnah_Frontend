import {
  FiAlertCircle,
  FiBookOpen,
  FiCheckSquare,
  FiEdit3,
  FiFileText,
  FiLock,
  FiMessageCircle,
  FiUserCheck,
} from "react-icons/fi";
import LegalPage from "../../components/LegalPage/LegalPage";

export const metadata = {
  title: "شروط الأحكام | الهيئة العالمية للسنة النبوية",
  description: "شروط وأحكام استخدام موقع الهيئة العالمية للسنة النبوية.",
};

const sections = [
  {
    id: "introduction",
    title: "مقدمة",
    icon: FiFileText,
    paragraphs: [
      "توضح هذه الشروط الضوابط المنظمة لاستخدام موقع الهيئة العالمية للسنة النبوية وما يقدمه من محتوى علمي ومعرفي وإعلامي.",
      "باستخدام الموقع، يقر المستخدم باطلاعه على هذه الشروط وموافقته على الالتزام بها في حدود الأنظمة المعمول بها.",
    ],
  },
  {
    id: "acceptance",
    title: "القبول بالشروط",
    icon: FiCheckSquare,
    paragraphs: [
      "يُعد استمرارك في تصفح الموقع أو الاستفادة من محتواه قبولًا بهذه الشروط. وإذا لم توافق عليها، فيرجى التوقف عن استخدام الموقع.",
    ],
  },
  {
    id: "content-use",
    title: "استخدام المحتوى",
    icon: FiBookOpen,
    paragraphs: [
      "يُتاح المحتوى للاستخدام الشخصي والتعليمي غير التجاري، مع الالتزام بالأمانة العلمية والإشارة إلى المصدر عند الاقتباس.",
      "لا يجوز إعادة نشر المواد أو تعديلها أو استغلالها تجاريًا دون الحصول على موافقة مسبقة من الهيئة أو صاحب الحق.",
    ],
  },
  {
    id: "intellectual-property",
    title: "الملكية الفكرية",
    icon: FiLock,
    paragraphs: [
      "تعود حقوق تصميم الموقع وشعاراته ونصوصه ومواده الأصلية إلى الهيئة أو الجهات المرخصة لها، وتظل محفوظة وفق الأنظمة ذات الصلة.",
    ],
  },
  {
    id: "responsible-use",
    title: "الاستخدام المسؤول",
    icon: FiUserCheck,
    paragraphs: [
      "يلتزم المستخدم بعدم إساءة استخدام الموقع أو محاولة الإضرار بخدماته أو رفع محتوى مخالف أو استخدام المواد بما يسيء إلى رسالة الهيئة.",
    ],
  },
  {
    id: "accuracy",
    title: "دقة المعلومات",
    icon: FiAlertCircle,
    paragraphs: [
      "تسعى الهيئة إلى تقديم معلومات دقيقة وموثوقة، وقد يتم تحديث بعض المواد أو تصحيحها كلما دعت الحاجة لضمان الجودة العلمية.",
    ],
  },
  {
    id: "updates",
    title: "تعديل الشروط",
    icon: FiEdit3,
    paragraphs: [
      "يجوز تحديث هذه الشروط بما يتوافق مع تطور خدمات الموقع، وتصبح النسخة المنشورة هي المعتمدة من تاريخ إتاحتها.",
    ],
  },
  {
    id: "contact",
    title: "التواصل والاستفسارات",
    icon: FiMessageCircle,
    paragraphs: [
      "يمكن إرسال الاستفسارات المتعلقة بهذه الشروط عبر قنوات التواصل الرسمية التي تعتمدها الهيئة.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="إطار الاستخدام"
      title="شروط الأحكام"
      description="إطار واضح ينظم استخدام المنصة ويحفظ حقوق الهيئة والمستخدمين، بما يضمن تجربة معرفية مسؤولة وآمنة."
      icon={FiFileText}
      sections={sections}
    />
  );
}
