const chinese = {
  skip: '跳转到正文', navAbout: '关于', navResearch: '研究', navPapers: '论文', navProjects: '项目', navHonors: '荣誉',
  role: '本科生 · 科研与工程实践', university: '武汉大学', school: '物理科学与技术学院', location: '中国 · 武汉',
  profileNote: '理解物理世界，<br>让想法在其中运行。', eyebrow: '物理 × 智能', aboutTitle: '你好，我是华一明。',
  bio1: '我是<strong>武汉大学微电子科学与工程专业</strong>的大三本科生。我关心智能系统如何感知、建模并与物理世界交互。',
  bio2: '目前，我主要研究<strong>占据世界模型与相机—雷达多模态感知</strong>，同时探索面向材料科学的人工智能方法，并开发用于科研、教育与内容创作的智能体工具。',
  interests: '研究兴趣', interestList: '物理 AI <b>·</b> 世界模型 <b>·</b> 多模态感知 <b>·</b> AI for Science',
  researchTitle: '研究方向与项目', hortTopic: '世界模型 · 多模态感知',
  hortDescription: '探索如何将雷达测得的距离与多普勒速度融入视觉场景表征，并将雷达证据与不同预测时距对齐，用于未来三维占据预测。',
  materialsTopic: 'AI for Science · 材料计算', materialsTitle: '二维材料缺陷性质的学习与预测',
  materialsRole: '项目负责人 · 国家级重点支持大学生创新创业训练计划',
  materialsDescription: '研究基于注意力机制的原子结构表征，用于二维材料缺陷性质预测，关注物理结构信息、模型评估与材料筛选。',
  projectCode: '项目代码 ↗', papersTitle: '论文选录', accepted: '已录用', projectsTitle: '从研究到创造',
  projectsIntro: '在人工智能、科学与人的体验之间，把想法做成可以运行的作品。',
  sophosDescription: '基于多智能体的教育动画引擎，将数学与物理概念转化为有步骤、可视化的动态讲解。', sophosRole: '独立开发 · 教育 × AI',
  versoDescription: '串联脚本构思、分镜生成与视频创作的 AI 故事工作流。', codeLink: '代码 ↗',
  synceaTitle: 'Syncea <span lang="zh-CN">共潮生</span>', synceaDescription: '将水母运动视觉感知、生成音乐与可穿戴交互结合的交互装置。',
  synceaAward: '项目负责人 · AdventureX 2026 全场亚军', openSource: '开源工具与社区',
  agentDescription: '面向材料研究的公共数据库检索与证据记录工作流。', gpuDescription: '支持 GPU 预约与结构化输出的命令行工具。',
  openwhuDescription: '武汉大学物理科学与技术学院课程攻略与学习资料共享计划。', honorsTitle: '代表性荣誉',
  honorAdventure: 'AdventureX <strong>全场亚军</strong> · 共潮生',
  honorMilan: '米兰设计周中国高校设计学科师生优秀作品展 <strong>全国决赛二等奖</strong>',
  honorGeek: '北回归线极客节 <strong>最具继续可能奖</strong>',
  honorDouyin: '抖音 AI 创变者计划 <strong>全国决赛三等奖</strong> · 织境 AI',
  honorEth: 'ETHShanghai <strong>Chain for Good 赛道二等奖</strong> · ZK-Flex',
  honorMath: '全国大学生数学建模竞赛 <strong>省级一等奖</strong>',
  honorScholarship: '武汉大学刘道玉创造学习奖 <strong>二等奖</strong>',
  educationTitle: '教育经历', degree: '微电子科学与工程 · 本科', educationDate: '2024 – 至今', footerLocation: '中国 · 武汉', sourceLink: '主页源码 ↗'
};

const translatedElements = [...document.querySelectorAll('[data-i18n]')];
const english = Object.fromEntries(translatedElements.map(element => [element.dataset.i18n, element.innerHTML]));
const languageButton = document.getElementById('language-toggle');
let currentLanguage = 'en';

function setLanguage(language) {
  currentLanguage = language === 'zh' ? 'zh' : 'en';
  const dictionary = currentLanguage === 'zh' ? chinese : english;
  translatedElements.forEach(element => {
    const text = dictionary[element.dataset.i18n];
    if (text !== undefined) element.innerHTML = text;
  });
  document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
  document.title = currentLanguage === 'zh' ? '华一明 · 武汉大学 | Yiming Hua' : 'Yiming Hua · Wuhan University';
  languageButton.setAttribute('aria-label', currentLanguage === 'zh' ? 'Switch to English' : '切换为中文');
  languageButton.setAttribute('aria-pressed', String(currentLanguage === 'zh'));
  document.getElementById('language-label').textContent = currentLanguage === 'zh' ? 'EN' : '中文';
  try { localStorage.setItem('homepage-language', currentLanguage); } catch { /* The page also works without storage. */ }
}

languageButton.addEventListener('click', () => setLanguage(currentLanguage === 'en' ? 'zh' : 'en'));
try { if (localStorage.getItem('homepage-language') === 'zh') setLanguage('zh'); } catch { /* Use English by default. */ }

const navigationLinks = [...document.querySelectorAll('nav a')];
const sections = [...document.querySelectorAll('main > section')];
function updateNavigation() {
  const threshold = 145;
  const current = sections.filter(section => section.getBoundingClientRect().top <= threshold).at(-1) || sections[0];
  const sectionId = current.id === 'education' ? 'honors' : current.id;
  navigationLinks.forEach(link => {
    const active = link.hash === `#${sectionId}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
let scrollScheduled = false;
window.addEventListener('scroll', () => {
  if (scrollScheduled) return;
  scrollScheduled = true;
  requestAnimationFrame(() => { updateNavigation(); scrollScheduled = false; });
}, { passive: true });
updateNavigation();
