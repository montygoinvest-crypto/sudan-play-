<!-- ملف: config.js -->
<script>
// =============================================
// ملف التهيئة والإعدادات - config.js
// =============================================

// إعدادات التطبيق
const CONFIG = {
    appName: "Sudan Play",
    version: "1.0.0",
    apiUrl: "https://api.sudanplay.com",
    maxFileSize: 5 * 1024 * 1024, // 5MB
    supportedImageTypes: ['image/jpeg', 'image/png', 'image/webp'],
    defaultAppIcon: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop",
    defaultAppImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop"
};

// فئات التطبيقات المتاحة
const APP_CATEGORIES = [
    "أخبار",
    "موسيقى", 
    "تسوق",
    "تعليم",
    "أدوات",
    "ترفيه",
    "رياضة",
    "صحة",
    "سفر"
];

// بيانات التطبيقات - سيتم حفظها في localStorage
let apps = [];

// تهيئة البيانات
function initializeApps() {
    const savedApps = localStorage.getItem('sudanPlayApps');
    if (savedApps) {
        apps = JSON.parse(savedApps);
    } else {
        // بيانات افتراضية
        apps = [
            {
                id: 1,
                name: "سودان نيوز",
                description: "تطبيق متكامل يقدم آخر الأخبار السودانية من مصادر موثوقة. احصل على التحديثات الفورية والأخبار العاجلة في جميع المجالات السياسية والاقتصادية والرياضية.",
                category: "أخبار",
                icon: "https://images.unsplash.com/photo-1586339949216-35c2747cc36c?w=200&h=200&fit=crop",
                image: "https://images.unsplash.com/photo-1556655848-f3a79cc6d4a9?w=400&h=200&fit=crop",
                version: "2.1.0",
                rating: "4.8",
                downloads: 12543,
                size: "15 MB",
                screenshots: [
                    "https://images.unsplash.com/photo-1556655848-f3a79cc6d4a9?w=300&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=600&fit=crop"
                ],
                downloadUrl: "#"
            },
            {
                id: 2, 
                name: "سودان ميوزك",
                description: "أكبر منصة موسيقية سودانية تحتوي على آلاف الأغاني من التراث السوداني والموسيقى المعاصرة. استمع وتحميل ومشاركة أفضل الألحان.",
                category: "موسيقى",
                icon: "https://images.unsplash.com/photo-1571974599782-87624638275f?w=200&h=200&fit=crop",
                image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=200&fit=crop",
                version: "1.5.2", 
                rating: "4.9",
                downloads: 28764,
                size: "28 MB",
                screenshots: [
                    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=600&fit=crop"
                ],
                downloadUrl: "#"
            }
        ];
        saveAppsToStorage();
    }
}

// حفظ البيانات في localStorage
function saveAppsToStorage() {
    localStorage.setItem('sudanPlayApps', JSON.stringify(apps));
}

// الحصول على جميع التطبيقات
function getAllApps() {
    return apps;
}

// الحصول على التطبيقات حسب الفئة
function getAppsByCategory(category) {
    if (category === 'all') return apps;
    return apps.filter(app => app.category === category);
}

// إضافة تطبيق جديد
function addApp(appData) {
    const newApp = {
        id: Date.now(),
        ...appData
    };
    
    apps.push(newApp);
    saveAppsToStorage();
    return newApp;
}

// تحديث تطبيق
function updateApp(id, appData) {
    const index = apps.findIndex(app => app.id === id);
    if (index !== -1) {
        apps[index] = { ...apps[index], ...appData };
        saveAppsToStorage();
        return apps[index];
    }
    return null;
}

// حذف تطبيق
function deleteApp(id) {
    apps = apps.filter(app => app.id !== id);
    saveAppsToStorage();
}

// الحصول على إحصائيات
function getStats() {
    const totalApps = apps.length;
    const totalDownloads = apps.reduce((sum, app) => sum + app.downloads, 0);
    const avgRating = totalApps > 0 ? (apps.reduce((sum, app) => sum + parseFloat(app.rating), 0) / totalApps).toFixed(1) : 0;
    
    return {
        totalApps,
        totalDownloads,
        avgRating
    };
}

// تهيئة البيانات عند تحميل الملف
initializeApps();
</script>
